<template>
  <div class="wrapper">
    <secondLayer :defaultActive="defaultActive" :menuList="menuList" />
  </div>
</template>
<script>
  import secondLayer from '@/components/documentComponents/secondLayer'
  export default {
    components: {
      secondLayer
    },
    data() {
      return {
        defaultActive: "/components/table",
        menuList: [{
            label: "表单",
            path: "/compositeComponents/form"
          }
        ]
      };
    }

  }
</script>
<style lang='scss' scoped>
</style>