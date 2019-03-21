/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/spider',
      name: 'SpiderMan',
      component: Home,
      children: [{
        path: 'socialStatus',
        name: ' SocialStatus',
        component: () => import( /* webpackChunkName: "socialStatus" */ '@/modules/spider/socialStatus.vue')
      }]
    },
    {
      path: '/about',
      name: 'VideoHub',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),
      children: [{
          path: '/about',
          name: 'Option1',
          component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: '/about',
          name: 'Option2',
          component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: '/about',
          name: 'Option3',
          component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),
          children: [{
            path: '/about',
            name: 'Option1',
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
          }]
        }
      ]
    },
    {
      path: '/about',
      name: 'DocHub',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/about',
      name: 'Others',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
