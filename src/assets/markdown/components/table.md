## 示例代码

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
              prop4: "provided",
              prop5: "Releases",
              prop6: "published"
            },
            {
              prop1: "published",
              prop2: "passive",
              prop3: "Releases",
              prop4: "topics",
              prop5: "Releases",
              prop6: "error"
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
            name: "到账日期",
            prop: "prop4"
          },
          {
            name: "收款人",
            prop: "prop5"
          },
          {
            name: "备注",
            prop: "prop6",
            width: 300
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
          hideIndex: false // 隐藏序号列, 默认false
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
        type: "selection", // type 设置为 selection 渲染复选框, 通过绑定 selection-change 事件监听复选框变动
      },
      {
        name: '单位名称', // 表头, 必填
        prop: 'prop1', // 数据 prop, 必填
      }, {
        name: '操作', 
        prop: 'prop7', // 无需数据时可不填
        width: 200, // 宽度, 选填
        align: '', // 对齐方式, 默认 center, 选填
        type: '', // 类型, 选填
        template: { // 其他组件写在 templat 里, 选填
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
      hideIndex: false // 隐藏序号列, 默认false
    }
  }
}

```

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