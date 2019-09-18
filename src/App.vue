<template>
  <div class="app">
    <!-- {{$store.state.app||1111111111}} -->
    <transition name="van-slide-left" v-if="$store.state.app">
        <router-view />
    </transition>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">标签</van-tabbar-item>
      <van-tabbar-item icon="search" to="/info">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="login">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="my">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      scan :null ,
      active:0,
    }
  },
  methods: {
    startRecognize() {
     this.scan= new plus.barcode.Barcode("bcid");
     this.scan.onmarked = this.onmarked;
    },
    onmarked(type, result) {
      var text = "未知: ";
      switch (type) {
        case plus.barcode.QR:
          text = "QR: ";
          break;
        case plus.barcode.EAN13:
          text = "EAN13: ";
          break;
        case plus.barcode.EAN8:
          text = "EAN8: ";
          break;
      }
      alert(text + result);
    },
    startScan() {
      this.scan.start();
    },
    cancelScan() {
      this.scan.cancel();
    },
    setFlash() {
      this.scan.setFlash(true);
    }
  }
};
</script>