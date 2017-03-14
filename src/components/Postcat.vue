<template>
  <div class="psc">
    <div class="postcat">
      <div class="box" v-for="(item, index) in postcat">
        <div class="post">
          <router-link :to="{path:'/article',query: {id:postcat[index].id}}">{{postcat[index].title.rendered}}</router-link>
          <div class="line-k"></div>
          <div class="postcat-img" v-html="getFirstImg(postcat[index].content.rendered)"></div>
          <div class="description" v-html="replaceDS(postcat[index].excerpt.rendered)"></div>
        </div>
      </div>
      <a id="ipre" @click="ipre"><i class="fa fa-angle-left" aria-hidden="true"></i>PREVIOUS</a>
      <a id="inext" @click="inext">NEXT<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/public.styl"
  @import "../assets/css/font-awesome.min.css"
.psc
  background #ffffff
  width 100%
  .postcat
    width 100%
    height 100%
    overflow auto
    margin 40px auto 68px auto
    display block
    & a
      color darkcyan
      padding 5px
      border-radius 2px
      &#ipre
        float left
        font-rem(18)
        padding 5px 10px 10px 10px
        line-height 32px
        & i
          font-rem(28)
          margin-right 10px
          float left
      &#inext
        float right
        font-rem(18)
        padding 5px 10px 10px 10px
        line-height 32px
        & i
          font-rem(28)
          margin-left 10px
          float right
    .box
      width 100%
      margin 10px auto
      background #ffffff
      padding 10px 0
      line-height 1.5
      border-bottom 6px solid #F2F2F2
      .post
        width 96%
        margin 0 auto
        & a
          color darkcyan
          background none
          font-rem(18)
          margin 0 auto 5px auto
          padding 5px 0
        .postcat-img
          width 90%
          margin 0 auto
          padding 5px 0 0 0
          & > img
            max-width 100%
            border 2px solid #CCC
            border-radius 5px
        .description
          font-rem(16)
          padding-top 5px
          color dimgrey

</style>
<script>
  export default{
    name:'ipostcat',
    data() {
      return{
        postcatUrl:'http://www.egtch.com/wp-json/wp/v2/posts?categories='+this.$route.query.id+'&page=',
        postcat:{},
        ipage: 1,
        show: false
      }
    },
    created(){
      this.getPostcat(this.ipage)
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      'ipage': 'getPostcat'
    },
    methods:{
      getPostcat(p){
        // GET /someUrl
        if(p<1){
          p = 1
        }
        this.$http.get(this.postcatUrl+p).then(response => {
          // get body data
          response = response.body
          if(response.length > 0){
            this.postcat = response
            document.getElementById('inext').style.display='block';
          }
          if(response.length < 10){
            document.getElementById('inext').style.display='none';
          }

          //alert(response);
          //console.log(this.postcat);
          //alert(this.ipage)
        })
      },
      getFirstImg(strs){
        var content = strs;
        var str = /<img [^>]*src=['"]([^'"]+)([^>]*>)/gi;
        var src = str.exec(content);
        if(src===null || src===undefined || src===[]) {
          src='';
        }else {
          src = src[0];
          src = src.replace(/ height="\d+"/g, '');
          src = src.replace(/ width="\d+"/g, '');
        }
        /*document.getElementById('imgs').src = src;
         console.log(src);
         alert(src)*/
        return src;

      },
      replaceDS(str){
        /*[&hellip;]*/
        var dc = str.replace(/\[&hellip;\]/g, '');
        return dc;
      },
      inext(){
        scrollTo(0,0);
        this.ipage++;
      },
      ipre(){
        scrollTo(0,0);
        this.ipage--;
      },
      showClose(){
        this.show = !this.show;
      }
    }
  }
</script>
