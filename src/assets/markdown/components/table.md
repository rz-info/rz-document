## 示例1代码

```html
<commonTable :tableMap="tableMap" :tableData="tableData" :tableConfig="tableConfig" @viewDetails="viewDetails" />
```

```js
export default {
    components: {
      commonTable,
    },
    data() {
      return {
        tableData: {
          data: [{
              prop1: "No description",
              prop2: "website",
              prop3: "topics",
            },
            {
              prop1: "published",
              prop2: "passive",
              prop3: "Releases",
            }
          ],
          total: 2,
          page: 1,
          pageSize: 2
        },

        tableMap: [{
            type: "selection"
          },
          {
            name: "单位名称",
            prop: "prop1"
            align: 'right',
          },
          {
            name: "回款金额",
            prop: "prop2",
            align: 'left',
          },
          {
            name: "回款方式",
            prop: "prop3"
          },
          {
            name: "操作",
            width: 300,
            template: {
              btn: [{
                label: '查看详情',
                style: 'background: green',
                event: 'viewDetails'
              }]
            }
          }
        ],
        tableConfig: {
          // 其他配置, 选填
          hidePage: false, // 隐藏分页, 默认false
          hideIndex: false, // 隐藏序号列, 默认false
          showCheckBox: true // 第一列显示复选框, 默认false
        }
      };
    },
    methods: {
      viewDetails() {
        console.log('is details');
      },
      selectChange(val) {
        console.log(val)
      }
    }
  };
```


## 示例2代码

```html
<commonTable :tableMap="example2.tableMap" :tableData="example2.tableData">
  <template v-slot:btn="{ rowData, btnInfo }">
    <el-button v-for="btn in btnInfo" :key="btn.label" :type="btn.type || 'primary'" :style="rowData.isEdit ? btn.style: {'background':'red'}"
      :size="btn.size || 'mini'" @click="vmSelf[btn.event](rowData)" v-text="getBtnLabel(rowData, btn)" />
  </template>
</commonTable>
```

```js
export default {
  data: () => {
    return {
      tableData: {
        data: [{
            isEdit: true,
          },
          {
            isEdit: false,
          }
        ],
        total: 2,
        page: 1,
        pageSize: 2
      },
      tableMap: [{
          type: "selection",
        }, {
          name: "是否可编辑",
          prop: "isEdit",
        },
        {
          name: "操作",
          width: 300,
          template: {
            btn: [{
              label: "查看详情",
              style: "background: blue; border: none;",
              event: "editEject"
            }]
          }
        }
      ]
    }
  },
  methods: {
    editEject(data) {
      console.log('is editEject', data.isEdit ? '编辑' : '查看详情');
    },
    getBtnLabel(rowData, btn) {
      return (rowData.isEdit ? '编辑' : '查看详情');
    }
  },
  computed: {
    vmSelf() { // 获取当前vue实例, 用于获取methods中的方法
      return this;
    }
  }
}
```


## 示例3代码

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
## 使用方法

### 引入

```js
import commonTable from '@/components/Common/table.vue'
```

```html
<commonTable :tableMap="tableMap" :tableData="tableData" :tableConfig="tableConfig" @viewDetails="viewDetails"  @selection-change="selectChange"/>
```
### props

```js
export default {
  data() {
    tableMap: [ // 用于生成表格的配置
      {
        name: '单位名称', // 表头, 必填
        prop: 'prop1', // 数据 prop, 必填
      }, {
        name: '操作', 
        prop: 'prop7', // 无需数据时可不填
        width: 200, // 宽度, 选填
        align: '', // 对齐方式, 默认 center, 选填
        type: '', // 类型, 选填
        template: { // 其他组件写在 templat 里, 选填, 设置template后意味着要自行渲染表格内容, prop属性失效
          btn: [{
            label: '查看详情', // 按钮文本
            style: 'background: green',
            event: 'viewDetails' // 按钮事件(需在父级定义同名函数并当做自定义事件传入表格组件)
          }]
        }
      }
    ],
    
    tableData: { // 表格数据, 直接传入接口返回的数据即可, 格式如下
      data: [{
        authFileName: '234', // key值对应 tableMap 中的 prop
      }, {
        authFileKey: '234',
      }],
      total: 10, // total 大于0时显示分页
      page: 1,
      pageSize: 10
    },

    tableConfig: { // 其他配置, 选填
      hidePage: false, // 隐藏分页, 默认false
      hideIndex: false, // 隐藏序号列, 默认false
      showCheckBox: false // 第一列显示复选框, 默认false
    }
  }
}

```

### 插槽

内置具名插槽 `btn`, 插槽作用域接收以下 
1. `rowData`  当前行数据
2. `template`  当前列的 `template`(即 `tableMap[index].template`, 与 `tableMap` 对应)
3. `scope`  `elementUI` 中通过 `slot-scope="scope"` 获取到的数据, 自定义列的内容，参数为 `{ row, column, $index }`

插槽内容会覆盖原本的内容, 可以根据需要创建任意元素
### 事件

`table` 组件内部通过 `$emit` 方法触发按钮的事件, 需要在 `table` 组件上绑定对应的函数

```js
export default {

  ...

  methods: {
    emitEvent(event, data) {
      this.$emit(event, data);
    },

    // 分页触发事件
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },

    // 复选框被选中时触发的事件
    handleSelectionChange(data) {
      this.$emit("selection-change", data);
    }
}

```

## tips
1. 要在第一列显示复选框, 需要把 `tableConfig.showCheckBox` 设置为 `true`, 在其他列显示复选框时, 在 `tableMap` 中添加一项 `{type: 'selection'}` 即可
2. 设置 `template` 后意味着要自行渲染表格内容, `prop` 属性失效
3. 内置的 `template`只会把 `btn` 中的内容渲染为按钮, 使用 `slot` 覆盖后需要手动调用响应事件 `@click="vmSelf[btn.event](rowData)` (写法不固定, 取到事件执行即可)
4. 使用 `v-slot:btn` 具名插槽后相当于抛弃内置的默认渲染规则, 自由发挥~