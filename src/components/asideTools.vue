<template lang="pug">
  div.aside-tools
    div.tools.tools1(@mouseenter="toggleToolsInfo(true)", @mouseleave="toggleToolsInfo(false)")
      div(@click="toHome")
        //- i.material-icons.icon.size19 grid_on
        span Home
      div(@click="handler('antiInfiltrationRule')")
        //- i.material-icons.icon.size20 error_outline
        span Refresh
      div(@click="handler('caseLabel')")
        //- i.material-icons.icon.size22 bookmark_border
        span Tool1
      div(@click="handler('caseReminder')")
        //- i.material-icons.icon.size22 notifications_none
        span Tool2
      div(@click="handler('thirdPartyRating')")
        //- i.material-icons.icon.size22 star_border
        span Tool3
      div(@click="handler('attention')")
        //- i.material-icons.icon.size20 favorite_border
        span Tool4
      div(@click="handler('antiMoneyLaundering')")
        //- i.material-icons.icon.size21 local_atm
        span Tool5
      div(@click="toAbout")
        //- i.material-icons.icon.size22 format_list_bulleted
        span About
      div(@click="backTop")
        //- i.material-icons.icon.size22 lock_open
        span Back to Top
</template>

<script>

export default {
  components: {},
  data () {
    return {
      showInfo: false,
      anchorHide: false,
      hasAnchor: false,
      isProposal: false
    }
  },
  mounted () {
    this.anchorHide = false
  },
  watch: {
    $route (route) {
      this.anchorHide = false
    }
  },
  methods: {
    toggleToolsInfo (flag) {
      this.showInfo = flag
    },
    toHome () {
      this.$router.push({
        path: '/home'
      })
    },
    toAbout () {
      this.$router.push({
        path: '/about/aboutInfo'
      })
    },
    handler (dialogId) {
      this.$store.commit('Shortcutbar/setVisible', true)
      this.$store.commit('Shortcutbar/setShown', dialogId)
    },
    backTop () {
      const dom = document.body || document.documentElement
      window.smoothScroll(dom, 200)
    }
  }
}
</script>

<style scoped lang="scss">
.aside-tools {
  /*width: 70px;*/
  position: fixed;
  right: 0;
  bottom: 8px;
  user-select: none;
  z-index: 101;
  > .tools.tools1 {
    background-color: #333;
    // width: 100%;
    width: 40px;
    // right: -101px;
    float: right;
    transition: width 0.2s;
    -moz-transition: width 0.2s;
    -webkit-transition: width 0.2s;
    -o-transition: width 0.2s;
    -ms-transition: width 0.2s;
    bottom: 106px;
    &:hover {
      // right: 0;
      width: 141px; /* 六个字的设置，若超出请改此处，7字154px，8字168px */
    }
  }
  > .tools {
    position: fixed;
    right: 0;
    bottom: 8px;
    padding: 4px 0;
    background: #fff;
    border: 1px solid #333;
    border-right: none;
    border-radius: 5px;
    border-bottom-right-radius: initial;
    border-top-right-radius: initial;
    // width: 40px;
    div {
      height: 24px;
      overflow: hidden;
      padding: 6px 8px;
      color: #666;
      &:hover {
        background: #888;
        color: #fff;
        cursor: pointer;
      }
      > span {
        vertical-align: top;
        line-height: 24px;
        padding: 0 8px;
      }
      > i {
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
      }
    }
    hr {
      margin: 8px 4px;
    }
  }
  > div:nth-of-type(2) {
    width: 40px;
    float: right;
    bottom: 8px;
  }
  .icon {
    // font-size: 24px;
    &.anchorHide {
      transform: rotate(180deg);
    }
  }
  .size19 {
    font-size: 19px;
  }
  .size20 {
    font-size: 20px;
  }
  .size21 {
    font-size: 21px;
  }
  .size22 {
    font-size: 22px;
  }
  .size24 {
    font-size: 24px;
  }
}
</style>
