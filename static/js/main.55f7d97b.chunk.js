(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(64)},26:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){var n={"./4Clojure.jpg":51,"./blockBreaker.jpg":52,"./connect4.jpg":53,"./designPatt.jpg":54,"./marsExplorer.jpg":55,"./poker.jpg":56,"./restFB.jpg":57,"./wandW.png":58};function r(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=50},51:function(e,t,a){e.exports=a.p+"static/media/4Clojure.5d4b9e5c.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/blockBreaker.ddc1eca1.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/connect4.6c8fb6f0.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/designPatt.e99986ff.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/marsExplorer.5f4a4db0.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/poker.3d73a461.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/restFB.17c7d76e.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/wandW.1ffaee80.png"},59:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=(a(26),a(5)),s=a(6),l=a(8),u=a(7),m=a(9),p=(a(28),a(30),a(32),a(34),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"mouseOver",value:function(){this.setState({hover:!0})}},{key:"mouseOut",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:this.state.hover?"text":"text hidden",onMouseOut:function(){return e.mouseOut()},onMouseOver:function(){return e.mouseOver()}},r.a.createElement("li",null,"L"),r.a.createElement("li",{className:"ghost"},"u"),r.a.createElement("li",{className:"ghost"},"i"),r.a.createElement("li",{className:"ghost"},"s"),r.a.createElement("li",{className:"spaced"},"B"),r.a.createElement("li",{className:"ghost"},"a"),r.a.createElement("li",{className:"ghost"},"l"),r.a.createElement("li",{className:"ghost"},"l"),r.a.createElement("li",{className:"ghost"},"i"),r.a.createElement("li",{className:"ghost"},"n"),r.a.createElement("li",{className:"ghost"},"a"),r.a.createElement("li",{className:"ghost"},"s"))}}]),t}(n.Component)),d=(a(37),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"animated-text"},this.props.children)}}]),t}(n.Component)),f=(a(39),a(10));function E(){return r.a.createElement("div",{className:"social"},r.a.createElement("a",{id:"linkedin",href:"https://mx.linkedin.com/in/luis-eduardo-ballinas-aguilar-a638a594"},r.a.createElement(f.a,{icon:["fab","linkedin"]})),r.a.createElement("a",{id:"github",href:"https://github.com/lu15v"},r.a.createElement(f.a,{icon:["fab","github"]})),r.a.createElement("a",{id:"email",href:"mailto:luis.ed.ballinas@gmail.com"},r.a.createElement(f.a,{icon:["fas","envelope"]})),r.a.createElement("a",{id:"facebook",href:"https://www.facebook.com/XLu15Y"},r.a.createElement(f.a,{icon:["fab","facebook"]})))}var g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-header header"},r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(d,null,this.props.major),r.a.createElement("p",null,this.props.desc),r.a.createElement(E,null)))}}]),t}(n.Component),h=(a(46),a(48),function(e){return r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:a(50)("./".concat(e.img)),alt:"",className:"image"}),r.a.createElement("div",{className:"opacity"},r.a.createElement("div",{className:"info"})),r.a.createElement("div",{className:"tech"},r.a.createElement("p",null,e.children)))}),b=a(65);function j(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(b.a,{to:"/project/marsExp"},r.a.createElement(h,{img:"marsExplorer.jpg",path:"marsExp"},"Mars Explorer")),r.a.createElement(b.a,{to:"/project/connect4"},r.a.createElement(h,{img:"connect4.jpg"},"Connect 4")),r.a.createElement(b.a,{to:"/project/bbreaker"},r.a.createElement(h,{img:"blockBreaker.jpg"},"Brick Breaker Game")),r.a.createElement(b.a,{to:"/project/restfb"},r.a.createElement(h,{img:"restFB.jpg"},"Facebook WS")),r.a.createElement(b.a,{to:"/project/wandw"},r.a.createElement(h,{img:"wandW.png"},"Text Adventure Game")),r.a.createElement(b.a,{to:"/project/4clojure"},r.a.createElement(h,{img:"4Clojure.jpg"},"Clojure Problems")),r.a.createElement(b.a,{to:"/project/poker"},r.a.createElement(h,{img:"poker.jpg"},"Poker ")),r.a.createElement(b.a,{to:"/project/designPatt"},r.a.createElement(h,{img:"designPatt.jpg"},"Design Patterns ")))}var v=a(12),k=a(15),O=a(16),N=a(66),w=a(68),x=a(67);a(59);function y(){return r.a.createElement("div",{className:"body"},r.a.createElement(b.a,{to:"/"},r.a.createElement("p",{className:"back"},r.a.createElement(f.a,{icon:["fas","chevron-circle-left"]})," Back")),r.a.createElement("main",null,r.a.createElement("div",{className:"head"},r.a.createElement("h2",null,"Project name")),r.a.createElement("div",{className:"desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sit amet ex posuere efficitur. Curabitur rhoncus posuere lacus, nec porttitor dolor sagittis id. Aenean scelerisque tortor non ligula laoreet, quis posuere orci pulvinar. Pellentesque eleifend convallis orci eget pharetra. Sed turpis metus, ullamcorper nec risus quis, euismod auctor metus. Duis vulputate sapien at magna faucibus consectetur. Quisque euismod, tellus a tempus consequat, massa eros consequat urna, nec porta quam est ac ipsum. Etiam in risus non ligula tincidunt vehicula vitae non massa. Etiam feugiat id nulla a sollicitudin. Proin eu molestie ipsum, in bibendum dui. Proin finibus ut ipsum ut egestas. Sed egestas hendrerit velit eget elementum. Suspendisse pretium magna purus, ut euismod odio laoreet at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;")))}v.b.add(k.a,k.b,k.c,O.b,O.a);var B=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,{name:"Luis Ballinas",major:"Software Engineer",desc:"Web developer and music lover located in Guadalajara"}),r.a.createElement("div",{className:"navbar"},r.a.createElement("a",{href:"https://github.com/lu15v/portfolio/blob/master/src/assets/pdf/Resume.pdf"},"Resume"),r.a.createElement(b.a,{to:"/"},"Portfolio")),r.a.createElement(w.a,null,r.a.createElement(x.a,{exact:!0,path:"/",component:j}),r.a.createElement(x.a,{path:"/project/:item",component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.55f7d97b.chunk.js.map