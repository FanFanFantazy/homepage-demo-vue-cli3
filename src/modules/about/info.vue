<template lang="pug">
  div.style
    h1 {{aboutData}}
</template>
<script>
export default {
  data () {
    return {
      aboutData: 'DO THIS SH*T'
    }
  },
  created () {
    this.aboutData = this.$route.path
  }
}
</script>

<style scoped>
.style {
  color:teal;
  line-height: 550px;
}
</style>
