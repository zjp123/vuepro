<template >
    <div>
        <nav-bar :title="title"></nav-bar>
        <!-- <ul class="tuwenlist">
            <my-tuwen class="tuwen" :list="tuwenlist">
                
            </my-tuwen>
           
        </ul> -->
        <my-tuwen :list="tuwenlist"/>
    </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

Vue.component(Header.name, Header);

export default {
    name:'NewList',
    
    data() {
        return {
            title:'新闻列表',
            tuwenlist:null
        }
    },
    created() {
        this.$axios.get('https://easy-mock.com/mock/5d020568e6892c08691bf0e0/example/newslist').
        then(res=>{
            console.log(res)
            this.tuwenlist = res.data.data
        }).
        catch(err=>{
            console.error(err)
        })
    },
    
}
</script>
<style lang="less" scoped>
        .tuwenlist{
            margin-top:10px;
        }
        ul,li{
            list-style: none;
            margin: 0;
            padding: 0;
            
        }
        
        
    
    
</style>
