<template>
  <div>
    <div class="baseInfo">
      <span><h3>基本信息</h3></span>
      <ul>
        <li>姓名</li>
        <li>年龄</li>
        <li>性别</li>
        <li>电话</li>
      </ul>
    </div>
    <div class="baseInfo">
      <span><h3>账号设置</h3></span>
      <ul>
        <li>密码</li>
        <li>手机</li>
        <li>邮箱</li>
      </ul>
    </div>
    <el-button @click='loginOut'>退出登录</el-button>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      setInfoForm:{
        
      }
    }
  },

  methods: {
    setInfo(){
    },

    // 退出登录
     loginOut() {
        this.$confirm('此操作将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功退出登录!'
          },
          setTimeout(() => {
            this.$router.push({name:'Login'})
          }, 1000)
          )
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }
  }
}
</script>

<style lang="less" scoped>

</style>>
 