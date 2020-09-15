<template>
  <zTitle level="1" text="跨域显示spread表格">
    <zExample title="在当前页面显示">
      <exp1 />
      <template v-slot:document>
        <exp1Details />
      </template>
    </zExample>
    <zExample title="跳转路由后显示">
      <exp2 />
      <template v-slot:document>
        <exp2Details />
      </template>
    </zExample>
  </zTitle>
</template>
<script>
  import exp1 from '@/assets/markdown/projectIssues/crossDomainSpread/exp1.md'
  import exp1Details from '@/assets/markdown/projectIssues/crossDomainSpread/exp1_details.md'
  import exp2 from '@/assets/markdown/projectIssues/crossDomainSpread/exp2.md'
  import exp2Details from '@/assets/markdown/projectIssues/crossDomainSpread/exp2_details.md'
  export default {
    components: {
      exp1,
      exp1Details,
      exp2,
      exp2Details,
    },
  }
</script>
<style lang='scss' scoped>
</style>