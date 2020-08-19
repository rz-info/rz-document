(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2a0d2206"],
  {
    "55c1": function(t, a, s) {
      "use strict";
      s.r(a);
      var n = function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "div",
            { staticClass: "wrapper" },
            [
              s(
                "exampleCom",
                { attrs: { title: "列表" } },
                [
                  s("commonTable", {
                    attrs: {
                      tableMap: t.tableMap,
                      tableData: t.tableData,
                      tableConfig: t.tableConfig
                    },
                    on: {
                      viewDetails: t.viewDetails,
                      "selection-change": t.selectChange
                    }
                  })
                ],
                1
              ),
              s("testMD")
            ],
            1
          );
        },
        e = [],
        o = function() {
          var t = this,
            a = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        p = [
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s("div", { staticClass: "markdown" }, [
              s("h2", [t._v("使用方法")]),
              s("h3", [t._v("引入")]),
              s("pre", [
                s("code", { staticClass: "js" }, [
                  s("span", { staticClass: "token keyword" }, [t._v("import")]),
                  t._v(" commonTable "),
                  s("span", { staticClass: "token keyword" }, [t._v("from")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v("'@/components/Common/table.vue'")
                  ])
                ])
              ]),
              s("pre", [
                s("code", { staticClass: "html" }, [
                  s("span", { staticClass: "token operator" }, [t._v("<")]),
                  t._v("commonTable "),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v("tableMap"),
                  s("span", { staticClass: "token operator" }, [t._v("=")]),
                  s("span", { staticClass: "token string" }, [
                    t._v('"tableMap"')
                  ]),
                  t._v(" "),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v("tableData"),
                  s("span", { staticClass: "token operator" }, [t._v("=")]),
                  s("span", { staticClass: "token string" }, [
                    t._v('"tableData"')
                  ]),
                  t._v(" "),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v("tableConfig"),
                  s("span", { staticClass: "token operator" }, [t._v("=")]),
                  s("span", { staticClass: "token string" }, [
                    t._v('"tableConfig"')
                  ]),
                  t._v(" @viewDetails"),
                  s("span", { staticClass: "token operator" }, [t._v("=")]),
                  s("span", { staticClass: "token string" }, [
                    t._v('"viewDetails"')
                  ]),
                  t._v("  @selection"),
                  s("span", { staticClass: "token operator" }, [t._v("-")]),
                  t._v("change"),
                  s("span", { staticClass: "token operator" }, [t._v("=")]),
                  s("span", { staticClass: "token string" }, [
                    t._v('"selectChange"')
                  ]),
                  s("span", { staticClass: "token operator" }, [t._v("/")]),
                  s("span", { staticClass: "token operator" }, [t._v(">")])
                ])
              ]),
              s("h3", [t._v("props")]),
              s("pre", [
                s("code", { staticClass: "js" }, [
                  s("span", { staticClass: "token keyword" }, [t._v("export")]),
                  t._v(" "),
                  s("span", { staticClass: "token keyword" }, [
                    t._v("default")
                  ]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n  "),
                  s("span", { staticClass: "token function" }, [t._v("data")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("(")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(")")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n    tableMap"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("[")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 用于生成表格的配置")
                  ]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n        type"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"selection"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v(
                      "// type 设置为 selection 渲染复选框, 通过绑定 selection-change 事件监听复选框变动"
                    )
                  ]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n        name"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v("'单位名称'")
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 表头, 必填")
                  ]),
                  t._v("\n        prop"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v("'prop1'")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 数据 prop, 必填")
                  ]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n        name"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v("'操作'")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" \n        prop"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v("'prop7'")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 无需数据时可不填")
                  ]),
                  t._v("\n        width"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token number" }, [t._v("200")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 宽度, 选填")
                  ]),
                  t._v("\n        align"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v("''")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 对齐方式, 默认 center, 选填")
                  ]),
                  t._v("\n        type"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v("''")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 类型, 选填")
                  ]),
                  t._v("\n        template"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 其他组件写在 templat 里, 选填")
                  ]),
                  t._v("\n          btn"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("[")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n            label"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v("'查看详情'")
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 按钮文本")
                  ]),
                  t._v("\n            style"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v("'background: green'")
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            event"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v("'viewDetails'")
                  ]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v(
                      "// 按钮事件(需在父级定义同名函数并当做自定义事件传入表格组件)"
                    )
                  ]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("]")]),
                  t._v("\n        "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n    "),
                  s("span", { staticClass: "token punctuation" }, [t._v("]")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n    \n    tableData"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 表格数据, 直接传入接口返回的数据即可, 格式如下")
                  ]),
                  t._v("\n      data"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("[")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n        authFileName"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v("'234'")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// key值对应 tableMap 中的 prop")
                  ]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n        authFileKey"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v("'234'")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("]")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n      total"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token number" }, [t._v("10")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// total 大于0时显示分页")
                  ]),
                  t._v("\n      page"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token number" }, [t._v("1")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n      pageSize"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token number" }, [t._v("10")]),
                  t._v("\n    "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n\n    tableConfig"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 其他配置, 选填")
                  ]),
                  t._v("\n      hidePage"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token boolean" }, [t._v("false")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 隐藏分页, 默认false")
                  ]),
                  t._v("\n      hideIndex"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token boolean" }, [t._v("false")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 隐藏序号列, 默认false")
                  ]),
                  t._v("\n    "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n  "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n"),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n")
                ])
              ]),
              s("h3", [t._v("自定义事件")]),
              s("p", [
                s("code", [t._v("table")]),
                t._v(" 组件内部通过 "),
                s("code", [t._v("$emit")]),
                t._v(" 方法触发按钮的事件, 所以需要在 "),
                s("code", [t._v("table")]),
                t._v(" 组件上绑定将被调用的事件及处理函数")
              ]),
              s("p", [
                s("code", [t._v("selection-change")]),
                t._v(" 为复选框被选中时触发的事件")
              ]),
              s("p", [
                s("code", [t._v("handleCurrentChange")]),
                t._v(" 为分页触发事件")
              ]),
              s("h2", [t._v("示例代码")]),
              s("pre", [
                s("code", { staticClass: "html" }, [
                  s("span", { staticClass: "token operator" }, [t._v("<")]),
                  t._v("commonTable "),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v("tableMap"),
                  s("span", { staticClass: "token operator" }, [t._v("=")]),
                  s("span", { staticClass: "token string" }, [
                    t._v('"tableMap"')
                  ]),
                  t._v(" "),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v("tableData"),
                  s("span", { staticClass: "token operator" }, [t._v("=")]),
                  s("span", { staticClass: "token string" }, [
                    t._v('"tableData"')
                  ]),
                  t._v(" "),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v("tableConfig"),
                  s("span", { staticClass: "token operator" }, [t._v("=")]),
                  s("span", { staticClass: "token string" }, [
                    t._v('"tableConfig"')
                  ]),
                  t._v(" @viewDetails"),
                  s("span", { staticClass: "token operator" }, [t._v("=")]),
                  s("span", { staticClass: "token string" }, [
                    t._v('"viewDetails"')
                  ]),
                  t._v(" "),
                  s("span", { staticClass: "token operator" }, [t._v("/")]),
                  s("span", { staticClass: "token operator" }, [t._v(">")])
                ])
              ]),
              s("pre", [
                s("code", { staticClass: "js" }, [
                  s("span", { staticClass: "token keyword" }, [t._v("export")]),
                  t._v(" "),
                  s("span", { staticClass: "token keyword" }, [
                    t._v("default")
                  ]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n    components"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n      commonTable"),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n    "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n    "),
                  s("span", { staticClass: "token function" }, [t._v("data")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("(")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(")")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n      "),
                  s("span", { staticClass: "token keyword" }, [t._v("return")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n        tableData"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n          data"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("[")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n              prop1"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"No description"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop2"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"website"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop3"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"topics"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop4"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"provided"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop5"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"Releases"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop6"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"published"')
                  ]),
                  t._v("\n            "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n              prop1"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"published"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop2"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"passive"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop3"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"Releases"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop4"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"topics"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop5"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"Releases"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n              prop6"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v('"error"')]),
                  t._v("\n            "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("]")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          total"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token number" }, [t._v("2")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          page"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token number" }, [t._v("1")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          pageSize"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token number" }, [t._v("2")]),
                  t._v("\n        "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n\n        tableMap"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("[")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n            type"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"selection"')
                  ]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n            name"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"单位名称"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            prop"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v('"prop1"')]),
                  t._v("\n            align"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v("'right'")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n            name"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"回款金额"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            prop"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v('"prop2"')]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            align"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v("'left'")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n            name"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"回款方式"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            prop"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v('"prop3"')]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n            name"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"到账日期"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            prop"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v('"prop4"')]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n            name"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v('"收款人"')
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            prop"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v('"prop5"')]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n            name"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v('"备注"')]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            prop"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v('"prop6"')]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            width"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token number" }, [t._v("300")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n            name"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [t._v('"操作"')]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            width"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token number" }, [t._v("300")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n            template"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n              btn"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("[")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n                label"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v("'查看详情'")
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n                style"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v("'background: green'")
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n                event"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token string" }, [
                    t._v("'viewDetails'")
                  ]),
                  t._v("\n              "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("]")]),
                  t._v("\n            "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n        "),
                  s("span", { staticClass: "token punctuation" }, [t._v("]")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n        tableConfig"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n          "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 其他配置, 选填")
                  ]),
                  t._v("\n          hidePage"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token boolean" }, [t._v("false")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 隐藏分页, 默认false")
                  ]),
                  t._v("\n          hideIndex"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token boolean" }, [t._v("false")]),
                  t._v(" "),
                  s("span", { staticClass: "token comment" }, [
                    t._v("// 隐藏序号列, 默认false")
                  ]),
                  t._v("\n        "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(";")]),
                  t._v("\n    "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n    methods"),
                  s("span", { staticClass: "token operator" }, [t._v(":")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n      "),
                  s("span", { staticClass: "token function" }, [
                    t._v("viewDetails")
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v("(")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(")")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n        console"),
                  s("span", { staticClass: "token punctuation" }, [t._v(".")]),
                  s("span", { staticClass: "token function" }, [t._v("log")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("(")]),
                  s("span", { staticClass: "token string" }, [
                    t._v("'is details'")
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v(")")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(";")]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(",")]),
                  t._v("\n      "),
                  s("span", { staticClass: "token function" }, [
                    t._v("selectChange")
                  ]),
                  s("span", { staticClass: "token punctuation" }, [t._v("(")]),
                  s("span", { staticClass: "token parameter" }, [t._v("val")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(")")]),
                  t._v(" "),
                  s("span", { staticClass: "token punctuation" }, [t._v("{")]),
                  t._v("\n        console"),
                  s("span", { staticClass: "token punctuation" }, [t._v(".")]),
                  s("span", { staticClass: "token function" }, [t._v("log")]),
                  s("span", { staticClass: "token punctuation" }, [t._v("(")]),
                  t._v("val"),
                  s("span", { staticClass: "token punctuation" }, [t._v(")")]),
                  t._v("\n      "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n    "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  t._v("\n  "),
                  s("span", { staticClass: "token punctuation" }, [t._v("}")]),
                  s("span", { staticClass: "token punctuation" }, [t._v(";")])
                ])
              ])
            ]);
          }
        ],
        i = s("2877"),
        c = {},
        v = Object(i["a"])(c, o, p, !1, null, null, null),
        _ = v.exports,
        l = function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "div",
            { staticClass: "tableArea" },
            [
              s(
                "el-table",
                {
                  staticClass: "operColumStyle",
                  staticStyle: { width: "100%", "text-align": "left" },
                  attrs: {
                    data: t.tableData.data,
                    border: "",
                    "header-cell-style": t.headerStyle,
                    "header-row-style": t.headerRowStyle
                  },
                  on: { "selection-change": t.handleSelectionChange }
                },
                [
                  t.tableConfig.hideIndex
                    ? t._e()
                    : s("el-table-column", {
                        key: Math.random(),
                        attrs: { type: "index", align: "center", label: "序号" }
                      }),
                  t._l(t.tableMap, function(a, n) {
                    return s(
                      "div",
                      { key: n },
                      [
                        "selection" == a.type
                          ? s("el-table-column", {
                              attrs: { type: "selection", align: "center" }
                            })
                          : s("el-table-column", {
                              attrs: {
                                prop: a.prop,
                                type: a.type,
                                align: a.align || "center",
                                label: a.name,
                                width: a.width
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(n) {
                                      return [
                                        a.template
                                          ? s(
                                              "div",
                                              t._l(a.template.btn, function(a) {
                                                return s("el-button", {
                                                  key: a.label,
                                                  style: a.style,
                                                  attrs: {
                                                    type: a.type || "primary",
                                                    size: a.size || "mini"
                                                  },
                                                  domProps: {
                                                    textContent: t._s(a.label)
                                                  },
                                                  on: {
                                                    click: function(s) {
                                                      return t.emitEvent(
                                                        a.event,
                                                        n.row
                                                      );
                                                    }
                                                  }
                                                });
                                              }),
                                              1
                                            )
                                          : s("div", [
                                              s("span", [
                                                t._v(t._s(n.row[a.prop]))
                                              ])
                                            ])
                                      ];
                                    }
                                  }
                                ],
                                null,
                                !0
                              )
                            })
                      ],
                      1
                    );
                  })
                ],
                2
              ),
              !t.tableConfig.hidePage && t.tableData.total
                ? s("page-count", {
                    staticClass: "pageCount",
                    attrs: { tableData: t.tableData },
                    on: { handleCurrentChange: t.handleCurrentChange }
                  })
                : t._e()
            ],
            1
          );
        },
        r = [],
        u = function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return t.tableData
            ? s("div", { staticClass: "body" }, [
                s("div", { staticClass: "data" }, [
                  t._v(
                    " 共计" +
                      t._s(
                        Math.ceil(t.tableData.total / t.tableData.pageSize)
                      ) +
                      "页 / 实时更新" +
                      t._s(t.tableData.total) +
                      "条数据 "
                  )
                ]),
                s(
                  "div",
                  { staticClass: "page" },
                  [
                    s("el-pagination", {
                      attrs: {
                        "current-page": t.tableData.page,
                        "page-size": t.tableData.pageSize,
                        layout: "prev, pager, next, jumper",
                        total: t.tableData.total
                      },
                      on: {
                        "size-change": t.handleSizeChange,
                        "current-change": t.handleCurrentChange,
                        "update:currentPage": function(a) {
                          return t.$set(t.tableData, "page", a);
                        },
                        "update:current-page": function(a) {
                          return t.$set(t.tableData, "page", a);
                        }
                      }
                    })
                  ],
                  1
                )
              ])
            : t._e();
        },
        C = [],
        k = {
          name: "Pagination",
          props: {
            tableData: {
              type: Object,
              required: !1,
              default: function() {
                return [];
              }
            }
          },
          methods: {
            handleSizeChange: function(t) {
              console.log("每页 ".concat(t, " 条"));
            },
            handleCurrentChange: function(t) {
              this.$emit("handleCurrentChange", t),
                console.log("当前页: ".concat(t));
            }
          }
        },
        g = k,
        m = (s("a2c6"), Object(i["a"])(g, u, C, !1, null, "29f87790", null)),
        d = m.exports,
        b = {
          components: { PageCount: d },
          props: {
            tableMap: {
              type: Array,
              default: function() {
                return [];
              }
            },
            tableData: { type: Object, default: function() {} },
            tableConfig: {
              type: Object,
              required: !1,
              default: function() {
                return { hidePage: !1, hideIndex: !1 };
              }
            }
          },
          methods: {
            emitEvent: function(t, a) {
              this.$emit(t, a);
            },
            headerStyle: function() {
              return "background:rgba(140,140,140,0.1);color: #000000FF;text-align: center";
            },
            headerRowStyle: function() {
              return "height:32px";
            },
            handleCurrentChange: function(t) {
              this.$emit("handleCurrentChange", t);
            },
            handleSelectionChange: function(t) {
              this.$emit("selection-change", t);
            }
          }
        },
        h = b,
        f = (s("bce5"), Object(i["a"])(h, l, r, !1, null, "b3ffe700", null)),
        y = f.exports,
        w = s("b7bd"),
        D = {
          components: { testMD: _, commonTable: y, exampleCom: w["a"] },
          data: function() {
            return {
              tableData: {
                data: [
                  {
                    prop1: "No description",
                    prop2: "website",
                    prop3: "topics",
                    prop4: "provided",
                    prop5: "Releases",
                    prop6: "published"
                  },
                  {
                    prop1: "published",
                    prop2: "passive",
                    prop3: "Releases",
                    prop4: "topics",
                    prop5: "Releases",
                    prop6: "error"
                  }
                ],
                total: 2,
                page: 1,
                pageSize: 2
              },
              tableMap: [
                { type: "selection" },
                { name: "单位名称", prop: "prop1", align: "right" },
                { name: "回款金额", prop: "prop2", align: "left" },
                { name: "回款方式", prop: "prop3" },
                { name: "到账日期", prop: "prop4" },
                { name: "收款人", prop: "prop5" },
                { name: "备注", prop: "prop6", width: 300 },
                {
                  name: "操作",
                  width: 300,
                  template: {
                    btn: [
                      {
                        label: "查看详情",
                        style: "background: green",
                        event: "viewDetails"
                      }
                    ]
                  }
                }
              ],
              tableConfig: { hidePage: !1, hideIndex: !1 }
            };
          },
          methods: {
            viewDetails: function() {
              console.log("is details");
            },
            selectChange: function(t) {
              console.log(t);
            }
          }
        },
        x = D,
        M = (s("6c5e"), Object(i["a"])(x, n, e, !1, null, "5cc6ecba", null));
      a["default"] = M.exports;
    },
    "6c5e": function(t, a, s) {
      "use strict";
      var n = s("8c1d"),
        e = s.n(n);
      e.a;
    },
    7417: function(t, a, s) {},
    "8c1d": function(t, a, s) {},
    "91cd": function(t, a, s) {},
    a2c6: function(t, a, s) {
      "use strict";
      var n = s("91cd"),
        e = s.n(n);
      e.a;
    },
    b7bd: function(t, a, s) {
      "use strict";
      var n = function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "div",
            { staticClass: "wrapper" },
            [
              s("h1", [t._v(t._s(t.title))]),
              s("h2", [t._v("示例")]),
              t._t("default")
            ],
            2
          );
        },
        e = [],
        o = { props: ["title"] },
        p = o,
        i = s("2877"),
        c = Object(i["a"])(p, n, e, !1, null, "728d6ab8", null);
      a["a"] = c.exports;
    },
    bce5: function(t, a, s) {
      "use strict";
      var n = s("7417"),
        e = s.n(n);
      e.a;
    }
  }
]);
//# sourceMappingURL=chunk-2a0d2206.a693ef86.js.map
