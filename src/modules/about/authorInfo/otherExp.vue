<template lang="pug">
  el-row
    el-row
      h3.left OTHER EXPERIENCE
    hr.hrSt
    div(v-for="(item, index) in data", :key="index")
      el-row.firstLine
        span.left {{item.firm}}
        span.right {{item.location}}
      el-row.secondLine
        span.left(style="font-style: italic") {{item.position}}
        span.right(style="font-style: italic") {{item.duration}}
      br
</template>
<script>
export default {
  data () {
    return {
      data: [
        { firm: 'International Business Machines Corporation (IBM)',
          location: 'Shanghai, China',
          position: 'Package Solution Consultant, Consulting by Degree',
          duration: '2018.04 to now'
        },
        { firm: 'Huaxia Dun & Bradstreet Business Information Consulting Co., Ltd',
          location: 'Shanghai, China',
          position: 'Business & Operation Intern',
          duration: '2017.10 – 2017.12'
        },
        { firm: 'Shenyang Beiwang Technology Co., Ltd',
          location: 'Shenyang, China',
          position: 'Engineering Department Intern',
          duration: '2015.06 – 2015.18'
        },
        { firm: 'Crowne Plaza',
          location: 'Shenyang, China',
          position: 'Engineering Department Intern',
          duration: '2014.06 – 2014.07'
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
</style>
