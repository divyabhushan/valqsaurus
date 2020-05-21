(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{174:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(9),a=(t(0),t(209)),i={id:"sim_from_to_index",title:"SIM_FROM_INDEX, SIM_TO_INDEX"},c={id:"references/formulas/sim_from_to_index",title:"SIM_FROM_INDEX, SIM_TO_INDEX",description:"## Syntax",source:"@site/docs/references/formulas/sim_from_to_index.mdx",permalink:"/docs/references/formulas/sim_from_to_index",sidebar:"functionSideBar",previous:{title:"CURRENT_PERIOD_INDEX",permalink:"/docs/references/formulas/current_period_index"},next:{title:"NODE PROPERTIES",permalink:"/docs/references/formulas/node-properties"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"SIM_FROM_INDEX")," starting periond index of simulation range selected in navigation pannel\n",Object(a.b)("inlineCode",{parentName:"p"},"SIM_TO_INDEX")," ending periond index of simulation range selected in navigation pannel"),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"If Simulation period is seletected as Feb to June then ",Object(a.b)("inlineCode",{parentName:"p"},"SIM_FROM_INDEX")," will be 2 and ",Object(a.b)("inlineCode",{parentName:"p"},"SIM_TO_INDEX")," will be 6"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"SIM_TO_INDEX - SIM_FROM_INDEX // will return 4\n")))}u.isMDXComponent=!0},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return t?o.a.createElement(m,c({ref:n},p,{components:t})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);