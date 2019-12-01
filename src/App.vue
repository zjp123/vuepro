<template>
  <div id="app">
    <div id="nav">
      <mt-header fixed title="信息管理系统"></mt-header>

      <mt-tabbar v-model="selected">
          <mt-tab-item id="Home" class="itemC">
            <div @click="change('Home')">
              <img slot="icon" src="./assets/index.png">
              
            </div>
            首页
          </mt-tab-item>
          <mt-tab-item id="Vip" class="itemC">
            <div @click="change('Vip')">

              <img slot="icon" src="./assets/vip.png">
            </div>
            会员
          </mt-tab-item>
          <mt-tab-item id="Shopcart" class="itemC">
            <div @click="change('Shopcart')">

              <img slot="icon" src="./assets/shopcart.png">
            </div>
              购物车
          </mt-tab-item>
          <mt-tab-item id="Search" class="itemC">
            <div @click="change('Search')">

              <img slot="icon" src="./assets/find.png">
            </div>
            查找
          </mt-tab-item>
      </mt-tabbar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
    import Vue from 'vue'
    import numtest from './plugin/numtest.js'
    import { Header } from 'mint-ui';
    import { Tabbar, TabItem } from 'mint-ui';

    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(Header.name, Header);
    export default {
      name:'App',
      data(){
        return {
          selected:''
        }
      },
      created() {
        console.log('window.test', test)
      },
      
     methods: {
       change(val){
          window.test.num +=1
          this.$router.push({
             name:val
           })
       }
     },
      // watch: {
      //   //这里不能使用箭头函数
      //   selected:function (newV, oldV){
      //     //  console.log(newV)
      //      this.$router.push({
      //        name:newV
      //      })
      //   }
      // },
    }
</script>
<style lang="less">
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
#nav {
  // padding: 30px;
  height: 40px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .itemC{
    img{
      // width:30px;
      width: 24px;
      height: 24px;
    }
  }
}
</style>
