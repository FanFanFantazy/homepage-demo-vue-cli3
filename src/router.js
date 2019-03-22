/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
import Layout2 from './views/Layout2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/home',
      name: 'Home',
      component: () => import( /* webpackChunkName: "socialStatus" */ '@/modules/homepage/homepage.vue'),
    },
    {
      path: '/spider',
      name: 'SpiderMan',
      component: Layout,
      children: [{
        path: 'socialStatus',
        name: ' SocialStatus',
        component: () => import( /* webpackChunkName: "socialStatus" */ '@/modules/spider/socialStatus.vue')
      }]
    },
    {
      path: '/videoHub',
      name: 'VideoHub',
      component: Layout,
      children: [{
          path: 'option',
          name: 'Option1',
          component: () => import( /* webpackChunkName: "about" */ './modules/about/info.vue')
        },
        {
          path: 'option',
          name: 'Option2',
          component: () => import( /* webpackChunkName: "about" */ './modules/about/info.vue')
        },
        {
          path: 'option',
          name: 'Option3',
          component: {
            template: '<router-view/>',
          },
          children: [{
            path: 'option',
            name: 'Option1',
            component: () => import( /* webpackChunkName: "about" */ './modules/about/info.vue')
          }]
        }
      ]
    },
    {
      path: '/docHub',
      name: 'DocHub',
      component: Layout,
    },
    {
      path: '/other',
      name: 'Others',
      component: Layout,
    },
    {
      path: '/about',
      name: 'About',
      component: Layout2,
      children: [{
        path: 'aboutInfo',
        name: 'Info',
        component: () => import( /* webpackChunkName: "aboutInfo" */ './modules/about/info.vue')
      }]
    }
  ]
})
