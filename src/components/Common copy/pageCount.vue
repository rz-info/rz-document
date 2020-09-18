<template>
  <div class="rz-page" v-if="tableData">
    <div class="rz-page-amount">
      共计{{ Math.ceil(tableData.total / tableData.pageSize) }}页 / 实时更新{{
        tableData.total
      }}条数据
    </div>
    <div class="rz-page-count">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page.sync="tableData.page" :page-size="tableData.pageSize" layout="prev, pager, next, jumper"
        :total="tableData.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      tableData: {
        type: Object,
        required: false,
        default: () => [] //表数据
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },

      handleCurrentChange(val) {
        this.$emit("handleCurrentChange", val);
        console.log(`当前页: ${val}`);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .rz-page {
    width: 100%;

    .rz-page-amount {
      text-align: left;
      width: 100%;
      padding: 20px 0;
      margin-bottom: 14px;
      border-bottom: 1px solid rgba(147, 147, 147, 1);
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #333333;
    }

    .rz-page-count {
      text-align: right;
    }
  }
</style>