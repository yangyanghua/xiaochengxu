import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
      backgroundTextStyle: 'light',
      navigationBarTitleText: '湿度情况',
  }
}


