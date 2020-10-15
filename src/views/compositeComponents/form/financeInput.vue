<template>
  <div>
    <financeInput class="form-item" :inputModel.sync="inputModel"/>
    <div>绑定数据为：{{inputModel}}</div>
  </div>
</template>
<script>
  import financeInput from '@/components/Common/compositeComponents/financeInput'
  export default {
    components: {
      financeInput
    },
    data() {
      return {
        inputModel: '10000'
      }
    },
    methods: {
      change(data) {
        this.$message.success(`选择了${data.label}, value为${data.value}`);
      },
      btn() {
        console.log(this.inputModel)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .form-item {
    margin-right: 20px;
  }
</style>