(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{58:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(0),r=n.n(a),s=n(15),l=n(24);function c(){var e=Object(s.useRouteData)().allResults;return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Test Run Results"),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",null,function(e){var t=e.results.length,n=e.assistiveTechnology.name,s=e.assistiveTechnology.version,c=e.browser.name,u=e.browser.version;return r.a.createElement(a.Fragment,null,r.a.createElement(l.a,{to:"/aria-at/results/test-run/".concat(e.id)},"Results for ".concat(t," tests of ").concat(n," (").concat(s,") run on ").concat(c," (").concat(u,")")),r.a.createElement("div",{className:"results-details"},e.fileName))}(e))}))))}}}]);