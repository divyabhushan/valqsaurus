(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(210)),l=n(212),i=n(216),c={id:"workflow",title:"The ValQ Workflow",sidebar_label:"The ValQ Workflow"},b={id:"intro/workflow",title:"The ValQ Workflow",description:'import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.',source:"@site/docs/intro/workflow.mdx",permalink:"/docs/intro/workflow",sidebar_label:"The ValQ Workflow",sidebar:"sideBar",previous:{title:"Using ValQ - An Example",permalink:"/docs/intro/model"},next:{title:"General features of ValQ Custom Visual",permalink:"/docs/general/getting-started"}},s=[{value:"Model Tab",id:"model-tab",children:[]},{value:"Plan Tab",id:"plan-tab",children:[]},{value:"Simulate Tab",id:"simulate-tab",children:[]},{value:"Analyze Tab",id:"analyze-tab",children:[]}],u={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{textAlign:"justify"}},Object(o.b)("p",null,"The ValQ workflow consists of four steps - Model, Plan, Simulate and Analyze \u2013 all of which are shown in a tab at the top. ")),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/workflow/workflow1.png")}))," ",Object(o.b)("br",null),"At a very high level, these are used for the following: ",Object(o.b)("br",null)," ",Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"TAB"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"PURPOSE"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"ACCESSIBLE TO*"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:Object(l.a)("docs/model/model_tab"),mdxType:"Link"}," Model ")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configure KPIs and define their relationships, build and publish ValQ models"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Creator only")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:Object(l.a)("docs/planning/plan_tab"),mdxType:"Link"}," Plan ")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Perform budgeting, allocations, time-series forecasting"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Creator & Consumer")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:Object(l.a)("docs/simulation/simulation"),mdxType:"Link"}," Simulate ")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Perform simulations & scenario comparisons; Build basic models directly from data"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Creator & Consumer")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(i.a,{to:Object(l.a)("docs/analysis/variance_analysis"),mdxType:"Link"}," Analyze ")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Perform in-depth variance analysis"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Creator & Consumer")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Creator"),": One who builds or designs models \u2013 this can be an analyst or planner (or anyone in the organization who is comfortable with Excel)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Consumer"),": One who consumes ValQ models built by Creator \u2013 this can be executives, decision makers, and even other analysts and planners in the organization. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"}," Note")," ",Object(o.b)("br",null),"\nA Creator can also build models for self-consumption.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"}," Note")," ",Object(o.b)("br",null),"\nThere is no specific sequence to be followed in the above workflow. ",Object(o.b)("br",null)," For example, not everyone may need to utilize\nPlan & Analyze tabs, ValQ models can also be built on-the-fly directly from the Simulate tab without having to utilize any Model tab capabilities.")),Object(o.b)("p",null,"What follows is a preview of these workflow items, and we would explore them in-depth later."),Object(o.b)("div",{style:{textAlign:"justify"}},Object(o.b)("h2",{id:"model-tab"},"Model Tab"),Object(o.b)("p",null,"The ",Object(o.b)(i.a,{to:Object(l.a)("docs/model/model_tab"),mdxType:"Link"}," Model ")," tab helps the designer bring data model to life and build complex visuals without writing a single line of code. This tab is available only during edit mode (in Power BI) and not in the reading view \u2013 and can be thus accessible only by Creators and not Consumers.")),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/workflow/workflow2.png")}))," ",Object(o.b)("br",null),Object(o.b)("p",null,"While modeling, the user can leverage the Fields, Visualizations & Filters pane in Power BI to connect to a data and configure the visual."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/workflow/workflow3.png"),width:410,height:425}))," ",Object(o.b)("br",null),Object(o.b)("h2",{id:"plan-tab"},"Plan Tab"),Object(o.b)("p",null,"The ",Object(o.b)(i.a,{to:Object(l.a)("docs/planning/plan_tab"),mdxType:"Link"}," Plan ")," tab is used to create new plans and budgets for business cycles, perform top-down and bottom-up analyses, apply different allocation methods, perform time series forecasting, and more."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/workflow/workflow4.png"),width:700,height:400}))," ",Object(o.b)("br",null),Object(o.b)("h2",{id:"simulate-tab"},"Simulate Tab"),Object(o.b)("p",null,"In the ",Object(o.b)(i.a,{to:Object(l.a)("docs/simulation/simulation"),mdxType:"Link"}," Simulate ")," tab, you would be able to visualize the KPIs and their relationships arranged in a tree-like fashion. From this tab, you can run simulations, create scenarios and compare scenarios."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/workflow/workflow5.png"),width:700,height:400}))," ",Object(o.b)("br",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"i Note")," ",Object(o.b)("br",null),"\nConsumers would typically see the Simulate tab first while opening ValQ.")),Object(o.b)("h2",{id:"analyze-tab"},"Analyze Tab"),Object(o.b)("p",null,"The ",Object(o.b)(i.a,{to:Object(l.a)("docs/analysis/variance_analysis"),mdxType:"Link"}," Analyze ")," tab allows the user to run advanced analyses such as variance analysis. While consuming from Power BI server or service, you would be able to also download the results of such analyses in a spreadsheet."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/workflow/workflow7.png")})))}d.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?r.a.createElement(m,i({ref:t},b,{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},211:function(e,t,n){"use strict";var a=n(0),r=n(48);t.a=function(){return Object(a.useContext)(r.a)}},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(215);var a=n(211);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},213:function(e,t,n){var a=n(66),r=n(23);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},214:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}},215:function(e,t,n){"use strict";var a=n(17),r=n(34),o=n(213),l="".startsWith;a(a.P+a.F*n(214)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return l?l.call(t,a,n):t.slice(n,n+a.length)===a}})},216:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),l=n(35),i=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,c=e.href,b=n||c,s=i.test(b),u=Object(r.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(r.useEffect)((function(){return!d&&s&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,s]),b&&s?o.a.createElement(l.b,Object(a.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(b),u.current=!0)},innerRef:function(e){var n,a;d&&e&&s&&(n=e,a=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:b})):o.a.createElement("a",Object(a.a)({},e,{href:b}))}}}]);