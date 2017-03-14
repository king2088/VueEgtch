<template>
  <div id="bottom">
    <div class="bottom-item">
      <router-link to="/posts"><i class="fa fa-newspaper-o" aria-hidden="true"></i><br>文章</router-link>
    </div>
    <div class="bottom-item">
      <router-link to="/categories"><i class="fa fa-bars" aria-hidden="true"></i><br>分类</router-link>
    </div>
    <div class="bottom-item">
      <router-link to="/minibar"><i class="fa fa-coffee" aria-hidden="true"></i><br>Minibar</router-link>
    </div>
    <div class="bottom-item">
      <router-link to="/about"><i class="fa fa-address-card-o" aria-hidden="true"></i><br>关于</router-link>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  #bottom
    width 100%
    position fixed
    bottom 0
    left 0
    border-top 1px #CCC solid
    background #FFFFFF
    height 50px
    padding-top 10px
    margin-top 60px
    display flex
    overflow hidden
    z-index 999
    .bottom-item
      flex 1
      text-align center
      & > a
        display block
        font-size 0.875rem
        color rgb(77,85,93)
        &.router-link-active
          color darkcyan
        i
          font-size 1.625rem
</style>
<script>
    export default{
        data(){
            return{
                msg:'bottom'
            }
        }
    }
</script>
