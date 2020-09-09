## 示例一代码

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