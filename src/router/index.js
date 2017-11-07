import Vue from 'vue'
import Router from 'vue-router'
import TruffleList from '@/components/TruffleList'
import SingleTruffle from '@/components/SingleTruffle'

Vue.use(Router)

// TODO: see if there's a way we can do the JSON lookup once here, then pass it down to
// through the router

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
      component: SingleTruffle, // TODO: need to create a single view so we can extract the truffleId
      props: true
    }
  ]
})
