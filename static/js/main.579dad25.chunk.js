(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},106:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(15),i=n.n(r),c=(n(103),n(23)),l=n(24),u=n(26),s=n(25),d=n(27),p=(n(105),n(106),n(17)),h=n(86),m=n(87),O=n(41),b=n(97),f="ADD_TODO",E="DELETE_TODO",g="EDIT_TODO",v="COMPLETE_TODO",j="COMPLETE_ALL_TODOS",w="CLEAR_COMPLETED",C=[{text:"Use Redux",completed:!1,id:0}];var M,y=Object(p.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return[].concat(Object(b.a)(e),[{id:e.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,completed:!1,text:t.text}]);case E:return e.filter(function(e){return e.id!==t.id});case g:return e.map(function(e){return e.id===t.id?Object(O.a)({},e,{text:t.text}):e});case v:return e.map(function(e){return e.id===t.id?Object(O.a)({},e,{completed:!e.completed}):e});case j:var n=e.every(function(e){return e.completed});return e.map(function(e){return Object(O.a)({},e,{completed:!n})});case w:return e.filter(function(e){return!1===e.completed});default:return e}}}),k=(M={},Object(p.e)(y,M,Object(p.d)(Object(p.a)(m.a,Object(h.createLogger)())))),T=n(40),x=n(89),L=n.n(x),A=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{padding:"40px 0px"}},o.a.createElement(L.a,{color:"primary",variant:"contained",style:{margin:"50px"},onClick:function(){return e.props.addTodo("todo a thing")}},"Add a todo"),o.a.createElement("div",null,"Todo count: ",this.props.todoCount))}}]),t}(o.a.Component),D=(Object(T.b)(function(e){return{todoCount:e.todos.length}},{addTodo:function(e){return{type:f,text:e}}})(A),n(28)),R=n(90),P=n.n(R),B=n(91),I=n.n(B),N=n(43),S=n.n(N),_=n(93),z=n.n(_),W=n(95),G=n.n(W),J=n(42),H=n.n(J),U=n(55),$=n.n(U),q=n(22),F=n(96),K=n(92),Q=n.n(K),V=n(94),X=n.n(V),Y=n(56),Z=n.n(Y),ee=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={anchorEl:null,mobileMoreAnchorEl:null},n.handleProfileMenuOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,n=e.mobileMoreAnchorEl,a=this.props.classes,r=Boolean(t),i=Boolean(n),c=o.a.createElement($.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose},o.a.createElement(H.a,{onClick:this.handleMenuClose},"Profile"),o.a.createElement(H.a,{onClick:this.handleMenuClose},"My account"));o.a.createElement($.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMenuClose},o.a.createElement(H.a,{onClick:this.handleProfileMenuOpen},o.a.createElement(S.a,{color:"inherit"},o.a.createElement(Z.a,null)),o.a.createElement("p",null,"Profile")));return o.a.createElement("div",{className:a.root},o.a.createElement(P.a,{position:"static"},o.a.createElement(I.a,null,o.a.createElement(S.a,{className:a.menuButton,color:"inherit","aria-label":"Open drawer"},o.a.createElement(Q.a,null)),o.a.createElement(z.a,{className:a.title,variant:"h6",color:"inherit",noWrap:!0},"Gitstar Hero"),o.a.createElement("div",{className:a.search},o.a.createElement("div",{className:a.searchIcon},o.a.createElement(X.a,null)),o.a.createElement(G.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput}})),o.a.createElement("div",{className:a.grow}),o.a.createElement(S.a,{"aria-owns":r?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},o.a.createElement(Z.a,null)))),c)}}]),t}(o.a.Component),te=Object(F.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(D.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(D.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(q.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(q.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(D.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}})(ee),ne=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(T.a,{store:k},o.a.createElement(te,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n(235)}},[[98,2,1]]]);
//# sourceMappingURL=main.579dad25.chunk.js.map