<template>
    <div>
        <el-button class="btn" v-text="buttonData.value" :style="buttonStyle" :disabled="buttonData.disabled">
        </el-button>
    </div>
</template>

<script>
    export default {
        props: {
            buttonData: {
                type: Object,
                required: true,
                default: () => {
                    return {
                        label: "默认按钮",
                        value: "默认按钮",
                        backgroundColor: "",
                        height: 34,
                        paddingTB: 7,
                        paddingLR: 15,
                        color: "rgb(255, 255, 255)",
                        fontSize: 12,
                        disabled: null,
                        borderColor: "",
                    }
                }
            }

        },
        data() {
            return {
                defaultData: {
                    height: 34,
                    fontSize: 12,
                    paddingTB: 7,
                    paddingLR: 15,
                    borderRadius: 3,

                },
                colorMap: {
                    yellow: "#FFF9D6",
                    pink: "#F7E4EF",
                    grey: "#EAF1FF"
                }
            }
        },
        computed: {
            buttonStyle() {
                return {
                    height: (this.buttonData.height || this.defaultData.height) + "px",
                    padding: (this.buttonData.paddingTB || this.defaultData.paddingTB) + "px  " + (this.buttonData
                        .paddingLR || this.defaultData.paddingLR) + "px",
                    color: this.buttonData.color,
                    backgroundColor: this.buttonData.backgroundColor,
                    borderRadius: this.defaultData.borderRadius + "px",
                    fontSize: (this.buttonData.fontSize || this.defaultData.fontSize) + "px",
                    border: "1px solid " + (this.buttonData.borderColor || this.buttonData.backgroundColor),
                }
            },

        }
    }
</script>
<style lang='scss' scoped>
    .btn {
        padding: 7px 15px;
        font-size: 12px;
        color: rgb(255, 255, 255);
        background: rgb(62, 99, 181);
        border-radius: 3px;
    }
</style>