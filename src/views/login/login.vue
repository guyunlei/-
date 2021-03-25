<template>
<!-- 登录 -->
<div class="login">
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px" class="login-form" label-position='right'>
      <h2 class="login-title">管理系统</h2>
      <el-form-item label="用户名">
        <el-input v-model="form.username" clearable width='200px' autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>

      <el-form-item >
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button class="btn" type="primary" @click=" register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
  <!--注册 -->
</template>

<script>
export default {
  data(){
    return {
      form:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    onSubmit() {
      // this.util.http.post(url,data,config ).then(res=>{
      //   if(res.result===true){
      //      this.$router.push({name:'Home'})
      //   }
      // })
      if(this.form.username !=''&& this.form.password !=''){
        this.$router.push({name:'Home'})
      }
      else{
        alert('请输入账户和密码')
      }

    },

    // 注册
    register(){
      this.$router.push({name:'Register'})
    }
  }
}
</script>

<style >
.login{
  height: 95vh;
   background-image: url('./bg.jpeg');
}
  .login-container{
    display: block;
    position: relative;
    width: 300px;
   left: 65%;
   top: 250px;
   /* background-color: teal; */
  }
  .btn{
    margin: 15px;
  }
</style>