<template>
  <div ref="container" class="report-container" v-loading="showLoading" element-loading-text="加载中..."
    element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.7)">
    <iframe v-if="reportUrl" :src='reportUrl' width="100%" height="100%" frameborder="no" border="0" marginwidth="0"
      marginheight="0" @load="iframeLoad()">
    </iframe>
  </div>

</template>
<script>
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
        reportUrl: ''
      }
    },
    // computed: {
    //   reportUrl() {
    //     const baseUrl = 'http://localhost:8080';
    //     // const baseUrl = process.env.VUE_APP_URL_IP;
    //     return baseUrl + this.src;
    //   }
    // },
    methods: {
      iframeLoad() {
        this.showLoading = false;
      }
    },
    mounted() {
      const baseUrl = 'http://localhost:8080';
      // const baseUrl = process.env.VUE_APP_URL_IP;
      setTimeout(() => {
        this.reportUrl = baseUrl + this.src;
      },5)
      // return baseUrl + this.src;
    }
  }
</script>
<style lang='scss' scoped>
</style>