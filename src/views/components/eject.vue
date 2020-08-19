<template>
  <div class="wrapper">
    <exampleCom title="弹窗">
      <el-button type="primary" @click="openEject(1)">打开弹窗</el-button>
    </exampleCom>
    <testMD />

    <Eject :EjectConfig="openEConf" @closeChange="closeChange(1)" @cancelChange="openECancel(1)"
      @confirmChange="openEConfirm(1)">
      <slot slot="EjectContent">
        <el-button type="primary" @click="openEject(2)">嵌套弹窗</el-button>
      </slot>
    </Eject>
    <Eject :EjectConfig="openEConf2" @closeChange="closeChange(2)" @cancelChange="openECancel(2)"
      @confirmChange="openEConfirm(2)">
      <slot slot="EjectContent">
        <el-button type="primary" @click="openMsg()">确认框</el-button>
      </slot>
    </Eject>
  </div>
</template>
<script>
  import exampleCom from "@/components/documentComponents/example.vue";
  import testMD from "@/assets/markdown/components/eject.md";
  import Eject from "@/components/Common/eject.vue";

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
</script>
<style lang="scss" scoped>
  .wrapper {
    width: calc(100% - 1px);
  }
</style>