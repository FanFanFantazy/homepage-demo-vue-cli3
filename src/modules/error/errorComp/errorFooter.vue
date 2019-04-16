<template lang="pug">
  el-row(:gutter="10")
    el-col(:span="12")
      el-button.buttonStyle(size="large" @click="backHome") Home
    el-col(:span="12")
      el-button.buttonStyle(size="large" @click="backPrev") Last Page ({{ second }}s)
</template>

<script>
export default {
  name: 'errorFooter',
  data () {
    return {
      second: 11,
      timer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      if (this.second === 1) this.backPrev()
      else this.second--
    }, 1000)
  },
  methods: {
    backHome () {
      this.$router.replace({
        name: 'Home'
      })
    },
    backPrev () {
      this.$router.go(-1)
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.buttonStyle {
  width: 100%;
  background-color: #1f1f1f;
  border: 0px solid #DCDFE6;
  color: #888;
}
</style>
