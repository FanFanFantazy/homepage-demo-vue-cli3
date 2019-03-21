<template lang="pug">
  <div class="home">
    el-container.is-vertical.page
      el-header
        fanMenu
      el-main
        router-view
      el-footer(height="50px")
        fanFooter
  </div>
</template>

<script>
import fanFooter from '@/components/footer.vue'
import fanMenu from '@/components/header.vue'
export default {
  name: 'home',
  components: {
    fanMenu,
    fanFooter
  }
}
</script>
<style scoped>
.el-header, .el-footer {
  background-color: #333;
  color: #333;
  text-align: center;
  padding: 0px;
}
.el-container {
  background-color: #222;
  width: 100%;
  height: 700px;
  padding: 0px;
}
.page {
  width: 100%;
  height: 100%;
}
</style>
>
