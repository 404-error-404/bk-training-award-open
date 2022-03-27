(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{298:function(a,t,n){"use strict";n.r(t);var e=n(299);var r=n.n(e);for(var i in e)if(i!=="default")(function(a){n.d(t,a,function(){return e[a]})})(i);t["default"]=r.a},299:function(a,t,n){"use strict";var e=n(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=e(n(3));var i=n(208);var o=n(207);var l=n(13);var d=n(14);var p={name:"award-pending-approval",mixins:[i.tableMixins],data:function a(){return{pendingApprovalRemoteData:[]}},computed:{pendingApprovalData:function a(t){var n,e;return(n=(e=t.pendingApprovalRemoteData)===null||e===void 0?void 0:e.map(function(a){var t;var n=a["award_info"];var e=(t=a.application_users)!==null&&t!==void 0?t:[];var r=e[0];return{approval_id:a["id"],award_id:a["award_id"],award_department_id:a["award_department_id"],application_time:(0,d.formatDate)(a["application_time"]),application_reason:a["application_reason"],application_user:(0,d.formatUsernameAndDisplayName)(r===null||r===void 0?void 0:r["username"],r===null||r===void 0?void 0:r["display_name"]),application_users:a["application_users"],application_attachments:a["application_attachments"],approval_state:a["approval_state"],approval_turn:a["approval_turn"]+1,approval_time:a["approval_status"],approval_text:a["approval_text"],award_name:n["award_name"],award_description:n["award_description"],award_department_fullname:n["award_department_fullname"],start_time:(0,d.formatDate)(n["start_time"]),end_time:(0,d.formatDate)(n["end_time"]),create_time:(0,d.formatDate)(n["create_time"]),update_time:(0,d.formatDate)(n["update_time"]),award_consultant:n["award_consultant"],award_consultant_displayname:n["award_consultant"],award_consultant_display_name_for_display:(0,d.formatUsernameAndDisplayName)(n["award_consultant"],n["award_consultant"])}}))!==null&&n!==void 0?n:[]}},created:function a(){this.handleInit();(0,d.setTitle)("奖项待审批")},methods:{handleInit:function a(){Promise.all([this.handleGetPendingApproval()])},handleGetPendingApproval:function a(){var t=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading)return;this.loading=true;var r={page:n,size:e,group_id:this.$bus.curGlobalGroupId,approval_status:l.MYCHECK_AWARD_PENGDING_APPROVAL};return(0,o.getAwardApproval)(r).then(function(a){var n,e;var r=a.data;t.pagination.count=(n=r===null||r===void 0?void 0:r.count)!==null&&n!==void 0?n:0;t.pendingApprovalRemoteData=(e=r===null||r===void 0?void 0:r.results)!==null&&e!==void 0?e:[]}).finally(function(a){t.loading=false})},handleToRefundApplication:function a(t){var n;this.$router.push({name:l.DETAIL_ROUTE_PATH,query:(n={},(0,r.default)(n,l.DETAIL_TYPE_KEYNAME,l.DETAIL_APPROVAL),(0,r.default)(n,"record_id",t["approval_id"]),(0,r.default)(n,"award_id",t["award_id"]),(0,r.default)(n,"group_id",t["award_department_id"]),n)})},handleToEditDraft:function a(){}}};t.default=p},364:function(a,t,n){"use strict";n.r(t);var e=n(406);var r=n(298);for(var i in r)if(i!=="default")(function(a){n.d(t,a,function(){return r[a]})})(i);var o=n(18);var l=Object(o["a"])(r["default"],e["a"],e["b"],false,null,null,null);t["default"]=l.exports},406:function(a,t,n){"use strict";var e=function(){var a=this;var t=a.$createElement;var n=a._self._c||t;return n("self-table",{attrs:{data:a.pendingApprovalData,pagination:a.pagination,loading:a.loading},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[n("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项名称",prop:"award_name"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["award_name"]}},[a._v("\n                "+a._s(t.row["award_name"])+"\n            ")])]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"申请人",prop:"application_user"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请时间",prop:"application_time"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请理由"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["application_reason"]}},[a._v("\n                "+a._s(t.row["application_reason"])+"\n            ")])]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"当前审批轮次"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{directives:[{name:"bk-overflow-tips",rawName:"v-bk-overflow-tips"}]},[a._v("\n                第 "+a._s(t.row["approval_turn"])+" 轮\n            ")])]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项顾问",prop:"award_consultant_display_name_for_display"}}),a._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("bk-button",{staticClass:"mr10 ml10",attrs:{theme:"primary",text:true},on:{click:function(n){a.handleToRefundApplication(t.row)}}},[a._v("前往审批")])]}}])})],1)};var r=[];n.d(t,"a",function(){return e});n.d(t,"b",function(){return r})}}]);