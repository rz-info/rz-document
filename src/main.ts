import Vue from "vue";
import App from "./App.vue";
import router from "@/router.ts";
import "normalize.css";
import "prismjs/themes/prism.css";
import "@/components/index"

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
