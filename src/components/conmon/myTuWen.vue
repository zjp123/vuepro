<template>
    <ul class="tuwenlist">  
        <li class="tuwen" v-for="item of list" :key="item.time" @click="gotoDetail(item.id)">
            <img :src="getimag(item.url)" alt="" :data-id="item.id">
            <div class="right">
                <p>{{item.title}}</p>
                <p><span>点击数{{item.clicknum}}</span><span>发表时间{{item.time}}</span></p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name:'my-tuwen',
    props:['list'],
    methods: {
        getimag(url){
            return  require(`../../assets/${url}`)
        },
        gotoDetail(id){
            this.$router.push({ path: `/newList/${id}` })
        }
    },

}
</script>
<style lang="less" scoped>
  li.tuwen{
        position: relative;
     
        border-top: 1px solid #ddd;
        &:last-child{
            border-bottom: 1px solid #ddd;

        }
        img{
            float: left;
            width: 50px;
            height: 50px;
            position: absolute;
            top:50%;
            left:0;
            transform: translateY(-25%);
            

        }
        div.right{

            margin-left: 60px;
            text-align: left;
            position: relative;
            // padding-right: 5px;
            span{
                &:nth-of-type(2){
                    position: absolute;
                    right:5px;
                }
            }
        }
    }
</style>
