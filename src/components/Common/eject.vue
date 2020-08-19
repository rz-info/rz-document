<template>
  <el-dialog class="rz-eject " :show-close="EjectConfig.showClose" close-on-press-escape append-to-body
    close-on-click-modal :visible="EjectConfig.status" :width="EjectConfig.width" :before-close="closeChange">
    <div class="rz-eject-title" v-if="!EjectConfig.hideTitle">
      {{ EjectConfig.title }}
    </div>
    <div class="rz-eject-content">
      <slot name="EjectContent"></slot>
    </div>
    <div class="rz-eject-footer" v-if="EjectConfig.showTools">
      <div class="fl fl-jc-btn rz-eject-footer-btn-wrap">
        <el-button type="danger" class="rz-eject-footer-btn" @click="cancelChange">
          {{EjectConfig.leftBtnText ? EjectConfig.leftBtnText : "重置"}}</el-button>
        <el-button type="primary" class="rz-eject-footer-btn" @click="confirmChange">
          {{ EjectConfig.rightBtnText ? EjectConfig.rightBtnText : "确认" }}
        </el-button>
      </div>
    </div>
  </el-dialog>
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

<style scoped>
  .rz-eject  {
    position: fixed;
    width: 100%;
    top: 0;
    overflow-y: scroll;
  }

  .rz-eject-title {
    height: 50px;
    padding: 0 20px;
    background: #3e63b5;
    color: #fff;
    display: flex;
    align-items: center;
  }

  .rz-eject-content {
    padding: 0 60px;
    line-height: 16px;
    font-size: 14px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .rz-eject-footer-btn {
    width: 110px;
    height: 40px;
  }

  .rz-eject-footer-btn-wrap {
    display: flex;
    justify-content: space-between;
    width: 350px;
  }

  .rz-eject-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88px;
    background: #eaeaea;
  }

  .rz-eject >>> .el-dialog__header,
  .rz-eject >>> .el-dialog__body {
    padding: 0;
  }

  .rz-eject >>> .el-dialog__close.el-icon.el-icon-close {
    color: #fff;
  }
</style>