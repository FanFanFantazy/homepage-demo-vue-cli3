<template lang="pug">
  div
    el-row(:gutter="20")
      el-col(:span="4")
        el-button.buttonStyle(@click="changeClass", size="mini" style="margin-bottom: 20px") Switch
      el-col(:span="20")
        el-card.cardStyle(style="width:600px; height:600px")
          div(v-for="i in 30", :class="className")
            div.shard

</template>
<script>

export default {
  data () {
    return {
      className: 'shard-wrap'
    }
  },
  mounted () {

  },
  methods: {
    changeClass () {
      this.className = this.className === 'shard-wrap' ? 'shard-wrap2' : this.className === 'shard-wrap2' ? 'shard-wrap3' : 'shard-wrap'
    }
  }
}
</script>
<style scoped lang='scss'>
.cardStyle {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #fff;
  border: none;
  color: #ddd;
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
@for $i from 1 through 30{
  .shard-wrap:nth-child(#{$i}) .shard{
    transition-delay:0.02s * $i;
  }
  .shard-wrap2:nth-child(#{$i}) .shard{
    transition-delay:0.02s * $i;
  }
  .shard-wrap3:nth-child(#{$i}) .shard{
    transition-delay:0.02s * $i;
  }
}
.shard-wrap:nth-child(1) .shard {
  clip-path: polygon(11.1% 81.286%,13.9% 80.286%,13.9% 74.429%);
  background-color: #262327
}

.shard-wrap:nth-child(2) .shard {
  clip-path: polygon(9.6% 71.3%,11.2% 81.2%,13.95% 74.571%);
  background-color: #3C3642
}

.shard-wrap:nth-child(3) .shard {
  clip-path: polygon(9.6% 71.6%,13.8% 74.571%,18% 65.7%);
  background-color: #262327
}

.shard-wrap:nth-child(4) .shard {
  clip-path: polygon(9.55% 71.8%,17.9% 65.857%,11.7% 56.286%);
  background-color: #2E2C31
}

.shard-wrap:nth-child(5) .shard {
  clip-path: polygon(11.7% 56.5%,17.9% 66%,16.5% 46.143%);
  background-color: #37343E
}

.shard-wrap:nth-child(6) .shard {
  clip-path: polygon(17.8% 65.7%,15.6% 70.714%,26.2% 61.286%);
  background-color: #17171A
}

.shard-wrap:nth-child(7) .shard {
  clip-path: polygon(16.44% 45.8%,17.7% 65.857%,26.4% 61.429%);
  background-color: #262327
}

.shard-wrap:nth-child(8) .shard {
  clip-path: polygon(16.4% 46.143%,26.2% 61.429%,26.4% 36%);
  background-color: #1B1B1E
}

.shard-wrap:nth-child(9) .shard {
  clip-path: polygon(13.8% 41.857%,16.5% 41%,17.4% 47.429%);
  background-color: #131215
}

.shard-wrap:nth-child(10) .shard {
  clip-path: polygon(26.3% 36%,26.1% 61.429%,34.3% 63.4%);
  background-color: #262327
}

.shard-wrap:nth-child(11) .shard {
  clip-path: polygon(26.2% 36.05%,45.7% 40.29%,34% 63.429%);
  background-color: #2F2B36
}

.shard-wrap:nth-child(12) .shard {
  clip-path: polygon(26.3% 36.143%,42.8% 27%,44.8% 40.429%);
  background-color: #262529
}

.shard-wrap:nth-child(13) .shard {
  clip-path: polygon(44.7% 40.429%,33.9% 63.429%,47.9% 61.429%);
  background-color: #171619
}

.shard-wrap:nth-child(14) .shard {
  clip-path: polygon(33.9% 63.286%,30.2% 78%,48% 61.2%);
  background-color: #29282C
}

.shard-wrap:nth-child(15) .shard {
  clip-path: polygon(30.2% 77.857%,35.6% 72.7%,32.6% 88%);
  background-color: #131215
}

.shard-wrap:nth-child(16) .shard {
  clip-path: polygon(40.5% 68.143%,47.9% 61.286%,46.1% 77.857%);
  background-color: #040808
}

.shard-wrap:nth-child(17) .shard {
  clip-path: polygon(40.5% 68%,43.4% 84.857%,46.1% 77.6%);
  background-color: #262327
}

.shard-wrap:nth-child(18) .shard {
  clip-path: polygon(42.25% 77.714%,37.6% 85.286%,43.45% 84.714%);
  background-color: #131215
}

.shard-wrap:nth-child(19) .shard {
  clip-path: polygon(42.7% 27%,47.8% 61.429%,59.2% 41.571%);
  background-color: #C6CFDD
}

.shard-wrap:nth-child(20) .shard {
  clip-path: polygon(42.7% 27%,59.1% 41.571%,71.5% 25.857%);
  background-color: #DCE6F0
}

.shard-wrap:nth-child(21) .shard {
  clip-path: polygon(59.1% 41.429%,49.3% 58.571%,65% 62.143%);
  background-color: #BCC2CD
}

.shard-wrap:nth-child(22) .shard {
  clip-path: polygon(49.5% 58.429%,47.9% 61.429%,64.9% 62.143%);
  background-color: #29282C
}

.shard-wrap:nth-child(23) .shard {
  clip-path: polygon(59.1% 41.3%,71.5% 25.857%,64.9% 62.143%);
  background-color: #CED7E5
}

.shard-wrap:nth-child(24) .shard {
  clip-path: polygon(71.5% 25.857%,64.9% 62.143%,89.3% 43.429%);
  background-color: #DCE6F0
}

.shard-wrap:nth-child(25) .shard {
  clip-path: polygon(83.9% 63.571%,82.4% 86.286%,86.5% 86.286%);
  background-color: #302B2B
}

.shard-wrap:nth-child(26) .shard {
  clip-path: polygon(74.4% 57.714%,85.6% 77.857%,83.1% 57%);
  background-color: #000
}

.shard-wrap:nth-child(27) .shard {
  clip-path: polygon(64.9% 62.143%,89.3% 43.286%,86.2% 56.286%);
  background-color: #1B1B1E
}

.shard-wrap:nth-child(28) .shard {
  clip-path: polygon(70.7% 60.4%,79.8% 77.8%,79.8% 57.8%);
  background-color: #29282C
}

.shard-wrap:nth-child(29) .shard {
  clip-path: polygon(76.1% 70.6%,73% 86.6%,79.88% 77.6%);
  background-color: #19191B
}

.shard-wrap:nth-child(30) .shard {
  clip-path: polygon(88.8% 44.643%,87.6% 50.071%,92.7% 47.5%);
  background-color: #2F2F32
}
.shard-wrap2:nth-child(1) .shard {
  clip-path: polygon(24.6% 27.143%,32.8% 33.1%,25.8% 38.4%);
  background-color: #f8f1e8
}

.shard-wrap2:nth-child(2) .shard {
  clip-path: polygon(25.8% 38.286%,32.7% 33.286%,30.1% 39.429%);
  background-color: #bcae92
}

.shard-wrap2:nth-child(3) .shard {
  clip-path: polygon(29.9% 39.143%,32.6% 33%,33.45% 44.1%);
  background-color: #0c0d08
}

.shard-wrap2:nth-child(4) .shard {
  clip-path: polygon(32.5% 33%,43.3% 30.857%,33.4% 44.15%);
  background-color: #191919
}

.shard-wrap2:nth-child(5) .shard {
  clip-path: polygon(33.4% 44.1%,40.3% 34.6%,53.4% 41.1%);
  background-color: #222627
}

.shard-wrap2:nth-child(6) .shard {
  clip-path: polygon(40.1% 34.714%,43.1% 31%,45.8% 37.714%);
  background-color: #191919
}

.shard-wrap2:nth-child(7) .shard {
  clip-path: polygon(33.4% 44%,53.4% 41%,60.8% 58.429%);
  background-color: #141414
}

.shard-wrap2:nth-child(8) .shard {
  clip-path: polygon(42% 28.5%,53.2% 40.857%,45.6% 37.429%);
  background-color: #b9bbb0
}

.shard-wrap2:nth-child(9) .shard {
  clip-path: polygon(42.1% 28.571%,48.7% 27.143%,53.3% 41.1%);
  background-color: #f8f1e8
}

.shard-wrap2:nth-child(10) .shard {
  clip-path: polygon(37.5% 60%,50% 43.1%,51.7% 51.857%);
  background-color: #c1bdb4
}

.shard-wrap2:nth-child(11) .shard {
  clip-path: polygon(50% 43.2%,54.6% 45.429%,51.6% 52%);
  background-color: #f8f1e8
}

.shard-wrap2:nth-child(12) .shard {
  clip-path: polygon(37.5% 60%,50% 43.3%,46% 46%);
  background-color: #b4b4aa
}

.shard-wrap2:nth-child(13) .shard {
  clip-path: polygon(37.5% 60%,39.6% 58.857%,46.4% 77%);
  background-color: #918e87
}

.shard-wrap2:nth-child(14) .shard {
  clip-path: polygon(38.5% 61.7%,46.3% 76.857%,44.4% 79.286%);
  background-color: #727272
}

.shard-wrap2:nth-child(15) .shard {
  clip-path: polygon(42.1% 81.429%,46.3% 77%,42.7% 89.571%);
  background-color: #debfab
}

.shard-wrap2:nth-child(16) .shard {
  clip-path: polygon(46.4% 54.571%,49.8% 52.571%,45% 70.429%);
  background-color: #727272
}

.shard-wrap2:nth-child(17) .shard {
  clip-path: polygon(45% 70.286%,46.5% 64.714%,48.7% 88.143%);
  background-color: #87847d
}

.shard-wrap2:nth-child(18) .shard {
  clip-path: polygon(48.7% 27.143%,66.1% 38.857%,53.2% 41%);
  background-color: #222627
}

.shard-wrap2:nth-child(19) .shard {
  clip-path: polygon(48.7% 27.2%,57% 28.714%,66.1% 38.97%);
  background-color: #363837
}

.shard-wrap2:nth-child(20) .shard {
  clip-path: polygon(53.2% 40.857%,66.15% 38.75%,60.8% 58.571%);
  background-color: #1e1e1e
}

.shard-wrap2:nth-child(21) .shard {
  clip-path: polygon(62.7% 51.286%,66.1% 38.7%,69.3% 47.286%);
  background-color: #0c0d08
}

.shard-wrap2:nth-child(22) .shard {
  clip-path: polygon(66.02% 38.67%,72.5% 40.714%,69.2% 47.286%);
  background-color: #060606
}

.shard-wrap2:nth-child(23) .shard {
  clip-path: polygon(66.1% 38.8%,71.3% 32.714%,72.5% 40.8%);
  background-color: #17140d
}

.shard-wrap2:nth-child(24) .shard {
  clip-path: polygon(69.7% 34.429%,67.3% 25.143%,71.4% 32.857%);
  background-color: #c4c0b7
}

.shard-wrap2:nth-child(25) .shard {
  clip-path: polygon(67.3% 25.143%,68.2% 20.143%,71.3% 32.714%);
  background-color: #f8f1e8
}

.shard-wrap2:nth-child(26) .shard {
  clip-path: polygon(67.3% 25.143%,66.6% 19.714%,69.2% 15.429%);
  background-color: #bebebe
}

.shard-wrap2:nth-child(27) .shard {
  clip-path: polygon(66.6% 19.571%,68% 12.143%,71.1% 12.857%);
  background-color: #aaa
}

.shard-wrap2:nth-child(28) .shard {
  clip-path: polygon(66.6% 19.571%,67.3% 12.286%,68.4% 12.429%);
  background-color: #cbbdb0
}

.shard-wrap2:nth-child(29) .shard {
  clip-path: polygon(67.3% 12.571%,67.6% 11.143%,71.1% 12.714%);
  background-color: #c8c8c8
}

.shard-wrap2:nth-child(30) .shard {
  clip-path: polygon(69.2% 15.429%,71% 12.714%,73.6% 14.571%);
  background-color: #d84d50
}
.shard-wrap3:nth-child(1) .shard {
  clip-path: polygon(14.9% 43.3%, 14.9% 42.4%, 18% 42.2%);
  background-color: #334543
}

.shard-wrap3:nth-child(2) .shard {
  clip-path: polygon(14.9% 43.3%, 16.7% 44%, 18% 42.2%);
  background-color: #12171A
}

.shard-wrap3:nth-child(3) .shard {
  clip-path: polygon(14.9% 42.4%, 18% 42.2%, 19.3% 39.8%);
  background-color: #D4E4D9
}

.shard-wrap3:nth-child(4) .shard {
  clip-path: polygon(18% 42.2%, 16.7% 44%, 33.8% 43.7%);
  background-color: #D4E6E6
}

.shard-wrap3:nth-child(5) .shard {
  clip-path: polygon(14.9% 42.4%, 19.3% 39.8%, 22% 34.3%);
  background-color: #405E64
}

.shard-wrap3:nth-child(6) .shard {
  clip-path: polygon(14.9% 42.4%, 22% 34.3%, 19% 34.1% );
  background-color: #3C4650
}

.shard-wrap3:nth-child(7) .shard {
  clip-path: polygon(18% 42.2%, 19.3% 39.8%, 21.9% 40.4%);
  background-color: #333C40
}

.shard-wrap3:nth-child(8) .shard {
  clip-path: polygon(18% 42.2%, 20.1% 42.4%, 21.9% 40.4%);
  background-color: #1C2529
}

.shard-wrap3:nth-child(9) .shard {
  clip-path: polygon(19.3% 39.8%, 21.9% 40.4%, 22% 34.3%);
  background-color: #526F6C
}

.shard-wrap3:nth-child(10) .shard {
  clip-path: polygon(20.1% 42.4%, 21.9% 40.4%, 33.8% 43.7%);
  background-color: #B8CBCB
}

.shard-wrap3:nth-child(11) .shard {
  clip-path: polygon(22% 34.3%, 21.9% 40.4%, 37.8% 30.8%);
  background-color: #496561
}

.shard-wrap3:nth-child(12) .shard {
  clip-path: polygon(19% 34.1%, 22% 34.3%, 37.5% 27.4%);
  background-color: #93a7aa
}

.shard-wrap3:nth-child(13) .shard {
  clip-path: polygon(21.9% 40.4%, 37.8% 30.8%, 35.1% 35.9%);
  background-color: #62807F
}

.shard-wrap3:nth-child(14) .shard {
  clip-path: polygon(21.9% 40.4%, 35.1% 35.9%, 33.8% 43.7%);
  background-color: #A5C2C1
}

.shard-wrap3:nth-child(15) .shard {
  clip-path: polygon(22% 34.3%, 40.5% 26.2%, 55.4% 27%);
  background-color: #394E4D
}

.shard-wrap3:nth-child(16) .shard {
  clip-path: polygon(37.8% 30.8%, 35.1% 35.9%, 56.6% 37.8%);
  background-color: #739493
}

.shard-wrap3:nth-child(17) .shard {
  clip-path: polygon(35.1% 35.9%, 56.6% 37.8%, 53% 44%);
  background-color: #D3DDD9
}

.shard-wrap3:nth-child(18) .shard {
  clip-path: polygon(35.1% 35.9%, 53% 44%, 33.8% 43.7%);
  background-color: #D4E6E6
}

.shard-wrap3:nth-child(19) .shard {
  clip-path: polygon(29.6% 40.4%, 39.8% 42.2%, 40.7% 46.6%);
  background-color: #334543
}

.shard-wrap3:nth-child(20) .shard {
  clip-path: polygon(29.6% 40.4%, 40.7% 46.6%, 44.6% 50.9%);
  background-color: #212825
}

.shard-wrap3:nth-child(21) .shard {
  clip-path: polygon(34.3% 43.7%, 29% 43.9%, 37.6% 48.5%);
  background-color: #101618
}

.shard-wrap3:nth-child(22) .shard {
  clip-path: polygon(37.5% 27.4%, 46.2% 28%, 46.5% 20.3%);
  background-color: #2D3B3B
}

.shard-wrap3:nth-child(23) .shard {
  clip-path: polygon(37.8% 30.8%, 53% 31.3%, 55.4% 27%);
  background-color: #425555
}

.shard-wrap3:nth-child(24) .shard {
  clip-path: polygon(37.8% 30.8%, 53% 31.3%, 56.6% 37.8%);
  background-color: #496561
}

.shard-wrap3:nth-child(25) .shard {
  clip-path: polygon(53% 31.3%, 55.4% 27%, 56.6% 37.8%);
  background-color: #394E4D
}

.shard-wrap3:nth-child(26) .shard {
  clip-path: polygon(53% 44%, 56.6% 37.8%, 65.9% 35.9%);
  background-color: #BCD7CF
}

.shard-wrap3:nth-child(27) .shard {
  clip-path: polygon(55.4% 27%, 65.9% 35.9%, 56.6% 37.8% );
  background-color: #4C6464
}
.shard-wrap3:nth-child(28) .shard {
  clip-path: polygon(78.5% 30%, 87.2% 30.4%, 73.3% 32.2% );
  background-color: #365356
}

.shard-wrap3:nth-child(29) .shard {
  clip-path: polygon(80.7% 33.3%, 87.2% 30.4%, 73.3% 32.2% );
  background-color: #678380
}
.shard-wrap3:nth-child(30) .shard {
  clip-path: polygon(55.4% 27%, 65.9% 35.9%, 75.8% 31.9% );
  background-color: #2D3B3B
}

</style>
