(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,n,t){e.exports={App:"App_App__1IQbR"}},12:function(e,n,t){e.exports={CardsList:"RobotList_CardsList__3-fXE"}},13:function(e,n,t){e.exports={Input:"SearchBox_Input__3jPGs"}},16:function(e,n,t){e.exports={RoboFriends:"Header_RoboFriends__rPhZw"}},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(4),c=t.n(a),i=t(5),s=t(3),u=t(10),l=(t(27),t(11)),d=t.n(l),h=t(12),b=t.n(h),f=t(6),p=t.n(f),j=t(1),g=function(e){var n=e.name,t=e.email,r=e.img;return Object(j.jsxs)("div",{className:p.a.Card,children:[Object(j.jsx)("img",{alt:n,src:r}),Object(j.jsx)("span",{className:p.a.Name,children:n}),Object(j.jsx)("span",{className:p.a.Email,children:t})]})},v=function(e){var n=e.robots;return Object(j.jsx)("div",{className:b.a.CardsList,children:n.map((function(e,n){return Object(j.jsx)(g,{img:"https://robohash.org/".concat(n,"?size=200x200"),name:e.name,email:e.email},e.email)}))})},O=t(13),m=t.n(O),_=function(e){var n=e.onChange;return Object(j.jsx)("input",{className:m.a.Input,type:"search",placeholder:"Search name ...",onChange:n})},w=t(14),E=t(15),C=t(18),S=t(17),x=function(e){Object(C.a)(t,e);var n=Object(S.a)(t);function t(){var e;Object(w.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).state={hasError:!1},e}return Object(E.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"Some error was happened"}):this.props.children}}]),t}(r.Component),R=t(16),y=t.n(R),N=Object(r.memo)((function(){return Object(j.jsx)("span",{className:y.a.RoboFriends,children:"robofriends app"})})),k="CHANGE_SEARCHFIELD",F="REQUEST_ROBOTS_PENDING",P="REQUEST_ROBOTS_SUCCESS",L="REQUEST_ROBOTS_FAILED";var T=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:k,payload:n})},requestRobots:function(){return e((function(e){e({type:F}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:P,payload:n})})).catch((function(n){return e({type:L,payload:n})}))}))}}}))((function(e){var n=e.searchField,t=e.onSearchChange,o=e.robots,a=e.requestRobots;Object(r.useEffect)((function(){a()}),[a]);var c=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(j.jsxs)("div",{className:d.a.App,children:[Object(j.jsx)(N,{}),Object(j.jsx)(_,{onChange:function(e){t(e.target.value)}}),Object(j.jsx)(x,{children:Object(j.jsx)(v,{robots:c})})]})})),A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),a(e),c(e)}))},I=t(2),W={searchField:""},U={isPending:!1,robots:[],error:""},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k:return Object(I.a)(Object(I.a)({},e),{},{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case F:return Object(I.a)(Object(I.a)({},e),{},{isPending:!0,error:""});case P:return Object(I.a)(Object(I.a)({},e),{},{isPending:!1,robots:n.payload});case L:return Object(I.a)(Object(I.a)({},e),{},{isPending:!1,error:n.payload});default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,G=Object(s.d)(D,Q(Object(s.a)(u.a)));c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(i.a,{store:G,children:Object(j.jsx)(T,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");q?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(n,e)}))}}(),A()},6:function(e,n,t){e.exports={Card:"RobotCard_Card__2YKnv",Name:"RobotCard_Name__1vSql",Email:"RobotCard_Email__2YKhW"}}},[[29,1,2]]]);
//# sourceMappingURL=main.d56a49cb.chunk.js.map