(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{117:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),c=n.n(l),o=(n(92),n(31)),u=n(7),i=n.n(u),s=n(16),m=n(17),d=n(74),f=n.n(d),p=n(18),E=function(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),r=n[0],l=n[1];return{type:e,value:r,onChange:function(e){l(e.target.value),console.log(e.target.value)}}},v=n(77),g=n(147),b=n(160),h=n(148),y=n(149),w=n(150),O=n(51),k=n.n(O),j=n(50),S=n.n(j),x=function(e){var t=e.user,n=e.blog,a=e.id,l=e.onUpdate,c=e.onDelete,o=e.page,u=E("text"),i=function(){n.likes++,l(n,a,"like")},s=function(){window.confirm("Remove blog: ".concat(n.title," by ").concat(n.author))&&c(n,a)};return!0===o?r.a.createElement(v.a,{elevation:3,style:{padding:30}},r.a.createElement("div",{className:"blog"},r.a.createElement("h1",null,n.title," - ",n.author),"link:  ",r.a.createElement("a",{href:n.url},n.url),r.a.createElement("br",null),"likes: ",r.a.createElement("span",{className:"blue"},n.likes)," \xa0",r.a.createElement(g.a,{variant:"outlined",color:"primary",size:"small",startIcon:r.a.createElement(S.a,null),onClick:function(){return i()}},"like"),r.a.createElement("br",null),"added by: ",n.user.username,r.a.createElement("br",null),null===t||t.username===n.user.username?r.a.createElement(g.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement(k.a,null),onClick:function(){return s()}},"delete"):""),r.a.createElement("form",{onSubmit:function(){n.comments=[].concat(Object(p.a)(n.comments),[u.value]),l(n,a,"comment")}},r.a.createElement(b.a,Object.assign({id:"comment",fullWidth:!0,label:"Write a new comment",variant:"outlined"},u)),r.a.createElement(g.a,{variant:"contained",color:"primary",type:"submit"},"add comment")),r.a.createElement("h3",null,"comments:"),r.a.createElement("ul",null,n.comments.map((function(e,t){return r.a.createElement("li",{key:t},e)})))):r.a.createElement(h.a,null,r.a.createElement(y.a,null,r.a.createElement(w.a,{variant:"h5",component:"h2"},r.a.createElement("a",{className:"blog_link",href:"/blogs/"+n.id},n.title," - ",n.author)),"link:  ",r.a.createElement("a",{href:n.url},n.url),r.a.createElement("br",null),"likes: ",r.a.createElement("span",{className:"blue"},n.likes)," \xa0",r.a.createElement(g.a,{variant:"outlined",color:"primary",size:"small",startIcon:r.a.createElement(S.a,null),onClick:function(){return i()}},"like"),r.a.createElement("br",null),"added by: ",n.user.username,r.a.createElement("br",null),r.a.createElement("br",null),null===t||t.username===n.user.username?r.a.createElement(g.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement(k.a,null),onClick:function(){return s()}},"delete"):""))},T=n(163),C=function(e){var t=e.message;return null===t?null:"err"===t[1]?r.a.createElement(T.a,{severity:"error",className:"notification"},t[0]):"hidden"===t[1]?r.a.createElement("div",{className:"hidden"},t[0]):r.a.createElement(T.a,{severity:"success",className:"notification"},t[0])},A=n(72),D=n.n(A),I=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),l=Object(m.a)(n,2),c=l[0],o=l[1],u={display:c?"none":""},i={display:c?"":"none"},s=function(){o(!c)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement("div",null,r.a.createElement("div",{style:u},r.a.createElement(g.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(D.a,null),onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:s},"cancel")))}));I.displayName="Togglable";var N=I,L=function(e){var t=e.handleSubmit,n=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(b.a,Object.assign({label:"Username",variant:"outlined",id:"username"},n))),r.a.createElement("div",null,r.a.createElement(b.a,Object.assign({label:"Password",variant:"outlined",id:"password"},a))),r.a.createElement(g.a,{variant:"contained",color:"primary",id:"login-button",type:"submit"},"login")))},B=function(e){var t=e.createBlog,n=Object(a.useState)(""),l=Object(m.a)(n,2),c=l[0],o=l[1],u=Object(a.useState)(""),d=Object(m.a)(u,2),f=d[0],p=d[1],E=Object(a.useState)(""),v=Object(m.a)(E,2),h=v[0],y=v[1],w=function(){var e=Object(s.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t({title:c,author:f,url:h}),p(""),o(""),y("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Create a new blog"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:w},r.a.createElement("div",null,r.a.createElement(b.a,{label:"Title",variant:"outlined",type:"text",value:c,id:"title",name:"Title",onChange:function(e){o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(b.a,{label:"Author",variant:"outlined",type:"text",value:f,id:"author",name:"Author",onChange:function(e){p(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(b.a,{label:"Link",variant:"outlined",type:"text",value:h,id:"url",name:"Url",onChange:function(e){y(e.target.value)}})),r.a.createElement(g.a,{variant:"contained",color:"primary",type:"submit"},"create"))))},_=n(23),U=n.n(_),R="/api/blogs",G=null,M={getAll:function(){console.log("blogService getAll");var e=U.a.get(R);return e.then((function(e){return console.log("response data ",e.data)})),e.then((function(e){return e.data}))},setToken:function(e){G="bearer ".concat(e),console.log("Token set: ",G)},create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("%c SERVICE CREATE","color: red; font-weight: bold;"),n={headers:{Authorization:G}},e.next=4,U.a.post(R,t,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("%c SERVICE UPDATE","color: red; font-weight: bold;"),a={headers:{Authorization:G}},e.next=4,U.a.put(R.concat("/",n),t,a);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addComment:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("%c ADD COMMENT ","color: red; font-weight: bold;",t),e.next=3,U.a.post(R.concat("/",n,"/comments"),t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:G}},e.next=3,U.a.delete(R.concat("/",t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loginService: ",t),e.next=3,U.a.post("/api/login",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(){console.log("usersService getAll");var e=U.a.get("/api/users");return e.then((function(e){return console.log("response data ",e.data)})),e.then((function(e){return e.data}))},H=["\xa0","hidden"],V=null,J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return function(n){n(P(e,t)),null!==V?(window.clearTimeout(V),V=window.setTimeout((function(){n(Z("",t))}),5e3)):V=window.setTimeout((function(){n(Z("",t))}),1e3*t)}},P=function(e,t){return{type:"SHOW",message:e,time:t}},Z=function(){return{type:"HIDE",message:["\xa0","hidden"]}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW":case"HIDE":case"ERR":return e=t.message;default:return e}},F=function(e){return{type:"SET_USER",data:e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",e),console.log("action",t),t.type){case"NEW_BLOG":return[].concat(Object(p.a)(e),[t.data]);case"INIT_BLOGS":return t.data;case"ADD_VOTE":case"ADD_COMMENT":return e;case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},X=n(13),Y=n(46),$=n(151),ee=n(152),te=n(153),ne=n(154),ae=n(155),re=n(156),le=n(157),ce=n(158),oe=n(159),ue=n(162),ie=n(73),se=n.n(ie),me=(n(117),function(){var e=Object(o.b)(),t=Object(a.useState)(!1),n=Object(m.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)([]),d=Object(m.a)(u,2),p=d[0],b=d[1],h=E("text"),y=E("text"),O=Object(o.c)((function(e){return e.notifications})),k=Object(o.c)((function(e){return e.blogs})),j=Object(o.c)((function(e){return e.user}));Object(a.useEffect)((function(){Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,W();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(a.useEffect)((function(){e((console.log("%c INITIALIZE !!!","color: red; font-weight: bold;"),function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[e]),Object(a.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogAppUser");if(t){var n=JSON.parse(t);e(F(n)),M.setToken(n.token)}}),[e]);var S=r.a.createRef(),T=function(){var t=Object(s.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,console.log("username: ",h.value," password: ",y.value),t.next=5,z.login({username:h.value,password:y.value});case 5:a=t.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(a)),M.setToken(a.token),e(J(["".concat(h.value," logged in"),"note"],10)),e(F(a)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),e(J(["wrong username or password","err"],10));case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),A=function(t){var n;e((n=t,console.log("%c CREATE BLOG","color: red; font-weight: bold;"),function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.create(n);case 2:a=e.sent,t({type:"NEW_BLOG",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(J(["a new blog ".concat(t.title," by ").concat(t.author," added"),"note"],10))},D=function(t,n){e(function(e){return console.log("%c DELETE BLOG: ","color: red; font-weight: bold;",e),function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.remove(e);case 2:n({type:"DELETE_BLOG",data:{id:e}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n)),e(J(["deleted blog: ".concat(t.title," by ").concat(t.author," "),"note"],10))},I=function(t,n,a){var r={title:t.title,author:t.author,url:t.url,likes:t.likes,comments:t.comments,user:t.user.id};"like"===a?(e(function(e,t){return function(){var n=Object(s.a)(i.a.mark((function n(a){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.update(e,t);case 2:r=n.sent,a({type:"ADD_VOTE",data:{response:r}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(r,n)),e(J(["liked a blog: ".concat(t.title," by ").concat(t.author," "),"note"],10))):"comment"===a&&(e(function(e,t){return console.log("%c ADD COMMENT","color: red; font-weight: bold;"),function(){var n=Object(s.a)(i.a.mark((function n(a){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.addComment(e,t);case 2:r=n.sent,a({type:"ADD_COMMENT",data:{response:r}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(r,n)),e(J(["Commented a blog: ".concat(t.title," by ").concat(t.author," "),"note"],10)))};return r.a.createElement(le.a,null,r.a.createElement(v.a,{elevation:3,style:{padding:30}},r.a.createElement(Y.a,null,r.a.createElement("div",null,r.a.createElement(C,{message:O}),null===j?r.a.createElement("div",null,function(){var e={display:l?"none":""},t={display:l?"":"none"};return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(se.a,{color:"secondary",style:{fontSize:30}}),"AWESOME BLOGLIST TOOL"),r.a.createElement("div",{style:e},r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){return c(!0)}},"log in")),r.a.createElement("div",{style:t},r.a.createElement(L,{username:h,password:y,handleSubmit:T}),r.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:function(){return c(!1)}},"cancel")))}()):r.a.createElement(ce.a,{position:"static"},r.a.createElement(oe.a,null,r.a.createElement(ue.a,{display:"flex",flexGrow:1},r.a.createElement(g.a,{edge:"start",size:"large",color:"inherit",component:Y.b,to:"/"},"Blogs"),r.a.createElement(g.a,{edge:"start",size:"large",color:"inherit",component:Y.b,to:"/users"},"Users")),r.a.createElement(w.a,{style:{margin:20},type:"title",color:"inherit"},j.name," logged in"),r.a.createElement(g.a,{className:"logout",variant:"contained",onClick:function(){window.localStorage.removeItem("loggedBlogAppUser"),window.location.reload()}},"logout")))),r.a.createElement(X.c,null,r.a.createElement(X.a,{path:"/users/:id"},r.a.createElement((function(e){var t=e.users,n=Object(X.f)().id,a=t.find((function(e){return e.id===String(n)}));return a?r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(f.a,{style:{fontSize:40}})," ",a.name),r.a.createElement("h3",null,"Added blogs:"),r.a.createElement("ul",null,a.blogs.map((function(e,t){return r.a.createElement("li",{key:t},e.title)})))):null}),{users:p})),r.a.createElement(X.a,{path:"/users"},r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Users"),r.a.createElement($.a,{component:v.a},r.a.createElement(ee.a,null,r.a.createElement(te.a,null,r.a.createElement(ne.a,null,"Name:"),r.a.createElement(ne.a,null,"Blogs created:")),r.a.createElement(ae.a,null,p.map((function(e,t){return r.a.createElement(re.a,{key:t},r.a.createElement(ne.a,null,r.a.createElement("a",{className:"user_link",href:"/users/".concat(e.id)},e.name)),r.a.createElement(ne.a,null,e.blogs.length))}))))))}),null)),r.a.createElement(X.a,{path:"/blogs/:id"},r.a.createElement((function(e){var t=e.blogs,n=Object(X.f)().id,a=t.find((function(e){return e.id===String(n)}));return a?r.a.createElement("div",null,r.a.createElement(x,{key:a.id,blog:a,id:a.id,user:j,onUpdate:I,onDelete:D,page:!0})):null}),{blogs:k})),r.a.createElement(X.a,{path:"/"},r.a.createElement((function(){return r.a.createElement("div",{className:"home"},null===j?"":r.a.createElement("div",null,r.a.createElement(N,{buttonLabel:"new blog",ref:S},r.a.createElement(B,{createBlog:A})),r.a.createElement("h1",null,"List of Blogs"),(k.sort((function(e,t){return e.likes-t.likes})),k.reverse(),k.map((function(e){return r.a.createElement(x,{key:e.id,blog:e,id:e.id,user:j,onUpdate:I,onDelete:D,page:!1})})))))}),null))))))}),de=n(30),fe=n(75),pe=n(76),Ee=Object(de.combineReducers)({notifications:q,blogs:Q,user:K}),ve=Object(de.createStore)(Ee,Object(pe.composeWithDevTools)(Object(de.applyMiddleware)(fe.a)));c.a.render(r.a.createElement(o.a,{store:ve},r.a.createElement(me,null)),document.getElementById("root"))},87:function(e,t,n){e.exports=n(119)}},[[87,1,2]]]);
//# sourceMappingURL=main.416b3a7c.chunk.js.map