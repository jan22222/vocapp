(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-e3b7d9b2":"d43bf18c","chunk-2d0ae9a8":"8f8954c4","chunk-2d210801":"d1efb674","chunk-431b5fc8":"32ba06c6","chunk-575354aa":"ddc2ca87"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-431b5fc8":1,"chunk-575354aa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-e3b7d9b2":"31d6cfe0","chunk-2d0ae9a8":"31d6cfe0","chunk-2d210801":"31d6cfe0","chunk-431b5fc8":"63c3357e","chunk-575354aa":"1406eada"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vocapp/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row"},[n("div",{staticClass:"container"},[n("a",{staticClass:"navbar-brand float-left"},[e._v("Vocabulary Trainer")]),n("ul",{staticClass:"nav navbar-nav flex-row float-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/"}},[e._v("Add words")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/list"}},[e._v("View words")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/tester"}},[e._v("Start Testing")])],1)])])]),n("div",{staticClass:"container mt-5"},[n("router-view")],1)])},o=[],u={name:"App",components:{}},c=u,i=(n("034f"),n("2877")),l=Object(i["a"])(c,a,o,!1,null,null,null),s=l.exports,d=(n("d3b7"),n("8c4f"));r["default"].use(d["a"]);var f=[{path:"/",name:"add",component:function(){return Promise.all([n.e("chunk-e3b7d9b2"),n.e("chunk-2d0ae9a8")]).then(n.bind(null,"0b88"))}},{path:"/list",name:"list",component:function(){return Promise.all([n.e("chunk-e3b7d9b2"),n.e("chunk-575354aa")]).then(n.bind(null,"74b3"))}},{path:"/edit/:id",name:"edit",component:function(){return Promise.all([n.e("chunk-e3b7d9b2"),n.e("chunk-2d210801")]).then(n.bind(null,"b7c9"))}},{path:"/tester",name:"tester",component:function(){return Promise.all([n.e("chunk-e3b7d9b2"),n.e("chunk-431b5fc8")]).then(n.bind(null,"d712"))}}],p=new d["a"]({mode:"history",base:"/vocapp/",routes:f}),h=p,b=n("5f5b"),v=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(b["a"]),r["default"].use(v["a"]),r["default"].config.productionTip=!1,new r["default"]({router:h,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.d67d38ad.js.map