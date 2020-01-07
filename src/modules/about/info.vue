<template lang="pug">
  div
    h1 {{aboutData}}
    el-row(:gutter="10")
      el-col(:span='6')
        el-input(v-model="formData.name", size="mini")
      el-col(:span='6')
        el-input(v-model="formData.url", size="mini")
      el-col(:span='6')
        el-input(v-model="formData.price", size="mini")
      el-col(:span='6')
        el-input(v-model="formData.date", size="mini")
    el-button(size="mini", @click="addShoeList") ADD
    el-button(size="mini", @click="queryShoeList") QUERY
    el-table(:data="tableData", style="width: 100%", size="mini", border, tooltip-effect="dark")
      el-table-column(label="name", prop="name")
      el-table-column(label="url", prop="url")
      el-table-column(label="price", prop="price")
      el-table-column(label="date", prop="date")
      el-table-column(label="date", prop="date")
      el-table-column(label="edit" prop='edit')
        template(slot-scope='scope')
          el-button(size="mini", @click="deleteShoeList(scope.row.id)") DELETE
</template>
<script>
import { postTest, deadstock } from './apis.js'

export default {
  data () {
    return {
      aboutData: 'DO THIS SH*T!!!!',
      tableData: [],
      formData: {
        name: '',
        price: '',
        url: '',
        date: ''
      }
    }
  },
  mounted () {
    postTest({ 'send': 'Get it' }, 'post').then((response) => {
      this.aboutData = response.data.main
    }).catch((err) => {
      this.aboutData = err
    })
  },
  methods: {
    queryShoeList () {
      deadstock('', 'get').then((response) => {
        this.tableData = response.data.formData
      })
    },
    addShoeList () {
      deadstock({ send: 'add', data: this.formData }, 'post').then((response) => {
        this.tableData = response.data.formData
      })
    },
    deleteShoeList () {
      deadstock({ send: 'delete', data: this.formData }, 'post').then((response) => {
        this.tableData = response.data.formData
      })
    }
  }
}
</script>

<style scoped>
</style>
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
</style>
