<template>
  <secondLayer :menuList="menuList" />
</template>
<script>
  import secondLayer from '@/components/documentComponents/secondLayer'
  import {
    componentsMenuList
  } from "@/navConfig"
  export default {
    components: {
      secondLayer
    },
    data() {
      return {
        menuList: componentsMenuList
      };
    }
  };
</script>