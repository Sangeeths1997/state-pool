"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(y,s(s({ref:t},p),{},{components:n})):o.createElement(y,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:5},s="State Persistence",i={unversionedId:"basic_concepts/state_persistence",id:"basic_concepts/state_persistence",title:"State Persistence",description:"State pool has a built in support for state persistence, it makes saving your global states in your preferred permanent storage very easy, all you need to do is tell state pool how to save, load, clear and remove your global state from your preferred storage by using store.persist API.",source:"@site/docs/basic_concepts/state_persistence.md",sourceDirName:"basic_concepts",slug:"/basic_concepts/state_persistence",permalink:"/state-pool/docs/basic_concepts/state_persistence",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basic_concepts/state_persistence.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Managing Subscriptions",permalink:"/state-pool/docs/basic_concepts/managing_subscriptions"},next:{title:"Intro",permalink:"/state-pool/docs/basic_tutorial/intro"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state-persistence"},"State Persistence"),(0,a.kt)("p",null,"State pool has a built in support for state persistence, it makes saving your global states in your preferred permanent storage very easy, all you need to do is tell state pool how to save, load, clear and remove your global state from your preferred storage by using ",(0,a.kt)("inlineCode",{parentName:"p"},"store.persist")," API."),(0,a.kt)("p",null,"The way to implement these is by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"store.persist")," and pass them as shown below "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"store.persist({\n    saveState: function(key, value, isInitialSet){/*your code to save state */},\n    loadState: function(key, noState){/*your code to load state */},\n    removeState: function(key){/*your code to remove state */},\n    clear: function(){/*your code to clear storage */}\n})\n")),(0,a.kt)("p",null,"After implementing these four functions you're good to go, you won\u2019t need to worry about calling them, ",(0,a.kt)("strong",{parentName:"p"},"state-pool")," will be doing that for you automatically so that you can focus on using your states."),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"store.setState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"store.useState")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"store.useReducer")," accepts an optional configuration parameter, ",(0,a.kt)("inlineCode",{parentName:"p"},"persist"),", this is the one which is used to tell ",(0,a.kt)("strong",{parentName:"p"},"state-pool")," whether to save your global state to a permanent storage or not. i.e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"store.setState(\n    key: String,\n    initialState: Any,\n    config?: {persist: Boolean}\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"store.useState(\n    key: String,\n    config?: {default: Any, persist: Boolean, ...otherConfigs}\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"store.useReducer(\n    reducer: Function,\n    key: String,\n    config?: {default: Any, persist: Boolean, ...otherConfigs}\n)\n")),(0,a.kt)("p",null,"By default the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"persist")," in all cases is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"(which means it doesn't save global states to a permanent storage), so if you want to activate it, you have to set it to be true."),(0,a.kt)("p",null,"What's even better about ",(0,a.kt)("strong",{parentName:"p"},"state-pool")," is that you get the freedom to choose what to save in your permanent storage, so you don't need to save the whole store in your permanent storage, but if you want to save the whole store you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"PERSIST_ENTIRE_STORE")," configuration."),(0,a.kt)("p",null,"Below is an example showing how you could implement state persistance in local storage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'state-pool';\n\nconst store = createStore();\n\nlet timerId: any = null\nconst DEBOUNCE_TIME = 1000  // In milliseconds\n\nstore.persist({\n    PERSIST_ENTIRE_STORE: true,  // Use this only if you want to persist the entire store\n    saveState: function(key, value, isInitialSet){\n        const doStateSaving = () => {\n            try {\n                const serializedState = JSON.stringify(value);\n                window.localStorage.setItem(key, serializedState);\n            } catch {\n                // Ignore write errors\n            }\n        }\n\n        if(isInitialSet){\n            // We don't debounce saving state since it's the initial set\n            // so it's called only once and we need our storage to be updated\n            // right away\n            doStateSaving();\n        }\n        else {\n            // Here we debounce saving state because it's the update and this function\n            // is called every time the store state changes. However, it should not\n            // be called too often because it triggers the expensive `JSON.stringify` operation.\n            clearTimeout(timerId);\n            timerId = setTimeout(doStateSaving, DEBOUNCE_TIME);\n        }\n    },\n    loadState: function(key, noState){\n        try {\n            const serializedState = window.localStorage.getItem(key);\n            if (serializedState === null) {\n                // No state saved\n                return noState\n            }\n            return JSON.parse(serializedState);\n        } catch (err) {\n            // Failed to load state\n            return undefined\n        }\n    },\n    removeState: function(key){\n        window.localStorage.removeItem(key);\n    },\n    clear: function(){\n        window.localStorage.clear();\n    }\n})\n")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"When you set ",(0,a.kt)("inlineCode",{parentName:"p"},"PERSIST_ENTIRE_STORE = true"),", ",(0,a.kt)("strong",{parentName:"p"},"state-pool")," will be persisting all your global states to the permanent storage by default unless you explicitly specify ",(0,a.kt)("inlineCode",{parentName:"p"},"persist = false")," when initializing your global state.")))}u.isMDXComponent=!0}}]);