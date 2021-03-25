<template>
  <div class='home'>
    <template>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in picture" :key="item.id">
          <img :src="item.idView">
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>

<script>
export default {
data(){
  return {
    picture:[{id:0,idView:require('../../assets/轮播图/bg.jpeg')},
    {id:1,idView:require('../../assets/轮播图/bg.jpeg')},
    {id:2,idView:require('../../assets/轮播图/bg.jpeg')}]
  }
},

methods:{
  init(){
    this.getPicture();
  },
  getPicture(){
    //获取轮播图信息
    //this.$service.getPictureInfo().then(res=>{
      // this.picture = res.result
    //})
  },
},
created(){
  this.init();
}
}
</script>

<style lang='less' scoped>
   .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel{
    width: 50%;
    left: 25%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>