<template>
  <zTitle level="1" text="校验">
    <zExample title="示例">
      <el-form ref="form" :model="formData" :rules="rules" label-width="120px" style="margin-top: 60px;">
        <commonFormItem :map="formMap" :formData="formData" />
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form>
      <template v-slot:document>
        <exp1 />
      </template>
    </zExample>
    <testMD/>
  </zTitle>
</template>
<script>
  import commonFormItem from "@/components/Common/formItem"

  import exp1 from "@/assets/markdown/projectIssues/ementuiVaildate/exp1.md";
  import testMD from "@/assets/markdown/projectIssues/ementuiVaildate/index.md"
  export default {
    components: {
      commonFormItem,
      exp1,
      testMD
    },
    data() {
      return {
        formData: {
          representBatch: 'werwer',
          additionalSampleModel: 'dsfsf'
        },
        formMap: [
          [{
            label: '代表批量',
            model: 'representBatch',

          }, {
            label: '附加规格型号',
            model: 'additionalSampleModel',
          }],
        ],
        rules: {
          representBatch: [{
            required: true,
            message: '必填项'
          }, {
            validator: this.$getVaildate('isPositiveInteger'),
          }],
          additionalSampleModel: [{
            validator: this.$getVaildate('isDecimal'),
          }]
        }
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate(vaild => {
          vaild ? this.$message.success('校验成功') : this.$message.warning('校验失败');
        })
      }
    }
  }
</script>
<style lang='scss' scoped>
</style>