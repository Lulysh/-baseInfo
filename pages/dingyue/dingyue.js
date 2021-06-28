// pages/dingyue/dingyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dingyueData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  read(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../url/url?filePath=' + url,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // debugger;
    const globalData = getApp().globalData.resourceAll;
    const dingyueData = globalData.filter((item) => {
      return item.enable === true
    });
    this.setData({
      dingyueData: dingyueData
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