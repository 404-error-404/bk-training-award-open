(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{272:function(t,n,e){"use strict";e.r(n);var a=e(273);var i=e.n(a);for(var s in a)if(s!=="default")(function(t){e.d(n,t,function(){return a[t]})})(s);n["default"]=i.a},273:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var a=e(242);var i={name:"message-list",components:{MessageCard:function t(){return e.e(24).then(e.bind(null,369))}},data:function t(){return{messageRemoteData:[],loading:false,pagination:{current:1,count:0,limit:10}}},computed:{messageData:function t(n){return n.messageRemoteData}},created:function t(){this.handleInit()},methods:{handleInit:function t(){this.handleGetPageData()},handleGetPageData:function t(){var n=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading){return}this.loading=true;return(0,a.getMessage)({page:e,size:i}).then(function(t){console.log(t)}).finally(function(t){n.loading=false})}}};n.default=i},274:function(t,n,e){},343:function(t,n,e){"use strict";e.r(n);var a=e(388);var i=e(272);for(var s in i)if(s!=="default")(function(t){e.d(n,t,function(){return i[t]})})(s);var r=e(344);var o=e(7);var u=Object(o["a"])(i["default"],a["a"],a["b"],false,null,"81aff700",null);n["default"]=u.exports},344:function(t,n,e){"use strict";var a=e(274);var i=e.n(a);var s=i.a},388:function(t,n,e){"use strict";var a=function(){var t=this;var n=t.$createElement;var e=t._self._c||n;return e("div",{staticClass:"message-table"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.messageData.length,expression:"messageData.length"},{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.loading,title:"请稍等,正在为您安放数据"},expression:"{ isLoading: loading ,title: '请稍等,正在为您安放数据' }"}],staticClass:"message-content"},t._l(t.messageData,function(t){return e("message-card",{key:t["id"],attrs:{message:t}})}),1),t._v(" "),e("empty",{directives:[{name:"show",rawName:"v-show",value:!t.messageData.length,expression:"!messageData.length"}]}),t._v(" "),e("bk-pagination",{attrs:{small:"",current:t.pagination.current,count:t.pagination.count,limit:t.pagination.limit},on:{"update:current":function(n){t.$set(t.pagination,"current",n)},"update:count":function(n){t.$set(t.pagination,"count",n)},"update:limit":function(n){t.$set(t.pagination,"limit",n)}}})],1)};var i=[];e.d(n,"a",function(){return a});e.d(n,"b",function(){return i})}}]);