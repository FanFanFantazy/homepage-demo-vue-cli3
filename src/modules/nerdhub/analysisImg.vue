<template lang="pug">
  div
    el-row(:gutter="10")
      el-col(:span="6")
        el-card.cardStyle(style="width: 100%; height: 640px;")
          el-row(style="height: 90px;")
            el-upload(ref="upload", accept=".jpg", action="", :on-change="upload",
            :show-file-list="true", :auto-upload="false" class="el-upload", :on-remove="clearList")
              el-button.buttonStyle(slot="trigger", size="mini") Select Files
          el-row.rowStyle
            el-input(readonly, v-model="coordinate.x", size="mini", placeholder="x")
          el-row.rowStyle
            el-input(readonly, v-model="coordinate.y", size="mini", placeholder="y")
          el-row.rowStyle
            el-input(readonly, v-model="coordinate.z", size="mini", placeholder="z")
          el-row.rowStyle
            el-input(readonly, v-model="coordinate.color", size="mini", placeholder="colour")
          el-row.rowStyle
            el-col(:span="6")
              el-card.appendCard(v-bind:style="'background-color:' + coordinate.color + '; border-color:' + reverseColor(coordinate.color)")
            el-col(:span="18")
              el-row.rowStyle(style="text-align: left; margin-top:0px")
                span(style="margin-right:10px; font-size: 12px;") Show White
                el-switch(active-color="rgb(108, 138, 124)", inactive-color="#555", v-model="displayWhite")
      el-col(:span="18")
        el-card.cardStyle(style="width: 640px; height: 640px;")
          threeDFace(:chartdata="threeD", :displayWhite="displayWhite" chartid="threeDId", :chartSize="{width: '600px', height: '600px'}", @clickbar = "showDataOnBoard")
</template>
<script>
import threeDFace from '@/components/echarts/threeDFace.vue'

export default {
  components: {
    threeDFace
  },
  data () {
    return {
      threeD: '',
      coordinate: {
        x: '',
        y: '',
        z: '',
        color: ''
      },
      displayWhite: false
    }
  },
  mounted () {
    this.bus.$off('refresh').bus.$on('refresh', (result) => {
      this.clearList()
      this.$refs.upload.clearFiles()
    })
  },
  created () {
  },
  methods: {
    reverseColor (val) {
      if (val !== '') {
        const colorCoor = val.split('(')[1].split(')')[0].split(',')
        return `rgb(${255 - colorCoor[0]},${255 - colorCoor[1]},${255 - colorCoor[2]})`
      }
    },
    clearList () {
      this.threeD = ''
      this.coordinate = {
        x: '',
        y: '',
        z: '',
        color: ''
      }
      this.displayWhite = false
    },
    showDataOnBoard (val) {
      this.coordinate = {
        x: `x = ${val.data[0]}`,
        y: `y = ${val.data[1]}`,
        z: `z = ${val.data[2]}`,
        color: `${val.color}`
      }
    },
    upload (file, fileList) {
      fileList.splice(0, fileList.length > 1 ? 1 : 0)
      this.getBase64(file.raw)
    },
    getBase64 (val) {
      let files = val
      let fileSize = 0
      if (files) {
        fileSize = files.size
        if (fileSize > 10 * 1024 * 1024) {
          alert('The Image should not over 10M！')
          files.value = ''
          return false
        } else if (fileSize <= 0) {
          alert('The image cannot be 0M！')
          files.value = ''
          return false
        }
      } else {
        return false
      }
      let reader = new FileReader()
      const that = this
      reader.readAsDataURL(files)
      reader.onload = e => {
        let image = new Image() // create a img tag (not insert in DOM yet)
        image.src = e.target.result
        image.onload = function () {
          let canvas = document.createElement('canvas')
          let context = canvas.getContext('2d')
          let imageWidth = 50 // zippped image size
          let imageHeight = 50
          let data = ''
          canvas.width = imageWidth
          canvas.height = imageHeight
          context.drawImage(image, 0, 0, imageWidth, imageHeight)
          data = canvas.toDataURL('image/jpeg') // finish zip the image
          that.threeD = data
        }
      }
    }
  }
}
</script>
<style lang='scss'>
.el-upload {
  width: 100% !important;
}
.el-input--mini {
  border: none;
}
.el-input--mini .el-input__inner {
  background-color: #555;
  border: none;
  color: #ccc;
}
</style>
<style lang='scss' scoped>
.buttonStyle {
  width: 100%;
  height: 28px;
  background-color: #222;
  border: 0px solid #DCDFE6;
  color: #888;
  text-align: left;
}
.buttonStyle :hover {
  color: #fff;
}
.buttonStyle :active {
  color: #fff
}
.buttonStyle :focus {
  color: #fff
}
.cardStyle {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #2b2b2b;
  border: none;
  color: #ccc;
  border-radius: 0px;
}
.rowStyle {
  margin-top: 16px;
}
.appendCard {
  width: 50px;
  height: 50px;
  border-width: 5px;
}
</style>
