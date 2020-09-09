<template>
  <div class="wrapper">
    <h1>表单</h1>
    <zTitle level="2" text="关联输入框">
      <relationCom class="form-wrap" />
    </zTitle>
    <zTitle level="2" text="级联输入框">
      <cascaderCom class="form-wrap" />
    </zTitle>
  </div>
</template>
<script>
  import zTitle from '@/components/documentComponents/zTitle'
  import relationCom from './relationInput'
  import cascaderCom from './cascaderInput'
  export default {
    components: {
      zTitle,
      relationCom,
      cascaderCom
    }
  }
</script>
<style lang="scss">
  .form-wrap {
    width: 100%;
    display: flex;
    line-height: 40px;
  }
</style>
<style scoped>
  .wrapper>>>.form-item {
    width: 185px;
  }
</style>