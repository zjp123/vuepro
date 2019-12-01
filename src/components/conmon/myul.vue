<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name:'myUl',

}
</script>
<style lang="less" scoped>
    ul,li{
      list-style: none;
    }
    ul{
      // display: flex;
      // justify-content: space-between;
      padding:10px;
    }
    ul li{

      float:left;
      width: 33.33%;
      text-align: center;
      margin-bottom: 20px;
      
    }
</style>
