import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    redirect: "/components",
    component: resolve =>
      require(["@/components/documentComponents/layer.vue"], resolve),
    children: [
      {
        path: "/components",
        redirect: "/components/table",
        name: "components",
        component: resolve =>
          require(["@/views/components/index.vue"], resolve),
        children: [
          {
            path: "/components/table",
            name: "table",
            component: resolve =>
              require(["@/views/components/table.vue"], resolve)
          },
          {
            path: "/components/export",
            name: "export",
            component: resolve =>
              require(["@/views/components/export.vue"], resolve)
          },
          {
            path: "/components/tag",
            name: "tag",
            component: resolve =>
              require(["@/views/components/tag.vue"], resolve)
          }
        ]
      },
      {
        path: "/methods",
        name: "methods",
        component: resolve => require(["@/views/methods/index.vue"], resolve)
      },
      {
        path: "/classes",
        name: "classes",
        component: resolve => require(["@/views/classes/index.vue"], resolve)
      }
    ]
  }
];

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
