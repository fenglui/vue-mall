import Vue from 'vue'
import VueResource from 'vue-resource'
//import VueRouter from 'vue-router'
import App from './App'

//Set default values using the global configuration.
Vue.use(VueResource)
// supports both of Vue 1.0 and Vue 2.0
import VueLazyload from 'vue-lazyload'

//Vue.use(VueLazyload)

// with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

//Vue.http.options.root = '/root';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
//Vue.use(VueRouter)

//var Home = Vue.extend({
//  template: '<div><h1>Home</h1><p>{{msg}}</p></div>',
//  data: function() {
//    return {
//      msg: 'Hello, vue router!'
//    }
//  }
//})

//var UserHome = Vue.extend({
//  template: '<div><h1>UserHome</h1><p>{{msg}}</p></div>',
//  data: function() {
//    return {
//      msg: 'Hello, UserHome!'
//    }
//  }
//})

//var router = new VueRouter({
//  mode: 'history',
//  base: __dirname,
//  routes: [
//    { path: '/', component: Home },
//    { path: '/user', component: UserHome }
//  ]
//})

/* eslint-disable no-new */
var vm = new Vue({
  el: 'app',
  components: { App }
})