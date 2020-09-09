## 使用方法

### 引入

```js
import Eject from "@/components/Common/eject.vue";
```

```html
<Eject :EjectConfig="EConfig" @closeChange="closeChange" @cancelChange="cancelChange"@confirmChange="confirmChange">
  <slot slot="EjectContent">
    弹窗内容
  </slot>
</Eject>
```
### props

```js
export default {
  data() {
    return {
      EConfig: {
        EjectStatus: false, // 控制弹窗显示状态
        EjectWidth: '500px', // 弹窗宽度, 单位可为 px 或 % 
        EjectTit: '弹窗标题',
        EjectTitHide: false, // 是否隐藏 title, 默认false
        ToolShow: false, // 是否显示工具栏, 默认 false
        showClose: true, // 是否显示关闭按钮, 默认 true
        leftBtnText: '重置', // 左侧按钮文本, 默认 重置
        rightBtnText: '确认', // 右侧按钮文本, 默认 确认
      }
    }
}
```

### 事件

`Eject` 组件接收三个自定义事件

```js
export default {

  ...

  methods: {
    // 右侧按钮点击事件
    confirmChange() {
      this.$emit("confirmChange");
    },

    // 点击遮罩或关闭按钮事件(默认关闭弹窗)
    closeChange() {
      this.$emit("closeChange");
      this.EjectConfig.status = false;
    },

    // 左侧按钮点击事件
    cancelChange() {
      this.$emit("cancelChange", true);
    }
  }
}
```

