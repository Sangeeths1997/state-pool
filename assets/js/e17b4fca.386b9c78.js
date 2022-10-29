"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="store.useReducer",s={unversionedId:"api_reference/high_level_api/store.useReducer",id:"api_reference/high_level_api/store.useReducer",title:"store.useReducer",description:"This is an alternative to store.useState, it works just like React.useReducer hook(If you\u2019re familiar with React.useReducer, you already know how this works). It accepts a reducer and a key for the global state as parameters, it returns the current state paired with a dispatch method. In addition to the two parameters it also accept another optinal perameter which is the configuration object, available configurations are default, persist, selector & patcher they work exactly the same just like in store.useState.",source:"@site/docs/api_reference/high_level_api/store.useReducer.md",sourceDirName:"api_reference/high_level_api",slug:"/api_reference/high_level_api/store.useReducer",permalink:"/state-pool/docs/api_reference/high_level_api/store.useReducer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api_reference/high_level_api/store.useReducer.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"store.useState",permalink:"/state-pool/docs/api_reference/high_level_api/store.useState"},next:{title:"store.getState",permalink:"/state-pool/docs/api_reference/high_level_api/store.getState"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storeusereducer"},"store.useReducer"),(0,a.kt)("p",null,"This is an alternative to ",(0,a.kt)("inlineCode",{parentName:"p"},"store.useState"),", it works just like ",(0,a.kt)("inlineCode",{parentName:"p"},"React.useReducer")," hook(If you\u2019re familiar with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.useReducer"),", you already know how this works). It accepts a reducer and a key for the global state as parameters, it returns the current state paired with a dispatch method. In addition to the two parameters it also accept another optinal perameter which is the configuration object, available configurations are ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"persist"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"patcher")," they work exactly the same just like in ",(0,a.kt)("inlineCode",{parentName:"p"},"store.useState"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Signature\nstore.useReducer(\n    reducer: Function,\n    key: String,\n    config?: {default: Any, persist: Boolean, selector: Function, patcher: Function}\n)\n")),(0,a.kt)("p",null,"Below is a simple example showing how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"store.useReducer")," hook"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const initialGlobalState = {\n    name: "Yezy",\n    age: 25,\n    email: "yezy@me.com"\n}\n\nstore.setState("user", initialGlobalState);\n\nfunction myReducer(state, action){\n    // This could be any reducer\n    // Do whatever you want to do here\n    return newState\n}\n\nfunction Component(props){\n    const [name, dispatch] = store.useReducer(myReducer, "user");\n\n    // Other stuff ...\n}\n')),(0,a.kt)("p",null,"Below is an example with ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"patcher")," parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const initialGlobalState = {\n    name: "Yezy",\n    age: 25,\n    email: "yezy@me.com"\n}\n\nstore.setState("user", initialGlobalState);\n\n\nfunction myReducer(state, action){\n    // This could be any reducer\n    // Do whatever you want to do here\n    return newState\n}\n\nfunction UserInfo(props){\n    const selector = (user) => user.name;\n    const patcher = (user, name) => {user.name = name};\n    \n    const [name, dispatch] = store.useReducer(myReducer, "user", {selector, patcher});\n\n    // Other stuff\n}\n')))}p.isMDXComponent=!0}}]);