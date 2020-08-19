<template>
  <div class="tableArea">
    <el-table
      class="operColumStyle"
      :data="tableData.data"
      border
      style="width: 100%;text-align:left"
      :header-cell-style="headerStyle"
      :header-row-style="headerRowStyle"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="!tableConfig.hideIndex"
        type="index"
        align="center"
        label="序号"
        :key="Math.random()"
      />
      <div v-for="(item, index) in tableMap" :key="index">
        <el-table-column
          v-if="item.type == 'selection'"
          type="selection"
          align="center"
        />
        <el-table-column
          v-else
          :prop="item.prop"
          :type="item.type"
          :align="item.align || 'center'"
          :label="item.name"
          :width="item.width"
        >
          <template slot-scope="scope">
            <div v-if="item.template">
              <el-button
                v-for="btn in item.template.btn"
                :key="btn.label"
                :type="btn.type || 'primary'"
                :style="btn.style"
                :size="btn.size || 'mini'"
                @click="emitEvent(btn.event, scope.row)"
                v-text="btn.label"
              />
            </div>
            <div v-else>
              <span>{{ scope.row[item.prop] }}</span>
            </div>
          </template>
        </el-table-column>
      </div>
    </el-table>
    <!-- 分页 -->
    <page-count
      v-if="!tableConfig.hidePage && tableData.total"
      class="pageCount"
      @handleCurrentChange="handleCurrentChange"
      :tableData="tableData"
    />
  </div>
</template>

<script>
import PageCount from "./pageCount.vue";
export default {
  components: {
    PageCount
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
          hideIndex: false // 隐藏序号列
        };
      }
    }
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
      this.$emit("selection-change", data);
    }
  }
};
</script>

<style scoped>
/* .operColumStyle>>>td {
    padding: 0 !important;
  } */

.tableArea {
  width: 100%;
  height: 100%;
}

.operColumStyle >>> .el-table__row td:last-child .cell {
  padding: 0 !important;
}
</style>
