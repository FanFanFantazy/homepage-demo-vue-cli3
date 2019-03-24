<template lang="pug">
el-row
  el-row
    h3.left RELEVANT SKILLS
  hr.hrSt
  el-row
    el-row(v-for="(item, index) in list", style="line-height:30px; text-align:left", :key="index")
      span.labelStyle {{`${item.label}: `}}
      span {{item.content}}

</template>
<script>
export default {
  data () {
    return {
      list: [
        { label: 'Languages', content: 'Native speaker of Mandarin; proficient in English.' },
        { label: 'Coding Skills', content: 'VUE, JavaScript, HTML, C++/C, MATLAB, Python.' },
        { label: 'Management Tools', content: 'Git, Gitea, SVN, JIRA.' },
        { label: 'IBM Badges', content: 'Enterprise Design Thinking Co-Creator, Insurance Industry Foundations.' },
        { label: 'Others', content: 'Micro-server, Embedded programming, Photoshop, Premiere. ‘Agile@IBM’ Training.' }
      ]
    }
  }
}
</script>
<style scoped>
.labelStyle {
  font-weight: 700;
}
</style>
