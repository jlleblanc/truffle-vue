// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import Truffles from './lib/truffles'

fetch('http://truffle.jlleblanc.com/feed.json')
.then(r => r.json())
.then(json => {
  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App v-bind:truffles="truffles"/>',
    components: { App },
    data: { truffles: new Truffles(json) }
  })
})
