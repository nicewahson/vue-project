webpackJsonp([1],{13:function(t,e,n){"use strict";n.d(e,"e",function(){return u}),n.d(e,"f",function(){return p}),n.d(e,"d",function(){return d}),n.d(e,"a",function(){return f}),n.d(e,"c",function(){return m}),n.d(e,"b",function(){return v});var r=n(99),o=n.n(r),s=n(26),a=n.n(s),i=n(96),c=n.n(i),l="44b57d68-2d98-4d6e-bcab-474f17ad9573",u=function(t){return _("/accesstoken","POST",{accesstoken:l})},p=function(t){return!0},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _("/topics","GET",t)},f=function(t){return _("/topic/"+t,"GET")},m=function(t){return _("/topic/collect","POST",{topic_id:t,accesstoken:l})},v=function(t){return _("/user/"+t,"GET")},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t="/api"+t+"?";var r={method:e,headers:{"Content-Type":"application/json"}};if("GET"===e)for(var s in n)t+="&"+s+"="+n[s];return"POST"===e&&(r.body=c()(n)),new a.a(function(e,n){fetch(t,o()({},r)).then(function(t){if(200===t.status)return t.json();e(t.json())}).then(function(t){e(t)}).catch(function(t){e(t.message)})})}},157:function(t,e){},158:function(t,e){},159:function(t,e){},160:function(t,e){},161:function(t,e){},162:function(t,e){},163:function(t,e){},166:function(t,e,n){function r(t){n(160)}var o=n(10)(n(91),n(173),r,"data-v-678140c2",null);t.exports=o.exports},167:function(t,e,n){function r(t){n(163)}var o=n(10)(n(92),n(176),r,"data-v-e9b4c6b0",null);t.exports=o.exports},168:function(t,e,n){function r(t){n(158)}var o=n(10)(n(93),n(171),r,"data-v-375e4cbd",null);t.exports=o.exports},169:function(t,e,n){function r(t){n(159)}var o=n(10)(n(94),n(172),r,"data-v-408e26d4",null);t.exports=o.exports},170:function(t,e,n){function r(t){n(162)}var o=n(10)(n(95),n(175),r,"data-v-7ef7273e",null);t.exports=o.exports},171:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"form-fade",mode:"in-out"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.showForm,expression:"this.showForm"}],staticClass:"form-register"},[n("div",{staticClass:"register-page-tip"},[t._v("\n      welcome to Vuejs.com\n    ")]),t._v(" "),n("el-form",{ref:"form1",attrs:{model:t.form,rules:t.rules}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{placeholder:"用户名"},model:{value:t.form.username,callback:function(e){t.form.username=e},expression:"form.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{placeholder:"密码"},model:{value:t.form.password,callback:function(e){t.form.password=e},expression:"form.password"}})],1),t._v(" "),n("el-form-item",[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){t.submitForm("form1")}}},[t._v("登陆")])],1),t._v(" "),n("el-form-item",[n("p",{staticClass:"register-bot-tip"},[n("a",{on:{click:t.goToLogin}},[t._v("已有账号,去登陆")])])])],1)],1)])},staticRenderFns:[]}},172:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topics-top"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("主题")]),t._v(" "),n("el-breadcrumb-item",[t._v("主题详情")])],1)],1),t._v(" "),n("div",{staticStyle:{"max-width":"80%","padding-left":"30px"}},[n("div",{staticStyle:{"text-align":"center"}},[n("el-row",[n("el-col",{staticStyle:{"margin-left":"350px"},attrs:{span:12}},[n("h3",{staticStyle:{color:"#A8A8A8"}},[t._v(t._s(t.topicbody.title))])]),t._v(" "),n("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:4}},[t.collected?t._e():n("el-button",{attrs:{type:"primary"},on:{click:t.collect}},[t._v("加入收藏")]),t._v(" "),t.collected?n("el-button",{on:{click:t.cancelcollect}},[t._v("取消收藏")]):t._e()],1)],1),t._v(" "),n("p",{staticStyle:{"font-size":"14px"}},[t.topicbody.top?n("span",{staticClass:"z-top-but"},[t._v("置顶")]):t._e(),t._v("\n              创建于"+t._s(t.topicbody.create_at&&t.topicbody.create_at.split("T")[0])+"   \n              作者:"+t._s(t.topicbody.author&&t.topicbody.author.loginname)+"   \n              "+t._s(t.topicbody.visit_count)+"次浏览   \n              来自 "),n("span",{staticStyle:{color:"#8B1A1A"}},[t._v(t._s(t.topicbody.tab&&t.tabs[t.topicbody.tab]))])])],1),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.topicbody.content)}})]),t._v(" "),n("hr"),t._v(" "),n("div",{staticStyle:{"max-width":"80%","padding-left":"30px"}},[n("header",[t._v("\n          "+t._s(t.topicbody.reply_count)+"  回复\n      ")]),t._v(" "),n("ul",{staticStyle:{"list-style":"none"}},t._l(t.topicbody.replies,function(e,r){return n("li",[n("el-row",{class:{noborder:r!=t.topicbody.replies.length-1},staticStyle:{border:"1px solid #ccc"}},[n("img",{staticStyle:{width:"50px"},attrs:{src:"item.author.avatar_url",alt:"avatar"}}),t._v(" "),n("span",{staticStyle:{color:"#A0522D"}},[t._v(t._s(e.author.loginname)+" ")]),t._v(" "),n("span",{staticStyle:{color:"#08c"}},[t._v(t._s(r+1+"楼")+" \n                      "+t._s(e.create_at&&e.create_at.split("T")[0]))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(e.content)}})])],1)}))])])},staticRenderFns:[]}},173:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"login-page"},[n("transition",{attrs:{name:"form-fade",mode:"in-out"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}]},[n("div",{staticClass:"login-page-tip"},[t._v("\n          welcome to Vuejs.com\n        ")]),t._v(" "),n("el-form",{ref:"form1",attrs:{model:t.form,rules:t.rules}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{placeholder:"用户名"},model:{value:t.form.username,callback:function(e){t.form.username=e},expression:"form.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{placeholder:"密码"},model:{value:t.form.password,callback:function(e){t.form.password=e},expression:"form.password"}})],1),t._v(" "),n("el-form-item",[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){t.submitForm("form1")}}},[t._v("登陆")])],1),t._v(" "),n("el-form-item",[n("p",{staticClass:"login-bot-tip"},[n("a",{on:{click:t.goToRegister,goToLogin:t.goToRegister}},[t._v("尚无账号,去注册")])])])],1)],1)]),t._v(" "),n("Register",{attrs:{showForm:t.rshowForm}})],1)])},staticRenderFns:[]}},174:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("router-view")],1)},staticRenderFns:[]}},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topics-top"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("主题")]),t._v(" "),n("el-breadcrumb-item",[t._v("全部主题")])],1)],1),t._v(" "),n("div",{staticClass:"topics-bot"},[n("ul",t._l(t.topics,function(e,r){return n("li",[n("div",{staticClass:"ul-li-item"},[n("el-row",[n("el-col",{attrs:{span:2}},[t._v(t._s(e.reply_count+"/"+e.visit_count))]),t._v(" "),n("el-col",{staticStyle:{color:"#E9967A"},attrs:{span:2}},[t._v(t._s(t.getTabContent(e.tab)))]),t._v(" "),n("el-col",{staticStyle:{color:"#999999"},attrs:{span:10}},[n("a",{staticStyle:{cursor:"pointer"},on:{click:function(n){t.gotodetail(e.id)}}},[t._v(t._s(e.title))])]),t._v(" "),n("el-col",{staticStyle:{color:"#006699"},attrs:{span:6}},[t._v(t._s(e.create_at))]),t._v(" "),n("el-col",{staticStyle:{color:"#E5E5E5"},attrs:{span:4}},[t._v("最近回复 "+t._s(e.last_reply_at&&e.last_reply_at.split("T")[0]))])],1)],1)])})),t._v(" "),n("el-pagination",{staticStyle:{"margin-left":"40%"},attrs:{layout:"prev, pager, next",total:t.topiclength},on:{"current-change":t.handleCurrentChange}})],1)])},staticRenderFns:[]}},176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("el-row",{staticStyle:{height:"100%"}},[n("el-col",{staticClass:"left-menu",staticStyle:{position:"fixed"},attrs:{span:4}},[n("el-menu",{attrs:{"default-active":t.defaultActive,theme:"dark",router:""}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-document"}),t._v("主题")]),t._v(" "),n("el-menu-item",{attrs:{index:"topics"}},[t._v("全部主题")]),t._v(" "),n("el-menu-item",{attrs:{index:"topicdetail"}},[t._v("主题详情")]),t._v(" "),n("el-menu-item",{attrs:{index:"newtopic"}},[t._v("新建主题")])],2),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),t._v("消息")]),t._v(" "),n("el-menu-item",{attrs:{index:"collection"}},[t._v("全部消息")])],2),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-information"}),t._v("关于我的")]),t._v(" "),n("el-menu-item",{attrs:{index:"collection"}},[t._v("我的收藏")]),t._v(" "),n("el-menu-item",{attrs:{index:"aboutme"}},[t._v("个人信息")])],2)],1)],1),t._v(" "),n("el-col",{staticClass:"left-menu",attrs:{span:4}}),t._v(" "),n("el-col",{attrs:{span:20}},[n("router-view")],1)],1)],1)},staticRenderFns:[]}},62:function(t,e,n){"use strict";var r=n(2),o=n(177),s=n(167),a=n.n(s),i=n(166),c=n.n(i),l=n(170),u=n.n(l),p=n(169),d=n.n(p);r.default.use(o.a),e.a=new o.a({routes:[{path:"/",name:"main",component:c.a},{path:"/login",name:"Login",component:c.a},{path:"/index",name:"index",component:a.a,children:[{path:"/topics",component:u.a},{path:"/topicdetail",component:d.a}]}]})},63:function(t,e,n){"use strict";var r=n(15),o=n.n(r),s=n(14),a=n.n(s),i=n(2),c=n(179);i.default.use(c.a);var l={name:"Max"},u={showAllInfo:function(t){var e=this;t.commit;return a()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("action showall");case 1:case"end":return t.stop()}},t,e)}))()}},p={showAll:function(t,e){console.log(t.name)}};e.a=new c.a.Store({state:l,mutations:p,actions:u})},65:function(t,e){},66:function(t,e,n){function r(t){n(161)}var o=n(10)(n(90),n(174),r,null,null);t.exports=o.exports},89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=n(66),s=n.n(o),a=n(62),i=n(63),c=n(64),l=n.n(c),u=n(65);n.n(u);r.default.config.productionTip=!1,r.default.use(l.a),new r.default({el:"#app",router:a.a,store:i.a,template:"<App/>",components:{App:s.a}})},90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},91:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),o=n.n(r),s=n(14),a=n.n(s),i=n(13),c=n(157),l=(n.n(c),n(168)),u=n.n(l);e.default={name:"login",data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},showForm:!1}},computed:{rshowForm:function(){return!this.showForm}},mounted:function(){this.showForm=!0},components:{Register:u.a},methods:{submitForm:function(t){var e=this;return a()(o.a.mark(function r(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e.$refs[t].validate(function(){var t=a()(o.a.mark(function t(r){var s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(r),!r){t.next=8;break}return t.next=4,n.i(i.e)(e.form);case 4:s=t.sent,s.success?(e.$message.success("登陆成功"),console.log(e),sessionStorage.setItem("username",s.loginname),e.$router.push("index")):e.$message.error(s.error_msg),t.next=9;break;case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return r.stop()}},r,e)}))()},goToRegister:function(){this.showForm=!this.showForm}}}},92:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"message"}},computed:{defaultActive:function(){return console.log(this.$route.path.replace("/","")),this.$route.path.replace("/","")}}}},93:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(13);e.default={data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},rshowForm:!1}},props:["showForm"],methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(console.log(t),!t)return!1;n.i(r.f)(e.form),e.$message.success("注册成功")})},goToLogin:function(){this.$parent.goToRegister()}}}},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),o=n.n(r),s=n(26),a=n.n(s),i=n(14),c=n.n(i),l=n(98),u=n.n(l),p=n(13);e.default={name:"topicdetail",data:function(){return{topicbody:{},tabs:{all:"全部",good:"精华",weex:"weex",share:"分享",ask:"问答",job:"招聘"},collected:!1}},beforeCreate:function(){var t=this.$route.query;u()(t)[0]||this.$message.info("进入全部主题选择具体主题")},mounted:function(){var t=this;return c()(o.a.mark(function e(){var r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$route.query.id){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,a.a.all([n.i(p.a)(t.$route.query.id),n.i(p.b)(sessionStorage.username)]);case 4:r=e.sent,s=r[0].id,t.collected=t.isCollected(s,r[1].data),console.log(r,"========"),t.topicbody=r[0].data;case 9:case"end":return e.stop()}},e,t)}))()},methods:{collect:function(){var t=this;return c()(o.a.mark(function e(){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(p.c)(t.$route.query.id);case 2:r=e.sent,r.success?t.$message.success("收藏成功"):t.$message.error("收藏失败");case 4:case"end":return e.stop()}},e,t)}))()},isCollected:function(t,e){for(var n=0;n<e.collect_topics.length;n++)if(t===e.id)return!0;return!1},cancelcollect:function(){}}}},95:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),o=n.n(r),s=n(14),a=n.n(s),i=n(13);e.default={data:function(){return{topics:[],topiclength:0,tabs:{all:"全部",good:"精华",weex:"weex",share:"分享",ask:"问答",job:"招聘"},current:1}},beforeMount:function(){var t=this;return a()(o.a.mark(function e(){var r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("mounted"),e.next=3,n.i(i.d)();case 3:return r=e.sent,console.log(r),t.topiclength=r.data.length,e.next=8,n.i(i.d)({limit:10,page:t.current});case 8:s=e.sent,t.topics=s.data;case 10:case"end":return e.stop()}},e,t)}))()},methods:{getTabContent:function(t){return this.tabs[t]},gotodetail:function(t){this.$router.push({path:"topicdetail",query:{id:t}})},handleCurrentChange:function(t){var e=this;return a()(o.a.mark(function r(){var s;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t),r.next=3,n.i(i.d)({limit:10,page:t});case 3:s=r.sent,e.topics=s.data;case 5:case"end":return r.stop()}},r,e)}))()}}}}},[89]);
//# sourceMappingURL=app.12ef54721470dd2e6148.js.map