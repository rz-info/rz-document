<template>
  <zTitle class="wrapper" level="1" text="列表">
    <exampleCom title="示例一">
      <commonTable :tableMap="example1.tableMap" :tableData="example1.tableData" :tableConfig="example1.tableConfig"
        @viewDetails="viewDetails" @edit="edit" @selection-change="selectChange" />
      <template v-slot:document>
        <exp1 />
      </template>
    </exampleCom>
    <exampleCom title="示例二">
      <h4>使用slot重写按钮</h4>
      <p>需求：在操作列中, 一个按钮在不同状态下显示不同状态</p>
      <commonTable :tableMap="example2.tableMap" :tableData="example2.tableData" @editEject="editEject">
        <template v-slot:btn="{ rowData, template }">
          <el-button v-for="btn in template.btn" :key="btn.label" :type="btn.type || 'primary'"
            :style="rowData.isEdit ? btn.style: {'background':'red'}" :size="btn.size || 'mini'"
            @click="vmSelf[btn.event](rowData)" v-text="getBtnLabel(rowData, btn)" />
        </template>
      </commonTable>
      <template v-slot:document>
        <exp2 />
      </template>
    </exampleCom>
    <exampleCom title="示例三">
      <h4>使用slot自定义列表内容</h4>
      <commonTable :tableMap="example3.tableMap" :tableData="example3.tableData" @editEject="editEject">
        <template v-slot:btn="{ template, scope }">
          <template v-for="(item,key) in template">
            <el-input :key="key" v-if="key == 'input'" v-model="example3.input[scope.$index]" placeholder="请输入内容">
            </el-input>
            <el-select :key="key" v-if="key == 'select'" v-model="example3.value[scope.$index]" placeholder="请选择">
              <el-option v-for="item in example3.options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </template>
        </template>
      </commonTable>
      <template v-slot:document>
        <exp3 />
      </template>
    </exampleCom>
    <testMD />
  </zTitle>
</template>
<script>
  import testMD from "@/assets/markdown/components/table/index.md";
  import exp1 from "@/assets/markdown/components/table/exp1.md";
  import exp2 from "@/assets/markdown/components/table/exp2.md";
  import exp3 from "@/assets/markdown/components/table/exp3.md";
  
  import commonTable from "@/components/Common/table.vue";
  import exampleCom from "@/components/documentComponents/example.vue";

  // 示例1代码
  const mixin1 = {
    data: () => {
      return {
        example1
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
      }
    }
  }
  // 示例1列表配置
  const example1 = {
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
          },{
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



  // 示例3代码
  const mixin3 = {
    data: () => {
      return {
        example3,
      }
    }
  }
  // 示例3 data
  const example3 = {
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

  export default {
    components: {
      testMD,
      exp1,
      exp2,
      exp3,
      commonTable,
      exampleCom
    },
    mixins: [mixin1, mixin2, mixin3],
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    width: calc(100% - 1px);
  }
</style>