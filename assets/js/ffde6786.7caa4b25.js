"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},s="Typing State",u={unversionedId:"api_reference/typing-state",id:"api_reference/typing-state",title:"Typing State",description:"All state related functions support implicity and explicity typing",source:"@site/docs/api_reference/typing-state.md",sourceDirName:"api_reference",slug:"/api_reference/typing-state",permalink:"/state-pool/docs/api_reference/typing-state",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api_reference/typing-state.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useGlobalStateReducer",permalink:"/state-pool/docs/api_reference/low_level_api/useGlobalStateReducer"}},c={},i=[],l={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typing-state"},"Typing State"),(0,a.kt)("p",null,"All state related functions support implicity and explicity typing "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"store.setState<number>('count', 0);\n\nstore.useState<number>('count');\n\nstore.useReducer<number>(reducer, 'count');\n\n// For none key based\nconst count = createGlobalState<number>(0);\n\nuseGlobalState<number>(count);\n\nuseGlobalStateReducer<number>(reducer, count);\n\n\n// Typing with selector\nstore.setState<{name: string, age: number}>('user', {name: 'Yezy', age: 25});\n\nstore.useState<string>('user', {selector: user => user.name});\nstore.useState<number>('age', {selector: user => user.age});\n\nstore.useReducer<string>(reducer, 'user', {selector: user => user.name});\nstore.useReducer<number>(reducer, 'user', {selector: user => user.age});\n\n// For none key based\nconst user = createGlobalState<{name: string, age: number}>({name: 'Yezy', age: 25});\n\nuseGlobalState<string>(user, {selector: user => user.name});\nuseGlobalState<number>(user, {selector: user => user.age});\n\nuseGlobalStateReducer<string>(reducer, user, {selector: user => user.name});\nuseGlobalStateReducer<number>(reducer, user, {selector: user => user.age});\n")))}p.isMDXComponent=!0}}]);