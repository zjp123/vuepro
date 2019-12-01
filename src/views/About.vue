
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <mt-button type="primary">primary</mt-button>
  </div>
</template>

<script>
    import Vue from 'vue'
    import { Button, Cell } from 'mint-ui'
    Vue.component(Button.name, Button);
    // Vue.use(Button);
    export default {}

</script>