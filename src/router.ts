import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [{
  path: "/",
  redirect: "/components",
  component: resolve =>
    require(["@/components/documentComponents/layer.vue"], resolve),
  children: [{
    path: "/components",
    redirect: "/components/table",
    name: "components",
    component: resolve =>
      require(["@/views/components/index.vue"], resolve),
    children: [{
      path: "/components/table",
      name: "componentsTable",
      component: resolve =>
        require(["@/views/components/table.vue"], resolve)
    },
    {
      path: "/components/export",
      name: "componentsExport",
      component: resolve =>
        require(["@/views/components/export.vue"], resolve)
    },
    {
      path: "/components/tag",
      name: "componentsTag",
      component: resolve =>
        require(["@/views/components/tag.vue"], resolve)
    },
    {
      path: "/components/eject",
      name: "componentsEject",
      component: resolve =>
        require(["@/views/components/eject.vue"], resolve)
    },
    {
      path: "/components/button",
      name: "componentsButton",
      component: resolve =>
        require(["@/views/components/button.vue"], resolve)
    },
    {
      path: "/components/iframe",
      name: "componentsIframe",
      component: resolve =>
        require(["@/views/components/iframe.vue"], resolve)
    },
    {
      path: "/components/formItem",
      name: "componentsFormItem",
      component: resolve =>
        require(["@/views/components/formItem.vue"], resolve)
    }]
  },
  {
    path: "/projectIssues",
    name: "projectIssues",
    redirect: "/projectIssues/crossDomainSpread",
    meta: {
      title: "项目问题解决方案",
    },
    component: resolve => require(["@/views/projectIssues/index.vue"], resolve),
    children: [{
      path: "/projectIssues/crossDomainSpread",
      name: "projectIssuesCrossDomainSpread",
      component: resolve => require(["@/views/projectIssues/crossDomainSpread.vue"], resolve)
    }, {
      path: "/projectIssues/pageCache",
      name: "projectIssuesPageCache",
      component: resolve => require(["@/views/projectIssues/pageCache.vue"], resolve)
    }]
  },
  {
    path: "/compositeComponents",
    name: "compositeComponents",
    redirect: "/compositeComponents/form",
    meta: {
      title: "复合组件",
    },
    component: resolve => require(["@/views/compositeComponents/index.vue"], resolve),
    children: [{
      path: "/compositeComponents/form", // 表单
      name: "compositeComponentsForm",
      component: resolve => require(["@/views/compositeComponents/form/index.vue"], resolve)
    }]
  },
  {
    path: "/methods",
    name: "methods",
    meta: {
      title: "方法",
    },
    component: resolve => require(["@/views/methods/index.vue"], resolve)
  },
  {
    path: "/classes",
    name: "classes",
    meta: {
      title: "class",
    },
    component: resolve => require(["@/views/classes/index.vue"], resolve)
  }
  ]
}];

const router = new VueRouter({
  // mode: 'history',
  // base: '/resume.github.io',
  routes: [
    ...routes,
    {
      path: "*",
      redirect: "/"
    }
  ]
});

export default router;