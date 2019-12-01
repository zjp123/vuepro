<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <mt-swipe :auto="3000" class="swipeS" >

      <mt-swipe-item v-for="item of imgs" :key="item.url">
        <img :src="geturl(item.url)" alt="">
        <!-- <img src="../assets/logo.png" alt=""> -->
      </mt-swipe-item>
      
    </mt-swipe>
    <div id="grid">
      <myUl>
        <myLi v-for="item of imgTexts" :key="item.title">
          <router-link :to="item.route.name">
            <span :class="item.className"></span>
            <div>{{item.title}}</div>
          </router-link>
        </myLi>
       
      </myUl>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import Installer from '../plugin/testplugin.js'

Vue.use(Installer)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// const Mock = require('mockjs')
// Mock.mock(/mock\-index.js/)

export default {
  name: 'Home',
  data() {
    return {
      imgs:null,
      imgTexts:[
        {
          title:'新闻咨询', route:{name: 'newList'}, className:'back-news'
        },
        {
          title:'图文分享', route:{name: 'News'}, className:'back-tuwen'
        },
        {
          title:'商品展示', route:{name: 'News'}, className:'back-shopshow'
        },
        {
          title:'留言反馈', route:{name: 'News'}, className:'back-liuyan'
        },
        {
          title:'商品搜索', route:{name: 'News'}, className:'back-search'
        },
        {
          title:'联系我们', route:{name: 'News'}, className:'back-lianxi'
        }
      ]
    }
  },
  methods:{

    geturl: function (url){

      return require(`../assets/${url}`)
    }
  },
  created() {
    //https:www.sinya.online/api/getlunbo
    // console.log(this.$log)
    console.log('state', this.$store.state)
    
    this.$axios.get('https://easy-mock.com/mock/5d020568e6892c08691bf0e0/example/getimage').
    then(res=>{
      console.log(res)
      this.imgs = res.data.data
    }).catch(err=>{
        console.log(err)
    })
  },
  beforeRouteLeave (to, from, next) {
        console.log('testnum: ', window.test)
        next()
  }
  
}
</script>
<style lang='less'>
  .swipeS{
    height:300px;
    border: 1px solid #ddd;
  }
  .mint-swipe-indicator.is-active{
    background: red;
  }
  .mint-swipe-item{

    img{
      width: 100%;
    }

  }
 
</style>
