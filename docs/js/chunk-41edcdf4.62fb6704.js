(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-41edcdf4"],
  {
    "0acd": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "com-wrapper" },
            [
              a(
                "div",
                { staticClass: "slide" },
                [
                  a("doc-nav", {
                    staticClass: "el-menu-vertical-demo",
                    attrs: {
                      defaultActive: t.defaultActive,
                      menuList: t.menuList
                    }
                  })
                ],
                1
              ),
              a("router-view", { staticClass: "container" })
            ],
            1
          );
        },
        l = [],
        s = a("e59a"),
        c = {
          components: { docNav: s["a"] },
          data: function() {
            return {
              isCollapse: !1,
              defaultActive: "/components/table",
              menuList: [
                { label: "table", path: "/components/table" },
                { label: "export", path: "/components/export" },
                { label: "tag", path: "/components/tag" }
              ]
            };
          }
        },
        i = c,
        r = (a("17df"), a("2877")),
        u = Object(r["a"])(i, n, l, !1, null, "3d488182", null);
      e["default"] = u.exports;
    },
    "17df": function(t, e, a) {
      "use strict";
      var n = a("e6ef"),
        l = a.n(n);
      l.a;
    },
    e59a: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "el-menu",
            {
              attrs: {
                "default-active": t.defaultActive,
                mode: t.mode,
                router: ""
              }
            },
            t._l(t.menuList, function(e) {
              return a(
                "el-menu-item",
                { key: e.path, attrs: { index: e.path } },
                [t._v(" " + t._s(e.label) + " ")]
              );
            }),
            1
          );
        },
        l = [],
        s = {
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
        c = s,
        i = a("2877"),
        r = Object(i["a"])(c, n, l, !1, null, "68d9bb8d", null);
      e["a"] = r.exports;
    },
    e6ef: function(t, e, a) {}
  }
]);
//# sourceMappingURL=chunk-41edcdf4.62fb6704.js.map
