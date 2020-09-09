<template>
  <div class="wrapper">
    <cascaderInput class="form-item" :list="list" :inputModel.sync="inputModel" @change="change" />
    <div>绑定数据为：{{inputModel}}</div>
  </div>
</template>
<script>
  import cascaderInput from '@/components/Common/compositeComponents/cascaderInput'
  export default {
    components: {
      cascaderInput
    },
    data() {
      return {
        list: [{
          label: '大山',
          value: '1',
          disabled: true,
          children: [{
            label: '小草',
            value: '1-1'
          }]
        }, {
          label: '火车',
          value: '2'
        }],
        inputModel: '级联'
      }
    },
    methods: {
      change(select, val) {
        console.log(select, val);
        this.$message.success(`选择的是${val}`)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .form-item {
    margin-right: 20px;
  }
</style>