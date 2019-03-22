<template lang="pug">
  <div>
    p(@click="loginHomepage") login
  </div>
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
