import Vue from 'vue'
import Router from 'vue-router'
import iPosts from '@/components/Posts'
import iCategories from '@/components/Categories'
import iMinibar from '@/components/Minibar'
import iAbout from '@/components/About'
import iArticle from '@/components/Article'
import iPostcat from '@/components/Postcat'
import iTest from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: iPosts
    },
    {
      path: '/posts',
      component: iPosts
    },
    {
      path: '/article',
      component: iArticle
    },
    {
      path: '/categories',
      component: iCategories
    },
    {
      path: '/postcat',
      component: iPostcat
    },
    {
      path: '/minibar',
      component: iMinibar
    },
    {
      path: '/about',
      component: iAbout
    },
    {
      path: '/test',
      component: iTest
    }
  ]
})
