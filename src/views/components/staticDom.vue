<!--
 * @Author: 张魁堡
 * @Date: 2020-08-31 08:44:02
 * @LastEditTime: 2020-08-31 08:45:00
 * @LastEditors: 
 * @Version: 
 * @Description: 
 * @FilePath: \rz-document\src\views\components\staticDom.vue
-->
<template>
  <div class="wrapper">
    <exampleCom title="弹窗">
      <el-button type="primary" @click="openEject(1)">打开弹窗</el-button>
    </exampleCom>
    <testMD />
  </div>
</template>
<script>
  import exampleCom from "@/components/documentComponents/example.vue";
  import testMD from "@/assets/markdown/components/eject.md";
  import Eject from "@/components/Common/eject.vue";

  export default {
    components: {
      testMD,
      Eject,
      exampleCom
    },
    data() {
      return {

      }
    },
    methods: {
      
    }
  };
</script>
<style lang="scss" scoped></style>