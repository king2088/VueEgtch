<template>
  <div id="top"><a @click="goBack"><i class="fa fa-angle-left" aria-hidden="true"></i></a><span class="title">{{msg}}</span></div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  #top
    width 100%
    height 40px
    background darkcyan
    color #ffffff
    text-align center
    line-height 40px
    position fixed
    z-index 999
    top 0
    left 0
    .title
      margin-left -20px
    & a
      color #ffffff
      display block

      & i
        float left
        font-size 1.625rem
        line-height 40px
        padding 0 10px
</style>
<script>
    export default{
        data(){
            return{
                msg:'EGTCH.COM 前端技术分享博客'
            }
        },
        methods:{
          goBack(){
            window.history.go(-1)
          }
        }
    }
</script>
