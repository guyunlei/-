<template>
  <div class="register">
    <el-form :model="infoForm" :rules="rules" ref="infoForm" size='small ' label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="infoForm.username"  ></el-input>
      </el-form-item>
       <el-form-item label="密码" prop="password">
        <el-input v-model="infoForm.password"></el-input>
      </el-form-item>
       <el-form-item label="确认密码" prop="repassword">
        <el-input v-model="infoForm.repassword"></el-input>
      </el-form-item>
       <el-form-item label="电话" prop="tel">
        <el-input v-model="infoForm.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio v-model="infoForm.gender" label="男">男</el-radio>
        <el-radio v-model="infoForm.gender" label="女">女</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('infoForm')">提交注册</el-button>
        <el-button @click="resetForm('infoForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
         infoForm: {
          username:'',
          password:'',
          repassword:'',
          tel:'',
          gender:'男',
        },
        rules: {
          username: [
            { required: true, message: '用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '密码', trigger: 'blur' }
          ],
          repassword: [
            { required: true, message: '再次输入密码', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '电话', trigger: 'blur' }
          ], 
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$service.getRegister(this.infoForm).then(res=>{
              if(res.result ==true){
                this.$message({
                  message: '注册成功！',
                  type: 'success'
                })
            // console.log(this.infoForm)
                setTimeout(() => {
                  this.$router.push({name:'Login'})
                }, 1000);
              }else{
                alert('')
              }
            })
           } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" scoped>
.register{
  position: relative;
  left:35%;
  top:200px;
  /deep/.el-input__inner{
    width: 25%;
  }
}

</style>