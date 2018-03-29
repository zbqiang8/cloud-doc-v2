import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config : {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main', 'pages/member/index/main', 'pages/details/doc/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '云档',
      navigationBarTextStyle: 'black',
      backgroundColor: "#f7f7f7"
    },
    "tabBar": {
      "backgroundColor": "#ffffff",
      "color": "#999999",
      //borderStyle:"white",
      selectedColor: "#333333",
      "list": [
        {
          "pagePath": "pages/index/main",
          "text": "首页",
          "iconPath": "static/images/home-no.png",
          "selectedIconPath": "static/images/home-yes.png"
        }, {
          "pagePath": "pages/member/index/main",
          "text": "档库",
          "iconPath": "static/images/docs-no.png",
          "selectedIconPath": "static/images/docs-yes.png"
        }, {
          "pagePath": "pages/member/index/main",
          "text": "我的",
          "iconPath": "static/images/user-no.png",
          "selectedIconPath": "static/images/user-yes.png"
        }
      ]
    }
  }
}
