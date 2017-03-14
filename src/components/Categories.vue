<!--suppress ALL -->
<template>
  <div class="cats">
    <div class="categories" v-if="categories">
      <div v-for="(item, index) in categories">
        <div class="categories-item" v-if="categories[index].parent != 0">
          <router-link :to="{path:'/postcat',query: {id:categories[index].id}}"><span v-html="icoIn[index]"></span><span>{{categories[index].name}}</span><span class="cat">{{categories[index].slug}}</span><i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)*/
export default {
  data() {
    return{
      categories:{},
      catUrl:'http://www.egtch.com/wp-json/wp/v2/categories?per_page=15',
      icoIn:{}
    }
  },
  created(){
      this.getCat()
      this.icoIn = [
          '<i class="fa fa-html5" aria-hidden="true"></i>',
          '<i class="fa fa-coffee" aria-hidden="true"></i>',
          '<i class="fa fa-code" aria-hidden="true"></i>',
          '<i class="fa fa-file-code-o" aria-hidden="true"></i>',
          '<i class="fa fa-sticky-note-o" aria-hidden="true"></i>',
          '<i class="fa fa-linux" aria-hidden="true"></i>',
          '<i class="fa fa-sun-o" aria-hidden="true"></i>',
          '<i class="fa fa-superscript" aria-hidden="true"></i>',
          '<i class="fa fa-caret-square-o-down" aria-hidden="true"></i>',
          '<i class="fa fa-caret-square-o-down" aria-hidden="true"></i>',
          '<i class="fa fa-caret-square-o-down" aria-hidden="true"></i>',
          '<i class="fa fa-caret-square-o-down" aria-hidden="true"></i>',
          '<i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>',
          '<i class="fa fa-caret-square-o-down" aria-hidden="true"></i>',
          '<i class="fa fa-caret-square-o-down" aria-hidden="true"></i>'
      ]
  },
  methods:{
      getCat(){
        this.$http.get(this.catUrl).then(response => {
          response = response.body;
          this.categories = response;
      });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/public.styl"
  .cats
    background #ffffff
    width 100%
    .categories
      width 95%
      height 100%
      overflow auto
      margin 48px auto 68px auto
      display block
      .categories-item
        text-align center
        width 100%
        height 60px
        background #ffffff
        border-bottom 1px #f2f2f2 solid
        float left
        display block
        & > a
          display block
          color #000
          height 100%
          padding 10px 0
          font-rem(16)
          & span
            float left
            padding-left 5px
            line-height 40px
            &.cat
              color #CCC
              font-rem(14)
            & i
              font-rem(14)
              color darkcyan
          & i
            float right
            padding-right 10px
            font-rem(24)
            color #CCC
            line-height 40px

</style>
