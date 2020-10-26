<template>
  <div class="rz-table">
    <el-table ref="rzTable" class="rz-table-content" :data="tableData.data" border style="width: 100%;text-align:left"
      :header-cell-style="headerStyle" @selection-change="handleSelectionChange">
      <el-table-column v-if="tableConfig.showCheckBox" type="selection" align="center" :key="Math.random()" />
      <el-table-column width="50" v-if="!tableConfig.hideIndex" type="index" align="center" label="序号"
        :key="Math.random()" />
      <template v-for="(item,index) in tableMap">
        <el-table-column v-if="item.type == 'selection'" type="selection" align="center" :key="index" />
        <el-table-column v-else :prop="item.prop" :type="item.type" :align="item.align || 'center'" :label="item.name"
          :width="item.width" :key="index">
          <template slot-scope="scope">
            <div v-if="item.template">
              <slot name="btn" :rowData="scope.row" :template="item.template" :scope="scope">
                <el-button class="rz-table-btn" v-for="btn in item.template.btn" :key="btn.label"
                  :type="btn.type || 'primary'" :style="btn.style" :size="btn.size || 'mini'"
                  @click="emitEvent(btn.event, scope.row)" :disabled="disabledBtn(btn,scope.row)" v-text="btn.label" />
              </slot>
            </div>
            <div v-else>
              <span :title="scope.row[item.title]">{{ scope.row[item.prop] }}</span>
            </div>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <page-count v-if="!tableConfig.hidePage && tableData.total" class="pageCount"
      @handleCurrentChange="handleCurrentChange" :tableData="tableData" />
  </div>
</template>

<script>
  import PageCount from "./pageCount.vue";
  export default {
    components: {
      PageCount
    },
    data() {
      return {
        selectDataForPage: {}
      }
    },
    props: {
      tableMap: {
        type: Array,
        default: () => []
      },
      tableData: {
        type: Object,
        default: () => {}
      },
      tableConfig: {
        type: Object,
        required: false,
        default: () => {
          return {
            hidePage: false, // 隐藏分页
            hideIndex: false, // 隐藏序号列
            showCheckBox: false // 第一列显示复选框
          };
        }
      },
    },
    methods: {
      emitEvent(event, data) {
        this.$emit(event, data);
      },
      //修改table中表头颜色
      headerStyle() {
        return "background:rgba(140,140,140,0.1);color: #000000FF;text-align: center";
      },
      //修改table表头的高度
      headerRowStyle() {
        return "height:32px";
      },

      //分页
      handleCurrentChange(val) {
        this.$emit("handleCurrentChange", val);
      },

      // 复选框
      handleSelectionChange(data) {
        this.selectDataForPage[this.tableData.page] = data;
        this.$emit("selection-change", data, this.selectDataForPage);
      },
      // 隐藏按钮
      disabledBtn(btn, data) {
        if (typeof btn.disabled == 'function') {
          return btn.disabled(data);
        } else {
          return false;
        }
      }
    },
    updated() {
      this.$refs.rzTable.doLayout();
    }
  };
</script>

<style scoped>
  .rz-table {
    width: 100%;
    height: 100%;
  }

  .rz-table-content>>>.el-table__row td:last-child .cell {
    padding: 0 !important;
  }

  .el-table .cell {
    height: 32px !important;
  }

  .rz-table-btn {
    border: none;
  }

  .rz-table-btn[disabled] {
    opacity: .4;
  }
</style>