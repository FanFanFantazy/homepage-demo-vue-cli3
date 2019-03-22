<template lang="pug">
  <div class="home">
    el-container.is-vertical.page
      el-header
        fanMenu
      el-main(style="width:90%")
        router-view
        asideTools
      el-footer
        fanFooter
  </div>
</template>

<script>
import fanFooter from '@/components/footer.vue'
import fanMenu from '@/components/header.vue'
import asideTools from '@/components/asideTools.vue'

export default {
  name: 'home',
  components: {
    fanMenu,
    fanFooter,
    asideTools
  }
}
</script>
<style scoped>
.el-header {
  background-color: #333;
  color: #333;
  text-align: center;
  padding: 0px;
}
.el-footer {
  height: "50px";
  width: 100%;
  background-color: #333;
  color: #333;
  text-align: center;
  padding: 0px;
  position: fixed;
  bottom: 0px;
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
