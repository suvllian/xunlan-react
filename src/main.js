import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
 
});

VueRouter.start(Vue.extend({}), '#app');
