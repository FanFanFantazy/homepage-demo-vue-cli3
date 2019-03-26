<template lang="pug">
  el-dialog.diaStyle(:title="initTitle", :visible.sync="visibleVal", :width="`${widthVal}0%`", center, :before-close="closeDia")
    el-row(type="flex")
      el-col(:span="(16/7)*widthVal")
        div(style="height:680px")
          img.imageStyle(:src="diaInfro.image")
      el-col(style="color: #ccc; max-width: height: 680px; overflow:hidden; margin-left:20px; margin-right:5px;")
        p(style="margin-top:5%; font-size:18px;") {{initTitle}}
        p(style="text-align: justify;  font-size:16px;") {{desc}}
        p(style="text-align: justify;  font-size:16px;") {{desc2}}
      el-col(:span="2", style="text-align:right")
        div.closeStyle
          i(class="el-icon-close", @click="closeDia")

</template>

<script>
import AJDesc from './AJDesc.js'

export default {
  props: ['visibleVal', 'diaInfro', 'widthVal'],
  data () {
    return {
      desc: '',
      desc2: ''
      // widthVal: '50%'
    }
  },
  computed: {
    initTitle: function () {
      let that = this
      return that.diaInfro.title !== undefined ? that.diaInfro.title + that.diaInfro.subTitle : ''
    }
  },
  created () {
    this.desc = AJDesc.desc !== undefined ? AJDesc.desc : ''
    this.desc2 = AJDesc.desc2 !== undefined ? AJDesc.desc2 : ''
  },
  methods: {
    closeDia () {
      this.$emit('closeDia', false)
    }
  }
}
</script>
<style>
.el-dialog {
  margin-top: 3vh !important;
  background-color: #333
}
.el-dialog__header {
  background-color: #333;
  display: none;
}
.el-dialog__body {
  padding: 0px !important;
  background-color: #111;
  max-height: 700px;
}
.el-dialog__title {
  color: #ccc;
}
</style>
<style scoped>
.imageStyle {
  height: 680px;
  /* margin-top: -300px;
  position: absolute;
  clip:rect(300px, 700px , 980px , 0px); */
}
.closeStyle {
  width: 35px;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  transition: font-size 2s;
  -moz-transition: font-size 2s; /* Firefox 4 */
  -webkit-transition: font-size 2s; /* Safari and Chrome */
  -o-transition: font-size 2s; /* Opera */
}
.closeStyle :hover {
  font-size: 30px;
  color: #aaa;
}
</style>
