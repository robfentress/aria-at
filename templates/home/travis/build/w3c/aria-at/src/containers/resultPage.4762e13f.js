(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(50),l=n.n(a),r=n(51),u=n.n(r),s=n(52),c=n.n(s),o=n(53),i=n.n(o),m=n(54),d=n.n(m),E=n(0),f=n.n(E),v=n(15),p=function(e){function t(e){return l()(this,t),c()(this,i()(t).call(this,e))}return d()(t,e),u()(t,[{key:"renderResultRow",value:function(e,t){var n=e.details;return f.a.createElement("tr",{key:n.name},f.a.createElement("td",null,f.a.createElement("a",{href:"#test-".concat(t.toString())},n.name)),f.a.createElement("td",null,n.summary[1].pass," / ",n.summary[1].fail),f.a.createElement("td",null,n.summary[2].pass," / ",n.summary[2].fail),f.a.createElement("td",null,n.summary[3].pass," / ",n.summary[3].fail),f.a.createElement("td",null,n.summary.unexpectedCount))}},{key:"renderResultDetails",value:function(e,t){var n=this,a=e.details;return f.a.createElement("section",null,f.a.createElement("h2",{id:"test-".concat(t.toString())},'Details for test "',a.name,'"'),f.a.createElement("table",{className:"results-table"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Command"),f.a.createElement("th",null,"Support"),f.a.createElement("th",null,"Details"))),f.a.createElement("tbody",null,a.commands.map((function(e){return n.renderCommandResults(e)})))))}},{key:"renderCommandResults",value:function(e){return f.a.createElement("tr",null,f.a.createElement("td",null,e.command),f.a.createElement("td",null,e.support),f.a.createElement("td",null,f.a.createElement("p",null,'JAWS output: "',e.output,'"'),this.renderPassingAssertions(e.assertions),this.renderFailingAssertions(e.assertions),this.renderUnexpectedBehavior(e.unexpected_behaviors)))}},{key:"renderPassingAssertions",value:function(e){var t=e.filter((function(e){return e.pass}));if(t.length)return f.a.createElement("div",null,"Passing Assertions:",f.a.createElement("ul",null,t.map((function(e){return f.a.createElement("li",null,e.assertion)}))))}},{key:"renderFailingAssertions",value:function(e){var t=e.filter((function(e){return e.fail}));if(t.length)return f.a.createElement("div",null,"Failing Assertions:",f.a.createElement("ul",null,t.map((function(e){return f.a.createElement("li",null,e.assertion)}))))}},{key:"renderUnexpectedBehavior",value:function(e){if(e.length)return f.a.createElement("div",null,"Unexpected Behaviors:",f.a.createElement("ul",null,e.map((function(e){return f.a.createElement("li",null,e)}))))}},{key:"render",value:function(){var e=this,t=this.props.resultsData,n=t.assistiveTechnology,a=t.browser,l=t.designPattern,r=t.results,u=r.length,s=t.fileName?"".concat(t.fileName,".json"):"results_".concat(n.name,"-").concat(n.version,"_").concat(a.name,"-").concat(a.version,"_").concat((new Date).toISOString(),".json"),c={1:[0,0],2:[0,0],3:[0,0]},o=0,i=!0,m=!1,d=void 0;try{for(var p,h=r[Symbol.iterator]();!(i=(p=h.next()).done);i=!0){var y=p.value.details;o+=y.summary.unexpectedCount;for(var g=1;g<=3;g++)c[g][0]+=y.summary[g].pass,c[g][1]+=y.summary[g].pass+y.summary[g].fail}}catch(b){m=!0,d=b}finally{try{i||null==h.return||h.return()}finally{if(m)throw d}}return f.a.createElement(E.Fragment,null,f.a.createElement(v.Head,null,f.a.createElement("title",null,"ARIA-AT: Test Run Results")),f.a.createElement("section",null,f.a.createElement("h1",null,'Results for test run of pattern "'.concat(l,'" (').concat(u," test").concat(1===u?"":"s",")")),f.a.createElement("p",null,"".concat(n.name," (").concat(n.version,") on ").concat(a.name," (").concat(a.version,")")),s&&f.a.createElement("p",null,"Loaded from result file: ",s),f.a.createElement("p",null,f.a.createElement("a",{download:s,href:"data:application/json;charset=utf-8;,".concat(encodeURIComponent(JSON.stringify(t)))},"Download Results JSON")),f.a.createElement("h2",null,"Summary of tests"),f.a.createElement("table",{className:"results-table"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Test"),f.a.createElement("th",null,f.a.createElement("div",null,"Must Have"),f.a.createElement("div",null,"(pass/fail)")),f.a.createElement("th",null,f.a.createElement("div",null,"Should Have"),f.a.createElement("div",null,"(pass/fail)")),f.a.createElement("th",null,f.a.createElement("div",null,"Nice to Have"),f.a.createElement("div",null,"(pass/fail)")),f.a.createElement("th",null,f.a.createElement("div",null,"Unexpected Behaviors"),f.a.createElement("div",null,"(total count)")))),f.a.createElement("tbody",null,r.map((function(t,n){return e.renderResultRow(t,n)})),f.a.createElement("tr",null,f.a.createElement("td",null,"Support"),f.a.createElement("td",null,c[1][1]?"".concat(Math.round(c[1][0]/c[1][1]*100),"%"):"-"),f.a.createElement("td",null,c[2][1]?"".concat(Math.round(c[2][0]/c[2][1]*100),"%"):"-"),f.a.createElement("td",null,c[3][1]?"".concat(Math.round(c[3][0]/c[3][1]*100),"%"):"-"),f.a.createElement("td",null,o?"".concat(o," command(s) produced unexpected behaviors"):"No unexpected behaviors"))))),r.map((function(t,n){return e.renderResultDetails(t,n)})))}}]),t}(E.Component)},61:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),l=n.n(a),r=n(15),u=(n(24),n(133));function s(){var e=Object(r.useRouteData)().result;e.results.length,e.assistiveTechnology.name,e.assistiveTechnology.version,e.browser.name,e.browser.version;return l.a.createElement("div",null,l.a.createElement(u.a,{resultsData:e}))}}}]);