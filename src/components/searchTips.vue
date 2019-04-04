<template lang="pug">
div
  transition(name="custom-classes-transition", enter-active-class="animated zoomInDown", leave-active-class="animated zoomOut")
    div.tipholder(v-if="!show")
  transition(name="custom-classes-transition", enter-active-class="animated zoomInDown", leave-active-class="animated zoomOutUp")
    div.tips(v-if="show")
      div(v-show = "!showCategory")
        p.titleStyle {{title}}
        p.tipStyle(v-for="(item, index) in tips", :key="index") {{`${index + 1}) ${item}`}}
      div(v-show = "showCategory")
        el-col.colStyle(v-for="(item, index) in category" :key="index" :span="8")
          p {{item}}
      el-button.buttonStyle(size="mini", @click="changeContent", :disabled="title===''") {{ showCategory ? buttonText[1] : buttonText[0]}}
</template>

<script>
// eslint-disable-next-line
import animate from 'animate.css'
import SocialStatus from '@/modules/spider/shoeViewComp/socialStatus.js'

export default {
  props: ['menuTitle'],
  data () {
    return {
      show: false,
      title: '',
      tips: [],
      category: [],
      current: '',
      sipders: ['DeedStock', 'SocialStatus'],
      showCategory: false,
      buttonText: ['SEE ALL', 'TO TIPS']
    }
  },
  computed: {

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
      } else {
        this.title = ''
        this.tips = []
        this.category = []
      }
    },
    changeContent () {
      this.showCategory = !this.showCategory
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
  margin-bottom:20px;
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
.colStyle {
  height: 55px;
  font-size: 12px;
  color: #999;
  text-align: start;
  padding-left: 20px;
  padding-right: 0px;
}
</style>
