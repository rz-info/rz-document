## 示例三代码

```html
<commonTable :tableMap="tableMap" :tableData="tableData">
  <template v-slot:btn="{ rowData, template, scope }">
    <template v-for="(item,key) in template">
      <el-input :key="key" v-if="key == 'input'" v-model="input[scope.$index]" placeholder="请输入内容"></el-input>
      <el-select :key="key" v-if="key == 'select'" v-model="value[scope.$index]" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </template>
  </template>
</commonTable>
```

```js
export default {
  tableData: {
    data: [{
        comp: 'select'
      },
      {
        comp: 'input'
      }
    ],
    total: 2,
    page: 1,
    pageSize: 2
  },

  tableMap: [{
      name: "其他组件",
      prop: "comp",
      // 设置template后意味着要自行渲染表格内容, prop属性失效
      template: {
        input: {
          event: 'change'
        }
      }
    },
    {
      name: "其他组件",
      template: {
        select: {
          event: 'change'
        }
      }
    }
  ],

  input: {},  // 在渲染组件时用v-model绑定数据要绑定为对象或数组, 否则会导致多个组件绑定到同一个数据
  value: {},

  options: [{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶'
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }, {
    value: '选项4',
    label: '龙须面'
  }, {
    value: '选项5',
    label: '北京烤鸭'
  }],
}
```