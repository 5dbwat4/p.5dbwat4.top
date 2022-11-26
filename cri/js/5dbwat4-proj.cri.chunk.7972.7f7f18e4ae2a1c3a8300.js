/*! For license information please see 5dbwat4-proj.cri.chunk.7972.7f7f18e4ae2a1c3a8300.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7972],{7972:(e,t,n)=>{n.r(t),n.d(t,{NavigationFailureType:()=>Q,RouterLink:()=>Ve,RouterView:()=>qe,START_LOCATION:()=>B,createMemoryHistory:()=>q,createRouter:()=>nt,createRouterMatcher:()=>ne,createWebHashHistory:()=>G,createWebHistory:()=>F,isNavigationFailure:()=>H,matchedRouteKey:()=>p,onBeforeRouteLeave:()=>Ie,onBeforeRouteUpdate:()=>Le,parseQuery:()=>Ae,routeLocationKey:()=>g,routerKey:()=>h,routerViewLocationKey:()=>m,stringifyQuery:()=>xe,useLink:()=>je,useRoute:()=>at,useRouter:()=>ot,viewDepthKey:()=>d});var r=n(7875),o=n(641);function a(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:void 0!==n.g?n.g:{}}const s="function"==typeof Proxy;let i,c;class l{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const r={};if(e.settings)for(const t in e.settings){const n=e.settings[t];r[t]=n.defaultValue}const o=`__vue-devtools-plugin-settings__${e.id}`;let a=Object.assign({},r);try{const e=localStorage.getItem(o),t=JSON.parse(e);Object.assign(a,t)}catch(e){}this.fallbacks={getSettings:()=>a,setSettings(e){try{localStorage.setItem(o,JSON.stringify(e))}catch(e){}a=e},now:()=>{return void 0!==i||("undefined"!=typeof window&&window.performance?(i=!0,c=window.performance):void 0!==n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(i=!0,c=n.g.perf_hooks.performance):i=!1),i?c.now():Date.now();var e}},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}const u="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,f=e=>u?Symbol(e):"_vr_"+e,p=f("rvlm"),d=f("rvd"),h=f("r"),g=f("rl"),m=f("rvl"),v="undefined"!=typeof window,y=Object.assign;function b(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const _=()=>{},w=/\/$/;function E(e,t,n="/"){let r,o={},a="",s="";const i=t.indexOf("?"),c=t.indexOf("#",i>-1?i:0);return i>-1&&(r=t.slice(0,i),a=t.slice(i+1,c>-1?c:t.length),o=e(a)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,s=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==s&&"."!==a){if(".."!==a)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}function k(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function R(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!A(e[n],t[n]))return!1;return!0}function A(e,t){return Array.isArray(e)?x(e,t):Array.isArray(t)?x(t,e):e===t}function x(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var S,C;function P(e){if(!e)if(v){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(w,"")}!function(e){e.pop="pop",e.push="push"}(S||(S={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(C||(C={}));const I=/^[^#]+#/;function L(e,t){return e.replace(I,"#")+t}const T=()=>({left:window.pageXOffset,top:window.pageYOffset});function $(e,t){return(history.state?history.state.position-t:-1)+e}const j=new Map;let V=()=>location.protocol+"//"+location.host;function D(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),k(n,"")}return k(n,e)+r+o}function U(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?T():null}}function F(e){const t=function(e){const{history:t,location:n}=window,r={value:D(e,n)},o={value:t.state};function a(r,a,s){const i=e.indexOf("#"),c=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+r:V()+e+r;try{t[s?"replaceState":"pushState"](a,"",c),o.value=a}catch(e){console.error(e),n[s?"replace":"assign"](c)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const s=y({},o.value,t.state,{forward:e,scroll:T()});a(s.current,s,!0),a(e,y({},U(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){a(e,y({},t.state,U(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=P(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const i=({state:a})=>{const i=D(e,location),c=n.value,l=t.value;let u=0;if(a){if(n.value=i,t.value=a,s&&s===c)return void(s=null);u=l?a.position-l.position:0}else r(i);o.forEach((e=>{e(n.value,c,{delta:u,type:S.pop,direction:u?u>0?C.forward:C.back:C.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(y({},e.state,{scroll:T()}),"")}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",c),{pauseListeners:function(){s=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace),r=y({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:L.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function q(e=""){let t=[],n=[""],r=0;function o(e){r++,r===n.length||n.splice(r),n.push(e)}const a={location:"",state:{},base:e=P(e),createHref:L.bind(null,e),replace(e){n.splice(r--,1),o(e)},push(e,t){o(e)},listen:e=>(t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}),destroy(){t=[],n=[""],r=0},go(e,o=!0){const a=this.location,s=e<0?C.back:C.forward;r=Math.max(0,Math.min(r+e,n.length-1)),o&&function(e,n,{direction:r,delta:o}){const a={direction:r,delta:o,type:S.pop};for(const r of t)r(e,n,a)}(this.location,a,{direction:s,delta:e})}};return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n[r]}),a}function G(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),F(e)}function N(e){return"string"==typeof e||"symbol"==typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},M=f("nf");var Q;function W(e,t){return y(new Error,{type:e,[M]:!0},t)}function H(e,t){return e instanceof Error&&M in e&&(null==t||!!(e.type&t))}!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(Q||(Q={}));const K="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},z=/[.+*?^${}()[\]/\\]/g;function Y(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=Y(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const Z={type:0,value:""},ee=/[a-zA-Z0-9_]/;function te(e,t,n){const r=function(e,t){const n=y({},J,t),r=[];let o=n.start?"^":"";const a=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const s=t[r];let i=40+(n.sensitive?.25:0);if(0===s.type)r||(o+="/"),o+=s.value.replace(z,"\\$&"),i+=40;else if(1===s.type){const{value:e,repeatable:n,optional:c,regexp:l}=s;a.push({name:e,repeatable:n,optional:c});const u=l||K;if(u!==K){i+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(f=c&&t.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),o+=f,i+=20,c&&(i+=-8),n&&(i+=-20),".*"===u&&(i+=-50)}e.push(i)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const a of o)if(0===a.type)n+=a.value;else if(1===a.type){const{value:s,repeatable:i,optional:c}=a,l=s in t?t[s]:"";if(Array.isArray(l)&&!i)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(l)?l.join("/"):l;if(!u){if(!c)throw new Error(`Missing required param "${s}"`);o.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[Z]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let i,c=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===i||"+"===i)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===i||"+"===i,optional:"*"===i||"?"===i})):t("Invalid state to consume buffer"),l="")}function p(){l+=i}for(;c<e.length;)if(i=e[c++],"\\"!==i||2===n)switch(n){case 0:"/"===i?(l&&f(),s()):":"===i?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===i?n=2:ee.test(i)?p():(f(),n=0,"*"!==i&&"?"!==i&&"+"!==i&&c--);break;case 2:")"===i?"\\"==u[u.length-1]?u=u.slice(0,-1)+i:n=3:u+=i;break;case 3:f(),n=0,"*"!==i&&"?"!==i&&"+"!==i&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),s(),o}(e.path),n),o=y(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function ne(e,t){const n=[],r=new Map;function o(e,n,r){const i=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:re(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=se(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(y({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=te(t,n,l),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!oe(f)&&a(e.name)),"children"in c){const e=c.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,s(f)}return p?()=>{a(p)}:_}function a(e){if(N(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(e){let t=0;for(;t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ie(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!oe(e)&&r.set(e.record.name,e)}return t=se({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,i={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw W(1,{location:e});s=o.record.name,i=y(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(i)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(i=o.parse(a),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw W(1,{location:e,currentLocation:t});s=o.record.name,i=y({},t.params,e.params),a=o.stringify(i)}const c=[];let l=o;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:a,params:i,matched:c,meta:ae(c)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function re(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function oe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ae(e){return e.reduce(((e,t)=>y(e,t.meta)),{})}function se(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ie(e,t){return t.children.some((t=>t===e||ie(e,t)))}const ce=/#/g,le=/&/g,ue=/\//g,fe=/=/g,pe=/\?/g,de=/\+/g,he=/%5B/g,ge=/%5D/g,me=/%5E/g,ve=/%60/g,ye=/%7B/g,be=/%7C/g,_e=/%7D/g,we=/%20/g;function Ee(e){return encodeURI(""+e).replace(be,"|").replace(he,"[").replace(ge,"]")}function ke(e){return Ee(e).replace(de,"%2B").replace(we,"+").replace(ce,"%23").replace(le,"%26").replace(ve,"`").replace(ye,"{").replace(_e,"}").replace(me,"^")}function Oe(e){return null==e?"":function(e){return Ee(e).replace(ce,"%23").replace(pe,"%3F")}(e).replace(ue,"%2F")}function Re(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function Ae(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(de," "),o=r.indexOf("="),a=Re(o<0?r:r.slice(0,o)),s=o<0?null:Re(r.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function xe(e){let t="";for(let n in e){const r=e[n];(n=ke(n).replace(fe,"%3D"),null!=r)?(Array.isArray(r)?r.map((e=>e&&ke(e))):[r&&ke(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function Se(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Ce(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Pe(e,t,n){const o=()=>{e[t].delete(n)};(0,r.Ah)(o),(0,r.se)(o),(0,r.dl)((()=>{e[t].add(n)})),e[t].add(n)}function Ie(e){const t=(0,r.f3)(p,{}).value;t&&Pe(t,"leaveGuards",e)}function Le(e){const t=(0,r.f3)(p,{}).value;t&&Pe(t,"updateGuards",e)}function Te(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,i)=>{const c=e=>{var c;!1===e?i(W(4,{from:n,to:t})):e instanceof Error?i(e):"string"==typeof(c=e)||c&&"object"==typeof c?i(W(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),s())},l=e.call(r&&r.instances[o],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>i(e)))}))}function $e(e,t,n,r){const o=[];for(const s of e)for(const e in s.components){let i=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=i)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(i.__vccOpts||i)[t];a&&o.push(Te(a,n,r,s,e))}else{let a=i();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=(i=o).__esModule||u&&"Module"===i[Symbol.toStringTag]?o.default:o;var i;s.components[e]=a;const c=(a.__vccOpts||a)[t];return c&&Te(c,n,r,s,e)()}))))}}var a;return o}function je(e){const t=(0,r.f3)(h),n=(0,r.f3)(g),a=(0,r.Fl)((()=>t.resolve((0,o.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=a.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(O.bind(null,r));if(s>-1)return s;const i=De(e[t-2]);return t>1&&De(r)===i&&o[o.length-1].path!==i?o.findIndex(O.bind(null,e[t-2])):s})),i=(0,r.Fl)((()=>s.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,a.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&R(n.params,a.value.params)));if(__VUE_PROD_DEVTOOLS__&&v){const e=(0,r.FN)();if(e){const t={route:a.value,isActive:i.value,isExactActive:c.value};e.__vrl_devtools=e.__vrl_devtools||[],e.__vrl_devtools.push(t),(0,r.m0)((()=>{t.route=a.value,t.isActive=i.value,t.isExactActive=c.value}),{flush:"post"})}}return{route:a,href:(0,r.Fl)((()=>a.value.href)),isActive:i,isExactActive:c,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(_):Promise.resolve()}}}const Ve=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:je,setup(e,{slots:t}){const n=(0,o.qj)(je(e)),{options:a}=(0,r.f3)(h),s=(0,r.Fl)((()=>({[Ue(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Ue(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}});function De(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ue=(e,t,n)=>null!=e?e:null!=t?t:n;function Fe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const qe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=(0,r.f3)(m),s=(0,r.Fl)((()=>e.route||a.value)),i=(0,r.f3)(d,0),c=(0,r.Fl)((()=>s.value.matched[i]));(0,r.JJ)(d,i+1),(0,r.JJ)(p,c),(0,r.JJ)(m,s);const l=(0,o.iH)();return(0,r.YP)((()=>[l.value,c.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&O(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=s.value,a=c.value,u=a&&a.components[e.name],f=e.name;if(!u)return Fe(n.default,{Component:u,route:o});const p=a.props[e.name],d=p?!0===p?o.params:"function"==typeof p?p(o):p:null,h=(0,r.h)(u,y({},d,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[f]=null)},ref:l}));if(__VUE_PROD_DEVTOOLS__&&v&&h.ref){const e={depth:i,name:a.name,path:a.path,meta:a.meta};(Array.isArray(h.ref)?h.ref.map((e=>e.i)):[h.ref.i]).forEach((t=>{t.__vrv_devtools=e}))}return Fe(n.default,{Component:h,route:o})||h}}});function Ge(e,t){const n=y({},e,{matched:e.matched.map((e=>function(e,t){const n={};for(const r in e)t.includes(r)||(n[r]=e[r]);return n}(e,["instances","children","aliasOf"])))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function Ne(e){return{_custom:{display:e}}}let Be=0;function Me(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=Be++;!function(e,t){const n=e,r=a(),o=a().__VUE_DEVTOOLS_GLOBAL_HOOK__,i=s&&n.enableEarlyProxy;if(!o||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const e=i?new l(n,o):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else o.emit("devtools-plugin:setup",e,t)}({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},(a=>{a.on.inspectComponent(((e,n)=>{e.instanceData&&e.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ge(t.currentRoute.value,"Current Route")})})),a.on.visitComponentTree((({treeNode:e,componentInstance:t})=>{if(t.__vrv_devtools){const n=t.__vrv_devtools;e.tags.push({label:(n.name?`${n.name.toString()}: `:"")+n.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:We})}Array.isArray(t.__vrl_devtools)&&(t.__devtoolsApi=a,t.__vrl_devtools.forEach((t=>{let n=Je,r="";t.isExactActive?(n=Ke,r="This is exactly active"):t.isActive&&(n=He,r="This link is active"),e.tags.push({label:t.route.path,textColor:0,tooltip:r,backgroundColor:n})})))})),(0,r.YP)(t.currentRoute,(()=>{l(),a.notifyComponentUpdate(),a.sendInspectorTree(c),a.sendInspectorState(c)}));const s="router:navigations:"+o;a.addTimelineLayer({id:s,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError(((e,t)=>{a.addTimelineEvent({layerId:s,event:{title:"Error during Navigation",subtitle:t.fullPath,logType:"error",time:a.now(),data:{error:e},groupId:t.meta.__navigationId}})}));let i=0;t.beforeEach(((e,t)=>{const n={guard:Ne("beforeEach"),from:Ge(t,"Current Location during this navigation"),to:Ge(e,"Target location")};Object.defineProperty(e.meta,"__navigationId",{value:i++}),a.addTimelineEvent({layerId:s,event:{time:a.now(),title:"Start of navigation",subtitle:e.fullPath,data:n,groupId:e.meta.__navigationId}})})),t.afterEach(((e,t,n)=>{const r={guard:Ne("afterEach")};n?(r.failure={_custom:{type:Error,readOnly:!0,display:n?n.message:"",tooltip:"Navigation Failure",value:n}},r.status=Ne("❌")):r.status=Ne("✅"),r.from=Ge(t,"Current Location during this navigation"),r.to=Ge(e,"Target location"),a.addTimelineEvent({layerId:s,event:{title:"End of navigation",subtitle:e.fullPath,time:a.now(),data:r,logType:n?"warning":"default",groupId:e.meta.__navigationId}})}));const c="router-inspector:"+o;function l(){if(!u)return;const e=u;let r=n.getRoutes().filter((e=>!e.parent));r.forEach(et),e.filter&&(r=r.filter((t=>tt(t,e.filter.toLowerCase())))),r.forEach((e=>Ze(e,t.currentRoute.value))),e.rootNodes=r.map(ze)}let u;a.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"}),a.on.getInspectorTree((t=>{u=t,t.app===e&&t.inspectorId===c&&l()})),a.on.getInspectorState((t=>{if(t.app===e&&t.inspectorId===c){const e=n.getRoutes().find((e=>e.record.__vd_id===t.nodeId));e&&(t.state={options:Qe(e)})}})),a.sendInspectorTree(c),a.sendInspectorState(c)}))}function Qe(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return null!=t.name&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map((e=>`${e.name}${function(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}(e)}`)).join(" "),tooltip:"Param keys",value:e.keys}}}),null!=t.redirect&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map((e=>e.record.path))}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map((e=>e.join(", "))).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const We=15485081,He=2450411,Ke=8702998,Je=16486972;function ze(e){const t=[],{record:n}=e;null!=n.name&&t.push({label:String(n.name),textColor:0,backgroundColor:2282478}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Je}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:We}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Ke}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:He}),n.redirect&&t.push({label:"redirect: "+("string"==typeof n.redirect?n.redirect:"Object"),textColor:16777215,backgroundColor:6710886});let r=n.__vd_id;return null==r&&(r=String(Ye++),n.__vd_id=r),{id:r,label:n.path,tags:t,children:e.children.map(ze)}}let Ye=0;const Xe=/^\/(.*)\/([a-z]*)$/;function Ze(e,t){const n=t.matched.length&&O(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some((t=>O(t,e.record)))),e.children.forEach((e=>Ze(e,t)))}function et(e){e.__vd_match=!1,e.children.forEach(et)}function tt(e,t){const n=String(e.re).match(Xe);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach((e=>tt(e,t))),("/"!==e.record.path||"/"===t)&&(e.__vd_match=e.re.test(t),!0);const r=e.record.path.toLowerCase(),o=Re(r);return!(t.startsWith("/")||!o.includes(t)&&!r.includes(t))||!(!o.startsWith(t)&&!r.startsWith(t))||!(!e.record.name||!String(e.record.name).includes(t))||e.children.some((e=>tt(e,t)))}function nt(e){const t=ne(e.routes,e),n=e.parseQuery||Ae,a=e.stringifyQuery||xe,s=e.history,i=Ce(),c=Ce(),l=Ce(),u=(0,o.XI)(B);let f=B;v&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=b.bind(null,(e=>""+e)),d=b.bind(null,Oe),w=b.bind(null,Re);function k(e,r){if(r=y({},r||u.value),"string"==typeof e){const o=E(n,e,r.path),a=t.resolve({path:o.path},r),i=s.createHref(o.fullPath);return y(o,a,{params:w(a.params),hash:Re(o.hash),redirectedFrom:void 0,href:i})}let o;if("path"in e)o=y({},e,{path:E(n,e.path,r.path).path});else{const t=y({},e.params);for(const e in t)null==t[e]&&delete t[e];o=y({},e,{params:d(e.params)}),r.params=d(r.params)}const i=t.resolve(o,r),c=e.hash||"";i.params=p(w(i.params));const l=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(a,y({},e,{hash:(f=c,Ee(f).replace(ye,"{").replace(_e,"}").replace(me,"^")),path:i.path}));var f;const h=s.createHref(l);return y({fullPath:l,hash:c,query:a===xe?Se(e.query):e.query||{}},i,{redirectedFrom:void 0,href:h})}function A(e){return"string"==typeof e?E(n,e,u.value.path):y({},e)}function x(e,t){if(f!==e)return W(8,{from:t,to:e})}function C(e){return I(e)}function P(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=A(r):{path:r},r.params={}),y({query:e.query,hash:e.hash,params:e.params},r)}}function I(e,t){const n=f=k(e),r=u.value,o=e.state,s=e.force,i=!0===e.replace,c=P(n);if(c)return I(y(A(c),{state:o,force:s,replace:i}),t||n);const l=n;let p;return l.redirectedFrom=t,!s&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&O(t.matched[r],n.matched[o])&&R(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(a,r,n)&&(p=W(16,{to:l,from:r}),J(r,r,!0,!1)),(p?Promise.resolve(p):V(l,r)).catch((e=>H(e)?H(e,2)?e:K(e):Q(e,l,r))).then((e=>{if(e){if(H(e,2))return I(y(A(e.to),{state:o,force:s,replace:i}),t||l)}else e=U(l,r,!0,i,o);return D(l,r,e),e}))}function L(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>O(e,a)))?r.push(a):n.push(a));const i=e.matched[s];i&&(t.matched.find((e=>O(e,i)))||o.push(i))}return[n,r,o]}(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(Te(r,e,t))}));const s=L.bind(null,e,t);return n.push(s),rt(n).then((()=>{n=[];for(const r of i.list())n.push(Te(r,e,t));return n.push(s),rt(n)})).then((()=>{n=$e(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Te(r,e,t))}));return n.push(s),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Te(o,e,t));else n.push(Te(r.beforeEnter,e,t));return n.push(s),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=$e(a,"beforeRouteEnter",e,t),n.push(s),rt(n)))).then((()=>{n=[];for(const r of c.list())n.push(Te(r,e,t));return n.push(s),rt(n)})).catch((e=>H(e,8)?e:Promise.reject(e)))}function D(e,t,n){for(const r of l.list())r(e,t,n)}function U(e,t,n,r,o){const a=x(e,t);if(a)return a;const i=t===B,c=v?history.state:{};n&&(r||i?s.replace(e.fullPath,y({scroll:i&&c&&c.scroll},o)):s.push(e.fullPath,o)),u.value=e,J(e,t,n,i),K()}let F;let q,G=Ce(),M=Ce();function Q(e,t,n){K(e);const r=M.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function K(e){return q||(q=!e,F||(F=s.listen(((e,t,n)=>{const r=k(e),o=P(r);if(o)return void I(y(o,{replace:!0}),r).catch(_);f=r;const a=u.value;var i,c;v&&(i=$(a.fullPath,n.delta),c=T(),j.set(i,c)),V(r,a).catch((e=>H(e,12)?e:H(e,2)?(I(e.to,r).then((e=>{H(e,20)&&!n.delta&&n.type===S.pop&&s.go(-1,!1)})).catch(_),Promise.reject()):(n.delta&&s.go(-n.delta,!1),Q(e,r,a)))).then((e=>{(e=e||U(r,a,!1))&&(n.delta?s.go(-n.delta,!1):n.type===S.pop&&H(e,20)&&s.go(-1,!1)),D(r,a,e)})).catch(_)}))),G.list().forEach((([t,n])=>e?n(e):t())),G.reset()),e}function J(t,n,o,a){const{scrollBehavior:s}=e;if(!v||!s)return Promise.resolve();const i=!o&&function(e){const t=j.get(e);return j.delete(e),t}($(t.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>s(t,n,i))).then((e=>e&&function(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>Q(e,t,n)))}const z=e=>s.go(e);let Y;const X=new Set,Z={currentRoute:u,addRoute:function(e,n){let r,o;return N(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:k,options:e,push:C,replace:function(e){return C(y(A(e),{replace:!0}))},go:z,back:()=>z(-1),forward:()=>z(1),beforeEach:i.add,beforeResolve:c.add,afterEach:l.add,onError:M.add,isReady:function(){return q&&u.value!==B?Promise.resolve():new Promise(((e,t)=>{G.add([e,t])}))},install(e){const n=this;e.component("RouterLink",Ve),e.component("RouterView",qe),e.config.globalProperties.$router=n,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(u)}),v&&!Y&&u.value===B&&(Y=!0,C(s.location).catch((e=>{})));const a={};for(const e in B)a[e]=(0,r.Fl)((()=>u.value[e]));e.provide(h,n),e.provide(g,(0,o.qj)(a)),e.provide(m,u);const i=e.unmount;X.add(e),e.unmount=function(){X.delete(e),X.size<1&&(f=B,F&&F(),F=null,u.value=B,Y=!1,q=!1),i()},__VUE_PROD_DEVTOOLS__&&v&&Me(e,n,t)}};return Z}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function ot(){return(0,r.f3)(h)}function at(){return(0,r.f3)(g)}}}]);