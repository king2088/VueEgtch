<template>
  <div class="artic">
    <div class="article" v-if="article">
      <div class="box">
        <div class="title">{{article.title.rendered}}</div>
        <div class="line-k"></div>
        <div class="content" v-html="replaceImgHW(article.content.rendered)"></div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/public.styl"
.artic
  background #ffffff
  width 100%
  .article
    width 100%
    height 100%
    overflow auto
    margin 40px auto 68px auto
    display block
    background #ffffff
    .box
      width 100%
      margin 0 auto
      line-height 2.5
      .title
        font-weight 600
        text-align center
        margin 0 auto 10px auto
        font-rem(20)
        background darkcyan
        color #f2f2f2
      .content
        font-rem(16)
        word-break break-all
        color dimgrey
        padding 8px
        & img
          max-width 90%
          border 1px #ccc solid
          border-radius 5px
          margin-left 5%
        .wp-caption
          width 100%
          text-align center
          & img
            max-width 90%
            border 1px #ccc solid
            border-radius 5px
</style>
<script>
  export default{
    name:'iarticle',
    data() {
      return{
        apiUrl:'http://www.egtch.com/wp-json/wp/v2/posts/',
        article:{},
        id: this.$route.query.id
      }
    },
    created(){
      this.getArticle();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      'this.id': 'getArticle'
    },
    methods:{
      getArticle(){
        // GET /someUrl
        this.$http.get(this.apiUrl+this.id).then(response => {
          // get body data
          response = response.body
          this.article = response
          //alert(response);
          //console.log(this.article);
          //alert(this.id)
        })
      },
      replaceImgHW(strs){
        var st1 = strs.replace(/ height="\d+"/g,'');
        var st2 = st1.replace(/ width="\d+"/g,'');
        var st3 = st2.replace(/width: \d+px/g,'');
        var st4 = st3.replace(/ style/g,'');
        var st5 = st4.replace(/=""/g,'');
        var st = st5.replace(/href=/g,'target="_blank" href=');
        return st;
      }
    }
  }
</script>
