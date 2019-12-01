import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stores from './store'
import axios from 'axios'
import myUl from './components/conmon/myul.vue'
import myLi from './components/conmon/myLi.vue'
import navBar from './components/conmon/navBar.vue'
import mytuwen from './components/conmon/myTuWen.vue'
import { Indicator } from 'mint-ui'


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component(myUl.name, myUl)
Vue.component(myLi.name, myLi)
Vue.component(navBar.name, navBar)
Vue.component(mytuwen.name, mytuwen)

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  Indicator.close()
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 定义全局过滤器 开始
// import Moment from 'moment';
Vue.filter('convertTime', function (data, formatStr) {
    // 2015-04-16T03:50:28.000Z
    // return Moment(data).format(formatStr);
})
// 定义全局过滤器 结束


new Vue({
  router,
  store: stores,
  render: h => h(App)
}).$mount('#app')
