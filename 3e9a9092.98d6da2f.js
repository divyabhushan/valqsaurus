(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),i=(n(0),n(208)),o=n(210),l=(n(214),{id:"workflow",title:"Understanding the ValQ Workflow",sidebar_label:"Understanding the ValQ Workflow"}),s={id:"intro/workflow",title:"Understanding the ValQ Workflow",description:'import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.',source:"@site/docs/intro/workflow.mdx",permalink:"/valqsaurus/docs/intro/workflow",sidebar_label:"Understanding the ValQ Workflow",sidebar:"sideBar",previous:{title:"Using ValQ - An Example",permalink:"/valqsaurus/docs/intro/model"},next:{title:"General features of ValQ Custom Visual",permalink:"/valqsaurus/docs/general/getting-started"}},c=[],u={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{style:{textAlign:"justify"}},Object(i.b)("p",null,"ValQ primarily consists of ",Object(i.b)("strong",{parentName:"p"},"four")," major activities namely ",Object(i.b)("strong",{parentName:"p"},"Model"),", ",Object(i.b)("strong",{parentName:"p"},"Plan"),", ",Object(i.b)("strong",{parentName:"p"},"Simulate")," and ",Object(i.b)("strong",{parentName:"p"},"Analyze")," as tab options. In this section,\nyou will be introduced to these features and in the later sections we'll learn about each of it's functionality in detail.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/build/workflow1.png")})),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"justify"}},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Model Tab")," : The model tab helps the designer bring data model to life and build complex visuals without writing single\nline of code. This tab is available only during edit mode and not read mode, hence it cannot be accessed by runtime users.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/build/workflow2.png")}))," ",Object(i.b)("br",null),Object(i.b)("p",null,"The panes on the right side namely ",Object(i.b)("strong",{parentName:"p"},"Fields pane, Visualizations pane and Filters pane")," assist in designing the visual."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/build/workflow3.png"),width:410,height:425}))," ",Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Plan Tab"),": The plan tab is used to create new plans and budgets for business cycles,\nperform top-down and bottom-up analyses, apply different allocation methods, conduct Time Series Forecasting, etc.\nThis tab is available for both design and runtime users."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/build/workflow4.png"),width:700,height:400})),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Simulate Tab"),": The simulate tab view is the default page upon opening the ValQ visual as seen in the image below. Under the simulate tab,\nyou can create multiple Scenarios, perform Simulations, take a look at the KPIs and it's impact amongst others. This tab is available for both design\nand runtime users."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/build/workflow5.png"),width:700,height:400})),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Analyze Tab"),": The Analyze tab allows the user to run advanced analyses such as Variance Analysis and also download the same as an Excel file.\nThis tab is available for both design and runtime users."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/build/analyze8.png")})),"In the upcoming sections, you will be able to understand the above listed activities in detail.")}b.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return n?a.a.createElement(f,l({ref:t},c,{components:n})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},209:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(213);var r=n(209);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},211:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},212:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},213:function(e,t,n){"use strict";var r=n(17),a=n(34),i=n(211),o="".startsWith;r(r.P+r.F*n(212)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},214:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),o=n(35),l=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,s=e.href,c=n||s,u=l.test(c),b=Object(a.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(a.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(c),function(){d&&t&&t.disconnect()}}),[c,d,u]),c&&u?i.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(c),b.current=!0)},innerRef:function(e){var n,r;d&&e&&u&&(n=e,r=function(){window.docusaurus.prefetch(c)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:c})):i.a.createElement("a",Object(r.a)({},e,{href:c}))}}}]);