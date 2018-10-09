// pages/detail-info/detail-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project:'',
    name:'',
    telphone:'',
    address:'',
    latitude:'',
    longitude:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      project:options.project,
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
  goto:function(){
    //这是that的用法--进入另一个函数对象就不同了
    var that =this;
    wx.chooseLocation({
      success: function(res) {
        var myAddress = res.address;
        var myLatitude = res.latitude;
        var myLongitude = res.longitude;
        that.setData({
          address:myAddress,
          latitude: myLatitude,
          longitude: myLongitude,
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  gotoOrder:function(){
    var project = this.data.project;
    var name = this.data.name;
    var telphone = this.data.telphone;
    var address = this.data.address;
    var latitude = this.data.latitude;
    var longitude = this.data.longitude;
    wx.reLaunch({
      url: '../order/order?project=' + project + '&name=' + name + '&telphone=' + telphone + '&address=' + address + '&latitude=' + latitude + '&longitude=' + longitude,
    })
    
  },
  formSubmit: function (e) {
    this.setData({ 
      name:e.detail.value.name,
      telphone: e.detail.value.telphone,
      address: e.detail.value.address,
     })
  }
})