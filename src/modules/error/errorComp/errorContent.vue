<template lang="pug">
  div(class="error-page")
    div(class="text-con")
      span(style="font-size: 200px; text-shadow: 5px 5px 0 #333, 7px 7px 0 #aaa;") {{ code }}
      transition(name="custom-classes-transition", enter-active-class="animated jackInTheBox")
        p(v-show="timer") {{ desc }}
    ErrorFooter(class="back-btn-group")
</template>

<script>
// eslint-disable-next-line
import animate from 'animate.css'
import ErrorFooter from './errorFooter.vue'
export default {
  name: 'ErrorContent',
  components: {
    ErrorFooter
  },
  props: {
    code: String,
    desc: String
  },
  data () {
    return {
      timer: null,
      second: 1
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      // nothing
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.error-page{
  width: 100%;
  height: 100%;
  .text-con{
    width: 100%;
    color: #ccc;
    font-size: 24px;
    margin-top: 10%;
    text-align: center;
  }
  .back-btn-group{
    position: absolute;
    width: 400px;
    right: 5%;
    bottom: 5%;
  }
}
</style>
