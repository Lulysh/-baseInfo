// pages/detail/detail.js
var gData = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentName:"",
    currentSrc:"",
    visible: false
  },


  subscription() {
    if(wx.getStorageSync('openId')){
      this.setData({
        visible: true
      });
    }else{
      wx.navigateTo({
        url: '../login/login',
      })
    }
   
  },

  clear() {
    this.setData({
      visible: false
    });
  },


  pay() {
    const that = this;
    gData.pay(that.data.currentName, (res) => {
      if (res.data.state) {
        that.setData({
          infoList: res.data.data
        });
        gData.globalData.resourceAll = res.data.data;
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      currentName:options.name,
      currentSrc: options.src
    });
    wx.setNavigationBarTitle({
      title: options.name
    })
  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: 'H Maga',
      path: '/pages/home/home',
      imageUrl: '../../images/logo2.jpg'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  }

})