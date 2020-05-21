(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(209)),i=n(211),l={id:"more-info-value-driver",title:"Getting more information about a value driver"},s={id:"general/more-info-value-driver",title:"Getting more information about a value driver",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/general/more-info-value-driver.mdx",permalink:"/docs/general/more-info-value-driver",sidebar:"sideBar",previous:{title:"Conducting what-if analysis",permalink:"/docs/general/conducting-what-if"},next:{title:"Saving and Opening Scenarios",permalink:"/docs/general/saving-opening-scenarios"}},c=[],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you click on a node Widget, a Pop up screen is displayed with\nadditional information on the selected node."),Object(o.b)("img",{alt:"Information on Value Driver",src:Object(i.a)("/doc-images/8.1.png")}),Object(o.b)("p",null,"For some nodes, the designer may have added a description beyond the\ntitle. If so, this will be displayed below the title."),Object(o.b)("p",null,"If a node is calculated, a simplified version of the formula is\ndisplayed. This is the technical formula that is used to calculate\nindividual period values. To calculate the real values, all simulation\nvariations that affects the node are applied to selected and future\nperiods and the aggregation rules for the node is applied (sum or\nweighted average)."),Object(o.b)("p",null,"The trend chart compares the simulated value to the comparison version\nas well as showing the original value as the dotted line on the bar if\nsimulation variations are active. If you hover over the bar, you will\nthe see the details for the period."),Object(o.b)("p",null,"The table on the top right shows the period and full year values and the\nvariance calculations as per the definition previously in this document."),Object(o.b)("p",null,"The valQ Custom Visual also analyses all the active simulations to see\nif any impacts this particular node. If so, it then analyses how much\neach of the active simulation changes contributes to the overall impact\non this node and generates a waterfall diagram with the break down which\nis displayed in the bottom right panel."),Object(o.b)("p",null,"In some scenarios, you may vary multiple factors impacting the same node\nin a compound nature. I.e. you vary both sales volume and sales price\nand want to know the impact on revenue. As the sum of both changes is\nmore than the impact of each individually, the waterfall chart breaks\ndown each of the individual impacts and a compound impact bar."),Object(o.b)("p",null,"As part of the latest Release, you will be able to view the Value\nDisplay Tooltip by hovering the mouse over the Trend Chart Area in the\nPop up screen (see Figure below). Also you can view the data labels for\nthe X Axis. The values representing the loss status will be in Red color\nand the values representing the gain status will be in Green color as\nshown in the below Figure."),Object(o.b)("img",{alt:"Pop up screen Display",src:Object(i.a)("/doc-images/12.25a.png")}),Object(o.b)("p",null,"For more details on Pop up screen, you can refer the link:\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://valq.com/blogs/video-valq-pop-up-screen-nodes"}),"https://valq.com/blogs/video-valq-pop-up-screen-nodes")))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.a.createElement(f,l({ref:t},c,{components:n})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(214);var r=n(210);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},212:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},213:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},214:function(e,t,n){"use strict";var r=n(17),a=n(34),o=n(212),i="".startsWith;r(r.P+r.F*n(213)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);