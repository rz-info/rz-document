<template>
  <zExample title="示例三">
    <h4>使用slot自定义列表内容</h4>
    <commonTable :tableMap="tableMap" :tableData="tableData">
      <template v-slot:btn="{ template, scope }">
        <template v-for="(item,key) in template">
          <el-input :key="key" v-if="key == 'input'" v-model="input[scope.$index]" placeholder="请输入内容">
          </el-input>
          <el-select :key="key" v-if="key == 'select'" v-model="value[scope.$index]" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </template>
      </template>
    </commonTable>
    <template v-slot:document>
      <exp3 />
    </template>
  </zExample>
</template>
<script>
  import exp3 from "@/assets/markdown/components/table/exp3.md";
  import commonTable from "@/components/Common/table.vue";

  export default {
    components: {
      exp3,
      commonTable,
    },
    data: () => {
      return {
        tableData: {
          data: [{
              comp: 'select'
            },
            {
              comp: 'input'
            }
          ],
          total: 2,
          page: 1,
          pageSize: 2
        },

        tableMap: [{
            name: "其他组件",
            prop: "comp",
            // 设置template后意味着要渲染组件, prop属性失效
            template: {
              input: {
                event: 'change'
              }
            }
          },
          {
            name: "其他组件",
            template: {
              select: {
                event: 'change'
              }
            }
          }
        ],
        input: {},
        value: {},
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
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