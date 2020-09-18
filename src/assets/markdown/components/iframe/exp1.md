## 示例代码

```html
<commonIframe style="height:200px;border:1px solid" :src="src" />
```

```js
export default {
  data() {
    return {
      src: '/index?name=zkb', // 路径
    }
  }
}
```

