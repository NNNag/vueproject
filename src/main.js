// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './images/bg.jpg',
    url: 'www.google.com',
    inStock: false,
    inventory: 20
  }
})



