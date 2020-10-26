<template>
  <div class="toast" v-show="toastShow" :style="style">
    {{toastText}}
  </div>
</template>
<script>
  import {
    getMaxZIndex
  } from "@/utils/tools"
  export default {
    data() {
      return {
        toastShow: false,
        toastText: '',
        timmer: '',
        time: 3000
      }
    },
    computed: {
      style() {
        return {
          zIndex: this.zIndex
        }
      },
      zIndex() {
        return getMaxZIndex();
      }
    },
    watch: {
      toastShow(now) {
        if(now) this.startTimeout();
      }
    },
    methods: {
      startTimeout() {
        this.stopTimeout();
        this.timmer = setTimeout(this.hideToast, this.time);
      },
      stopTimeout() {
        clearInterval(this.timmer);
      },
      hideToast() {
        this.toastShow = false;
      }
    }
  }
</script>
<style lang='scss' scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 45%;
    transition: all .5s;
    transform: translateX(-50%) translateY(-50%);
    color: #FFF;
    text-align: center;
    background: rgba(17, 17, 17, 0.6);
    max-width: 80%;
    min-width: 450px;
    padding: 18px 30px;
    border-radius: 25px;
  }
</style>