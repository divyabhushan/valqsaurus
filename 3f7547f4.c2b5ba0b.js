(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),c=(n(0),n(209)),l={id:"additional_series",title:"DSSERIES"},i={id:"references/formulas/additional_series",title:"DSSERIES",description:"## Syntax",source:"@site/docs/references/formulas/additional_series.mdx",permalink:"/docs/references/formulas/additional_series",sidebar:"functionSideBar",previous:{title:"NODE PROPERTIES",permalink:"/docs/references/formulas/node-properties"}},b=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],o={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"DSSERIES[seriesid]")," - will reperesnt the respective sereis data"),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"Conisider there is data in following structure "),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Series 1"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Series 2"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Series 3"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Series 4"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"US"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"110"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"95"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"75"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"78")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"India"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"85"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"70"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"100"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"80")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Germany"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"25"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"25"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0")))),Object(c.b)("p",null,"Here you can acces the Series 3 value of India using following formula"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"SUM(DSSERIES3.India)\n")))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,s=u["".concat(l,".").concat(d)]||u[d]||O[d]||c;return n?a.a.createElement(s,i({ref:t},o,{components:n})):a.a.createElement(s,i({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);