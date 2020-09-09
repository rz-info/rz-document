## 示例二代码

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