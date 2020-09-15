1. 把带有`spread`表格的部分抽离为一个独立的`vue`文件
2. 使用`<commonIframe />`组件显示抽离的`vue`文件
3. 在表格文件执行`singleLogin(this.$route.query.token)`避免跳转到登录页

