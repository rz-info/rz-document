## 使用方法

### 引入

```js
import commonFormItem from "@/components/Common/formItem"
```
```html
<commonFormItem :map="formMap" :formData="formData" />
```

### props
`formData` 为表单数据

`formMap` 为渲染表单的映射表, 数据类型为二维数组, 一层为行, 二层为列
```js
formMap = [
[{ // 行数据
  label: '单选框', // 左侧文本
  model: 'fp1', // 要绑定的数据, 对应 formData.fp1
  required: true, // 是否必填
  disabled: true, // 是否禁用
  type: 'radio', // 类型, 见 formItem-type
  template: {}, // 存放其他数据
  brother: [{ // 后面加一个级联/关联组件
    compName: 'relationInput', // 组件类型, cascaderInput 级联, relationInput 关联
    model: 'representBatchUnit', // 组件绑定值
    list: [], // 组件数据
  }],
},{
  label: '第一行的第二个输入框'
}],
[{}] // 第二行
]
```

### formItem-type
可选类型及对应`template`
#### 单选
```js
radio = {
  model: 'fp0',
  type: 'radio',
  template: {
    radioList: [{
      label: '选项1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }]
  }
}
```

#### 时间
```js
date = {
  model: 'fp1',
  type: 'date',
}
```

#### 带级联/关联组件
```js
second = {
  label: '带二级框',
  model: 'fp2',
  brother: [{
    compName: 'relationInput', // cascaderInput 级联, relationInput 关联
    model: 'representBatchUnit',
    list: []
  }],
}
```

#### 选择框
```js
select = {
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
}
```

#### 纯文本
```js
text = {
  type: 'text',
  model: 'fp5',
  template: {
    text: '时间只能选择xxx与xxx之间',
    style: 'color:red;'
  }
}
```

#### 文本域
```js
textarea = {
  label: '文本域',
  model: 'fp6',
  type: 'textarea',
}
```