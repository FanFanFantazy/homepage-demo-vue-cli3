<template lang="pug">
  div
    shoeSearch(@searchInfo='handleSelect')
    el-row(:gutter="20")
      el-col(v-for="(item, index2) in listAry", :key="item.id", :span="6")
        el-card.cardStyle
          el-row
            el-col(:span="6")
              img.imageStyle(:src="item.image", @click = "openDialog(item)")
            el-col(:span="18")
              div(style="margin-left:10px; height: 70px; overflow:hidden; display:block-inline")
                div.titleHover(@click="jumpToPage(item.url)")
                  span.titleStyle {{item.title}}
                span.subStyle {{item.subTitle}}
              div(style="height:30px; display:block; margin-top:10px; margin-left:10px;")
                span.subStyle(style="font-size:14px; color:#ccc; text-shadow: #000 2px 1px 2px;") Pice: {{item.price}}
    el-row
      div(style="display: block; height:50px")
    shoeDialog(:visibleVal="visibleVal", :diaInfro = "diaInfro" @closeDia="closeDialog", widthVal="7")
</template>

<script>
import shoeDialog from './shoeViewComp/shoeDialog.vue'
import shoeSearch from './shoeViewComp/shoeSearch.vue'
import _ from 'lodash'
/* eslint-disable */
let request = require('request')
let cheerio = require('cheerio')
const baseUrl = 'https://www.deadstock.ca'
let arr = []

export default {
  name: 'deedStock',
  props: {
  },
  components: {
    shoeDialog,
    shoeSearch
  },
  data () {
    return {
      listAry: [],
      visibleVal: false,
      diaInfro: {}
    }
  },
  beforeDestroy() {
    this.listAry = []
    arr = []
  },
  methods: {
    openDialog(val) {
      this.visibleVal = true
      this.diaInfro = _.cloneDeep(val)
    },
    closeDialog(val) {
      this.visibleVal = val
    },
    jumpToPage (val) {
      window.open(val)
    },
    handleSelect (val) {
      val = val === '' ? 'jordan' : val
      const loading = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.9)',
      });
      arr = []
      this.listAry = []
      const that = this
      request({
        url: `${baseUrl}/collections/${val}`,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0 Chrome/71.0.3578.98'
        }
      }, function (err, res) {
        loading.close();
        if (res.statusCode === 404)  {
          that.$message({
            message: `Invalid Category! Pls Try 'footwear-${val}' or 'brand-${val}'`,
            showClose: true,
            type: 'error'
          });
        }
        if (err) return console.log(err)
        let $ = cheerio.load(res.body.toString())
        var segement = $('.grid__item')
        segement.each(function () {
          var title = $(this).find('.grid-product__meta').find('.grid-product__title').text().trim()
          if (title !== undefined && title !== null && title !== '') {
            var temp = $(this).find('.grid-product__price').find('.money').text().trim().split('$')
            var price = `$${temp[temp.length - 1]}`
            var url = `${baseUrl}${$(this).find('.grid-product__meta').attr('href')}`
            var image = `https:${$(this).find('img').attr('src')}`.split('150x150').join('720x720')
            arr.push({
              title: title.slice(0, title.length/2),
              subTitle: title.split('[').splice(1, 1).length !== 0 ? `[${title.split('[').splice(1, 1)}` : '',
              url: url,
              price: price,
              image: image
            })
          }
        })
        if (arr.length === 0) {
          return
        }
      })
      this.listAry = arr
    },
  }
}
</script>

<style scoped>
.cardStyle {
  height:140px;
  margin-bottom:20px;
  background-color: #111;
  border-color: #000;
  text-align: left;
}
.titleStyle {
  font-size: 13px;
  color: #ccc;
  margin: 0px;
  font-weight:800;
  cursor: pointer;
}
.titleHover :hover {
  color: #fff;
}
.subStyle {
  font-size: 12px;
  color: #999;
  margin: 0px;
  cursor: default;
}
.imageStyle {
  width: 100%;
  height: 95px;
  display: block;
  cursor: pointer;
}
</style>
