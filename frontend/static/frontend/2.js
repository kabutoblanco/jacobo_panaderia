(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(e,t,n){var r=n(28),a=n(139);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var c={insert:"head",singleton:!1};r(a,c);e.exports=a.locals||{}},139:function(e,t,n){(t=n(29)(!1)).push([e.i,".jumbotron {\n  background-image: url('/static/frontend/img/galleta1.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-top: 15%;\n}\n\n.carousel h3 {\n  font-weight: bold;\n  color: black;\n  font-size: 250%;\n  text-shadow: 0 0 5px #fff;\n}\n\n.carousel p {\n    font-weight: bold;\n    text-shadow: 0 0 2.5px;\n}\n\n.carousel .btn {\n  height: 50px;\n  font-size: 20px;\n  padding: 10px 13px;\n  color: white !important;\n  font-weight: bold;\n  background-color: rgb(120, 74, 71, 0.8);\n  border-color: #400808;\n}\n\n.carousel .btn:hover {\n  background-color: rgb(120, 74, 71);\n  box-shadow: black;\n}\n\n.carousel a {\n  color: white;\n}\n\n.carousel img {\n  object-fit: cover;\n}\n\n@media only screen and (min-width: 575px) {\n}\n\n@media only screen and (max-width: 575px) {\n  .carousel h3 {\n    font-size: 200%;\n  }\n}\n",""]),e.exports=t},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t,n,a=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return a.current()}}),[])}},148:function(e,t,n){"use strict";n.r(t),n.d(t,"Home",(function(){return F}));var r=n(21),a=n.n(r),c=n(22),o=n.n(c),u=n(23),l=n.n(u),i=n(16),s=n.n(i),f=n(14),d=n.n(f),m=n(0),p=n.n(m),b=n(13),v=n(1),h=n(2),O=n(37);var E=function(e,t){var n=Object(m.useRef)(!0);Object(m.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},g=n(140),j=n(141),x=Math.pow(2,31)-1;function w(){var e=Object(g.a)(),t=Object(m.useRef)();return Object(j.a)((function(){return clearTimeout(t.current)})),Object(m.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=x?t.current=setTimeout(r,a):function e(t,n,r){var a=r-Date.now();t.current=a<=x?setTimeout(n,a):setTimeout((function(){return e(t,n,r)}),x)}(t,r,Date.now()+a))},clear:n}}),[])}var y=n(5),N=n.n(y),k=n(52),C=n(26),S=n(33),R=n(49),A=Object(R.a)("carousel-caption",{Component:"div"}),I=Object(R.a)("carousel-item");function M(e,t){var n=0;return p.a.Children.map(e,(function(e){return p.a.isValidElement(e)?t(e,n++):e}))}var D=n(35),T=n(6),L=n(53),P={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:p.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:p.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var z=p.a.forwardRef((function(e,t){var n=Object(S.a)(e,{activeIndex:"onSelect"}),r=n.as,a=void 0===r?"div":r,c=n.bsPrefix,o=n.slide,u=n.fade,l=n.controls,i=n.indicators,s=n.activeIndex,f=n.onSelect,d=n.onSlide,b=n.onSlid,g=n.interval,j=n.keyboard,x=n.onKeyDown,y=n.pause,R=n.onMouseOver,A=n.onMouseOut,I=n.wrap,P=n.touch,z=n.onTouchStart,H=n.onTouchMove,U=n.onTouchEnd,K=n.prevIcon,V=n.prevLabel,F=n.nextIcon,J=n.nextLabel,X=n.className,_=n.children,Y=Object(h.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),q=Object(T.a)(c,"carousel"),B=Object(m.useRef)(null),G=Object(m.useState)("next"),Q=G[0],W=G[1],Z=Object(m.useState)(!1),$=Z[0],ee=Z[1],te=Object(m.useState)(s),ne=te[0],re=te[1];$||s===ne||(B.current?(W(B.current),B.current=null):W(s>ne?"next":"prev"),o&&ee(!0),re(s));var ae=p.a.Children.toArray(_).filter(p.a.isValidElement).length,ce=Object(m.useCallback)((function(e){if(!$){var t=ne-1;if(t<0){if(!I)return;t=ae-1}B.current="prev",f(t,e)}}),[$,ne,f,I,ae]),oe=Object(O.a)((function(e){if(!$){var t=ne+1;if(t>=ae){if(!I)return;t=0}B.current="next",f(t,e)}})),ue=Object(m.useRef)();Object(m.useImperativeHandle)(t,(function(){return{element:ue.current,prev:ce,next:oe}}));var le=Object(O.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ue.current)&&oe()})),ie="next"===Q?"left":"right";E((function(){o||(d&&d(ne,ie),b&&b(ne,ie))}),[ne]);var se=q+"-item-"+Q,fe=q+"-item-"+ie,de=Object(m.useCallback)((function(e){Object(L.a)(e),d&&d(ne,ie)}),[d,ne,ie]),me=Object(m.useCallback)((function(){ee(!1),b&&b(ne,ie)}),[b,ne,ie]),pe=Object(m.useCallback)((function(e){if(j&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ce(e);case"ArrowRight":return e.preventDefault(),void oe(e)}x&&x(e)}),[j,x,ce,oe]),be=Object(m.useState)(!1),ve=be[0],he=be[1],Oe=Object(m.useCallback)((function(e){"hover"===y&&he(!0),R&&R(e)}),[y,R]),Ee=Object(m.useCallback)((function(e){he(!1),A&&A(e)}),[A]),ge=Object(m.useRef)(0),je=Object(m.useRef)(0),xe=Object(m.useState)(!1),we=xe[0],ye=xe[1],Ne=w(),ke=Object(m.useCallback)((function(e){ge.current=e.touches[0].clientX,je.current=0,P&&ye(!0),z&&z(e)}),[P,z]),Ce=Object(m.useCallback)((function(e){e.touches&&e.touches.length>1?je.current=0:je.current=e.touches[0].clientX-ge.current,H&&H(e)}),[H]),Se=Object(m.useCallback)((function(e){if(P){var t=je.current;if(Math.abs(t)<=40)return;t>0?ce(e):oe(e)}Ne.set((function(){ye(!1)}),g),U&&U(e)}),[P,ce,oe,Ne,g,U]),Re=null!=g&&!ve&&!we&&!$,Ae=Object(m.useRef)();Object(m.useEffect)((function(){if(Re)return Ae.current=setInterval(document.visibilityState?le:oe,g),function(){clearInterval(Ae.current)}}),[Re,oe,g,le]);var Ie=Object(m.useMemo)((function(){return i&&Array.from({length:ae},(function(e,t){return function(e){f(t,e)}}))}),[i,ae,f]);return p.a.createElement(a,Object(v.a)({ref:ue},Y,{onKeyDown:pe,onMouseOver:Oe,onMouseOut:Ee,onTouchStart:ke,onTouchMove:Ce,onTouchEnd:Se,className:N()(X,q,o&&"slide",u&&q+"-fade")}),i&&p.a.createElement("ol",{className:q+"-indicators"},M(_,(function(e,t){return p.a.createElement("li",{key:t,className:t===ne?"active":null,onClick:Ie[t]})}))),p.a.createElement("div",{className:q+"-inner"},M(_,(function(e,t){var n=t===ne;return o?p.a.createElement(C.e,{in:n,onEnter:n?de:null,onEntered:n?me:null,addEndListener:k.a},(function(t){return p.a.cloneElement(e,{className:N()(e.props.className,n&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&fe)})})):p.a.cloneElement(e,{className:N()(e.props.className,n&&"active")})}))),l&&p.a.createElement(p.a.Fragment,null,(I||0!==s)&&p.a.createElement(D.a,{className:q+"-control-prev",onClick:ce},K,V&&p.a.createElement("span",{className:"sr-only"},V)),(I||s!==ae-1)&&p.a.createElement(D.a,{className:q+"-control-next",onClick:oe},F,J&&p.a.createElement("span",{className:"sr-only"},J))))}));z.displayName="Carousel",z.defaultProps=P,z.Caption=A,z.Item=I;var H=z,U=n(121),K=n(124);n(138);function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var F=function(e){l()(n,e);var t=V(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){var e=this.props.height;return p.a.createElement(H,{style:{height:e+"px"}},p.a.createElement(H.Item,null,p.a.createElement(K.LazyLoadImage,{effect:"blur",className:"d-block w-100",src:"../../../static/frontend/img/galleta2.webp",alt:"First slide",height:e}),p.a.createElement(H.Caption,null,p.a.createElement("h3",{style:{color:"white",textShadow:"0 0 5px #000"}},"HASTA 25% DE DESCUENTO POR COMPRAS ON-LINE"),p.a.createElement("p",{style:{color:"black",textShadow:"0 0 5px #fff"}},"No aplica para productos de tienda."),p.a.createElement(b.b,{to:"/favoritos"},p.a.createElement(U.a,null,"ORDENA AHORA")))),p.a.createElement(H.Item,null,p.a.createElement(K.LazyLoadImage,{effect:"blur",className:"d-block w-100",src:"../../../static/frontend/img/pan1.webp",alt:"Third slide",height:e}),p.a.createElement(H.Caption,null,p.a.createElement("h3",null,"CUPONES DE DESCUENTO POR COMPRAS ACUMULADAS"),p.a.createElement("p",null,"Aplica para todos los productos."),p.a.createElement(b.b,{to:"/favoritos"},p.a.createElement(U.a,null,"ORDENA AHORA")))),p.a.createElement(H.Item,null,p.a.createElement(K.LazyLoadImage,{effect:"blur",className:"d-block w-100",src:"../../../static/frontend/img/galleta1.webp",alt:"Third slide",height:e}),p.a.createElement(H.Caption,null,p.a.createElement("h3",null,"ENVIOS A TODA LA CIUDAD POR COMPRAS MAYORES 50 MIL"),p.a.createElement("p",null,"Menores a este tope solo para barrios en la comunda 2."),p.a.createElement(b.b,{to:"/favoritos"},p.a.createElement(U.a,null,"ORDENA AHORA")))))}}]),n}(m.Component);t.default=F}}]);