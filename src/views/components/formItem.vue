<template>
  <zTitle class="wrapper" level="1" text="表单">
    <zExample title="示例">
      <el-form :rules="rules" label-width="120px" style="margin-top: 60px;">
        <commonFormItem :map="formMap" :formData="formData" :rules.sync="rules"/>
      </el-form>
      <template v-slot:document>
        <!-- <exp1 /> -->
      </template>
    </zExample>
  </zTitle>
</template>
<script>
  import commonFormItem from "@/components/Common/formItem"
  export default {
    components: {
      commonFormItem
    },
    data() {
      return {
        formData: {},
        formMap: [
          [{
            label: '委托单位',
            model: 'memberCompanyName',
            required: true,
          }, {
            label: '样品名称',
            model: 'sampleName',
            required: true,
          }],
          [{
            label: '样品数量',
            model: 'sampleCount',
            required: true,
            brother: [{
              compName: 'relationInput',
              model: 'representBatchUnit',
              list: []
            }],
          }, {
            label: '评定依据',
            model: 'evaluationCriteriaName',
            required: true,
            template: {
              optionList: []
            }
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
          }],
          [{
            label: '代表批量',
            model: 'representBatch',
            brother: [{
              compName: 'relationInput',
              model: 'representBatchUnit',
              list: []
            }],
          }, {
            label: '附加规格型号',
            model: 'additionalSampleModel',
          }],
          [{
            label: '产品批号',
            model: 'serialNumber',
          }, {
            label: '使用部位',
            model: 'usedPosition',
          }],
          [{
            label: '检测性质',
            model: 'detectionNatureType',
            required: true,
            type: 'radio',
            template: {
              radioList: [{
                label: '普通委托送检',
                value: 'DETECTION_NATURE_NORMAL'
              }, {
                label: '有见证取样的委托检测',
                value: 'DETECTION_NATURE_WITNESS'
              }, {
                label: '监督抽检',
                value: 'DETECTION_NATURE_SUPERVISE'
              }, {
                label: '其他',
                value: 'DETECTION_NATURE_OTHER'
              }]
            }
          }]
        ]
      }
    },
    computed: {
      rules() {
        let formList = [this.formMap];
        let obj = {};
        formList.forEach(formData => {
          formData.forEach(row => {
            row.forEach(col => {
              if (col.required) {
                const vaild = {
                  required: true,
                  message: "必填项",
                  trigger: "change"
                }

                if (obj[col.model]) {
                  obj[col.model].push(vaild)
                } else {
                  obj[col.model] = [vaild]
                }
              }
            })
          })
        })


        return obj;
      }
    }
  }
</script>
<style lang='scss' scoped>
</style>