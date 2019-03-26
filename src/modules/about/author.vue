<template lang="pug">
div(style="color:#ddd; min-height:800px")
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
    el-card.cardStyle(style="width: 95%; margin-top:0px;")
      el-row(v-for="(item, index) in list", :key="index")
        el-button.buttonStyle(@click="changePhase(item.value)", type="info") {{item.label}}
    el-card.cardStyle(style="width: 95%; margin-top:20px")
      el-row(v-for="(item, index) in contact", :key="index")
        el-button.buttonStyle(type="info", @click="jumpToMedia(item.url)")
          div(style="margin-left:10%")
            img.iconStyle(:src="item.image")
            span(style="margin-left: 10px; font-size:16px; vertical-align: middle;") {{item.method}}
  el-col(:span="10")
    el-card.cardStyle
      transition(name="el-fade-in-linear")
        education(v-if="phase==='education'")
        proExperience(v-else-if="phase==='proExperience'")
        otherExp(v-else-if="phase==='otherExp'")
        relevantSkills(v-else-if="phase==='relevantSkills'")
  el-col(:span="5")
    el-card.cardStyle.right(style="width: 95%;")
      el-row
        h4.left ACADEMIC
      hr.hrSt
      el-carousel(height="200px", indicator-position="none", :autoplay="false", @change="whenCarouselChange")
        el-carousel-item(v-for="(item, index) in projects" :key="index", :label="item.title")
          img(:src="item.image", style="width:100%;")
      p(style="color:#ccc; font-size: 18px; margin-bottom:0px") {{projects[carouselPo].title}}
    el-card.cardStyle.right(style="width: 95%; margin-top:20px; max-height:400px; margin-bottom:70px")
      p(style="color:#ddd; font-size: 16px; margin-top:0px;") Abstract
      hr.hrSt(style="margin-bottom:0px; margin-top:0px")
      div.abstractStyle
        em {{projects[carouselPo].abstract}}
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
      carouselPo: 0,
      list: [
        { value: 'education', label: 'EDUCATION' },
        { value: 'proExperience', label: 'PROF EXPERIENCE' },
        { value: 'otherExp', label: 'OTHER EXPERIENCE' },
        { value: 'relevantSkills', label: 'RELEVANT SKILLS' }
      ],
      contact: [
        { method: 'Facebook', url: 'https://facebook.com', image: '/iconSet/facebook.svg' },
        { method: 'Instagram', url: 'https://www.instagram.com', image: '/iconSet/instagram.svg' },
        { method: 'GitHub', url: 'https://github.com/', image: '/iconSet/github.svg' },
        { method: 'WeChat', url: 'https://www.wechat.com/', image: '/iconSet/wechat.svg' },
        { method: 'E-mail', url: 'https://www.google.com/intl/zh-CN/gmail/about/#', image: '/iconSet/gmail.svg' }
      ],
      projects: [
        { title: 'My Danchelor FYP', image: '/image/FYPindex.jpg', abstract: 'The beer fermentation controller aims to control the temperature and PH value into the optimal values. The CO2 content has been monitored to observe the fermentation process as well. The monitoring system and controlling system were based on the Arduino. Two pumps were responsible for adjusting the PH value by adding acid and alkali solutions into the main fermentation tank. Two fans were in charge of the cooling system. One 240V AC heat belt was controlled by a 5V DC relay. It realized using low DC voltage to control the high AC voltage. The controlling system could not only adjust the temperature and PH, but also saved the power and materials during the fermentation. In addition, all measurements have been sent to Raspberry Pi. A user interface was designed for plotting the measurements. Users can also set the fermentation period and send other commands to the Arduino. It realized the communication between different integrated development environments. The tasty beer was produced in 14 days which is only about a half time of the traditional beer fermentation. The measurements might have contribution to other area or further study.' },
        { title: 'My Master Dissertation', image: '/image/DisserIndex.jpg', abstract: 'Due to the unprecedented change of data acquisition and analytics processes, data technologies are leading the revolution of business development. Business intelligence and analytics is an innovative data management process which helps enterprises to make high quality decisions by translating data into readable knowledge, analyses or conclusions. Online game organisations have great opportunities of developing and implementing BI&A applications. Because online games continuously generate an abundant user data which helps operators to analyse and understand user behaviours to provide high-quality and high-efficiency services. Although BI&A technologies are widely implemented in online game organisations, aimless developments and implementations bring a high failure rate and unrecoverable damages to the whole industry. Because operators ignore special situations of the online game industry, there is not any clear and efficient direction guide the development of BI&A. This research provides a literature review of three generations of BI&A and big data applications in BI&A 3.0 to explain opportunities, contributions and future developments of BI&A. Technology acceptance models are presented in this chapter to develop a specific quantitative research method. In this research, a mixed method is applied to discover requirements of demand and supply sides in online games. Tencent Games case study and TAM test contribute to the analysis of each side.' }
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
    },
    whenCarouselChange (val) {
      this.carouselPo = val
    }
  }
}
</script>

<style scoped>
.cardStyle {
  margin-top: 0px;
  width: 100%;
  margin-bottom: 0px;
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
.iconStyle {
  width: 30px;
  border-radius: 80px;
  vertical-align: middle;
}
.el-carousel__item {
  margin: 0;
  padding: 0px;
  background-color:#fff;
  line-height: 150px;
}
.abstractStyle {
  color: #888;
  font-size: 10px;
  margin-top: 3px;
  text-align: left;
  overflow: hidden;
  margin-bottom: 10px;
  line-height: 20px;
}
</style>
