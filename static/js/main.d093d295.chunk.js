(this.webpackJsonpdissertation=this.webpackJsonpdissertation||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),r=t(7),a=t.n(r),s=(t(14),t(3)),c=t.n(s),l=t(6),d=t(8),u=(t(16),t(17),t(9)),p=function(e){var n=e.target.innerHTML;Object(u.a)(document.querySelectorAll(".page-info")).forEach((function(e){return e.style.display="none"})),document.getElementById(n).style.display="block"},f=t(0),h=function(){return Object(f.jsx)("div",{className:"navigation-wrapper",children:Object(f.jsx)("ul",{className:"navigation",children:["Home","News","Contact","About"].map((function(e,n){return Object(f.jsx)("li",{children:Object(f.jsx)("a",{onClick:p,children:e})},n)}))})})},w=(t(19),function(){return Object(f.jsxs)("div",{className:"page-info-wrapper",children:[Object(f.jsx)("div",{className:"page-info",id:"Home","data-testid":"home-info",children:"Something about home"}),Object(f.jsx)("div",{className:"page-info",id:"News","data-testid":"news-info",children:"Something about news"}),Object(f.jsx)("div",{className:"page-info",id:"Contact","data-testid":"contact-info",children:"Something about contact"}),Object(f.jsx)("div",{className:"page-info",id:"About","data-testid":"about-info",children:"Something about about"})]})});var v=function(){var e=i.a.useState(!0),n=Object(d.a)(e,2),t=n[0],o=n[1];i.a.useEffect((function(){if(t)o(!1);else{var e=document.getElementById("installContainer"),n=document.getElementById("butInstall"),i=document.querySelector(".install-promotion");if(window.addEventListener("beforeinstallprompt",(function(n){console.log("\ud83d\udc4d","beforeinstallprompt",n),n.preventDefault(),window.deferredPrompt=n,i.style.display="block",e.classList.toggle("hidden",!1)})),n.addEventListener("click",Object(l.a)(c.a.mark((function n(){var t,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("\ud83d\udc4d","butInstall-clicked"),i.style.display="none",t=window.deferredPrompt){n.next=5;break}return n.abrupt("return");case 5:return t.prompt(),n.next=8,t.userChoice;case 8:o=n.sent,console.log("\ud83d\udc4d","userChoice",o),window.deferredPrompt=null,e.classList.toggle("hidden",!0);case 12:case"end":return n.stop()}}),n)})))),window.addEventListener("appinstalled",(function(e){console.log("\ud83d\udc4d","appinstalled",e),i.style.display="none",window.deferredPrompt=null})),"http:"===window.location.protocol){var r=document.getElementById("requireHTTPS");r.querySelector("a").href=window.location.href.replace("http://","https://"),r.classList.remove("hidden")}}})),"serviceWorker"in navigator&&navigator.serviceWorker.register("https://assetbekov-almar.github.io/dissertation-pwa/service-worker.js");var r=function(){var e=Object(l.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.deferredPrompt.prompt(),e.next=3,window.deferredPrompt.userChoice;case 3:n=e.sent,t=n.outcome,console.log("User response to the install prompt: ".concat(t)),window.deferredPrompt=null;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("appinstalled",(function(){window.deferredPrompt=null,console.log("PWA was installed")})),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)(h,{}),Object(f.jsx)("h2",{className:"install-promotion",children:"You can install PWA now."}),Object(f.jsxs)("p",{id:"requireHTTPS",className:"hidden",children:[Object(f.jsx)("b",{children:"STOP!"})," This page ",Object(f.jsx)("b",{children:"must"})," be served over HTTPS. Please ",Object(f.jsx)("a",{children:"reload this page via HTTPS"}),"."]}),Object(f.jsx)("div",{id:"installContainer",className:"hidden",children:Object(f.jsx)("button",{id:"butInstall",type:"button",onClick:function(){return r},children:"Install"})})]}),Object(f.jsx)(w,{})]})},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),o(e),i(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dissertation-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/dissertation-pwa","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(n,e)}))}}(),b()}},[[20,1,2]]]);
//# sourceMappingURL=main.d093d295.chunk.js.map