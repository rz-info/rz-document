## 使用方法

### 引入

```js
import commonTag from "@/components/Common/tag.vue";
```

```html
<commonTag :tagData="tagData" />
```
### props

```js
export default {
  data() {
    // 单个标签
    tagData: {
      label: '标签1', // 左侧文本
      value: '属性值1' // 右侧文本
    },

    // 多个标签
    tagList: [{
      label: '标签2', // 左侧文本
      value: '属性值2', // 右侧文本
    },{
      label: '标签3',
      value: '属性值3'
    },{
      label: '标签4',
      value: '属性值4',
      width: [100,200], // 左右两侧文本块的宽度
      height: 50, // 文本块高度
      padding: 100, // 左右文本块之间间距
    },{
      label: '标签5',
      value: '属性值5',
      backgroundColor: 'pink', // 可填颜色值(#333 || rgb || rgba) 或 内置关键字(yellow,pink,grey)
    }]
  }
}
```
