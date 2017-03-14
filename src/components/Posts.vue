<template>
  <div class="po">
    <div class="posts">
        <div class="box" v-for="(item, index) in posts">
          <div class="post">
            <router-link :to="{path:'/article',query: {id:posts[index].id}}">{{posts[index].title.rendered}}</router-link>
            <div class="line-k"></div>
            <div class="posts-img" v-html="getFirstImg(posts[index].content.rendered)"></div>
            <div class="description" v-html="replaceDS(posts[index].excerpt.rendered)"></div>
          </div>
        </div>
          <a id="pre" @click="pre"><i class="fa fa-angle-left" aria-hidden="true"></i>PREVIOUS</a>
          <a id="next" @click="next">NEXT<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/public.styl"
  @import "../assets/css/font-awesome.min.css"
.po
  background #ffffff
  width 100%
  .posts
    width 100%
    height 100%
    overflow auto
    margin 40px auto 68px auto
    & a
      color darkcyan
      padding 5px
      border-radius 2px
      &#pre
        float left
        font-rem(18)
        padding 5px 10px 10px 10px
        line-height 32px
        & i
          font-rem(28)
          margin-right 10px
          float left
      &#next
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
        .posts-img
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
      name:'iposts',
      data() {
        return{
          apiUrl:'http://www.egtch.com/wp-json/wp/v2/posts',
          posts:{},
          page: 1,
          show: false
        }
      },
      created(){
        this.getPosts(this.page)
      },
      watch: {
        // 如果路由有变化，会再次执行该方法
        'page': 'getPosts'
      },
      methods:{
        getPosts(p){
              if(p<1){
                  p = 1
              }
              this.$http.get(this.apiUrl+'?page='+p).then(response => {
                // get body data
                response = response.body
                if(response.length > 0){
                  this.posts = response
                  document.getElementById('next').style.display='block';
                }
                if(response.length < 10){
                  document.getElementById('next').style.display='none';
                }

                //alert(response);
                //console.log(this.posts);
                //alert(this.page)
              })
          },
        //获取class对象
        $class(domclass){
          var odiv = document.getElementsByTagName("*");
          var aResult = []; //定义一个空数组，用来存放与目标className相同的元素
          for(var i = 0; i<odiv.length; i++)
          {//这个是遍历页面中所有元素然后拿他们的class进行对比。如果和我们传进来的domclass这个参数一样就把他放进数组 aResult中。
            if(odiv[i].className == domclass)
            {
              aResult.push(oDiv[i]);   //获取到的元素推进数组中
            }
            return aResult;   //返回这个放进了domclass元素的数组
          }
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
          next(){
            scrollTo(0,0);
            this.page++;
            this.showClose();
          },
          pre(){
            scrollTo(0,0);
            this.page--;
          },
          showClose(){
            this.show = !this.show;
          }
      }
    }

</script>
