<template>
  <div id="app">
    <top></top>
    <transition :name="$router.app.pageTransition">
        <router-view></router-view>
    </transition>
    <bottom></bottom>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Bottom from './components/Bottom.vue'
export default {
  components:{
    'top':Top,
    'bottom':Bottom
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "./assets/css/public.styl"
@import "./assets/css/font-awesome.min.css"
#app
  width 100%
  height 100%
  display table
  overflow auto
  /*right start*/
  .slide-right-enter-active
    transition all .4s ease
  .slide-right-enter
    opacity 0.9;
    transform translate3d(100%, 0, 0)
  .slide-right-leave
    transform translate3d(0, 0, 0)
  .slide-right-leave-active
    transition all .4s ease
    opacity .5
    transform translate3d(-20%, 0, 0)
  /*right end*/
  /*left start*/
  .slide-left-enter-active
    transition all .4s ease;
    transform translate3d(0%, 0, 0);
    z-index 1998
  .slide-left-enter
    opacity .5
    transform translate3d(-20%, 0, 0)
    z-index 1998
  .slide-left-leave
    transform translate3d(0, 0, 0)
  .slide-left-leave-active
    transition all .4s ease
    opacity 0.9
    transform translate3d(100%, 0, 0)
  /*left end*/
  .slide-fade-enter-active
    transition all .4s ease
  .slide-fade-leave-active
    transition all .4s ease
  .slide-fade-enter,
  .slide-fade-leave-active
    opacity 0
  .slide-fade-enter
    padding-top 80%
  .slide-fade-leave-active
    padding-top -100%
</style>
