!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=t.parcelRequirede5a;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},t.parcelRequirede5a=o),o.register("iE7OH",(function(n,t){var r,i;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)o[n[t]]=e[n[t]]},i=function(e){var n=o[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=i[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=n),n}})),o.register("kMC0W",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var t,r=(t=o("8NIkP"))&&t.__esModule?t:{default:t}})),o.register("8NIkP",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}})),o.register("7AJDX",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,n){if(!e)return;if("string"==typeof e)return r.default(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r.default(e,n)};var t,r=(t=o("8NIkP"))&&t.__esModule?t:{default:t}})),o.register("8slrw",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.45017ec6.js","jvCn7":"6.03af396c.png","dU3kt":"3.5ae3b099.png","aFy5S":"2.1e485261.png","lYwN8":"11.233690eb.jpg","lUG9J":"volkova-marina.286e69cd.png","8vDYD":"nadiya-motorna.c65b5ef3.png","hbHfQ":"oksana-mitkovsaya.6122e256.png","h6zwi":"olya-kulish.133a50c9.png","jiON6":"teterina-anastasiya.d3c4a594.png"}'));var u;u=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("jvCn7");var a;a=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("dU3kt");var c;c=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("aFy5S");var s;s=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("lYwN8");var l=[{name:"Сінево",imgURL:n(u),width:"270",URL:"https://www.synevo.ua/ua"},{name:"Smile Baby",imgURL:n(c),width:"270",URL:"https://smilebaby.ua/"},{name:"Bübchen",imgURL:n(s),width:"270",URL:"https://buebchen.de/"},{name:"Goo.N",imgURL:n(a),width:"270",URL:"https://www.goondiaper.com/"}],d=document.querySelector(".js-partners"),f=l.map((function(e){var n=e.name,t=e.imgURL,r=e.width,i=e.URL;return'\n        <li class="partners__item">\n            <a\n                class="partners__link link"\n                href="'.concat(i,'"\n            >\n                <div class="partners__thumb-img">\n                    <img\n                        class="partners__img"\n                        src="').concat(t,'"\n                        alt="').concat(n,'"\n                        width="').concat(r,'"\n                    />\n                </div>\n                <p>').concat(n,"</p>\n            </a>\n        </li>\n    ")})).join("");d.insertAdjacentHTML("beforeend",f),d.addEventListener("mouseover",(function(e){if(!e.target.classList.contains("partners__img"))return;var n=e.target.closest(".partners__item");r=document.querySelector(".partners__item.animate__animated"),r&&r.classList.remove("animate__animated","animate__bounce"),t=n,t.classList.add("animate__animated","animate__bounce");var t;var r})),function(){var e={openMenuBtn:document.querySelector(".menu-open"),closeMenuBtn:document.querySelector(".menu-close"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu__list")};function n(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),e.menuList.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),e.body.classList.remove("no-scroll")}))}();var v;v=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("lUG9J");var m;m=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("8vDYD");var p;p=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("hbHfQ");var g;g=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("h6zwi");var b;b=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("jiON6");var y=[{name:"Волкова Маріна",imgURL:n(v),description:"Засновник компанії"},{name:"Тетерина Анастасія",imgURL:n(b),description:"Регіональний менеджер, лікар – неонатолог (м. Харків)"},{name:"Надія Моторна",imgURL:n(m),description:"Регіональний менеджер, сімейний лікар (м. Одеса)"},{name:"Оксана Митківська",imgURL:n(p),description:"Керівник відділу продажу"},{name:"Оля Куліш",imgURL:n(g),description:" "}],h=document.querySelector(".js-teams"),_=y.map((function(e){var n=e.name,t=e.imgURL,r=e.description;return'\n        <li class="teams__item embla__slide">\n        <div class="embla__slide__number">\n          <img\n            src="'.concat(t,'"\n            alt="').concat(n,'"\n            class="teams__img "\n          />\n          <h3 class="title">').concat(n,"</h3>\n          <p>").concat(r,"</p>\n        </div>\n      </li>\n      ")})).join("");h.insertAdjacentHTML("beforeend",_);var x={openModalBtns:document.querySelectorAll('[data-action="open-modal"]'),closeModalBtns:document.querySelectorAll('[data-action="close-modal"]')};function S(e){window.addEventListener("keydown",w);var n=e.currentTarget.dataset.id,t=document.getElementById(n).closest(".backdrop");t.addEventListener("click",E),t.classList.add("active"),document.body.classList.add("show-modal")}function L(){document.body.classList.remove("show-modal");var e=document.querySelector(".backdrop.active");e.removeEventListener("click",E),e.classList.remove("active"),window.removeEventListener("keydown",w)}function E(e){e.currentTarget===e.target&&L()}function w(e){"Escape"===e.code&&L()}x.openModalBtns.forEach((function(e){e.addEventListener("click",S)})),x.closeModalBtns.forEach((function(e){e.addEventListener("click",L)}));var O={};Object.defineProperty(O,"__esModule",{value:!0}),O.default=function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e};var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(e){return M.default(e)||H.default(e)||k.default(e)||j.default()};var M=R(o("kMC0W")),H=R(o("7AJDX")),j=R(o("8CtQK")),k=R(o("auk6i"));function R(e){return e&&e.__esModule?e:{default:e}}function I(e){return"number"==typeof e}function T(e){return"string"==typeof e}function D(e){return"boolean"==typeof e}function N(e){return"[object Object]"===Object.prototype.toString.call(e)}function q(e){return Math.abs(e)}function U(e){return Math.sign(e)}function P(e,n){return q(e-n)}function F(e){return J(e).map(Number)}function B(e){return e[C(e)]}function C(e){return Math.max(0,e.length-1)}function V(e,n){return n===C(e)}function z(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from(Array(e),(function(e,t){return n+t}))}function J(e){return Object.keys(e)}function W(e,n){return[e,n].reduce((function(e,n){return J(n).forEach((function(t){var r=e[t],i=n[t],o=N(r)&&N(i);e[t]=o?W(r,i):i})),e}),{})}function G(e,n){return void 0!==n.MouseEvent&&e instanceof n.MouseEvent}function Q(){var e=[];var n={add:function(t,r,i){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};if("addEventListener"in t)t.addEventListener(r,i,u),o=function(){return t.removeEventListener(r,i,u)};else{var a=t;a.addListener(i),o=function(){return a.removeListener(i)}}return e.push(o),n},clear:function(){e=e.filter((function(e){return e()}))}};return n}function $(e,n,t,r){var i=Q(),o=1e3/60,u=null,a=0,c=0;function s(e){if(c){u||(u=e);var i=e-u;for(u=e,a+=i;a>=o;)t(),a-=o;var l=q(a/o);r(l),c&&n.requestAnimationFrame(s)}}function l(){n.cancelAnimationFrame(c),u=null,a=0,c=0}return{init:function(){i.add(e,"visibilitychange",(function(){e.hidden&&(u=null,a=0)}))},destroy:function(){l(),i.clear()},start:function(){c||(c=n.requestAnimationFrame(s))},stop:l,update:t,render:r}}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=q(e-n);function r(n){return n<e}function i(e){return e>n}function o(e){return r(e)||i(e)}function u(t){return o(t)?r(t)?e:n:t}function a(e){return t?e-t*Math.ceil((e-n)/t):e}var c={length:t,max:n,min:e,constrain:u,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:a};return c}function Y(e,n,t){var r=X(0,e).constrain,i=e+1,o=u(n);function u(e){return t?q((i+e)%i):r(e)}function a(){return o}function c(){return Y(e,a(),t)}var s={get:a,set:function(e){return o=u(e),s},add:function(e){return c().set(a()+e)},clone:c};return s}function K(e,n,t,r,i,o,u,a,c,s,l,d,f,v,m,p,g,b,y){var h=e.cross,_=e.direction,x=["INPUT","SELECT","TEXTAREA"],S={passive:!1},L=Q(),E=Q(),w=X(50,225).constrain(v.measure(20)),O={mouse:300,touch:400},A={mouse:500,touch:600},M=m?43:25,H=!1,j=0,k=0,R=!1,I=!1,T=!1,N=!1;function F(e){var n=o.readPoint(e),t=o.readPoint(e,h),r=P(n,j),u=P(t,k);if(!I&&!N){if(!e.cancelable)return B(e);if(!(I=r>u))return B(e)}var c=o.pointerMove(e);r>p&&(T=!0),s.useFriction(.3).useDuration(1),a.start(),i.add(_(c)),e.preventDefault()}function B(e){var n=l.byDistance(0,!1).index!==d.get(),t=o.pointerUp(e)*(m?A:O)[N?"mouse":"touch"],r=function(e,n){var t=d.add(-1*U(e)),r=l.byDistance(e,!m).distance;return m||q(e)<w?r:g&&n?.5*r:l.byIndex(t.get(),0).distance}(_(t),n),i=function(e,n){if(0===e||0===n)return 0;if(q(e)<=q(n))return 0;var t=P(q(e),q(n));return q(t/e)}(t,r),u=M-10*i,a=b+i/50;I=!1,R=!1,E.clear(),s.useDuration(u).useFriction(a),c.distance(r,!m),N=!1,f.emit("pointerUp")}function C(e){T&&(e.stopPropagation(),e.preventDefault(),T=!1)}return{init:function(e){if(y){var a=n;L.add(a,"dragstart",(function(e){return e.preventDefault()}),S).add(a,"touchmove",(function(){}),S).add(a,"touchend",(function(){})).add(a,"touchstart",c).add(a,"mousedown",c).add(a,"touchcancel",B).add(a,"contextmenu",B).add(a,"click",C,!0)}function c(a){(D(y)||y(e,a))&&function(e){var a=G(e,r);if(N=a,T=m&&a&&!e.buttons&&H,H=P(i.get(),u.get())>=2,a&&0!==e.button)return;if(function(e){var n=e.nodeName||"";return x.includes(n)}(e.target))return;R=!0,o.pointerDown(e),s.useFriction(0).useDuration(0),i.set(u),function(){var e=N?t:n;E.add(e,"touchmove",F,S).add(e,"touchend",B).add(e,"mousemove",F,S).add(e,"mouseup",B)}(),j=o.readPoint(e),k=o.readPoint(e,h),f.emit("pointerDown")}(a)}},pointerDown:function(){return R},destroy:function(){L.clear(),E.clear()}}}function Z(e,n){var t,r;function i(e){return e.timeStamp}function o(t,r){var i=r||e.scroll,o="client".concat("x"===i?"X":"Y");return(G(t,n)?t:t.touches[0])[o]}return{pointerDown:function(e){return t=e,r=e,o(e)},pointerMove:function(e){var n=o(e)-o(r),u=i(e)-i(t)>170;return r=e,u&&(t=e),n},pointerUp:function(e){if(!t||!r)return 0;var n=o(r)-o(t),u=i(e)-i(t),a=i(e)-i(r)>170,c=n/u;return u&&!a&&q(c)>.1?c:0},readPoint:o}}function ee(e,n,t,r,i,o,u){var a,c,s=[],l=!1;function d(e){return i.measureSize(u.measure(e))}return{init:function(i){o&&(c=d(e),s=r.map(d),a=new ResizeObserver((function(u){l||(D(o)||o(i,u))&&function(o){var u=!0,a=!1,l=void 0;try{for(var f,v=o[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var m=f.value,p=m.target===e,g=r.indexOf(m.target),b=p?c:s[g];if(q(d(p?e:r[g])-b)>=.5){t.requestAnimationFrame((function(){i.reInit(),n.emit("resize")}));break}}}catch(e){a=!0,l=e}finally{try{u||null==v.return||v.return()}finally{if(a)throw l}}}(u)})),[e].concat(r).forEach((function(e){return a.observe(e)})))},destroy:function(){a&&a.disconnect(),l=!0}}}function ne(e,n,t,r,i){var o=i.measure(10),u=i.measure(50),a=X(.1,.99),c=!1;return{constrain:function(i){if(!c&&e.reachedAny(t.get())&&e.reachedAny(n.get())){var s=e.reachedMin(n.get())?"min":"max",l=q(e[s]-n.get()),d=t.get()-n.get(),f=a.constrain(l/u);t.subtract(d*f),!i&&q(d)<o&&(t.set(e.constrain(t.get())),r.useDuration(25).useBaseFriction())}},toggleActive:function(e){c=!e}}}function te(e,n,t,r){var i=X(n.min+.1,n.max+.1),o=i.reachedMin,u=i.reachedMax;return{loop:function(n){if(function(e){return 1===e?u(t.get()):-1===e&&o(t.get())}(n)){var i=e*(-1*n);r.forEach((function(e){return e.add(i)}))}}}}function re(e,n,t,r,i){var o=r.reachedAny,u=r.removeOffset,a=r.constrain;function c(e){return e.concat().sort((function(e,n){return q(e)-q(n)}))[0]}function s(n,r){var i=[n,n+t,n-t];if(!e)return i[0];if(!r)return c(i);var o=i.filter((function(e){return U(e)===r}));return o.length?c(o):B(i)-t}return{byDistance:function(t,r){var c=i.get()+t,l=function(t){var r=e?u(t):a(t);return{index:n.map((function(e,n){return{diff:s(e-r,0),index:n}})).sort((function(e,n){return q(e.diff)-q(n.diff)}))[0].index,distance:r}}(c),d=l.index,f=l.distance,v=!e&&o(c);return!r||v?{index:d,distance:t}:{index:d,distance:t+s(n[d]-f,0)}},byIndex:function(e,t){return{index:e,distance:s(n[e]-i.get(),t)}},shortcut:s}}function ie(e){var n=e;function t(e){return I(e)?e:e.get()}return{get:function(){return n},set:function(e){n=t(e)},add:function(e){n+=t(e)},subtract:function(e){n-=t(e)}}}function oe(e,n){var t="x"===e.scroll?function(e){return"translate3d(".concat(e,"px,0px,0px)")}:function(e){return"translate3d(0px,".concat(e,"px,0px)")},r=n.style,i=!1;return{clear:function(){i||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(n){i||(r.transform=t(e.direction(n)))},toggleActive:function(e){i=!e}}}function ue(e,n,t,r,i,o,u,a,c){var s,l=F(i),d=F(i).reverse(),f=(s=u[0],p(m(d,s),t,!1)).concat(function(){var e=n-u[0]-1;return p(m(l,e),-t,!0)}());function v(e,n){return e.reduce((function(e,n){return e-i[n]}),n)}function m(e,n){return e.reduce((function(e,t){return v(e,n)>0?e.concat([t]):e}),[])}function p(i,u,s){var l=function(e){return o.map((function(t,i){return{start:t-r[i]+.5+e,end:t+n-.5+e}}))}(u);return i.map((function(n){var r=s?0:-t,i=s?t:0,o=s?"end":"start",u=l[n][o];return{index:n,loopPoint:u,slideLocation:ie(-1),translate:oe(e,c[n]),target:function(){return a.get()>u?r:i}}}))}return{canLoop:function(){return f.every((function(e){var t=e.index;return v(l.filter((function(e){return e!==t})),n)<=.1}))},clear:function(){f.forEach((function(e){return e.translate.clear()}))},loop:function(){f.forEach((function(e){var n=e.target,t=e.translate,r=e.slideLocation,i=n();i!==r.get()&&(t.to(i),r.set(i))}))},loopPoints:f}}function ae(e,n,t){var r,i=!1;return{init:function(o){t&&(r=new MutationObserver((function(e){i||(D(t)||t(o,e))&&function(e){var t=!0,r=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(t=(u=a.next()).done);t=!0)if("childList"===u.value.type){o.reInit(),n.emit("slidesChanged");break}}catch(e){r=!0,i=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}}(e)}))).observe(e,{childList:!0})},destroy:function(){r&&r.disconnect(),i=!0}}}function ce(e,n,t,r,i,o,u,a,c){var s=e.startEdge,l=e.endEdge,d=e.direction,f=I(t);return{groupSlides:function(e){return f?function(e,n){return F(e).filter((function(e){return e%n==0})).map((function(t){return e.slice(t,t+n)}))}(e,t):function(e){return e.length?F(e).reduce((function(t,f,v){var m=B(t)||0,p=0===m,g=f===C(e),b=i[s]-o[m][s],y=i[s]-o[f][l],h=!r&&p?d(u):0,_=q(y-(!r&&g?d(a):0)-(b+h));return v&&_>n+c&&t.push(f),g&&t.push(e.length),t}),[]).map((function(n,t,r){var i=Math.max(r[t-1]||0);return e.slice(i,n)})):[]}(e)}}}function se(e,n,t,r,i,o,u){var a=o.align,c=o.axis,s=o.direction,l=o.startIndex,d=o.loop,f=o.duration,v=o.dragFree,m=o.dragThreshold,p=o.inViewThreshold,g=o.slidesToScroll,b=o.skipSnaps,y=o.containScroll,h=o.watchResize,_=o.watchSlides,x=o.watchDrag,S={measure:function(e){var n=e.offsetTop,t=e.offsetLeft,r=e.offsetWidth,i=e.offsetHeight;return{top:n,right:t+r,bottom:n+i,left:t,width:r,height:i}}},L=S.measure(n),E=t.map(S.measure),w=function(e,n){var t="rtl"===n,r="y"===e,i=!r&&t?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":t?"right":"left",endEdge:r?"bottom":t?"left":"right",measureSize:function(e){var n=e.height,t=e.width;return r?n:t},direction:function(e){return e*i}}}(c,s),O=w.measureSize(L),A=function(e){return{measure:function(n){return e*(n/100)}}}(O),M=function(e,n){var t={start:function(){return 0},center:function(e){return r(e)/2},end:r};function r(e){return n-e}return{measure:function(r,i){return T(e)?t[e](r):e(n,r,i)}}}(a,O),H=!d&&!!y,j=function(e,n,t,r,i,o){var u=e.measureSize,a=e.startEdge,c=e.endEdge,s=t[0]&&i,l=function(){if(!s)return 0;var e=t[0];return q(n[a]-e[a])}(),d=function(){if(!s)return 0;var e=o.getComputedStyle(B(r));return parseFloat(e.getPropertyValue("margin-".concat(c)))}(),f=t.map(u),v=t.map((function(e,n,t){var r=!n,i=V(t,n);return r?f[n]+l:i?f[n]+d:t[n+1][a]-e[a]})).map(q);return{slideSizes:f,slideSizesWithGaps:v,startGap:l,endGap:d}}(w,L,E,t,d||!!y,i),k=j.slideSizes,R=j.slideSizesWithGaps,D=ce(w,O,g,d,L,E,j.startGap,j.endGap,2),N=function(e,n,t,r,i){var o=e.startEdge,u=e.endEdge,a=i.groupSlides,c=a(r).map((function(e){return B(e)[u]-e[0][o]})).map(q).map(n.measure),s=r.map((function(e){return t[o]-e[o]})).map((function(e){return-q(e)})),l=a(s).map((function(e){return e[0]})).map((function(e,n){return e+c[n]}));return{snaps:s,snapsAligned:l}}(w,M,L,E,D),W=N.snaps,G=N.snapsAligned,se=-B(W)+B(R),le=function(e,n,t,r,i){var o,u,a,c,s=X(-n+e,0),l=t.map((function(e,n){var r=s.min,i=s.max,o=s.constrain(e),u=!n,a=V(t,n);return u?i:a||v(r,o)?r:v(i,o)?i:o})).map((function(e){return parseFloat(e.toFixed(3))})),d=(o=l[0],u=B(l),a=l.lastIndexOf(o),c=l.indexOf(u)+1,X(a,c)),f=function(){if(n<=e+i)return[s.max];if("keepSnaps"===r)return l;var t=d.min,o=d.max;return l.slice(t,o)}();function v(e,n){return P(e,n)<1}return{snapsContained:f,scrollContainLimit:d}}(O,se,G,y,2),de=le.snapsContained,fe=le.scrollContainLimit,ve=H?de:G,me=function(e,n,t){var r=n[0];return{limit:X(t?r-e:B(n),r)}}(se,ve,d).limit,pe=Y(C(ve),l,d),ge=pe.clone(),be=F(t),ye=$(r,i,(function(){return n=(e=ke).dragHandler,t=e.scrollBody,r=e.scrollBounds,e.options.loop||r.constrain(n.pointerDown()),void t.seek();var e,n,t,r}),(function(e){return function(e,n){var t=e.scrollBody,r=e.translate,i=e.location,o=e.offsetLocation,u=e.scrollLooper,a=e.slideLooper,c=e.dragHandler,s=e.animation,l=e.eventHandler,d=e.options.loop,f=t.velocity(),v=t.settled();v&&!c.pointerDown()&&(s.stop(),l.emit("settle")),v||l.emit("scroll"),o.set(i.get()-f+f*n),d&&(u.loop(t.direction()),a.loop()),r.to(o.get())}(ke,e)})),he=ve[pe.get()],_e=ie(he),xe=ie(he),Se=ie(he),Le=function(e,n,t,r,i){var o=0,u=0,a=r,c=i,s=e.get(),l=0;function d(e){return a=e,v}function f(e){return c=e,v}var v={direction:function(){return u},duration:function(){return a},velocity:function(){return o},seek:function(){var n=t.get()-e.get(),r=0;return a?(o+=n/a,s+=o*=c,e.add(o),r=s-l):(o=0,e.set(t),r=n),u=U(r),l=s,v},settled:function(){return q(t.get()-n.get())<.001},useBaseFriction:function(){return f(i)},useBaseDuration:function(){return d(r)},useFriction:f,useDuration:d};return v}(_e,xe,Se,f,.68),Ee=re(d,ve,se,me,Se),we=function(e,n,t,r,i,o,u){function a(i){var a=i.distance,c=i.index!==n.get();o.add(a),a&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(t.set(n.get()),n.set(i.index),u.emit("select"))}return{distance:function(e,n){a(i.byDistance(e,n))},index:function(e,t){var r=n.clone().set(e);a(i.byIndex(r.get(),t))}}}(ye,pe,ge,Le,Ee,Se,u),Oe=function(e){var n=e.max,t=e.length;return{get:function(e){return t?(e-n)/-t:0}}}(me),Ae=Q(),Me=function(e,n,t,r){var i,o={},u=null,a=null,c=!1;function s(e){return J(o).reduce((function(n,t){var r=parseInt(t),i=o[r].isIntersecting;return(e&&i||!e&&!i)&&n.push(r),n}),[])}var l={init:function(){i=new IntersectionObserver((function(e){c||(e.forEach((function(e){var t=n.indexOf(e.target);o[t]=e})),u=null,a=null,t.emit("slidesInView"))}),{root:e.parentElement,threshold:r}),n.forEach((function(e){return i.observe(e)}))},destroy:function(){i&&i.disconnect(),c=!0},get:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(e&&u)return u;if(!e&&a)return a;var n=s(e);return e&&(u=n),e||(a=n),n}};return l}(n,t,u,p),He=function(e,n,t,r,i,o){var u,a,c=i.groupSlides,s=r.min,l=r.max;return{slideRegistry:(u=c(o),a=!e||"keepSnaps"===n,1===t.length?[o]:a?u:u.slice(s,l).map((function(e,n,t){var r=!n,i=V(t,n);return r?z(B(t[0])+1):i?z(C(o)-B(t)[0]+1,B(t)[0]):e})))}}(H,y,ve,fe,D,be).slideRegistry,je=function(e,n,t,r,i,o){var u=0;function a(e){"Tab"===e.code&&(u=(new Date).getTime())}function c(a){o.add(a,"focus",(function(){if(!((new Date).getTime()-u>10)){e.scrollLeft=0;var o=n.indexOf(a),c=t.findIndex((function(e){return e.includes(o)}));I(c)&&(i.useDuration(0),r.index(c,0))}}),{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",a,!1),n.forEach(c)}}}(e,t,He,we,Le,Ae),ke={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:L,slideRects:E,animation:ye,axis:w,dragHandler:K(w,e,r,i,Se,Z(w,i),_e,ye,we,Le,Ee,pe,u,A,v,m,b,.68,x),eventStore:Ae,percentOfView:A,index:pe,indexPrevious:ge,limit:me,location:_e,offsetLocation:xe,options:o,resizeHandler:ee(n,u,i,t,w,h,S),scrollBody:Le,scrollBounds:ne(me,xe,Se,Le,A),scrollLooper:te(se,me,xe,[_e,xe,Se]),scrollProgress:Oe,scrollSnapList:ve.map(Oe.get),scrollSnaps:ve,scrollTarget:Ee,scrollTo:we,slideLooper:ue(w,O,se,k,R,W,ve,xe,t),slideFocus:je,slidesHandler:ae(n,u,_),slidesInView:Me,slideIndexes:be,slideRegistry:He,slidesToScroll:D,target:Se,translate:oe(w,n)};return ke}var le={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function de(e){function n(e,n){return W(e,n||{})}return{mergeOptions:n,optionsAtMedia:function(t){var r=t.breakpoints||{},i=J(r).filter((function(n){return e.matchMedia(n).matches})).map((function(e){return r[e]})).reduce((function(e,t){return n(e,t)}),{});return n(t,i)},optionsMediaQueries:function(n){return n.map((function(e){return J(e.breakpoints||{})})).reduce((function(e,n){return e.concat(n)}),[]).map(e.matchMedia)}}}function fe(e,t,r){var i,o,u,a,c=e.ownerDocument,s=c.defaultView,l=de(s),d=function(e){var t=[];return{init:function(r,i){return(t=i.filter((function(n){var t=n.options;return!1!==e.optionsAtMedia(t).active}))).forEach((function(n){return n.init(r,e)})),i.reduce((function(e,t){return Object.assign(e,n(O)({},t.name,t))}),{})},destroy:function(){t=t.filter((function(e){return e.destroy()}))}}}(l),f=Q(),v=function(){var e,n={};function t(e){return n[e]||[]}var r={init:function(n){e=n},emit:function(n){return t(n).forEach((function(t){return t(e,n)})),r},off:function(e,i){return n[e]=t(e).filter((function(e){return e!==i})),r},on:function(e,i){return n[e]=t(e).concat([i]),r}};return r}(),m=l.mergeOptions,p=l.optionsAtMedia,g=l.optionsMediaQueries,b=v.on,y=v.off,h=v.emit,_=H,x=!1,S=m(le,fe.globalOptions),L=m(S),E=[];function w(n){var t=se(e,u,a,c,s,n,v);return n.loop&&!t.slideLooper.canLoop()?w(Object.assign({},n,{loop:!1})):t}function M(t,r){x||(S=m(S,t),L=p(S),E=r||E,function(){var n=L.container,t=L.slides,r=T(n)?e.querySelector(n):n;u=r||e.children[0];var i=T(t)?u.querySelectorAll(t):t;a=[].slice.call(i||u.children)}(),i=w(L),g([S].concat(n(A)(E.map((function(e){return e.options}))))).forEach((function(e){return f.add(e,"change",H)})),L.active&&(i.translate.to(i.location.get()),i.animation.init(),i.slidesInView.init(),i.slideFocus.init(),i.eventHandler.init(I),i.resizeHandler.init(I),i.slidesHandler.init(I),i.options.loop&&i.slideLooper.loop(),u.offsetParent&&a.length&&i.dragHandler.init(I),o=d.init(I,E)))}function H(e,n){var t=R();j(),M(m({startIndex:t},e),n),v.emit("reInit")}function j(){i.dragHandler.destroy(),i.eventStore.clear(),i.translate.clear(),i.slideLooper.clear(),i.resizeHandler.destroy(),i.slidesHandler.destroy(),i.slidesInView.destroy(),i.animation.destroy(),d.destroy(),f.clear()}function k(e,n,t){L.active&&!x&&(i.scrollBody.useBaseFriction().useDuration(!0===n?0:L.duration),i.scrollTo.index(e,t||0))}function R(){return i.index.get()}var I={canScrollNext:function(){return i.index.add(1).get()!==R()},canScrollPrev:function(){return i.index.add(-1).get()!==R()},containerNode:function(){return u},internalEngine:function(){return i},destroy:function(){x||(x=!0,f.clear(),j(),v.emit("destroy"))},off:y,on:b,emit:h,plugins:function(){return o},previousScrollSnap:function(){return i.indexPrevious.get()},reInit:_,rootNode:function(){return e},scrollNext:function(e){k(i.index.add(1).get(),e,-1)},scrollPrev:function(e){k(i.index.add(-1).get(),e,1)},scrollProgress:function(){return i.scrollProgress.get(i.location.get())},scrollSnapList:function(){return i.scrollSnapList},scrollTo:k,selectedScrollSnap:R,slideNodes:function(){return a},slidesInView:function(){return i.slidesInView.get()},slidesNotInView:function(){return i.slidesInView.get(!1)}};return M(t,r),setTimeout((function(){return v.emit("init")}),0),I}fe.globalOptions=void 0;var ve,me,pe,ge,be,ye=document.querySelector(".embla"),he=ye.querySelector(".embla__viewport"),_e=ye.querySelector(".embla__button--prev"),xe=ye.querySelector(".embla__button--next"),Se=ye.querySelector(".embla__dots"),Le=fe(he,{loop:!1}),Ee=function(e,n,t){var r=function(){e.scrollPrev()},i=function(){e.scrollNext()};n.addEventListener("click",r,!1),t.addEventListener("click",i,!1);var o=function(e,n,t){var r=function(){e.canScrollPrev()?n.removeAttribute("disabled"):n.setAttribute("disabled","disabled"),e.canScrollNext()?t.removeAttribute("disabled"):t.setAttribute("disabled","disabled")};return e.on("select",r).on("init",r).on("reInit",r),function(){n.removeAttribute("disabled"),t.removeAttribute("disabled")}}(e,n,t);return function(){o(),n.removeEventListener("click",r,!1),t.removeEventListener("click",i,!1)}}(Le,_e,xe),we=(me=Se,pe=[],ge=function(){me.innerHTML=ve.scrollSnapList().map((function(){return'<button class="embla__dot" type="button"></button>'})).join(""),(pe=Array.from(me.querySelectorAll(".embla__dot"))).forEach((function(e,n){e.addEventListener("click",(function(){return function(e){ve.scrollTo(e)}(n)}),!1)}))},be=function(){var e=ve.previousScrollSnap(),n=ve.selectedScrollSnap();pe[e].classList.remove("embla__dot--selected"),pe[n].classList.add("embla__dot--selected")},(ve=Le).on("init",ge).on("reInit",ge).on("init",be).on("reInit",be).on("select",be),function(){me.innerHTML=""});Le.on("destroy",Ee),Le.on("destroy",we);var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.default=function(e,n){return Ae.default(e)||Me.default(e,n)||je.default(e,n)||He.default()};var Ae=ke(o("8slrw")),Me=ke(o("7AJDX")),He=ke(o("ifqQW")),je=ke(o("auk6i"));function ke(e){return e&&e.__esModule?e:{default:e}}var Re,Ie={};Object.defineProperty(Ie,"__esModule",{value:!0}),Ie.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var Te="Expected a function",De=/^\s+|\s+$/g,Ne=/^[-+]0x[0-9a-f]+$/i,qe=/^0b[01]+$/i,Ue=/^0o[0-7]+$/i,Pe=parseInt,Fe="object"==typeof t&&t&&t.Object===Object&&t,Be="object"==typeof self&&self&&self.Object===Object&&self,Ce=Fe||Be||Function("return this")(),Ve=Object.prototype.toString,ze=Math.max,Je=Math.min,We=function(){return Ce.Date.now()};function Ge(e,n,t){var r,i,o,u,a,c,s=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(Te);function v(n){var t=r,o=i;return r=i=void 0,s=n,u=e.apply(o,t)}function m(e){return s=e,a=setTimeout(g,n),l?v(e):u}function p(e){var t=e-c;return void 0===c||t>=n||t<0||d&&e-s>=o}function g(){var e=We();if(p(e))return b(e);a=setTimeout(g,function(e){var t=n-(e-c);return d?Je(t,o-(e-s)):t}(e))}function b(e){return a=void 0,f&&r?v(e):(r=i=void 0,u)}function y(){var e=We(),t=p(e);if(r=arguments,i=this,c=e,t){if(void 0===a)return m(c);if(d)return a=setTimeout(g,n),v(c)}return void 0===a&&(a=setTimeout(g,n)),u}return n=$e(n)||0,Qe(t)&&(l=!!t.leading,o=(d="maxWait"in t)?ze($e(t.maxWait)||0,n):o,f="trailing"in t?!!t.trailing:f),y.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=c=i=a=void 0},y.flush=function(){return void 0===a?u:b(We())},y}function Qe(e){var t=void 0===e?"undefined":n(Ie)(e);return!!e&&("object"==t||"function"==t)}function $e(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":n(Ie)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==Ve.call(e)}(e))return NaN;if(Qe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Qe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(De,"");var r=qe.test(e);return r||Ue.test(e)?Pe(e.slice(2),r?2:8):Ne.test(e)?NaN:+e}Re=function(e,n,t){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(Te);return Qe(t)&&(r="leading"in t?!!t.leading:r,i="trailing"in t?!!t.trailing:i),Ge(e,n,{leading:r,maxWait:n,trailing:i})};var Xe,Ye="feedback-msg",Ke={},Ze={form:document.querySelector(".js-contact-form")};Ze.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(Ye)})),Ze.form.addEventListener("input",n(Re)((function(e){Ke[e.target.name]=e.target.value,localStorage.setItem(Ye,JSON.stringify(Ke))}),200)),(Xe=JSON.parse(localStorage.getItem(Ye)))&&Object.entries(Xe).forEach((function(e){var t=n(Oe)(e,2),r=t[0],i=t[1];Ze.form.elements[r].value=i}))}();
//# sourceMappingURL=index.45017ec6.js.map