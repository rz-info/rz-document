(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-21be28b4"],
  {
    af32: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "wrapper" },
            [
              a("doc-nav", {
                attrs: {
                  mode: "horizontal",
                  defaultActive: e.defaultActive,
                  menuList: e.menuList
                }
              }),
              a("router-view", { staticClass: "container" })
            ],
            1
          );
        },
        u = [],
        l = a("e59a"),
        r = {
          components: { docNav: l["a"] },
          data: function() {
            return {
              activeIndex: "1",
              defaultActive: "/components",
              menuList: [
                { label: "组件", path: "/components" },
                { label: "方法", path: "/methods" },
                { label: "class", path: "/classes" }
              ]
            };
          }
        },
        s = r,
        c = (a("d2ae"), a("2877")),
        i = Object(c["a"])(s, n, u, !1, null, "4e4e4f2b", null);
      t["default"] = i.exports;
    },
    beef: function(e, t, a) {},
    d2ae: function(e, t, a) {
      "use strict";
      var n = a("beef"),
        u = a.n(n);
      u.a;
    },
    e59a: function(e, t, a) {
      "use strict";
      var n = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "el-menu",
            {
              attrs: {
                "default-active": e.defaultActive,
                mode: e.mode,
                router: ""
              }
            },
            e._l(e.menuList, function(t) {
              return a(
                "el-menu-item",
                { key: t.path, attrs: { index: t.path } },
                [e._v(" " + e._s(t.label) + " ")]
              );
            }),
            1
          );
        },
        u = [],
        l = {
          props: {
            mode: { type: String, default: "vertical" },
            defaultActive: { type: String },
            menuList: {
              type: Array,
              default: function() {
                return [{ label: "", path: "" }];
              }
            }
          }
        },
        r = l,
        s = a("2877"),
        c = Object(s["a"])(r, n, u, !1, null, "68d9bb8d", null);
      t["a"] = c.exports;
    }
  }
]);
//# sourceMappingURL=chunk-21be28b4.8ed39e81.js.map