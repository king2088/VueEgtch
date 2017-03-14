<template>
  <div class="abt">
    <div class="about">
      <div class="cont">
        <div class="title">{{replaceSpace(about.title.rendered)}}</div>
        <div class="line-k"></div>
        <div class="content" v-html="replaceHref(about.content.rendered)"></div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/public.styl"
.abt
  background #ffffff
  width 100%
  .about
    line-height 2.5
    width 100%
    height 100%
    overflow auto
    margin 40px auto 60px auto
    display block
    & img
      width 90% !important
      height auto !important
    .cont
      background #ffffff
      width 100%
      margin 0 auto
      font-rem(16)
      .title
        font-weight 600
        text-align center
        margin-bottom 18px
        font-rem(20)
        background darkcyan
        color #f2f2f2
      .content
        overflow hidden
        color #333
        padding 5px
        word-break break-all
      & a
        color darkcyan
</style>
<script>
  export default{
    data() {
      return {
        about: {}
      }
    },
    created(){
      // GET /someUrl
      this.$http.get('http://www.egtch.com/wp-json/wp/v2/pages/2').then(response => {
        // get body data
        response = response.body
        this.about = response
        //alert(response);
        //console.log(this.minibar);
      })
    },
    methods: {
      //替换标题中的空格符号
      replaceSpace(strs){
          var str = '&#8217;'
          var st = strs.replace(str,' ');
          var sr = st.replace(str,' ');
          return sr;
      },
      replaceHref(str){
          var href = str.replace(/href=/g,'target="_blank" href=');
          return href;
      }
    }
  }
</script>
