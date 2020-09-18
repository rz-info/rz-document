<template>
  <zTitle class="wrapper" level="1" text="iframe">
    <zExample title="示例">
      <commonIframe style="height:200px;border:1px solid" :src="src" />
      <template v-slot:document>
        <exp1 />
      </template>
    </zExample>
    <testMD />
  </zTitle>
</template>
<script>
  import testMD from "@/assets/markdown/components/iframe/index.md";
  import exp1 from "@/assets/markdown/components/iframe/exp1.md";

  import commonIframe from "@/components/Common/iframe.vue";

  export default {
    components: {
      testMD,
      exp1,
      commonIframe,
    },
    data() {
      return {
        src: '/index',
      }
    }
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    width: calc(100% - 1px);
  }
</style>