<template>
<div class="scroll">
    <nav-bar title="图文详情"></nav-bar>

   <div>这是图文列表的详情页</div>
   <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
    </mt-loadmore>
</div>
</template>

<script>
import Vue from 'vue'
import mtLoadmore from '../views/loadmore.vue'
// import { Loadmore } from 'mint-ui';

// Vue.component(Loadmore.name, Loadmore);
// var ComponentB = {
//   name:'TestContent',
//   components: {
//     'componenta': mtLoadmore,
    
//   },
//   // ...
// }

Vue.component(mtLoadmore.name, mtLoadmore)


export default {
    name:'TuwenDetail',
    data(){
        return {
            list:[1,2,3,4,5,6],
            // translate: 0,
            // scrollEventTarget: null,
            // containerFilled: false,
            // topText: '',
            // topDropped: false,
            // bottomText: '',
            // bottomDropped: false,
            // bottomReached: false,
            // direction: '',
            // startY: 0,
            // startScrollTop: 0,
            // currentY: 0,
            // topStatus: '',
            // bottomStatus: '',
            allLoaded:false
        }
    },
    methods: {
        loadTop() {
            // ...// 加载更多数据
            this.$refs.loadmore.onTopLoaded()
        },
        loadBottom() {
            // ...// 加载更多数据
            this.allLoaded = true // 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded()
        },
      
    },

}
</script>
<style lang="less" scoped>
ul{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
    border: 1px solid #ddd;
    height: 60px;
}
</style>
