<template lang="pug">
  el-dialog.diaStyle(:title="initTitle", :visible.sync="visibleVal", width="70%", center, :before-close="closeDia")
    el-row
      el-col(:span="16")
        div(style="width:100%; height:680px")
          img.imageStyle(:src="diaInfro.image")
      el-col(:span="7", style="color: #ccc;")
        p(style="margin-top:5%; margine-left:10%; margin-right:5%; font-size:18px;") {{initTitle}}
        p(style="text-align: justify;  font-size:16px;") {{desc}}
        p(style="text-align: justify;  font-size:16px;") {{desc2}}
      el-col(:span="1", style="text-align:right")
        div.closeStyle
          i(class="el-icon-close", @click="closeDia")

</template>

<script>
import AJDesc from './AJDesc.js'

export default {
  props: ['visibleVal', 'diaInfro'],
  data () {
    return {
      desc: '',
      desc2: ''
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
  width: 700px;
  /* margin-top: -300px;
  position: absolute;
  clip:rect(300px, 700px , 980px , 0px); */
}
.closeStyle {
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
