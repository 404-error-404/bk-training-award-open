(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{299:function(t,n,a){"use strict";a.r(n);var e=a(300);var i=a.n(e);for(var r in e)if(r!=="default")(function(t){a.d(n,t,function(){return e[t]})})(r);n["default"]=i.a},300:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var e=a(210);var i=a(209);var r={name:"award-pending-approval",mixins:[e.tableMixins],data:function t(){return{pendingApprovalRemoteData:[]}},computed:{pendingApprovalData:function t(n){var a,e;return(a=(e=n.pendingApprovalRemoteData)===null||e===void 0?void 0:e.map(function(t){return t}))!==null&&a!==void 0?a:[]}},mounted:function t(){this.handleInit()},methods:{handleInit:function t(){Promise.all([this.handleGetPendingApproval()])},handleGetPendingApproval:function t(){var n=this;var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading)return;this.loading=true;var r={page:a,size:e,group_id:this.$bus.curGlobalGroupId,approval_status:1};return(0,i.getAwardApproval)(r).then(function(t){var a=t.data;n.pagination.count=a.count;n.pendingApprovalRemoteData=a.results}).finally(function(t){n.loading=false})},handleToGetDetail:function t(){},handleToRefundApplication:function t(){},handleToEditDraft:function t(){}}};n.default=r},367:function(t,n,a){"use strict";a.r(n);var e=a(413);var i=a(299);for(var r in i)if(r!=="default")(function(t){a.d(n,t,function(){return i[t]})})(r);var o=a(18);var l=Object(o["a"])(i["default"],e["a"],e["b"],false,null,null,null);n["default"]=l.exports},413:function(t,n,a){"use strict";var e=function(){var t=this;var n=t.$createElement;var a=t._self._c||n;return a("self-table",{attrs:{data:t.pendingApprovalData,pagination:t.pagination,loading:t.loading},on:{"update:pagination":function(n){t.pagination=n},"page-change":function(n){t.handleInit()}}},[a("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),t._v(" "),a("bk-table-column",{attrs:{label:"奖项名称",prop:"ip"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请开始时间",prop:"source"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请截止时间",prop:"status"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请人",prop:"create_time"}}),t._v(" "),a("bk-table-column",{attrs:{label:"奖项顾问",prop:"create_time"}}),t._v(" "),a("bk-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:true},on:{click:function(a){t.handleToGetDetail(n.row)}}},[t._v(" 查看 ")]),t._v(" "),a("bk-button",{staticClass:"mr10 ml10",attrs:{theme:"success",text:true},on:{click:function(a){t.handleToRefundApplication(n.row)}}},[t._v("前往审批")])]}}])})],1)};var i=[];a.d(n,"a",function(){return e});a.d(n,"b",function(){return i})}}]);