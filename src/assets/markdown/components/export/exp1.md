## 示例代码

```html
<commonExport :exportConfig="exportConfig" />
```

```js
export default {
  components: {
    commonExport,
  },
  data() {
    return {
      exportConfig: {
        tableList: [ // 必填, 导出内容(复选框用)
          {
            id: 1, // 序号
            itemName: '单位名称', // 名称
            prop1: '单位名称'
          },
          {
            id: 2, // 序号
            itemName: '回款金额', // 名称
            prop2: '回款金额'
          },
          {
            id: 3, // 序号
            itemName: '回款方式', // 名称
            prop3: '回款方式'
          }
        ],
        typeList: ['excel', 'pdf', 'word'], // 选填, 导出方式类别, 默认只有excel

        map: [], // 必填且无需数据, 用于接收导出接口所需参数 
        fileType: '', // 必填且无需数据, 用于接收导出接口所需参数
      }
    }
  },
  watch: {
    exportConfig: {
      handler(now) {
        const exportParams = { // 调用导出接口所需参数
          map: this.exportConfig.map,
          fileType: this.exportConfig.fileType
        };
        console.log(exportParams);
      },
      deep: true,
    }
  }
};
```

