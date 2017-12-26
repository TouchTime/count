Page({
  data: {
    date:'2017-11-29',
    payFor:[{
      name:'微贷网',
      type:'普拉多抵押',
      outdata:'已过期',
      payMoney:'5000',
      receMpney:'15000',
      getMpney:'20000'
    },
      {
        name: '果树财富',
        type: '普拉多抵押',
      outdata:'已过期',
        payMoney: '5000',
        receMpney: '15000',
        getMpney: '20000'
      },
      {
        name: '果树财富',
        type: '普拉多抵押',
        outdata: '已过期',
        payMoney: '5000',
        receMpney: '15000',
        getMpney: '20000'
      },
      {
        name: '果树财富',
        type: '普拉多抵押',
        outdata: '已过期',
        payMoney: '5000',
        receMpney: '15000',
        getMpney: '20000'
      },
      {
        name: '果树财富',
        type: '普拉多抵押',
        outdata: '已过期',
        payMoney: '5000',
        receMpney: '15000',
        getMpney: '20000'
      },
      {
        name: '果树财富',
        type: '普拉多抵押',
        outdata: '已过期',
        payMoney: '5000',
        receMpney: '15000',
        getMpney: '20000'
      }
    ]
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  onShareAppMessage: function (res) {
    if (res.form === 'menu') {
      //来自右上角按钮
    }
    return {
      title: '网贷记账本',
      path: 'pages/payback/payback',
      success: function (res) {
       
      },
      fail: function (res) {
      
      }

    }
  }
  
})