<template>
  <div class="wrapper">
    <doc-nav
      mode="horizontal"
      :defaultActive="defaultActive"
      :menuList="menuList"
    />
    <router-view class="container" />
  </div>
</template>
<script>
import docNav from "@/components/documentComponents/navigation.vue";
export default {
  components: {
    docNav
  },
  data() {
    return {
      activeIndex: "1",

      defaultActive: "/components",
      menuList: [
        {
          label: "组件",
          path: "/components"
        },
        {
          label: "方法",
          path: "/methods"
        },
        {
          label: "class",
          path: "/classes"
        }
      ]
    };
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
