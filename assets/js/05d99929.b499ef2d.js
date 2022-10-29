"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(r),f=n,d=g["".concat(l,".").concat(f)]||g[f]||u[f]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5},i="store.getState",s={unversionedId:"api_reference/high_level_api/store.getState",id:"api_reference/high_level_api/store.getState",title:"store.getState",description:"store.getState is used to get a global state object from a store, it accepts one required parameter which is a key(string) and another optional parameters which is the configuration object(available configurations are default and persist works just like in store.setState). When called, store.getState returns a global state object.",source:"@site/docs/api_reference/high_level_api/store.getState.md",sourceDirName:"api_reference/high_level_api",slug:"/api_reference/high_level_api/store.getState",permalink:"/state-pool/docs/api_reference/high_level_api/store.getState",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api_reference/high_level_api/store.getState.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"store.useReducer",permalink:"/state-pool/docs/api_reference/high_level_api/store.useReducer"},next:{title:"store.subscribe",permalink:"/state-pool/docs/api_reference/high_level_api/store.subscribe"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"storegetstate"},"store.getState"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"store.getState")," is used to get a global state object from a store, it accepts one required parameter which is a key(string) and another optional parameters which is the configuration object(available configurations are ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"persist")," works just like in ",(0,n.kt)("inlineCode",{parentName:"p"},"store.setState"),"). When called, ",(0,n.kt)("inlineCode",{parentName:"p"},"store.getState")," returns a global state object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Signature\nstore.getState(key: String, config?: {default: Any, persist: Boolean})\n")),(0,n.kt)("p",null,"Here is how to use it"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const globalState = store.getState(key);\n")))}u.isMDXComponent=!0}}]);