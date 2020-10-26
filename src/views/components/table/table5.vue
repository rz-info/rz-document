<template>
  <zExample title="示例五">
    <h4>默认选中元素与分页缓存</h4>
    <commonTable ref="table1" :tableMap="tableMap" :tableData="tableData" :tableConfig="tableConfig"
      @selection-change="selectChange" @handleCurrentChange="handleCurrentChange" />
    <template v-slot:document>
      <exp1 />
    </template>
  </zExample>
</template>
<script>
  import exp1 from "@/assets/markdown/components/table/exp1.md";
  import commonTable from "@/components/Common/table.vue";

  let serviceData = [];

  // 模拟请求接口
  function getTableData(dto) {
    return new Promise(res => {
      res({
        code: 10000,
        data: {
          page: dto.page,
          pageSize: dto.pageSize,
          total: 134,
          data: (function () {
            if (serviceData[dto.page]) {
              return serviceData[dto.page];
            } else {
              let length = dto.pageSize;
              let arr = [];
              while (length-- > 0) {
                let num = (dto.page - 1) * dto.pageSize + arr.length + 1;

                arr.push({
                  id: parseInt(Math.random() * 10000) + num,
                  sort: `第${num}条数据`,
                  other: '凑数',
                })
              }
              serviceData[dto.page] = arr;
              return arr;
            }

          }())
        },
        msg: 'success'
      })
    })
  }

  export default {
    components: {
      exp1,
      commonTable,
    },
    data: () => {
      return {
        tableData: {
          data: [],
          total: 1,
          page: 1,
          pageSize: 10
        },

        tableMap: [{
            name: "id",
            prop: "id",
          },
          {
            name: "在所有数据中的排序",
            prop: "sort",
          },
          {
            name: "其他数据",
            prop: "other"
          }
        ],
        tableConfig: {
          // 其他配置, 选填
          hidePage: false, // 隐藏分页, 默认false
          hideIndex: false, // 隐藏序号列, 默认false
          showCheckBox: true // 第一列显示复选框, 默认false
        }
      }
    },
    methods: {
      getData() { // 获取表格数据
        getTableData(this.tableData).then(res => {
          this.tableData = res.data;
          this.toggleRowSelection();
          console.log('接口数据', res);
        })
      },
      handleCurrentChange(e) {
        this.tableData.page = e;
        this.getData();
      },
      selectChange(val, selectDataForPage) {
        console.log(val,selectDataForPage);
      },
      toggleRowSelection() { // 默认选中表格数据
        return;
        let data = this.tableData.data;
        let zTable = this.$refs.table1.$refs.rzTable;
        data.forEach((ele, index) => {
          if (index > 0) {
            zTable.toggleRowSelection(ele, true);
          }
        })
      }
    },
    mounted() {
      this.getData();
    }
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    width: calc(100% - 1px);
  }

  .historyInvoice {
    position: absolute;
    left: 75px;
    background: #EAF1FF;
    width: 500px;
    z-index: 9999;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    padding: 20px;
  }

  .historyInvoice .list {
    text-align: left;
    margin-bottom: 20px;
  }

  .historyInvoice .date {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #666666;
    line-height: 10px;
  }

  .historyInvoice .text {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #1A1A1A;
    line-height: 10px;
  }
</style>
<style lang="css" scoped>
  .table_his>>>.el-table__body-wrapper {
    overflow: visible;
  }

  .table_his>>>.el-table {
    overflow: visible;
  }
</style>