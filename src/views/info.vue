<template>
  <div class="info">
    <div class="info_container">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <p style="font-size:.4rem">刷新次数: {{ count }}</p>
        <p style="font-size:.4rem">
          API
          参数 说明 类型 默认值 版本
          v-model 是否在加载中 Boolean - -
          pulling-text 下拉过程文案 String 下拉即可刷新... -
          loosing-text 释放过程文案 String 释放即可刷新... -
          loading-text 加载过程文案 String 加载中... -
          success-text 加载成功提示文案 String - 1.6.2
          success-duration 加载成功提示时长(ms) String 500 1.6.2
          animation-duration 动画时长 Number 300 -
          head-height 顶部内容高度 Number 50 -
          disabled 是否禁用 Boolean false 1.1.10
          Event
          事件名 说明 参数
          refresh 下拉刷新时触发 -
          Slot
          名称 说明
        </p>
        <p style="font-size:.4rem">
          API
          参数 说明 类型 默认值 版本
          v-model 是否在加载中 Boolean - -
          pulling-text 下拉过程文案 String 下拉即可刷新... -
          loosing-text 释放过程文案 String 释放即可刷新... -
          loading-text 加载过程文案 String 加载中... -
          success-text 加载成功提示文案 String - 1.6.2
          success-duration 加载成功提示时长(ms) String 500 1.6.2
          animation-duration 动画时长 Number 300 -
          head-height 顶部内容高度 Number 50 -
          disabled 是否禁用 Boolean false 1.1.10
          Event
          事件名 说明 参数
          refresh 下拉刷新时触发 -
          Slot
          名称 说明
        </p>
        <p style="font-size:.4rem">
          API
          参数 说明 类型 默认值 版本
          v-model 是否在加载中 Boolean - -
          pulling-text 下拉过程文案 String 下拉即可刷新... -
          loosing-text 释放过程文案 String 释放即可刷新... -
          loading-text 加载过程文案 String 加载中... -
          success-text 加载成功提示文案 String - 1.6.2
          success-duration 加载成功提示时长(ms) String 500 1.6.2
          animation-duration 动画时长 Number 300 -
          head-height 顶部内容高度 Number 50 -
          disabled 是否禁用 Boolean false 1.1.10
          Event
          事件名 说明 参数
          refresh 下拉刷新时触发 -
          Slot
          名称 说明
        </p>
        <p style="font-size:.4rem">
          API
          参数 说明 类型 默认值 版本
          v-model 是否在加载中 Boolean - -
          pulling-text 下拉过程文案 String 下拉即可刷新... -
          loosing-text 释放过程文案 String 释放即可刷新... -
          loading-text 加载过程文案 String 加载中... -
          success-text 加载成功提示文案 String - 1.6.2
          success-duration 加载成功提示时长(ms) String 500 1.6.2
          animation-duration 动画时长 Number 300 -
          head-height 顶部内容高度 Number 50 -
          disabled 是否禁用 Boolean false 1.1.10
          Event
          事件名 说明 参数
          refresh 下拉刷新时触发 -
          Slot
          名称 说明
        </p>
        <p style="font-size:.4rem">
          API
          参数 说明 类型 默认值 版本
          v-model 是否在加载中 Boolean - -
          pulling-text 下拉过程文案 String 下拉即可刷新... -
          loosing-text 释放过程文案 String 释放即可刷新... -
          loading-text 加载过程文案 String 加载中... -
          success-text 加载成功提示文案 String - 1.6.2
          success-duration 加载成功提示时长(ms) String 500 1.6.2
          animation-duration 动画时长 Number 300 -
          head-height 顶部内容高度 Number 50 -
          disabled 是否禁用 Boolean false 1.1.10
          Event
          事件名 说明 参数
          refresh 下拉刷新时触发 -
          Slot
          名称 说明
        </p>
        <p style="font-size:.4rem">
          API
          参数 说明 类型 默认值 版本
          v-model 是否在加载中 Boolean - -
          pulling-text 下拉过程文案 String 下拉即可刷新... -
          loosing-text 释放过程文案 String 释放即可刷新... -
          loading-text 加载过程文案 String 加载中... -
          success-text 加载成功提示文案 String - 1.6.2
          success-duration 加载成功提示时长(ms) String 500 1.6.2
          animation-duration 动画时长 Number 300 -
          head-height 顶部内容高度 Number 50 -
          disabled 是否禁用 Boolean false 1.1.10
          Event
          事件名 说明 参数
          refresh 下拉刷新时触发 -
          Slot
          名称 说明
        </p>
      </van-pull-refresh>
    </div>
    <van-nav-bar title="信息"/>
  </div>
</template>
<script>
import scroll from 'better-scroll'
export default {
  data() {
    return {
      count: 0,
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  created(){
      setTimeout(()=>{
          this.scroll = new scroll('.info',{click:true})
      },500)
  }
};
</script>
<style>
.info {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
