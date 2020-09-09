<template>
  <div class="com-wrapper">
    <div class="slide">
      <doc-nav class="el-menu-vertical-demo" :defaultActive="defaultActive" :menuList="menuList" />
    </div>
    <router-view class="container" />
  </div>
</template>
<script>
  import docNav from "@/components/documentComponents/navigation.vue";

  export default {
    components: {
      docNav
    },
    props: ['defaultActive','menuList'],
  };
</script>
<style lang="scss" scoped>
  .com-wrapper {
    height: 100%;
    display: flex;

    .slide {
      width: 200px;
      height: 100%;

      .el-menu-vertical-demo {
        height: 100%;
      }
    }

    .container {
      flex: 1;
      padding: 20px;
      overflow: auto;
    }
  }
</style>