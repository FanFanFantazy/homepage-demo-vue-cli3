<template lang="pug">
  div
    p(@click="loginHomepage") login
</template>

<script>
export default {
  name: 'login',
  components: {
  },
  methods: {
    loginHomepage () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>
<style scoped>
</style>
>
