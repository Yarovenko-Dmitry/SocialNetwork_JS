(this["webpackJsonpmy-app-js"]=this["webpackJsonpmy-app-js"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(27),r=n(28),o=n(30),u=n(29),c=n(10),i=n(0),s=n.n(i),l=n(12),f=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(u.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),i}(s.a.Component);return Object(l.b)(f)(t)}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n(42),r=n(5),o={dialogs:[{id:1,name:"Dmitry"},{id:2,name:"Andrey"},{id:3,name:"Alexander"},{id:4,name:"Victoriya"},{id:5,name:"Nadezhda"},{id:6,name:"Alex"}],messages:[{id:1,message:"Hi"},{id:2,message:"What it is"},{id:3,message:"Go-go-go"},{id:4,message:"Good"},{id:5,message:"thanksgiving"},{id:6,message:"fame and honor"}]},u=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:7,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"users_userPhoto__MX4oh",selectedPage:"users_selectedPage__38k54"}},135:function(e,t,n){e.exports=n.p+"static/media/default_user.58fd4a49.png"},136:function(e,t,n){e.exports=n.p+"static/media/loadingJS.7fc09a2b.gif"},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var a=n(132),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7670157b-55fb-46c4-91b5-ea5772613da8"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unFollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolute method. Please use profileAPI object"),u.getProfile(e)}},u={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},16:function(e,t,n){e.exports={nav:"Navbar_nav__3TONV",item:"Navbar_item__2RqDs",activLink:"Navbar_activLink__99gNt"}},164:function(e,t,n){e.exports=n(293)},169:function(e,t,n){},170:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(63),u=n.n(o),c=(n(169),n(27)),i=n(28),s=n(30),l=n(29),f=n(10),m=n(13),p=(n(170),n(16)),d=n.n(p),g=function(){return r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:"".concat(d.a.item)},r.a.createElement(m.b,{to:"/profile",activeClassName:d.a.activLink},"JS Profile JS")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/dialogs",activeClassName:d.a.activLink},"JS Message JS")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/users",activeClassName:d.a.activLink},"JS Users JS")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/news",activeClassName:d.a.activLink},"JS News JS")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/music",activeClassName:d.a.activLink},"JS Music JS")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/settings",activeClassName:d.a.activLink},"JS Settings JS")))},h=(n(175),function(){return r.a.createElement("div",null,"News")}),b=(n(176),function(){return r.a.createElement("div",null,"Music")}),E=(n(177),function(){return r.a.createElement("div",null,"Settings")}),v=n(12),O=n(9),S=n.n(O),w=n(20),j=n(42),P=n(5),_=n(15),y=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),a):e}))},C={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},k=function(e){return{type:"FOLLOW",userId:e}},N=function(e){return{type:"UNFOLLOW",userId:e}},I=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},T=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},A=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},L=function(){var e=Object(w.a)(S.a.mark((function e(t,n,a,r){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(A(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:y(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:y(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(j.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},x=n(54),F=n(67),z=n(129),G=n(69),R=n.n(G),J=n(133),M=n.n(J),D=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var m=Math.ceil(s/i),p=Object(a.useState)(1),d=Object(z.a)(p,2),g=d[0],h=d[1],b=(g-1)*i+1,E=g*i;return r.a.createElement("div",{className:R.a.pagination},g>1&&r.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=b&&e<=E})).map((function(e){return r.a.createElement("span",{className:M()(Object(F.a)({},R.a.selectedPage,o===e),R.a.pageNumber),key:e,onClick:function(t){u(e)}},e)})),m>g&&r.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},B=n(134),W=n.n(B),H=n(135),Y=n.n(H),q=function(e){var t=e.user,n=e.followingInProgress,a=e.unFollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(m.b,{to:"/profile/"+t.id},r.a.createElement("img",{className:W.a.userPhoto,src:null!=t.photos.small?t.photos.small:Y.a}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null," ",t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},V=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,o=e.pageSize,u=e.users,c=Object(x.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return r.a.createElement("div",null,r.a.createElement(D,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:o}),r.a.createElement("div",null,u.map((function(e){return r.a.createElement(q,{user:e,followingInProgress:c.followingInProgress,unFollow:c.unFollow,follow:c.follow,key:e.id})}))))},X=n(64),Z=n(106),K=n(8),$=function(e){return e.usersPage.users},Q=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},ae=function(e){return e.usersPage.followingInProgress},re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props;(0,n.getUsers)(t,n.pageSize)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(X.a,null):null,r.a.createElement(V,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),oe=Object(K.d)(Z.a,Object(v.b)((function(e){return{users:$(e),pageSize:Q(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:ae(e)}}),{follow:function(e){return function(){var t=Object(w.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,_.c.follow.bind(_.c),k);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(w.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,_.c.unFollow.bind(_.c),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:I,toggleFollowingProgress:A,getUsers:function(e,t){return function(){var n=Object(w.a)(S.a.mark((function n(a){var r;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(T(!0)),a(I(e)),n.next=4,_.c.getUsers(e,t);case 4:r=n.sent,a(T(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(re),ue=n(92),ce=n.n(ue),ie=function(e){return r.a.createElement("header",{className:ce.a.header},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZJl9r7JapjoydUuxwLEWyGBSJqFNwoBfRGlnZYdXzd-YoXY2Yo2ylJnjng&s"}),r.a.createElement("div",{className:ce.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(m.b,{to:"/login"},"Login")))},se=n(43),le={userId:null,email:null,login:null,isAuth:!1},fe=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},me=function(){return function(){var e=Object(w.a)(S.a.mark((function e(t){var n,a,r,o,u;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:return 0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,u=a.login,t(fe(r,o,u,!0))),e.abrupt("return","getAuthUserData result");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},de=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(ie,this.props)}}]),n}(r.a.Component),ge=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(w.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.data.resultCode&&t(fe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(de),he=n(128),be=n(36),Ee=n(85),ve=n(51),Oe=n.n(ve),Se=Object(he.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(be.c)("Email","email",be.a,[Ee.b]),Object(be.c)("Password","password",be.a,[Ee.b],{type:"password"}),Object(be.c)(null,"rememberMe",be.a,[],{type:"checkbox"},"remember Me"),n&&r.a.createElement("div",{className:Oe.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),we=Object(v.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(w.a)(S.a.mark((function a(r){var o,u;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(me()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(se.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(f.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Se,{onSubmit:function(t){console.log(t),e.login(t.email,t.password,t.rememberMe)}}))})),je={initialized:!1},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},_e=n(95),ye=n(127),Ce={},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;return e},Ne=n(138),Ie=n(130),Te=Object(K.c)({profilePage:_e.b,dialogsPage:ye.a,sidebar:ke,usersPage:U,auth:pe,form:Ie.a,app:Pe}),Ae=Object(K.e)(Te,Object(K.a)(Ne.a)),Le=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading")},r.a.createElement(e,t))}},Ue=r.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),xe=r.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Fe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ge,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(f.b,{path:"/profile/:userId?",render:Le(Ue)}),r.a.createElement(f.b,{path:"/dialogs",render:Le(xe)}),r.a.createElement(f.b,{path:"/users",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(f.b,{path:"/login",render:function(){return r.a.createElement(we,null)}}),r.a.createElement(f.b,{path:"/news",component:h}),r.a.createElement(f.b,{path:"/music",component:b}),r.a.createElement(f.b,{path:"/settings",component:E}))):r.a.createElement(X.a,null)}}]),n}(r.a.Component),ze=Object(K.d)(f.f,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(me()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Fe),Ge=function(e){return r.a.createElement(m.a,null,r.a.createElement(v.a,{store:Ae},r.a.createElement(ze,null)))};u.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var a=n(54),r=n(0),o=n.n(r),u=n(51),c=n.n(u),i=n(88),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,u=n&&a;return o.a.createElement("div",{className:c.a.formControl+" "+(u?c.a.error:"")},o.a.createElement("div",null,r),u&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:n,validate:a},r))," ",u)}},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__268Le",error:"FormsControls_error__3SmbA",formSummaryError:"FormsControls_formSummaryError__3zeuP"}},64:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(136),u=n.n(o);t.a=function(){return r.a.createElement("div",{style:{backgroundColor:"green"}},r.a.createElement("img",{src:u.a}))}},69:function(e,t,n){e.exports={pagination:"Paginator_pagination__3pBb6",pageNumber:"Paginator_pageNumber__3Ap-V",selectedPage:"Paginator_selectedPage__30gsc"}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},92:function(e,t,n){e.exports={header:"Header_header__2Ye-s",loginBlock:"Header_loginBlock__3dsO4"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var a=n(9),r=n.n(a),o=n(20),u=n(42),c=n(5),i=n(15),s={posts:[{id:1,message:"Hi, how are you?",likesCount:0},{id:2,message:"It's my first post",likesCount:48},{id:3,message:"Second post",likesCount:8},{id:4,message:"e-ge-gey",likesCount:4}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"DELETE_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}}}},[[164,1,2]]]);
//# sourceMappingURL=main.d28b7490.chunk.js.map