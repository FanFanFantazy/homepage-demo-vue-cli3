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
      component: Home,
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
      path: '/videoHub',
      name: 'VideoHub',
      component: Home,
      children: [{
          path: 'option',
          name: 'Option1',
          component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'option',
          name: 'Option2',
          component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'option',
          name: 'Option3',
          component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),
          children: [{
            path: 'option',
            name: 'Option1',
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
          }]
        }
      ]
    },
    {
      path: '/docHub',
      name: 'DocHub',
      component: Home,
    },
    {
      path: '/other',
      name: 'Others',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: Home,
      children: [{
        path: 'aboutInfo',
        name: 'Info',
        component: () => import( /* webpackChunkName: "aboutInfo" */ './views/About.vue')
      }]
    }
  ]
})
