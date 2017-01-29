// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import NewsItem from './pages/NewsItem'
import News20170130 from './pages/News20170130'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/detail', component: NewsItem },
  { path: '/News20170130', component: News20170130 }
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
