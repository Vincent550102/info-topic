import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Teachers from '../views/Teachers.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
import Edit from '../views/Edit.vue'
import Menu from '../views/Menu.vue'
import Logout from '../views/Logout.vue'
import Teachers_topics from '../views/Teachers_topics.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/teachers', component: Teachers },
  { path: '/teachers/:id', component: Teachers_topics },
  { path: '/search', component: Search },
  { path: '/topic/:id', component: Detail },
  { path: '/edit/:id', component: Edit },
  { path: '/menu', component: Menu },
  { path: '/logout', component: Logout }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
