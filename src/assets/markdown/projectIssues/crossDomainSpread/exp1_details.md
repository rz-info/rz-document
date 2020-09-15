## 示例-委托管理-报告编制-检验报告第二页
当前页面路由为`/municipalAdministration/reportCompilation/:id`
要显示的报告路由为`/print/report/index`

### 主页面`/municipalAdministration/reportCompilation/:id`
```html
<commonIframe style="height:800px;" :src="reportUrl" />
```

```js
// 引入commonIframe
const commonIframe = resolve => require(['@/components/Common/iframe.vue'], resolve);
// or
import commonIframe from '@/components/Common/iframe.vue';

export default {
  computed: {
    reportUrl() {
      let report = '';
      if (this.isFree) {
        report = 'Report-municipal-free-report';
      } else {
        report = 'Report-municipal-report'
      }
      // 报告路径+参数, 组件会自动添加token
      return `/print/report/index?entrustNumber=${this.entrustNumber}&isFree=${this.isFree}&report=${report}`
    }
  }
}
```

### 目标页面`/print/report/index`

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