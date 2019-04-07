<template lang="pug">
el-row.inputStyle
  el-input(v-model="inputVal", size="mini", placeholder="jordan", clearable, @keyup.enter.native="searchInfo")
    el-button(slot="append", @click="searchInfo") Search
</template>

<script>
// import AJDesc from './AJDesc.js'

export default {
  props: [],
  data () {
    return {
      inputVal: 'jordan'
    }
  },
  created () {
    this.searchInfo()
  },
  mounted () {
    this.bus.$off('refresh').bus.$on('refresh', (result) => {
      this.searchInfo()
    })
  },
  methods: {
    searchInfo () {
      this.$emit('searchInfo', this.inputVal)
    }
  }
}
</script>

<style scoped>
.inputStyle {
  margin-left: 57.5%;
  width: 30%;
  position: absolute;
  margin-top: -62px;
  z-index: 1;
  float: right;
}
</style>
