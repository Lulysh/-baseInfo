// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  getUserInfo(event) {
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://shenkun-media.cn/users/sign',
            method: 'post',
            data: {
              jsCode: res.code,
              username: event.detail.userInfo.nickName,
              gender: event.detail.userInfo.gender
            },
            header: {
              "content-type": "application/json"
            },
            success: function(res) {
             
              if (res.data.state) {
                wx.setStorageSync("loginSessionKey", res.data.session_key);
                wx.setStorageSync("openId", res.data.openid);
                const gData = getApp();
                gData.getZazhiList((res)=>{
                  if(res.data.state){
                    gData.globalData.resourceAll = res.data.data;
                    wx.switchTab({
                      url: '../home/home',
                    })
                    // wx.navigateBack({
                    //   delta: 1
                    // })
                  }
                });
               
              } else {
                wx.showToast({
                  title: '登录失败',
                  icon:'none',
                  duration: 2000 //持续的时间
                })
              }

            },
            fail() {
              console.log('fail')

            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

    console.log('userInfo', event.detail);
    if (event.detail.userInfo) {

      wx.request({
        url: '',
      })
      wx.setStorageSync("userInfo", event.detail.userInfo);
    }

    // this.setData({
    //   userInfo: event.detail.userInfo
    // });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

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