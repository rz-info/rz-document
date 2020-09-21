```html
<el-form ref="form" :rules="rules" :model="formData" label-width="120px" style="margin-top: 60px;">
  <commonFormItem :map="formMap" :formData="formData" :rules.sync="rules" />
</el-form>
```

```js
import commonFormItem from "@/components/Common/formItem"

export default {
  components: {
    commonFormItem,
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
      ]
    }
  },
}
```