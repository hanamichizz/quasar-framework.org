webpackJsonp([0],{165:function(t,n,r){var e=r(3)(r(303),r(402),null,null,null);t.exports=e.exports},189:function(t,n){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},190:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},191:function(t,n,r){t.exports=!r(198)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},193:function(t,n,r){var e=r(203),o=r(209);t.exports=r(191)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},194:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},195:function(t,n,r){var e=r(210)("wks"),o=r(211),i=r(190).Symbol,a="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=e},196:function(t,n,r){var e=r(194);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},197:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},198:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},199:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},200:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},201:function(t,n,r){var e=r(219),o=r(197);t.exports=function(t){return e(o(t))}},202:function(t,n){t.exports={}},203:function(t,n,r){var e=r(196),o=r(218),i=r(225),a=Object.defineProperty;n.f=r(191)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},204:function(t,n,r){var e=r(210)("keys"),o=r(211);t.exports=function(t){return e[t]||(e[t]=o(t))}},206:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},207:function(t,n,r){var e=r(194),o=r(190).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},208:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},209:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},210:function(t,n,r){var e=r(190),o=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},211:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},214:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},215:function(t,n,r){var e=r(201),o=r(223),i=r(222);t.exports=function(t){return function(n,r,a){var u,c=e(n),s=o(c.length),l=i(a,s);if(t&&r!=r){for(;s>l;)if((u=c[l++])!=u)return!0}else for(;s>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}}},216:function(t,n,r){var e=r(214);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},217:function(t,n,r){var e=r(190),o=r(189),i=r(216),a=r(193),u=function(t,n,r){var c,s,l,f=t&u.F,p=t&u.G,d=t&u.S,v=t&u.P,h=t&u.B,m=t&u.W,b=p?o:o[n]||(o[n]={}),y=b.prototype,_=p?e:d?e[n]:(e[n]||{}).prototype;p&&(r=n);for(c in r)(s=!f&&_&&void 0!==_[c])&&c in b||(l=s?_[c]:r[c],b[c]=p&&"function"!=typeof _[c]?r[c]:h&&s?i(l,e):m&&_[c]==l?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((b.virtual||(b.virtual={}))[c]=l,t&u.R&&y&&!y[c]&&a(y,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},218:function(t,n,r){t.exports=!r(191)&&!r(198)(function(){return 7!=Object.defineProperty(r(207)("div"),"a",{get:function(){return 7}}).a})},219:function(t,n,r){var e=r(206);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},220:function(t,n,r){var e=r(199),o=r(201),i=r(215)(!1),a=r(204)("IE_PROTO");t.exports=function(t,n){var r,u=o(t),c=0,s=[];for(r in u)r!=a&&e(u,r)&&s.push(r);for(;n.length>c;)e(u,r=n[c++])&&(~i(s,r)||s.push(r));return s}},221:function(t,n,r){var e=r(220),o=r(208);t.exports=Object.keys||function(t){return e(t,o)}},222:function(t,n,r){var e=r(200),o=Math.max,i=Math.min;t.exports=function(t,n){return t=e(t),t<0?o(t+n,0):i(t,n)}},223:function(t,n,r){var e=r(200),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},224:function(t,n,r){var e=r(197);t.exports=function(t){return Object(e(t))}},225:function(t,n,r){var e=r(194);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},235:function(t,n,r){var e=r(206),o=r(195)("toStringTag"),i="Arguments"==e(function(){return arguments}()),a=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=a(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},236:function(t,n,r){"use strict";var e=r(337),o=r(217),i=r(342),a=r(193),u=r(199),c=r(202),s=r(335),l=r(237),f=r(340),p=r(195)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,h,m,b,y){s(r,n,h);var _,g,x,w=function(t){if(!d&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},O=n+" Iterator",M="values"==m,q=!1,A=t.prototype,k=A[p]||A["@@iterator"]||m&&A[m],j=k||w(m),S=m?M?w("entries"):j:void 0,C="Array"==n?A.entries||k:k;if(C&&(x=f(C.call(new t)))!==Object.prototype&&(l(x,O,!0),e||u(x,p)||a(x,p,v)),M&&k&&"values"!==k.name&&(q=!0,j=function(){return k.call(this)}),e&&!y||!d&&!q&&A[p]||a(A,p,j),c[n]=j,c[O]=v,m)if(_={values:M?j:w("values"),keys:b?j:w("keys"),entries:S},y)for(g in _)g in A||i(A,g,_[g]);else o(o.P+o.F*(d||q),n,_);return _}},237:function(t,n,r){var e=r(203).f,o=r(199),i=r(195)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},238:function(t,n,r){"use strict";var e=r(343)(!0);r(236)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},239:function(t,n,r){r(347);for(var e=r(190),o=r(193),i=r(202),a=r(195)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var s=u[c],l=e[s],f=l&&l.prototype;f&&!f[a]&&o(f,a,s),i[s]=i.Array}},303:function(t,n,r){"use strict";function e(t){return t.indexOf("left")>-1?c.left:t.indexOf("right")>-1?c.right:t.indexOf("-center")>-1?c[t.split("-")[0]]:c[t]}Object.defineProperty(n,"__esModule",{value:!0});var o=r(328),i=function(t){return t&&t.__esModule?t:{default:t}}(o),a=r(0),u=[{color:"error",html:"Woah! Danger! You are getting good at this!",icon:"report_problem"},{color:"warning",html:"You need to know about this!",icon:"warning"},{color:"amber",html:"Wow! Nice job!",icon:"thumb_up"},{color:"secondary",html:"Quasar is cool! Right?",icon:"tag_faces"}],c={top:["bounceInDown","bounceOutUp"],right:["bounceInRight","bounceOutRight"],bottom:["bounceInUp","bounceOutDown"],left:["bounceInLeft","bounceOutLeft"]};n.default={components:{QAlert:a.QAlert,QBtn:a.QBtn,QIcon:a.QIcon,QCard:a.QCard,QCardMain:a.QCardMain,QCardActions:a.QCardActions,QCardSeparator:a.QCardSeparator},data:function(){return{visible:!0,visible2:!0}},mounted:function(){a.Alert.create({html:"Warning, warning, Will Robinson!",enter:"bounceInRight",leave:"bounceOutRight"})},methods:{alertAsMethod:function(t){var n=u[Math.floor(10*Math.random(5))%4],r=n.color,o=n.icon,c=n.html,s=e(t),l=(0,i.default)(s,2),f=l[0],p=l[1];a.Alert.create({enter:f,leave:p,color:r,icon:o,html:c,position:t})},reset:function(){this.visible=!0,this.visible2=!0}}}},324:function(t,n,r){t.exports={default:r(329),__esModule:!0}},325:function(t,n,r){t.exports={default:r(330),__esModule:!0}},328:function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=r(325),i=e(o),a=r(324),u=e(a);n.default=function(){function t(t,n){var r=[],e=!0,o=!1,i=void 0;try{for(var a,c=(0,u.default)(t);!(e=(a=c.next()).done)&&(r.push(a.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{!e&&c.return&&c.return()}finally{if(o)throw i}}return r}return function(n,r){if(Array.isArray(n))return n;if((0,i.default)(Object(n)))return t(n,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},329:function(t,n,r){r(239),r(238),t.exports=r(345)},330:function(t,n,r){r(239),r(238),t.exports=r(346)},333:function(t,n){t.exports=function(){}},334:function(t,n,r){t.exports=r(190).document&&document.documentElement},335:function(t,n,r){"use strict";var e=r(338),o=r(209),i=r(237),a={};r(193)(a,r(195)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(a,{next:o(1,r)}),i(t,n+" Iterator")}},336:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},337:function(t,n){t.exports=!0},338:function(t,n,r){var e=r(196),o=r(339),i=r(208),a=r(204)("IE_PROTO"),u=function(){},c=function(){var t,n=r(207)("iframe"),e=i.length;for(n.style.display="none",r(334).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;e--;)delete c.prototype[i[e]];return c()};t.exports=Object.create||function(t,n){var r;return null!==t?(u.prototype=e(t),r=new u,u.prototype=null,r[a]=t):r=c(),void 0===n?r:o(r,n)}},339:function(t,n,r){var e=r(203),o=r(196),i=r(221);t.exports=r(191)?Object.defineProperties:function(t,n){o(t);for(var r,a=i(n),u=a.length,c=0;u>c;)e.f(t,r=a[c++],n[r]);return t}},340:function(t,n,r){var e=r(199),o=r(224),i=r(204)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},342:function(t,n,r){t.exports=r(193)},343:function(t,n,r){var e=r(200),o=r(197);t.exports=function(t){return function(n,r){var i,a,u=String(o(n)),c=e(r),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c),i<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},344:function(t,n,r){var e=r(235),o=r(195)("iterator"),i=r(202);t.exports=r(189).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[e(t)]}},345:function(t,n,r){var e=r(196),o=r(344);t.exports=r(189).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return e(n.call(t))}},346:function(t,n,r){var e=r(235),o=r(195)("iterator"),i=r(202);t.exports=r(189).isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||i.hasOwnProperty(e(n))}},347:function(t,n,r){"use strict";var e=r(333),o=r(336),i=r(202),a=r(201);t.exports=r(236)(Array,"Array",function(t,n){this._t=a(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,r):"values"==n?o(0,t[r]):o(0,[r,t[r]])},"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")},402:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"layout-padding row justify-center"},[r("div",{staticStyle:{width:"500px","max-width":"90vw"}},[r("p",{staticClass:"caption"},[t._v("Alerts with Animation")]),t._v(" "),r("q-card",[r("q-card-main",{staticClass:"group"},[r("q-alert",{attrs:{color:"brown",icon:"cloud",enter:"bounceInLeft",leave:"bounceOutRight",appear:"",dismissible:""},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},[t._v("\n          Lorem ipsum dolor sit amet.\n        ")]),t._v(" "),r("q-alert",{ref:"destroyableAlert",attrs:{type:"negative",enter:"bounceInRight",leave:"bounceOutLeft",dismissible:"",actions:[{label:"Snooze",handler:function(){}}]},model:{value:t.visible2,callback:function(n){t.visible2=n},expression:"visible2"}},[t._v("\n          Lorem ipsum dolor sit amet.\n        ")])],1),t._v(" "),t.visible&&t.visible2?t._e():[r("q-card-separator"),t._v(" "),r("q-card-actions",[r("q-btn",{attrs:{flat:""},on:{click:t.reset}},[t._v("Reset")])],1)]],2),t._v(" "),r("p",{staticClass:"caption"},[t._v("Alerts as Methods")]),t._v(" "),r("div",{staticClass:"row group"},[r("div",[r("q-btn",{attrs:{round:"",small:"",color:"secondary"},on:{click:function(n){t.alertAsMethod("top-left")}}},[r("q-icon",{staticClass:"rotate-45",attrs:{name:"arrow_back"}})],1)],1),t._v(" "),r("div",[r("q-btn",{attrs:{round:"",small:"",color:"tertiary"},on:{click:function(n){t.alertAsMethod("top-center")}}},[r("q-icon",{attrs:{name:"arrow_upward"}})],1),t._v(" "),r("q-btn",{attrs:{round:"",small:"",color:"tertiary"},on:{click:function(n){t.alertAsMethod("top")}}},[r("q-icon",{attrs:{name:"vertical_align_top"}})],1)],1),t._v(" "),r("div",[r("q-btn",{attrs:{round:"",small:"",color:"secondary"},on:{click:function(n){t.alertAsMethod("top-right")}}},[r("q-icon",{staticClass:"rotate-45",attrs:{name:"arrow_upward"}})],1)],1)]),t._v(" "),r("div",{staticClass:"row group"},[r("div",[r("q-btn",{attrs:{round:"",small:"",color:"tertiary"},on:{click:function(n){t.alertAsMethod("left")}}},[r("q-icon",{attrs:{name:"arrow_back"}})],1)],1),t._v(" "),t._l(2,function(t){return r("div",{staticClass:"invisible"},[r("q-btn",{attrs:{round:"",small:""}})],1)}),t._v(" "),r("div",[r("q-btn",{attrs:{round:"",small:"",color:"tertiary"},on:{click:function(n){t.alertAsMethod("right")}}},[r("q-icon",{attrs:{name:"arrow_forward"}})],1)],1)],2),t._v(" "),r("div",{staticClass:"row group"},[r("div",[r("q-btn",{attrs:{round:"",small:"",color:"secondary"},on:{click:function(n){t.alertAsMethod("bottom-left")}}},[r("q-icon",{staticClass:"rotate-135",attrs:{name:"arrow_forward"}})],1)],1),t._v(" "),r("div",[r("q-btn",{attrs:{round:"",small:"",color:"tertiary"},on:{click:function(n){t.alertAsMethod("bottom-center")}}},[r("q-icon",{attrs:{name:"arrow_downward"}})],1),t._v(" "),r("q-btn",{attrs:{round:"",small:"",color:"tertiary"},on:{click:function(n){t.alertAsMethod("bottom")}}},[r("q-icon",{attrs:{name:"vertical_align_bottom"}})],1)],1),t._v(" "),r("div",[r("q-btn",{attrs:{round:"",small:"",color:"secondary"},on:{click:function(n){t.alertAsMethod("bottom-right")}}},[r("q-icon",{staticClass:"rotate-45",attrs:{name:"arrow_forward"}})],1)],1)]),t._v(" "),r("p",{staticClass:"caption"},[t._v("More examples")]),t._v(" "),t._l(["positive","info","negative","warning"],function(n){return r("q-alert",{key:n,staticStyle:{"margin-bottom":"1.5rem"},attrs:{color:n,dismissible:""}},[t._v("\n      Lorem ipsum dolor sit amet.\n    ")])}),t._v(" "),t._l(["positive","info","negative","warning"],function(n){return r("q-alert",{key:n,staticStyle:{"margin-bottom":"1.5rem"},attrs:{color:n}},[t._v("\n      Non dismissible. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    ")])})],2)])},staticRenderFns:[]}}});