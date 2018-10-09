Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ['未接单', '未完成', '未评价','已完成'],
    current: 0,//当前选中的Tab项
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var project = options.project;
    var name = options.name;
    var telphone = options.telphone;
    var address = options.address;
    var latitude = options.latitude;
    var longitude = options.longitude;
    wx.request({
      url: 'http://localhost:8080/yqzdg/saveOrder',
      data: {project, name, telphone, address, latitude, longitude },
      header: { 'Content-Type': 'application/json' },
      method: 'GET',
      success: function (res) {
        console.log('成功')
      }
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
  tabItemClick: function (e) {
    this.setData({
      current: e.currentTarget.dataset.pos
    })
  },
  goto:function(){
    wx.reLaunch({
      url: '../project/project',
    })
  }
})