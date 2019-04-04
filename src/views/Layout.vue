<template lang="pug">
  <div class="home">
    el-container.is-vertical.page
      el-header
        fanMenu
      el-main(style="width:90%;min-height:700px")
        router-view(:key ="key")
        searchTips
        asideTools
      el-footer
        fanFooter
  </div>
</template>

<script>
import fanFooter from '@/components/footer.vue'
import fanMenu from '@/components/header.vue'
import asideTools from '@/components/asideTools.vue'
import searchTips from '@/components/searchTips.vue'

export default {
  name: 'home',
  components: {
    fanMenu,
    fanFooter,
    asideTools,
    searchTips
  },
  computed: {
    key () {
      return this.$route.path + Math.random()
    }
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
  z-index: 3000;
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
