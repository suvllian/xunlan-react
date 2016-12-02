import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import routes from './routes'

Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

//VueRouter.start(Vue.extend({}), '#app');

