//logs.js
const util = require('../../utils/util.js')
const gData = getApp();
Page({
  data: {
    infoList:null,
    current:null,
    visible:false
  },
  change(e){
    
    this.setData({
      visible: false,
      current:this.data.infoList[e.detail.current]
    });
  },

  finish(e) {
    
  },

  subscription(){
    if(!wx.getStorageSync('openId')){
      wx.navigateTo({
        url: '../login/login',
      })
    }else{
      this.setData({
        visible: true
      });
    }
    
  },

  clear(){
    this.setData({
      visible:false
    });
  },

  jump(){
    var that = this;
    wx.navigateTo({
      url: '../detail/detail?name=' + that.data.current.name + "&src=" + that.data.current.imagePath,
    })
  },

  read(){
    wx.navigateTo({
      url: '../url/url?filePath=' + this.data.current.filePath,
    })
  },

  pay(){
    const that = this;
    gData.pay(that.data.current.name,(res)=>{
      console.log('res',res);
      if (res.data.state){
        // console.log('pay',res.data);
        that.setData({
          infoList:res.data.data
        });
        gData.globalData.resourceAll = res.data.data;
      }
    });
  },
  onReady: function () {
    // wx.setNavigationBarTitle({
    //   title: this.data.infoList[0].name,
    // })
  },
  onHide(){
    this.setData({
      visible:false
    });
  },
  onShow: function () {
    // debugger;
    const homeDataInfo = gData.globalData.resourceAll.slice(0, 3);
    this.setData({
      infoList: homeDataInfo
    });

    

    if(!this.data.current){
      this.setData({
        current: homeDataInfo[0]
      });
    }else{
      const that = this;
      this.setData({
        current:homeDataInfo.filter((item)=>{return item.name === that.data.current.name})[0]
      })
    }

  },

  onShareAppMessage: function (res) {
    return {
      title: 'H Maga',
      path: '/pages/home/home',
      imageUrl: '../../images/logo2.jpg'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  }

})
