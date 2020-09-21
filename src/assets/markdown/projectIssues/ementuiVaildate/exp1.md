```html
<el-form ref="form" :model="formData" :rules="rules" label-width="120px" style="margin-top: 60px;">
  <commonFormItem :map="formMap" :formData="formData" />
  <el-button type="primary" @click="submit">提交</el-button>
</el-form>
```

```js
import commonFormItem from "@/components/Common/formItem"
export default {
  components: {
    commonFormItem
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

```