(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,a){e.exports=a(25)},18:function(e,n,a){},24:function(e,n,a){},25:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),c=a(5),m=a.n(c),o=(a(18),a(6)),s=a(7),r=a(11),u=a(8),i=a(12),d=function(e){var n=e.menus,a=n?n.map(function(e){return l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link"},e))}):null;return l.a.createElement("div",{id:"desktop-menu",className:"d-none d-sm-block"},l.a.createElement("ul",{className:"navbar-nav"},a))},p=a(9),v=function(e){var n=e.menus,a=e.toggleMenu,t=e.menuExpanded;console.log(t);var c=n?n.map(function(e,n){var a=0===n?"top":1===n?"middle":2===n?"bottom":"hidden";return l.a.createElement("li",{className:t?"menu-global menu-".concat(a," menu-").concat(a,"-expand expand"):"menu-global menu-".concat(a)},l.a.createElement("span",{className:t?"menu-text menu-text-expand":"menu-text"},e))}):null;return l.a.createElement("div",{id:"mobile-menu",className:"d-sm-none"},l.a.createElement("ul",{className:"menu",onClick:a},c,l.a.createElement("div",{className:t?"menu-close menu-close-visible":"menu-close"},l.a.createElement(p.a,{icon:"times"})),l.a.createElement("div",{className:"click-blocker"})))},E=["Menu 1","Menu 2","Menu 3","Menu 4"],b=function(e){function n(e){var a;return Object(o.a)(this,n),(a=Object(r.a)(this,Object(u.a)(n).call(this,e))).toggleMenu=function(e){e.preventDefault(),a.setState({menuExpanded:!a.state.menuExpanded})},a.state={menuExpanded:!1},a}return Object(i.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state.menuExpanded;return l.a.createElement("nav",{className:"navbar navbar-expand-sm fixed-top align-items-end px-4"},l.a.createElement(d,{menus:E}),l.a.createElement(v,{menus:E,menuExpanded:e,toggleMenu:this.toggleMenu}),l.a.createElement("div",{className:"navbar-brand ml-auto"},l.a.createElement("div",{className:"site-title"},"FANGJIAN",l.a.createElement("span",{className:"pl-2"},"CHEN"))))}}]),n}(l.a.Component),N=(a(24),a(3)),f=a(10);N.b.add(f.a);var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.f5c10ca5.chunk.js.map