<template lang="pug">
  el-menu(class="el-menu-demo", mode="horizontal", @select="handleSelect"
  background-color="#545c64", text-color="#ccc", active-text-color="#ffd04b")
    template(v-for="(item, index) in menuData")
      el-menu-item(v-if="!item.children", :index="item.path", :class="$route.name===item.name?'is-active':''") {{item.name}}
      el-submenu(v-else :index="item.path")
        template(slot="title") {{item.name}}
        template(v-for="(item2, index2) in item.children")
          el-menu-item(v-if="!item2.children", :index="item2.path", :class="$route.name===item2.name?'is-active':''") {{item2.name}}
          el-submenu(v-if="item2.children", :index="item2.path")
            template(slot="title") {{item2.name}}
            template(v-for="(item3, index3) in item2.children")
              el-menu-item(v-if="!item3.children", :index="item3.path", :class="$route.name===item3.name?'is-active':''") {{item3.name}}
              el-submenu(v-if="item3.children", :index="item3.path")
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
      menuData: []
    }
  },
  // watch: {
  //   $route: {
  //     handler: function(val, oldVal){
  //       this.$router.go(0)
  //     },
  //     // 深度观察监听
  //     deep: true
  //   }
  // },
  methods: {
    handleSelect (val, val2) {
      let pathRoad = ''
      for (let i = 0; i < val2.length; i++) {
        pathRoad += i === 0 ? val2[0] : `/${val2[i]}`
      }
      this.$router.push({
        path: pathRoad
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
