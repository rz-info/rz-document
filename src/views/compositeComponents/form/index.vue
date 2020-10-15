<template>
  <zTitle class="wrapper" level="1" text="表单">
    <zTitle level="2" text="关联输入框">
      <relationCom class="form-wrap" />
    </zTitle>
    <zTitle level="2" text="级联输入框">
      <cascaderCom class="form-wrap" />
    </zTitle>
    <zTitle level="3" text="财务输入框">
      <financeCom class="form-wrap" />
    </zTitle>
  </zTitle>
</template>
<script>
  import zTitle from '@/components/documentComponents/zTitle'
  import relationCom from './relationInput'
  import cascaderCom from './cascaderInput'
  import financeCom from './financeInput'
  export default {
    components: {
      zTitle,
      relationCom,
      cascaderCom,
      financeCom
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