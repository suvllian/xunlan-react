import VueRouter from 'vue-router'

import Camera from './components/camera/index.vue';
import Main from './components/Home/index.vue';
import News from './components/News/index.vue';
import About from './components/About/index.vue';
import Not from './components/404/index.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Main },
    { path: '/camera', component: Camera },
    { path: '/news', component: News },
    { path: '/about', component: About },
    { path: '/*', component: Main },
  ]
});

export default router;