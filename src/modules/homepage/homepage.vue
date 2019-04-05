<template lang="pug">
  <div class="home">
    el-container.is-vertical.page
      el-header
        fanMenu
      el-main
        div(style="min-height:680px; backgroud-color:#000")
          img(src="./homeBG.jpg", style="width: 100%;")
      el-footer
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
  },
  data () {
    return {
      loading: null
    }
  },
  created () {
    this.loading = this.$loading({
      lock: true,
      background: 'rgba(0, 0, 0, 0.9)'
    })
  },
  mounted () {
    this.loading.close()
  }
}
</script>
<style scoped>
.el-main {
  margin: 0px;
  padding: 0px;
}
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
