<template lang="pug">
  div
    el-row(:gutter="20")
      el-col(:span="4")
        el-card.cardStyle
          el-row
            el-button.buttonStyle(@click="changeClass", size="mini" style="margin-bottom: 20px") Next
          el-row
            el-button.buttonStyle(@click="autoPlay", size="mini" style="margin-bottom: 20px") {{buttonLabel}}
      el-col(:span="10")
        el-card.cardStyle2(:style="backG")
          div(v-for="i in 30", :class="className")
            div.shard
          p.nameStyle {{name}}

</template>
<script>

export default {
  data () {
    return {
      className: 'shard-wrap',
      backG: 'background-color: #FEC54F',
      autoActive: false,
      timer: null,
      name: 'MALAYAN TAPIR'
    }
  },
  computed: {
    buttonLabel () {
      return this.autoActive ? 'Stop' : 'Play'
    }
  },
  mounted () {
    this.bus.$off('refresh').bus.$on('refresh', (result) => {
      this.className = 'shard-wrap'
      this.backG = 'background-color: #FEC54F'
      this.name = 'MALAYAN TAPIR'
      this.autoActive = false
      this.timer = null
      clearInterval(this.timer)
    })
  },
  methods: {
    changeClass () {
      if (this.className === 'shard-wrap') {
        this.className = 'shard-wrap2'
        this.backG = 'background-color: #DE88AB'
        this.name = 'SOMALI OSTRICH'
      } else if (this.className === 'shard-wrap2') {
        this.className = 'shard-wrap3'
        this.backG = 'background-color: #64D6E1'
        this.name = 'VAQUITA'
      } else {
        this.className = 'shard-wrap'
        this.backG = 'background-color: #FEC54F'
        this.name = 'MALAYAN TAPIR'
      }
    },
    autoPlay () {
      this.autoActive = !this.autoActive
      if (this.autoActive) {
        let that = this
        this.timer = setInterval(that.changeImg(), 30)
      }
    },
    changeImg () {
      let that = this
      if (this.autoActive) {
        this.changeClass()
        setTimeout(() => {
          that.timer = setInterval(that.changeImg(), 30)
        }, 2500)
      } else {
        clearInterval(this.timer)
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.nameStyle {
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  transition-delay: 0.5s;
  color: #fff
}
.cardStyle2 {
  width:600px;
  height:600px;
  margin-top: 0px;
  margin-bottom: 0px;
  border: none;
  border-radius: 0px;
}
.cardStyle {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #2b2b2b;
  border: none;
  border-radius: 0px;
}
.buttonStyle {
  width: 100%;
  height: 28px;
  background-color: #222;
  border: 0px solid #DCDFE6;
  color: #888;
  text-align: left;
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
body{
  margin:0;
}
.shard-wrap .shard {
  position: absolute;
  width: 600px;
  height: 600px;
  transition: all 1s;
}
.shard-wrap2 .shard {
  position: absolute;
  width: 600px;
  height: 600px;
  transition: all 1s;
}
.shard-wrap3 .shard {
  position: absolute;
  width: 600px;
  height: 600px;
  transition: all 1s;
}
$coordinates1 : (
  (11.1% 81.286%,13.9% 80.286%,13.9% 74.429%)
  (9.6% 71.3%,11.2% 81.2%,13.95% 74.571%)
  (9.6% 71.6%,13.8% 74.571%,18% 65.7%)
  (9.55% 71.8%,17.9% 65.857%,11.7% 56.286%)
  (11.7% 56.5%,17.9% 66%,16.5% 46.143%)
  (17.8% 65.7%,15.6% 70.714%,26.2% 61.286%)
  (16.44% 45.8%,17.7% 65.857%,26.4% 61.429%)
  (16.4% 46.143%,26.2% 61.429%,26.4% 36%)
  (13.8% 41.857%,16.5% 41%,17.4% 47.429%)
  (26.3% 36%,26.1% 61.429%,34.3% 63.4%)
  (26.2% 36.05%,45.7% 40.29%,34% 63.429%)
  (26.3% 36.143%,42.8% 27%,44.8% 40.429%)
  (44.7% 40.429%,33.9% 63.429%,47.9% 61.429%)
  (33.9% 63.286%,30.2% 78%,48% 61.2%)
  (30.2% 77.857%,35.6% 72.7%,32.6% 88%)
  (40.5% 68.143%,47.9% 61.286%,46.1% 77.857%)
  (40.5% 68%,43.4% 84.857%,46.1% 77.6%)
  (42.25% 77.714%,37.6% 85.286%,43.45% 84.714%)
  (42.7% 27%,47.8% 61.429%,59.2% 41.571%)
  (42.7% 27%,59.1% 41.571%,71.5% 25.857%)
  (59.1% 41.429%,49.3% 58.571%,65% 62.143%)
  (49.5% 58.429%,47.9% 61.429%,64.9% 62.143%)
  (59.1% 41.3%,71.5% 25.857%,64.9% 62.143%)
  (71.5% 25.857%,64.9% 62.143%,89.3% 43.429%)
  (83.9% 63.571%,82.4% 86.286%,86.5% 86.286%)
  (74.4% 57.714%,85.6% 77.857%,83.1% 57%)
  (64.9% 62.143%,89.3% 43.286%,86.2% 56.286%)
  (70.7% 60.4%,79.8% 77.8%,79.8% 57.8%)
  (76.1% 70.6%,73% 86.6%,79.88% 77.6%)
  (88.8% 44.643%,87.6% 50.071%,92.7% 47.5%)
);
$color1 : (
  (#262327)
  (#3C3642)
  (#262327)
  (#2E2C31)
  (#37343E)
  (#17171A)
  (#262327)
  (#1B1B1E)
  (#131215)
  (#262327)
  (#2F2B36)
  (#262529)
  (#171619)
  (#29282C)
  (#131215)
  (#040808)
  (#262327)
  (#040808)
  (#C6CFDD)
  (#DCE6F0)
  (#BCC2CD)
  (#29282C)
  (#CED7E5)
  (#DCE6F0)
  (#302B2B)
  (#000)
  (#1B1B1E)
  (#29282C)
  (#19191B)
  (#2F2F32)
);
$coordinates2 :(
  (24.6% 27.143%,32.8% 33.1%,25.8% 38.4%)
  (25.8% 38.286%,32.7% 33.286%,30.1% 39.429%)
  (29.9% 39.143%,32.6% 33%,33.45% 44.1%)
  (32.5% 33%,43.3% 30.857%,33.4% 44.15%)
  (33.4% 44.1%,40.3% 34.6%,53.4% 41.1%)
  (40.1% 34.714%,43.1% 31%,45.8% 37.714%)
  (33.4% 44%,53.4% 41%,60.8% 58.429%)
  (42% 28.5%,53.2% 40.857%,45.6% 37.429%)
  (42.1% 28.571%,48.7% 27.143%,53.3% 41.1%)
  (37.5% 60%,50% 43.1%,51.7% 51.857%)
  (50% 43.2%,54.6% 45.429%,51.6% 52%)
  (37.5% 60%,50% 43.3%,46% 46%)
  (37.5% 60%,39.6% 58.857%,46.4% 77%)
  (38.5% 61.7%,46.3% 76.857%,44.4% 79.286%)
  (42.1% 81.429%,46.3% 77%,42.7% 89.571%)
  (46.4% 54.571%,49.8% 52.571%,45% 70.429%)
  (45% 70.286%,46.5% 64.714%,48.7% 88.143%)
  (48.7% 27.143%,66.1% 38.857%,53.2% 41%)
  (48.7% 27.2%,57% 28.714%,66.1% 38.97%)
  (53.2% 40.857%,66.15% 38.75%,60.8% 58.571%)
  (62.7% 51.286%,66.1% 38.7%,69.3% 47.286%)
  (66.02% 38.67%,72.5% 40.714%,69.2% 47.286%)
  (66.1% 38.8%,71.3% 32.714%,72.5% 40.8%)
  (69.7% 34.429%,67.3% 25.143%,71.4% 32.857%)
  (67.3% 25.143%,68.2% 20.143%,71.3% 32.714%)
  (67.3% 25.143%,66.6% 19.714%,69.2% 15.429%)
  (66.6% 19.571%,68% 12.143%,71.1% 12.857%)
  (66.6% 19.571%,67.3% 12.286%,68.4% 12.429%)
  (67.3% 12.571%,67.6% 11.143%,71.1% 12.714%)
  (69.2% 15.429%,71% 12.714%,73.6% 14.571%)
);
$color2 :(
  (#f8f1e8)
  (#bcae92)
  (#0c0d08)
  (#191919)
  (#222627)
  (#191919)
  (#141414)
  (#b9bbb0)
  (#f8f1e8)
  (#c1bdb4)
  (#f8f1e8)
  (#b4b4aa)
  (#918e87)
  (#727272)
  (#debfab)
  (#727272)
  (#87847d)
  (#222627)
  (#363837)
  (#1e1e1e)
  (#0c0d08)
  (#060606)
  (#17140d)
  (#c4c0b7)
  (#f8f1e8)
  (#bebebe)
  (#aaa)
  (#cbbdb0)
  (#c8c8c8)
  (#d84d50)
);
$coordinates3 :(
  (14.9% 43.3%, 14.9% 42.4%, 18% 42.2%)
  (14.9% 43.3%, 16.7% 44%, 18% 42.2%)
  (14.9% 42.4%, 18% 42.2%, 19.3% 39.8%)
  (18% 42.2%, 16.7% 44%, 33.8% 43.7%)
  (14.9% 42.4%, 19.3% 39.8%, 22% 34.3%)
  (14.9% 42.4%, 22% 34.3%, 19% 34.1% )
  (18% 42.2%, 19.3% 39.8%, 21.9% 40.4%)
  (18% 42.2%, 20.1% 42.4%, 21.9% 40.4%)
  (19.3% 39.8%, 21.9% 40.4%, 22% 34.3%)
  (20.1% 42.4%, 21.9% 40.4%, 33.8% 43.7%)
  (22% 34.3%, 21.9% 40.4%, 37.8% 30.8%)
  (19% 34.1%, 22% 34.3%, 37.5% 27.4%)
  (21.9% 40.4%, 37.8% 30.8%, 35.1% 35.9%)
  (21.9% 40.4%, 35.1% 35.9%, 33.8% 43.7%)
  (22% 34.3%, 40.5% 26.2%, 55.4% 27%)
  (37.8% 30.8%, 35.1% 35.9%, 56.6% 37.8%)
  (35.1% 35.9%, 56.6% 37.8%, 53% 44%)
  (35.1% 35.9%, 53% 44%, 33.8% 43.7%)
  (29.6% 40.4%, 39.8% 42.2%, 40.7% 46.6%)
  (29.6% 40.4%, 40.7% 46.6%, 44.6% 50.9%)
  (34.3% 43.7%, 29% 43.9%, 37.6% 48.5%)
  (37.5% 27.4%, 46.2% 28%, 46.5% 20.3%)
  (37.8% 30.8%, 53% 31.3%, 55.4% 27%)
  (37.8% 30.8%, 53% 31.3%, 56.6% 37.8%)
  (53% 31.3%, 55.4% 27%, 56.6% 37.8%)
  (53% 44%, 56.6% 37.8%, 65.9% 35.9%)
  (55.4% 27%, 65.9% 35.9%, 56.6% 37.8% )
  (78.5% 30%, 87.2% 30.4%, 73.3% 32.2% )
  (80.7% 33.3%, 87.2% 30.4%, 73.3% 32.2% )
  (55.4% 27%, 65.9% 35.9%, 75.8% 31.9% )
);
$color3 :(
  (#334543)
  (#12171A)
  (#D4E4D9)
  (#D4E6E6)
  (#405E64)
  (#3C4650)
  (#333C40)
  (#1C2529)
  (#526F6C)
  (#B8CBCB)
  (#496561)
  (#93a7aa)
  (#62807F)
  (#A5C2C1)
  (#394E4D)
  (#739493)
  (#D3DDD9)
  (#D4E6E6)
  (#334543)
  (#212825)
  (#101618)
  (#2D3B3B)
  (#425555)
  (#496561)
  (#394E4D)
  (#BCD7CF)
  (#4C6464)
  (#365356)
  (#678380)
  (#2D3B3B)
);
@for $i from 1 through 30{
  .shard-wrap:nth-child(#{$i}) .shard{
    clip-path: polygon(nth($coordinates1, $i));
    background-color: nth($color1, $i);
    transition-delay:0.03s * $i;
  }
  .shard-wrap2:nth-child(#{$i}) .shard{
    clip-path: polygon(nth($coordinates2, $i));
    background-color: nth($color2, $i);
    transition-delay:0.03s * $i;
  }
  .shard-wrap3:nth-child(#{$i}) .shard{
    clip-path: polygon(nth($coordinates3, $i));
    background-color: nth($color3, $i);
    transition-delay:0.03s * $i;
  }
}
</style>
