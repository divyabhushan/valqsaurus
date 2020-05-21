(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(209)),o=n(211),c={id:"saving-opening-scenarios",title:"Saving and Opening Scenarios"},s={id:"general/saving-opening-scenarios",title:"Saving and Opening Scenarios",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/general/saving-opening-scenarios.mdx",permalink:"/docs/general/saving-opening-scenarios",sidebar:"sideBar",previous:{title:"Getting more information about a value driver",permalink:"/docs/general/more-info-value-driver"},next:{title:"Workspace in ValQ",permalink:"/docs/general/workspace-in-valq"}},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The standard valQ Custom Visual template contains functionality for\nsaving and opening a scenario collection."),Object(i.b)("p",null,"When clicking the Edit button ",Object(i.b)("img",{alt:"..image::\\/doc-images/image51",src:Object(o.a)("/doc-images/media/image49.png")})," , you will be asked to\nprovide a Scenario Title Name."),Object(i.b)("img",{alt:"Scenario Title Name",src:Object(o.a)("/doc-images/9.1.png")}),Object(i.b)("p",null,"You will be also able to delete the existing scenario from there using\nthe Delete button ",Object(i.b)("img",{alt:"..image::\\/doc-images/image53",src:Object(o.a)("/doc-images/media/image51.png")}),"."),Object(i.b)("p",null,"There is also an option to export the value driver tree data set to xml.\nIt will create an unformatted spreadsheet with the tree and all the node\ndata."))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,d=p["".concat(o,".").concat(g)]||p[g]||f[g]||i;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(214);var r=n(210);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},212:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},213:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},214:function(e,t,n){"use strict";var r=n(17),a=n(34),i=n(212),o="".startsWith;r(r.P+r.F*n(213)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);