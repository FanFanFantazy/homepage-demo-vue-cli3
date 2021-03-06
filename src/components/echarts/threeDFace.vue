<template lang="pug">
div(:id="chartid" :style="chartSize", @mousemove="clickValue")
</template>
<script>
import echarts from 'echarts'
import 'echarts-gl'

let passData = null
let img = new Image()
let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d')

export default {
  props: {
    chartdata: String,
    chartid: String,
    chartSize: Object,
    displayWhite: Boolean
  },
  data () {
    return {
      myChart: null
    }
  },
  mounted () {
    passData = null
  },
  created () {
  },
  beforeDestroy () {
    if (this.myChart && this.myChart !== null) {
      window.removeEventListener('resize', this.myChart.resize)
      this.myChart.dispose() // dispose the Echart
    }
  },
  watch: {
    chartdata (val, oldValue) {
      if (!val) {
        window.removeEventListener('resize', this.myChart.resize)
        if (this.myChart) {
          this.myChart.dispose() // dispose the Echart
        }
      } else if (val !== oldValue) {
        this.default()
      }
    },
    displayWhite (val, oldValue) {
      if (val !== oldValue) {
        this.default()
      }
    }
  },
  methods: {
    default () {
      this.myChart = echarts.init(document.getElementById(this.chartid))
      this.showLoading()
      img.src = this.chartdata
      const that = this
      img.onload = function () {
        var width = canvas.width = img.width
        var height = canvas.height = img.height
        ctx.drawImage(img, 0, 0, width, height)
        var imgData = ctx.getImageData(0, 0, width, height)
        var data = []
        for (var i = 0; i < imgData.data.length / 4; i++) {
          var r = imgData.data[i * 4]
          var g = imgData.data[i * 4 + 1]
          var b = imgData.data[i * 4 + 2]
          let lum = 255 - (0.2125 * r + 0.7154 * g + 0.0721 * b)
          lum = ((lum - 125) / 20 + 25).toFixed(2)
          if (that.displayWhite === true) {
            data.push([i % width, height - Math.floor(i / width), lum])
          } else if (that.displayWhite === false) {
            if (lum > 19.5) {
              data.push([i % width, height - Math.floor(i / width), lum])
            } else {
              data.push([0, 0, 0])
            }
          }
        }
        that.drawLine(data, imgData)
      }
    },
    drawLine (data, imgData) {
      this.myChart.setOption({
        tooltip: {
          show: false
        },
        toolbox: {
          show: true,
          right: 10,
          top: 'bottom',
          itemSize: 18,
          feature: {
            restore: {
              title: 'Restore'
            },
            saveAsImage: {
              type: 'jpeg',
              title: 'Save'
            }
          }
        },
        backgroundColor: '#fff',
        xAxis3D: {
          type: 'value'
        },
        yAxis3D: {
          type: 'value'
        },
        zAxis3D: {
          type: 'value',
          min: 0,
          max: 40
        },
        grid3D: {
          viewControl: {
            alpha: 90,
            beta: 0
          },
          postEffect: {
            enable: true,
            SSAO: {
              enable: false
            }
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true
          },
          boxDepth: 120,
          light: {
            main: {
              shadow: false,
              intensity: 0.1
            },
            ambientCubemap: {
              texture: 'data-gl/asset/canyon.hdr',
              exposure: 2,
              diffuseIntensity: 0.2,
              specularIntensity: 1
            }
          }
        },
        series: [{
          type: 'bar3D',
          shading: 'realistic',
          barSize: 2,
          wireframe: {
            show: false
          },
          itemStyle: {
            color: function (params) {
              var i = params.dataIndex
              var r = imgData.data[i * 4]
              var g = imgData.data[i * 4 + 1]
              var b = imgData.data[i * 4 + 2]
              return 'rgb(' + [r, g, b].join(',') + ')'
            }
          },
          data: data
        }]
      })
      this.myChart.on('mouseover', 'series', (params) => {
        passData = params
      })
      this.myChart.hideLoading()
      window.addEventListener('resize', this.myChart.resize)
    },
    showLoading () {
      this.myChart.showLoading({
        text: 'Loading...',
        x: 'center',
        y: 'center',
        color: '#005bac',
        textColor: '#FFFFFF',
        maskColor: 'rgba(0, 0, 0, 0.9)'
      })
    },
    clickValue () {
      if (passData) {
        this.$emit('clickbar', passData)
      }
    }
  }
}
</script>
