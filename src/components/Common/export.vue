<template>
  <div class="rz-export">
    <div class="rz-title">导出内容</div>
    <el-checkbox-group v-model="checked">
      <el-checkbox style="margin-bottom:10px" v-for="(item, i) in exportConfig.tableList" :label="item.id" :key="i">
        {{ item.itemName }}
      </el-checkbox>
    </el-checkbox-group>
    <div class="rz-title">导出方式</div>
    <div>
      <img style="width:96px" v-for="(item, i) in imgList" :key="i" :src="getImgUrl(item)" />
    </div>
    <el-radio-group v-model="radioVal" class="rz-radio-group">
      <el-radio class="rz-radio-inp" v-for="(item, index) in exportConfig.typeList" :key="index" :label="index" />
    </el-radio-group>
  </div>
</template>

<script>
  import {
    cloneObj
  } from "@/utils/tools";
  export default {
    props: {
      exportConfig: {
        type: Object,
        default: function () {
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
        console.log('select',now)
        this.exportConfig.map = {};
        now.forEach((ele,index) => {
          console.log('s1',index)
          const nowEl = cloneObj(this.exportConfig.tableList[index]);
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
          this.exportConfig.fileType = this.exportConfig.typeList ?
            this.exportConfig.typeList[now] :
            this.defaultData.typeList[now];
        },
        immediate: true // 是否立即以表达式的当前值触发回调
      }
    },
    computed: {
      imgList() {
        return this.exportConfig.typeList.map(ele => {
          switch (ele) {
            case "excel":
              return "leadExcel.png";
            case "pdf":
              return "leadPdf.png";
            case "word":
              return "leadWord.png";
            default:
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
    },
    mounted() {
      console.log(1919,this.exportConfig)
    }
  };
</script>

<style scoped>
  .rz-radio-inp {
    width: 65px;
    color: #fff;
  }

  .rz-export {
    margin-bottom: 40px;
  }

  .rz-title {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(26, 26, 26, 1);
    line-height: 32px;
  }

  .rz-radio-group {
    margin-left: 40px;
  }

  .rz-radio-group>>>.el-radio__input.is-checked+.el-radio__label {
    color: #fff !important;
  }
</style>