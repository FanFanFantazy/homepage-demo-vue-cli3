<template lang="pug">
  div.style
    h3 State Number: {{count}}
    h3 Getters Number: {{count2}}
    el-row
      el-button(size="mini", @click="addValue") Add 1
      el-button(size="mini", @click="reduceValue") Reduce 1
    el-row
      el-input(v-model="number", size="mini", style="width: 20%; margin:10px", @input="vaildInput")
      el-button(size="mini", @click="addByNumber(number)") Add by Number
      el-button(size="mini", @click="reduceByNumber(number)") Reduce by Number
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      number: 0
    }
  },
  computed: {
    ...mapState('vuexNum', {
      count: 'count'
    }),
    ...mapGetters('vuexNum', {
      count2: 'getStateCount'
    })
  },
  methods: {
    ...mapActions('vuexNum', [
      'addValue',
      'reduceValue',
      'reduceByNumber',
      'addByNumber'
    ]),
    vaildInput (val) {
      this.number = Number.parseFloat(val) ? this.number : ''
    }
  }
}
</script>

<style scoped>
.style {
  color:teal;
}
.el-button.el-button--default:hover {
  color: #333 !important;
  background-color: #888 !important;
}

.el-button.el-button--default:focus {
  color: #333 !important;
  background-color: #888 !important;
}
.el-button.is-disabled {
  color: #666 !important;
  background-color: #555 !important;
}
</style>
