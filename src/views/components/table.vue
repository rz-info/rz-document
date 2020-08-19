<template>
  <div class="wrapper">
    <exampleCom title="列表">
      <commonTable :tableMap="tableMap" :tableData="tableData" :tableConfig="tableConfig" @viewDetails="viewDetails"
        @selection-change="selectChange" />
    </exampleCom>
    <testMD />
  </div>
</template>
<script>
  import testMD from "@/assets/markdown/components/table.md";
  import commonTable from "@/components/Common/table.vue";
  import exampleCom from "@/components/documentComponents/example.vue";

  export default {
    components: {
      testMD,
      commonTable,
      exampleCom
    },
    data() {
      return {
        tableData: {
          data: [{
              prop1: "No description",
              prop2: "website",
              prop3: "topics",
              prop4: "provided",
              prop5: "Releases",
              prop6: "published"
            },
            {
              prop1: "published",
              prop2: "passive",
              prop3: "Releases",
              prop4: "topics",
              prop5: "Releases",
              prop6: "error"
            }
          ],
          total: 2,
          page: 1,
          pageSize: 2
        },

        tableMap: [{
            type: "selection"
          },
          {
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
            name: "到账日期",
            prop: "prop4"
          },
          {
            name: "收款人",
            prop: "prop5"
          },
          {
            name: "备注",
            prop: "prop6",
            width: 300
          },
          {
            name: "操作",
            width: 300,
            template: {
              btn: [{
                label: "查看详情",
                style: "background: green",
                event: "viewDetails"
              }]
            }
          }
        ],
        tableConfig: {
          // 其他配置, 选填
          hidePage: false, // 隐藏分页, 默认false
          hideIndex: false // 隐藏序号列, 默认false
        }
      };
    },
    methods: {
      viewDetails() {
        console.log("is details");
      },
      selectChange(val) {
        console.log(val);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    width: calc(100% - 1px);
  }
</style>