import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main','pages/search/main','pages/personal/main','pages/discovery/main','pages/login/main','pages/pianoRegister/main','pages/register/main',
    				'pages/humidity/main','pages/temperature/main','pages/steward/main','pages/serRequest/main','pages/pianoSelect/main','pages/history/main','pages/record/main',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '首页',
      navigationBarTextStyle: 'black'
    },
 		tabBar: {
			"backgroundColor": "#fafafa",
			"borderStyle": 'white',
			"color":'#333',
			'selectedColor':"#519fff",
			"list": [{
				"iconPath": './static/img/icon_home2x.png',
				"selectedIconPath": './static/img/icon_home_press2x.png',
				"pagePath": "pages/index/main",
				"text": "首页"			  
			}, {
				"iconPath": './static/img/icon_search22x.png',
				"selectedIconPath": './static/img/icon_search2_press2x.png',
				"pagePath": "pages/search/main",
				"text": "搜索"	
			},{
				"iconPath": './static/img/icon_find2x.png',
				"selectedIconPath": './static/img/icon_find_press2x.png',
				"pagePath": "pages/personal/main",
				"text": "发现"		
			}, {
				"iconPath": './static/img/icon_my2x.png',
				"selectedIconPath": './static/img/icon_my_press2x.png',
				"pagePath": "pages/personal/main",
				"text": "我的"
			}]
		}   
    
  }
}
