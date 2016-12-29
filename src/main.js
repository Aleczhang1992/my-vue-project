// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes';

//全局使用
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routes
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
//render可以直接渲染组件和模板
//template: '<App/>',
//components: { App }
})
