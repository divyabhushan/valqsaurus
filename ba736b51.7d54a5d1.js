(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),i=n(9),o=(n(0),n(175)),a=n(176),l={id:"node",title:"Node"},c={id:"model/node",title:"Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/model/node.mdx",permalink:"/valqsaurus/docs/model/node",sidebar:"sideBar",previous:{title:"Creating a new ValQ Model",permalink:"/valqsaurus/docs/model/new"},next:{title:"Data Series",permalink:"/valqsaurus/docs/model/data-series"}},s=[{value:"Quick Editor in Node Tab",id:"quick-editor-in-node-tab",children:[]},{value:"Additional Properties of Node Tab",id:"additional-properties-of-node-tab",children:[]}],d={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each node represents a metric, and can contain the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name of the value driver or KPI"),Object(o.b)("li",{parentName:"ul"},"A sparkline graph indicating the recent trend"),Object(o.b)("li",{parentName:"ul"},"The value of the metric in bold letters")),Object(o.b)("img",{alt:"Node Details",src:Object(a.a)("/doc-images/13.1.png")}),Object(o.b)("p",null,"In addition, each node also contains several performance metrics (see\nFigure below). They are listed as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The Fiscal Year variance of the metric vs. a benchmark (in this\ncase, Sales Forecast vs. Sales Budget) \u2013 this is shown in both % and\nabsolute terms"),Object(o.b)("li",{parentName:"ul"},"Absolute value of the metric for the current month (usually the\nfirst period in the series)"),Object(o.b)("li",{parentName:"ul"},"Variance of the metric vs. a benchmark for the current month \u2013 this\nis shown in both % and absolute terms.")),Object(o.b)("p",null,"A node may be decorated by a performance indicator color band on the\nleft \u2013 typically Green (for good), Amber (neither good nor bad) and Red\n(Poor)."),Object(o.b)("img",{alt:"Node Details",src:Object(a.a)("/doc-images/13.2.png")}),Object(o.b)("p",null,"The entire configuration part of the Node Tab has been already explained\nin detail in ",Object(o.b)("inlineCode",{parentName:"p"},"Section: Open a Sample Model <OSM>"),"."),Object(o.b)("h2",{id:"quick-editor-in-node-tab"},"Quick Editor in Node Tab"),Object(o.b)("p",null,"Using the Quick Editor option in the Node Tab, you will be able to view\nthe entire Tree Hierarchy in a Grid View. For our example, the below\nFigure shows the normal Tree Hierarchy View."),Object(o.b)("img",{alt:"Normal Tree Hierarchy View",src:Object(a.a)("/doc-images/qe1.png")}),Object(o.b)("p",null,"After clicking the Quick Editor option as shown in the above Figure, you\nwill be able to view the Grid View as shown below. You can observe that\nthere will be a Business View information in the Formula column and it\nwill get displayed when you select the Business View option (see Figure\nbelow)."),Object(o.b)("img",{alt:"Grid View",src:Object(a.a)("/doc-images/qe2.png")}),Object(o.b)("p",null,"In the Grid View, you will be able to edit the changes and save it so\nthat the changes will get reflected in the Tree Structure which can be\nviewed in the canvas. In the Grid View, you can also Expand and Collapse\nthe Node Structure using the Expand and Collapse icons (see Figure\nbelow)."),Object(o.b)("img",{alt:"Grid View in Expanded Form",src:Object(a.a)("/doc-images/qe3.png")}),Object(o.b)("p",null,"For our example, the above Figure shows the expanded form of the Grid\nView. The below Figure shows the collapsed form of the Grid View."),Object(o.b)("img",{alt:"Grid View in Collapsed Form",src:Object(a.a)("/doc-images/qe4.png")}),Object(o.b)("p",null,"You will be able to import and export the data in the form of excel file\nusing the Import from Excel and Export to Excel buttons as shown in the\nbelow Figure."),Object(o.b)("img",{alt:"Grid View - Import from Excel and Export to Excel",src:Object(a.a)("/doc-images/qe5.png")}),Object(o.b)("p",null,"The Export to Excel File button will be only functional in the web\nversion of the Power BI (see Figure below)."),Object(o.b)("img",{alt:"Export to Excel File",src:Object(a.a)("/doc-images/qe6.png")}),Object(o.b)("p",null,"The exported file can be edited and it can be imported by clicking the\nImport from Excel File button."),Object(o.b)("img",{alt:"Import from Excel File",src:Object(a.a)("/doc-images/qe7.png")}),Object(o.b)("p",null,"The import function can be done by browsing the location of the file\n(see Figure below)."),Object(o.b)("img",{alt:"File Location",src:Object(a.a)("/doc-images/qe8.png")}),Object(o.b)("p",null,"The Columns cab be filtered based on the selection from \u201cSelected\nColumns\u201d Drop Down (see Figure below). All the Columns can be selected\nto get displayed in the grid or the user can select the columns of their\nchoice."),Object(o.b)("img",{alt:"Filtering Columns in the grid",src:Object(a.a)("/doc-images/qe9.png")}),Object(o.b)("p",null,"The below Figure shows that all the columns are being selected and they\nare displayed in the grid. The user can scroll the Horizontal scroll bar\nin order to view the remaining columns."),Object(o.b)("img",{alt:"Grid Display with all the columns being selected.",src:Object(a.a)("/doc-images/qe10.png")}),Object(o.b)("p",null,"The below Figure shows that only the selected columns get displayed in\nthe grid."),Object(o.b)("img",{alt:"Grid Display with the selected columns",src:Object(a.a)("/doc-images/qe11.png")}),Object(o.b)("p",null,"Also the user has the option to edit the properties like Formula,\nCalculation Method and Aggregation Method directly in the Grid view\nwhere it gets updated in the actual properties in the Advanced Editor.\nIn our example, you can view that the Formula has been double clicked\nfor editing (see Figure below)."),Object(o.b)("img",{alt:"Grid view edit for Formula Column",src:Object(a.a)("/doc-images/qe12.png")}),Object(o.b)("p",null,"The above Figure shows that the Formula for the row item Copper Sold has\nbeen edited. As another example, the below Figure shows that the\nCalculation Method has been edited."),Object(o.b)("img",{alt:"Grid view edit for Calculation Method Column",src:Object(a.a)("/doc-images/qe13.png")}),Object(o.b)("p",null,"In a similar way, the following columns can be edited in the Grid view."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Manual Data for Primary"),Object(o.b)("li",{parentName:"ul"},"Manual Data for Comparison")),Object(o.b)("p",null,"The below Figures represents the screen shots for both Manual Data for\nPrimary and Manual Data for Secondary."),Object(o.b)("img",{alt:"Grid View Edit for Primary Data",src:Object(a.a)("/doc-images/qe14.png")}),Object(o.b)("img",{alt:"Grid View Edit for Comparison Data",src:Object(a.a)("/doc-images/qe15.png")}),Object(o.b)("p",null,"The Node Search for the columns Linked Node, Linked Simulation Node and\nWeighted Average Node in the Data Grid will be in Drop Down List and the\nuser can select the appropriate Node from the Drop Down List. For our\nexample, the Node Search for the Linked Simulation Node has been done\n(see Figure below)."),Object(o.b)("img",{alt:"Node Search for Linked Simulation Node Column",src:Object(a.a)("/doc-images/qe16.png")}),Object(o.b)("p",null,"Similarly the Node Search for the Source Key Column will be in Drop Down\nList showing the Nodes from the assigned Data Source and the user can\nselect the appropriate Node from the Drop Down List (see Figure below)."),Object(o.b)("img",{alt:"Node Search for Source Key Column",src:Object(a.a)("/doc-images/qe17.png")}),Object(o.b)("p",null,"There is an option to lock the simulation for the Node in the Grid View.\nThe same function can be also done in the exported Excel File and the\nExcel file can be imported in the Grid to see the updates done for the\nlocked simulation."),Object(o.b)("p",null,"The below Figure shows the Locked Simulation in the Grid View."),Object(o.b)("img",{alt:"Locked Simulation in Grid View",src:Object(a.a)("/doc-images/qe18.png")}),Object(o.b)("p",null,"The below Figure shows the Locked Simulation in the Excel File which can\nbe imported to the Grid view."),Object(o.b)("img",{alt:"Locked Simulation in Excel File",src:Object(a.a)("/doc-images/qe19.png")}),Object(o.b)("p",null,"The rows can be reordered for the child nodes which exists under a\nParent Node. The below Figure shows the Grid view before reordering the\nchild nodes."),Object(o.b)("img",{alt:"Grid view before reordering the child nodes",src:Object(a.a)("/doc-images/qe20.png")}),Object(o.b)("p",null,"The below Figure shows the Grid view after reordering the child nodes."),Object(o.b)("img",{alt:"Grid view after reordering the child nodes",src:Object(a.a)("/doc-images/qe21.png")}),Object(o.b)("h2",{id:"additional-properties-of-node-tab"},"Additional Properties of Node Tab"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Additional Properties of Node Tab")))}b.isMDXComponent=!0},174:function(e,t,n){"use strict";var r=n(0),i=n(48);t.a=function(){return Object(r.useContext)(i.a)}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),h=r,p=b["".concat(a,".").concat(h)]||b[h]||u[h]||o;return n?i.a.createElement(p,l({ref:t},s,{components:n})):i.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(179);var r=n(174);function i(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},177:function(e,t,n){var r=n(66),i=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},178:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}},179:function(e,t,n){"use strict";var r=n(17),i=n(34),o=n(177),a="".startsWith;r(r.P+r.F*n(178)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);