<template>
  <zTitle level="1" text="表单">
    <zExample title="布局">
      <el-form :model="formData" label-width="120px" style="margin-top: 60px;">
        <commonFormItem :map="formMap" :formData="formData" />
      </el-form>
      <template v-slot:document>
        <exp1 />
      </template>
    </zExample>
    <zExample title="表单类型">
      <el-form :model="formData" label-width="120px" style="margin-top: 60px;">
        <commonFormItem :map="formMap1" :formData="formData" />
      </el-form>
      <template v-slot:document>
        <exp2 />
      </template>
    </zExample>
    <testMD />
  </zTitle>
</template>
<script>
  import commonFormItem from "@/components/Common/formItem"

  import testMD from "@/assets/markdown/components/formItem/index.md";
  import exp1 from "@/assets/markdown/components/formItem/exp1.md";
  import exp2 from "@/assets/markdown/components/formItem/exp2.md";
  export default {
    components: {
      commonFormItem,
      testMD,
      exp1,
      exp2
    },
    data() {
      return {
        formData: {
          fp1: '1'
        },
        formMap: [
          [{
            label: '委托单位',
            model: 'memberCompanyName',
            required: true,
          }, {
            label: '样品名称',
            model: 'sampleName',
            required: true,
          }, {
            label: '样品名称',
            model: 'sampleName',
            required: true,
          }],
          [{
            label: '规格',
            model: 'sampleSpecificationName',
            required: true,
            template: {
              optionList: []
            }
          }, {
            label: '型号',
            model: 'sampleModelName',
            required: true,
            template: {
              optionList: []
            }
          }, {
            label: '其他型号1',
            model: 'otherSampleModelName',
            required: true,
            template: {
              optionList: []
            }
          }, {
            label: '其他型号2',
            model: 'otherSampleModelName',
            required: true,
            template: {
              optionList: []
            }
          }],
          [{
            label: '代表批量',
            model: 'representBatch',
            span: 6,
            brother: [{
              compName: 'relationInput',
              model: 'representBatchUnit',
              list: []
            }],
          }, {
            label: '样品数量',
            model: 'sampleCount',
            span: 6,
            required: true,
            brother: [{
              compName: 'relationInput',
              model: 'representBatchUnit',
              list: []
            }],
          }, {
            label: '总数',
            span: 3,
            model: 'additionalSampleModel',
          }, {
            label: '附加规格型号',
            model: 'additionalSampleModel',
          }]
        ],
        formMap1: [
          [{
            label: '单选框',
            model: 'fp1',
            required: true,
            type: 'radio',
            template: {
              radioList: [{
                label: '选项1',
                value: '1'
              }, {
                label: '选项2',
                value: '2'
              }, {
                label: '选项3',
                value: '3'
              }, {
                label: '选项4',
                value: '4'
              }]
            }
          }],
          [{
            label: '时间',
            type: 'date',
            model: 'fp2'
          }, {
            label: '选择框',
            type: 'select',
            model: 'fp3',
            template: {
              optionList: [{
                label: '选项1',
                value: 'key1'
              }, {
                label: '选项2',
                value: 'key2'
              }]
            }
          }],
          [{
            model: 'fp4',
            label: '默认为文本框',
            disabled: true
          }, {
            label: '带二级框',
            brother: [{
              compName: 'relationInput', // cascaderInput 级联, relationInput 关联
              model: 'representBatchUnit',
              list: []
            }],
          }],
          [{
            type: 'text',
            model: 'fp5',
            template: {
              text: '时间只能选择xxx与xxx之间',
              style: 'color:red;'
            }
          }],
          [{
            label: '文本域',
            model: 'fp6',
            type: 'textarea',
          }]
        ]
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate(vaild => {
          vaild ? this.$message.success('校验成功') : '';
        })
      }
    }
  }
</script>
<style lang='scss' scoped>
</style>