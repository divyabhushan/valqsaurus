(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),l=(n(0),n(208)),c={id:"irr",title:"IRR"},o={id:"references/formulas/irr",title:"IRR",description:"The `IRR` function returns the internal rate of return for a series of cash flows. Node references also accepted as arguments.",source:"@site/docs/references/formulas/irr.mdx",permalink:"/docs/references/formulas/irr",sidebar:"functionSideBar",previous:{title:"LOG",permalink:"/docs/references/formulas/log"},next:{title:"NPV",permalink:"/docs/references/formulas/npv"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],b={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"IRR")," function returns the internal rate of return for a series of cash flows. Node references also accepted as arguments."),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"IRR (value1,[value2],\u2026, [Guess])\n")),Object(l.b)("h2",{id:"arguments"},"Arguments"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"value1")," \u2013 The node that contains the order of cash flows for which you want to calculate the internal rate of return."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"value2,\u2026"),"  \u2013 The additional nodes that contains the order of cash flows for which you want to calculate the internal rate of return. This is an optional argument."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Guess")," \u2013 A value that you guess is close to the actual IRR value. This is an optional argument."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("p",null,"Consider a project with an initial investment of $10,000 and cash inflows of $4,000 for the subsequent four years. The objective is to evaluate the project by calculating IRR. "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Period"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"4"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Initial Investment"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-10,000"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cash Inflows"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4,000"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4,000"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4,000"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4,000")))),Object(l.b)("p",null,"To achieve this, the formula should be"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"IRR ([Initial Investment,Cash Inflows.ALL_PERIODS])\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"IRR")," is calculated to be 14.76%"),Object(l.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/IRR-function-64925EAA-9988-495B-B290-3AD0C163C1BC"}),"IRR")))}u.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(n),O=a,f=p["".concat(c,".").concat(O)]||p[O]||s[O]||l;return n?r.a.createElement(f,o({ref:t},b,{components:n})):r.a.createElement(f,o({ref:t},b))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<l;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);