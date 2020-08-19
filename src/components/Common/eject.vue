<template>
  <div class="ejectWrap">
    <el-dialog
      class="ejectWrap"
      :show-close="EjectConfig.showClose"
      :close-on-press-escape="true"
      :close-on-click-modal="true"
      :visible.sync="EjectConfig.status"
      :modal-append-to-body="false"
      append-to-body
      :before-close="closeChange"
      :width="EjectConfig.width"
    >
      <div class="ejectHeader fl fl-ai-ctr" v-if="!EjectConfig.hideTitle">
        {{ EjectConfig.title }}
      </div>
      <div class="ejectContent fl fl-jc-ctr fl-col ">
        <slot name="EjectContent"></slot>
      </div>
      <div
        class="fl fl-jc-ctr dialogFooter fl-ai-ctr"
        v-if="EjectConfig.showTools"
      >
        <div class="fl fl-jc-btn footerBtnWrap">
          <el-button type="danger" class="btnDef" @click="cancelChange">
            {{
              EjectConfig.leftBtnText ? EjectConfig.leftBtnText : "重置"
            }}</el-button
          >
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
    EjectConfig: {
      type: Object,
      required: false,
      default: () => {} //弹框配置
    },
    isResetForm: {
      type: Boolean,
      required: false,
      default: false //reset 状态
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
    width: 100%;
    height: 50px;
    padding: 0 20px;
    background: #3e63b5;
    color: #fff;
  }

  .ejectContent {
    padding: 0 60px;
    line-height: 16px;
    font-size: 14px;
    margin: 20px 0;

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
    width: 350px;
  }

  .dialogFooter {
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
