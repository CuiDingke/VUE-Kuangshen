// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//自动扫描里面的配置router(注意时router)
import Element from 'element-ui'//导入ui
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(router);
Vue.use(Element);
Vue.use(VueAxios, axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  //验证UI
  render: h => h(App),

  // components: { App },
  // template: '<App/>'
})
