<template>




</template>
<style lang="stylus" rel="stylesheet/stylus">
  #abc
    .slide-right-enter-active,.slide-left-enter-active,.slide-right-leave-active,.slide-left-leave-active
      transition all .6s
      //right
    .slide-right-enter
      left 100%
      opacity 0
    .slide-right-leave-active
      left -100%
      //left
    .slide-left-enter
      left -100%
    .slide-left-leave-active
      left 100%
</style>
<script>
  export default{

  }
</script>
