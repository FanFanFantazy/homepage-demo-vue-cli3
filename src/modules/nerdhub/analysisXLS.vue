<template lang="pug">
  div
    el-row(:gutter="20", style="height: 90px; background-color:#2b2b2b; padding-top:10px; margin:0px")
      el-col(:span="6")
        el-upload(ref="upload", accept=".xls,.xlsx", action="", :on-change="upload",
        :show-file-list="true", :auto-upload="false" class="el-upload", :on-remove="clearList")
          el-button.buttonStyle(slot="trigger", size="mini") Select Files
      el-col(:span="4")
        el-button.buttonStyle(size="mini", @click="generateNewFile") Generate
      el-col(:span="8")
        el-input(size="mini", v-model="inputVal", placeholder="key-word")
          el-button(slot="append", @click="searchInfo") Search
    el-row(style="margin-top:10px")
      el-table(:data="tableData", style="width: 100%", size="mini", border, tooltip-effect="dark")
        el-table-column(:label="item", :prop="item", v-for='(item, index) in colSet', :key="index", :show-overflow-tooltip="true")
          template(slot-scope='scope')
            div(style="width:100%; height:100%; padding:0px;", v-show="`${scope.$index}${index}` !== curCell", @dblclick = "selectCell(scope.$index, index)")
              span {{scope.row[item]}}
            el-input(v-show="`${scope.$index}${index}` === curCell", v-model="scope.row[item]", style="overflow:hidden;", size="mini", @blur="curCell = ''", :id="`${scope.$index}${index}`")
      .pagination-box
        el-pagination(v-if="tableData.length > 0", layout="prev, pager, next" :total="totalPages", :current-page.sync="curPage"
        @current-change="handleCurrentChange")
    br
    br
