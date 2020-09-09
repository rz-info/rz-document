<!--
 * @Author: 张魁堡
 * @Date: 2020-08-28 08:53:11
 * @LastEditTime: 2020-08-28 09:04:19
 * @LastEditors: Please set LastEditors
 * @Version: 
 * @Description: 
 * @FilePath: \ruite\src\components\Common\upload.vue
-->
<template>
  <div class="rz-upload">
    <div class="rz-upload-add-wrap">
      <div class="rz-upload-add-btn">+</div>
      <div class="rz-upload-add-text">上传文件</div>
      <div class="rz-upload-add-tips">{{config.tips}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      config: {
        default: () => {}
      }
    }
  }

</script>
<style lang='scss' scoped>
  .rz-upload {

    .rz-upload-add-wrap {
      height: 196px;
      width: 260px;
      position: relative;
      background: #fff;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 6px;
        bottom: 6px;
        left: 6px;
        right: 6px;
        border: 1px dashed #9A9A9A;
      }

      .rz-upload-add-btn {
        background: #3E64B6;
        color: #fff;
        border-radius: 50%;
        height: 32px;
        width: 32px;
        line-height: 30px;
        text-align: center;
      }

      .rz-upload-add-text {
        margin-top: 20px;
        margin-bottom: 13px;
      }

      .rz-upload-add-tips {
        font-size: 12px;
        color: rgba(102, 102, 102, 1);
      }
    }
  }

</style>
