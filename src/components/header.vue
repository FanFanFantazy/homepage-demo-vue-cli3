<template lang="pug">
  el-menu(:default-active="activeIndex2", class="el-menu-demo", mode="horizontal", @select="handleSelect"
  background-color="#545c64", text-color="#aaa", active-text-color="#ffd04b")
    el-submenu(v-for="item in menuData", :index="item.name + `1`")
      template(slot="title") {{item.name}}
      span(v-if="item.children", v-for="item2 in item.children")
        el-menu-item(v-if="!item2.children", :index="item2.name + `2`") {{item2.name}}
        el-submenu(v-if="item2.children", :index="item2.name + `2`")
          template(slot="title") {{item2.name}}
          span(v-for="item3 in item2.children")
            el-menu-item(v-if="!item3.children", :index="item3.name + `3`") {{item3.name}}
            el-submenu(v-if="item3.children", :index="item3.name + `3`")
            template(slot="title") {{item3.name}}
</template>

<script>
import routerData from '@/router.js'

export default {
  name: 'fanheader',
  props: {
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menuData: []
    }
  },
  methods: {
    handleSelect () {
      this.$router.push({
        path: '/spider/socialStatus'
      })
    }
  },
  created () {
    this.menuData = routerData.options.routes
  }
}
</script>

<style scoped>
</style>
