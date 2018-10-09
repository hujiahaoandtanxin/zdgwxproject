// pages/r-sex/r-sex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:'',
    items: [
      { name: '男', value: '男', checked: 'true'},
      { name: '女', value: '女'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setStorage({
      key: 'sex',
      data: this.data.sex,
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
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({sex:e.detail.value})
  },
  formSubmit: function (e) {
    var sex = this.data.sex
    console.log(sex)
  },
  jumpBack: function (e) {
    var that = this;
    var sex = this.data.sex
    wx.reLaunch({
      url: '../mine/mine?sex=' +sex
    })
    wx.setStorage({
      key: 'sex',
      data: sex,
    })
    wx.getStorage({
      key: 'sex',
      success: function (res) {
        console.log(res)
        that.setData({
          sex: res.data,
        })
      },
    })
  },
})