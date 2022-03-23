(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{194:function(t,e,r){"use strict";r.r(e);var a=r(383);var n=r(221);for(var u in n)if(u!=="default")(function(t){r.d(e,t,function(){return n[t]})})(u);var o=r(333);var s=r(18);var i=Object(s["a"])(n["default"],a["a"],a["b"],false,null,"03f824ee",null);e["default"]=i.exports},221:function(t,e,r){"use strict";r.r(e);var a=r(222);var n=r.n(a);for(var u in a)if(u!=="default")(function(t){r.d(e,t,function(){return a[t]})})(u);e["default"]=n.a},222:function(t,e,r){"use strict";var a=r(1);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var n=a(r(11));var u=a(r(12));var o=r(322);var s=r(19);var i=r(7);var l=a(r(189));var c=a(r(190));var f={name:i.GROUP_MANAGER_ROUTE_PATH,components:{Tabs:c.default,SelectSearch:l.default},mixins:[o.tableMixins],data:function t(e){return{remoteData:[],groupTabItems:[],groupCurIndexStatus:"",transferMyGroup:false,transferForm:{full_name:"",target_username:""},transferFormRules:Object.freeze({full_name:[{required:true,message:"请输入您想移交的小组名",trigger:"blur"},{message:"请正确输入您想移交的小组名",trigger:"blur",validator:function t(){return e.$bus.curGlobalSelectedGroup["full_name"]===e.transferForm["full_name"]}}],target_username:[{required:true,message:"请选择你想转交给的用户",trigger:"blur"}]}),isOutCurGroup:false,outCurGroupForm:{},outCurGroupFormRules:Object.freeze({full_name:[{required:true,message:"请输入您想退出的小组名",trigger:"blur"},{message:"请正确输入您想退出的小组名",trigger:"blur",validator:function t(){return e.$bus.curGlobalSelectedGroup["full_name"]===e.outCurGroupForm["full_name"]}}]}),isInviteUser:false,isInviteUserForm:{}}},computed:{tableData:function t(e){var r,a;var n=e.remoteData;return(r=n===null||n===void 0?void 0:(a=n.map)===null||a===void 0?void 0:a.call(n,function(t){var e=t["username"];var r=t["display_name"];return{display_name:t["display_name"],email:t["email"],phone:t["phone"],user_id:t["user_id"],username:t["username"],display_name_for_display:e+"("+r+")"}}))!==null&&r!==void 0?r:[]},inviteLink:function t(e){return"".concat(window.location.origin+window.location.pathname,"/invite?group_id=").concat(e.$bus.curGlobalGroupId)}},created:function t(){this.handleInit()},methods:{handleInit:function t(){return Promise.all([this.handleGetPageData()])},toRemoveUser:function t(e){var r=this;var a=e.username;var n={username:a,group_id:this.$bus.curGlobalGroupId};this.tableDataIsLoading=true;return(0,s.deleteGroupManage)(n).then(function(t){r.handleInit();r.messageSuccess("移除成功")})},handlePageChange:function t(e){this.pagination.page=e;return this.handleGetPageData(e,this.pagination.limit)},handlePageLimitChange:function t(e){this.pagination.page=1;this.pagination.limit=e;return this.handleGetPageData(this.pagination.page,e)},handleGetPageData:function t(){var e=this;var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.page;var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;this.tableDataIsLoading=true;var n=this.$bus.curGlobalGroupId;var u={groupId:n};if(!n)return;return(0,s.getGroupUser)(u).then(function(t){e.remoteData=t.data}).finally(function(t){e.tableDataIsLoading=false})},toJoinGroup:function t(){this.$bus.$emit(i.APP_GROUP_DIALOG,[true,true,"join"])},toCreateGroup:function t(){this.$bus.$emit(i.APP_GROUP_DIALOG,[true,true,"create"])},toTransferGroup:function t(){this.transferMyGroup=true},toInviteUser:function t(){},toOutCurGroup:function t(){this.isOutCurGroup=true},transferValidator:function t(){var e=this;return(0,u.default)(n.default.mark(function t(){var r;return n.default.wrap(function t(a){while(1){switch(a.prev=a.next){case 0:r=e.$refs["transfer-form"];return a.abrupt("return",r.validate());case 2:case"end":return a.stop()}}},t)}))()},handleTransferCurGroup:function t(){var e=this;return(0,u.default)(n.default.mark(function t(){var r,a,u;return n.default.wrap(function t(n){while(1){switch(n.prev=n.next){case 0:n.next=2;return e.transferValidator();case 2:r=n.sent;if(r){n.next=5;break}return n.abrupt("return");case 5:a=e.transferForm;n.next=8;return(0,s.putGroupManage)({group_id:e.$bus.curGlobalGroupId,username:a["target_username"]}).then(function(t){e.transferMyGroup=true;e.messageSuccess("转让组 "+e.$bus.curGlobalSelectedGroup["full_name"]+" 给"+a["target_username"]+"成功");setTimeout(function(){return e.$router.go(0)},100);return true});case 8:u=n.sent;return n.abrupt("return",u);case 10:case"end":return n.stop()}}},t)}))()},handleOutCurGroup:function t(){var e=this;var r=this.$bus.curGlobalGroupId;var a={group_id:r};return(0,s.deleteGroupUser)(a).then(function(t){e.messageSuccess("退出成功");e.isOutCurGroup=false;setTimeout(function(){return e.$router.go(0)},100);return true})}}};e.default=f},228:function(t,e,r){},333:function(t,e,r){"use strict";var a=r(228);var n=r.n(a);var u=n.a},383:function(t,e,r){"use strict";var a=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"group-manager-container"},[r("self-dialog",{on:{confirm:t.handleTransferCurGroup},model:{value:t.transferMyGroup,callback:function(e){t.transferMyGroup=e},expression:"transferMyGroup"}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("p",{staticStyle:{"font-size":"18px"}},[t._v("\n                移交小组\n                "),r("a",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.click",value:{content:"请再次输入小组名（"+t.$bus.curGlobalSelectedGroup["full_name"]+"）以确认移交",showOnInit:true,trigger:"click",theme:"light",placements:["top"]},expression:"{\n                    content: '请再次输入小组名（' + $bus.curGlobalSelectedGroup['full_name'] + '）以确认移交',\n                    showOnInit: true,\n                    trigger: 'click',\n                    theme: 'light',\n                    placements: ['top']\n                }",modifiers:{click:true}}],staticClass:"bk-text-primary mr15"},[r("i",{staticClass:"bk-icon icon-question-circle-shape"})])])]),t._v(" "),r("bk-form",{ref:"transfer-form",attrs:{"label-width":100,rules:t.transferFormRules,model:t.transferFormRules}},[r("bk-form-item",{attrs:{label:"确认小组名",required:true,property:"full_name"}},[r("bk-input",{attrs:{placeholder:"请再次输入小组名（"+t.$bus.curGlobalSelectedGroup["full_name"]+"）以确认移交"},on:{click:function(e){t.$refs["popover"].showHandler()}},model:{value:t.transferForm["full_name"],callback:function(e){t.$set(t.transferForm,"full_name",e)},expression:"transferForm['full_name']"}})],1),t._v(" "),r("bk-form-item",{attrs:{label:"移交对象",required:true,property:"target_username"}},[r("select-search",{attrs:{type:"self",data:t.tableData,"id-key":"username","display-key":"display_name_for_display",multiple:false,placeholder:"请选择组内成员转交权限",value:t.transferForm["target_username"]},on:{"update:value":function(e){t.$set(t.transferForm,"target_username",e)}}})],1)],1)],1),t._v(" "),r("self-dialog",{on:{confirm:t.handleOutCurGroup},model:{value:t.isOutCurGroup,callback:function(e){t.isOutCurGroup=e},expression:"isOutCurGroup"}},[r("bk-form",{attrs:{"label-width":100,rules:t.outCurGroupFormRules,model:t.outCurGroupForm}},[r("bk-form-item",{attrs:{label:"退出该小组",required:true}},[r("bk-input",{attrs:{placeholder:"请再次输入小组名（"+t.$bus.curGlobalSelectedGroup["full_name"]+"）以确认退出小组"},model:{value:t.outCurGroupForm["full_name"],callback:function(e){t.$set(t.outCurGroupForm,"full_name",e)},expression:"outCurGroupForm['full_name']"}})],1)],1)],1),t._v(" "),r("top-back"),t._v(" "),r("div",{staticClass:"controller-panel mt20 mb15"},[r("select-search",{staticStyle:{width:"calc(2*118px + 1*8px)","font-size":"15px"},attrs:{behavior:"simplicity","id-key":"group_id",type:"group",multiple:false,placeholder:"请选择需要查看的小组",clearable:false,value:t.$bus.curGlobalGroupId},on:{"update:value":function(e){t.$set(t.$bus,"curGlobalGroupId",e)},change:function(e){t.handleInit(e)}}}),t._v(" "),r("div",{staticClass:"button-panel"},[r("bk-button",{attrs:{theme:"success"},on:{click:function(e){t.toJoinGroup()}}},[t._v("加入小组")]),t._v(" "),r("bk-button",{attrs:{theme:"primary"},on:{click:function(e){t.toCreateGroup()}}},[t._v("创建小组")]),t._v(" "),r("bk-dropdown-menu",{ref:"dropdown"},[r("div",{staticClass:"dropdown-trigger-btn",attrs:{slot:"dropdown-trigger"},slot:"dropdown-trigger"},[r("bk-button",{attrs:{theme:"danger"}},[t._v("更多操作 "),r("i",{class:["bk-icon icon-angle-down"]})])],1),t._v(" "),r("ul",{staticClass:"more-action",attrs:{slot:"dropdown-content"},slot:"dropdown-content"},[t.$bus.isCurGroupAdmin?r("bk-button",{staticClass:"mb10",attrs:{text:true},on:{click:function(e){t.toTransferGroup()}}},[t._v("移交小组\n                    ")]):r("bk-button",{staticClass:"mb10",attrs:{text:true},on:{click:function(e){t.toOutCurGroup()}}},[t._v("退出小组\n                    ")])],1)])],1)],1),t._v(" "),r("tabs",[r("self-table",{attrs:{data:t.tableData,loading:t.tableDataIsLoading}},[r("bk-table-column",{attrs:{type:"index",label:"序号",width:80}}),t._v(" "),r("bk-table-column",{attrs:{label:"姓名",width:200},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row["display_name"]))])]}}])}),t._v(" "),r("bk-table-column",{attrs:{label:"用户名",width:200},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row["username"]))])]}}])}),t._v(" "),r("bk-table-column",{attrs:{label:"手机号"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row["phone"]))])]}}])}),t._v(" "),r("bk-table-column",{attrs:{label:"邮箱"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row["email"]))])]}}])}),t._v(" "),r("bk-table-column",{attrs:{label:"操作",fix:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("bk-popconfirm",{attrs:{trigger:"click",width:"280",disabled:!t.$bus.isCurGroupAdmin||e.row["username"]===t.$store.state.user["username"]},on:{confirm:function(r){t.toRemoveUser(e.row)}}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"demo-custom"},[r("i",{staticClass:"bk-icon icon-info-circle-shape pr5 content-icon",staticStyle:{color:"#cc1111"}}),t._v(" "),r("span",{staticClass:"content-text"},[t._v("注意: 将会移除该成员")])])]),t._v(" "),r("bk-button",{attrs:{theme:"primary",outline:true,text:true,disabled:!t.$bus.isCurGroupAdmin||e.row["username"]===t.$store.state.user["username"]}},[t._v("\n                            移除\n                        ")])],1)]}}])})],1)],1)],1)};var n=[];r.d(e,"a",function(){return a});r.d(e,"b",function(){return n})}}]);