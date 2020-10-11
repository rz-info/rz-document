<template>
  <zTitle class="wrapper" level="1" text="列表">
    <zExample title="示例一">
      <commonTable :tableMap="example1.tableMap" :tableData="example1.tableData" :tableConfig="example1.tableConfig"
        @viewDetails="viewDetails" @edit="edit" @selection-change="selectChange" />
      <template v-slot:document>
        <exp1 />
      </template>
    </zExample>
    <zExample title="示例二">
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
    </zExample>
    <zExample title="示例三">
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
    </zExample>
		<zExample title="示例四">
		  <h4>使用slot自定义列表内容2</h4>
			<el-row style="margin-top:30px" class="table_his">
				<commonTable :tableMap="example4.tableMap" :tableData="example4.tableData" @editEject="editEject" :tableConfig="example4.tableConfig">
					<template v-slot:btn="{ rowData, template, scope }">
						<template v-for="(item,key) in template">
							<div v-if="key == 'img'" :key="key">
								 <span>{{scope.$index+1}}&emsp;</span>
								<img style="margin-left:20px;" v-if="rowData.modifyNumber" src="@/views/classes/icon/sanjiao.png" @click.stop="selectEditHistorical(scope.$index,rowData)" alt="">
								<div class="historyInvoice" v-show="example4.showKey[scope.$index]" >
									<div v-for="item in example4.LedgerHistory" :key="item.id" >
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
    <testMD />
  </zTitle>
</template>
<script>
  import testMD from "@/assets/markdown/components/table/index.md";
  import exp1 from "@/assets/markdown/components/table/exp1.md";
  import exp2 from "@/assets/markdown/components/table/exp2.md";
  import exp3 from "@/assets/markdown/components/table/exp3.md";
<<<<<<< HEAD
  import exp4 from "@/assets/markdown/components/table/exp4.md";
  
=======

>>>>>>> 08a3e89d6cce5a59cab1e68c21b8aaddc55681a3
  import commonTable from "@/components/Common/table.vue";

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

  // 示例4代码
  const mixin4 = {
    data: () => {
      return {
        example4,
      }
    },
		methods:{
			selectEditHistorical(key,data){
				this.hideTips();
				this.$nextTick(()=>{
					this.$set(this.example4.showKey,key,true)
  				// 这里可以请求接口获取参数
// 					 let dto = {
// 						id:data.id,
// 						status:data.status
// 					 }
// 					 findPayLedgerHistory(dto).then(res => {
// 						this.LedgerHistory = res.data;
// 					 })
					this.example4.LedgerHistory=[{updatedAt:"000000",modifyContent:"内容999999999999"},{updatedAt:"000000",modifyContent:"内容999999999999"}]
				});
					
			},
			hideTips() {
				for(let i in this.example4.showKey) {
					this.example4.showKey[i] = false;
				}
			}
		},
		mounted(){
			document.addEventListener('click',this.hideTips);
		},
		destroy(){
			document.removeEventListener('click',this.hideTips);
		}
	}
// 示例4 data
  const example4 = {
		showKey:{},//标记当前点击的列表
		LedgerHistory:[],
    tableData: {
      data: [{
				modifyNumber:null,
				content:"内容",
				remark:"备注",
				id:"1",
				status:"aa"
				},
				{
				modifyNumber:2,
				content:"内容",
				remark:"备注",
				id:"2",
				status:"bb"
				}
      ],
      total: 2,
      page: 1,
      pageSize: 2
    },
		tableConfig : { // 其他配置, 选填
      hideIndex: true // 隐藏序号列, 默认false
    },
    tableMap: [
			{
        name: '序号',
        prop:"index",
        width: 80, // 宽度, 选填
        template: {
          div: {
            event: 'click'
          },
          img:{
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
    ]
  }
  export default {
    components: {
      testMD,
      exp1,
      exp2,
      exp3,
			exp4,
      commonTable,
    },
    mixins: [mixin1, mixin2, mixin3,mixin4]
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    width: calc(100% - 1px);
  }
	.historyInvoice{
    position: absolute;
    left: 75px;
    background: #EAF1FF;
    width: 500px;
    z-index: 9999;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    padding: 20px;
  }
  .historyInvoice .list{
    text-align: left;
    margin-bottom: 20px;
  }
  .historyInvoice .date{
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #666666;
    line-height: 10px;
  }
  .historyInvoice .text{
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #1A1A1A;
    line-height: 10px;
  }
</style>
<style lang="css" scoped>
  .table_his>>>.el-table__body-wrapper{
    overflow: visible;
  }
  .table_his>>>.el-table{
    overflow: visible;
  }
</style>