// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    userInfo:null,
    loginSessionKey:''

  },
  jumpLogin(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },

  dingyue(){
    if(wx.getStorageSync('loginSessionKey')){
      var that = this;
      wx.navigateTo({
        url: '../dingyue/dingyue',
      })
    }else{
      wx.navigateTo({
        url: '../login/login',
      })
    }
    
  },

  share(){

  },

  goUrl(){
    wx.navigateTo({
      url: '../url/url',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onShareAppMessage: function (res) {
    return {
      title: 'H Maga',
      path: '/pages/home/home',
      imageUrl: '../../images/logo2.jpg'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log('onShow');
      this.setData({
        userInfo:wx.getStorageSync('userInfo'),
        loginSessionKey: wx.getStorageSync('loginSessionKey')
      });
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

  }

})