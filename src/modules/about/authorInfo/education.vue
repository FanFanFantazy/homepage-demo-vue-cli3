<template lang="pug">
  el-row
    el-row
      h3.left EDUCTION
    hr.hrSt
    div(v-for="(item, index) in data", :key="index")
      el-row.firstLine
        span.left {{item.school}}
        span.right {{item.location}}
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
      data: [
        { school: 'Warwick Business School, University of Warwick',
          location: 'Coventry, UK',
          major: 'MSc Information Systems Management and Innovation',
          duration: '2016.10 – 2018.02',
          list: ['Degree: Merit Master’s Degree', 'Modules Included: Data & Business Intelligence, Information Systems Consultancy, Digital Business and Workplace Technologies, Global Sourcing and Innovation etc.', 'Research Direction: Business Intelligence and Analytics in Online Game Operations']
        },
        { school: 'University of Liverpool',
          location: 'Liverpool, UK',
          major: 'BSc Electrical Engineering and Electronic',
          duration: '2012.09 – 2016.07',
          list: ['Degree: 1st Class Honours', 'Rewards: Farnell Electronic Component Company Prize', 'Excellent Final Year Project: Producing beer fermentation machine']
        }
      ]
    }
  }
}
</script>
<style scoped>
.firstLine {
  font-size: 18px;
}
.secondLine {
  font-style: italic;
  font-size: 14px;
}
.thirdLine {
  text-align:left;
  line-height:20px;
  font-size: 14px;
}
</style>
