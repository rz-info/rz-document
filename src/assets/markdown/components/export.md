## 导出

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
        id: 1, // 序号
        itemName: '', // 名称
      ], 
      map: [], // 必填且无需数据, 用于接收导出接口所需参数 
      fileType: '', // 必填且无需数据, 用于接收导出接口所需参数
      
      typeList: ['excel'], // 选填, 导出方式类别, 默认只有excel
    }
  }
}
```

#### 导出接口所需参数
```js
export default {
  computed: {
    exportParams: {
      fileType: this.exportConfig.fileType,
      map: this.exportConfig.map,
    }
  }
}
```