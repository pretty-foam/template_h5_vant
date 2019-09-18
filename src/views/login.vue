<template>
  <div class="home">
      <div class="home_container">
             <van-collapse v-model="activeNames">
                  <van-collapse-item title="有赞微商城" name="1">
                    提供多样店铺模板，快速搭建网上商城
                  </van-collapse-item>
             </van-collapse>
                <van-button type="default" @click="push">默认按钮</van-button>
            <transition name="van-slide-right">
                 <router-view />
            </transition>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false, //是否显示
      active: 0,
      form:{},
      activeNames:['1'],
    }
  },
  methods:{
    push(){
      this.$router.push('/home/child')
      this.$store.state.app = false
    }
  }
};
</script>
<style>
.test {
  width: 1rem;
  height: 1rem;
  background: red;
  border-bottom: 1px solid blue;
}
</style>
