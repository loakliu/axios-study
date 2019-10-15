import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from './service/http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// 把Http挂载到Vue实例上
Vue.prototype.$Http=Http;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
