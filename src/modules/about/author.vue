<template lang="pug">
div(style="color:#ddd; min-height:650px")
  el-col(:span="2")
    p
  el-col(:span="5")
    el-card.cardStyle(style="width: 95%")
      img.imgStyle(src="./authorInfo/timg.jpg")
      div(style="margin-top: 10px;")
        span(style="font-size: 20px;margin-top:10px") FanFanFantazy
        br
        span(style="font-size: 20px; color: #555") FAN WANG
    hr.hrSt(style="margin-bottom:0px; margin-top: 0px;width:95%; margin-left:0px; height:1px")
    el-card.cardStyle(style="width: 95%; margin-top:0px")
      el-row(v-for="(item, index) in list", :key="index")
        el-button.buttonStyle(@click="changePhase(item.value)", type="info") {{item.label}}
  el-col(:span="10")
    el-card.cardStyle
      transition(name="el-fade-in-linear")
        education(v-if="phase==='education'")
        proExperience(v-else-if="phase==='proExperience'")
        otherExp(v-else-if="phase==='otherExp'")
        relevantSkills(v-else-if="phase==='relevantSkills'")
  el-col(:span="5")
    el-card.cardStyle.right(style="width: 95%;")
      el-carousel(height="150px; width:100%", indicator-position="none", :autoplay="false")
        el-carousel-item(v-for="(item, index) in contract" :key="item")
          img(:src="item.image", style="width:100%")
    el-card.cardStyle.right(style="width: 95%; margin-top:20px")
      el-row(v-for="(item, index) in contract", :key="index")
        el-button.buttonStyle(type="info", style="text-align: left;", @click="jumpToMedia(item.url)")
          img.iconStyle(:src="item.image")
          span(style="margin-left: 10px; font-size:20px; vertical-align: middle;") {{item.method}}
</template>
<script>
import education from './authorInfo/education.vue'
import proExperience from './authorInfo/proExperience.vue'
import otherExp from './authorInfo/otherExp.vue'
import relevantSkills from './authorInfo/relevantSkills.vue'

export default {
  components: {
    education,
    proExperience,
    otherExp,
    relevantSkills
  },
  data () {
    return {
      phase: 'education',
      list: [
        { value: 'education', label: 'EDUCATION' },
        { value: 'proExperience', label: 'PROFESSIONAL EXPERIENCE' },
        { value: 'otherExp', label: 'OTHER EXPERIENCE' },
        { value: 'relevantSkills', label: 'RELEVANT SKILLS' }
      ],
      contract: [
        { method: 'Facebook', url: 'https://facebook.com', image: '/iconSet/facebook.png' },
        { method: 'Instagram', url: 'https://www.instagram.com', image: '/iconSet/instagram.jpg' },
        { method: 'GitHub', url: 'https://github.com/', image: '/iconSet/GitHub.png' },
        { method: 'WeChat', url: 'https://www.wechat.com/', image: '/iconSet/wechat.jpg' },
        { method: 'E-mail', url: 'https://www.google.com/intl/zh-CN/gmail/about/#', image: '/iconSet/Gmail.jpg' }
      ]
    }
  },
  methods: {
    changePhase (val) {
      this.phase = ''
      setTimeout(() => {
        this.phase = val
      }, 200)
    },
    jumpToMedia (val) {
      window.open(val)
    }
  }
}
</script>

<style scoped>
.cardStyle {
  margin-top: 50px;
  width: 100%;
  margin-bottom:0px;
  background-color: #1f1f1f;
  border: none;
  color: #ccc;
  border-radius: 0px;
}
.imgStyle {
  width:120px;
  border-radius: 50px;
}
.buttonStyle {
  width: 100%;
  background-color: #1f1f1f;
  border: 0px solid #DCDFE6;
  color: #888
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
.iconStyle {
  width: 30px;
  clip:rect(0px, 30px , 30px , 0px);
  border-radius: 30px;
  vertical-align: middle;
}
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__indicators .el-carousel__indicator {
  padding: 0px
}
</style>
