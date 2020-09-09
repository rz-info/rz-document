<template>
  <div>
    <relationInput class="form-item" :list="list" :inputModel.sync="inputModel" @change="change" />
    <div>绑定数据为：{{inputModel}}</div>
  </div>
</template>
<script>
  import relationInput from '@/components/Common/compositeComponents/relationInput'
  export default {
    components: {
      relationInput
    },
    data() {
      return {
        list: [{
          label: '大山',
          value: '1'
        }, {
          label: '火车',
          value: '2'
        }],
        inputModel: '关联'
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