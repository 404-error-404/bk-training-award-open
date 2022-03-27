(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{194:function(e,t,r){"use strict";r.r(t);var a=r(379);var u=r(220);for(var n in u)if(n!=="default")(function(e){r.d(t,e,function(){return u[e]})})(n);var o=r(330);var s=r(18);var l=Object(s["a"])(u["default"],a["a"],a["b"],false,null,"5a52d1b0",null);t["default"]=l.exports},220:function(e,t,r){"use strict";r.r(t);var a=r(221);var u=r.n(a);for(var n in a)if(n!=="default")(function(e){r.d(t,e,function(){return a[e]})})(n);t["default"]=u.a},221:function(e,t,r){"use strict";var a=r(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var u=a(r(11));var n=a(r(12));var o=r(208);var s=r(19);var l=r(7);var i=r(151);var c={name:l.GROUP_MANAGER_ROUTE_PATH,mixins:[o.tableMixins],data:function e(t){return{remoteData:[],groupTabItems:[],groupCurIndexStatus:"",transferMyGroup:false,transferForm:{full_name:"",target_username:""},transferFormRules:Object.freeze({full_name:[{required:true,message:"请输入您想移交的小组名",trigger:"blur"},{message:"请正确输入您想移交的小组名",trigger:"blur",validator:function e(){return t.$bus.curGlobalSelectedGroup["full_name"]===t.transferForm["full_name"]}}],target_username:[{required:true,message:"请选择你想转交给的用户",trigger:"blur"}]}),isOutCurGroup:false,outCurGroupForm:{},outCurGroupFormRules:Object.freeze({full_name:[{required:true,message:"请输入您想退出的小组名",trigger:"blur"},{message:"请正确输入您想退出的小组名",trigger:"blur",validator:function e(){return t.$bus.curGlobalSelectedGroup["full_name"]===t.outCurGroupForm["full_name"]}}]}),isInviteUser:false,isInviteUserForm:{}}},computed:{tableData:function e(t){var r,a;var u=t.remoteData;return(r=u===null||u===void 0?void 0:(a=u.map)===null||a===void 0?void 0:a.call(u,function(e){var t=e["username"];var r=e["display_name"];return{display_name:e["display_name"],email:e["email"],phone:e["phone"],user_id:e["user_id"],username:e["username"],display_name_for_display:(0,i.formatUsernameAndDisplayName)(t,r)}}))!==null&&r!==void 0?r:[]}},created:function e(){this.handleInit()},methods:{handleInit:function e(){return Promise.all([this.handleGetPageData()])},toRemoveUser:function e(t){var r=this;var a=t.username;var u={username:a,group_id:this.$bus.curGlobalGroupId};this.loading=true;return(0,s.deleteGroupManage)(u).then(function(e){r.handleInit();r.messageSuccess("移除成功")})},handleGetPageData:function e(){var t=this;if(this.loading)return;this.loading=true;var r=this.$bus.curGlobalGroupId;var a={groupId:r};if(!r)return;return(0,s.getGroupUser)(a).then(function(e){t.remoteData=e.data}).finally(function(e){t.loading=false})},toJoinGroup:function e(){this.$bus.$emit(l.APP_GROUP_DIALOG,[true,true,"join"])},toCreateGroup:function e(){this.$bus.$emit(l.APP_GROUP_DIALOG,[true,true,"create"])},toTransferGroup:function e(){this.transferMyGroup=true},toInviteUser:function e(){},toOutCurGroup:function e(){this.isOutCurGroup=true},transferValidator:function e(){var t=this;return(0,n.default)(u.default.mark(function e(){var r;return u.default.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:r=t.$refs["transfer-form"];return a.abrupt("return",r.validate());case 2:case"end":return a.stop()}}},e)}))()},handleTransferCurGroup:function e(){var t=this;return(0,n.default)(u.default.mark(function e(){var r,a,n;return u.default.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:u.next=2;return t.transferValidator();case 2:r=u.sent;if(r){u.next=5;break}return u.abrupt("return");case 5:a=t.transferForm;u.next=8;return(0,s.putGroupManage)({group_id:t.$bus.curGlobalGroupId,username:a["target_username"]}).then(function(e){t.transferMyGroup=true;t.messageSuccess("转让组 "+t.$bus.curGlobalSelectedGroup["full_name"]+" 给"+a["target_username"]+"成功");setTimeout(function(){return t.$router.go(0)},100);return true});case 8:n=u.sent;return u.abrupt("return",n);case 10:case"end":return u.stop()}}},e)}))()},handleOutCurGroup:function e(){var t=this;var r=this.$bus.curGlobalGroupId;var a={group_id:r};return(0,s.deleteGroupUser)(a).then(function(e){t.messageSuccess("退出成功");t.isOutCurGroup=false;setTimeout(function(){return t.$router.go(0)},100);return true})}}};t.default=c},222:function(e,t,r){},330:function(e,t,r){"use strict";var a=r(222);var u=r.n(a);var n=u.a},379:function(e,t,r){"use strict";var a=function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("div",{staticClass:"group-manager-container"},[r("self-dialog",{on:{confirm:e.handleTransferCurGroup},model:{value:e.transferMyGroup,callback:function(t){e.transferMyGroup=t},expression:"transferMyGroup"}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("p",{staticStyle:{"font-size":"18px"}},[e._v("\n                移交小组\n            ")]),e._v(" "),r("p",{staticStyle:{"font-size":"12px"}},[e._v(" 请再次输入小组名 "),r("span",{directives:[{name:"bk-copy",rawName:"v-bk-copy",value:e.$bus.curGlobalSelectedGroup["full_name"],expression:"$bus.curGlobalSelectedGroup['full_name']"}],staticClass:"bk-text-danger"},[e._v(e._s(e.$bus.curGlobalSelectedGroup["full_name"]))]),e._v(" 以确认移交")])]),e._v(" "),r("bk-form",{ref:"transfer-form",attrs:{"label-width":100,rules:e.transferFormRules,model:e.transferFormRules}},[r("bk-form-item",{attrs:{label:"确认小组名",required:true,property:"full_name"}},[r("bk-input",{attrs:{placeholder:e.$bus.curGlobalSelectedGroup["full_name"]},on:{click:function(t){e.$refs["popover"].showHandler()}},model:{value:e.transferForm["full_name"],callback:function(t){e.$set(e.transferForm,"full_name",t)},expression:"transferForm['full_name']"}})],1),e._v(" "),r("bk-form-item",{attrs:{label:"移交对象",required:true,property:"target_username"}},[r("select-search",{attrs:{type:"self",data:e.tableData,"id-key":"username","display-key":"display_name_for_display",multiple:false,placeholder:"请选择组内成员转交权限",value:e.transferForm["target_username"]},on:{"update:value":function(t){e.$set(e.transferForm,"target_username",t)}}})],1)],1)],1),e._v(" "),r("self-dialog",{on:{confirm:e.handleOutCurGroup},model:{value:e.isOutCurGroup,callback:function(t){e.isOutCurGroup=t},expression:"isOutCurGroup"}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("p",{staticStyle:{"font-size":"18px"}},[e._v("\n                退出小组\n            ")]),e._v(" "),r("p",{staticStyle:{"font-size":"12px"}},[e._v("\n                请再次输入小组名\n                "),r("span",{directives:[{name:"bk-copy",rawName:"v-bk-copy",value:e.$bus.curGlobalSelectedGroup["full_name"],expression:"$bus.curGlobalSelectedGroup['full_name']"}],staticClass:"bk-text-danger"},[e._v("\n                    "+e._s(e.$bus.curGlobalSelectedGroup["full_name"])+"\n                ")]),e._v("\n                以确认移交\n            ")])]),e._v(" "),r("bk-form",{attrs:{"label-width":100,rules:e.outCurGroupFormRules,model:e.outCurGroupForm}},[r("bk-form-item",{attrs:{label:"退出该小组",required:true}},[r("bk-input",{attrs:{placeholder:"请再次输入小组名（"+e.$bus.curGlobalSelectedGroup["full_name"]+"）以确认退出小组"},model:{value:e.outCurGroupForm["full_name"],callback:function(t){e.$set(e.outCurGroupForm,"full_name",t)},expression:"outCurGroupForm['full_name']"}})],1)],1)],1),e._v(" "),r("top-back"),e._v(" "),r("div",{staticClass:"controller-panel mt20 mb15"},[r("select-search",{staticStyle:{width:"calc(2*118px + 1*8px)","font-size":"15px"},attrs:{behavior:"simplicity","id-key":"group_id",type:"group",multiple:false,placeholder:"请选择需要查看的小组",clearable:false,value:e.$bus.curGlobalGroupId},on:{"update:value":function(t){e.$set(e.$bus,"curGlobalGroupId",t)},change:function(t){e.handleInit(t)}}}),e._v(" "),r("div",{staticClass:"button-panel"},[r("bk-button",{attrs:{theme:"success"},on:{click:function(t){e.toJoinGroup()}}},[e._v("加入小组")]),e._v(" "),r("bk-button",{attrs:{theme:"primary"},on:{click:function(t){e.toCreateGroup()}}},[e._v("创建小组")]),e._v(" "),r("bk-dropdown-menu",{ref:"dropdown"},[r("div",{staticClass:"dropdown-trigger-btn",attrs:{slot:"dropdown-trigger"},slot:"dropdown-trigger"},[r("bk-button",{attrs:{theme:"danger"}},[e._v("更多操作 "),r("i",{class:["bk-icon icon-angle-down"]})])],1),e._v(" "),r("ul",{staticClass:"more-action",attrs:{slot:"dropdown-content"},slot:"dropdown-content"},[e.$bus.isCurGroupAdmin?r("bk-button",{staticClass:"mb10",attrs:{text:true},on:{click:function(t){e.toTransferGroup()}}},[e._v("移交小组\n                    ")]):r("bk-button",{staticClass:"mb10",attrs:{text:true},on:{click:function(t){e.toOutCurGroup()}}},[e._v("退出小组\n                    ")])],1)])],1)],1),e._v(" "),r("tabs",[r("self-table",{attrs:{data:e.tableData,loading:e.loading}},[r("bk-table-column",{attrs:{type:"index",label:"序号",width:80}}),e._v(" "),r("bk-table-column",{attrs:{label:"姓名",width:200},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row["display_name"]))])]}}])}),e._v(" "),r("bk-table-column",{attrs:{label:"用户名",width:200},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row["username"]))])]}}])}),e._v(" "),r("bk-table-column",{attrs:{label:"手机号"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row["phone"]))])]}}])}),e._v(" "),r("bk-table-column",{attrs:{label:"邮箱"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row["email"]))])]}}])}),e._v(" "),r("bk-table-column",{attrs:{label:"操作",fix:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("bk-popconfirm",{attrs:{trigger:"click",width:"280",disabled:!e.$bus.isCurGroupAdmin||t.row["username"]===e.$store.state.user["username"]},on:{confirm:function(r){e.toRemoveUser(t.row)}}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"demo-custom"},[r("i",{staticClass:"bk-icon icon-info-circle-shape pr5 content-icon",staticStyle:{color:"#cc1111"}}),e._v(" "),r("span",{staticClass:"content-text"},[e._v("注意: 将会移除该成员")])])]),e._v(" "),r("bk-button",{attrs:{theme:"primary",outline:true,text:true,disabled:!e.$bus.isCurGroupAdmin||t.row["username"]===e.$store.state.user["username"]}},[e._v("\n                            移除\n                        ")])],1)]}}])})],1)],1)],1)};var u=[];r.d(t,"a",function(){return a});r.d(t,"b",function(){return u})}}]);