(function(t){function e(e){for(var o,a,s=e[0],l=e[1],c=e[2],u=0,v=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&v.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function a(t){return s.p+"js/"+({blog:"blog",contact:"contact",details:"details",work:"work"}[t]||t)+"."+{blog:"561d66e0",contact:"d06af734",details:"11d02e0c",work:"c145fd1d"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",clipped:"","align-center":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-layout",{attrs:{"mt-4":"",column:"","align-center":""}},[n("v-flex",[n("v-avatar",{staticStyle:{"border-radius":"50px","max-width":"100%",height:"auto","margin-bottom":"30"},attrs:{height:"200",width:"200"}},[n("img",{attrs:{src:"profile_photo.jpeg",alt:""}})])],1),n("v-flex",[n("p",{staticClass:"white--text mt-3 display-1 "},[t._v("Julio Acevedo")]),n("v-divider")],1),n("v-flex",[n("p",{staticClass:"white--text mt-3 font-weight-light"},[t._v("Software Developer")])])],1),n("v-list",{attrs:{dense:"",nav:!0,rounded:!0}},[n("v-divider",{attrs:{inset:""}}),n("v-list-item",{attrs:{link:"",to:{name:"home"}}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"blue lighten-1"}},[t._v("fas fa-user-astronaut")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("About me")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-item",{attrs:{link:"",to:{name:"contact"}}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"blue lighten-1"}},[t._v("fas fa-hand-spock")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Contact me")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-item",{attrs:{link:"",to:{name:"details"}}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"blue lighten-1"}},[t._v("fas fa-paste")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Details")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-item",{attrs:{link:"",to:{name:"blog"}}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"blue lighten-1"}},[t._v("mdi-file-document-edit-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("My Blog")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-item",{attrs:{link:"",to:{name:"work"}}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"blue lighten-1"}},[t._v("mdi-cogs")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Some of my work")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"blue lighten-1",src:"https://static3.bigstockphoto.com/3/5/9/large1500/95362232.jpg"}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-spacer"),n("v-toolbar-title",[t._v("Julio Acevedo - Software Developer")])],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{app:"",src:"https://static3.bigstockphoto.com/3/5/9/large1500/95362232.jpg"}},[n("span",[t._v("© Julio Acevedo 2020")])])],1)},i=[],a={props:{source:String},data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!0}},s=a,l=n("2877"),c=Object(l["a"])(s,r,i,!1,null,null,null),u=c.exports,d=(n("d3b7"),n("8c4f"));n("bb51");o["default"].use(d["a"]);var v=[{path:"/home",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/",name:"nothing",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/blog",name:"blog",component:function(){return n.e("blog").then(n.bind(null,"fd3f"))}},{path:"/contact",name:"contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/work",name:"work",component:function(){return n.e("work").then(n.bind(null,"f126"))}},{path:"/details",name:"details",component:function(){return n.e("details").then(n.bind(null,"9f52"))}}],p=new d["a"]({mode:"history",base:"/",routes:v}),m=p,f=n("2f62");o["default"].use(f["a"]);var b=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=n("ce5b"),g=n.n(h);n("bf40");o["default"].use(g.a);var x=new g.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},iconfont:"mdi"});n("d5e8"),n("5363");o["default"].config.productionTip=!1,new o["default"]({router:m,store:b,vuetify:x,render:function(t){return t(u)}}).$mount("#app")},bb51:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5 mb-5",attrs:{hover:""}},[n("v-layout",[n("v-flex",{attrs:{xs2:""}}),n("v-flex",{staticClass:"display-4 font-weight-bold font-weight-black",attrs:{xs8:""}},[t._v(" about me ")])],1),n("v-layout",[n("v-flex",{attrs:{xs2:""}}),n("v-flex",{staticClass:"subtitle-1 font-italic mt-3",staticStyle:{color:"#80DEEA"},attrs:{xs8:""}},[t._v(" 34 years "),n("strong",{staticClass:"ml-2 mr-2",staticStyle:{color:"#90A4AE"}},[t._v("/")]),t._v(" León, Guanajuato "),n("strong",{staticClass:"ml-2 mr-2",staticStyle:{color:"#90A4AE"}},[t._v("/")]),t._v(" Thincode employee ")])],1),n("v-layout",[n("v-flex",{attrs:{xs2:""}}),n("v-flex",{staticClass:"mt-5",staticStyle:{color:"#9E9E9E"},attrs:{xs7:""}},[n("p",[t._v(" Currently backend web developer increasing fronend development skills. 6 years of experience in backend application development for financial institutions. 4 years of experience in desktop and web application development (backend) for clinical laboratory with presence some states inside México and attention to the government of Mexico City. Passionate about development and programming. Looking to become competitive in the field of web development. ")])])],1),n("v-layout",[n("v-flex",{attrs:{xs2:""}}),n("v-flex",{attrs:{xs7:""}},[n("v-divider",{staticClass:"mt-4",attrs:{color:"#80DEEA"}})],1)],1),n("v-layout",[n("v-flex",{attrs:{xs2:""}}),n("v-flex",{staticClass:"display-1 font-weight-bold font-weight-black mt-9",attrs:{xs7:""}},[t._v(" my soft skills ")])],1),n("v-layout",[n("v-flex",{attrs:{xs3:""}}),n("v-flex",{attrs:{xs5:""}},[n("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[n("v-expansion-panels",{attrs:{popout:""}},t._l(t.messages,(function(e,o){return n("v-expansion-panel",{key:o,attrs:{"hide-actions":""}},[n("v-expansion-panel-header",[n("v-row",{staticClass:"spacer",attrs:{align:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"2",sm:"2",md:"2"}},[n("v-avatar",{attrs:{size:"36px"}},[n("v-icon",{attrs:{color:e.color,large:""},domProps:{textContent:t._s(e.icon)}})],1)],1),n("v-col",{staticClass:"hidden-xs-only",attrs:{sm:"5",md:"4","alignt-center":"","text-truncate":""}},[n("strong",{domProps:{innerHTML:t._s(e.name)}})]),e.excerpt?n("v-col",{staticClass:"grey--text text-truncate hidden-sm-and-down"},[t._v(" "+t._s(e.excerpt)+" ")]):t._e()],1)],1),n("v-expansion-panel-content",[n("v-divider",{attrs:{color:"#80DEEA"}}),n("v-card-text",{domProps:{textContent:t._s(e.description)}})],1)],1)})),1)],1)],1)],1)],1)},r=[],i={name:"home",components:{},data:function(){return{messages:[{color:"blue",icon:"mdi-cube-send",name:"Proactive",excerpt:"click to see a brief description",description:"Ability to propose situations that can improve things in some way."},{color:"green",icon:"mdi-office-building",name:"Follow business rules",excerpt:"click to see a brief description",description:"Responsibility and commitment to understand the business rules and follow them."},{color:"purple",icon:"mdi-account-network",name:"Teamwork",excerpt:"click to see a brief description",description:"Ability to adapt, interact and mediate with work groups."}]}}},a=i,s=n("2877"),l=Object(s["a"])(a,o,r,!1,null,null,null);e["default"]=l.exports}});
//# sourceMappingURL=app.96e92858.js.map