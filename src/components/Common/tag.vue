<template>
  <div class="rz-tag" :style="tagStyle">
    <div
      class="rz-tag-label textOF"
      v-text="tagData.label"
      :style="tagLabelStyle"
    ></div>
    <div
      class="rz-tag-value textOF"
      v-text="tagData.value"
      :style="tagValueStyle"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    tagData: {
      type: Object,
      required: true,
      default: () => {
        return {
          label: "",
          value: "",
          backgroundColor: "",
          width: [],
          height: 34,
          padding: 4
        };
      }
    }
  },
  data() {
    return {
      defaultData: {
        height: 34,
        width: [142, 530],
        padding: 4
      },
      colorMap: {
        yellow: "#FFF9D6",
        pink: "#F7E4EF",
        grey: "#EAF1FF"
      }
    };
  },
  computed: {
    tagStyle() {
      return {
        height: (this.tagData.height || this.defaultData.height) + "px",
        lineHeight: (this.tagData.height || this.defaultData.height) + "px"
      };
    },
    tagLabelStyle() {
      return {
        width:
          (this.tagData.width
            ? this.tagData.width[0]
            : this.defaultData.width[0]) + "px",
        marginRight:
          (this.tagData.padding == undefined
            ? this.defaultData.padding
            : this.tagData.padding) + "px"
      };
    },
    tagValueStyle() {
      return {
        width:
          (this.tagData.width
            ? this.tagData.width[1]
            : this.defaultData.width[1]) + "px",
        backgroundColor: this.tagData.backgroundColor
          ? this.tagData.backgroundColor.indexOf("#") > -1 ||
            this.tagData.backgroundColor.indexOf("rgb") > -1
            ? this.tagData.backgroundColor
            : this.colorMap[this.tagData.backgroundColor]
          : this.colorMap["yellow"]
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.rz-tag {
  text-align: center;
  display: flex;
  justify-content: center;

  .rz-tag-label {
    padding: 0 5px;
    background-color: #f5f5f5;
    // height: 100%;
  }

  .rz-tag-value {
    // height: 100%;
    padding: 0 5px;
  }
}
</style>
