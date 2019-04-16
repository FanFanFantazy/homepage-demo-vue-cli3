/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
// import Layout2 from './views/Layout2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import( /* webpackChunkName: "homepage" */ '@/modules/homepage/homepage.vue'),
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
          path: 'analysisXls',
          name: 'Excel Analyser',
          meta: {
            type: '2'
          },
          component: () => import( /* webpackChunkName: "analysisXls" */ './modules/nerdhub/analysisXls.vue')
        },
        {
          path: 'analysisImg',
          name: 'Image Analyser',
          meta: {
            type: '2'
          },
          component: () => import( /* webpackChunkName: "analysisImg" */ './modules/nerdhub/analysisImg.vue')
        },
        {
          path: 'option2',
          name: 'Option3',
          type: '2',
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
      component: Layout,
      children: [{
          path: 'aboutInfo',
          name: 'Info',
          component: () => import( /* webpackChunkName: "aboutInfo" */ './modules/about/info.vue')
        },
        {
          path: 'authorInro',
          name: 'Author',
          component: () => import( /* webpackChunkName: "aboutAuthor" */ './modules/about/author.vue')
        },
      ]
    },
    {
      path: '*',
      name: 'error_404',
      meta: {
        hideInMenu: true
      },
      component: () => import( /* webpackChunkName: "error404" */'@/modules/error/error404.vue')
    },
    {
      path: '/401',
      name: 'error_401',
      meta: {
        hideInMenu: true
      },
      component: () => import(/* webpackChunkName: "error401" */'@/modules/error/error401.vue')
    },
    {
      path: '/500',
      name: 'error_500',
      meta: {
        hideInMenu: true
      },
      component: () => import(/* webpackChunkName: "error500" */'@/modules/error/error500.vue')
    },
  ]
})
