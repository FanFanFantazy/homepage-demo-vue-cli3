<template lang="pug">
  el-row
    el-row
      h3.left EDUCTION
    hr.hrSt
    div(v-for="(item, index) in data", :key="index")
      el-row.firstLine
        span.left(style="cursor:pointer", @click="showBox(index)") {{item.school}}
        span.right {{item.location}}
      el-card.cardStyleOut(v-show="showBlock[index] === true")
        img(style="width:130px;", :src="item.img")
        el-card.cardStyle(v-for="(item2, index2) in item.desc", :key = "index2", v-if="index2%2===0")
          span.left {{item2}}
          span.right(style="font-size:18px; margin-left:10px") {{item.desc[index2 + 1]}}
      el-row.secondLine
        span.left {{item.major}}
        span.right {{item.duration}}
      ul.thirdLine
        li(v-for="(item2, index2) in item.list", :key="index2", style="margin-bottom: 5px") {{item2}}
      br
</template>
<script>
export default {
  data () {
    return {
      showBlock: [true, true],
      data: [
        { school: 'Warwick Business School, University of Warwick',
          desc: ['2019 QS World University Ranking', '#54', '2019 QS WUR By Subject Ranking', '#20', '2019 Graduate Employability Ranking', '#75'],
          img: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=b5803ab361600c33e474d69a7b253a6a/a71ea8d3fd1f413449e9fcd92f1f95cad0c85ebf.jpg',
          location: 'Coventry, UK',
          major: 'MSc Information Systems Management and Innovation',
          duration: '2016.10 – 2018.02',
          list: ['Degree: Merit Master’s Degree', 'Modules Included: Data & Business Intelligence, Information Systems Consultancy, Digital Business and Workplace Technologies, Global Sourcing and Innovation etc.', 'Research Direction: Business Intelligence and Analytics in Online Game Operations']
        },
        { school: 'University of Liverpool',
          desc: ['2019 QS World University Ranking', '#164', '2019 QS WUR By Subject Ranking', '#9', '2019 Graduate Employability Ranking', '#141-150'],
          img: 'http://5b0988e595225.cdn.sohucs.com/images/20180921/396aa1f0a4f145eb8cc8a5446759c6f3.jpeg',
          location: 'Liverpool, UK',
          major: 'BSc Electrical Engineering and Electronic',
          duration: '2012.09 – 2016.07',
          list: ['Degree: 1st Class Honours', 'Rewards: Farnell Electronic Component Company Prize', 'Excellent Final Year Project: Producing beer fermentation machine']
        }
      ]
    }
  },
  methods: {
    showBox (index) {
      console.log(this.showBlock[index])
      this.$set(this.showBlock, index, !this.showBlock[index])
      console.log(this.showBlock[index])
    }
  }
}
</script>
<style scoped>
.firstLine {
  font-size: 16px;
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
.cardStyle {
  background-color: #222;
  margin:5px;
  border: none;
  color: #888;
  font-size:12px;
  width:90%;
  display: block;
}
.cardStyleOut {
  margin:10px;
  background-color: #222;
  border: none;
  color: #ccc;
}
</style>
