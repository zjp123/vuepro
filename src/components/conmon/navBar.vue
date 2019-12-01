<template >
    <div>
        <mt-header :title="title" class="newsList">
            <div @click="goback" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
    </div>
</template>

<script>
export default {
    name:'nav-bar',
    props:['title'],
    methods: {
        goback () {
            this.$router.go(-1)
        }
    }
    
}
</script>
<style lang="less" scoped>
    .newsList.mint-header {
        background-color: #3d9292;
    }
    
</style>
