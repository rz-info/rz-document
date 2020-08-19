<template>
  <div class="wrapper">
    <exampleCom>
      <commonTable
        :tableMap="tableMap"
        :tableData="tableData"
        :tableConfig="tableConfig"
      />
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
        data: [
          {
            authFileName: "234"
          },
          {
            authFileName: "234"
          }
        ],
        total: 2,
        page: 1,
        pageSize: 2
      },

      tableMap: [
        {
          name: "单位名称",
          width: 300,
          prop: "authFileName"
        },
        {
          name: "回款金额",
          prop: "authFileNsame"
        },
        {
          name: "回款方式",
          prop: "authFiledName"
        },
        {
          name: "到账日期",
          prop: "autherFileName"
        },
        {
          name: "收款人",
          prop: "authFileNqame"
        },
        {
          name: "备注",
          width: 300,
          prop: "authFiletqttName"
        }
      ],
      tableConfig: {
        // 其他配置, 选填
        hidePage: false, // 隐藏分页, 默认false
        hideIndex: false // 隐藏序号列, 默认false
      }
    };
  },
  computed: {}
};
</script>
<style lang="scss" scoped></style>
