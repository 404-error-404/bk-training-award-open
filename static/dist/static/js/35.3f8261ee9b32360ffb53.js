(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{272:function(t,a,n){"use strict";n.r(a);var e=n(273);var r=n.n(e);for(var i in e)if(i!=="default")(function(t){n.d(a,t,function(){return e[t]})})(i);a["default"]=r.a},273:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:true});a.default=void 0;var e=n(7);var r=n(209);var i={name:"award-approval",data:function t(){return{awardApprovalRemoteList:[],loading:false,pagination:{current:1,count:0,limit:10}}},computed:{awardApprovalList:function t(a){return a.awardApprovalList}},created:function t(){this.handleInit()},methods:{toApproval:function t(a){this.$router.push({name:e.DETAIL_ROUTE_PATH,query:{type:"approval"}})},handleInit:function t(){this.handleGetPageData(this.pagination)},handleGetPageData:function t(a){var n=this;var i=a.current,o=a.limit;if(this.loading){return}this.loading=true;return(0,r.getAwardApproval)({page:i,size:o,approval_status:e.MYAPPLY_PENDING_APPLY}).then(function(t){var a=t.data;n.pagination.count=a===null||a===void 0?void 0:a.count;n.awardApprovalRemoteList=a===null||a===void 0?void 0:a.result}).finally(function(t){n.loading=false})}}};a.default=i},348:function(t,a,n){"use strict";n.r(a);var e=n(395);var r=n(272);for(var i in r)if(i!=="default")(function(t){n.d(a,t,function(){return r[t]})})(i);var o=n(18);var l=Object(o["a"])(r["default"],e["a"],e["b"],false,null,null,null);a["default"]=l.exports},395:function(t,a,n){"use strict";var e=function(){var t=this;var a=t.$createElement;var n=t._self._c||a;return n("self-table",{attrs:{data:t.awardApprovalRemoteList,pagination:t.pagination,loading:t.loading},on:{"update:pagination":function(a){t.pagination=a},"page-change":t.handleGetPageData}},[n("bk-table-column",{attrs:{label:"序列",width:"60"}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项名称"}}),t._v(" "),n("bk-table-column",{attrs:{label:"所属小组"}}),t._v(" "),n("bk-table-column",{attrs:{label:"申请人"}}),t._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("bk-button",{attrs:{text:true},on:{click:function(n){t.toApproval(a.row)}}},[t._v("\n                前往审批\n            ")])]}}])})],1)};var r=[];n.d(a,"a",function(){return e});n.d(a,"b",function(){return r})}}]);