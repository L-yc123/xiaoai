import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component: layout,
    children: [
{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/register',
    name:'register',
    component: ()=> import('../views/register/register.vue')
  },
    ]
  
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
