<template>
  <zTitle class="wrapper" level="1" text="按钮">
    <zExample title="">
      <Button :buttonData="buttonData"></Button><br>
      <Button :buttonData="buttonData2"></Button> <br>
      <Button :buttonData="buttonData3"></Button> <br>
      <Button :buttonData="buttonData4"></Button><br>
      <Button :buttonData="buttonData5"></Button>
      <template v-slot:document>
        <exp1 />
      </template>
    </zExample>
    <buttonMd />

  </zTitle>

</template>

<script>
  import buttonMd from "@/assets/markdown/components/button/index.md";
  import exp1 from "@/assets/markdown/components/button/exp1.md";
  import Button from "@/components/Common/button.vue";
  export default {
    components: {
      Button,
      buttonMd,
      exp1,
    },
    data() {
      return {
        buttonData: {
          value: "默认按钮",
          backgroundColor: "",

        },
        buttonData2: {
          value: "查看详情",
          backgroundColor: "rgb(29, 178, 160)",

        },
        buttonData3: {
          value: "外派单",
          backgroundColor: "#8cc8ff",
          color: "#FFFFFF",
          disabled: true,
        },
        buttonData4: {
          value: "去确认",
          backgroundColor: "rgb(232, 96, 96)",
        },
        buttonData5: {
          value: "去确认按钮牛",
          backgroundColor: "#fef0f0",
          borderColor: "#fbc4c4",
          color: "#f56c6c"
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
</style>