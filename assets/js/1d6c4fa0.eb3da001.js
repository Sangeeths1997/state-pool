"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:9},i="store.persist",s={unversionedId:"api_reference/high_level_api/store.persist",id:"api_reference/high_level_api/store.persist",title:"store.persist",description:"Sometimes you might want to save your global states in a permanent storage probably because you might not want to lose them when your application is closed(i.e you want to retain them when your application starts).",source:"@site/docs/api_reference/high_level_api/store.persist.md",sourceDirName:"api_reference/high_level_api",slug:"/api_reference/high_level_api/store.persist",permalink:"/state-pool/docs/api_reference/high_level_api/store.persist",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api_reference/high_level_api/store.persist.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"store.clear",permalink:"/state-pool/docs/api_reference/high_level_api/store.clear"},next:{title:"createGlobalState",permalink:"/state-pool/docs/api_reference/low_level_api/createGlobalState"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storepersist"},"store.persist"),(0,o.kt)("p",null,"Sometimes you might want to save your global states in a permanent storage probably because you might not want to lose them when your application is closed(i.e you want to retain them when your application starts)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State pool")," makes it very easy to save your global states in your preferred permanent storage, all you need to do is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Tell state-pool how to save your global state by using ",(0,o.kt)("inlineCode",{parentName:"li"},"store.persist")),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"persist")," configuration to tell state-pool to save your global state in your preferred storage when creating your global state.")),(0,o.kt)("p",null,"When telling ",(0,o.kt)("strong",{parentName:"p"},"state-pool"),"  how to save global state to a permanent storage we need to implement four functions which are "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"saveState"),": This is for saving your global state to your preferred permanent storage, it should accept a ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," as the first parameter, ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," as the second parameter and ",(0,o.kt)("inlineCode",{parentName:"li"},"isInitialSet")," as the third parameter, the third parameter is boolean which tells if the state is being saved for the first time(initial set) or it's just an update. This function is called automatically when ",(0,o.kt)("inlineCode",{parentName:"li"},"store.setState")," is executed and when the  global state changes"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"loadState"),": This is used for loading state from your preferred permanent storage, it should accept a ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," as the first parameter and ",(0,o.kt)("inlineCode",{parentName:"li"},"noState")," as the second parameter which is a constant(empty) to return if the state is not available from your permanent storage. This function is called when ",(0,o.kt)("inlineCode",{parentName:"li"},"store.setState")," needs an initial value from your storage to populate a global state"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"removeState"),": This is used for removing state from a permanent storage, it should accept a ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," as the only parameter. This function is called when ",(0,o.kt)("inlineCode",{parentName:"li"},"store.remove")," is executed"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"clear"),": This is used for clearing an entire permanent storage, it doesn\u2019t accept any parameter. This function is called when ",(0,o.kt)("inlineCode",{parentName:"li"},"store.clear")," is executed.")),(0,o.kt)("p",null,"Now the way to implement these is by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"store.persist")," and pass them as shown below "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"store.persist({\n    saveState: function(key, value, isInitialSet){/*your code to save state */},\n    loadState: function(key, noState){/*your code to load state */},\n    removeState: function(key){/*your code to remove state */},\n    clear: function(){/*your code to clear storage */}\n})\n")),(0,o.kt)("p",null,"After implementing these four functions you're good to go, you won\u2019t need to worry about calling them, ",(0,o.kt)("strong",{parentName:"p"},"state-pool")," will be doing that for you automatically so that you can focus on using your states."),(0,o.kt)("p",null,"As discussed earlier both ",(0,o.kt)("inlineCode",{parentName:"p"},"store.setState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"store.useState")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"store.useReducer")," accepts an optional configuration parameter, ",(0,o.kt)("inlineCode",{parentName:"p"},"persist")," being one of configurations, this is the one which is used to tell ",(0,o.kt)("strong",{parentName:"p"},"state-pool")," whether to save your global state to a permanent storage or not. i.e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"store.setState(\n    key: String,\n    initialState: Any,\n    config?: {persist: Boolean}\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"store.useState(\n    key: String,\n    config?: {default: Any, persist: Boolean, ...otherConfigs}\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"store.useReducer(\n    reducer: Function,\n    key: String,\n    config?: {default: Any, persist: Boolean, ...otherConfigs}\n)\n")),(0,o.kt)("p",null,"By default the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"persist")," in all cases is false(which means it doesn't save global states to a permanent storage), so if you want to activate it, you have to set it to be true."),(0,o.kt)("p",null,"What's even better about ",(0,o.kt)("strong",{parentName:"p"},"state-pool")," is that you get the freedom to choose what to save in your permanent storage and what's not to, so you don't need to save the whole store in your permanent storage, but if you want to save the whole store you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"PERSIST_ENTIRE_STORE")," configuration."),(0,o.kt)("p",null,"Below is an example showing how you could implement state persistance in local storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'state-pool';\n\nconst store = createStore();\n\nlet timerId: any = null\nconst DEBOUNCE_TIME = 1000  // In milliseconds\n\nstore.persist({\n    PERSIST_ENTIRE_STORE: true,  // Use this only if you want to persist the entire store\n    saveState: function(key, value, isInitialSet){\n        const doStateSaving = () => {\n            try {\n                const serializedState = JSON.stringify(value);\n                window.localStorage.setItem(key, serializedState);\n            } catch {\n                // Ignore write errors\n            }\n        }\n\n        if(isInitialSet){\n            // We don't debounce saving state since it's the initial set\n            // so it's called only once and we need our storage to be updated\n            // right away\n            doStateSaving();\n        }\n        else {\n            // Here we debounce saving state because it's the update and this function\n            // is called every time the store state changes. However, it should not\n            // be called too often because it triggers the expensive `JSON.stringify` operation.\n            clearTimeout(timerId);\n            timerId = setTimeout(doStateSaving, DEBOUNCE_TIME);\n        }\n    },\n    loadState: function(key, noState){\n        try {\n            const serializedState = window.localStorage.getItem(key);\n            if (serializedState === null) {\n                // No state saved\n                return noState\n            }\n            return JSON.parse(serializedState);\n        } catch (err) {\n            // Failed to load state\n            return undefined\n        }\n    },\n    removeState: function(key){\n        window.localStorage.removeItem(key);\n    },\n    clear: function(){\n        window.localStorage.clear();\n    }\n})\n\n")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"When you set ",(0,o.kt)("inlineCode",{parentName:"p"},"PERSIST_ENTIRE_STORE = true"),", ",(0,o.kt)("strong",{parentName:"p"},"state-pool")," will be persisting all your global states to the permanent storage by default unless you explicitly specify ",(0,o.kt)("inlineCode",{parentName:"p"},"persist = false")," when initializing your global state.")))}u.isMDXComponent=!0}}]);