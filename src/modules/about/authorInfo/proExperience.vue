<template lang="pug">
  el-row
    el-row
      h3.left PROFESSIONAL EXPERIENCE
    hr.hrSt
    div(v-for="(item, index) in data", :key="index")
      el-row.firstLine
        span.left {{item.project}}
        span.right {{item.location}}
      el-row.secondLine
        span.left {{item.position}}
        span.right {{item.duration}}
      p(style="text-align:left;") Project Description:
        span.left(style="text-align:justify; margin-top:10px; margin-bottom: 10px; color: #888; font-size: 14px;") {{item.desc}}
      br
      p(style="text-align:left") Contribution
      ul.thirdLine
        li(v-for="(item2, index2) in item.list", :key="index2", style="margin-bottom: 5px") {{item2}}
      br
      hr.hrSt(v-if="index !== data.length - 1")
      br
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          project: 'FMCG Marketing System',
          location: 'SiChuan, China',
          position: 'Front-end Developer',
          duration: '2019.04 to now',
          desc: 'One of the most important marketing system of Chinese top line fast moving consumer goods firm. Which contains a mutit-channel selling rewards plan system',
          list: [
            'Mainly responsible for front-end program refactoring and developing',
            'Utilising VUE, JS, Element-UI, Echarts, etc.'
          ]
        },
        {
          project: 'Insurance Non-auto Core System',
          location: 'Shanghai, China',
          position: 'Workbench Front-end Leader & Developer',
          duration: '2018.04 – 2019.04',
          desc: 'As a huge agile website developing project, non-auto core system mainly contains 6 modules and some correlative system developments. Over 200 participators involved in this project for over 1 year. It is the largest IT project in the insurance firm within the recent 5 years.',
          list: [
            'Front-end developer and junior architecture in non-auto core system of the insurance industry.',
            'Mainly responsible for the agile development schedule management in workbench, public components and working tools modules of the system.',
            'Managed multi-environment coding version, front-end release schedule and release version to support the release team by implementing agile development model.',
            'Designed the business process of the rule engine and developed front-end webpages.',
            'Participated in the designing process of the front -end architecture, developing process and code managing process.',
            'Communicated with BA, test, PMO and other developing teams to cover the knowledge gaps and solve non-technical problems between developers and them.',
            'Trained new developers for obeying development standards, following data safety regulations, understanding basic situations of the project and constructing local developing environments.'
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
.firstLine {
  font-size: 18px;
  line-height: 30px;
}
.secondLine {
  font-style: italic;
  font-size: 14px;
  color: #888;
}
.thirdLine {
  text-align:left;
  line-height:20px;
  font-size: 14px;
  color: #888;
}
</style>
