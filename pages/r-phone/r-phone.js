Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setStorage({
      key: 'phone',
      data: this.data.phone,
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
  onShareAppMessage: function () {

  },

  formSubmit: function (e) {
    console.log(e.detail.value.phone)
    this.setData({ phone: e.detail.value.phone })
  },
  jumpBack: function (e) {
    var that = this;
    var phone = this.data.phone
    wx.reLaunch({
      url: '../mine/mine?phone=' + phone
    })
    wx.setStorage({
      key: 'phone',
      data: phone,
    })
    wx.getStorage({
      key: 'phone',
      success: function (res) {
        console.log(res)
        that.setData({
          phone: res.data,
        })
      },
    })
  },

})