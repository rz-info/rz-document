## 示例-系统管理-数据维护-检测原材料管理-设置数据报告
当前页面路由为`/rawManagement`
要显示的报告路由为`/dataMaintenance/setDataPage/page`
中间页路由为`/dataMaintenance/setDataPage`（地址栏显示的路径）

### 主页面`/rawManagement`
跳转到中间页, 带着表格文件的路由信息和参数（中间页能够获取到要跳转的数据即可，方法各异）
```js
this.$router.push({
  name: 'setDataPageSingleLogin',
  params: {
    url: `/dataMaintenance/setDataPage/page?sampleId=${e.idZ}`,
  }
})
```

### 中间页`/dataMaintenance/setDataPage`
此处需要拿到目标表格的路径来进行跳转
```html
<commonIframe style="width: 100%;height:800px;" :src="src" />
```
```js
import commonIframe from '@/components/Common/iframe'
export default {
  components: {
    commonIframe
  },
  computed: {
    src() {
      return this.$route.params.url;
    }
  }
}
```

### 目标页面`/dataMaintenance/setDataPage/page`

```js
import {
  singleLogin
} from '@/utils/singleLogin'

export default {
  mounted() {
    singleLogin(this.$route.query.token);
  }
}
```