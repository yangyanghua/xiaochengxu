import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f8f8f8',
      navigationBarTitleText: '历史记录',
  }
}