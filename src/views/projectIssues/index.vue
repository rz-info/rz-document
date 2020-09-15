<template>
  <div class="wrapper">
    <secondLayer :menuList="menuList" />
  </div>
</template>
<script>

  import secondLayer from '@/components/documentComponents/secondLayer'
  import {
    projectIssuesMenuList
  } from "@/navConfig"

  export default {
    components: {
      secondLayer
    },
    data() {
      return {
        defaultActive: "/components/table",
        menuList: projectIssuesMenuList
      };
    }
  }
</script>
<style lang='scss' scoped>
</style>