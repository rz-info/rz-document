<template>
    <div>
        <h1>按钮</h1>
        <h2>示例</h2>
        <Button :buttonData="buttonData"></Button>
        <br>
        <Button :buttonData="buttonData2"></Button> <br>
        <Button :buttonData="buttonData3"></Button> <br>
        <Button :buttonData="buttonData4"></Button><br>
        <Button :buttonData="buttonData5"></Button>
        <buttonMd />
    </div>
</template>

<script>
    import Button from "@/components/Common/button.vue";
    import buttonMd from "@/assets/markdown/components/button.md";
    export default {
        components: {
            Button,
            buttonMd,
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