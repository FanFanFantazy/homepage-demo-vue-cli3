/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
import Layout2 from './views/Layout2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
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
        },
        {
          path: 'deedStock',
          name: ' DeedStock',
          component: () => import( /* webpackChunkName: "deedStock" */ '@/modules/spider/deedStock.vue')
        }
      ]
    },
    {
      path: '/nerdHub',
      name: 'NerdHub',
      component: Layout,
      children: [{
          path: 'option1',
          name: 'Option1',
          component: () => import( /* webpackChunkName: "about" */ './modules/nerdhub/analysisXLS.vue')
        },
        {
          path: 'option2',
          name: 'Option2',
          component: () => import( /* webpackChunkName: "about" */ './modules/about/info.vue')
        },
        {
          path: 'option2',
          name: 'Option3',
          component: {
            template: '<router-view/>',
          },
          children: [{
            path: 'option11',
            name: 'Option11',
            component: () => import( /* webpackChunkName: "about" */ './modules/about/info.vue')
          }]
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: Layout2,
      children: [{
          path: 'aboutInfo',
          name: 'Info',
          component: () => import( /* webpackChunkName: "aboutInfo" */ './modules/about/info.vue')
        },
        {
          path: 'authorInro',
          name: 'Author',
          component: () => import( /* webpackChunkName: "aboutInfo" */ './modules/about/author.vue')
        },
      ]
    }
  ]
})
