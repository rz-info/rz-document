<!--
 * @Author: 张魁堡
 * @Date: 2020-09-16 11:09:25
 * @LastEditTime: 2020-09-16 14:32:37
 * @LastEditors: 张魁堡
 * @Description: 
 * @FilePath: \ruite\src\components\Common\formItem.vue
-->
<template>
  <div>
    <el-row type="flex" class="fl-jc-btn" v-for="rowData in renderMap" :key="rowData">
      <el-col :span="colData.span" v-for="colData in rowData" :key="colData">
        <el-form-item :label="colData.label" :prop="colData.model">
          <el-radio-group v-if="colData.type=='radio'" v-model="formData[colData.model]" :disabled="colData.disabled">
            <el-radio v-for="radioData in colData.template.radioList" :label="radioData.value" 
              :key="radioData.value">{{radioData.label}}</el-radio>
          </el-radio-group>

          <el-date-picker v-else-if="colData.type=='data'" v-model="formData[colData.model]" type="date"
            placeholder="选择日期" style="width:100%"  :disabled="colData.disabled"/>

          <el-input v-else-if="colData.type=='textarea'" type="textarea" :autosize="{ minRows: 3 }" v-model="formData[colData.model]" :disabled="colData.disabled"></el-input>

          <div v-else-if="colData.type=='text'" :style="colData.template.style">{{colData.template.text}}</div>

          <el-input v-else v-model="formData[colData.model]" :disabled="colData.disabled"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </div>

</template>
<script>
  import {
    cloneObj
  } from "@/utils/tools"
  export default {
    props: {
      config: {
        type: Object
      },
      map: {
        required: true,
        type: Array
      },
      formData: {
        required: true,
        type: Object
      }
    },
    data() {
      return {
        lastRowIndex: '',
      }
    },
    computed: {
      renderMap() {
        let originMap = cloneObj(this.map);
        originMap.forEach(row => {
          // 处理col span, 没有设置span的col平分剩余的空间
          let surplusRowSpan = 24;
          let noSpan = [];
          row.forEach((col, i) => {
            col.span ? surplusRowSpan -= col.span : noSpan.push(i);
          })
          noSpan.forEach(i => {
            let col = row[i];
            col.span = surplusRowSpan / noSpan.length;
          })
        });
        return originMap;
      }
    }
  }

</script>
<style lang='scss' scoped>
</style>
