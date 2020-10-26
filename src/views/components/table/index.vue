<template>
  <zTitle class="wrapper" level="1" text="列表">
    <a href="https://testmv.demoing.com/ExpCourse/image/2018/10/09/1539071754579183075997.pdf" download="filename" >xxxxxx</a>
    <table1 />
    <table2 />
    <table3 />
    <table4 />
    <table5 />
    <testMD />
  </zTitle>
</template>
<script>
  import testMD from "@/assets/markdown/components/table/index.md";
  import table1 from "./table1";
  import table2 from "./table2";
  import table3 from "./table3";
  import table4 from "./table4";
  import table5 from "./table5";
  import commonTable from "@/components/Common/table.vue";
  export default {
    components: {
      testMD,
      commonTable,
      table1,
      table2,
      table3,
      table4,
      table5,
    },
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