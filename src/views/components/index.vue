<template>
  <secondLayer :menuList="menuList"/>
</template>
<script>
  import secondLayer from '@/components/documentComponents/secondLayer'

  export default {
    components: {
      secondLayer
    },
    data() {
      return {
        menuList: [{
            label: "表格",
            path: "/components/table"
          },
          {
            label: "导出",
            path: "/components/export"
          },
          {
            label: "标签",
            path: "/components/tag"
          },
          {
            label: "弹窗",
            path: "/components/eject"
          },
          {
            label: "按钮",
            path: "/components/button"
          }
        ]
      };
    }
  };
</script>