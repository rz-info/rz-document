## 使用方法

### 引入

```js
import commonExport from '@/components/Common/export.vue'
```

```html
<commonExport :exportConfig="exportConfig" />
```
### props

```js
export default {
  data() {
    exportConfig: {
      tableList: [ // 必填, 导出内容(复选框用)
        {
          id: 1, // 序号
          itemName: '单位名称', // 复选框文本
          prop1: '单位名称' // 键对应列表该列的 prop, 值为该列的表头(复选框文本)
        },
        {
          id: 2,
          itemName: '回款金额',
          prop2: '回款金额'
        }
      ], 
      typeList: ['excel'], // 选填, 导出方式类别, 默认只有excel, 可选['excel', 'pdf', 'word']

      map: [], // 必填且无需数据, 用于接收导出接口所需参数 
      fileType: '', // 必填且无需数据, 用于接收导出接口所需参数    
    }
  }
}
```

#### 导出接口所需参数

> 直接取 `exportConfig` 中的 `map` 和 `fileType` 即可, 具体方法各异

```js
export default {

  ...

  computed: {
    exportParams: {
      fileType: this.exportConfig.fileType,
      map: this.exportConfig.map,
    }
  }
}
```

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