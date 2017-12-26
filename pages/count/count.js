var wxCharts = require('wxcharts.js');
var app = getApp();
var pieChart = null;
// https://devework.com/weixin-weapp-auth-failed.html
// 是否为空对象
function isEmptyObject(e) {
  var t;
  for (t in e)
    return !1;
  return !0
}
Page({
  data: {
    datas:'果树财富',
    countArray:[{
      name:'果树理财',
      num:'20.2',
      money:'15,100.25'
    },
      {
        name: '陆金所',
        num: '20.2',
        money: '15,100.25'
      },
      {
        name: '小小理财',
        num: '20.2',
        money: '15,100.25'
      },
      {
        name: '拍拍贷',
        num: '20.2',
        money: '15,100.25'
      }
    ],
    hasUserInfo: false,
    authorize:true,
    dataShow:false
   
  },
  onOrder: function () {
    var self = this;

    wx.login({   //登录
      success: function (res) {
        console.log(res)
        if (res.code) {
          getApp().globalData.code = res.code;
          var code2 = "";
          code2 = res.code;
          if (code2 != "") {
            wx.getUserInfo({  //获得个人信息
              withCredentials: true,
              success: function (res) {
                wx.navigateTo({
                  url: '../count/account/account',
                  // url:'../count/secondLogin/secondLogin'
                })
              },
              fail: function (res) {
                wx.navigateTo({
                  url: '../count/secondLogin/secondLogin',
                })
              },
              complete: function (res) { },
            });


            var d = getApp().globalData;
            var url1 = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + code2 + '&grant_type=authorization_code';
            wx.request({   //获得openid
              url: url1,
              data: {},
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT    
              // header: {}, // 设置请求的 header    
              success: function (res) {
                console.log(res)
                getApp().globalData.openid = res.data.openid;//保存openid
              }
            });
          }
          else {

          }
        }
        else {
          console.log('获取用户登录态失败！' + res.errMsg);
        }
      },
      fail: function (res) {


      },
      complete: function (res) {
      },

    });

   
  },
  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  onLoad: function (e) {
    var self = this;
    
    wx.login({   //登录
      success: function (res) {
        if (res.code) {
          getApp().globalData.code = res.code;
          console.log(getApp().globalData.code)
          var code2 = "";
          code2 = res.code;
          if (code2 != "") {
            wx.getUserInfo({  //获得个人信息
              withCredentials: true,
              success: function (res) {
                self.setData({
                  authorize:false,
                 
                })
                
                getApp().globalData.nickName = res.userInfo.nickName;//保存nickName
                getApp().globalData.city = res.userInfo.city;//保存city           
                self.setData({
                  nickName: res.userInfo.nickName
                });
              },
              fail: function (res) {
                // wx.navigateTo({
                //   url: '../count/secondLogin/secondLogin',
                // })
               },
              complete: function (res) { },
            });


            var d = getApp().globalData;
            console.log(getApp().globalData.appid)
            var url1 = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + code2 + '&grant_type=authorization_code';
            wx.request({   //获得openid
              url: url1,
              data: { code: res.code },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT 一定要大写   
              header: { 'content-type': 'application/json'}, // 设置请求的 header    
              success: function (res) {
                // console.log(getApp())
                getApp().globalData.openid = res.data.openid;//保存openid
              }
            });
          }
          else {
           
          }
        }
        else {
          console.log('获取用户登录态失败！' + res.errMsg);
        }
      },
      fail: function (res) {},
      complete: function (res) {},
      
    });


    var windowWidth = 300;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    var datas='果树财富';
    var names = '116,824.26';
    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'ring',
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: '待收总额',
        color: '#999999',
        fontSize: 10
      },
      subtitle: {
        name: names,
        color: '#333333',
        fontSize: 12
      },
      series: [{
        name: '果树理财',
        data: 155,
        color:'#11b3fe',
        format: function (val) { 
          return datas + val * 100 + '%';
        }
      }, {
          name: datas,
        data: 35,
        color: '#4189ff',
        format: function (val) {
          return datas + val * 100 + '%';
        }
      }, {
        name: '钱爱进',
        data: 78,
        color: '#af65fc',
        format: function (val) {
          return datas + val * 100 + '%';
        }
      }, {
        name: '安心贷',
        data: 63,
        color: '#fd6d46'
      }, {
        name: '简理财',
        data: 35,
        color: '#ffa043'
      }, {
        name: '钱香',
        data: 78,
        color: '#fbc84f'
      }, {
        name: '小微时代',
        data: 63,
        color:'#47dba2'
      }, {
        name: '投复利',
        data: 35,
        color: '#0dd7e4'
      }, {
        name: '微贷网',
        data: 78,
        color:'#11b3fe'
      }, {
        name: '简理财',
        data: 78,
        color: '#4189ff'
      }
      ],
      width: windowWidth,
      height:240,
      legend: false,
      dataLabel: true,
      color:'#eee',
      padding: 0,
      disablePieStroke: true
    })
  },
  getUserInfo: function () {
    var that = this;
    // console.log(app.globalData)
    wx.login({
      success: _getUserInfo
    })
    // if (app.globalData.hasLogin === false) {
    //   wx.login({
    //     success: _getUserInfo
    //   })
    // } else {
    //   _getUserInfo()
    // }

  },
  onShareAppMessage: function(res) {
    if(res.form === 'menu'){
      //来自右上角按钮
    }
    return {
      title: '网贷记账本',
      path: 'pages/count/count',
      success: function(res){
        //转发成功
        // wx.showToast({
        //   title: '分享成功',
        //   image: '/images/success.png',
        //   duration: 2000
        // })
      },
      fail: function(res){
        //转发失败
      }

    }
  }
});