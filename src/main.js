import Vue from 'vue'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

import VueRx from 'vue-rx'

import App from './App.vue'

// tada!
Vue.use(VueRx, { Observable, Subscription })

new Vue({
  el: '#app',
  render: h => h(App)
})
