<template>
  <div> 
    <el-button class="online-donation" @click="changeOn"><span>线上捐款</span></el-button>
    <el-button class="offline" @click="changeOff"><span>线下捐款</span></el-button>
    
    <div class="online-donation" v-if="showInfo=='on'">
      <img src="./pay.jpg" alt="donation">
    </div>
    <div class="offline-donation" v-if="showInfo=='off'">
      <el-form ref="donationForm" :model="donationForm" label-width="100px" class="form">
         <el-form-item label="捐赠人">
          <el-input v-model="donationForm.Donor" clearable size="small"></el-input>
        </el-form-item>
         <el-form-item label="捐赠人电话">
          <el-input v-model="donationForm.DonorTel" clearable  size="small"></el-input>
        </el-form-item>
         <el-form-item label="收件人">
          <el-input v-model="donationForm.addressee" clearable  size="small"></el-input>
        </el-form-item>
         <el-form-item label="收件人电话">
          <el-input v-model="donationForm.addresseeTel" clearable  size="small"></el-input>
        </el-form-item>
         <el-form-item label="捐赠的物品">
          <el-input v-model="donationForm.material" clearable  size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认捐赠</el-button>
          <el-button @click="getdonation"> 查询捐赠记录</el-button>
        </el-form-item>
      </el-form>
    </div>
     <el-dialog
        title="捐赠记录"
        :visible.sync="dialogVisible"
        width="85%"
        custom-class="dialogHeight"
        top="9vh">
         <el-row :gutter="6">
            <span>hahah</span>
            <span  v-for="(item, index) in donationInfo" :key="index">
               {{item.value}}
            </span>
          </el-row>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      donationForm:{
        Donor:'',
        DonorTel:'',
        addressee:'',
        addresseeTel:'',
        material:'',//捐赠物资
      },
      dialogVisible :false,
      donationInfo:[],
      showInfo:'on',
    }
  },
  methods: {
    changeOn(){
      this.showInfo = 'on'
    },
    changeOff(){
       this.showInfo = 'off'
    },
    onSubmit(){
      console.log(this.donationForm)
       this.$service.offlineDonation(this.donationForm).then(res=>{
      })
    },
    getdonation(){
      this.dialogVisible = !this.dialogVisible
      this.$service.getDonationInfo(this.donationForm.Donor).then(res=>{
        // this.donationInfo=res.
      })
    },

  }
}
</script>

<style lang="less" scoped>
/deep/.el-input__inner{
    width: 40%;
  }
  .el-form-item{
    margin-left: 30%;
  }
  .online-donation{
    img{
      position:absolute;
      width: 25%;
      left:35%;
    }
  }
</style>