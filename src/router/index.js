import Vue from 'vue'
import Router from 'vue-router'
import TruffleList from '@/components/TruffleList'
import SingleTruffle from '@/components/SingleTruffle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: TruffleList
    },
    {
      path: '/:truffleId',
      name: 'Truffle',
      component: SingleTruffle
    }
  ]
})
