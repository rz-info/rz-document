
<!--
EjectConfig: Object = {
  status: false, // 显示状态
  width: '80%', // 宽度
  title: '标题',
  hidTitle: false, // 是否隐藏标题
  leftBtnText: '重置', // 左侧按钮文本, 默认重置
  rightBtnText: '确认', // 右侧按钮文本, 默认确认
} 
-->
  
  
  
  <template>
  <div class="ejectWrap">
    <el-dialog class="ejectWrap" :show-close="EjectConfig.showClose" :close-on-press-escape="true"
      :close-on-click-modal="true" :visible.sync="EjectConfig.status" :modal-append-to-body="false" append-to-body
      :before-close="closeChange" :width="EjectConfig.width">
      <div class="ejectHeader fl fl-ai-ctr" v-if="!EjectConfig.hideTitle">
        {{EjectConfig.title}}
      </div>
      <div class="ejectContent fl fl-jc-ctr fl-col ">
        <slot name="EjectContent"></slot>
      </div>
      <div class="fl fl-jc-ctr dialogFooter fl-ai-ctr" v-if="EjectConfig.showTools">
        <div class="fl fl-jc-btn footerBtnWrap">
          <el-button type="danger" class="btnDef" @click="cancelChange">
            {{EjectConfig.leftBtnText?EjectConfig.leftBtnText:'重置'}}</el-button>
          <el-button type="primary" class="btnDef" @click="confirmChange">
            {{EjectConfig.rightBtnText?EjectConfig.rightBtnText:'确认'}}
          </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "vue-property-decorator";

  @Component({
    name: "Eject",
    props: {
      EjectConfig: {
        type: Object,
        required: false,
        default: '' //弹框配置
      },
      isResetForm: {
        type: Boolean,
        required: false,
        default: false //reset 状态
      }
    }
  })
  export default class extends Vue {
    agreementChecked: Boolean = true;
    /**
     * @description: 确定事件
     * @param {type}
     * @return:
     * @author: 李咪
     */

    private confirmChange() {
      this.$emit("confirmChange");
    }
    private closeChange() {
      this.$emit("closeChange");
    }
    private cancelChange() {
      this.$emit("cancelChange", true);
    }

  }

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
      background: #3E63B5;
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
      background: #EAEAEA;
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
