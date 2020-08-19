<template>
  <div class="wrapper">
    <exampleCom title="标签">
      <h3>单个标签</h3>
      <commonTag style="justify-content:start" :tagData="tagData" />

      <h3>多个标签</h3>
      <div class="tag-wrapper">
        <commonTag v-for="item in tagList" :key="item.label" :tagData="item" />
      </div>
    </exampleCom>
    <testMD />
  </div>
</template>
<script>
import exampleCom from "@/components/documentComponents/example.vue";
import testMD from "@/assets/markdown/components/tag.md";
import commonTag from "@/components/Common/tag.vue";

export default {
  components: {
    testMD,
    commonTag,
    exampleCom
  },
  data() {
    return {
      tagData: {
        label: "标签1",
        value: "属性值1"
      },
      tagList: [
        {
          label: "标签2", // 左侧文本
          value: "属性值2" // 右侧文本
        },
        {
          label: "标签3",
          value: "属性值3"
        },
        {
          label: "标签4",
          value: "属性值4",
          width: [100, 200], // 左右两侧文本块的宽度
          height: 50, // 文本块高度
          padding: 100 // 左右文本块之间间距
        },
        {
          label: "标签5",
          value: "属性值5",
          backgroundColor: "pink" // 可填颜色值(#333 || rgb || rgba) 或 内置关键字(yellow,pink,grey)
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: calc(100% - 1px);
}

.tag-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > * {
    margin-bottom: 4px;
  }
}
</style>
