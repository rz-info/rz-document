1. 在当前页面与要展示页面（有`spread`表格）之间加一个中间页，跳转到中间页
2. 中间页使用`<commonIframe />`组件跳转到目标页（中间页路由需要根据实际位置添加，否则会影响面包屑文本显示）
3. 在表格文件执行`singleLogin(this.$route.query.token)`避免跳转到登录页
