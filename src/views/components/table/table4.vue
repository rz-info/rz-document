<template>
  <zExample title="示例四">
    <h4>使用slot自定义列表内容2</h4>
    <el-row style="margin-top:30px" class="table_his">
      <commonTable :tableMap="tableMap" :tableData="tableData"
        :tableConfig="tableConfig">
        <template v-slot:btn="{ rowData, template, scope }">
          <template v-for="(item,key) in template">
            <div v-if="key == 'img'" :key="key">
              <span>{{scope.$index+1}}&emsp;</span>
              <img style="margin-left:20px;" v-if="rowData.modifyNumber" src="@/views/classes/icon/sanjiao.png"
                @click.stop="selectEditHistorical(scope.$index,rowData)" alt="">
              <div class="historyInvoice" v-show="showKey[scope.$index]">
                <div v-for="item in LedgerHistory" :key="item.id">
                  <div class="list">
                    <span class="date">{{item.updatedAt}}</span>
                    <p class="text">{{item.modifyContent}}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </commonTable>
    </el-row>
    <template v-slot:document>
      <!-- 放md文件 -->
      <exp4 />
    </template>
  </zExample>
</template>
<script>
  import exp4 from "@/assets/markdown/components/table/exp4.md";
  import commonTable from "@/components/Common/table.vue";
  export default {
    components: {
      exp4,
      commonTable,
    },
    data: () => {
      return {
        showKey: {}, //标记当前点击的列表
        LedgerHistory: [],
        tableData: {
          data: [{
              modifyNumber: null,
              content: "内容",
              remark: "备注",
              id: "1",
              status: "aa"
            },
            {
              modifyNumber: 2,
              content: "内容",
              remark: "备注",
              id: "2",
              status: "bb"
            }
          ],
          total: 2,
          page: 1,
          pageSize: 2
        },
        tableConfig: { // 其他配置, 选填
          hideIndex: true // 隐藏序号列, 默认false
        },
        tableMap: [{
            name: '序号',
            prop: "index",
            width: 80, // 宽度, 选填
            template: {
              div: {
                event: 'click'
              },
              img: {
                event: 'click'
              }
            }
          },
          {
            name: '内容',
            prop: 'content',
          },
          {
            name: '备注',
            prop: 'remark',
          },
          {
            name: '查看',
            prop: 'authFileName',
            width: 200, // 宽度, 选填
            template: { // 其他组件写在 templat 里, 选填
              btn: [{
                label: '附件', // 按钮文本
                style: 'background:#1DB2A0;border:none',
                event: 'invoiceAttachment' // 按钮事件(需在父级定义同名函数并当做自定义事件传入表格组件)
              }]
            }
          }
        ],
      }
    },
    methods: {
      selectEditHistorical(key, data) {
        this.hideTips();
        this.$nextTick(() => {
          this.$set(this.showKey, key, true)
          // 这里可以请求接口获取参数
          // 					 let dto = {
          // 						id:data.id,
          // 						status:data.status
          // 					 }
          // 					 findPayLedgerHistory(dto).then(res => {
          // 						this.LedgerHistory = res.data;
          // 					 })
          this.LedgerHistory = [{
            updatedAt: "000000",
            modifyContent: "内容999999999999"
          }, {
            updatedAt: "000000",
            modifyContent: "内容999999999999"
          }]
        });

      },
      hideTips() {
        for (let i in this.showKey) {
          this.showKey[i] = false;
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.hideTips);
    },
    destroy() {
      document.removeEventListener('click', this.hideTips);
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