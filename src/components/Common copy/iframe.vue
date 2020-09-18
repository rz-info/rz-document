<!--
 * @Author: 张魁堡
 * @Date: 2020-09-09 17:07:25
 * @LastEditTime: 2020-09-15 18:25:49
 * @LastEditors: 张魁堡
 * @Description: 
 * @FilePath: \ruite\src\components\Common\iframe.vue
-->
<template>
  <div ref="container" class="report-container" v-loading="showLoading" element-loading-text="加载中..."
    element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.7)">
    <iframe :src='reportUrl' width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0"
      @load="iframeLoad()">
    </iframe>
  </div>

</template>
<script>
  import {
    getToken
  } from "@/utils/cookies";

  export default {
    props: {
      src: {
        type: String,
        default: '',
      }
    },
    data() {
      return {
        showLoading: true,
      }
    },
    watch: {
      reportUrl() {
        this.showLoading = true;
      }
    },
    computed: {
      token() {
        let ct = '?';
        if (this.src.indexOf('?') > -1) { // 有参数
          ct = '&';
        }
        return `${ct}token=${getToken()}`;
      },
      reportUrl() {
        var baseUrl = document.location.origin;
        // var baseUrl = 'http://localhost:8081';
        // var baseUrl = 'http://192.168.1.15:8080';
        // var baseUrl = process.env.VUE_APP_URL_IP;

        return baseUrl + this.src + this.token;
      }
    },
    methods: {
      iframeLoad() {
        this.showLoading = false;
      }
    }
  }

</script>
<style lang='scss' scoped>
</style>
