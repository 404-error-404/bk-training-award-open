(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{214:function(a,t,n){"use strict";var e=n(1);Object.defineProperty(t,"__esModule",{value:true});t.getAwardApproval=o;t.getRecord=i;t.postApproval=u;var r=e(n(4));function o(a){var t=a.page,n=a.size,e=a.group_id,o=a.approval_status;return r.default.get("/approval/",{params:{page:t,size:n,group_id:e,approval_status:o}})}function i(a){var t=a.page,n=a.size,e=a.group_id,o=a.apply_status;return r.default.get("record/",{params:{page:t,size:n,group_id:e,apply_status:o}})}function u(a){var t=a.id,n=a.action,e=a.approval_text;return r.default.post("/approval/",{id:t,action:n,approval_text:e})}},277:function(a,t,n){"use strict";n.r(t);var e=n(278);var r=n.n(e);for(var o in e)if(o!=="default")(function(a){n.d(t,a,function(){return e[a]})})(o);t["default"]=r.a},278:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var e=n(8);var r=n(214);var o={name:"award-approval",data:function a(){return{awardApprovalRemoteList:[],loading:false,pagination:{current:1,count:0,limit:10}}},computed:{awardApprovalList:function a(t){return t.awardApprovalList}},created:function a(){this.handleInit()},methods:{toApproval:function a(t){this.$router.push({name:e.DETAIL_ROUTE_PATH,query:{type:"approval"}})},handleInit:function a(){this.handleGetPageData(this.pagination)},handleGetPageData:function a(t){var n=this;var o=t.current,i=t.limit;if(this.loading){return}this.loading=true;return(0,r.getAwardApproval)({page:o,size:i,approval_status:e.PENDING_APPROVAL}).then(function(a){var t=a.data;n.pagination.count=t===null||t===void 0?void 0:t.count;n.awardApprovalRemoteList=t===null||t===void 0?void 0:t.result}).finally(function(a){n.loading=false})}}};t.default=o},346:function(a,t,n){"use strict";n.r(t);var e=n(390);var r=n(277);for(var o in r)if(o!=="default")(function(a){n.d(t,a,function(){return r[a]})})(o);var i=n(7);var u=Object(i["a"])(r["default"],e["a"],e["b"],false,null,null,null);t["default"]=u.exports},390:function(a,t,n){"use strict";var e=function(){var a=this;var t=a.$createElement;var n=a._self._c||t;return n("self-table",{attrs:{data:a.awardApprovalRemoteList,pagination:a.pagination,loading:a.loading},on:{"update:pagination":function(t){a.pagination=t},"page-change":a.handleGetPageData}},[n("bk-table-column",{attrs:{label:"序列",width:"60"}}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项名称"}}),a._v(" "),n("bk-table-column",{attrs:{label:"所属小组"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请人"}}),a._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("bk-button",{attrs:{text:true},on:{click:function(n){a.toApproval(t.row)}}},[a._v("\n                前往审批\n            ")])]}}])})],1)};var r=[];n.d(t,"a",function(){return e});n.d(t,"b",function(){return r})}}]);