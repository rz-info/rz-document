<!--
 * @Author: 张魁堡
 * @Date: 2020-09-16 11:09:25
 * @LastEditTime: 2020-09-18 17:23:06
 * @LastEditors: 张魁堡
 * @Description: 
 * @FilePath: \ruite\src\components\Common\formItem.vue
-->
<template>
  <div>
    <el-row type="flex" class="fl-jc-btn" v-for="(rowData,i) in renderMap" :key="i">
      <el-col :span="colData.span" v-for="(colData,ci) in rowData" :key="ci" style="display: flex">
        <el-form-item :label="colData.label" :prop="colData.model" style="flex:1">

          <el-radio-group v-if="colData.type=='radio'" v-model="formData[colData.model]" :disabled="colData.disabled">
            <el-radio v-for="(radioData,rdi) in colData.template.radioList" :label="radioData.value" :key="rdi">
              {{radioData.label}}</el-radio>
          </el-radio-group>

          <el-date-picker v-else-if="colData.type=='date'" v-model="formData[colData.model]" type="date"
            placeholder="选择日期" style="width:100%" :disabled="colData.disabled" />

          <el-input v-else-if="colData.type=='textarea'" type="textarea" :autosize="{ minRows: 3 }"
            v-model="formData[colData.model]" :disabled="colData.disabled"></el-input>

          <div v-else-if="colData.type=='text'" :style="colData.template.style">{{colData.template.text}}</div>

          <el-select v-else-if="colData.type=='select'" v-model="formData[colData.model]" placeholder="请选择"
            style="width:100%">
            <el-option v-for="(item,opi) in colData.template.optionList" :key="opi" :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <el-input v-else v-model="formData[colData.model]" :disabled="colData.disabled"></el-input>
        </el-form-item>
        <template v-if="colData.brother">
          <el-form-item v-for="(colBro,coi) in colData.brother" :key="coi" :prop="colBro.model" label-width="0px"
            style="margin-left:20px;width:100px;">
            <relationInput v-if="colBro.compName == 'relationInput'" class="form-item" :list="colBro.list"
              :inputModel.sync="formData[colBro.model]" />
            <cascaderInput v-else-if="colBro.compName == 'cascaderInput'" class="form-item" :list="colBro.list"
              :inputModel.sync="formData[colBro.model]" />
          </el-form-item>
        </template>

      </el-col>
    </el-row>
  </div>

</template>
<script>
  import cascaderInput from '@/components/Common/compositeComponents/cascaderInput'
  import relationInput from '@/components/Common/compositeComponents/relationInput'

  import {
    cloneObj
  } from "@/utils/tools"
  export default {
    components: {
      cascaderInput,
      relationInput
    },
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
