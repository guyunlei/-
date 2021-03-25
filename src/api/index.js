import util from '../lib/utils'

export default {
  getBaseUrl(){
        return '127.0.0.1'
      },
    //z注册接口
      getRegister(params,config={}){
        return util.http.post('0.0.0.0', params, config)
      },
      //首页轮播图接口
      getPictureInfo(params,config={}){
        return util.http.post('0.0.0.0', params, config)
      },
      //查询页面--详细信息
      getDetailInfo(params,config={}){
        return util.http.post('0.0.0.0', params, config)
      },
       //线下捐赠--提交
       offlineDonation(params,config={}){
        return util.http.post('127.0.0.1', params, config)
      },
      //线下捐赠--查询
      getDonationInfo(params,config={}){
        return util.http.post('127.0.0.1', params, config)
      },
}