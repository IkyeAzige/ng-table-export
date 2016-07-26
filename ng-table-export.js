/*! ngTableExport v0.1.0 by Vitalii Savchuk(esvit666@gmail.com) - https://github.com/esvit/ng-table-export - New BSD License */

angular.module("ngTableExport",[]).config(["$compileProvider",function(a){a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/)}]).directive("exportCsv",["$parse","$timeout","ngTableEventsChannel",function(a,b,c){var d=",",e="data:text/csv;charset=UTF-8,";return{restrict:"A",scope:!1,link:function(f,g,h){function i(a){return h.noQuotation?a.replace(/^\s\s*/,"").replace(/\s*\s$/,""):'"'+a.replace(/^\s\s*/,"").replace(/\s*\s$/,"").replace(/"/g,'""')+'"'}function j(){l="";var a=g.find("tr");angular.forEach(a,function(a,b){var c=angular.element(a),e=c.find("th"),f="";c.hasClass("ng-table-filters")||(0===e.length&&(e=c.find("td")),1!==b&&(angular.forEach(e,function(a){f+=i(angular.element(a).text())+Array.apply(null,Array(a.colSpan)).map(function(){return d}).join("")}),f=f.slice(0,f.length-1)),l+=f+"\n")}),l="sep="+d+"\n"+l}function k(a,c,d){var e=document.createElement("a");e.style.display="none",e.href=a,e.download=c,e.target="_blank",b(function(){try{document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch(a){throw d.logError&&d.logError("NG Table Export Error saving file on client."),a}},0,!1)}var l="";h.delimiter&&(d=h.delimiter,"TAB"===d&&(d="	"));var m={generate:function(a,d,g){var i=h.ngTable,g=g||f.$parent.tableParams,m=g?g.settings():{},n=g?g.count():{},o=g?m.total:{};if(i&&o>n){var p=c.onAfterReloadData(function(){p(),b(function(){j(),g.count(n),g.reload(),k(e+encodeURIComponent(l),d,f)},1e3,!1)});g.count(1/0),g.reload()}else j(),k(e+encodeURIComponent(l),d)}};a(h.exportCsv).assign(f.$parent,m)}}}]);
//# sourceMappingURL=ng-table-export.js.map