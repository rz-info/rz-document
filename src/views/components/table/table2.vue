<template>
  <zExample title="示例二">
    <h4>使用slot重写按钮</h4>
    <p>需求：在操作列中, 一个按钮在不同状态下显示不同状态</p>
    <commonTable :tableMap="tableMap" :tableData="tableData" @editEject="editEject">
      <template v-slot:btn="{ rowData, template }">
        <el-button v-for="btn in template.btn" :key="btn.label" :type="btn.type || 'primary'"
          :style="rowData.isEdit ? btn.style: {'background':'red'}" :size="btn.size || 'mini'"
          @click="vmSelf[btn.event](rowData)" v-text="getBtnLabel(rowData, btn)" />
      </template>
    </commonTable>
    <template v-slot:document>
      <exp2 />
    </template>
  </zExample>
</template>
<script>
  import exp2 from "@/assets/markdown/components/table/exp2.md";
  import commonTable from "@/components/Common/table.vue";

  export default {
    components: {
      exp2,
      commonTable,
    },
    data: () => {
      return {
        tableData: {
          data: [{
              isEdit: true,
            },
            {
              isEdit: false,
            }
          ],
          total: 2,
          page: 1,
          pageSize: 2
        },

        tableMap: [{
            type: "selection",
          }, {
            name: "是否可编辑",
            prop: "isEdit",
          },
          {
            name: "操作",
            width: 300,
            template: {
              btn: [{
                label: "查看详情",
                style: "background: blue; border: none;",
                event: "editEject"
              }]
            }
          }
        ]
      }
    },
    methods: {
      editEject(data) {
        console.log('is editEject', data.isEdit ? '编辑' : '查看详情')
      },
      getBtnLabel(rowData, btn) {
        return (rowData.isEdit ? '编辑' : '查看详情');
      }
    },
    computed: {
      vmSelf() {
        return this;
      }
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