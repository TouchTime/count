// pages/index/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listResults: [{ item: 'P2P记账： 这些名词要懂22', index: 1},
      { item: 'P2P记账： 常用的还款方式2', index: 2},
      { item: 'P2P记账： 常用的还款方式2', index: 3}]
  },
  binddetail: function (e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: "../feedback/problemDetail/problemDetail?id="+id,
    })
  },
  p2pbind: function(e) {
   wx.navigateTo({
     url: "../feedback/charges/charges",
   })
  },
  operatebind: function(e) {
    wx.navigateTo({
      url: "../feedback/help/help",
    })
  },
  managebind: function(e) {
    wx.navigateTo({
      url: "../feedback/management/management",
    })
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
    if (res.form === 'menu') {
      //来自右上角按钮
    }
    return {
      title: '网贷记账本',
      path: 'pages/index/feedback/feedback',
      success: function (res) {

      },
      fail: function (res) {

      }

    }
  }
})