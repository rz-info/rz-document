(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d6a850a"],{"057f":function(t,n,a){var s=a("fc6a"),e=a("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return e(t)}catch(n){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?r(t):e(s(t))}},"0ca7":function(t,n,a){"use strict";var s=a("fd1b"),e=a.n(s);e.a},"159b":function(t,n,a){var s=a("da84"),e=a("fdbc"),o=a("17c2"),i=a("9112");for(var r in e){var c=s[r],p=c&&c.prototype;if(p&&p.forEach!==o)try{i(p,"forEach",o)}catch(u){p.forEach=o}}},"17c2":function(t,n,a){"use strict";var s=a("b727").forEach,e=a("a640"),o=a("ae40"),i=e("forEach"),r=o("forEach");t.exports=i&&r?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,n,a){"use strict";var s=a("23e7"),e=a("5a34"),o=a("1d80"),i=a("ab13");s({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(o(this)).indexOf(e(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,n,a){"use strict";var s=a("6eeb"),e=a("825a"),o=a("d039"),i=a("ad6d"),r="toString",c=RegExp.prototype,p=c[r],u=o((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),v=p.name!=r;(u||v)&&s(RegExp.prototype,r,(function(){var t=e(this),n=String(t.source),a=t.flags,s=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?i.call(t):a);return"/"+n+"/"+s}),{unsafe:!0})},"36f8":function(t,n,a){"use strict";var s=a("5ad3"),e=a.n(s);e.a},4160:function(t,n,a){"use strict";var s=a("23e7"),e=a("17c2");s({target:"Array",proto:!0,forced:[].forEach!=e},{forEach:e})},"44e7":function(t,n,a){var s=a("861d"),e=a("c6b6"),o=a("b622"),i=o("match");t.exports=function(t){var n;return s(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==e(t))}},"4de4":function(t,n,a){"use strict";var s=a("23e7"),e=a("b727").filter,o=a("1dde"),i=a("ae40"),r=o("filter"),c=i("filter");s({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},5415:function(t,n,a){var s={"./leadExcel.png":"b725","./leadPdf.png":"6c03","./leadWord.png":"eae9"};function e(t){var n=o(t);return a(n)}function o(t){if(!a.o(s,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return s[t]}e.keys=function(){return Object.keys(s)},e.resolve=o,t.exports=e,e.id="5415"},"5a34":function(t,n,a){var s=a("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5ad3":function(t,n,a){},"6c03":function(t,n,a){t.exports=a.p+"img/leadPdf.fd69e888.png"},"746f":function(t,n,a){var s=a("428f"),e=a("5135"),o=a("e538"),i=a("9bf2").f;t.exports=function(t){var n=s.Symbol||(s.Symbol={});e(n,t)||i(n,t,{value:o.f(t)})}},a4d3:function(t,n,a){"use strict";var s=a("23e7"),e=a("da84"),o=a("d066"),i=a("c430"),r=a("83ab"),c=a("4930"),p=a("fdbf"),u=a("d039"),v=a("5135"),l=a("e8b5"),_=a("861d"),f=a("825a"),C=a("7b0b"),k=a("fc6a"),d=a("c04e"),m=a("5c6c"),g=a("7c73"),b=a("df75"),h=a("241c"),y=a("057f"),x=a("7418"),w=a("06cf"),O=a("9bf2"),S=a("d1e7"),L=a("9112"),E=a("6eeb"),j=a("5692"),P=a("f772"),T=a("d012"),D=a("90e3"),N=a("b622"),A=a("e538"),M=a("746f"),V=a("d44e"),R=a("69f3"),F=a("b727").forEach,G=P("hidden"),z="Symbol",I="prototype",$=N("toPrimitive"),H=R.set,J=R.getterFor(z),U=Object[I],W=e.Symbol,q=o("JSON","stringify"),B=w.f,Q=O.f,K=y.f,X=S.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),nt=j("symbol-to-string-registry"),at=j("wks"),st=e.QObject,et=!st||!st[I]||!st[I].findChild,ot=r&&u((function(){return 7!=g(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,n,a){var s=B(U,n);s&&delete U[n],Q(t,n,a),s&&t!==U&&Q(U,n,s)}:Q,it=function(t,n){var a=Y[t]=g(W[I]);return H(a,{type:z,tag:t,description:n}),r||(a.description=n),a},rt=p?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,n,a){t===U&&ct(Z,n,a),f(t);var s=d(n,!0);return f(a),v(Y,s)?(a.enumerable?(v(t,G)&&t[G][s]&&(t[G][s]=!1),a=g(a,{enumerable:m(0,!1)})):(v(t,G)||Q(t,G,m(1,{})),t[G][s]=!0),ot(t,s,a)):Q(t,s,a)},pt=function(t,n){f(t);var a=k(n),s=b(a).concat(ft(a));return F(s,(function(n){r&&!vt.call(a,n)||ct(t,n,a[n])})),t},ut=function(t,n){return void 0===n?g(t):pt(g(t),n)},vt=function(t){var n=d(t,!0),a=X.call(this,n);return!(this===U&&v(Y,n)&&!v(Z,n))&&(!(a||!v(this,n)||!v(Y,n)||v(this,G)&&this[G][n])||a)},lt=function(t,n){var a=k(t),s=d(n,!0);if(a!==U||!v(Y,s)||v(Z,s)){var e=B(a,s);return!e||!v(Y,s)||v(a,G)&&a[G][s]||(e.enumerable=!0),e}},_t=function(t){var n=K(k(t)),a=[];return F(n,(function(t){v(Y,t)||v(T,t)||a.push(t)})),a},ft=function(t){var n=t===U,a=K(n?Z:k(t)),s=[];return F(a,(function(t){!v(Y,t)||n&&!v(U,t)||s.push(Y[t])})),s};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=D(t),a=function(t){this===U&&a.call(Z,t),v(this,G)&&v(this[G],n)&&(this[G][n]=!1),ot(this,n,m(1,t))};return r&&et&&ot(U,n,{configurable:!0,set:a}),it(n,t)},E(W[I],"toString",(function(){return J(this).tag})),E(W,"withoutSetter",(function(t){return it(D(t),t)})),S.f=vt,O.f=ct,w.f=lt,h.f=y.f=_t,x.f=ft,A.f=function(t){return it(N(t),t)},r&&(Q(W[I],"description",{configurable:!0,get:function(){return J(this).description}}),i||E(U,"propertyIsEnumerable",vt,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),F(b(at),(function(t){M(t)})),s({target:z,stat:!0,forced:!c},{for:function(t){var n=String(t);if(v(tt,n))return tt[n];var a=W(n);return tt[n]=a,nt[a]=n,a},keyFor:function(t){if(!rt(t))throw TypeError(t+" is not a symbol");if(v(nt,t))return nt[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),s({target:"Object",stat:!0,forced:!c,sham:!r},{create:ut,defineProperty:ct,defineProperties:pt,getOwnPropertyDescriptor:lt}),s({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:_t,getOwnPropertySymbols:ft}),s({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(C(t))}}),q){var Ct=!c||u((function(){var t=W();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));s({target:"JSON",stat:!0,forced:Ct},{stringify:function(t,n,a){var s,e=[t],o=1;while(arguments.length>o)e.push(arguments[o++]);if(s=n,(_(n)||void 0!==t)&&!rt(t))return l(n)||(n=function(t,n){if("function"==typeof s&&(n=s.call(this,t,n)),!rt(n))return n}),e[1]=n,q.apply(null,e)}})}W[I][$]||L(W[I],$,W[I].valueOf),V(W,z),T[G]=!0},a640:function(t,n,a){"use strict";var s=a("d039");t.exports=function(t,n){var a=[][t];return!!a&&s((function(){a.call(null,n||function(){throw 1},1)}))}},ab13:function(t,n,a){var s=a("b622"),e=s("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(a){try{return n[e]=!1,"/./"[t](n)}catch(s){}}return!1}},ad6d:function(t,n,a){"use strict";var s=a("825a");t.exports=function(){var t=s(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},ae40:function(t,n,a){var s=a("83ab"),e=a("d039"),o=a("5135"),i=Object.defineProperty,r={},c=function(t){throw t};t.exports=function(t,n){if(o(r,t))return r[t];n||(n={});var a=[][t],p=!!o(n,"ACCESSORS")&&n.ACCESSORS,u=o(n,0)?n[0]:c,v=o(n,1)?n[1]:void 0;return r[t]=!!a&&!e((function(){if(p&&!s)return!0;var t={length:-1};p?i(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,u,v)}))}},b041:function(t,n,a){"use strict";var s=a("00ee"),e=a("f5df");t.exports=s?{}.toString:function(){return"[object "+e(this)+"]"}},b0c0:function(t,n,a){var s=a("83ab"),e=a("9bf2").f,o=Function.prototype,i=o.toString,r=/^\s*function ([^ (]*)/,c="name";s&&!(c in o)&&e(o,c,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(t){return""}}})},b64b:function(t,n,a){var s=a("23e7"),e=a("7b0b"),o=a("df75"),i=a("d039"),r=i((function(){o(1)}));s({target:"Object",stat:!0,forced:r},{keys:function(t){return o(e(t))}})},b725:function(t,n,a){t.exports=a.p+"img/leadExcel.c222045e.png"},b727:function(t,n,a){var s=a("0366"),e=a("44ad"),o=a("7b0b"),i=a("50c4"),r=a("65f0"),c=[].push,p=function(t){var n=1==t,a=2==t,p=3==t,u=4==t,v=6==t,l=5==t||v;return function(_,f,C,k){for(var d,m,g=o(_),b=e(g),h=s(f,C,3),y=i(b.length),x=0,w=k||r,O=n?w(_,y):a?w(_,0):void 0;y>x;x++)if((l||x in b)&&(d=b[x],m=h(d,x,g),t))if(n)O[x]=m;else if(m)switch(t){case 3:return!0;case 5:return d;case 6:return x;case 2:c.call(O,d)}else if(u)return!1;return v?-1:p||u?u:O}};t.exports={forEach:p(0),map:p(1),filter:p(2),some:p(3),every:p(4),find:p(5),findIndex:p(6)}},b7bd:function(t,n,a){"use strict";var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"wrapper"},[a("h1",[t._v(t._s(t.title))]),a("h2",[t._v("示例")]),t._t("default")],2)},e=[],o={props:["title"]},i=o,r=a("2877"),c=Object(r["a"])(i,s,e,!1,null,"728d6ab8",null);n["a"]=c.exports},caad:function(t,n,a){"use strict";var s=a("23e7"),e=a("4d64").includes,o=a("44d2"),i=a("ae40"),r=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:!r},{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d3b7:function(t,n,a){var s=a("00ee"),e=a("6eeb"),o=a("b041");s||e(Object.prototype,"toString",o,{unsafe:!0})},d704:function(t,n,a){"use strict";a.r(n);var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"wrapper"},[a("exampleCom",{attrs:{title:"导出"}},[a("commonExport",{attrs:{exportConfig:t.exportConfig}})],1),a("testMD")],1)},e=[],o=(a("d81d"),a("b7bd")),i=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"markdown"},[a("h2",[t._v("示例代码")]),a("pre",[a("code",{staticClass:"html"},[a("span",{staticClass:"token operator"},[t._v("<")]),t._v("commonExport "),a("span",{staticClass:"token operator"},[t._v(":")]),t._v("exportConfig"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"exportConfig"')]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("/")]),a("span",{staticClass:"token operator"},[t._v(">")])])]),a("pre",[a("code",{staticClass:"js"},[a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  components"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    commonExport"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n  "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n  "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      exportConfig"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n        tableList"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 必填, 导出内容(复选框用)")]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n            id"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 序号")]),t._v("\n            itemName"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'单位名称'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 名称")]),t._v("\n            prop1"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'单位名称'")]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n            id"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("2")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 序号")]),t._v("\n            itemName"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'回款金额'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 名称")]),t._v("\n            prop2"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'回款金额'")]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n            id"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("3")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 序号")]),t._v("\n            itemName"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'回款方式'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 名称")]),t._v("\n            prop3"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'回款方式'")]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        typeList"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token string"},[t._v("'excel'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'pdf'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'word'")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 选填, 导出方式类别, 默认只有excel")]),t._v("\n\n        map"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 必填且无需数据, 用于接收导出接口所需参数 ")]),t._v("\n        fileType"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("''")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 必填且无需数据, 用于接收导出接口所需参数")]),t._v("\n      "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n  watch"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    exportConfig"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      "),a("span",{staticClass:"token function"},[t._v("handler")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token parameter"},[t._v("now")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n        "),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" exportParams "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 调用导出接口所需参数")]),t._v("\n          map"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("exportConfig"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("map"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n          fileType"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("exportConfig"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("fileType\n        "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n        console"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("log")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("exportParams"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n      "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n      deep"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token boolean"},[t._v("true")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(";")])])]),a("h2",[t._v("使用方法")]),a("h3",[t._v("引入")]),a("pre",[a("code",{staticClass:"js"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" commonExport "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'@/components/Common/export.vue'")])])]),a("pre",[a("code",{staticClass:"html"},[a("span",{staticClass:"token operator"},[t._v("<")]),t._v("commonExport "),a("span",{staticClass:"token operator"},[t._v(":")]),t._v("exportConfig"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"exportConfig"')]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("/")]),a("span",{staticClass:"token operator"},[t._v(">")])])]),a("h3",[t._v("props")]),a("pre",[a("code",{staticClass:"js"},[a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    exportConfig"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      tableList"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 必填, 导出内容(复选框用)")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n          id"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 序号")]),t._v("\n          itemName"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'单位名称'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 复选框文本")]),t._v("\n          prop1"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'单位名称'")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 键对应列表该列的 prop, 值为该列的表头(复选框文本)")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n          id"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("2")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n          itemName"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'回款金额'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n          prop2"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'回款金额'")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n      "),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" \n      typeList"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token string"},[t._v("'excel'")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 选填, 导出方式类别, 默认只有excel, 可选['excel', 'pdf', 'word']")]),t._v("\n\n      map"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 必填且无需数据, 用于接收导出接口所需参数 ")]),t._v("\n      fileType"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("''")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 必填且无需数据, 用于接收导出接口所需参数    ")]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")])])]),a("h3",[t._v("* 导出接口所需参数")]),a("p",[t._v("直接取 "),a("code",[t._v("exportConfig")]),t._v(" 中的 "),a("code",[t._v("map")]),t._v(" 和 "),a("code",[t._v("fileType")]),t._v(" 即可, 具体方法各异")]),a("pre",[a("code",{staticClass:"js"},[a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\n  "),a("span",{staticClass:"token operator"},[t._v("...")]),t._v("\n\n  computed"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    exportParams"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      fileType"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("exportConfig"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("fileType"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n      map"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("exportConfig"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("map"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")])])])])}],c=a("2877"),p={},u=Object(c["a"])(p,i,r,!1,null,null,null),v=u.exports,l=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"rz-export"},[a("div",{staticClass:"rz-title"},[t._v("导出内容")]),a("el-checkbox-group",{model:{value:t.checked,callback:function(n){t.checked=n},expression:"checked"}},t._l(t.exportConfig.tableList,(function(n,s){return a("el-checkbox",{key:s,staticStyle:{"margin-bottom":"10px"},attrs:{label:n.id}},[t._v(" "+t._s(n.itemName)+" ")])})),1),a("div",{staticClass:"rz-title"},[t._v("导出方式")]),a("div",t._l(t.imgList,(function(n,s){return a("img",{key:s,staticStyle:{width:"96px"},attrs:{src:t.getImgUrl(n)}})})),0),a("el-radio-group",{staticClass:"rz-radio-group",model:{value:t.radioVal,callback:function(n){t.radioVal=n},expression:"radioVal"}},t._l(t.exportConfig.typeList,(function(t,n){return a("el-radio",{key:n,staticClass:"rz-radio-inp",attrs:{label:n}})})),1)],1)},_=[];a("4160"),a("159b"),a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b");function f(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function C(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,s)}return a}function k(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?C(Object(a),!0).forEach((function(n){f(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}a("caad"),a("b0c0"),a("d3b7"),a("25f0"),a("2532");function d(t){var n;if(Array.isArray(t)){n=[];for(var a=0;a<t.length;a++)n[a]=d(t[a]);return n}if("[object Object]"===Object.prototype.toString.call(t)){for(var s in n={},t)n[s]=d(t[s]);return n}return t}var m={props:{exportConfig:{type:Object,default:function(){return{tableList:[],map:{},fileType:"",typeList:["excel"]}}}},data:function(){return{checked:[],radioVal:0,defaultData:{typeList:["excel"]}}},watch:{checked:function(t){var n=this;this.exportConfig.map={},t.forEach((function(t){var a=d(n.exportConfig.tableList[t-1]);delete a.id,delete a.itemName,n.exportConfig.map=k(k({},n.exportConfig.map),a)}))},radioVal:{handler:function(t){this.exportConfig.fileType=this.exportConfig.typeList?this.exportConfig.typeList[t]:this.defaultData.typeList[t]},immediate:!0}},computed:{imgList:function(){return this.exportConfig.typeList.map((function(t){switch(t){case"excel":return"leadExcel.png";case"pdf":return"leadPdf.png";case"word":return"leadWord.png";default:return"leadExcel.png"}}))}},methods:{init:function(){this.selectAll(),this.formatData()},formatData:function(){for(var t in this.defaultData)void 0==this.exportConfig[t]&&(this.exportConfig[t]=this.defaultData[t])},getImgUrl:function(t){return a("5415")("./"+t)},selectAll:function(){this.checked=this.exportConfig.tableList.map((function(t){return t.id}))}},beforeMount:function(){this.init()}},g=m,b=(a("36f8"),Object(c["a"])(g,l,_,!1,null,"0606a98a",null)),h=b.exports,y={components:{testMD:v,commonExport:h,exampleCom:o["a"]},data:function(){return{exportConfig:{tableList:[{id:1,itemName:"单位名称",prop1:"单位名称"},{id:2,itemName:"回款金额",prop2:"回款金额"},{id:3,itemName:"回款方式",prop3:"回款方式"}],typeList:["excel","pdf","word"],map:[],fileType:""}}},watch:{exportConfig:{handler:function(t){var n={map:t.map,fileType:t.fileType};console.log(n)},deep:!0}}},x=y,w=(a("0ca7"),Object(c["a"])(x,s,e,!1,null,"16e45f8f",null));n["default"]=w.exports},d81d:function(t,n,a){"use strict";var s=a("23e7"),e=a("b727").map,o=a("1dde"),i=a("ae40"),r=o("map"),c=i("map");s({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,n,a){var s=a("23e7"),e=a("83ab"),o=a("56ef"),i=a("fc6a"),r=a("06cf"),c=a("8418");s({target:"Object",stat:!0,sham:!e},{getOwnPropertyDescriptors:function(t){var n,a,s=i(t),e=r.f,p=o(s),u={},v=0;while(p.length>v)a=e(s,n=p[v++]),void 0!==a&&c(u,n,a);return u}})},e439:function(t,n,a){var s=a("23e7"),e=a("d039"),o=a("fc6a"),i=a("06cf").f,r=a("83ab"),c=e((function(){i(1)})),p=!r||c;s({target:"Object",stat:!0,forced:p,sham:!r},{getOwnPropertyDescriptor:function(t,n){return i(o(t),n)}})},e538:function(t,n,a){var s=a("b622");n.f=s},eae9:function(t,n,a){t.exports=a.p+"img/leadWord.a3c86cde.png"},fd1b:function(t,n,a){},fdbc:function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-0d6a850a.ab056ba1.js.map