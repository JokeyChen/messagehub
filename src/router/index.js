import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Dashboard from '@/views/Dashboard'
import NewMessage from '@/views/NewMessage'
import SearchMessage from '@/views/SearchMessage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/messages/new', name: 'NewMessage', component: NewMessage },
    { path: '/messages/search', name: 'SearchMessage', component: SearchMessage }
  ]
})
