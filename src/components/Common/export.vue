<template>
  <div class="payables">
    <div class="title">导出内容</div>
    <el-checkbox-group v-model="checked" class="fl fl-wrap">
      <el-checkbox
        style="margin-bottom:10px"
        v-for="(item, i) in exportConfig.tableList"
        :label="item.id"
        :key="i"
      >
        {{ item.itemName }}
      </el-checkbox>
    </el-checkbox-group>
    <div class="title">导出方式</div>
    <div class="fl fl-jc-str fl-ai-ctr">
      <img
        style="width:96px"
        v-for="(item, i) in imgList"
        :key="i"
        :src="getImgUrl(item)"
      />
    </div>
    <el-radio-group v-model="radioVal" class="m-l">
      <el-radio
        class="radio-inp"
        v-for="(item, index) in exportConfig.typeList"
        :key="index"
        :label="index"
      />
    </el-radio-group>
  </div>
</template>

<script>
import { cloneObj } from "@/utils/tools";
export default {
  props: {
    exportConfig: {
      type: Object,
      default: function() {
        return {
          tableList: [], // 必填, 导出内容(表头)
          map: {}, // 必填, 导出接口所需参数
          fileType: "", // 必填, 导出接口所需参数

          typeList: ["excel"] // 选填, 导出方式类别, 默认只有excel
        };
      }
    }
  },
  data() {
    return {
      checked: [], // 选中内容
      radioVal: 0,
      defaultData: {
        typeList: ["excel"]
      }
    };
  },
  watch: {
    checked(now) {
      console.log("change", now);
      this.exportConfig.map = {};
      now.forEach(ele => {
        const nowEl = cloneObj(this.exportConfig.tableList[ele - 1]);
        delete nowEl.id;
        delete nowEl.itemName;
        this.exportConfig.map = {
          ...this.exportConfig.map,
          ...nowEl
        };
      });
    },
    radioVal: {
      // 要监听的数据
      handler(now) {
        // 数据变化时触发的函数
        this.exportConfig.fileType = this.exportConfig.typeList
          ? this.exportConfig.typeList[now]
          : this.defaultData.typeList[now];
      },
      immediate: true // 是否立即以表达式的当前值触发回调
    }
  },
  computed: {
    imgList() {
      return this.exportConfig.typeList.map(ele => {
        if (ele == "excel") {
          return "leadExcel.png";
        }
      });
    }
  },
  methods: {
    // 初始化
    init() {
      this.selectAll();
      this.formatData();
    },

    // 初始化参数
    formatData() {
      for (let prop in this.defaultData) {
        if (this.exportConfig[prop] == undefined) {
          this.exportConfig[prop] = this.defaultData[prop];
        }
      }
    },

    // 获取图片url
    getImgUrl(img) {
      return require("./assets/img/" + img);
    },

    // 选中全部
    selectAll() {
      this.checked = this.exportConfig.tableList.map(ele => ele.id);
    }
  },
  beforeMount() {
    this.init();
  }
};
</script>

<style scoped>
.radio-inp {
  width: 65px;
  color: #fff;
}

.btn {
  height: 40px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  line-height: 36px;
  width: 80px;
  padding: 0px;
}

.exportBtn {
  background-color: #2c61b9;
}

.payables {
  margin-bottom: 40px;
}

.title {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(26, 26, 26, 1);
  line-height: 32px;
}

.m-l {
  margin-left: 40px;
}

.m-l >>> .el-radio__input.is-checked + .el-radio__label {
  color: #fff !important;
}
</style>
