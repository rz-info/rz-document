<template>
  <zTitle level="1" text="列表参数缓存">
    <zExample title="示例">
      <template v-slot:document>
        <exp2 />
      </template>
    </zExample>
    <exp1 />
  </zTitle>
</template>
<script>
  import exp1 from '@/assets/markdown/projectIssues/pageCache/exp1.md'
  import exp2 from '@/assets/markdown/projectIssues/pageCache/exp2.md'
  export default {
    components: {
      exp1,
      exp2
    },
  }
</script>
<style lang='scss' scoped>
</style>