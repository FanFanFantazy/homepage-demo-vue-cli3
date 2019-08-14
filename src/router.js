/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
// import Layout2 from './views/Layout2.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
          path: 'polygon',
          name: 'Polygon',
          meta: {
            type: '2'
          },
          component: () => import( /* webpackChunkName: "polygon" */ './modules/nerdhub/polygon.vue')
        },
        {
          path: 'others',
          name: 'Others',
          component: {
            template: '<router-view/>',
          },
          children: [
          {
            path: 'vuexNum',
            name: 'Vuex Number',
            meta: {
              type: '2'
            },
            component: () => import( /* webpackChunkName: "vuexNum" */ './modules/nerdhub/vuexNum.vue')
          },
          {
            path: 'mdEditor',
            name: 'Markdown Editor',
            meta: {
              type: '2'
            },
            component: () => import( /* webpackChunkName: "mdEditor" */ './modules/nerdhub/mdEditor.vue')
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
