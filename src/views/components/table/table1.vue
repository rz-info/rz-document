<template>
  <zExample title="示例一">
    <commonTable ref="table1" :tableMap="tableMap" :tableData="tableData"
      :tableConfig="tableConfig" @viewDetails="viewDetails" @edit="edit" @selection-change="selectChange" />
    <template v-slot:document>
      <exp1 />
    </template>
  </zExample>
</template>
<script>
  import exp1 from "@/assets/markdown/components/table/exp1.md";
  import commonTable from "@/components/Common/table.vue";

  // 示例2代码
  const mixin2 = {
    data: () => {
      return {
        example2
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
  }
  // 示例2列表配置
  const example2 = {
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


  const tableMap = [ // 用于生成表格的配置

    {
      name: '开票日期',
      prop: 'invoicingDate',
    },
    {
      name: '序号sd',
    },
    {
      name: '开票金额',
      prop: 'invoiceFee',
    },
    {
      name: '发票号码',
      prop: 'invoiceNumber',
    },
    {
      name: '领票人',
      prop: 'ticketHolder',
    },
    {
      name: '备注',
      prop: 'remark',
    },
    {
      name: '查看',
      prop: 'authFileName',
      width: 200, // 宽度, 选填
      template: { // 其他组件写在 templat 里, 选填
        btn: [{
          label: '发票附件', // 按钮文本
          style: 'background:#1DB2A0;border:none',
          event: 'invoiceAttachment' // 按钮事件(需在父级定义同名函数并当做自定义事件传入表格组件)
        }]
      }
    },
    {
      name: '操作',
      prop: 'authFileName',
      width: 200, // 宽度, 选填
      template: { // 其他组件写在 templat 里, 选填
        btn: [{
          label: '编辑', // 按钮文本
          style: 'background:#20335D;border:none',
          event: 'editInvoice' // 按钮事件(需在父级定义同名函数并当做自定义事件传入表格组件)
        }]
      }
    }
  ]

  export default {
    components: {
      exp1,
      commonTable,
    },
    data: () => {
      return {
        tableData: {
          data: [{
              prop1: "No description",
              prop2: "website",
              prop3: "topics",
            },
            {
              prop1: "published",
              prop2: "passive",
              prop3: "Releases",
            },
            {
              prop1: "privade",
              prop2: "这一行将隐藏编辑按钮",
              prop3: "hideBtn",
            }
          ],
          total: 2,
          page: 1,
          pageSize: 2
        },

        tableMap: [{
            name: "单位名称",
            prop: "prop1",
            align: "right"
          },
          {
            name: "回款金额",
            prop: "prop2",
            align: "left"
          },
          {
            name: "回款方式",
            prop: "prop3"
          },
          {
            name: "操作",
            width: 300,
            template: {
              btn: [{
                label: "查看详情",
                style: "background: green;",
                event: "viewDetails"
              }, {
                label: "编辑",
                style: "background: blue;",
                event: "edit",
                disabled(rowData) {
                  return rowData.prop3 == 'hideBtn'
                }
              }]
            }
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
      viewDetails() {
        this.$message.success('点击了查看详情')
      },
      edit() {
        this.$message.success('点击了编辑')
      },
      selectChange(val) {
        console.log(val);
      },
      toggleRowSelection() {
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
      this.toggleRowSelection();
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