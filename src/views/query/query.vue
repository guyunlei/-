<template>
  <div class="Query">
    <div class="search-form_common">
      <el-form ref="form" :model="searchForm" label-width="80px">
        <el-row>
          <el-col :span='8'>
            <el-form-item label="姓名">
              <el-input v-model="searchForm.name" placeholder="请输入要查询的儿童姓名" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='8'>
            <el-form-item label="编号">
              <el-input v-model="searchForm.id" placeholder="请输入要查询的儿童id" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="onSeach"  icon="el-icon-search">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="table-common">
       <el-table
    :data="tableData"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      label="查看详情"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
        <!-- <el-button type="text" @click="dialogVisible = true" size="small">查看详情</el-button> -->
        <!-- <el-button type="text" size="small">编辑</el-button> -->
      </template>
    </el-table-column>
  </el-table>

  <el-dialog
        title="详细信息"
        :visible.sync="dialogVisible"
        width="85%"
        custom-class="dialogHeight"
        top="9vh">
         <el-row :gutter="6">
            <span>hahah</span>
            <span  v-for="(item, index) in tableData" :key="index">
               {{item.value}}
            </span>
          </el-row>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import formDisplay from '../components/formDisplay'
import util from "../../lib/utils"
  export default {
    components:{
      formDisplay
    },
    data() {
      return {
        searchForm: {
          name: '',
          id:'',
        },
          tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, 
       ],
       detailInfo:[
         {
           lable:'姓名',
           value:'name'
         }
       ],
        dialogVisible: false
      }
    },
    methods: {
      onSeach() {
        console.log('submit!');
      },
      handleClick(row){
        this.dialogVisible = !this.dialogVisible
        // console.log(row)
        this.$service.getDetailInfo(row).then(res=>{
          
        })
      },
    }
  }
</script>

<style>

</style>