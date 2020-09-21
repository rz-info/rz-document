## 使用方法

### 定义规则
在 `src\utils\elementUIVaildate.ts` 文件中添加校验规则
```js
const vaildateMap: Object = {
    // 数字, 可为小数
    isDecimal: {
        vaildate: /^\d+(\.\d+)?$/, // 正则表达式
        message: '请输入数字' // 错误提示
    }
}
```


### 在表单中使用
使用 `this.$getVaildate()` 公共方法获取定义好的校验规则

```js
export default {
  data() {
    return {
      rules: {
        representBatch: [{
          required: true,
          message: '必填项'
        }, {
          validator: this.$getVaildate('isPositiveInteger')
        }]
      }
    }
  }
}
```