<!--
 * @Author: 张魁堡
 * @Date: 2020-08-18 15:02:54
 * @LastEditTime: 2020-09-01 15:20:09
 * @LastEditors: Please set LastEditors
 * @Version: 
 * @Description: 
 * @FilePath: \rz-document\src\views\methods\index.vue
-->
<template>
  <div class="wrapper">
    <testMD />
  </div>
</template>
<script>
  import {
    sort,
    deWeight,
    cloneObj,
    handelMobile,
    formatDate
  } from '@/utils/tools'
  import testMD from '@/assets/markdown/methods/index.md'

  console.log(formatDate(new Date()))
  export default {
    components: {
      testMD
    }

  };
</script>
<style lang="scss" scoped>
  .wrapper {
    padding: 20px;
  }
</style>