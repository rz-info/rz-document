<template>
  <el-menu :default-active="defaultActive" :mode="mode" router>
    <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
      {{ item.label }}
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: "vertical" // 可选 horizontal, 水平
    },
    defaultActive: {
      // 初始活动item
      type: String
    },
    menuList: {
      type: Array,
      default: [
        {
          label: "",
          path: ""
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped></style>
