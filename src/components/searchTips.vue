<template lang="pug">
div
  transition(name="custom-classes-transition", enter-active-class="animated zoomInDown", leave-active-class="animated zoomOut")
    div.tipholder(v-if="!show", @click="controlWiki(true)")
  transition(name="custom-classes-transition", enter-active-class="animated zoomInDown", leave-active-class="animated zoomOutUp")
    div.tips(v-if="show")
      div(v-show = "!showCategory")
        p.titleStyle {{title}}
        p.tipStyle(v-for="(item, index) in tips", :key="index") {{`${index + 1}) ${item}`}}
      div(v-show = "showCategory", style="margin-top:10px")
        el-col.colStyle(v-for="(item, index) in category" :key="index" :span="8")
          p {{item}}
      el-button.buttonStyle(v-if="!showCategory", size="mini", @click="changeContent", :disabled="title===''", key="button1") {{buttonText[0]}}
      el-button.buttonStyle(v-else, size="mini", @click="changeContent", :disabled="title===''", key="button2") {{buttonText[1]}}
      div.iconStyle
        i(@click="controlWiki(false)", class="el-icon-caret-top", style="width: 100%")
</template>

<script>
// eslint-disable-next-line
import animate from 'animate.css'
import SocialStatus from '@/modules/spider/shoeViewComp/socialStatus.js'
import DeedStock from '@/modules/spider/shoeViewComp/deedStock.js'

export default {
  props: ['menuTitle'],
  data () {
    return {
      show: false,
      title: '',
      tips: [],
      category: [],
      current: '',
      showCategory: false,
      buttonText: ['SEE ALL', 'TO TIPS']
    }
  },
  watch: {
    $route (route) {
      this.controlWiki(false)
      this.showCategory = false
    }
  },
  mounted () {
    this.bus.$off('wiki').bus.$on('wiki', (result) => {
      this.show = result
      this.queryMessage()
    })
  },
  methods: {
    queryMessage () {
      if (this.$route.name.replace(' ', '') === 'SocialStatus') {
        this.title = SocialStatus.title
        this.tips = SocialStatus.tips
        this.category = SocialStatus.category
      } else if (this.$route.name.replace(' ', '') === 'DeedStock') {
        this.title = DeedStock.title
        this.tips = DeedStock.tips
        this.category = DeedStock.category
      } else {
        this.title = ''
        this.tips = []
        this.category = []
      }
    },
    changeContent () {
      this.showCategory = !this.showCategory
    },
    controlWiki (val) {
      this.bus.$emit('wiki', val)
      this.bus.$emit('resetWiki', val)
    }
  }
}
</script>
<style scoped lang="scss">
.tips {
  position: absolute;
  right: 11.2%;
  top: 61px;
  width: 30%;
  user-select: none;
  z-index: 101;
  margin-top: 0px;
  height: auto;
  background-color: #333;
  color: #666;
  border-top: none;
  border-radius: 5px;
  border-top-right-radius: initial;
  border-top-left-radius: initial;
  opacity: 1;
  max-height: 500px;
  overflow-y: auto;
}
.tipholder {
  position: absolute;
  right: 21.2%;
  top: 0px;
  width: 10%;
  height: 10px;
  user-select: none;
  z-index: 101;
  background-color: #333;
  border-top: none;
  border-radius: 5px;
  border-top-right-radius: initial;
  border-top-left-radius: initial;
  opacity: 0.5;
  cursor: pointer;
}
.titleStyle {
  font-size: 14px;
  color: #ccc;
}
.tipStyle {
  font-size: 12px;
  text-align: left;
  color: #bbb;
  padding-left: 30px;
  padding-right: 30px;
  line-height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.buttonStyle {
  width: 90%;
  background-color: #1f1f1f;
  border: 0px solid #DCDFE6;
  color: #888;
  margin-top:20px;
  margin-bottom:10px;
}
.el-button.el-button--default:hover {
  color: #333 !important;
  background-color: #888 !important;
}

.el-button.el-button--default:focus {
  color: #333 !important;
  background-color: #888 !important;
}
.el-button.is-disabled {
  color: #666 !important;
  background-color: #555 !important;
}
.colStyle {
  height: 50px;
  font-size: 12px;
  color: #999;
  text-align: start;
  padding-left: 20px;
  padding-right: 0px;
  overflow: hidden;
}
.iconStyle {
  display: inline-block;
  width: 100%;
  font-size: 11px;
  background-color: #333;
  border: 0px solid #DCDFE6;
  color: #888;
  margin-top:10px;
  margin-bottom:0px;
  cursor: pointer;
}
.iconStyle :hover {
  background-color: #888;
  color: #fff;
}
</style>
