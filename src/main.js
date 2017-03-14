// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'animate.css'
Vue.use(VueResource)

Vue.config.productionTip = false



// 记录路由改变的次数，避免页面刷新后，右进入
var IS_ROUTER_FIRST_CHANGE = true

router.beforeEach((to, from, next) => {

  let direction = 'slide-fade'
  // 上一个页面是否是返回？
  if (!!from.meta.goback) {
    // 如果两个页面都有callback，比较路由深度
    if (!!to.meta.goback) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      direction = toDepth >= fromDepth ? 'slide-right' : 'slide-left'
    } else {
      direction = 'slide-left'
    }
  } else {
    // 下个页面是否是返回？
    direction = !!to.meta.goback ? 'slide-right' : 'slide-fade'
  }

  if (IS_ROUTER_FIRST_CHANGE) {
    IS_ROUTER_FIRST_CHANGE = !IS_ROUTER_FIRST_CHANGE
    direction = 'slide-fade'
  }

  router.app.pageTransition = direction

  next()

})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
}).$mount('#app')
