(function(t){function a(a){for(var o,r,s=a[0],l=a[1],p=a[2],c=0,u=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);m&&m(a);while(u.length)u.shift()();return n.push.apply(n,p||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],o=!0,s=1;s<e.length;s++){var l=e[s];0!==i[l]&&(o=!1)}o&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var o={},i={app:0},n=[];function r(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)r.d(e,o,function(a){return t[a]}.bind(null,o));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var p=0;p<s.length;p++)a(s[p]);var m=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);var o=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout")},n=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"inspire"}},[e("v-content",[e("v-container",{staticClass:"fill-width",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[e("v-toolbar-title",[t._v("Brand Suggestion")]),e("div",{staticClass:"flex-grow-1"})],1),e("v-card-text",[e("v-form",[e("v-text-field",{attrs:{label:"Some text..",name:"text",type:"text"},model:{value:t.input_text,callback:function(a){t.input_text=a},expression:"input_text"}})],1)],1),e("v-card-actions",[e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{text:"",icon:"",color:"pink"},on:{click:t.fetch_data}},[e("v-icon",[t._v("mdi-heart")])],1),e("div",{staticClass:"flex-grow-1"})],1)],1)],1)],1)],1),e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.items,(function(a){return e("v-col",{attrs:{sm:"6",md:"3"}},[e("v-card",[e("v-img",{attrs:{"max-width":"300px",src:a.img}}),e("v-card-title",[t._v(t._s(a.name)+" - "+t._s(a.prob))]),e("v-card-actions",[e("v-btn",{attrs:{target:"_blank",text:"",icon:"",color:"blue",href:a.url}},[e("v-icon",[t._v("mdi-tab")])],1)],1)],1)],1)})),1)],1)],1)],1)},s=[],l=e("bc3a"),p=e.n(l),m={props:{source:String},data:()=>({input_text:"",drawer:null,items:[{name:"Amazon",url:"https://amazon.com",prob:.87,img:"https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"},{name:"Ebay",url:"https://ebay.com",prob:.1,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1920px-EBay_logo.svg.png"},{name:"The Guardian",url:"https://theguardian.co.uk",prob:.05,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/1920px-The_Guardian_2018.svg.png"}],brands_dict:{amazon:{url:"https://amazon.com",name:"Amazon",img:"https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB"},ebay:{url:"https://ebay.com",name:"Ebay",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1920px-EBay_logo.svg.png"},theguardian:{url:"https://theguardian.co.uk",name:"The Guardian",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/1920px-The_Guardian_2018.svg.png"},walmart:{url:"https://www.walmart.com",name:"Walmart",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1920px-Walmart_logo.svg.png"},bbc:{url:"https://www.bbc.com",name:"BBC",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/BBC.svg/1920px-BBC.svg.png"},mtv:{url:"https://mtv.com",name:"MTV",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/MTV_Logo_2010.svg/1920px-MTV_Logo_2010.svg.png"},verizon:{url:"https://www.verizonwireless.com",name:"Verizon Wireless",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Verizon_2015_logo_-vector.svg/1920px-Verizon_2015_logo_-vector.svg.png"},dell:{url:"https://www.dell.com",name:"Dell",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1024px-Dell_Logo.svg.png"},nike:{url:"https://www.nike.com",name:"Nike",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1920px-Logo_NIKE.svg.png"},target:{url:"https://www.target.com",name:"Target",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/800px-Target_logo.svg.png"},nobrand:{url:"https://example.com",name:"Probably .. nothing?",img:"https://images.unsplash.com/photo-1564067361310-5d4c3a5c7643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}}}),methods:{fetch_data:function(){const t=this;console.log(this.input_text),p.a.post("https://cors-anywhere.herokuapp.com/http://34.70.152.7:5000/predict",{string:this.input_text},{headers:{"Content-Type":"application/json"}}).then((function(a){let e=0;for(let i of a.data){if(e>=3)break;var o=i[1];o=Math.floor(100*o)/100,o=o.toFixed(2),t.$set(t.items,e,{name:t.brands_dict[i[0]].name,url:t.brands_dict[i[0]].url,img:t.brands_dict[i[0]].img,prob:o}),e+=1}})).catch((function(t){console.log(t)}))}}},c=m,u=e("2877"),d=e("6544"),g=e.n(d),v=e("7496"),h=e("8336"),b=e("b0af"),f=e("99d9"),_=e("62ad"),w=e("a523"),x=e("a75b"),k=e("4bd4"),y=e("132d"),T=e("adda"),V=e("0fd9"),C=e("8654"),j=e("71d9"),B=e("2a7f"),z=Object(u["a"])(c,r,s,!1,null,null,null),O=z.exports;g()(z,{VApp:v["a"],VBtn:h["a"],VCard:b["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:_["a"],VContainer:w["a"],VContent:x["a"],VForm:k["a"],VIcon:y["a"],VImg:T["a"],VRow:V["a"],VTextField:C["a"],VToolbar:j["a"],VToolbarTitle:B["a"]});var E={name:"App",components:{Layout:O},data:()=>({})},M=E,G=Object(u["a"])(M,i,n,!1,null,null,null),L=G.exports,P=e("f309");e("5363");o["a"].use(P["a"]);var S=new P["a"]({icons:{iconfont:"mdi"}});o["a"].config.productionTip=!1,new o["a"]({vuetify:S,render:t=>t(L)}).$mount("#app")}});
//# sourceMappingURL=app.566ca855.js.map