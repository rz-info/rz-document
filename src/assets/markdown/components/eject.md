## 示例代码

```html
<el-button type="primary" @click="openEject(1)">打开弹窗</el-button>

<Eject :EjectConfig="openEConf" @closeChange="closeChange(1)" @cancelChange="openECancel(1)" @confirmChange="openEConfirm(1)">
  <slot slot="EjectContent">
    <el-button type="primary" @click="openEject(2)">嵌套弹窗</el-button>
  </slot>
</Eject>
<Eject :EjectConfig="openEConf2" @closeChange="closeChange(2)" @cancelChange="openECancel(2)" @confirmChange="openEConfirm(2)">
  <slot slot="EjectContent">
    <el-button type="primary" @click="openMsg()">确认框</el-button>
  </slot>
</Eject>
```

```js
export default {
  components: {
    testMD,
    Eject,
    exampleCom
  },
  data() {
    return {
      openEConf: { //顶部按钮弹框
        EjectStatus: false,
        EjectWidth: '600px',
        EjectTit: '一级弹窗',
        ToolShow: true,
        leftBtnText: '取消',
      },
      openEConf2: { //顶部按钮弹框
        EjectStatus: false,
        EjectWidth: '400px',
        EjectTit: '二级弹窗',
        ToolShow: true,
        rightBtnText: '关闭弹窗'
      }
    }
  },
  methods: {
    openEject(type) {
      console.log('打开弹窗', type);
      if (type == 1) {
        this.openEConf.EjectStatus = true;
      } else {
        this.openEConf2.EjectStatus = true;
      }
    },
    openECancel(type) {
      console.log('点击左侧按钮', type);
      if (type == 1) {
        this.openEConf.EjectStatus = false;

      } else {
        this.openEConf2.EjectStatus = false;
      }
    },
    openEConfirm(type) {
      console.log('点击右侧按钮', type);
      if (type == 1) {
        this.openEConf.EjectStatus = false;
      } else {
        this.openEConf2.EjectStatus = false;
      }
    },
    closeChange(type) {
      console.log('点击遮罩或关闭按钮时触发');
    },
    openMsg() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
      });
    }
  }
};
```

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

