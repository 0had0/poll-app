(this["webpackJsonppoll-app"]=this["webpackJsonppoll-app"]||[]).push([[0],{40:function(e,t,n){e.exports=n(62)},45:function(e,t,n){},51:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(33),c=n.n(o),i=(n(45),n(3)),l=n.n(i),u=n(6),s=n(5),p=n(8),f=n(14),d=n(15),h=n(9),g=n(25);function b(){var e=Object(p.a)(["\n\tbackground:",";\n\tcolor:",";\n\tborder-radius:13px;\n\twidth:260px;\n\theight:85px;\n\toverflowY:scroll;\n\toverflowX:hidden;\n\tfont-size: 18px;\n\tfont-weight:300;\n\ttext-align:center;\n\tborder:0;\n\tmargin:5px;\n\toutline:none;\n"]);return b=function(){return e},e}var m=Object(h.a)(g.a.input)(b(),(function(e){return"#000"===e.background?"rgba(255, 255, 255, 0.13)":"rgba(0, 0, 0, 0.13)"}),(function(e){return e.color}));var x=function(e){var t=e.placeHolder,n=e.action,o=e.value,c=e.id,i=Object(r.useContext)(N).state,l=Object(r.useState)(""),u=Object(s.a)(l,2),p=u[0],f=u[1];return a.a.createElement("div",{style:{width:"260px",height:"85px",display:"flex",justifyContent:"center",alignItems:"center",padding:"5px"}},a.a.createElement(m,{id:c||"8291398127391",whileTap:{scale:.8},color:i.color,background:i.background,value:o||p,onClick:"copyBox"===c?function(e){e.target.select(),document.execCommand("copy"),e.target.value="Copied !"}:null,onChange:function(e){o||(n(e.target.value),f(e.target.value))},placeholder:t||"Input",readonly:o&&"readonly"}))};function v(){var e=Object(p.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 260px;\n\theight: 85px;\n\tbackground: ",";\n\tcolor: white;\n\tborder-radius: 13px;\n\tborder: 0;\n\tfont-size:24px;\n\tmargin:5px\n\n"]);return v=function(){return e},e}var w=Object(h.a)(g.a.button)(v(),(function(e){return e.gradien||"blue"}));var E=function(e){var t=Object(r.useContext)(N).state,n=e.Component||function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,t)};return a.a.createElement(n,Object.assign({style:{textDecoration:"none",fontWeight:"500"}},e),a.a.createElement(w,{whileHover:{scale:1.1},whileTap:{scale:.9},gradien:t.gradien,disabled:e.disabled||!1,onClick:e.onClick||null},e.children))};var k=function(){var e,t=Object(r.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{placeHolder:"Enter link or ID",action:function(e){return c(e)}}),a.a.createElement(E,{disabled:""===(e=o,null!==/http:\/\/0had0\.github\.io\/poll-app\//g.exec(e)?e.split("http://0had0.github.io/poll-app/").pop():e),Component:f.b,to:"/poll-app/".concat(o)},"Enter Poll"),a.a.createElement(E,{Component:f.b,to:"/poll-app/create"},"Create Poll"))};function y(){var e=Object(p.a)(["\n\tfont-size:",";\n\tfont-weight:",";\n\tbackground: ",";\n\tcolor:",";\n  \t-webkit-background-clip: text;\n  \t-webkit-text-fill-color: transparent;\n  \tmargin:",";\n"]);return y=function(){return e},e}var j=h.a.h2(y(),(function(e){return e.size||"18px"}),(function(e){return e.weight||300}),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.margin||"0"}));var O=function(e){var t=e.children,n=e.color,o=e.size,c=e.weight,i=e.lines,p=e.margin,f=e.getText,d=Object(r.useState)(""),h=Object(s.a)(d,2),g=h[0],b=h[1],m=Object(r.useContext)(N).state,x="#000"===m.background?"rgba(255, 255, 255, 0.13)":"rgba(0, 0, 0, 0.13)";if(i=i||1,f=f||!1){function v(){return(v=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(b);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){v.apply(this,arguments)}()}return a.a.createElement(j,{color:n||m.color,size:o,weight:c,margin:p},!f&&t,f&&""===g&&a.a.createElement("svg",{width:"205px",height:i>1?"75px":"18px"},a.a.createElement("rect",{fill:x,x:"0",y:"0",width:"205px",height:i<=1?"18px":"13px"}),i>1&&a.a.createElement(a.a.Fragment,null,a.a.createElement("rect",{fill:x,x:"0",y:"26",width:"205px",height:"13px"}),a.a.createElement("rect",{fill:x,x:"0",y:"52",width:"100px",height:"13px"}))),f&&""!==g&&g)};n(51);function C(){var e=Object(p.a)(["\n\tdisplay: inline-block;\n\twidth: 15px;\n\theight: 15px;\n\tborder-radius: 15px;\n\tbackground-color: ",";\n"]);return C=function(){return e},e}var F=h.a.div(C(),(function(e){return e.color}));var I=function(e){var t=e.color,n=Object(r.useContext)(N).state;return t=t||n.firstColor,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"load"},a.a.createElement(F,{className:"line",color:t}),a.a.createElement(F,{className:"line",color:t}),a.a.createElement(F,{className:"line",color:t})))};var S=function(e){var t=e.action,n=e.addPoll,o=Object(r.useState)(!1),c=Object(s.a)(o,2),i=c[0],l=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,"Result will apear in the link page,",a.a.createElement("br",null),"after you take the poll."),a.a.createElement(x,{placeHolder:"Enter Your question",action:function(e){return t(e)}}),a.a.createElement(E,{onClick:function(){l(!0),n(l)}},i?a.a.createElement(I,{color:"#fff"}):"Take the poll"))};function z(){var e=Object(p.a)(["\n\tborder:0;\n\tbackground:rgba(0, 0, 0, 0);\n\toutline:none\n"]);return z=function(){return e},e}function P(){var e=Object(p.a)(["\n\tdisplay:flex;\n\tbackground:tranparent;\n\tjustify-content:space-around;\n\talign-items:center;\n\twidth:90%;\n\theight:88px;\n"]);return P=function(){return e},e}var H=a.a.lazy((function(){return n.e(3).then(n.bind(null,63))})),T=a.a.lazy((function(){return n.e(4).then(n.bind(null,64))})),A=h.a.div(P()),B=h.a.button(z());var q=function(e){var t=e.onClick,n=Object(r.useContext)(N).state,o="#000"===n.background?"rgba(255, 255, 255, 0.13)":"rgba(0, 0, 0, 0.13)";return a.a.createElement(A,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("svg",{width:"85px",height:"85px"},a.a.createElement("react",{fill:o,x:"0",y:"0",width:"85px",height:"85px"}))},a.a.createElement(B,{onClick:function(){return t("y")}},a.a.createElement(H,{firstColor:n.firstColor,secondColor:n.secondColor}))),a.a.createElement(r.Suspense,{fallback:a.a.createElement("svg",{width:"85px",height:"85px"},a.a.createElement("react",{fill:o,x:"0",y:"0",width:"85px",height:"85px"}))},a.a.createElement(B,{onClick:function(){return t("n")}},a.a.createElement(T,{firstColor:n.firstColor,secondColor:n.secondColor}))))};var V=function(e){var t=e.action,n=e.getId,o=e.Firebase,c=n().id,i=Object(r.useState)("pending"),p=Object(s.a)(i,2),d=p[0],h=p[1],g=Object(r.useState)("1"===localStorage.getItem("poll-".concat(c))||!1),b=Object(s.a)(g,2),m=b[0],v=b[1],w=Object(r.useState)(!1),k=Object(s.a)(w,2),y=k[0],j=k[1],C=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.giveMeThePollWithId(c,t,"result");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.giveMeThePollWithId(c,t,n,"question");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();switch(Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.checkId(c,h);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),d){case"pending":return a.a.createElement(I,null);case"notVerified":return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,"Invalid Id Or Link"),a.a.createElement(E,{Component:f.b,to:"/poll-app"},"Go Back"));case"verified":return"1"===localStorage.getItem("poll-".concat(c))&&m?a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{getText:C}),a.a.createElement(x,{id:"copyBox",value:window.location.href}),a.a.createElement(E,{onClick:function(){navigator.share&&navigator.share({title:"Poll App by Hadi Houssainy",text:"Use this link to vote",url:window.location.href}).then((function(){return console.log("Successful share")})).catch((function(e){return console.log("Error sharing",e)}))}},"Share Link")):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{width:"260px",height:"85px",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement(O,{getText:function(e){return setTimeout((function(){F(e,j)}),1e3)},lines:3})),a.a.createElement(q,{onClick:function(e){y&&(localStorage.setItem("poll-".concat(c),"1"),t(e),v(!0))}}));default:return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,"Error Occured!"),a.a.createElement(E,{Component:f.b,to:"/poll-app/".concat(window.location.href.split("/poll-app/").pop())},"Refresh"))}};function D(){var e=Object(p.a)(["\n  width:260px;\n  height:270px;\n  padding:8px;\n  display:flex;\n  justify-content:start;\n  align-items:center;\n"]);return D=function(){return e},e}function W(){var e=Object(p.a)(["\n  width:100%;\n  @media (min-width: 500px) {\n    width:500px;\n  }\n  minHeight:100vh;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  align-items:center;\n  color:",";\n  gradien:",";\n"]);return W=function(){return e},e}var N=Object(r.createContext)(null),R=h.a.div(W(),(function(e){return e.color}),(function(e){return e.gradien})),M=h.a.div(D());var Y=function(e){var t=e.Firebase,n=Object(r.useReducer)((function(e){return{background:"#000"===e.background?"#fff":"#000",gradien:"#000"===e.background?"-webkit-linear-gradient(44.75deg, #FF0000 -0.41%, rgba(255, 184, 0, 0.986667) 99.99%)":"-webkit-linear-gradient(44.75deg, #00FCFF -0.41%, rgba(0, 0, 255, 0.986667) 99.99%)",color:"#000"===e.background?"#000":"#fff",firstColor:"#fff"===e.background?"#00FCFF":"#ff0000",secondColor:"#fff"===e.background?"#0000FF":"#FFC700"}}),{background:"#fff",gradien:"-webkit-linear-gradient(44.75deg, #FF0000 -0.41%, rgba(255, 184, 0, 0.986667) 99.99%)",color:"#000",firstColor:"#FF0000",secondColor:"#FFC700"}),o=Object(s.a)(n,2),c=o[0],i=o[1],p=Object(r.useState)(""),h=Object(s.a)(p,2),g=h[0],b=h[1],m=Object(r.useState)(null),x=Object(s.a)(m,2),v=(x[0],x[1]),w=Object(r.useState)(!0),E=Object(s.a)(w,2),y=E[0],j=E[1],C=function(){var e=Object(u.a)(l.a.mark((function e(n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==g){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.addPoll(g);case 4:r=e.sent,n(!1),(a=window.location.href.split("/"))[4]=r,window.location.replace(a.join("/"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function F(){return(F=Object(u.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=window.location.href.split("/"),e.next=3,t.vote(r[r.length-1],n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.signInAnonymous(v,j);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),i(),document.body.style.backgroundColor=c.background}),[]),a.a.createElement(N.Provider,{value:{state:c,ChangeTheme:i}},a.a.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%",minHeight:"100vh",background:c.background}},a.a.createElement(R,{color:c.color,gradien:c.gradien},a.a.createElement(M,null,a.a.createElement(O,{color:c.gradien,size:"5em",weight:"500"},"Poll",a.a.createElement("br",null),"App")),a.a.createElement(f.a,null,y?a.a.createElement(I,{color:c.firstColor}):a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{exact:!0,path:"/poll-app",component:k}),a.a.createElement(d.c,null,a.a.createElement(d.a,{path:"/poll-app/create",render:function(){return a.a.createElement(S,{action:function(e){return b(e)},addPoll:function(e){return C(e)}})}}),a.a.createElement(d.a,{path:"/poll-app/:id",render:function(){return a.a.createElement(V,{action:function(e){return function(e){return F.apply(this,arguments)}(e)},getId:d.f,Firebase:t})}})))),a.a.createElement(O,{margin:"10px",size:"12px",weight:"300"},a.a.createElement("a",{style:{textDecoration:"none",color:c.color},href:"https://0had0.github.io/portfolio"},"Hadi Houssainy @ 2020")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(38),L=n(39),J=n(19),U=n.n(J),K=(n(61),{apiKey:"AIzaSyDrbOgexGmV-58CBt0Vv9RFjIpf4Aq3bCQ",authDomain:"poll-app-75.firebaseapp.com",databaseURL:"https://poll-app-75.firebaseio.com",projectId:"poll-app-75",storageBucket:"poll-app-75.appspot.com",messagingSenderId:"199805304068",appId:"1:199805304068:web:7adf7d1fa169dc67e1a451",measurementId:"G-BFY1H5V91Z"}),Q=function(){function e(){Object(G.a)(this,e),this.firebase=U.a.initializeApp(K),U.a.analytics(),this.db=U.a.firestore(),this.auth=U.a.auth()}return Object(L.a)(e,[{key:"signInAnonymous",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signInAnonymously().then((function(e){return t(e.user),n(!1),e})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"checkAuth",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.onAuthStateChanged((function(e){if(e)return console.log(e),e;console.log("shit")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addPoll",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,this.db.collection("polls").add({question:t,yes:0,no:0}).then((function(e){return e.id})).catch((function(e){return console.log(e)}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"vote",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("polls").doc(t);case 2:if(r=e.sent,"y"!==n){e.next=9;break}return e.next=6,r.update({yes:U.a.firestore.FieldValue.increment(1)}).then((function(){return console.log("updated")})).catch((function(e){return console.log(e)}));case 6:return e.abrupt("return",e.sent);case 9:return e.next=11,r.update({no:U.a.firestore.FieldValue.increment(1)}).then((function(){return console.log("updated")})).catch((function(e){return console.log(e)}));case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"checkId",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("polls").doc(t).get().then((function(e){e.exists?n("verified"):n("notVerified")})).catch((function(e){n("error")}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"giveMeThePollWithId",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n,r,a){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},e.next=3,this.db.collection("polls").doc(t).get().then((function(e){if(e.exists)return e.data()})).catch((function(e){return console.log(e),{question:"Invalid ID or Error Ocured",error:e}}));case 3:return o=e.sent,"question"===a?(n(o.question),r(!0)):n("Yes : ".concat((o.yes/(o.yes+o.no)*100).toFixed(1),"% No : ").concat((o.no/(o.yes+o.no)*100).toFixed(1),"%")),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()}]),e}();c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Y,{Firebase:new Q})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.cfc43661.chunk.js.map