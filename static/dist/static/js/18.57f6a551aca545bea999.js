(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{212:function(t,e,r){"use strict";var a=r(1);Object.defineProperty(e,"__esModule",{value:true});e.deleteAward=m;e.deleteRecord=f;e.getAppliedAwards=p;e.getAvailableAwards=s;e.getAwardById=w;e.getAwards=l;e.postAwards=c;e.postRecord=d;e.putAward=v;var n=a(r(3));var o=a(r(4));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function c(t){return o.default.post("awards/",t)}function l(t){var e=t.page,r=t.size;return o.default.get("awards/",{params:{page:e,size:r}})}function s(t){var e=t.page,r=t.size,a=t.award_status,n=t.group_id;return o.default.get("get_available_awards/",{params:{page:e,size:r,award_status:a,group_id:n}})}function p(t,e){return o.default.get("get_applyed_awards/",{params:{page:t,size:e}})}function d(t,e){return o.default.post("record/",u({is_draft:t},e))}function f(t){console.log(t);return o.default.put("record/",{id:t})}function m(t){var e=t.awardId;return o.default.delete("awards/",{data:{award_id:e}})}function v(t,e){var r=e.award_name,a=e.award_level,n=e.award_description,i=e.award_consultant,u=e.award_image,c=e.award_department_fullname,l=e.award_reviewers,s=e.start_time,p=e.end_time;return o.default.put("awards/",{award_id:t,award_name:r,award_level:a,award_description:n,award_consultant:i,award_image:u,award_department_fullname:c,award_reviewers:l,start_time:s,end_time:p})}function w(t){return o.default.get("/awards/".concat(t,"/"))}},314:function(t,e,r){"use strict";r.r(e);var a=r(315);var n=r.n(a);for(var o in a)if(o!=="default")(function(t){r.d(e,t,function(){return a[t]})})(o);e["default"]=n.a},315:function(t,e,r){"use strict";var a=r(1);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var n=a(r(3));var o=a(r(9));var i=a(r(10));var u=r(8);var c=r(212);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var p={name:"apply-form",components:{Uploader:function t(){return r.e(20).then(r.bind(null,371))}},inject:["awardDetail"],data:function t(e){return{applyForm:{application_reason:"",application_attachments:[]},applyFormRules:Object.freeze({application_reason:[{required:true,message:"请填写申请理由",trigger:"blur"}]})}},computed:{groupUsers:function t(e){var r;return(r=e.$http.cache.get(u.GROUP_USERS_KEYNAME))!==null&&r!==void 0?r:[]},award:function t(e){return e.awardDetail()}},created:function t(){this.handleInit()},methods:{handleInit:function t(){this.handleSetDefaultInfo()},handleSetDefaultInfo:function t(){},validator:function t(){var e;if(!((e=this.applyForm.application_attachments)!==null&&e!==void 0&&e.length)){this.messageWarn("请上传附件");throw new SyntaxError("请上传附件")}return this.$refs["apply-form"].validate()},handleToSaveApplyForm:function t(e){var r=this;return(0,i.default)(o.default.mark(function t(){return o.default.wrap(function t(a){while(1){switch(a.prev=a.next){case 0:a.next=2;return r.validator();case 2:r.handleToDealWidthApply(true,e).then(function(t){r.messageSuccess("保存草稿成功")});case 3:case"end":return a.stop()}}},t)}))()},handleToSendApplyForm:function t(e){var r=this;return(0,i.default)(o.default.mark(function t(){return o.default.wrap(function t(a){while(1){switch(a.prev=a.next){case 0:a.next=2;return r.validator();case 2:r.handleToDealWidthApply(false,e).then(function(t){r.messageSuccess("申请成功");return r.$router.back()});case 3:case"end":return a.stop()}}},t)}))()},handleToDealWidthApply:function t(e,r){return(0,c.postRecord)(e,s({award_department_id:this.award["award_department_id"],award_id:this.award["id"]},r))},handleOnlyGroup:function t(e){var r=e["departments"].map(function(t){return t["full_name"]});var a=this.$route.params["award_department_fullname"];return r.includes(a)}}};e.default=p},316:function(t,e,r){},367:function(t,e,r){"use strict";r.r(e);var a=r(407);var n=r(314);for(var o in n)if(o!=="default")(function(t){r.d(e,t,function(){return n[t]})})(o);var i=r(368);var u=r(7);var c=Object(u["a"])(n["default"],a["a"],a["b"],false,null,"9fc081b6",null);e["default"]=c.exports},368:function(t,e,r){"use strict";var a=r(316);var n=r.n(a);var o=n.a},407:function(t,e,r){"use strict";var a=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"apply-form-container"},[r("bk-divider",{attrs:{align:"center"}},[t._v("申请奖项")]),t._v(" "),r("bk-form",{ref:"apply-form",staticClass:"form",attrs:{"label-width":90,rules:t.applyFormRules,model:t.applyForm}},[false?undefined:t._e(),t._v(" "),r("bk-form-item",{attrs:{label:"申请理由",required:"true",property:"application_reason"}},[r("bk-input",{attrs:{placeholder:"请输入255字以内的申请理由",type:"textarea",rows:3,maxlength:255},model:{value:t.applyForm["application_reason"],callback:function(e){t.$set(t.applyForm,"application_reason",e)},expression:"applyForm['application_reason']"}})],1),t._v(" "),r("bk-form-item",{attrs:{label:"申请材料",required:"true"}},[r("Uploader",{attrs:{limit:2,readonly:false},model:{value:t.applyForm["application_attachments"],callback:function(e){t.$set(t.applyForm,"application_attachments",e)},expression:"applyForm['application_attachments']"}})],1)],1),t._v(" "),t.$route.query["type"]!=="approval"?r("div",{staticClass:"button-item"},[r("bk-button",{staticClass:"mr10",attrs:{theme:"warning","ext-cls":"button-item"},on:{click:function(e){t.$router.back()}}},[r("bk-icon",{attrs:{type:"minus-circle"}}),t._v(" "),r("span",[t._v("取消")])],1),t._v(" "),r("bk-button",{staticClass:"mr10",attrs:{theme:"primary","ext-cls":"button-item"},on:{click:function(e){t.handleToSaveApplyForm(t.applyForm)}}},[r("bk-icon",{attrs:{type:"save"}}),t._v(" "),r("span",[t._v("保存草稿")])],1),t._v(" "),r("bk-button",{staticClass:"mr10",attrs:{theme:"success","ext-cls":"button-item"},on:{click:function(e){t.handleToSendApplyForm(t.applyForm)}}},[r("bk-icon",{attrs:{type:"check-circle"}}),t._v(" "),r("span",[t._v("发起申请")])],1)],1):t._e()],1)};var n=[];r.d(e,"a",function(){return a});r.d(e,"b",function(){return n})}}]);