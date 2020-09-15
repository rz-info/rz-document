## 使用方法

### 引入

```js
import commonIframe from "@/components/Common/iframe.vue";
```

```html
<commonIframe :src="src" />
```
### props

```js
export default {
  data() {
    return {
      src: '/index', // 路径
    }
  }
}
```

### tips
1. 该组件用于统一嵌入`iframe`时的行为，载入时添加`loading`，统一处理默认域名+端口
2. 本地测试时用自己的地址，提交时使用线上地址
```js
computed: {
  reportUrl() {
    const baseUrl = 'http://localhost:8080'; // 本地地址
    // const baseUrl = process.env.VUE_APP_URL_IP; // 线上地址
    return baseUrl + this.src;
  }
},
```