<template>
  <div class="mini">
      <div class="minibar">
        <div class="cont">
          <div class="title">{{minibar.title.rendered}}</div>
          <div class="line-k"></div>
          <div class="content" v-html="replaceImgHW(minibar.content.rendered)"></div>
        </div>
      </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/public.styl"
.mini
  background #ffffff
  width 100%
  .minibar
    line-height 2.5
    width 100%
    height 100%
    overflow auto
    margin 40px auto 68px auto
    display block
    & img
      width 90% !important
      height auto !important
      margin-left 5%
    .cont
      background #ffffff
      width 100%
      margin 0 auto
      font-rem(16)
      .title
        font-weight 600
        text-align center
        margin-bottom 10px
        font-rem(20)
        background darkcyan
        color #f2f2f2
      .content
        overflow hidden
        color #333
        padding 8px
        word-break break-all
      & a
        color darkcyan
</style>

<script>
    export default{
      data() {
        return {
          minibar: {},
          minibarUrl: 'http://www.egtch.com/wp-json/wp/v2/pages/198'
        }
      },
      created(){
        this.getMNB();
      },
      methods: {
        replaceImgHW(strs){
          var st1 = strs.replace(/ height="\d+"/g,'');
          var st2 = st1.replace(/ width="\d+"/g,'');
          var st3 = st2.replace(/width: \d+px/g,'');
          var st4 = st3.replace(/ style/g,'');
          var st5 = st4.replace(/=""/g,'');
          var st = st5.replace(/href=/g,'target="_blank" href=');
          return st;
        },
        getMNB(){
          // GET /someUrl
          this.$http.get(this.minibarUrl).then(response => {
            // get body data
            response = response.body
            this.minibar = response
          //alert(response);
          //console.log(this.minibar);
          })
        }
      }
    }
</script>