</template>
<script>
import XLSX from 'xlsx'
import _ from 'lodash'
export default {
  data () {
    return {
      search: '',
      tableData: [],
      colSet: [],
      totalData: [],
      copyTotalData: [],
      curPage: 1,
      totalPages: 0,
      curCell: '',
      inputVal: ''
    }
  },
  mounted () {
    this.bus.$off('refresh').bus.$on('refresh', (result) => {
      this.curPage = 1
      this.handleCurrentChange(1)
      this.totalData = _.cloneDeep(this.copyTotalData)
      this.tableData = this.totalData[0]
      this.totalPages = (this.copyTotalData.length - 1) * 10 + _.last(this.copyTotalData).length
    })
  },
  methods: {
    searchInfo () {
      this.tableData = []
      this.totalData = []
      const ws = []
      this.copyTotalData.forEach(table => {
        table.forEach(row => {
          for (let i = 0; i < Object.keys(row).length; i++) {
            if (JSON.stringify(row[Object.keys(row)[i]]).indexOf(this.inputVal) > -1) {
              ws.push(row)
              break
            }
          }
        })
      })
      for (let i = 0; i < ws.length / 10; i++) {
        this.totalData[i] = []
        if (i < ws.length / 10 - 1) {
          for (let j = 0; j < 10; j++) {
            this.totalData[i].push(this.restructAry(ws[i * 10 + j]))
          }
        } else {
          for (let j = 0; j < (ws.length % 10 === 0 ? 10 : ws.length % 10); j++) {
            this.totalData[i].push(this.restructAry(ws[i * 10 + j]))
          }
        }
      }
      this.tableData = this.totalData[0] === undefined ? [] : this.totalData[0]
      this.curPage = 1
      this.totalPages = ws.length
    },
    selectCell (item, index) {
      this.curCell = `${item}${index}`
      const that = this
      window.setTimeout(function () {
        document.getElementById(that.curCell).focus()
      }, 200)
    },
    // json to excel
    JSONToExcelConvertor (JSONData, FileName) {
      // transform json
      var arrData = typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData
      var excel = '<table>'
      var row = '<tr>'
      // set header
      var keys = Object.keys(JSONData[0])
      keys.forEach(function (item) {
        row += '<td>' + item + '</td>'
      })
      // br
      excel += row + '</tr>'
      // set data
      for (var i = 0; i < arrData.length; i++) {
        var row2 = '<tr>'
        for (var index in arrData[i]) {
          row2 += '<td>' + arrData[i][index] + '</td>'
        }
        excel += row2 + '</tr>'
      }
      excel += '</table>'
      var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='https://github.com/FanFanFantazy/homepage-demo-vue-cli3'>"
      excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">'
      excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel'
      excelFile += '; charset=UTF-8">'
      excelFile += '<head>'
      excelFile += '<!--[if gte mso 9]>'
      excelFile += '<xml>'
      excelFile += '<x:ExcelWorkbook>'
      excelFile += '<x:ExcelWorksheets>'
      excelFile += '<x:ExcelWorksheet>'
      excelFile += '<x:Name>'
      excelFile += '{worksheet}'
      excelFile += '</x:Name>'
      excelFile += '<x:WorksheetOptions>'
      excelFile += '<x:DisplayGridlines/>'
      excelFile += '</x:WorksheetOptions>'
      excelFile += '</x:ExcelWorksheet>'
      excelFile += '</x:ExcelWorksheets>'
      excelFile += '</x:ExcelWorkbook>'
      excelFile += '</xml>'
      excelFile += '<![endif]-->'
      excelFile += '</head>'
      excelFile += '<body>'
      excelFile += excel
      excelFile += '</body>'
      excelFile += '</html>'
      var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile)
      var link = document.createElement('a')
      link.href = uri
      link.style = 'visibility:hidden'
      link.download = FileName + '.xls'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    generateNewFile () {
      if (this.tableData.length > 0) {
        const outputFile = []
        this.totalData.forEach(element => {
          element.forEach(element2 => {
            outputFile.push(element2)
          })
        })
        this.JSONToExcelConvertor(outputFile, 'newExcel')
      }
    },
    clearList () {
      this.totalData = []
      this.tableData = []
      this.copyTotalData = []
      this.totalPages = 0
      this.colSet = []
    },
    handleCurrentChange (val) {
      this.tableData = this.totalData[val - 1]
    },
    upload (file, fileList) {
      fileList.splice(0, fileList.length > 1 ? 1 : 0)
      this.readExcel({ 0: file.raw })
    },
    restructAry (obj) {
      let output = {}
      Object.keys(obj).forEach(key => {
        output[key] = obj[key]
      })
      return output
    },
    readExcel (files) {
      var that = this
      this.tableData = []
      if (files.length <= 0) { // if unnamed file
        return false
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$Message.error('上传格式不正确，请上传xls或者xlsx格式')
        return false
      }
      const fileReader = new FileReader()
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result
          const workbook = XLSX.read(data, { type: 'binary' })
          const wsname = workbook.SheetNames[0] // get the first sheet
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) // generate JSON of the table
          for (let i = 0; i < ws.length / 10; i++) {
            that.totalData[i] = []
            if (i < ws.length / 10 - 1) {
              for (let j = 0; j < 10; j++) {
                that.totalData[i].push(this.restructAry(ws[i * 10 + j]))
              }
            } else {
              for (let j = 0; j < (ws.length % 10 === 0 ? 10 : ws.length % 10); j++) {
                that.totalData[i].push(this.restructAry(ws[i * 10 + j]))
              }
            }
          }
          that.copyTotalData = _.cloneDeep(that.totalData)
          that.tableData = that.totalData[0]
          that.colSet = Object.keys(that.tableData[0])
          that.totalPages = ws.length
        } catch (err) {
          return err
        }
      }
      fileReader.readAsBinaryString(files[0])
    }
  }
}
</script>
<style lang='scss'>
.el-table--border, .el-table--group {
  border: none;
}
.el-table::before {
  background-color: #222;
}
.el-table::after {
  background-color: #222;
}
.el-table.el-table--mini {
  background-color: #2b2b2b;
  border-color: #222;
  border-width: 0px;
  th {
    color: #ccc;
    background-color: #2b2b2b !important;
    border-color: #222;
    border-width: 4px;
    line-height: 50px;
  }

  td {
    color: #aaa;
    background-color: #2b2b2b !important;
    border-color: #222;
    border-width: 4px;
    overflow: hidden;
  }
  .cell {
    padding-left: 5px, 5px, 5px, 5px;
    line-height: 26px;
  }
}
.pagination-box {
  border: 4px, solid, #222;
  padding: 0px;
  text-align: right;
  background-color: #222;
  color: #ccc;
  .el-pagination {
    .selectedNum {
      float: left;
    }
    > * {
      background-color: #222 !important;
      color: #ccc;
      :hover {
        color: rgb(108, 138, 124);
      }
    }
    > .el-pager {
      > li {
        background-color: #222;
        color: #ccc;
      }
      > li.active {
        color:rgb(108, 138, 124)
      }
      > li:hover {
        color: rgb(108, 138, 124)
      }
      > li.btn-quicknext :hover {
        color: rgb(108, 138, 124)
      }
    }
  }
  button {
    &:focus {
      color: rgb(108, 138, 124)
    }
    &:hover {
      color: rgb(108, 138, 124)
    }
  }
}
.el-upload {
  width: 100% !important;
}
</style>

<style lang='scss' scoped>
.buttonStyle {
  width: 100%;
  height: 28px;
  background-color: #222;
  border: 0px solid #DCDFE6;
  color: #888;
  text-align: left;
}
.buttonStyle :hover {
  color: #fff;
}
.buttonStyle :active {
  color: #fff
}
.buttonStyle :focus {
  color: #fff
}
</style>
