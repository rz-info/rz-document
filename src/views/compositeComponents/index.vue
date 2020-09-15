<template>
  <div class="wrapper">
    <secondLayer :menuList="menuList" />
  </div>
</template>
<script>
  import secondLayer from '@/components/documentComponents/secondLayer'
  import {
    compositeComponentsMenuList
  } from "@/navConfig"
  export default {
    components: {
      secondLayer
    },
    data() {
      return {
        defaultActive: "/components/table",
        menuList: compositeComponentsMenuList
      };
    }

  }
</script>
<style lang='scss' scoped>
</style>