<template lang="pug">
  el-menu(:default-active="activeIndex2", class="el-menu-demo", mode="horizontal", @select="handleSelect"
  background-color="#545c64", text-color="#fff", active-text-color="#ffd04b")
    el-menu-item(index="1") Home
    el-submenu(index="2")
      template(slot="title") VideoHub
      el-menu-item(index="2-1") Option1
      el-menu-item(index="2-2") Option2
      el-menu-item(index="2-3") Option3
      el-submenu(index="2-4")
        template(slot="title") Option4
        el-menu-item(index="2-4-1") Option1
        el-menu-item(index="2-4-2") Option2
        el-menu-item(index="2-4-3") Option3
    el-submenu(index="3")
      template(slot="title") DocHub
      el-menu-item(index="2-1") Option1
      el-menu-item(index="2-2") Option2
      el-menu-item(index="2-3") Option3
      el-submenu(index="2-4")
        template(slot="title") Option4
        el-menu-item(index="2-4-1") Option1
        el-menu-item(index="2-4-2") Option2
        el-menu-item(index="2-4-3") Option3
    el-menu-item(index="4") Others
</template>

<script>
export default {
  name: 'fanheader',
  props: {
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
</style>
