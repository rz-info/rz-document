// 顶部导航
const topMenuList: Object[] = [{
  label: "组件",
  path: "/components"
},
{
  label: "项目问题解决方案",
  path: "/projectIssues"
},
{
  label: "复合组件",
  path: "/compositeComponents"
}, {
  label: "方法",
  path: "/methods"
},
  // {
  //   label: "class",
  //   path: "/classes"
  // }
]

// 组件
const componentsMenuList: Object[] = [{
  label: "列表",
  path: "/components/table"
},
{
  label: "导出",
  path: "/components/export"
},
{
  label: "标签",
  path: "/components/tag"
},
{
  label: "弹窗",
  path: "/components/eject"
},
{
  label: "按钮",
  path: "/components/button"
},
{
  label: "iframe",
  path: "/components/iframe"
},
{
  label: "表单",
  path: "/components/formItem"
}]

// 复合组件
const compositeComponentsMenuList: Object[] = [{
  label: "表单",
  path: "/compositeComponents/form"
}]

// 项目问题解决方案
const projectIssuesMenuList: Object[] = [{
  label: "跨域显示spread表格",
  path: "/projectIssues/crossDomainSpread"
},{
  label: "列表参数缓存",
  path: "/projectIssues/pageCache"
}]
export {
  topMenuList,
  componentsMenuList,
  compositeComponentsMenuList,
  projectIssuesMenuList
}