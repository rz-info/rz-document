# 使用方法

## 引入

```js
import commonTable from '@/components/Common/table.vue'
```

```html
<commonTable :tableData="tableData" :tableMap="tableMap" :tableConfig="tableConfig"
  @checkAmount="checkAmount" @historyBilling="historyBilling" @selection-change="selectChange" 
/>
```
## props

```js
export default {
  data() {
    tableMap: [ // 用于生成表格的配置
      {
        name: '首次委托日期', // 表头, 必填
        prop: 'authFileName', // 数据 prop, 必填
      }, {
        name: '查看', 
        prop: 'authFileName',
        width: 200, // 宽度, 选填
        align: '', // 对齐方式, 默认 center, 选填
        type: '', // 类型, 选填
        template: { // 其他组件写在 templat 里, 选填
          btn: [{
            label: '检测量', // 按钮文本
            style: 'background:#3E63B5;border:none',
            event: 'checkAmount' // 按钮事件(需在父级定义同名函数并当做自定义事件传入表格组件)
          }, {
            label: '历史开票记录',
            style: 'background:#3E63B5;border:none',
            event: 'historyBilling'
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
      total: 10,
      page: 1,
      pageSize: 10
    },
    tableConfig: { // 其他配置, 选填
      default: {
        hidePage: false, // 隐藏分页, 默认false
        hideIndex: false // 隐藏序号列, 默认false
      }
    }
  }
}

```

## 自定义事件

`table` 组件内部通过 `$emit` 方法触发按钮的事件, 所以需要在 `table` 组件上绑定将被调用的事件及处理函数

`selection-change` 为复选框被选中时触发的事件

`handleCurrentChange` 为分页触发事件