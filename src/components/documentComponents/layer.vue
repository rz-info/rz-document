<template>
  <div class="wrapper">
    <doc-nav mode="horizontal" :defaultActive="defaultActive" :menuList="menuList" />
    <router-view class="container" />
  </div>
</template>
<script>
  import docNav from "@/components/documentComponents/navigation.vue";
  import {
    topMenuList
  } from "@/navConfig"
  export default {
    components: {
      docNav
    },
    data() {
      return {
        menuList: topMenuList
      };
    },
    computed: {
      defaultActive() {
        return this.$route.matched[1].path
      }
    }
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .container {
      flex: 1;
    }
  }
</style>