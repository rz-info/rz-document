(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b9347e2"],{"15cd":function(t,a,s){"use strict";var n=s("ed7a"),o=s.n(n);o.a},"53bc":function(t,a,s){},9549:function(t,a,s){"use strict";var n=s("53bc"),o=s.n(n);o.a},c975:function(t,a,s){"use strict";var n=s("23e7"),o=s("4d64").indexOf,e=s("a640"),i=s("ae40"),p=[].indexOf,c=!!p&&1/[1].indexOf(1,-0)<0,v=e("indexOf"),_=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!v||!_},{indexOf:function(t){return c?p.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},d2ce:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("zTitle",{staticClass:"wrapper",attrs:{level:"1",text:"标签"}},[s("zExample",{attrs:{title:""},scopedSlots:t._u([{key:"document",fn:function(){return[s("exp1")]},proxy:!0}])},[s("h3",[t._v("单个标签")]),s("commonTag",{staticStyle:{"justify-content":"start"},attrs:{tagData:t.tagData}}),s("h3",[t._v("多个标签")]),s("div",{staticClass:"tag-wrapper"},t._l(t.tagList,(function(t){return s("commonTag",{key:t.label,attrs:{tagData:t}})})),1)],1),s("testMD")],1)},o=[],e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"markdown"},[s("h2",[t._v("使用方法")]),s("h3",[t._v("引入")]),s("pre",[s("code",{staticClass:"js"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" commonTag "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@/components/Common/tag.vue"')]),s("span",{staticClass:"token punctuation"},[t._v(";")])])]),s("pre",[s("code",{staticClass:"html"},[s("span",{staticClass:"token operator"},[t._v("<")]),t._v("commonTag "),s("span",{staticClass:"token operator"},[t._v(":")]),t._v("tagData"),s("span",{staticClass:"token operator"},[t._v("=")]),s("span",{staticClass:"token string"},[t._v('"tagData"')]),t._v(" "),s("span",{staticClass:"token operator"},[t._v("/")]),s("span",{staticClass:"token operator"},[t._v(">")])])]),s("h3",[t._v("props")]),s("pre",[s("code",{staticClass:"js"},[s("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),s("span",{staticClass:"token function"},[t._v("data")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),s("span",{staticClass:"token comment"},[t._v("// 单个标签")]),t._v("\n    tagData"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签1'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 左侧文本")]),t._v("\n      value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值1'")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 右侧文本")]),t._v("\n    "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n\n    "),s("span",{staticClass:"token comment"},[t._v("// 多个标签")]),t._v("\n    tagList"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("[")]),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签2'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 左侧文本")]),t._v("\n      value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值2'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 右侧文本")]),t._v("\n    "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签3'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n      value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值3'")]),t._v("\n    "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签4'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n      value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值4'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n      width"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("[")]),s("span",{staticClass:"token number"},[t._v("100")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),s("span",{staticClass:"token number"},[t._v("200")]),s("span",{staticClass:"token punctuation"},[t._v("]")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 左右两侧文本块的宽度")]),t._v("\n      height"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token number"},[t._v("50")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 文本块高度")]),t._v("\n      padding"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token number"},[t._v("100")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 左右文本块之间间距")]),t._v("\n    "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签5'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n      value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值5'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n      backgroundColor"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'pink'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 可填颜色值(#333 || rgb || rgba) 或 内置关键字(yellow,pink,grey)")]),t._v("\n    "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n  "),s("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),s("span",{staticClass:"token punctuation"},[t._v("}")])])])])}],p=s("2877"),c={},v=Object(p["a"])(c,e,i,!1,null,null,null),_=v.exports,l=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"markdown"},[s("h2",[t._v("示例代码")]),s("pre",[s("code",{staticClass:"html"},[s("span",{staticClass:"token operator"},[t._v("<")]),t._v("h3"),s("span",{staticClass:"token operator"},[t._v(">")]),t._v("单个标签"),s("span",{staticClass:"token operator"},[t._v("<")]),s("span",{staticClass:"token operator"},[t._v("/")]),t._v("h3"),s("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n"),s("span",{staticClass:"token operator"},[t._v("<")]),t._v("commonTag style"),s("span",{staticClass:"token operator"},[t._v("=")]),s("span",{staticClass:"token string"},[t._v('"justify-content:start"')]),t._v(" "),s("span",{staticClass:"token operator"},[t._v(":")]),t._v("tagData"),s("span",{staticClass:"token operator"},[t._v("=")]),s("span",{staticClass:"token string"},[t._v('"tagData"')]),t._v(" "),s("span",{staticClass:"token operator"},[t._v("/")]),s("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n\n"),s("span",{staticClass:"token operator"},[t._v("<")]),t._v("h3"),s("span",{staticClass:"token operator"},[t._v(">")]),t._v("多个标签"),s("span",{staticClass:"token operator"},[t._v("<")]),s("span",{staticClass:"token operator"},[t._v("/")]),t._v("h3"),s("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n"),s("span",{staticClass:"token operator"},[t._v("<")]),t._v("div "),s("span",{staticClass:"token keyword"},[t._v("class")]),s("span",{staticClass:"token operator"},[t._v("=")]),s("span",{staticClass:"token string"},[t._v('"tag-wrapper"')]),s("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n  "),s("span",{staticClass:"token operator"},[t._v("<")]),t._v("commonTag v"),s("span",{staticClass:"token operator"},[t._v("-")]),s("span",{staticClass:"token keyword"},[t._v("for")]),s("span",{staticClass:"token operator"},[t._v("=")]),s("span",{staticClass:"token string"},[t._v('"item in tagList"')]),t._v(" "),s("span",{staticClass:"token operator"},[t._v(":")]),t._v("key"),s("span",{staticClass:"token operator"},[t._v("=")]),s("span",{staticClass:"token string"},[t._v('"item.label"')]),t._v(" "),s("span",{staticClass:"token operator"},[t._v(":")]),t._v("tagData"),s("span",{staticClass:"token operator"},[t._v("=")]),s("span",{staticClass:"token string"},[t._v('"item"')]),t._v(" "),s("span",{staticClass:"token operator"},[t._v("/")]),s("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n"),s("span",{staticClass:"token operator"},[t._v("<")]),s("span",{staticClass:"token operator"},[t._v("/")]),t._v("div"),s("span",{staticClass:"token operator"},[t._v(">")])])]),s("pre",[s("code",{staticClass:"js"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" commonTag "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@/components/Common/tag.vue"')]),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  components"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    testMD"),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    commonTag"),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    exampleCom\n  "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n  "),s("span",{staticClass:"token function"},[t._v("data")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),s("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      tagData"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n        label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签1'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值1'")]),t._v("\n      "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n      tagList"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("[")]),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n        label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签2'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 左侧文本")]),t._v("\n        value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值2'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 右侧文本")]),t._v("\n      "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n        label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签3'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值3'")]),t._v("\n      "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n        label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签4'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值4'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        width"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token punctuation"},[t._v("[")]),s("span",{staticClass:"token number"},[t._v("100")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),s("span",{staticClass:"token number"},[t._v("200")]),s("span",{staticClass:"token punctuation"},[t._v("]")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 左右两侧文本块的宽度")]),t._v("\n        height"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token number"},[t._v("50")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 文本块高度")]),t._v("\n        padding"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token number"},[t._v("100")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 左右文本块之间间距")]),t._v("\n      "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),s("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n        label"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'标签5'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        value"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'属性值5'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        backgroundColor"),s("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token string"},[t._v("'pink'")]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token comment"},[t._v("// 可填颜色值(#333 || rgb || rgba) 或 内置关键字(yellow,pink,grey)")]),t._v("\n      "),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n    "),s("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),s("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),s("span",{staticClass:"token punctuation"},[t._v("}")]),s("span",{staticClass:"token punctuation"},[t._v(";")])])])])}],u={},k=Object(p["a"])(u,l,r,!1,null,null,null),C=k.exports,g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"rz-tag",style:t.tagStyle},[s("div",{staticClass:"rz-tag-label textOF",style:t.tagLabelStyle,domProps:{textContent:t._s(t.tagData.label)}}),s("div",{staticClass:"rz-tag-value textOF",style:t.tagValueStyle,domProps:{textContent:t._s(t.tagData.value)}})])},d=[],m=(s("c975"),{props:{tagData:{type:Object,required:!0,default:function(){return{label:"",value:"",backgroundColor:"",width:[],height:34,padding:4}}}},data:function(){return{defaultData:{height:34,width:[142,530],padding:4},colorMap:{yellow:"#FFF9D6",pink:"#F7E4EF",grey:"#EAF1FF"}}},computed:{tagStyle:function(){return{height:(this.tagData.height||this.defaultData.height)+"px",lineHeight:(this.tagData.height||this.defaultData.height)+"px"}},tagLabelStyle:function(){return{width:(this.tagData.width?this.tagData.width[0]:this.defaultData.width[0])+"px",marginRight:(void 0==this.tagData.padding?this.defaultData.padding:this.tagData.padding)+"px"}},tagValueStyle:function(){return{width:(this.tagData.width?this.tagData.width[1]:this.defaultData.width[1])+"px",backgroundColor:this.tagData.backgroundColor?this.tagData.backgroundColor.indexOf("#")>-1||this.tagData.backgroundColor.indexOf("rgb")>-1?this.tagData.backgroundColor:this.colorMap[this.tagData.backgroundColor]:this.colorMap["yellow"]}}}}),h=m,b=(s("15cd"),Object(p["a"])(h,g,d,!1,null,"a6a1fd0e",null)),f=b.exports,w={components:{testMD:_,exp1:C,commonTag:f},data:function(){return{tagData:{label:"标签1",value:"属性值1"},tagList:[{label:"标签2",value:"属性值2"},{label:"标签3",value:"属性值3"},{label:"标签4",value:"属性值4",width:[100,200],height:50,padding:100},{label:"标签5",value:"属性值5",backgroundColor:"pink"}]}}},y=w,D=(s("9549"),Object(p["a"])(y,n,o,!1,null,"3bb2eb7a",null));a["default"]=D.exports},ed7a:function(t,a,s){}}]);
//# sourceMappingURL=chunk-7b9347e2.6bdf8ef0.js.map