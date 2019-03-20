<template lang="pug">
  <div class="home">
    el-container
      el-header
        fanMenu
      el-main
      el-footer(height="100px")
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
  height: 700px;
  padding: 0px;
}
</style>
>
