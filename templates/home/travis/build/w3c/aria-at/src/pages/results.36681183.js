(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{58:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),r=n.n(a),l=n(15),s=n(24),c={};function u(){var e=Object(l.useRouteData)().allResults,t=!0,n=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var m=o.value;c[m.designPattern]?c[m.designPattern].push(m):c[m.designPattern]=[m]}}catch(f){n=!0,u=f}finally{try{t||null==i.return||i.return()}finally{if(n)throw u}}return r.a.createElement(a.Fragment,null,r.a.createElement(l.Head,null,r.a.createElement("title",null,"ARIA-AT: All Test Results")),r.a.createElement("nav",{"aria-label":"Breadcrumb"},r.a.createElement("a",{href:"../../"},"ARIA-AT Home")),r.a.createElement("h1",null,"Test Run Results"),r.a.createElement("ul",null,Object.keys(c).map((function(e){return r.a.createElement("li",null,function(e){return r.a.createElement("li",null,"Test results for design pattern: ",e,r.a.createElement("ul",null,c[e].map((function(e){return r.a.createElement("li",null,function(e){var t=e.results.length,n=e.assistiveTechnology.name,l=e.assistiveTechnology.version?" (".concat(e.assistiveTechnology.version,")"):"",c=e.browser.name,u=e.browser.version?" (".concat(e.browser.version,")"):"";return r.a.createElement(a.Fragment,null,r.a.createElement(s.a,{to:"/aria-at/results/test-run/".concat(e.id)},"".concat(t," tests of ").concat(n).concat(l," run on ").concat(c).concat(u)),r.a.createElement("div",{className:"results-details"},"file: ",e.fileName,".json"))}(e))}))))}(e))}))))}}}]);