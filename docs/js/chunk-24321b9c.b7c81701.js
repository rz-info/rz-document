(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24321b9c"],{"92a7":function(t,s,n){"use strict";var a=n("d29d"),e=n.n(a);e.a},c975:function(t,s,n){"use strict";var a=n("23e7"),e=n("4d64").indexOf,o=n("a640"),i=n("ae40"),c=[].indexOf,r=!!c&&1/[1].indexOf(1,-0)<0,p=o("indexOf"),l=i("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:r||!p||!l},{indexOf:function(t){return r?c.apply(this,arguments)||0:e(this,t,arguments.length>1?arguments[1]:void 0)}})},cd56:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("zTitle",{staticClass:"wrapper",attrs:{level:"1",text:"iframe"}},[n("zExample",{attrs:{title:"示例"},scopedSlots:t._u([{key:"document",fn:function(){return[n("exp1")]},proxy:!0}])},[n("commonIframe",{staticStyle:{height:"200px",border:"1px solid"},attrs:{src:t.src}})],1),n("testMD")],1)},e=[],o=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"markdown"},[n("h2",[t._v("使用方法")]),n("h3",[t._v("引入")]),n("pre",[n("code",{staticClass:"js"},[n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" commonIframe "),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"token string"},[t._v('"@/components/Common/iframe.vue"')]),n("span",{staticClass:"token punctuation"},[t._v(";")])])]),n("pre",[n("code",{staticClass:"html"},[n("span",{staticClass:"token operator"},[t._v("<")]),t._v("commonIframe "),n("span",{staticClass:"token operator"},[t._v(":")]),t._v("src"),n("span",{staticClass:"token operator"},[t._v("=")]),n("span",{staticClass:"token string"},[t._v('"src"')]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("/")]),n("span",{staticClass:"token operator"},[t._v(">")])])]),n("h3",[t._v("props")]),n("pre",[n("code",{staticClass:"js"},[n("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),n("span",{staticClass:"token function"},[t._v("data")]),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),n("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      src"),n("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),n("span",{staticClass:"token string"},[t._v("'/index'")]),n("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),n("span",{staticClass:"token comment"},[t._v("// 路径")]),t._v("\n    "),n("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),n("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),n("span",{staticClass:"token punctuation"},[t._v("}")])])]),n("h3",[t._v("tips")]),n("ol",[n("li",[t._v("该组件用于统一嵌入"),n("code",[t._v("iframe")]),t._v("时的行为，载入时添加"),n("code",[t._v("loading")]),t._v("，统一处理默认域名+端口")]),n("li",[t._v("本地测试时用自己的地址，提交时使用线上地址")])]),n("pre",[n("code",{staticClass:"js"},[t._v("computed"),n("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),n("span",{staticClass:"token function"},[t._v("reportUrl")]),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),n("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" baseUrl "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),n("span",{staticClass:"token string"},[t._v("'http://localhost:8080'")]),n("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),n("span",{staticClass:"token comment"},[t._v("// 本地地址")]),t._v("\n    "),n("span",{staticClass:"token comment"},[t._v("// const baseUrl = process.env.VUE_APP_URL_IP; // 线上地址")]),t._v("\n    "),n("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" baseUrl "),n("span",{staticClass:"token operator"},[t._v("+")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("this")]),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("src"),n("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n  "),n("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),n("span",{staticClass:"token punctuation"},[t._v("}")]),n("span",{staticClass:"token punctuation"},[t._v(",")])])])])}],c=n("2877"),r={},p=Object(c["a"])(r,o,i,!1,null,null,null),l=p.exports,v=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"markdown"},[n("h2",[t._v("示例代码")]),n("pre",[n("code",{staticClass:"html"},[n("span",{staticClass:"token operator"},[t._v("<")]),t._v("commonIframe style"),n("span",{staticClass:"token operator"},[t._v("=")]),n("span",{staticClass:"token string"},[t._v('"height:200px;border:1px solid"')]),t._v(" "),n("span",{staticClass:"token operator"},[t._v(":")]),t._v("src"),n("span",{staticClass:"token operator"},[t._v("=")]),n("span",{staticClass:"token string"},[t._v('"src"')]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("/")]),n("span",{staticClass:"token operator"},[t._v(">")])])]),n("pre",[n("code",{staticClass:"js"},[n("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),n("span",{staticClass:"token function"},[t._v("data")]),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),n("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      src"),n("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),n("span",{staticClass:"token string"},[t._v("'/index?name=zkb'")]),n("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),n("span",{staticClass:"token comment"},[t._v("// 路径")]),t._v("\n    "),n("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),n("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),n("span",{staticClass:"token punctuation"},[t._v("}")])])])])}],u={},k=Object(c["a"])(u,v,_,!1,null,null,null),d=k.exports,C=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.showLoading,expression:"showLoading"}],ref:"container",staticClass:"report-container",attrs:{"element-loading-text":"加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.7)"}},[n("iframe",{attrs:{src:t.reportUrl,width:"100%",height:"100%",frameborder:"no",border:"0",marginwidth:"0",marginheight:"0"},on:{load:function(s){return t.iframeLoad()}}})])},m=[];n("99af"),n("c975");function f(){return""}var h={props:{src:{type:String,default:""}},data:function(){return{showLoading:!0}},watch:{reportUrl:function(){this.showLoading=!0}},computed:{token:function(){var t="?";return this.src.indexOf("?")>-1&&(t="&"),"".concat(t,"token=").concat(f())},reportUrl:function(){var t=document.location.origin;return t+this.src+this.token}},methods:{iframeLoad:function(){this.showLoading=!1}}},g=h,w=Object(c["a"])(g,C,m,!1,null,"10378bd4",null),x=w.exports,b={components:{testMD:l,exp1:d,commonIframe:x},data:function(){return{src:"/index"}}},y=b,O=(n("92a7"),Object(c["a"])(y,a,e,!1,null,"d281ff10",null));s["default"]=O.exports},d29d:function(t,s,n){}}]);
//# sourceMappingURL=chunk-24321b9c.b7c81701.js.map