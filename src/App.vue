<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.left {
  float: left;
}
.right {
  float: right;
}
.hrSt {
  border:none;
  height:2px;
  border-top:2px solid #2f2f2f;
  margin-bottom: 20px;
  margin-top: 30px
}
.el-input--mini {
  border: none !important;
}
.el-input--mini .el-input__inner {
  background-color: #555 !important;
  border: none !important;
  color: #ccc !important;
}
</style>
