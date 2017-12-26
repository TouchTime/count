Page({
  data: {
    restData: [
      { item: 'P2P记账： 这些名词要懂22' ,index:1},
      { item: 'P2P记账： 常用的还款方式2', index: 2},
      { item: 'P2P记账： 常用的还款方式2', index: 3 }]
  },
  binddetail: function (e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: "/pages/index/feedback/problemDetail/problemDetail?id=" + id,
    })
  },
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