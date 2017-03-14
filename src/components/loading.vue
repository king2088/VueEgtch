<template>
  <section class="loading" :class="{ loadingActive: show }">
    <div class='uil-pie-css' style='transform:scale(0.35);'></div>
  </section>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../static/reset.css"
  .loading
    position absolute
    top 0
    left 100%
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0.4)
    opacity 0
    display flex
    display -webkit-flex
    justify-content center
    -webkit-justify-content center
    align-items center
    transition opacity .6s
    transition-delay 0.2s
    img
      width 60px
      &.loadingActive
        left 0
        opacity 1
</style>
<script>
  export default{
    data () {
    },
    components: {
    }
  }
</script>
