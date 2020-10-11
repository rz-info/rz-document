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
        }, {
          type: 'text',
          required: true,
          show(data) {
            return data.fp1 == 1;
          },
          template: {
            text: '单选框选择选项1的时候显示',
            style: 'color: red'
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
  }
}
```