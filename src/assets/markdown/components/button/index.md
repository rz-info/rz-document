## 使用方法

### 引入

```js
import Button from "@/components/Common/button.vue";
```

```html
<Button :buttonData="buttonData"></Button>
```
### props

```js
export default {
  data() {
     buttonData: {
        value: "默认按钮",
        backgroundColor: "",
     },
  }
}
```
