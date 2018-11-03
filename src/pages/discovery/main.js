import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#58a1ff',
      navigationBarTitleText: '真伪查询',
      navigationBarTextStyle: '#fff'
  }
}


