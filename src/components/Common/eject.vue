<template>
  <div class="ejectWrap">
    <el-dialog class="ejectWrap" :show-close="EjectConfig.showClose" close-on-press-escape append-to-body
      close-on-click-modal :visible="EjectConfig.status" :width="EjectConfig.width" :before-close="closeChange">
      <div class="ejectHeader" v-if="!EjectConfig.hideTitle">
        {{ EjectConfig.title }}
      </div>
      <div class="ejectContent">
        <slot name="EjectContent"></slot>
      </div>
      <div class="dialogFooter" v-if="EjectConfig.showTools">
        <div class="fl fl-jc-btn footerBtnWrap">
          <el-button type="danger" class="btnDef" @click="cancelChange">
            {{EjectConfig.leftBtnText ? EjectConfig.leftBtnText : "重置"}}</el-button>
          <el-button type="primary" class="btnDef" @click="confirmChange">
            {{ EjectConfig.rightBtnText ? EjectConfig.rightBtnText : "确认" }}
          </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Eject",
    props: {
      //弹框配置
      EjectConfig: {
        type: Object,
        required: true,
        default: () => {
          return {
            status: false, // 控制弹窗显示状态
            width: '500px', // 弹窗宽度, 单位可为 px 或 % 
            title: '弹窗标题',
            hideTitle: false, // 是否隐藏 title, 默认false
            showTools: false, // 是否显示工具栏, 默认 false
            showClose: true, // 是否显示关闭按钮, 默认 true
            leftBtnText: '重置', // 左侧按钮文本, 默认 重置
            rightBtnText: '确认', // 右侧按钮文本, 默认 确认
          }
        }
      }
    },
    data() {
      return {
        agreementChecked: true
      };
    },
    methods: {
      confirmChange() {
        this.$emit("confirmChange");
      },
      closeChange() {
        this.$emit("closeChange");
        this.EjectConfig.status = false;
      },
      cancelChange() {
        this.$emit("cancelChange", true);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .ejectWrap {
    position: fixed;
    width: 100%;
    top: 0;
    overflow-y: scroll;

    .ejectHeader {
      height: 50px;
      padding: 0 20px;
      background: #3e63b5;
      color: #fff;
      display: flex;
      align-items: center;
    }

    .ejectContent {
      padding: 0 60px;
      line-height: 16px;
      font-size: 14px;
      margin: 20px 0;

      display: flex;
      flex-direction: column;
      justify-content: center;

      .promiseContent {
        margin-top: 28px;
        font-weight: bold;
      }
    }

    .btnDef {
      width: 110px;
      height: 40px;
    }

    .footerBtnWrap {
      display: flex;
      justify-content: space-between;
      width: 350px;
    }

    .dialogFooter {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 88px;
      background: #eaeaea;
    }
  }
</style>
<style>
  .ejectWrap .el-dialog__header,
  .ejectWrap .el-dialog__body {
    padding: 0;
  }

  .el-dialog__close.el-icon.el-icon-close {
    color: #fff;
  }

  .ejectWrap {
    position: relative;
    width: 100%;
    top: 0;
    overflow-y: scroll;
  }
</style>