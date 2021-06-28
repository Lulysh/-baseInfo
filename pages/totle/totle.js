// pages/totle/totle.js
const globalData = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: false,
    totleData: null,
    currentName:'',
    currentSrc:''
  },

  jump(e) {
    // debugger;
    const that = this;
    wx.navigateTo({
      url: '../detail/detail?name=' + e.currentTarget.dataset.name + "&src=" + e.currentTarget.dataset.src,
    })
  },

  read(e) {
   
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../url/url?filePath='+ url,
    })
  },

  subscription(e) {
    this.setData({
      currentName:e.currentTarget.dataset.name,
      currentSrc:e.currentTarget.dataset.src
    });
    if (!wx.getStorageSync('openId')) {
      wx.navigateTo({
        url: '../login/login',
      })
    } else {
      this.setData({
        visible: true
      });
    }
  },

  clear() {
    this.setData({
      visible: false
    });
  },

  pay(e) {
    const that = this;
    globalData.pay(e.currentTarget.dataset.name,(res)=>{
      if (res.data.state) {
        globalData.getZazhiList((res) => {
          that.setData({
            totleData: res.data.data
          });
          globalData.globalData.resourceAll = res.data.data;
        });
      }
    
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      totleData: globalData.globalData.resourceAll,
      count: globalData.globalData.count
    });
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.startPullDownRefresh();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    this.setData({
      visible: false
    });
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    const that = this;
    globalData.getZazhiList((res)=>{
      if(res.data.state){
        // globalData.getZazhiList((res) => {
          that.setData({
            totleData: res.data.data
          });
          globalData.globalData.resourceAll = res.data.data;
        // });
        wx.stopPullDownRefresh({});
      }
    });
  

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

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