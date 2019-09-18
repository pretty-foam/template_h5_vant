<template>
  <div class="my">
    <div class="my_container">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
        <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
        <van-collapse-item title="有赞美业" name="3" disabled>线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
      </van-collapse>
    </div>
    <van-nav-bar title="我的" fixed/>
  </div>
</template>
<script>
import scroll from 'better-scroll'
export default {
  data() {
    return {
      show: false, //是否显示
      active: 0,
      form: {},
      activeNames: ["1"]
    };
  },
  mounted(){
    setTimeout(()=>{
        this.scroll = new scroll('.my',{click:true})
    },500)
  }
};
</script>
<style>
.my{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.my_container{
  padding: .92rem 0 1rem 0
}

</style>
