<template slot-scope=“scope”>
  <div>
     <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-col :span="3">
        <el-menu-item index="1">首页</el-menu-item></el-col>
      <el-col :span="3">
        <el-submenu index="2">
          <template slot="title">教育信息模块</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-col>
      <el-col :span="3">
        <el-menu-item index="3">健康信息模块</el-menu-item>
      </el-col>
      <el-col :span="3">
        <el-menu-item index="4">经济信息模块</el-menu-item>
      </el-col>
      <el-col :span="3">
        <el-menu-item index="5" key="query">查询模块</el-menu-item></el-col>
      <el-col :span="3">
      <el-menu-item index="6">在线交流模块</el-menu-item></el-col>
      <el-col :span="3">
      <el-menu-item index="7">捐助模块</el-menu-item></el-col>
      <el-col :span="3">
      <el-menu-item index="8">个人信息管理</el-menu-item></el-col>
    </el-menu>
  </div>
</template>

<script>
 export default {
   computed:{
     activeName(){
       return this.$route.name
     }
   },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(name){
        console.log(name)
         if(name == 1 ){
          this.$router.push({name:'Home'}).catch(err=>{
          })
        }
        if(name == 5 ){
          this.$router.push({name:'Query'}).catch(err=>{
          })
        }
         if(name == 7 ){
          this.$router.push({name:'Donation'}).catch(err=>{
          })
        }
        if(name == 8 ){
          this.$router.push({name:'Information'}).catch(err=>{
          })
        }
      }
    }
  }
</script>

<style lang='less' scoped>

</style>