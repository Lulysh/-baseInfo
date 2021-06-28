//app.js
App({

  getZazhiList(callback = this.defualtCallback) {
    const that = this;
    wx.request({
      url: 'https://shenkun-media.cn/resourceAll',
      method: 'post',
      data:{
        openid:wx.getStorageSync('openId')
      },
      header: {
        "application-type": "json"
      },
      success(res) {
        callback(res);
      },
      fail(error){
        console.log('error',error);
      }
    })
  },

  setMagazine(name,callback){
    wx.request({
      url: 'https://shenkun-media.cn/setMagazine',
      method: 'post',
      data: {
        openid: wx.getStorageSync('openId'),
        name:name
      },
      header: {
        "application-type": "json"
      },
      success(res) {
        that.getZazhiList(callback)
      }
    })

  },

  pay(name="",callback=()=>{}){
    const that = this;
    wx.request({
      url: 'https://shenkun-media.cn/getPayment',
      method: 'post',
      header: {
        "application-type": "json"
      },
      data: {
        openid: wx.getStorageSync('openId'),
        body: name,
        total_fee:6
      },
      success(res) {
        
        console.log('success',res);
        wx.requestPayment({
          ...res.data,
          success(res){
            that.setMagazine(name,callback);
            console.log('res',res);
          }
        })
      }
    })
  },

  onLaunch: function () {
      // this.getZazhiList();
  },

  defualtCallback(res){
    if(res.data.state){
      this.globalData.resourceAll = res.data.data
    }
  },

  globalData: {
    resourceAll: null
  }
})