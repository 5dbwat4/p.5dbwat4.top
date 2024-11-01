var yA=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var aB=yA((Sn,Tn)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function iu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const At={},co=[],jn=()=>{},vA=()=>!1,Ol=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ou=n=>n.startsWith("onUpdate:"),zt=Object.assign,su=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},bA=Object.prototype.hasOwnProperty,pt=(n,e)=>bA.call(n,e),et=Array.isArray,bs=n=>Fl(n)==="[object Map]",AA=n=>Fl(n)==="[object Set]",nt=n=>typeof n=="function",$t=n=>typeof n=="string",Pi=n=>typeof n=="symbol",Dt=n=>n!==null&&typeof n=="object",au=n=>(Dt(n)||nt(n))&&nt(n.then)&&nt(n.catch),xA=Object.prototype.toString,Fl=n=>xA.call(n),EA=n=>Fl(n).slice(8,-1),wA=n=>Fl(n)==="[object Object]",lu=n=>$t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,As=iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ml=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},CA=/-(\w)/g,Kr=Ml(n=>n.replace(CA,(e,t)=>t?t.toUpperCase():"")),SA=/\B([A-Z])/g,Bi=Ml(n=>n.replace(SA,"-$1").toLowerCase()),km=Ml(n=>n.charAt(0).toUpperCase()+n.slice(1)),fc=Ml(n=>n?`on${km(n)}`:""),Gr=(n,e)=>!Object.is(n,e),hc=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Im=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},TA=n=>{const e=parseFloat(n);return isNaN(e)?n:e},kA=n=>{const e=$t(n)?Number(n):NaN;return isNaN(e)?n:e};let Pf;const Nl=()=>Pf||(Pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cu(n){if(et(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=$t(r)?_A(r):cu(r);if(i)for(const o in i)e[o]=i[o]}return e}else if($t(n)||Dt(n))return n}const IA=/;(?![^(]*\))/g,LA=/:([^]+)/,RA=/\/\*[^]*?\*\//g;function _A(n){const e={};return n.replace(RA,"").split(IA).forEach(t=>{if(t){const r=t.split(LA);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function du(n){let e="";if($t(n))e=n;else if(et(n))for(let t=0;t<n.length;t++){const r=du(n[t]);r&&(e+=r+" ")}else if(Dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const DA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",PA=iu(DA);function Lm(n){return!!n||n===""}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wn;class BA{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wn,!e&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=wn;try{return wn=this,e()}finally{wn=t}}}on(){wn=this}off(){wn=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function OA(){return wn}let Et;const pc=new WeakSet;class Rm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wn&&wn.active&&wn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pc.has(this)&&(pc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bf(this),Pm(this);const e=Et,t=Gn;Et=this,Gn=!0;try{return this.fn()}finally{Bm(this),Et=e,Gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hu(e);this.deps=this.depsTail=void 0,Bf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ld(this)&&this.run()}get dirty(){return ld(this)}}let _m=0,xs,Es;function Dm(n,e=!1){if(n.flags|=8,e){n.next=Es,Es=n;return}n.next=xs,xs=n}function uu(){_m++}function fu(){if(--_m>0)return;if(Es){let e=Es;for(Es=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;xs;){let e=xs;for(xs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Pm(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bm(n){let e,t=n.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),hu(r),FA(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}n.deps=e,n.depsTail=t}function ld(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Om(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Om(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ps))return;n.globalVersion=Ps;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ld(n)){n.flags&=-3;return}const t=Et,r=Gn;Et=n,Gn=!0;try{Pm(n);const i=n.fn(n._value);(e.version===0||Gr(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{Et=t,Gn=r,Bm(n),n.flags&=-3}}function hu(n,e=!1){const{dep:t,prevSub:r,nextSub:i}=n;if(r&&(r.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)hu(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function FA(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Gn=!0;const Fm=[];function Xr(){Fm.push(Gn),Gn=!1}function Zr(){const n=Fm.pop();Gn=n===void 0?!0:n}function Bf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Ps=0;class MA{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Et||!Gn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new MA(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,Mm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=r)}return t}trigger(e){this.version++,Ps++,this.notify(e)}notify(e){uu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{fu()}}}function Mm(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Mm(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const il=new WeakMap,Ei=Symbol(""),cd=Symbol(""),Bs=Symbol("");function sn(n,e,t){if(Gn&&Et){let r=il.get(n);r||il.set(n,r=new Map);let i=r.get(t);i||(r.set(t,i=new pu),i.map=r,i.key=t),i.track()}}function Cr(n,e,t,r,i,o){const s=il.get(n);if(!s){Ps++;return}const a=l=>{l&&l.trigger()};if(uu(),e==="clear")s.forEach(a);else{const l=et(n),c=l&&lu(t);if(l&&t==="length"){const d=Number(r);s.forEach((u,f)=>{(f==="length"||f===Bs||!Pi(f)&&f>=d)&&a(u)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),c&&a(s.get(Bs)),e){case"add":l?c&&a(s.get("length")):(a(s.get(Ei)),bs(n)&&a(s.get(cd)));break;case"delete":l||(a(s.get(Ei)),bs(n)&&a(s.get(cd)));break;case"set":bs(n)&&a(s.get(Ei));break}}fu()}function NA(n,e){const t=il.get(n);return t&&t.get(e)}function Qi(n){const e=ut(n);return e===n?e:(sn(e,"iterate",Bs),Kn(n)?e:e.map(fn))}function mu(n){return sn(n=ut(n),"iterate",Bs),n}const zA={__proto__:null,[Symbol.iterator](){return mc(this,Symbol.iterator,fn)},concat(...n){return Qi(this).concat(...n.map(e=>et(e)?Qi(e):e))},entries(){return mc(this,"entries",n=>(n[1]=fn(n[1]),n))},every(n,e){return mr(this,"every",n,e,void 0,arguments)},filter(n,e){return mr(this,"filter",n,e,t=>t.map(fn),arguments)},find(n,e){return mr(this,"find",n,e,fn,arguments)},findIndex(n,e){return mr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return mr(this,"findLast",n,e,fn,arguments)},findLastIndex(n,e){return mr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return mr(this,"forEach",n,e,void 0,arguments)},includes(...n){return gc(this,"includes",n)},indexOf(...n){return gc(this,"indexOf",n)},join(n){return Qi(this).join(n)},lastIndexOf(...n){return gc(this,"lastIndexOf",n)},map(n,e){return mr(this,"map",n,e,void 0,arguments)},pop(){return as(this,"pop")},push(...n){return as(this,"push",n)},reduce(n,...e){return Of(this,"reduce",n,e)},reduceRight(n,...e){return Of(this,"reduceRight",n,e)},shift(){return as(this,"shift")},some(n,e){return mr(this,"some",n,e,void 0,arguments)},splice(...n){return as(this,"splice",n)},toReversed(){return Qi(this).toReversed()},toSorted(n){return Qi(this).toSorted(n)},toSpliced(...n){return Qi(this).toSpliced(...n)},unshift(...n){return as(this,"unshift",n)},values(){return mc(this,"values",fn)}};function mc(n,e,t){const r=mu(n),i=r[e]();return r!==n&&!Kn(n)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=t(o.value)),o}),i}const $A=Array.prototype;function mr(n,e,t,r,i,o){const s=mu(n),a=s!==n&&!Kn(n),l=s[e];if(l!==$A[e]){const u=l.apply(n,o);return a?fn(u):u}let c=t;s!==n&&(a?c=function(u,f){return t.call(this,fn(u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const d=l.call(s,c,r);return a&&i?i(d):d}function Of(n,e,t,r){const i=mu(n);let o=t;return i!==n&&(Kn(n)?t.length>3&&(o=function(s,a,l){return t.call(this,s,a,l,n)}):o=function(s,a,l){return t.call(this,s,fn(a),l,n)}),i[e](o,...r)}function gc(n,e,t){const r=ut(n);sn(r,"iterate",Bs);const i=r[e](...t);return(i===-1||i===!1)&&vu(t[0])?(t[0]=ut(t[0]),r[e](...t)):i}function as(n,e,t=[]){Xr(),uu();const r=ut(n)[e].apply(n,t);return fu(),Zr(),r}const UA=iu("__proto__,__v_isRef,__isVue"),Nm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Pi));function HA(n){Pi(n)||(n=String(n));const e=ut(this);return sn(e,"has",n),e.hasOwnProperty(n)}class zm{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?QA:Wm:o?Hm:Um).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=et(e);if(!i){let l;if(s&&(l=zA[t]))return l;if(t==="hasOwnProperty")return HA}const a=Reflect.get(e,t,Jt(e)?e:r);return(Pi(t)?Nm.has(t):UA(t))||(i||sn(e,"get",t),o)?a:Jt(a)?s&&lu(t)?a:a.value:Dt(a)?i?bo(a):zl(a):a}}class $m extends zm{constructor(e=!1){super(!1,e)}set(e,t,r,i){let o=e[t];if(!this._isShallow){const l=ki(o);if(!Kn(r)&&!ki(r)&&(o=ut(o),r=ut(r)),!et(e)&&Jt(o)&&!Jt(r))return l?!1:(o.value=r,!0)}const s=et(e)&&lu(t)?Number(t)<e.length:pt(e,t),a=Reflect.set(e,t,r,Jt(e)?e:i);return e===ut(i)&&(s?Gr(r,o)&&Cr(e,"set",t,r):Cr(e,"add",t,r)),a}deleteProperty(e,t){const r=pt(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&r&&Cr(e,"delete",t,void 0),i}has(e,t){const r=Reflect.has(e,t);return(!Pi(t)||!Nm.has(t))&&sn(e,"has",t),r}ownKeys(e){return sn(e,"iterate",et(e)?"length":Ei),Reflect.ownKeys(e)}}class WA extends zm{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const jA=new $m,GA=new WA,KA=new $m(!0),dd=n=>n,ma=n=>Reflect.getPrototypeOf(n);function VA(n,e,t){return function(...r){const i=this.__v_raw,o=ut(i),s=bs(o),a=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,c=i[n](...r),d=t?dd:e?ud:fn;return!e&&sn(o,"iterate",l?cd:Ei),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function ga(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function qA(n,e){const t={get(i){const o=this.__v_raw,s=ut(o),a=ut(i);n||(Gr(i,a)&&sn(s,"get",i),sn(s,"get",a));const{has:l}=ma(s),c=e?dd:n?ud:fn;if(l.call(s,i))return c(o.get(i));if(l.call(s,a))return c(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!n&&sn(ut(i),"iterate",Ei),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,s=ut(o),a=ut(i);return n||(Gr(i,a)&&sn(s,"has",i),sn(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,l=ut(a),c=e?dd:n?ud:fn;return!n&&sn(l,"iterate",Ei),a.forEach((d,u)=>i.call(o,c(d),c(u),s))}};return zt(t,n?{add:ga("add"),set:ga("set"),delete:ga("delete"),clear:ga("clear")}:{add(i){!e&&!Kn(i)&&!ki(i)&&(i=ut(i));const o=ut(this);return ma(o).has.call(o,i)||(o.add(i),Cr(o,"add",i,i)),this},set(i,o){!e&&!Kn(o)&&!ki(o)&&(o=ut(o));const s=ut(this),{has:a,get:l}=ma(s);let c=a.call(s,i);c||(i=ut(i),c=a.call(s,i));const d=l.call(s,i);return s.set(i,o),c?Gr(o,d)&&Cr(s,"set",i,o):Cr(s,"add",i,o),this},delete(i){const o=ut(this),{has:s,get:a}=ma(o);let l=s.call(o,i);l||(i=ut(i),l=s.call(o,i)),a&&a.call(o,i);const c=o.delete(i);return l&&Cr(o,"delete",i,void 0),c},clear(){const i=ut(this),o=i.size!==0,s=i.clear();return o&&Cr(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=VA(i,n,e)}),t}function gu(n,e){const t=qA(n,e);return(r,i,o)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(pt(t,i)&&i in r?t:r,i,o)}const YA={get:gu(!1,!1)},XA={get:gu(!1,!0)},ZA={get:gu(!0,!1)},Um=new WeakMap,Hm=new WeakMap,Wm=new WeakMap,QA=new WeakMap;function JA(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ex(n){return n.__v_skip||!Object.isExtensible(n)?0:JA(EA(n))}function zl(n){return ki(n)?n:yu(n,!1,jA,YA,Um)}function tx(n){return yu(n,!1,KA,XA,Hm)}function bo(n){return yu(n,!0,GA,ZA,Wm)}function yu(n,e,t,r,i){if(!Dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=i.get(n);if(o)return o;const s=ex(n);if(s===0)return n;const a=new Proxy(n,s===2?r:t);return i.set(n,a),a}function ws(n){return ki(n)?ws(n.__v_raw):!!(n&&n.__v_isReactive)}function ki(n){return!!(n&&n.__v_isReadonly)}function Kn(n){return!!(n&&n.__v_isShallow)}function vu(n){return n?!!n.__v_raw:!1}function ut(n){const e=n&&n.__v_raw;return e?ut(e):n}function nx(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&Im(n,"__v_skip",!0),n}const fn=n=>Dt(n)?zl(n):n,ud=n=>Dt(n)?bo(n):n;function Jt(n){return n?n.__v_isRef===!0:!1}function De(n){return jm(n,!1)}function rx(n){return jm(n,!0)}function jm(n,e){return Jt(n)?n:new ix(n,e)}class ix{constructor(e,t){this.dep=new pu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ut(e),this._value=t?e:fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Kn(e)||ki(e);e=r?e:ut(e),Gr(e,t)&&(this._rawValue=e,this._value=r?e:fn(e),this.dep.trigger())}}function Gm(n){return Jt(n)?n.value:n}const ox={get:(n,e,t)=>e==="__v_raw"?n:Gm(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return Jt(i)&&!Jt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function Km(n){return ws(n)?n:new Proxy(n,ox)}class sx{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return NA(ut(this._object),this._key)}}class ax{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function bt(n,e,t){return Jt(n)?n:nt(n)?new ax(n):Dt(n)&&arguments.length>1?lx(n,e,t):De(n)}function lx(n,e,t){const r=n[e];return Jt(r)?r:new sx(n,e,t)}class cx{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new pu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Dm(this,!0),!0}get value(){const e=this.dep.track();return Om(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dx(n,e,t=!1){let r,i;return nt(n)?r=n:(r=n.get,i=n.set),new cx(r,i,t)}const ya={},ol=new WeakMap;let pi;function ux(n,e=!1,t=pi){if(t){let r=ol.get(t);r||ol.set(t,r=[]),r.push(n)}}function fx(n,e,t=At){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:a,call:l}=t,c=C=>i?C:Kn(C)||i===!1||i===0?Sr(C,1):Sr(C);let d,u,f,h,p=!1,m=!1;if(Jt(n)?(u=()=>n.value,p=Kn(n)):ws(n)?(u=()=>c(n),p=!0):et(n)?(m=!0,p=n.some(C=>ws(C)||Kn(C)),u=()=>n.map(C=>{if(Jt(C))return C.value;if(ws(C))return c(C);if(nt(C))return l?l(C,2):C()})):nt(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){Xr();try{f()}finally{Zr()}}const C=pi;pi=d;try{return l?l(n,3,[h]):n(h)}finally{pi=C}}:u=jn,e&&i){const C=u,k=i===!0?1/0:i;u=()=>Sr(C(),k)}const g=OA(),y=()=>{d.stop(),g&&su(g.effects,d)};if(o&&e){const C=e;e=(...k)=>{C(...k),y()}}let E=m?new Array(n.length).fill(ya):ya;const S=C=>{if(!(!(d.flags&1)||!d.dirty&&!C))if(e){const k=d.run();if(i||p||(m?k.some((M,T)=>Gr(M,E[T])):Gr(k,E))){f&&f();const M=pi;pi=d;try{const T=[k,E===ya?void 0:m&&E[0]===ya?[]:E,h];l?l(e,3,T):e(...T),E=k}finally{pi=M}}}else d.run()};return a&&a(S),d=new Rm(u),d.scheduler=s?()=>s(S,!1):S,h=C=>ux(C,!1,d),f=d.onStop=()=>{const C=ol.get(d);if(C){if(l)l(C,4);else for(const k of C)k();ol.delete(d)}},e?r?S(!0):E=d.run():s?s(S.bind(null,!0),!0):d.run(),y.pause=d.pause.bind(d),y.resume=d.resume.bind(d),y.stop=y,y}function Sr(n,e=1/0,t){if(e<=0||!Dt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Jt(n))Sr(n.value,e,t);else if(et(n))for(let r=0;r<n.length;r++)Sr(n[r],e,t);else if(AA(n)||bs(n))n.forEach(r=>{Sr(r,e,t)});else if(wA(n)){for(const r in n)Sr(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Sr(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vs(n,e,t,r){try{return r?n(...r):n()}catch(i){$l(i,e,t)}}function Vn(n,e,t,r){if(nt(n)){const i=Vs(n,e,t,r);return i&&au(i)&&i.catch(o=>{$l(o,e,t)}),i}if(et(n)){const i=[];for(let o=0;o<n.length;o++)i.push(Vn(n[o],e,t,r));return i}}function $l(n,e,t,r=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||At;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,l,c)===!1)return}a=a.parent}if(o){Xr(),Vs(o,null,10,[n,l,c]),Zr();return}}hx(n,t,i,r,s)}function hx(n,e,t,r=!0,i=!1){if(i)throw n;console.error(n)}const hn=[];let tr=-1;const uo=[];let $r=null,ao=0;const Vm=Promise.resolve();let sl=null;function Ao(n){const e=sl||Vm;return n?e.then(this?n.bind(this):n):e}function px(n){let e=tr+1,t=hn.length;for(;e<t;){const r=e+t>>>1,i=hn[r],o=Os(i);o<n||o===n&&i.flags&2?e=r+1:t=r}return e}function bu(n){if(!(n.flags&1)){const e=Os(n),t=hn[hn.length-1];!t||!(n.flags&2)&&e>=Os(t)?hn.push(n):hn.splice(px(e),0,n),n.flags|=1,qm()}}function qm(){sl||(sl=Vm.then(Xm))}function mx(n){et(n)?uo.push(...n):$r&&n.id===-1?$r.splice(ao+1,0,n):n.flags&1||(uo.push(n),n.flags|=1),qm()}function Ff(n,e,t=tr+1){for(;t<hn.length;t++){const r=hn[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;hn.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ym(n){if(uo.length){const e=[...new Set(uo)].sort((t,r)=>Os(t)-Os(r));if(uo.length=0,$r){$r.push(...e);return}for($r=e,ao=0;ao<$r.length;ao++){const t=$r[ao];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}$r=null,ao=0}}const Os=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xm(n){const e=jn;try{for(tr=0;tr<hn.length;tr++){const t=hn[tr];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tr<hn.length;tr++){const t=hn[tr];t&&(t.flags&=-2)}tr=-1,hn.length=0,Ym(),sl=null,(hn.length||uo.length)&&Xm()}}let nn=null,Zm=null;function al(n){const e=nn;return nn=n,Zm=n&&n.type.__scopeId||null,e}function zn(n,e=nn,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Vf(-1);const o=al(e);let s;try{s=n(...i)}finally{al(o),r._d&&Vf(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Ul(n,e){if(nn===null)return n;const t=Gl(nn),r=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,a,l=At]=e[i];o&&(nt(o)&&(o={mounted:o,updated:o}),o.deep&&Sr(s),r.push({dir:o,instance:t,value:s,oldValue:void 0,arg:a,modifiers:l}))}return n}function li(n,e,t,r){const i=n.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(Xr(),Vn(l,t,8,[n.el,a,n,e]),Zr())}}const Qm=Symbol("_vte"),Jm=n=>n.__isTeleport,Cs=n=>n&&(n.disabled||n.disabled===""),gx=n=>n&&(n.defer||n.defer===""),Mf=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Nf=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,fd=(n,e)=>{const t=n&&n.to;return $t(t)?e?e(t):null:t},yx={name:"Teleport",__isTeleport:!0,process(n,e,t,r,i,o,s,a,l,c){const{mc:d,pc:u,pbc:f,o:{insert:h,querySelector:p,createText:m,createComment:g}}=c,y=Cs(e.props);let{shapeFlag:E,children:S,dynamicChildren:C}=e;if(n==null){const k=e.el=m(""),M=e.anchor=m("");h(k,t,r),h(M,t,r);const T=(F,O)=>{E&16&&(i&&i.isCE&&(i.ce._teleportTarget=F),d(S,F,O,i,o,s,a,l))},z=()=>{const F=e.target=fd(e.props,p),O=e0(F,e,m,h);F&&(s!=="svg"&&Mf(F)?s="svg":s!=="mathml"&&Nf(F)&&(s="mathml"),y||(T(F,O),ja(e,!1)))};y&&(T(t,M),ja(e,!0)),gx(e.props)?vn(z,o):z()}else{e.el=n.el,e.targetStart=n.targetStart;const k=e.anchor=n.anchor,M=e.target=n.target,T=e.targetAnchor=n.targetAnchor,z=Cs(n.props),F=z?t:M,O=z?k:T;if(s==="svg"||Mf(M)?s="svg":(s==="mathml"||Nf(M))&&(s="mathml"),C?(f(n.dynamicChildren,C,F,i,o,s,a),wu(n,e,!0)):l||u(n,e,F,O,i,o,s,a,!1),y)z?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):va(e,t,k,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const V=e.target=fd(e.props,p);V&&va(e,V,null,c,0)}else z&&va(e,M,T,c,1);ja(e,y)}},remove(n,e,t,{um:r,o:{remove:i}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:c,targetAnchor:d,target:u,props:f}=n;if(u&&(i(c),i(d)),o&&i(l),s&16){const h=o||!Cs(f);for(let p=0;p<a.length;p++){const m=a[p];r(m,e,t,h,!!m.dynamicChildren)}}},move:va,hydrate:vx};function va(n,e,t,{o:{insert:r},m:i},o=2){o===0&&r(n.targetAnchor,e,t);const{el:s,anchor:a,shapeFlag:l,children:c,props:d}=n,u=o===2;if(u&&r(s,e,t),(!u||Cs(d))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,t,2);u&&r(a,e,t)}function vx(n,e,t,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:c,createText:d}},u){const f=e.target=fd(e.props,l);if(f){const h=Cs(e.props),p=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=u(s(n),e,a(n),t,r,i,o),e.targetStart=p,e.targetAnchor=p&&s(p);else{e.anchor=s(n);let m=p;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,f._lpa=e.targetAnchor&&s(e.targetAnchor);break}}m=s(m)}e.targetAnchor||e0(f,e,d,c),u(p&&s(p),e,f,t,r,i,o)}ja(e,h)}return e.anchor&&s(e.anchor)}const bx=yx;function ja(n,e){const t=n.ctx;if(t&&t.ut){let r,i;for(e?(r=n.el,i=n.anchor):(r=n.targetStart,i=n.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function e0(n,e,t,r){const i=e.targetStart=t(""),o=e.targetAnchor=t("");return i[Qm]=o,n&&(r(i,n),r(o,n)),o}const Ur=Symbol("_leaveCb"),ba=Symbol("_enterCb");function t0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return On(()=>{n.isMounted=!0}),kn(()=>{n.isUnmounting=!0}),n}const Ln=[Function,Array],n0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ln,onEnter:Ln,onAfterEnter:Ln,onEnterCancelled:Ln,onBeforeLeave:Ln,onLeave:Ln,onAfterLeave:Ln,onLeaveCancelled:Ln,onBeforeAppear:Ln,onAppear:Ln,onAfterAppear:Ln,onAppearCancelled:Ln},r0=n=>{const e=n.subTree;return e.component?r0(e.component):e},Ax={name:"BaseTransition",props:n0,setup(n,{slots:e}){const t=Oi(),r=t0();return()=>{const i=e.default&&Au(e.default(),!0);if(!i||!i.length)return;const o=i0(i),s=ut(n),{mode:a}=s;if(r.isLeaving)return yc(o);const l=zf(o);if(!l)return yc(o);let c=Fs(l,s,r,t,f=>c=f);l.type!==cn&&Ii(l,c);const d=t.subTree,u=d&&zf(d);if(u&&u.type!==cn&&!yi(l,u)&&r0(t).type!==cn){const f=Fs(u,s,r,t);if(Ii(u,f),a==="out-in"&&l.type!==cn)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave},yc(o);a==="in-out"&&l.type!==cn&&(f.delayLeave=(h,p,m)=>{const g=o0(r,u);g[String(u.key)]=u,h[Ur]=()=>{p(),h[Ur]=void 0,delete c.delayedLeave},c.delayedLeave=m})}return o}}};function i0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==cn){e=t;break}}return e}const xx=Ax;function o0(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Fs(n,e,t,r,i){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:E,onAppearCancelled:S}=e,C=String(n.key),k=o0(t,n),M=(F,O)=>{F&&Vn(F,r,9,O)},T=(F,O)=>{const V=O[1];M(F,O),et(F)?F.every(_=>_.length<=1)&&V():F.length<=1&&V()},z={mode:s,persisted:a,beforeEnter(F){let O=l;if(!t.isMounted)if(o)O=g||l;else return;F[Ur]&&F[Ur](!0);const V=k[C];V&&yi(n,V)&&V.el[Ur]&&V.el[Ur](),M(O,[F])},enter(F){let O=c,V=d,_=u;if(!t.isMounted)if(o)O=y||c,V=E||d,_=S||u;else return;let H=!1;const I=F[ba]=W=>{H||(H=!0,W?M(_,[F]):M(V,[F]),z.delayedLeave&&z.delayedLeave(),F[ba]=void 0)};O?T(O,[F,I]):I()},leave(F,O){const V=String(n.key);if(F[ba]&&F[ba](!0),t.isUnmounting)return O();M(f,[F]);let _=!1;const H=F[Ur]=I=>{_||(_=!0,O(),I?M(m,[F]):M(p,[F]),F[Ur]=void 0,k[V]===n&&delete k[V])};k[V]=n,h?T(h,[F,H]):H()},clone(F){const O=Fs(F,e,t,r,i);return i&&i(O),O}};return z}function yc(n){if(Hl(n))return n=Ir(n),n.children=null,n}function zf(n){if(!Hl(n))return Jm(n.type)&&n.children?i0(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&nt(t.default))return t.default()}}function Ii(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ii(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Au(n,e=!1,t){let r=[],i=0;for(let o=0;o<n.length;o++){let s=n[o];const a=t==null?s.key:String(t)+String(s.key!=null?s.key:o);s.type===_t?(s.patchFlag&128&&i++,r=r.concat(Au(s.children,e,a))):(e||s.type!==cn)&&r.push(a!=null?Ir(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ve(n,e){return nt(n)?(()=>zt({name:n.name},e,{setup:n}))():n}function s0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function hd(n,e,t,r,i=!1){if(et(n)){n.forEach((p,m)=>hd(p,e&&(et(e)?e[m]:e),t,r,i));return}if(fo(r)&&!i)return;const o=r.shapeFlag&4?Gl(r.component):r.el,s=i?null:o,{i:a,r:l}=n,c=e&&e.r,d=a.refs===At?a.refs={}:a.refs,u=a.setupState,f=ut(u),h=u===At?()=>!1:p=>pt(f,p);if(c!=null&&c!==l&&($t(c)?(d[c]=null,h(c)&&(u[c]=null)):Jt(c)&&(c.value=null)),nt(l))Vs(l,a,12,[s,d]);else{const p=$t(l),m=Jt(l);if(p||m){const g=()=>{if(n.f){const y=p?h(l)?u[l]:d[l]:l.value;i?et(y)&&su(y,o):et(y)?y.includes(o)||y.push(o):p?(d[l]=[o],h(l)&&(u[l]=d[l])):(l.value=[o],n.k&&(d[n.k]=l.value))}else p?(d[l]=s,h(l)&&(u[l]=s)):m&&(l.value=s,n.k&&(d[n.k]=s))};s?(g.id=-1,vn(g,t)):g()}}}Nl().requestIdleCallback;Nl().cancelIdleCallback;const fo=n=>!!n.type.__asyncLoader,Hl=n=>n.type.__isKeepAlive;function a0(n,e){c0(n,"a",e)}function l0(n,e){c0(n,"da",e)}function c0(n,e,t=dn){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Wl(e,r,t),t){let i=t.parent;for(;i&&i.parent;)Hl(i.parent.vnode)&&Ex(r,e,t,i),i=i.parent}}function Ex(n,e,t,r){const i=Wl(e,n,r,!0);u0(()=>{su(r[e],i)},t)}function Wl(n,e,t=dn,r=!1){if(t){const i=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...s)=>{Xr();const a=Li(t),l=Vn(e,t,n,s);return a(),Zr(),l});return r?i.unshift(o):i.push(o),o}}const Lr=n=>(e,t=dn)=>{(!Ns||n==="sp")&&Wl(n,(...r)=>e(...r),t)},qs=Lr("bm"),On=Lr("m"),wx=Lr("bu"),d0=Lr("u"),kn=Lr("bum"),u0=Lr("um"),Cx=Lr("sp"),Sx=Lr("rtg"),Tx=Lr("rtc");function kx(n,e=dn){Wl("ec",n,e)}const Ix=Symbol.for("v-ndc");function f0(n,e,t={},r,i){if(nn.ce||nn.parent&&fo(nn.parent)&&nn.parent.ce)return e!=="default"&&(t.name=e),cl(),vd(_t,null,[kt("slot",t,r&&r())],64);let o=n[e];o&&o._c&&(o._d=!1),cl();const s=o&&h0(o(t)),a=t.key||s&&s.key,l=vd(_t,{key:(a&&!Pi(a)?a:`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&n._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function h0(n){return n.some(e=>xo(e)?!(e.type===cn||e.type===_t&&!h0(e.children)):!0)?n:null}const pd=n=>n?_0(n)?Gl(n):pd(n.parent):null,Ss=zt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>pd(n.parent),$root:n=>pd(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xu(n),$forceUpdate:n=>n.f||(n.f=()=>{bu(n.update)}),$nextTick:n=>n.n||(n.n=Ao.bind(n.proxy)),$watch:n=>Xx.bind(n)}),vc=(n,e)=>n!==At&&!n.__isScriptSetup&&pt(n,e),Lx={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=s[e];if(h!==void 0)switch(h){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return o[e]}else{if(vc(r,e))return s[e]=1,r[e];if(i!==At&&pt(i,e))return s[e]=2,i[e];if((c=n.propsOptions[0])&&pt(c,e))return s[e]=3,o[e];if(t!==At&&pt(t,e))return s[e]=4,t[e];md&&(s[e]=0)}}const d=Ss[e];let u,f;if(d)return e==="$attrs"&&sn(n.attrs,"get",""),d(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==At&&pt(t,e))return s[e]=4,t[e];if(f=l.config.globalProperties,pt(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:o}=n;return vc(i,e)?(i[e]=t,!0):r!==At&&pt(r,e)?(r[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!t[s]||n!==At&&pt(n,s)||vc(e,s)||(a=o[0])&&pt(a,s)||pt(r,s)||pt(Ss,s)||pt(i.config.globalProperties,s)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function $f(n){return et(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function Rx(n){const e=Oi();let t=n();return Ad(),au(t)&&(t=t.catch(r=>{throw Li(e),r})),[t,()=>Li(e)]}let md=!0;function _x(n){const e=xu(n),t=n.proxy,r=n.ctx;md=!1,e.beforeCreate&&Uf(e.beforeCreate,n,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:h,updated:p,activated:m,deactivated:g,beforeDestroy:y,beforeUnmount:E,destroyed:S,unmounted:C,render:k,renderTracked:M,renderTriggered:T,errorCaptured:z,serverPrefetch:F,expose:O,inheritAttrs:V,components:_,directives:H,filters:I}=e;if(c&&Dx(c,r,null),s)for(const Q in s){const ue=s[Q];nt(ue)&&(r[Q]=ue.bind(t))}if(i){const Q=i.call(t,t);Dt(Q)&&(n.data=zl(Q))}if(md=!0,o)for(const Q in o){const ue=o[Q],J=nt(ue)?ue.bind(t,t):nt(ue.get)?ue.get.bind(t,t):jn,ae=!nt(ue)&&nt(ue.set)?ue.set.bind(t):jn,X=Te({get:J,set:ae});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>X.value,set:q=>X.value=q})}if(a)for(const Q in a)p0(a[Q],r,t,Q);if(l){const Q=nt(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(ue=>{Mt(ue,Q[ue])})}d&&Uf(d,n,"c");function ie(Q,ue){et(ue)?ue.forEach(J=>Q(J.bind(t))):ue&&Q(ue.bind(t))}if(ie(qs,u),ie(On,f),ie(wx,h),ie(d0,p),ie(a0,m),ie(l0,g),ie(kx,z),ie(Tx,M),ie(Sx,T),ie(kn,E),ie(u0,C),ie(Cx,F),et(O))if(O.length){const Q=n.exposed||(n.exposed={});O.forEach(ue=>{Object.defineProperty(Q,ue,{get:()=>t[ue],set:J=>t[ue]=J})})}else n.exposed||(n.exposed={});k&&n.render===jn&&(n.render=k),V!=null&&(n.inheritAttrs=V),_&&(n.components=_),H&&(n.directives=H),F&&s0(n)}function Dx(n,e,t=jn){et(n)&&(n=gd(n));for(const r in n){const i=n[r];let o;Dt(i)?"default"in i?o=rt(i.from||r,i.default,!0):o=rt(i.from||r):o=rt(i),Jt(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[r]=o}}function Uf(n,e,t){Vn(et(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function p0(n,e,t,r){let i=r.includes(".")?T0(t,r):()=>t[r];if($t(n)){const o=e[n];nt(o)&&Qt(i,o)}else if(nt(n))Qt(i,n.bind(t));else if(Dt(n))if(et(n))n.forEach(o=>p0(o,e,t,r));else{const o=nt(n.handler)?n.handler.bind(t):e[n.handler];nt(o)&&Qt(i,o,n)}}function xu(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=n.appContext,a=o.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>ll(l,c,s,!0)),ll(l,e,s)),Dt(e)&&o.set(e,l),l}function ll(n,e,t,r=!1){const{mixins:i,extends:o}=e;o&&ll(n,o,t,!0),i&&i.forEach(s=>ll(n,s,t,!0));for(const s in e)if(!(r&&s==="expose")){const a=Px[s]||t&&t[s];n[s]=a?a(n[s],e[s]):e[s]}return n}const Px={data:Hf,props:Wf,emits:Wf,methods:ms,computed:ms,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:ms,directives:ms,watch:Ox,provide:Hf,inject:Bx};function Hf(n,e){return e?n?function(){return zt(nt(n)?n.call(this,this):n,nt(e)?e.call(this,this):e)}:e:n}function Bx(n,e){return ms(gd(n),gd(e))}function gd(n){if(et(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function un(n,e){return n?[...new Set([].concat(n,e))]:e}function ms(n,e){return n?zt(Object.create(null),n,e):e}function Wf(n,e){return n?et(n)&&et(e)?[...new Set([...n,...e])]:zt(Object.create(null),$f(n),$f(e??{})):e}function Ox(n,e){if(!n)return e;if(!e)return n;const t=zt(Object.create(null),n);for(const r in e)t[r]=un(n[r],e[r]);return t}function m0(){return{app:null,config:{isNativeTag:vA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fx=0;function Mx(n,e){return function(r,i=null){nt(r)||(r=zt({},r)),i!=null&&!Dt(i)&&(i=null);const o=m0(),s=new WeakSet,a=[];let l=!1;const c=o.app={_uid:Fx++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:g1,get config(){return o.config},set config(d){},use(d,...u){return s.has(d)||(d&&nt(d.install)?(s.add(d),d.install(c,...u)):nt(d)&&(s.add(d),d(c,...u))),c},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),c},component(d,u){return u?(o.components[d]=u,c):o.components[d]},directive(d,u){return u?(o.directives[d]=u,c):o.directives[d]},mount(d,u,f){if(!l){const h=c._ceVNode||kt(r,i);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,d):n(h,d,f),l=!0,c._container=d,d.__vue_app__=c,Gl(h.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Vn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(d,u){return o.provides[d]=u,c},runWithContext(d){const u=ho;ho=c;try{return d()}finally{ho=u}}};return c}}let ho=null;function Mt(n,e){if(dn){let t=dn.provides;const r=dn.parent&&dn.parent.provides;r===t&&(t=dn.provides=Object.create(r)),t[n]=e}}function rt(n,e,t=!1){const r=dn||nn;if(r||ho){const i=ho?ho._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&nt(e)?e.call(r&&r.proxy):e}}const g0={},y0=()=>Object.create(g0),v0=n=>Object.getPrototypeOf(n)===g0;function Nx(n,e,t,r=!1){const i={},o=y0();n.propsDefaults=Object.create(null),b0(n,e,i,o);for(const s in n.propsOptions[0])s in i||(i[s]=void 0);t?n.props=r?i:tx(i):n.type.props?n.props=i:n.props=o,n.attrs=o}function zx(n,e,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=n,a=ut(i),[l]=n.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(jl(n.emitsOptions,f))continue;const h=e[f];if(l)if(pt(o,f))h!==o[f]&&(o[f]=h,c=!0);else{const p=Kr(f);i[p]=yd(l,a,p,h,n,!1)}else h!==o[f]&&(o[f]=h,c=!0)}}}else{b0(n,e,i,o)&&(c=!0);let d;for(const u in a)(!e||!pt(e,u)&&((d=Bi(u))===u||!pt(e,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(i[u]=yd(l,a,u,void 0,n,!0)):delete i[u]);if(o!==a)for(const u in o)(!e||!pt(e,u))&&(delete o[u],c=!0)}c&&Cr(n.attrs,"set","")}function b0(n,e,t,r){const[i,o]=n.propsOptions;let s=!1,a;if(e)for(let l in e){if(As(l))continue;const c=e[l];let d;i&&pt(i,d=Kr(l))?!o||!o.includes(d)?t[d]=c:(a||(a={}))[d]=c:jl(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=ut(t),c=a||At;for(let d=0;d<o.length;d++){const u=o[d];t[u]=yd(i,l,u,c[u],n,!pt(c,u))}}return s}function yd(n,e,t,r,i,o){const s=n[t];if(s!=null){const a=pt(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&nt(l)){const{propsDefaults:c}=i;if(t in c)r=c[t];else{const d=Li(i);r=c[t]=l.call(null,e),d()}}else r=l;i.ce&&i.ce._setProp(t,r)}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===Bi(t))&&(r=!0))}return r}const $x=new WeakMap;function A0(n,e,t=!1){const r=t?$x:e.propsCache,i=r.get(n);if(i)return i;const o=n.props,s={},a=[];let l=!1;if(!nt(n)){const d=u=>{l=!0;const[f,h]=A0(u,e,!0);zt(s,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!o&&!l)return Dt(n)&&r.set(n,co),co;if(et(o))for(let d=0;d<o.length;d++){const u=Kr(o[d]);jf(u)&&(s[u]=At)}else if(o)for(const d in o){const u=Kr(d);if(jf(u)){const f=o[d],h=s[u]=et(f)||nt(f)?{type:f}:zt({},f),p=h.type;let m=!1,g=!0;if(et(p))for(let y=0;y<p.length;++y){const E=p[y],S=nt(E)&&E.name;if(S==="Boolean"){m=!0;break}else S==="String"&&(g=!1)}else m=nt(p)&&p.name==="Boolean";h[0]=m,h[1]=g,(m||pt(h,"default"))&&a.push(u)}}const c=[s,a];return Dt(n)&&r.set(n,c),c}function jf(n){return n[0]!=="$"&&!As(n)}const x0=n=>n[0]==="_"||n==="$stable",Eu=n=>et(n)?n.map(rr):[rr(n)],Ux=(n,e,t)=>{if(e._n)return e;const r=zn((...i)=>Eu(e(...i)),t);return r._c=!1,r},E0=(n,e,t)=>{const r=n._ctx;for(const i in n){if(x0(i))continue;const o=n[i];if(nt(o))e[i]=Ux(i,o,r);else if(o!=null){const s=Eu(o);e[i]=()=>s}}},w0=(n,e)=>{const t=Eu(e);n.slots.default=()=>t},C0=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},Hx=(n,e,t)=>{const r=n.slots=y0();if(n.vnode.shapeFlag&32){const i=e._;i?(C0(r,e,t),t&&Im(r,"_",i,!0)):E0(e,r)}else e&&w0(n,e)},Wx=(n,e,t)=>{const{vnode:r,slots:i}=n;let o=!0,s=At;if(r.shapeFlag&32){const a=e._;a?t&&a===1?o=!1:C0(i,e,t):(o=!e.$stable,E0(e,i)),s=e}else e&&(w0(n,e),s={default:1});if(o)for(const a in i)!x0(a)&&s[a]==null&&delete i[a]},vn=r1;function jx(n){return Gx(n)}function Gx(n,e){const t=Nl();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:h=jn,insertStaticContent:p}=n,m=(Z,x,Y,ee=null,N=null,B=null,G=void 0,te=null,ne=!!x.dynamicChildren)=>{if(Z===x)return;Z&&!yi(Z,x)&&(ee=Fe(Z),q(Z,N,B,!0),Z=null),x.patchFlag===-2&&(ne=!1,x.dynamicChildren=null);const{type:K,ref:me,shapeFlag:pe}=x;switch(K){case Ys:g(Z,x,Y,ee);break;case cn:y(Z,x,Y,ee);break;case xc:Z==null&&E(x,Y,ee,G);break;case _t:_(Z,x,Y,ee,N,B,G,te,ne);break;default:pe&1?k(Z,x,Y,ee,N,B,G,te,ne):pe&6?H(Z,x,Y,ee,N,B,G,te,ne):(pe&64||pe&128)&&K.process(Z,x,Y,ee,N,B,G,te,ne,ot)}me!=null&&N&&hd(me,Z&&Z.ref,B,x||Z,!x)},g=(Z,x,Y,ee)=>{if(Z==null)r(x.el=a(x.children),Y,ee);else{const N=x.el=Z.el;x.children!==Z.children&&c(N,x.children)}},y=(Z,x,Y,ee)=>{Z==null?r(x.el=l(x.children||""),Y,ee):x.el=Z.el},E=(Z,x,Y,ee)=>{[Z.el,Z.anchor]=p(Z.children,x,Y,ee,Z.el,Z.anchor)},S=({el:Z,anchor:x},Y,ee)=>{let N;for(;Z&&Z!==x;)N=f(Z),r(Z,Y,ee),Z=N;r(x,Y,ee)},C=({el:Z,anchor:x})=>{let Y;for(;Z&&Z!==x;)Y=f(Z),i(Z),Z=Y;i(x)},k=(Z,x,Y,ee,N,B,G,te,ne)=>{x.type==="svg"?G="svg":x.type==="math"&&(G="mathml"),Z==null?M(x,Y,ee,N,B,G,te,ne):F(Z,x,N,B,G,te,ne)},M=(Z,x,Y,ee,N,B,G,te)=>{let ne,K;const{props:me,shapeFlag:pe,transition:fe,dirs:ke}=Z;if(ne=Z.el=s(Z.type,B,me&&me.is,me),pe&8?d(ne,Z.children):pe&16&&z(Z.children,ne,null,ee,N,bc(Z,B),G,te),ke&&li(Z,null,ee,"created"),T(ne,Z,Z.scopeId,G,ee),me){for(const Me in me)Me!=="value"&&!As(Me)&&o(ne,Me,null,me[Me],B,ee);"value"in me&&o(ne,"value",null,me.value,B),(K=me.onVnodeBeforeMount)&&Zn(K,ee,Z)}ke&&li(Z,null,ee,"beforeMount");const Ne=Kx(N,fe);Ne&&fe.beforeEnter(ne),r(ne,x,Y),((K=me&&me.onVnodeMounted)||Ne||ke)&&vn(()=>{K&&Zn(K,ee,Z),Ne&&fe.enter(ne),ke&&li(Z,null,ee,"mounted")},N)},T=(Z,x,Y,ee,N)=>{if(Y&&h(Z,Y),ee)for(let B=0;B<ee.length;B++)h(Z,ee[B]);if(N){let B=N.subTree;if(x===B||I0(B.type)&&(B.ssContent===x||B.ssFallback===x)){const G=N.vnode;T(Z,G,G.scopeId,G.slotScopeIds,N.parent)}}},z=(Z,x,Y,ee,N,B,G,te,ne=0)=>{for(let K=ne;K<Z.length;K++){const me=Z[K]=te?Hr(Z[K]):rr(Z[K]);m(null,me,x,Y,ee,N,B,G,te)}},F=(Z,x,Y,ee,N,B,G)=>{const te=x.el=Z.el;let{patchFlag:ne,dynamicChildren:K,dirs:me}=x;ne|=Z.patchFlag&16;const pe=Z.props||At,fe=x.props||At;let ke;if(Y&&ci(Y,!1),(ke=fe.onVnodeBeforeUpdate)&&Zn(ke,Y,x,Z),me&&li(x,Z,Y,"beforeUpdate"),Y&&ci(Y,!0),(pe.innerHTML&&fe.innerHTML==null||pe.textContent&&fe.textContent==null)&&d(te,""),K?O(Z.dynamicChildren,K,te,Y,ee,bc(x,N),B):G||ue(Z,x,te,null,Y,ee,bc(x,N),B,!1),ne>0){if(ne&16)V(te,pe,fe,Y,N);else if(ne&2&&pe.class!==fe.class&&o(te,"class",null,fe.class,N),ne&4&&o(te,"style",pe.style,fe.style,N),ne&8){const Ne=x.dynamicProps;for(let Me=0;Me<Ne.length;Me++){const Xe=Ne[Me],St=pe[Xe],st=fe[Xe];(st!==St||Xe==="value")&&o(te,Xe,St,st,N,Y)}}ne&1&&Z.children!==x.children&&d(te,x.children)}else!G&&K==null&&V(te,pe,fe,Y,N);((ke=fe.onVnodeUpdated)||me)&&vn(()=>{ke&&Zn(ke,Y,x,Z),me&&li(x,Z,Y,"updated")},ee)},O=(Z,x,Y,ee,N,B,G)=>{for(let te=0;te<x.length;te++){const ne=Z[te],K=x[te],me=ne.el&&(ne.type===_t||!yi(ne,K)||ne.shapeFlag&70)?u(ne.el):Y;m(ne,K,me,null,ee,N,B,G,!0)}},V=(Z,x,Y,ee,N)=>{if(x!==Y){if(x!==At)for(const B in x)!As(B)&&!(B in Y)&&o(Z,B,x[B],null,N,ee);for(const B in Y){if(As(B))continue;const G=Y[B],te=x[B];G!==te&&B!=="value"&&o(Z,B,te,G,N,ee)}"value"in Y&&o(Z,"value",x.value,Y.value,N)}},_=(Z,x,Y,ee,N,B,G,te,ne)=>{const K=x.el=Z?Z.el:a(""),me=x.anchor=Z?Z.anchor:a("");let{patchFlag:pe,dynamicChildren:fe,slotScopeIds:ke}=x;ke&&(te=te?te.concat(ke):ke),Z==null?(r(K,Y,ee),r(me,Y,ee),z(x.children||[],Y,me,N,B,G,te,ne)):pe>0&&pe&64&&fe&&Z.dynamicChildren?(O(Z.dynamicChildren,fe,Y,N,B,G,te),(x.key!=null||N&&x===N.subTree)&&wu(Z,x,!0)):ue(Z,x,Y,me,N,B,G,te,ne)},H=(Z,x,Y,ee,N,B,G,te,ne)=>{x.slotScopeIds=te,Z==null?x.shapeFlag&512?N.ctx.activate(x,Y,ee,G,ne):I(x,Y,ee,N,B,G,ne):W(Z,x,ne)},I=(Z,x,Y,ee,N,B,G)=>{const te=Z.component=d1(Z,ee,N);if(Hl(Z)&&(te.ctx.renderer=ot),u1(te,!1,G),te.asyncDep){if(N&&N.registerDep(te,ie,G),!Z.el){const ne=te.subTree=kt(cn);y(null,ne,x,Y)}}else ie(te,Z,x,Y,N,B,G)},W=(Z,x,Y)=>{const ee=x.component=Z.component;if(t1(Z,x,Y))if(ee.asyncDep&&!ee.asyncResolved){Q(ee,x,Y);return}else ee.next=x,ee.update();else x.el=Z.el,ee.vnode=x},ie=(Z,x,Y,ee,N,B,G)=>{const te=()=>{if(Z.isMounted){let{next:pe,bu:fe,u:ke,parent:Ne,vnode:Me}=Z;{const Qe=S0(Z);if(Qe){pe&&(pe.el=Me.el,Q(Z,pe,G)),Qe.asyncDep.then(()=>{Z.isUnmounted||te()});return}}let Xe=pe,St;ci(Z,!1),pe?(pe.el=Me.el,Q(Z,pe,G)):pe=Me,fe&&hc(fe),(St=pe.props&&pe.props.onVnodeBeforeUpdate)&&Zn(St,Ne,pe,Me),ci(Z,!0);const st=Ac(Z),ve=Z.subTree;Z.subTree=st,m(ve,st,u(ve.el),Fe(ve),Z,N,B),pe.el=st.el,Xe===null&&n1(Z,st.el),ke&&vn(ke,N),(St=pe.props&&pe.props.onVnodeUpdated)&&vn(()=>Zn(St,Ne,pe,Me),N)}else{let pe;const{el:fe,props:ke}=x,{bm:Ne,m:Me,parent:Xe,root:St,type:st}=Z,ve=fo(x);if(ci(Z,!1),Ne&&hc(Ne),!ve&&(pe=ke&&ke.onVnodeBeforeMount)&&Zn(pe,Xe,x),ci(Z,!0),fe&&yt){const Qe=()=>{Z.subTree=Ac(Z),yt(fe,Z.subTree,Z,N,null)};ve&&st.__asyncHydrate?st.__asyncHydrate(fe,Z,Qe):Qe()}else{St.ce&&St.ce._injectChildStyle(st);const Qe=Z.subTree=Ac(Z);m(null,Qe,Y,ee,Z,N,B),x.el=Qe.el}if(Me&&vn(Me,N),!ve&&(pe=ke&&ke.onVnodeMounted)){const Qe=x;vn(()=>Zn(pe,Xe,Qe),N)}(x.shapeFlag&256||Xe&&fo(Xe.vnode)&&Xe.vnode.shapeFlag&256)&&Z.a&&vn(Z.a,N),Z.isMounted=!0,x=Y=ee=null}};Z.scope.on();const ne=Z.effect=new Rm(te);Z.scope.off();const K=Z.update=ne.run.bind(ne),me=Z.job=ne.runIfDirty.bind(ne);me.i=Z,me.id=Z.uid,ne.scheduler=()=>bu(me),ci(Z,!0),K()},Q=(Z,x,Y)=>{x.component=Z;const ee=Z.vnode.props;Z.vnode=x,Z.next=null,zx(Z,x.props,ee,Y),Wx(Z,x.children,Y),Xr(),Ff(Z),Zr()},ue=(Z,x,Y,ee,N,B,G,te,ne=!1)=>{const K=Z&&Z.children,me=Z?Z.shapeFlag:0,pe=x.children,{patchFlag:fe,shapeFlag:ke}=x;if(fe>0){if(fe&128){ae(K,pe,Y,ee,N,B,G,te,ne);return}else if(fe&256){J(K,pe,Y,ee,N,B,G,te,ne);return}}ke&8?(me&16&&Le(K,N,B),pe!==K&&d(Y,pe)):me&16?ke&16?ae(K,pe,Y,ee,N,B,G,te,ne):Le(K,N,B,!0):(me&8&&d(Y,""),ke&16&&z(pe,Y,ee,N,B,G,te,ne))},J=(Z,x,Y,ee,N,B,G,te,ne)=>{Z=Z||co,x=x||co;const K=Z.length,me=x.length,pe=Math.min(K,me);let fe;for(fe=0;fe<pe;fe++){const ke=x[fe]=ne?Hr(x[fe]):rr(x[fe]);m(Z[fe],ke,Y,null,N,B,G,te,ne)}K>me?Le(Z,N,B,!0,!1,pe):z(x,Y,ee,N,B,G,te,ne,pe)},ae=(Z,x,Y,ee,N,B,G,te,ne)=>{let K=0;const me=x.length;let pe=Z.length-1,fe=me-1;for(;K<=pe&&K<=fe;){const ke=Z[K],Ne=x[K]=ne?Hr(x[K]):rr(x[K]);if(yi(ke,Ne))m(ke,Ne,Y,null,N,B,G,te,ne);else break;K++}for(;K<=pe&&K<=fe;){const ke=Z[pe],Ne=x[fe]=ne?Hr(x[fe]):rr(x[fe]);if(yi(ke,Ne))m(ke,Ne,Y,null,N,B,G,te,ne);else break;pe--,fe--}if(K>pe){if(K<=fe){const ke=fe+1,Ne=ke<me?x[ke].el:ee;for(;K<=fe;)m(null,x[K]=ne?Hr(x[K]):rr(x[K]),Y,Ne,N,B,G,te,ne),K++}}else if(K>fe)for(;K<=pe;)q(Z[K],N,B,!0),K++;else{const ke=K,Ne=K,Me=new Map;for(K=Ne;K<=fe;K++){const ye=x[K]=ne?Hr(x[K]):rr(x[K]);ye.key!=null&&Me.set(ye.key,K)}let Xe,St=0;const st=fe-Ne+1;let ve=!1,Qe=0;const Pt=new Array(st);for(K=0;K<st;K++)Pt[K]=0;for(K=ke;K<=pe;K++){const ye=Z[K];if(St>=st){q(ye,N,B,!0);continue}let Pe;if(ye.key!=null)Pe=Me.get(ye.key);else for(Xe=Ne;Xe<=fe;Xe++)if(Pt[Xe-Ne]===0&&yi(ye,x[Xe])){Pe=Xe;break}Pe===void 0?q(ye,N,B,!0):(Pt[Pe-Ne]=K+1,Pe>=Qe?Qe=Pe:ve=!0,m(ye,x[Pe],Y,null,N,B,G,te,ne),St++)}const In=ve?Vx(Pt):co;for(Xe=In.length-1,K=st-1;K>=0;K--){const ye=Ne+K,Pe=x[ye],je=ye+1<me?x[ye+1].el:ee;Pt[K]===0?m(null,Pe,Y,je,N,B,G,te,ne):ve&&(Xe<0||K!==In[Xe]?X(Pe,Y,je,2):Xe--)}}},X=(Z,x,Y,ee,N=null)=>{const{el:B,type:G,transition:te,children:ne,shapeFlag:K}=Z;if(K&6){X(Z.component.subTree,x,Y,ee);return}if(K&128){Z.suspense.move(x,Y,ee);return}if(K&64){G.move(Z,x,Y,ot);return}if(G===_t){r(B,x,Y);for(let pe=0;pe<ne.length;pe++)X(ne[pe],x,Y,ee);r(Z.anchor,x,Y);return}if(G===xc){S(Z,x,Y);return}if(ee!==2&&K&1&&te)if(ee===0)te.beforeEnter(B),r(B,x,Y),vn(()=>te.enter(B),N);else{const{leave:pe,delayLeave:fe,afterLeave:ke}=te,Ne=()=>r(B,x,Y),Me=()=>{pe(B,()=>{Ne(),ke&&ke()})};fe?fe(B,Ne,Me):Me()}else r(B,x,Y)},q=(Z,x,Y,ee=!1,N=!1)=>{const{type:B,props:G,ref:te,children:ne,dynamicChildren:K,shapeFlag:me,patchFlag:pe,dirs:fe,cacheIndex:ke}=Z;if(pe===-2&&(N=!1),te!=null&&hd(te,null,Y,Z,!0),ke!=null&&(x.renderCache[ke]=void 0),me&256){x.ctx.deactivate(Z);return}const Ne=me&1&&fe,Me=!fo(Z);let Xe;if(Me&&(Xe=G&&G.onVnodeBeforeUnmount)&&Zn(Xe,x,Z),me&6)Ae(Z.component,Y,ee);else{if(me&128){Z.suspense.unmount(Y,ee);return}Ne&&li(Z,null,x,"beforeUnmount"),me&64?Z.type.remove(Z,x,Y,ot,ee):K&&!K.hasOnce&&(B!==_t||pe>0&&pe&64)?Le(K,x,Y,!1,!0):(B===_t&&pe&384||!N&&me&16)&&Le(ne,x,Y),ee&&re(Z)}(Me&&(Xe=G&&G.onVnodeUnmounted)||Ne)&&vn(()=>{Xe&&Zn(Xe,x,Z),Ne&&li(Z,null,x,"unmounted")},Y)},re=Z=>{const{type:x,el:Y,anchor:ee,transition:N}=Z;if(x===_t){ge(Y,ee);return}if(x===xc){C(Z);return}const B=()=>{i(Y),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(Z.shapeFlag&1&&N&&!N.persisted){const{leave:G,delayLeave:te}=N,ne=()=>G(Y,B);te?te(Z.el,B,ne):ne()}else B()},ge=(Z,x)=>{let Y;for(;Z!==x;)Y=f(Z),i(Z),Z=Y;i(x)},Ae=(Z,x,Y)=>{const{bum:ee,scope:N,job:B,subTree:G,um:te,m:ne,a:K}=Z;Gf(ne),Gf(K),ee&&hc(ee),N.stop(),B&&(B.flags|=8,q(G,Z,x,Y)),te&&vn(te,x),vn(()=>{Z.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&Z.asyncDep&&!Z.asyncResolved&&Z.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},Le=(Z,x,Y,ee=!1,N=!1,B=0)=>{for(let G=B;G<Z.length;G++)q(Z[G],x,Y,ee,N)},Fe=Z=>{if(Z.shapeFlag&6)return Fe(Z.component.subTree);if(Z.shapeFlag&128)return Z.suspense.next();const x=f(Z.anchor||Z.el),Y=x&&x[Qm];return Y?f(Y):x};let Ue=!1;const de=(Z,x,Y)=>{Z==null?x._vnode&&q(x._vnode,null,null,!0):m(x._vnode||null,Z,x,null,null,null,Y),x._vnode=Z,Ue||(Ue=!0,Ff(),Ym(),Ue=!1)},ot={p:m,um:q,m:X,r:re,mt:I,mc:z,pc:ue,pbc:O,n:Fe,o:n};let at,yt;return e&&([at,yt]=e(ot)),{render:de,hydrate:at,createApp:Mx(de,at)}}function bc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ci({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Kx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function wu(n,e,t=!1){const r=n.children,i=e.children;if(et(r)&&et(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Hr(i[o]),a.el=s.el),!t&&a.patchFlag!==-2&&wu(s,a)),a.type===Ys&&(a.el=s.el)}}function Vx(n){const e=n.slice(),t=[0];let r,i,o,s,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)a=o+s>>1,n[t[a]]<c?o=a+1:s=a;c<n[t[o]]&&(o>0&&(e[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=e[s];return t}function S0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:S0(e)}function Gf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const qx=Symbol.for("v-scx"),Yx=()=>rt(qx);function kr(n,e){return Cu(n,null,e)}function Qt(n,e,t){return Cu(n,e,t)}function Cu(n,e,t=At){const{immediate:r,deep:i,flush:o,once:s}=t,a=zt({},t),l=e&&r||!e&&o!=="post";let c;if(Ns){if(o==="sync"){const h=Yx();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=jn,h.resume=jn,h.pause=jn,h}}const d=dn;a.call=(h,p,m)=>Vn(h,d,p,m);let u=!1;o==="post"?a.scheduler=h=>{vn(h,d&&d.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(h,p)=>{p?h():bu(h)}),a.augmentJob=h=>{e&&(h.flags|=4),u&&(h.flags|=2,d&&(h.id=d.uid,h.i=d))};const f=fx(n,e,a);return Ns&&(c?c.push(f):l&&f()),f}function Xx(n,e,t){const r=this.proxy,i=$t(n)?n.includes(".")?T0(r,n):()=>r[n]:n.bind(r,r);let o;nt(e)?o=e:(o=e.handler,t=e);const s=Li(this),a=Cu(i,o.bind(r),t);return s(),a}function T0(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const Zx=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Kr(e)}Modifiers`]||n[`${Bi(e)}Modifiers`];function Qx(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||At;let i=t;const o=e.startsWith("update:"),s=o&&Zx(r,e.slice(7));s&&(s.trim&&(i=t.map(d=>$t(d)?d.trim():d)),s.number&&(i=t.map(TA)));let a,l=r[a=fc(e)]||r[a=fc(Kr(e))];!l&&o&&(l=r[a=fc(Bi(e))]),l&&Vn(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Vn(c,n,6,i)}}function k0(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const o=n.emits;let s={},a=!1;if(!nt(n)){const l=c=>{const d=k0(c,e,!0);d&&(a=!0,zt(s,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!a?(Dt(n)&&r.set(n,null),null):(et(o)?o.forEach(l=>s[l]=null):zt(s,o),Dt(n)&&r.set(n,s),s)}function jl(n,e){return!n||!Ol(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,Bi(e))||pt(n,e))}function Ac(n){const{type:e,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:a,emit:l,render:c,renderCache:d,props:u,data:f,setupState:h,ctx:p,inheritAttrs:m}=n,g=al(n);let y,E;try{if(t.shapeFlag&4){const C=i||r,k=C;y=rr(c.call(k,C,d,u,h,f,p)),E=a}else{const C=e;y=rr(C.length>1?C(u,{attrs:a,slots:s,emit:l}):C(u,null)),E=e.props?a:Jx(a)}}catch(C){Ts.length=0,$l(C,n,1),y=kt(cn)}let S=y;if(E&&m!==!1){const C=Object.keys(E),{shapeFlag:k}=S;C.length&&k&7&&(o&&C.some(ou)&&(E=e1(E,o)),S=Ir(S,E,!1,!0))}return t.dirs&&(S=Ir(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Ii(S,t.transition),y=S,al(g),y}const Jx=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ol(t))&&((e||(e={}))[t]=n[t]);return e},e1=(n,e)=>{const t={};for(const r in n)(!ou(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function t1(n,e,t){const{props:r,children:i,component:o}=n,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Kf(r,s,c):!!s;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(s[f]!==r[f]&&!jl(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?Kf(r,s,c):!0:!!s;return!1}function Kf(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==n[o]&&!jl(t,o))return!0}return!1}function n1({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const I0=n=>n.__isSuspense;function r1(n,e){e&&e.pendingBranch?et(n)?e.effects.push(...n):e.effects.push(n):mx(n)}const _t=Symbol.for("v-fgt"),Ys=Symbol.for("v-txt"),cn=Symbol.for("v-cmt"),xc=Symbol.for("v-stc"),Ts=[];let Cn=null;function cl(n=!1){Ts.push(Cn=n?null:[])}function i1(){Ts.pop(),Cn=Ts[Ts.length-1]||null}let Ms=1;function Vf(n){Ms+=n,n<0&&Cn&&(Cn.hasOnce=!0)}function L0(n){return n.dynamicChildren=Ms>0?Cn||co:null,i1(),Ms>0&&Cn&&Cn.push(n),n}function o1(n,e,t,r,i,o){return L0(Xs(n,e,t,r,i,o,!0))}function vd(n,e,t,r,i){return L0(kt(n,e,t,r,i,!0))}function xo(n){return n?n.__v_isVNode===!0:!1}function yi(n,e){return n.type===e.type&&n.key===e.key}const R0=({key:n})=>n??null,Ga=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?$t(n)||Jt(n)||nt(n)?{i:nn,r:n,k:e,f:!!t}:n:null);function Xs(n,e=null,t=null,r=0,i=null,o=n===_t?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&R0(e),ref:e&&Ga(e),scopeId:Zm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:nn};return a?(Su(l,t),o&128&&n.normalize(l)):t&&(l.shapeFlag|=$t(t)?8:16),Ms>0&&!s&&Cn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Cn.push(l),l}const kt=s1;function s1(n,e=null,t=null,r=0,i=null,o=!1){if((!n||n===Ix)&&(n=cn),xo(n)){const a=Ir(n,e,!0);return t&&Su(a,t),Ms>0&&!o&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(n)]=a:Cn.push(a)),a.patchFlag=-2,a}if(m1(n)&&(n=n.__vccOpts),e){e=a1(e);let{class:a,style:l}=e;a&&!$t(a)&&(e.class=du(a)),Dt(l)&&(vu(l)&&!et(l)&&(l=zt({},l)),e.style=cu(l))}const s=$t(n)?1:I0(n)?128:Jm(n)?64:Dt(n)?4:nt(n)?2:0;return Xs(n,e,t,r,i,s,o,!0)}function a1(n){return n?vu(n)||v0(n)?zt({},n):n:null}function Ir(n,e,t=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:a,transition:l}=n,c=e?Qr(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&R0(c),ref:e&&e.ref?t&&o?et(o)?o.concat(Ga(e)):[o,Ga(e)]:Ga(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_t?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ir(n.ssContent),ssFallback:n.ssFallback&&Ir(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Ii(d,l.clone(d)),d}function Tr(n=" ",e=0){return kt(Ys,null,n,e)}function rr(n){return n==null||typeof n=="boolean"?kt(cn):et(n)?kt(_t,null,n.slice()):xo(n)?Hr(n):kt(Ys,null,String(n))}function Hr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ir(n)}function Su(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(et(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Su(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!v0(e)?e._ctx=nn:i===3&&nn&&(nn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else nt(e)?(e={default:e,_ctx:nn},t=32):(e=String(e),r&64?(t=16,e=[Tr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Qr(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=du([e.class,r.class]));else if(i==="style")e.style=cu([e.style,r.style]);else if(Ol(i)){const o=e[i],s=r[i];s&&o!==s&&!(et(o)&&o.includes(s))&&(e[i]=o?[].concat(o,s):s)}else i!==""&&(e[i]=r[i])}return e}function Zn(n,e,t,r=null){Vn(n,e,7,[t,r])}const l1=m0();let c1=0;function d1(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||l1,o={uid:c1++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new BA(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:A0(r,i),emitsOptions:k0(r,i),emit:null,emitted:null,propsDefaults:At,inheritAttrs:r.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Qx.bind(null,o),n.ce&&n.ce(o),o}let dn=null;const Oi=()=>dn||nn;let dl,bd;{const n=Nl(),e=(t,r)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};dl=e("__VUE_INSTANCE_SETTERS__",t=>dn=t),bd=e("__VUE_SSR_SETTERS__",t=>Ns=t)}const Li=n=>{const e=dn;return dl(n),n.scope.on(),()=>{n.scope.off(),dl(e)}},Ad=()=>{dn&&dn.scope.off(),dl(null)};function _0(n){return n.vnode.shapeFlag&4}let Ns=!1;function u1(n,e=!1,t=!1){e&&bd(e);const{props:r,children:i}=n.vnode,o=_0(n);Nx(n,r,o,e),Hx(n,i,t);const s=o?f1(n,e):void 0;return e&&bd(!1),s}function f1(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Lx);const{setup:r}=t;if(r){Xr();const i=n.setupContext=r.length>1?p1(n):null,o=Li(n),s=Vs(r,n,0,[n.props,i]),a=au(s);if(Zr(),o(),(a||n.sp)&&!fo(n)&&s0(n),a){if(s.then(Ad,Ad),e)return s.then(l=>{qf(n,l,e)}).catch(l=>{$l(l,n,0)});n.asyncDep=s}else qf(n,s,e)}else D0(n,e)}function qf(n,e,t){nt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Dt(e)&&(n.setupState=Km(e)),D0(n,t)}let Yf;function D0(n,e,t){const r=n.type;if(!n.render){if(!e&&Yf&&!r.render){const i=r.template||xu(n).template;if(i){const{isCustomElement:o,compilerOptions:s}=n.appContext.config,{delimiters:a,compilerOptions:l}=r,c=zt(zt({isCustomElement:o,delimiters:a},s),l);r.render=Yf(i,c)}}n.render=r.render||jn}{const i=Li(n);Xr();try{_x(n)}finally{Zr(),i()}}}const h1={get(n,e){return sn(n,"get",""),n[e]}};function p1(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,h1),slots:n.slots,emit:n.emit,expose:e}}function Gl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Km(nx(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ss)return Ss[t](n)},has(e,t){return t in e||t in Ss}})):n.proxy}function m1(n){return nt(n)&&"__vccOpts"in n}const Te=(n,e)=>dx(n,e,Ns);function j(n,e,t){const r=arguments.length;return r===2?Dt(e)&&!et(e)?xo(e)?kt(n,null,[e]):kt(n,e):kt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&xo(t)&&(t=[t]),kt(n,e,t))}const g1="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xd;const Xf=typeof window<"u"&&window.trustedTypes;if(Xf)try{xd=Xf.createPolicy("vue",{createHTML:n=>n})}catch{}const P0=xd?n=>xd.createHTML(n):n=>n,y1="http://www.w3.org/2000/svg",v1="http://www.w3.org/1998/Math/MathML",xr=typeof document<"u"?document:null,Zf=xr&&xr.createElement("template"),b1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e==="svg"?xr.createElementNS(y1,n):e==="mathml"?xr.createElementNS(v1,n):t?xr.createElement(n,{is:t}):xr.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>xr.createTextNode(n),createComment:n=>xr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>xr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,o){const s=t?t.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{Zf.innerHTML=P0(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Zf.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Or="transition",ls="animation",Eo=Symbol("_vtc"),B0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},O0=zt({},n0,B0),A1=n=>(n.displayName="Transition",n.props=O0,n),wo=A1((n,{slots:e})=>j(xx,F0(n),e)),di=(n,e=[])=>{et(n)?n.forEach(t=>t(...e)):n&&n(...e)},Qf=n=>n?et(n)?n.some(e=>e.length>1):n.length>1:!1;function F0(n){const e={};for(const _ in n)_ in B0||(e[_]=n[_]);if(n.css===!1)return e;const{name:t="v",type:r,duration:i,enterFromClass:o=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:d=a,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,p=x1(i),m=p&&p[0],g=p&&p[1],{onBeforeEnter:y,onEnter:E,onEnterCancelled:S,onLeave:C,onLeaveCancelled:k,onBeforeAppear:M=y,onAppear:T=E,onAppearCancelled:z=S}=e,F=(_,H,I)=>{zr(_,H?d:a),zr(_,H?c:s),I&&I()},O=(_,H)=>{_._isLeaving=!1,zr(_,u),zr(_,h),zr(_,f),H&&H()},V=_=>(H,I)=>{const W=_?T:E,ie=()=>F(H,_,I);di(W,[H,ie]),Jf(()=>{zr(H,_?l:o),Ar(H,_?d:a),Qf(W)||eh(H,r,m,ie)})};return zt(e,{onBeforeEnter(_){di(y,[_]),Ar(_,o),Ar(_,s)},onBeforeAppear(_){di(M,[_]),Ar(_,l),Ar(_,c)},onEnter:V(!1),onAppear:V(!0),onLeave(_,H){_._isLeaving=!0;const I=()=>O(_,H);Ar(_,u),Ar(_,f),N0(),Jf(()=>{_._isLeaving&&(zr(_,u),Ar(_,h),Qf(C)||eh(_,r,g,I))}),di(C,[_,I])},onEnterCancelled(_){F(_,!1),di(S,[_])},onAppearCancelled(_){F(_,!0),di(z,[_])},onLeaveCancelled(_){O(_),di(k,[_])}})}function x1(n){if(n==null)return null;if(Dt(n))return[Ec(n.enter),Ec(n.leave)];{const e=Ec(n);return[e,e]}}function Ec(n){return kA(n)}function Ar(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Eo]||(n[Eo]=new Set)).add(e)}function zr(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Eo];t&&(t.delete(e),t.size||(n[Eo]=void 0))}function Jf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let E1=0;function eh(n,e,t,r){const i=n._endId=++E1,o=()=>{i===n._endId&&r()};if(t!=null)return setTimeout(o,t);const{type:s,timeout:a,propCount:l}=M0(n,e);if(!s)return r();const c=s+"end";let d=0;const u=()=>{n.removeEventListener(c,f),o()},f=h=>{h.target===n&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},a+1),n.addEventListener(c,f)}function M0(n,e){const t=window.getComputedStyle(n),r=p=>(t[p]||"").split(", "),i=r(`${Or}Delay`),o=r(`${Or}Duration`),s=th(i,o),a=r(`${ls}Delay`),l=r(`${ls}Duration`),c=th(a,l);let d=null,u=0,f=0;e===Or?s>0&&(d=Or,u=s,f=o.length):e===ls?c>0&&(d=ls,u=c,f=l.length):(u=Math.max(s,c),d=u>0?s>c?Or:ls:null,f=d?d===Or?o.length:l.length:0);const h=d===Or&&/\b(transform|all)(,|$)/.test(r(`${Or}Property`).toString());return{type:d,timeout:u,propCount:f,hasTransform:h}}function th(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>nh(t)+nh(n[r])))}function nh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function N0(){return document.body.offsetHeight}function w1(n,e,t){const r=n[Eo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ul=Symbol("_vod"),z0=Symbol("_vsh"),C1={beforeMount(n,{value:e},{transition:t}){n[ul]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):cs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),cs(n,!0),r.enter(n)):r.leave(n,()=>{cs(n,!1)}):cs(n,e))},beforeUnmount(n,{value:e}){cs(n,e)}};function cs(n,e){n.style.display=e?n[ul]:"none",n[z0]=!e}const S1=Symbol(""),T1=/(^|;)\s*display\s*:/;function k1(n,e,t){const r=n.style,i=$t(t);let o=!1;if(t&&!i){if(e)if($t(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&Ka(r,a,"")}else for(const s in e)t[s]==null&&Ka(r,s,"");for(const s in t)s==="display"&&(o=!0),Ka(r,s,t[s])}else if(i){if(e!==t){const s=r[S1];s&&(t+=";"+s),r.cssText=t,o=T1.test(t)}}else e&&n.removeAttribute("style");ul in n&&(n[ul]=o?r.display:"",n[z0]&&(r.display="none"))}const rh=/\s*!important$/;function Ka(n,e,t){if(et(t))t.forEach(r=>Ka(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=I1(n,e);rh.test(t)?n.setProperty(Bi(r),t.replace(rh,""),"important"):n[r]=t}}const ih=["Webkit","Moz","ms"],wc={};function I1(n,e){const t=wc[e];if(t)return t;let r=Kr(e);if(r!=="filter"&&r in n)return wc[e]=r;r=km(r);for(let i=0;i<ih.length;i++){const o=ih[i]+r;if(o in n)return wc[e]=o}return e}const oh="http://www.w3.org/1999/xlink";function sh(n,e,t,r,i,o=PA(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(oh,e.slice(6,e.length)):n.setAttributeNS(oh,e,t):t==null||o&&!Lm(t)?n.removeAttribute(e):n.setAttribute(e,o?"":Pi(t)?String(t):t)}function ah(n,e,t,r,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?P0(t):t);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Lm(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(i||e)}function L1(n,e,t,r){n.addEventListener(e,t,r)}function R1(n,e,t,r){n.removeEventListener(e,t,r)}const lh=Symbol("_vei");function _1(n,e,t,r,i=null){const o=n[lh]||(n[lh]={}),s=o[e];if(r&&s)s.value=r;else{const[a,l]=D1(e);if(r){const c=o[e]=O1(r,i);L1(n,a,c,l)}else s&&(R1(n,a,s,l),o[e]=void 0)}}const ch=/(?:Once|Passive|Capture)$/;function D1(n){let e;if(ch.test(n)){e={};let r;for(;r=n.match(ch);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bi(n.slice(2)),e]}let Cc=0;const P1=Promise.resolve(),B1=()=>Cc||(P1.then(()=>Cc=0),Cc=Date.now());function O1(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Vn(F1(r,t.value),e,5,[r])};return t.value=n,t.attached=B1(),t}function F1(n,e){if(et(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const dh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,M1=(n,e,t,r,i,o)=>{const s=i==="svg";e==="class"?w1(n,r,s):e==="style"?k1(n,t,r):Ol(e)?ou(e)||_1(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):N1(n,e,r,s))?(ah(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sh(n,e,r,s,o,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!$t(r))?ah(n,Kr(e),r,o,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),sh(n,e,r,s))};function N1(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&dh(e)&&nt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return dh(e)&&$t(t)?!1:e in n}const $0=new WeakMap,U0=new WeakMap,fl=Symbol("_moveCb"),uh=Symbol("_enterCb"),z1=n=>(delete n.props.mode,n),$1=z1({name:"TransitionGroup",props:zt({},O0,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Oi(),r=t0();let i,o;return d0(()=>{if(!i.length)return;const s=n.moveClass||`${n.name||"v"}-move`;if(!G1(i[0].el,t.vnode.el,s))return;i.forEach(H1),i.forEach(W1);const a=i.filter(j1);N0(),a.forEach(l=>{const c=l.el,d=c.style;Ar(c,s),d.transform=d.webkitTransform=d.transitionDuration="";const u=c[fl]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",u),c[fl]=null,zr(c,s))};c.addEventListener("transitionend",u)})}),()=>{const s=ut(n),a=F0(s);let l=s.tag||_t;if(i=[],o)for(let c=0;c<o.length;c++){const d=o[c];d.el&&d.el instanceof Element&&(i.push(d),Ii(d,Fs(d,a,r,t)),$0.set(d,d.el.getBoundingClientRect()))}o=e.default?Au(e.default()):[];for(let c=0;c<o.length;c++){const d=o[c];d.key!=null&&Ii(d,Fs(d,a,r,t))}return kt(l,null,o)}}}),U1=$1;function H1(n){const e=n.el;e[fl]&&e[fl](),e[uh]&&e[uh]()}function W1(n){U0.set(n,n.el.getBoundingClientRect())}function j1(n){const e=$0.get(n),t=U0.get(n),r=e.left-t.left,i=e.top-t.top;if(r||i){const o=n.el.style;return o.transform=o.webkitTransform=`translate(${r}px,${i}px)`,o.transitionDuration="0s",n}}function G1(n,e,t){const r=n.cloneNode(),i=n[Eo];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(r);const{hasTransform:s}=M0(r);return o.removeChild(r),s}const K1=zt({patchProp:M1},b1);let fh;function V1(){return fh||(fh=jx(K1))}const q1=(...n)=>{const e=V1().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=X1(r);if(!i)return;const o=e._component;!nt(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,Y1(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function Y1(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function X1(n){return $t(n)?document.querySelector(n):n}let hl=[];const H0=new WeakMap;function Z1(){hl.forEach(n=>n(...H0.get(n))),hl=[]}function Q1(n,...e){H0.set(n,e),!hl.includes(n)&&hl.push(n)===1&&requestAnimationFrame(Z1)}function hh(n,e){let{target:t}=n;for(;t;){if(t.dataset&&t.dataset[e]!==void 0)return!0;t=t.parentElement}return!1}function pl(n){return n.composedPath()[0]||null}function ph(n){return typeof n=="string"?n.endsWith("px")?Number(n.slice(0,n.length-2)):Number(n):n}function Kl(n,e){const t=n.trim().split(/\s+/g),r={top:t[0]};switch(t.length){case 1:r.right=t[0],r.bottom=t[0],r.left=t[0];break;case 2:r.right=t[1],r.left=t[1],r.bottom=t[0];break;case 3:r.right=t[1],r.bottom=t[2],r.left=t[1];break;case 4:r.right=t[1],r.bottom=t[2],r.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+n+" is not a valid value.")}return e===void 0?r:r[e]}const mh={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},Ro="^\\s*",_o="\\s*$",vi="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",bi="([0-9A-Fa-f])",Ai="([0-9A-Fa-f]{2})",J1=new RegExp(`${Ro}rgb\\s*\\(${vi},${vi},${vi}\\)${_o}`),eE=new RegExp(`${Ro}rgba\\s*\\(${vi},${vi},${vi},${vi}\\)${_o}`),tE=new RegExp(`${Ro}#${bi}${bi}${bi}${_o}`),nE=new RegExp(`${Ro}#${Ai}${Ai}${Ai}${_o}`),rE=new RegExp(`${Ro}#${bi}${bi}${bi}${bi}${_o}`),iE=new RegExp(`${Ro}#${Ai}${Ai}${Ai}${Ai}${_o}`);function gn(n){return parseInt(n,16)}function Ri(n){try{let e;if(e=nE.exec(n))return[gn(e[1]),gn(e[2]),gn(e[3]),1];if(e=J1.exec(n))return[an(e[1]),an(e[5]),an(e[9]),1];if(e=eE.exec(n))return[an(e[1]),an(e[5]),an(e[9]),ks(e[13])];if(e=tE.exec(n))return[gn(e[1]+e[1]),gn(e[2]+e[2]),gn(e[3]+e[3]),1];if(e=iE.exec(n))return[gn(e[1]),gn(e[2]),gn(e[3]),ks(gn(e[4])/255)];if(e=rE.exec(n))return[gn(e[1]+e[1]),gn(e[2]+e[2]),gn(e[3]+e[3]),ks(gn(e[4]+e[4])/255)];if(n in mh)return Ri(mh[n]);throw new Error(`[seemly/rgba]: Invalid color value ${n}.`)}catch(e){throw e}}function oE(n){return n>1?1:n<0?0:n}function Ed(n,e,t,r){return`rgba(${an(n)}, ${an(e)}, ${an(t)}, ${oE(r)})`}function Sc(n,e,t,r,i){return an((n*e*(1-r)+t*r)/i)}function bn(n,e){Array.isArray(n)||(n=Ri(n)),Array.isArray(e)||(e=Ri(e));const t=n[3],r=e[3],i=ks(t+r-t*r);return Ed(Sc(n[0],t,e[0],r,i),Sc(n[1],t,e[1],r,i),Sc(n[2],t,e[2],r,i),i)}function Vt(n,e){const[t,r,i,o=1]=Array.isArray(n)?n:Ri(n);return e.alpha?Ed(t,r,i,e.alpha):Ed(t,r,i,o)}function Aa(n,e){const[t,r,i,o=1]=Array.isArray(n)?n:Ri(n),{lightness:s=1,alpha:a=1}=e;return sE([t*s,r*s,i*s,o*a])}function ks(n){const e=Math.round(Number(n)*100)/100;return e>1?1:e<0?0:e}function an(n){const e=Math.round(Number(n));return e>255?255:e<0?0:e}function sE(n){const[e,t,r]=n;return 3 in n?`rgba(${an(e)}, ${an(t)}, ${an(r)}, ${ks(n[3])})`:`rgba(${an(e)}, ${an(t)}, ${an(r)}, 1)`}function W0(n=8){return Math.random().toString(16).slice(2,2+n)}function Is(n,e=[],t){const r={};return e.forEach(i=>{r[i]=n[i]}),Object.assign(r,t)}function wd(n,e=!0,t=[]){return n.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(Tr(String(r)));return}if(Array.isArray(r)){wd(r,e,t);return}if(r.type===_t){if(r.children===null)return;Array.isArray(r.children)&&wd(r.children,e,t)}else{if(r.type===cn&&e)return;t.push(r)}}}),t}function it(n,...e){if(Array.isArray(n))n.forEach(t=>it(t,...e));else return n(...e)}function Tu(n){return Object.keys(n)}function ar(n,...e){return typeof n=="function"?n(...e):typeof n=="string"?Tr(n):typeof n=="number"?Tr(String(n)):null}function ml(n,e){console.error(`[naive/${n}]: ${e}`)}function aE(n,e){throw new Error(`[naive/${n}]: ${e}`)}function gh(n,e="default",t=void 0){const r=n[e];if(!r)return ml("getFirstSlotVNode",`slot[${e}] is empty`),null;const i=wd(r(t));return i.length===1?i[0]:(ml("getFirstSlotVNode",`slot[${e}] should have exactly one child`),null)}function lE(n){return e=>{e?n.value=e.$el:n.value=null}}function Hn(n){return n.some(e=>xo(e)?!(e.type===cn||e.type===_t&&!Hn(e.children)):!0)?n:null}function po(n,e){return n&&Hn(n())||e()}function cE(n,e,t){return n&&Hn(n(e))||t(e)}function ln(n,e){const t=n&&Hn(n());return e(t||null)}function Cd(n){return!(n&&Hn(n()))}const yh=Ve({render(){var n,e;return(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n)}}),dE=/^(\d|\.)+$/,vh=/(\d|\.)+/;function wi(n,{c:e=1,offset:t=0,attachPx:r=!0}={}){if(typeof n=="number"){const i=(n+t)*e;return i===0?"0":`${i}px`}else if(typeof n=="string")if(dE.test(n)){const i=(Number(n)+t)*e;return r?i===0?"0":`${i}px`:`${i}`}else{const i=vh.exec(n);return i?n.replace(vh,String((Number(i[0])+t)*e)):n}return n}function bh(n){return n.replace(/#|\(|\)|,|\s|\./g,"_")}function Ah(n){const{left:e,right:t,top:r,bottom:i}=Kl(n);return`${r} ${t} ${i} ${e}`}function uE(n){let e=0;for(let t=0;t<n.length;++t)n[t]==="&"&&++e;return e}const j0=/\s*,(?![^(]*\))\s*/g,fE=/\s+/g;function hE(n,e){const t=[];return e.split(j0).forEach(r=>{let i=uE(r);if(i){if(i===1){n.forEach(s=>{t.push(r.replace("&",s))});return}}else{n.forEach(s=>{t.push((s&&s+" ")+r)});return}let o=[r];for(;i--;){const s=[];o.forEach(a=>{n.forEach(l=>{s.push(a.replace("&",l))})}),o=s}o.forEach(s=>t.push(s))}),t}function pE(n,e){const t=[];return e.split(j0).forEach(r=>{n.forEach(i=>{t.push((i&&i+" ")+r)})}),t}function mE(n){let e=[""];return n.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?e=hE(e,t):e=pE(e,t))}),e.join(", ").replace(fE," ")}function xh(n){if(!n)return;const e=n.parentElement;e&&e.removeChild(n)}function Vl(n,e){return(e??document.head).querySelector(`style[cssr-id="${n}"]`)}function gE(n){const e=document.createElement("style");return e.setAttribute("cssr-id",n),e}function xa(n){return n?/^\s*@(s|m)/.test(n):!1}const yE=/[A-Z]/g;function G0(n){return n.replace(yE,e=>"-"+e.toLowerCase())}function vE(n,e="  "){return typeof n=="object"&&n!==null?` {
`+Object.entries(n).map(t=>e+`  ${G0(t[0])}: ${t[1]};`).join(`
`)+`
`+e+"}":`: ${n};`}function bE(n,e,t){return typeof n=="function"?n({context:e.context,props:t}):n}function Eh(n,e,t,r){if(!e)return"";const i=bE(e,t,r);if(!i)return"";if(typeof i=="string")return`${n} {
${i}
}`;const o=Object.keys(i);if(o.length===0)return t.config.keepEmptyBlock?n+` {
}`:"";const s=n?[n+" {"]:[];return o.forEach(a=>{const l=i[a];if(a==="raw"){s.push(`
`+l+`
`);return}a=G0(a),l!=null&&s.push(`  ${a}${vE(l)}`)}),n&&s.push("}"),s.join(`
`)}function Sd(n,e,t){n&&n.forEach(r=>{if(Array.isArray(r))Sd(r,e,t);else if(typeof r=="function"){const i=r(e);Array.isArray(i)?Sd(i,e,t):i&&t(i)}else r&&t(r)})}function K0(n,e,t,r,i){const o=n.$;let s="";if(!o||typeof o=="string")xa(o)?s=o:e.push(o);else if(typeof o=="function"){const c=o({context:r.context,props:i});xa(c)?s=c:e.push(c)}else if(o.before&&o.before(r.context),!o.$||typeof o.$=="string")xa(o.$)?s=o.$:e.push(o.$);else if(o.$){const c=o.$({context:r.context,props:i});xa(c)?s=c:e.push(c)}const a=mE(e),l=Eh(a,n.props,r,i);s?t.push(`${s} {`):l.length&&t.push(l),n.children&&Sd(n.children,{context:r.context,props:i},c=>{if(typeof c=="string"){const d=Eh(a,{raw:c},r,i);t.push(d)}else K0(c,e,t,r,i)}),e.pop(),s&&t.push("}"),o&&o.after&&o.after(r.context)}function AE(n,e,t){const r=[];return K0(n,[],r,e,t),r.join(`

`)}function Td(n){for(var e=0,t,r=0,i=n.length;i>=4;++r,i-=4)t=n.charCodeAt(r)&255|(n.charCodeAt(++r)&255)<<8|(n.charCodeAt(++r)&255)<<16|(n.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(n.charCodeAt(r+2)&255)<<16;case 2:e^=(n.charCodeAt(r+1)&255)<<8;case 1:e^=n.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function xE(n,e,t,r){const{els:i}=e;if(t===void 0)i.forEach(xh),e.els=[];else{const o=Vl(t,r);o&&i.includes(o)&&(xh(o),e.els=i.filter(s=>s!==o))}}function wh(n,e){n.push(e)}function EE(n,e,t,r,i,o,s,a,l){let c;if(t===void 0&&(c=e.render(r),t=Td(c)),l){l.adapter(t,c??e.render(r));return}a===void 0&&(a=document.head);const d=Vl(t,a);if(d!==null&&!o)return d;const u=d??gE(t);if(c===void 0&&(c=e.render(r)),u.textContent=c,d!==null)return d;if(s){const f=a.querySelector(`meta[name="${s}"]`);if(f)return a.insertBefore(u,f),wh(e.els,u),u}return i?a.insertBefore(u,a.querySelector("style, link")):a.appendChild(u),wh(e.els,u),u}function wE(n){return AE(this,this.instance,n)}function CE(n={}){const{id:e,ssr:t,props:r,head:i=!1,force:o=!1,anchorMetaName:s,parent:a}=n;return EE(this.instance,this,e,r,i,o,s,a,t)}function SE(n={}){const{id:e,parent:t}=n;xE(this.instance,this,e,t)}const Ea=function(n,e,t,r){return{instance:n,$:e,props:t,children:r,els:[],render:wE,mount:CE,unmount:SE}},TE=function(n,e,t,r){return Array.isArray(e)?Ea(n,{$:null},null,e):Array.isArray(t)?Ea(n,e,null,t):Array.isArray(r)?Ea(n,e,t,r):Ea(n,e,t,null)};function V0(n={}){const e={c:(...t)=>TE(e,...t),use:(t,...r)=>t.install(e,...r),find:Vl,context:{},config:n};return e}function kE(n,e){if(n===void 0)return!1;if(e){const{context:{ids:t}}=e;return t.has(n)}return Vl(n)!==null}function IE(n){let e=".",t="__",r="--",i;if(n){let p=n.blockPrefix;p&&(e=p),p=n.elementPrefix,p&&(t=p),p=n.modifierPrefix,p&&(r=p)}const o={install(p){i=p.c;const m=p.context;m.bem={},m.bem.b=null,m.bem.els=null}};function s(p){let m,g;return{before(y){m=y.bem.b,g=y.bem.els,y.bem.els=null},after(y){y.bem.b=m,y.bem.els=g},$({context:y,props:E}){return p=typeof p=="string"?p:p({context:y,props:E}),y.bem.b=p,`${(E==null?void 0:E.bPrefix)||e}${y.bem.b}`}}}function a(p){let m;return{before(g){m=g.bem.els},after(g){g.bem.els=m},$({context:g,props:y}){return p=typeof p=="string"?p:p({context:g,props:y}),g.bem.els=p.split(",").map(E=>E.trim()),g.bem.els.map(E=>`${(y==null?void 0:y.bPrefix)||e}${g.bem.b}${t}${E}`).join(", ")}}}function l(p){return{$({context:m,props:g}){p=typeof p=="string"?p:p({context:m,props:g});const y=p.split(",").map(C=>C.trim());function E(C){return y.map(k=>`&${(g==null?void 0:g.bPrefix)||e}${m.bem.b}${C!==void 0?`${t}${C}`:""}${r}${k}`).join(", ")}const S=m.bem.els;return S!==null?E(S[0]):E()}}}function c(p){return{$({context:m,props:g}){p=typeof p=="string"?p:p({context:m,props:g});const y=m.bem.els;return`&:not(${(g==null?void 0:g.bPrefix)||e}${m.bem.b}${y!==null&&y.length>0?`${t}${y[0]}`:""}${r}${p})`}}}return Object.assign(o,{cB:(...p)=>i(s(p[0]),p[1],p[2]),cE:(...p)=>i(a(p[0]),p[1],p[2]),cM:(...p)=>i(l(p[0]),p[1],p[2]),cNotM:(...p)=>i(c(p[0]),p[1],p[2])}),o}const LE="n",zs=`.${LE}-`,RE="__",_E="--",q0=V0(),Y0=IE({blockPrefix:zs,elementPrefix:RE,modifierPrefix:_E});q0.use(Y0);const{c:xe,find:cB}=q0,{cB:we,cE:he,cM:Ie,cNotM:Zt}=Y0;function DE(n){return xe(({props:{bPrefix:e}})=>`${e||zs}modal, ${e||zs}drawer`,[n])}function PE(n){return xe(({props:{bPrefix:e}})=>`${e||zs}popover`,[n])}function BE(n){return xe(({props:{bPrefix:e}})=>`&${e||zs}modal`,n)}const OE=(...n)=>xe(">",[we(...n)]);function We(n,e){return n+(e==="default"?"":e.replace(/^[a-z]/,t=>t.toUpperCase()))}let Tc;function FE(){return Tc===void 0&&(Tc=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Tc}const ql=typeof document<"u"&&typeof window<"u";function ME(n,e,t){if(!e)return n;const r=De(n.value);let i=null;return Qt(n,o=>{i!==null&&window.clearTimeout(i),o===!0?t&&!t.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},e):r.value=!1}),r}function NE(n){const e=De(!!n.value);if(e.value)return bo(e);const t=Qt(n,r=>{r&&(e.value=!0,t())});return bo(e)}function pn(n){const e=Te(n),t=De(e.value);return Qt(e,r=>{t.value=r}),typeof n=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(r){n.set(r)}}}function zE(){return Oi()!==null}const $E=typeof window<"u";let mo,Ls;const UE=()=>{var n,e;mo=$E?(e=(n=document)===null||n===void 0?void 0:n.fonts)===null||e===void 0?void 0:e.ready:void 0,Ls=!1,mo!==void 0?mo.then(()=>{Ls=!0}):Ls=!0};UE();function HE(n){if(Ls)return;let e=!1;On(()=>{Ls||mo==null||mo.then(()=>{e||n()})}),kn(()=>{e=!0})}function Va(n){return n.composedPath()[0]}const WE={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function jE(n,e,t){if(n==="mousemoveoutside"){const r=i=>{e.contains(Va(i))||t(i)};return{mousemove:r,touchstart:r}}else if(n==="clickoutside"){let r=!1;const i=s=>{r=!e.contains(Va(s))},o=s=>{r&&(e.contains(Va(s))||t(s))};return{mousedown:i,mouseup:o,touchstart:i,touchend:o}}return console.error(`[evtd/create-trap-handler]: name \`${n}\` is invalid. This could be a bug of evtd.`),{}}function X0(n,e,t){const r=WE[n];let i=r.get(e);i===void 0&&r.set(e,i=new WeakMap);let o=i.get(t);return o===void 0&&i.set(t,o=jE(n,e,t)),o}function GE(n,e,t,r){if(n==="mousemoveoutside"||n==="clickoutside"){const i=X0(n,e,t);return Object.keys(i).forEach(o=>{Nt(o,document,i[o],r)}),!0}return!1}function KE(n,e,t,r){if(n==="mousemoveoutside"||n==="clickoutside"){const i=X0(n,e,t);return Object.keys(i).forEach(o=>{It(o,document,i[o],r)}),!0}return!1}function VE(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const n=new WeakMap,e=new WeakMap;function t(){n.set(this,!0)}function r(){n.set(this,!0),e.set(this,!0)}function i(T,z,F){const O=T[z];return T[z]=function(){return F.apply(T,arguments),O.apply(T,arguments)},T}function o(T,z){T[z]=Event.prototype[z]}const s=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var T;return(T=s.get(this))!==null&&T!==void 0?T:null}function c(T,z){a!==void 0&&Object.defineProperty(T,"currentTarget",{configurable:!0,enumerable:!0,get:z??a.get})}const d={bubble:{},capture:{}},u={};function f(){const T=function(z){const{type:F,eventPhase:O,bubbles:V}=z,_=Va(z);if(O===2)return;const H=O===1?"capture":"bubble";let I=_;const W=[];for(;I===null&&(I=window),W.push(I),I!==window;)I=I.parentNode||null;const ie=d.capture[F],Q=d.bubble[F];if(i(z,"stopPropagation",t),i(z,"stopImmediatePropagation",r),c(z,l),H==="capture"){if(ie===void 0)return;for(let ue=W.length-1;ue>=0&&!n.has(z);--ue){const J=W[ue],ae=ie.get(J);if(ae!==void 0){s.set(z,J);for(const X of ae){if(e.has(z))break;X(z)}}if(ue===0&&!V&&Q!==void 0){const X=Q.get(J);if(X!==void 0)for(const q of X){if(e.has(z))break;q(z)}}}}else if(H==="bubble"){if(Q===void 0)return;for(let ue=0;ue<W.length&&!n.has(z);++ue){const J=W[ue],ae=Q.get(J);if(ae!==void 0){s.set(z,J);for(const X of ae){if(e.has(z))break;X(z)}}}}o(z,"stopPropagation"),o(z,"stopImmediatePropagation"),c(z)};return T.displayName="evtdUnifiedHandler",T}function h(){const T=function(z){const{type:F,eventPhase:O}=z;if(O!==2)return;const V=u[F];V!==void 0&&V.forEach(_=>_(z))};return T.displayName="evtdUnifiedWindowEventHandler",T}const p=f(),m=h();function g(T,z){const F=d[T];return F[z]===void 0&&(F[z]=new Map,window.addEventListener(z,p,T==="capture")),F[z]}function y(T){return u[T]===void 0&&(u[T]=new Set,window.addEventListener(T,m)),u[T]}function E(T,z){let F=T.get(z);return F===void 0&&T.set(z,F=new Set),F}function S(T,z,F,O){const V=d[z][F];if(V!==void 0){const _=V.get(T);if(_!==void 0&&_.has(O))return!0}return!1}function C(T,z){const F=u[T];return!!(F!==void 0&&F.has(z))}function k(T,z,F,O){let V;if(typeof O=="object"&&O.once===!0?V=ie=>{M(T,z,V,O),F(ie)}:V=F,GE(T,z,V,O))return;const H=O===!0||typeof O=="object"&&O.capture===!0?"capture":"bubble",I=g(H,T),W=E(I,z);if(W.has(V)||W.add(V),z===window){const ie=y(T);ie.has(V)||ie.add(V)}}function M(T,z,F,O){if(KE(T,z,F,O))return;const _=O===!0||typeof O=="object"&&O.capture===!0,H=_?"capture":"bubble",I=g(H,T),W=E(I,z);if(z===window&&!S(z,_?"bubble":"capture",T,F)&&C(T,F)){const Q=u[T];Q.delete(F),Q.size===0&&(window.removeEventListener(T,m),u[T]=void 0)}W.has(F)&&W.delete(F),W.size===0&&I.delete(z),I.size===0&&(window.removeEventListener(T,p,H==="capture"),d[H][T]=void 0)}return{on:k,off:M}}const{on:Nt,off:It}=VE();function Co(n,e){return Qt(n,t=>{t!==void 0&&(e.value=t)}),Te(()=>n.value===void 0?e.value:n.value)}function ku(){const n=De(!1);return On(()=>{n.value=!0}),bo(n)}function Iu(n,e){return Te(()=>{for(const t of e)if(n[t]!==void 0)return n[t];return n[e[e.length-1]]})}const qE=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function YE(){return qE}function XE(n={},e){const t=zl({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=n,o=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==l.key)return;const d=r[c];if(typeof d=="function")d(l);else{const{stop:u=!1,prevent:f=!1}=d;u&&l.stopPropagation(),f&&l.preventDefault(),d.handler(l)}})},s=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(c=>{if(c!==l.key)return;const d=i[c];if(typeof d=="function")d(l);else{const{stop:u=!1,prevent:f=!1}=d;u&&l.stopPropagation(),f&&l.preventDefault(),d.handler(l)}})},a=()=>{(e===void 0||e.value)&&(Nt("keydown",document,o),Nt("keyup",document,s)),e!==void 0&&Qt(e,l=>{l?(Nt("keydown",document,o),Nt("keyup",document,s)):(It("keydown",document,o),It("keyup",document,s))})};return zE()?(qs(a),kn(()=>{(e===void 0||e.value)&&(It("keydown",document,o),It("keyup",document,s))})):a(),bo(t)}const ZE="n-internal-select-menu-body",Lu="n-modal-body",Ru="n-drawer-body",Yl="n-popover-body",Z0="__disabled__";function So(n){const e=rt(Lu,null),t=rt(Ru,null),r=rt(Yl,null),i=rt(ZE,null),o=De();if(typeof document<"u"){o.value=document.fullscreenElement;const s=()=>{o.value=document.fullscreenElement};On(()=>{Nt("fullscreenchange",document,s)}),kn(()=>{It("fullscreenchange",document,s)})}return pn(()=>{var s;const{to:a}=n;return a!==void 0?a===!1?Z0:a===!0?o.value||"body":a:e!=null&&e.value?(s=e.value.$el)!==null&&s!==void 0?s:e.value:t!=null&&t.value?t.value:r!=null&&r.value?r.value:i!=null&&i.value?i.value:a??(o.value||"body")})}So.tdkey=Z0;So.propTo={type:[String,Object,Boolean],default:void 0};function kd(n,e,t="default"){const r=e[t];if(r===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);return r()}function Id(n,e=!0,t=[]){return n.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(Tr(String(r)));return}if(Array.isArray(r)){Id(r,e,t);return}if(r.type===_t){if(r.children===null)return;Array.isArray(r.children)&&Id(r.children,e,t)}else r.type!==cn&&t.push(r)}}),t}function Ch(n,e,t="default"){const r=e[t];if(r===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);const i=Id(r());if(i.length===1)return i[0];throw new Error(`[vueuc/${n}]: slot[${t}] should have exactly one child.`)}let Fr=null;function Q0(){if(Fr===null&&(Fr=document.getElementById("v-binder-view-measurer"),Fr===null)){Fr=document.createElement("div"),Fr.id="v-binder-view-measurer";const{style:n}=Fr;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(Fr)}return Fr.getBoundingClientRect()}function QE(n,e){const t=Q0();return{top:e,left:n,height:0,width:0,right:t.width-n,bottom:t.height-e}}function kc(n){const e=n.getBoundingClientRect(),t=Q0();return{left:e.left-t.left,top:e.top-t.top,bottom:t.height+t.top-e.bottom,right:t.width+t.left-e.right,width:e.width,height:e.height}}function JE(n){return n.nodeType===9?null:n.parentNode}function J0(n){if(n===null)return null;const e=JE(n);if(e===null)return null;if(e.nodeType===9)return document;if(e.nodeType===1){const{overflow:t,overflowX:r,overflowY:i}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(t+i+r))return e}return J0(e)}const ew=Ve({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var e;Mt("VBinder",(e=Oi())===null||e===void 0?void 0:e.proxy);const t=rt("VBinder",null),r=De(null),i=y=>{r.value=y,t&&n.syncTargetWithParent&&t.setTargetRef(y)};let o=[];const s=()=>{let y=r.value;for(;y=J0(y),y!==null;)o.push(y);for(const E of o)Nt("scroll",E,u,!0)},a=()=>{for(const y of o)It("scroll",y,u,!0);o=[]},l=new Set,c=y=>{l.size===0&&s(),l.has(y)||l.add(y)},d=y=>{l.has(y)&&l.delete(y),l.size===0&&a()},u=()=>{Q1(f)},f=()=>{l.forEach(y=>y())},h=new Set,p=y=>{h.size===0&&Nt("resize",window,g),h.has(y)||h.add(y)},m=y=>{h.has(y)&&h.delete(y),h.size===0&&It("resize",window,g)},g=()=>{h.forEach(y=>y())};return kn(()=>{It("resize",window,g),a()}),{targetRef:r,setTargetRef:i,addScrollListener:c,removeScrollListener:d,addResizeListener:p,removeResizeListener:m}},render(){return kd("binder",this.$slots)}}),eg=ew,tg=Ve({name:"Target",setup(){const{setTargetRef:n,syncTarget:e}=rt("VBinder");return{syncTarget:e,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:e}=this;return n?Ul(Ch("follower",this.$slots),[[e]]):Ch("follower",this.$slots)}}),Ji="@@mmoContext",tw={mounted(n,{value:e}){n[Ji]={handler:void 0},typeof e=="function"&&(n[Ji].handler=e,Nt("mousemoveoutside",n,e))},updated(n,{value:e}){const t=n[Ji];typeof e=="function"?t.handler?t.handler!==e&&(It("mousemoveoutside",n,t.handler),t.handler=e,Nt("mousemoveoutside",n,e)):(n[Ji].handler=e,Nt("mousemoveoutside",n,e)):t.handler&&(It("mousemoveoutside",n,t.handler),t.handler=void 0)},unmounted(n){const{handler:e}=n[Ji];e&&It("mousemoveoutside",n,e),n[Ji].handler=void 0}},nw=tw,eo="@@coContext",rw={mounted(n,{value:e,modifiers:t}){n[eo]={handler:void 0},typeof e=="function"&&(n[eo].handler=e,Nt("clickoutside",n,e,{capture:t.capture}))},updated(n,{value:e,modifiers:t}){const r=n[eo];typeof e=="function"?r.handler?r.handler!==e&&(It("clickoutside",n,r.handler,{capture:t.capture}),r.handler=e,Nt("clickoutside",n,e,{capture:t.capture})):(n[eo].handler=e,Nt("clickoutside",n,e,{capture:t.capture})):r.handler&&(It("clickoutside",n,r.handler,{capture:t.capture}),r.handler=void 0)},unmounted(n,{modifiers:e}){const{handler:t}=n[eo];t&&It("clickoutside",n,t,{capture:e.capture}),n[eo].handler=void 0}},Sh=rw;function iw(n,e){console.error(`[vdirs/${n}]: ${e}`)}class ow{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,t){const{elementZIndex:r}=this;if(t!==void 0){e.style.zIndex=`${t}`,r.delete(e);return}const{nextZIndex:i}=this;r.has(e)&&r.get(e)+1===this.nextZIndex||(e.style.zIndex=`${i}`,r.set(e,i),this.nextZIndex=i+1,this.squashState())}unregister(e,t){const{elementZIndex:r}=this;r.has(e)?r.delete(e):t===void 0&&iw("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){const e=Array.from(this.elementZIndex.entries());e.sort((t,r)=>t[1]-r[1]),this.nextZIndex=2e3,e.forEach(t=>{const r=t[0],i=this.nextZIndex++;`${i}`!==r.style.zIndex&&(r.style.zIndex=`${i}`)})}}const Ic=new ow,to="@@ziContext",sw={mounted(n,e){const{value:t={}}=e,{zIndex:r,enabled:i}=t;n[to]={enabled:!!i,initialized:!1},i&&(Ic.ensureZIndex(n,r),n[to].initialized=!0)},updated(n,e){const{value:t={}}=e,{zIndex:r,enabled:i}=t,o=n[to].enabled;i&&!o&&(Ic.ensureZIndex(n,r),n[to].initialized=!0),n[to].enabled=!!i},unmounted(n,e){if(!n[to].initialized)return;const{value:t={}}=e,{zIndex:r}=t;Ic.unregister(n,r)}},ng=sw,aw="@css-render/vue3-ssr";function lw(n,e){return`<style cssr-id="${n}">
${e}
</style>`}function cw(n,e,t){const{styles:r,ids:i}=t;i.has(n)||r!==null&&(i.add(n),r.push(lw(n,e)))}const dw=typeof document<"u";function Do(){if(dw)return;const n=rt(aw,null);if(n!==null)return{adapter:(e,t)=>cw(e,t,n),context:n}}function Th(n,e){console.error(`[vueuc/${n}]: ${e}`)}const{c:gs}=V0(),rg="vueuc-style";function kh(n){return typeof n=="string"?document.querySelector(n):n()}const uw=Ve({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:NE(bt(n,"show")),mergedTo:Te(()=>{const{to:e}=n;return e??"body"})}},render(){return this.showTeleport?this.disabled?kd("lazy-teleport",this.$slots):j(bx,{disabled:this.disabled,to:this.mergedTo},kd("lazy-teleport",this.$slots)):null}}),wa={top:"bottom",bottom:"top",left:"right",right:"left"},Ih={start:"end",center:"center",end:"start"},Lc={top:"height",bottom:"height",left:"width",right:"width"},fw={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},hw={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},pw={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Lh={top:!0,bottom:!1,left:!0,right:!1},Rh={top:"end",bottom:"start",left:"end",right:"start"};function mw(n,e,t,r,i,o){if(!i||o)return{placement:n,top:0,left:0};const[s,a]=n.split("-");let l=a??"center",c={top:0,left:0};const d=(h,p,m)=>{let g=0,y=0;const E=t[h]-e[p]-e[h];return E>0&&r&&(m?y=Lh[p]?E:-E:g=Lh[p]?E:-E),{left:g,top:y}},u=s==="left"||s==="right";if(l!=="center"){const h=pw[n],p=wa[h],m=Lc[h];if(t[m]>e[m]){if(e[h]+e[m]<t[m]){const g=(t[m]-e[m])/2;e[h]<g||e[p]<g?e[h]<e[p]?(l=Ih[a],c=d(m,p,u)):c=d(m,h,u):l="center"}}else t[m]<e[m]&&e[p]<0&&e[h]>e[p]&&(l=Ih[a])}else{const h=s==="bottom"||s==="top"?"left":"top",p=wa[h],m=Lc[h],g=(t[m]-e[m])/2;(e[h]<g||e[p]<g)&&(e[h]>e[p]?(l=Rh[h],c=d(m,h,u)):(l=Rh[p],c=d(m,p,u)))}let f=s;return e[s]<t[Lc[s]]&&e[s]<e[wa[s]]&&(f=wa[s]),{placement:l!=="center"?`${f}-${l}`:f,left:c.left,top:c.top}}function gw(n,e){return e?hw[n]:fw[n]}function yw(n,e,t,r,i,o){if(o)switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+t.width/2+i)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+t.width/2+i)}px`,transform:"translateX(-50%)"}}}const vw=gs([gs(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),gs(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[gs("> *",{pointerEvents:"all"})])]),ig=Ve({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const e=rt("VBinder"),t=pn(()=>n.enabled!==void 0?n.enabled:n.show),r=De(null),i=De(null),o=()=>{const{syncTrigger:f}=n;f.includes("scroll")&&e.addScrollListener(l),f.includes("resize")&&e.addResizeListener(l)},s=()=>{e.removeScrollListener(l),e.removeResizeListener(l)};On(()=>{t.value&&(l(),o())});const a=Do();vw.mount({id:"vueuc/binder",head:!0,anchorMetaName:rg,ssr:a}),kn(()=>{s()}),HE(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const f=r.value;if(f===null)return;const h=e.targetRef,{x:p,y:m,overlap:g}=n,y=p!==void 0&&m!==void 0?QE(p,m):kc(h);f.style.setProperty("--v-target-width",`${Math.round(y.width)}px`),f.style.setProperty("--v-target-height",`${Math.round(y.height)}px`);const{width:E,minWidth:S,placement:C,internalShift:k,flip:M}=n;f.setAttribute("v-placement",C),g?f.setAttribute("v-overlap",""):f.removeAttribute("v-overlap");const{style:T}=f;E==="target"?T.width=`${y.width}px`:E!==void 0?T.width=E:T.width="",S==="target"?T.minWidth=`${y.width}px`:S!==void 0?T.minWidth=S:T.minWidth="";const z=kc(f),F=kc(i.value),{left:O,top:V,placement:_}=mw(C,y,z,k,M,g),H=gw(_,g),{left:I,top:W,transform:ie}=yw(_,F,y,V,O,g);f.setAttribute("v-placement",_),f.style.setProperty("--v-offset-left",`${Math.round(O)}px`),f.style.setProperty("--v-offset-top",`${Math.round(V)}px`),f.style.transform=`translateX(${I}) translateY(${W}) ${ie}`,f.style.setProperty("--v-transform-origin",H),f.style.transformOrigin=H};Qt(t,f=>{f?(o(),c()):s()});const c=()=>{Ao().then(l).catch(f=>console.error(f))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(f=>{Qt(bt(n,f),l)}),["teleportDisabled"].forEach(f=>{Qt(bt(n,f),c)}),Qt(bt(n,"syncTrigger"),f=>{f.includes("resize")?e.addResizeListener(l):e.removeResizeListener(l),f.includes("scroll")?e.addScrollListener(l):e.removeScrollListener(l)});const d=ku(),u=pn(()=>{const{to:f}=n;if(f!==void 0)return f;d.value});return{VBinder:e,mergedEnabled:t,offsetContainerRef:i,followerRef:r,mergedTo:u,syncPosition:l}},render(){return j(uw,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,e;const t=j("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[j("div",{class:"v-binder-follower-content",ref:"followerRef"},(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))]);return this.zindexable?Ul(t,[[ng,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var Ci=[],bw=function(){return Ci.some(function(n){return n.activeTargets.length>0})},Aw=function(){return Ci.some(function(n){return n.skippedTargets.length>0})},_h="ResizeObserver loop completed with undelivered notifications.",xw=function(){var n;typeof ErrorEvent=="function"?n=new ErrorEvent("error",{message:_h}):(n=document.createEvent("Event"),n.initEvent("error",!1,!1),n.message=_h),window.dispatchEvent(n)},$s;(function(n){n.BORDER_BOX="border-box",n.CONTENT_BOX="content-box",n.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})($s||($s={}));var Si=function(n){return Object.freeze(n)},Ew=function(){function n(e,t){this.inlineSize=e,this.blockSize=t,Si(this)}return n}(),og=function(){function n(e,t,r,i){return this.x=e,this.y=t,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Si(this)}return n.prototype.toJSON=function(){var e=this,t=e.x,r=e.y,i=e.top,o=e.right,s=e.bottom,a=e.left,l=e.width,c=e.height;return{x:t,y:r,top:i,right:o,bottom:s,left:a,width:l,height:c}},n.fromRect=function(e){return new n(e.x,e.y,e.width,e.height)},n}(),_u=function(n){return n instanceof SVGElement&&"getBBox"in n},sg=function(n){if(_u(n)){var e=n.getBBox(),t=e.width,r=e.height;return!t&&!r}var i=n,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||n.getClientRects().length)},Dh=function(n){var e;if(n instanceof Element)return!0;var t=(e=n==null?void 0:n.ownerDocument)===null||e===void 0?void 0:e.defaultView;return!!(t&&n instanceof t.Element)},ww=function(n){switch(n.tagName){case"INPUT":if(n.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Rs=typeof window<"u"?window:{},Ca=new WeakMap,Ph=/auto|scroll/,Cw=/^tb|vertical/,Sw=/msie|trident/i.test(Rs.navigator&&Rs.navigator.userAgent),Qn=function(n){return parseFloat(n||"0")},go=function(n,e,t){return n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=!1),new Ew((t?e:n)||0,(t?n:e)||0)},Bh=Si({devicePixelContentBoxSize:go(),borderBoxSize:go(),contentBoxSize:go(),contentRect:new og(0,0,0,0)}),ag=function(n,e){if(e===void 0&&(e=!1),Ca.has(n)&&!e)return Ca.get(n);if(sg(n))return Ca.set(n,Bh),Bh;var t=getComputedStyle(n),r=_u(n)&&n.ownerSVGElement&&n.getBBox(),i=!Sw&&t.boxSizing==="border-box",o=Cw.test(t.writingMode||""),s=!r&&Ph.test(t.overflowY||""),a=!r&&Ph.test(t.overflowX||""),l=r?0:Qn(t.paddingTop),c=r?0:Qn(t.paddingRight),d=r?0:Qn(t.paddingBottom),u=r?0:Qn(t.paddingLeft),f=r?0:Qn(t.borderTopWidth),h=r?0:Qn(t.borderRightWidth),p=r?0:Qn(t.borderBottomWidth),m=r?0:Qn(t.borderLeftWidth),g=u+c,y=l+d,E=m+h,S=f+p,C=a?n.offsetHeight-S-n.clientHeight:0,k=s?n.offsetWidth-E-n.clientWidth:0,M=i?g+E:0,T=i?y+S:0,z=r?r.width:Qn(t.width)-M-k,F=r?r.height:Qn(t.height)-T-C,O=z+g+k+E,V=F+y+C+S,_=Si({devicePixelContentBoxSize:go(Math.round(z*devicePixelRatio),Math.round(F*devicePixelRatio),o),borderBoxSize:go(O,V,o),contentBoxSize:go(z,F,o),contentRect:new og(u,l,z,F)});return Ca.set(n,_),_},lg=function(n,e,t){var r=ag(n,t),i=r.borderBoxSize,o=r.contentBoxSize,s=r.devicePixelContentBoxSize;switch(e){case $s.DEVICE_PIXEL_CONTENT_BOX:return s;case $s.BORDER_BOX:return i;default:return o}},Tw=function(){function n(e){var t=ag(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=Si([t.borderBoxSize]),this.contentBoxSize=Si([t.contentBoxSize]),this.devicePixelContentBoxSize=Si([t.devicePixelContentBoxSize])}return n}(),cg=function(n){if(sg(n))return 1/0;for(var e=0,t=n.parentNode;t;)e+=1,t=t.parentNode;return e},kw=function(){var n=1/0,e=[];Ci.forEach(function(s){if(s.activeTargets.length!==0){var a=[];s.activeTargets.forEach(function(c){var d=new Tw(c.target),u=cg(c.target);a.push(d),c.lastReportedSize=lg(c.target,c.observedBox),u<n&&(n=u)}),e.push(function(){s.callback.call(s.observer,a,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var t=0,r=e;t<r.length;t++){var i=r[t];i()}return n},Oh=function(n){Ci.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(i){i.isActive()&&(cg(i.target)>n?t.activeTargets.push(i):t.skippedTargets.push(i))})})},Iw=function(){var n=0;for(Oh(n);bw();)n=kw(),Oh(n);return Aw()&&xw(),n>0},Rc,dg=[],Lw=function(){return dg.splice(0).forEach(function(n){return n()})},Rw=function(n){if(!Rc){var e=0,t=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return Lw()}).observe(t,r),Rc=function(){t.textContent="".concat(e?e--:e++)}}dg.push(n),Rc()},_w=function(n){Rw(function(){requestAnimationFrame(n)})},qa=0,Dw=function(){return!!qa},Pw=250,Bw={attributes:!0,characterData:!0,childList:!0,subtree:!0},Fh=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Mh=function(n){return n===void 0&&(n=0),Date.now()+n},_c=!1,Ow=function(){function n(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return n.prototype.run=function(e){var t=this;if(e===void 0&&(e=Pw),!_c){_c=!0;var r=Mh(e);_w(function(){var i=!1;try{i=Iw()}finally{if(_c=!1,e=r-Mh(),!Dw())return;i?t.run(1e3):e>0?t.run(e):t.start()}})}},n.prototype.schedule=function(){this.stop(),this.run()},n.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,Bw)};document.body?t():Rs.addEventListener("DOMContentLoaded",t)},n.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Fh.forEach(function(t){return Rs.addEventListener(t,e.listener,!0)}))},n.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Fh.forEach(function(t){return Rs.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},n}(),Ld=new Ow,Nh=function(n){!qa&&n>0&&Ld.start(),qa+=n,!qa&&Ld.stop()},Fw=function(n){return!_u(n)&&!ww(n)&&getComputedStyle(n).display==="inline"},Mw=function(){function n(e,t){this.target=e,this.observedBox=t||$s.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return n.prototype.isActive=function(){var e=lg(this.target,this.observedBox,!0);return Fw(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},n}(),Nw=function(){function n(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return n}(),Sa=new WeakMap,zh=function(n,e){for(var t=0;t<n.length;t+=1)if(n[t].target===e)return t;return-1},Ta=function(){function n(){}return n.connect=function(e,t){var r=new Nw(e,t);Sa.set(e,r)},n.observe=function(e,t,r){var i=Sa.get(e),o=i.observationTargets.length===0;zh(i.observationTargets,t)<0&&(o&&Ci.push(i),i.observationTargets.push(new Mw(t,r&&r.box)),Nh(1),Ld.schedule())},n.unobserve=function(e,t){var r=Sa.get(e),i=zh(r.observationTargets,t),o=r.observationTargets.length===1;i>=0&&(o&&Ci.splice(Ci.indexOf(r),1),r.observationTargets.splice(i,1),Nh(-1))},n.disconnect=function(e){var t=this,r=Sa.get(e);r.observationTargets.slice().forEach(function(i){return t.unobserve(e,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},n}(),zw=function(){function n(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ta.connect(this,e)}return n.prototype.observe=function(e,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Dh(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ta.observe(this,e,t)},n.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Dh(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ta.unobserve(this,e)},n.prototype.disconnect=function(){Ta.disconnect(this)},n.toString=function(){return"function ResizeObserver () { [polyfill code] }"},n}();class $w{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||zw)(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const t of e){const r=this.elHandlersMap.get(t.target);r!==void 0&&r(t)}}registerHandler(e,t){this.elHandlersMap.set(e,t),this.observer.observe(e)}unregisterHandler(e){this.elHandlersMap.has(e)&&(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}const $h=new $w,gl=Ve({name:"ResizeObserver",props:{onResize:Function},setup(n){let e=!1;const t=Oi().proxy;function r(i){const{onResize:o}=n;o!==void 0&&o(i)}On(()=>{const i=t.$el;if(i===void 0){Th("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){Th("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&($h.registerHandler(i.nextElementSibling,r),e=!0)}),kn(()=>{e&&$h.unregisterHandler(t.$el.nextElementSibling)})},render(){return f0(this.$slots,"default")}}),gr="v-hidden",Uw=gs("[v-hidden]",{display:"none!important"}),Hw=Ve({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=De(null),r=De(null);function i(s){const{value:a}=t,{getCounter:l,getTail:c}=n;let d;if(l!==void 0?d=l():d=r.value,!a||!d)return;d.hasAttribute(gr)&&d.removeAttribute(gr);const{children:u}=a;if(s.showAllItemsBeforeCalculate)for(const S of u)S.hasAttribute(gr)&&S.removeAttribute(gr);const f=a.offsetWidth,h=[],p=e.tail?c==null?void 0:c():null;let m=p?p.offsetWidth:0,g=!1;const y=a.children.length-(e.tail?1:0);for(let S=0;S<y-1;++S){if(S<0)continue;const C=u[S];if(g){C.hasAttribute(gr)||C.setAttribute(gr,"");continue}else C.hasAttribute(gr)&&C.removeAttribute(gr);const k=C.offsetWidth;if(m+=k,h[S]=k,m>f){const{updateCounter:M}=n;for(let T=S;T>=0;--T){const z=y-1-T;M!==void 0?M(z):d.textContent=`${z}`;const F=d.offsetWidth;if(m-=h[T],m+F<=f||T===0){g=!0,S=T-1,p&&(S===-1?(p.style.maxWidth=`${f-F}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");const{onUpdateCount:O}=n;O&&O(z);break}}}}const{onUpdateOverflow:E}=n;g?E!==void 0&&E(!0):(E!==void 0&&E(!1),d.setAttribute(gr,""))}const o=Do();return Uw.mount({id:"vueuc/overflow",head:!0,anchorMetaName:rg,ssr:o}),On(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:r,sync:i}},render(){const{$slots:n}=this;return Ao(()=>this.sync({showAllItemsBeforeCalculate:!1})),j("div",{class:"v-overflow",ref:"selfRef"},[f0(n,"default"),n.counter?n.counter():j("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function ug(n){return n instanceof HTMLElement}function fg(n){for(let e=0;e<n.childNodes.length;e++){const t=n.childNodes[e];if(ug(t)&&(pg(t)||fg(t)))return!0}return!1}function hg(n){for(let e=n.childNodes.length-1;e>=0;e--){const t=n.childNodes[e];if(ug(t)&&(pg(t)||hg(t)))return!0}return!1}function pg(n){if(!Ww(n))return!1;try{n.focus({preventScroll:!0})}catch{}return document.activeElement===n}function Ww(n){if(n.tabIndex>0||n.tabIndex===0&&n.getAttribute("tabIndex")!==null)return!0;if(n.getAttribute("disabled"))return!1;switch(n.nodeName){case"A":return!!n.href&&n.rel!=="ignore";case"INPUT":return n.type!=="hidden"&&n.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let ds=[];const jw=Ve({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(n){const e=W0(),t=De(null),r=De(null);let i=!1,o=!1;const s=typeof document>"u"?null:document.activeElement;function a(){return ds[ds.length-1]===e}function l(g){var y;g.code==="Escape"&&a()&&((y=n.onEsc)===null||y===void 0||y.call(n,g))}On(()=>{Qt(()=>n.active,g=>{g?(u(),Nt("keydown",document,l)):(It("keydown",document,l),i&&f())},{immediate:!0})}),kn(()=>{It("keydown",document,l),i&&f()});function c(g){if(!o&&a()){const y=d();if(y===null||y.contains(pl(g)))return;h("first")}}function d(){const g=t.value;if(g===null)return null;let y=g;for(;y=y.nextSibling,!(y===null||y instanceof Element&&y.tagName==="DIV"););return y}function u(){var g;if(!n.disabled){if(ds.push(e),n.autoFocus){const{initialFocusTo:y}=n;y===void 0?h("first"):(g=kh(y))===null||g===void 0||g.focus({preventScroll:!0})}i=!0,document.addEventListener("focus",c,!0)}}function f(){var g;if(n.disabled||(document.removeEventListener("focus",c,!0),ds=ds.filter(E=>E!==e),a()))return;const{finalFocusTo:y}=n;y!==void 0?(g=kh(y))===null||g===void 0||g.focus({preventScroll:!0}):n.returnFocusOnDeactivated&&s instanceof HTMLElement&&(o=!0,s.focus({preventScroll:!0}),o=!1)}function h(g){if(a()&&n.active){const y=t.value,E=r.value;if(y!==null&&E!==null){const S=d();if(S==null||S===E){o=!0,y.focus({preventScroll:!0}),o=!1;return}o=!0;const C=g==="first"?fg(S):hg(S);o=!1,C||(o=!0,y.focus({preventScroll:!0}),o=!1)}}}function p(g){if(o)return;const y=d();y!==null&&(g.relatedTarget!==null&&y.contains(g.relatedTarget)?h("last"):h("first"))}function m(g){o||(g.relatedTarget!==null&&g.relatedTarget===t.value?h("last"):h("first"))}return{focusableStartRef:t,focusableEndRef:r,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:p,handleEndFocus:m}},render(){const{default:n}=this.$slots;if(n===void 0)return null;if(this.disabled)return n();const{active:e,focusableStyle:t}=this;return j(_t,null,[j("div",{"aria-hidden":"true",tabindex:e?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),n(),j("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:e?"0":"-1",onFocus:this.handleEndFocus})])}});function Du(n){const e={isDeactivated:!1};let t=!1;return a0(()=>{if(e.isDeactivated=!1,!t){t=!0;return}n()}),l0(()=>{e.isDeactivated=!0,t||(t=!0)}),e}const Uh="n-form-item";function mg(n,{defaultSize:e="medium",mergedSize:t,mergedDisabled:r}={}){const i=rt(Uh,null);Mt(Uh,null);const o=Te(t?()=>t(i):()=>{const{size:l}=n;if(l)return l;if(i){const{mergedSize:c}=i;if(c.value!==void 0)return c.value}return e}),s=Te(r?()=>r(i):()=>{const{disabled:l}=n;return l!==void 0?l:i?i.disabled.value:!1}),a=Te(()=>{const{status:l}=n;return l||(i==null?void 0:i.mergedValidationStatus.value)});return kn(()=>{i&&i.restoreValidation()}),{mergedSizeRef:o,mergedDisabledRef:s,mergedStatusRef:a,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var Gw=typeof global=="object"&&global&&global.Object===Object&&global;const gg=Gw;var Kw=typeof self=="object"&&self&&self.Object===Object&&self,Vw=gg||Kw||Function("return this")();const ur=Vw;var qw=ur.Symbol;const Vr=qw;var yg=Object.prototype,Yw=yg.hasOwnProperty,Xw=yg.toString,us=Vr?Vr.toStringTag:void 0;function Zw(n){var e=Yw.call(n,us),t=n[us];try{n[us]=void 0;var r=!0}catch{}var i=Xw.call(n);return r&&(e?n[us]=t:delete n[us]),i}var Qw=Object.prototype,Jw=Qw.toString;function eC(n){return Jw.call(n)}var tC="[object Null]",nC="[object Undefined]",Hh=Vr?Vr.toStringTag:void 0;function Fi(n){return n==null?n===void 0?nC:tC:Hh&&Hh in Object(n)?Zw(n):eC(n)}function qr(n){return n!=null&&typeof n=="object"}var rC="[object Symbol]";function Pu(n){return typeof n=="symbol"||qr(n)&&Fi(n)==rC}function vg(n,e){for(var t=-1,r=n==null?0:n.length,i=Array(r);++t<r;)i[t]=e(n[t],t,n);return i}var iC=Array.isArray;const Pn=iC;var oC=1/0,Wh=Vr?Vr.prototype:void 0,jh=Wh?Wh.toString:void 0;function bg(n){if(typeof n=="string")return n;if(Pn(n))return vg(n,bg)+"";if(Pu(n))return jh?jh.call(n):"";var e=n+"";return e=="0"&&1/n==-oC?"-0":e}function Jr(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}function Bu(n){return n}var sC="[object AsyncFunction]",aC="[object Function]",lC="[object GeneratorFunction]",cC="[object Proxy]";function Ou(n){if(!Jr(n))return!1;var e=Fi(n);return e==aC||e==lC||e==sC||e==cC}var dC=ur["__core-js_shared__"];const Dc=dC;var Gh=function(){var n=/[^.]+$/.exec(Dc&&Dc.keys&&Dc.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function uC(n){return!!Gh&&Gh in n}var fC=Function.prototype,hC=fC.toString;function Mi(n){if(n!=null){try{return hC.call(n)}catch{}try{return n+""}catch{}}return""}var pC=/[\\^$.*+?()[\]{}|]/g,mC=/^\[object .+?Constructor\]$/,gC=Function.prototype,yC=Object.prototype,vC=gC.toString,bC=yC.hasOwnProperty,AC=RegExp("^"+vC.call(bC).replace(pC,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xC(n){if(!Jr(n)||uC(n))return!1;var e=Ou(n)?AC:mC;return e.test(Mi(n))}function EC(n,e){return n==null?void 0:n[e]}function Ni(n,e){var t=EC(n,e);return xC(t)?t:void 0}var wC=Ni(ur,"WeakMap");const Rd=wC;var Kh=Object.create,CC=function(){function n(){}return function(e){if(!Jr(e))return{};if(Kh)return Kh(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}();const SC=CC;function TC(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}function kC(n,e){var t=-1,r=n.length;for(e||(e=Array(r));++t<r;)e[t]=n[t];return e}var IC=800,LC=16,RC=Date.now;function _C(n){var e=0,t=0;return function(){var r=RC(),i=LC-(r-t);if(t=r,i>0){if(++e>=IC)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function DC(n){return function(){return n}}var PC=function(){try{var n=Ni(Object,"defineProperty");return n({},"",{}),n}catch{}}();const yl=PC;var BC=yl?function(n,e){return yl(n,"toString",{configurable:!0,enumerable:!1,value:DC(e),writable:!0})}:Bu;const OC=BC;var FC=_C(OC);const MC=FC;var NC=9007199254740991,zC=/^(?:0|[1-9]\d*)$/;function Fu(n,e){var t=typeof n;return e=e??NC,!!e&&(t=="number"||t!="symbol"&&zC.test(n))&&n>-1&&n%1==0&&n<e}function Mu(n,e,t){e=="__proto__"&&yl?yl(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}function Zs(n,e){return n===e||n!==n&&e!==e}var $C=Object.prototype,UC=$C.hasOwnProperty;function HC(n,e,t){var r=n[e];(!(UC.call(n,e)&&Zs(r,t))||t===void 0&&!(e in n))&&Mu(n,e,t)}function WC(n,e,t,r){var i=!t;t||(t={});for(var o=-1,s=e.length;++o<s;){var a=e[o],l=r?r(t[a],n[a],a,t,n):void 0;l===void 0&&(l=n[a]),i?Mu(t,a,l):HC(t,a,l)}return t}var Vh=Math.max;function jC(n,e,t){return e=Vh(e===void 0?n.length-1:e,0),function(){for(var r=arguments,i=-1,o=Vh(r.length-e,0),s=Array(o);++i<o;)s[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=t(s),TC(n,this,a)}}function GC(n,e){return MC(jC(n,e,Bu),n+"")}var KC=9007199254740991;function Nu(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=KC}function Po(n){return n!=null&&Nu(n.length)&&!Ou(n)}function VC(n,e,t){if(!Jr(t))return!1;var r=typeof e;return(r=="number"?Po(t)&&Fu(e,t.length):r=="string"&&e in t)?Zs(t[e],n):!1}function qC(n){return GC(function(e,t){var r=-1,i=t.length,o=i>1?t[i-1]:void 0,s=i>2?t[2]:void 0;for(o=n.length>3&&typeof o=="function"?(i--,o):void 0,s&&VC(t[0],t[1],s)&&(o=i<3?void 0:o,i=1),e=Object(e);++r<i;){var a=t[r];a&&n(e,a,r,o)}return e})}var YC=Object.prototype;function zu(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||YC;return n===t}function XC(n,e){for(var t=-1,r=Array(n);++t<n;)r[t]=e(t);return r}var ZC="[object Arguments]";function qh(n){return qr(n)&&Fi(n)==ZC}var Ag=Object.prototype,QC=Ag.hasOwnProperty,JC=Ag.propertyIsEnumerable,eS=qh(function(){return arguments}())?qh:function(n){return qr(n)&&QC.call(n,"callee")&&!JC.call(n,"callee")};const vl=eS;function tS(){return!1}var xg=typeof Sn=="object"&&Sn&&!Sn.nodeType&&Sn,Yh=xg&&typeof Tn=="object"&&Tn&&!Tn.nodeType&&Tn,nS=Yh&&Yh.exports===xg,Xh=nS?ur.Buffer:void 0,rS=Xh?Xh.isBuffer:void 0,iS=rS||tS;const bl=iS;var oS="[object Arguments]",sS="[object Array]",aS="[object Boolean]",lS="[object Date]",cS="[object Error]",dS="[object Function]",uS="[object Map]",fS="[object Number]",hS="[object Object]",pS="[object RegExp]",mS="[object Set]",gS="[object String]",yS="[object WeakMap]",vS="[object ArrayBuffer]",bS="[object DataView]",AS="[object Float32Array]",xS="[object Float64Array]",ES="[object Int8Array]",wS="[object Int16Array]",CS="[object Int32Array]",SS="[object Uint8Array]",TS="[object Uint8ClampedArray]",kS="[object Uint16Array]",IS="[object Uint32Array]",Tt={};Tt[AS]=Tt[xS]=Tt[ES]=Tt[wS]=Tt[CS]=Tt[SS]=Tt[TS]=Tt[kS]=Tt[IS]=!0;Tt[oS]=Tt[sS]=Tt[vS]=Tt[aS]=Tt[bS]=Tt[lS]=Tt[cS]=Tt[dS]=Tt[uS]=Tt[fS]=Tt[hS]=Tt[pS]=Tt[mS]=Tt[gS]=Tt[yS]=!1;function LS(n){return qr(n)&&Nu(n.length)&&!!Tt[Fi(n)]}function RS(n){return function(e){return n(e)}}var Eg=typeof Sn=="object"&&Sn&&!Sn.nodeType&&Sn,_s=Eg&&typeof Tn=="object"&&Tn&&!Tn.nodeType&&Tn,_S=_s&&_s.exports===Eg,Pc=_S&&gg.process,DS=function(){try{var n=_s&&_s.require&&_s.require("util").types;return n||Pc&&Pc.binding&&Pc.binding("util")}catch{}}();const Zh=DS;var Qh=Zh&&Zh.isTypedArray,PS=Qh?RS(Qh):LS;const $u=PS;var BS=Object.prototype,OS=BS.hasOwnProperty;function wg(n,e){var t=Pn(n),r=!t&&vl(n),i=!t&&!r&&bl(n),o=!t&&!r&&!i&&$u(n),s=t||r||i||o,a=s?XC(n.length,String):[],l=a.length;for(var c in n)(e||OS.call(n,c))&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Fu(c,l)))&&a.push(c);return a}function Cg(n,e){return function(t){return n(e(t))}}var FS=Cg(Object.keys,Object);const MS=FS;var NS=Object.prototype,zS=NS.hasOwnProperty;function $S(n){if(!zu(n))return MS(n);var e=[];for(var t in Object(n))zS.call(n,t)&&t!="constructor"&&e.push(t);return e}function Uu(n){return Po(n)?wg(n):$S(n)}function US(n){var e=[];if(n!=null)for(var t in Object(n))e.push(t);return e}var HS=Object.prototype,WS=HS.hasOwnProperty;function jS(n){if(!Jr(n))return US(n);var e=zu(n),t=[];for(var r in n)r=="constructor"&&(e||!WS.call(n,r))||t.push(r);return t}function Sg(n){return Po(n)?wg(n,!0):jS(n)}var GS=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,KS=/^\w*$/;function Hu(n,e){if(Pn(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||Pu(n)?!0:KS.test(n)||!GS.test(n)||e!=null&&n in Object(e)}var VS=Ni(Object,"create");const Us=VS;function qS(){this.__data__=Us?Us(null):{},this.size=0}function YS(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var XS="__lodash_hash_undefined__",ZS=Object.prototype,QS=ZS.hasOwnProperty;function JS(n){var e=this.__data__;if(Us){var t=e[n];return t===XS?void 0:t}return QS.call(e,n)?e[n]:void 0}var eT=Object.prototype,tT=eT.hasOwnProperty;function nT(n){var e=this.__data__;return Us?e[n]!==void 0:tT.call(e,n)}var rT="__lodash_hash_undefined__";function iT(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Us&&e===void 0?rT:e,this}function _i(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}_i.prototype.clear=qS;_i.prototype.delete=YS;_i.prototype.get=JS;_i.prototype.has=nT;_i.prototype.set=iT;function oT(){this.__data__=[],this.size=0}function Xl(n,e){for(var t=n.length;t--;)if(Zs(n[t][0],e))return t;return-1}var sT=Array.prototype,aT=sT.splice;function lT(n){var e=this.__data__,t=Xl(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():aT.call(e,t,1),--this.size,!0}function cT(n){var e=this.__data__,t=Xl(e,n);return t<0?void 0:e[t][1]}function dT(n){return Xl(this.__data__,n)>-1}function uT(n,e){var t=this.__data__,r=Xl(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}function Rr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Rr.prototype.clear=oT;Rr.prototype.delete=lT;Rr.prototype.get=cT;Rr.prototype.has=dT;Rr.prototype.set=uT;var fT=Ni(ur,"Map");const Hs=fT;function hT(){this.size=0,this.__data__={hash:new _i,map:new(Hs||Rr),string:new _i}}function pT(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Zl(n,e){var t=n.__data__;return pT(e)?t[typeof e=="string"?"string":"hash"]:t.map}function mT(n){var e=Zl(this,n).delete(n);return this.size-=e?1:0,e}function gT(n){return Zl(this,n).get(n)}function yT(n){return Zl(this,n).has(n)}function vT(n,e){var t=Zl(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}function _r(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}_r.prototype.clear=hT;_r.prototype.delete=mT;_r.prototype.get=gT;_r.prototype.has=yT;_r.prototype.set=vT;var bT="Expected a function";function Wu(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(bT);var t=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=t.cache;if(o.has(i))return o.get(i);var s=n.apply(this,r);return t.cache=o.set(i,s)||o,s};return t.cache=new(Wu.Cache||_r),t}Wu.Cache=_r;var AT=500;function xT(n){var e=Wu(n,function(r){return t.size===AT&&t.clear(),r}),t=e.cache;return e}var ET=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wT=/\\(\\)?/g,CT=xT(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(ET,function(t,r,i,o){e.push(i?o.replace(wT,"$1"):r||t)}),e});const ST=CT;function Tg(n){return n==null?"":bg(n)}function kg(n,e){return Pn(n)?n:Hu(n,e)?[n]:ST(Tg(n))}var TT=1/0;function Ql(n){if(typeof n=="string"||Pu(n))return n;var e=n+"";return e=="0"&&1/n==-TT?"-0":e}function Ig(n,e){e=kg(e,n);for(var t=0,r=e.length;n!=null&&t<r;)n=n[Ql(e[t++])];return t&&t==r?n:void 0}function kT(n,e,t){var r=n==null?void 0:Ig(n,e);return r===void 0?t:r}function IT(n,e){for(var t=-1,r=e.length,i=n.length;++t<r;)n[i+t]=e[t];return n}var LT=Cg(Object.getPrototypeOf,Object);const Lg=LT;var RT="[object Object]",_T=Function.prototype,DT=Object.prototype,Rg=_T.toString,PT=DT.hasOwnProperty,BT=Rg.call(Object);function OT(n){if(!qr(n)||Fi(n)!=RT)return!1;var e=Lg(n);if(e===null)return!0;var t=PT.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Rg.call(t)==BT}function FT(n,e,t){var r=-1,i=n.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(i);++r<i;)o[r]=n[r+e];return o}function MT(n,e,t){var r=n.length;return t=t===void 0?r:t,!e&&t>=r?n:FT(n,e,t)}var NT="\\ud800-\\udfff",zT="\\u0300-\\u036f",$T="\\ufe20-\\ufe2f",UT="\\u20d0-\\u20ff",HT=zT+$T+UT,WT="\\ufe0e\\ufe0f",jT="\\u200d",GT=RegExp("["+jT+NT+HT+WT+"]");function _g(n){return GT.test(n)}function KT(n){return n.split("")}var Dg="\\ud800-\\udfff",VT="\\u0300-\\u036f",qT="\\ufe20-\\ufe2f",YT="\\u20d0-\\u20ff",XT=VT+qT+YT,ZT="\\ufe0e\\ufe0f",QT="["+Dg+"]",_d="["+XT+"]",Dd="\\ud83c[\\udffb-\\udfff]",JT="(?:"+_d+"|"+Dd+")",Pg="[^"+Dg+"]",Bg="(?:\\ud83c[\\udde6-\\uddff]){2}",Og="[\\ud800-\\udbff][\\udc00-\\udfff]",e2="\\u200d",Fg=JT+"?",Mg="["+ZT+"]?",t2="(?:"+e2+"(?:"+[Pg,Bg,Og].join("|")+")"+Mg+Fg+")*",n2=Mg+Fg+t2,r2="(?:"+[Pg+_d+"?",_d,Bg,Og,QT].join("|")+")",i2=RegExp(Dd+"(?="+Dd+")|"+r2+n2,"g");function o2(n){return n.match(i2)||[]}function s2(n){return _g(n)?o2(n):KT(n)}function a2(n){return function(e){e=Tg(e);var t=_g(e)?s2(e):void 0,r=t?t[0]:e.charAt(0),i=t?MT(t,1).join(""):e.slice(1);return r[n]()+i}}var l2=a2("toUpperCase");const c2=l2;function d2(){this.__data__=new Rr,this.size=0}function u2(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function f2(n){return this.__data__.get(n)}function h2(n){return this.__data__.has(n)}var p2=200;function m2(n,e){var t=this.__data__;if(t instanceof Rr){var r=t.__data__;if(!Hs||r.length<p2-1)return r.push([n,e]),this.size=++t.size,this;t=this.__data__=new _r(r)}return t.set(n,e),this.size=t.size,this}function lr(n){var e=this.__data__=new Rr(n);this.size=e.size}lr.prototype.clear=d2;lr.prototype.delete=u2;lr.prototype.get=f2;lr.prototype.has=h2;lr.prototype.set=m2;var Ng=typeof Sn=="object"&&Sn&&!Sn.nodeType&&Sn,Jh=Ng&&typeof Tn=="object"&&Tn&&!Tn.nodeType&&Tn,g2=Jh&&Jh.exports===Ng,ep=g2?ur.Buffer:void 0,tp=ep?ep.allocUnsafe:void 0;function y2(n,e){if(e)return n.slice();var t=n.length,r=tp?tp(t):new n.constructor(t);return n.copy(r),r}function v2(n,e){for(var t=-1,r=n==null?0:n.length,i=0,o=[];++t<r;){var s=n[t];e(s,t,n)&&(o[i++]=s)}return o}function b2(){return[]}var A2=Object.prototype,x2=A2.propertyIsEnumerable,np=Object.getOwnPropertySymbols,E2=np?function(n){return n==null?[]:(n=Object(n),v2(np(n),function(e){return x2.call(n,e)}))}:b2;const w2=E2;function C2(n,e,t){var r=e(n);return Pn(n)?r:IT(r,t(n))}function rp(n){return C2(n,Uu,w2)}var S2=Ni(ur,"DataView");const Pd=S2;var T2=Ni(ur,"Promise");const Bd=T2;var k2=Ni(ur,"Set");const Od=k2;var ip="[object Map]",I2="[object Object]",op="[object Promise]",sp="[object Set]",ap="[object WeakMap]",lp="[object DataView]",L2=Mi(Pd),R2=Mi(Hs),_2=Mi(Bd),D2=Mi(Od),P2=Mi(Rd),mi=Fi;(Pd&&mi(new Pd(new ArrayBuffer(1)))!=lp||Hs&&mi(new Hs)!=ip||Bd&&mi(Bd.resolve())!=op||Od&&mi(new Od)!=sp||Rd&&mi(new Rd)!=ap)&&(mi=function(n){var e=Fi(n),t=e==I2?n.constructor:void 0,r=t?Mi(t):"";if(r)switch(r){case L2:return lp;case R2:return ip;case _2:return op;case D2:return sp;case P2:return ap}return e});const cp=mi;var B2=ur.Uint8Array;const Al=B2;function O2(n){var e=new n.constructor(n.byteLength);return new Al(e).set(new Al(n)),e}function F2(n,e){var t=e?O2(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}function M2(n){return typeof n.constructor=="function"&&!zu(n)?SC(Lg(n)):{}}var N2="__lodash_hash_undefined__";function z2(n){return this.__data__.set(n,N2),this}function $2(n){return this.__data__.has(n)}function xl(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new _r;++e<t;)this.add(n[e])}xl.prototype.add=xl.prototype.push=z2;xl.prototype.has=$2;function U2(n,e){for(var t=-1,r=n==null?0:n.length;++t<r;)if(e(n[t],t,n))return!0;return!1}function H2(n,e){return n.has(e)}var W2=1,j2=2;function zg(n,e,t,r,i,o){var s=t&W2,a=n.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var c=o.get(n),d=o.get(e);if(c&&d)return c==e&&d==n;var u=-1,f=!0,h=t&j2?new xl:void 0;for(o.set(n,e),o.set(e,n);++u<a;){var p=n[u],m=e[u];if(r)var g=s?r(m,p,u,e,n,o):r(p,m,u,n,e,o);if(g!==void 0){if(g)continue;f=!1;break}if(h){if(!U2(e,function(y,E){if(!H2(h,E)&&(p===y||i(p,y,t,r,o)))return h.push(E)})){f=!1;break}}else if(!(p===m||i(p,m,t,r,o))){f=!1;break}}return o.delete(n),o.delete(e),f}function G2(n){var e=-1,t=Array(n.size);return n.forEach(function(r,i){t[++e]=[i,r]}),t}function K2(n){var e=-1,t=Array(n.size);return n.forEach(function(r){t[++e]=r}),t}var V2=1,q2=2,Y2="[object Boolean]",X2="[object Date]",Z2="[object Error]",Q2="[object Map]",J2="[object Number]",ek="[object RegExp]",tk="[object Set]",nk="[object String]",rk="[object Symbol]",ik="[object ArrayBuffer]",ok="[object DataView]",dp=Vr?Vr.prototype:void 0,Bc=dp?dp.valueOf:void 0;function sk(n,e,t,r,i,o,s){switch(t){case ok:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case ik:return!(n.byteLength!=e.byteLength||!o(new Al(n),new Al(e)));case Y2:case X2:case J2:return Zs(+n,+e);case Z2:return n.name==e.name&&n.message==e.message;case ek:case nk:return n==e+"";case Q2:var a=G2;case tk:var l=r&V2;if(a||(a=K2),n.size!=e.size&&!l)return!1;var c=s.get(n);if(c)return c==e;r|=q2,s.set(n,e);var d=zg(a(n),a(e),r,i,o,s);return s.delete(n),d;case rk:if(Bc)return Bc.call(n)==Bc.call(e)}return!1}var ak=1,lk=Object.prototype,ck=lk.hasOwnProperty;function dk(n,e,t,r,i,o){var s=t&ak,a=rp(n),l=a.length,c=rp(e),d=c.length;if(l!=d&&!s)return!1;for(var u=l;u--;){var f=a[u];if(!(s?f in e:ck.call(e,f)))return!1}var h=o.get(n),p=o.get(e);if(h&&p)return h==e&&p==n;var m=!0;o.set(n,e),o.set(e,n);for(var g=s;++u<l;){f=a[u];var y=n[f],E=e[f];if(r)var S=s?r(E,y,f,e,n,o):r(y,E,f,n,e,o);if(!(S===void 0?y===E||i(y,E,t,r,o):S)){m=!1;break}g||(g=f=="constructor")}if(m&&!g){var C=n.constructor,k=e.constructor;C!=k&&"constructor"in n&&"constructor"in e&&!(typeof C=="function"&&C instanceof C&&typeof k=="function"&&k instanceof k)&&(m=!1)}return o.delete(n),o.delete(e),m}var uk=1,up="[object Arguments]",fp="[object Array]",ka="[object Object]",fk=Object.prototype,hp=fk.hasOwnProperty;function hk(n,e,t,r,i,o){var s=Pn(n),a=Pn(e),l=s?fp:cp(n),c=a?fp:cp(e);l=l==up?ka:l,c=c==up?ka:c;var d=l==ka,u=c==ka,f=l==c;if(f&&bl(n)){if(!bl(e))return!1;s=!0,d=!1}if(f&&!d)return o||(o=new lr),s||$u(n)?zg(n,e,t,r,i,o):sk(n,e,l,t,r,i,o);if(!(t&uk)){var h=d&&hp.call(n,"__wrapped__"),p=u&&hp.call(e,"__wrapped__");if(h||p){var m=h?n.value():n,g=p?e.value():e;return o||(o=new lr),i(m,g,t,r,o)}}return f?(o||(o=new lr),dk(n,e,t,r,i,o)):!1}function ju(n,e,t,r,i){return n===e?!0:n==null||e==null||!qr(n)&&!qr(e)?n!==n&&e!==e:hk(n,e,t,r,ju,i)}var pk=1,mk=2;function gk(n,e,t,r){var i=t.length,o=i,s=!r;if(n==null)return!o;for(n=Object(n);i--;){var a=t[i];if(s&&a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++i<o;){a=t[i];var l=a[0],c=n[l],d=a[1];if(s&&a[2]){if(c===void 0&&!(l in n))return!1}else{var u=new lr;if(r)var f=r(c,d,l,n,e,u);if(!(f===void 0?ju(d,c,pk|mk,r,u):f))return!1}}return!0}function $g(n){return n===n&&!Jr(n)}function yk(n){for(var e=Uu(n),t=e.length;t--;){var r=e[t],i=n[r];e[t]=[r,i,$g(i)]}return e}function Ug(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==void 0||n in Object(t))}}function vk(n){var e=yk(n);return e.length==1&&e[0][2]?Ug(e[0][0],e[0][1]):function(t){return t===n||gk(t,n,e)}}function bk(n,e){return n!=null&&e in Object(n)}function Ak(n,e,t){e=kg(e,n);for(var r=-1,i=e.length,o=!1;++r<i;){var s=Ql(e[r]);if(!(o=n!=null&&t(n,s)))break;n=n[s]}return o||++r!=i?o:(i=n==null?0:n.length,!!i&&Nu(i)&&Fu(s,i)&&(Pn(n)||vl(n)))}function xk(n,e){return n!=null&&Ak(n,e,bk)}var Ek=1,wk=2;function Ck(n,e){return Hu(n)&&$g(e)?Ug(Ql(n),e):function(t){var r=kT(t,n);return r===void 0&&r===e?xk(t,n):ju(e,r,Ek|wk)}}function Sk(n){return function(e){return e==null?void 0:e[n]}}function Tk(n){return function(e){return Ig(e,n)}}function kk(n){return Hu(n)?Sk(Ql(n)):Tk(n)}function Ik(n){return typeof n=="function"?n:n==null?Bu:typeof n=="object"?Pn(n)?Ck(n[0],n[1]):vk(n):kk(n)}function Lk(n){return function(e,t,r){for(var i=-1,o=Object(e),s=r(e),a=s.length;a--;){var l=s[n?a:++i];if(t(o[l],l,o)===!1)break}return e}}var Rk=Lk();const Hg=Rk;function _k(n,e){return n&&Hg(n,e,Uu)}function Dk(n,e){return function(t,r){if(t==null)return t;if(!Po(t))return n(t,r);for(var i=t.length,o=e?i:-1,s=Object(t);(e?o--:++o<i)&&r(s[o],o,s)!==!1;);return t}}var Pk=Dk(_k);const Bk=Pk;function Fd(n,e,t){(t!==void 0&&!Zs(n[e],t)||t===void 0&&!(e in n))&&Mu(n,e,t)}function Ok(n){return qr(n)&&Po(n)}function Md(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function Fk(n){return WC(n,Sg(n))}function Mk(n,e,t,r,i,o,s){var a=Md(n,t),l=Md(e,t),c=s.get(l);if(c){Fd(n,t,c);return}var d=o?o(a,l,t+"",n,e,s):void 0,u=d===void 0;if(u){var f=Pn(l),h=!f&&bl(l),p=!f&&!h&&$u(l);d=l,f||h||p?Pn(a)?d=a:Ok(a)?d=kC(a):h?(u=!1,d=y2(l,!0)):p?(u=!1,d=F2(l,!0)):d=[]:OT(l)||vl(l)?(d=a,vl(a)?d=Fk(a):(!Jr(a)||Ou(a))&&(d=M2(l))):u=!1}u&&(s.set(l,d),i(d,l,r,o,s),s.delete(l)),Fd(n,t,d)}function Wg(n,e,t,r,i){n!==e&&Hg(e,function(o,s){if(i||(i=new lr),Jr(o))Mk(n,e,s,t,Wg,r,i);else{var a=r?r(Md(n,s),o,s+"",n,e,i):void 0;a===void 0&&(a=o),Fd(n,s,a)}},Sg)}function Nk(n,e){var t=-1,r=Po(n)?Array(n.length):[];return Bk(n,function(i,o,s){r[++t]=e(i,o,s)}),r}function zk(n,e){var t=Pn(n)?vg:Nk;return t(n,Ik(e))}var $k=qC(function(n,e,t){Wg(n,e,t)});const Ia=$k,zi={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:Uk,fontFamily:Hk,lineHeight:Wk}=zi,jg=xe("body",`
 margin: 0;
 font-size: ${Uk};
 font-family: ${Hk};
 line-height: ${Wk};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[xe("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),$i="n-config-provider",Ws="naive-ui-style";function ft(n,e,t,r,i,o){const s=Do(),a=rt($i,null);if(t){const c=()=>{const d=o==null?void 0:o.value;t.mount({id:d===void 0?e:d+e,head:!0,props:{bPrefix:d?`.${d}-`:void 0},anchorMetaName:Ws,ssr:s,parent:a==null?void 0:a.styleMountTarget}),a!=null&&a.preflightStyleDisabled||jg.mount({id:"n-global",head:!0,anchorMetaName:Ws,ssr:s,parent:a==null?void 0:a.styleMountTarget})};s?c():qs(c)}return Te(()=>{var c;const{theme:{common:d,self:u,peers:f={}}={},themeOverrides:h={},builtinThemeOverrides:p={}}=i,{common:m,peers:g}=h,{common:y=void 0,[n]:{common:E=void 0,self:S=void 0,peers:C={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:k=void 0,[n]:M={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:T,peers:z={}}=M,F=Ia({},d||E||y||r.common,k,T,m),O=Ia((c=u||S||r.self)===null||c===void 0?void 0:c(F),p,M,h);return{common:F,self:O,peers:Ia({},r.peers,C,f),peerOverrides:Ia({},p.peers,z,g)}})}ft.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const jk="n";function mn(n={},e={defaultBordered:!0}){const t=rt($i,null);return{inlineThemeDisabled:t==null?void 0:t.inlineThemeDisabled,mergedRtlRef:t==null?void 0:t.mergedRtlRef,mergedComponentPropsRef:t==null?void 0:t.mergedComponentPropsRef,mergedBreakpointsRef:t==null?void 0:t.mergedBreakpointsRef,mergedBorderedRef:Te(()=>{var r,i;const{bordered:o}=n;return o!==void 0?o:(i=(r=t==null?void 0:t.mergedBorderedRef.value)!==null&&r!==void 0?r:e.defaultBordered)!==null&&i!==void 0?i:!0}),mergedClsPrefixRef:t?t.mergedClsPrefixRef:rx(jk),namespaceRef:Te(()=>t==null?void 0:t.mergedNamespaceRef.value)}}const Gk={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:n=>`Please load all ${n}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"YYYY-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:n=>`Total ${n} items`,selected:n=>`${n} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},Kk=Gk;function Oc(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}function fs(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&n.formattingValues){const s=n.defaultFormattingWidth||n.defaultWidth,a=t!=null&&t.width?String(t.width):s;i=n.formattingValues[a]||n.formattingValues[s]}else{const s=n.defaultWidth,a=t!=null&&t.width?String(t.width):n.defaultWidth;i=n.values[a]||n.values[s]}const o=n.argumentCallback?n.argumentCallback(e):e;return i[o]}}function hs(n){return(e,t={})=>{const r=t.width,i=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],o=e.match(i);if(!o)return null;const s=o[0],a=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(a)?qk(a,u=>u.test(s)):Vk(a,u=>u.test(s));let c;c=n.valueCallback?n.valueCallback(l):l,c=t.valueCallback?t.valueCallback(c):c;const d=e.slice(s.length);return{value:c,rest:d}}}function Vk(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function qk(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function Yk(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const i=r[0],o=e.match(n.parsePattern);if(!o)return null;let s=n.valueCallback?n.valueCallback(o[0]):o[0];s=t.valueCallback?t.valueCallback(s):s;const a=e.slice(i.length);return{value:s,rest:a}}}const Xk={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Zk=(n,e,t)=>{let r;const i=Xk[n];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},Qk={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Jk=(n,e,t,r)=>Qk[n],eI={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},tI={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nI={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rI={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},iI={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},oI={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},sI=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},aI={ordinalNumber:sI,era:fs({values:eI,defaultWidth:"wide"}),quarter:fs({values:tI,defaultWidth:"wide",argumentCallback:n=>n-1}),month:fs({values:nI,defaultWidth:"wide"}),day:fs({values:rI,defaultWidth:"wide"}),dayPeriod:fs({values:iI,defaultWidth:"wide",formattingValues:oI,defaultFormattingWidth:"wide"})},lI=/^(\d+)(th|st|nd|rd)?/i,cI=/\d+/i,dI={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},uI={any:[/^b/i,/^(a|c)/i]},fI={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},hI={any:[/1/i,/2/i,/3/i,/4/i]},pI={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},mI={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gI={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yI={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vI={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},bI={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},AI={ordinalNumber:Yk({matchPattern:lI,parsePattern:cI,valueCallback:n=>parseInt(n,10)}),era:hs({matchPatterns:dI,defaultMatchWidth:"wide",parsePatterns:uI,defaultParseWidth:"any"}),quarter:hs({matchPatterns:fI,defaultMatchWidth:"wide",parsePatterns:hI,defaultParseWidth:"any",valueCallback:n=>n+1}),month:hs({matchPatterns:pI,defaultMatchWidth:"wide",parsePatterns:mI,defaultParseWidth:"any"}),day:hs({matchPatterns:gI,defaultMatchWidth:"wide",parsePatterns:yI,defaultParseWidth:"any"}),dayPeriod:hs({matchPatterns:vI,defaultMatchWidth:"any",parsePatterns:bI,defaultParseWidth:"any"})},xI={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},EI={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},wI={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},CI={date:Oc({formats:xI,defaultWidth:"full"}),time:Oc({formats:EI,defaultWidth:"full"}),dateTime:Oc({formats:wI,defaultWidth:"full"})},SI={code:"en-US",formatDistance:Zk,formatLong:CI,formatRelative:Jk,localize:aI,match:AI,options:{weekStartsOn:0,firstWeekContainsDate:1}},TI={name:"en-US",locale:SI},kI=TI;function II(n){const{mergedLocaleRef:e,mergedDateLocaleRef:t}=rt($i,null)||{},r=Te(()=>{var o,s;return(s=(o=e==null?void 0:e.value)===null||o===void 0?void 0:o[n])!==null&&s!==void 0?s:Kk[n]});return{dateLocaleRef:Te(()=>{var o;return(o=t==null?void 0:t.value)!==null&&o!==void 0?o:kI}),localeRef:r}}function Bo(n,e,t){if(!e)return;const r=Do(),i=rt($i,null),o=()=>{const s=t.value;e.mount({id:s===void 0?n:s+n,head:!0,anchorMetaName:Ws,props:{bPrefix:s?`.${s}-`:void 0},ssr:r,parent:i==null?void 0:i.styleMountTarget}),i!=null&&i.preflightStyleDisabled||jg.mount({id:"n-global",head:!0,anchorMetaName:Ws,ssr:r,parent:i==null?void 0:i.styleMountTarget})};r?o():qs(o)}function xn(n,e,t,r){t||aE("useThemeClass","cssVarsRef is not passed");const i=rt($i,null),o=i==null?void 0:i.mergedThemeHashRef,s=i==null?void 0:i.styleMountTarget,a=De(""),l=Do();let c;const d=`__${n}`,u=()=>{let f=d;const h=e?e.value:void 0,p=o==null?void 0:o.value;p&&(f+=`-${p}`),h&&(f+=`-${h}`);const{themeOverrides:m,builtinThemeOverrides:g}=r;m&&(f+=`-${Td(JSON.stringify(m))}`),g&&(f+=`-${Td(JSON.stringify(g))}`),a.value=f,c=()=>{const y=t.value;let E="";for(const S in y)E+=`${S}: ${y[S]};`;xe(`.${f}`,E).mount({id:f,ssr:l,parent:s}),c=void 0}};return kr(()=>{u()}),{themeClass:a,onRender:()=>{c==null||c()}}}function Qs(n,e,t){if(!e)return;const r=Do(),i=Te(()=>{const{value:a}=e;if(!a)return;const l=a[n];if(l)return l}),o=rt($i,null),s=()=>{kr(()=>{const{value:a}=t,l=`${a}${n}Rtl`;if(kE(l,r))return;const{value:c}=i;c&&c.style.mount({id:l,head:!0,anchorMetaName:Ws,props:{bPrefix:a?`.${a}-`:void 0},ssr:r,parent:o==null?void 0:o.styleMountTarget})})};return r?s():qs(s),i}function Oo(n,e){return Ve({name:c2(n),setup(){var t;const r=(t=rt($i,null))===null||t===void 0?void 0:t.mergedIconsRef;return()=>{var i;const o=(i=r==null?void 0:r.value)===null||i===void 0?void 0:i[n];return o?o():e}}})}const Gg=Ve({name:"ChevronRight",render(){return j("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),LI=Oo("close",j("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},j("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},j("g",{fill:"currentColor","fill-rule":"nonzero"},j("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),RI=Ve({name:"Eye",render(){return j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},j("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),j("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),_I=Ve({name:"EyeOff",render(){return j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},j("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),j("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),j("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),j("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),j("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),DI=Oo("error",j("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},j("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},j("g",{"fill-rule":"nonzero"},j("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),PI=Oo("info",j("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},j("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},j("g",{"fill-rule":"nonzero"},j("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),BI=Oo("success",j("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},j("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},j("g",{"fill-rule":"nonzero"},j("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),OI=Oo("warning",j("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},j("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},j("g",{"fill-rule":"nonzero"},j("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),FI=Ve({name:"ChevronDown",render(){return j("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),MI=Oo("clear",j("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},j("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},j("g",{fill:"currentColor","fill-rule":"nonzero"},j("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),NI=Ve({name:"ChevronDownFilled",render(){return j("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Gu=Ve({name:"BaseIconSwitchTransition",setup(n,{slots:e}){const t=ku();return()=>j(wo,{name:"icon-switch-transition",appear:t.value},e)}}),Ku=Ve({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(n,{slots:e}){function t(a){n.width?a.style.maxWidth=`${a.offsetWidth}px`:a.style.maxHeight=`${a.offsetHeight}px`,a.offsetWidth}function r(a){n.width?a.style.maxWidth="0":a.style.maxHeight="0",a.offsetWidth;const{onLeave:l}=n;l&&l()}function i(a){n.width?a.style.maxWidth="":a.style.maxHeight="";const{onAfterLeave:l}=n;l&&l()}function o(a){if(a.style.transition="none",n.width){const l=a.offsetWidth;a.style.maxWidth="0",a.offsetWidth,a.style.transition="",a.style.maxWidth=`${l}px`}else if(n.reverse)a.style.maxHeight=`${a.offsetHeight}px`,a.offsetHeight,a.style.transition="",a.style.maxHeight="0";else{const l=a.offsetHeight;a.style.maxHeight="0",a.offsetWidth,a.style.transition="",a.style.maxHeight=`${l}px`}a.offsetWidth}function s(a){var l;n.width?a.style.maxWidth="":n.reverse||(a.style.maxHeight=""),(l=n.onAfterEnter)===null||l===void 0||l.call(n)}return()=>{const{group:a,width:l,appear:c,mode:d}=n,u=a?U1:wo,f={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:c,onEnter:o,onAfterEnter:s,onBeforeLeave:t,onLeave:r,onAfterLeave:i};return a||(f.mode=d),j(u,f,e)}}}),zI=we("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[xe("svg",`
 height: 1em;
 width: 1em;
 `)]),Yr=Ve({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(n){Bo("-base-icon",zI,bt(n,"clsPrefix"))},render(){return j("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),$I=we("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[Ie("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),xe("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),Zt("disabled",[xe("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),xe("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),xe("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),xe("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),xe("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),Ie("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),Ie("round",[xe("&::before",`
 border-radius: 50%;
 `)])]),Kg=Ve({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(n){return Bo("-base-close",$I,bt(n,"clsPrefix")),()=>{const{clsPrefix:e,disabled:t,absolute:r,round:i,isButtonTag:o}=n;return j(o?"button":"div",{type:o?"button":void 0,tabindex:t||!n.focusable?-1:0,"aria-disabled":t,"aria-label":"close",role:o?void 0:"button",disabled:t,class:[`${e}-base-close`,r&&`${e}-base-close--absolute`,t&&`${e}-base-close--disabled`,i&&`${e}-base-close--round`],onMousedown:a=>{n.focusable||a.preventDefault()},onClick:n.onClick},j(Yr,{clsPrefix:e},{default:()=>j(LI,null)}))}}}),{cubicBezierEaseInOut:UI}=zi;function El({originalTransform:n="",left:e=0,top:t=0,transition:r=`all .3s ${UI} !important`}={}){return[xe("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${n} scale(0.75)`,left:e,top:t,opacity:0}),xe("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${n}`,left:e,top:t,opacity:1}),xe("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:t,transition:r})]}const HI=xe([xe("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),we("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[he("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[El()]),he("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[El({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),he("container",`
 animation: rotator 3s linear infinite both;
 `,[he("icon",`
 height: 1em;
 width: 1em;
 `)])])]),Fc="1.6s",WI={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Vg=Ve({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},WI),setup(n){Bo("-base-loading",HI,bt(n,"clsPrefix"))},render(){const{clsPrefix:n,radius:e,strokeWidth:t,stroke:r,scale:i}=this,o=e/i;return j("div",{class:`${n}-base-loading`,role:"img","aria-label":"loading"},j(Gu,null,{default:()=>this.show?j("div",{key:"icon",class:`${n}-base-loading__transition-wrapper`},j("div",{class:`${n}-base-loading__container`},j("svg",{class:`${n}-base-loading__icon`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},j("g",null,j("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${o} ${o};270 ${o} ${o}`,begin:"0s",dur:Fc,fill:"freeze",repeatCount:"indefinite"}),j("circle",{class:`${n}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:o,cy:o,r:e-t/2,"stroke-dasharray":5.67*e,"stroke-dashoffset":18.48*e},j("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${o} ${o};135 ${o} ${o};450 ${o} ${o}`,begin:"0s",dur:Fc,fill:"freeze",repeatCount:"indefinite"}),j("animate",{attributeName:"stroke-dashoffset",values:`${5.67*e};${1.42*e};${5.67*e}`,begin:"0s",dur:Fc,fill:"freeze",repeatCount:"indefinite"})))))):j("div",{key:"placeholder",class:`${n}-base-loading__placeholder`},this.$slots)}))}});function pp(n){return Array.isArray(n)?n:[n]}const Nd={STOP:"STOP"};function qg(n,e){const t=e(n);n.children!==void 0&&t!==Nd.STOP&&n.children.forEach(r=>qg(r,e))}function jI(n,e={}){const{preserveGroup:t=!1}=e,r=[],i=t?s=>{s.isLeaf||(r.push(s.key),o(s.children))}:s=>{s.isLeaf||(s.isGroup||r.push(s.key),o(s.children))};function o(s){s.forEach(i)}return o(n),r}function GI(n,e){const{isLeaf:t}=n;return t!==void 0?t:!e(n)}function KI(n){return n.children}function VI(n){return n.key}function qI(){return!1}function YI(n,e){const{isLeaf:t}=n;return!(t===!1&&!Array.isArray(e(n)))}function XI(n){return n.disabled===!0}function ZI(n,e){return n.isLeaf===!1&&!Array.isArray(e(n))}function Mc(n){var e;return n==null?[]:Array.isArray(n)?n:(e=n.checkedKeys)!==null&&e!==void 0?e:[]}function Nc(n){var e;return n==null||Array.isArray(n)?[]:(e=n.indeterminateKeys)!==null&&e!==void 0?e:[]}function QI(n,e){const t=new Set(n);return e.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function JI(n,e){const t=new Set(n);return e.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function eL(n){return(n==null?void 0:n.type)==="group"}class tL extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function nL(n,e,t,r){return wl(e.concat(n),t,r,!1)}function rL(n,e){const t=new Set;return n.forEach(r=>{const i=e.treeNodeMap.get(r);if(i!==void 0){let o=i.parent;for(;o!==null&&!(o.disabled||t.has(o.key));)t.add(o.key),o=o.parent}}),t}function iL(n,e,t,r){const i=wl(e,t,r,!1),o=wl(n,t,r,!0),s=rL(n,t),a=[];return i.forEach(l=>{(o.has(l)||s.has(l))&&a.push(l)}),a.forEach(l=>i.delete(l)),i}function zc(n,e){const{checkedKeys:t,keysToCheck:r,keysToUncheck:i,indeterminateKeys:o,cascade:s,leafOnly:a,checkStrategy:l,allowNotLoaded:c}=n;if(!s)return r!==void 0?{checkedKeys:QI(t,r),indeterminateKeys:Array.from(o)}:i!==void 0?{checkedKeys:JI(t,i),indeterminateKeys:Array.from(o)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(o)};const{levelTreeNodeMap:d}=e;let u;i!==void 0?u=iL(i,t,e,c):r!==void 0?u=nL(r,t,e,c):u=wl(t,e,c,!1);const f=l==="parent",h=l==="child"||a,p=u,m=new Set,g=Math.max.apply(null,Array.from(d.keys()));for(let y=g;y>=0;y-=1){const E=y===0,S=d.get(y);for(const C of S){if(C.isLeaf)continue;const{key:k,shallowLoaded:M}=C;if(h&&M&&C.children.forEach(O=>{!O.disabled&&!O.isLeaf&&O.shallowLoaded&&p.has(O.key)&&p.delete(O.key)}),C.disabled||!M)continue;let T=!0,z=!1,F=!0;for(const O of C.children){const V=O.key;if(!O.disabled){if(F&&(F=!1),p.has(V))z=!0;else if(m.has(V)){z=!0,T=!1;break}else if(T=!1,z)break}}T&&!F?(f&&C.children.forEach(O=>{!O.disabled&&p.has(O.key)&&p.delete(O.key)}),p.add(k)):z&&m.add(k),E&&h&&p.has(k)&&p.delete(k)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(m)}}function wl(n,e,t,r){const{treeNodeMap:i,getChildren:o}=e,s=new Set,a=new Set(n);return n.forEach(l=>{const c=i.get(l);c!==void 0&&qg(c,d=>{if(d.disabled)return Nd.STOP;const{key:u}=d;if(!s.has(u)&&(s.add(u),a.add(u),ZI(d.rawNode,o))){if(r)return Nd.STOP;if(!t)throw new tL}})}),a}function oL(n,{includeGroup:e=!1,includeSelf:t=!0},r){var i;const o=r.treeNodeMap;let s=n==null?null:(i=o.get(n))!==null&&i!==void 0?i:null;const a={keyPath:[],treeNodePath:[],treeNode:s};if(s!=null&&s.ignored)return a.treeNode=null,a;for(;s;)!s.ignored&&(e||!s.isGroup)&&a.treeNodePath.push(s),s=s.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(l=>l.key),a}function sL(n){if(n.length===0)return null;const e=n[0];return e.isGroup||e.ignored||e.disabled?e.getNext():e}function aL(n,e){const t=n.siblings,r=t.length,{index:i}=n;return e?t[(i+1)%r]:i===t.length-1?null:t[i+1]}function mp(n,e,{loop:t=!1,includeDisabled:r=!1}={}){const i=e==="prev"?lL:aL,o={reverse:e==="prev"};let s=!1,a=null;function l(c){if(c!==null){if(c===n){if(!s)s=!0;else if(!n.disabled&&!n.isGroup){a=n;return}}else if((!c.disabled||r)&&!c.ignored&&!c.isGroup){a=c;return}if(c.isGroup){const d=Vu(c,o);d!==null?a=d:l(i(c,t))}else{const d=i(c,!1);if(d!==null)l(d);else{const u=cL(c);u!=null&&u.isGroup?l(i(u,t)):t&&l(i(c,!0))}}}}return l(n),a}function lL(n,e){const t=n.siblings,r=t.length,{index:i}=n;return e?t[(i-1+r)%r]:i===0?null:t[i-1]}function cL(n){return n.parent}function Vu(n,e={}){const{reverse:t=!1}=e,{children:r}=n;if(r){const{length:i}=r,o=t?i-1:0,s=t?-1:i,a=t?-1:1;for(let l=o;l!==s;l+=a){const c=r[l];if(!c.disabled&&!c.ignored)if(c.isGroup){const d=Vu(c,e);if(d!==null)return d}else return c}}return null}const dL={getChild(){return this.ignored?null:Vu(this)},getParent(){const{parent:n}=this;return n!=null&&n.isGroup?n.getParent():n},getNext(n={}){return mp(this,"next",n)},getPrev(n={}){return mp(this,"prev",n)}};function uL(n,e){const t=e?new Set(e):void 0,r=[];function i(o){o.forEach(s=>{r.push(s),!(s.isLeaf||!s.children||s.ignored)&&(s.isGroup||t===void 0||t.has(s.key))&&i(s.children)})}return i(n),r}function fL(n,e){const t=n.key;for(;e;){if(e.key===t)return!0;e=e.parent}return!1}function Yg(n,e,t,r,i,o=null,s=0){const a=[];return n.forEach((l,c)=>{var d;const u=Object.create(r);if(u.rawNode=l,u.siblings=a,u.level=s,u.index=c,u.isFirstChild=c===0,u.isLastChild=c+1===n.length,u.parent=o,!u.ignored){const f=i(l);Array.isArray(f)&&(u.children=Yg(f,e,t,r,i,u,s+1))}a.push(u),e.set(u.key,u),t.has(s)||t.set(s,[]),(d=t.get(s))===null||d===void 0||d.push(u)}),a}function Ya(n,e={}){var t;const r=new Map,i=new Map,{getDisabled:o=XI,getIgnored:s=qI,getIsGroup:a=eL,getKey:l=VI}=e,c=(t=e.getChildren)!==null&&t!==void 0?t:KI,d=e.ignoreEmptyChildren?C=>{const k=c(C);return Array.isArray(k)?k.length?k:null:k}:c,u=Object.assign({get key(){return l(this.rawNode)},get disabled(){return o(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return GI(this.rawNode,d)},get shallowLoaded(){return YI(this.rawNode,d)},get ignored(){return s(this.rawNode)},contains(C){return fL(this,C)}},dL),f=Yg(n,r,i,u,d);function h(C){if(C==null)return null;const k=r.get(C);return k&&!k.isGroup&&!k.ignored?k:null}function p(C){if(C==null)return null;const k=r.get(C);return k&&!k.ignored?k:null}function m(C,k){const M=p(C);return M?M.getPrev(k):null}function g(C,k){const M=p(C);return M?M.getNext(k):null}function y(C){const k=p(C);return k?k.getParent():null}function E(C){const k=p(C);return k?k.getChild():null}const S={treeNodes:f,treeNodeMap:r,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:d,getFlattenedNodes(C){return uL(f,C)},getNode:h,getPrev:m,getNext:g,getParent:y,getChild:E,getFirstAvailableNode(){return sL(f)},getPath(C,k={}){return oL(C,k,S)},getCheckedKeys(C,k={}){const{cascade:M=!0,leafOnly:T=!1,checkStrategy:z="all",allowNotLoaded:F=!1}=k;return zc({checkedKeys:Mc(C),indeterminateKeys:Nc(C),cascade:M,leafOnly:T,checkStrategy:z,allowNotLoaded:F},S)},check(C,k,M={}){const{cascade:T=!0,leafOnly:z=!1,checkStrategy:F="all",allowNotLoaded:O=!1}=M;return zc({checkedKeys:Mc(k),indeterminateKeys:Nc(k),keysToCheck:C==null?[]:pp(C),cascade:T,leafOnly:z,checkStrategy:F,allowNotLoaded:O},S)},uncheck(C,k,M={}){const{cascade:T=!0,leafOnly:z=!1,checkStrategy:F="all",allowNotLoaded:O=!1}=M;return zc({checkedKeys:Mc(k),indeterminateKeys:Nc(k),keysToUncheck:C==null?[]:pp(C),cascade:T,leafOnly:z,checkStrategy:F,allowNotLoaded:O},S)},getNonLeafKeys(C={}){return jI(f,C)}};return S}const Ke={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},hL=Ri(Ke.neutralBase),Xg=Ri(Ke.neutralInvertBase),pL=`rgba(${Xg.slice(0,3).join(", ")}, `;function gp(n){return`${pL+String(n)})`}function rn(n){const e=Array.from(Xg);return e[3]=Number(n),bn(hL,e)}const mL=Object.assign(Object.assign({name:"common"},zi),{baseColor:Ke.neutralBase,primaryColor:Ke.primaryDefault,primaryColorHover:Ke.primaryHover,primaryColorPressed:Ke.primaryActive,primaryColorSuppl:Ke.primarySuppl,infoColor:Ke.infoDefault,infoColorHover:Ke.infoHover,infoColorPressed:Ke.infoActive,infoColorSuppl:Ke.infoSuppl,successColor:Ke.successDefault,successColorHover:Ke.successHover,successColorPressed:Ke.successActive,successColorSuppl:Ke.successSuppl,warningColor:Ke.warningDefault,warningColorHover:Ke.warningHover,warningColorPressed:Ke.warningActive,warningColorSuppl:Ke.warningSuppl,errorColor:Ke.errorDefault,errorColorHover:Ke.errorHover,errorColorPressed:Ke.errorActive,errorColorSuppl:Ke.errorSuppl,textColorBase:Ke.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:rn(Ke.alpha4),placeholderColor:rn(Ke.alpha4),placeholderColorDisabled:rn(Ke.alpha5),iconColor:rn(Ke.alpha4),iconColorHover:Aa(rn(Ke.alpha4),{lightness:.75}),iconColorPressed:Aa(rn(Ke.alpha4),{lightness:.9}),iconColorDisabled:rn(Ke.alpha5),opacity1:Ke.alpha1,opacity2:Ke.alpha2,opacity3:Ke.alpha3,opacity4:Ke.alpha4,opacity5:Ke.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:rn(Number(Ke.alphaClose)),closeIconColorHover:rn(Number(Ke.alphaClose)),closeIconColorPressed:rn(Number(Ke.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:rn(Ke.alpha4),clearColorHover:Aa(rn(Ke.alpha4),{lightness:.75}),clearColorPressed:Aa(rn(Ke.alpha4),{lightness:.9}),scrollbarColor:gp(Ke.alphaScrollbar),scrollbarColorHover:gp(Ke.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:rn(Ke.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:Ke.neutralPopover,tableColor:Ke.neutralCard,cardColor:Ke.neutralCard,modalColor:Ke.neutralModal,bodyColor:Ke.neutralBody,tagColor:"#eee",avatarColor:rn(Ke.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:rn(Ke.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:Ke.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),Fn=mL,gL={railInsetHorizontalBottom:"auto 2px 4px 2px",railInsetHorizontalTop:"4px 2px auto 2px",railInsetVerticalRight:"2px 4px 2px auto",railInsetVerticalLeft:"2px auto 2px 4px",railColor:"transparent"};function yL(n){const{scrollbarColor:e,scrollbarColorHover:t,scrollbarHeight:r,scrollbarWidth:i,scrollbarBorderRadius:o}=n;return Object.assign(Object.assign({},gL),{height:r,width:i,borderRadius:o,color:e,colorHover:t})}const vL={name:"Scrollbar",common:Fn,self:yL},Zg=vL,{cubicBezierEaseInOut:yp}=zi;function bL({name:n="fade-in",enterDuration:e="0.2s",leaveDuration:t="0.2s",enterCubicBezier:r=yp,leaveCubicBezier:i=yp}={}){return[xe(`&.${n}-transition-enter-active`,{transition:`all ${e} ${r}!important`}),xe(`&.${n}-transition-leave-active`,{transition:`all ${t} ${i}!important`}),xe(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0}),xe(`&.${n}-transition-leave-from, &.${n}-transition-enter-to`,{opacity:1})]}const AL=we("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[xe(">",[we("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `,[xe("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),xe(">",[we("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),xe(">, +",[we("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `,[Ie("horizontal",`
 height: var(--n-scrollbar-height);
 `,[xe(">",[he("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Ie("horizontal--top",`
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `),Ie("horizontal--bottom",`
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `),Ie("vertical",`
 width: var(--n-scrollbar-width);
 `,[xe(">",[he("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Ie("vertical--left",`
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `),Ie("vertical--right",`
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `),Ie("disabled",[xe(">",[he("scrollbar","pointer-events: none;")])]),xe(">",[he("scrollbar",`
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[bL(),xe("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),xL=Object.assign(Object.assign({},ft.props),{duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),Qg=Ve({name:"Scrollbar",props:xL,inheritAttrs:!1,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t,mergedRtlRef:r}=mn(n),i=Qs("Scrollbar",r,e),o=De(null),s=De(null),a=De(null),l=De(null),c=De(null),d=De(null),u=De(null),f=De(null),h=De(null),p=De(null),m=De(null),g=De(0),y=De(0),E=De(!1),S=De(!1);let C=!1,k=!1,M,T,z=0,F=0,O=0,V=0;const _=YE(),H=ft("Scrollbar","-scrollbar",AL,Zg,n,e),I=Te(()=>{const{value:ye}=f,{value:Pe}=d,{value:je}=p;return ye===null||Pe===null||je===null?0:Math.min(ye,je*ye/Pe+ph(H.value.self.width)*1.5)}),W=Te(()=>`${I.value}px`),ie=Te(()=>{const{value:ye}=h,{value:Pe}=u,{value:je}=m;return ye===null||Pe===null||je===null?0:je*ye/Pe+ph(H.value.self.height)*1.5}),Q=Te(()=>`${ie.value}px`),ue=Te(()=>{const{value:ye}=f,{value:Pe}=g,{value:je}=d,{value:dt}=p;if(ye===null||je===null||dt===null)return 0;{const xt=je-ye;return xt?Pe/xt*(dt-I.value):0}}),J=Te(()=>`${ue.value}px`),ae=Te(()=>{const{value:ye}=h,{value:Pe}=y,{value:je}=u,{value:dt}=m;if(ye===null||je===null||dt===null)return 0;{const xt=je-ye;return xt?Pe/xt*(dt-ie.value):0}}),X=Te(()=>`${ae.value}px`),q=Te(()=>{const{value:ye}=f,{value:Pe}=d;return ye!==null&&Pe!==null&&Pe>ye}),re=Te(()=>{const{value:ye}=h,{value:Pe}=u;return ye!==null&&Pe!==null&&Pe>ye}),ge=Te(()=>{const{trigger:ye}=n;return ye==="none"||E.value}),Ae=Te(()=>{const{trigger:ye}=n;return ye==="none"||S.value}),Le=Te(()=>{const{container:ye}=n;return ye?ye():s.value}),Fe=Te(()=>{const{content:ye}=n;return ye?ye():a.value}),Ue=(ye,Pe)=>{if(!n.scrollable)return;if(typeof ye=="number"){Z(ye,Pe??0,0,!1,"auto");return}const{left:je,top:dt,index:xt,elSize:Bt,position:Ot,behavior:lt,el:Ht,debounce:En=!0}=ye;(je!==void 0||dt!==void 0)&&Z(je??0,dt??0,0,!1,lt),Ht!==void 0?Z(0,Ht.offsetTop,Ht.offsetHeight,En,lt):xt!==void 0&&Bt!==void 0?Z(0,xt*Bt,Bt,En,lt):Ot==="bottom"?Z(0,Number.MAX_SAFE_INTEGER,0,!1,lt):Ot==="top"&&Z(0,0,0,!1,lt)},de=Du(()=>{n.container||Ue({top:g.value,left:y.value})}),ot=()=>{de.isDeactivated||fe()},at=ye=>{if(de.isDeactivated)return;const{onResize:Pe}=n;Pe&&Pe(ye),fe()},yt=(ye,Pe)=>{if(!n.scrollable)return;const{value:je}=Le;je&&(typeof ye=="object"?je.scrollBy(ye):je.scrollBy(ye,Pe||0))};function Z(ye,Pe,je,dt,xt){const{value:Bt}=Le;if(Bt){if(dt){const{scrollTop:Ot,offsetHeight:lt}=Bt;if(Pe>Ot){Pe+je<=Ot+lt||Bt.scrollTo({left:ye,top:Pe+je-lt,behavior:xt});return}}Bt.scrollTo({left:ye,top:Pe,behavior:xt})}}function x(){G(),te(),fe()}function Y(){ee()}function ee(){N(),B()}function N(){T!==void 0&&window.clearTimeout(T),T=window.setTimeout(()=>{S.value=!1},n.duration)}function B(){M!==void 0&&window.clearTimeout(M),M=window.setTimeout(()=>{E.value=!1},n.duration)}function G(){M!==void 0&&window.clearTimeout(M),E.value=!0}function te(){T!==void 0&&window.clearTimeout(T),S.value=!0}function ne(ye){const{onScroll:Pe}=n;Pe&&Pe(ye),K()}function K(){const{value:ye}=Le;ye&&(g.value=ye.scrollTop,y.value=ye.scrollLeft*(i!=null&&i.value?-1:1))}function me(){const{value:ye}=Fe;ye&&(d.value=ye.offsetHeight,u.value=ye.offsetWidth);const{value:Pe}=Le;Pe&&(f.value=Pe.offsetHeight,h.value=Pe.offsetWidth);const{value:je}=c,{value:dt}=l;je&&(m.value=je.offsetWidth),dt&&(p.value=dt.offsetHeight)}function pe(){const{value:ye}=Le;ye&&(g.value=ye.scrollTop,y.value=ye.scrollLeft*(i!=null&&i.value?-1:1),f.value=ye.offsetHeight,h.value=ye.offsetWidth,d.value=ye.scrollHeight,u.value=ye.scrollWidth);const{value:Pe}=c,{value:je}=l;Pe&&(m.value=Pe.offsetWidth),je&&(p.value=je.offsetHeight)}function fe(){n.scrollable&&(n.useUnifiedContainer?pe():(me(),K()))}function ke(ye){var Pe;return!(!((Pe=o.value)===null||Pe===void 0)&&Pe.contains(pl(ye)))}function Ne(ye){ye.preventDefault(),ye.stopPropagation(),k=!0,Nt("mousemove",window,Me,!0),Nt("mouseup",window,Xe,!0),F=y.value,O=i!=null&&i.value?window.innerWidth-ye.clientX:ye.clientX}function Me(ye){if(!k)return;M!==void 0&&window.clearTimeout(M),T!==void 0&&window.clearTimeout(T);const{value:Pe}=h,{value:je}=u,{value:dt}=ie;if(Pe===null||je===null)return;const Bt=(i!=null&&i.value?window.innerWidth-ye.clientX-O:ye.clientX-O)*(je-Pe)/(Pe-dt),Ot=je-Pe;let lt=F+Bt;lt=Math.min(Ot,lt),lt=Math.max(lt,0);const{value:Ht}=Le;if(Ht){Ht.scrollLeft=lt*(i!=null&&i.value?-1:1);const{internalOnUpdateScrollLeft:En}=n;En&&En(lt)}}function Xe(ye){ye.preventDefault(),ye.stopPropagation(),It("mousemove",window,Me,!0),It("mouseup",window,Xe,!0),k=!1,fe(),ke(ye)&&ee()}function St(ye){ye.preventDefault(),ye.stopPropagation(),C=!0,Nt("mousemove",window,st,!0),Nt("mouseup",window,ve,!0),z=g.value,V=ye.clientY}function st(ye){if(!C)return;M!==void 0&&window.clearTimeout(M),T!==void 0&&window.clearTimeout(T);const{value:Pe}=f,{value:je}=d,{value:dt}=I;if(Pe===null||je===null)return;const Bt=(ye.clientY-V)*(je-Pe)/(Pe-dt),Ot=je-Pe;let lt=z+Bt;lt=Math.min(Ot,lt),lt=Math.max(lt,0);const{value:Ht}=Le;Ht&&(Ht.scrollTop=lt)}function ve(ye){ye.preventDefault(),ye.stopPropagation(),It("mousemove",window,st,!0),It("mouseup",window,ve,!0),C=!1,fe(),ke(ye)&&ee()}kr(()=>{const{value:ye}=re,{value:Pe}=q,{value:je}=e,{value:dt}=c,{value:xt}=l;dt&&(ye?dt.classList.remove(`${je}-scrollbar-rail--disabled`):dt.classList.add(`${je}-scrollbar-rail--disabled`)),xt&&(Pe?xt.classList.remove(`${je}-scrollbar-rail--disabled`):xt.classList.add(`${je}-scrollbar-rail--disabled`))}),On(()=>{n.container||fe()}),kn(()=>{M!==void 0&&window.clearTimeout(M),T!==void 0&&window.clearTimeout(T),It("mousemove",window,st,!0),It("mouseup",window,ve,!0)});const Qe=Te(()=>{const{common:{cubicBezierEaseInOut:ye},self:{color:Pe,colorHover:je,height:dt,width:xt,borderRadius:Bt,railInsetHorizontalTop:Ot,railInsetHorizontalBottom:lt,railInsetVerticalRight:Ht,railInsetVerticalLeft:En,railColor:ei}}=H.value;return{"--n-scrollbar-bezier":ye,"--n-scrollbar-color":Pe,"--n-scrollbar-color-hover":je,"--n-scrollbar-border-radius":Bt,"--n-scrollbar-width":xt,"--n-scrollbar-height":dt,"--n-scrollbar-rail-inset-horizontal-top":Ot,"--n-scrollbar-rail-inset-horizontal-bottom":lt,"--n-scrollbar-rail-inset-vertical-right":i!=null&&i.value?Ah(Ht):Ht,"--n-scrollbar-rail-inset-vertical-left":i!=null&&i.value?Ah(En):En,"--n-scrollbar-rail-color":ei}}),Pt=t?xn("scrollbar",void 0,Qe,n):void 0;return Object.assign(Object.assign({},{scrollTo:Ue,scrollBy:yt,sync:fe,syncUnifiedContainer:pe,handleMouseEnterWrapper:x,handleMouseLeaveWrapper:Y}),{mergedClsPrefix:e,rtlEnabled:i,containerScrollTop:g,wrapperRef:o,containerRef:s,contentRef:a,yRailRef:l,xRailRef:c,needYBar:q,needXBar:re,yBarSizePx:W,xBarSizePx:Q,yBarTopPx:J,xBarLeftPx:X,isShowXBar:ge,isShowYBar:Ae,isIos:_,handleScroll:ne,handleContentResize:ot,handleContainerResize:at,handleYScrollMouseDown:St,handleXScrollMouseDown:Ne,cssVars:t?void 0:Qe,themeClass:Pt==null?void 0:Pt.themeClass,onRender:Pt==null?void 0:Pt.onRender})},render(){var n;const{$slots:e,mergedClsPrefix:t,triggerDisplayManually:r,rtlEnabled:i,internalHoistYRail:o,yPlacement:s,xPlacement:a,xScrollable:l}=this;if(!this.scrollable)return(n=e.default)===null||n===void 0?void 0:n.call(e);const c=this.trigger==="none",d=(h,p)=>j("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`,`${t}-scrollbar-rail--vertical--${s}`,h],"data-scrollbar-rail":!0,style:[p||"",this.verticalRailStyle],"aria-hidden":!0},j(c?yh:wo,c?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?j("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),u=()=>{var h,p;return(h=this.onRender)===null||h===void 0||h.call(this),j("div",Qr(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,i&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(p=e.default)===null||p===void 0?void 0:p.call(e):j("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},j(gl,{onResize:this.handleContentResize},{default:()=>j("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},e)})),o?null:d(void 0,void 0),l&&j("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`,`${t}-scrollbar-rail--horizontal--${a}`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},j(c?yh:wo,c?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?j("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:i?this.xBarLeftPx:void 0,left:i?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},f=this.container?u():j(gl,{onResize:this.handleContainerResize},{default:u});return o?j(_t,null,f,d(this.themeClass,this.cssVars)):f}}),qu=Qg,Jg=Qg,{cubicBezierEaseIn:vp,cubicBezierEaseOut:bp}=zi;function EL({transformOrigin:n="inherit",duration:e=".2s",enterScale:t=".9",originalTransform:r="",originalTransition:i=""}={}){return[xe("&.fade-in-scale-up-transition-leave-active",{transformOrigin:n,transition:`opacity ${e} ${vp}, transform ${e} ${vp} ${i&&`,${i}`}`}),xe("&.fade-in-scale-up-transition-enter-active",{transformOrigin:n,transition:`opacity ${e} ${bp}, transform ${e} ${bp} ${i&&`,${i}`}`}),xe("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${r} scale(${t})`}),xe("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${r} scale(1)`})]}const wL=we("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),CL=Ve({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(n){Bo("-base-wave",wL,bt(n,"clsPrefix"));const e=De(null),t=De(!1);let r=null;return kn(()=>{r!==null&&window.clearTimeout(r)}),{active:t,selfRef:e,play(){r!==null&&(window.clearTimeout(r),t.value=!1,r=null),Ao(()=>{var i;(i=e.value)===null||i===void 0||i.offsetHeight,t.value=!0,r=window.setTimeout(()=>{t.value=!1,r=null},1e3)})}}},render(){const{clsPrefix:n}=this;return j("div",{ref:"selfRef","aria-hidden":!0,class:[`${n}-base-wave`,this.active&&`${n}-base-wave--active`]})}}),SL={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function TL(n){const{boxShadow2:e,popoverColor:t,textColor2:r,borderRadius:i,fontSize:o,dividerColor:s}=n;return Object.assign(Object.assign({},SL),{fontSize:o,borderRadius:i,color:t,dividerColor:s,textColor:r,boxShadow:e})}const kL={name:"Popover",common:Fn,self:TL},Yu=kL,$c={top:"bottom",bottom:"top",left:"right",right:"left"},Gt="var(--n-arrow-height) * 1.414",IL=xe([we("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[xe(">",[we("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Zt("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Zt("scrollable",[Zt("show-header-or-footer","padding: var(--n-padding);")])]),he("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),he("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Ie("scrollable, show-header-or-footer",[he("content",`
 padding: var(--n-padding);
 `)])]),we("popover-shared",`
 transform-origin: inherit;
 `,[we("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[we("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Gt});
 height: calc(${Gt});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),xe("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),xe("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),xe("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),xe("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),Rn("top-start",`
 top: calc(${Gt} / -2);
 left: calc(${yr("top-start")} - var(--v-offset-left));
 `),Rn("top",`
 top: calc(${Gt} / -2);
 transform: translateX(calc(${Gt} / -2)) rotate(45deg);
 left: 50%;
 `),Rn("top-end",`
 top: calc(${Gt} / -2);
 right: calc(${yr("top-end")} + var(--v-offset-left));
 `),Rn("bottom-start",`
 bottom: calc(${Gt} / -2);
 left: calc(${yr("bottom-start")} - var(--v-offset-left));
 `),Rn("bottom",`
 bottom: calc(${Gt} / -2);
 transform: translateX(calc(${Gt} / -2)) rotate(45deg);
 left: 50%;
 `),Rn("bottom-end",`
 bottom: calc(${Gt} / -2);
 right: calc(${yr("bottom-end")} + var(--v-offset-left));
 `),Rn("left-start",`
 left: calc(${Gt} / -2);
 top: calc(${yr("left-start")} - var(--v-offset-top));
 `),Rn("left",`
 left: calc(${Gt} / -2);
 transform: translateY(calc(${Gt} / -2)) rotate(45deg);
 top: 50%;
 `),Rn("left-end",`
 left: calc(${Gt} / -2);
 bottom: calc(${yr("left-end")} + var(--v-offset-top));
 `),Rn("right-start",`
 right: calc(${Gt} / -2);
 top: calc(${yr("right-start")} - var(--v-offset-top));
 `),Rn("right",`
 right: calc(${Gt} / -2);
 transform: translateY(calc(${Gt} / -2)) rotate(45deg);
 top: 50%;
 `),Rn("right-end",`
 right: calc(${Gt} / -2);
 bottom: calc(${yr("right-end")} + var(--v-offset-top));
 `),...zk({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(n,e)=>{const t=["right","left"].includes(e),r=t?"width":"height";return n.map(i=>{const o=i.split("-")[1]==="end",a=`calc((${`var(--v-target-${r}, 0px)`} - ${Gt}) / 2)`,l=yr(i);return xe(`[v-placement="${i}"] >`,[we("popover-shared",[Ie("center-arrow",[we("popover-arrow",`${e}: calc(max(${a}, ${l}) ${o?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function yr(n){return["top","bottom"].includes(n.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function Rn(n,e){const t=n.split("-")[0],r=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return xe(`[v-placement="${n}"] >`,[we("popover-shared",`
 margin-${$c[t]}: var(--n-space);
 `,[Ie("show-arrow",`
 margin-${$c[t]}: var(--n-space-arrow);
 `),Ie("overlap",`
 margin: 0;
 `),OE("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${$c[t]}: auto;
 ${r}
 `,[we("popover-arrow",e)])])])}const ey=Object.assign(Object.assign({},ft.props),{to:So.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function ty({arrowClass:n,arrowStyle:e,arrowWrapperClass:t,arrowWrapperStyle:r,clsPrefix:i}){return j("div",{key:"__popover-arrow__",style:r,class:[`${i}-popover-arrow-wrapper`,t]},j("div",{class:[`${i}-popover-arrow`,n],style:e}))}const LL=Ve({name:"PopoverBody",inheritAttrs:!1,props:ey,setup(n,{slots:e,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:o}=mn(n),s=ft("Popover","-popover",IL,Yu,n,i),a=De(null),l=rt("NPopover"),c=De(null),d=De(n.show),u=De(!1);kr(()=>{const{show:T}=n;T&&!FE()&&!n.internalDeactivateImmediately&&(u.value=!0)});const f=Te(()=>{const{trigger:T,onClickoutside:z}=n,F=[],{positionManuallyRef:{value:O}}=l;return O||(T==="click"&&!z&&F.push([Sh,C,void 0,{capture:!0}]),T==="hover"&&F.push([nw,S])),z&&F.push([Sh,C,void 0,{capture:!0}]),(n.displayDirective==="show"||n.animated&&u.value)&&F.push([C1,n.show]),F}),h=Te(()=>{const{common:{cubicBezierEaseInOut:T,cubicBezierEaseIn:z,cubicBezierEaseOut:F},self:{space:O,spaceArrow:V,padding:_,fontSize:H,textColor:I,dividerColor:W,color:ie,boxShadow:Q,borderRadius:ue,arrowHeight:J,arrowOffset:ae,arrowOffsetVertical:X}}=s.value;return{"--n-box-shadow":Q,"--n-bezier":T,"--n-bezier-ease-in":z,"--n-bezier-ease-out":F,"--n-font-size":H,"--n-text-color":I,"--n-color":ie,"--n-divider-color":W,"--n-border-radius":ue,"--n-arrow-height":J,"--n-arrow-offset":ae,"--n-arrow-offset-vertical":X,"--n-padding":_,"--n-space":O,"--n-space-arrow":V}}),p=Te(()=>{const T=n.width==="trigger"?void 0:wi(n.width),z=[];T&&z.push({width:T});const{maxWidth:F,minWidth:O}=n;return F&&z.push({maxWidth:wi(F)}),O&&z.push({maxWidth:wi(O)}),o||z.push(h.value),z}),m=o?xn("popover",void 0,h,n):void 0;l.setBodyInstance({syncPosition:g}),kn(()=>{l.setBodyInstance(null)}),Qt(bt(n,"show"),T=>{n.animated||(T?d.value=!0:d.value=!1)});function g(){var T;(T=a.value)===null||T===void 0||T.syncPosition()}function y(T){n.trigger==="hover"&&n.keepAliveOnHover&&n.show&&l.handleMouseEnter(T)}function E(T){n.trigger==="hover"&&n.keepAliveOnHover&&l.handleMouseLeave(T)}function S(T){n.trigger==="hover"&&!k().contains(pl(T))&&l.handleMouseMoveOutside(T)}function C(T){(n.trigger==="click"&&!k().contains(pl(T))||n.onClickoutside)&&l.handleClickOutside(T)}function k(){return l.getTriggerElement()}Mt(Yl,c),Mt(Ru,null),Mt(Lu,null);function M(){if(m==null||m.onRender(),!(n.displayDirective==="show"||n.show||n.animated&&u.value))return null;let z;const F=l.internalRenderBodyRef.value,{value:O}=i;if(F)z=F([`${O}-popover-shared`,m==null?void 0:m.themeClass.value,n.overlap&&`${O}-popover-shared--overlap`,n.showArrow&&`${O}-popover-shared--show-arrow`,n.arrowPointToCenter&&`${O}-popover-shared--center-arrow`],c,p.value,y,E);else{const{value:V}=l.extraClassRef,{internalTrapFocus:_}=n,H=!Cd(e.header)||!Cd(e.footer),I=()=>{var W,ie;const Q=H?j(_t,null,ln(e.header,ae=>ae?j("div",{class:[`${O}-popover__header`,n.headerClass],style:n.headerStyle},ae):null),ln(e.default,ae=>ae?j("div",{class:[`${O}-popover__content`,n.contentClass],style:n.contentStyle},e):null),ln(e.footer,ae=>ae?j("div",{class:[`${O}-popover__footer`,n.footerClass],style:n.footerStyle},ae):null)):n.scrollable?(W=e.default)===null||W===void 0?void 0:W.call(e):j("div",{class:[`${O}-popover__content`,n.contentClass],style:n.contentStyle},e),ue=n.scrollable?j(Jg,{contentClass:H?void 0:`${O}-popover__content ${(ie=n.contentClass)!==null&&ie!==void 0?ie:""}`,contentStyle:H?void 0:n.contentStyle},{default:()=>Q}):Q,J=n.showArrow?ty({arrowClass:n.arrowClass,arrowStyle:n.arrowStyle,arrowWrapperClass:n.arrowWrapperClass,arrowWrapperStyle:n.arrowWrapperStyle,clsPrefix:O}):null;return[ue,J]};z=j("div",Qr({class:[`${O}-popover`,`${O}-popover-shared`,m==null?void 0:m.themeClass.value,V.map(W=>`${O}-${W}`),{[`${O}-popover--scrollable`]:n.scrollable,[`${O}-popover--show-header-or-footer`]:H,[`${O}-popover--raw`]:n.raw,[`${O}-popover-shared--overlap`]:n.overlap,[`${O}-popover-shared--show-arrow`]:n.showArrow,[`${O}-popover-shared--center-arrow`]:n.arrowPointToCenter}],ref:c,style:p.value,onKeydown:l.handleKeydown,onMouseenter:y,onMouseleave:E},t),_?j(jw,{active:n.show,autoFocus:!0},{default:I}):I())}return Ul(z,f.value)}return{displayed:u,namespace:r,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:a,adjustedTo:So(n),followerEnabled:d,renderContentNode:M}},render(){return j(ig,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===So.tdkey},{default:()=>this.animated?j(wo,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var n;(n=this.internalOnAfterLeave)===null||n===void 0||n.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),RL=Object.keys(ey),_L={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function DL(n,e,t){_L[e].forEach(r=>{n.props?n.props=Object.assign({},n.props):n.props={};const i=n.props[r],o=t[r];i?n.props[r]=(...s)=>{i(...s),o(...s)}:n.props[r]=o})}const Jl={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:So.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},PL=Object.assign(Object.assign(Object.assign({},ft.props),Jl),{internalOnAfterLeave:Function,internalRenderBody:Function}),ny=Ve({name:"Popover",inheritAttrs:!1,props:PL,__popover__:!0,setup(n){const e=ku(),t=De(null),r=Te(()=>n.show),i=De(n.defaultShow),o=Co(r,i),s=pn(()=>n.disabled?!1:o.value),a=()=>{if(n.disabled)return!0;const{getDisabled:W}=n;return!!(W!=null&&W())},l=()=>a()?!1:o.value,c=Iu(n,["arrow","showArrow"]),d=Te(()=>n.overlap?!1:c.value);let u=null;const f=De(null),h=De(null),p=pn(()=>n.x!==void 0&&n.y!==void 0);function m(W){const{"onUpdate:show":ie,onUpdateShow:Q,onShow:ue,onHide:J}=n;i.value=W,ie&&it(ie,W),Q&&it(Q,W),W&&ue&&it(ue,!0),W&&J&&it(J,!1)}function g(){u&&u.syncPosition()}function y(){const{value:W}=f;W&&(window.clearTimeout(W),f.value=null)}function E(){const{value:W}=h;W&&(window.clearTimeout(W),h.value=null)}function S(){const W=a();if(n.trigger==="focus"&&!W){if(l())return;m(!0)}}function C(){const W=a();if(n.trigger==="focus"&&!W){if(!l())return;m(!1)}}function k(){const W=a();if(n.trigger==="hover"&&!W){if(E(),f.value!==null||l())return;const ie=()=>{m(!0),f.value=null},{delay:Q}=n;Q===0?ie():f.value=window.setTimeout(ie,Q)}}function M(){const W=a();if(n.trigger==="hover"&&!W){if(y(),h.value!==null||!l())return;const ie=()=>{m(!1),h.value=null},{duration:Q}=n;Q===0?ie():h.value=window.setTimeout(ie,Q)}}function T(){M()}function z(W){var ie;l()&&(n.trigger==="click"&&(y(),E(),m(!1)),(ie=n.onClickoutside)===null||ie===void 0||ie.call(n,W))}function F(){if(n.trigger==="click"&&!a()){y(),E();const W=!l();m(W)}}function O(W){n.internalTrapFocus&&W.key==="Escape"&&(y(),E(),m(!1))}function V(W){i.value=W}function _(){var W;return(W=t.value)===null||W===void 0?void 0:W.targetRef}function H(W){u=W}return Mt("NPopover",{getTriggerElement:_,handleKeydown:O,handleMouseEnter:k,handleMouseLeave:M,handleClickOutside:z,handleMouseMoveOutside:T,setBodyInstance:H,positionManuallyRef:p,isMountedRef:e,zIndexRef:bt(n,"zIndex"),extraClassRef:bt(n,"internalExtraClass"),internalRenderBodyRef:bt(n,"internalRenderBody")}),kr(()=>{o.value&&a()&&m(!1)}),{binderInstRef:t,positionManually:p,mergedShowConsideringDisabledProp:s,uncontrolledShow:i,mergedShowArrow:d,getMergedShow:l,setShow:V,handleClick:F,handleMouseEnter:k,handleMouseLeave:M,handleFocus:S,handleBlur:C,syncPosition:g}},render(){var n;const{positionManually:e,$slots:t}=this;let r,i=!1;if(!e&&(t.activator?r=gh(t,"activator"):r=gh(t,"trigger"),r)){r=Ir(r),r=r.type===Ys?j("span",[r]):r;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((n=r.type)===null||n===void 0)&&n.__popover__)i=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[o,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:s}=this,a=[o,...s],l={onBlur:c=>{a.forEach(d=>{d.onBlur(c)})},onFocus:c=>{a.forEach(d=>{d.onFocus(c)})},onClick:c=>{a.forEach(d=>{d.onClick(c)})},onMouseenter:c=>{a.forEach(d=>{d.onMouseenter(c)})},onMouseleave:c=>{a.forEach(d=>{d.onMouseleave(c)})}};DL(r,s?"nested":e?"manual":this.trigger,l)}}return j(eg,{ref:"binderInstRef",syncTarget:!i,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?Ul(j("div",{style:{position:"fixed",inset:0}}),[[ng,{enabled:o,zIndex:this.zIndex}]]):null,e?null:j(tg,null,{default:()=>r}),j(LL,Is(this.$props,RL,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var s,a;return(a=(s=this.$slots).default)===null||a===void 0?void 0:a.call(s)},header:()=>{var s,a;return(a=(s=this.$slots).header)===null||a===void 0?void 0:a.call(s)},footer:()=>{var s,a;return(a=(s=this.$slots).footer)===null||a===void 0?void 0:a.call(s)}})]}})}}),BL=we("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[xe(">",[he("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[xe("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),xe("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),he("placeholder",`
 display: flex;
 `),he("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[El({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),zd=Ve({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return Bo("-base-clear",BL,bt(n,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:n}=this;return j("div",{class:`${n}-base-clear`},j(Gu,null,{default:()=>{var e,t;return this.show?j("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},po(this.$slots.icon,()=>[j(Yr,{clsPrefix:n},{default:()=>j(MI,null)})])):j("div",{key:"icon",class:`${n}-base-clear__placeholder`},(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e))}}))}}),OL=Ve({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:e}){return()=>{const{clsPrefix:t}=n;return j(Vg,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?j(zd,{clsPrefix:t,show:n.showClear,onClear:n.onClear},{placeholder:()=>j(Yr,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>po(e.default,()=>[j(FI,null)])})}):null})}}}),{cubicBezierEaseInOut:Mr}=zi;function FL({duration:n=".2s",delay:e=".1s"}={}){return[xe("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),xe("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),xe("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${n} ${Mr},
 max-width ${n} ${Mr} ${e},
 margin-left ${n} ${Mr} ${e},
 margin-right ${n} ${Mr} ${e};
 `),xe("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${n} ${Mr} ${e},
 max-width ${n} ${Mr},
 margin-left ${n} ${Mr},
 margin-right ${n} ${Mr};
 `)]}const ML={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"};function NL(n){const{lineHeight:e,borderRadius:t,fontWeightStrong:r,baseColor:i,dividerColor:o,actionColor:s,textColor1:a,textColor2:l,closeColorHover:c,closeColorPressed:d,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:h,infoColor:p,successColor:m,warningColor:g,errorColor:y,fontSize:E}=n;return Object.assign(Object.assign({},ML),{fontSize:E,lineHeight:e,titleFontWeight:r,borderRadius:t,border:`1px solid ${o}`,color:s,titleTextColor:a,iconColor:l,contentTextColor:l,closeBorderRadius:t,closeColorHover:c,closeColorPressed:d,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:h,borderInfo:`1px solid ${bn(i,Vt(p,{alpha:.25}))}`,colorInfo:bn(i,Vt(p,{alpha:.08})),titleTextColorInfo:a,iconColorInfo:p,contentTextColorInfo:l,closeColorHoverInfo:c,closeColorPressedInfo:d,closeIconColorInfo:u,closeIconColorHoverInfo:f,closeIconColorPressedInfo:h,borderSuccess:`1px solid ${bn(i,Vt(m,{alpha:.25}))}`,colorSuccess:bn(i,Vt(m,{alpha:.08})),titleTextColorSuccess:a,iconColorSuccess:m,contentTextColorSuccess:l,closeColorHoverSuccess:c,closeColorPressedSuccess:d,closeIconColorSuccess:u,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:h,borderWarning:`1px solid ${bn(i,Vt(g,{alpha:.33}))}`,colorWarning:bn(i,Vt(g,{alpha:.08})),titleTextColorWarning:a,iconColorWarning:g,contentTextColorWarning:l,closeColorHoverWarning:c,closeColorPressedWarning:d,closeIconColorWarning:u,closeIconColorHoverWarning:f,closeIconColorPressedWarning:h,borderError:`1px solid ${bn(i,Vt(y,{alpha:.25}))}`,colorError:bn(i,Vt(y,{alpha:.08})),titleTextColorError:a,iconColorError:y,contentTextColorError:l,closeColorHoverError:c,closeColorPressedError:d,closeIconColorError:u,closeIconColorHoverError:f,closeIconColorPressedError:h})}const zL={name:"Alert",common:Fn,self:NL},$L=zL,{cubicBezierEaseInOut:Jn,cubicBezierEaseOut:UL,cubicBezierEaseIn:HL}=zi;function ry({overflow:n="hidden",duration:e=".3s",originalTransition:t="",leavingDelay:r="0s",foldPadding:i=!1,enterToProps:o=void 0,leaveToProps:s=void 0,reverse:a=!1}={}){const l=a?"leave":"enter",c=a?"enter":"leave";return[xe(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},o),{opacity:1})),xe(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},s),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:i?"0 !important":void 0,paddingBottom:i?"0 !important":void 0})),xe(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${n};
 transition:
 max-height ${e} ${Jn} ${r},
 opacity ${e} ${UL} ${r},
 margin-top ${e} ${Jn} ${r},
 margin-bottom ${e} ${Jn} ${r},
 padding-top ${e} ${Jn} ${r},
 padding-bottom ${e} ${Jn} ${r}
 ${t?`,${t}`:""}
 `),xe(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${n};
 transition:
 max-height ${e} ${Jn},
 opacity ${e} ${HL},
 margin-top ${e} ${Jn},
 margin-bottom ${e} ${Jn},
 padding-top ${e} ${Jn},
 padding-bottom ${e} ${Jn}
 ${t?`,${t}`:""}
 `)]}const WL=we("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[he("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),Ie("closable",[we("alert-body",[he("title",`
 padding-right: 24px;
 `)])]),he("icon",{color:"var(--n-icon-color)"}),we("alert-body",{padding:"var(--n-padding)"},[he("title",{color:"var(--n-title-text-color)"}),he("content",{color:"var(--n-content-text-color)"})]),ry({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),he("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),he("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),Ie("show-icon",[we("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),Ie("right-adjust",[we("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),we("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[he("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[xe("& +",[he("content",{marginTop:"9px"})])]),he("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),he("icon",{transition:"color .3s var(--n-bezier)"})]),jL=Object.assign(Object.assign({},ft.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),GL=Ve({name:"Alert",inheritAttrs:!1,props:jL,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:t,inlineThemeDisabled:r,mergedRtlRef:i}=mn(n),o=ft("Alert","-alert",WL,$L,n,e),s=Qs("Alert",i,e),a=Te(()=>{const{common:{cubicBezierEaseInOut:h},self:p}=o.value,{fontSize:m,borderRadius:g,titleFontWeight:y,lineHeight:E,iconSize:S,iconMargin:C,iconMarginRtl:k,closeIconSize:M,closeBorderRadius:T,closeSize:z,closeMargin:F,closeMarginRtl:O,padding:V}=p,{type:_}=n,{left:H,right:I}=Kl(C);return{"--n-bezier":h,"--n-color":p[We("color",_)],"--n-close-icon-size":M,"--n-close-border-radius":T,"--n-close-color-hover":p[We("closeColorHover",_)],"--n-close-color-pressed":p[We("closeColorPressed",_)],"--n-close-icon-color":p[We("closeIconColor",_)],"--n-close-icon-color-hover":p[We("closeIconColorHover",_)],"--n-close-icon-color-pressed":p[We("closeIconColorPressed",_)],"--n-icon-color":p[We("iconColor",_)],"--n-border":p[We("border",_)],"--n-title-text-color":p[We("titleTextColor",_)],"--n-content-text-color":p[We("contentTextColor",_)],"--n-line-height":E,"--n-border-radius":g,"--n-font-size":m,"--n-title-font-weight":y,"--n-icon-size":S,"--n-icon-margin":C,"--n-icon-margin-rtl":k,"--n-close-size":z,"--n-close-margin":F,"--n-close-margin-rtl":O,"--n-padding":V,"--n-icon-margin-left":H,"--n-icon-margin-right":I}}),l=r?xn("alert",Te(()=>n.type[0]),a,n):void 0,c=De(!0),d=()=>{const{onAfterLeave:h,onAfterHide:p}=n;h&&h(),p&&p()};return{rtlEnabled:s,mergedClsPrefix:e,mergedBordered:t,visible:c,handleCloseClick:()=>{var h;Promise.resolve((h=n.onClose)===null||h===void 0?void 0:h.call(n)).then(p=>{p!==!1&&(c.value=!1)})},handleAfterLeave:()=>{d()},mergedTheme:o,cssVars:r?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),j(Ku,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:t}=this,r={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?j("div",Object.assign({},Qr(this.$attrs,r)),this.closable&&j(Kg,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&j("div",{class:`${e}-alert__border`}),this.showIcon&&j("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},po(t.icon,()=>[j(Yr,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return j(BI,null);case"info":return j(PI,null);case"warning":return j(OI,null);case"error":return j(DI,null);default:return null}}})])),j("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},ln(t.header,i=>{const o=i||this.title;return o?j("div",{class:`${e}-alert-body__title`},o):null}),t.default&&j("div",{class:`${e}-alert-body__content`},t))):null}})}}),KL=ql&&"chrome"in window;ql&&navigator.userAgent.includes("Firefox");const iy=ql&&navigator.userAgent.includes("Safari")&&!KL,VL={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};function qL(n){const{textColor2:e,textColor3:t,textColorDisabled:r,primaryColor:i,primaryColorHover:o,inputColor:s,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:d,errorColor:u,errorColorHover:f,borderRadius:h,lineHeight:p,fontSizeTiny:m,fontSizeSmall:g,fontSizeMedium:y,fontSizeLarge:E,heightTiny:S,heightSmall:C,heightMedium:k,heightLarge:M,actionColor:T,clearColor:z,clearColorHover:F,clearColorPressed:O,placeholderColor:V,placeholderColorDisabled:_,iconColor:H,iconColorDisabled:I,iconColorHover:W,iconColorPressed:ie}=n;return Object.assign(Object.assign({},VL),{countTextColorDisabled:r,countTextColor:t,heightTiny:S,heightSmall:C,heightMedium:k,heightLarge:M,fontSizeTiny:m,fontSizeSmall:g,fontSizeMedium:y,fontSizeLarge:E,lineHeight:p,lineHeightTextarea:p,borderRadius:h,iconSize:"16px",groupLabelColor:T,groupLabelTextColor:e,textColor:e,textColorDisabled:r,textDecorationColor:e,caretColor:i,placeholderColor:V,placeholderColorDisabled:_,color:s,colorDisabled:a,colorFocus:s,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${o}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${o}`,boxShadowFocus:`0 0 0 2px ${Vt(i,{alpha:.2})}`,loadingColor:i,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:s,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${Vt(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${f}`,colorFocusError:s,borderFocusError:`1px solid ${f}`,boxShadowFocusError:`0 0 0 2px ${Vt(u,{alpha:.2})}`,caretColorError:u,clearColor:z,clearColorHover:F,clearColorPressed:O,iconColor:H,iconColorDisabled:I,iconColorHover:W,iconColorPressed:ie,suffixTextColor:e})}const YL={name:"Input",common:Fn,self:qL},XL=YL,oy="n-input";function ZL(n){let e=0;for(const t of n)e++;return e}function La(n){return n===""||n==null}function QL(n){const e=De(null);function t(){const{value:o}=n;if(!(o!=null&&o.focus)){i();return}const{selectionStart:s,selectionEnd:a,value:l}=o;if(s==null||a==null){i();return}e.value={start:s,end:a,beforeText:l.slice(0,s),afterText:l.slice(a)}}function r(){var o;const{value:s}=e,{value:a}=n;if(!s||!a)return;const{value:l}=a,{start:c,beforeText:d,afterText:u}=s;let f=l.length;if(l.endsWith(u))f=l.length-u.length;else if(l.startsWith(d))f=d.length;else{const h=d[c-1],p=l.indexOf(h,c-1);p!==-1&&(f=p+1)}(o=a.setSelectionRange)===null||o===void 0||o.call(a,f,f)}function i(){e.value=null}return Qt(n,i),{recordCursor:t,restoreCursor:r}}const Ap=Ve({name:"InputWordCount",setup(n,{slots:e}){const{mergedValueRef:t,maxlengthRef:r,mergedClsPrefixRef:i,countGraphemesRef:o}=rt(oy),s=Te(()=>{const{value:a}=t;return a===null||Array.isArray(a)?0:(o.value||ZL)(a)});return()=>{const{value:a}=r,{value:l}=t;return j("span",{class:`${i.value}-input-word-count`},cE(e.default,{value:l===null||Array.isArray(l)?"":l},()=>[a===void 0?s.value:`${s.value} / ${a}`]))}}}),JL=we("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[he("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),he("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),he("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[xe("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),xe("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),xe("&:-webkit-autofill ~",[he("placeholder","display: none;")])]),Ie("round",[Zt("textarea","border-radius: calc(var(--n-height) / 2);")]),he("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[xe("span",`
 width: 100%;
 display: inline-block;
 `)]),Ie("textarea",[he("placeholder","overflow: visible;")]),Zt("autosize","width: 100%;"),Ie("autosize",[he("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),we("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),he("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),he("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[xe("&[type=password]::-ms-reveal","display: none;"),xe("+",[he("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Zt("textarea",[he("placeholder","white-space: nowrap;")]),he("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),Ie("textarea","width: 100%;",[we("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),Ie("resizable",[we("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),he("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),he("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),Ie("pair",[he("input-el, placeholder","text-align: center;"),he("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[we("icon",`
 color: var(--n-icon-color);
 `),we("base-icon",`
 color: var(--n-icon-color);
 `)])]),Ie("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[he("border","border: var(--n-border-disabled);"),he("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),he("placeholder","color: var(--n-placeholder-color-disabled);"),he("separator","color: var(--n-text-color-disabled);",[we("icon",`
 color: var(--n-icon-color-disabled);
 `),we("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),we("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),he("suffix, prefix","color: var(--n-text-color-disabled);",[we("icon",`
 color: var(--n-icon-color-disabled);
 `),we("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Zt("disabled",[he("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[xe("&:hover",`
 color: var(--n-icon-color-hover);
 `),xe("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),xe("&:hover",[he("state-border","border: var(--n-border-hover);")]),Ie("focus","background-color: var(--n-color-focus);",[he("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),he("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),he("state-border",`
 border-color: #0000;
 z-index: 1;
 `),he("prefix","margin-right: 4px;"),he("suffix",`
 margin-left: 4px;
 `),he("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[we("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),we("base-clear",`
 font-size: var(--n-icon-size);
 `,[he("placeholder",[we("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),xe(">",[we("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),we("base-icon",`
 font-size: var(--n-icon-size);
 `)]),we("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(n=>Ie(`${n}-status`,[Zt("disabled",[we("base-loading",`
 color: var(--n-loading-color-${n})
 `),he("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${n});
 `),he("state-border",`
 border: var(--n-border-${n});
 `),xe("&:hover",[he("state-border",`
 border: var(--n-border-hover-${n});
 `)]),xe("&:focus",`
 background-color: var(--n-color-focus-${n});
 `,[he("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)]),Ie("focus",`
 background-color: var(--n-color-focus-${n});
 `,[he("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),eR=we("input",[Ie("disabled",[he("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),tR=Object.assign(Object.assign({},ft.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),nR=Ve({name:"Input",props:tR,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:t,inlineThemeDisabled:r,mergedRtlRef:i}=mn(n),o=ft("Input","-input",JL,XL,n,e);iy&&Bo("-input-safari",eR,e);const s=De(null),a=De(null),l=De(null),c=De(null),d=De(null),u=De(null),f=De(null),h=QL(f),p=De(null),{localeRef:m}=II("Input"),g=De(n.defaultValue),y=bt(n,"value"),E=Co(y,g),S=mg(n),{mergedSizeRef:C,mergedDisabledRef:k,mergedStatusRef:M}=S,T=De(!1),z=De(!1),F=De(!1),O=De(!1);let V=null;const _=Te(()=>{const{placeholder:oe,pair:Ce}=n;return Ce?Array.isArray(oe)?oe:oe===void 0?["",""]:[oe,oe]:oe===void 0?[m.value.placeholder]:[oe]}),H=Te(()=>{const{value:oe}=F,{value:Ce}=E,{value:Ge}=_;return!oe&&(La(Ce)||Array.isArray(Ce)&&La(Ce[0]))&&Ge[0]}),I=Te(()=>{const{value:oe}=F,{value:Ce}=E,{value:Ge}=_;return!oe&&Ge[1]&&(La(Ce)||Array.isArray(Ce)&&La(Ce[1]))}),W=pn(()=>n.internalForceFocus||T.value),ie=pn(()=>{if(k.value||n.readonly||!n.clearable||!W.value&&!z.value)return!1;const{value:oe}=E,{value:Ce}=W;return n.pair?!!(Array.isArray(oe)&&(oe[0]||oe[1]))&&(z.value||Ce):!!oe&&(z.value||Ce)}),Q=Te(()=>{const{showPasswordOn:oe}=n;if(oe)return oe;if(n.showPasswordToggle)return"click"}),ue=De(!1),J=Te(()=>{const{textDecoration:oe}=n;return oe?Array.isArray(oe)?oe.map(Ce=>({textDecoration:Ce})):[{textDecoration:oe}]:["",""]}),ae=De(void 0),X=()=>{var oe,Ce;if(n.type==="textarea"){const{autosize:Ge}=n;if(Ge&&(ae.value=(Ce=(oe=p.value)===null||oe===void 0?void 0:oe.$el)===null||Ce===void 0?void 0:Ce.offsetWidth),!a.value||typeof Ge=="boolean")return;const{paddingTop:ht,paddingBottom:Lt,lineHeight:mt}=window.getComputedStyle(a.value),qt=Number(ht.slice(0,-2)),qn=Number(Lt.slice(0,-2)),hr=Number(mt.slice(0,-2)),{value:Yn}=l;if(!Yn)return;if(Ge.minRows){const pr=Math.max(Ge.minRows,1),Fo=`${qt+qn+hr*pr}px`;Yn.style.minHeight=Fo}if(Ge.maxRows){const pr=`${qt+qn+hr*Ge.maxRows}px`;Yn.style.maxHeight=pr}}},q=Te(()=>{const{maxlength:oe}=n;return oe===void 0?void 0:Number(oe)});On(()=>{const{value:oe}=E;Array.isArray(oe)||Ht(oe)});const re=Oi().proxy;function ge(oe,Ce){const{onUpdateValue:Ge,"onUpdate:value":ht,onInput:Lt}=n,{nTriggerFormInput:mt}=S;Ge&&it(Ge,oe,Ce),ht&&it(ht,oe,Ce),Lt&&it(Lt,oe,Ce),g.value=oe,mt()}function Ae(oe,Ce){const{onChange:Ge}=n,{nTriggerFormChange:ht}=S;Ge&&it(Ge,oe,Ce),g.value=oe,ht()}function Le(oe){const{onBlur:Ce}=n,{nTriggerFormBlur:Ge}=S;Ce&&it(Ce,oe),Ge()}function Fe(oe){const{onFocus:Ce}=n,{nTriggerFormFocus:Ge}=S;Ce&&it(Ce,oe),Ge()}function Ue(oe){const{onClear:Ce}=n;Ce&&it(Ce,oe)}function de(oe){const{onInputBlur:Ce}=n;Ce&&it(Ce,oe)}function ot(oe){const{onInputFocus:Ce}=n;Ce&&it(Ce,oe)}function at(){const{onDeactivate:oe}=n;oe&&it(oe)}function yt(){const{onActivate:oe}=n;oe&&it(oe)}function Z(oe){const{onClick:Ce}=n;Ce&&it(Ce,oe)}function x(oe){const{onWrapperFocus:Ce}=n;Ce&&it(Ce,oe)}function Y(oe){const{onWrapperBlur:Ce}=n;Ce&&it(Ce,oe)}function ee(){F.value=!0}function N(oe){F.value=!1,oe.target===u.value?B(oe,1):B(oe,0)}function B(oe,Ce=0,Ge="input"){const ht=oe.target.value;if(Ht(ht),oe instanceof InputEvent&&!oe.isComposing&&(F.value=!1),n.type==="textarea"){const{value:mt}=p;mt&&mt.syncUnifiedContainer()}if(V=ht,F.value)return;h.recordCursor();const Lt=G(ht);if(Lt)if(!n.pair)Ge==="input"?ge(ht,{source:Ce}):Ae(ht,{source:Ce});else{let{value:mt}=E;Array.isArray(mt)?mt=[mt[0],mt[1]]:mt=["",""],mt[Ce]=ht,Ge==="input"?ge(mt,{source:Ce}):Ae(mt,{source:Ce})}re.$forceUpdate(),Lt||Ao(h.restoreCursor)}function G(oe){const{countGraphemes:Ce,maxlength:Ge,minlength:ht}=n;if(Ce){let mt;if(Ge!==void 0&&(mt===void 0&&(mt=Ce(oe)),mt>Number(Ge))||ht!==void 0&&(mt===void 0&&(mt=Ce(oe)),mt<Number(Ge)))return!1}const{allowInput:Lt}=n;return typeof Lt=="function"?Lt(oe):!0}function te(oe){de(oe),oe.relatedTarget===s.value&&at(),oe.relatedTarget!==null&&(oe.relatedTarget===d.value||oe.relatedTarget===u.value||oe.relatedTarget===a.value)||(O.value=!1),pe(oe,"blur"),f.value=null}function ne(oe,Ce){ot(oe),T.value=!0,O.value=!0,yt(),pe(oe,"focus"),Ce===0?f.value=d.value:Ce===1?f.value=u.value:Ce===2&&(f.value=a.value)}function K(oe){n.passivelyActivated&&(Y(oe),pe(oe,"blur"))}function me(oe){n.passivelyActivated&&(T.value=!0,x(oe),pe(oe,"focus"))}function pe(oe,Ce){oe.relatedTarget!==null&&(oe.relatedTarget===d.value||oe.relatedTarget===u.value||oe.relatedTarget===a.value||oe.relatedTarget===s.value)||(Ce==="focus"?(Fe(oe),T.value=!0):Ce==="blur"&&(Le(oe),T.value=!1))}function fe(oe,Ce){B(oe,Ce,"change")}function ke(oe){Z(oe)}function Ne(oe){Ue(oe),Me()}function Me(){n.pair?(ge(["",""],{source:"clear"}),Ae(["",""],{source:"clear"})):(ge("",{source:"clear"}),Ae("",{source:"clear"}))}function Xe(oe){const{onMousedown:Ce}=n;Ce&&Ce(oe);const{tagName:Ge}=oe.target;if(Ge!=="INPUT"&&Ge!=="TEXTAREA"){if(n.resizable){const{value:ht}=s;if(ht){const{left:Lt,top:mt,width:qt,height:qn}=ht.getBoundingClientRect(),hr=14;if(Lt+qt-hr<oe.clientX&&oe.clientX<Lt+qt&&mt+qn-hr<oe.clientY&&oe.clientY<mt+qn)return}}oe.preventDefault(),T.value||je()}}function St(){var oe;z.value=!0,n.type==="textarea"&&((oe=p.value)===null||oe===void 0||oe.handleMouseEnterWrapper())}function st(){var oe;z.value=!1,n.type==="textarea"&&((oe=p.value)===null||oe===void 0||oe.handleMouseLeaveWrapper())}function ve(){k.value||Q.value==="click"&&(ue.value=!ue.value)}function Qe(oe){if(k.value)return;oe.preventDefault();const Ce=ht=>{ht.preventDefault(),It("mouseup",document,Ce)};if(Nt("mouseup",document,Ce),Q.value!=="mousedown")return;ue.value=!0;const Ge=()=>{ue.value=!1,It("mouseup",document,Ge)};Nt("mouseup",document,Ge)}function Pt(oe){n.onKeyup&&it(n.onKeyup,oe)}function In(oe){switch(n.onKeydown&&it(n.onKeydown,oe),oe.key){case"Escape":Pe();break;case"Enter":ye(oe);break}}function ye(oe){var Ce,Ge;if(n.passivelyActivated){const{value:ht}=O;if(ht){n.internalDeactivateOnEnter&&Pe();return}oe.preventDefault(),n.type==="textarea"?(Ce=a.value)===null||Ce===void 0||Ce.focus():(Ge=d.value)===null||Ge===void 0||Ge.focus()}}function Pe(){n.passivelyActivated&&(O.value=!1,Ao(()=>{var oe;(oe=s.value)===null||oe===void 0||oe.focus()}))}function je(){var oe,Ce,Ge;k.value||(n.passivelyActivated?(oe=s.value)===null||oe===void 0||oe.focus():((Ce=a.value)===null||Ce===void 0||Ce.focus(),(Ge=d.value)===null||Ge===void 0||Ge.focus()))}function dt(){var oe;!((oe=s.value)===null||oe===void 0)&&oe.contains(document.activeElement)&&document.activeElement.blur()}function xt(){var oe,Ce;(oe=a.value)===null||oe===void 0||oe.select(),(Ce=d.value)===null||Ce===void 0||Ce.select()}function Bt(){k.value||(a.value?a.value.focus():d.value&&d.value.focus())}function Ot(){const{value:oe}=s;oe!=null&&oe.contains(document.activeElement)&&oe!==document.activeElement&&Pe()}function lt(oe){if(n.type==="textarea"){const{value:Ce}=a;Ce==null||Ce.scrollTo(oe)}else{const{value:Ce}=d;Ce==null||Ce.scrollTo(oe)}}function Ht(oe){const{type:Ce,pair:Ge,autosize:ht}=n;if(!Ge&&ht)if(Ce==="textarea"){const{value:Lt}=l;Lt&&(Lt.textContent=`${oe??""}\r
`)}else{const{value:Lt}=c;Lt&&(oe?Lt.textContent=oe:Lt.innerHTML="&nbsp;")}}function En(){X()}const ei=De({top:"0"});function ea(oe){var Ce;const{scrollTop:Ge}=oe.target;ei.value.top=`${-Ge}px`,(Ce=p.value)===null||Ce===void 0||Ce.syncUnifiedContainer()}let Ui=null;kr(()=>{const{autosize:oe,type:Ce}=n;oe&&Ce==="textarea"?Ui=Qt(E,Ge=>{!Array.isArray(Ge)&&Ge!==V&&Ht(Ge)}):Ui==null||Ui()});let ti=null;kr(()=>{n.type==="textarea"?ti=Qt(E,oe=>{var Ce;!Array.isArray(oe)&&oe!==V&&((Ce=p.value)===null||Ce===void 0||Ce.syncUnifiedContainer())}):ti==null||ti()}),Mt(oy,{mergedValueRef:E,maxlengthRef:q,mergedClsPrefixRef:e,countGraphemesRef:bt(n,"countGraphemes")});const ni={wrapperElRef:s,inputElRef:d,textareaElRef:a,isCompositing:F,clear:Me,focus:je,blur:dt,select:xt,deactivate:Ot,activate:Bt,scrollTo:lt},rc=Qs("Input",i,e),ta=Te(()=>{const{value:oe}=C,{common:{cubicBezierEaseInOut:Ce},self:{color:Ge,borderRadius:ht,textColor:Lt,caretColor:mt,caretColorError:qt,caretColorWarning:qn,textDecorationColor:hr,border:Yn,borderDisabled:pr,borderHover:Fo,borderFocus:ri,placeholderColor:na,placeholderColorDisabled:ra,lineHeightTextarea:ia,colorDisabled:ii,colorFocus:Hi,textColorDisabled:oa,boxShadowFocus:Wi,iconSize:Mn,colorFocusWarning:Mo,boxShadowFocusWarning:sa,borderWarning:aa,borderFocusWarning:ji,borderHoverWarning:ic,colorFocusError:la,boxShadowFocusError:oc,borderError:ca,borderFocusError:wf,borderHoverError:No,clearSize:zo,clearColor:da,clearColorHover:ua,clearColorPressed:Dr,iconColor:Gi,iconColorDisabled:$o,suffixTextColor:fa,countTextColor:Uo,countTextColorDisabled:oi,iconColorHover:sc,iconColorPressed:Xn,loadingColor:Ki,loadingColorError:Vi,loadingColorWarning:si,[We("padding",oe)]:ha,[We("fontSize",oe)]:ac,[We("height",oe)]:lc}}=o.value,{left:pa,right:Ho}=Kl(ha);return{"--n-bezier":Ce,"--n-count-text-color":Uo,"--n-count-text-color-disabled":oi,"--n-color":Ge,"--n-font-size":ac,"--n-border-radius":ht,"--n-height":lc,"--n-padding-left":pa,"--n-padding-right":Ho,"--n-text-color":Lt,"--n-caret-color":mt,"--n-text-decoration-color":hr,"--n-border":Yn,"--n-border-disabled":pr,"--n-border-hover":Fo,"--n-border-focus":ri,"--n-placeholder-color":na,"--n-placeholder-color-disabled":ra,"--n-icon-size":Mn,"--n-line-height-textarea":ia,"--n-color-disabled":ii,"--n-color-focus":Hi,"--n-text-color-disabled":oa,"--n-box-shadow-focus":Wi,"--n-loading-color":Ki,"--n-caret-color-warning":qn,"--n-color-focus-warning":Mo,"--n-box-shadow-focus-warning":sa,"--n-border-warning":aa,"--n-border-focus-warning":ji,"--n-border-hover-warning":ic,"--n-loading-color-warning":si,"--n-caret-color-error":qt,"--n-color-focus-error":la,"--n-box-shadow-focus-error":oc,"--n-border-error":ca,"--n-border-focus-error":wf,"--n-border-hover-error":No,"--n-loading-color-error":Vi,"--n-clear-color":da,"--n-clear-size":zo,"--n-clear-color-hover":ua,"--n-clear-color-pressed":Dr,"--n-icon-color":Gi,"--n-icon-color-hover":sc,"--n-icon-color-pressed":Xn,"--n-icon-color-disabled":$o,"--n-suffix-text-color":fa}}),fr=r?xn("input",Te(()=>{const{value:oe}=C;return oe[0]}),ta,n):void 0;return Object.assign(Object.assign({},ni),{wrapperElRef:s,inputElRef:d,inputMirrorElRef:c,inputEl2Ref:u,textareaElRef:a,textareaMirrorElRef:l,textareaScrollbarInstRef:p,rtlEnabled:rc,uncontrolledValue:g,mergedValue:E,passwordVisible:ue,mergedPlaceholder:_,showPlaceholder1:H,showPlaceholder2:I,mergedFocus:W,isComposing:F,activated:O,showClearButton:ie,mergedSize:C,mergedDisabled:k,textDecorationStyle:J,mergedClsPrefix:e,mergedBordered:t,mergedShowPasswordOn:Q,placeholderStyle:ei,mergedStatus:M,textAreaScrollContainerWidth:ae,handleTextAreaScroll:ea,handleCompositionStart:ee,handleCompositionEnd:N,handleInput:B,handleInputBlur:te,handleInputFocus:ne,handleWrapperBlur:K,handleWrapperFocus:me,handleMouseEnter:St,handleMouseLeave:st,handleMouseDown:Xe,handleChange:fe,handleClick:ke,handleClear:Ne,handlePasswordToggleClick:ve,handlePasswordToggleMousedown:Qe,handleWrapperKeydown:In,handleWrapperKeyup:Pt,handleTextAreaMirrorResize:En,getTextareaScrollContainer:()=>a.value,mergedTheme:o,cssVars:r?void 0:ta,themeClass:fr==null?void 0:fr.themeClass,onRender:fr==null?void 0:fr.onRender})},render(){var n,e;const{mergedClsPrefix:t,mergedStatus:r,themeClass:i,type:o,countGraphemes:s,onRender:a}=this,l=this.$slots;return a==null||a(),j("div",{ref:"wrapperElRef",class:[`${t}-input`,i,r&&`${t}-input--${r}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:o==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&o!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},j("div",{class:`${t}-input-wrapper`},ln(l.prefix,c=>c&&j("div",{class:`${t}-input__prefix`},c)),o==="textarea"?j(qu,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,d;const{textAreaScrollContainerWidth:u}=this,f={width:this.autosize&&u&&`${u}px`};return j(_t,null,j("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:s?void 0:this.maxlength,minlength:s?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style,f],onBlur:this.handleInputBlur,onFocus:h=>{this.handleInputFocus(h,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?j("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,f],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?j(gl,{onResize:this.handleTextAreaMirrorResize},{default:()=>j("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):j("div",{class:`${t}-input__input`},j("input",Object.assign({type:o==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":o},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(n=this.inputProps)===null||n===void 0?void 0:n.class],style:[this.textDecorationStyle[0],(e=this.inputProps)===null||e===void 0?void 0:e.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:s?void 0:this.maxlength,minlength:s?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,0)},onInput:c=>{this.handleInput(c,0)},onChange:c=>{this.handleChange(c,0)}})),this.showPlaceholder1?j("div",{class:`${t}-input__placeholder`},j("span",null,this.mergedPlaceholder[0])):null,this.autosize?j("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&ln(l.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?j("div",{class:`${t}-input__suffix`},[ln(l["clear-icon-placeholder"],d=>(this.clearable||d)&&j(zd,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>d,icon:()=>{var u,f;return(f=(u=this.$slots)["clear-icon"])===null||f===void 0?void 0:f.call(u)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?j(OL,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?j(Ap,null,{default:d=>{var u;return(u=l.count)===null||u===void 0?void 0:u.call(l,d)}}):null,this.mergedShowPasswordOn&&this.type==="password"?j("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?po(l["password-visible-icon"],()=>[j(Yr,{clsPrefix:t},{default:()=>j(RI,null)})]):po(l["password-invisible-icon"],()=>[j(Yr,{clsPrefix:t},{default:()=>j(_I,null)})])):null]):null)),this.pair?j("span",{class:`${t}-input__separator`},po(l.separator,()=>[this.separator])):null,this.pair?j("div",{class:`${t}-input-wrapper`},j("div",{class:`${t}-input__input`},j("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:s?void 0:this.maxlength,minlength:s?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,1)},onInput:c=>{this.handleInput(c,1)},onChange:c=>{this.handleChange(c,1)}}),this.showPlaceholder2?j("div",{class:`${t}-input__placeholder`},j("span",null,this.mergedPlaceholder[1])):null),ln(l.suffix,c=>(this.clearable||c)&&j("div",{class:`${t}-input__suffix`},[this.clearable&&j(zd,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var d;return(d=l["clear-icon"])===null||d===void 0?void 0:d.call(l)},placeholder:()=>{var d;return(d=l["clear-icon-placeholder"])===null||d===void 0?void 0:d.call(l)}}),c]))):null,this.mergedBordered?j("div",{class:`${t}-input__border`}):null,this.mergedBordered?j("div",{class:`${t}-input__state-border`}):null,this.showCount&&o==="textarea"?j(Ap,null,{default:c=>{var d;const{renderCount:u}=this;return u?u(c):(d=l.count)===null||d===void 0?void 0:d.call(l,c)}}):null)}});function ui(n){return bn(n,[255,255,255,.16])}function Ra(n){return bn(n,[0,0,0,.12])}const rR="n-button-group",iR={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};function oR(n){const{heightTiny:e,heightSmall:t,heightMedium:r,heightLarge:i,borderRadius:o,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,textColor2:u,textColor3:f,primaryColorHover:h,primaryColorPressed:p,borderColor:m,primaryColor:g,baseColor:y,infoColor:E,infoColorHover:S,infoColorPressed:C,successColor:k,successColorHover:M,successColorPressed:T,warningColor:z,warningColorHover:F,warningColorPressed:O,errorColor:V,errorColorHover:_,errorColorPressed:H,fontWeight:I,buttonColor2:W,buttonColor2Hover:ie,buttonColor2Pressed:Q,fontWeightStrong:ue}=n;return Object.assign(Object.assign({},iR),{heightTiny:e,heightSmall:t,heightMedium:r,heightLarge:i,borderRadiusTiny:o,borderRadiusSmall:o,borderRadiusMedium:o,borderRadiusLarge:o,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:W,colorSecondaryHover:ie,colorSecondaryPressed:Q,colorTertiary:W,colorTertiaryHover:ie,colorTertiaryPressed:Q,colorQuaternary:"#0000",colorQuaternaryHover:ie,colorQuaternaryPressed:Q,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:u,textColorTertiary:f,textColorHover:h,textColorPressed:p,textColorFocus:h,textColorDisabled:u,textColorText:u,textColorTextHover:h,textColorTextPressed:p,textColorTextFocus:h,textColorTextDisabled:u,textColorGhost:u,textColorGhostHover:h,textColorGhostPressed:p,textColorGhostFocus:h,textColorGhostDisabled:u,border:`1px solid ${m}`,borderHover:`1px solid ${h}`,borderPressed:`1px solid ${p}`,borderFocus:`1px solid ${h}`,borderDisabled:`1px solid ${m}`,rippleColor:g,colorPrimary:g,colorHoverPrimary:h,colorPressedPrimary:p,colorFocusPrimary:h,colorDisabledPrimary:g,textColorPrimary:y,textColorHoverPrimary:y,textColorPressedPrimary:y,textColorFocusPrimary:y,textColorDisabledPrimary:y,textColorTextPrimary:g,textColorTextHoverPrimary:h,textColorTextPressedPrimary:p,textColorTextFocusPrimary:h,textColorTextDisabledPrimary:u,textColorGhostPrimary:g,textColorGhostHoverPrimary:h,textColorGhostPressedPrimary:p,textColorGhostFocusPrimary:h,textColorGhostDisabledPrimary:g,borderPrimary:`1px solid ${g}`,borderHoverPrimary:`1px solid ${h}`,borderPressedPrimary:`1px solid ${p}`,borderFocusPrimary:`1px solid ${h}`,borderDisabledPrimary:`1px solid ${g}`,rippleColorPrimary:g,colorInfo:E,colorHoverInfo:S,colorPressedInfo:C,colorFocusInfo:S,colorDisabledInfo:E,textColorInfo:y,textColorHoverInfo:y,textColorPressedInfo:y,textColorFocusInfo:y,textColorDisabledInfo:y,textColorTextInfo:E,textColorTextHoverInfo:S,textColorTextPressedInfo:C,textColorTextFocusInfo:S,textColorTextDisabledInfo:u,textColorGhostInfo:E,textColorGhostHoverInfo:S,textColorGhostPressedInfo:C,textColorGhostFocusInfo:S,textColorGhostDisabledInfo:E,borderInfo:`1px solid ${E}`,borderHoverInfo:`1px solid ${S}`,borderPressedInfo:`1px solid ${C}`,borderFocusInfo:`1px solid ${S}`,borderDisabledInfo:`1px solid ${E}`,rippleColorInfo:E,colorSuccess:k,colorHoverSuccess:M,colorPressedSuccess:T,colorFocusSuccess:M,colorDisabledSuccess:k,textColorSuccess:y,textColorHoverSuccess:y,textColorPressedSuccess:y,textColorFocusSuccess:y,textColorDisabledSuccess:y,textColorTextSuccess:k,textColorTextHoverSuccess:M,textColorTextPressedSuccess:T,textColorTextFocusSuccess:M,textColorTextDisabledSuccess:u,textColorGhostSuccess:k,textColorGhostHoverSuccess:M,textColorGhostPressedSuccess:T,textColorGhostFocusSuccess:M,textColorGhostDisabledSuccess:k,borderSuccess:`1px solid ${k}`,borderHoverSuccess:`1px solid ${M}`,borderPressedSuccess:`1px solid ${T}`,borderFocusSuccess:`1px solid ${M}`,borderDisabledSuccess:`1px solid ${k}`,rippleColorSuccess:k,colorWarning:z,colorHoverWarning:F,colorPressedWarning:O,colorFocusWarning:F,colorDisabledWarning:z,textColorWarning:y,textColorHoverWarning:y,textColorPressedWarning:y,textColorFocusWarning:y,textColorDisabledWarning:y,textColorTextWarning:z,textColorTextHoverWarning:F,textColorTextPressedWarning:O,textColorTextFocusWarning:F,textColorTextDisabledWarning:u,textColorGhostWarning:z,textColorGhostHoverWarning:F,textColorGhostPressedWarning:O,textColorGhostFocusWarning:F,textColorGhostDisabledWarning:z,borderWarning:`1px solid ${z}`,borderHoverWarning:`1px solid ${F}`,borderPressedWarning:`1px solid ${O}`,borderFocusWarning:`1px solid ${F}`,borderDisabledWarning:`1px solid ${z}`,rippleColorWarning:z,colorError:V,colorHoverError:_,colorPressedError:H,colorFocusError:_,colorDisabledError:V,textColorError:y,textColorHoverError:y,textColorPressedError:y,textColorFocusError:y,textColorDisabledError:y,textColorTextError:V,textColorTextHoverError:_,textColorTextPressedError:H,textColorTextFocusError:_,textColorTextDisabledError:u,textColorGhostError:V,textColorGhostHoverError:_,textColorGhostPressedError:H,textColorGhostFocusError:_,textColorGhostDisabledError:V,borderError:`1px solid ${V}`,borderHoverError:`1px solid ${_}`,borderPressedError:`1px solid ${H}`,borderFocusError:`1px solid ${_}`,borderDisabledError:`1px solid ${V}`,rippleColorError:V,waveOpacity:"0.6",fontWeight:I,fontWeightStrong:ue})}const sR={name:"Button",common:Fn,self:oR},aR=sR,lR=xe([we("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Ie("color",[he("border",{borderColor:"var(--n-border-color)"}),Ie("disabled",[he("border",{borderColor:"var(--n-border-color-disabled)"})]),Zt("disabled",[xe("&:focus",[he("state-border",{borderColor:"var(--n-border-color-focus)"})]),xe("&:hover",[he("state-border",{borderColor:"var(--n-border-color-hover)"})]),xe("&:active",[he("state-border",{borderColor:"var(--n-border-color-pressed)"})]),Ie("pressed",[he("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),Ie("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[he("border",{border:"var(--n-border-disabled)"})]),Zt("disabled",[xe("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[he("state-border",{border:"var(--n-border-focus)"})]),xe("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[he("state-border",{border:"var(--n-border-hover)"})]),xe("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[he("state-border",{border:"var(--n-border-pressed)"})]),Ie("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[he("state-border",{border:"var(--n-border-pressed)"})])]),Ie("loading","cursor: wait;"),we("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[Ie("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),ql&&"MozBoxSizing"in document.createElement("div").style?xe("&::moz-focus-inner",{border:0}):null,he("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),he("border",{border:"var(--n-border)"}),he("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),he("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[we("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[El({top:"50%",originalTransform:"translateY(-50%)"})]),FL()]),he("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[xe("~",[he("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),Ie("block",`
 display: flex;
 width: 100%;
 `),Ie("dashed",[he("border, state-border",{borderStyle:"dashed !important"})]),Ie("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),xe("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),xe("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),cR=Object.assign(Object.assign({},ft.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!iy}}),dR=Ve({name:"Button",props:cR,setup(n){const e=De(null),t=De(null),r=De(!1),i=pn(()=>!n.quaternary&&!n.tertiary&&!n.secondary&&!n.text&&(!n.color||n.ghost||n.dashed)&&n.bordered),o=rt(rR,{}),{mergedSizeRef:s}=mg({},{defaultSize:"medium",mergedSize:C=>{const{size:k}=n;if(k)return k;const{size:M}=o;if(M)return M;const{mergedSize:T}=C||{};return T?T.value:"medium"}}),a=Te(()=>n.focusable&&!n.disabled),l=C=>{var k;a.value||C.preventDefault(),!n.nativeFocusBehavior&&(C.preventDefault(),!n.disabled&&a.value&&((k=e.value)===null||k===void 0||k.focus({preventScroll:!0})))},c=C=>{var k;if(!n.disabled&&!n.loading){const{onClick:M}=n;M&&it(M,C),n.text||(k=t.value)===null||k===void 0||k.play()}},d=C=>{switch(C.key){case"Enter":if(!n.keyboard)return;r.value=!1}},u=C=>{switch(C.key){case"Enter":if(!n.keyboard||n.loading){C.preventDefault();return}r.value=!0}},f=()=>{r.value=!1},{inlineThemeDisabled:h,mergedClsPrefixRef:p,mergedRtlRef:m}=mn(n),g=ft("Button","-button",lR,aR,n,p),y=Qs("Button",m,p),E=Te(()=>{const C=g.value,{common:{cubicBezierEaseInOut:k,cubicBezierEaseOut:M},self:T}=C,{rippleDuration:z,opacityDisabled:F,fontWeight:O,fontWeightStrong:V}=T,_=s.value,{dashed:H,type:I,ghost:W,text:ie,color:Q,round:ue,circle:J,textColor:ae,secondary:X,tertiary:q,quaternary:re,strong:ge}=n,Ae={"--n-font-weight":ge?V:O};let Le={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const Fe=I==="tertiary",Ue=I==="default",de=Fe?"default":I;if(ie){const te=ae||Q;Le={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":te||T[We("textColorText",de)],"--n-text-color-hover":te?ui(te):T[We("textColorTextHover",de)],"--n-text-color-pressed":te?Ra(te):T[We("textColorTextPressed",de)],"--n-text-color-focus":te?ui(te):T[We("textColorTextHover",de)],"--n-text-color-disabled":te||T[We("textColorTextDisabled",de)]}}else if(W||H){const te=ae||Q;Le={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":Q||T[We("rippleColor",de)],"--n-text-color":te||T[We("textColorGhost",de)],"--n-text-color-hover":te?ui(te):T[We("textColorGhostHover",de)],"--n-text-color-pressed":te?Ra(te):T[We("textColorGhostPressed",de)],"--n-text-color-focus":te?ui(te):T[We("textColorGhostHover",de)],"--n-text-color-disabled":te||T[We("textColorGhostDisabled",de)]}}else if(X){const te=Ue?T.textColor:Fe?T.textColorTertiary:T[We("color",de)],ne=Q||te,K=I!=="default"&&I!=="tertiary";Le={"--n-color":K?Vt(ne,{alpha:Number(T.colorOpacitySecondary)}):T.colorSecondary,"--n-color-hover":K?Vt(ne,{alpha:Number(T.colorOpacitySecondaryHover)}):T.colorSecondaryHover,"--n-color-pressed":K?Vt(ne,{alpha:Number(T.colorOpacitySecondaryPressed)}):T.colorSecondaryPressed,"--n-color-focus":K?Vt(ne,{alpha:Number(T.colorOpacitySecondaryHover)}):T.colorSecondaryHover,"--n-color-disabled":T.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":ne,"--n-text-color-hover":ne,"--n-text-color-pressed":ne,"--n-text-color-focus":ne,"--n-text-color-disabled":ne}}else if(q||re){const te=Ue?T.textColor:Fe?T.textColorTertiary:T[We("color",de)],ne=Q||te;q?(Le["--n-color"]=T.colorTertiary,Le["--n-color-hover"]=T.colorTertiaryHover,Le["--n-color-pressed"]=T.colorTertiaryPressed,Le["--n-color-focus"]=T.colorSecondaryHover,Le["--n-color-disabled"]=T.colorTertiary):(Le["--n-color"]=T.colorQuaternary,Le["--n-color-hover"]=T.colorQuaternaryHover,Le["--n-color-pressed"]=T.colorQuaternaryPressed,Le["--n-color-focus"]=T.colorQuaternaryHover,Le["--n-color-disabled"]=T.colorQuaternary),Le["--n-ripple-color"]="#0000",Le["--n-text-color"]=ne,Le["--n-text-color-hover"]=ne,Le["--n-text-color-pressed"]=ne,Le["--n-text-color-focus"]=ne,Le["--n-text-color-disabled"]=ne}else Le={"--n-color":Q||T[We("color",de)],"--n-color-hover":Q?ui(Q):T[We("colorHover",de)],"--n-color-pressed":Q?Ra(Q):T[We("colorPressed",de)],"--n-color-focus":Q?ui(Q):T[We("colorFocus",de)],"--n-color-disabled":Q||T[We("colorDisabled",de)],"--n-ripple-color":Q||T[We("rippleColor",de)],"--n-text-color":ae||(Q?T.textColorPrimary:Fe?T.textColorTertiary:T[We("textColor",de)]),"--n-text-color-hover":ae||(Q?T.textColorHoverPrimary:T[We("textColorHover",de)]),"--n-text-color-pressed":ae||(Q?T.textColorPressedPrimary:T[We("textColorPressed",de)]),"--n-text-color-focus":ae||(Q?T.textColorFocusPrimary:T[We("textColorFocus",de)]),"--n-text-color-disabled":ae||(Q?T.textColorDisabledPrimary:T[We("textColorDisabled",de)])};let ot={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};ie?ot={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ot={"--n-border":T[We("border",de)],"--n-border-hover":T[We("borderHover",de)],"--n-border-pressed":T[We("borderPressed",de)],"--n-border-focus":T[We("borderFocus",de)],"--n-border-disabled":T[We("borderDisabled",de)]};const{[We("height",_)]:at,[We("fontSize",_)]:yt,[We("padding",_)]:Z,[We("paddingRound",_)]:x,[We("iconSize",_)]:Y,[We("borderRadius",_)]:ee,[We("iconMargin",_)]:N,waveOpacity:B}=T,G={"--n-width":J&&!ie?at:"initial","--n-height":ie?"initial":at,"--n-font-size":yt,"--n-padding":J||ie?"initial":ue?x:Z,"--n-icon-size":Y,"--n-icon-margin":N,"--n-border-radius":ie?"initial":J||ue?at:ee};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":k,"--n-bezier-ease-out":M,"--n-ripple-duration":z,"--n-opacity-disabled":F,"--n-wave-opacity":B},Ae),Le),ot),G)}),S=h?xn("button",Te(()=>{let C="";const{dashed:k,type:M,ghost:T,text:z,color:F,round:O,circle:V,textColor:_,secondary:H,tertiary:I,quaternary:W,strong:ie}=n;k&&(C+="a"),T&&(C+="b"),z&&(C+="c"),O&&(C+="d"),V&&(C+="e"),H&&(C+="f"),I&&(C+="g"),W&&(C+="h"),ie&&(C+="i"),F&&(C+=`j${bh(F)}`),_&&(C+=`k${bh(_)}`);const{value:Q}=s;return C+=`l${Q[0]}`,C+=`m${M[0]}`,C}),E,n):void 0;return{selfElRef:e,waveElRef:t,mergedClsPrefix:p,mergedFocusable:a,mergedSize:s,showBorder:i,enterPressed:r,rtlEnabled:y,handleMousedown:l,handleKeydown:u,handleBlur:f,handleKeyup:d,handleClick:c,customColorCssVars:Te(()=>{const{color:C}=n;if(!C)return null;const k=ui(C);return{"--n-border-color":C,"--n-border-color-hover":k,"--n-border-color-pressed":Ra(C),"--n-border-color-focus":k,"--n-border-color-disabled":C}}),cssVars:h?void 0:E,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:n,tag:e,onRender:t}=this;t==null||t();const r=ln(this.$slots.default,i=>i&&j("span",{class:`${n}-button__content`},i));return j(e,{ref:"selfElRef",class:[this.themeClass,`${n}-button`,`${n}-button--${this.type}-type`,`${n}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${n}-button--rtl`,this.disabled&&`${n}-button--disabled`,this.block&&`${n}-button--block`,this.enterPressed&&`${n}-button--pressed`,!this.text&&this.dashed&&`${n}-button--dashed`,this.color&&`${n}-button--color`,this.secondary&&`${n}-button--secondary`,this.loading&&`${n}-button--loading`,this.ghost&&`${n}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&r,j(Ku,{width:!0},{default:()=>ln(this.$slots.icon,i=>(this.loading||this.renderIcon||i)&&j("span",{class:`${n}-button__icon`,style:{margin:Cd(this.$slots.default)?"0":""}},j(Gu,null,{default:()=>this.loading?j(Vg,{clsPrefix:n,key:"loading",class:`${n}-icon-slot`,strokeWidth:20}):j("div",{key:"icon",class:`${n}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():i)})))}),this.iconPlacement==="left"&&r,this.text?null:j(CL,{ref:"waveElRef",clsPrefix:n}),this.showBorder?j("div",{"aria-hidden":!0,class:`${n}-button__border`,style:this.customColorCssVars}):null,this.showBorder?j("div",{"aria-hidden":!0,class:`${n}-button__state-border`,style:this.customColorCssVars}):null)}}),uR=dR,fR={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function hR(n){const{primaryColor:e,borderRadius:t,lineHeight:r,fontSize:i,cardColor:o,textColor2:s,textColor1:a,dividerColor:l,fontWeightStrong:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:f,closeColorHover:h,closeColorPressed:p,modalColor:m,boxShadow1:g,popoverColor:y,actionColor:E}=n;return Object.assign(Object.assign({},fR),{lineHeight:r,color:o,colorModal:m,colorPopover:y,colorTarget:e,colorEmbedded:E,colorEmbeddedModal:E,colorEmbeddedPopover:E,textColor:s,titleTextColor:a,borderColor:l,actionColor:E,titleFontWeight:c,closeColorHover:h,closeColorPressed:p,closeBorderRadius:t,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:f,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:g,borderRadius:t})}const pR={name:"Card",common:Fn,self:hR},mR=pR,gR=xe([we("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[BE({background:"var(--n-color-modal)"}),Ie("hoverable",[xe("&:hover","box-shadow: var(--n-box-shadow);")]),Ie("content-segmented",[xe(">",[he("content",{paddingTop:"var(--n-padding-bottom)"})])]),Ie("content-soft-segmented",[xe(">",[he("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),Ie("footer-segmented",[xe(">",[he("footer",{paddingTop:"var(--n-padding-bottom)"})])]),Ie("footer-soft-segmented",[xe(">",[he("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),xe(">",[we("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[he("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),he("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),he("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),he("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),he("content","flex: 1; min-width: 0;"),he("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[xe("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),he("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),we("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[xe("img",`
 display: block;
 width: 100%;
 `)]),Ie("bordered",`
 border: 1px solid var(--n-border-color);
 `,[xe("&:target","border-color: var(--n-color-target);")]),Ie("action-segmented",[xe(">",[he("action",[xe("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),Ie("content-segmented, content-soft-segmented",[xe(">",[he("content",{transition:"border-color 0.3s var(--n-bezier)"},[xe("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),Ie("footer-segmented, footer-soft-segmented",[xe(">",[he("footer",{transition:"border-color 0.3s var(--n-bezier)"},[xe("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),Ie("embedded",`
 background-color: var(--n-color-embedded);
 `)]),DE(we("card",`
 background: var(--n-color-modal);
 `,[Ie("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),PE(we("card",`
 background: var(--n-color-popover);
 `,[Ie("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),yR={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},vR=Object.assign(Object.assign({},ft.props),yR),bR=Ve({name:"Card",props:vR,setup(n){const e=()=>{const{onClose:c}=n;c&&it(c)},{inlineThemeDisabled:t,mergedClsPrefixRef:r,mergedRtlRef:i}=mn(n),o=ft("Card","-card",gR,mR,n,r),s=Qs("Card",i,r),a=Te(()=>{const{size:c}=n,{self:{color:d,colorModal:u,colorTarget:f,textColor:h,titleTextColor:p,titleFontWeight:m,borderColor:g,actionColor:y,borderRadius:E,lineHeight:S,closeIconColor:C,closeIconColorHover:k,closeIconColorPressed:M,closeColorHover:T,closeColorPressed:z,closeBorderRadius:F,closeIconSize:O,closeSize:V,boxShadow:_,colorPopover:H,colorEmbedded:I,colorEmbeddedModal:W,colorEmbeddedPopover:ie,[We("padding",c)]:Q,[We("fontSize",c)]:ue,[We("titleFontSize",c)]:J},common:{cubicBezierEaseInOut:ae}}=o.value,{top:X,left:q,bottom:re}=Kl(Q);return{"--n-bezier":ae,"--n-border-radius":E,"--n-color":d,"--n-color-modal":u,"--n-color-popover":H,"--n-color-embedded":I,"--n-color-embedded-modal":W,"--n-color-embedded-popover":ie,"--n-color-target":f,"--n-text-color":h,"--n-line-height":S,"--n-action-color":y,"--n-title-text-color":p,"--n-title-font-weight":m,"--n-close-icon-color":C,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":M,"--n-close-color-hover":T,"--n-close-color-pressed":z,"--n-border-color":g,"--n-box-shadow":_,"--n-padding-top":X,"--n-padding-bottom":re,"--n-padding-left":q,"--n-font-size":ue,"--n-title-font-size":J,"--n-close-size":V,"--n-close-icon-size":O,"--n-close-border-radius":F}}),l=t?xn("card",Te(()=>n.size[0]),a,n):void 0;return{rtlEnabled:s,mergedClsPrefix:r,mergedTheme:o,handleCloseClick:e,cssVars:t?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:n,bordered:e,hoverable:t,mergedClsPrefix:r,rtlEnabled:i,onRender:o,embedded:s,tag:a,$slots:l}=this;return o==null||o(),j(a,{class:[`${r}-card`,this.themeClass,s&&`${r}-card--embedded`,{[`${r}-card--rtl`]:i,[`${r}-card--content${typeof n!="boolean"&&n.content==="soft"?"-soft":""}-segmented`]:n===!0||n!==!1&&n.content,[`${r}-card--footer${typeof n!="boolean"&&n.footer==="soft"?"-soft":""}-segmented`]:n===!0||n!==!1&&n.footer,[`${r}-card--action-segmented`]:n===!0||n!==!1&&n.action,[`${r}-card--bordered`]:e,[`${r}-card--hoverable`]:t}],style:this.cssVars,role:this.role},ln(l.cover,c=>{const d=this.cover?Hn([this.cover()]):c;return d&&j("div",{class:`${r}-card-cover`,role:"none"},d)}),ln(l.header,c=>{const{title:d}=this,u=d?Hn(typeof d=="function"?[d()]:[d]):c;return u||this.closable?j("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},j("div",{class:`${r}-card-header__main`,role:"heading"},u),ln(l["header-extra"],f=>{const h=this.headerExtra?Hn([this.headerExtra()]):f;return h&&j("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},h)}),this.closable&&j(Kg,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),ln(l.default,c=>{const{content:d}=this,u=d?Hn(typeof d=="function"?[d()]:[d]):c;return u&&j("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},u)}),ln(l.footer,c=>{const d=this.footer?Hn([this.footer()]):c;return d&&j("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},d)}),ln(l.action,c=>{const d=this.action?Hn([this.action()]):c;return d&&j("div",{class:`${r}-card__action`,role:"none"},d)}))}}),AR={padding:"8px 14px"};function xR(n){const{borderRadius:e,boxShadow2:t,baseColor:r}=n;return Object.assign(Object.assign({},AR),{borderRadius:e,boxShadow:t,color:bn(r,"rgba(0, 0, 0, .85)"),textColor:r})}const ER={name:"Tooltip",common:Fn,peers:{Popover:Yu},self:xR},sy=ER,wR={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function CR(n){const{primaryColor:e,textColor2:t,dividerColor:r,hoverColor:i,popoverColor:o,invertedColor:s,borderRadius:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:u,heightSmall:f,heightMedium:h,heightLarge:p,heightHuge:m,textColor3:g,opacityDisabled:y}=n;return Object.assign(Object.assign({},wR),{optionHeightSmall:f,optionHeightMedium:h,optionHeightLarge:p,optionHeightHuge:m,borderRadius:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:u,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:e,optionTextColorChildActive:e,color:o,dividerColor:r,suffixColor:t,prefixColor:t,optionColorHover:i,optionColorActive:Vt(e,{alpha:.1}),groupHeaderTextColor:g,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:s,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:e,optionColorActiveInverted:e,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:y})}const SR={name:"Dropdown",common:Fn,peers:{Popover:Yu},self:CR},ay=SR,TR=Object.assign(Object.assign({},Jl),ft.props),kR=Ve({name:"Tooltip",props:TR,__popover__:!0,setup(n){const{mergedClsPrefixRef:e}=mn(n),t=ft("Tooltip","-tooltip",void 0,sy,n,e),r=De(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(o){r.value.setShow(o)}}),{popoverRef:r,mergedTheme:t,popoverThemeOverrides:Te(()=>t.value.self)})},render(){const{mergedTheme:n,internalExtraClass:e}=this;return j(ny,Object.assign(Object.assign({},this.$props),{theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:e.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ly=Ve({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return j("div",{class:`${this.clsPrefix}-dropdown-divider`})}});function IR(n){const{textColorBase:e,opacity1:t,opacity2:r,opacity3:i,opacity4:o,opacity5:s}=n;return{color:e,opacity1Depth:t,opacity2Depth:r,opacity3Depth:i,opacity4Depth:o,opacity5Depth:s}}const LR={name:"Icon",common:Fn,self:IR},RR=LR,_R=we("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[Ie("color-transition",{transition:"color .3s var(--n-bezier)"}),Ie("depth",{color:"var(--n-color)"},[xe("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),xe("svg",{height:"1em",width:"1em"})]),DR=Object.assign(Object.assign({},ft.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),cy=Ve({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:DR,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=mn(n),r=ft("Icon","-icon",_R,RR,n,e),i=Te(()=>{const{depth:s}=n,{common:{cubicBezierEaseInOut:a},self:l}=r.value;if(s!==void 0){const{color:c,[`opacity${s}Depth`]:d}=l;return{"--n-bezier":a,"--n-color":c,"--n-opacity":d}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),o=t?xn("icon",Te(()=>`${n.depth||"d"}`),i,n):void 0;return{mergedClsPrefix:e,mergedStyle:Te(()=>{const{size:s,color:a}=n;return{fontSize:wi(s),color:a}}),cssVars:t?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n;const{$parent:e,depth:t,mergedClsPrefix:r,component:i,onRender:o,themeClass:s}=this;return!((n=e==null?void 0:e.$options)===null||n===void 0)&&n._n_icon__&&ml("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),j("i",Qr(this.$attrs,{role:"img",class:[`${r}-icon`,s,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?j(i):this.$slots)}}),Xu="n-dropdown-menu",ec="n-dropdown",xp="n-dropdown-option";function $d(n,e){return n.type==="submenu"||n.type===void 0&&n[e]!==void 0}function PR(n){return n.type==="group"}function dy(n){return n.type==="divider"}function BR(n){return n.type==="render"}const uy=Ve({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(n){const e=rt(ec),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:a,mergedShowRef:l,renderLabelRef:c,renderIconRef:d,labelFieldRef:u,childrenFieldRef:f,renderOptionRef:h,nodePropsRef:p,menuPropsRef:m}=e,g=rt(xp,null),y=rt(Xu),E=rt(Yl),S=Te(()=>n.tmNode.rawNode),C=Te(()=>{const{value:Q}=f;return $d(n.tmNode.rawNode,Q)}),k=Te(()=>{const{disabled:Q}=n.tmNode;return Q}),M=Te(()=>{if(!C.value)return!1;const{key:Q,disabled:ue}=n.tmNode;if(ue)return!1;const{value:J}=t,{value:ae}=r,{value:X}=i,{value:q}=o;return J!==null?q.includes(Q):ae!==null?q.includes(Q)&&q[q.length-1]!==Q:X!==null?q.includes(Q):!1}),T=Te(()=>r.value===null&&!a.value),z=ME(M,300,T),F=Te(()=>!!(g!=null&&g.enteringSubmenuRef.value)),O=De(!1);Mt(xp,{enteringSubmenuRef:O});function V(){O.value=!0}function _(){O.value=!1}function H(){const{parentKey:Q,tmNode:ue}=n;ue.disabled||l.value&&(i.value=Q,r.value=null,t.value=ue.key)}function I(){const{tmNode:Q}=n;Q.disabled||l.value&&t.value!==Q.key&&H()}function W(Q){if(n.tmNode.disabled||!l.value)return;const{relatedTarget:ue}=Q;ue&&!hh({target:ue},"dropdownOption")&&!hh({target:ue},"scrollbarRail")&&(t.value=null)}function ie(){const{value:Q}=C,{tmNode:ue}=n;l.value&&!Q&&!ue.disabled&&(e.doSelect(ue.key,ue.rawNode),e.doUpdateShow(!1))}return{labelField:u,renderLabel:c,renderIcon:d,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:m,popoverBody:E,animated:a,mergedShowSubmenu:Te(()=>z.value&&!F.value),rawNode:S,hasSubmenu:C,pending:pn(()=>{const{value:Q}=o,{key:ue}=n.tmNode;return Q.includes(ue)}),childActive:pn(()=>{const{value:Q}=s,{key:ue}=n.tmNode,J=Q.findIndex(ae=>ue===ae);return J===-1?!1:J<Q.length-1}),active:pn(()=>{const{value:Q}=s,{key:ue}=n.tmNode,J=Q.findIndex(ae=>ue===ae);return J===-1?!1:J===Q.length-1}),mergedDisabled:k,renderOption:h,nodeProps:p,handleClick:ie,handleMouseMove:I,handleMouseEnter:H,handleMouseLeave:W,handleSubmenuBeforeEnter:V,handleSubmenuAfterEnter:_}},render(){var n,e;const{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:o,siblingHasIcon:s,siblingHasSubmenu:a,renderLabel:l,renderIcon:c,renderOption:d,nodeProps:u,props:f,scrollable:h}=this;let p=null;if(i){const E=(n=this.menuProps)===null||n===void 0?void 0:n.call(this,r,r.children);p=j(fy,Object.assign({},E,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const m={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=u==null?void 0:u(r),y=j("div",Object.assign({class:[`${o}-dropdown-option`,g==null?void 0:g.class],"data-dropdown-option":!0},g),j("div",Qr(m,f),[j("div",{class:[`${o}-dropdown-option-body__prefix`,s&&`${o}-dropdown-option-body__prefix--show-icon`]},[c?c(r):ar(r.icon)]),j("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},l?l(r):ar((e=r[this.labelField])!==null&&e!==void 0?e:r.title)),j("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,a&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?j(cy,null,{default:()=>j(Gg,null)}):null)]),this.hasSubmenu?j(eg,null,{default:()=>[j(tg,null,{default:()=>j("div",{class:`${o}-dropdown-offset-container`},j(ig,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>j("div",{class:`${o}-dropdown-menu-wrapper`},t?j(wo,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return d?d({node:y,option:r}):y}}),OR=Ve({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:n,hasSubmenuRef:e}=rt(Xu),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:i,renderOptionRef:o}=rt(ec);return{labelField:r,showIcon:n,hasSubmenu:e,renderLabel:t,nodeProps:i,renderOption:o}},render(){var n;const{clsPrefix:e,hasSubmenu:t,showIcon:r,nodeProps:i,renderLabel:o,renderOption:s}=this,{rawNode:a}=this.tmNode,l=j("div",Object.assign({class:`${e}-dropdown-option`},i==null?void 0:i(a)),j("div",{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},j("div",{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,r&&`${e}-dropdown-option-body__prefix--show-icon`]},ar(a.icon)),j("div",{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(a):ar((n=a.title)!==null&&n!==void 0?n:a[this.labelField])),j("div",{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return s?s({node:l,option:a}):l}}),FR=Ve({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:n,parentKey:e,clsPrefix:t}=this,{children:r}=n;return j(_t,null,j(OR,{clsPrefix:t,tmNode:n,key:n.key}),r==null?void 0:r.map(i=>{const{rawNode:o}=i;return o.show===!1?null:dy(o)?j(ly,{clsPrefix:t,key:i.key}):i.isGroup?(ml("dropdown","`group` node is not allowed to be put in `group` node."),null):j(uy,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key})}))}}),MR=Ve({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:n,props:e}}=this.tmNode;return j("div",e,[n==null?void 0:n()])}}),fy=Ve({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(n){const{renderIconRef:e,childrenFieldRef:t}=rt(ec);Mt(Xu,{showIconRef:Te(()=>{const i=e.value;return n.tmNodes.some(o=>{var s;if(o.isGroup)return(s=o.children)===null||s===void 0?void 0:s.some(({rawNode:l})=>i?i(l):l.icon);const{rawNode:a}=o;return i?i(a):a.icon})}),hasSubmenuRef:Te(()=>{const{value:i}=t;return n.tmNodes.some(o=>{var s;if(o.isGroup)return(s=o.children)===null||s===void 0?void 0:s.some(({rawNode:l})=>$d(l,i));const{rawNode:a}=o;return $d(a,i)})})});const r=De(null);return Mt(Lu,null),Mt(Ru,null),Mt(Yl,r),{bodyRef:r}},render(){const{parentKey:n,clsPrefix:e,scrollable:t}=this,r=this.tmNodes.map(i=>{const{rawNode:o}=i;return o.show===!1?null:BR(o)?j(MR,{tmNode:i,key:i.key}):dy(o)?j(ly,{clsPrefix:e,key:i.key}):PR(o)?j(FR,{clsPrefix:e,tmNode:i,parentKey:n,key:i.key}):j(uy,{clsPrefix:e,tmNode:i,parentKey:n,key:i.key,props:o.props,scrollable:t})});return j("div",{class:[`${e}-dropdown-menu`,t&&`${e}-dropdown-menu--scrollable`],ref:"bodyRef"},t?j(Jg,{contentClass:`${e}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?ty({clsPrefix:e,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),NR=we("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[EL(),we("dropdown-option",`
 position: relative;
 `,[xe("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[xe("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),we("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[xe("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),Zt("disabled",[Ie("pending",`
 color: var(--n-option-text-color-hover);
 `,[he("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),xe("&::before","background-color: var(--n-option-color-hover);")]),Ie("active",`
 color: var(--n-option-text-color-active);
 `,[he("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),xe("&::before","background-color: var(--n-option-color-active);")]),Ie("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[he("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),Ie("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),Ie("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[he("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[Ie("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),he("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[Ie("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),we("icon",`
 font-size: var(--n-option-icon-size);
 `)]),he("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),he("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[Ie("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),we("icon",`
 font-size: var(--n-option-icon-size);
 `)]),we("dropdown-menu","pointer-events: all;")]),we("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),we("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),we("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),xe(">",[we("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Zt("scrollable",`
 padding: var(--n-padding);
 `),Ie("scrollable",[he("content",`
 padding: var(--n-padding);
 `)])]),zR={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},$R=Object.keys(Jl),UR=Object.assign(Object.assign(Object.assign({},Jl),zR),ft.props),HR=Ve({name:"Dropdown",inheritAttrs:!1,props:UR,setup(n){const e=De(!1),t=Co(bt(n,"show"),e),r=Te(()=>{const{keyField:_,childrenField:H}=n;return Ya(n.options,{getKey(I){return I[_]},getDisabled(I){return I.disabled===!0},getIgnored(I){return I.type==="divider"||I.type==="render"},getChildren(I){return I[H]}})}),i=Te(()=>r.value.treeNodes),o=De(null),s=De(null),a=De(null),l=Te(()=>{var _,H,I;return(I=(H=(_=o.value)!==null&&_!==void 0?_:s.value)!==null&&H!==void 0?H:a.value)!==null&&I!==void 0?I:null}),c=Te(()=>r.value.getPath(l.value).keyPath),d=Te(()=>r.value.getPath(n.value).keyPath),u=pn(()=>n.keyboard&&t.value);XE({keydown:{ArrowUp:{prevent:!0,handler:k},ArrowRight:{prevent:!0,handler:C},ArrowDown:{prevent:!0,handler:M},ArrowLeft:{prevent:!0,handler:S},Enter:{prevent:!0,handler:T},Escape:E}},u);const{mergedClsPrefixRef:f,inlineThemeDisabled:h}=mn(n),p=ft("Dropdown","-dropdown",NR,ay,n,f);Mt(ec,{labelFieldRef:bt(n,"labelField"),childrenFieldRef:bt(n,"childrenField"),renderLabelRef:bt(n,"renderLabel"),renderIconRef:bt(n,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:s,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:c,activeKeyPathRef:d,animatedRef:bt(n,"animated"),mergedShowRef:t,nodePropsRef:bt(n,"nodeProps"),renderOptionRef:bt(n,"renderOption"),menuPropsRef:bt(n,"menuProps"),doSelect:m,doUpdateShow:g}),Qt(t,_=>{!n.animated&&!_&&y()});function m(_,H){const{onSelect:I}=n;I&&it(I,_,H)}function g(_){const{"onUpdate:show":H,onUpdateShow:I}=n;H&&it(H,_),I&&it(I,_),e.value=_}function y(){o.value=null,s.value=null,a.value=null}function E(){g(!1)}function S(){F("left")}function C(){F("right")}function k(){F("up")}function M(){F("down")}function T(){const _=z();_!=null&&_.isLeaf&&t.value&&(m(_.key,_.rawNode),g(!1))}function z(){var _;const{value:H}=r,{value:I}=l;return!H||I===null?null:(_=H.getNode(I))!==null&&_!==void 0?_:null}function F(_){const{value:H}=l,{value:{getFirstAvailableNode:I}}=r;let W=null;if(H===null){const ie=I();ie!==null&&(W=ie.key)}else{const ie=z();if(ie){let Q;switch(_){case"down":Q=ie.getNext();break;case"up":Q=ie.getPrev();break;case"right":Q=ie.getChild();break;case"left":Q=ie.getParent();break}Q&&(W=Q.key)}}W!==null&&(o.value=null,s.value=W)}const O=Te(()=>{const{size:_,inverted:H}=n,{common:{cubicBezierEaseInOut:I},self:W}=p.value,{padding:ie,dividerColor:Q,borderRadius:ue,optionOpacityDisabled:J,[We("optionIconSuffixWidth",_)]:ae,[We("optionSuffixWidth",_)]:X,[We("optionIconPrefixWidth",_)]:q,[We("optionPrefixWidth",_)]:re,[We("fontSize",_)]:ge,[We("optionHeight",_)]:Ae,[We("optionIconSize",_)]:Le}=W,Fe={"--n-bezier":I,"--n-font-size":ge,"--n-padding":ie,"--n-border-radius":ue,"--n-option-height":Ae,"--n-option-prefix-width":re,"--n-option-icon-prefix-width":q,"--n-option-suffix-width":X,"--n-option-icon-suffix-width":ae,"--n-option-icon-size":Le,"--n-divider-color":Q,"--n-option-opacity-disabled":J};return H?(Fe["--n-color"]=W.colorInverted,Fe["--n-option-color-hover"]=W.optionColorHoverInverted,Fe["--n-option-color-active"]=W.optionColorActiveInverted,Fe["--n-option-text-color"]=W.optionTextColorInverted,Fe["--n-option-text-color-hover"]=W.optionTextColorHoverInverted,Fe["--n-option-text-color-active"]=W.optionTextColorActiveInverted,Fe["--n-option-text-color-child-active"]=W.optionTextColorChildActiveInverted,Fe["--n-prefix-color"]=W.prefixColorInverted,Fe["--n-suffix-color"]=W.suffixColorInverted,Fe["--n-group-header-text-color"]=W.groupHeaderTextColorInverted):(Fe["--n-color"]=W.color,Fe["--n-option-color-hover"]=W.optionColorHover,Fe["--n-option-color-active"]=W.optionColorActive,Fe["--n-option-text-color"]=W.optionTextColor,Fe["--n-option-text-color-hover"]=W.optionTextColorHover,Fe["--n-option-text-color-active"]=W.optionTextColorActive,Fe["--n-option-text-color-child-active"]=W.optionTextColorChildActive,Fe["--n-prefix-color"]=W.prefixColor,Fe["--n-suffix-color"]=W.suffixColor,Fe["--n-group-header-text-color"]=W.groupHeaderTextColor),Fe}),V=h?xn("dropdown",Te(()=>`${n.size[0]}${n.inverted?"i":""}`),O,n):void 0;return{mergedClsPrefix:f,mergedTheme:p,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{n.animated&&y()},doUpdateShow:g,cssVars:h?void 0:O,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){const n=(r,i,o,s,a)=>{var l;const{mergedClsPrefix:c,menuProps:d}=this;(l=this.onRender)===null||l===void 0||l.call(this);const u=(d==null?void 0:d(void 0,this.tmNodes.map(h=>h.rawNode)))||{},f={ref:lE(i),class:[r,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:s,onMouseleave:a};return j(fy,Qr(this.$attrs,f,u))},{mergedTheme:e}=this,t={show:this.mergedShow,theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:n,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return j(ny,Object.assign({},Is(this.$props,$R),t),{trigger:()=>{var r,i;return(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)}})}});function WR(n){const{baseColor:e,textColor2:t,bodyColor:r,cardColor:i,dividerColor:o,actionColor:s,scrollbarColor:a,scrollbarColorHover:l,invertedColor:c}=n;return{textColor:t,textColorInverted:"#FFF",color:r,colorEmbedded:s,headerColor:i,headerColorInverted:c,footerColor:s,footerColorInverted:c,headerBorderColor:o,headerBorderColorInverted:c,footerBorderColor:o,footerBorderColorInverted:c,siderBorderColor:o,siderBorderColorInverted:c,siderColor:i,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${o}`,siderToggleButtonColor:e,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:bn(r,a),siderToggleBarColorHover:bn(r,l),__invertScrollbar:"true"}}const jR={name:"Layout",common:Fn,peers:{Scrollbar:Zg},self:WR},Zu=jR;function GR(n,e,t,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:e,itemColorActiveHoverInverted:e,itemColorActiveCollapsedInverted:e,itemTextColorInverted:n,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:n,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:n,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:n,itemIconColorHorizontalInverted:n,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:n,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:r}}function KR(n){const{borderRadius:e,textColor3:t,primaryColor:r,textColor2:i,textColor1:o,fontSize:s,dividerColor:a,hoverColor:l,primaryColorHover:c}=n;return Object.assign({borderRadius:e,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:Vt(r,{alpha:.1}),itemColorActiveHover:Vt(r,{alpha:.1}),itemColorActiveCollapsed:Vt(r,{alpha:.1}),itemTextColor:i,itemTextColorHover:i,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:i,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:o,itemIconColorHover:o,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:o,itemIconColorHorizontal:o,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:i,arrowColorHover:i,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:a},GR("#BBB",r,"#FFF","#AAA"))}const VR={name:"Menu",common:Fn,peers:{Tooltip:sy,Dropdown:ay},self:KR},qR=VR,YR={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};function XR(n){const{primaryColor:e,textColor2:t,borderColor:r,lineHeight:i,fontSize:o,borderRadiusSmall:s,dividerColor:a,fontWeightStrong:l,textColor1:c,textColor3:d,infoColor:u,warningColor:f,errorColor:h,successColor:p,codeColor:m}=n;return Object.assign(Object.assign({},YR),{aTextColor:e,blockquoteTextColor:t,blockquotePrefixColor:r,blockquoteLineHeight:i,blockquoteFontSize:o,codeBorderRadius:s,liTextColor:t,liLineHeight:i,liFontSize:o,hrColor:a,headerFontWeight:l,headerTextColor:c,pTextColor:t,pTextColor1Depth:c,pTextColor2Depth:t,pTextColor3Depth:d,pLineHeight:i,pFontSize:o,headerBarColor:e,headerBarColorPrimary:e,headerBarColorInfo:u,headerBarColorError:h,headerBarColorWarning:f,headerBarColorSuccess:p,textColor:t,textColor1Depth:c,textColor2Depth:t,textColor3Depth:d,textColorPrimary:e,textColorInfo:u,textColorSuccess:p,textColorWarning:f,textColorError:h,codeTextColor:t,codeColor:m,codeBorder:"1px solid #0000"})}const ZR={name:"Typography",common:Fn,self:XR},hy=ZR,py="n-layout-sider",Qu={type:String,default:"static"},QR=we("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[we("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),Ie("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),JR={embedded:Boolean,position:Qu,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},my="n-layout";function e_(n){return Ve({name:n?"LayoutContent":"Layout",props:Object.assign(Object.assign({},ft.props),JR),setup(e){const t=De(null),r=De(null),{mergedClsPrefixRef:i,inlineThemeDisabled:o}=mn(e),s=ft("Layout","-layout",QR,Zu,e,i);function a(m,g){if(e.nativeScrollbar){const{value:y}=t;y&&(g===void 0?y.scrollTo(m):y.scrollTo(m,g))}else{const{value:y}=r;y&&y.scrollTo(m,g)}}Mt(my,e);let l=0,c=0;const d=m=>{var g;const y=m.target;l=y.scrollLeft,c=y.scrollTop,(g=e.onScroll)===null||g===void 0||g.call(e,m)};Du(()=>{if(e.nativeScrollbar){const m=t.value;m&&(m.scrollTop=c,m.scrollLeft=l)}});const u={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:a},h=Te(()=>{const{common:{cubicBezierEaseInOut:m},self:g}=s.value;return{"--n-bezier":m,"--n-color":e.embedded?g.colorEmbedded:g.color,"--n-text-color":g.textColor}}),p=o?xn("layout",Te(()=>e.embedded?"e":""),h,e):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:u,mergedTheme:s,handleNativeElScroll:d,cssVars:o?void 0:h,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},f)},render(){var e;const{mergedClsPrefix:t,hasSider:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const i=r?this.hasSiderStyle:void 0,o=[this.themeClass,n&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return j("div",{class:o,style:this.cssVars},this.nativeScrollbar?j("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):j(qu,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const t_=e_(!1),n_=we("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[Ie("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),Ie("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),r_=Object.assign(Object.assign({},ft.props),{inverted:Boolean,position:Qu,bordered:Boolean}),i_=Ve({name:"LayoutFooter",props:r_,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=mn(n),r=ft("Layout","-layout-footer",n_,Zu,n,e),i=Te(()=>{const{common:{cubicBezierEaseInOut:s},self:a}=r.value,l={"--n-bezier":s};return n.inverted?(l["--n-color"]=a.footerColorInverted,l["--n-text-color"]=a.textColorInverted,l["--n-border-color"]=a.footerBorderColorInverted):(l["--n-color"]=a.footerColor,l["--n-text-color"]=a.textColor,l["--n-border-color"]=a.footerBorderColor),l}),o=t?xn("layout-footer",Te(()=>n.inverted?"a":"b"),i,n):void 0;return{mergedClsPrefix:e,cssVars:t?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n;const{mergedClsPrefix:e}=this;return(n=this.onRender)===null||n===void 0||n.call(this),j("div",{class:[`${e}-layout-footer`,this.themeClass,this.position&&`${e}-layout-footer--${this.position}-positioned`,this.bordered&&`${e}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),o_=we("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[Ie("bordered",[he("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),he("left-placement",[Ie("bordered",[he("border",`
 right: 0;
 `)])]),Ie("right-placement",`
 justify-content: flex-start;
 `,[Ie("bordered",[he("border",`
 left: 0;
 `)]),Ie("collapsed",[we("layout-toggle-button",[we("base-icon",`
 transform: rotate(180deg);
 `)]),we("layout-toggle-bar",[xe("&:hover",[he("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),he("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),we("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[we("base-icon",`
 transform: rotate(0);
 `)]),we("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[xe("&:hover",[he("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),he("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),Ie("collapsed",[we("layout-toggle-bar",[xe("&:hover",[he("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),he("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),we("layout-toggle-button",[we("base-icon",`
 transform: rotate(0);
 `)])]),we("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[we("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),we("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[he("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),he("bottom",`
 position: absolute;
 top: 34px;
 `),xe("&:hover",[he("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),he("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),he("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),xe("&:hover",[he("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),he("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),we("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),Ie("show-content",[we("layout-sider-scroll-container",{opacity:1})]),Ie("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),s_=Ve({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:n}=this;return j("div",{class:`${n}-layout-toggle-button`,onClick:this.onClick},j(Yr,{clsPrefix:n},{default:()=>j(Gg,null)}))}}),a_=Ve({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:n}=this;return j("div",{onClick:this.onClick,class:`${n}-layout-toggle-bar`},j("div",{class:`${n}-layout-toggle-bar__top`}),j("div",{class:`${n}-layout-toggle-bar__bottom`}))}}),l_={position:Qu,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},c_=Ve({name:"LayoutSider",props:Object.assign(Object.assign({},ft.props),l_),setup(n){const e=rt(my),t=De(null),r=De(null),i=De(n.defaultCollapsed),o=Co(bt(n,"collapsed"),i),s=Te(()=>wi(o.value?n.collapsedWidth:n.width)),a=Te(()=>n.collapseMode!=="transform"?{}:{minWidth:wi(n.width)}),l=Te(()=>e?e.siderPlacement:"left");function c(k,M){if(n.nativeScrollbar){const{value:T}=t;T&&(M===void 0?T.scrollTo(k):T.scrollTo(k,M))}else{const{value:T}=r;T&&T.scrollTo(k,M)}}function d(){const{"onUpdate:collapsed":k,onUpdateCollapsed:M,onExpand:T,onCollapse:z}=n,{value:F}=o;M&&it(M,!F),k&&it(k,!F),i.value=!F,F?T&&it(T):z&&it(z)}let u=0,f=0;const h=k=>{var M;const T=k.target;u=T.scrollLeft,f=T.scrollTop,(M=n.onScroll)===null||M===void 0||M.call(n,k)};Du(()=>{if(n.nativeScrollbar){const k=t.value;k&&(k.scrollTop=f,k.scrollLeft=u)}}),Mt(py,{collapsedRef:o,collapseModeRef:bt(n,"collapseMode")});const{mergedClsPrefixRef:p,inlineThemeDisabled:m}=mn(n),g=ft("Layout","-layout-sider",o_,Zu,n,p);function y(k){var M,T;k.propertyName==="max-width"&&(o.value?(M=n.onAfterLeave)===null||M===void 0||M.call(n):(T=n.onAfterEnter)===null||T===void 0||T.call(n))}const E={scrollTo:c},S=Te(()=>{const{common:{cubicBezierEaseInOut:k},self:M}=g.value,{siderToggleButtonColor:T,siderToggleButtonBorder:z,siderToggleBarColor:F,siderToggleBarColorHover:O}=M,V={"--n-bezier":k,"--n-toggle-button-color":T,"--n-toggle-button-border":z,"--n-toggle-bar-color":F,"--n-toggle-bar-color-hover":O};return n.inverted?(V["--n-color"]=M.siderColorInverted,V["--n-text-color"]=M.textColorInverted,V["--n-border-color"]=M.siderBorderColorInverted,V["--n-toggle-button-icon-color"]=M.siderToggleButtonIconColorInverted,V.__invertScrollbar=M.__invertScrollbar):(V["--n-color"]=M.siderColor,V["--n-text-color"]=M.textColor,V["--n-border-color"]=M.siderBorderColor,V["--n-toggle-button-icon-color"]=M.siderToggleButtonIconColor),V}),C=m?xn("layout-sider",Te(()=>n.inverted?"a":"b"),S,n):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:p,mergedTheme:g,styleMaxWidth:s,mergedCollapsed:o,scrollContainerStyle:a,siderPlacement:l,handleNativeElScroll:h,handleTransitionend:y,handleTriggerClick:d,inlineThemeDisabled:m,cssVars:S,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender},E)},render(){var n;const{mergedClsPrefix:e,mergedCollapsed:t,showTrigger:r}=this;return(n=this.onRender)===null||n===void 0||n.call(this),j("aside",{class:[`${e}-layout-sider`,this.themeClass,`${e}-layout-sider--${this.position}-positioned`,`${e}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${e}-layout-sider--bordered`,t&&`${e}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${e}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:wi(this.width)}]},this.nativeScrollbar?j("div",{class:[`${e}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):j(qu,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?j(a_,{clsPrefix:e,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):j(s_,{clsPrefix:e,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?j("div",{class:`${e}-layout-sider__border`}):null)}}),Js="n-menu",Ju="n-submenu",ef="n-menu-item-group",_a=8;function tf(n){const e=rt(Js),{props:t,mergedCollapsedRef:r}=e,i=rt(Ju,null),o=rt(ef,null),s=Te(()=>t.mode==="horizontal"),a=Te(()=>s.value?t.dropdownPlacement:"tmNodes"in n?"right-start":"right"),l=Te(()=>{var f;return Math.max((f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize,t.iconSize)}),c=Te(()=>{var f;return!s.value&&n.root&&r.value&&(f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize}),d=Te(()=>{if(s.value)return;const{collapsedWidth:f,indent:h,rootIndent:p}=t,{root:m,isGroup:g}=n,y=p===void 0?h:p;return m?r.value?f/2-l.value/2:y:o&&typeof o.paddingLeftRef.value=="number"?h/2+o.paddingLeftRef.value:i&&typeof i.paddingLeftRef.value=="number"?(g?h/2:h)+i.paddingLeftRef.value:0}),u=Te(()=>{const{collapsedWidth:f,indent:h,rootIndent:p}=t,{value:m}=l,{root:g}=n;return s.value||!g||!r.value?_a:(p===void 0?h:p)+m+_a-(f+m)/2});return{dropdownPlacement:a,activeIconSize:c,maxIconSize:l,paddingLeft:d,iconMarginRight:u,NMenu:e,NSubmenu:i}}const nf={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},gy=Object.assign(Object.assign({},nf),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),d_=Ve({name:"MenuOptionGroup",props:gy,setup(n){Mt(Ju,null);const e=tf(n);Mt(ef,{paddingLeftRef:e.paddingLeft});const{mergedClsPrefixRef:t,props:r}=rt(Js);return function(){const{value:i}=t,o=e.paddingLeft.value,{nodeProps:s}=r,a=s==null?void 0:s(n.tmNode.rawNode);return j("div",{class:`${i}-menu-item-group`,role:"group"},j("div",Object.assign({},a,{class:[`${i}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",o!==void 0?`padding-left: ${o}px;`:""]}),ar(n.title),n.extra?j(_t,null," ",ar(n.extra)):null),j("div",null,n.tmNodes.map(l=>rf(l,r))))}}}),yy=Ve({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(n){const{props:e}=rt(Js);return{menuProps:e,style:Te(()=>{const{paddingLeft:t}=n;return{paddingLeft:t&&`${t}px`}}),iconStyle:Te(()=>{const{maxIconSize:t,activeIconSize:r,iconMarginRight:i}=n;return{width:`${t}px`,height:`${t}px`,fontSize:`${r}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:n,tmNode:e,menuProps:{renderIcon:t,renderLabel:r,renderExtra:i,expandIcon:o}}=this,s=t?t(e.rawNode):ar(this.icon);return j("div",{onClick:a=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,a)},role:"none",class:[`${n}-menu-item-content`,{[`${n}-menu-item-content--selected`]:this.selected,[`${n}-menu-item-content--collapsed`]:this.collapsed,[`${n}-menu-item-content--child-active`]:this.childActive,[`${n}-menu-item-content--disabled`]:this.disabled,[`${n}-menu-item-content--hover`]:this.hover}],style:this.style},s&&j("div",{class:`${n}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),j("div",{class:`${n}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(e.rawNode):ar(this.title),this.extra||i?j("span",{class:`${n}-menu-item-content-header__extra`}," ",i?i(e.rawNode):ar(this.extra)):null),this.showArrow?j(Yr,{ariaHidden:!0,class:`${n}-menu-item-content__arrow`,clsPrefix:n},{default:()=>o?o(e.rawNode):j(NI,null)}):null)}}),vy=Object.assign(Object.assign({},nf),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Ud=Ve({name:"Submenu",props:vy,setup(n){const e=tf(n),{NMenu:t,NSubmenu:r}=e,{props:i,mergedCollapsedRef:o,mergedThemeRef:s}=t,a=Te(()=>{const{disabled:f}=n;return r!=null&&r.mergedDisabledRef.value||i.disabled?!0:f}),l=De(!1);Mt(Ju,{paddingLeftRef:e.paddingLeft,mergedDisabledRef:a}),Mt(ef,null);function c(){const{onClick:f}=n;f&&f()}function d(){a.value||(o.value||t.toggleExpand(n.internalKey),c())}function u(f){l.value=f}return{menuProps:i,mergedTheme:s,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:e.maxIconSize,activeIconSize:e.activeIconSize,iconMarginRight:e.iconMarginRight,dropdownPlacement:e.dropdownPlacement,dropdownShow:l,paddingLeft:e.paddingLeft,mergedDisabled:a,mergedValue:t.mergedValueRef,childActive:pn(()=>{var f;return(f=n.virtualChildActive)!==null&&f!==void 0?f:t.activePathRef.value.includes(n.internalKey)}),collapsed:Te(()=>i.mode==="horizontal"?!1:o.value?!0:!t.mergedExpandedKeysRef.value.includes(n.internalKey)),dropdownEnabled:Te(()=>!a.value&&(i.mode==="horizontal"||o.value)),handlePopoverShowChange:u,handleClick:d}},render(){var n;const{mergedClsPrefix:e,menuProps:{renderIcon:t,renderLabel:r}}=this,i=()=>{const{isHorizontal:s,paddingLeft:a,collapsed:l,mergedDisabled:c,maxIconSize:d,activeIconSize:u,title:f,childActive:h,icon:p,handleClick:m,menuProps:{nodeProps:g},dropdownShow:y,iconMarginRight:E,tmNode:S,mergedClsPrefix:C,isEllipsisPlaceholder:k,extra:M}=this,T=g==null?void 0:g(S.rawNode);return j("div",Object.assign({},T,{class:[`${C}-menu-item`,T==null?void 0:T.class],role:"menuitem"}),j(yy,{tmNode:S,paddingLeft:a,collapsed:l,disabled:c,iconMarginRight:E,maxIconSize:d,activeIconSize:u,title:f,extra:M,showArrow:!s,childActive:h,clsPrefix:C,icon:p,hover:y,onClick:m,isEllipsisPlaceholder:k}))},o=()=>j(Ku,null,{default:()=>{const{tmNodes:s,collapsed:a}=this;return a?null:j("div",{class:`${e}-submenu-children`,role:"menu"},s.map(l=>rf(l,this.menuProps)))}});return this.root?j(HR,Object.assign({size:"large",trigger:"hover"},(n=this.menuProps)===null||n===void 0?void 0:n.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>j("div",{class:`${e}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),this.isHorizontal?null:o())}):j("div",{class:`${e}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),o())}}),by=Object.assign(Object.assign({},nf),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),u_=Ve({name:"MenuOption",props:by,setup(n){const e=tf(n),{NSubmenu:t,NMenu:r}=e,{props:i,mergedClsPrefixRef:o,mergedCollapsedRef:s}=r,a=t?t.mergedDisabledRef:{value:!1},l=Te(()=>a.value||n.disabled);function c(u){const{onClick:f}=n;f&&f(u)}function d(u){l.value||(r.doSelect(n.internalKey,n.tmNode.rawNode),c(u))}return{mergedClsPrefix:o,dropdownPlacement:e.dropdownPlacement,paddingLeft:e.paddingLeft,iconMarginRight:e.iconMarginRight,maxIconSize:e.maxIconSize,activeIconSize:e.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:i,dropdownEnabled:pn(()=>n.root&&s.value&&i.mode!=="horizontal"&&!l.value),selected:pn(()=>r.mergedValueRef.value===n.internalKey),mergedDisabled:l,handleClick:d}},render(){const{mergedClsPrefix:n,mergedTheme:e,tmNode:t,menuProps:{renderLabel:r,nodeProps:i}}=this,o=i==null?void 0:i(t.rawNode);return j("div",Object.assign({},o,{role:"menuitem",class:[`${n}-menu-item`,o==null?void 0:o.class]}),j(kR,{theme:e.peers.Tooltip,themeOverrides:e.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):ar(this.title),trigger:()=>j(yy,{tmNode:t,clsPrefix:n,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),f_=Ve({name:"MenuDivider",setup(){const n=rt(Js),{mergedClsPrefixRef:e,isHorizontalRef:t}=n;return()=>t.value?null:j("div",{class:`${e.value}-menu-divider`})}}),h_=Tu(gy),p_=Tu(by),m_=Tu(vy);function Hd(n){return n.type==="divider"||n.type==="render"}function g_(n){return n.type==="divider"}function rf(n,e){const{rawNode:t}=n,{show:r}=t;if(r===!1)return null;if(Hd(t))return g_(t)?j(f_,Object.assign({key:n.key},t.props)):null;const{labelField:i}=e,{key:o,level:s,isGroup:a}=n,l=Object.assign(Object.assign({},t),{title:t.title||t[i],extra:t.titleExtra||t.extra,key:o,internalKey:o,level:s,root:s===0,isGroup:a});return n.children?n.isGroup?j(d_,Is(l,h_,{tmNode:n,tmNodes:n.children,key:o})):j(Ud,Is(l,m_,{key:o,rawNodes:t[e.childrenField],tmNodes:n.children,tmNode:n})):j(u_,Is(l,p_,{key:o,tmNode:n}))}const Ep=[xe("&::before","background-color: var(--n-item-color-hover);"),he("arrow",`
 color: var(--n-arrow-color-hover);
 `),he("icon",`
 color: var(--n-item-icon-color-hover);
 `),we("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[xe("a",`
 color: var(--n-item-text-color-hover);
 `),he("extra",`
 color: var(--n-item-text-color-hover);
 `)])],wp=[he("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),we("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[xe("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),he("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],y_=xe([we("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[Ie("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[we("submenu","margin: 0;"),we("menu-item","margin: 0;"),we("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[xe("&::before","display: none;"),Ie("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),we("menu-item-content",[Ie("selected",[he("icon","color: var(--n-item-icon-color-active-horizontal);"),we("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[xe("a","color: var(--n-item-text-color-active-horizontal);"),he("extra","color: var(--n-item-text-color-active-horizontal);")])]),Ie("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[we("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[xe("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),he("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),he("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Zt("disabled",[Zt("selected, child-active",[xe("&:focus-within",wp)]),Ie("selected",[fi(null,[he("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),we("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[xe("a","color: var(--n-item-text-color-active-hover-horizontal);"),he("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),Ie("child-active",[fi(null,[he("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),we("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[xe("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),he("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),fi("border-bottom: 2px solid var(--n-border-color-horizontal);",wp)]),we("menu-item-content-header",[xe("a","color: var(--n-item-text-color-horizontal);")])])]),Zt("responsive",[we("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),Ie("collapsed",[we("menu-item-content",[Ie("selected",[xe("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),we("menu-item-content-header","opacity: 0;"),he("arrow","opacity: 0;"),he("icon","color: var(--n-item-icon-color-collapsed);")])]),we("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),we("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[xe("> *","z-index: 1;"),xe("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Ie("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),Ie("collapsed",[he("arrow","transform: rotate(0);")]),Ie("selected",[xe("&::before","background-color: var(--n-item-color-active);"),he("arrow","color: var(--n-arrow-color-active);"),he("icon","color: var(--n-item-icon-color-active);"),we("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[xe("a","color: var(--n-item-text-color-active);"),he("extra","color: var(--n-item-text-color-active);")])]),Ie("child-active",[we("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[xe("a",`
 color: var(--n-item-text-color-child-active);
 `),he("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),he("arrow",`
 color: var(--n-arrow-color-child-active);
 `),he("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Zt("disabled",[Zt("selected, child-active",[xe("&:focus-within",Ep)]),Ie("selected",[fi(null,[he("arrow","color: var(--n-arrow-color-active-hover);"),he("icon","color: var(--n-item-icon-color-active-hover);"),we("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[xe("a","color: var(--n-item-text-color-active-hover);"),he("extra","color: var(--n-item-text-color-active-hover);")])])]),Ie("child-active",[fi(null,[he("arrow","color: var(--n-arrow-color-child-active-hover);"),he("icon","color: var(--n-item-icon-color-child-active-hover);"),we("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[xe("a","color: var(--n-item-text-color-child-active-hover);"),he("extra","color: var(--n-item-text-color-child-active-hover);")])])]),Ie("selected",[fi(null,[xe("&::before","background-color: var(--n-item-color-active-hover);")])]),fi(null,Ep)]),he("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),he("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),we("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[xe("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[xe("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),he("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),we("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[we("menu-item-content",`
 height: var(--n-item-height);
 `),we("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ry({duration:".2s"})])]),we("menu-item-group",[we("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),we("menu-tooltip",[xe("a",`
 color: inherit;
 text-decoration: none;
 `)]),we("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function fi(n,e){return[Ie("hover",n,e),xe("&:hover",n,e)]}const v_=Object.assign(Object.assign({},ft.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),b_=Ve({name:"Menu",inheritAttrs:!1,props:v_,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=mn(n),r=ft("Menu","-menu",y_,qR,n,e),i=rt(py,null),o=Te(()=>{var X;const{collapsed:q}=n;if(q!==void 0)return q;if(i){const{collapseModeRef:re,collapsedRef:ge}=i;if(re.value==="width")return(X=ge.value)!==null&&X!==void 0?X:!1}return!1}),s=Te(()=>{const{keyField:X,childrenField:q,disabledField:re}=n;return Ya(n.items||n.options,{getIgnored(ge){return Hd(ge)},getChildren(ge){return ge[q]},getDisabled(ge){return ge[re]},getKey(ge){var Ae;return(Ae=ge[X])!==null&&Ae!==void 0?Ae:ge.name}})}),a=Te(()=>new Set(s.value.treeNodes.map(X=>X.key))),{watchProps:l}=n,c=De(null);l!=null&&l.includes("defaultValue")?kr(()=>{c.value=n.defaultValue}):c.value=n.defaultValue;const d=bt(n,"value"),u=Co(d,c),f=De([]),h=()=>{f.value=n.defaultExpandAll?s.value.getNonLeafKeys():n.defaultExpandedNames||n.defaultExpandedKeys||s.value.getPath(u.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?kr(h):h();const p=Iu(n,["expandedNames","expandedKeys"]),m=Co(p,f),g=Te(()=>s.value.treeNodes),y=Te(()=>s.value.getPath(u.value).keyPath);Mt(Js,{props:n,mergedCollapsedRef:o,mergedThemeRef:r,mergedValueRef:u,mergedExpandedKeysRef:m,activePathRef:y,mergedClsPrefixRef:e,isHorizontalRef:Te(()=>n.mode==="horizontal"),invertedRef:bt(n,"inverted"),doSelect:E,toggleExpand:C});function E(X,q){const{"onUpdate:value":re,onUpdateValue:ge,onSelect:Ae}=n;ge&&it(ge,X,q),re&&it(re,X,q),Ae&&it(Ae,X,q),c.value=X}function S(X){const{"onUpdate:expandedKeys":q,onUpdateExpandedKeys:re,onExpandedNamesChange:ge,onOpenNamesChange:Ae}=n;q&&it(q,X),re&&it(re,X),ge&&it(ge,X),Ae&&it(Ae,X),f.value=X}function C(X){const q=Array.from(m.value),re=q.findIndex(ge=>ge===X);if(~re)q.splice(re,1);else{if(n.accordion&&a.value.has(X)){const ge=q.findIndex(Ae=>a.value.has(Ae));ge>-1&&q.splice(ge,1)}q.push(X)}S(q)}const k=X=>{const q=s.value.getPath(X??u.value,{includeSelf:!1}).keyPath;if(!q.length)return;const re=Array.from(m.value),ge=new Set([...re,...q]);n.accordion&&a.value.forEach(Ae=>{ge.has(Ae)&&!q.includes(Ae)&&ge.delete(Ae)}),S(Array.from(ge))},M=Te(()=>{const{inverted:X}=n,{common:{cubicBezierEaseInOut:q},self:re}=r.value,{borderRadius:ge,borderColorHorizontal:Ae,fontSize:Le,itemHeight:Fe,dividerColor:Ue}=re,de={"--n-divider-color":Ue,"--n-bezier":q,"--n-font-size":Le,"--n-border-color-horizontal":Ae,"--n-border-radius":ge,"--n-item-height":Fe};return X?(de["--n-group-text-color"]=re.groupTextColorInverted,de["--n-color"]=re.colorInverted,de["--n-item-text-color"]=re.itemTextColorInverted,de["--n-item-text-color-hover"]=re.itemTextColorHoverInverted,de["--n-item-text-color-active"]=re.itemTextColorActiveInverted,de["--n-item-text-color-child-active"]=re.itemTextColorChildActiveInverted,de["--n-item-text-color-child-active-hover"]=re.itemTextColorChildActiveInverted,de["--n-item-text-color-active-hover"]=re.itemTextColorActiveHoverInverted,de["--n-item-icon-color"]=re.itemIconColorInverted,de["--n-item-icon-color-hover"]=re.itemIconColorHoverInverted,de["--n-item-icon-color-active"]=re.itemIconColorActiveInverted,de["--n-item-icon-color-active-hover"]=re.itemIconColorActiveHoverInverted,de["--n-item-icon-color-child-active"]=re.itemIconColorChildActiveInverted,de["--n-item-icon-color-child-active-hover"]=re.itemIconColorChildActiveHoverInverted,de["--n-item-icon-color-collapsed"]=re.itemIconColorCollapsedInverted,de["--n-item-text-color-horizontal"]=re.itemTextColorHorizontalInverted,de["--n-item-text-color-hover-horizontal"]=re.itemTextColorHoverHorizontalInverted,de["--n-item-text-color-active-horizontal"]=re.itemTextColorActiveHorizontalInverted,de["--n-item-text-color-child-active-horizontal"]=re.itemTextColorChildActiveHorizontalInverted,de["--n-item-text-color-child-active-hover-horizontal"]=re.itemTextColorChildActiveHoverHorizontalInverted,de["--n-item-text-color-active-hover-horizontal"]=re.itemTextColorActiveHoverHorizontalInverted,de["--n-item-icon-color-horizontal"]=re.itemIconColorHorizontalInverted,de["--n-item-icon-color-hover-horizontal"]=re.itemIconColorHoverHorizontalInverted,de["--n-item-icon-color-active-horizontal"]=re.itemIconColorActiveHorizontalInverted,de["--n-item-icon-color-active-hover-horizontal"]=re.itemIconColorActiveHoverHorizontalInverted,de["--n-item-icon-color-child-active-horizontal"]=re.itemIconColorChildActiveHorizontalInverted,de["--n-item-icon-color-child-active-hover-horizontal"]=re.itemIconColorChildActiveHoverHorizontalInverted,de["--n-arrow-color"]=re.arrowColorInverted,de["--n-arrow-color-hover"]=re.arrowColorHoverInverted,de["--n-arrow-color-active"]=re.arrowColorActiveInverted,de["--n-arrow-color-active-hover"]=re.arrowColorActiveHoverInverted,de["--n-arrow-color-child-active"]=re.arrowColorChildActiveInverted,de["--n-arrow-color-child-active-hover"]=re.arrowColorChildActiveHoverInverted,de["--n-item-color-hover"]=re.itemColorHoverInverted,de["--n-item-color-active"]=re.itemColorActiveInverted,de["--n-item-color-active-hover"]=re.itemColorActiveHoverInverted,de["--n-item-color-active-collapsed"]=re.itemColorActiveCollapsedInverted):(de["--n-group-text-color"]=re.groupTextColor,de["--n-color"]=re.color,de["--n-item-text-color"]=re.itemTextColor,de["--n-item-text-color-hover"]=re.itemTextColorHover,de["--n-item-text-color-active"]=re.itemTextColorActive,de["--n-item-text-color-child-active"]=re.itemTextColorChildActive,de["--n-item-text-color-child-active-hover"]=re.itemTextColorChildActiveHover,de["--n-item-text-color-active-hover"]=re.itemTextColorActiveHover,de["--n-item-icon-color"]=re.itemIconColor,de["--n-item-icon-color-hover"]=re.itemIconColorHover,de["--n-item-icon-color-active"]=re.itemIconColorActive,de["--n-item-icon-color-active-hover"]=re.itemIconColorActiveHover,de["--n-item-icon-color-child-active"]=re.itemIconColorChildActive,de["--n-item-icon-color-child-active-hover"]=re.itemIconColorChildActiveHover,de["--n-item-icon-color-collapsed"]=re.itemIconColorCollapsed,de["--n-item-text-color-horizontal"]=re.itemTextColorHorizontal,de["--n-item-text-color-hover-horizontal"]=re.itemTextColorHoverHorizontal,de["--n-item-text-color-active-horizontal"]=re.itemTextColorActiveHorizontal,de["--n-item-text-color-child-active-horizontal"]=re.itemTextColorChildActiveHorizontal,de["--n-item-text-color-child-active-hover-horizontal"]=re.itemTextColorChildActiveHoverHorizontal,de["--n-item-text-color-active-hover-horizontal"]=re.itemTextColorActiveHoverHorizontal,de["--n-item-icon-color-horizontal"]=re.itemIconColorHorizontal,de["--n-item-icon-color-hover-horizontal"]=re.itemIconColorHoverHorizontal,de["--n-item-icon-color-active-horizontal"]=re.itemIconColorActiveHorizontal,de["--n-item-icon-color-active-hover-horizontal"]=re.itemIconColorActiveHoverHorizontal,de["--n-item-icon-color-child-active-horizontal"]=re.itemIconColorChildActiveHorizontal,de["--n-item-icon-color-child-active-hover-horizontal"]=re.itemIconColorChildActiveHoverHorizontal,de["--n-arrow-color"]=re.arrowColor,de["--n-arrow-color-hover"]=re.arrowColorHover,de["--n-arrow-color-active"]=re.arrowColorActive,de["--n-arrow-color-active-hover"]=re.arrowColorActiveHover,de["--n-arrow-color-child-active"]=re.arrowColorChildActive,de["--n-arrow-color-child-active-hover"]=re.arrowColorChildActiveHover,de["--n-item-color-hover"]=re.itemColorHover,de["--n-item-color-active"]=re.itemColorActive,de["--n-item-color-active-hover"]=re.itemColorActiveHover,de["--n-item-color-active-collapsed"]=re.itemColorActiveCollapsed),de}),T=t?xn("menu",Te(()=>n.inverted?"a":"b"),M,n):void 0,z=W0(),F=De(null),O=De(null);let V=!0;const _=()=>{var X;V?V=!1:(X=F.value)===null||X===void 0||X.sync({showAllItemsBeforeCalculate:!0})};function H(){return document.getElementById(z)}const I=De(-1);function W(X){I.value=n.options.length-X}function ie(X){X||(I.value=-1)}const Q=Te(()=>{const X=I.value;return{children:X===-1?[]:n.options.slice(X)}}),ue=Te(()=>{const{childrenField:X,disabledField:q,keyField:re}=n;return Ya([Q.value],{getIgnored(ge){return Hd(ge)},getChildren(ge){return ge[X]},getDisabled(ge){return ge[q]},getKey(ge){var Ae;return(Ae=ge[re])!==null&&Ae!==void 0?Ae:ge.name}})}),J=Te(()=>Ya([{}]).treeNodes[0]);function ae(){var X;if(I.value===-1)return j(Ud,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:J.value,domId:z,isEllipsisPlaceholder:!0});const q=ue.value.treeNodes[0],re=y.value,ge=!!(!((X=q.children)===null||X===void 0)&&X.some(Ae=>re.includes(Ae.key)));return j(Ud,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:ge,tmNode:q,domId:z,rawNodes:q.rawNode.children||[],tmNodes:q.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:e,controlledExpandedKeys:p,uncontrolledExpanededKeys:f,mergedExpandedKeys:m,uncontrolledValue:c,mergedValue:u,activePath:y,tmNodes:g,mergedTheme:r,mergedCollapsed:o,cssVars:t?void 0:M,themeClass:T==null?void 0:T.themeClass,overflowRef:F,counterRef:O,updateCounter:()=>{},onResize:_,onUpdateOverflow:ie,onUpdateCount:W,renderCounter:ae,getCounter:H,onRender:T==null?void 0:T.onRender,showOption:k,deriveResponsiveState:_}},render(){const{mergedClsPrefix:n,mode:e,themeClass:t,onRender:r}=this;r==null||r();const i=()=>this.tmNodes.map(l=>rf(l,this.$props)),s=e==="horizontal"&&this.responsive,a=()=>j("div",Qr(this.$attrs,{role:e==="horizontal"?"menubar":"menu",class:[`${n}-menu`,t,`${n}-menu--${e}`,s&&`${n}-menu--responsive`,this.mergedCollapsed&&`${n}-menu--collapsed`],style:this.cssVars}),s?j(Hw,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:i,counter:this.renderCounter}):i());return s?j(gl,{onResize:this.onResize},{default:a}):a()}}),A_=we("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[xe("&:first-child","margin-top: 0;"),xe("&:last-child","margin-bottom: 0;")]),x_=Object.assign(Object.assign({},ft.props),{depth:[String,Number]}),E_=Ve({name:"P",props:x_,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=mn(n),r=ft("Typography","-p",A_,hy,n,e),i=Te(()=>{const{depth:s}=n,a=s||"1",{common:{cubicBezierEaseInOut:l},self:{pFontSize:c,pLineHeight:d,pMargin:u,pTextColor:f,[`pTextColor${a}Depth`]:h}}=r.value;return{"--n-bezier":l,"--n-font-size":c,"--n-line-height":d,"--n-margin":u,"--n-text-color":s===void 0?f:h}}),o=t?xn("p",Te(()=>`${n.depth||""}`),i,n):void 0;return{mergedClsPrefix:e,cssVars:t?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),j("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),w_=we("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[Ie("strong",`
 font-weight: var(--n-font-weight-strong);
 `),Ie("italic",{fontStyle:"italic"}),Ie("underline",{textDecoration:"underline"}),Ie("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),C_=Object.assign(Object.assign({},ft.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),S_=Ve({name:"Text",props:C_,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=mn(n),r=ft("Typography","-text",w_,hy,n,e),i=Te(()=>{const{depth:s,type:a}=n,l=a==="default"?s===void 0?"textColor":`textColor${s}Depth`:We("textColor",a),{common:{fontWeightStrong:c,fontFamilyMono:d,cubicBezierEaseInOut:u},self:{codeTextColor:f,codeBorderRadius:h,codeColor:p,codeBorder:m,[l]:g}}=r.value;return{"--n-bezier":u,"--n-text-color":g,"--n-font-weight-strong":c,"--n-font-famliy-mono":d,"--n-code-border-radius":h,"--n-code-text-color":f,"--n-code-color":p,"--n-code-border":m}}),o=t?xn("text",Te(()=>`${n.type[0]}${n.depth||""}`),i,n):void 0;return{mergedClsPrefix:e,compitableTag:Iu(n,["as","tag"]),cssVars:t?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n,e,t;const{mergedClsPrefix:r}=this;(n=this.onRender)===null||n===void 0||n.call(this);const i=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],o=(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e);return this.code?j("code",{class:i,style:this.cssVars},this.delete?j("del",null,o):o):this.delete?j("del",{class:i,style:this.cssVars},o):j(this.compitableTag||"span",{class:i,style:this.cssVars},o)}});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ay(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xy={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(self,()=>(()=>{var t={916:(s,a,l)=>{var c=l(471);s.exports=function(d){var u,f="",h=(d=d||{}).video,p=d.options,m=c.$escape,g=d.tran,y=d.icons,E=d.index,S=c.$each;return d.$value,d.$index,f+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,u=l(568)(h),f+=u,f+=`
    `,p.logo&&(f+=`
    <div class="dplayer-logo">
        <img src="`,f+=m(p.logo),f+=`">
    </div>
    `),f+=`
    <div class="dplayer-danmaku"`,p.danmaku&&p.danmaku.bottom&&(f+=' style="margin-bottom:',f+=m(p.danmaku.bottom),f+='"'),f+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,p.danmaku&&(f+=`
        <span class="dplayer-danloading">`,f+=m(g("danmaku-loading")),f+=`</span>
        `),f+=`
        <span class="diplayer-loading-icon">`,f+=y.loading,f+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,f+=m(g("setting")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=y.pallette,f+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,f+=m(g("set-danmaku-color")),f+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=m(E),f+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=m(E),f+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=m(E),f+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=m(E),f+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=m(E),f+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=m(E),f+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,f+=m(g("set-danmaku-type")),f+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,f+=m(E),f+=`" value="1">
                    <span>`,f+=m(g("top")),f+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,f+=m(E),f+=`" value="0" checked>
                    <span>`,f+=m(g("rolling")),f+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,f+=m(E),f+=`" value="2">
                    <span>`,f+=m(g("bottom")),f+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,f+=m(g("input-danmaku-enter")),f+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,f+=m(g("send")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=y.send,f+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,f+=y.play,f+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,f+=y.volumeDown,f+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,f+=m(p.theme),f+=`;">
                        <span class="dplayer-thumb" style="background: `,f+=m(p.theme),f+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,p.live&&(f+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,f+=m(p.theme),f+=';"></span>',f+=m(g("live")),f+=`</span>
        `),f+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,p.video.quality&&(f+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,f+=m(p.video.quality[p.video.defaultQuality].name),f+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,S(p.video.quality,function(C,k){f+=`
                    <div class="dplayer-quality-item" data-index="`,f+=m(k),f+='">',f+=m(C.name),f+=`</div>
                `}),f+=`
                </div>
            </div>
        </div>
        `),f+=`
        `,p.screenshot&&(f+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,f+=m(g("screenshot")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=y.camera,f+=`</span>
        </div>
        `),f+=`
        `,p.airplay&&(f+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,f+=m(g("airplay")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=y.airplay,f+=`</span>
        </div>
        `),f+=`
        `,p.chromecast&&(f+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,f+=m(g("chromecast")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=y.chromecast,f+=`</span>
        </div>
        `),f+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,f+=m(g("send-danmaku")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=y.comment,f+=`</span>
            </button>
        </div>
        `,p.subtitle&&(f+=`
        `,typeof p.subtitle.url=="string"?(f+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,f+=m(g("hide-subs")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=y.subtitle,f+=`</span>
            </button>
        </div>
        `):(f+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,f+=m(g("subtitle")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=y.subtitle,f+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,S(p.subtitle.url,function(C,k){f+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,f+=m(C.url),f+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,f+=m(C.lang?C.name?C.name+" ("+g(C.lang)+")":g(C.lang):C.name),f+=`</span>
                        </div>
                    `}),f+=`
                </div>
            </div>
        </div>
        `),f+=`
        `),f+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,f+=m(g("setting")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=y.setting,f+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,f+=m(g("speed")),f+=`</span>
                        <div class="dplayer-toggle">`,f+=y.right,f+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,f+=m(g("loop")),f+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,f+=m(g("show-danmaku")),f+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,f+=m(g("unlimited-danmaku")),f+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,f+=m(g("opacity-danmaku")),f+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,S(p.playbackSpeed,function(C,k){f+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,f+=m(C),f+=`">
                            <span class="dplayer-label">`,f+=m(C===1?g("normal"):C),f+=`</span>
                        </div>
                    `}),f+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,f+=m(g("web-fullscreen")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=y.fullWeb,f+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,f+=m(g("fullscreen")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=y.full,f+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,f+=m(p.theme),f+=`">
                <span class="dplayer-thumb" style="background: `,f+=m(p.theme),f+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,p.danmaku&&(f+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),f+=`
</div>
<div class="dplayer-menu">
    `,S(p.contextmenu,function(C,k){f+=`
        <div class="dplayer-menu-item">
            <a`,C.link&&(f+=' target="_blank"'),f+=' href="',f+=m(C.link||"javascript:void(0);"),f+='">',C.key&&(f+=" ",f+=m(g(C.key))),C.text&&(f+=" ",f+=m(C.text)),f+=`</a>
        </div>
    `}),f+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,f+=y.play,f+=`
</button>`}},568:(s,a,l)=>{var c=l(471);s.exports=function(d){var u="",f=(d=d||{}).enableSubtitle,h=d.subtitle,p=d.current,m=d.airplay,g=d.pic,y=c.$escape,E=d.screenshot,S=d.preload,C=d.url;return f=h&&h.type==="webvtt",u+=`
<video
    class="dplayer-video `,p&&(u+="dplayer-video-current"),u+=`"
    webkit-playsinline
    `,m&&(u+=' x-webkit-airplay="allow" '),u+=`
    playsinline
    `,g&&(u+='poster="',u+=y(g),u+='"'),u+=`
    `,(E||f)&&(u+='crossorigin="anonymous"'),u+=`
    `,S&&(u+='preload="',u+=y(S),u+='"'),u+=`
    `,m?u+=`
    nosrc
    `:C&&(u+=`
    src="`,u+=y(C),u+=`"
    `),u+=`
    >
    `,m&&(u+=`
    <source src="`,u+=y(C),u+=`">
    `),u+=`
    `,f&&(u+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,u+=y(typeof h.url=="string"?h.url:h.url[h.index].url),u+=`"></track>
    `),u+`
</video>`}},49:(s,a,l)=>{l.d(a,{Z:()=>h});var c=l(415),d=l.n(c),u=l(352),f=l.n(u)()(d());f.push([s.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const h=f},685:(s,a,l)=>{l.d(a,{Z:()=>S});var c=l(415),d=l.n(c),u=l(352),f=l.n(u),h=l(49),p=l(80),m=l.n(p),g=new URL(l(831),l.b),y=f()(d());y.i(h.Z);var E=m()(g);y.push([s.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+E+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const S=y},856:s=>{var a=[];function l(u){for(var f=-1,h=0;h<a.length;h++)if(a[h].identifier===u){f=h;break}return f}function c(u,f){for(var h={},p=[],m=0;m<u.length;m++){var g=u[m],y=f.base?g[0]+f.base:g[0],E=h[y]||0,S="".concat(y," ").concat(E);h[y]=E+1;var C=l(S),k={css:g[1],media:g[2],sourceMap:g[3],supports:g[4],layer:g[5]};if(C!==-1)a[C].references++,a[C].updater(k);else{var M=d(k,f);f.byIndex=m,a.splice(m,0,{identifier:S,updater:M,references:1})}p.push(S)}return p}function d(u,f){var h=f.domAPI(f);return h.update(u),function(p){if(p){if(p.css===u.css&&p.media===u.media&&p.sourceMap===u.sourceMap&&p.supports===u.supports&&p.layer===u.layer)return;h.update(u=p)}else h.remove()}}s.exports=function(u,f){var h=c(u=u||[],f=f||{});return function(p){p=p||[];for(var m=0;m<h.length;m++){var g=l(h[m]);a[g].references--}for(var y=c(p,f),E=0;E<h.length;E++){var S=l(h[E]);a[S].references===0&&(a[S].updater(),a.splice(S,1))}h=y}}},370:s=>{var a={};s.exports=function(l,c){var d=function(u){if(a[u]===void 0){var f=document.querySelector(u);if(window.HTMLIFrameElement&&f instanceof window.HTMLIFrameElement)try{f=f.contentDocument.head}catch{f=null}a[u]=f}return a[u]}(l);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(c)}},278:s=>{s.exports=function(a){var l=document.createElement("style");return a.setAttributes(l,a.attributes),a.insert(l,a.options),l}},458:(s,a,l)=>{s.exports=function(c){var d=l.nc;d&&c.setAttribute("nonce",d)}},470:s=>{s.exports=function(a){var l=a.insertStyleElement(a);return{update:function(c){(function(d,u,f){var h="";f.supports&&(h+="@supports (".concat(f.supports,") {")),f.media&&(h+="@media ".concat(f.media," {"));var p=f.layer!==void 0;p&&(h+="@layer".concat(f.layer.length>0?" ".concat(f.layer):""," {")),h+=f.css,p&&(h+="}"),f.media&&(h+="}"),f.supports&&(h+="}");var m=f.sourceMap;m&&typeof btoa<"u"&&(h+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(m))))," */")),u.styleTagTransform(h,d,u.options)})(l,a,c)},remove:function(){(function(c){if(c.parentNode===null)return!1;c.parentNode.removeChild(c)})(l)}}}},488:s=>{s.exports=function(a,l){if(l.styleSheet)l.styleSheet.cssText=a;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(a))}}},251:s=>{s.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:s=>{s.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:s=>{s.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(s,a,l)=>{var c=typeof self<"u"?self:typeof window<"u"?window:l.g!==void 0?l.g:{},d=Object.create(c),u=/["&'<>]/;function f(h){return typeof h!="string"&&(h=h==null?"":typeof h=="function"?f(h.call(h)):JSON.stringify(h)),h}d.$escape=function(h){return function(p){var m=""+p,g=u.exec(m);if(!g)return p;var y="",E=void 0,S=void 0,C=void 0;for(E=g.index,S=0;E<m.length;E++){switch(m.charCodeAt(E)){case 34:C="&#34;";break;case 38:C="&#38;";break;case 39:C="&#39;";break;case 60:C="&#60;";break;case 62:C="&#62;";break;default:continue}S!==E&&(y+=m.substring(S,E)),S=E+1,y+=C}return S!==E?y+m.substring(S,E):y}(f(h))},d.$each=function(h,p){if(Array.isArray(h))for(var m=0,g=h.length;m<g;m++)p(h[m],m);else for(var y in h)p(h[y],y)},s.exports=d},471:(s,a,l)=>{s.exports=l(897)},352:s=>{s.exports=function(a){var l=[];return l.toString=function(){return this.map(function(c){var d="",u=c[5]!==void 0;return c[4]&&(d+="@supports (".concat(c[4],") {")),c[2]&&(d+="@media ".concat(c[2]," {")),u&&(d+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),d+=a(c),u&&(d+="}"),c[2]&&(d+="}"),c[4]&&(d+="}"),d}).join("")},l.i=function(c,d,u,f,h){typeof c=="string"&&(c=[[null,c,void 0]]);var p={};if(u)for(var m=0;m<this.length;m++){var g=this[m][0];g!=null&&(p[g]=!0)}for(var y=0;y<c.length;y++){var E=[].concat(c[y]);u&&p[E[0]]||(h!==void 0&&(E[5]===void 0||(E[1]="@layer".concat(E[5].length>0?" ".concat(E[5]):""," {").concat(E[1],"}")),E[5]=h),d&&(E[2]&&(E[1]="@media ".concat(E[2]," {").concat(E[1],"}")),E[2]=d),f&&(E[4]?(E[1]="@supports (".concat(E[4],") {").concat(E[1],"}"),E[4]=f):E[4]="".concat(f)),l.push(E))}},l}},80:s=>{s.exports=function(a,l){return l||(l={}),a&&(a=String(a.__esModule?a.default:a),/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),l.hash&&(a+=l.hash),/["'() \t\n]|(%20)/.test(a)||l.needQuotes?'"'.concat(a.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):a)}},415:s=>{s.exports=function(a){var l=a[1],c=a[3];if(!c)return l;if(typeof btoa=="function"){var d=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),f="/*# ".concat(u," */");return[l].concat([f]).join(`
`)}return[l].join(`
`)}},937:s=>{function a(l){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a(l)}s.exports=(typeof self>"u"?"undefined":a(self))=="object"?self.FormData:window.FormData},831:s=>{s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},r={};function i(s){var a=r[s];if(a!==void 0)return a.exports;var l=r[s]={id:s,exports:{}};return t[s](l,l.exports,i),l.exports}i.m=t,i.n=s=>{var a=s&&s.__esModule?()=>s.default:()=>s;return i.d(a,{a}),a},i.d=(s,a)=>{for(var l in a)i.o(a,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:a[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,a)=>Object.prototype.hasOwnProperty.call(s,a),i.b=document.baseURI||self.location.href,i.nc=void 0;var o={};return(()=>{i.d(o,{default:()=>gA});var s=i(856),a=i.n(s),l=i(470),c=i.n(l),d=i(370),u=i.n(d),f=i(458),h=i.n(f),p=i(278),m=i.n(p),g=i(488),y=i.n(g),E=i(685),S={};S.styleTagTransform=y(),S.setAttributes=h(),S.insert=u().bind(null,"head"),S.domAPI=c(),S.insertStyleElement=m(),a()(E.Z,S),E.Z&&E.Z.locals&&E.Z.locals;function C(b){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},C(b)}function k(b,A){this.name="AggregateError",this.errors=b,this.message=A||""}k.prototype=Error.prototype;function M(b){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},M(b)}var T=setTimeout;function z(b){return!!(b&&b.length!==void 0)}function F(){}function O(b){if(!(this instanceof O))throw new TypeError("Promises must be constructed via new");if(typeof b!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],ie(b,this)}function V(b,A){for(;b._state===3;)b=b._value;b._state!==0?(b._handled=!0,O._immediateFn(function(){var R=b._state===1?A.onFulfilled:A.onRejected;if(R!==null){var v;try{v=R(b._value)}catch(w){return void H(A.promise,w)}_(A.promise,v)}else(b._state===1?_:H)(A.promise,b._value)})):b._deferreds.push(A)}function _(b,A){try{if(A===b)throw new TypeError("A promise cannot be resolved with itself.");if(A&&(M(A)==="object"||typeof A=="function")){var R=A.then;if(A instanceof O)return b._state=3,b._value=A,void I(b);if(typeof R=="function")return void ie((v=R,w=A,function(){v.apply(w,arguments)}),b)}b._state=1,b._value=A,I(b)}catch(L){H(b,L)}var v,w}function H(b,A){b._state=2,b._value=A,I(b)}function I(b){b._state===2&&b._deferreds.length===0&&O._immediateFn(function(){b._handled||O._unhandledRejectionFn(b._value)});for(var A=0,R=b._deferreds.length;A<R;A++)V(b,b._deferreds[A]);b._deferreds=null}function W(b,A,R){this.onFulfilled=typeof b=="function"?b:null,this.onRejected=typeof A=="function"?A:null,this.promise=R}function ie(b,A){var R=!1;try{b(function(v){R||(R=!0,_(A,v))},function(v){R||(R=!0,H(A,v))})}catch(v){if(R)return;R=!0,H(A,v)}}O.prototype.catch=function(b){return this.then(null,b)},O.prototype.then=function(b,A){var R=new this.constructor(F);return V(this,new W(b,A,R)),R},O.prototype.finally=function(b){var A=this.constructor;return this.then(function(R){return A.resolve(b()).then(function(){return R})},function(R){return A.resolve(b()).then(function(){return A.reject(R)})})},O.all=function(b){return new O(function(A,R){if(!z(b))return R(new TypeError("Promise.all accepts an array"));var v=Array.prototype.slice.call(b);if(v.length===0)return A([]);var w=v.length;function L($,U){try{if(U&&(M(U)==="object"||typeof U=="function")){var ce=U.then;if(typeof ce=="function")return void ce.call(U,function(Ee){L($,Ee)},R)}v[$]=U,--w==0&&A(v)}catch(Ee){R(Ee)}}for(var D=0;D<v.length;D++)L(D,v[D])})},O.any=function(b){var A=this;return new A(function(R,v){if(!b||b.length===void 0)return v(new TypeError("Promise.any accepts an array"));var w=Array.prototype.slice.call(b);if(w.length===0)return v();for(var L=[],D=0;D<w.length;D++)try{A.resolve(w[D]).then(R).catch(function($){L.push($),L.length===w.length&&v(new k(L,"All promises were rejected"))})}catch($){v($)}})},O.allSettled=function(b){return new this(function(A,R){if(!b||b.length===void 0)return R(new TypeError(C(b)+" "+b+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var v=Array.prototype.slice.call(b);if(v.length===0)return A([]);var w=v.length;function L($,U){if(U&&(C(U)==="object"||typeof U=="function")){var ce=U.then;if(typeof ce=="function")return void ce.call(U,function(Ee){L($,Ee)},function(Ee){v[$]={status:"rejected",reason:Ee},--w==0&&A(v)})}v[$]={status:"fulfilled",value:U},--w==0&&A(v)}for(var D=0;D<v.length;D++)L(D,v[D])})},O.resolve=function(b){return b&&M(b)==="object"&&b.constructor===O?b:new O(function(A){A(b)})},O.reject=function(b){return new O(function(A,R){R(b)})},O.race=function(b){return new O(function(A,R){if(!z(b))return R(new TypeError("Promise.race accepts an array"));for(var v=0,w=b.length;v<w;v++)O.resolve(b[v]).then(A,R)})},O._immediateFn=typeof setImmediate=="function"&&function(b){setImmediate(b)}||function(b){T(b,0)},O._unhandledRejectionFn=function(b){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",b)};const Q=O;var ue=/mobile/i.test(window.navigator.userAgent);const J={secondToTime:function(b){if((b=b||0)===0||b===1/0||b.toString()==="NaN")return"00:00";var A=Math.floor(b/3600),R=Math.floor((b-3600*A)/60),v=Math.floor(b-3600*A-60*R);return(A>0?[A,R,v]:[R,v]).map(function(w){return w<10?"0"+w:""+w}).join(":")},getElementViewLeft:function(b){var A=b.offsetLeft,R=b.offsetParent,v=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;R!==null&&R!==b;)A+=R.offsetLeft,R=R.offsetParent;else for(;R!==null;)A+=R.offsetLeft,R=R.offsetParent;return A-v},getBoundingClientRectViewLeft:function(b){var A=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(b.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var R=document.createElement("div");R.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(R),this.getBoundingClientRectViewLeft.offset=-R.getBoundingClientRect().top-A,document.body.removeChild(R),R=null}var v=b.getBoundingClientRect(),w=this.getBoundingClientRectViewLeft.offset;return v.left+w}return this.getElementViewLeft(b)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(b){var A=b.left,R=A===void 0?0:A,v=b.top,w=v===void 0?0:v;this.isFirefox?(document.documentElement.scrollLeft=R,document.documentElement.scrollTop=w):window.scrollTo(R,w)},isMobile:ue,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(b,A){localStorage.setItem(b,A)},get:function(b){return localStorage.getItem(b)}},nameMap:{dragStart:ue?"touchstart":"mousedown",dragMove:ue?"touchmove":"mousemove",dragEnd:ue?"touchend":"mouseup"},color2Number:function(b){return b[0]==="#"&&(b=b.substr(1)),b.length===3&&(b="".concat(b[0]).concat(b[0]).concat(b[1]).concat(b[1]).concat(b[2]).concat(b[2])),parseInt(b,16)+0&16777215},number2Color:function(b){return"#"+("00000"+b.toString(16)).slice(-6)},number2Type:function(b){switch(b){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function ae(b,A){return function(){return b.apply(A,arguments)}}function X(b){return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},X(b)}var q,re=Object.prototype.toString,ge=Object.getPrototypeOf,Ae=(q=Object.create(null),function(b){var A=re.call(b);return q[A]||(q[A]=A.slice(8,-1).toLowerCase())}),Le=function(b){return b=b.toLowerCase(),function(A){return Ae(A)===b}},Fe=function(b){return function(A){return X(A)===b}},Ue=Array.isArray,de=Fe("undefined"),ot=Le("ArrayBuffer"),at=Fe("string"),yt=Fe("function"),Z=Fe("number"),x=function(b){return b!==null&&X(b)==="object"},Y=function(b){if(Ae(b)!=="object")return!1;var A=ge(b);return!(A!==null&&A!==Object.prototype&&Object.getPrototypeOf(A)!==null||Symbol.toStringTag in b||Symbol.iterator in b)},ee=Le("Date"),N=Le("File"),B=Le("Blob"),G=Le("FileList"),te=Le("URLSearchParams");function ne(b,A){var R,v,w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},L=w.allOwnKeys,D=L!==void 0&&L;if(b!=null)if(X(b)!=="object"&&(b=[b]),Ue(b))for(R=0,v=b.length;R<v;R++)A.call(null,b[R],R,b);else{var $,U=D?Object.getOwnPropertyNames(b):Object.keys(b),ce=U.length;for(R=0;R<ce;R++)$=U[R],A.call(null,b[$],$,b)}}function K(b,A){A=A.toLowerCase();for(var R,v=Object.keys(b),w=v.length;w-- >0;)if(A===(R=v[w]).toLowerCase())return R;return null}var me,pe,fe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:ys,ke=function(b){return!de(b)&&b!==fe},Ne=(me=typeof Uint8Array<"u"&&ge(Uint8Array),function(b){return me&&b instanceof me}),Me=Le("HTMLFormElement"),Xe=(pe=Object.prototype.hasOwnProperty,function(b,A){return pe.call(b,A)}),St=Le("RegExp"),st=function(b,A){var R=Object.getOwnPropertyDescriptors(b),v={};ne(R,function(w,L){A(w,L,b)!==!1&&(v[L]=w)}),Object.defineProperties(b,v)};const ve={isArray:Ue,isArrayBuffer:ot,isBuffer:function(b){return b!==null&&!de(b)&&b.constructor!==null&&!de(b.constructor)&&yt(b.constructor.isBuffer)&&b.constructor.isBuffer(b)},isFormData:function(b){var A="[object FormData]";return b&&(typeof FormData=="function"&&b instanceof FormData||re.call(b)===A||yt(b.toString)&&b.toString()===A)},isArrayBufferView:function(b){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(b):b&&b.buffer&&ot(b.buffer)},isString:at,isNumber:Z,isBoolean:function(b){return b===!0||b===!1},isObject:x,isPlainObject:Y,isUndefined:de,isDate:ee,isFile:N,isBlob:B,isRegExp:St,isFunction:yt,isStream:function(b){return x(b)&&yt(b.pipe)},isURLSearchParams:te,isTypedArray:Ne,isFileList:G,forEach:ne,merge:function b(){for(var A=ke(this)&&this||{},R=A.caseless,v={},w=function($,U){var ce=R&&K(v,U)||U;Y(v[ce])&&Y($)?v[ce]=b(v[ce],$):Y($)?v[ce]=b({},$):Ue($)?v[ce]=$.slice():v[ce]=$},L=0,D=arguments.length;L<D;L++)arguments[L]&&ne(arguments[L],w);return v},extend:function(b,A,R){var v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},w=v.allOwnKeys;return ne(A,function(L,D){R&&yt(L)?b[D]=ae(L,R):b[D]=L},{allOwnKeys:w}),b},trim:function(b){return b.trim?b.trim():b.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(b){return b.charCodeAt(0)===65279&&(b=b.slice(1)),b},inherits:function(b,A,R,v){b.prototype=Object.create(A.prototype,v),b.prototype.constructor=b,Object.defineProperty(b,"super",{value:A.prototype}),R&&Object.assign(b.prototype,R)},toFlatObject:function(b,A,R,v){var w,L,D,$={};if(A=A||{},b==null)return A;do{for(L=(w=Object.getOwnPropertyNames(b)).length;L-- >0;)D=w[L],v&&!v(D,b,A)||$[D]||(A[D]=b[D],$[D]=!0);b=R!==!1&&ge(b)}while(b&&(!R||R(b,A))&&b!==Object.prototype);return A},kindOf:Ae,kindOfTest:Le,endsWith:function(b,A,R){b=String(b),(R===void 0||R>b.length)&&(R=b.length),R-=A.length;var v=b.indexOf(A,R);return v!==-1&&v===R},toArray:function(b){if(!b)return null;if(Ue(b))return b;var A=b.length;if(!Z(A))return null;for(var R=new Array(A);A-- >0;)R[A]=b[A];return R},forEachEntry:function(b,A){for(var R,v=(b&&b[Symbol.iterator]).call(b);(R=v.next())&&!R.done;){var w=R.value;A.call(b,w[0],w[1])}},matchAll:function(b,A){for(var R,v=[];(R=b.exec(A))!==null;)v.push(R);return v},isHTMLForm:Me,hasOwnProperty:Xe,hasOwnProp:Xe,reduceDescriptors:st,freezeMethods:function(b){st(b,function(A,R){if(yt(b)&&["arguments","caller","callee"].indexOf(R)!==-1)return!1;var v=b[R];yt(v)&&(A.enumerable=!1,"writable"in A?A.writable=!1:A.set||(A.set=function(){throw Error("Can not rewrite read-only method '"+R+"'")}))})},toObjectSet:function(b,A){var R={},v=function(w){w.forEach(function(L){R[L]=!0})};return Ue(b)?v(b):v(String(b).split(A)),R},toCamelCase:function(b){return b.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(A,R,v){return R.toUpperCase()+v})},noop:function(){},toFiniteNumber:function(b,A){return b=+b,Number.isFinite(b)?b:A},findKey:K,global:fe,isContextDefined:ke,toJSONObject:function(b){var A=new Array(10);return function R(v,w){if(x(v)){if(A.indexOf(v)>=0)return;if(!("toJSON"in v)){A[w]=v;var L=Ue(v)?[]:{};return ne(v,function(D,$){var U=R(D,w+1);!de(U)&&(L[$]=U)}),A[w]=void 0,L}}return v}(b,0)}};function Qe(b,A,R,v,w){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=b,this.name="AxiosError",A&&(this.code=A),R&&(this.config=R),v&&(this.request=v),w&&(this.response=w)}ve.inherits(Qe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ve.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Pt=Qe.prototype,In={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(b){In[b]={value:b}}),Object.defineProperties(Qe,In),Object.defineProperty(Pt,"isAxiosError",{value:!0}),Qe.from=function(b,A,R,v,w,L){var D=Object.create(Pt);return ve.toFlatObject(b,D,function($){return $!==Error.prototype},function($){return $!=="isAxiosError"}),Qe.call(D,b.message,A,R,v,w),D.cause=b,D.name=b.name,L&&Object.assign(D,L),D};const ye=Qe,Pe=i(937);function je(b){return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},je(b)}function dt(b){return ve.isPlainObject(b)||ve.isArray(b)}function xt(b){return ve.endsWith(b,"[]")?b.slice(0,-2):b}function Bt(b,A,R){return b?b.concat(A).map(function(v,w){return v=xt(v),!R&&w?"["+v+"]":v}).join(R?".":""):A}var Ot=ve.toFlatObject(ve,{},null,function(b){return/^is[A-Z]/.test(b)});const lt=function(b,A,R){if(!ve.isObject(b))throw new TypeError("target must be an object");A=A||new(Pe||FormData);var v,w=(R=ve.toFlatObject(R,{metaTokens:!0,dots:!1,indexes:!1},!1,function(ze,Oe){return!ve.isUndefined(Oe[ze])})).metaTokens,L=R.visitor||Ee,D=R.dots,$=R.indexes,U=(R.Blob||typeof Blob<"u"&&Blob)&&(v=A)&&ve.isFunction(v.append)&&v[Symbol.toStringTag]==="FormData"&&v[Symbol.iterator];if(!ve.isFunction(L))throw new TypeError("visitor must be a function");function ce(ze){if(ze===null)return"";if(ve.isDate(ze))return ze.toISOString();if(!U&&ve.isBlob(ze))throw new ye("Blob is not supported. Use a Buffer instead.");return ve.isArrayBuffer(ze)||ve.isTypedArray(ze)?U&&typeof Blob=="function"?new Blob([ze]):Buffer.from(ze):ze}function Ee(ze,Oe,_e){var He=ze;if(ze&&!_e&&je(ze)==="object"){if(ve.endsWith(Oe,"{}"))Oe=w?Oe:Oe.slice(0,-2),ze=JSON.stringify(ze);else if(ve.isArray(ze)&&function(Je){return ve.isArray(Je)&&!Je.some(dt)}(ze)||ve.isFileList(ze)||ve.endsWith(Oe,"[]")&&(He=ve.toArray(ze)))return Oe=xt(Oe),He.forEach(function(Je,jt){!ve.isUndefined(Je)&&Je!==null&&A.append($===!0?Bt([Oe],jt,D):$===null?Oe:Oe+"[]",ce(Je))}),!1}return!!dt(ze)||(A.append(Bt(_e,Oe,D),ce(ze)),!1)}var Re=[],Be=Object.assign(Ot,{defaultVisitor:Ee,convertValue:ce,isVisitable:dt});if(!ve.isObject(b))throw new TypeError("data must be an object");return function ze(Oe,_e){if(!ve.isUndefined(Oe)){if(Re.indexOf(Oe)!==-1)throw Error("Circular reference detected in "+_e.join("."));Re.push(Oe),ve.forEach(Oe,function(He,Je){(!(ve.isUndefined(He)||He===null)&&L.call(A,He,ve.isString(Je)?Je.trim():Je,_e,Be))===!0&&ze(He,_e?_e.concat(Je):[Je])}),Re.pop()}}(b),A};function Ht(b){var A={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(b).replace(/[!'()~]|%20|%00/g,function(R){return A[R]})}function En(b,A){this._pairs=[],b&&lt(b,this,A)}var ei=En.prototype;ei.append=function(b,A){this._pairs.push([b,A])},ei.toString=function(b){var A=b?function(R){return b.call(this,R,Ht)}:Ht;return this._pairs.map(function(R){return A(R[0])+"="+A(R[1])},"").join("&")};const ea=En;function Ui(b){return encodeURIComponent(b).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ti(b,A,R){if(!A)return b;var v,w=R&&R.encode||Ui,L=R&&R.serialize;if(v=L?L(A,R):ve.isURLSearchParams(A)?A.toString():new ea(A,R).toString(w)){var D=b.indexOf("#");D!==-1&&(b=b.slice(0,D)),b+=(b.indexOf("?")===-1?"?":"&")+v}return b}function ni(b){return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},ni(b)}function rc(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(ni(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(ni(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),ni(w)==="symbol"?w:String(w)),v)}var w}var ta=function(){function b(){(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,b),this.handlers=[]}var A,R;return A=b,R=[{key:"use",value:function(v,w,L){return this.handlers.push({fulfilled:v,rejected:w,synchronous:!!L&&L.synchronous,runWhen:L?L.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(v){this.handlers[v]&&(this.handlers[v]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(v){ve.forEach(this.handlers,function(w){w!==null&&v(w)})}}],R&&rc(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const fr=ta,oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ce=typeof URLSearchParams<"u"?URLSearchParams:ea,Ge=FormData;var ht,Lt=(typeof navigator>"u"||(ht=navigator.product)!=="ReactNative"&&ht!=="NativeScript"&&ht!=="NS")&&typeof window<"u"&&typeof document<"u",mt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const qt={isBrowser:!0,classes:{URLSearchParams:Ce,FormData:Ge,Blob},isStandardBrowserEnv:Lt,isStandardBrowserWebWorkerEnv:mt,protocols:["http","https","file","blob","url","data"]},qn=function(b){function A(v,w,L,D){var $=v[D++],U=Number.isFinite(+$),ce=D>=v.length;return $=!$&&ve.isArray(L)?L.length:$,ce?(ve.hasOwnProp(L,$)?L[$]=[L[$],w]:L[$]=w,!U):(L[$]&&ve.isObject(L[$])||(L[$]=[]),A(v,w,L[$],D)&&ve.isArray(L[$])&&(L[$]=function(Ee){var Re,Be,ze={},Oe=Object.keys(Ee),_e=Oe.length;for(Re=0;Re<_e;Re++)ze[Be=Oe[Re]]=Ee[Be];return ze}(L[$])),!U)}if(ve.isFormData(b)&&ve.isFunction(b.entries)){var R={};return ve.forEachEntry(b,function(v,w){A(function(L){return ve.matchAll(/\w+|\[(\w*)]/g,L).map(function(D){return D[0]==="[]"?"":D[1]||D[0]})}(v),w,R,0)}),R}return null};var hr={"Content-Type":void 0},Yn={transitional:oe,adapter:["xhr","http"],transformRequest:[function(b,A){var R,v=A.getContentType()||"",w=v.indexOf("application/json")>-1,L=ve.isObject(b);if(L&&ve.isHTMLForm(b)&&(b=new FormData(b)),ve.isFormData(b))return w&&w?JSON.stringify(qn(b)):b;if(ve.isArrayBuffer(b)||ve.isBuffer(b)||ve.isStream(b)||ve.isFile(b)||ve.isBlob(b))return b;if(ve.isArrayBufferView(b))return b.buffer;if(ve.isURLSearchParams(b))return A.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),b.toString();if(L){if(v.indexOf("application/x-www-form-urlencoded")>-1)return function($,U){return lt($,new qt.classes.URLSearchParams,Object.assign({visitor:function(ce,Ee,Re,Be){return qt.isNode&&ve.isBuffer(ce)?(this.append(Ee,ce.toString("base64")),!1):Be.defaultVisitor.apply(this,arguments)}},U))}(b,this.formSerializer).toString();if((R=ve.isFileList(b))||v.indexOf("multipart/form-data")>-1){var D=this.env&&this.env.FormData;return lt(R?{"files[]":b}:b,D&&new D,this.formSerializer)}}return L||w?(A.setContentType("application/json",!1),function($,U,ce){if(ve.isString($))try{return(0,JSON.parse)($),ve.trim($)}catch(Ee){if(Ee.name!=="SyntaxError")throw Ee}return(0,JSON.stringify)($)}(b)):b}],transformResponse:[function(b){var A=this.transitional||Yn.transitional,R=A&&A.forcedJSONParsing,v=this.responseType==="json";if(b&&ve.isString(b)&&(R&&!this.responseType||v)){var w=!(A&&A.silentJSONParsing)&&v;try{return JSON.parse(b)}catch(L){if(w)throw L.name==="SyntaxError"?ye.from(L,ye.ERR_BAD_RESPONSE,this,null,this.response):L}}return b}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(b){return b>=200&&b<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ve.forEach(["delete","get","head"],function(b){Yn.headers[b]={}}),ve.forEach(["post","put","patch"],function(b){Yn.headers[b]=ve.merge(hr)});const pr=Yn;var Fo=ve.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function ri(b){return ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},ri(b)}function na(b,A){(A==null||A>b.length)&&(A=b.length);for(var R=0,v=new Array(A);R<A;R++)v[R]=b[R];return v}function ra(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(ri(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(ri(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),ri(w)==="symbol"?w:String(w)),v)}var w}var ia=Symbol("internals");function ii(b){return b&&String(b).trim().toLowerCase()}function Hi(b){return b===!1||b==null?b:ve.isArray(b)?b.map(Hi):String(b)}function oa(b,A,R,v){return ve.isFunction(v)?v.call(this,A,R):ve.isString(A)?ve.isString(v)?A.indexOf(v)!==-1:ve.isRegExp(v)?v.test(A):void 0:void 0}var Wi=function(b,A){function R(D){(function($,U){if(!($ instanceof U))throw new TypeError("Cannot call a class as a function")})(this,R),D&&this.set(D)}var v,w,L;return v=R,w=[{key:"set",value:function(D,$,U){var ce=this;function Ee(Je,jt,Ft){var vt=ii(jt);if(!vt)throw new Error("header name must be a non-empty string");var Br=ve.findKey(ce,vt);(!Br||ce[Br]===void 0||Ft===!0||Ft===void 0&&ce[Br]!==!1)&&(ce[Br||jt]=Hi(Je))}var Re,Be,ze,Oe,_e,He=function(Je,jt){return ve.forEach(Je,function(Ft,vt){return Ee(Ft,vt,jt)})};return ve.isPlainObject(D)||D instanceof this.constructor?He(D,$):ve.isString(D)&&(D=D.trim())&&!/^[-_a-zA-Z]+$/.test(D.trim())?He((_e={},(Re=D)&&Re.split(`
`).forEach(function(Je){Oe=Je.indexOf(":"),Be=Je.substring(0,Oe).trim().toLowerCase(),ze=Je.substring(Oe+1).trim(),!Be||_e[Be]&&Fo[Be]||(Be==="set-cookie"?_e[Be]?_e[Be].push(ze):_e[Be]=[ze]:_e[Be]=_e[Be]?_e[Be]+", "+ze:ze)}),_e),$):D!=null&&Ee($,D,U),this}},{key:"get",value:function(D,$){if(D=ii(D)){var U=ve.findKey(this,D);if(U){var ce=this[U];if(!$)return ce;if($===!0)return function(Ee){for(var Re,Be=Object.create(null),ze=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;Re=ze.exec(Ee);)Be[Re[1]]=Re[2];return Be}(ce);if(ve.isFunction($))return $.call(this,ce,U);if(ve.isRegExp($))return $.exec(ce);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(D,$){if(D=ii(D)){var U=ve.findKey(this,D);return!(!U||$&&!oa(0,this[U],U,$))}return!1}},{key:"delete",value:function(D,$){var U=this,ce=!1;function Ee(Re){if(Re=ii(Re)){var Be=ve.findKey(U,Re);!Be||$&&!oa(0,U[Be],Be,$)||(delete U[Be],ce=!0)}}return ve.isArray(D)?D.forEach(Ee):Ee(D),ce}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(D){var $=this,U={};return ve.forEach(this,function(ce,Ee){var Re=ve.findKey(U,Ee);if(Re)return $[Re]=Hi(ce),void delete $[Ee];var Be=D?function(ze){return ze.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(Oe,_e,He){return _e.toUpperCase()+He})}(Ee):String(Ee).trim();Be!==Ee&&delete $[Ee],$[Be]=Hi(ce),U[Be]=!0}),this}},{key:"concat",value:function(){for(var D,$=arguments.length,U=new Array($),ce=0;ce<$;ce++)U[ce]=arguments[ce];return(D=this.constructor).concat.apply(D,[this].concat(U))}},{key:"toJSON",value:function(D){var $=Object.create(null);return ve.forEach(this,function(U,ce){U!=null&&U!==!1&&($[ce]=D&&ve.isArray(U)?U.join(", "):U)}),$}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(D){var $,U,ce=(U=2,function(Ee){if(Array.isArray(Ee))return Ee}($=D)||function(Ee,Re){var Be=Ee==null?null:typeof Symbol<"u"&&Ee[Symbol.iterator]||Ee["@@iterator"];if(Be!=null){var ze,Oe,_e,He,Je=[],jt=!0,Ft=!1;try{if(_e=(Be=Be.call(Ee)).next,Re===0){if(Object(Be)!==Be)return;jt=!1}else for(;!(jt=(ze=_e.call(Be)).done)&&(Je.push(ze.value),Je.length!==Re);jt=!0);}catch(vt){Ft=!0,Oe=vt}finally{try{if(!jt&&Be.return!=null&&(He=Be.return(),Object(He)!==He))return}finally{if(Ft)throw Oe}}return Je}}($,U)||function(Ee,Re){if(Ee){if(typeof Ee=="string")return na(Ee,Re);var Be=Object.prototype.toString.call(Ee).slice(8,-1);return Be==="Object"&&Ee.constructor&&(Be=Ee.constructor.name),Be==="Map"||Be==="Set"?Array.from(Ee):Be==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Be)?na(Ee,Re):void 0}}($,U)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return ce[0]+": "+ce[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],L=[{key:"from",value:function(D){return D instanceof this?D:new this(D)}},{key:"concat",value:function(D){for(var $=new this(D),U=arguments.length,ce=new Array(U>1?U-1:0),Ee=1;Ee<U;Ee++)ce[Ee-1]=arguments[Ee];return ce.forEach(function(Re){return $.set(Re)}),$}},{key:"accessor",value:function(D){var $=(this[ia]=this[ia]={accessors:{}}).accessors,U=this.prototype;function ce(Ee){var Re=ii(Ee);$[Re]||(function(Be,ze){var Oe=ve.toCamelCase(" "+ze);["get","set","has"].forEach(function(_e){Object.defineProperty(Be,_e+Oe,{value:function(He,Je,jt){return this[_e].call(this,ze,He,Je,jt)},configurable:!0})})}(U,Ee),$[Re]=!0)}return ve.isArray(D)?D.forEach(ce):ce(D),this}}],w&&ra(v.prototype,w),L&&ra(v,L),Object.defineProperty(v,"prototype",{writable:!1}),R}();Wi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),ve.freezeMethods(Wi.prototype),ve.freezeMethods(Wi);const Mn=Wi;function Mo(b,A){var R=this||pr,v=A||R,w=Mn.from(v.headers),L=v.data;return ve.forEach(b,function(D){L=D.call(R,L,w.normalize(),A?A.status:void 0)}),w.normalize(),L}function sa(b){return!(!b||!b.__CANCEL__)}function aa(b,A,R){ye.call(this,b??"canceled",ye.ERR_CANCELED,A,R),this.name="CanceledError"}ve.inherits(aa,ye,{__CANCEL__:!0});const ji=aa,ic=qt.isStandardBrowserEnv?{write:function(b,A,R,v,w,L){var D=[];D.push(b+"="+encodeURIComponent(A)),ve.isNumber(R)&&D.push("expires="+new Date(R).toGMTString()),ve.isString(v)&&D.push("path="+v),ve.isString(w)&&D.push("domain="+w),L===!0&&D.push("secure"),document.cookie=D.join("; ")},read:function(b){var A=document.cookie.match(new RegExp("(^|;\\s*)("+b+")=([^;]*)"));return A?decodeURIComponent(A[3]):null},remove:function(b){this.write(b,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function la(b,A){return b&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(A)?function(R,v){return v?R.replace(/\/+$/,"")+"/"+v.replace(/^\/+/,""):R}(b,A):A}const oc=qt.isStandardBrowserEnv?function(){var b,A=/(msie|trident)/i.test(navigator.userAgent),R=document.createElement("a");function v(w){var L=w;return A&&(R.setAttribute("href",L),L=R.href),R.setAttribute("href",L),{href:R.href,protocol:R.protocol?R.protocol.replace(/:$/,""):"",host:R.host,search:R.search?R.search.replace(/^\?/,""):"",hash:R.hash?R.hash.replace(/^#/,""):"",hostname:R.hostname,port:R.port,pathname:R.pathname.charAt(0)==="/"?R.pathname:"/"+R.pathname}}return b=v(window.location.href),function(w){var L=ve.isString(w)?v(w):w;return L.protocol===b.protocol&&L.host===b.host}}():function(){return!0};function ca(b,A){var R=0,v=function(w,L){w=w||10;var D,$=new Array(w),U=new Array(w),ce=0,Ee=0;return L=L!==void 0?L:1e3,function(Re){var Be=Date.now(),ze=U[Ee];D||(D=Be),$[ce]=Re,U[ce]=Be;for(var Oe=Ee,_e=0;Oe!==ce;)_e+=$[Oe++],Oe%=w;if((ce=(ce+1)%w)===Ee&&(Ee=(Ee+1)%w),!(Be-D<L)){var He=ze&&Be-ze;return He?Math.round(1e3*_e/He):void 0}}}(50,250);return function(w){var L=w.loaded,D=w.lengthComputable?w.total:void 0,$=L-R,U=v($);R=L;var ce={loaded:L,total:D,progress:D?L/D:void 0,bytes:$,rate:U||void 0,estimated:U&&D&&L<=D?(D-L)/U:void 0,event:w};ce[A?"download":"upload"]=!0,b(ce)}}var No={http:null,xhr:typeof XMLHttpRequest<"u"&&function(b){return new Promise(function(A,R){var v,w=b.data,L=Mn.from(b.headers).normalize(),D=b.responseType;function $(){b.cancelToken&&b.cancelToken.unsubscribe(v),b.signal&&b.signal.removeEventListener("abort",v)}ve.isFormData(w)&&(qt.isStandardBrowserEnv||qt.isStandardBrowserWebWorkerEnv)&&L.setContentType(!1);var U=new XMLHttpRequest;if(b.auth){var ce=b.auth.username||"",Ee=b.auth.password?unescape(encodeURIComponent(b.auth.password)):"";L.set("Authorization","Basic "+btoa(ce+":"+Ee))}var Re=la(b.baseURL,b.url);function Be(){if(U){var He=Mn.from("getAllResponseHeaders"in U&&U.getAllResponseHeaders());(function(Je,jt,Ft){var vt=Ft.config.validateStatus;Ft.status&&vt&&!vt(Ft.status)?jt(new ye("Request failed with status code "+Ft.status,[ye.ERR_BAD_REQUEST,ye.ERR_BAD_RESPONSE][Math.floor(Ft.status/100)-4],Ft.config,Ft.request,Ft)):Je(Ft)})(function(Je){A(Je),$()},function(Je){R(Je),$()},{data:D&&D!=="text"&&D!=="json"?U.response:U.responseText,status:U.status,statusText:U.statusText,headers:He,config:b,request:U}),U=null}}if(U.open(b.method.toUpperCase(),ti(Re,b.params,b.paramsSerializer),!0),U.timeout=b.timeout,"onloadend"in U?U.onloadend=Be:U.onreadystatechange=function(){U&&U.readyState===4&&(U.status!==0||U.responseURL&&U.responseURL.indexOf("file:")===0)&&setTimeout(Be)},U.onabort=function(){U&&(R(new ye("Request aborted",ye.ECONNABORTED,b,U)),U=null)},U.onerror=function(){R(new ye("Network Error",ye.ERR_NETWORK,b,U)),U=null},U.ontimeout=function(){var He=b.timeout?"timeout of "+b.timeout+"ms exceeded":"timeout exceeded",Je=b.transitional||oe;b.timeoutErrorMessage&&(He=b.timeoutErrorMessage),R(new ye(He,Je.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,b,U)),U=null},qt.isStandardBrowserEnv){var ze=(b.withCredentials||oc(Re))&&b.xsrfCookieName&&ic.read(b.xsrfCookieName);ze&&L.set(b.xsrfHeaderName,ze)}w===void 0&&L.setContentType(null),"setRequestHeader"in U&&ve.forEach(L.toJSON(),function(He,Je){U.setRequestHeader(Je,He)}),ve.isUndefined(b.withCredentials)||(U.withCredentials=!!b.withCredentials),D&&D!=="json"&&(U.responseType=b.responseType),typeof b.onDownloadProgress=="function"&&U.addEventListener("progress",ca(b.onDownloadProgress,!0)),typeof b.onUploadProgress=="function"&&U.upload&&U.upload.addEventListener("progress",ca(b.onUploadProgress)),(b.cancelToken||b.signal)&&(v=function(He){U&&(R(!He||He.type?new ji(null,b,U):He),U.abort(),U=null)},b.cancelToken&&b.cancelToken.subscribe(v),b.signal&&(b.signal.aborted?v():b.signal.addEventListener("abort",v)));var Oe,_e=(Oe=/^([-+\w]{1,25})(:?\/\/|:)/.exec(Re))&&Oe[1]||"";_e&&qt.protocols.indexOf(_e)===-1?R(new ye("Unsupported protocol "+_e+":",ye.ERR_BAD_REQUEST,b)):U.send(w||null)})}};ve.forEach(No,function(b,A){if(b){try{Object.defineProperty(b,"name",{value:A})}catch{}Object.defineProperty(b,"adapterName",{value:A})}});function zo(b){if(b.cancelToken&&b.cancelToken.throwIfRequested(),b.signal&&b.signal.aborted)throw new ji(null,b)}function da(b){return zo(b),b.headers=Mn.from(b.headers),b.data=Mo.call(b,b.transformRequest),["post","put","patch"].indexOf(b.method)!==-1&&b.headers.setContentType("application/x-www-form-urlencoded",!1),function(A){for(var R,v,w=(A=ve.isArray(A)?A:[A]).length,L=0;L<w&&(R=A[L],!(v=ve.isString(R)?No[R.toLowerCase()]:R));L++);if(!v)throw v===!1?new ye("Adapter ".concat(R," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(ve.hasOwnProp(No,R)?"Adapter '".concat(R,"' is not available in the build"):"Unknown adapter '".concat(R,"'"));if(!ve.isFunction(v))throw new TypeError("adapter is not a function");return v}(b.adapter||pr.adapter)(b).then(function(A){return zo(b),A.data=Mo.call(b,b.transformResponse,A),A.headers=Mn.from(A.headers),A},function(A){return sa(A)||(zo(b),A&&A.response&&(A.response.data=Mo.call(b,b.transformResponse,A.response),A.response.headers=Mn.from(A.response.headers))),Promise.reject(A)})}var ua=function(b){return b instanceof Mn?b.toJSON():b};function Dr(b,A){A=A||{};var R={};function v(ce,Ee,Re){return ve.isPlainObject(ce)&&ve.isPlainObject(Ee)?ve.merge.call({caseless:Re},ce,Ee):ve.isPlainObject(Ee)?ve.merge({},Ee):ve.isArray(Ee)?Ee.slice():Ee}function w(ce,Ee,Re){return ve.isUndefined(Ee)?ve.isUndefined(ce)?void 0:v(void 0,ce,Re):v(ce,Ee,Re)}function L(ce,Ee){if(!ve.isUndefined(Ee))return v(void 0,Ee)}function D(ce,Ee){return ve.isUndefined(Ee)?ve.isUndefined(ce)?void 0:v(void 0,ce):v(void 0,Ee)}function $(ce,Ee,Re){return Re in A?v(ce,Ee):Re in b?v(void 0,ce):void 0}var U={url:L,method:L,data:L,baseURL:D,transformRequest:D,transformResponse:D,paramsSerializer:D,timeout:D,timeoutMessage:D,withCredentials:D,adapter:D,responseType:D,xsrfCookieName:D,xsrfHeaderName:D,onUploadProgress:D,onDownloadProgress:D,decompress:D,maxContentLength:D,maxBodyLength:D,beforeRedirect:D,transport:D,httpAgent:D,httpsAgent:D,cancelToken:D,socketPath:D,responseEncoding:D,validateStatus:$,headers:function(ce,Ee){return w(ua(ce),ua(Ee),!0)}};return ve.forEach(Object.keys(b).concat(Object.keys(A)),function(ce){var Ee=U[ce]||w,Re=Ee(b[ce],A[ce],ce);ve.isUndefined(Re)&&Ee!==$||(R[ce]=Re)}),R}function Gi(b){return Gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Gi(b)}var $o={};["object","boolean","number","function","string","symbol"].forEach(function(b,A){$o[b]=function(R){return Gi(R)===b||"a"+(A<1?"n ":" ")+b}});var fa={};$o.transitional=function(b,A,R){function v(w,L){return"[Axios v1.2.3] Transitional option '"+w+"'"+L+(R?". "+R:"")}return function(w,L,D){if(b===!1)throw new ye(v(L," has been removed"+(A?" in "+A:"")),ye.ERR_DEPRECATED);return A&&!fa[L]&&(fa[L]=!0,console.warn(v(L," has been deprecated since v"+A+" and will be removed in the near future"))),!b||b(w,L,D)}};const Uo={assertOptions:function(b,A,R){if(Gi(b)!=="object")throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);for(var v=Object.keys(b),w=v.length;w-- >0;){var L=v[w],D=A[L];if(D){var $=b[L],U=$===void 0||D($,L,b);if(U!==!0)throw new ye("option "+L+" must be "+U,ye.ERR_BAD_OPTION_VALUE)}else if(R!==!0)throw new ye("Unknown option "+L,ye.ERR_BAD_OPTION)}},validators:$o};function oi(b){return oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},oi(b)}function sc(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(oi(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(oi(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),oi(w)==="symbol"?w:String(w)),v)}var w}var Xn=Uo.validators,Ki=function(){function b(v){(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,b),this.defaults=v,this.interceptors={request:new fr,response:new fr}}var A,R;return A=b,(R=[{key:"request",value:function(v,w){typeof v=="string"?(w=w||{}).url=v:w=v||{};var L,D=w=Dr(this.defaults,w),$=D.transitional,U=D.paramsSerializer,ce=D.headers;$!==void 0&&Uo.assertOptions($,{silentJSONParsing:Xn.transitional(Xn.boolean),forcedJSONParsing:Xn.transitional(Xn.boolean),clarifyTimeoutError:Xn.transitional(Xn.boolean)},!1),U!==void 0&&Uo.assertOptions(U,{encode:Xn.function,serialize:Xn.function},!0),w.method=(w.method||this.defaults.method||"get").toLowerCase(),(L=ce&&ve.merge(ce.common,ce[w.method]))&&ve.forEach(["delete","get","head","post","put","patch","common"],function(vt){delete ce[vt]}),w.headers=Mn.concat(L,ce);var Ee=[],Re=!0;this.interceptors.request.forEach(function(vt){typeof vt.runWhen=="function"&&vt.runWhen(w)===!1||(Re=Re&&vt.synchronous,Ee.unshift(vt.fulfilled,vt.rejected))});var Be,ze=[];this.interceptors.response.forEach(function(vt){ze.push(vt.fulfilled,vt.rejected)});var Oe,_e=0;if(!Re){var He=[da.bind(this),void 0];for(He.unshift.apply(He,Ee),He.push.apply(He,ze),Oe=He.length,Be=Promise.resolve(w);_e<Oe;)Be=Be.then(He[_e++],He[_e++]);return Be}Oe=Ee.length;var Je=w;for(_e=0;_e<Oe;){var jt=Ee[_e++],Ft=Ee[_e++];try{Je=jt(Je)}catch(vt){Ft.call(this,vt);break}}try{Be=da.call(this,Je)}catch(vt){return Promise.reject(vt)}for(_e=0,Oe=ze.length;_e<Oe;)Be=Be.then(ze[_e++],ze[_e++]);return Be}},{key:"getUri",value:function(v){return ti(la((v=Dr(this.defaults,v)).baseURL,v.url),v.params,v.paramsSerializer)}}])&&sc(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();ve.forEach(["delete","get","head","options"],function(b){Ki.prototype[b]=function(A,R){return this.request(Dr(R||{},{method:b,url:A,data:(R||{}).data}))}}),ve.forEach(["post","put","patch"],function(b){function A(R){return function(v,w,L){return this.request(Dr(L||{},{method:b,headers:R?{"Content-Type":"multipart/form-data"}:{},url:v,data:w}))}}Ki.prototype[b]=A(),Ki.prototype[b+"Form"]=A(!0)});const Vi=Ki;function si(b){return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},si(b)}function ha(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(si(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(si(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),si(w)==="symbol"?w:String(w)),v)}var w}var ac=function(){function b(w){if(function($,U){if(!($ instanceof U))throw new TypeError("Cannot call a class as a function")}(this,b),typeof w!="function")throw new TypeError("executor must be a function.");var L;this.promise=new Promise(function($){L=$});var D=this;this.promise.then(function($){if(D._listeners){for(var U=D._listeners.length;U-- >0;)D._listeners[U]($);D._listeners=null}}),this.promise.then=function($){var U,ce=new Promise(function(Ee){D.subscribe(Ee),U=Ee}).then($);return ce.cancel=function(){D.unsubscribe(U)},ce},w(function($,U,ce){D.reason||(D.reason=new ji($,U,ce),L(D.reason))})}var A,R,v;return A=b,R=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(w){this.reason?w(this.reason):this._listeners?this._listeners.push(w):this._listeners=[w]}},{key:"unsubscribe",value:function(w){if(this._listeners){var L=this._listeners.indexOf(w);L!==-1&&this._listeners.splice(L,1)}}}],v=[{key:"source",value:function(){var w;return{token:new b(function(L){w=L}),cancel:w}}}],R&&ha(A.prototype,R),v&&ha(A,v),Object.defineProperty(A,"prototype",{writable:!1}),b}();const lc=ac;function pa(b,A){(A==null||A>b.length)&&(A=b.length);for(var R=0,v=new Array(A);R<A;R++)v[R]=b[R];return v}var Ho={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ho).forEach(function(b){var A,R,v=(R=2,function(D){if(Array.isArray(D))return D}(A=b)||function(D,$){var U=D==null?null:typeof Symbol<"u"&&D[Symbol.iterator]||D["@@iterator"];if(U!=null){var ce,Ee,Re,Be,ze=[],Oe=!0,_e=!1;try{if(Re=(U=U.call(D)).next,$===0){if(Object(U)!==U)return;Oe=!1}else for(;!(Oe=(ce=Re.call(U)).done)&&(ze.push(ce.value),ze.length!==$);Oe=!0);}catch(He){_e=!0,Ee=He}finally{try{if(!Oe&&U.return!=null&&(Be=U.return(),Object(Be)!==Be))return}finally{if(_e)throw Ee}}return ze}}(A,R)||function(D,$){if(D){if(typeof D=="string")return pa(D,$);var U=Object.prototype.toString.call(D).slice(8,-1);return U==="Object"&&D.constructor&&(U=D.constructor.name),U==="Map"||U==="Set"?Array.from(D):U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)?pa(D,$):void 0}}(A,R)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),w=v[0],L=v[1];Ho[L]=w});const _v=Ho;var Wt=function b(A){var R=new Vi(A),v=ae(Vi.prototype.request,R);return ve.extend(v,Vi.prototype,R,{allOwnKeys:!0}),ve.extend(v,R,null,{allOwnKeys:!0}),v.create=function(w){return b(Dr(A,w))},v}(pr);Wt.Axios=Vi,Wt.CanceledError=ji,Wt.CancelToken=lc,Wt.isCancel=sa,Wt.VERSION="1.2.3",Wt.toFormData=lt,Wt.AxiosError=ye,Wt.Cancel=Wt.CanceledError,Wt.all=function(b){return Promise.all(b)},Wt.spread=function(b){return function(A){return b.apply(null,A)}},Wt.isAxiosError=function(b){return ve.isObject(b)&&b.isAxiosError===!0},Wt.mergeConfig=Dr,Wt.AxiosHeaders=Mn,Wt.formToJSON=function(b){return qn(ve.isHTMLForm(b)?new FormData(b):b)},Wt.HttpStatusCode=_v,Wt.default=Wt;const Cf=Wt,Dv={send:function(b){Cf.post(b.url,b.data).then(function(A){var R=A.data;R&&R.code===0?b.success&&b.success(R):b.error&&b.error(R&&R.msg)}).catch(function(A){console.error(A),b.error&&b.error()})},read:function(b){Cf.get(b.url).then(function(A){var R=A.data;R&&R.code===0?b.success&&b.success(R.data.map(function(v){return{time:v[0],type:v[1],color:v[2],author:v[3],text:v[4]}})):b.error&&b.error(R&&R.msg)}).catch(function(A){console.error(A),b.error&&b.error()})}};function cc(b){return cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},cc(b)}function Pv(b){var A=this;this.lang=b,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(R){return R=R.toLowerCase(),qi[A.lang]&&qi[A.lang][R]?qi[A.lang][R]:qi[A.fallbackLang]&&qi[A.fallbackLang][R]?qi[A.fallbackLang][R]:dc[R]?dc[R]:R}}var dc={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},qi={en:dc,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Bv=i(730),Ov=i.n(Bv),Fv=i(74),Mv=i.n(Fv),Nv=i(437),zv=i.n(Nv),$v=i(644),Uv=i.n($v),Hv=i(324),Wv=i.n(Hv),jv=i(574),Gv=i.n(jv),Kv=i(300),Vv=i.n(Kv),qv=i(934),Yv=i.n(qv),Xv=i(428),Zv=i.n(Xv),Qv=i(807),Jv=i.n(Qv),eb=i(338),tb=i.n(eb),nb=i(254),rb=i.n(nb),ib=i(965),ob=i.n(ib),sb=i(113),ab=i.n(sb),lb=i(251),cb=i.n(lb),db=i(410),ub=i.n(db),fb=i(182),hb=i.n(fb),pb=i(193),mb=i.n(pb);const Nn={play:Ov(),pause:Mv(),volumeUp:zv(),volumeDown:Uv(),volumeOff:Wv(),full:Gv(),fullWeb:Vv(),setting:Yv(),right:Zv(),comment:Jv(),commentOff:tb(),send:rb(),pallette:ob(),camera:ab(),subtitle:ub(),loading:hb(),airplay:cb(),chromecast:mb()};var gb=i(916),yb=i.n(gb);function Wo(b){return Wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Wo(b)}function Sf(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Wo(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Wo(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Wo(w)==="symbol"?w:String(w)),v)}var w}var vb=function(){function b(w){(function(L,D){if(!(L instanceof D))throw new TypeError("Cannot call a class as a function")})(this,b),this.container=w.container,this.options=w.options,this.index=w.index,this.tran=w.tran,this.init()}var A,R,v;return A=b,v=[{key:"NewNotice",value:function(w,L,D){var $=document.createElement("div");return $.classList.add("dplayer-notice"),$.style.opacity=L,$.innerText=w,D&&($.id="dplayer-notice-".concat(D)),$}}],(R=[{key:"init",value:function(){this.container.innerHTML=yb()({options:this.options,index:this.index,tran:this.tran,icons:Nn,mobile:J.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!J.isSafari||J.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Sf(A.prototype,R),v&&Sf(A,v),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Tf=vb;function Yi(b){return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Yi(b)}function bb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Yi(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Yi(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Yi(w)==="symbol"?w:String(w)),v)}var w}var Ab=function(){function b(v){(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,b),this.options=v,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var A,R;return A=b,R=[{key:"load",value:function(){var v,w=this;v=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var L=(this.options.api.addition||[]).slice(0);L.push(v),this.events&&this.events.trigger("danmaku_load_start",L),this._readAllEndpoints(L,function(D){w.dan=[].concat.apply([],D).sort(function($,U){return $.time-U.time}),window.requestAnimationFrame(function(){w.frame()}),w.options.callback(),w.events&&w.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(v){this.options.api=v,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(v,w){for(var L=this,D=[],$=0,U=function(Ee){L.options.apiBackend.read({url:v[Ee],success:function(Re){D[Ee]=Re,++$===v.length&&w(D)},error:function(Re){L.options.error(Re||L.options.tran("danmaku-failed")),D[Ee]=[],++$===v.length&&w(D)}})},ce=0;ce<v.length;++ce)U(ce)}},{key:"send",value:function(v,w){var L=this,D={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:v.text,color:v.color,type:v.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:D,success:w,error:function(U){L.options.error(U||L.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,D),this.danIndex++;var $={text:this.htmlEncode(D.text),color:D.color,type:D.type,border:"2px solid ".concat(this.options.borderColor)};this.draw($),this.events&&this.events.trigger("danmaku_send",D)}},{key:"frame",value:function(){var v=this;if(this.dan.length&&!this.paused&&this.showing){for(var w=this.dan[this.danIndex],L=[];w&&this.options.time()>parseFloat(w.time);)L.push(w),w=this.dan[++this.danIndex];this.draw(L)}window.requestAnimationFrame(function(){v.frame()})}},{key:"opacity",value:function(v){if(v!==void 0){for(var w=this.container.getElementsByClassName("dplayer-danmaku-item"),L=0;L<w.length;L++)w[L].style.opacity=v;this._opacity=v,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(v){var w=this;if(this.showing){var L=this.options.height,D=this.container.offsetWidth,$=this.container.offsetHeight,U=parseInt($/L),ce=function(_e){var He=_e.offsetWidth||parseInt(_e.style.width),Je=_e.getBoundingClientRect().right||w.container.getBoundingClientRect().right+He;return w.container.getBoundingClientRect().right-Je},Ee=function(_e){return(D+_e)/5},Re=function(_e,He,Je){for(var jt=D/Ee(Je),Ft=function(ai){var Zi=w.danTunnel[He][ai+""];if(!Zi||!Zi.length)return w.danTunnel[He][ai+""]=[_e],_e.addEventListener("animationend",function(){w.danTunnel[He][ai+""].splice(0,1)}),{v:ai%U};if(He!=="right")return"continue";for(var ss=0;ss<Zi.length;ss++){var Df=ce(Zi[ss])-10;if(Df<=D-jt*Ee(parseInt(Zi[ss].style.width))||Df<=0)break;if(ss===Zi.length-1)return w.danTunnel[He][ai+""].push(_e),_e.addEventListener("animationend",function(){w.danTunnel[He][ai+""].splice(0,1)}),{v:ai%U}}},vt=0;w.unlimited||vt<U;vt++){var Br=Ft(vt);if(Br!=="continue"&&Yi(Br)==="object")return Br.v}return-1};Object.prototype.toString.call(v)!=="[object Array]"&&(v=[v]);for(var Be=document.createDocumentFragment(),ze=function(){v[Oe].type=J.number2Type(v[Oe].type),v[Oe].color||(v[Oe].color=16777215);var _e=document.createElement("div");_e.classList.add("dplayer-danmaku-item"),_e.classList.add("dplayer-danmaku-".concat(v[Oe].type)),v[Oe].border?_e.innerHTML='<span style="border:'.concat(v[Oe].border,'">').concat(v[Oe].text,"</span>"):_e.innerHTML=v[Oe].text,_e.style.opacity=w._opacity,_e.style.color=J.number2Color(v[Oe].color),_e.addEventListener("animationend",function(){w.container.removeChild(_e)});var He,Je=w._measure(v[Oe].text);switch(v[Oe].type){case"right":(He=Re(_e,v[Oe].type,Je))>=0&&(_e.style.width=Je+1+"px",_e.style.top=L*He+"px",_e.style.transform="translateX(-".concat(D,"px)"));break;case"top":(He=Re(_e,v[Oe].type))>=0&&(_e.style.top=L*He+"px");break;case"bottom":(He=Re(_e,v[Oe].type))>=0&&(_e.style.bottom=L*He+"px");break;default:console.error("Can't handled danmaku type: ".concat(v[Oe].type))}He>=0&&(_e.classList.add("dplayer-danmaku-move"),_e.style.animationDuration=w._danAnimation(v[Oe].type),Be.appendChild(_e))},Oe=0;Oe<v.length;Oe++)ze();return this.container.appendChild(Be),Be}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(v){if(!this.context){var w=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=w.getPropertyValue("font")}return this.context.measureText(v).width}},{key:"seek",value:function(){this.clear();for(var v=0;v<this.dan.length;v++){if(this.dan[v].time>=this.options.time()){this.danIndex=v;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(v){return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var v=this.container.offsetWidth,w=this.container.getElementsByClassName("dplayer-danmaku-item"),L=0;L<w.length;L++)w[L].style.transform="translateX(-".concat(v,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(v){this.unlimited=v}},{key:"speed",value:function(v){this.options.api.speedRate=v}},{key:"_danAnimation",value:function(v){var w=this.options.api.speedRate||1,L=!!this.player.fullScreen.isFullScreen();return{top:"".concat((L?6:4)/w,"s"),right:"".concat((L?8:5)/w,"s"),bottom:"".concat((L?6:4)/w,"s")}[v]}}],R&&bb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const xb=Ab;function jo(b){return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},jo(b)}function Eb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(jo(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(jo(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),jo(w)==="symbol"?w:String(w)),v)}var w}const wb=function(){function b(){(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,b),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var A,R;return A=b,(R=[{key:"on",value:function(v,w){this.type(v)&&typeof w=="function"&&(this.events[v]||(this.events[v]=[]),this.events[v].push(w))}},{key:"trigger",value:function(v,w){if(this.events[v]&&this.events[v].length)for(var L=0;L<this.events[v].length;L++)this.events[v][L](w)}},{key:"type",value:function(v){return this.playerEvents.indexOf(v)!==-1?"player":this.videoEvents.indexOf(v)!==-1?"video":(console.error("Unknown event name: ".concat(v)),null)}}])&&Eb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();function Go(b){return Go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Go(b)}function Cb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Go(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Go(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Go(w)==="symbol"?w:String(w)),v)}var w}var Sb=function(){function b(v){var w=this;(function(L,D){if(!(L instanceof D))throw new TypeError("Cannot call a class as a function")})(this,b),this.player=v,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){w.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){w.player.resize(),J.setScrollPosition(w.lastScrollPosition)}),this.fullscreenchange=function(){w.player.resize(),w.isFullScreen("browser")?w.player.events.trigger("fullscreen"):(J.setScrollPosition(w.lastScrollPosition),w.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var L=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;L&&L!==w.player.container||(w.player.resize(),L?w.player.events.trigger("fullscreen"):(J.setScrollPosition(w.lastScrollPosition),w.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var A,R;return A=b,R=[{key:"isFullScreen",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(v){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",w=v==="browser"?"web":"browser",L=this.isFullScreen(w);switch(L||(this.lastScrollPosition=J.getScrollPosition()),v){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}L&&this.cancel(w)}},{key:"cancel",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(v){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(v)?this.cancel(v):this.request(v)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],R&&Cb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Tb=Sb;function Ko(b){return Ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Ko(b)}function kb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Ko(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Ko(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Ko(w)==="symbol"?w:String(w)),v)}var w}var Ib=function(){function b(v){(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,b),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:v.options.hasOwnProperty("volume")?v.options.volume:.7,unlimited:(v.options.danmaku&&v.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var A,R;return A=b,(R=[{key:"init",value:function(){for(var v in this.storageName){var w=this.storageName[v];this.data[v]=parseFloat(J.storage.get(w)||this.default[v])}}},{key:"get",value:function(v){return this.data[v]}},{key:"set",value:function(v,w){this.data[v]=w,J.storage.set(this.storageName[v],w)}}])&&kb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Lb=Ib;function Vo(b){return Vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Vo(b)}function Rb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Vo(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Vo(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Vo(w)==="symbol"?w:String(w)),v)}var w}var _b=function(){function b(v,w,L,D){(function($,U){if(!($ instanceof U))throw new TypeError("Cannot call a class as a function")})(this,b),this.container=v,this.video=w,this.options=L,this.events=D,this.init()}var A,R;return A=b,R=[{key:"init",value:function(){var v=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var w=this.video.textTracks[0];w.oncuechange=function(){var L=w.activeCues[w.activeCues.length-1];if(v.container.innerHTML="",L){var D=document.createElement("div");D.appendChild(L.getCueAsHTML());var $=D.innerHTML.split(/\r?\n/).map(function(U){return"<p>".concat(U,"</p>")}).join("");v.container.innerHTML=$}v.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],R&&Rb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Db=_b;function qo(b){return qo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},qo(b)}function Pb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(qo(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(qo(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),qo(w)==="symbol"?w:String(w)),v)}var w}var Bb=function(){function b(v){var w=this;(function(U,ce){if(!(U instanceof ce))throw new TypeError("Cannot call a class as a function")})(this,b),this.player=v,this.player.template.mask.addEventListener("click",function(){w.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){w.adaptiveHeight(),w.show()});for(var L=this.player.template.subtitlesItem.length-1,D=function(U){w.player.template.subtitlesItem[U].addEventListener("click",function(){w.hide(),w.player.options.subtitle.index!==U&&(w.player.template.subtitle.innerHTML="<p></p>",w.player.template.subtrack.src=w.player.template.subtitlesItem[U].dataset.subtitle,w.player.options.subtitle.index=U,w.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&w.subContainerShow())})},$=0;$<L;$++)D($);this.player.template.subtitlesItem[L].addEventListener("click",function(){w.hide(),w.player.options.subtitle.index!==L&&(w.player.template.subtitle.innerHTML="<p></p>",w.player.template.subtrack.src="",w.player.options.subtitle.index=L,w.subContainerHide())})}var A,R;return A=b,(R=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var v=30*this.player.template.subtitlesItem.length+14,w=.8*this.player.template.videoWrap.offsetHeight;v>=w-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=w-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=w-50+"px")}}])&&Pb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Ob=Bb;function Yo(b){return Yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Yo(b)}function Fb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Yo(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Yo(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Yo(w)==="symbol"?w:String(w)),v)}var w}var Mb=function(){function b(v){(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,b),this.elements={},this.elements.volume=v.volumeBar,this.elements.played=v.playedBar,this.elements.loaded=v.loadedBar,this.elements.danmaku=v.danmakuOpacityBar}var A,R;return A=b,(R=[{key:"set",value:function(v,w,L){w=Math.max(w,0),w=Math.min(w,1),this.elements[v].style[L]=100*w+"%"}},{key:"get",value:function(v){return parseFloat(this.elements[v].style.width)/100}}])&&Fb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Nb=Mb;function Xo(b){return Xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Xo(b)}function zb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Xo(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Xo(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Xo(w)==="symbol"?w:String(w)),v)}var w}var $b=function(){function b(v){(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,b),this.player=v,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(w){window.setTimeout(w,1e3/60)},this.types=["loading","info","fps"],this.init()}var A,R;return A=b,(R=[{key:"init",value:function(){var v=this;this.types.map(function(w){return w!=="fps"&&v["init".concat(w,"Checker")](),w})}},{key:"initloadingChecker",value:function(){var v=this,w=0,L=0,D=!1;this.loadingChecker=setInterval(function(){v.enableloadingChecker&&(L=v.player.video.currentTime,D||L!==w||v.player.video.paused||(v.player.container.classList.add("dplayer-loading"),D=!0),D&&L>w&&!v.player.video.paused&&(v.player.container.classList.remove("dplayer-loading"),D=!1),w=L)},100)}},{key:"initfpsChecker",value:function(){var v=this;window.requestAnimationFrame(function(){if(v.enablefpsChecker)if(v.initfpsChecker(),v.fpsStart){v.fpsIndex++;var w=new Date;w-v.fpsStart>1e3&&(v.player.infoPanel.fps(v.fpsIndex/(w-v.fpsStart)*1e3),v.fpsStart=new Date,v.fpsIndex=0)}else v.fpsStart=new Date,v.fpsIndex=0;else v.fpsStart=0,v.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var v=this;this.infoChecker=setInterval(function(){v.enableinfoChecker&&v.player.infoPanel.update()},1e3)}},{key:"enable",value:function(v){this["enable".concat(v,"Checker")]=!0,v==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(v){this["enable".concat(v,"Checker")]=!1}},{key:"destroy",value:function(){var v=this;this.types.map(function(w){return v["enable".concat(w,"Checker")]=!1,v["".concat(w,"Checker")]&&clearInterval(v["".concat(w,"Checker")]),w})}}])&&zb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Ub=$b;function Zo(b){return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Zo(b)}function Hb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Zo(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Zo(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Zo(w)==="symbol"?w:String(w)),v)}var w}const Wb=function(){function b(v){var w=this;(function(L,D){if(!(L instanceof D))throw new TypeError("Cannot call a class as a function")})(this,b),this.container=v,this.container.addEventListener("animationend",function(){w.container.classList.remove("dplayer-bezel-transition")})}var A,R;return A=b,(R=[{key:"switch",value:function(v){this.container.innerHTML=v,this.container.classList.add("dplayer-bezel-transition")}}])&&Hb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();function Qo(b){return Qo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Qo(b)}function jb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Qo(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Qo(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Qo(w)==="symbol"?w:String(w)),v)}var w}var Gb=function(){function b(v){(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,b),this.container=v.container,this.barWidth=v.barWidth,this.container.style.backgroundImage="url('".concat(v.url,"')"),this.events=v.events}var A,R;return A=b,(R=[{key:"resize",value:function(v,w,L){this.container.style.width="".concat(v,"px"),this.container.style.height="".concat(w,"px"),this.container.style.top="".concat(2-w,"px"),this.barWidth=L}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(v){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(v/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(v-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&jb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Kb=Gb;function Jo(b){return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},Jo(b)}function Vb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(Jo(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(Jo(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),Jo(w)==="symbol"?w:String(w)),v)}var w}var Pr,kf=!0,uc=!1,qb=function(){function b(v){(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,b),this.player=v,this.autoHideTimer=0,J.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),J.isMobile||this.initVolumeButton()}var A,R;return A=b,(R=[{key:"initPlayButton",value:function(){var v=this;this.player.template.playButton.addEventListener("click",function(){v.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){v.player.toggle()}),J.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){v.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){v.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){v.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){v.player.toggle()}))}},{key:"initHighlights",value:function(){var v=this;this.player.on("durationchange",function(){if(v.player.video.duration!==1&&v.player.video.duration!==1/0&&v.player.options.highlight){var w=v.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(w,0).forEach(function($){v.player.template.playedBarWrap.removeChild($)});for(var L=0;L<v.player.options.highlight.length;L++)if(v.player.options.highlight[L].text&&v.player.options.highlight[L].time){var D=document.createElement("div");D.classList.add("dplayer-highlight"),D.style.left=v.player.options.highlight[L].time/v.player.video.duration*100+"%",D.innerHTML='<span class="dplayer-highlight-text">'+v.player.options.highlight[L].text+"</span>",v.player.template.playedBarWrap.insertBefore(D,v.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var v=this;this.player.options.video.thumbnails&&(this.thumbnails=new Kb({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){v.thumbnails.resize(160,v.player.video.videoHeight/v.player.video.videoWidth*160,v.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var v=this,w=function(D){var $=((D.clientX||D.changedTouches[0].clientX)-J.getBoundingClientRectViewLeft(v.player.template.playedBarWrap))/v.player.template.playedBarWrap.clientWidth;$=Math.max($,0),$=Math.min($,1),v.player.bar.set("played",$,"width"),v.player.template.ptime.innerHTML=J.secondToTime($*v.player.video.duration)},L=function D($){document.removeEventListener(J.nameMap.dragEnd,D),document.removeEventListener(J.nameMap.dragMove,w);var U=(($.clientX||$.changedTouches[0].clientX)-J.getBoundingClientRectViewLeft(v.player.template.playedBarWrap))/v.player.template.playedBarWrap.clientWidth;U=Math.max(U,0),U=Math.min(U,1),v.player.bar.set("played",U,"width"),v.player.seek(v.player.bar.get("played")*v.player.video.duration),v.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(J.nameMap.dragStart,function(){v.player.timer.disable("progress"),document.addEventListener(J.nameMap.dragMove,w),document.addEventListener(J.nameMap.dragEnd,L)}),this.player.template.playedBarWrap.addEventListener(J.nameMap.dragMove,function(D){if(v.player.video.duration){var $=v.player.template.playedBarWrap.getBoundingClientRect().left,U=(D.clientX||D.changedTouches[0].clientX)-$;if(U<0||U>v.player.template.playedBarWrap.offsetWidth)return;var ce=v.player.video.duration*(U/v.player.template.playedBarWrap.offsetWidth);J.isMobile&&v.thumbnails&&v.thumbnails.show(),v.thumbnails&&v.thumbnails.move(U),v.player.template.playedBarTime.style.left="".concat(U-(ce>=3600?25:20),"px"),v.player.template.playedBarTime.innerText=J.secondToTime(ce),v.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(J.nameMap.dragEnd,function(){J.isMobile&&v.thumbnails&&v.thumbnails.hide()}),J.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){v.player.video.duration&&(v.thumbnails&&v.thumbnails.show(),v.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){v.player.video.duration&&(v.thumbnails&&v.thumbnails.hide(),v.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var v=this;this.player.template.browserFullButton.addEventListener("click",function(){v.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){v.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var v=this,w=function(D){var $=D||window.event,U=(($.clientX||$.changedTouches[0].clientX)-J.getBoundingClientRectViewLeft(v.player.template.volumeBarWrap)-5.5)/35;v.player.volume(U)},L=function D(){document.removeEventListener(J.nameMap.dragEnd,D),document.removeEventListener(J.nameMap.dragMove,w),v.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(D){var $=D||window.event,U=(($.clientX||$.changedTouches[0].clientX)-J.getBoundingClientRectViewLeft(v.player.template.volumeBarWrap)-5.5)/35;v.player.volume(U)}),this.player.template.volumeBarWrapWrap.addEventListener(J.nameMap.dragStart,function(){document.addEventListener(J.nameMap.dragMove,w),document.addEventListener(J.nameMap.dragEnd,L),v.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){v.player.video.muted?(v.player.video.muted=!1,v.player.switchVolumeIcon(),v.player.bar.set("volume",v.player.volume(),"width")):(v.player.video.muted=!0,v.player.template.volumeIcon.innerHTML=Nn.volumeOff,v.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var v=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(w){w.target.classList.contains("dplayer-quality-item")&&v.player.switchQuality(w.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var v=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var w,L=document.createElement("canvas");L.width=v.player.video.videoWidth,L.height=v.player.video.videoHeight,L.getContext("2d").drawImage(v.player.video,0,0,L.width,L.height),L.toBlob(function(D){w=URL.createObjectURL(D);var $=document.createElement("a");$.href=w,$.download="DPlayer.png",$.style.display="none",document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(w),v.player.events.trigger("screenshot",w)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(v){v.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var v=window.document.createElement("script");v.setAttribute("type","text/javascript"),v.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(v),window.__onGCastApiAvailable=function(w){if(w){var L=new(Pr=window.chrome.cast).SessionRequest(Pr.media.DEFAULT_MEDIA_RECEIVER_APP_ID),D=new Pr.ApiConfig(L,function(){},function($){$===Pr.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",$)});Pr.initialize(D,function(){})}}}},{key:"initChromecastButton",value:function(){var v=this;if(this.player.options.chromecast){kf&&(kf=!1,this.initChromecast());var w=function(D,$){v.currentMedia=$},L=function(D){console.error("Error launching media",D)};this.player.template.chromecastButton.addEventListener("click",function(){uc?(uc=!1,v.currentMedia.stop(),v.session.stop(),v.initChromecast()):(uc=!0,Pr.requestSession(function(D){var $,U,ce;v.session=D,$=v.player.options.video.url,U=new Pr.media.MediaInfo($),ce=new Pr.media.LoadRequest(U),v.session?v.session.loadMedia(ce,w.bind(v,"loadMedia"),L).play():window.open($)},function(D){D.code==="cancel"?v.session=void 0:console.error("Error selecting a cast device",D)}))})}}},{key:"initSubtitleButton",value:function(){var v=this;this.player.events.on("subtitle_show",function(){v.player.template.subtitleButton.dataset.balloon=v.player.tran("hide-subs"),v.player.template.subtitleButtonInner.style.opacity="",v.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){v.player.template.subtitleButton.dataset.balloon=v.player.tran("show-subs"),v.player.template.subtitleButtonInner.style.opacity="0.4",v.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){v.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var v=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!v.player.video.played.length||v.player.paused||v.disableAutoHide||v.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){J.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Vb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Yb=qb;function es(b){return es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},es(b)}function Xb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(es(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(es(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),es(w)==="symbol"?w:String(w)),v)}var w}var Zb=function(){function b(v){var w=this;(function(ce,Ee){if(!(ce instanceof Ee))throw new TypeError("Cannot call a class as a function")})(this,b),this.player=v,this.player.template.mask.addEventListener("click",function(){w.hide()}),this.player.template.settingButton.addEventListener("click",function(){w.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){w.player.template.loopToggle.checked=!w.player.template.loopToggle.checked,w.player.template.loopToggle.checked?w.loop=!0:w.loop=!1,w.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){w.player.template.showDanmakuToggle.checked=!w.player.template.showDanmakuToggle.checked,w.player.template.showDanmakuToggle.checked?(w.showDanmaku=!0,w.player.danmaku.show()):(w.showDanmaku=!1,w.player.danmaku.hide()),w.player.user.set("danmaku",w.showDanmaku?1:0),w.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){w.player.template.unlimitDanmakuToggle.checked=!w.player.template.unlimitDanmakuToggle.checked,w.player.template.unlimitDanmakuToggle.checked?(w.unlimitDanmaku=!0,w.player.danmaku.unlimit(!0)):(w.unlimitDanmaku=!1,w.player.danmaku.unlimit(!1)),w.player.user.set("unlimited",w.unlimitDanmaku?1:0),w.hide()}),this.player.template.speed.addEventListener("click",function(){w.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),w.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var L=function(ce){w.player.template.speedItem[ce].addEventListener("click",function(){w.player.speed(w.player.template.speedItem[ce].dataset.speed),w.hide()})},D=0;D<this.player.template.speedItem.length;D++)L(D);if(this.player.danmaku){this.player.on("danmaku_opacity",function(ce){w.player.bar.set("danmaku",ce,"width"),w.player.user.set("opacity",ce)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var $=function(ce){var Ee=ce||window.event,Re=((Ee.clientX||Ee.changedTouches[0].clientX)-J.getBoundingClientRectViewLeft(w.player.template.danmakuOpacityBarWrap))/130;Re=Math.max(Re,0),Re=Math.min(Re,1),w.player.danmaku.opacity(Re)},U=function ce(){document.removeEventListener(J.nameMap.dragEnd,ce),document.removeEventListener(J.nameMap.dragMove,$),w.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(ce){var Ee=ce||window.event,Re=((Ee.clientX||Ee.changedTouches[0].clientX)-J.getBoundingClientRectViewLeft(w.player.template.danmakuOpacityBarWrap))/130;Re=Math.max(Re,0),Re=Math.min(Re,1),w.player.danmaku.opacity(Re)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(J.nameMap.dragStart,function(){document.addEventListener(J.nameMap.dragMove,$),document.addEventListener(J.nameMap.dragEnd,U),w.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var A,R;return A=b,(R=[{key:"hide",value:function(){var v=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){v.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),v.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Xb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const Qb=Zb;function ts(b){return ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},ts(b)}function Jb(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(ts(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(ts(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),ts(w)==="symbol"?w:String(w)),v)}var w}var eA=function(){function b(v){var w=this;(function(L,D){if(!(L instanceof D))throw new TypeError("Cannot call a class as a function")})(this,b),this.player=v,this.player.template.mask.addEventListener("click",function(){w.hide()}),this.player.template.commentButton.addEventListener("click",function(){w.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){w.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(w.player.template.commentColorSettingBox.querySelector("input:checked+span")){var L=w.player.template.commentColorSettingBox.querySelector("input:checked").value;w.player.template.commentSettingFill.style.fill=L,w.player.template.commentInput.style.color=L,w.player.template.commentSendFill.style.fill=L}}),this.player.template.commentInput.addEventListener("click",function(){w.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(L){(L||window.event).keyCode===13&&w.send()}),this.player.template.commentSendButton.addEventListener("click",function(){w.send()})}var A,R;return A=b,(R=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var v=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:J.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){v.player.template.commentInput.value="",v.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Jb(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const tA=eA;function ns(b){return ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},ns(b)}function nA(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(ns(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(ns(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),ns(w)==="symbol"?w:String(w)),v)}var w}var rA=function(){function b(v){(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,b),this.player=v,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var A,R;return A=b,(R=[{key:"doHotKey",value:function(v){if(this.player.focus){var w=document.activeElement.tagName.toUpperCase(),L=document.activeElement.getAttribute("contenteditable");if(w!=="INPUT"&&w!=="TEXTAREA"&&L!==""&&L!=="true"){var D,$=v||window.event;switch($.keyCode){case 32:$.preventDefault(),this.player.toggle();break;case 37:if($.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if($.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:$.preventDefault(),D=this.player.volume()+.1,this.player.volume(D);break;case 40:$.preventDefault(),D=this.player.volume()-.1,this.player.volume(D)}}}}},{key:"cancelFullScreen",value:function(v){(v||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&nA(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const iA=rA;function rs(b){return rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},rs(b)}function oA(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(rs(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(rs(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),rs(w)==="symbol"?w:String(w)),v)}var w}var sA=function(){function b(v){var w=this;(function(L,D){if(!(L instanceof D))throw new TypeError("Cannot call a class as a function")})(this,b),this.player=v,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(L,D){w.player.options.contextmenu[D].click&&L.addEventListener("click",function(){w.player.options.contextmenu[D].click(w.player),w.hide()})}),this.contextmenuHandler=function(L){if(w.shown)w.hide();else{var D=L||window.event;D.preventDefault();var $=w.player.container.getBoundingClientRect();w.show(D.clientX-$.left,D.clientY-$.top),w.player.template.mask.addEventListener("click",function(){w.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var A,R;return A=b,(R=[{key:"show",value:function(v,w){this.player.template.menu.classList.add("dplayer-menu-show");var L=this.player.container.getBoundingClientRect();v+this.player.template.menu.offsetWidth>=L.width?(this.player.template.menu.style.right=L.width-v+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=v+"px",this.player.template.menu.style.right="initial"),w+this.player.template.menu.offsetHeight>=L.height?(this.player.template.menu.style.bottom=L.height-w+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=w+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&oA(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const aA=sA;function is(b){return is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},is(b)}function lA(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,(w=function(L,D){if(is(L)!=="object"||L===null)return L;var $=L[Symbol.toPrimitive];if($!==void 0){var U=$.call(L,"string");if(is(U)!=="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}(v.key),is(w)==="symbol"?w:String(w)),v)}var w}var cA=function(){function b(v){var w=this;(function(L,D){if(!(L instanceof D))throw new TypeError("Cannot call a class as a function")})(this,b),this.container=v.template.infoPanel,this.template=v.template,this.video=v.video,this.player=v,this.template.infoPanelClose.addEventListener("click",function(){w.hide()})}var A,R;return A=b,(R=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(v){this.template.infoFPS.innerHTML="".concat(v.toFixed(1))}}])&&lA(A.prototype,R),Object.defineProperty(A,"prototype",{writable:!1}),b}();const dA=cA;var uA=i(568),fA=i.n(uA);function os(b){return os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},os(b)}function If(b,A){var R=Object.keys(b);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(b);A&&(v=v.filter(function(w){return Object.getOwnPropertyDescriptor(b,w).enumerable})),R.push.apply(R,v)}return R}function hA(b,A,R){return(A=Rf(A))in b?Object.defineProperty(b,A,{value:R,enumerable:!0,configurable:!0,writable:!0}):b[A]=R,b}function Lf(b,A){for(var R=0;R<A.length;R++){var v=A[R];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,Rf(v.key),v)}}function Rf(b){var A=function(R,v){if(os(R)!=="object"||R===null)return R;var w=R[Symbol.toPrimitive];if(w!==void 0){var L=w.call(R,"string");if(os(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(R)}(b);return os(A)==="symbol"?A:String(A)}var _f=0,Xi=[],pA=function(){function b(w){var L=this;(function(D,$){if(!(D instanceof $))throw new TypeError("Cannot call a class as a function")})(this,b),this.options=function(D){var $={container:D.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Dv,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var U in $)$.hasOwnProperty(U)&&!D.hasOwnProperty(U)&&(D[U]=$[U]);return D.video&&!D.video.type&&(D.video.type="auto"),cc(D.danmaku)==="object"&&D.danmaku&&!D.danmaku.user&&(D.danmaku.user="DIYgod"),D.subtitle&&(!D.subtitle.type&&(D.subtitle.type="webvtt"),!D.subtitle.fontSize&&(D.subtitle.fontSize="20px"),!D.subtitle.bottom&&(D.subtitle.bottom="40px"),!D.subtitle.color&&(D.subtitle.color="#fff")),D.video.quality&&(D.video.url=D.video.quality[D.video.defaultQuality].url),D.lang&&(D.lang=D.lang.toLowerCase()),D.contextmenu=D.contextmenu.concat([{key:"video-info",click:function(ce){ce.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),D}(function(D){for(var $=1;$<arguments.length;$++){var U=arguments[$]!=null?arguments[$]:{};$%2?If(Object(U),!0).forEach(function(ce){hA(D,ce,U[ce])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(U)):If(Object(U)).forEach(function(ce){Object.defineProperty(D,ce,Object.getOwnPropertyDescriptor(U,ce))})}return D}({preload:w.video.type==="webtorrent"?"none":"metadata"},w)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Pv(this.options.lang).tran,this.events=new wb,this.user=new Lb(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),J.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(D){return D.lang===L.options.subtitle.defaultSubtitle||D.name===L.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(D){return D.lang===L.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new Tf({container:this.container,options:this.options,index:_f,tran:this.tran}),this.video=this.template.video,this.bar=new Nb(this.template),this.bezel=new Wb(this.template.bezel),this.fullScreen=new Tb(this),this.controller=new Yb(this),this.options.danmaku&&(this.danmaku=new xb({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){L.template.danmakuLoading.style.display="none",L.options.autoplay&&L.play()},0)},error:function(D){L.notice(D)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return L.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(D){return L.tran(D)}}),this.comment=new tA(this)),this.setting=new Qb(this),this.plugins={},this.docClickFun=function(){L.focus=!1},this.containerClickFun=function(){L.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Ub(this),this.hotkey=new iA(this),this.contextmenu=new aA(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new dA(this),!this.danmaku&&this.options.autoplay&&this.play(),_f++,Xi.push(this)}var A,R,v;return A=b,R=[{key:"seek",value:function(w){w=Math.max(w,0),this.video.duration&&(w=Math.min(w,this.video.duration)),this.video.currentTime<w?this.notice("".concat(this.tran("ff").replace("%s",(w-this.video.currentTime).toFixed(0)))):this.video.currentTime>w&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-w).toFixed(0)))),this.video.currentTime=w,this.danmaku&&this.danmaku.seek(),this.bar.set("played",w/this.video.duration,"width"),this.template.ptime.innerHTML=J.secondToTime(w)}},{key:"play",value:function(w){var L=this;if(this.paused=!1,this.video.paused&&!J.isMobile&&this.bezel.switch(Nn.play),this.template.playButton.innerHTML=Nn.pause,this.template.mobilePlayButton.innerHTML=Nn.pause,w||Q.resolve(this.video.play()).catch(function(){L.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var D=0;D<Xi.length;D++)this!==Xi[D]&&Xi[D].pause()}},{key:"pause",value:function(w){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||J.isMobile||this.bezel.switch(Nn.pause),this.template.playButton.innerHTML=Nn.play,this.template.mobilePlayButton.innerHTML=Nn.play,w||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Nn.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Nn.volumeDown:this.template.volumeIcon.innerHTML=Nn.volumeOff}},{key:"volume",value:function(w,L,D){if(w=parseFloat(w),!isNaN(w)){w=Math.max(w,0),w=Math.min(w,1),this.bar.set("volume",w,"width");var $="".concat((100*w).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=$,L||this.user.set("volume",w),D||this.notice("".concat(this.tran("volume")," ").concat((100*w).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=w,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(w,L){this.events.on(w,L)}},{key:"switchVideo",value:function(w,L){this.pause(),this.video.poster=w.pic?w.pic:"",this.video.src=w.url,this.initMSE(this.video,w.type||"auto"),L&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:L.id,address:L.api,token:L.token,maximum:L.maximum,addition:L.addition,user:L.user}))}},{key:"initMSE",value:function(w,L){var D=this;if(this.type=L,this.options.video.customType&&this.options.video.customType[L])Object.prototype.toString.call(this.options.video.customType[L])==="[object Function]"?this.options.video.customType[L](this.video,this):console.error("Illegal customType: ".concat(L));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(w.src)?this.type="hls":/.flv(#|\?|$)/i.exec(w.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(w.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(w.canPlayType("application/x-mpegURL")||w.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var $=this.options.pluginOptions.hls,U=new window.Hls($);this.plugins.hls=U,U.loadSource(w.src),U.attachMedia(w),this.events.on("destroy",function(){U.destroy(),delete D.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var ce=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:w.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=ce,ce.attachMediaElement(w),ce.load(),this.events.on("destroy",function(){ce.unload(),ce.detachMediaElement(),ce.destroy(),delete D.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var Ee=window.dashjs.MediaPlayer().create().initialize(w,w.src,!1),Re=this.options.pluginOptions.dash;Ee.updateSettings(Re),this.plugins.dash=Ee,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete D.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var Be=this.options.pluginOptions.webtorrent,ze=new window.WebTorrent(Be);this.plugins.webtorrent=ze;var Oe=w.src;w.src="",w.preload="metadata",w.addEventListener("durationchange",function(){return D.container.classList.remove("dplayer-loading")},{once:!0}),ze.add(Oe,function(_e){_e.files.find(function(He){return He.name.endsWith(".mp4")}).renderTo(D.video,{autoplay:D.options.autoplay,controls:!1})}),this.events.on("destroy",function(){ze.remove(Oe),ze.destroy(),delete D.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(w,L){var D=this;this.initMSE(w,L),this.on("durationchange",function(){w.duration!==1&&w.duration!==1/0&&(D.template.dtime.innerHTML=J.secondToTime(w.duration))}),this.on("progress",function(){var ce=w.buffered.length?w.buffered.end(w.buffered.length-1)/w.duration:0;D.bar.set("loaded",ce,"width")}),this.on("error",function(){D.video.error&&D.tran&&D.notice&&D.type!=="webtorrent"&&D.notice(D.tran("video-failed"))}),this.on("ended",function(){D.bar.set("played",1,"width"),D.setting.loop?(D.seek(0),D.play()):D.pause(),D.danmaku&&(D.danmaku.danIndex=0)}),this.on("play",function(){D.paused&&D.play(!0)}),this.on("pause",function(){D.paused||D.pause(!0)}),this.on("timeupdate",function(){D.bar.set("played",D.video.currentTime/D.video.duration,"width");var ce=J.secondToTime(D.video.currentTime);D.template.ptime.innerHTML!==ce&&(D.template.ptime.innerHTML=ce)});for(var $=function(ce){w.addEventListener(D.events.videoEvents[ce],function(Ee){D.events.trigger(D.events.videoEvents[ce],Ee)})},U=0;U<this.events.videoEvents.length;U++)$(U);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new Db(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Ob(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(w){var L=this;if(w=typeof w=="string"?parseInt(w):w,this.qualityIndex!==w&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=w,this.switchingQuality=!0,this.quality=this.options.video.quality[w],this.template.qualityButton.innerHTML=this.quality.name;var D=this.video.paused;this.video.pause();var $=fA()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),U=new DOMParser().parseFromString($,"text/html").body.firstChild;this.template.videoWrap.insertBefore(U,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=U,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(L.prevVideo){if(L.video.currentTime!==L.prevVideo.currentTime)return void L.seek(L.prevVideo.currentTime);L.template.videoWrap.removeChild(L.prevVideo),L.video.classList.add("dplayer-video-current"),D||L.video.play(),L.prevVideo=null,L.notice("".concat(L.tran("switched-quality").replace("%q",L.quality.name)),void 0,void 0,"switch-quality"),L.switchingQuality=!1,L.events.trigger("quality_end")}}),this.on("error",function(){L.video.error&&L.prevVideo&&(L.template.videoWrap.removeChild(L.video),L.video=L.prevVideo,D||L.video.play(),L.qualityIndex=L.prevIndex,L.quality=L.options.video.quality[L.qualityIndex],L.noticeTime=setTimeout(function(){L.template.notice.style.opacity=0,L.events.trigger("notice_hide")},3e3),L.prevVideo=null,L.switchingQuality=!1)})}}},{key:"notice",value:function(w){var L,D,$,U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,ce=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,Ee=arguments.length>3?arguments[3]:void 0;if(Ee&&((L=document.getElementById("dplayer-notice-".concat(Ee)))&&(L.innerHTML=w),this.noticeList[Ee]&&(clearTimeout(this.noticeList[Ee]),this.noticeList[Ee]=null)),!L){var Re=Tf.NewNotice(w,ce,Ee);this.template.noticeList.appendChild(Re),L=Re}this.events.trigger("notice_show",L),U>0&&(this.noticeList[Ee]=setTimeout((D=L,$=this,function(){D.addEventListener("animationend",function(){$.template.noticeList.removeChild(D)}),D.classList.add("remove-notice"),$.events.trigger("notice_hide"),$.noticeList[Ee]=null}),U))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(w){this.video.playbackRate=w}},{key:"destroy",value:function(){Xi.splice(Xi.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],v=[{key:"version",get:function(){return"1.27.1"}}],R&&Lf(A.prototype,R),v&&Lf(A,v),Object.defineProperty(A,"prototype",{writable:!1}),b}();const mA=pA;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const gA=mA})(),o.default})())})(xy);var T_=xy.exports;const k_=Ay(T_);function I_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ey={exports:{}};(function(n,e){(function(t){var r=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,i=/^(?=([^\/?#]*))\1([^]*)$/,o=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,a={buildAbsoluteURL:function(l,c,d){if(d=d||{},l=l.trim(),c=c.trim(),!c){if(!d.alwaysNormalize)return l;var u=a.parseURL(l);if(!u)throw new Error("Error trying to parse base URL.");return u.path=a.normalizePath(u.path),a.buildURLFromParts(u)}var f=a.parseURL(c);if(!f)throw new Error("Error trying to parse relative URL.");if(f.scheme)return d.alwaysNormalize?(f.path=a.normalizePath(f.path),a.buildURLFromParts(f)):c;var h=a.parseURL(l);if(!h)throw new Error("Error trying to parse base URL.");if(!h.netLoc&&h.path&&h.path[0]!=="/"){var p=i.exec(h.path);h.netLoc=p[1],h.path=p[2]}h.netLoc&&!h.path&&(h.path="/");var m={scheme:h.scheme,netLoc:f.netLoc,path:null,params:f.params,query:f.query,fragment:f.fragment};if(!f.netLoc&&(m.netLoc=h.netLoc,f.path[0]!=="/"))if(!f.path)m.path=h.path,f.params||(m.params=h.params,f.query||(m.query=h.query));else{var g=h.path,y=g.substring(0,g.lastIndexOf("/")+1)+f.path;m.path=a.normalizePath(y)}return m.path===null&&(m.path=d.alwaysNormalize?a.normalizePath(f.path):f.path),a.buildURLFromParts(m)},parseURL:function(l){var c=r.exec(l);return c?{scheme:c[1]||"",netLoc:c[2]||"",path:c[3]||"",params:c[4]||"",query:c[5]||"",fragment:c[6]||""}:null},normalizePath:function(l){for(l=l.split("").reverse().join("").replace(o,"");l.length!==(l=l.replace(s,"")).length;);return l.split("").reverse().join("")},buildURLFromParts:function(l){return l.scheme+l.netLoc+l.path+l.params+l.query+l.fragment}};n.exports=a})()})(Ey);var of=Ey.exports;function Cp(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function en(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Cp(Object(t),!0).forEach(function(r){__(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Cp(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function L_(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function R_(n){var e=L_(n,"string");return typeof e=="symbol"?e:String(e)}function __(n,e,t){return e=R_(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ut(){return Ut=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ut.apply(this,arguments)}const $e=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},D_=Number.isSafeInteger||function(n){return typeof n=="number"&&Math.abs(n)<=P_},P_=Number.MAX_SAFE_INTEGER||9007199254740991;let P=function(n){return n.MEDIA_ATTACHING="hlsMediaAttaching",n.MEDIA_ATTACHED="hlsMediaAttached",n.MEDIA_DETACHING="hlsMediaDetaching",n.MEDIA_DETACHED="hlsMediaDetached",n.BUFFER_RESET="hlsBufferReset",n.BUFFER_CODECS="hlsBufferCodecs",n.BUFFER_CREATED="hlsBufferCreated",n.BUFFER_APPENDING="hlsBufferAppending",n.BUFFER_APPENDED="hlsBufferAppended",n.BUFFER_EOS="hlsBufferEos",n.BUFFER_FLUSHING="hlsBufferFlushing",n.BUFFER_FLUSHED="hlsBufferFlushed",n.MANIFEST_LOADING="hlsManifestLoading",n.MANIFEST_LOADED="hlsManifestLoaded",n.MANIFEST_PARSED="hlsManifestParsed",n.LEVEL_SWITCHING="hlsLevelSwitching",n.LEVEL_SWITCHED="hlsLevelSwitched",n.LEVEL_LOADING="hlsLevelLoading",n.LEVEL_LOADED="hlsLevelLoaded",n.LEVEL_UPDATED="hlsLevelUpdated",n.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",n.LEVELS_UPDATED="hlsLevelsUpdated",n.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",n.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",n.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",n.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",n.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",n.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",n.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",n.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",n.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",n.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",n.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",n.CUES_PARSED="hlsCuesParsed",n.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",n.INIT_PTS_FOUND="hlsInitPtsFound",n.FRAG_LOADING="hlsFragLoading",n.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",n.FRAG_LOADED="hlsFragLoaded",n.FRAG_DECRYPTED="hlsFragDecrypted",n.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",n.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",n.FRAG_PARSING_METADATA="hlsFragParsingMetadata",n.FRAG_PARSED="hlsFragParsed",n.FRAG_BUFFERED="hlsFragBuffered",n.FRAG_CHANGED="hlsFragChanged",n.FPS_DROP="hlsFpsDrop",n.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",n.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",n.ERROR="hlsError",n.DESTROYING="hlsDestroying",n.KEY_LOADING="hlsKeyLoading",n.KEY_LOADED="hlsKeyLoaded",n.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",n.BACK_BUFFER_REACHED="hlsBackBufferReached",n.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded",n}({}),Ze=function(n){return n.NETWORK_ERROR="networkError",n.MEDIA_ERROR="mediaError",n.KEY_SYSTEM_ERROR="keySystemError",n.MUX_ERROR="muxError",n.OTHER_ERROR="otherError",n}({}),be=function(n){return n.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",n.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",n.KEY_SYSTEM_NO_SESSION="keySystemNoSession",n.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",n.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",n.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",n.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",n.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",n.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",n.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",n.MANIFEST_LOAD_ERROR="manifestLoadError",n.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",n.MANIFEST_PARSING_ERROR="manifestParsingError",n.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",n.LEVEL_EMPTY_ERROR="levelEmptyError",n.LEVEL_LOAD_ERROR="levelLoadError",n.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",n.LEVEL_PARSING_ERROR="levelParsingError",n.LEVEL_SWITCH_ERROR="levelSwitchError",n.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",n.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",n.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",n.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",n.FRAG_LOAD_ERROR="fragLoadError",n.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",n.FRAG_DECRYPT_ERROR="fragDecryptError",n.FRAG_PARSING_ERROR="fragParsingError",n.FRAG_GAP="fragGap",n.REMUX_ALLOC_ERROR="remuxAllocError",n.KEY_LOAD_ERROR="keyLoadError",n.KEY_LOAD_TIMEOUT="keyLoadTimeOut",n.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",n.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",n.BUFFER_APPEND_ERROR="bufferAppendError",n.BUFFER_APPENDING_ERROR="bufferAppendingError",n.BUFFER_STALLED_ERROR="bufferStalledError",n.BUFFER_FULL_ERROR="bufferFullError",n.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",n.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",n.INTERNAL_EXCEPTION="internalException",n.INTERNAL_ABORTED="aborted",n.UNKNOWN="unknown",n}({});const gi=function(){},Wd={trace:gi,debug:gi,log:gi,warn:gi,info:gi,error:gi};let Ds=Wd;function B_(n){const e=self.console[n];return e?e.bind(self.console,`[${n}] >`):gi}function O_(n,...e){e.forEach(function(t){Ds[t]=n[t]?n[t].bind(n):B_(t)})}function F_(n,e){if(typeof console=="object"&&n===!0||typeof n=="object"){O_(n,"debug","log","info","warn","error");try{Ds.log(`Debug logs enabled for "${e}" in hls.js version 1.5.17`)}catch{Ds=Wd}}else Ds=Wd}const se=Ds,M_=/^(\d+)x(\d+)$/,Sp=/(.+?)=(".*?"|.*?)(?:,|$)/g;class Rt{constructor(e){typeof e=="string"&&(e=Rt.parseAttrList(e)),Ut(this,e)}get clientAttrs(){return Object.keys(this).filter(e=>e.substring(0,2)==="X-")}decimalInteger(e){const t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}hexadecimalInteger(e){if(this[e]){let t=(this[e]||"0x").slice(2);t=(t.length&1?"0":"")+t;const r=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(i*2,i*2+2),16);return r}else return null}hexadecimalIntegerAsNumber(e){const t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}decimalFloatingPoint(e){return parseFloat(this[e])}optionalFloat(e,t){const r=this[e];return r?parseFloat(r):t}enumeratedString(e){return this[e]}bool(e){return this[e]==="YES"}decimalResolution(e){const t=M_.exec(this[e]);if(t!==null)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}static parseAttrList(e){let t;const r={},i='"';for(Sp.lastIndex=0;(t=Sp.exec(e))!==null;){let o=t[2];o.indexOf(i)===0&&o.lastIndexOf(i)===o.length-1&&(o=o.slice(1,-1));const s=t[1].trim();r[s]=o}return r}}function N_(n){return n!=="ID"&&n!=="CLASS"&&n!=="START-DATE"&&n!=="DURATION"&&n!=="END-DATE"&&n!=="END-ON-NEXT"}function z_(n){return n==="SCTE35-OUT"||n==="SCTE35-IN"}class wy{constructor(e,t){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,t){const r=t.attr;for(const i in r)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==r[i]){se.warn(`DATERANGE tag attribute: "${i}" does not match for tags with ID: "${e.ID}"`),this._badValueForSameId=i;break}e=Ut(new Rt({}),r,e)}if(this.attr=e,this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){const r=new Date(this.attr["END-DATE"]);$e(r.getTime())&&(this._endDate=r)}}get id(){return this.attr.ID}get class(){return this.attr.CLASS}get startDate(){return this._startDate}get endDate(){if(this._endDate)return this._endDate;const e=this.duration;return e!==null?new Date(this._startDate.getTime()+e*1e3):null}get duration(){if("DURATION"in this.attr){const e=this.attr.decimalFloatingPoint("DURATION");if($e(e))return e}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}get plannedDuration(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}get endOnNext(){return this.attr.bool("END-ON-NEXT")}get isValid(){return!!this.id&&!this._badValueForSameId&&$e(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}class tc{constructor(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}}var gt={AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"};class Cy{constructor(e){this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams={[gt.AUDIO]:null,[gt.VIDEO]:null,[gt.AUDIOVIDEO]:null},this.baseurl=e}setByteRange(e,t){const r=e.split("@",2);let i;r.length===1?i=(t==null?void 0:t.byteRangeEndOffset)||0:i=parseInt(r[1]),this._byteRange=[i,parseInt(r[0])+i]}get byteRange(){return this._byteRange?this._byteRange:[]}get byteRangeStartOffset(){return this.byteRange[0]}get byteRangeEndOffset(){return this.byteRange[1]}get url(){return!this._url&&this.baseurl&&this.relurl&&(this._url=of.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""}set url(e){this._url=e}}class Uc extends Cy{constructor(e,t){super(t),this._decryptdata=null,this.rawProgramDateTime=null,this.programDateTime=null,this.tagList=[],this.duration=0,this.sn=0,this.levelkeys=void 0,this.type=void 0,this.loader=null,this.keyLoader=null,this.level=-1,this.cc=0,this.startPTS=void 0,this.endPTS=void 0,this.startDTS=void 0,this.endDTS=void 0,this.start=0,this.deltaPTS=void 0,this.maxStartPTS=void 0,this.minEndPTS=void 0,this.stats=new tc,this.data=void 0,this.bitrateTest=!1,this.title=null,this.initSegment=null,this.endList=void 0,this.gap=void 0,this.urlId=0,this.type=e}get decryptdata(){const{levelkeys:e}=this;if(!e&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){const t=this.levelkeys.identity;if(t)this._decryptdata=t.getDecryptData(this.sn);else{const r=Object.keys(this.levelkeys);if(r.length===1)return this._decryptdata=this.levelkeys[r[0]].getDecryptData(this.sn)}}return this._decryptdata}get end(){return this.start+this.duration}get endProgramDateTime(){if(this.programDateTime===null||!$e(this.programDateTime))return null;const e=$e(this.duration)?this.duration:0;return this.programDateTime+e*1e3}get encrypted(){var e;if((e=this._decryptdata)!=null&&e.encrypted)return!0;if(this.levelkeys){const t=Object.keys(this.levelkeys),r=t.length;if(r>1||r===1&&this.levelkeys[t[0]].encrypted)return!0}return!1}setKeyFormat(e){if(this.levelkeys){const t=this.levelkeys[e];t&&!this._decryptdata&&(this._decryptdata=t.getDecryptData(this.sn))}}abortRequests(){var e,t;(e=this.loader)==null||e.abort(),(t=this.keyLoader)==null||t.abort()}setElementaryStreamInfo(e,t,r,i,o,s=!1){const{elementaryStreams:a}=this,l=a[e];if(!l){a[e]={startPTS:t,endPTS:r,startDTS:i,endDTS:o,partial:s};return}l.startPTS=Math.min(l.startPTS,t),l.endPTS=Math.max(l.endPTS,r),l.startDTS=Math.min(l.startDTS,i),l.endDTS=Math.max(l.endDTS,o)}clearElementaryStreamInfo(){const{elementaryStreams:e}=this;e[gt.AUDIO]=null,e[gt.VIDEO]=null,e[gt.AUDIOVIDEO]=null}}class $_ extends Cy{constructor(e,t,r,i,o){super(r),this.fragOffset=0,this.duration=0,this.gap=!1,this.independent=!1,this.relurl=void 0,this.fragment=void 0,this.index=void 0,this.stats=new tc,this.duration=e.decimalFloatingPoint("DURATION"),this.gap=e.bool("GAP"),this.independent=e.bool("INDEPENDENT"),this.relurl=e.enumeratedString("URI"),this.fragment=t,this.index=i;const s=e.enumeratedString("BYTERANGE");s&&this.setByteRange(s,o),o&&(this.fragOffset=o.fragOffset+o.duration)}get start(){return this.fragment.start+this.fragOffset}get end(){return this.start+this.duration}get loaded(){const{elementaryStreams:e}=this;return!!(e.audio||e.video||e.audiovideo)}}const U_=10;class H_{constructor(e){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=e}reloaded(e){if(!e){this.advanced=!0,this.updated=!0;return}const t=this.lastPartSn-e.lastPartSn,r=this.lastPartIndex-e.lastPartIndex;this.updated=this.endSN!==e.endSN||!!r||!!t||!this.live,this.advanced=this.endSN>e.endSN||t>0||t===0&&r>0,this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1,this.availabilityDelay=e.availabilityDelay}get hasProgramDateTime(){return this.fragments.length?$e(this.fragments[this.fragments.length-1].programDateTime):!1}get levelTargetDuration(){return this.averagetargetduration||this.targetduration||U_}get drift(){const e=this.driftEndTime-this.driftStartTime;return e>0?(this.driftEnd-this.driftStart)*1e3/e:1}get edge(){return this.partEnd||this.fragmentEnd}get partEnd(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd}get fragmentEnd(){var e;return(e=this.fragments)!=null&&e.length?this.fragments[this.fragments.length-1].end:0}get age(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}get lastPartIndex(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1}get lastPartSn(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}function sf(n){return Uint8Array.from(atob(n),e=>e.charCodeAt(0))}function W_(n){const e=jd(n).subarray(0,16),t=new Uint8Array(16);return t.set(e,16-e.length),t}function j_(n){const e=function(r,i,o){const s=r[i];r[i]=r[o],r[o]=s};e(n,0,3),e(n,1,2),e(n,4,5),e(n,6,7)}function G_(n){const e=n.split(":");let t=null;if(e[0]==="data"&&e.length===2){const r=e[1].split(";"),i=r[r.length-1].split(",");if(i.length===2){const o=i[0]==="base64",s=i[1];o?(r.splice(-1,1),t=sf(s)):t=W_(s)}}return t}function jd(n){return Uint8Array.from(unescape(encodeURIComponent(n)),e=>e.charCodeAt(0))}const To=typeof self<"u"?self:void 0;var Ct={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},An={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};function Tp(n){switch(n){case An.FAIRPLAY:return Ct.FAIRPLAY;case An.PLAYREADY:return Ct.PLAYREADY;case An.WIDEVINE:return Ct.WIDEVINE;case An.CLEARKEY:return Ct.CLEARKEY}}var vs={CENC:"1077efecc0b24d02ace33c1e52e2fb4b",CLEARKEY:"e2719d58a985b3c9781ab030af78d30e",FAIRPLAY:"94ce86fb07ff4f43adb893d2fa968ca2",PLAYREADY:"9a04f07998404286ab92e65be0885f95",WIDEVINE:"edef8ba979d64acea3c827dcd51d21ed"};function kp(n){if(n===vs.WIDEVINE)return Ct.WIDEVINE;if(n===vs.PLAYREADY)return Ct.PLAYREADY;if(n===vs.CENC||n===vs.CLEARKEY)return Ct.CLEARKEY}function Ip(n){switch(n){case Ct.FAIRPLAY:return An.FAIRPLAY;case Ct.PLAYREADY:return An.PLAYREADY;case Ct.WIDEVINE:return An.WIDEVINE;case Ct.CLEARKEY:return An.CLEARKEY}}function Hc(n){const{drmSystems:e,widevineLicenseUrl:t}=n,r=e?[Ct.FAIRPLAY,Ct.WIDEVINE,Ct.PLAYREADY,Ct.CLEARKEY].filter(i=>!!e[i]):[];return!r[Ct.WIDEVINE]&&t&&r.push(Ct.WIDEVINE),r}const Sy=function(n){return To!=null&&(n=To.navigator)!=null&&n.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function K_(n,e,t,r){let i;switch(n){case Ct.FAIRPLAY:i=["cenc","sinf"];break;case Ct.WIDEVINE:case Ct.PLAYREADY:i=["cenc"];break;case Ct.CLEARKEY:i=["cenc","keyids"];break;default:throw new Error(`Unknown key-system: ${n}`)}return V_(i,e,t,r)}function V_(n,e,t,r){return[{initDataTypes:n,persistentState:r.persistentState||"optional",distinctiveIdentifier:r.distinctiveIdentifier||"optional",sessionTypes:r.sessionTypes||[r.sessionType||"temporary"],audioCapabilities:e.map(o=>({contentType:`audio/mp4; codecs="${o}"`,robustness:r.audioRobustness||"",encryptionScheme:r.audioEncryptionScheme||null})),videoCapabilities:t.map(o=>({contentType:`video/mp4; codecs="${o}"`,robustness:r.videoRobustness||"",encryptionScheme:r.videoEncryptionScheme||null}))}]}function Ti(n,e,t){return Uint8Array.prototype.slice?n.slice(e,t):new Uint8Array(Array.prototype.slice.call(n,e,t))}const af=(n,e)=>e+10<=n.length&&n[e]===73&&n[e+1]===68&&n[e+2]===51&&n[e+3]<255&&n[e+4]<255&&n[e+6]<128&&n[e+7]<128&&n[e+8]<128&&n[e+9]<128,Ty=(n,e)=>e+10<=n.length&&n[e]===51&&n[e+1]===68&&n[e+2]===73&&n[e+3]<255&&n[e+4]<255&&n[e+6]<128&&n[e+7]<128&&n[e+8]<128&&n[e+9]<128,js=(n,e)=>{const t=e;let r=0;for(;af(n,e);){r+=10;const i=nc(n,e+6);r+=i,Ty(n,e+10)&&(r+=10),e+=r}if(r>0)return n.subarray(t,t+r)},nc=(n,e)=>{let t=0;return t=(n[e]&127)<<21,t|=(n[e+1]&127)<<14,t|=(n[e+2]&127)<<7,t|=n[e+3]&127,t},q_=(n,e)=>af(n,e)&&nc(n,e+6)+10<=n.length-e,lf=n=>{const e=Iy(n);for(let t=0;t<e.length;t++){const r=e[t];if(ky(r))return e3(r)}},ky=n=>n&&n.key==="PRIV"&&n.info==="com.apple.streaming.transportStreamTimestamp",Y_=n=>{const e=String.fromCharCode(n[0],n[1],n[2],n[3]),t=nc(n,4),r=10;return{type:e,size:t,data:n.subarray(r,r+t)}},Iy=n=>{let e=0;const t=[];for(;af(n,e);){const r=nc(n,e+6);e+=10;const i=e+r;for(;e+8<i;){const o=Y_(n.subarray(e)),s=X_(o);s&&t.push(s),e+=o.size+10}Ty(n,e)&&(e+=10)}return t},X_=n=>n.type==="PRIV"?Z_(n):n.type[0]==="W"?J_(n):Q_(n),Z_=n=>{if(n.size<2)return;const e=cr(n.data,!0),t=new Uint8Array(n.data.subarray(e.length+1));return{key:n.type,info:e,data:t.buffer}},Q_=n=>{if(n.size<2)return;if(n.type==="TXXX"){let t=1;const r=cr(n.data.subarray(t),!0);t+=r.length+1;const i=cr(n.data.subarray(t));return{key:n.type,info:r,data:i}}const e=cr(n.data.subarray(1));return{key:n.type,data:e}},J_=n=>{if(n.type==="WXXX"){if(n.size<2)return;let t=1;const r=cr(n.data.subarray(t),!0);t+=r.length+1;const i=cr(n.data.subarray(t));return{key:n.type,info:r,data:i}}const e=cr(n.data);return{key:n.type,data:e}},e3=n=>{if(n.data.byteLength===8){const e=new Uint8Array(n.data),t=e[3]&1;let r=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return r/=45,t&&(r+=4772185884e-2),Math.round(r)}},cr=(n,e=!1)=>{const t=t3();if(t){const c=t.decode(n);if(e){const d=c.indexOf("\0");return d!==-1?c.substring(0,d):c}return c.replace(/\0/g,"")}const r=n.length;let i,o,s,a="",l=0;for(;l<r;){if(i=n[l++],i===0&&e)return a;if(i===0||i===3)continue;switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a+=String.fromCharCode(i);break;case 12:case 13:o=n[l++],a+=String.fromCharCode((i&31)<<6|o&63);break;case 14:o=n[l++],s=n[l++],a+=String.fromCharCode((i&15)<<12|(o&63)<<6|(s&63)<<0);break}}return a};let Wc;function t3(){if(!navigator.userAgent.includes("PlayStation 4"))return!Wc&&typeof self.TextDecoder<"u"&&(Wc=new self.TextDecoder("utf-8")),Wc}const nr={hexDump:function(n){let e="";for(let t=0;t<n.length;t++){let r=n[t].toString(16);r.length<2&&(r="0"+r),e+=r}return e}},Cl=Math.pow(2,32)-1,n3=[].push,Ly={video:1,audio:2,id3:3,text:4};function Kt(n){return String.fromCharCode.apply(null,n)}function Ry(n,e){const t=n[e]<<8|n[e+1];return t<0?65536+t:t}function qe(n,e){const t=_y(n,e);return t<0?4294967296+t:t}function Lp(n,e){let t=qe(n,e);return t*=Math.pow(2,32),t+=qe(n,e+4),t}function _y(n,e){return n[e]<<24|n[e+1]<<16|n[e+2]<<8|n[e+3]}function jc(n,e,t){n[e]=t>>24,n[e+1]=t>>16&255,n[e+2]=t>>8&255,n[e+3]=t&255}function r3(n){const e=n.byteLength;for(let t=0;t<e;){const r=qe(n,t);if(r>8&&n[t+4]===109&&n[t+5]===111&&n[t+6]===111&&n[t+7]===102)return!0;t=r>1?t+r:e}return!1}function tt(n,e){const t=[];if(!e.length)return t;const r=n.byteLength;for(let i=0;i<r;){const o=qe(n,i),s=Kt(n.subarray(i+4,i+8)),a=o>1?i+o:r;if(s===e[0])if(e.length===1)t.push(n.subarray(i+8,a));else{const l=tt(n.subarray(i+8,a),e.slice(1));l.length&&n3.apply(t,l)}i=a}return t}function i3(n){const e=[],t=n[0];let r=8;const i=qe(n,r);r+=4;let o=0,s=0;t===0?(o=qe(n,r),s=qe(n,r+4),r+=8):(o=Lp(n,r),s=Lp(n,r+8),r+=16),r+=2;let a=n.length+s;const l=Ry(n,r);r+=2;for(let c=0;c<l;c++){let d=r;const u=qe(n,d);d+=4;const f=u&2147483647;if((u&2147483648)>>>31===1)return se.warn("SIDX has hierarchical references (not supported)"),null;const p=qe(n,d);d+=4,e.push({referenceSize:f,subsegmentDuration:p,info:{duration:p/i,start:a,end:a+f-1}}),a+=f,d+=4,r=d}return{earliestPresentationTime:o,timescale:i,version:t,referencesCount:l,references:e}}function Dy(n){const e=[],t=tt(n,["moov","trak"]);for(let i=0;i<t.length;i++){const o=t[i],s=tt(o,["tkhd"])[0];if(s){let a=s[0];const l=qe(s,a===0?12:20),c=tt(o,["mdia","mdhd"])[0];if(c){a=c[0];const d=qe(c,a===0?12:20),u=tt(o,["mdia","hdlr"])[0];if(u){const f=Kt(u.subarray(8,12)),h={soun:gt.AUDIO,vide:gt.VIDEO}[f];if(h){const p=tt(o,["mdia","minf","stbl","stsd"])[0],m=o3(p);e[l]={timescale:d,type:h},e[h]=en({timescale:d,id:l},m)}}}}}return tt(n,["moov","mvex","trex"]).forEach(i=>{const o=qe(i,4),s=e[o];s&&(s.default={duration:qe(i,12),flags:qe(i,20)})}),e}function o3(n){const e=n.subarray(8),t=e.subarray(8+78),r=Kt(e.subarray(4,8));let i=r;const o=r==="enca"||r==="encv";if(o){const a=tt(e,[r])[0].subarray(r==="enca"?28:78);tt(a,["sinf"]).forEach(c=>{const d=tt(c,["schm"])[0];if(d){const u=Kt(d.subarray(4,8));if(u==="cbcs"||u==="cenc"){const f=tt(c,["frma"])[0];f&&(i=Kt(f))}}})}switch(i){case"avc1":case"avc2":case"avc3":case"avc4":{const s=tt(t,["avcC"])[0];i+="."+Da(s[1])+Da(s[2])+Da(s[3]);break}case"mp4a":{const s=tt(e,[r])[0],a=tt(s.subarray(28),["esds"])[0];if(a&&a.length>12){let l=4;if(a[l++]!==3)break;l=Gc(a,l),l+=2;const c=a[l++];if(c&128&&(l+=2),c&64&&(l+=a[l++]),a[l++]!==4)break;l=Gc(a,l);const d=a[l++];if(d===64)i+="."+Da(d);else break;if(l+=12,a[l++]!==5)break;l=Gc(a,l);const u=a[l++];let f=(u&248)>>3;f===31&&(f+=1+((u&7)<<3)+((a[l]&224)>>5)),i+="."+f}break}case"hvc1":case"hev1":{const s=tt(t,["hvcC"])[0],a=s[1],l=["","A","B","C"][a>>6],c=a&31,d=qe(s,2),u=(a&32)>>5?"H":"L",f=s[12],h=s.subarray(6,12);i+="."+l+c,i+="."+d.toString(16).toUpperCase(),i+="."+u+f;let p="";for(let m=h.length;m--;){const g=h[m];(g||p)&&(p="."+g.toString(16).toUpperCase()+p)}i+=p;break}case"dvh1":case"dvhe":{const s=tt(t,["dvcC"])[0],a=s[2]>>1&127,l=s[2]<<5&32|s[3]>>3&31;i+="."+er(a)+"."+er(l);break}case"vp09":{const s=tt(t,["vpcC"])[0],a=s[4],l=s[5],c=s[6]>>4&15;i+="."+er(a)+"."+er(l)+"."+er(c);break}case"av01":{const s=tt(t,["av1C"])[0],a=s[1]>>>5,l=s[1]&31,c=s[2]>>>7?"H":"M",d=(s[2]&64)>>6,u=(s[2]&32)>>5,f=a===2&&d?u?12:10:d?10:8,h=(s[2]&16)>>4,p=(s[2]&8)>>3,m=(s[2]&4)>>2,g=s[2]&3,y=1,E=1,S=1,C=0;i+="."+a+"."+er(l)+c+"."+er(f)+"."+h+"."+p+m+g+"."+er(y)+"."+er(E)+"."+er(S)+"."+C;break}}return{codec:i,encrypted:o}}function Gc(n,e){const t=e+5;for(;n[e++]&128&&e<t;);return e}function Da(n){return("0"+n.toString(16).toUpperCase()).slice(-2)}function er(n){return(n<10?"0":"")+n}function s3(n,e){if(!n||!e)return n;const t=e.keyId;return t&&e.isCommonEncryption&&tt(n,["moov","trak"]).forEach(i=>{const s=tt(i,["mdia","minf","stbl","stsd"])[0].subarray(8);let a=tt(s,["enca"]);const l=a.length>0;l||(a=tt(s,["encv"])),a.forEach(c=>{const d=l?c.subarray(28):c.subarray(78);tt(d,["sinf"]).forEach(f=>{const h=Py(f);if(h){const p=h.subarray(8,24);p.some(m=>m!==0)||(se.log(`[eme] Patching keyId in 'enc${l?"a":"v"}>sinf>>tenc' box: ${nr.hexDump(p)} -> ${nr.hexDump(t)}`),h.set(t,8))}})})}),n}function Py(n){const e=tt(n,["schm"])[0];if(e){const t=Kt(e.subarray(4,8));if(t==="cbcs"||t==="cenc")return tt(n,["schi","tenc"])[0]}return null}function a3(n,e){return tt(e,["moof","traf"]).reduce((t,r)=>{const i=tt(r,["tfdt"])[0],o=i[0],s=tt(r,["tfhd"]).reduce((a,l)=>{const c=qe(l,4),d=n[c];if(d){let u=qe(i,4);if(o===1){if(u===Cl)return se.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"),a;u*=Cl+1,u+=qe(i,8)}const f=d.timescale||9e4,h=u/f;if($e(h)&&(a===null||h<a))return h}return a},null);return s!==null&&$e(s)&&(t===null||s<t)?s:t},null)}function l3(n,e){let t=0,r=0,i=0;const o=tt(n,["moof","traf"]);for(let s=0;s<o.length;s++){const a=o[s],l=tt(a,["tfhd"])[0],c=qe(l,4),d=e[c];if(!d)continue;const u=d.default,f=qe(l,0)|(u==null?void 0:u.flags);let h=u==null?void 0:u.duration;f&8&&(f&2?h=qe(l,12):h=qe(l,8));const p=d.timescale||9e4,m=tt(a,["trun"]);for(let g=0;g<m.length;g++){if(t=c3(m[g]),!t&&h){const y=qe(m[g],4);t=h*y}d.type===gt.VIDEO?r+=t/p:d.type===gt.AUDIO&&(i+=t/p)}}if(r===0&&i===0){let s=1/0,a=0,l=0;const c=tt(n,["sidx"]);for(let d=0;d<c.length;d++){const u=i3(c[d]);if(u!=null&&u.references){s=Math.min(s,u.earliestPresentationTime/u.timescale);const f=u.references.reduce((h,p)=>h+p.info.duration||0,0);a=Math.max(a,f+u.earliestPresentationTime/u.timescale),l=a-s}}if(l&&$e(l))return l}return r||i}function c3(n){const e=qe(n,0);let t=8;e&1&&(t+=4),e&4&&(t+=4);let r=0;const i=qe(n,4);for(let o=0;o<i;o++){if(e&256){const s=qe(n,t);r+=s,t+=4}e&512&&(t+=4),e&1024&&(t+=4),e&2048&&(t+=4)}return r}function d3(n,e,t){tt(e,["moof","traf"]).forEach(r=>{tt(r,["tfhd"]).forEach(i=>{const o=qe(i,4),s=n[o];if(!s)return;const a=s.timescale||9e4;tt(r,["tfdt"]).forEach(l=>{const c=l[0],d=t*a;if(d){let u=qe(l,4);if(c===0)u-=d,u=Math.max(u,0),jc(l,4,u);else{u*=Math.pow(2,32),u+=qe(l,8),u-=d,u=Math.max(u,0);const f=Math.floor(u/(Cl+1)),h=Math.floor(u%(Cl+1));jc(l,4,f),jc(l,8,h)}}})})})}function u3(n){const e={valid:null,remainder:null},t=tt(n,["moof"]);if(t.length<2)return e.remainder=n,e;const r=t[t.length-1];return e.valid=Ti(n,0,r.byteOffset-8),e.remainder=Ti(n,r.byteOffset-8),e}function Bn(n,e){const t=new Uint8Array(n.length+e.length);return t.set(n),t.set(e,n.length),t}function Rp(n,e){const t=[],r=e.samples,i=e.timescale,o=e.id;let s=!1;return tt(r,["moof"]).map(l=>{const c=l.byteOffset-8;tt(l,["traf"]).map(u=>{const f=tt(u,["tfdt"]).map(h=>{const p=h[0];let m=qe(h,4);return p===1&&(m*=Math.pow(2,32),m+=qe(h,8)),m/i})[0];return f!==void 0&&(n=f),tt(u,["tfhd"]).map(h=>{const p=qe(h,4),m=qe(h,0)&16777215,g=(m&1)!==0,y=(m&2)!==0,E=(m&8)!==0;let S=0;const C=(m&16)!==0;let k=0;const M=(m&32)!==0;let T=8;p===o&&(g&&(T+=8),y&&(T+=4),E&&(S=qe(h,T),T+=4),C&&(k=qe(h,T),T+=4),M&&(T+=4),e.type==="video"&&(s=f3(e.codec)),tt(u,["trun"]).map(z=>{const F=z[0],O=qe(z,0)&16777215,V=(O&1)!==0;let _=0;const H=(O&4)!==0,I=(O&256)!==0;let W=0;const ie=(O&512)!==0;let Q=0;const ue=(O&1024)!==0,J=(O&2048)!==0;let ae=0;const X=qe(z,4);let q=8;V&&(_=qe(z,q),q+=4),H&&(q+=4);let re=_+c;for(let ge=0;ge<X;ge++){if(I?(W=qe(z,q),q+=4):W=S,ie?(Q=qe(z,q),q+=4):Q=k,ue&&(q+=4),J&&(F===0?ae=qe(z,q):ae=_y(z,q),q+=4),e.type===gt.VIDEO){let Ae=0;for(;Ae<Q;){const Le=qe(r,re);if(re+=4,h3(s,r[re])){const Fe=r.subarray(re,re+Le);By(Fe,s?2:1,n+ae/i,t)}re+=Le,Ae+=Le+4}}n+=W/i}}))})})}),t}function f3(n){if(!n)return!1;const e=n.indexOf("."),t=e<0?n:n.substring(0,e);return t==="hvc1"||t==="hev1"||t==="dvh1"||t==="dvhe"}function h3(n,e){if(n){const t=e>>1&63;return t===39||t===40}else return(e&31)===6}function By(n,e,t,r){const i=Oy(n);let o=0;o+=e;let s=0,a=0,l=0;for(;o<i.length;){s=0;do{if(o>=i.length)break;l=i[o++],s+=l}while(l===255);a=0;do{if(o>=i.length)break;l=i[o++],a+=l}while(l===255);const c=i.length-o;let d=o;if(a<c)o+=a;else if(a>c){se.error(`Malformed SEI payload. ${a} is too small, only ${c} bytes left to parse.`);break}if(s===4){if(i[d++]===181){const f=Ry(i,d);if(d+=2,f===49){const h=qe(i,d);if(d+=4,h===1195456820){const p=i[d++];if(p===3){const m=i[d++],g=31&m,y=64&m,E=y?2+g*3:0,S=new Uint8Array(E);if(y){S[0]=m;for(let C=1;C<E;C++)S[C]=i[d++]}r.push({type:p,payloadType:s,pts:t,bytes:S})}}}}}else if(s===5&&a>16){const u=[];for(let p=0;p<16;p++){const m=i[d++].toString(16);u.push(m.length==1?"0"+m:m),(p===3||p===5||p===7||p===9)&&u.push("-")}const f=a-16,h=new Uint8Array(f);for(let p=0;p<f;p++)h[p]=i[d++];r.push({payloadType:s,pts:t,uuid:u.join(""),userData:cr(h),userDataBytes:h})}}}function Oy(n){const e=n.byteLength,t=[];let r=1;for(;r<e-2;)n[r]===0&&n[r+1]===0&&n[r+2]===3?(t.push(r+2),r+=2):r++;if(t.length===0)return n;const i=e-t.length,o=new Uint8Array(i);let s=0;for(r=0;r<i;s++,r++)s===t[0]&&(s++,t.shift()),o[r]=n[s];return o}function p3(n){const e=n[0];let t="",r="",i=0,o=0,s=0,a=0,l=0,c=0;if(e===0){for(;Kt(n.subarray(c,c+1))!=="\0";)t+=Kt(n.subarray(c,c+1)),c+=1;for(t+=Kt(n.subarray(c,c+1)),c+=1;Kt(n.subarray(c,c+1))!=="\0";)r+=Kt(n.subarray(c,c+1)),c+=1;r+=Kt(n.subarray(c,c+1)),c+=1,i=qe(n,12),o=qe(n,16),a=qe(n,20),l=qe(n,24),c=28}else if(e===1){c+=4,i=qe(n,c),c+=4;const u=qe(n,c);c+=4;const f=qe(n,c);for(c+=4,s=2**32*u+f,D_(s)||(s=Number.MAX_SAFE_INTEGER,se.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),a=qe(n,c),c+=4,l=qe(n,c),c+=4;Kt(n.subarray(c,c+1))!=="\0";)t+=Kt(n.subarray(c,c+1)),c+=1;for(t+=Kt(n.subarray(c,c+1)),c+=1;Kt(n.subarray(c,c+1))!=="\0";)r+=Kt(n.subarray(c,c+1)),c+=1;r+=Kt(n.subarray(c,c+1)),c+=1}const d=n.subarray(c,n.byteLength);return{schemeIdUri:t,value:r,timeScale:i,presentationTime:s,presentationTimeDelta:o,eventDuration:a,id:l,payload:d}}function m3(n,...e){const t=e.length;let r=8,i=t;for(;i--;)r+=e[i].byteLength;const o=new Uint8Array(r);for(o[0]=r>>24&255,o[1]=r>>16&255,o[2]=r>>8&255,o[3]=r&255,o.set(n,4),i=0,r=8;i<t;i++)o.set(e[i],r),r+=e[i].byteLength;return o}function g3(n,e,t){if(n.byteLength!==16)throw new RangeError("Invalid system id");let r,i;if(e){r=1,i=new Uint8Array(e.length*16);for(let a=0;a<e.length;a++){const l=e[a];if(l.byteLength!==16)throw new RangeError("Invalid key");i.set(l,a*16)}}else r=0,i=new Uint8Array;let o;r>0?(o=new Uint8Array(4),e.length>0&&new DataView(o.buffer).setUint32(0,e.length,!1)):o=new Uint8Array;const s=new Uint8Array(4);return t&&t.byteLength>0&&new DataView(s.buffer).setUint32(0,t.byteLength,!1),m3([112,115,115,104],new Uint8Array([r,0,0,0]),n,o,i,s,t||new Uint8Array)}function y3(n){const e=[];if(n instanceof ArrayBuffer){const t=n.byteLength;let r=0;for(;r+32<t;){const i=new DataView(n,r),o=v3(i);e.push(o),r+=o.size}}return e}function v3(n){const e=n.getUint32(0),t=n.byteOffset,r=n.byteLength;if(r<e)return{offset:t,size:r};if(n.getUint32(4)!==1886614376)return{offset:t,size:e};const o=n.getUint32(8)>>>24;if(o!==0&&o!==1)return{offset:t,size:e};const s=n.buffer,a=nr.hexDump(new Uint8Array(s,t+12,16)),l=n.getUint32(28);let c=null,d=null;if(o===0){if(e-32<l||l<22)return{offset:t,size:e};d=new Uint8Array(s,t+32,l)}else if(o===1){if(!l||r<t+32+l*16+16)return{offset:t,size:e};c=[];for(let u=0;u<l;u++)c.push(new Uint8Array(s,t+32+u*16,16))}return{version:o,systemId:a,kids:c,data:d,offset:t,size:e}}let Pa={};class Gs{static clearKeyUriToKeyIdMap(){Pa={}}constructor(e,t,r,i=[1],o=null){this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=r,this.keyFormatVersions=i,this.iv=o,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&e!=="AES-128"}isSupported(){if(this.method){if(this.method==="AES-128"||this.method==="NONE")return!0;if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";switch(this.keyFormat){case An.FAIRPLAY:case An.WIDEVINE:case An.PLAYREADY:case An.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1}getDecryptData(e){if(!this.encrypted||!this.uri)return null;if(this.method==="AES-128"&&this.uri&&!this.iv){typeof e!="number"&&(this.method==="AES-128"&&!this.iv&&se.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),e=0);const r=b3(e);return new Gs(this.method,this.uri,"identity",this.keyFormatVersions,r)}const t=G_(this.uri);if(t)switch(this.keyFormat){case An.WIDEVINE:this.pssh=t,t.length>=22&&(this.keyId=t.subarray(t.length-22,t.length-6));break;case An.PLAYREADY:{const r=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=g3(r,null,t);const i=new Uint16Array(t.buffer,t.byteOffset,t.byteLength/2),o=String.fromCharCode.apply(null,Array.from(i)),s=o.substring(o.indexOf("<"),o.length),c=new DOMParser().parseFromString(s,"text/xml").getElementsByTagName("KID")[0];if(c){const d=c.childNodes[0]?c.childNodes[0].nodeValue:c.getAttribute("VALUE");if(d){const u=sf(d).subarray(0,16);j_(u),this.keyId=u}}break}default:{let r=t.subarray(0,16);if(r.length!==16){const i=new Uint8Array(16);i.set(r,16-r.length),r=i}this.keyId=r;break}}if(!this.keyId||this.keyId.byteLength!==16){let r=Pa[this.uri];if(!r){const i=Object.keys(Pa).length%Number.MAX_SAFE_INTEGER;r=new Uint8Array(16),new DataView(r.buffer,12,4).setUint32(0,i),Pa[this.uri]=r}this.keyId=r}return this}}function b3(n){const e=new Uint8Array(16);for(let t=12;t<16;t++)e[t]=n>>8*(15-t)&255;return e}const Fy=/\{\$([a-zA-Z0-9-_]+)\}/g;function _p(n){return Fy.test(n)}function yn(n,e,t){if(n.variableList!==null||n.hasVariableRefs)for(let r=t.length;r--;){const i=t[r],o=e[i];o&&(e[i]=Gd(n,o))}}function Gd(n,e){if(n.variableList!==null||n.hasVariableRefs){const t=n.variableList;return e.replace(Fy,r=>{const i=r.substring(2,r.length-1),o=t==null?void 0:t[i];return o===void 0?(n.playlistParsingError||(n.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)),r):o})}return e}function Dp(n,e,t){let r=n.variableList;r||(n.variableList=r={});let i,o;if("QUERYPARAM"in e){i=e.QUERYPARAM;try{const s=new self.URL(t).searchParams;if(s.has(i))o=s.get(i);else throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`)}catch(s){n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${s.message}`))}}else i=e.NAME,o=e.VALUE;i in r?n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)):r[i]=o||""}function A3(n,e,t){const r=e.IMPORT;if(t&&r in t){let i=n.variableList;i||(n.variableList=i={}),i[r]=t[r]}else n.playlistParsingError||(n.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${r}"`))}function Di(n=!0){return typeof self>"u"?void 0:(n||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource}function x3(n){return typeof self<"u"&&n===self.ManagedMediaSource}const Sl={audio:{a3ds:1,"ac-3":.95,"ac-4":1,alac:.9,alaw:1,dra1:1,"dts+":1,"dts-":1,dtsc:1,dtse:1,dtsh:1,"ec-3":.9,enca:1,fLaC:.9,flac:.9,FLAC:.9,g719:1,g726:1,m4ae:1,mha1:1,mha2:1,mhm1:1,mhm2:1,mlpa:1,mp4a:1,"raw ":1,Opus:1,opus:1,samr:1,sawb:1,sawp:1,sevc:1,sqcp:1,ssmv:1,twos:1,ulaw:1},video:{avc1:1,avc2:1,avc3:1,avc4:1,avcp:1,av01:.8,drac:1,dva1:1,dvav:1,dvh1:.7,dvhe:.7,encv:1,hev1:.75,hvc1:.75,mjp2:1,mp4v:1,mvc1:1,mvc2:1,mvc3:1,mvc4:1,resv:1,rv60:1,s263:1,svc1:1,svc2:1,"vc-1":1,vp08:1,vp09:.9},text:{stpp:1,wvtt:1}};function E3(n,e){const t=Sl[e];return!!t&&!!t[n.slice(0,4)]}function Kc(n,e,t=!0){return!n.split(",").some(r=>!My(r,e,t))}function My(n,e,t=!0){var r;const i=Di(t);return(r=i==null?void 0:i.isTypeSupported(Ks(n,e)))!=null?r:!1}function Ks(n,e){return`${e}/mp4;codecs="${n}"`}function Pp(n){if(n){const e=n.substring(0,4);return Sl.video[e]}return 2}function Tl(n){return n.split(",").reduce((e,t)=>{const r=Sl.video[t];return r?(r*2+e)/(e?3:2):(Sl.audio[t]+e)/(e?2:1)},0)}const Vc={};function w3(n,e=!0){if(Vc[n])return Vc[n];const t={flac:["flac","fLaC","FLAC"],opus:["opus","Opus"]}[n];for(let r=0;r<t.length;r++)if(My(t[r],"audio",e))return Vc[n]=t[r],t[r];return n}const C3=/flac|opus/i;function kl(n,e=!0){return n.replace(C3,t=>w3(t.toLowerCase(),e))}function Bp(n,e){return n&&n!=="mp4a"?n:e&&e.split(",")[0]}function S3(n){const e=n.split(",");for(let t=0;t<e.length;t++){const r=e[t].split(".");if(r.length>2){let i=r.shift()+".";i+=parseInt(r.shift()).toString(16),i+=("000"+parseInt(r.shift()).toString(16)).slice(-4),e[t]=i}}return e.join(",")}const Op=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,Fp=/#EXT-X-MEDIA:(.*)/g,T3=/^#EXT(?:INF|-X-TARGETDURATION):/m,Mp=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[^\r\n]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),k3=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|"));class or{static findGroup(e,t){for(let r=0;r<e.length;r++){const i=e[r];if(i.id===t)return i}}static resolve(e,t){return of.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}static isMediaPlaylist(e){return T3.test(e)}static parseMasterPlaylist(e,t){const r=_p(e),i={contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:r},o=[];Op.lastIndex=0;let s;for(;(s=Op.exec(e))!=null;)if(s[1]){var a;const c=new Rt(s[1]);yn(i,c,["CODECS","SUPPLEMENTAL-CODECS","ALLOWED-CPC","PATHWAY-ID","STABLE-VARIANT-ID","AUDIO","VIDEO","SUBTITLES","CLOSED-CAPTIONS","NAME"]);const d=Gd(i,s[2]),u={attrs:c,bitrate:c.decimalInteger("BANDWIDTH")||c.decimalInteger("AVERAGE-BANDWIDTH"),name:c.NAME,url:or.resolve(d,t)},f=c.decimalResolution("RESOLUTION");f&&(u.width=f.width,u.height=f.height),I3(c.CODECS,u),(a=u.unknownCodecs)!=null&&a.length||o.push(u),i.levels.push(u)}else if(s[3]){const c=s[3],d=s[4];switch(c){case"SESSION-DATA":{const u=new Rt(d);yn(i,u,["DATA-ID","LANGUAGE","VALUE","URI"]);const f=u["DATA-ID"];f&&(i.sessionData===null&&(i.sessionData={}),i.sessionData[f]=u);break}case"SESSION-KEY":{const u=Np(d,t,i);u.encrypted&&u.isSupported()?(i.sessionKeys===null&&(i.sessionKeys=[]),i.sessionKeys.push(u)):se.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${d}"`);break}case"DEFINE":{{const u=new Rt(d);yn(i,u,["NAME","VALUE","QUERYPARAM"]),Dp(i,u,t)}break}case"CONTENT-STEERING":{const u=new Rt(d);yn(i,u,["SERVER-URI","PATHWAY-ID"]),i.contentSteering={uri:or.resolve(u["SERVER-URI"],t),pathwayId:u["PATHWAY-ID"]||"."};break}case"START":{i.startTimeOffset=zp(d);break}}}const l=o.length>0&&o.length<i.levels.length;return i.levels=l?o:i.levels,i.levels.length===0&&(i.playlistParsingError=new Error("no levels found in manifest")),i}static parseMasterPlaylistMedia(e,t,r){let i;const o={},s=r.levels,a={AUDIO:s.map(c=>({id:c.attrs.AUDIO,audioCodec:c.audioCodec})),SUBTITLES:s.map(c=>({id:c.attrs.SUBTITLES,textCodec:c.textCodec})),"CLOSED-CAPTIONS":[]};let l=0;for(Fp.lastIndex=0;(i=Fp.exec(e))!==null;){const c=new Rt(i[1]),d=c.TYPE;if(d){const u=a[d],f=o[d]||[];o[d]=f,yn(r,c,["URI","GROUP-ID","LANGUAGE","ASSOC-LANGUAGE","STABLE-RENDITION-ID","NAME","INSTREAM-ID","CHARACTERISTICS","CHANNELS"]);const h=c.LANGUAGE,p=c["ASSOC-LANGUAGE"],m=c.CHANNELS,g=c.CHARACTERISTICS,y=c["INSTREAM-ID"],E={attrs:c,bitrate:0,id:l++,groupId:c["GROUP-ID"]||"",name:c.NAME||h||"",type:d,default:c.bool("DEFAULT"),autoselect:c.bool("AUTOSELECT"),forced:c.bool("FORCED"),lang:h,url:c.URI?or.resolve(c.URI,t):""};if(p&&(E.assocLang=p),m&&(E.channels=m),g&&(E.characteristics=g),y&&(E.instreamId=y),u!=null&&u.length){const S=or.findGroup(u,E.groupId)||u[0];$p(E,S,"audioCodec"),$p(E,S,"textCodec")}f.push(E)}}return o}static parseLevelPlaylist(e,t,r,i,o,s){const a=new H_(t),l=a.fragments;let c=null,d=0,u=0,f=0,h=0,p=null,m=new Uc(i,t),g,y,E,S=-1,C=!1,k=null;for(Mp.lastIndex=0,a.m3u8=e,a.hasVariableRefs=_p(e);(g=Mp.exec(e))!==null;){C&&(C=!1,m=new Uc(i,t),m.start=f,m.sn=d,m.cc=h,m.level=r,c&&(m.initSegment=c,m.rawProgramDateTime=c.rawProgramDateTime,c.rawProgramDateTime=null,k&&(m.setByteRange(k),k=null)));const F=g[1];if(F){m.duration=parseFloat(F);const O=(" "+g[2]).slice(1);m.title=O||null,m.tagList.push(O?["INF",F,O]:["INF",F])}else if(g[3]){if($e(m.duration)){m.start=f,E&&Wp(m,E,a),m.sn=d,m.level=r,m.cc=h,l.push(m);const O=(" "+g[3]).slice(1);m.relurl=Gd(a,O),Up(m,p),p=m,f+=m.duration,d++,u=0,C=!0}}else if(g[4]){const O=(" "+g[4]).slice(1);p?m.setByteRange(O,p):m.setByteRange(O)}else if(g[5])m.rawProgramDateTime=(" "+g[5]).slice(1),m.tagList.push(["PROGRAM-DATE-TIME",m.rawProgramDateTime]),S===-1&&(S=l.length);else{if(g=g[0].match(k3),!g){se.warn("No matches on slow regex match for level playlist!");continue}for(y=1;y<g.length&&!(typeof g[y]<"u");y++);const O=(" "+g[y]).slice(1),V=(" "+g[y+1]).slice(1),_=g[y+2]?(" "+g[y+2]).slice(1):"";switch(O){case"PLAYLIST-TYPE":a.type=V.toUpperCase();break;case"MEDIA-SEQUENCE":d=a.startSN=parseInt(V);break;case"SKIP":{const H=new Rt(V);yn(a,H,["RECENTLY-REMOVED-DATERANGES"]);const I=H.decimalInteger("SKIPPED-SEGMENTS");if($e(I)){a.skippedSegments=I;for(let ie=I;ie--;)l.unshift(null);d+=I}const W=H.enumeratedString("RECENTLY-REMOVED-DATERANGES");W&&(a.recentlyRemovedDateranges=W.split("	"));break}case"TARGETDURATION":a.targetduration=Math.max(parseInt(V),1);break;case"VERSION":a.version=parseInt(V);break;case"INDEPENDENT-SEGMENTS":case"EXTM3U":break;case"ENDLIST":a.live=!1;break;case"#":(V||_)&&m.tagList.push(_?[V,_]:[V]);break;case"DISCONTINUITY":h++,m.tagList.push(["DIS"]);break;case"GAP":m.gap=!0,m.tagList.push([O]);break;case"BITRATE":m.tagList.push([O,V]);break;case"DATERANGE":{const H=new Rt(V);yn(a,H,["ID","CLASS","START-DATE","END-DATE","SCTE35-CMD","SCTE35-OUT","SCTE35-IN"]),yn(a,H,H.clientAttrs);const I=new wy(H,a.dateRanges[H.ID]);I.isValid||a.skippedSegments?a.dateRanges[I.id]=I:se.warn(`Ignoring invalid DATERANGE tag: "${V}"`),m.tagList.push(["EXT-X-DATERANGE",V]);break}case"DEFINE":{{const H=new Rt(V);yn(a,H,["NAME","VALUE","IMPORT","QUERYPARAM"]),"IMPORT"in H?A3(a,H,s):Dp(a,H,t)}break}case"DISCONTINUITY-SEQUENCE":h=parseInt(V);break;case"KEY":{const H=Np(V,t,a);if(H.isSupported()){if(H.method==="NONE"){E=void 0;break}E||(E={}),E[H.keyFormat]&&(E=Ut({},E)),E[H.keyFormat]=H}else se.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${V}"`);break}case"START":a.startTimeOffset=zp(V);break;case"MAP":{const H=new Rt(V);if(yn(a,H,["BYTERANGE","URI"]),m.duration){const I=new Uc(i,t);Hp(I,H,r,E),c=I,m.initSegment=c,c.rawProgramDateTime&&!m.rawProgramDateTime&&(m.rawProgramDateTime=c.rawProgramDateTime)}else{const I=m.byteRangeEndOffset;if(I){const W=m.byteRangeStartOffset;k=`${I-W}@${W}`}else k=null;Hp(m,H,r,E),c=m,C=!0}break}case"SERVER-CONTROL":{const H=new Rt(V);a.canBlockReload=H.bool("CAN-BLOCK-RELOAD"),a.canSkipUntil=H.optionalFloat("CAN-SKIP-UNTIL",0),a.canSkipDateRanges=a.canSkipUntil>0&&H.bool("CAN-SKIP-DATERANGES"),a.partHoldBack=H.optionalFloat("PART-HOLD-BACK",0),a.holdBack=H.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{const H=new Rt(V);a.partTarget=H.decimalFloatingPoint("PART-TARGET");break}case"PART":{let H=a.partList;H||(H=a.partList=[]);const I=u>0?H[H.length-1]:void 0,W=u++,ie=new Rt(V);yn(a,ie,["BYTERANGE","URI"]);const Q=new $_(ie,m,t,W,I);H.push(Q),m.duration+=Q.duration;break}case"PRELOAD-HINT":{const H=new Rt(V);yn(a,H,["URI"]),a.preloadHint=H;break}case"RENDITION-REPORT":{const H=new Rt(V);yn(a,H,["URI"]),a.renditionReports=a.renditionReports||[],a.renditionReports.push(H);break}default:se.warn(`line parsed but not handled: ${g}`);break}}}p&&!p.relurl?(l.pop(),f-=p.duration,a.partList&&(a.fragmentHint=p)):a.partList&&(Up(m,p),m.cc=h,a.fragmentHint=m,E&&Wp(m,E,a));const M=l.length,T=l[0],z=l[M-1];if(f+=a.skippedSegments*a.targetduration,f>0&&M&&z){a.averagetargetduration=f/M;const F=z.sn;a.endSN=F!=="initSegment"?F:0,a.live||(z.endList=!0),T&&(a.startCC=T.cc)}else a.endSN=0,a.startCC=0;return a.fragmentHint&&(f+=a.fragmentHint.duration),a.totalduration=f,a.endCC=h,S>0&&L3(l,S),a}}function Np(n,e,t){var r,i;const o=new Rt(n);yn(t,o,["KEYFORMAT","KEYFORMATVERSIONS","URI","IV","URI"]);const s=(r=o.METHOD)!=null?r:"",a=o.URI,l=o.hexadecimalInteger("IV"),c=o.KEYFORMATVERSIONS,d=(i=o.KEYFORMAT)!=null?i:"identity";a&&o.IV&&!l&&se.error(`Invalid IV: ${o.IV}`);const u=a?or.resolve(a,e):"",f=(c||"1").split("/").map(Number).filter(Number.isFinite);return new Gs(s,u,d,f,l)}function zp(n){const t=new Rt(n).decimalFloatingPoint("TIME-OFFSET");return $e(t)?t:null}function I3(n,e){let t=(n||"").split(/[ ,]+/).filter(r=>r);["video","audio","text"].forEach(r=>{const i=t.filter(o=>E3(o,r));i.length&&(e[`${r}Codec`]=i.join(","),t=t.filter(o=>i.indexOf(o)===-1))}),e.unknownCodecs=t}function $p(n,e,t){const r=e[t];r&&(n[t]=r)}function L3(n,e){let t=n[e];for(let r=e;r--;){const i=n[r];if(!i)return;i.programDateTime=t.programDateTime-i.duration*1e3,t=i}}function Up(n,e){n.rawProgramDateTime?n.programDateTime=Date.parse(n.rawProgramDateTime):e!=null&&e.programDateTime&&(n.programDateTime=e.endProgramDateTime),$e(n.programDateTime)||(n.programDateTime=null,n.rawProgramDateTime=null)}function Hp(n,e,t,r){n.relurl=e.URI,e.BYTERANGE&&n.setByteRange(e.BYTERANGE),n.level=t,n.sn="initSegment",r&&(n.levelkeys=r),n.initSegment=null}function Wp(n,e,t){n.levelkeys=e;const{encryptedFragments:r}=t;(!r.length||r[r.length-1].levelkeys!==e)&&Object.keys(e).some(i=>e[i].isCommonEncryption)&&r.push(n)}var ct={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},Ye={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"};function jp(n){const{type:e}=n;switch(e){case ct.AUDIO_TRACK:return Ye.AUDIO;case ct.SUBTITLE_TRACK:return Ye.SUBTITLE;default:return Ye.MAIN}}function qc(n,e){let t=n.url;return(t===void 0||t.indexOf("data:")===0)&&(t=e.url),t}class R3{constructor(e){this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.hls=e,this.registerListeners()}startLoad(e){}stopLoad(){this.destroyInternalLoaders()}registerListeners(){const{hls:e}=this;e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.LEVEL_LOADING,this.onLevelLoading,this),e.on(P.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(P.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}unregisterListeners(){const{hls:e}=this;e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.LEVEL_LOADING,this.onLevelLoading,this),e.off(P.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(P.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}createInternalLoader(e){const t=this.hls.config,r=t.pLoader,i=t.loader,o=r||i,s=new o(t);return this.loaders[e.type]=s,s}getInternalLoader(e){return this.loaders[e.type]}resetInternalLoader(e){this.loaders[e]&&delete this.loaders[e]}destroyInternalLoaders(){for(const e in this.loaders){const t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}}destroy(){this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()}onManifestLoading(e,t){const{url:r}=t;this.variableList=null,this.load({id:null,level:0,responseType:"text",type:ct.MANIFEST,url:r,deliveryDirectives:null})}onLevelLoading(e,t){const{id:r,level:i,pathwayId:o,url:s,deliveryDirectives:a}=t;this.load({id:r,level:i,pathwayId:o,responseType:"text",type:ct.LEVEL,url:s,deliveryDirectives:a})}onAudioTrackLoading(e,t){const{id:r,groupId:i,url:o,deliveryDirectives:s}=t;this.load({id:r,groupId:i,level:null,responseType:"text",type:ct.AUDIO_TRACK,url:o,deliveryDirectives:s})}onSubtitleTrackLoading(e,t){const{id:r,groupId:i,url:o,deliveryDirectives:s}=t;this.load({id:r,groupId:i,level:null,responseType:"text",type:ct.SUBTITLE_TRACK,url:o,deliveryDirectives:s})}load(e){var t;const r=this.hls.config;let i=this.getInternalLoader(e);if(i){const c=i.context;if(c&&c.url===e.url&&c.level===e.level){se.trace("[playlist-loader]: playlist request ongoing");return}se.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`),i.abort()}let o;if(e.type===ct.MANIFEST?o=r.manifestLoadPolicy.default:o=Ut({},r.playlistLoadPolicy.default,{timeoutRetry:null,errorRetry:null}),i=this.createInternalLoader(e),$e((t=e.deliveryDirectives)==null?void 0:t.part)){let c;if(e.type===ct.LEVEL&&e.level!==null?c=this.hls.levels[e.level].details:e.type===ct.AUDIO_TRACK&&e.id!==null?c=this.hls.audioTracks[e.id].details:e.type===ct.SUBTITLE_TRACK&&e.id!==null&&(c=this.hls.subtitleTracks[e.id].details),c){const d=c.partTarget,u=c.targetduration;if(d&&u){const f=Math.max(d*3,u*.8)*1e3;o=Ut({},o,{maxTimeToFirstByteMs:Math.min(f,o.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(f,o.maxTimeToFirstByteMs)})}}}const s=o.errorRetry||o.timeoutRetry||{},a={loadPolicy:o,timeout:o.maxLoadTimeMs,maxRetry:s.maxNumRetry||0,retryDelay:s.retryDelayMs||0,maxRetryDelay:s.maxRetryDelayMs||0},l={onSuccess:(c,d,u,f)=>{const h=this.getInternalLoader(u);this.resetInternalLoader(u.type);const p=c.data;if(p.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(c,u,new Error("no EXTM3U delimiter"),f||null,d);return}d.parsing.start=performance.now(),or.isMediaPlaylist(p)?this.handleTrackOrLevelPlaylist(c,d,u,f||null,h):this.handleMasterPlaylist(c,d,u,f)},onError:(c,d,u,f)=>{this.handleNetworkError(d,u,!1,c,f)},onTimeout:(c,d,u)=>{this.handleNetworkError(d,u,!0,void 0,c)}};i.load(e,a,l)}handleMasterPlaylist(e,t,r,i){const o=this.hls,s=e.data,a=qc(e,r),l=or.parseMasterPlaylist(s,a);if(l.playlistParsingError){this.handleManifestParsingError(e,r,l.playlistParsingError,i,t);return}const{contentSteering:c,levels:d,sessionData:u,sessionKeys:f,startTimeOffset:h,variableList:p}=l;this.variableList=p;const{AUDIO:m=[],SUBTITLES:g,"CLOSED-CAPTIONS":y}=or.parseMasterPlaylistMedia(s,a,l);m.length&&!m.some(S=>!S.url)&&d[0].audioCodec&&!d[0].attrs.AUDIO&&(se.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),m.unshift({type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new Rt({}),bitrate:0,url:""})),o.trigger(P.MANIFEST_LOADED,{levels:d,audioTracks:m,subtitles:g,captions:y,contentSteering:c,url:a,stats:t,networkDetails:i,sessionData:u,sessionKeys:f,startTimeOffset:h,variableList:p})}handleTrackOrLevelPlaylist(e,t,r,i,o){const s=this.hls,{id:a,level:l,type:c}=r,d=qc(e,r),u=0,f=$e(l)?l:$e(a)?a:0,h=jp(r),p=or.parseLevelPlaylist(e.data,d,f,h,u,this.variableList);if(c===ct.MANIFEST){const m={attrs:new Rt({}),bitrate:0,details:p,name:"",url:d};s.trigger(P.MANIFEST_LOADED,{levels:[m],audioTracks:[],url:d,stats:t,networkDetails:i,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null})}t.parsing.end=performance.now(),r.levelDetails=p,this.handlePlaylistLoaded(p,e,t,r,i,o)}handleManifestParsingError(e,t,r,i,o){this.hls.trigger(P.ERROR,{type:Ze.NETWORK_ERROR,details:be.MANIFEST_PARSING_ERROR,fatal:t.type===ct.MANIFEST,url:e.url,err:r,error:r,reason:r.message,response:e,context:t,networkDetails:i,stats:o})}handleNetworkError(e,t,r=!1,i,o){let s=`A network ${r?"timeout":"error"+(i?" (status "+i.code+")":"")} occurred while loading ${e.type}`;e.type===ct.LEVEL?s+=`: ${e.level} id: ${e.id}`:(e.type===ct.AUDIO_TRACK||e.type===ct.SUBTITLE_TRACK)&&(s+=` id: ${e.id} group-id: "${e.groupId}"`);const a=new Error(s);se.warn(`[playlist-loader]: ${s}`);let l=be.UNKNOWN,c=!1;const d=this.getInternalLoader(e);switch(e.type){case ct.MANIFEST:l=r?be.MANIFEST_LOAD_TIMEOUT:be.MANIFEST_LOAD_ERROR,c=!0;break;case ct.LEVEL:l=r?be.LEVEL_LOAD_TIMEOUT:be.LEVEL_LOAD_ERROR,c=!1;break;case ct.AUDIO_TRACK:l=r?be.AUDIO_TRACK_LOAD_TIMEOUT:be.AUDIO_TRACK_LOAD_ERROR,c=!1;break;case ct.SUBTITLE_TRACK:l=r?be.SUBTITLE_TRACK_LOAD_TIMEOUT:be.SUBTITLE_LOAD_ERROR,c=!1;break}d&&this.resetInternalLoader(e.type);const u={type:Ze.NETWORK_ERROR,details:l,fatal:c,url:e.url,loader:d,context:e,error:a,networkDetails:t,stats:o};if(i){const f=(t==null?void 0:t.url)||e.url;u.response=en({url:f,data:void 0},i)}this.hls.trigger(P.ERROR,u)}handlePlaylistLoaded(e,t,r,i,o,s){const a=this.hls,{type:l,level:c,id:d,groupId:u,deliveryDirectives:f}=i,h=qc(t,i),p=jp(i),m=typeof i.level=="number"&&p===Ye.MAIN?c:void 0;if(!e.fragments.length){const y=new Error("No Segments found in Playlist");a.trigger(P.ERROR,{type:Ze.NETWORK_ERROR,details:be.LEVEL_EMPTY_ERROR,fatal:!1,url:h,error:y,reason:y.message,response:t,context:i,level:m,parent:p,networkDetails:o,stats:r});return}e.targetduration||(e.playlistParsingError=new Error("Missing Target Duration"));const g=e.playlistParsingError;if(g){a.trigger(P.ERROR,{type:Ze.NETWORK_ERROR,details:be.LEVEL_PARSING_ERROR,fatal:!1,url:h,error:g,reason:g.message,response:t,context:i,level:m,parent:p,networkDetails:o,stats:r});return}switch(e.live&&s&&(s.getCacheAge&&(e.ageHeader=s.getCacheAge()||0),(!s.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),l){case ct.MANIFEST:case ct.LEVEL:a.trigger(P.LEVEL_LOADED,{details:e,level:m||0,id:d||0,stats:r,networkDetails:o,deliveryDirectives:f});break;case ct.AUDIO_TRACK:a.trigger(P.AUDIO_TRACK_LOADED,{details:e,id:d||0,groupId:u||"",stats:r,networkDetails:o,deliveryDirectives:f});break;case ct.SUBTITLE_TRACK:a.trigger(P.SUBTITLE_TRACK_LOADED,{details:e,id:d||0,groupId:u||"",stats:r,networkDetails:o,deliveryDirectives:f});break}}}function Ny(n,e){let t;try{t=new Event("addtrack")}catch{t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}t.track=n,e.dispatchEvent(t)}function zy(n,e){const t=n.mode;if(t==="disabled"&&(n.mode="hidden"),n.cues&&!n.cues.getCueById(e.id))try{if(n.addCue(e),!n.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)}catch(r){se.debug(`[texttrack-utils]: ${r}`);try{const i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,n.addCue(i)}catch(i){se.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`)}}t==="disabled"&&(n.mode=t)}function lo(n){const e=n.mode;if(e==="disabled"&&(n.mode="hidden"),n.cues)for(let t=n.cues.length;t--;)n.removeCue(n.cues[t]);e==="disabled"&&(n.mode=e)}function Kd(n,e,t,r){const i=n.mode;if(i==="disabled"&&(n.mode="hidden"),n.cues&&n.cues.length>0){const o=D3(n.cues,e,t);for(let s=0;s<o.length;s++)(!r||r(o[s]))&&n.removeCue(o[s])}i==="disabled"&&(n.mode=i)}function _3(n,e){if(e<n[0].startTime)return 0;const t=n.length-1;if(e>n[t].endTime)return-1;let r=0,i=t;for(;r<=i;){const o=Math.floor((i+r)/2);if(e<n[o].startTime)i=o-1;else if(e>n[o].startTime&&r<t)r=o+1;else return o}return n[r].startTime-e<e-n[i].startTime?r:i}function D3(n,e,t){const r=[],i=_3(n,e);if(i>-1)for(let o=i,s=n.length;o<s;o++){const a=n[o];if(a.startTime>=e&&a.endTime<=t)r.push(a);else if(a.startTime>t)return r}return r}function Xa(n){const e=[];for(let t=0;t<n.length;t++){const r=n[t];(r.kind==="subtitles"||r.kind==="captions")&&r.label&&e.push(n[t])}return e}var Wn={audioId3:"org.id3",dateRange:"com.apple.quicktime.HLS",emsg:"https://aomedia.org/emsg/ID3"};const P3=.25;function Vd(){if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue}function Gp(n,e,t,r,i){let o=new n(e,t,"");try{o.value=r,i&&(o.type=i)}catch{o=new n(e,t,JSON.stringify(i?en({type:i},r):r))}return o}const Ba=(()=>{const n=Vd();try{n&&new n(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY})();function Yc(n,e){return n.getTime()/1e3-e}function B3(n){return Uint8Array.from(n.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}class O3{constructor(e){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=e,this._registerListeners()}destroy(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null}_registerListeners(){const{hls:e}=this;e.on(P.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(P.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(P.LEVEL_UPDATED,this.onLevelUpdated,this)}_unregisterListeners(){const{hls:e}=this;e.off(P.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(P.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(P.LEVEL_UPDATED,this.onLevelUpdated,this)}onMediaAttached(e,t){this.media=t.media}onMediaDetaching(){this.id3Track&&(lo(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})}onManifestLoading(){this.dateRangeCuesAppended={}}createTrack(e){const t=this.getID3Track(e.textTracks);return t.mode="hidden",t}getID3Track(e){if(this.media){for(let t=0;t<e.length;t++){const r=e[t];if(r.kind==="metadata"&&r.label==="id3")return Ny(r,this.media),r}return this.media.addTextTrack("metadata","id3")}}onFragParsingMetadata(e,t){if(!this.media)return;const{hls:{config:{enableEmsgMetadataCues:r,enableID3MetadataCues:i}}}=this;if(!r&&!i)return;const{samples:o}=t;this.id3Track||(this.id3Track=this.createTrack(this.media));const s=Vd();if(s)for(let a=0;a<o.length;a++){const l=o[a].type;if(l===Wn.emsg&&!r||!i)continue;const c=Iy(o[a].data);if(c){const d=o[a].pts;let u=d+o[a].duration;u>Ba&&(u=Ba),u-d<=0&&(u=d+P3);for(let h=0;h<c.length;h++){const p=c[h];if(!ky(p)){this.updateId3CueEnds(d,l);const m=Gp(s,d,u,p,l);m&&this.id3Track.addCue(m)}}}}}updateId3CueEnds(e,t){var r;const i=(r=this.id3Track)==null?void 0:r.cues;if(i)for(let o=i.length;o--;){const s=i[o];s.type===t&&s.startTime<e&&s.endTime===Ba&&(s.endTime=e)}}onBufferFlushing(e,{startOffset:t,endOffset:r,type:i}){const{id3Track:o,hls:s}=this;if(!s)return;const{config:{enableEmsgMetadataCues:a,enableID3MetadataCues:l}}=s;if(o&&(a||l)){let c;i==="audio"?c=d=>d.type===Wn.audioId3&&l:i==="video"?c=d=>d.type===Wn.emsg&&a:c=d=>d.type===Wn.audioId3&&l||d.type===Wn.emsg&&a,Kd(o,t,r,c)}}onLevelUpdated(e,{details:t}){if(!this.media||!t.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)return;const{dateRangeCuesAppended:r,id3Track:i}=this,{dateRanges:o}=t,s=Object.keys(o);if(i){const d=Object.keys(r).filter(u=>!s.includes(u));for(let u=d.length;u--;){const f=d[u];Object.keys(r[f].cues).forEach(h=>{i.removeCue(r[f].cues[h])}),delete r[f]}}const a=t.fragments[t.fragments.length-1];if(s.length===0||!$e(a==null?void 0:a.programDateTime))return;this.id3Track||(this.id3Track=this.createTrack(this.media));const l=a.programDateTime/1e3-a.start,c=Vd();for(let d=0;d<s.length;d++){const u=s[d],f=o[u],h=Yc(f.startDate,l),p=r[u],m=(p==null?void 0:p.cues)||{};let g=(p==null?void 0:p.durationKnown)||!1,y=Ba;const E=f.endDate;if(E)y=Yc(E,l),g=!0;else if(f.endOnNext&&!g){const C=s.reduce((k,M)=>{if(M!==f.id){const T=o[M];if(T.class===f.class&&T.startDate>f.startDate&&(!k||f.startDate<k.startDate))return T}return k},null);C&&(y=Yc(C.startDate,l),g=!0)}const S=Object.keys(f.attr);for(let C=0;C<S.length;C++){const k=S[C];if(!N_(k))continue;const M=m[k];if(M)g&&!p.durationKnown&&(M.endTime=y);else if(c){let T=f.attr[k];z_(k)&&(T=B3(T));const z=Gp(c,h,y,{key:k,data:T},Wn.dateRange);z&&(z.id=u,this.id3Track.addCue(z),m[k]=z)}}r[u]={cues:m,dateRange:f,durationKnown:g}}}}class F3{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=()=>this.timeupdate(),this.hls=e,this.config=e.config,this.registerListeners()}get latency(){return this._latency||0}get maxLatency(){const{config:e,levelDetails:t}=this;return e.liveMaxLatencyDuration!==void 0?e.liveMaxLatencyDuration:t?e.liveMaxLatencyDurationCount*t.targetduration:0}get targetLatency(){const{levelDetails:e}=this;if(e===null)return null;const{holdBack:t,partHoldBack:r,targetduration:i}=e,{liveSyncDuration:o,liveSyncDurationCount:s,lowLatencyMode:a}=this.config,l=this.hls.userConfig;let c=a&&r||t;(l.liveSyncDuration||l.liveSyncDurationCount||c===0)&&(c=o!==void 0?o:s*i);const d=i,u=1;return c+Math.min(this.stallCount*u,d)}get liveSyncPosition(){const e=this.estimateLiveEdge(),t=this.targetLatency,r=this.levelDetails;if(e===null||t===null||r===null)return null;const i=r.edge,o=e-t-this.edgeStalled,s=i-r.totalduration,a=i-(this.config.lowLatencyMode&&r.partTarget||r.targetduration);return Math.min(Math.max(s,o),a)}get drift(){const{levelDetails:e}=this;return e===null?1:e.drift}get edgeStalled(){const{levelDetails:e}=this;if(e===null)return 0;const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;return Math.max(e.age-t,0)}get forwardBufferLength(){const{media:e,levelDetails:t}=this;if(!e||!t)return 0;const r=e.buffered.length;return(r?e.buffered.end(r-1):t.edge)-this.currentTime}destroy(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null}registerListeners(){this.hls.on(P.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(P.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(P.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(P.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(P.ERROR,this.onError,this)}unregisterListeners(){this.hls.off(P.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(P.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.off(P.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(P.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.off(P.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)}onMediaDetaching(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)}onManifestLoading(){this.levelDetails=null,this._latency=null,this.stallCount=0}onLevelUpdated(e,{details:t}){this.levelDetails=t,t.advanced&&this.timeupdate(),!t.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)}onError(e,t){var r;t.details===be.BUFFER_STALLED_ERROR&&(this.stallCount++,(r=this.levelDetails)!=null&&r.live&&se.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))}timeupdate(){const{media:e,levelDetails:t}=this;if(!e||!t)return;this.currentTime=e.currentTime;const r=this.computeLatency();if(r===null)return;this._latency=r;const{lowLatencyMode:i,maxLiveSyncPlaybackRate:o}=this.config;if(!i||o===1||!t.live)return;const s=this.targetLatency;if(s===null)return;const a=r-s,l=Math.min(this.maxLatency,s+t.targetduration);if(a<l&&a>.05&&this.forwardBufferLength>1){const d=Math.min(2,Math.max(1,o)),u=Math.round(2/(1+Math.exp(-.75*a-this.edgeStalled))*20)/20;e.playbackRate=Math.min(d,Math.max(1,u))}else e.playbackRate!==1&&e.playbackRate!==0&&(e.playbackRate=1)}estimateLiveEdge(){const{levelDetails:e}=this;return e===null?null:e.edge+e.age}computeLatency(){const e=this.estimateLiveEdge();return e===null?null:e-this.currentTime}}const qd=["NONE","TYPE-0","TYPE-1",null];function M3(n){return qd.indexOf(n)>-1}const Il=["SDR","PQ","HLG"];function N3(n){return!!n&&Il.indexOf(n)>-1}var Za={No:"",Yes:"YES",v2:"v2"};function Kp(n){const{canSkipUntil:e,canSkipDateRanges:t,age:r}=n,i=r<e/2;return e&&i?t?Za.v2:Za.Yes:Za.No}class Vp{constructor(e,t,r){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=r}addDirectives(e){const t=new self.URL(e);return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}}class ko{constructor(e){this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.url=void 0,this.frameRate=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.supportedPromise=void 0,this.supportedResult=void 0,this._avgBitrate=0,this._audioGroups=void 0,this._subtitleGroups=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.frameRate=e.attrs.optionalFloat("FRAME-RATE",0),this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"),this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.codecSet=[e.videoCodec,e.audioCodec].filter(t=>!!t).map(t=>t.substring(0,4)).join(","),this.addGroupId("audio",e.attrs.AUDIO),this.addGroupId("text",e.attrs.SUBTITLES)}get maxBitrate(){return Math.max(this.realBitrate,this.bitrate)}get averageBitrate(){return this._avgBitrate||this.realBitrate||this.bitrate}get attrs(){return this._attrs[0]}get codecs(){return this.attrs.CODECS||""}get pathwayId(){return this.attrs["PATHWAY-ID"]||"."}get videoRange(){return this.attrs["VIDEO-RANGE"]||"SDR"}get score(){return this.attrs.optionalFloat("SCORE",0)}get uri(){return this.url[0]||""}hasAudioGroup(e){return qp(this._audioGroups,e)}hasSubtitleGroup(e){return qp(this._subtitleGroups,e)}get audioGroups(){return this._audioGroups}get subtitleGroups(){return this._subtitleGroups}addGroupId(e,t){if(t){if(e==="audio"){let r=this._audioGroups;r||(r=this._audioGroups=[]),r.indexOf(t)===-1&&r.push(t)}else if(e==="text"){let r=this._subtitleGroups;r||(r=this._subtitleGroups=[]),r.indexOf(t)===-1&&r.push(t)}}}get urlId(){return 0}set urlId(e){}get audioGroupIds(){return this.audioGroups?[this.audioGroupId]:void 0}get textGroupIds(){return this.subtitleGroups?[this.textGroupId]:void 0}get audioGroupId(){var e;return(e=this.audioGroups)==null?void 0:e[0]}get textGroupId(){var e;return(e=this.subtitleGroups)==null?void 0:e[0]}addFallback(){}}function qp(n,e){return!e||!n?!1:n.indexOf(e)!==-1}function Xc(n,e){const t=e.startPTS;if($e(t)){let r=0,i;e.sn>n.sn?(r=t-n.start,i=n):(r=n.start-t,i=e),i.duration!==r&&(i.duration=r)}else e.sn>n.sn?n.cc===e.cc&&n.minEndPTS?e.start=n.start+(n.minEndPTS-n.start):e.start=n.start+n.duration:e.start=Math.max(n.start-e.duration,0)}function $y(n,e,t,r,i,o){r-t<=0&&(se.warn("Fragment should have a positive duration",e),r=t+e.duration,o=i+e.duration);let a=t,l=r;const c=e.startPTS,d=e.endPTS;if($e(c)){const g=Math.abs(c-t);$e(e.deltaPTS)?e.deltaPTS=Math.max(g,e.deltaPTS):e.deltaPTS=g,a=Math.max(t,c),t=Math.min(t,c),i=Math.min(i,e.startDTS),l=Math.min(r,d),r=Math.max(r,d),o=Math.max(o,e.endDTS)}const u=t-e.start;e.start!==0&&(e.start=t),e.duration=r-e.start,e.startPTS=t,e.maxStartPTS=a,e.startDTS=i,e.endPTS=r,e.minEndPTS=l,e.endDTS=o;const f=e.sn;if(!n||f<n.startSN||f>n.endSN)return 0;let h;const p=f-n.startSN,m=n.fragments;for(m[p]=e,h=p;h>0;h--)Xc(m[h],m[h-1]);for(h=p;h<m.length-1;h++)Xc(m[h],m[h+1]);return n.fragmentHint&&Xc(m[m.length-1],n.fragmentHint),n.PTSKnown=n.alignedSliding=!0,u}function z3(n,e){let t=null;const r=n.fragments;for(let l=r.length-1;l>=0;l--){const c=r[l].initSegment;if(c){t=c;break}}n.fragmentHint&&delete n.fragmentHint.endPTS;let i=0,o;if(H3(n,e,(l,c)=>{l.relurl&&(i=l.cc-c.cc),$e(l.startPTS)&&$e(l.endPTS)&&(c.start=c.startPTS=l.startPTS,c.startDTS=l.startDTS,c.maxStartPTS=l.maxStartPTS,c.endPTS=l.endPTS,c.endDTS=l.endDTS,c.minEndPTS=l.minEndPTS,c.duration=l.endPTS-l.startPTS,c.duration&&(o=c),e.PTSKnown=e.alignedSliding=!0),c.elementaryStreams=l.elementaryStreams,c.loader=l.loader,c.stats=l.stats,l.initSegment&&(c.initSegment=l.initSegment,t=l.initSegment)}),t&&(e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments).forEach(c=>{var d;c&&(!c.initSegment||c.initSegment.relurl===((d=t)==null?void 0:d.relurl))&&(c.initSegment=t)}),e.skippedSegments)if(e.deltaUpdateFailed=e.fragments.some(l=>!l),e.deltaUpdateFailed){se.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(let l=e.skippedSegments;l--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}else e.canSkipDateRanges&&(e.dateRanges=$3(n.dateRanges,e.dateRanges,e.recentlyRemovedDateranges));const s=e.fragments;if(i){se.warn("discontinuity sliding from playlist, take drift into account");for(let l=0;l<s.length;l++)s[l].cc+=i}e.skippedSegments&&(e.startCC=e.fragments[0].cc),U3(n.partList,e.partList,(l,c)=>{c.elementaryStreams=l.elementaryStreams,c.stats=l.stats}),o?$y(e,o,o.startPTS,o.endPTS,o.startDTS,o.endDTS):Uy(n,e),s.length&&(e.totalduration=e.edge-s[0].start),e.driftStartTime=n.driftStartTime,e.driftStart=n.driftStart;const a=e.advancedDateTime;if(e.advanced&&a){const l=e.edge;e.driftStart||(e.driftStartTime=a,e.driftStart=l),e.driftEndTime=a,e.driftEnd=l}else e.driftEndTime=n.driftEndTime,e.driftEnd=n.driftEnd,e.advancedDateTime=n.advancedDateTime}function $3(n,e,t){const r=Ut({},n);return t&&t.forEach(i=>{delete r[i]}),Object.keys(e).forEach(i=>{const o=new wy(e[i].attr,r[i]);o.isValid?r[i]=o:se.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[i].attr)}"`)}),r}function U3(n,e,t){if(n&&e){let r=0;for(let i=0,o=n.length;i<=o;i++){const s=n[i],a=e[i+r];s&&a&&s.index===a.index&&s.fragment.sn===a.fragment.sn?t(s,a):r--}}}function H3(n,e,t){const r=e.skippedSegments,i=Math.max(n.startSN,e.startSN)-e.startSN,o=(n.fragmentHint?1:0)+(r?e.endSN:Math.min(n.endSN,e.endSN))-e.startSN,s=e.startSN-n.startSN,a=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=n.fragmentHint?n.fragments.concat(n.fragmentHint):n.fragments;for(let c=i;c<=o;c++){const d=l[s+c];let u=a[c];r&&!u&&c<r&&(u=e.fragments[c]=d),d&&u&&t(d,u)}}function Uy(n,e){const t=e.startSN+e.skippedSegments-n.startSN,r=n.fragments;t<0||t>=r.length||Yd(e,r[t].start)}function Yd(n,e){if(e){const t=n.fragments;for(let r=n.skippedSegments;r<t.length;r++)t[r].start+=e;n.fragmentHint&&(n.fragmentHint.start+=e)}}function W3(n,e=1/0){let t=1e3*n.targetduration;if(n.updated){const r=n.fragments,i=4;if(r.length&&t*i>e){const o=r[r.length-1].duration*1e3;o<t&&(t=o)}}else t/=2;return Math.round(t)}function j3(n,e,t){if(!(n!=null&&n.details))return null;const r=n.details;let i=r.fragments[e-r.startSN];return i||(i=r.fragmentHint,i&&i.sn===e)?i:e<r.startSN&&t&&t.sn===e?t:null}function Yp(n,e,t){var r;return n!=null&&n.details?Hy((r=n.details)==null?void 0:r.partList,e,t):null}function Hy(n,e,t){if(n)for(let r=n.length;r--;){const i=n[r];if(i.index===t&&i.fragment.sn===e)return i}return null}function Wy(n){n.forEach((e,t)=>{const{details:r}=e;r!=null&&r.fragments&&r.fragments.forEach(i=>{i.level=t})})}function Ll(n){switch(n.details){case be.FRAG_LOAD_TIMEOUT:case be.KEY_LOAD_TIMEOUT:case be.LEVEL_LOAD_TIMEOUT:case be.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function Xp(n,e){const t=Ll(e);return n.default[`${t?"timeout":"error"}Retry`]}function cf(n,e){const t=n.backoff==="linear"?1:Math.pow(2,e);return Math.min(t*n.retryDelayMs,n.maxRetryDelayMs)}function Zp(n){return en(en({},n),{errorRetry:null,timeoutRetry:null})}function Rl(n,e,t,r){if(!n)return!1;const i=r==null?void 0:r.code,o=e<n.maxNumRetry&&(G3(i)||!!t);return n.shouldRetry?n.shouldRetry(n,e,t,r,o):o}function G3(n){return n===0&&navigator.onLine===!1||!!n&&(n<400||n>499)}const jy={search:function(n,e){let t=0,r=n.length-1,i=null,o=null;for(;t<=r;){i=(t+r)/2|0,o=n[i];const s=e(o);if(s>0)t=i+1;else if(s<0)r=i-1;else return o}return null}};function K3(n,e,t){if(e===null||!Array.isArray(n)||!n.length||!$e(e))return null;const r=n[0].programDateTime;if(e<(r||0))return null;const i=n[n.length-1].endProgramDateTime;if(e>=(i||0))return null;t=t||0;for(let o=0;o<n.length;++o){const s=n[o];if(q3(e,t,s))return s}return null}function _l(n,e,t=0,r=0,i=.005){let o=null;if(n){o=e[n.sn-e[0].sn+1]||null;const a=n.endDTS-t;a>0&&a<15e-7&&(t+=15e-7)}else t===0&&e[0].start===0&&(o=e[0]);if(o&&((!n||n.level===o.level)&&Xd(t,r,o)===0||V3(o,n,Math.min(i,r))))return o;const s=jy.search(e,Xd.bind(null,t,r));return s&&(s!==n||!o)?s:o}function V3(n,e,t){if(e&&e.start===0&&e.level<n.level&&(e.endPTS||0)>0){const r=e.tagList.reduce((i,o)=>(o[0]==="INF"&&(i+=parseFloat(o[1])),i),t);return n.start<=r}return!1}function Xd(n=0,e=0,t){if(t.start<=n&&t.start+t.duration>n)return 0;const r=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-r<=n?1:t.start-r>n&&t.start?-1:0}function q3(n,e,t){const r=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;return(t.endProgramDateTime||0)-r>n}function Y3(n,e){return jy.search(n,t=>t.cc<e?1:t.cc>e?-1:0)}var tn={DoNothing:0,SendEndCallback:1,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,InsertDiscontinuity:4,RetryRequest:5},$n={None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2,SwitchToSDR:4};class X3{constructor(e){this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.log=void 0,this.warn=void 0,this.error=void 0,this.hls=e,this.log=se.log.bind(se,"[info]:"),this.warn=se.warn.bind(se,"[warning]:"),this.error=se.error.bind(se,"[error]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(P.ERROR,this.onError,this),e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.LEVEL_UPDATED,this.onLevelUpdated,this)}unregisterListeners(){const e=this.hls;e&&(e.off(P.ERROR,this.onError,this),e.off(P.ERROR,this.onErrorOut,this),e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.LEVEL_UPDATED,this.onLevelUpdated,this))}destroy(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}}startLoad(e){}stopLoad(){this.playlistError=0}getVariantLevelIndex(e){return(e==null?void 0:e.type)===Ye.MAIN?e.level:this.hls.loadLevel}onManifestLoading(){this.playlistError=0,this.penalizedRenditions={}}onLevelUpdated(){this.playlistError=0}onError(e,t){var r,i;if(t.fatal)return;const o=this.hls,s=t.context;switch(t.details){case be.FRAG_LOAD_ERROR:case be.FRAG_LOAD_TIMEOUT:case be.KEY_LOAD_ERROR:case be.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);return;case be.FRAG_PARSING_ERROR:if((r=t.frag)!=null&&r.gap){t.errorAction={action:tn.DoNothing,flags:$n.None};return}case be.FRAG_GAP:case be.FRAG_DECRYPT_ERROR:{t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=tn.SendAlternateToPenaltyBox;return}case be.LEVEL_EMPTY_ERROR:case be.LEVEL_PARSING_ERROR:{var a,l;const c=t.parent===Ye.MAIN?t.level:o.loadLevel;t.details===be.LEVEL_EMPTY_ERROR&&((a=t.context)!=null&&(l=a.levelDetails)!=null&&l.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,c):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,c))}return;case be.LEVEL_LOAD_ERROR:case be.LEVEL_LOAD_TIMEOUT:typeof(s==null?void 0:s.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,s.level));return;case be.AUDIO_TRACK_LOAD_ERROR:case be.AUDIO_TRACK_LOAD_TIMEOUT:case be.SUBTITLE_LOAD_ERROR:case be.SUBTITLE_TRACK_LOAD_TIMEOUT:if(s){const c=o.levels[o.loadLevel];if(c&&(s.type===ct.AUDIO_TRACK&&c.hasAudioGroup(s.groupId)||s.type===ct.SUBTITLE_TRACK&&c.hasSubtitleGroup(s.groupId))){t.errorAction=this.getPlaylistRetryOrSwitchAction(t,o.loadLevel),t.errorAction.action=tn.SendAlternateToPenaltyBox,t.errorAction.flags=$n.MoveAllAlternatesMatchingHost;return}}return;case be.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{const c=o.levels[o.loadLevel],d=c==null?void 0:c.attrs["HDCP-LEVEL"];d?t.errorAction={action:tn.SendAlternateToPenaltyBox,flags:$n.MoveAllAlternatesMatchingHDCP,hdcpLevel:d}:this.keySystemError(t)}return;case be.BUFFER_ADD_CODEC_ERROR:case be.REMUX_ALLOC_ERROR:case be.BUFFER_APPEND_ERROR:t.errorAction=this.getLevelSwitchAction(t,(i=t.level)!=null?i:o.loadLevel);return;case be.INTERNAL_EXCEPTION:case be.BUFFER_APPENDING_ERROR:case be.BUFFER_FULL_ERROR:case be.LEVEL_SWITCH_ERROR:case be.BUFFER_STALLED_ERROR:case be.BUFFER_SEEK_OVER_HOLE:case be.BUFFER_NUDGE_ON_STALL:t.errorAction={action:tn.DoNothing,flags:$n.None};return}t.type===Ze.KEY_SYSTEM_ERROR&&this.keySystemError(t)}keySystemError(e){const t=this.getVariantLevelIndex(e.frag);e.levelRetry=!1,e.errorAction=this.getLevelSwitchAction(e,t)}getPlaylistRetryOrSwitchAction(e,t){const r=this.hls,i=Xp(r.config.playlistLoadPolicy,e),o=this.playlistError++;if(Rl(i,o,Ll(e),e.response))return{action:tn.RetryRequest,flags:$n.None,retryConfig:i,retryCount:o};const a=this.getLevelSwitchAction(e,t);return i&&(a.retryConfig=i,a.retryCount=o),a}getFragRetryOrSwitchAction(e){const t=this.hls,r=this.getVariantLevelIndex(e.frag),i=t.levels[r],{fragLoadPolicy:o,keyLoadPolicy:s}=t.config,a=Xp(e.details.startsWith("key")?s:o,e),l=t.levels.reduce((d,u)=>d+u.fragmentError,0);if(i&&(e.details!==be.FRAG_GAP&&i.fragmentError++,Rl(a,l,Ll(e),e.response)))return{action:tn.RetryRequest,flags:$n.None,retryConfig:a,retryCount:l};const c=this.getLevelSwitchAction(e,r);return a&&(c.retryConfig=a,c.retryCount=l),c}getLevelSwitchAction(e,t){const r=this.hls;t==null&&(t=r.loadLevel);const i=this.hls.levels[t];if(i){var o,s;const c=e.details;i.loadError++,c===be.BUFFER_APPEND_ERROR&&i.fragmentError++;let d=-1;const{levels:u,loadLevel:f,minAutoLevel:h,maxAutoLevel:p}=r;r.autoLevelEnabled||(r.loadLevel=-1);const m=(o=e.frag)==null?void 0:o.type,y=(m===Ye.AUDIO&&c===be.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(c===be.BUFFER_ADD_CODEC_ERROR||c===be.BUFFER_APPEND_ERROR))&&u.some(({audioCodec:M})=>i.audioCodec!==M),S=e.sourceBufferName==="video"&&(c===be.BUFFER_ADD_CODEC_ERROR||c===be.BUFFER_APPEND_ERROR)&&u.some(({codecSet:M,audioCodec:T})=>i.codecSet!==M&&i.audioCodec===T),{type:C,groupId:k}=(s=e.context)!=null?s:{};for(let M=u.length;M--;){const T=(M+f)%u.length;if(T!==f&&T>=h&&T<=p&&u[T].loadError===0){var a,l;const z=u[T];if(c===be.FRAG_GAP&&m===Ye.MAIN&&e.frag){const F=u[T].details;if(F){const O=_l(e.frag,F.fragments,e.frag.start);if(O!=null&&O.gap)continue}}else{if(C===ct.AUDIO_TRACK&&z.hasAudioGroup(k)||C===ct.SUBTITLE_TRACK&&z.hasSubtitleGroup(k))continue;if(m===Ye.AUDIO&&(a=i.audioGroups)!=null&&a.some(F=>z.hasAudioGroup(F))||m===Ye.SUBTITLE&&(l=i.subtitleGroups)!=null&&l.some(F=>z.hasSubtitleGroup(F))||y&&i.audioCodec===z.audioCodec||!y&&i.audioCodec!==z.audioCodec||S&&i.codecSet===z.codecSet)continue}d=T;break}}if(d>-1&&r.loadLevel!==d)return e.levelRetry=!0,this.playlistError=0,{action:tn.SendAlternateToPenaltyBox,flags:$n.None,nextAutoLevel:d}}return{action:tn.SendAlternateToPenaltyBox,flags:$n.MoveAllAlternatesMatchingHost}}onErrorOut(e,t){var r;switch((r=t.errorAction)==null?void 0:r.action){case tn.DoNothing:break;case tn.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==be.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)&&(this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`),this.hls.recoverMediaError());break}if(t.fatal){this.hls.stopLoad();return}}sendAlternateToPenaltyBox(e){const t=this.hls,r=e.errorAction;if(!r)return;const{flags:i,hdcpLevel:o,nextAutoLevel:s}=r;switch(i){case $n.None:this.switchLevel(e,s);break;case $n.MoveAllAlternatesMatchingHDCP:o&&(t.maxHdcpLevel=qd[qd.indexOf(o)-1],r.resolved=!0),this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);break}r.resolved||this.switchLevel(e,s)}switchLevel(e,t){t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel)}}class df{constructor(e,t){this.hls=void 0,this.timer=-1,this.requestScheduled=-1,this.canLoad=!1,this.log=void 0,this.warn=void 0,this.log=se.log.bind(se,`${t}:`),this.warn=se.warn.bind(se,`${t}:`),this.hls=e}destroy(){this.clearTimer(),this.hls=this.log=this.warn=null}clearTimer(){this.timer!==-1&&(self.clearTimeout(this.timer),this.timer=-1)}startLoad(){this.canLoad=!0,this.requestScheduled=-1,this.loadPlaylist()}stopLoad(){this.canLoad=!1,this.clearTimer()}switchParams(e,t,r){const i=t==null?void 0:t.renditionReports;if(i){let o=-1;for(let s=0;s<i.length;s++){const a=i[s];let l;try{l=new self.URL(a.URI,t.url).href}catch(c){se.warn(`Could not construct new URL for Rendition Report: ${c}`),l=a.URI||""}if(l===e){o=s;break}else l===e.substring(0,l.length)&&(o=s)}if(o!==-1){const s=i[o],a=parseInt(s["LAST-MSN"])||(t==null?void 0:t.lastPartSn);let l=parseInt(s["LAST-PART"])||(t==null?void 0:t.lastPartIndex);if(this.hls.config.lowLatencyMode){const d=Math.min(t.age-t.partTarget,t.targetduration);l>=0&&d>t.partTarget&&(l+=1)}const c=r&&Kp(r);return new Vp(a,l>=0?l:void 0,c)}}}loadPlaylist(e){this.requestScheduled===-1&&(this.requestScheduled=self.performance.now())}shouldLoadPlaylist(e){return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}shouldReloadPlaylist(e){return this.timer===-1&&this.requestScheduled===-1&&this.shouldLoadPlaylist(e)}playlistLoaded(e,t,r){const{details:i,stats:o}=t,s=self.performance.now(),a=o.loading.first?Math.max(0,s-o.loading.first):0;if(i.advancedDateTime=Date.now()-a,i.live||r!=null&&r.live){if(i.reloaded(r),r&&this.log(`live playlist ${e} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`),r&&i.fragments.length>0&&z3(r,i),!this.canLoad||!i.live)return;let l,c,d;if(i.canBlockReload&&i.endSN&&i.advanced){const g=this.hls.config.lowLatencyMode,y=i.lastPartSn,E=i.endSN,S=i.lastPartIndex,C=S!==-1,k=y===E,M=g?0:S;C?(c=k?E+1:y,d=k?M:S+1):c=E+1;const T=i.age,z=T+i.ageHeader;let F=Math.min(z-i.partTarget,i.targetduration*1.5);if(F>0){if(r&&F>r.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${r.tuneInGoal} to: ${F} with playlist age: ${i.age}`),F=0;else{const O=Math.floor(F/i.targetduration);if(c+=O,d!==void 0){const V=Math.round(F%i.targetduration/i.partTarget);d+=V}this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${T.toFixed(2)}s goal: ${F} skip sn ${O} to part ${d}`)}i.tuneInGoal=F}if(l=this.getDeliveryDirectives(i,t.deliveryDirectives,c,d),g||!k){this.loadPlaylist(l);return}}else(i.canBlockReload||i.canSkipUntil)&&(l=this.getDeliveryDirectives(i,t.deliveryDirectives,c,d));const u=this.hls.mainForwardBufferInfo,f=u?u.end-u.len:0,h=(i.edge-f)*1e3,p=W3(i,h);i.updated&&s>this.requestScheduled+p&&(this.requestScheduled=o.loading.start),c!==void 0&&i.canBlockReload?this.requestScheduled=o.loading.first+p-(i.partTarget*1e3||1e3):this.requestScheduled===-1||this.requestScheduled+p<s?this.requestScheduled=s:this.requestScheduled-s<=0&&(this.requestScheduled+=p);let m=this.requestScheduled-s;m=Math.max(0,m),this.log(`reload live playlist ${e} in ${Math.round(m)} ms`),this.timer=self.setTimeout(()=>this.loadPlaylist(l),m)}else this.clearTimer()}getDeliveryDirectives(e,t,r,i){let o=Kp(e);return t!=null&&t.skip&&e.deltaUpdateFailed&&(r=t.msn,i=t.part,o=Za.No),new Vp(r,i,o)}checkRetry(e){const t=e.details,r=Ll(e),i=e.errorAction,{action:o,retryCount:s=0,retryConfig:a}=i||{},l=!!i&&!!a&&(o===tn.RetryRequest||!i.resolved&&o===tn.SendAlternateToPenaltyBox);if(l){var c;if(this.requestScheduled=-1,s>=a.maxNumRetry)return!1;if(r&&(c=e.context)!=null&&c.deliveryDirectives)this.warn(`Retrying playlist loading ${s+1}/${a.maxNumRetry} after "${t}" without delivery-directives`),this.loadPlaylist();else{const d=cf(a,s);this.timer=self.setTimeout(()=>this.loadPlaylist(),d),this.warn(`Retrying playlist loading ${s+1}/${a.maxNumRetry} after "${t}" in ${d}ms`)}e.levelRetry=!0,i.resolved=!0}return l}}class no{constructor(e,t=0,r=0){this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=r}sample(e,t){const r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e}getTotalWeight(){return this.totalWeight_}getEstimate(){if(this.alpha_){const e=1-Math.pow(this.alpha_,this.totalWeight_);if(e)return this.estimate_/e}return this.estimate_}}class Z3{constructor(e,t,r,i=100){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=r,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new no(e),this.fast_=new no(t),this.defaultTTFB_=i,this.ttfb_=new no(e)}update(e,t){const{slow_:r,fast_:i,ttfb_:o}=this;r.halfLife!==e&&(this.slow_=new no(e,r.getEstimate(),r.getTotalWeight())),i.halfLife!==t&&(this.fast_=new no(t,i.getEstimate(),i.getTotalWeight())),o.halfLife!==e&&(this.ttfb_=new no(e,o.getEstimate(),o.getTotalWeight()))}sample(e,t){e=Math.max(e,this.minDelayMs_);const r=8*t,i=e/1e3,o=r/i;this.fast_.sample(i,o),this.slow_.sample(i,o)}sampleTTFB(e){const t=e/1e3,r=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);this.ttfb_.sample(r,Math.max(e,5))}canEstimate(){return this.fast_.getTotalWeight()>=this.minWeight_}getEstimate(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}getEstimateTTFB(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}destroy(){}}const Gy={supported:!0,configurations:[],decodingInfoResults:[{supported:!0,powerEfficient:!0,smooth:!0}]},Qp={};function Q3(n,e,t,r,i,o){const s=n.audioCodec?n.audioGroups:null,a=o==null?void 0:o.audioCodec,l=o==null?void 0:o.channels,c=l?parseInt(l):a?1/0:2;let d=null;if(s!=null&&s.length)try{s.length===1&&s[0]?d=e.groups[s[0]].channels:d=s.reduce((u,f)=>{if(f){const h=e.groups[f];if(!h)throw new Error(`Audio track group ${f} not found`);Object.keys(h.channels).forEach(p=>{u[p]=(u[p]||0)+h.channels[p]})}return u},{2:0})}catch{return!0}return n.videoCodec!==void 0&&(n.width>1920&&n.height>1088||n.height>1920&&n.width>1088||n.frameRate>Math.max(r,30)||n.videoRange!=="SDR"&&n.videoRange!==t||n.bitrate>Math.max(i,8e6))||!!d&&$e(c)&&Object.keys(d).some(u=>parseInt(u)>c)}function J3(n,e,t){const r=n.videoCodec,i=n.audioCodec;if(!r||!i||!t)return Promise.resolve(Gy);const o={width:n.width,height:n.height,bitrate:Math.ceil(Math.max(n.bitrate*.9,n.averageBitrate)),framerate:n.frameRate||30},s=n.videoRange;s!=="SDR"&&(o.transferFunction=s.toLowerCase());const a=r.split(",").map(l=>({type:"media-source",video:en(en({},o),{},{contentType:Ks(l,"video")})}));return i&&n.audioGroups&&n.audioGroups.forEach(l=>{var c;l&&((c=e.groups[l])==null||c.tracks.forEach(d=>{if(d.groupId===l){const u=d.channels||"",f=parseFloat(u);$e(f)&&f>2&&a.push.apply(a,i.split(",").map(h=>({type:"media-source",audio:{contentType:Ks(h,"audio"),channels:""+f}})))}}))}),Promise.all(a.map(l=>{const c=e5(l);return Qp[c]||(Qp[c]=t.decodingInfo(l))})).then(l=>({supported:!l.some(c=>!c.supported),configurations:a,decodingInfoResults:l})).catch(l=>({supported:!1,configurations:a,decodingInfoResults:[],error:l}))}function e5(n){const{audio:e,video:t}=n,r=t||e;if(r){const i=r.contentType.split('"')[1];if(t)return`r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction||"sd"}_${i}_${Math.ceil(t.bitrate/1e5)}`;if(e)return`c${e.channels}${e.spatialRendering?"s":"n"}_${i}`}return""}function t5(){if(typeof matchMedia=="function"){const n=matchMedia("(dynamic-range: high)"),e=matchMedia("bad query");if(n.media!==e.media)return n.matches===!0}return!1}function n5(n,e){let t=!1,r=[];return n&&(t=n!=="SDR",r=[n]),e&&(r=e.allowedVideoRanges||Il.slice(0),t=e.preferHDR!==void 0?e.preferHDR:t5(),t?r=r.filter(i=>i!=="SDR"):r=["SDR"]),{preferHDR:t,allowedVideoRanges:r}}function r5(n,e,t,r,i){const o=Object.keys(n),s=r==null?void 0:r.channels,a=r==null?void 0:r.audioCodec,l=s&&parseInt(s)===2;let c=!0,d=!1,u=1/0,f=1/0,h=1/0,p=0,m=[];const{preferHDR:g,allowedVideoRanges:y}=n5(e,i);for(let k=o.length;k--;){const M=n[o[k]];c=M.channels[2]>0,u=Math.min(u,M.minHeight),f=Math.min(f,M.minFramerate),h=Math.min(h,M.minBitrate);const T=y.filter(z=>M.videoRanges[z]>0);T.length>0&&(d=!0,m=T)}u=$e(u)?u:0,f=$e(f)?f:0;const E=Math.max(1080,u),S=Math.max(30,f);return h=$e(h)?h:t,t=Math.max(h,t),d||(e=void 0,m=[]),{codecSet:o.reduce((k,M)=>{const T=n[M];if(M===k)return k;if(T.minBitrate>t)return vr(M,`min bitrate of ${T.minBitrate} > current estimate of ${t}`),k;if(!T.hasDefaultAudio)return vr(M,"no renditions with default or auto-select sound found"),k;if(a&&M.indexOf(a.substring(0,4))%5!==0)return vr(M,`audio codec preference "${a}" not found`),k;if(s&&!l){if(!T.channels[s])return vr(M,`no renditions with ${s} channel sound found (channels options: ${Object.keys(T.channels)})`),k}else if((!a||l)&&c&&T.channels[2]===0)return vr(M,"no renditions with stereo sound found"),k;return T.minHeight>E?(vr(M,`min resolution of ${T.minHeight} > maximum of ${E}`),k):T.minFramerate>S?(vr(M,`min framerate of ${T.minFramerate} > maximum of ${S}`),k):m.some(z=>T.videoRanges[z]>0)?T.maxScore<p?(vr(M,`max score of ${T.maxScore} < selected max of ${p}`),k):k&&(Tl(M)>=Tl(k)||T.fragmentError>n[k].fragmentError)?k:(p=T.maxScore,M):(vr(M,`no variants with VIDEO-RANGE of ${JSON.stringify(m)} found`),k)},void 0),videoRanges:m,preferHDR:g,minFramerate:f,minBitrate:h}}function vr(n,e){se.log(`[abr] start candidates with "${n}" ignored because ${e}`)}function i5(n){return n.reduce((e,t)=>{let r=e.groups[t.groupId];r||(r=e.groups[t.groupId]={tracks:[],channels:{2:0},hasDefault:!1,hasAutoSelect:!1}),r.tracks.push(t);const i=t.channels||"2";return r.channels[i]=(r.channels[i]||0)+1,r.hasDefault=r.hasDefault||t.default,r.hasAutoSelect=r.hasAutoSelect||t.autoselect,r.hasDefault&&(e.hasDefaultAudio=!0),r.hasAutoSelect&&(e.hasAutoSelectAudio=!0),e},{hasDefaultAudio:!1,hasAutoSelectAudio:!1,groups:{}})}function o5(n,e,t,r){return n.slice(t,r+1).reduce((i,o)=>{if(!o.codecSet)return i;const s=o.audioGroups;let a=i[o.codecSet];a||(i[o.codecSet]=a={minBitrate:1/0,minHeight:1/0,minFramerate:1/0,maxScore:0,videoRanges:{SDR:0},channels:{2:0},hasDefaultAudio:!s,fragmentError:0}),a.minBitrate=Math.min(a.minBitrate,o.bitrate);const l=Math.min(o.height,o.width);return a.minHeight=Math.min(a.minHeight,l),a.minFramerate=Math.min(a.minFramerate,o.frameRate),a.maxScore=Math.max(a.maxScore,o.score),a.fragmentError+=o.fragmentError,a.videoRanges[o.videoRange]=(a.videoRanges[o.videoRange]||0)+1,s&&s.forEach(c=>{if(!c)return;const d=e.groups[c];d&&(a.hasDefaultAudio=a.hasDefaultAudio||e.hasDefaultAudio?d.hasDefault:d.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,Object.keys(d.channels).forEach(u=>{a.channels[u]=(a.channels[u]||0)+d.channels[u]}))}),i},{})}function sr(n,e,t){if("attrs"in n){const r=e.indexOf(n);if(r!==-1)return r}for(let r=0;r<e.length;r++){const i=e[r];if(yo(n,i,t))return r}return-1}function yo(n,e,t){const{groupId:r,name:i,lang:o,assocLang:s,characteristics:a,default:l}=n,c=n.forced;return(r===void 0||e.groupId===r)&&(i===void 0||e.name===i)&&(o===void 0||e.lang===o)&&(o===void 0||e.assocLang===s)&&(l===void 0||e.default===l)&&(c===void 0||e.forced===c)&&(a===void 0||s5(a,e.characteristics))&&(t===void 0||t(n,e))}function s5(n,e=""){const t=n.split(","),r=e.split(",");return t.length===r.length&&!t.some(i=>r.indexOf(i)===-1)}function ro(n,e){const{audioCodec:t,channels:r}=n;return(t===void 0||(e.audioCodec||"").substring(0,4)===t.substring(0,4))&&(r===void 0||r===(e.channels||"2"))}function a5(n,e,t,r,i){const o=e[r],a=e.reduce((f,h,p)=>{const m=h.uri;return(f[m]||(f[m]=[])).push(p),f},{})[o.uri];a.length>1&&(r=Math.max.apply(Math,a));const l=o.videoRange,c=o.frameRate,d=o.codecSet.substring(0,4),u=Jp(e,r,f=>{if(f.videoRange!==l||f.frameRate!==c||f.codecSet.substring(0,4)!==d)return!1;const h=f.audioGroups,p=t.filter(m=>!h||h.indexOf(m.groupId)!==-1);return sr(n,p,i)>-1});return u>-1?u:Jp(e,r,f=>{const h=f.audioGroups,p=t.filter(m=>!h||h.indexOf(m.groupId)!==-1);return sr(n,p,i)>-1})}function Jp(n,e,t){for(let r=e;r>-1;r--)if(t(n[r]))return r;for(let r=e+1;r<n.length;r++)if(t(n[r]))return r;return-1}class l5{constructor(e){this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=-1,this.firstSelection=-1,this._nextAutoLevel=-1,this.nextAutoLevelKey="",this.audioTracksByGroup=null,this.codecTiers=null,this.timer=-1,this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this._abandonRulesCheck=()=>{const{fragCurrent:t,partCurrent:r,hls:i}=this,{autoLevelEnabled:o,media:s}=i;if(!t||!s)return;const a=performance.now(),l=r?r.stats:t.stats,c=r?r.duration:t.duration,d=a-l.loading.start,u=i.minAutoLevel;if(l.aborted||l.loaded&&l.loaded===l.total||t.level<=u){this.clearTimer(),this._nextAutoLevel=-1;return}if(!o||s.paused||!s.playbackRate||!s.readyState)return;const f=i.mainForwardBufferInfo;if(f===null)return;const h=this.bwEstimator.getEstimateTTFB(),p=Math.abs(s.playbackRate);if(d<=Math.max(h,1e3*(c/(p*2))))return;const m=f.len/p,g=l.loading.first?l.loading.first-l.loading.start:-1,y=l.loaded&&g>-1,E=this.getBwEstimate(),S=i.levels,C=S[t.level],k=l.total||Math.max(l.loaded,Math.round(c*C.averageBitrate/8));let M=y?d-g:d;M<1&&y&&(M=Math.min(d,l.loaded*8/E));const T=y?l.loaded*1e3/M:0,z=T?(k-l.loaded)/T:k*8/E+h/1e3;if(z<=m)return;const F=T?T*8:E;let O=Number.POSITIVE_INFINITY,V;for(V=t.level-1;V>u;V--){const H=S[V].maxBitrate;if(O=this.getTimeToLoadFrag(h/1e3,F,c*H,!S[V].details),O<m)break}if(O>=z||O>c*10)return;i.nextLoadLevel=i.nextAutoLevel=V,y?this.bwEstimator.sample(d-Math.min(h,g),l.loaded):this.bwEstimator.sampleTTFB(d);const _=S[V].maxBitrate;this.getBwEstimate()*this.hls.config.abrBandWidthUpFactor>_&&this.resetEstimator(_),this.clearTimer(),se.warn(`[abr] Fragment ${t.sn}${r?" part "+r.index:""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${m.toFixed(3)} s
      Estimated load time for current fragment: ${z.toFixed(3)} s
      Estimated load time for down switch fragment: ${O.toFixed(3)} s
      TTFB estimate: ${g|0} ms
      Current BW estimate: ${$e(E)?E|0:"Unknown"} bps
      New BW estimate: ${this.getBwEstimate()|0} bps
      Switching to level ${V} @ ${_|0} bps`),i.trigger(P.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:r,stats:l})},this.hls=e,this.bwEstimator=this.initEstimator(),this.registerListeners()}resetEstimator(e){e&&(se.log(`setting initial bwe to ${e}`),this.hls.config.abrEwmaDefaultEstimate=e),this.firstSelection=-1,this.bwEstimator=this.initEstimator()}initEstimator(){const e=this.hls.config;return new Z3(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate)}registerListeners(){const{hls:e}=this;e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.FRAG_LOADING,this.onFragLoading,this),e.on(P.FRAG_LOADED,this.onFragLoaded,this),e.on(P.FRAG_BUFFERED,this.onFragBuffered,this),e.on(P.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(P.LEVEL_LOADED,this.onLevelLoaded,this),e.on(P.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(P.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.on(P.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e&&(e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.FRAG_LOADING,this.onFragLoading,this),e.off(P.FRAG_LOADED,this.onFragLoaded,this),e.off(P.FRAG_BUFFERED,this.onFragBuffered,this),e.off(P.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(P.LEVEL_LOADED,this.onLevelLoaded,this),e.off(P.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(P.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.off(P.ERROR,this.onError,this))}destroy(){this.unregisterListeners(),this.clearTimer(),this.hls=this._abandonRulesCheck=null,this.fragCurrent=this.partCurrent=null}onManifestLoading(e,t){this.lastLoadedFragLevel=-1,this.firstSelection=-1,this.lastLevelLoadSec=0,this.fragCurrent=this.partCurrent=null,this.onLevelsUpdated(),this.clearTimer()}onLevelsUpdated(){this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level),this._nextAutoLevel=-1,this.onMaxAutoLevelUpdated(),this.codecTiers=null,this.audioTracksByGroup=null}onMaxAutoLevelUpdated(){this.firstSelection=-1,this.nextAutoLevelKey=""}onFragLoading(e,t){const r=t.frag;if(!this.ignoreFragment(r)){if(!r.bitrateTest){var i;this.fragCurrent=r,this.partCurrent=(i=t.part)!=null?i:null}this.clearTimer(),this.timer=self.setInterval(this._abandonRulesCheck,100)}}onLevelSwitching(e,t){this.clearTimer()}onError(e,t){if(!t.fatal)switch(t.details){case be.BUFFER_ADD_CODEC_ERROR:case be.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1,this.firstSelection=-1;break;case be.FRAG_LOAD_TIMEOUT:{const r=t.frag,{fragCurrent:i,partCurrent:o}=this;if(r&&i&&r.sn===i.sn&&r.level===i.level){const s=performance.now(),a=o?o.stats:r.stats,l=s-a.loading.start,c=a.loading.first?a.loading.first-a.loading.start:-1;if(a.loaded&&c>-1){const u=this.bwEstimator.getEstimateTTFB();this.bwEstimator.sample(l-Math.min(u,c),a.loaded)}else this.bwEstimator.sampleTTFB(l)}break}}}getTimeToLoadFrag(e,t,r,i){const o=e+r/t,s=i?this.lastLevelLoadSec:0;return o+s}onLevelLoaded(e,t){const r=this.hls.config,{loading:i}=t.stats,o=i.end-i.start;$e(o)&&(this.lastLevelLoadSec=o/1e3),t.details.live?this.bwEstimator.update(r.abrEwmaSlowLive,r.abrEwmaFastLive):this.bwEstimator.update(r.abrEwmaSlowVoD,r.abrEwmaFastVoD)}onFragLoaded(e,{frag:t,part:r}){const i=r?r.stats:t.stats;if(t.type===Ye.MAIN&&this.bwEstimator.sampleTTFB(i.loading.first-i.loading.start),!this.ignoreFragment(t)){if(this.clearTimer(),t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1),this.firstSelection=-1,this.hls.config.abrMaxWithRealBitrate){const o=r?r.duration:t.duration,s=this.hls.levels[t.level],a=(s.loaded?s.loaded.bytes:0)+i.loaded,l=(s.loaded?s.loaded.duration:0)+o;s.loaded={bytes:a,duration:l},s.realBitrate=Math.round(8*a/l)}if(t.bitrateTest){const o={stats:i,frag:t,part:r,id:t.type};this.onFragBuffered(P.FRAG_BUFFERED,o),t.bitrateTest=!1}else this.lastLoadedFragLevel=t.level}}onFragBuffered(e,t){const{frag:r,part:i}=t,o=i!=null&&i.stats.loaded?i.stats:r.stats;if(o.aborted||this.ignoreFragment(r))return;const s=o.parsing.end-o.loading.start-Math.min(o.loading.first-o.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(s,o.loaded),o.bwEstimate=this.getBwEstimate(),r.bitrateTest?this.bitrateTestDelay=s/1e3:this.bitrateTestDelay=0}ignoreFragment(e){return e.type!==Ye.MAIN||e.sn==="initSegment"}clearTimer(){this.timer>-1&&(self.clearInterval(this.timer),this.timer=-1)}get firstAutoLevel(){const{maxAutoLevel:e,minAutoLevel:t}=this.hls,r=this.getBwEstimate(),i=this.hls.config.maxStarvationDelay,o=this.findBestLevel(r,t,e,0,i,1,1);if(o>-1)return o;const s=this.hls.firstLevel,a=Math.min(Math.max(s,t),e);return se.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${s} clamped to ${a}`),a}get forcedAutoLevel(){return this.nextAutoLevelKey?-1:this._nextAutoLevel}get nextAutoLevel(){const e=this.forcedAutoLevel,r=this.bwEstimator.canEstimate(),i=this.lastLoadedFragLevel>-1;if(e!==-1&&(!r||!i||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;const o=r&&i?this.getNextABRAutoLevel():this.firstAutoLevel;if(e!==-1){const s=this.hls.levels;if(s.length>Math.max(e,o)&&s[e].loadError<=s[o].loadError)return e}return this._nextAutoLevel=o,this.nextAutoLevelKey=this.getAutoLevelKey(),o}getAutoLevelKey(){return`${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`}getNextABRAutoLevel(){const{fragCurrent:e,partCurrent:t,hls:r}=this,{maxAutoLevel:i,config:o,minAutoLevel:s}=r,a=t?t.duration:e?e.duration:0,l=this.getBwEstimate(),c=this.getStarvationDelay();let d=o.abrBandWidthFactor,u=o.abrBandWidthUpFactor;if(c){const g=this.findBestLevel(l,s,i,c,0,d,u);if(g>=0)return g}let f=a?Math.min(a,o.maxStarvationDelay):o.maxStarvationDelay;if(!c){const g=this.bitrateTestDelay;g&&(f=(a?Math.min(a,o.maxLoadingDelay):o.maxLoadingDelay)-g,se.info(`[abr] bitrate test took ${Math.round(1e3*g)}ms, set first fragment max fetchDuration to ${Math.round(1e3*f)} ms`),d=u=1)}const h=this.findBestLevel(l,s,i,c,f,d,u);if(se.info(`[abr] ${c?"rebuffering expected":"buffer is empty"}, optimal quality level ${h}`),h>-1)return h;const p=r.levels[s],m=r.levels[r.loadLevel];return(p==null?void 0:p.bitrate)<(m==null?void 0:m.bitrate)?s:r.loadLevel}getStarvationDelay(){const e=this.hls,t=e.media;if(!t)return 1/0;const r=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,i=e.mainForwardBufferInfo;return(i?i.len:0)/r}getBwEstimate(){return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate}findBestLevel(e,t,r,i,o,s,a){var l;const c=i+o,d=this.lastLoadedFragLevel,u=d===-1?this.hls.firstLevel:d,{fragCurrent:f,partCurrent:h}=this,{levels:p,allAudioTracks:m,loadLevel:g,config:y}=this.hls;if(p.length===1)return 0;const E=p[u],S=!!(E!=null&&(l=E.details)!=null&&l.live),C=g===-1||d===-1;let k,M="SDR",T=(E==null?void 0:E.frameRate)||0;const{audioPreference:z,videoPreference:F}=y,O=this.audioTracksByGroup||(this.audioTracksByGroup=i5(m));if(C){if(this.firstSelection!==-1)return this.firstSelection;const W=this.codecTiers||(this.codecTiers=o5(p,O,t,r)),ie=r5(W,M,e,z,F),{codecSet:Q,videoRanges:ue,minFramerate:J,minBitrate:ae,preferHDR:X}=ie;k=Q,M=X?ue[ue.length-1]:ue[0],T=J,e=Math.max(e,ae),se.log(`[abr] picked start tier ${JSON.stringify(ie)}`)}else k=E==null?void 0:E.codecSet,M=E==null?void 0:E.videoRange;const V=h?h.duration:f?f.duration:0,_=this.bwEstimator.getEstimateTTFB()/1e3,H=[];for(let W=r;W>=t;W--){var I;const ie=p[W],Q=W>u;if(!ie)continue;if(y.useMediaCapabilities&&!ie.supportedResult&&!ie.supportedPromise){const ge=navigator.mediaCapabilities;typeof(ge==null?void 0:ge.decodingInfo)=="function"&&Q3(ie,O,M,T,e,z)?(ie.supportedPromise=J3(ie,O,ge),ie.supportedPromise.then(Ae=>{if(!this.hls)return;ie.supportedResult=Ae;const Le=this.hls.levels,Fe=Le.indexOf(ie);Ae.error?se.warn(`[abr] MediaCapabilities decodingInfo error: "${Ae.error}" for level ${Fe} ${JSON.stringify(Ae)}`):Ae.supported||(se.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${Fe} ${JSON.stringify(Ae)}`),Fe>-1&&Le.length>1&&(se.log(`[abr] Removing unsupported level ${Fe}`),this.hls.removeLevel(Fe)))})):ie.supportedResult=Gy}if(k&&ie.codecSet!==k||M&&ie.videoRange!==M||Q&&T>ie.frameRate||!Q&&T>0&&T<ie.frameRate||ie.supportedResult&&!((I=ie.supportedResult.decodingInfoResults)!=null&&I[0].smooth)){H.push(W);continue}const ue=ie.details,J=(h?ue==null?void 0:ue.partTarget:ue==null?void 0:ue.averagetargetduration)||V;let ae;Q?ae=a*e:ae=s*e;const X=V&&i>=V*2&&o===0?p[W].averageBitrate:p[W].maxBitrate,q=this.getTimeToLoadFrag(_,ae,X*J,ue===void 0);if(ae>=X&&(W===d||ie.loadError===0&&ie.fragmentError===0)&&(q<=_||!$e(q)||S&&!this.bitrateTestDelay||q<c)){const ge=this.forcedAutoLevel;return W!==g&&(ge===-1||ge!==g)&&(H.length&&se.trace(`[abr] Skipped level(s) ${H.join(",")} of ${r} max with CODECS and VIDEO-RANGE:"${p[H[0]].codecs}" ${p[H[0]].videoRange}; not compatible with "${E.codecs}" ${M}`),se.info(`[abr] switch candidate:${u}->${W} adjustedbw(${Math.round(ae)})-bitrate=${Math.round(ae-X)} ttfb:${_.toFixed(1)} avgDuration:${J.toFixed(1)} maxFetchDuration:${c.toFixed(1)} fetchDuration:${q.toFixed(1)} firstSelection:${C} codecSet:${k} videoRange:${M} hls.loadLevel:${g}`)),C&&(this.firstSelection=W),W}}return-1}set nextAutoLevel(e){const{maxAutoLevel:t,minAutoLevel:r}=this.hls,i=Math.min(Math.max(e,r),t);this._nextAutoLevel!==i&&(this.nextAutoLevelKey="",this._nextAutoLevel=i)}}class c5{constructor(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}destroy(){this.onHandlerDestroying(),this.onHandlerDestroyed()}onHandlerDestroying(){this.clearNextTick(),this.clearInterval()}onHandlerDestroyed(){}hasInterval(){return!!this._tickInterval}hasNextTick(){return!!this._tickTimer}setInterval(e){return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}clearInterval(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}clearNextTick(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}tick(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}tickImmediate(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}doTick(){}}var Xt={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};class d5{constructor(e){this.activePartLists=Object.create(null),this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=e,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(P.BUFFER_APPENDED,this.onBufferAppended,this),e.on(P.FRAG_BUFFERED,this.onFragBuffered,this),e.on(P.FRAG_LOADED,this.onFragLoaded,this)}_unregisterListeners(){const{hls:e}=this;e.off(P.BUFFER_APPENDED,this.onBufferAppended,this),e.off(P.FRAG_BUFFERED,this.onFragBuffered,this),e.off(P.FRAG_LOADED,this.onFragLoaded,this)}destroy(){this._unregisterListeners(),this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null}getAppendedFrag(e,t){const r=this.activePartLists[t];if(r)for(let i=r.length;i--;){const o=r[i];if(!o)break;const s=o.end;if(o.start<=e&&s!==null&&e<=s)return o}return this.getBufferedFrag(e,t)}getBufferedFrag(e,t){const{fragments:r}=this,i=Object.keys(r);for(let o=i.length;o--;){const s=r[i[o]];if((s==null?void 0:s.body.type)===t&&s.buffered){const a=s.body;if(a.start<=e&&e<=a.end)return a}}return null}detectEvictedFragments(e,t,r,i){this.timeRanges&&(this.timeRanges[e]=t);const o=(i==null?void 0:i.fragment.sn)||-1;Object.keys(this.fragments).forEach(s=>{const a=this.fragments[s];if(!a||o>=a.body.sn)return;if(!a.buffered&&!a.loaded){a.body.type===r&&this.removeFragment(a.body);return}const l=a.range[e];l&&l.time.some(c=>{const d=!this.isTimeBuffered(c.startPTS,c.endPTS,t);return d&&this.removeFragment(a.body),d})})}detectPartialFragments(e){const t=this.timeRanges,{frag:r,part:i}=e;if(!t||r.sn==="initSegment")return;const o=io(r),s=this.fragments[o];if(!s||s.buffered&&r.gap)return;const a=!r.relurl;Object.keys(t).forEach(l=>{const c=r.elementaryStreams[l];if(!c)return;const d=t[l],u=a||c.partial===!0;s.range[l]=this.getBufferedTimes(r,i,u,d)}),s.loaded=null,Object.keys(s.range).length?(s.buffered=!0,(s.body.endList=r.endList||s.body.endList)&&(this.endListFragments[s.body.type]=s),Oa(s)||this.removeParts(r.sn-1,r.type)):this.removeFragment(s.body)}removeParts(e,t){const r=this.activePartLists[t];r&&(this.activePartLists[t]=r.filter(i=>i.fragment.sn>=e))}fragBuffered(e,t){const r=io(e);let i=this.fragments[r];!i&&t&&(i=this.fragments[r]={body:e,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)},e.gap&&(this.hasGaps=!0)),i&&(i.loaded=null,i.buffered=!0)}getBufferedTimes(e,t,r,i){const o={time:[],partial:r},s=e.start,a=e.end,l=e.minEndPTS||a,c=e.maxStartPTS||s;for(let d=0;d<i.length;d++){const u=i.start(d)-this.bufferPadding,f=i.end(d)+this.bufferPadding;if(c>=u&&l<=f){o.time.push({startPTS:Math.max(s,i.start(d)),endPTS:Math.min(a,i.end(d))});break}else if(s<f&&a>u){const h=Math.max(s,i.start(d)),p=Math.min(a,i.end(d));p>h&&(o.partial=!0,o.time.push({startPTS:h,endPTS:p}))}else if(a<=u)break}return o}getPartialFragment(e){let t=null,r,i,o,s=0;const{bufferPadding:a,fragments:l}=this;return Object.keys(l).forEach(c=>{const d=l[c];d&&Oa(d)&&(i=d.body.start-a,o=d.body.end+a,e>=i&&e<=o&&(r=Math.min(e-i,o-e),s<=r&&(t=d.body,s=r)))}),t}isEndListAppended(e){const t=this.endListFragments[e];return t!==void 0&&(t.buffered||Oa(t))}getState(e){const t=io(e),r=this.fragments[t];return r?r.buffered?Oa(r)?Xt.PARTIAL:Xt.OK:Xt.APPENDING:Xt.NOT_LOADED}isTimeBuffered(e,t,r){let i,o;for(let s=0;s<r.length;s++){if(i=r.start(s)-this.bufferPadding,o=r.end(s)+this.bufferPadding,e>=i&&t<=o)return!0;if(t<=i)return!1}return!1}onFragLoaded(e,t){const{frag:r,part:i}=t;if(r.sn==="initSegment"||r.bitrateTest)return;const o=i?null:t,s=io(r);this.fragments[s]={body:r,appendedPTS:null,loaded:o,buffered:!1,range:Object.create(null)}}onBufferAppended(e,t){const{frag:r,part:i,timeRanges:o}=t;if(r.sn==="initSegment")return;const s=r.type;if(i){let a=this.activePartLists[s];a||(this.activePartLists[s]=a=[]),a.push(i)}this.timeRanges=o,Object.keys(o).forEach(a=>{const l=o[a];this.detectEvictedFragments(a,l,s,i)})}onFragBuffered(e,t){this.detectPartialFragments(t)}hasFragment(e){const t=io(e);return!!this.fragments[t]}hasParts(e){var t;return!!((t=this.activePartLists[e])!=null&&t.length)}removeFragmentsInRange(e,t,r,i,o){i&&!this.hasGaps||Object.keys(this.fragments).forEach(s=>{const a=this.fragments[s];if(!a)return;const l=a.body;l.type!==r||i&&!l.gap||l.start<t&&l.end>e&&(a.buffered||o)&&this.removeFragment(l)})}removeFragment(e){const t=io(e);e.stats.loaded=0,e.clearElementaryStreamInfo();const r=this.activePartLists[e.type];if(r){const i=e.sn;this.activePartLists[e.type]=r.filter(o=>o.fragment.sn!==i)}delete this.fragments[t],e.endList&&delete this.endListFragments[e.type]}removeAllFragments(){this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activePartLists=Object.create(null),this.hasGaps=!1}}function Oa(n){var e,t,r;return n.buffered&&(n.body.gap||((e=n.range.video)==null?void 0:e.partial)||((t=n.range.audio)==null?void 0:t.partial)||((r=n.range.audiovideo)==null?void 0:r.partial))}function io(n){return`${n.type}_${n.level}_${n.sn}`}const u5={length:0,start:()=>0,end:()=>0};class wt{static isBuffered(e,t){try{if(e){const r=wt.getBuffered(e);for(let i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}}catch{}return!1}static bufferInfo(e,t,r){try{if(e){const i=wt.getBuffered(e),o=[];let s;for(s=0;s<i.length;s++)o.push({start:i.start(s),end:i.end(s)});return this.bufferedInfo(o,t,r)}}catch{}return{len:0,start:t,end:t,nextStart:void 0}}static bufferedInfo(e,t,r){t=Math.max(0,t),e.sort(function(c,d){const u=c.start-d.start;return u||d.end-c.end});let i=[];if(r)for(let c=0;c<e.length;c++){const d=i.length;if(d){const u=i[d-1].end;e[c].start-u<r?e[c].end>u&&(i[d-1].end=e[c].end):i.push(e[c])}else i.push(e[c])}else i=e;let o=0,s,a=t,l=t;for(let c=0;c<i.length;c++){const d=i[c].start,u=i[c].end;if(t+r>=d&&t<u)a=d,l=u,o=l-t;else if(t+r<d){s=d;break}}return{len:o,start:a||0,end:l||0,nextStart:s}}static getBuffered(e){try{return e.buffered}catch(t){return se.log("failed to get media.buffered",t),u5}}}class uf{constructor(e,t,r,i=0,o=-1,s=!1){this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=Fa(),this.buffering={audio:Fa(),video:Fa(),audiovideo:Fa()},this.level=e,this.sn=t,this.id=r,this.size=i,this.part=o,this.partial=s}}function Fa(){return{start:0,executeStart:0,executeEnd:0,end:0}}function Qa(n,e){for(let r=0,i=n.length;r<i;r++){var t;if(((t=n[r])==null?void 0:t.cc)===e)return n[r]}return null}function f5(n,e,t){return!!(e&&(t.endCC>t.startCC||n&&n.cc<t.startCC))}function h5(n,e){const t=n.fragments,r=e.fragments;if(!r.length||!t.length){se.log("No fragments to align");return}const i=Qa(t,r[0].cc);if(!i||i&&!i.startPTS){se.log("No frag in previous level to align on");return}return i}function em(n,e){if(n){const t=n.start+e;n.start=n.startPTS=t,n.endPTS=t+n.duration}}function Ky(n,e){const t=e.fragments;for(let r=0,i=t.length;r<i;r++)em(t[r],n);e.fragmentHint&&em(e.fragmentHint,n),e.alignedSliding=!0}function p5(n,e,t){e&&(m5(n,t,e),!t.alignedSliding&&e&&Dl(t,e),!t.alignedSliding&&e&&!t.skippedSegments&&Uy(e,t))}function m5(n,e,t){if(f5(n,t,e)){const r=h5(t,e);r&&$e(r.start)&&(se.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`),Ky(r.start,e))}}function Dl(n,e){if(!n.hasProgramDateTime||!e.hasProgramDateTime)return;const t=n.fragments,r=e.fragments;if(!t.length||!r.length)return;let i,o;const s=Math.min(e.endCC,n.endCC);e.startCC<s&&n.startCC<s&&(i=Qa(r,s),o=Qa(t,s)),(!i||!o)&&(i=r[Math.floor(r.length/2)],o=Qa(t,i.cc)||t[Math.floor(t.length/2)]);const a=i.programDateTime,l=o.programDateTime;if(!a||!l)return;const c=(l-a)/1e3-(o.start-i.start);Ky(c,n)}const tm=Math.pow(2,17);class g5{constructor(e){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}destroy(){this.loader&&(this.loader.destroy(),this.loader=null)}abort(){this.loader&&this.loader.abort()}load(e,t){const r=e.url;if(!r)return Promise.reject(new Er({type:Ze.NETWORK_ERROR,details:be.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${r?"part list":"url"}`),networkDetails:null}));this.abort();const i=this.config,o=i.fLoader,s=i.loader;return new Promise((a,l)=>{if(this.loader&&this.loader.destroy(),e.gap)if(e.tagList.some(h=>h[0]==="GAP")){l(rm(e));return}else e.gap=!1;const c=this.loader=e.loader=o?new o(i):new s(i),d=nm(e),u=Zp(i.fragLoadPolicy.default),f={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:tm};e.stats=c.stats,c.load(d,f,{onSuccess:(h,p,m,g)=>{this.resetLoader(e,c);let y=h.data;m.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(y.slice(0,16)),y=y.slice(16)),a({frag:e,part:null,payload:y,networkDetails:g})},onError:(h,p,m,g)=>{this.resetLoader(e,c),l(new Er({type:Ze.NETWORK_ERROR,details:be.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:en({url:r,data:void 0},h),error:new Error(`HTTP Error ${h.code} ${h.text}`),networkDetails:m,stats:g}))},onAbort:(h,p,m)=>{this.resetLoader(e,c),l(new Er({type:Ze.NETWORK_ERROR,details:be.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:m,stats:h}))},onTimeout:(h,p,m)=>{this.resetLoader(e,c),l(new Er({type:Ze.NETWORK_ERROR,details:be.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${f.timeout}ms`),networkDetails:m,stats:h}))},onProgress:(h,p,m,g)=>{t&&t({frag:e,part:null,payload:m,networkDetails:g})}})})}loadPart(e,t,r){this.abort();const i=this.config,o=i.fLoader,s=i.loader;return new Promise((a,l)=>{if(this.loader&&this.loader.destroy(),e.gap||t.gap){l(rm(e,t));return}const c=this.loader=e.loader=o?new o(i):new s(i),d=nm(e,t),u=Zp(i.fragLoadPolicy.default),f={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:tm};t.stats=c.stats,c.load(d,f,{onSuccess:(h,p,m,g)=>{this.resetLoader(e,c),this.updateStatsFromPart(e,t);const y={frag:e,part:t,payload:h.data,networkDetails:g};r(y),a(y)},onError:(h,p,m,g)=>{this.resetLoader(e,c),l(new Er({type:Ze.NETWORK_ERROR,details:be.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:en({url:d.url,data:void 0},h),error:new Error(`HTTP Error ${h.code} ${h.text}`),networkDetails:m,stats:g}))},onAbort:(h,p,m)=>{e.stats.aborted=t.stats.aborted,this.resetLoader(e,c),l(new Er({type:Ze.NETWORK_ERROR,details:be.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:m,stats:h}))},onTimeout:(h,p,m)=>{this.resetLoader(e,c),l(new Er({type:Ze.NETWORK_ERROR,details:be.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${f.timeout}ms`),networkDetails:m,stats:h}))}})})}updateStatsFromPart(e,t){const r=e.stats,i=t.stats,o=i.total;if(r.loaded+=i.loaded,o){const l=Math.round(e.duration/t.duration),c=Math.min(Math.round(r.loaded/o),l),u=(l-c)*Math.round(r.loaded/c);r.total=r.loaded+u}else r.total=Math.max(r.loaded,r.total);const s=r.loading,a=i.loading;s.start?s.first+=a.first-a.start:(s.start=a.start,s.first=a.first),s.end=a.end}resetLoader(e,t){e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}}function nm(n,e=null){const t=e||n,r={frag:n,part:e,responseType:"arraybuffer",url:t.url,headers:{},rangeStart:0,rangeEnd:0},i=t.byteRangeStartOffset,o=t.byteRangeEndOffset;if($e(i)&&$e(o)){var s;let a=i,l=o;if(n.sn==="initSegment"&&((s=n.decryptdata)==null?void 0:s.method)==="AES-128"){const c=o-i;c%16&&(l=o+(16-c%16)),i!==0&&(r.resetIV=!0,a=i-16)}r.rangeStart=a,r.rangeEnd=l}return r}function rm(n,e){const t=new Error(`GAP ${n.gap?"tag":"attribute"} found`),r={type:Ze.MEDIA_ERROR,details:be.FRAG_GAP,fatal:!1,frag:n,error:t,networkDetails:null};return e&&(r.part=e),(e||n).stats.aborted=!0,new Er(r)}class Er extends Error{constructor(e){super(e.error.message),this.data=void 0,this.data=e}}class y5{constructor(e,t){this.subtle=void 0,this.aesIV=void 0,this.subtle=e,this.aesIV=t}decrypt(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}class v5{constructor(e,t){this.subtle=void 0,this.key=void 0,this.subtle=e,this.key=t}expandKey(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}function b5(n){const e=n.byteLength,t=e&&new DataView(n.buffer).getUint8(e-1);return t?Ti(n,0,e-t):n}class A5{constructor(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}uint8ArrayToUint32Array_(e){const t=new DataView(e),r=new Uint32Array(4);for(let i=0;i<4;i++)r[i]=t.getUint32(i*4);return r}initTable(){const e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],o=r[1],s=r[2],a=r[3],l=this.invSubMix,c=l[0],d=l[1],u=l[2],f=l[3],h=new Uint32Array(256);let p=0,m=0,g=0;for(g=0;g<256;g++)g<128?h[g]=g<<1:h[g]=g<<1^283;for(g=0;g<256;g++){let y=m^m<<1^m<<2^m<<3^m<<4;y=y>>>8^y&255^99,e[p]=y,t[y]=p;const E=h[p],S=h[E],C=h[S];let k=h[y]*257^y*16843008;i[p]=k<<24|k>>>8,o[p]=k<<16|k>>>16,s[p]=k<<8|k>>>24,a[p]=k,k=C*16843009^S*65537^E*257^p*16843008,c[y]=k<<24|k>>>8,d[y]=k<<16|k>>>16,u[y]=k<<8|k>>>24,f[y]=k,p?(p=E^h[h[h[C^E]]],m^=h[h[m]]):p=m=1}}expandKey(e){const t=this.uint8ArrayToUint32Array_(e);let r=!0,i=0;for(;i<t.length&&r;)r=t[i]===this.key[i],i++;if(r)return;this.key=t;const o=this.keySize=t.length;if(o!==4&&o!==6&&o!==8)throw new Error("Invalid aes key size="+o);const s=this.ksRows=(o+6+1)*4;let a,l;const c=this.keySchedule=new Uint32Array(s),d=this.invKeySchedule=new Uint32Array(s),u=this.sBox,f=this.rcon,h=this.invSubMix,p=h[0],m=h[1],g=h[2],y=h[3];let E,S;for(a=0;a<s;a++){if(a<o){E=c[a]=t[a];continue}S=E,a%o===0?(S=S<<8|S>>>24,S=u[S>>>24]<<24|u[S>>>16&255]<<16|u[S>>>8&255]<<8|u[S&255],S^=f[a/o|0]<<24):o>6&&a%o===4&&(S=u[S>>>24]<<24|u[S>>>16&255]<<16|u[S>>>8&255]<<8|u[S&255]),c[a]=E=(c[a-o]^S)>>>0}for(l=0;l<s;l++)a=s-l,l&3?S=c[a]:S=c[a-4],l<4||a<=4?d[l]=S:d[l]=p[u[S>>>24]]^m[u[S>>>16&255]]^g[u[S>>>8&255]]^y[u[S&255]],d[l]=d[l]>>>0}networkToHostOrderSwap(e){return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}decrypt(e,t,r){const i=this.keySize+6,o=this.invKeySchedule,s=this.invSBox,a=this.invSubMix,l=a[0],c=a[1],d=a[2],u=a[3],f=this.uint8ArrayToUint32Array_(r);let h=f[0],p=f[1],m=f[2],g=f[3];const y=new Int32Array(e),E=new Int32Array(y.length);let S,C,k,M,T,z,F,O,V,_,H,I,W,ie;const Q=this.networkToHostOrderSwap;for(;t<y.length;){for(V=Q(y[t]),_=Q(y[t+1]),H=Q(y[t+2]),I=Q(y[t+3]),T=V^o[0],z=I^o[1],F=H^o[2],O=_^o[3],W=4,ie=1;ie<i;ie++)S=l[T>>>24]^c[z>>16&255]^d[F>>8&255]^u[O&255]^o[W],C=l[z>>>24]^c[F>>16&255]^d[O>>8&255]^u[T&255]^o[W+1],k=l[F>>>24]^c[O>>16&255]^d[T>>8&255]^u[z&255]^o[W+2],M=l[O>>>24]^c[T>>16&255]^d[z>>8&255]^u[F&255]^o[W+3],T=S,z=C,F=k,O=M,W=W+4;S=s[T>>>24]<<24^s[z>>16&255]<<16^s[F>>8&255]<<8^s[O&255]^o[W],C=s[z>>>24]<<24^s[F>>16&255]<<16^s[O>>8&255]<<8^s[T&255]^o[W+1],k=s[F>>>24]<<24^s[O>>16&255]<<16^s[T>>8&255]<<8^s[z&255]^o[W+2],M=s[O>>>24]<<24^s[T>>16&255]<<16^s[z>>8&255]<<8^s[F&255]^o[W+3],E[t]=Q(S^h),E[t+1]=Q(M^p),E[t+2]=Q(k^m),E[t+3]=Q(C^g),h=V,p=_,m=H,g=I,t=t+4}return E.buffer}}const x5=16;class ff{constructor(e,{removePKCS7Padding:t=!0}={}){if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.useSoftware=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{const r=self.crypto;r&&(this.subtle=r.subtle||r.webkitSubtle)}catch{}this.useSoftware=!this.subtle}destroy(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}isSync(){return this.useSoftware}flush(){const{currentResult:e,remainderData:t}=this;if(!e||t)return this.reset(),null;const r=new Uint8Array(e);return this.reset(),this.removePKCS7Padding?b5(r):r}reset(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}decrypt(e,t,r){return this.useSoftware?new Promise((i,o)=>{this.softwareDecrypt(new Uint8Array(e),t,r);const s=this.flush();s?i(s.buffer):o(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(e),t,r)}softwareDecrypt(e,t,r){const{currentIV:i,currentResult:o,remainderData:s}=this;this.logOnce("JS AES decrypt"),s&&(e=Bn(s,e),this.remainderData=null);const a=this.getValidChunk(e);if(!a.length)return null;i&&(r=i);let l=this.softwareDecrypter;l||(l=this.softwareDecrypter=new A5),l.expandKey(t);const c=o;return this.currentResult=l.decrypt(a.buffer,0,r),this.currentIV=Ti(a,-16).buffer,c||null}webCryptoDecrypt(e,t,r){if(this.key!==t||!this.fastAesKey){if(!this.subtle)return Promise.resolve(this.onWebCryptoError(e,t,r));this.key=t,this.fastAesKey=new v5(this.subtle,t)}return this.fastAesKey.expandKey().then(i=>this.subtle?(this.logOnce("WebCrypto AES decrypt"),new y5(this.subtle,new Uint8Array(r)).decrypt(e.buffer,i)):Promise.reject(new Error("web crypto not initialized"))).catch(i=>(se.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${i.name}: ${i.message}`),this.onWebCryptoError(e,t,r)))}onWebCryptoError(e,t,r){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,r);const i=this.flush();if(i)return i.buffer;throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")}getValidChunk(e){let t=e;const r=e.length-e.length%x5;return r!==e.length&&(t=Ti(e,0,r),this.remainderData=Ti(e,r)),t}logOnce(e){this.logEnabled&&(se.log(`[decrypter]: ${e}`),this.logEnabled=!1)}}const E5={toString:function(n){let e="";const t=n.length;for(let r=0;r<t;r++)e+=`[${n.start(r).toFixed(3)}-${n.end(r).toFixed(3)}]`;return e}},Se={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};class hf extends c5{constructor(e,t,r,i,o){super(),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=Se.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.loadedmetadata=!1,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.onvseeking=null,this.onvended=null,this.logPrefix="",this.log=void 0,this.warn=void 0,this.playlistType=o,this.logPrefix=i,this.log=se.log.bind(se,`${i}:`),this.warn=se.warn.bind(se,`${i}:`),this.hls=e,this.fragmentLoader=new g5(e.config),this.keyLoader=r,this.fragmentTracker=t,this.config=e.config,this.decrypter=new ff(e.config),e.on(P.MANIFEST_LOADED,this.onManifestLoaded,this)}doTick(){this.onTickEnd()}onTickEnd(){}startLoad(e){}stopLoad(){this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);const e=this.fragCurrent;e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=Se.STOPPED}_streamEnded(e,t){if(t.live||e.nextStart||!e.end||!this.media)return!1;const r=t.partList;if(r!=null&&r.length){const o=r[r.length-1];return wt.isBuffered(this.media,o.start+o.duration/2)}const i=t.fragments[t.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(i)}getLevelDetails(){if(this.levels&&this.levelLastLoaded!==null){var e;return(e=this.levelLastLoaded)==null?void 0:e.details}}onMediaAttached(e,t){const r=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),r.addEventListener("seeking",this.onvseeking),r.addEventListener("ended",this.onvended);const i=this.config;this.levels&&i.autoStartLoad&&this.state===Se.STOPPED&&this.startLoad(i.startPosition)}onMediaDetaching(){const e=this.media;e!=null&&e.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&this.onvseeking&&this.onvended&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.keyLoader&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}onMediaSeeking(){const{config:e,fragCurrent:t,media:r,mediaBuffer:i,state:o}=this,s=r?r.currentTime:0,a=wt.bufferInfo(i||r,s,e.maxBufferHole);if(this.log(`media seeking to ${$e(s)?s.toFixed(3):s}, state: ${o}`),this.state===Se.ENDED)this.resetLoadingState();else if(t){const l=e.maxFragLookUpTolerance,c=t.start-l,d=t.start+t.duration+l;if(!a.len||d<a.start||c>a.end){const u=s>d;(s<c||u)&&(u&&t.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),t.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}}r&&(this.fragmentTracker.removeFragmentsInRange(s,1/0,this.playlistType,!0),this.lastCurrentTime=s),!this.loadedmetadata&&!a.len&&(this.nextLoadPosition=this.startPosition=s),this.tickImmediate()}onMediaEnded(){this.startPosition=this.lastCurrentTime=0}onManifestLoaded(e,t){this.startTimeOffset=t.startTimeOffset,this.initPTS=[]}onHandlerDestroying(){this.hls.off(P.MANIFEST_LOADED,this.onManifestLoaded,this),this.stopLoad(),super.onHandlerDestroying(),this.hls=null}onHandlerDestroyed(){this.state=Se.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}loadFragment(e,t,r){this._loadFragForPlayback(e,t,r)}_loadFragForPlayback(e,t,r){const i=o=>{if(this.fragContextChanged(e)){this.warn(`Fragment ${e.sn}${o.part?" p: "+o.part.index:""} of level ${e.level} was dropped during download.`),this.fragmentTracker.removeFragment(e);return}e.stats.chunkCount++,this._handleFragmentLoadProgress(o)};this._doFragLoad(e,t,r,i).then(o=>{if(!o)return;const s=this.state;if(this.fragContextChanged(e)){(s===Se.FRAG_LOADING||!this.fragCurrent&&s===Se.PARSING)&&(this.fragmentTracker.removeFragment(e),this.state=Se.IDLE);return}"payload"in o&&(this.log(`Loaded fragment ${e.sn} of level ${e.level}`),this.hls.trigger(P.FRAG_LOADED,o)),this._handleFragmentLoadComplete(o)}).catch(o=>{this.state===Se.STOPPED||this.state===Se.ERROR||(this.warn(`Frag error: ${(o==null?void 0:o.message)||o}`),this.resetFragmentLoading(e))})}clearTrackerIfNeeded(e){var t;const{fragmentTracker:r}=this;if(r.getState(e)===Xt.APPENDING){const o=e.type,s=this.getFwdBufferInfo(this.mediaBuffer,o),a=Math.max(e.duration,s?s.len:this.config.maxBufferLength),l=this.backtrackFragment;((l?e.sn-l.sn:0)===1||this.reduceMaxBufferLength(a,e.duration))&&r.removeFragment(e)}else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?r.removeAllFragments():r.hasParts(e.type)&&(r.detectPartialFragments({frag:e,part:null,stats:e.stats,id:e.type}),r.getState(e)===Xt.PARTIAL&&r.removeFragment(e))}checkLiveUpdate(e){if(e.updated&&!e.live){const t=e.fragments[e.fragments.length-1];this.fragmentTracker.detectPartialFragments({frag:t,part:null,stats:t.stats,id:t.type})}e.fragments[0]||(e.deltaUpdateFailed=!0)}flushMainBuffer(e,t,r=null){if(!(e-t))return;const i={startOffset:e,endOffset:t,type:r};this.hls.trigger(P.BUFFER_FLUSHING,i)}_loadInitSegment(e,t){this._doFragLoad(e,t).then(r=>{if(!r||this.fragContextChanged(e)||!this.levels)throw new Error("init load aborted");return r}).then(r=>{const{hls:i}=this,{payload:o}=r,s=e.decryptdata;if(o&&o.byteLength>0&&s!=null&&s.key&&s.iv&&s.method==="AES-128"){const a=self.performance.now();return this.decrypter.decrypt(new Uint8Array(o),s.key.buffer,s.iv.buffer).catch(l=>{throw i.trigger(P.ERROR,{type:Ze.MEDIA_ERROR,details:be.FRAG_DECRYPT_ERROR,fatal:!1,error:l,reason:l.message,frag:e}),l}).then(l=>{const c=self.performance.now();return i.trigger(P.FRAG_DECRYPTED,{frag:e,payload:l,stats:{tstart:a,tdecrypt:c}}),r.payload=l,this.completeInitSegmentLoad(r)})}return this.completeInitSegmentLoad(r)}).catch(r=>{this.state===Se.STOPPED||this.state===Se.ERROR||(this.warn(r),this.resetFragmentLoading(e))})}completeInitSegmentLoad(e){const{levels:t}=this;if(!t)throw new Error("init load aborted, missing levels");const r=e.frag.stats;this.state=Se.IDLE,e.frag.data=new Uint8Array(e.payload),r.parsing.start=r.buffering.start=self.performance.now(),r.parsing.end=r.buffering.end=self.performance.now(),this.tick()}fragContextChanged(e){const{fragCurrent:t}=this;return!e||!t||e.sn!==t.sn||e.level!==t.level}fragBufferedComplete(e,t){var r,i,o,s;const a=this.mediaBuffer?this.mediaBuffer:this.media;if(this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.playlistType===Ye.MAIN?"level":"track"} ${e.level} (frag:[${((r=e.startPTS)!=null?r:NaN).toFixed(3)}-${((i=e.endPTS)!=null?i:NaN).toFixed(3)}] > buffer:${a?E5.toString(wt.getBuffered(a)):"(detached)"})`),e.sn!=="initSegment"){var l;if(e.type!==Ye.SUBTITLE){const d=e.elementaryStreams;if(!Object.keys(d).some(u=>!!d[u])){this.state=Se.IDLE;return}}const c=(l=this.levels)==null?void 0:l[e.level];c!=null&&c.fragmentError&&(this.log(`Resetting level fragment error count of ${c.fragmentError} on frag buffered`),c.fragmentError=0)}this.state=Se.IDLE,a&&(!this.loadedmetadata&&e.type==Ye.MAIN&&a.buffered.length&&((o=this.fragCurrent)==null?void 0:o.sn)===((s=this.fragPrevious)==null?void 0:s.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())}seekToStartPos(){}_handleFragmentLoadComplete(e){const{transmuxer:t}=this;if(!t)return;const{frag:r,part:i,partsLoaded:o}=e,s=!o||o.length===0||o.some(l=>!l),a=new uf(r.level,r.sn,r.stats.chunkCount+1,0,i?i.index:-1,!s);t.flush(a)}_handleFragmentLoadProgress(e){}_doFragLoad(e,t,r=null,i){var o;const s=t==null?void 0:t.details;if(!this.levels||!s)throw new Error(`frag load aborted, missing level${s?"":" detail"}s`);let a=null;if(e.encrypted&&!((o=e.decryptdata)!=null&&o.key)?(this.log(`Loading key for ${e.sn} of [${s.startSN}-${s.endSN}], ${this.logPrefix==="[stream-controller]"?"level":"track"} ${e.level}`),this.state=Se.KEY_LOADING,this.fragCurrent=e,a=this.keyLoader.load(e).then(d=>{if(!this.fragContextChanged(d.frag))return this.hls.trigger(P.KEY_LOADED,d),this.state===Se.KEY_LOADING&&(this.state=Se.IDLE),d}),this.hls.trigger(P.KEY_LOADING,{frag:e}),this.fragCurrent===null&&(a=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))):!e.encrypted&&s.encryptedFragments.length&&this.keyLoader.loadClear(e,s.encryptedFragments),r=Math.max(e.start,r||0),this.config.lowLatencyMode&&e.sn!=="initSegment"){const d=s.partList;if(d&&i){r>e.end&&s.fragmentHint&&(e=s.fragmentHint);const u=this.getNextPart(d,e,r);if(u>-1){const f=d[u];this.log(`Loading part sn: ${e.sn} p: ${f.index} cc: ${e.cc} of playlist [${s.startSN}-${s.endSN}] parts [0-${u}-${d.length-1}] ${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`),this.nextLoadPosition=f.start+f.duration,this.state=Se.FRAG_LOADING;let h;return a?h=a.then(p=>!p||this.fragContextChanged(p.frag)?null:this.doFragPartsLoad(e,f,t,i)).catch(p=>this.handleFragLoadError(p)):h=this.doFragPartsLoad(e,f,t,i).catch(p=>this.handleFragLoadError(p)),this.hls.trigger(P.FRAG_LOADING,{frag:e,part:f,targetBufferTime:r}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):h}else if(!e.url||this.loadedEndOfParts(d,r))return Promise.resolve(null)}}this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${s?"of ["+s.startSN+"-"+s.endSN+"] ":""}${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(r.toFixed(3))}`),$e(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=Se.FRAG_LOADING;const l=this.config.progressive;let c;return l&&a?c=a.then(d=>!d||this.fragContextChanged(d==null?void 0:d.frag)?null:this.fragmentLoader.load(e,i)).catch(d=>this.handleFragLoadError(d)):c=Promise.all([this.fragmentLoader.load(e,l?i:void 0),a]).then(([d])=>(!l&&d&&i&&i(d),d)).catch(d=>this.handleFragLoadError(d)),this.hls.trigger(P.FRAG_LOADING,{frag:e,targetBufferTime:r}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):c}doFragPartsLoad(e,t,r,i){return new Promise((o,s)=>{var a;const l=[],c=(a=r.details)==null?void 0:a.partList,d=u=>{this.fragmentLoader.loadPart(e,u,i).then(f=>{l[u.index]=f;const h=f.part;this.hls.trigger(P.FRAG_LOADED,f);const p=Yp(r,e.sn,u.index+1)||Hy(c,e.sn,u.index+1);if(p)d(p);else return o({frag:e,part:h,partsLoaded:l})}).catch(s)};d(t)})}handleFragLoadError(e){if("data"in e){const t=e.data;e.data&&t.details===be.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):this.hls.trigger(P.ERROR,t)}else this.hls.trigger(P.ERROR,{type:Ze.OTHER_ERROR,details:be.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0});return null}_handleTransmuxerFlush(e){const t=this.getCurrentContext(e);if(!t||this.state!==Se.PARSING){!this.fragCurrent&&this.state!==Se.STOPPED&&this.state!==Se.ERROR&&(this.state=Se.IDLE);return}const{frag:r,part:i,level:o}=t,s=self.performance.now();r.stats.parsing.end=s,i&&(i.stats.parsing.end=s),this.updateLevelTiming(r,i,o,e.partial)}getCurrentContext(e){const{levels:t,fragCurrent:r}=this,{level:i,sn:o,part:s}=e;if(!(t!=null&&t[i]))return this.warn(`Levels object was unset while buffering fragment ${o} of level ${i}. The current chunk will not be buffered.`),null;const a=t[i],l=s>-1?Yp(a,o,s):null,c=l?l.fragment:j3(a,o,r);return c?(r&&r!==c&&(c.stats=r.stats),{frag:c,part:l,level:a}):null}bufferFragmentData(e,t,r,i,o){var s;if(!e||this.state!==Se.PARSING)return;const{data1:a,data2:l}=e;let c=a;if(a&&l&&(c=Bn(a,l)),!((s=c)!=null&&s.length))return;const d={type:e.type,frag:t,part:r,chunkMeta:i,parent:t.type,data:c};if(this.hls.trigger(P.BUFFER_APPENDING,d),e.dropped&&e.independent&&!r){if(o)return;this.flushBufferGap(t)}}flushBufferGap(e){const t=this.media;if(!t)return;if(!wt.isBuffered(t,t.currentTime)){this.flushMainBuffer(0,e.start);return}const r=t.currentTime,i=wt.bufferInfo(t,r,0),o=e.duration,s=Math.min(this.config.maxFragLookUpTolerance*2,o*.25),a=Math.max(Math.min(e.start-s,i.end-s),r+s);e.start-a>s&&this.flushMainBuffer(a,e.start)}getFwdBufferInfo(e,t){const r=this.getLoadPosition();return $e(r)?this.getFwdBufferInfoAtPos(e,r,t):null}getFwdBufferInfoAtPos(e,t,r){const{config:{maxBufferHole:i}}=this,o=wt.bufferInfo(e,t,i);if(o.len===0&&o.nextStart!==void 0){const s=this.fragmentTracker.getBufferedFrag(t,r);if(s&&o.nextStart<s.end)return wt.bufferInfo(e,t,Math.max(o.nextStart,i))}return o}getMaxBufferLength(e){const{config:t}=this;let r;return e?r=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):r=t.maxBufferLength,Math.min(r,t.maxMaxBufferLength)}reduceMaxBufferLength(e,t){const r=this.config,i=Math.max(Math.min(e-t,r.maxBufferLength),t),o=Math.max(e-t*3,r.maxMaxBufferLength/2,i);return o>=i?(r.maxMaxBufferLength=o,this.warn(`Reduce max buffer length to ${o}s`),!0):!1}getAppendedFrag(e,t=Ye.MAIN){const r=this.fragmentTracker.getAppendedFrag(e,Ye.MAIN);return r&&"fragment"in r?r.fragment:r}getNextFragment(e,t){const r=t.fragments,i=r.length;if(!i)return null;const{config:o}=this,s=r[0].start;let a;if(t.live){const l=o.initialLiveManifestSize;if(i<l)return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${l})`),null;(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<s)&&(a=this.getInitialLiveFragment(t,r),this.startPosition=this.nextLoadPosition=a?this.hls.liveSyncPosition||a.start:e)}else e<=s&&(a=r[0]);if(!a){const l=o.lowLatencyMode?t.partEnd:t.fragmentEnd;a=this.getFragmentAtPosition(e,l,t)}return this.mapToInitFragWhenRequired(a)}isLoopLoading(e,t){const r=this.fragmentTracker.getState(e);return(r===Xt.OK||r===Xt.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}getNextFragmentLoopLoading(e,t,r,i,o){const s=e.gap,a=this.getNextFragment(this.nextLoadPosition,t);if(a===null)return a;if(e=a,s&&e&&!e.gap&&r.nextStart){const l=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,r.nextStart,i);if(l!==null&&r.len+l.len>=o)return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`),null}return e}mapToInitFragWhenRequired(e){return e!=null&&e.initSegment&&!(e!=null&&e.initSegment.data)&&!this.bitrateTest?e.initSegment:e}getNextPart(e,t,r){let i=-1,o=!1,s=!0;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(s=s&&!c.independent,i>-1&&r<c.start)break;const d=c.loaded;d?i=-1:(o||c.independent||s)&&c.fragment===t&&(i=a),o=d}return i}loadedEndOfParts(e,t){const r=e[e.length-1];return r&&t>r.start&&r.loaded}getInitialLiveFragment(e,t){const r=this.fragPrevious;let i=null;if(r){if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${r.programDateTime}`),i=K3(t,r.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){const o=r.sn+1;if(o>=e.startSN&&o<=e.endSN){const s=t[o-e.startSN];r.cc===s.cc&&(i=s,this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))}i||(i=Y3(t,r.cc),i&&this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))}}else{const o=this.hls.liveSyncPosition;o!==null&&(i=this.getFragmentAtPosition(o,this.bitrateTest?e.fragmentEnd:e.edge,e))}return i}getFragmentAtPosition(e,t,r){const{config:i}=this;let{fragPrevious:o}=this,{fragments:s,endSN:a}=r;const{fragmentHint:l}=r,{maxFragLookUpTolerance:c}=i,d=r.partList,u=!!(i.lowLatencyMode&&d!=null&&d.length&&l);u&&l&&!this.bitrateTest&&(s=s.concat(l),a=l.sn);let f;if(e<t){const h=e>t-c?0:c;f=_l(o,s,e,h)}else f=s[s.length-1];if(f){const h=f.sn-r.startSN,p=this.fragmentTracker.getState(f);if((p===Xt.OK||p===Xt.PARTIAL&&f.gap)&&(o=f),o&&f.sn===o.sn&&(!u||d[0].fragment.sn>f.sn)&&o&&f.level===o.level){const g=s[h+1];f.sn<a&&this.fragmentTracker.getState(g)!==Xt.OK?f=g:f=null}}return f}synchronizeToLiveEdge(e){const{config:t,media:r}=this;if(!r)return;const i=this.hls.liveSyncPosition,o=r.currentTime,s=e.fragments[0].start,a=e.edge,l=o>=s-t.maxFragLookUpTolerance&&o<=a;if(i!==null&&r.duration>i&&(o<i||!l)){const c=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;(!l&&r.readyState<4||o<a-c)&&(this.loadedmetadata||(this.nextLoadPosition=i),r.readyState&&(this.warn(`Playback: ${o.toFixed(3)} is located too far from the end of live sliding playlist: ${a}, reset currentTime to : ${i.toFixed(3)}`),r.currentTime=i))}}alignPlaylists(e,t,r){const i=e.fragments.length;if(!i)return this.warn("No fragments in live playlist"),0;const o=e.fragments[0].start,s=!t,a=e.alignedSliding&&$e(o);if(s||!a&&!o){const{fragPrevious:l}=this;p5(l,r,e);const c=e.fragments[0].start;return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} prev-sn: ${l?l.sn:"na"} fragments: ${i}`),c}return o}waitForCdnTuneIn(e){return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}setStartPosition(e,t){let r=this.startPosition;if(r<t&&(r=-1),r===-1||this.lastCurrentTime===-1){const i=this.startTimeOffset!==null,o=i?this.startTimeOffset:e.startTimeOffset;o!==null&&$e(o)?(r=t+o,o<0&&(r+=e.totalduration),r=Math.min(Math.max(t,r),t+e.totalduration),this.log(`Start time offset ${o} found in ${i?"multivariant":"media"} playlist, adjust startPosition to ${r}`),this.startPosition=r):e.live?r=this.hls.liveSyncPosition||t:this.startPosition=r=0,this.lastCurrentTime=r}this.nextLoadPosition=r}getLoadPosition(){const{media:e}=this;let t=0;return this.loadedmetadata&&e?t=e.currentTime:this.nextLoadPosition&&(t=this.nextLoadPosition),t}handleFragLoadAborted(e,t){this.transmuxer&&e.sn!=="initSegment"&&e.stats.aborted&&(this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} was aborted`),this.resetFragmentLoading(e))}resetFragmentLoading(e){(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==Se.FRAG_LOADING_WAITING_RETRY)&&(this.state=Se.IDLE)}onFragmentOrKeyLoadError(e,t){if(t.chunkMeta&&!t.frag){const d=this.getCurrentContext(t.chunkMeta);d&&(t.frag=d.frag)}const r=t.frag;if(!r||r.type!==e||!this.levels)return;if(this.fragContextChanged(r)){var i;this.warn(`Frag load error must match current frag to retry ${r.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);return}const o=t.details===be.FRAG_GAP;o&&this.fragmentTracker.fragBuffered(r,!0);const s=t.errorAction,{action:a,retryCount:l=0,retryConfig:c}=s||{};if(s&&a===tn.RetryRequest&&c){this.resetStartWhenNotLoaded(this.levelLastLoaded);const d=cf(c,l);this.warn(`Fragment ${r.sn} of ${e} ${r.level} errored with ${t.details}, retrying loading ${l+1}/${c.maxNumRetry} in ${d}ms`),s.resolved=!0,this.retryDate=self.performance.now()+d,this.state=Se.FRAG_LOADING_WAITING_RETRY}else if(c&&s)if(this.resetFragmentErrors(e),l<c.maxNumRetry)!o&&a!==tn.RemoveAlternatePermanently&&(s.resolved=!0);else{se.warn(`${t.details} reached or exceeded max retry (${l})`);return}else(s==null?void 0:s.action)===tn.SendAlternateToPenaltyBox?this.state=Se.WAITING_LEVEL:this.state=Se.ERROR;this.tickImmediate()}reduceLengthAndFlushBuffer(e){if(this.state===Se.PARSING||this.state===Se.PARSED){const t=e.frag,r=e.parent,i=this.getFwdBufferInfo(this.mediaBuffer,r),o=i&&i.len>.5;o&&this.reduceMaxBufferLength(i.len,(t==null?void 0:t.duration)||10);const s=!o;return s&&this.warn(`Buffer full error while media.currentTime is not buffered, flush ${r} buffer`),t&&(this.fragmentTracker.removeFragment(t),this.nextLoadPosition=t.start),this.resetLoadingState(),s}return!1}resetFragmentErrors(e){e===Ye.AUDIO&&(this.fragCurrent=null),this.loadedmetadata||(this.startFragRequested=!1),this.state!==Se.STOPPED&&(this.state=Se.IDLE)}afterBufferFlushed(e,t,r){if(!e)return;const i=wt.getBuffered(e);this.fragmentTracker.detectEvictedFragments(t,i,r),this.state===Se.ENDED&&this.resetLoadingState()}resetLoadingState(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state=Se.IDLE}resetStartWhenNotLoaded(e){if(!this.loadedmetadata){this.startFragRequested=!1;const t=e?e.details:null;t!=null&&t.live?(this.startPosition=-1,this.setStartPosition(t,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}}resetWhenMissingContext(e){this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState()}removeUnbufferedFrags(e=0){this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}updateLevelTiming(e,t,r,i){var o;const s=r.details;if(!s){this.warn("level.details undefined");return}if(!Object.keys(e.elementaryStreams).reduce((l,c)=>{const d=e.elementaryStreams[c];if(d){const u=d.endPTS-d.startPTS;if(u<=0)return this.warn(`Could not parse fragment ${e.sn} ${c} duration reliably (${u})`),l||!1;const f=i?0:$y(s,e,d.startPTS,d.endPTS,d.startDTS,d.endDTS);return this.hls.trigger(P.LEVEL_PTS_UPDATED,{details:s,level:r,drift:f,type:c,frag:e,start:d.startPTS,end:d.endPTS}),!0}return l},!1)&&((o=this.transmuxer)==null?void 0:o.error)===null){const l=new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);if(r.fragmentError===0&&(r.fragmentError++,e.gap=!0,this.fragmentTracker.removeFragment(e),this.fragmentTracker.fragBuffered(e,!0)),this.warn(l.message),this.hls.trigger(P.ERROR,{type:Ze.MEDIA_ERROR,details:be.FRAG_PARSING_ERROR,fatal:!1,error:l,frag:e,reason:`Found no media in msn ${e.sn} of level "${r.url}"`}),!this.hls)return;this.resetTransmuxer()}this.state=Se.PARSED,this.hls.trigger(P.FRAG_PARSED,{frag:e,part:t})}resetTransmuxer(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)}recoverWorkerError(e){e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(),this.resetTransmuxer(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState())}set state(e){const t=this._state;t!==e&&(this._state=e,this.log(`${t}->${e}`))}get state(){return this._state}}class Vy{constructor(){this.chunks=[],this.dataLength=0}push(e){this.chunks.push(e),this.dataLength+=e.length}flush(){const{chunks:e,dataLength:t}=this;let r;if(e.length)e.length===1?r=e[0]:r=w5(e,t);else return new Uint8Array(0);return this.reset(),r}reset(){this.chunks.length=0,this.dataLength=0}}function w5(n,e){const t=new Uint8Array(e);let r=0;for(let i=0;i<n.length;i++){const o=n[i];t.set(o,r),r+=o.length}return t}function C5(){return typeof __HLS_WORKER_BUNDLE__=="function"}function S5(){const n=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],{type:"text/javascript"}),e=self.URL.createObjectURL(n);return{worker:new self.Worker(e),objectURL:e}}function T5(n){const e=new self.URL(n,self.location.href).href;return{worker:new self.Worker(e),scriptURL:e}}function ir(n="",e=9e4){return{type:n,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}class pf{constructor(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}resetInitSegment(e,t,r,i){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}}resetTimeStamp(e){this.initPTS=e,this.resetContiguity()}resetContiguity(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0}canParse(e,t){return!1}appendFrame(e,t,r){}demux(e,t){this.cachedData&&(e=Bn(this.cachedData,e),this.cachedData=null);let r=js(e,0),i=r?r.length:0,o;const s=this._audioTrack,a=this._id3Track,l=r?lf(r):void 0,c=e.length;for((this.basePTS===null||this.frameIndex===0&&$e(l))&&(this.basePTS=k5(l,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),r&&r.length>0&&a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:Wn.audioId3,duration:Number.POSITIVE_INFINITY});i<c;){if(this.canParse(e,i)){const d=this.appendFrame(s,e,i);d?(this.frameIndex++,this.lastPTS=d.sample.pts,i+=d.length,o=i):i=c}else q_(e,i)?(r=js(e,i),a.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:r,type:Wn.audioId3,duration:Number.POSITIVE_INFINITY}),i+=r.length,o=i):i++;if(i===c&&o!==c){const d=Ti(e,o);this.cachedData?this.cachedData=Bn(this.cachedData,d):this.cachedData=d}}return{audioTrack:s,videoTrack:ir(),id3Track:a,textTrack:ir()}}demuxSampleAes(e,t,r){return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))}flush(e){const t=this.cachedData;return t&&(this.cachedData=null,this.demux(t,0)),{audioTrack:this._audioTrack,videoTrack:ir(),id3Track:this._id3Track,textTrack:ir()}}destroy(){}}const k5=(n,e,t)=>{if($e(n))return n*90;const r=t?t.baseTime*9e4/t.timescale:0;return e*9e4+r};function I5(n,e,t,r){let i,o,s,a;const l=navigator.userAgent.toLowerCase(),c=r,d=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];i=((e[t+2]&192)>>>6)+1;const u=(e[t+2]&60)>>>2;if(u>d.length-1){const f=new Error(`invalid ADTS sampling index:${u}`);n.emit(P.ERROR,P.ERROR,{type:Ze.MEDIA_ERROR,details:be.FRAG_PARSING_ERROR,fatal:!0,error:f,reason:f.message});return}return s=(e[t+2]&1)<<2,s|=(e[t+3]&192)>>>6,se.log(`manifest codec:${r}, ADTS type:${i}, samplingIndex:${u}`),/firefox/i.test(l)?u>=6?(i=5,a=new Array(4),o=u-3):(i=2,a=new Array(2),o=u):l.indexOf("android")!==-1?(i=2,a=new Array(2),o=u):(i=5,a=new Array(4),r&&(r.indexOf("mp4a.40.29")!==-1||r.indexOf("mp4a.40.5")!==-1)||!r&&u>=6?o=u-3:((r&&r.indexOf("mp4a.40.2")!==-1&&(u>=6&&s===1||/vivaldi/i.test(l))||!r&&s===1)&&(i=2,a=new Array(2)),o=u)),a[0]=i<<3,a[0]|=(u&14)>>1,a[1]|=(u&1)<<7,a[1]|=s<<3,i===5&&(a[1]|=(o&14)>>1,a[2]=(o&1)<<7,a[2]|=8,a[3]=0),{config:a,samplerate:d[u],channelCount:s,codec:"mp4a.40."+i,manifestCodec:c}}function qy(n,e){return n[e]===255&&(n[e+1]&246)===240}function Yy(n,e){return n[e+1]&1?7:9}function mf(n,e){return(n[e+3]&3)<<11|n[e+4]<<3|(n[e+5]&224)>>>5}function L5(n,e){return e+5<n.length}function Pl(n,e){return e+1<n.length&&qy(n,e)}function R5(n,e){return L5(n,e)&&qy(n,e)&&mf(n,e)<=n.length-e}function _5(n,e){if(Pl(n,e)){const t=Yy(n,e);if(e+t>=n.length)return!1;const r=mf(n,e);if(r<=t)return!1;const i=e+r;return i===n.length||Pl(n,i)}return!1}function Xy(n,e,t,r,i){if(!n.samplerate){const o=I5(e,t,r,i);if(!o)return;n.config=o.config,n.samplerate=o.samplerate,n.channelCount=o.channelCount,n.codec=o.codec,n.manifestCodec=o.manifestCodec,se.log(`parsed codec:${n.codec}, rate:${o.samplerate}, channels:${o.channelCount}`)}}function Zy(n){return 1024*9e4/n}function D5(n,e){const t=Yy(n,e);if(e+t<=n.length){const r=mf(n,e)-t;if(r>0)return{headerLength:t,frameLength:r}}}function Qy(n,e,t,r,i){const o=Zy(n.samplerate),s=r+i*o,a=D5(e,t);let l;if(a){const{frameLength:u,headerLength:f}=a,h=f+u,p=Math.max(0,t+h-e.length);p?(l=new Uint8Array(h-f),l.set(e.subarray(t+f,e.length),0)):l=e.subarray(t+f,t+h);const m={unit:l,pts:s};return p||n.samples.push(m),{sample:m,length:h,missing:p}}const c=e.length-t;return l=new Uint8Array(c),l.set(e.subarray(t,e.length),0),{sample:{unit:l,pts:s},length:c,missing:-1}}let Ma=null;const P5=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],B5=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],O5=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],F5=[0,1,1,4];function Jy(n,e,t,r,i){if(t+24>e.length)return;const o=ev(e,t);if(o&&t+o.frameLength<=e.length){const s=o.samplesPerFrame*9e4/o.sampleRate,a=r+i*s,l={unit:e.subarray(t,t+o.frameLength),pts:a,dts:a};return n.config=[],n.channelCount=o.channelCount,n.samplerate=o.sampleRate,n.samples.push(l),{sample:l,length:o.frameLength,missing:0}}}function ev(n,e){const t=n[e+1]>>3&3,r=n[e+1]>>1&3,i=n[e+2]>>4&15,o=n[e+2]>>2&3;if(t!==1&&i!==0&&i!==15&&o!==3){const s=n[e+2]>>1&1,a=n[e+3]>>6,l=t===3?3-r:r===3?3:4,c=P5[l*14+i-1]*1e3,u=B5[(t===3?0:t===2?1:2)*3+o],f=a===3?1:2,h=O5[t][r],p=F5[r],m=h*8*p,g=Math.floor(h*c/u+s)*p;if(Ma===null){const S=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);Ma=S?parseInt(S[1]):0}return!!Ma&&Ma<=87&&r===2&&c>=224e3&&a===0&&(n[e+3]=n[e+3]|128),{sampleRate:u,channelCount:f,frameLength:g,samplesPerFrame:m}}}function gf(n,e){return n[e]===255&&(n[e+1]&224)===224&&(n[e+1]&6)!==0}function tv(n,e){return e+1<n.length&&gf(n,e)}function M5(n,e){return gf(n,e)&&4<=n.length-e}function nv(n,e){if(e+1<n.length&&gf(n,e)){const r=ev(n,e);let i=4;r!=null&&r.frameLength&&(i=r.frameLength);const o=e+i;return o===n.length||tv(n,o)}return!1}class N5 extends pf{constructor(e,t){super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=js(e,0);let r=(t==null?void 0:t.length)||0;if(nv(e,r))return!1;for(let i=e.length;r<i;r++)if(_5(e,r))return se.log("ADTS sync word found !"),!0;return!1}canParse(e,t){return R5(e,t)}appendFrame(e,t,r){Xy(e,this.observer,t,r,e.manifestCodec);const i=Qy(e,t,r,this.basePTS,this.frameIndex);if(i&&i.missing===0)return i}}const z5=/\/emsg[-/]ID3/i;class $5{constructor(e,t){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}resetTimeStamp(){}resetInitSegment(e,t,r,i){const o=this.videoTrack=ir("video",1),s=this.audioTrack=ir("audio",1),a=this.txtTrack=ir("text",1);if(this.id3Track=ir("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;const l=Dy(e);if(l.video){const{id:c,timescale:d,codec:u}=l.video;o.id=c,o.timescale=a.timescale=d,o.codec=u}if(l.audio){const{id:c,timescale:d,codec:u}=l.audio;s.id=c,s.timescale=d,s.codec=u}a.id=Ly.text,o.sampleDuration=0,o.duration=s.duration=i}resetContiguity(){this.remainderData=null}static probe(e){return r3(e)}demux(e,t){this.timeOffset=t;let r=e;const i=this.videoTrack,o=this.txtTrack;if(this.config.progressive){this.remainderData&&(r=Bn(this.remainderData,e));const a=u3(r);this.remainderData=a.remainder,i.samples=a.valid||new Uint8Array}else i.samples=r;const s=this.extractID3Track(i,t);return o.samples=Rp(t,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:s,textTrack:this.txtTrack}}flush(){const e=this.timeOffset,t=this.videoTrack,r=this.txtTrack;t.samples=this.remainderData||new Uint8Array,this.remainderData=null;const i=this.extractID3Track(t,this.timeOffset);return r.samples=Rp(e,t),{videoTrack:t,audioTrack:ir(),id3Track:i,textTrack:ir()}}extractID3Track(e,t){const r=this.id3Track;if(e.samples.length){const i=tt(e.samples,["emsg"]);i&&i.forEach(o=>{const s=p3(o);if(z5.test(s.schemeIdUri)){const a=$e(s.presentationTime)?s.presentationTime/s.timeScale:t+s.presentationTimeDelta/s.timeScale;let l=s.eventDuration===4294967295?Number.POSITIVE_INFINITY:s.eventDuration/s.timeScale;l<=.001&&(l=Number.POSITIVE_INFINITY);const c=s.payload;r.samples.push({data:c,len:c.byteLength,dts:a,pts:a,type:Wn.emsg,duration:l})}})}return r}demuxSampleAes(e,t,r){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}destroy(){}}const rv=(n,e)=>{let t=0,r=5;e+=r;const i=new Uint32Array(1),o=new Uint32Array(1),s=new Uint8Array(1);for(;r>0;){s[0]=n[e];const a=Math.min(r,8),l=8-a;o[0]=4278190080>>>24+l<<l,i[0]=(s[0]&o[0])>>l,t=t?t<<a|i[0]:i[0],e+=1,r-=a}return t};class U5 extends pf{constructor(e){super(),this.observer=void 0,this.observer=e}resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/ac-3",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"ac3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}canParse(e,t){return t+64<e.length}appendFrame(e,t,r){const i=iv(e,t,r,this.basePTS,this.frameIndex);if(i!==-1)return{sample:e.samples[e.samples.length-1],length:i,missing:0}}static probe(e){if(!e)return!1;const t=js(e,0);if(!t)return!1;const r=t.length;return e[r]===11&&e[r+1]===119&&lf(t)!==void 0&&rv(e,r)<16}}function iv(n,e,t,r,i){if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;const o=e[t+4]>>6;if(o>=3)return-1;const a=[48e3,44100,32e3][o],l=e[t+4]&63,d=[64,69,96,64,70,96,80,87,120,80,88,120,96,104,144,96,105,144,112,121,168,112,122,168,128,139,192,128,140,192,160,174,240,160,175,240,192,208,288,192,209,288,224,243,336,224,244,336,256,278,384,256,279,384,320,348,480,320,349,480,384,417,576,384,418,576,448,487,672,448,488,672,512,557,768,512,558,768,640,696,960,640,697,960,768,835,1152,768,836,1152,896,975,1344,896,976,1344,1024,1114,1536,1024,1115,1536,1152,1253,1728,1152,1254,1728,1280,1393,1920,1280,1394,1920][l*3+o]*2;if(t+d>e.length)return-1;const u=e[t+6]>>5;let f=0;u===2?f+=2:(u&1&&u!==1&&(f+=2),u&4&&(f+=2));const h=(e[t+6]<<8|e[t+7])>>12-f&1,m=[2,1,2,3,3,4,4,5][u]+h,g=e[t+5]>>3,y=e[t+5]&7,E=new Uint8Array([o<<6|g<<1|y>>2,(y&3)<<6|u<<3|h<<2|l>>4,l<<4&224]),S=1536/a*9e4,C=r+i*S,k=e.subarray(t,t+d);return n.config=E,n.channelCount=m,n.samplerate=a,n.samples.push({unit:k,pts:C}),d}class H5{constructor(){this.VideoSample=null}createVideoSample(e,t,r,i){return{key:e,frame:!1,pts:t,dts:r,units:[],debug:i,length:0}}getLastNalUnit(e){var t;let r=this.VideoSample,i;if((!r||r.units.length===0)&&(r=e[e.length-1]),(t=r)!=null&&t.units){const o=r.units;i=o[o.length-1]}return i}pushAccessUnit(e,t){if(e.units.length&&e.frame){if(e.pts===void 0){const r=t.samples,i=r.length;if(i){const o=r[i-1];e.pts=o.pts,e.dts=o.dts}else{t.dropped++;return}}t.samples.push(e)}e.debug.length&&se.log(e.pts+"/"+e.dts+":"+e.debug)}}class im{constructor(e){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}loadWord(){const e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),o=Math.min(4,t);if(o===0)throw new Error("no bytes available");i.set(e.subarray(r,r+o)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=o*8,this.bytesAvailable-=o}skipBits(e){let t;e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}readBits(e){let t=Math.min(this.bitsAvailable,e);const r=this.word>>>32-t;if(e>32&&se.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return t=e-t,t>0&&this.bitsAvailable?r<<t|this.readBits(t):r}skipLZ(){let e;for(e=0;e<this.bitsAvailable;++e)if(this.word&2147483648>>>e)return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}skipUEG(){this.skipBits(1+this.skipLZ())}skipEG(){this.skipBits(1+this.skipLZ())}readUEG(){const e=this.skipLZ();return this.readBits(e+1)-1}readEG(){const e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}readBoolean(){return this.readBits(1)===1}readUByte(){return this.readBits(8)}readUShort(){return this.readBits(16)}readUInt(){return this.readBits(32)}skipScalingList(e){let t=8,r=8,i;for(let o=0;o<e;o++)r!==0&&(i=this.readEG(),r=(t+i+256)%256),t=r===0?t:r}readSPS(){let e=0,t=0,r=0,i=0,o,s,a;const l=this.readUByte.bind(this),c=this.readBits.bind(this),d=this.readUEG.bind(this),u=this.readBoolean.bind(this),f=this.skipBits.bind(this),h=this.skipEG.bind(this),p=this.skipUEG.bind(this),m=this.skipScalingList.bind(this);l();const g=l();if(c(5),f(3),l(),p(),g===100||g===110||g===122||g===244||g===44||g===83||g===86||g===118||g===128){const M=d();if(M===3&&f(1),p(),p(),f(1),u())for(s=M!==3?8:12,a=0;a<s;a++)u()&&(a<6?m(16):m(64))}p();const y=d();if(y===0)d();else if(y===1)for(f(1),h(),h(),o=d(),a=0;a<o;a++)h();p(),f(1);const E=d(),S=d(),C=c(1);C===0&&f(1),f(1),u()&&(e=d(),t=d(),r=d(),i=d());let k=[1,1];if(u()&&u())switch(l()){case 1:k=[1,1];break;case 2:k=[12,11];break;case 3:k=[10,11];break;case 4:k=[16,11];break;case 5:k=[40,33];break;case 6:k=[24,11];break;case 7:k=[20,11];break;case 8:k=[32,11];break;case 9:k=[80,33];break;case 10:k=[18,11];break;case 11:k=[15,11];break;case 12:k=[64,33];break;case 13:k=[160,99];break;case 14:k=[4,3];break;case 15:k=[3,2];break;case 16:k=[2,1];break;case 255:{k=[l()<<8|l(),l()<<8|l()];break}}return{width:Math.ceil((E+1)*16-e*2-t*2),height:(2-C)*(S+1)*16-(C?2:4)*(r+i),pixelRatio:k}}readSliceType(){return this.readUByte(),this.readUEG(),this.readUEG()}}class W5 extends H5{parseAVCPES(e,t,r,i,o){const s=this.parseAVCNALu(e,r.data);let a=this.VideoSample,l,c=!1;r.data=null,a&&s.length&&!e.audFound&&(this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,r.pts,r.dts,"")),s.forEach(d=>{var u;switch(d.type){case 1:{let m=!1;l=!0;const g=d.data;if(c&&g.length>4){const y=new im(g).readSliceType();(y===2||y===4||y===7||y===9)&&(m=!0)}if(m){var f;(f=a)!=null&&f.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null)}a||(a=this.VideoSample=this.createVideoSample(!0,r.pts,r.dts,"")),a.frame=!0,a.key=m;break}case 5:l=!0,(u=a)!=null&&u.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null),a||(a=this.VideoSample=this.createVideoSample(!0,r.pts,r.dts,"")),a.key=!0,a.frame=!0;break;case 6:{l=!0,By(d.data,1,r.pts,t.samples);break}case 7:{var h,p;l=!0,c=!0;const m=d.data,y=new im(m).readSPS();if(!e.sps||e.width!==y.width||e.height!==y.height||((h=e.pixelRatio)==null?void 0:h[0])!==y.pixelRatio[0]||((p=e.pixelRatio)==null?void 0:p[1])!==y.pixelRatio[1]){e.width=y.width,e.height=y.height,e.pixelRatio=y.pixelRatio,e.sps=[m],e.duration=o;const E=m.subarray(1,4);let S="avc1.";for(let C=0;C<3;C++){let k=E[C].toString(16);k.length<2&&(k="0"+k),S+=k}e.codec=S}break}case 8:l=!0,e.pps=[d.data];break;case 9:l=!0,e.audFound=!0,a&&this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,r.pts,r.dts,"");break;case 12:l=!0;break;default:l=!1,a&&(a.debug+="unknown NAL "+d.type+" ");break}a&&l&&a.units.push(d)}),i&&a&&(this.pushAccessUnit(a,e),this.VideoSample=null)}parseAVCNALu(e,t){const r=t.byteLength;let i=e.naluState||0;const o=i,s=[];let a=0,l,c,d,u=-1,f=0;for(i===-1&&(u=0,f=t[0]&31,i=0,a=1);a<r;){if(l=t[a++],!i){i=l?0:1;continue}if(i===1){i=l?0:2;continue}if(!l)i=3;else if(l===1){if(c=a-i-1,u>=0){const h={data:t.subarray(u,c),type:f};s.push(h)}else{const h=this.getLastNalUnit(e.samples);h&&(o&&a<=4-o&&h.state&&(h.data=h.data.subarray(0,h.data.byteLength-o)),c>0&&(h.data=Bn(h.data,t.subarray(0,c)),h.state=0))}a<r?(d=t[a]&31,u=a,f=d,i=0):i=-1}else i=0}if(u>=0&&i>=0){const h={data:t.subarray(u,r),type:f,state:i};s.push(h)}if(s.length===0){const h=this.getLastNalUnit(e.samples);h&&(h.data=Bn(h.data,t))}return e.naluState=i,s}}class j5{constructor(e,t,r){this.keyData=void 0,this.decrypter=void 0,this.keyData=r,this.decrypter=new ff(t,{removePKCS7Padding:!1})}decryptBuffer(e){return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer)}decryptAacSample(e,t,r){const i=e[t].unit;if(i.length<=16)return;const o=i.subarray(16,i.length-i.length%16),s=o.buffer.slice(o.byteOffset,o.byteOffset+o.length);this.decryptBuffer(s).then(a=>{const l=new Uint8Array(a);i.set(l,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,r)})}decryptAacSamples(e,t,r){for(;;t++){if(t>=e.length){r();return}if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,r),!this.decrypter.isSync()))return}}getAvcEncryptedData(e){const t=Math.floor((e.length-48)/160)*16+16,r=new Int8Array(t);let i=0;for(let o=32;o<e.length-16;o+=160,i+=16)r.set(e.subarray(o,o+16),i);return r}getAvcDecryptedUnit(e,t){const r=new Uint8Array(t);let i=0;for(let o=32;o<e.length-16;o+=160,i+=16)e.set(r.subarray(i,i+16),o);return e}decryptAvcSample(e,t,r,i,o){const s=Oy(o.data),a=this.getAvcEncryptedData(s);this.decryptBuffer(a.buffer).then(l=>{o.data=this.getAvcDecryptedUnit(s,l),this.decrypter.isSync()||this.decryptAvcSamples(e,t,r+1,i)})}decryptAvcSamples(e,t,r,i){if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;t++,r=0){if(t>=e.length){i();return}const o=e[t].units;for(;!(r>=o.length);r++){const s=o[r];if(!(s.data.length<=48||s.type!==1&&s.type!==5)&&(this.decryptAvcSample(e,t,r,i,s),!this.decrypter.isSync()))return}}}}const Yt=188;class Wr{constructor(e,t,r){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._videoTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.remainderData=null,this.videoParser=void 0,this.observer=e,this.config=t,this.typeSupported=r,this.videoParser=new W5}static probe(e){const t=Wr.syncOffset(e);return t>0&&se.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`),t!==-1}static syncOffset(e){const t=e.length;let r=Math.min(Yt*5,t-Yt)+1,i=0;for(;i<r;){let o=!1,s=-1,a=0;for(let l=i;l<t;l+=Yt)if(e[l]===71&&(t-l===Yt||e[l+Yt]===71)){if(a++,s===-1&&(s=l,s!==0&&(r=Math.min(s+Yt*99,e.length-Yt)+1)),o||(o=Zd(e,l)===0),o&&a>1&&(s===0&&a>2||l+Yt>r))return s}else{if(a)return-1;break}i++}return-1}static createTrack(e,t){return{container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:Ly[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}}resetInitSegment(e,t,r,i){this.pmtParsed=!1,this._pmtId=-1,this._videoTrack=Wr.createTrack("video"),this._audioTrack=Wr.createTrack("audio",i),this._id3Track=Wr.createTrack("id3"),this._txtTrack=Wr.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=r,this._duration=i}resetTimeStamp(){}resetContiguity(){const{_audioTrack:e,_videoTrack:t,_id3Track:r}=this;e&&(e.pesData=null),t&&(t.pesData=null),r&&(r.pesData=null),this.aacOverFlow=null,this.remainderData=null}demux(e,t,r=!1,i=!1){r||(this.sampleAes=null);let o;const s=this._videoTrack,a=this._audioTrack,l=this._id3Track,c=this._txtTrack;let d=s.pid,u=s.pesData,f=a.pid,h=l.pid,p=a.pesData,m=l.pesData,g=null,y=this.pmtParsed,E=this._pmtId,S=e.length;if(this.remainderData&&(e=Bn(this.remainderData,e),S=e.length,this.remainderData=null),S<Yt&&!i)return this.remainderData=e,{audioTrack:a,videoTrack:s,id3Track:l,textTrack:c};const C=Math.max(0,Wr.syncOffset(e));S-=(S-C)%Yt,S<e.byteLength&&!i&&(this.remainderData=new Uint8Array(e.buffer,S,e.buffer.byteLength-S));let k=0;for(let T=C;T<S;T+=Yt)if(e[T]===71){const z=!!(e[T+1]&64),F=Zd(e,T),O=(e[T+3]&48)>>4;let V;if(O>1){if(V=T+5+e[T+4],V===T+Yt)continue}else V=T+4;switch(F){case d:z&&(u&&(o=oo(u))&&this.videoParser.parseAVCPES(s,c,o,!1,this._duration),u={data:[],size:0}),u&&(u.data.push(e.subarray(V,T+Yt)),u.size+=T+Yt-V);break;case f:if(z){if(p&&(o=oo(p)))switch(a.segmentCodec){case"aac":this.parseAACPES(a,o);break;case"mp3":this.parseMPEGPES(a,o);break;case"ac3":this.parseAC3PES(a,o);break}p={data:[],size:0}}p&&(p.data.push(e.subarray(V,T+Yt)),p.size+=T+Yt-V);break;case h:z&&(m&&(o=oo(m))&&this.parseID3PES(l,o),m={data:[],size:0}),m&&(m.data.push(e.subarray(V,T+Yt)),m.size+=T+Yt-V);break;case 0:z&&(V+=e[V]+1),E=this._pmtId=G5(e,V);break;case E:{z&&(V+=e[V]+1);const _=K5(e,V,this.typeSupported,r,this.observer);d=_.videoPid,d>0&&(s.pid=d,s.segmentCodec=_.segmentVideoCodec),f=_.audioPid,f>0&&(a.pid=f,a.segmentCodec=_.segmentAudioCodec),h=_.id3Pid,h>0&&(l.pid=h),g!==null&&!y&&(se.warn(`MPEG-TS PMT found at ${T} after unknown PID '${g}'. Backtracking to sync byte @${C} to parse all TS packets.`),g=null,T=C-188),y=this.pmtParsed=!0;break}case 17:case 8191:break;default:g=F;break}}else k++;k>0&&Bl(this.observer,new Error(`Found ${k} TS packet/s that do not start with 0x47`)),s.pesData=u,a.pesData=p,l.pesData=m;const M={audioTrack:a,videoTrack:s,id3Track:l,textTrack:c};return i&&this.extractRemainingSamples(M),M}flush(){const{remainderData:e}=this;this.remainderData=null;let t;return e?t=this.demux(e,-1,!1,!0):t={videoTrack:this._videoTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}extractRemainingSamples(e){const{audioTrack:t,videoTrack:r,id3Track:i,textTrack:o}=e,s=r.pesData,a=t.pesData,l=i.pesData;let c;if(s&&(c=oo(s))?(this.videoParser.parseAVCPES(r,o,c,!0,this._duration),r.pesData=null):r.pesData=s,a&&(c=oo(a))){switch(t.segmentCodec){case"aac":this.parseAACPES(t,c);break;case"mp3":this.parseMPEGPES(t,c);break;case"ac3":this.parseAC3PES(t,c);break}t.pesData=null}else a!=null&&a.size&&se.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=a;l&&(c=oo(l))?(this.parseID3PES(i,c),i.pesData=null):i.pesData=l}demuxSampleAes(e,t,r){const i=this.demux(e,r,!0,!this.config.progressive),o=this.sampleAes=new j5(this.observer,this.config,t);return this.decrypt(i,o)}decrypt(e,t){return new Promise(r=>{const{audioTrack:i,videoTrack:o}=e;i.samples&&i.segmentCodec==="aac"?t.decryptAacSamples(i.samples,0,()=>{o.samples?t.decryptAvcSamples(o.samples,0,0,()=>{r(e)}):r(e)}):o.samples&&t.decryptAvcSamples(o.samples,0,0,()=>{r(e)})})}destroy(){this._duration=0}parseAACPES(e,t){let r=0;const i=this.aacOverFlow;let o=t.data;if(i){this.aacOverFlow=null;const u=i.missing,f=i.sample.unit.byteLength;if(u===-1)o=Bn(i.sample.unit,o);else{const h=f-u;i.sample.unit.set(o.subarray(0,u),h),e.samples.push(i.sample),r=i.missing}}let s,a;for(s=r,a=o.length;s<a-1&&!Pl(o,s);s++);if(s!==r){let u;const f=s<a-1;if(f?u=`AAC PES did not start with ADTS header,offset:${s}`:u="No ADTS header found in AAC PES",Bl(this.observer,new Error(u),f),!f)return}Xy(e,this.observer,o,s,this.audioCodec);let l;if(t.pts!==void 0)l=t.pts;else if(i){const u=Zy(e.samplerate);l=i.sample.pts+u}else{se.warn("[tsdemuxer]: AAC PES unknown PTS");return}let c=0,d;for(;s<a;)if(d=Qy(e,o,s,l,c),s+=d.length,d.missing){this.aacOverFlow=d;break}else for(c++;s<a-1&&!Pl(o,s);s++);}parseMPEGPES(e,t){const r=t.data,i=r.length;let o=0,s=0;const a=t.pts;if(a===void 0){se.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;s<i;)if(tv(r,s)){const l=Jy(e,r,s,a,o);if(l)s+=l.length,o++;else break}else s++}parseAC3PES(e,t){{const r=t.data,i=t.pts;if(i===void 0){se.warn("[tsdemuxer]: AC3 PES unknown PTS");return}const o=r.length;let s=0,a=0,l;for(;a<o&&(l=iv(e,r,a,i,s++))>0;)a+=l}}parseID3PES(e,t){if(t.pts===void 0){se.warn("[tsdemuxer]: ID3 PES unknown PTS");return}const r=Ut({},t,{type:this._videoTrack?Wn.emsg:Wn.audioId3,duration:Number.POSITIVE_INFINITY});e.samples.push(r)}}function Zd(n,e){return((n[e+1]&31)<<8)+n[e+2]}function G5(n,e){return(n[e+10]&31)<<8|n[e+11]}function K5(n,e,t,r,i){const o={audioPid:-1,videoPid:-1,id3Pid:-1,segmentVideoCodec:"avc",segmentAudioCodec:"aac"},s=(n[e+1]&15)<<8|n[e+2],a=e+3+s-4,l=(n[e+10]&15)<<8|n[e+11];for(e+=12+l;e<a;){const c=Zd(n,e),d=(n[e+3]&15)<<8|n[e+4];switch(n[e]){case 207:if(!r){Zc("ADTS AAC");break}case 15:o.audioPid===-1&&(o.audioPid=c);break;case 21:o.id3Pid===-1&&(o.id3Pid=c);break;case 219:if(!r){Zc("H.264");break}case 27:o.videoPid===-1&&(o.videoPid=c,o.segmentVideoCodec="avc");break;case 3:case 4:!t.mpeg&&!t.mp3?se.log("MPEG audio found, not supported in this browser"):o.audioPid===-1&&(o.audioPid=c,o.segmentAudioCodec="mp3");break;case 193:if(!r){Zc("AC-3");break}case 129:t.ac3?o.audioPid===-1&&(o.audioPid=c,o.segmentAudioCodec="ac3"):se.log("AC-3 audio found, not supported in this browser");break;case 6:if(o.audioPid===-1&&d>0){let u=e+5,f=d;for(;f>2;){switch(n[u]){case 106:t.ac3!==!0?se.log("AC-3 audio found, not supported in this browser for now"):(o.audioPid=c,o.segmentAudioCodec="ac3");break}const p=n[u+1]+2;u+=p,f-=p}}break;case 194:case 135:return Bl(i,new Error("Unsupported EC-3 in M2TS found")),o;case 36:return Bl(i,new Error("Unsupported HEVC in M2TS found")),o}e+=d+5}return o}function Bl(n,e,t){se.warn(`parsing error: ${e.message}`),n.emit(P.ERROR,P.ERROR,{type:Ze.MEDIA_ERROR,details:be.FRAG_PARSING_ERROR,fatal:!1,levelRetry:t,error:e,reason:e.message})}function Zc(n){se.log(`${n} with AES-128-CBC encryption found in unencrypted stream`)}function oo(n){let e=0,t,r,i,o,s;const a=n.data;if(!n||n.size===0)return null;for(;a[0].length<19&&a.length>1;)a[0]=Bn(a[0],a[1]),a.splice(1,1);if(t=a[0],(t[0]<<16)+(t[1]<<8)+t[2]===1){if(r=(t[4]<<8)+t[5],r&&r>n.size-6)return null;const c=t[7];c&192&&(o=(t[9]&14)*536870912+(t[10]&255)*4194304+(t[11]&254)*16384+(t[12]&255)*128+(t[13]&254)/2,c&64?(s=(t[14]&14)*536870912+(t[15]&255)*4194304+(t[16]&254)*16384+(t[17]&255)*128+(t[18]&254)/2,o-s>60*9e4&&(se.warn(`${Math.round((o-s)/9e4)}s delta between PTS and DTS, align them`),o=s)):s=o),i=t[8];let d=i+9;if(n.size<=d)return null;n.size-=d;const u=new Uint8Array(n.size);for(let f=0,h=a.length;f<h;f++){t=a[f];let p=t.byteLength;if(d)if(d>p){d-=p;continue}else t=t.subarray(d),p-=d,d=0;u.set(t,e),e+=p}return r&&(r-=i+3),{data:u,pts:o,dts:s,len:r}}return null}class V5 extends pf{resetInitSegment(e,t,r,i){super.resetInitSegment(e,t,r,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=js(e,0);let r=(t==null?void 0:t.length)||0;if(t&&e[r]===11&&e[r+1]===119&&lf(t)!==void 0&&rv(e,r)<=16)return!1;for(let i=e.length;r<i;r++)if(nv(e,r))return se.log("MPEG Audio sync word found !"),!0;return!1}canParse(e,t){return M5(e,t)}appendFrame(e,t,r){if(this.basePTS!==null)return Jy(e,t,r,this.basePTS,this.frameIndex)}}class om{static getSilentFrame(e,t){switch(e){case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}}}const Nr=Math.pow(2,32)-1;class le{static init(){le.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],dac3:[],"ac-3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};let e;for(e in le.types)le.types.hasOwnProperty(e)&&(le.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);le.HDLR_TYPES={video:t,audio:r};const i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),o=new Uint8Array([0,0,0,0,0,0,0,0]);le.STTS=le.STSC=le.STCO=o,le.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),le.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),le.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),le.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);const s=new Uint8Array([105,115,111,109]),a=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);le.FTYP=le.box(le.types.ftyp,s,l,s,a),le.DINF=le.box(le.types.dinf,le.box(le.types.dref,i))}static box(e,...t){let r=8,i=t.length;const o=i;for(;i--;)r+=t[i].byteLength;const s=new Uint8Array(r);for(s[0]=r>>24&255,s[1]=r>>16&255,s[2]=r>>8&255,s[3]=r&255,s.set(e,4),i=0,r=8;i<o;i++)s.set(t[i],r),r+=t[i].byteLength;return s}static hdlr(e){return le.box(le.types.hdlr,le.HDLR_TYPES[e])}static mdat(e){return le.box(le.types.mdat,e)}static mdhd(e,t){t*=e;const r=Math.floor(t/(Nr+1)),i=Math.floor(t%(Nr+1));return le.box(le.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,r>>24,r>>16&255,r>>8&255,r&255,i>>24,i>>16&255,i>>8&255,i&255,85,196,0,0]))}static mdia(e){return le.box(le.types.mdia,le.mdhd(e.timescale,e.duration),le.hdlr(e.type),le.minf(e))}static mfhd(e){return le.box(le.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}static minf(e){return e.type==="audio"?le.box(le.types.minf,le.box(le.types.smhd,le.SMHD),le.DINF,le.stbl(e)):le.box(le.types.minf,le.box(le.types.vmhd,le.VMHD),le.DINF,le.stbl(e))}static moof(e,t,r){return le.box(le.types.moof,le.mfhd(e),le.traf(r,t))}static moov(e){let t=e.length;const r=[];for(;t--;)r[t]=le.trak(e[t]);return le.box.apply(null,[le.types.moov,le.mvhd(e[0].timescale,e[0].duration)].concat(r).concat(le.mvex(e)))}static mvex(e){let t=e.length;const r=[];for(;t--;)r[t]=le.trex(e[t]);return le.box.apply(null,[le.types.mvex,...r])}static mvhd(e,t){t*=e;const r=Math.floor(t/(Nr+1)),i=Math.floor(t%(Nr+1)),o=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,r>>24,r>>16&255,r>>8&255,r&255,i>>24,i>>16&255,i>>8&255,i&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return le.box(le.types.mvhd,o)}static sdtp(e){const t=e.samples||[],r=new Uint8Array(4+t.length);let i,o;for(i=0;i<t.length;i++)o=t[i].flags,r[i+4]=o.dependsOn<<4|o.isDependedOn<<2|o.hasRedundancy;return le.box(le.types.sdtp,r)}static stbl(e){return le.box(le.types.stbl,le.stsd(e),le.box(le.types.stts,le.STTS),le.box(le.types.stsc,le.STSC),le.box(le.types.stsz,le.STSZ),le.box(le.types.stco,le.STCO))}static avc1(e){let t=[],r=[],i,o,s;for(i=0;i<e.sps.length;i++)o=e.sps[i],s=o.byteLength,t.push(s>>>8&255),t.push(s&255),t=t.concat(Array.prototype.slice.call(o));for(i=0;i<e.pps.length;i++)o=e.pps[i],s=o.byteLength,r.push(s>>>8&255),r.push(s&255),r=r.concat(Array.prototype.slice.call(o));const a=le.box(le.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(r))),l=e.width,c=e.height,d=e.pixelRatio[0],u=e.pixelRatio[1];return le.box(le.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,l&255,c>>8&255,c&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),a,le.box(le.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),le.box(le.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,d&255,u>>24,u>>16&255,u>>8&255,u&255])))}static esds(e){const t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}static audioStsd(e){const t=e.samplerate;return new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,t&255,0,0])}static mp4a(e){return le.box(le.types.mp4a,le.audioStsd(e),le.box(le.types.esds,le.esds(e)))}static mp3(e){return le.box(le.types[".mp3"],le.audioStsd(e))}static ac3(e){return le.box(le.types["ac-3"],le.audioStsd(e),le.box(le.types.dac3,e.config))}static stsd(e){return e.type==="audio"?e.segmentCodec==="mp3"&&e.codec==="mp3"?le.box(le.types.stsd,le.STSD,le.mp3(e)):e.segmentCodec==="ac3"?le.box(le.types.stsd,le.STSD,le.ac3(e)):le.box(le.types.stsd,le.STSD,le.mp4a(e)):le.box(le.types.stsd,le.STSD,le.avc1(e))}static tkhd(e){const t=e.id,r=e.duration*e.timescale,i=e.width,o=e.height,s=Math.floor(r/(Nr+1)),a=Math.floor(r%(Nr+1));return le.box(le.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,s>>24,s>>16&255,s>>8&255,s&255,a>>24,a>>16&255,a>>8&255,a&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,i&255,0,0,o>>8&255,o&255,0,0]))}static traf(e,t){const r=le.sdtp(e),i=e.id,o=Math.floor(t/(Nr+1)),s=Math.floor(t%(Nr+1));return le.box(le.types.traf,le.box(le.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,i&255])),le.box(le.types.tfdt,new Uint8Array([1,0,0,0,o>>24,o>>16&255,o>>8&255,o&255,s>>24,s>>16&255,s>>8&255,s&255])),le.trun(e,r.length+16+20+8+16+8+8),r)}static trak(e){return e.duration=e.duration||4294967295,le.box(le.types.trak,le.tkhd(e),le.mdia(e))}static trex(e){const t=e.id;return le.box(le.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}static trun(e,t){const r=e.samples||[],i=r.length,o=12+16*i,s=new Uint8Array(o);let a,l,c,d,u,f;for(t+=8+o,s.set([e.type==="video"?1:0,0,15,1,i>>>24&255,i>>>16&255,i>>>8&255,i&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),a=0;a<i;a++)l=r[a],c=l.duration,d=l.size,u=l.flags,f=l.cts,s.set([c>>>24&255,c>>>16&255,c>>>8&255,c&255,d>>>24&255,d>>>16&255,d>>>8&255,d&255,u.isLeading<<2|u.dependsOn,u.isDependedOn<<6|u.hasRedundancy<<4|u.paddingValue<<1|u.isNonSync,u.degradPrio&61440,u.degradPrio&15,f>>>24&255,f>>>16&255,f>>>8&255,f&255],12+16*a);return le.box(le.types.trun,s)}static initSegment(e){le.types||le.init();const t=le.moov(e);return Bn(le.FTYP,t)}}le.types=void 0;le.HDLR_TYPES=void 0;le.STTS=void 0;le.STSC=void 0;le.STCO=void 0;le.STSZ=void 0;le.VMHD=void 0;le.SMHD=void 0;le.STSD=void 0;le.FTYP=void 0;le.DINF=void 0;const ov=9e4;function yf(n,e,t=1,r=!1){const i=n*e*t;return r?Math.round(i):i}function q5(n,e,t=1,r=!1){return yf(n,e,1/t,r)}function ps(n,e=!1){return yf(n,1e3,1/ov,e)}function Y5(n,e=1){return yf(n,ov,1/e)}const X5=10*1e3,sm=1024,Z5=1152,Q5=1536;let so=null,Qc=null;class Ja{constructor(e,t,r,i=""){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.videoTrackConfig=void 0,this.observer=e,this.config=t,this.typeSupported=r,this.ISGenerated=!1,so===null){const s=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);so=s?parseInt(s[1]):0}if(Qc===null){const o=navigator.userAgent.match(/Safari\/(\d+)/i);Qc=o?parseInt(o[1]):0}}destroy(){this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null}resetTimeStamp(e){se.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=e}resetNextTimestamp(){se.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}resetInitSegment(){se.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1,this.videoTrackConfig=void 0}getVideoStartPts(e){let t=!1;const r=e.reduce((i,o)=>{const s=o.pts-i;return s<-4294967296?(t=!0,Dn(i,o.pts)):s>0?i:o.pts},e[0].pts);return t&&se.debug("PTS rollover detected"),r}remux(e,t,r,i,o,s,a,l){let c,d,u,f,h,p,m=o,g=o;const y=e.pid>-1,E=t.pid>-1,S=t.samples.length,C=e.samples.length>0,k=a&&S>0||S>1;if((!y||C)&&(!E||k)||this.ISGenerated||a){if(this.ISGenerated){var T,z,F,O;const I=this.videoTrackConfig;I&&(t.width!==I.width||t.height!==I.height||((T=t.pixelRatio)==null?void 0:T[0])!==((z=I.pixelRatio)==null?void 0:z[0])||((F=t.pixelRatio)==null?void 0:F[1])!==((O=I.pixelRatio)==null?void 0:O[1]))&&this.resetInitSegment()}else u=this.generateIS(e,t,o,s);const V=this.isVideoContiguous;let _=-1,H;if(k&&(_=J5(t.samples),!V&&this.config.forceKeyFrameOnDiscontinuity))if(p=!0,_>0){se.warn(`[mp4-remuxer]: Dropped ${_} out of ${S} video samples due to a missing keyframe`);const I=this.getVideoStartPts(t.samples);t.samples=t.samples.slice(_),t.dropped+=_,g+=(t.samples[0].pts-I)/t.inputTimeScale,H=g}else _===-1&&(se.warn(`[mp4-remuxer]: No keyframe found out of ${S} video samples`),p=!1);if(this.ISGenerated){if(C&&k){const I=this.getVideoStartPts(t.samples),ie=(Dn(e.samples[0].pts,I)-I)/t.inputTimeScale;m+=Math.max(0,ie),g+=Math.max(0,-ie)}if(C){if(e.samplerate||(se.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),u=this.generateIS(e,t,o,s)),d=this.remuxAudio(e,m,this.isAudioContiguous,s,E||k||l===Ye.AUDIO?g:void 0),k){const I=d?d.endPTS-d.startPTS:0;t.inputTimeScale||(se.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),u=this.generateIS(e,t,o,s)),c=this.remuxVideo(t,g,V,I)}}else k&&(c=this.remuxVideo(t,g,V,0));c&&(c.firstKeyFrame=_,c.independent=_!==-1,c.firstKeyFramePTS=H)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(r.samples.length&&(h=sv(r,o,this._initPTS,this._initDTS)),i.samples.length&&(f=av(i,o,this._initPTS))),{audio:d,video:c,initSegment:u,independent:p,text:f,id3:h}}generateIS(e,t,r,i){const o=e.samples,s=t.samples,a=this.typeSupported,l={},c=this._initPTS;let d=!c||i,u="audio/mp4",f,h,p;if(d&&(f=h=1/0),e.config&&o.length){switch(e.timescale=e.samplerate,e.segmentCodec){case"mp3":a.mpeg?(u="audio/mpeg",e.codec=""):a.mp3&&(e.codec="mp3");break;case"ac3":e.codec="ac-3";break}l.audio={id:"audio",container:u,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&a.mpeg?new Uint8Array(0):le.initSegment([e]),metadata:{channelCount:e.channelCount}},d&&(p=e.inputTimeScale,!c||p!==c.timescale?f=h=o[0].pts-Math.round(p*r):d=!1)}if(t.sps&&t.pps&&s.length){if(t.timescale=t.inputTimeScale,l.video={id:"main",container:"video/mp4",codec:t.codec,initSegment:le.initSegment([t]),metadata:{width:t.width,height:t.height}},d)if(p=t.inputTimeScale,!c||p!==c.timescale){const m=this.getVideoStartPts(s),g=Math.round(p*r);h=Math.min(h,Dn(s[0].dts,m)-g),f=Math.min(f,m-g)}else d=!1;this.videoTrackConfig={width:t.width,height:t.height,pixelRatio:t.pixelRatio}}if(Object.keys(l).length)return this.ISGenerated=!0,d?(this._initPTS={baseTime:f,timescale:p},this._initDTS={baseTime:h,timescale:p}):f=p=void 0,{tracks:l,initPTS:f,timescale:p}}remuxVideo(e,t,r,i){const o=e.inputTimeScale,s=e.samples,a=[],l=s.length,c=this._initPTS;let d=this.nextAvcDts,u=8,f=this.videoSampleDuration,h,p,m=Number.POSITIVE_INFINITY,g=Number.NEGATIVE_INFINITY,y=!1;if(!r||d===null){const J=t*o,ae=s[0].pts-Dn(s[0].dts,s[0].pts);so&&d!==null&&Math.abs(J-ae-d)<15e3?r=!0:d=J-ae}const E=c.baseTime*o/c.timescale;for(let J=0;J<l;J++){const ae=s[J];ae.pts=Dn(ae.pts-E,d),ae.dts=Dn(ae.dts-E,d),ae.dts<s[J>0?J-1:J].dts&&(y=!0)}y&&s.sort(function(J,ae){const X=J.dts-ae.dts,q=J.pts-ae.pts;return X||q}),h=s[0].dts,p=s[s.length-1].dts;const S=p-h,C=S?Math.round(S/(l-1)):f||e.inputTimeScale/30;if(r){const J=h-d,ae=J>C,X=J<-1;if((ae||X)&&(ae?se.warn(`AVC: ${ps(J,!0)} ms (${J}dts) hole between fragments detected at ${t.toFixed(3)}`):se.warn(`AVC: ${ps(-J,!0)} ms (${J}dts) overlapping between fragments detected at ${t.toFixed(3)}`),!X||d>=s[0].pts||so)){h=d;const q=s[0].pts-J;if(ae)s[0].dts=h,s[0].pts=q;else for(let re=0;re<s.length&&!(s[re].dts>q);re++)s[re].dts-=J,s[re].pts-=J;se.log(`Video: Initial PTS/DTS adjusted: ${ps(q,!0)}/${ps(h,!0)}, delta: ${ps(J,!0)} ms`)}}h=Math.max(0,h);let k=0,M=0,T=h;for(let J=0;J<l;J++){const ae=s[J],X=ae.units,q=X.length;let re=0;for(let ge=0;ge<q;ge++)re+=X[ge].data.length;M+=re,k+=q,ae.length=re,ae.dts<T?(ae.dts=T,T+=C/4|0||1):T=ae.dts,m=Math.min(ae.pts,m),g=Math.max(ae.pts,g)}p=s[l-1].dts;const z=M+4*k+8;let F;try{F=new Uint8Array(z)}catch(J){this.observer.emit(P.ERROR,P.ERROR,{type:Ze.MUX_ERROR,details:be.REMUX_ALLOC_ERROR,fatal:!1,error:J,bytes:z,reason:`fail allocating video mdat ${z}`});return}const O=new DataView(F.buffer);O.setUint32(0,z),F.set(le.types.mdat,4);let V=!1,_=Number.POSITIVE_INFINITY,H=Number.POSITIVE_INFINITY,I=Number.NEGATIVE_INFINITY,W=Number.NEGATIVE_INFINITY;for(let J=0;J<l;J++){const ae=s[J],X=ae.units;let q=0;for(let Ae=0,Le=X.length;Ae<Le;Ae++){const Fe=X[Ae],Ue=Fe.data,de=Fe.data.byteLength;O.setUint32(u,de),u+=4,F.set(Ue,u),u+=de,q+=4+de}let re;if(J<l-1)f=s[J+1].dts-ae.dts,re=s[J+1].pts-ae.pts;else{const Ae=this.config,Le=J>0?ae.dts-s[J-1].dts:C;if(re=J>0?ae.pts-s[J-1].pts:C,Ae.stretchShortVideoTrack&&this.nextAudioPts!==null){const Fe=Math.floor(Ae.maxBufferHole*o),Ue=(i?m+i*o:this.nextAudioPts)-ae.pts;Ue>Fe?(f=Ue-Le,f<0?f=Le:V=!0,se.log(`[mp4-remuxer]: It is approximately ${Ue/90} ms to the next segment; using duration ${f/90} ms for the last video frame.`)):f=Le}else f=Le}const ge=Math.round(ae.pts-ae.dts);_=Math.min(_,f),I=Math.max(I,f),H=Math.min(H,re),W=Math.max(W,re),a.push(new am(ae.key,f,q,ge))}if(a.length){if(so){if(so<70){const J=a[0].flags;J.dependsOn=2,J.isNonSync=0}}else if(Qc&&W-H<I-_&&C/I<.025&&a[0].cts===0){se.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");let J=h;for(let ae=0,X=a.length;ae<X;ae++){const q=J+a[ae].duration,re=J+a[ae].cts;if(ae<X-1){const ge=q+a[ae+1].cts;a[ae].duration=ge-re}else a[ae].duration=ae?a[ae-1].duration:C;a[ae].cts=0,J=q}}}f=V||!f?C:f,this.nextAvcDts=d=p+f,this.videoSampleDuration=f,this.isVideoContiguous=!0;const ie=le.moof(e.sequenceNumber++,h,Ut({},e,{samples:a})),Q="video",ue={data1:ie,data2:F,startPTS:m/o,endPTS:(g+f)/o,startDTS:h/o,endDTS:d/o,type:Q,hasAudio:!1,hasVideo:!0,nb:a.length,dropped:e.dropped};return e.samples=[],e.dropped=0,ue}getSamplesPerFrame(e){switch(e.segmentCodec){case"mp3":return Z5;case"ac3":return Q5;default:return sm}}remuxAudio(e,t,r,i,o){const s=e.inputTimeScale,a=e.samplerate?e.samplerate:s,l=s/a,c=this.getSamplesPerFrame(e),d=c*l,u=this._initPTS,f=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,h=[],p=o!==void 0;let m=e.samples,g=f?0:8,y=this.nextAudioPts||-1;const E=t*s,S=u.baseTime*s/u.timescale;if(this.isAudioContiguous=r=r||m.length&&y>0&&(i&&Math.abs(E-y)<9e3||Math.abs(Dn(m[0].pts-S,E)-y)<20*d),m.forEach(function(ie){ie.pts=Dn(ie.pts-S,E)}),!r||y<0){if(m=m.filter(ie=>ie.pts>=0),!m.length)return;o===0?y=0:i&&!p?y=Math.max(0,E):y=m[0].pts}if(e.segmentCodec==="aac"){const ie=this.config.maxAudioFramesDrift;for(let Q=0,ue=y;Q<m.length;Q++){const J=m[Q],ae=J.pts,X=ae-ue,q=Math.abs(1e3*X/s);if(X<=-ie*d&&p)Q===0&&(se.warn(`Audio frame @ ${(ae/s).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*X/s)} ms.`),this.nextAudioPts=y=ue=ae);else if(X>=ie*d&&q<X5&&p){let re=Math.round(X/d);ue=ae-re*d,ue<0&&(re--,ue+=d),Q===0&&(this.nextAudioPts=y=ue),se.warn(`[mp4-remuxer]: Injecting ${re} audio frame @ ${(ue/s).toFixed(3)}s due to ${Math.round(1e3*X/s)} ms gap.`);for(let ge=0;ge<re;ge++){const Ae=Math.max(ue,0);let Le=om.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);Le||(se.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),Le=J.unit.subarray()),m.splice(Q,0,{unit:Le,pts:Ae}),ue+=d,Q++}}J.pts=ue,ue+=d}}let C=null,k=null,M,T=0,z=m.length;for(;z--;)T+=m[z].unit.byteLength;for(let ie=0,Q=m.length;ie<Q;ie++){const ue=m[ie],J=ue.unit;let ae=ue.pts;if(k!==null){const q=h[ie-1];q.duration=Math.round((ae-k)/l)}else if(r&&e.segmentCodec==="aac"&&(ae=y),C=ae,T>0){T+=g;try{M=new Uint8Array(T)}catch(q){this.observer.emit(P.ERROR,P.ERROR,{type:Ze.MUX_ERROR,details:be.REMUX_ALLOC_ERROR,fatal:!1,error:q,bytes:T,reason:`fail allocating audio mdat ${T}`});return}f||(new DataView(M.buffer).setUint32(0,T),M.set(le.types.mdat,4))}else return;M.set(J,g);const X=J.byteLength;g+=X,h.push(new am(!0,c,X,0)),k=ae}const F=h.length;if(!F)return;const O=h[h.length-1];this.nextAudioPts=y=k+l*O.duration;const V=f?new Uint8Array(0):le.moof(e.sequenceNumber++,C/l,Ut({},e,{samples:h}));e.samples=[];const _=C/s,H=y/s,W={data1:V,data2:M,startPTS:_,endPTS:H,startDTS:_,endDTS:H,type:"audio",hasAudio:!0,hasVideo:!1,nb:F};return this.isAudioContiguous=!0,W}remuxEmptyAudio(e,t,r,i){const o=e.inputTimeScale,s=e.samplerate?e.samplerate:o,a=o/s,l=this.nextAudioPts,c=this._initDTS,d=c.baseTime*9e4/c.timescale,u=(l!==null?l:i.startDTS*o)+d,f=i.endDTS*o+d,h=a*sm,p=Math.ceil((f-u)/h),m=om.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(se.warn("[mp4-remuxer]: remux empty Audio"),!m){se.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}const g=[];for(let y=0;y<p;y++){const E=u+y*h;g.push({unit:m,pts:E,dts:E})}return e.samples=g,this.remuxAudio(e,t,r,!1)}}function Dn(n,e){let t;if(e===null)return n;for(e<n?t=-8589934592:t=8589934592;Math.abs(n-e)>4294967296;)n+=t;return n}function J5(n){for(let e=0;e<n.length;e++)if(n[e].key)return e;return-1}function sv(n,e,t,r){const i=n.samples.length;if(!i)return;const o=n.inputTimeScale;for(let a=0;a<i;a++){const l=n.samples[a];l.pts=Dn(l.pts-t.baseTime*o/t.timescale,e*o)/o,l.dts=Dn(l.dts-r.baseTime*o/r.timescale,e*o)/o}const s=n.samples;return n.samples=[],{samples:s}}function av(n,e,t){const r=n.samples.length;if(!r)return;const i=n.inputTimeScale;for(let s=0;s<r;s++){const a=n.samples[s];a.pts=Dn(a.pts-t.baseTime*i/t.timescale,e*i)/i}n.samples.sort((s,a)=>s.pts-a.pts);const o=n.samples;return n.samples=[],{samples:o}}class am{constructor(e,t,r,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=t,this.size=r,this.cts=i,this.flags={isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:e?2:1,isNonSync:e?0:1}}}class eD{constructor(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null}destroy(){}resetTimeStamp(e){this.initPTS=e,this.lastEndTime=null}resetNextTimestamp(){this.lastEndTime=null}resetInitSegment(e,t,r,i){this.audioCodec=t,this.videoCodec=r,this.generateInitSegment(s3(e,i)),this.emitInitSegment=!0}generateInitSegment(e){let{audioCodec:t,videoCodec:r}=this;if(!(e!=null&&e.byteLength)){this.initTracks=void 0,this.initData=void 0;return}const i=this.initData=Dy(e);i.audio&&(t=lm(i.audio,gt.AUDIO)),i.video&&(r=lm(i.video,gt.VIDEO));const o={};i.audio&&i.video?o.audiovideo={container:"video/mp4",codec:t+","+r,initSegment:e,id:"main"}:i.audio?o.audio={container:"audio/mp4",codec:t,initSegment:e,id:"audio"}:i.video?o.video={container:"video/mp4",codec:r,initSegment:e,id:"main"}:se.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=o}remux(e,t,r,i,o,s){var a,l;let{initPTS:c,lastEndTime:d}=this;const u={audio:void 0,video:void 0,text:i,id3:r,initSegment:void 0};$e(d)||(d=this.lastEndTime=o||0);const f=t.samples;if(!(f!=null&&f.length))return u;const h={initPTS:void 0,timescale:1};let p=this.initData;if((a=p)!=null&&a.length||(this.generateInitSegment(f),p=this.initData),!((l=p)!=null&&l.length))return se.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(h.tracks=this.initTracks,this.emitInitSegment=!1);const m=l3(f,p),g=a3(p,f),y=g===null?o:g;(tD(c,y,o,m)||h.timescale!==c.timescale&&s)&&(h.initPTS=y-o,c&&c.timescale===1&&se.warn(`Adjusting initPTS by ${h.initPTS-c.baseTime}`),this.initPTS=c={baseTime:h.initPTS,timescale:1});const E=e?y-c.baseTime/c.timescale:d,S=E+m;d3(p,f,c.baseTime/c.timescale),m>0?this.lastEndTime=S:(se.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());const C=!!p.audio,k=!!p.video;let M="";C&&(M+="audio"),k&&(M+="video");const T={data1:f,startPTS:E,startDTS:E,endPTS:S,endDTS:S,type:M,hasAudio:C,hasVideo:k,nb:1,dropped:0};return u.audio=T.type==="audio"?T:void 0,u.video=T.type!=="audio"?T:void 0,u.initSegment=h,u.id3=sv(r,o,c,c),i.samples.length&&(u.text=av(i,o,c)),u}}function tD(n,e,t,r){if(n===null)return!0;const i=Math.max(r,1),o=e-n.baseTime/n.timescale;return Math.abs(o-t)>i}function lm(n,e){const t=n==null?void 0:n.codec;if(t&&t.length>4)return t;if(e===gt.AUDIO){if(t==="ec-3"||t==="ac-3"||t==="alac")return t;if(t==="fLaC"||t==="Opus")return kl(t,!1);const r="mp4a.40.5";return se.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${r}"`),r}return se.warn(`Unhandled video codec "${t}"`),t==="hvc1"||t==="hev1"?"hvc1.1.6.L120.90":t==="av01"?"av01.0.04M.08":"avc1.42e01e"}let wr;try{wr=self.performance.now.bind(self.performance)}catch{se.debug("Unable to use Performance API on this environment"),wr=To==null?void 0:To.Date.now}const el=[{demux:$5,remux:eD},{demux:Wr,remux:Ja},{demux:N5,remux:Ja},{demux:V5,remux:Ja}];el.splice(2,0,{demux:U5,remux:Ja});class cm{constructor(e,t,r,i,o){this.async=!1,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=r,this.vendor=i,this.id=o}configure(e){this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}push(e,t,r,i){const o=r.transmuxing;o.executeStart=wr();let s=new Uint8Array(e);const{currentTransmuxState:a,transmuxConfig:l}=this;i&&(this.currentTransmuxState=i);const{contiguous:c,discontinuity:d,trackSwitch:u,accurateTimeOffset:f,timeOffset:h,initSegmentChange:p}=i||a,{audioCodec:m,videoCodec:g,defaultInitPts:y,duration:E,initSegmentData:S}=l,C=nD(s,t);if(C&&C.method==="AES-128"){const z=this.getDecrypter();if(z.isSync()){let F=z.softwareDecrypt(s,C.key.buffer,C.iv.buffer);if(r.part>-1&&(F=z.flush()),!F)return o.executeEnd=wr(),Jc(r);s=new Uint8Array(F)}else return this.decryptionPromise=z.webCryptoDecrypt(s,C.key.buffer,C.iv.buffer).then(F=>{const O=this.push(F,null,r);return this.decryptionPromise=null,O}),this.decryptionPromise}const k=this.needsProbing(d,u);if(k){const z=this.configureTransmuxer(s);if(z)return se.warn(`[transmuxer] ${z.message}`),this.observer.emit(P.ERROR,P.ERROR,{type:Ze.MEDIA_ERROR,details:be.FRAG_PARSING_ERROR,fatal:!1,error:z,reason:z.message}),o.executeEnd=wr(),Jc(r)}(d||u||p||k)&&this.resetInitSegment(S,m,g,E,t),(d||p||k)&&this.resetInitialTimestamp(y),c||this.resetContiguity();const M=this.transmux(s,C,h,f,r),T=this.currentTransmuxState;return T.contiguous=!0,T.discontinuity=!1,T.trackSwitch=!1,o.executeEnd=wr(),M}flush(e){const t=e.transmuxing;t.executeStart=wr();const{decrypter:r,currentTransmuxState:i,decryptionPromise:o}=this;if(o)return o.then(()=>this.flush(e));const s=[],{timeOffset:a}=i;if(r){const u=r.flush();u&&s.push(this.push(u,null,e))}const{demuxer:l,remuxer:c}=this;if(!l||!c)return t.executeEnd=wr(),[Jc(e)];const d=l.flush(a);return tl(d)?d.then(u=>(this.flushRemux(s,u,e),s)):(this.flushRemux(s,d,e),s)}flushRemux(e,t,r){const{audioTrack:i,videoTrack:o,id3Track:s,textTrack:a}=t,{accurateTimeOffset:l,timeOffset:c}=this.currentTransmuxState;se.log(`[transmuxer.ts]: Flushed fragment ${r.sn}${r.part>-1?" p: "+r.part:""} of level ${r.level}`);const d=this.remuxer.remux(i,o,s,a,c,l,!0,this.id);e.push({remuxResult:d,chunkMeta:r}),r.transmuxing.executeEnd=wr()}resetInitialTimestamp(e){const{demuxer:t,remuxer:r}=this;!t||!r||(t.resetTimeStamp(e),r.resetTimeStamp(e))}resetContiguity(){const{demuxer:e,remuxer:t}=this;!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}resetInitSegment(e,t,r,i,o){const{demuxer:s,remuxer:a}=this;!s||!a||(s.resetInitSegment(e,t,r,i),a.resetInitSegment(e,t,r,o))}destroy(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}transmux(e,t,r,i,o){let s;return t&&t.method==="SAMPLE-AES"?s=this.transmuxSampleAes(e,t,r,i,o):s=this.transmuxUnencrypted(e,r,i,o),s}transmuxUnencrypted(e,t,r,i){const{audioTrack:o,videoTrack:s,id3Track:a,textTrack:l}=this.demuxer.demux(e,t,!1,!this.config.progressive);return{remuxResult:this.remuxer.remux(o,s,a,l,t,r,!1,this.id),chunkMeta:i}}transmuxSampleAes(e,t,r,i,o){return this.demuxer.demuxSampleAes(e,t,r).then(s=>({remuxResult:this.remuxer.remux(s.audioTrack,s.videoTrack,s.id3Track,s.textTrack,r,i,!1,this.id),chunkMeta:o}))}configureTransmuxer(e){const{config:t,observer:r,typeSupported:i,vendor:o}=this;let s;for(let f=0,h=el.length;f<h;f++){var a;if((a=el[f].demux)!=null&&a.probe(e)){s=el[f];break}}if(!s)return new Error("Failed to find demuxer by probing fragment data");const l=this.demuxer,c=this.remuxer,d=s.remux,u=s.demux;(!c||!(c instanceof d))&&(this.remuxer=new d(r,t,i,o)),(!l||!(l instanceof u))&&(this.demuxer=new u(r,t,i),this.probe=u.probe)}needsProbing(e,t){return!this.demuxer||!this.remuxer||e||t}getDecrypter(){let e=this.decrypter;return e||(e=this.decrypter=new ff(this.config)),e}}function nD(n,e){let t=null;return n.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e),t}const Jc=n=>({remuxResult:{},chunkMeta:n});function tl(n){return"then"in n&&n.then instanceof Function}class rD{constructor(e,t,r,i,o){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=r,this.duration=i,this.defaultInitPts=o||null}}class iD{constructor(e,t,r,i,o,s){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=r,this.trackSwitch=i,this.timeOffset=o,this.initSegmentChange=s}}var lv={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function i(l,c,d){this.fn=l,this.context=c,this.once=d||!1}function o(l,c,d,u,f){if(typeof d!="function")throw new TypeError("The listener must be a function");var h=new i(d,u||l,f),p=t?t+c:c;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],h]:l._events[p].push(h):(l._events[p]=h,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],d,u;if(this._eventsCount===0)return c;for(u in d=this._events)e.call(d,u)&&c.push(t?u.slice(1):u);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(d)):c},a.prototype.listeners=function(c){var d=t?t+c:c,u=this._events[d];if(!u)return[];if(u.fn)return[u.fn];for(var f=0,h=u.length,p=new Array(h);f<h;f++)p[f]=u[f].fn;return p},a.prototype.listenerCount=function(c){var d=t?t+c:c,u=this._events[d];return u?u.fn?1:u.length:0},a.prototype.emit=function(c,d,u,f,h,p){var m=t?t+c:c;if(!this._events[m])return!1;var g=this._events[m],y=arguments.length,E,S;if(g.fn){switch(g.once&&this.removeListener(c,g.fn,void 0,!0),y){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,d),!0;case 3:return g.fn.call(g.context,d,u),!0;case 4:return g.fn.call(g.context,d,u,f),!0;case 5:return g.fn.call(g.context,d,u,f,h),!0;case 6:return g.fn.call(g.context,d,u,f,h,p),!0}for(S=1,E=new Array(y-1);S<y;S++)E[S-1]=arguments[S];g.fn.apply(g.context,E)}else{var C=g.length,k;for(S=0;S<C;S++)switch(g[S].once&&this.removeListener(c,g[S].fn,void 0,!0),y){case 1:g[S].fn.call(g[S].context);break;case 2:g[S].fn.call(g[S].context,d);break;case 3:g[S].fn.call(g[S].context,d,u);break;case 4:g[S].fn.call(g[S].context,d,u,f);break;default:if(!E)for(k=1,E=new Array(y-1);k<y;k++)E[k-1]=arguments[k];g[S].fn.apply(g[S].context,E)}}return!0},a.prototype.on=function(c,d,u){return o(this,c,d,u,!1)},a.prototype.once=function(c,d,u){return o(this,c,d,u,!0)},a.prototype.removeListener=function(c,d,u,f){var h=t?t+c:c;if(!this._events[h])return this;if(!d)return s(this,h),this;var p=this._events[h];if(p.fn)p.fn===d&&(!f||p.once)&&(!u||p.context===u)&&s(this,h);else{for(var m=0,g=[],y=p.length;m<y;m++)(p[m].fn!==d||f&&!p[m].once||u&&p[m].context!==u)&&g.push(p[m]);g.length?this._events[h]=g.length===1?g[0]:g:s(this,h)}return this},a.prototype.removeAllListeners=function(c){var d;return c?(d=t?t+c:c,this._events[d]&&s(this,d)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a})(lv);var oD=lv.exports,vf=I_(oD);class cv{constructor(e,t,r,i){this.error=null,this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;const o=e.config;this.hls=e,this.id=t,this.useWorker=!!o.enableWorker,this.onTransmuxComplete=r,this.onFlush=i;const s=(c,d)=>{d=d||{},d.frag=this.frag,d.id=this.id,c===P.ERROR&&(this.error=d.error),this.hls.trigger(c,d)};this.observer=new vf,this.observer.on(P.FRAG_DECRYPTED,s),this.observer.on(P.ERROR,s);const a=Di(o.preferManagedMediaSource)||{isTypeSupported:()=>!1},l={mpeg:a.isTypeSupported("audio/mpeg"),mp3:a.isTypeSupported('audio/mp4; codecs="mp3"'),ac3:a.isTypeSupported('audio/mp4; codecs="ac-3"')};if(this.useWorker&&typeof Worker<"u"&&(o.workerPath||C5())){try{o.workerPath?(se.log(`loading Web Worker ${o.workerPath} for "${t}"`),this.workerContext=T5(o.workerPath)):(se.log(`injecting Web Worker for "${t}"`),this.workerContext=S5()),this.onwmsg=u=>this.onWorkerMessage(u);const{worker:d}=this.workerContext;d.addEventListener("message",this.onwmsg),d.onerror=u=>{const f=new Error(`${u.message}  (${u.filename}:${u.lineno})`);o.enableWorker=!1,se.warn(`Error in "${t}" Web Worker, fallback to inline`),this.hls.trigger(P.ERROR,{type:Ze.OTHER_ERROR,details:be.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:f})},d.postMessage({cmd:"init",typeSupported:l,vendor:"",id:t,config:JSON.stringify(o)})}catch(d){se.warn(`Error setting up "${t}" Web Worker, fallback to inline`,d),this.resetWorker(),this.error=null,this.transmuxer=new cm(this.observer,l,o,"",t)}return}this.transmuxer=new cm(this.observer,l,o,"",t)}resetWorker(){if(this.workerContext){const{worker:e,objectURL:t}=this.workerContext;t&&self.URL.revokeObjectURL(t),e.removeEventListener("message",this.onwmsg),e.onerror=null,e.terminate(),this.workerContext=null}}destroy(){if(this.workerContext)this.resetWorker(),this.onwmsg=void 0;else{const t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}const e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null}push(e,t,r,i,o,s,a,l,c,d){var u,f;c.transmuxing.start=self.performance.now();const{transmuxer:h}=this,p=s?s.start:o.start,m=o.decryptdata,g=this.frag,y=!(g&&o.cc===g.cc),E=!(g&&c.level===g.level),S=g?c.sn-g.sn:-1,C=this.part?c.part-this.part.index:-1,k=S===0&&c.id>1&&c.id===(g==null?void 0:g.stats.chunkCount),M=!E&&(S===1||S===0&&(C===1||k&&C<=0)),T=self.performance.now();(E||S||o.stats.parsing.start===0)&&(o.stats.parsing.start=T),s&&(C||!M)&&(s.stats.parsing.start=T);const z=!(g&&((u=o.initSegment)==null?void 0:u.url)===((f=g.initSegment)==null?void 0:f.url)),F=new iD(y,M,l,E,p,z);if(!M||y||z){se.log(`[transmuxer-interface, ${o.type}]: Starting new transmux session for sn: ${c.sn} p: ${c.part} level: ${c.level} id: ${c.id}
        discontinuity: ${y}
        trackSwitch: ${E}
        contiguous: ${M}
        accurateTimeOffset: ${l}
        timeOffset: ${p}
        initSegmentChange: ${z}`);const O=new rD(r,i,t,a,d);this.configureTransmuxer(O)}if(this.frag=o,this.part=s,this.workerContext)this.workerContext.worker.postMessage({cmd:"demux",data:e,decryptdata:m,chunkMeta:c,state:F},e instanceof ArrayBuffer?[e]:[]);else if(h){const O=h.push(e,m,c,F);tl(O)?(h.async=!0,O.then(V=>{this.handleTransmuxComplete(V)}).catch(V=>{this.transmuxerError(V,c,"transmuxer-interface push error")})):(h.async=!1,this.handleTransmuxComplete(O))}}flush(e){e.transmuxing.start=self.performance.now();const{transmuxer:t}=this;if(this.workerContext)this.workerContext.worker.postMessage({cmd:"flush",chunkMeta:e});else if(t){let r=t.flush(e);tl(r)||t.async?(tl(r)||(r=Promise.resolve(r)),r.then(o=>{this.handleFlushResult(o,e)}).catch(o=>{this.transmuxerError(o,e,"transmuxer-interface flush error")})):this.handleFlushResult(r,e)}}transmuxerError(e,t,r){this.hls&&(this.error=e,this.hls.trigger(P.ERROR,{type:Ze.MEDIA_ERROR,details:be.FRAG_PARSING_ERROR,chunkMeta:t,frag:this.frag||void 0,fatal:!1,error:e,err:e,reason:r}))}handleFlushResult(e,t){e.forEach(r=>{this.handleTransmuxComplete(r)}),this.onFlush(t)}onWorkerMessage(e){const t=e.data;if(!(t!=null&&t.event)){se.warn(`worker message received with no ${t?"event name":"data"}`);return}const r=this.hls;if(this.hls)switch(t.event){case"init":{var i;const o=(i=this.workerContext)==null?void 0:i.objectURL;o&&self.URL.revokeObjectURL(o);break}case"transmuxComplete":{this.handleTransmuxComplete(t.data);break}case"flush":{this.onFlush(t.data);break}case"workerLog":se[t.data.logType]&&se[t.data.logType](t.data.message);break;default:{t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data);break}}}configureTransmuxer(e){const{transmuxer:t}=this;this.workerContext?this.workerContext.worker.postMessage({cmd:"configure",config:e}):t&&t.configure(e)}handleTransmuxComplete(e){e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}}function dv(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Io(n[t].attrs,e[t].attrs))return!1;return!0}function Io(n,e,t){const r=n["STABLE-RENDITION-ID"];return r&&!t?r===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED","ASSOC-LANGUAGE"]).some(i=>n[i]!==e[i])}function Qd(n,e){return e.label.toLowerCase()===n.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(n.lang||"").toLowerCase())}const dm=100;class sD extends hf{constructor(e,t,r){super(e,t,r,"[audio-stream-controller]",Ye.AUDIO),this.videoBuffer=null,this.videoTrackCC=-1,this.waitingVideoCC=-1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.flushing=!1,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null,this.bufferedTrack=null,this.switchingTrack=null}_registerListeners(){const{hls:e}=this;e.on(P.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.LEVEL_LOADED,this.onLevelLoaded,this),e.on(P.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(P.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(P.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(P.ERROR,this.onError,this),e.on(P.BUFFER_RESET,this.onBufferReset,this),e.on(P.BUFFER_CREATED,this.onBufferCreated,this),e.on(P.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(P.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(P.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(P.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(P.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.LEVEL_LOADED,this.onLevelLoaded,this),e.off(P.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(P.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(P.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(P.ERROR,this.onError,this),e.off(P.BUFFER_RESET,this.onBufferReset,this),e.off(P.BUFFER_CREATED,this.onBufferCreated,this),e.off(P.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(P.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(P.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(P.FRAG_BUFFERED,this.onFragBuffered,this)}onInitPtsFound(e,{frag:t,id:r,initPTS:i,timescale:o}){if(r==="main"){const s=t.cc;this.initPTS[t.cc]={baseTime:i,timescale:o},this.log(`InitPTS for cc: ${s} found from main: ${i}`),this.videoTrackCC=s,this.state===Se.WAITING_INIT_PTS&&this.tick()}}startLoad(e){if(!this.levels){this.startPosition=e,this.state=Se.STOPPED;return}const t=this.lastCurrentTime;this.stopLoad(),this.setInterval(dm),t>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t,this.state=Se.IDLE):(this.loadedmetadata=!1,this.state=Se.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}doTick(){switch(this.state){case Se.IDLE:this.doTickIdle();break;case Se.WAITING_TRACK:{var e;const{levels:r,trackId:i}=this,o=r==null||(e=r[i])==null?void 0:e.details;if(o){if(this.waitForCdnTuneIn(o))break;this.state=Se.WAITING_INIT_PTS}break}case Se.FRAG_LOADING_WAITING_RETRY:{var t;const r=performance.now(),i=this.retryDate;if(!i||r>=i||(t=this.media)!=null&&t.seeking){const{levels:o,trackId:s}=this;this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded((o==null?void 0:o[s])||null),this.state=Se.IDLE}break}case Se.WAITING_INIT_PTS:{const r=this.waitingData;if(r){const{frag:i,part:o,cache:s,complete:a}=r;if(this.initPTS[i.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=Se.FRAG_LOADING;const l=s.flush(),c={frag:i,part:o,payload:l,networkDetails:null};this._handleFragmentLoadProgress(c),a&&super._handleFragmentLoadComplete(c)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`),this.clearWaitingFragment();else{const l=this.getLoadPosition(),c=wt.bufferInfo(this.mediaBuffer,l,this.config.maxBufferHole);Xd(c.end,this.config.maxFragLookUpTolerance,i)<0&&(this.log(`Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${c.end} is needed`),this.clearWaitingFragment())}}else this.state=Se.IDLE}}this.onTickEnd()}clearWaitingFragment(){const e=this.waitingData;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=Se.IDLE)}resetLoadingState(){this.clearWaitingFragment(),super.resetLoadingState()}onTickEnd(){const{media:e}=this;e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)}doTickIdle(){const{hls:e,levels:t,media:r,trackId:i}=this,o=e.config;if(!r&&(this.startFragRequested||!o.startFragPrefetch)||!(t!=null&&t[i]))return;const s=t[i],a=s.details;if(!a||a.live&&this.levelLastLoaded!==s||this.waitForCdnTuneIn(a)){this.state=Se.WAITING_TRACK;return}const l=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&l&&(this.bufferFlushed=!1,this.afterBufferFlushed(l,gt.AUDIO,Ye.AUDIO));const c=this.getFwdBufferInfo(l,Ye.AUDIO);if(c===null)return;const{bufferedTrack:d,switchingTrack:u}=this;if(!u&&this._streamEnded(c,a)){e.trigger(P.BUFFER_EOS,{type:"audio"}),this.state=Se.ENDED;return}const f=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,Ye.MAIN),h=c.len,p=this.getMaxBufferLength(f==null?void 0:f.len),m=a.fragments,g=m[0].start;let y=this.flushing?this.getLoadPosition():c.end;if(u&&r){const k=this.getLoadPosition();d&&!Io(u.attrs,d.attrs)&&(y=k),a.PTSKnown&&k<g&&(c.end>g||c.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),r.currentTime=g+.05)}if(h>=p&&!u&&y<m[m.length-1].start)return;let E=this.getNextFragment(y,a),S=!1;if(E&&this.isLoopLoading(E,y)&&(S=!!E.gap,E=this.getNextFragmentLoopLoading(E,a,c,Ye.MAIN,p)),!E){this.bufferFlushed=!0;return}const C=f&&E.start>f.end+a.targetduration;if(C||!(f!=null&&f.len)&&c.len){const k=this.getAppendedFrag(E.start,Ye.MAIN);if(k===null||(S||(S=!!k.gap||!!C&&f.len===0),C&&!S||S&&c.nextStart&&c.nextStart<k.end))return}this.loadFragment(E,s,y)}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.min(Math.max(t,e),this.config.maxMaxBufferLength):t}onMediaDetaching(){this.videoBuffer=null,this.bufferFlushed=this.flushing=!1,super.onMediaDetaching()}onAudioTracksUpdated(e,{audioTracks:t}){this.resetTransmuxer(),this.levels=t.map(r=>new ko(r))}onAudioTrackSwitching(e,t){const r=!!t.url;this.trackId=t.id;const{fragCurrent:i}=this;i&&(i.abortRequests(),this.removeUnbufferedFrags(i.start)),this.resetLoadingState(),r?this.setInterval(dm):this.resetTransmuxer(),r?(this.switchingTrack=t,this.state=Se.IDLE,this.flushAudioIfNeeded(t)):(this.switchingTrack=null,this.bufferedTrack=t,this.state=Se.STOPPED),this.tick()}onManifestLoading(){this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=this.flushing=!1,this.levels=this.mainDetails=this.waitingData=this.bufferedTrack=this.cachedTrackLoadedData=this.switchingTrack=null,this.startFragRequested=!1,this.trackId=this.videoTrackCC=this.waitingVideoCC=-1}onLevelLoaded(e,t){this.mainDetails=t.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(P.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)}onAudioTrackLoaded(e,t){var r;if(this.mainDetails==null){this.cachedTrackLoadedData=t;return}const{levels:i}=this,{details:o,id:s}=t;if(!i){this.warn(`Audio tracks were reset while loading level ${s}`);return}this.log(`Audio track ${s} loaded [${o.startSN},${o.endSN}]${o.lastPartSn?`[part-${o.lastPartSn}-${o.lastPartIndex}]`:""},duration:${o.totalduration}`);const a=i[s];let l=0;if(o.live||(r=a.details)!=null&&r.live){this.checkLiveUpdate(o);const d=this.mainDetails;if(o.deltaUpdateFailed||!d)return;if(!a.details&&o.hasProgramDateTime&&d.hasProgramDateTime)Dl(o,d),l=o.fragments[0].start;else{var c;l=this.alignPlaylists(o,a.details,(c=this.levelLastLoaded)==null?void 0:c.details)}}a.details=o,this.levelLastLoaded=a,!this.startFragRequested&&(this.mainDetails||!o.live)&&this.setStartPosition(this.mainDetails||o,l),this.state===Se.WAITING_TRACK&&!this.waitForCdnTuneIn(o)&&(this.state=Se.IDLE),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:r,part:i,payload:o}=e,{config:s,trackId:a,levels:l}=this;if(!l){this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${r.sn} of level ${r.level} will not be buffered`);return}const c=l[a];if(!c){this.warn("Audio track is undefined on fragment load progress");return}const d=c.details;if(!d){this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(r.start);return}const u=s.defaultAudioCodec||c.audioCodec||"mp4a.40.2";let f=this.transmuxer;f||(f=this.transmuxer=new cv(this.hls,Ye.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));const h=this.initPTS[r.cc],p=(t=r.initSegment)==null?void 0:t.data;if(h!==void 0){const g=i?i.index:-1,y=g!==-1,E=new uf(r.level,r.sn,r.stats.chunkCount,o.byteLength,g,y);f.push(o,p,u,"",r,i,d.totalduration,!1,E,h)}else{this.log(`Unknown video PTS for cc ${r.cc}, waiting for video PTS before demuxing audio frag ${r.sn} of [${d.startSN} ,${d.endSN}],track ${a}`);const{cache:m}=this.waitingData=this.waitingData||{frag:r,part:i,cache:new Vy,complete:!1};m.push(new Uint8Array(o)),this.waitingVideoCC=this.videoTrackCC,this.state=Se.WAITING_INIT_PTS}}_handleFragmentLoadComplete(e){if(this.waitingData){this.waitingData.complete=!0;return}super._handleFragmentLoadComplete(e)}onBufferReset(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1}onBufferCreated(e,t){const r=t.tracks.audio;r&&(this.mediaBuffer=r.buffer||null),t.tracks.video&&(this.videoBuffer=t.tracks.video.buffer||null)}onFragBuffered(e,t){const{frag:r,part:i}=t;if(r.type!==Ye.AUDIO){if(!this.loadedmetadata&&r.type===Ye.MAIN){const o=this.videoBuffer||this.media;o&&wt.getBuffered(o).length&&(this.loadedmetadata=!0)}return}if(this.fragContextChanged(r)){this.warn(`Fragment ${r.sn}${i?" p: "+i.index:""} of level ${r.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);return}if(r.sn!=="initSegment"){this.fragPrevious=r;const o=this.switchingTrack;o&&(this.bufferedTrack=o,this.switchingTrack=null,this.hls.trigger(P.AUDIO_TRACK_SWITCHED,en({},o)))}this.fragBufferedComplete(r,i)}onError(e,t){var r;if(t.fatal){this.state=Se.ERROR;return}switch(t.details){case be.FRAG_GAP:case be.FRAG_PARSING_ERROR:case be.FRAG_DECRYPT_ERROR:case be.FRAG_LOAD_ERROR:case be.FRAG_LOAD_TIMEOUT:case be.KEY_LOAD_ERROR:case be.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(Ye.AUDIO,t);break;case be.AUDIO_TRACK_LOAD_ERROR:case be.AUDIO_TRACK_LOAD_TIMEOUT:case be.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===Se.WAITING_TRACK&&((r=t.context)==null?void 0:r.type)===ct.AUDIO_TRACK&&(this.state=Se.IDLE);break;case be.BUFFER_APPEND_ERROR:case be.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="audio")return;if(t.details===be.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));break;case be.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onBufferFlushing(e,{type:t}){t!==gt.VIDEO&&(this.flushing=!0)}onBufferFlushed(e,{type:t}){if(t!==gt.VIDEO){this.flushing=!1,this.bufferFlushed=!0,this.state===Se.ENDED&&(this.state=Se.IDLE);const r=this.mediaBuffer||this.media;r&&(this.afterBufferFlushed(r,t,Ye.AUDIO),this.tick())}}_handleTransmuxComplete(e){var t;const r="audio",{hls:i}=this,{remuxResult:o,chunkMeta:s}=e,a=this.getCurrentContext(s);if(!a){this.resetWhenMissingContext(s);return}const{frag:l,part:c,level:d}=a,{details:u}=d,{audio:f,text:h,id3:p,initSegment:m}=o;if(this.fragContextChanged(l)||!u){this.fragmentTracker.removeFragment(l);return}if(this.state=Se.PARSING,this.switchingTrack&&f&&this.completeAudioSwitch(this.switchingTrack),m!=null&&m.tracks){const g=l.initSegment||l;this._bufferInitSegment(d,m.tracks,g,s),i.trigger(P.FRAG_PARSING_INIT_SEGMENT,{frag:g,id:r,tracks:m.tracks})}if(f){const{startPTS:g,endPTS:y,startDTS:E,endDTS:S}=f;c&&(c.elementaryStreams[gt.AUDIO]={startPTS:g,endPTS:y,startDTS:E,endDTS:S}),l.setElementaryStreamInfo(gt.AUDIO,g,y,E,S),this.bufferFragmentData(f,l,c,s)}if(p!=null&&(t=p.samples)!=null&&t.length){const g=Ut({id:r,frag:l,details:u},p);i.trigger(P.FRAG_PARSING_METADATA,g)}if(h){const g=Ut({id:r,frag:l,details:u},h);i.trigger(P.FRAG_PARSING_USERDATA,g)}}_bufferInitSegment(e,t,r,i){if(this.state!==Se.PARSING)return;t.video&&delete t.video;const o=t.audio;if(!o)return;o.id="audio";const s=e.audioCodec;this.log(`Init audio buffer, container:${o.container}, codecs[level/parsed]=[${s}/${o.codec}]`),s&&s.split(",").length===1&&(o.levelCodec=s),this.hls.trigger(P.BUFFER_CODECS,t);const a=o.initSegment;if(a!=null&&a.byteLength){const l={type:"audio",frag:r,part:null,chunkMeta:i,parent:r.type,data:a};this.hls.trigger(P.BUFFER_APPENDING,l)}this.tickImmediate()}loadFragment(e,t,r){const i=this.fragmentTracker.getState(e);if(this.fragCurrent=e,this.switchingTrack||i===Xt.NOT_LOADED||i===Xt.PARTIAL){var o;if(e.sn==="initSegment")this._loadInitSegment(e,t);else if((o=t.details)!=null&&o.live&&!this.initPTS[e.cc]){this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),this.state=Se.WAITING_INIT_PTS;const s=this.mainDetails;s&&s.fragments[0].start!==t.details.fragments[0].start&&Dl(t.details,s)}else this.startFragRequested=!0,super.loadFragment(e,t,r)}else this.clearTrackerIfNeeded(e)}flushAudioIfNeeded(e){const{media:t,bufferedTrack:r}=this,i=r==null?void 0:r.attrs,o=e.attrs;t&&i&&(i.CHANNELS!==o.CHANNELS||r.name!==e.name||r.lang!==e.lang)&&(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"),this.bufferedTrack=null)}completeAudioSwitch(e){const{hls:t}=this;this.flushAudioIfNeeded(e),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(P.AUDIO_TRACK_SWITCHED,en({},e))}}class aD extends df{constructor(e){super(e,"[audio-track-controller]"),this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.MANIFEST_PARSED,this.onManifestParsed,this),e.on(P.LEVEL_LOADING,this.onLevelLoading,this),e.on(P.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(P.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(P.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.MANIFEST_PARSED,this.onManifestParsed,this),e.off(P.LEVEL_LOADING,this.onLevelLoading,this),e.off(P.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(P.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(P.ERROR,this.onError,this)}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}onManifestLoading(){this.tracks=[],this.tracksInGroup=[],this.groupIds=null,this.currentTrack=null,this.trackId=-1,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.audioTracks||[]}onAudioTrackLoaded(e,t){const{id:r,groupId:i,details:o}=t,s=this.tracksInGroup[r];if(!s||s.groupId!==i){this.warn(`Audio track with id:${r} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const a=s.details;s.details=t.details,this.log(`Audio track ${r} "${s.name}" lang:${s.lang} group:${i} loaded [${o.startSN}-${o.endSN}]`),r===this.trackId&&this.playlistLoaded(r,t,a)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const r=t.audioGroups||null,i=this.groupIds;let o=this.currentTrack;if(!r||(i==null?void 0:i.length)!==(r==null?void 0:r.length)||r!=null&&r.some(a=>(i==null?void 0:i.indexOf(a))===-1)){this.groupIds=r,this.trackId=-1,this.currentTrack=null;const a=this.tracks.filter(f=>!r||r.indexOf(f.groupId)!==-1);if(a.length)this.selectDefaultTrack&&!a.some(f=>f.default)&&(this.selectDefaultTrack=!1),a.forEach((f,h)=>{f.id=h});else if(!o&&!this.tracksInGroup.length)return;this.tracksInGroup=a;const l=this.hls.config.audioPreference;if(!o&&l){const f=sr(l,a,ro);if(f>-1)o=a[f];else{const h=sr(l,this.tracks);o=this.tracks[h]}}let c=this.findTrackId(o);c===-1&&o&&(c=this.findTrackId(null));const d={audioTracks:a};this.log(`Updating audio tracks, ${a.length} track(s) found in group(s): ${r==null?void 0:r.join(",")}`),this.hls.trigger(P.AUDIO_TRACKS_UPDATED,d);const u=this.trackId;if(c!==-1&&u===-1)this.setAudioTrack(c);else if(a.length&&u===-1){var s;const f=new Error(`No audio track selected for current audio group-ID(s): ${(s=this.groupIds)==null?void 0:s.join(",")} track count: ${a.length}`);this.warn(f.message),this.hls.trigger(P.ERROR,{type:Ze.MEDIA_ERROR,details:be.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:f})}}else this.shouldReloadPlaylist(o)&&this.setAudioTrack(this.trackId)}onError(e,t){t.fatal||!t.context||t.context.type===ct.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&(this.requestScheduled=-1,this.checkRetry(t))}get allAudioTracks(){return this.tracks}get audioTracks(){return this.tracksInGroup}get audioTrack(){return this.trackId}set audioTrack(e){this.selectDefaultTrack=!1,this.setAudioTrack(e)}setAudioOption(e){const t=this.hls;if(t.config.audioPreference=e,e){const r=this.allAudioTracks;if(this.selectDefaultTrack=!1,r.length){const i=this.currentTrack;if(i&&yo(e,i,ro))return i;const o=sr(e,this.tracksInGroup,ro);if(o>-1){const s=this.tracksInGroup[o];return this.setAudioTrack(o),s}else if(i){let s=t.loadLevel;s===-1&&(s=t.firstAutoLevel);const a=a5(e,t.levels,r,s,ro);if(a===-1)return null;t.nextLoadLevel=a}if(e.channels||e.audioCodec){const s=sr(e,r);if(s>-1)return r[s]}}}return null}setAudioTrack(e){const t=this.tracksInGroup;if(e<0||e>=t.length){this.warn(`Invalid audio track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const r=this.currentTrack,i=t[e],o=i.details&&!i.details.live;if(e===this.trackId&&i===r&&o||(this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`),this.trackId=e,this.currentTrack=i,this.hls.trigger(P.AUDIO_TRACK_SWITCHING,en({},i)),o))return;const s=this.switchParams(i.url,r==null?void 0:r.details,i.details);this.loadPlaylist(s)}findTrackId(e){const t=this.tracksInGroup;for(let r=0;r<t.length;r++){const i=t[r];if(!(this.selectDefaultTrack&&!i.default)&&(!e||yo(e,i,ro)))return r}if(e){const{name:r,lang:i,assocLang:o,characteristics:s,audioCodec:a,channels:l}=e;for(let c=0;c<t.length;c++){const d=t[c];if(yo({name:r,lang:i,assocLang:o,characteristics:s,audioCodec:a,channels:l},d,ro))return c}for(let c=0;c<t.length;c++){const d=t[c];if(Io(e.attrs,d.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return c}for(let c=0;c<t.length;c++){const d=t[c];if(Io(e.attrs,d.attrs,["LANGUAGE"]))return c}}return-1}loadPlaylist(e){const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){super.loadPlaylist();const r=t.id,i=t.groupId;let o=t.url;if(e)try{o=e.addDirectives(o)}catch(s){this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)}this.log(`loading audio-track playlist ${r} "${t.name}" lang:${t.lang} group:${i}`),this.clearTimer(),this.hls.trigger(P.AUDIO_TRACK_LOADING,{url:o,id:r,groupId:i,deliveryDirectives:e||null})}}}const um=500;class lD extends hf{constructor(e,t,r){super(e,t,r,"[subtitle-stream-controller]",Ye.SUBTITLE),this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null}_registerListeners(){const{hls:e}=this;e.on(P.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.LEVEL_LOADED,this.onLevelLoaded,this),e.on(P.ERROR,this.onError,this),e.on(P.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(P.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(P.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(P.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(P.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(P.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(P.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.LEVEL_LOADED,this.onLevelLoaded,this),e.off(P.ERROR,this.onError,this),e.off(P.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(P.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(P.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(P.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(P.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(P.FRAG_BUFFERED,this.onFragBuffered,this)}startLoad(e){this.stopLoad(),this.state=Se.IDLE,this.setInterval(um),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}onManifestLoading(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()}onMediaDetaching(){this.tracksBuffered=[],super.onMediaDetaching()}onLevelLoaded(e,t){this.mainDetails=t.details}onSubtitleFragProcessed(e,t){const{frag:r,success:i}=t;if(this.fragPrevious=r,this.state=Se.IDLE,!i)return;const o=this.tracksBuffered[this.currentTrackId];if(!o)return;let s;const a=r.start;for(let c=0;c<o.length;c++)if(a>=o[c].start&&a<=o[c].end){s=o[c];break}const l=r.start+r.duration;s?s.end=l:(s={start:a,end:l},o.push(s)),this.fragmentTracker.fragBuffered(r),this.fragBufferedComplete(r,null)}onBufferFlushing(e,t){const{startOffset:r,endOffset:i}=t;if(r===0&&i!==Number.POSITIVE_INFINITY){const o=i-1;if(o<=0)return;t.endOffsetSubtitles=Math.max(0,o),this.tracksBuffered.forEach(s=>{for(let a=0;a<s.length;){if(s[a].end<=o){s.shift();continue}else if(s[a].start<o)s[a].start=o;else break;a++}}),this.fragmentTracker.removeFragmentsInRange(r,o,Ye.SUBTITLE)}}onFragBuffered(e,t){if(!this.loadedmetadata&&t.frag.type===Ye.MAIN){var r;(r=this.media)!=null&&r.buffered.length&&(this.loadedmetadata=!0)}}onError(e,t){const r=t.frag;(r==null?void 0:r.type)===Ye.SUBTITLE&&(t.details===be.FRAG_GAP&&this.fragmentTracker.fragBuffered(r,!0),this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==Se.STOPPED&&(this.state=Se.IDLE))}onSubtitleTracksUpdated(e,{subtitleTracks:t}){if(this.levels&&dv(this.levels,t)){this.levels=t.map(r=>new ko(r));return}this.tracksBuffered=[],this.levels=t.map(r=>{const i=new ko(r);return this.tracksBuffered[i.id]=[],i}),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,Ye.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}onSubtitleTrackSwitch(e,t){var r;if(this.currentTrackId=t.id,!((r=this.levels)!=null&&r.length)||this.currentTrackId===-1){this.clearInterval();return}const i=this.levels[this.currentTrackId];i!=null&&i.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,i&&this.setInterval(um)}onSubtitleTrackLoaded(e,t){var r;const{currentTrackId:i,levels:o}=this,{details:s,id:a}=t;if(!o){this.warn(`Subtitle tracks were reset while loading level ${a}`);return}const l=o[a];if(a>=o.length||!l)return;this.log(`Subtitle track ${a} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""},duration:${s.totalduration}`),this.mediaBuffer=this.mediaBufferTimeRanges;let c=0;if(s.live||(r=l.details)!=null&&r.live){const u=this.mainDetails;if(s.deltaUpdateFailed||!u)return;const f=u.fragments[0];if(!l.details)s.hasProgramDateTime&&u.hasProgramDateTime?(Dl(s,u),c=s.fragments[0].start):f&&(c=f.start,Yd(s,c));else{var d;c=this.alignPlaylists(s,l.details,(d=this.levelLastLoaded)==null?void 0:d.details),c===0&&f&&(c=f.start,Yd(s,c))}}l.details=s,this.levelLastLoaded=l,a===i&&(!this.startFragRequested&&(this.mainDetails||!s.live)&&this.setStartPosition(this.mainDetails||s,c),this.tick(),s.live&&!this.fragCurrent&&this.media&&this.state===Se.IDLE&&(_l(null,s.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),l.details=void 0)))}_handleFragmentLoadComplete(e){const{frag:t,payload:r}=e,i=t.decryptdata,o=this.hls;if(!this.fragContextChanged(t)&&r&&r.byteLength>0&&i!=null&&i.key&&i.iv&&i.method==="AES-128"){const s=performance.now();this.decrypter.decrypt(new Uint8Array(r),i.key.buffer,i.iv.buffer).catch(a=>{throw o.trigger(P.ERROR,{type:Ze.MEDIA_ERROR,details:be.FRAG_DECRYPT_ERROR,fatal:!1,error:a,reason:a.message,frag:t}),a}).then(a=>{const l=performance.now();o.trigger(P.FRAG_DECRYPTED,{frag:t,payload:a,stats:{tstart:s,tdecrypt:l}})}).catch(a=>{this.warn(`${a.name}: ${a.message}`),this.state=Se.IDLE})}}doTick(){if(!this.media){this.state=Se.IDLE;return}if(this.state===Se.IDLE){const{currentTrackId:e,levels:t}=this,r=t==null?void 0:t[e];if(!r||!t.length||!r.details)return;const{config:i}=this,o=this.getLoadPosition(),s=wt.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],o,i.maxBufferHole),{end:a,len:l}=s,c=this.getFwdBufferInfo(this.media,Ye.MAIN),d=r.details,u=this.getMaxBufferLength(c==null?void 0:c.len)+d.levelTargetDuration;if(l>u)return;const f=d.fragments,h=f.length,p=d.edge;let m=null;const g=this.fragPrevious;if(a<p){const y=i.maxFragLookUpTolerance,E=a>p-y?0:y;m=_l(g,f,Math.max(f[0].start,a),E),!m&&g&&g.start<f[0].start&&(m=f[0])}else m=f[h-1];if(!m)return;if(m=this.mapToInitFragWhenRequired(m),m.sn!=="initSegment"){const y=m.sn-d.startSN,E=f[y-1];E&&E.cc===m.cc&&this.fragmentTracker.getState(E)===Xt.NOT_LOADED&&(m=E)}this.fragmentTracker.getState(m)===Xt.NOT_LOADED&&this.loadFragment(m,r,a)}}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.max(t,e):t}loadFragment(e,t,r){this.fragCurrent=e,e.sn==="initSegment"?this._loadInitSegment(e,t):(this.startFragRequested=!0,super.loadFragment(e,t,r))}get mediaBufferTimeRanges(){return new cD(this.tracksBuffered[this.currentTrackId]||[])}}class cD{constructor(e){this.buffered=void 0;const t=(r,i,o)=>{if(i=i>>>0,i>o-1)throw new DOMException(`Failed to execute '${r}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${o})`);return e[i][r]};this.buffered={get length(){return e.length},end(r){return t("end",r,e.length)},start(r){return t("start",r,e.length)}}}}class dD extends df{constructor(e){super(e,"[subtitle-track-controller]"),this.media=null,this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.onTextTracksChanged=()=>{if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;let t=null;const r=Xa(this.media.textTracks);for(let o=0;o<r.length;o++)if(r[o].mode==="hidden")t=r[o];else if(r[o].mode==="showing"){t=r[o];break}const i=this.findTrackForTextTrack(t);this.subtitleTrack!==i&&this.setSubtitleTrack(i)},this.registerListeners()}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,this.onTextTracksChanged=this.asyncPollTrackChange=null,super.destroy()}get subtitleDisplay(){return this._subtitleDisplay}set subtitleDisplay(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes()}registerListeners(){const{hls:e}=this;e.on(P.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.MANIFEST_PARSED,this.onManifestParsed,this),e.on(P.LEVEL_LOADING,this.onLevelLoading,this),e.on(P.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(P.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(P.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(P.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.MANIFEST_PARSED,this.onManifestParsed,this),e.off(P.LEVEL_LOADING,this.onLevelLoading,this),e.off(P.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(P.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(P.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}pollTrackChange(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,e)}onMediaDetaching(){if(!this.media)return;self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),Xa(this.media.textTracks).forEach(t=>{lo(t)}),this.subtitleTrack=-1,this.media=null}onManifestLoading(){this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.subtitleTracks}onSubtitleTrackLoaded(e,t){const{id:r,groupId:i,details:o}=t,s=this.tracksInGroup[r];if(!s||s.groupId!==i){this.warn(`Subtitle track with id:${r} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const a=s.details;s.details=t.details,this.log(`Subtitle track ${r} "${s.name}" lang:${s.lang} group:${i} loaded [${o.startSN}-${o.endSN}]`),r===this.trackId&&this.playlistLoaded(r,t,a)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const r=t.subtitleGroups||null,i=this.groupIds;let o=this.currentTrack;if(!r||(i==null?void 0:i.length)!==(r==null?void 0:r.length)||r!=null&&r.some(s=>(i==null?void 0:i.indexOf(s))===-1)){this.groupIds=r,this.trackId=-1,this.currentTrack=null;const s=this.tracks.filter(d=>!r||r.indexOf(d.groupId)!==-1);if(s.length)this.selectDefaultTrack&&!s.some(d=>d.default)&&(this.selectDefaultTrack=!1),s.forEach((d,u)=>{d.id=u});else if(!o&&!this.tracksInGroup.length)return;this.tracksInGroup=s;const a=this.hls.config.subtitlePreference;if(!o&&a){this.selectDefaultTrack=!1;const d=sr(a,s);if(d>-1)o=s[d];else{const u=sr(a,this.tracks);o=this.tracks[u]}}let l=this.findTrackId(o);l===-1&&o&&(l=this.findTrackId(null));const c={subtitleTracks:s};this.log(`Updating subtitle tracks, ${s.length} track(s) found in "${r==null?void 0:r.join(",")}" group-id`),this.hls.trigger(P.SUBTITLE_TRACKS_UPDATED,c),l!==-1&&this.trackId===-1&&this.setSubtitleTrack(l)}else this.shouldReloadPlaylist(o)&&this.setSubtitleTrack(this.trackId)}findTrackId(e){const t=this.tracksInGroup,r=this.selectDefaultTrack;for(let i=0;i<t.length;i++){const o=t[i];if(!(r&&!o.default||!r&&!e)&&(!e||yo(o,e)))return i}if(e){for(let i=0;i<t.length;i++){const o=t[i];if(Io(e.attrs,o.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return i}for(let i=0;i<t.length;i++){const o=t[i];if(Io(e.attrs,o.attrs,["LANGUAGE"]))return i}}return-1}findTrackForTextTrack(e){if(e){const t=this.tracksInGroup;for(let r=0;r<t.length;r++){const i=t[r];if(Qd(i,e))return r}}return-1}onError(e,t){t.fatal||!t.context||t.context.type===ct.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allSubtitleTracks(){return this.tracks}get subtitleTracks(){return this.tracksInGroup}get subtitleTrack(){return this.trackId}set subtitleTrack(e){this.selectDefaultTrack=!1,this.setSubtitleTrack(e)}setSubtitleOption(e){if(this.hls.config.subtitlePreference=e,e){const t=this.allSubtitleTracks;if(this.selectDefaultTrack=!1,t.length){const r=this.currentTrack;if(r&&yo(e,r))return r;const i=sr(e,this.tracksInGroup);if(i>-1){const o=this.tracksInGroup[i];return this.setSubtitleTrack(i),o}else{if(r)return null;{const o=sr(e,t);if(o>-1)return t[o]}}}}return null}loadPlaylist(e){super.loadPlaylist();const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){const r=t.id,i=t.groupId;let o=t.url;if(e)try{o=e.addDirectives(o)}catch(s){this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)}this.log(`Loading subtitle playlist for id ${r}`),this.hls.trigger(P.SUBTITLE_TRACK_LOADING,{url:o,id:r,groupId:i,deliveryDirectives:e||null})}}toggleTrackModes(){const{media:e}=this;if(!e)return;const t=Xa(e.textTracks),r=this.currentTrack;let i;if(r&&(i=t.filter(o=>Qd(r,o))[0],i||this.warn(`Unable to find subtitle TextTrack with name "${r.name}" and language "${r.lang}"`)),[].slice.call(t).forEach(o=>{o.mode!=="disabled"&&o!==i&&(o.mode="disabled")}),i){const o=this.subtitleDisplay?"showing":"hidden";i.mode!==o&&(i.mode=o)}}setSubtitleTrack(e){const t=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(e<-1||e>=t.length||!$e(e)){this.warn(`Invalid subtitle track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const r=this.currentTrack,i=t[e]||null;if(this.trackId=e,this.currentTrack=i,this.toggleTrackModes(),!i){this.hls.trigger(P.SUBTITLE_TRACK_SWITCH,{id:e});return}const o=!!i.details&&!i.details.live;if(e===this.trackId&&i===r&&o)return;this.log(`Switching to subtitle-track ${e}`+(i?` "${i.name}" lang:${i.lang} group:${i.groupId}`:""));const{id:s,groupId:a="",name:l,type:c,url:d}=i;this.hls.trigger(P.SUBTITLE_TRACK_SWITCH,{id:s,groupId:a,name:l,type:c,url:d});const u=this.switchParams(i.url,r==null?void 0:r.details,i.details);this.loadPlaylist(u)}}class uD{constructor(e){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=e}append(e,t,r){const i=this.queues[t];i.push(e),i.length===1&&!r&&this.executeNext(t)}insertAbort(e,t){this.queues[t].unshift(e),this.executeNext(t)}appendBlocker(e){let t;const r=new Promise(o=>{t=o}),i={execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};return this.append(i,e),r}executeNext(e){const t=this.queues[e];if(t.length){const r=t[0];try{r.execute()}catch(i){se.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${i}`),r.onError(i);const o=this.buffers[e];o!=null&&o.updating||this.shiftAndExecuteNext(e)}}}shiftAndExecuteNext(e){this.queues[e].shift(),this.executeNext(e)}current(e){return this.queues[e][0]}}const fm=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;class fD{constructor(e){this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.appendSource=void 0,this.appendErrors={audio:0,video:0,audiovideo:0},this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this.log=void 0,this.warn=void 0,this.error=void 0,this._onEndStreaming=r=>{this.hls&&this.hls.pauseBuffering()},this._onStartStreaming=r=>{this.hls&&this.hls.resumeBuffering()},this._onMediaSourceOpen=()=>{const{media:r,mediaSource:i}=this;this.log("Media source opened"),r&&(r.removeEventListener("emptied",this._onMediaEmptied),this.updateMediaElementDuration(),this.hls.trigger(P.MEDIA_ATTACHED,{media:r,mediaSource:i})),i&&i.removeEventListener("sourceopen",this._onMediaSourceOpen),this.checkPendingTracks()},this._onMediaSourceClose=()=>{this.log("Media source closed")},this._onMediaSourceEnded=()=>{this.log("Media source ended")},this._onMediaEmptied=()=>{const{mediaSrc:r,_objectUrl:i}=this;r!==i&&se.error(`Media element src was set while attaching MediaSource (${i} > ${r})`)},this.hls=e;const t="[buffer-controller]";this.appendSource=x3(Di(e.config.preferManagedMediaSource)),this.log=se.log.bind(se,t),this.warn=se.warn.bind(se,t),this.error=se.error.bind(se,t),this._initSourceBuffer(),this.registerListeners()}hasSourceTypes(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0}destroy(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=null,this.hls=null}registerListeners(){const{hls:e}=this;e.on(P.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.MANIFEST_PARSED,this.onManifestParsed,this),e.on(P.BUFFER_RESET,this.onBufferReset,this),e.on(P.BUFFER_APPENDING,this.onBufferAppending,this),e.on(P.BUFFER_CODECS,this.onBufferCodecs,this),e.on(P.BUFFER_EOS,this.onBufferEos,this),e.on(P.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(P.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(P.FRAG_PARSED,this.onFragParsed,this),e.on(P.FRAG_CHANGED,this.onFragChanged,this)}unregisterListeners(){const{hls:e}=this;e.off(P.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.MANIFEST_PARSED,this.onManifestParsed,this),e.off(P.BUFFER_RESET,this.onBufferReset,this),e.off(P.BUFFER_APPENDING,this.onBufferAppending,this),e.off(P.BUFFER_CODECS,this.onBufferCodecs,this),e.off(P.BUFFER_EOS,this.onBufferEos,this),e.off(P.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(P.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(P.FRAG_PARSED,this.onFragParsed,this),e.off(P.FRAG_CHANGED,this.onFragChanged,this)}_initSourceBuffer(){this.sourceBuffer={},this.operationQueue=new uD(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]},this.appendErrors={audio:0,video:0,audiovideo:0},this.lastMpegAudioChunk=null}onManifestLoading(){this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=0,this.details=null}onManifestParsed(e,t){let r=2;(t.audio&&!t.video||!t.altAudio)&&(r=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=r,this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)}onMediaAttaching(e,t){const r=this.media=t.media,i=Di(this.appendSource);if(r&&i){var o;const s=this.mediaSource=new i;this.log(`created media source: ${(o=s.constructor)==null?void 0:o.name}`),s.addEventListener("sourceopen",this._onMediaSourceOpen),s.addEventListener("sourceended",this._onMediaSourceEnded),s.addEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(s.addEventListener("startstreaming",this._onStartStreaming),s.addEventListener("endstreaming",this._onEndStreaming));const a=this._objectUrl=self.URL.createObjectURL(s);if(this.appendSource)try{r.removeAttribute("src");const l=self.ManagedMediaSource;r.disableRemotePlayback=r.disableRemotePlayback||l&&s instanceof l,hm(r),hD(r,a),r.load()}catch{r.src=a}else r.src=a;r.addEventListener("emptied",this._onMediaEmptied)}}onMediaDetaching(){const{media:e,mediaSource:t,_objectUrl:r}=this;if(t){if(this.log("media source detaching"),t.readyState==="open")try{t.endOfStream()}catch(i){this.warn(`onMediaDetaching: ${i.message} while calling endOfStream`)}this.onBufferReset(),t.removeEventListener("sourceopen",this._onMediaSourceOpen),t.removeEventListener("sourceended",this._onMediaSourceEnded),t.removeEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(t.removeEventListener("startstreaming",this._onStartStreaming),t.removeEventListener("endstreaming",this._onEndStreaming)),e&&(e.removeEventListener("emptied",this._onMediaEmptied),r&&self.URL.revokeObjectURL(r),this.mediaSrc===r?(e.removeAttribute("src"),this.appendSource&&hm(e),e.load()):this.warn("media|source.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(P.MEDIA_DETACHED,void 0)}onBufferReset(){this.getSourceBufferTypes().forEach(e=>{this.resetBuffer(e)}),this._initSourceBuffer()}resetBuffer(e){const t=this.sourceBuffer[e];try{if(t){var r;this.removeBufferListeners(e),this.sourceBuffer[e]=void 0,(r=this.mediaSource)!=null&&r.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(t)}}catch(i){this.warn(`onBufferReset ${e}`,i)}}onBufferCodecs(e,t){const r=this.getSourceBufferTypes().length,i=Object.keys(t);if(i.forEach(s=>{if(r){const l=this.tracks[s];if(l&&typeof l.buffer.changeType=="function"){var a;const{id:c,codec:d,levelCodec:u,container:f,metadata:h}=t[s],p=Bp(l.codec,l.levelCodec),m=p==null?void 0:p.replace(fm,"$1");let g=Bp(d,u);const y=(a=g)==null?void 0:a.replace(fm,"$1");if(g&&m!==y){s.slice(0,5)==="audio"&&(g=kl(g,this.appendSource));const E=`${f};codecs=${g}`;this.appendChangeType(s,E),this.log(`switching codec ${p} to ${g}`),this.tracks[s]={buffer:l.buffer,codec:d,container:f,levelCodec:u,metadata:h,id:c}}}}else this.pendingTracks[s]=t[s]}),r)return;const o=Math.max(this.bufferCodecEventsExpected-1,0);this.bufferCodecEventsExpected!==o&&(this.log(`${o} bufferCodec event(s) expected ${i.join(",")}`),this.bufferCodecEventsExpected=o),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks()}appendChangeType(e,t){const{operationQueue:r}=this,i={execute:()=>{const o=this.sourceBuffer[e];o&&(this.log(`changing ${e} sourceBuffer type to ${t}`),o.changeType(t)),r.shiftAndExecuteNext(e)},onStart:()=>{},onComplete:()=>{},onError:o=>{this.warn(`Failed to change ${e} SourceBuffer type`,o)}};r.append(i,e,!!this.pendingTracks[e])}onBufferAppending(e,t){const{hls:r,operationQueue:i,tracks:o}=this,{data:s,type:a,frag:l,part:c,chunkMeta:d}=t,u=d.buffering[a],f=self.performance.now();u.start=f;const h=l.stats.buffering,p=c?c.stats.buffering:null;h.start===0&&(h.start=f),p&&p.start===0&&(p.start=f);const m=o.audio;let g=!1;a==="audio"&&(m==null?void 0:m.container)==="audio/mpeg"&&(g=!this.lastMpegAudioChunk||d.id===1||this.lastMpegAudioChunk.sn!==d.sn,this.lastMpegAudioChunk=d);const y=l.start,E={execute:()=>{if(u.executeStart=self.performance.now(),g){const S=this.sourceBuffer[a];if(S){const C=y-S.timestampOffset;Math.abs(C)>=.1&&(this.log(`Updating audio SourceBuffer timestampOffset to ${y} (delta: ${C}) sn: ${l.sn})`),S.timestampOffset=y)}}this.appendExecutor(s,a)},onStart:()=>{},onComplete:()=>{const S=self.performance.now();u.executeEnd=u.end=S,h.first===0&&(h.first=S),p&&p.first===0&&(p.first=S);const{sourceBuffer:C}=this,k={};for(const M in C)k[M]=wt.getBuffered(C[M]);this.appendErrors[a]=0,a==="audio"||a==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0,this.appendErrors.video=0),this.hls.trigger(P.BUFFER_APPENDED,{type:a,frag:l,part:c,chunkMeta:d,parent:l.type,timeRanges:k})},onError:S=>{const C={type:Ze.MEDIA_ERROR,parent:l.type,details:be.BUFFER_APPEND_ERROR,sourceBufferName:a,frag:l,part:c,chunkMeta:d,error:S,err:S,fatal:!1};if(S.code===DOMException.QUOTA_EXCEEDED_ERR)C.details=be.BUFFER_FULL_ERROR;else{const k=++this.appendErrors[a];C.details=be.BUFFER_APPEND_ERROR,this.warn(`Failed ${k}/${r.config.appendErrorMaxRetry} times to append segment in "${a}" sourceBuffer`),k>=r.config.appendErrorMaxRetry&&(C.fatal=!0)}r.trigger(P.ERROR,C)}};i.append(E,a,!!this.pendingTracks[a])}onBufferFlushing(e,t){const{operationQueue:r}=this,i=o=>({execute:this.removeExecutor.bind(this,o,t.startOffset,t.endOffset),onStart:()=>{},onComplete:()=>{this.hls.trigger(P.BUFFER_FLUSHED,{type:o})},onError:s=>{this.warn(`Failed to remove from ${o} SourceBuffer`,s)}});t.type?r.append(i(t.type),t.type):this.getSourceBufferTypes().forEach(o=>{r.append(i(o),o)})}onFragParsed(e,t){const{frag:r,part:i}=t,o=[],s=i?i.elementaryStreams:r.elementaryStreams;s[gt.AUDIOVIDEO]?o.push("audiovideo"):(s[gt.AUDIO]&&o.push("audio"),s[gt.VIDEO]&&o.push("video"));const a=()=>{const l=self.performance.now();r.stats.buffering.end=l,i&&(i.stats.buffering.end=l);const c=i?i.stats:r.stats;this.hls.trigger(P.FRAG_BUFFERED,{frag:r,part:i,stats:c,id:r.type})};o.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${r.type} level: ${r.level} sn: ${r.sn}`),this.blockBuffers(a,o)}onFragChanged(e,t){this.trimBuffers()}onBufferEos(e,t){this.getSourceBufferTypes().reduce((i,o)=>{const s=this.sourceBuffer[o];return s&&(!t.type||t.type===o)&&(s.ending=!0,s.ended||(s.ended=!0,this.log(`${o} sourceBuffer now EOS`))),i&&!!(!s||s.ended)},!0)&&(this.log("Queueing mediaSource.endOfStream()"),this.blockBuffers(()=>{this.getSourceBufferTypes().forEach(o=>{const s=this.sourceBuffer[o];s&&(s.ending=!1)});const{mediaSource:i}=this;if(!i||i.readyState!=="open"){i&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);return}this.log("Calling mediaSource.endOfStream()"),i.endOfStream()}))}onLevelUpdated(e,{details:t}){t.fragments.length&&(this.details=t,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())}trimBuffers(){const{hls:e,details:t,media:r}=this;if(!r||t===null||!this.getSourceBufferTypes().length)return;const o=e.config,s=r.currentTime,a=t.levelTargetDuration,l=t.live&&o.liveBackBufferLength!==null?o.liveBackBufferLength:o.backBufferLength;if($e(l)&&l>0){const c=Math.max(l,a),d=Math.floor(s/a)*a-c;this.flushBackBuffer(s,a,d)}if($e(o.frontBufferFlushThreshold)&&o.frontBufferFlushThreshold>0){const c=Math.max(o.maxBufferLength,o.frontBufferFlushThreshold),d=Math.max(c,a),u=Math.floor(s/a)*a+d;this.flushFrontBuffer(s,a,u)}}flushBackBuffer(e,t,r){const{details:i,sourceBuffer:o}=this;this.getSourceBufferTypes().forEach(a=>{const l=o[a];if(l){const c=wt.getBuffered(l);if(c.length>0&&r>c.start(0)){if(this.hls.trigger(P.BACK_BUFFER_REACHED,{bufferEnd:r}),i!=null&&i.live)this.hls.trigger(P.LIVE_BACK_BUFFER_REACHED,{bufferEnd:r});else if(l.ended&&c.end(c.length-1)-e<t*2){this.log(`Cannot flush ${a} back buffer while SourceBuffer is in ended state`);return}this.hls.trigger(P.BUFFER_FLUSHING,{startOffset:0,endOffset:r,type:a})}}})}flushFrontBuffer(e,t,r){const{sourceBuffer:i}=this;this.getSourceBufferTypes().forEach(s=>{const a=i[s];if(a){const l=wt.getBuffered(a),c=l.length;if(c<2)return;const d=l.start(c-1),u=l.end(c-1);if(r>d||e>=d&&e<=u)return;if(a.ended&&e-u<2*t){this.log(`Cannot flush ${s} front buffer while SourceBuffer is in ended state`);return}this.hls.trigger(P.BUFFER_FLUSHING,{startOffset:d,endOffset:1/0,type:s})}})}updateMediaElementDuration(){if(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")return;const{details:e,hls:t,media:r,mediaSource:i}=this,o=e.fragments[0].start+e.totalduration,s=r.duration,a=$e(i.duration)?i.duration:0;e.live&&t.config.liveDurationInfinity?(i.duration=1/0,this.updateSeekableRange(e)):(o>a&&o>s||!$e(s))&&(this.log(`Updating Media Source duration to ${o.toFixed(3)}`),i.duration=o)}updateSeekableRange(e){const t=this.mediaSource,r=e.fragments;if(r.length&&e.live&&t!=null&&t.setLiveSeekableRange){const o=Math.max(0,r[0].start),s=Math.max(o,o+e.totalduration);this.log(`Media Source duration is set to ${t.duration}. Setting seekable range to ${o}-${s}.`),t.setLiveSeekableRange(o,s)}}checkPendingTracks(){const{bufferCodecEventsExpected:e,operationQueue:t,pendingTracks:r}=this,i=Object.keys(r).length;if(i&&(!e||i===2||"audiovideo"in r)){this.createSourceBuffers(r),this.pendingTracks={};const o=this.getSourceBufferTypes();if(o.length)this.hls.trigger(P.BUFFER_CREATED,{tracks:this.tracks}),o.forEach(s=>{t.executeNext(s)});else{const s=new Error("could not create source buffer for media codec(s)");this.hls.trigger(P.ERROR,{type:Ze.MEDIA_ERROR,details:be.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:s,reason:s.message})}}}createSourceBuffers(e){const{sourceBuffer:t,mediaSource:r}=this;if(!r)throw Error("createSourceBuffers called when mediaSource was null");for(const o in e)if(!t[o]){var i;const s=e[o];if(!s)throw Error(`source buffer exists for track ${o}, however track does not`);let a=((i=s.levelCodec)==null?void 0:i.indexOf(","))===-1?s.levelCodec:s.codec;a&&o.slice(0,5)==="audio"&&(a=kl(a,this.appendSource));const l=`${s.container};codecs=${a}`;this.log(`creating sourceBuffer(${l})`);try{const c=t[o]=r.addSourceBuffer(l),d=o;this.addBufferListener(d,"updatestart",this._onSBUpdateStart),this.addBufferListener(d,"updateend",this._onSBUpdateEnd),this.addBufferListener(d,"error",this._onSBUpdateError),this.appendSource&&this.addBufferListener(d,"bufferedchange",(u,f)=>{const h=f.removedRanges;h!=null&&h.length&&this.hls.trigger(P.BUFFER_FLUSHED,{type:o})}),this.tracks[o]={buffer:c,codec:a,container:s.container,levelCodec:s.levelCodec,metadata:s.metadata,id:s.id}}catch(c){this.error(`error while trying to add sourceBuffer: ${c.message}`),this.hls.trigger(P.ERROR,{type:Ze.MEDIA_ERROR,details:be.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:c,sourceBufferName:o,mimeType:l})}}}get mediaSrc(){var e,t;const r=((e=this.media)==null||(t=e.querySelector)==null?void 0:t.call(e,"source"))||this.media;return r==null?void 0:r.src}_onSBUpdateStart(e){const{operationQueue:t}=this;t.current(e).onStart()}_onSBUpdateEnd(e){var t;if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){this.resetBuffer(e);return}const{operationQueue:r}=this;r.current(e).onComplete(),r.shiftAndExecuteNext(e)}_onSBUpdateError(e,t){var r;const i=new Error(`${e} SourceBuffer error. MediaSource readyState: ${(r=this.mediaSource)==null?void 0:r.readyState}`);this.error(`${i}`,t),this.hls.trigger(P.ERROR,{type:Ze.MEDIA_ERROR,details:be.BUFFER_APPENDING_ERROR,sourceBufferName:e,error:i,fatal:!1});const o=this.operationQueue.current(e);o&&o.onError(i)}removeExecutor(e,t,r){const{media:i,mediaSource:o,operationQueue:s,sourceBuffer:a}=this,l=a[e];if(!i||!o||!l){this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),s.shiftAndExecuteNext(e);return}const c=$e(i.duration)?i.duration:1/0,d=$e(o.duration)?o.duration:1/0,u=Math.max(0,t),f=Math.min(r,c,d);f>u&&(!l.ending||l.ended)?(l.ended=!1,this.log(`Removing [${u},${f}] from the ${e} SourceBuffer`),l.remove(u,f)):s.shiftAndExecuteNext(e)}appendExecutor(e,t){const r=this.sourceBuffer[t];if(!r){if(!this.pendingTracks[t])throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);return}r.ended=!1,r.appendBuffer(e)}blockBuffers(e,t=this.getSourceBufferTypes()){if(!t.length){this.log("Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);return}const{operationQueue:r}=this,i=t.map(o=>r.appendBlocker(o));Promise.all(i).then(()=>{e(),t.forEach(o=>{const s=this.sourceBuffer[o];s!=null&&s.updating||r.shiftAndExecuteNext(o)})})}getSourceBufferTypes(){return Object.keys(this.sourceBuffer)}addBufferListener(e,t,r){const i=this.sourceBuffer[e];if(!i)return;const o=r.bind(this,e);this.listeners[e].push({event:t,listener:o}),i.addEventListener(t,o)}removeBufferListeners(e){const t=this.sourceBuffer[e];t&&this.listeners[e].forEach(r=>{t.removeEventListener(r.event,r.listener)})}}function hm(n){const e=n.querySelectorAll("source");[].slice.call(e).forEach(t=>{n.removeChild(t)})}function hD(n,e){const t=self.document.createElement("source");t.type="video/mp4",t.src=e,n.appendChild(t)}const pD={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},uv=n=>String.fromCharCode(pD[n]||n),Un=15,br=100,mD={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},gD={17:2,18:4,21:6,22:8,23:10,19:13,20:15},yD={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},vD={25:2,26:4,29:6,30:8,31:10,27:13,28:15},bD=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];class AD{constructor(){this.time=null,this.verboseLevel=0}log(e,t){if(this.verboseLevel>=e){const r=typeof t=="function"?t():t;se.log(`${this.time} [${e}] ${r}`)}}}const hi=function(e){const t=[];for(let r=0;r<e.length;r++)t.push(e[r].toString(16));return t};class fv{constructor(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}reset(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}setStyles(e){const t=["foreground","underline","italics","background","flash"];for(let r=0;r<t.length;r++){const i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}}isDefault(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}equals(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}copy(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}toString(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}class xD{constructor(){this.uchar=" ",this.penState=new fv}reset(){this.uchar=" ",this.penState.reset()}setChar(e,t){this.uchar=e,this.penState.copy(t)}setPenState(e){this.penState.copy(e)}equals(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}copy(e){this.uchar=e.uchar,this.penState.copy(e.penState)}isEmpty(){return this.uchar===" "&&this.penState.isDefault()}}class ED{constructor(e){this.chars=[],this.pos=0,this.currPenState=new fv,this.cueStartTime=null,this.logger=void 0;for(let t=0;t<br;t++)this.chars.push(new xD);this.logger=e}equals(e){for(let t=0;t<br;t++)if(!this.chars[t].equals(e.chars[t]))return!1;return!0}copy(e){for(let t=0;t<br;t++)this.chars[t].copy(e.chars[t])}isEmpty(){let e=!0;for(let t=0;t<br;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}setCursor(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>br&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=br)}moveCursor(e){const t=this.pos+e;if(e>1)for(let r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)}backSpace(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}insertChar(e){e>=144&&this.backSpace();const t=uv(e);if(this.pos>=br){this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}clearFromPos(e){let t;for(t=e;t<br;t++)this.chars[t].reset()}clear(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}clearToEndOfRow(){this.clearFromPos(this.pos)}getTextString(){const e=[];let t=!0;for(let r=0;r<br;r++){const i=this.chars[r].uchar;i!==" "&&(t=!1),e.push(i)}return t?"":e.join("")}setPenStyles(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}class ed{constructor(e){this.rows=[],this.currRow=Un-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.logger=void 0;for(let t=0;t<Un;t++)this.rows.push(new ED(e));this.logger=e}reset(){for(let e=0;e<Un;e++)this.rows[e].clear();this.currRow=Un-1}equals(e){let t=!0;for(let r=0;r<Un;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t}copy(e){for(let t=0;t<Un;t++)this.rows[t].copy(e.rows[t])}isEmpty(){let e=!0;for(let t=0;t<Un;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}backSpace(){this.rows[this.currRow].backSpace()}clearToEndOfRow(){this.rows[this.currRow].clearToEndOfRow()}insertChar(e){this.rows[this.currRow].insertChar(e)}setPen(e){this.rows[this.currRow].setPenStyles(e)}moveCursor(e){this.rows[this.currRow].moveCursor(e)}setCursor(e){this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}setPAC(e){this.logger.log(2,()=>"pacData = "+JSON.stringify(e));let t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(let a=0;a<Un;a++)this.rows[a].clear();const o=this.currRow+1-this.nrRollUpRows,s=this.lastOutputScreen;if(s){const a=s.rows[o].cueStartTime,l=this.logger.time;if(a!==null&&l!==null&&a<l)for(let c=0;c<this.nrRollUpRows;c++)this.rows[t-this.nrRollUpRows+c+1].copy(s.rows[o+c])}}this.currRow=t;const r=this.rows[this.currRow];if(e.indent!==null){const o=e.indent,s=Math.max(o-1,0);r.setCursor(e.indent),e.color=r.chars[s].penState.foreground}const i={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(i)}setBkgData(e){this.logger.log(2,()=>"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}setRollUpRows(e){this.nrRollUpRows=e}rollUp(){if(this.nrRollUpRows===null){this.logger.log(3,"roll_up but nrRollUpRows not set yet");return}this.logger.log(1,()=>this.getDisplayText());const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}getDisplayText(e){e=e||!1;const t=[];let r="",i=-1;for(let o=0;o<Un;o++){const s=this.rows[o].getTextString();s&&(i=o+1,e?t.push("Row "+i+": '"+s+"'"):t.push(s.trim()))}return t.length>0&&(e?r="["+t.join(" | ")+"]":r=t.join(`
`)),r}getTextAndFormat(){return this.rows}}class pm{constructor(e,t,r){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new ed(r),this.nonDisplayedMemory=new ed(r),this.lastOutputScreen=new ed(r),this.currRollUpRow=this.displayedMemory.rows[Un-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=r}reset(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[Un-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}getHandler(){return this.outputFilter}setHandler(e){this.outputFilter=e}setPAC(e){this.writeScreen.setPAC(e)}setBkgData(e){this.writeScreen.setBkgData(e)}setMode(e){e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}insertChars(e){for(let r=0;r<e.length;r++)this.writeScreen.insertChar(e[r]);const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}ccRCL(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}ccBS(){this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}ccAOF(){}ccAON(){}ccDER(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}ccRU(e){this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}ccFON(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})}ccRDC(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}ccTR(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}ccRTD(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}ccEDM(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}ccCR(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}ccENM(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}ccEOC(){if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){const e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}ccTO(e){this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}ccMIDROW(e){const t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{const r=Math.floor(e/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=i[r]}this.logger.log(2,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}outputDataUpdate(e=!1){const t=this.logger.time;t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}cueSplitAtTime(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}class mm{constructor(e,t,r){this.channels=void 0,this.currentChannel=0,this.cmdHistory=CD(),this.logger=void 0;const i=this.logger=new AD;this.channels=[null,new pm(e,t,i),new pm(e+1,r,i)]}getHandler(e){return this.channels[e].getHandler()}setHandler(e,t){this.channels[e].setHandler(t)}addData(e,t){this.logger.time=e;for(let r=0;r<t.length;r+=2){const i=t[r]&127,o=t[r+1]&127;let s=!1,a=null;if(i===0&&o===0)continue;this.logger.log(3,()=>"["+hi([t[r],t[r+1]])+"] -> ("+hi([i,o])+")");const l=this.cmdHistory;if(i>=16&&i<=31){if(wD(i,o,l)){Na(null,null,l),this.logger.log(3,()=>"Repeated command ("+hi([i,o])+") is dropped");continue}Na(i,o,this.cmdHistory),s=this.parseCmd(i,o),s||(s=this.parseMidrow(i,o)),s||(s=this.parsePAC(i,o)),s||(s=this.parseBackgroundAttributes(i,o))}else Na(null,null,l);if(!s&&(a=this.parseChars(i,o),a)){const d=this.currentChannel;d&&d>0?this.channels[d].insertChars(a):this.logger.log(2,"No channel found yet. TEXT-MODE?")}!s&&!a&&this.logger.log(2,()=>"Couldn't parse cleaned data "+hi([i,o])+" orig: "+hi([t[r],t[r+1]]))}}parseCmd(e,t){const r=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=33&&t<=35;if(!(r||i))return!1;const o=e===20||e===21||e===23?1:2,s=this.channels[o];return e===20||e===21||e===28||e===29?t===32?s.ccRCL():t===33?s.ccBS():t===34?s.ccAOF():t===35?s.ccAON():t===36?s.ccDER():t===37?s.ccRU(2):t===38?s.ccRU(3):t===39?s.ccRU(4):t===40?s.ccFON():t===41?s.ccRDC():t===42?s.ccTR():t===43?s.ccRTD():t===44?s.ccEDM():t===45?s.ccCR():t===46?s.ccENM():t===47&&s.ccEOC():s.ccTO(t-32),this.currentChannel=o,!0}parseMidrow(e,t){let r=0;if((e===17||e===25)&&t>=32&&t<=47){if(e===17?r=1:r=2,r!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;const i=this.channels[r];return i?(i.ccMIDROW(t),this.logger.log(3,()=>"MIDROW ("+hi([e,t])+")"),!0):!1}return!1}parsePAC(e,t){let r;const i=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,o=(e===16||e===24)&&t>=64&&t<=95;if(!(i||o))return!1;const s=e<=23?1:2;t>=64&&t<=95?r=s===1?mD[e]:yD[e]:r=s===1?gD[e]:vD[e];const a=this.channels[s];return a?(a.setPAC(this.interpretPAC(r,t)),this.currentChannel=s,!0):!1}interpretPAC(e,t){let r;const i={color:null,italics:!1,indent:null,underline:!1,row:e};return t>95?r=t-96:r=t-64,i.underline=(r&1)===1,r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=Math.floor((r-16)/2)*4,i}parseChars(e,t){let r,i=null,o=null;if(e>=25?(r=2,o=e-8):(r=1,o=e),o>=17&&o<=19){let s;o===17?s=t+80:o===18?s=t+112:s=t+144,this.logger.log(2,()=>"Special char '"+uv(s)+"' in channel "+r),i=[s]}else e>=32&&e<=127&&(i=t===0?[e]:[e,t]);return i&&this.logger.log(3,()=>"Char codes =  "+hi(i).join(",")),i}parseBackgroundAttributes(e,t){const r=(e===16||e===24)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=45&&t<=47;if(!(r||i))return!1;let o;const s={};e===16||e===24?(o=Math.floor((t-32)/2),s.background=bD[o],t%2===1&&(s.background=s.background+"_semi")):t===45?s.background="transparent":(s.foreground="black",t===47&&(s.underline=!0));const a=e<=23?1:2;return this.channels[a].setBkgData(s),!0}reset(){for(let e=0;e<Object.keys(this.channels).length;e++){const t=this.channels[e];t&&t.reset()}Na(null,null,this.cmdHistory)}cueSplitAtTime(e){for(let t=0;t<this.channels.length;t++){const r=this.channels[t];r&&r.cueSplitAtTime(e)}}}function Na(n,e,t){t.a=n,t.b=e}function wD(n,e,t){return t.a===n&&t.b===e}function CD(){return{a:null,b:null}}class za{constructor(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}dispatchCue(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}newCue(e,t,r){(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)}reset(){this.cueRanges=[],this.startTime=null}}var bf=function(){if(To!=null&&To.VTTCue)return self.VTTCue;const n=["","lr","rl"],e=["start","middle","end","left","right"];function t(a,l){if(typeof l!="string"||!Array.isArray(a))return!1;const c=l.toLowerCase();return~a.indexOf(c)?c:!1}function r(a){return t(n,a)}function i(a){return t(e,a)}function o(a,...l){let c=1;for(;c<arguments.length;c++){const d=arguments[c];for(const u in d)a[u]=d[u]}return a}function s(a,l,c){const d=this,u={enumerable:!0};d.hasBeenReset=!1;let f="",h=!1,p=a,m=l,g=c,y=null,E="",S=!0,C="auto",k="start",M=50,T="middle",z=50,F="middle";Object.defineProperty(d,"id",o({},u,{get:function(){return f},set:function(O){f=""+O}})),Object.defineProperty(d,"pauseOnExit",o({},u,{get:function(){return h},set:function(O){h=!!O}})),Object.defineProperty(d,"startTime",o({},u,{get:function(){return p},set:function(O){if(typeof O!="number")throw new TypeError("Start time must be set to a number.");p=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"endTime",o({},u,{get:function(){return m},set:function(O){if(typeof O!="number")throw new TypeError("End time must be set to a number.");m=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"text",o({},u,{get:function(){return g},set:function(O){g=""+O,this.hasBeenReset=!0}})),Object.defineProperty(d,"region",o({},u,{get:function(){return y},set:function(O){y=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"vertical",o({},u,{get:function(){return E},set:function(O){const V=r(O);if(V===!1)throw new SyntaxError("An invalid or illegal string was specified.");E=V,this.hasBeenReset=!0}})),Object.defineProperty(d,"snapToLines",o({},u,{get:function(){return S},set:function(O){S=!!O,this.hasBeenReset=!0}})),Object.defineProperty(d,"line",o({},u,{get:function(){return C},set:function(O){if(typeof O!="number"&&O!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");C=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"lineAlign",o({},u,{get:function(){return k},set:function(O){const V=i(O);if(!V)throw new SyntaxError("An invalid or illegal string was specified.");k=V,this.hasBeenReset=!0}})),Object.defineProperty(d,"position",o({},u,{get:function(){return M},set:function(O){if(O<0||O>100)throw new Error("Position must be between 0 and 100.");M=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"positionAlign",o({},u,{get:function(){return T},set:function(O){const V=i(O);if(!V)throw new SyntaxError("An invalid or illegal string was specified.");T=V,this.hasBeenReset=!0}})),Object.defineProperty(d,"size",o({},u,{get:function(){return z},set:function(O){if(O<0||O>100)throw new Error("Size must be between 0 and 100.");z=O,this.hasBeenReset=!0}})),Object.defineProperty(d,"align",o({},u,{get:function(){return F},set:function(O){const V=i(O);if(!V)throw new SyntaxError("An invalid or illegal string was specified.");F=V,this.hasBeenReset=!0}})),d.displayState=void 0}return s.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},s}();class SD{decode(e,t){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}function hv(n){function e(r,i,o,s){return(r|0)*3600+(i|0)*60+(o|0)+parseFloat(s||0)}const t=n.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}class TD{constructor(){this.values=Object.create(null)}set(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)}get(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t}has(e){return e in this.values}alt(e,t,r){for(let i=0;i<r.length;++i)if(t===r[i]){this.set(e,t);break}}integer(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}percent(e,t){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){const r=parseFloat(t);if(r>=0&&r<=100)return this.set(e,r),!0}return!1}}function pv(n,e,t,r){const i=r?n.split(r):[n];for(const o in i){if(typeof i[o]!="string")continue;const s=i[o].split(t);if(s.length!==2)continue;const a=s[0],l=s[1];e(a,l)}}const Jd=new bf(0,0,""),$a=Jd.align==="middle"?"middle":"center";function kD(n,e,t){const r=n;function i(){const a=hv(n);if(a===null)throw new Error("Malformed timestamp: "+r);return n=n.replace(/^[^\sa-zA-Z-]+/,""),a}function o(a,l){const c=new TD;pv(a,function(f,h){let p;switch(f){case"region":for(let m=t.length-1;m>=0;m--)if(t[m].id===h){c.set(f,t[m].region);break}break;case"vertical":c.alt(f,h,["rl","lr"]);break;case"line":p=h.split(","),c.integer(f,p[0]),c.percent(f,p[0])&&c.set("snapToLines",!1),c.alt(f,p[0],["auto"]),p.length===2&&c.alt("lineAlign",p[1],["start",$a,"end"]);break;case"position":p=h.split(","),c.percent(f,p[0]),p.length===2&&c.alt("positionAlign",p[1],["start",$a,"end","line-left","line-right","auto"]);break;case"size":c.percent(f,h);break;case"align":c.alt(f,h,["start",$a,"end","left","right"]);break}},/:/,/\s/),l.region=c.get("region",null),l.vertical=c.get("vertical","");let d=c.get("line","auto");d==="auto"&&Jd.line===-1&&(d=-1),l.line=d,l.lineAlign=c.get("lineAlign","start"),l.snapToLines=c.get("snapToLines",!0),l.size=c.get("size",100),l.align=c.get("align",$a);let u=c.get("position","auto");u==="auto"&&Jd.position===50&&(u=l.align==="start"||l.align==="left"?0:l.align==="end"||l.align==="right"?100:50),l.position=u}function s(){n=n.replace(/^\s+/,"")}if(s(),e.startTime=i(),s(),n.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+r);n=n.slice(3),s(),e.endTime=i(),s(),o(n,e)}function mv(n){return n.replace(/<br(?: \/)?>/gi,`
`)}class ID{constructor(){this.state="INITIAL",this.buffer="",this.decoder=new SD,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}parse(e){const t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function r(){let o=t.buffer,s=0;for(o=mv(o);s<o.length&&o[s]!=="\r"&&o[s]!==`
`;)++s;const a=o.slice(0,s);return o[s]==="\r"&&++s,o[s]===`
`&&++s,t.buffer=o.slice(s),a}function i(o){pv(o,function(s,a){},/:/)}try{let o="";if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;o=r();const a=o.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!(a!=null&&a[0]))throw new Error("Malformed WebVTT signature.");t.state="HEADER"}let s=!1;for(;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(s?s=!1:o=r(),t.state){case"HEADER":/:/.test(o)?i(o):o||(t.state="ID");continue;case"NOTE":o||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(o)){t.state="NOTE";break}if(!o)continue;if(t.cue=new bf(0,0,""),t.state="CUE",o.indexOf("-->")===-1){t.cue.id=o;continue}case"CUE":if(!t.cue){t.state="BADCUE";continue}try{kD(o,t.cue,t.regionList)}catch{t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":{const a=o.indexOf("-->")!==-1;if(!o||a&&(s=!0)){t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}if(t.cue===null)continue;t.cue.text&&(t.cue.text+=`
`),t.cue.text+=o}continue;case"BADCUE":o||(t.state="ID")}}}catch{t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this}flush(){const e=this;try{if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(t){e.onparsingerror&&e.onparsingerror(t)}return e.onflush&&e.onflush(),this}}const LD=/\r\n|\n\r|\n|\r/g,td=function(e,t,r=0){return e.slice(r,r+t.length)===t},RD=function(e){let t=parseInt(e.slice(-3));const r=parseInt(e.slice(-6,-4)),i=parseInt(e.slice(-9,-7)),o=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;if(!$e(t)||!$e(r)||!$e(i)||!$e(o))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);return t+=1e3*r,t+=60*1e3*i,t+=60*60*1e3*o,t},nd=function(e){let t=5381,r=e.length;for(;r;)t=t*33^e.charCodeAt(--r);return(t>>>0).toString()};function Af(n,e,t){return nd(n.toString())+nd(e.toString())+nd(t)}const _D=function(e,t,r){let i=e[t],o=e[i.prevCC];if(!o||!o.new&&i.new){e.ccOffset=e.presentationOffset=i.start,i.new=!1;return}for(;(s=o)!=null&&s.new;){var s;e.ccOffset+=i.start-o.start,i.new=!1,i=o,o=e[i.prevCC]}e.presentationOffset=r};function DD(n,e,t,r,i,o,s){const a=new ID,l=cr(new Uint8Array(n)).trim().replace(LD,`
`).split(`
`),c=[],d=e?Y5(e.baseTime,e.timescale):0;let u="00:00.000",f=0,h=0,p,m=!0;a.oncue=function(g){const y=t[r];let E=t.ccOffset;const S=(f-d)/9e4;if(y!=null&&y.new&&(h!==void 0?E=t.ccOffset=y.start:_D(t,r,S)),S){if(!e){p=new Error("Missing initPTS for VTT MPEGTS");return}E=S-t.presentationOffset}const C=g.endTime-g.startTime,k=Dn((g.startTime+E-h)*9e4,i*9e4)/9e4;g.startTime=Math.max(k,0),g.endTime=Math.max(k+C,0);const M=g.text.trim();g.text=decodeURIComponent(encodeURIComponent(M)),g.id||(g.id=Af(g.startTime,g.endTime,M)),g.endTime>0&&c.push(g)},a.onparsingerror=function(g){p=g},a.onflush=function(){if(p){s(p);return}o(c)},l.forEach(g=>{if(m)if(td(g,"X-TIMESTAMP-MAP=")){m=!1,g.slice(16).split(",").forEach(y=>{td(y,"LOCAL:")?u=y.slice(6):td(y,"MPEGTS:")&&(f=parseInt(y.slice(7)))});try{h=RD(u)/1e3}catch(y){p=y}return}else g===""&&(m=!1);a.parse(g+`
`)}),a.flush()}const rd="stpp.ttml.im1t",gv=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,yv=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,PD={left:"start",center:"center",right:"end",start:"start",end:"end"};function gm(n,e,t,r){const i=tt(new Uint8Array(n),["mdat"]);if(i.length===0){r(new Error("Could not parse IMSC1 mdat"));return}const o=i.map(a=>cr(a)),s=q5(e.baseTime,1,e.timescale);try{o.forEach(a=>t(BD(a,s)))}catch(a){r(a)}}function BD(n,e){const i=new DOMParser().parseFromString(n,"text/xml").getElementsByTagName("tt")[0];if(!i)throw new Error("Invalid ttml");const o={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},s=Object.keys(o).reduce((u,f)=>(u[f]=i.getAttribute(`ttp:${f}`)||o[f],u),{}),a=i.getAttribute("xml:space")!=="preserve",l=ym(id(i,"styling","style")),c=ym(id(i,"layout","region")),d=id(i,"body","[begin]");return[].map.call(d,u=>{const f=vv(u,a);if(!f||!u.hasAttribute("begin"))return null;const h=sd(u.getAttribute("begin"),s),p=sd(u.getAttribute("dur"),s);let m=sd(u.getAttribute("end"),s);if(h===null)throw vm(u);if(m===null){if(p===null)throw vm(u);m=h+p}const g=new bf(h-e,m-e,f);g.id=Af(g.startTime,g.endTime,g.text);const y=c[u.getAttribute("region")],E=l[u.getAttribute("style")],S=OD(y,E,l),{textAlign:C}=S;if(C){const k=PD[C];k&&(g.lineAlign=k),g.align=C}return Ut(g,S),g}).filter(u=>u!==null)}function id(n,e,t){const r=n.getElementsByTagName(e)[0];return r?[].slice.call(r.querySelectorAll(t)):[]}function ym(n){return n.reduce((e,t)=>{const r=t.getAttribute("xml:id");return r&&(e[r]=t),e},{})}function vv(n,e){return[].slice.call(n.childNodes).reduce((t,r,i)=>{var o;return r.nodeName==="br"&&i?t+`
`:(o=r.childNodes)!=null&&o.length?vv(r,e):e?t+r.textContent.trim().replace(/\s+/g," "):t+r.textContent},"")}function OD(n,e,t){const r="http://www.w3.org/ns/ttml#styling";let i=null;const o=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],s=n!=null&&n.hasAttribute("style")?n.getAttribute("style"):null;return s&&t.hasOwnProperty(s)&&(i=t[s]),o.reduce((a,l)=>{const c=od(e,r,l)||od(n,r,l)||od(i,r,l);return c&&(a[l]=c),a},{})}function od(n,e,t){return n&&n.hasAttributeNS(e,t)?n.getAttributeNS(e,t):null}function vm(n){return new Error(`Could not parse ttml timestamp ${n}`)}function sd(n,e){if(!n)return null;let t=hv(n);return t===null&&(gv.test(n)?t=FD(n,e):yv.test(n)&&(t=MD(n,e))),t}function FD(n,e){const t=gv.exec(n),r=(t[4]|0)+(t[5]|0)/e.subFrameRate;return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+r/e.frameRate}function MD(n,e){const t=yv.exec(n),r=Number(t[1]);switch(t[2]){case"h":return r*3600;case"m":return r*60;case"ms":return r*1e3;case"f":return r/e.frameRate;case"t":return r/e.tickRate}return r}class ND{constructor(e){this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=Am(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},e.on(P.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(P.MANIFEST_LOADING,this.onManifestLoading,this),e.on(P.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(P.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(P.FRAG_LOADING,this.onFragLoading,this),e.on(P.FRAG_LOADED,this.onFragLoaded,this),e.on(P.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(P.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(P.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(P.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(P.BUFFER_FLUSHING,this.onBufferFlushing,this)}destroy(){const{hls:e}=this;e.off(P.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(P.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(P.MANIFEST_LOADING,this.onManifestLoading,this),e.off(P.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(P.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(P.FRAG_LOADING,this.onFragLoading,this),e.off(P.FRAG_LOADED,this.onFragLoaded,this),e.off(P.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(P.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(P.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(P.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(P.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=null,this.cea608Parser1=this.cea608Parser2=void 0}initCea608Parsers(){if(this.config.enableCEA708Captions&&(!this.cea608Parser1||!this.cea608Parser2)){const e=new za(this,"textTrack1"),t=new za(this,"textTrack2"),r=new za(this,"textTrack3"),i=new za(this,"textTrack4");this.cea608Parser1=new mm(1,e,t),this.cea608Parser2=new mm(3,r,i)}}addCues(e,t,r,i,o){let s=!1;for(let a=o.length;a--;){const l=o[a],c=zD(l[0],l[1],t,r);if(c>=0&&(l[0]=Math.min(l[0],t),l[1]=Math.max(l[1],r),s=!0,c/(r-t)>.5))return}if(s||o.push([t,r]),this.config.renderTextTracksNatively){const a=this.captionsTracks[e];this.Cues.newCue(a,t,r,i)}else{const a=this.Cues.newCue(null,t,r,i);this.hls.trigger(P.CUES_PARSED,{type:"captions",cues:a,track:e})}}onInitPtsFound(e,{frag:t,id:r,initPTS:i,timescale:o}){const{unparsedVttFrags:s}=this;r==="main"&&(this.initPTS[t.cc]={baseTime:i,timescale:o}),s.length&&(this.unparsedVttFrags=[],s.forEach(a=>{this.onFragLoaded(P.FRAG_LOADED,a)}))}getExistingTrack(e,t){const{media:r}=this;if(r)for(let i=0;i<r.textTracks.length;i++){const o=r.textTracks[i];if(bm(o,{name:e,lang:t,attrs:{}}))return o}return null}createCaptionsTrack(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}createNativeTrack(e){if(this.captionsTracks[e])return;const{captionsProperties:t,captionsTracks:r,media:i}=this,{label:o,languageCode:s}=t[e],a=this.getExistingTrack(o,s);if(a)r[e]=a,lo(r[e]),Ny(r[e],i);else{const l=this.createTextTrack("captions",o,s);l&&(l[e]=!0,r[e]=l)}}createNonNativeTrack(e){if(this.nonNativeCaptionsTracks[e])return;const t=this.captionsProperties[e];if(!t)return;const r=t.label,i={_id:e,label:r,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=i,this.hls.trigger(P.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[i]})}createTextTrack(e,t,r){const i=this.media;if(i)return i.addTextTrack(e,t,r)}onMediaAttaching(e,t){this.media=t.media,this._cleanTracks()}onMediaDetaching(){const{captionsTracks:e}=this;Object.keys(e).forEach(t=>{lo(e[t]),delete e[t]}),this.nonNativeCaptionsTracks={}}onManifestLoading(){this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=Am(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}_cleanTracks(){const{media:e}=this;if(!e)return;const t=e.textTracks;if(t)for(let r=0;r<t.length;r++)lo(t[r])}onSubtitleTracksUpdated(e,t){const r=t.subtitleTracks||[],i=r.some(o=>o.textCodec===rd);if(this.config.enableWebVTT||i&&this.config.enableIMSC1){if(dv(this.tracks,r)){this.tracks=r;return}if(this.textTracks=[],this.tracks=r,this.config.renderTextTracksNatively){const s=this.media,a=s?Xa(s.textTracks):null;if(this.tracks.forEach((l,c)=>{let d;if(a){let u=null;for(let f=0;f<a.length;f++)if(a[f]&&bm(a[f],l)){u=a[f],a[f]=null;break}u&&(d=u)}if(d)lo(d);else{const u=bv(l);d=this.createTextTrack(u,l.name,l.lang),d&&(d.mode="disabled")}d&&this.textTracks.push(d)}),a!=null&&a.length){const l=a.filter(c=>c!==null).map(c=>c.label);l.length&&se.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)}}else if(this.tracks.length){const s=this.tracks.map(a=>({label:a.name,kind:a.type.toLowerCase(),default:a.default,subtitleTrack:a}));this.hls.trigger(P.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:s})}}}onManifestLoaded(e,t){this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(r=>{const i=/(?:CC|SERVICE)([1-4])/.exec(r.instreamId);if(!i)return;const o=`textTrack${i[1]}`,s=this.captionsProperties[o];s&&(s.label=r.name,r.lang&&(s.languageCode=r.lang),s.media=r)})}closedCaptionsForLevel(e){const t=this.hls.levels[e.level];return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}onFragLoading(e,t){if(this.enabled&&t.frag.type===Ye.MAIN){var r,i;const{cea608Parser1:o,cea608Parser2:s,lastSn:a}=this,{cc:l,sn:c}=t.frag,d=(r=(i=t.part)==null?void 0:i.index)!=null?r:-1;o&&s&&(c!==a+1||c===a&&d!==this.lastPartIndex+1||l!==this.lastCc)&&(o.reset(),s.reset()),this.lastCc=l,this.lastSn=c,this.lastPartIndex=d}}onFragLoaded(e,t){const{frag:r,payload:i}=t;if(r.type===Ye.SUBTITLE)if(i.byteLength){const o=r.decryptdata,s="stats"in t;if(o==null||!o.encrypted||s){const a=this.tracks[r.level],l=this.vttCCs;l[r.cc]||(l[r.cc]={start:r.start,prevCC:this.prevCC,new:!0},this.prevCC=r.cc),a&&a.textCodec===rd?this._parseIMSC1(r,i):this._parseVTTs(t)}}else this.hls.trigger(P.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:new Error("Empty subtitle payload")})}_parseIMSC1(e,t){const r=this.hls;gm(t,this.initPTS[e.cc],i=>{this._appendCues(i,e.level),r.trigger(P.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},i=>{se.log(`Failed to parse IMSC1: ${i}`),r.trigger(P.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:i})})}_parseVTTs(e){var t;const{frag:r,payload:i}=e,{initPTS:o,unparsedVttFrags:s}=this,a=o.length-1;if(!o[r.cc]&&a===-1){s.push(e);return}const l=this.hls,c=(t=r.initSegment)!=null&&t.data?Bn(r.initSegment.data,new Uint8Array(i)):i;DD(c,this.initPTS[r.cc],this.vttCCs,r.cc,r.start,d=>{this._appendCues(d,r.level),l.trigger(P.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:r})},d=>{const u=d.message==="Missing initPTS for VTT MPEGTS";u?s.push(e):this._fallbackToIMSC1(r,i),se.log(`Failed to parse VTT cue: ${d}`),!(u&&a>r.cc)&&l.trigger(P.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r,error:d})})}_fallbackToIMSC1(e,t){const r=this.tracks[e.level];r.textCodec||gm(t,this.initPTS[e.cc],()=>{r.textCodec=rd,this._parseIMSC1(e,t)},()=>{r.textCodec="wvtt"})}_appendCues(e,t){const r=this.hls;if(this.config.renderTextTracksNatively){const i=this.textTracks[t];if(!i||i.mode==="disabled")return;e.forEach(o=>zy(i,o))}else{const i=this.tracks[t];if(!i)return;const o=i.default?"default":"subtitles"+t;r.trigger(P.CUES_PARSED,{type:"subtitles",cues:e,track:o})}}onFragDecrypted(e,t){const{frag:r}=t;r.type===Ye.SUBTITLE&&this.onFragLoaded(P.FRAG_LOADED,t)}onSubtitleTracksCleared(){this.tracks=[],this.captionsTracks={}}onFragParsingUserdata(e,t){this.initCea608Parsers();const{cea608Parser1:r,cea608Parser2:i}=this;if(!this.enabled||!r||!i)return;const{frag:o,samples:s}=t;if(!(o.type===Ye.MAIN&&this.closedCaptionsForLevel(o)==="NONE"))for(let a=0;a<s.length;a++){const l=s[a].bytes;if(l){const c=this.extractCea608Data(l);r.addData(s[a].pts,c[0]),i.addData(s[a].pts,c[1])}}}onBufferFlushing(e,{startOffset:t,endOffset:r,endOffsetSubtitles:i,type:o}){const{media:s}=this;if(!(!s||s.currentTime<r)){if(!o||o==="video"){const{captionsTracks:a}=this;Object.keys(a).forEach(l=>Kd(a[l],t,r))}if(this.config.renderTextTracksNatively&&t===0&&i!==void 0){const{textTracks:a}=this;Object.keys(a).forEach(l=>Kd(a[l],t,i))}}}extractCea608Data(e){const t=[[],[]],r=e[0]&31;let i=2;for(let o=0;o<r;o++){const s=e[i++],a=127&e[i++],l=127&e[i++];if(a===0&&l===0)continue;if((4&s)!==0){const d=3&s;(d===0||d===1)&&(t[d].push(a),t[d].push(l))}}return t}}function bv(n){return n.characteristics&&/transcribes-spoken-dialog/gi.test(n.characteristics)&&/describes-music-and-sound/gi.test(n.characteristics)?"captions":"subtitles"}function bm(n,e){return!!n&&n.kind===bv(e)&&Qd(e,n)}function zD(n,e,t,r){return Math.min(e,r)-Math.max(n,t)}function Am(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}class xf{constructor(e){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}setStreamController(e){this.streamController=e}destroy(){this.hls&&this.unregisterListener(),this.timer&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}registerListeners(){const{hls:e}=this;e.on(P.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(P.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(P.MANIFEST_PARSED,this.onManifestParsed,this),e.on(P.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(P.BUFFER_CODECS,this.onBufferCodecs,this),e.on(P.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListener(){const{hls:e}=this;e.off(P.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(P.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(P.MANIFEST_PARSED,this.onManifestParsed,this),e.off(P.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(P.BUFFER_CODECS,this.onBufferCodecs,this),e.off(P.MEDIA_DETACHING,this.onMediaDetaching,this)}onFpsDropLevelCapping(e,t){const r=this.hls.levels[t.droppedLevel];this.isLevelAllowed(r)&&this.restrictedLevels.push({bitrate:r.bitrate,height:r.height,width:r.width})}onMediaAttaching(e,t){this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null,this.timer&&this.hls.levels.length&&this.detectPlayerSize()}onManifestParsed(e,t){const r=this.hls;this.restrictedLevels=[],this.firstLevel=t.firstLevel,r.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onLevelsUpdated(e,t){this.timer&&$e(this.autoLevelCapping)&&this.detectPlayerSize()}onBufferCodecs(e,t){this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onMediaDetaching(){this.stopCapping()}detectPlayerSize(){if(this.media){if(this.mediaHeight<=0||this.mediaWidth<=0){this.clientRect=null;return}const e=this.hls.levels;if(e.length){const t=this.hls,r=this.getMaxLevel(e.length-1);r!==this.autoLevelCapping&&se.log(`Setting autoLevelCapping to ${r}: ${e[r].height}p@${e[r].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`),t.autoLevelCapping=r,t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}getMaxLevel(e){const t=this.hls.levels;if(!t.length)return-1;const r=t.filter((i,o)=>this.isLevelAllowed(i)&&o<=e);return this.clientRect=null,xf.getMaxLevelByMediaSize(r,this.mediaWidth,this.mediaHeight)}startCapping(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}stopCapping(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}getDimensions(){if(this.clientRect)return this.clientRect;const e=this.media,t={width:0,height:0};if(e){const r=e.getBoundingClientRect();t.width=r.width,t.height=r.height,!t.width&&!t.height&&(t.width=r.right-r.left||e.width||0,t.height=r.bottom-r.top||e.height||0)}return this.clientRect=t,t}get mediaWidth(){return this.getDimensions().width*this.contentScaleFactor}get mediaHeight(){return this.getDimensions().height*this.contentScaleFactor}get contentScaleFactor(){let e=1;if(!this.hls.config.ignoreDevicePixelRatio)try{e=self.devicePixelRatio}catch{}return e}isLevelAllowed(e){return!this.restrictedLevels.some(r=>e.bitrate===r.bitrate&&e.width===r.width&&e.height===r.height)}static getMaxLevelByMediaSize(e,t,r){if(!(e!=null&&e.length))return-1;const i=(a,l)=>l?a.width!==l.width||a.height!==l.height:!0;let o=e.length-1;const s=Math.max(t,r);for(let a=0;a<e.length;a+=1){const l=e[a];if((l.width>=s||l.height>=s)&&i(l,e[a+1])){o=a;break}}return o}}class $D{constructor(e){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}setStreamController(e){this.streamController=e}registerListeners(){this.hls.on(P.MEDIA_ATTACHING,this.onMediaAttaching,this)}unregisterListeners(){this.hls.off(P.MEDIA_ATTACHING,this.onMediaAttaching,this)}destroy(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}onMediaAttaching(e,t){const r=this.hls.config;if(r.capLevelOnFPSDrop){const i=t.media instanceof self.HTMLVideoElement?t.media:null;this.media=i,i&&typeof i.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),r.fpsDroppedMonitoringPeriod)}}checkFPS(e,t,r){const i=performance.now();if(t){if(this.lastTime){const o=i-this.lastTime,s=r-this.lastDroppedFrames,a=t-this.lastDecodedFrames,l=1e3*s/o,c=this.hls;if(c.trigger(P.FPS_DROP,{currentDropped:s,currentDecoded:a,totalDroppedFrames:r}),l>0&&s>c.config.fpsDroppedMonitoringThreshold*a){let d=c.currentLevel;se.warn("drop FPS ratio greater than max allowed value for currentLevel: "+d),d>0&&(c.autoLevelCapping===-1||c.autoLevelCapping>=d)&&(d=d-1,c.trigger(P.FPS_DROP_LEVEL_CAPPING,{level:d,droppedLevel:c.currentLevel}),c.autoLevelCapping=d,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}}checkFPSInterval(){const e=this.media;if(e)if(this.isVideoPlaybackQualityAvailable){const t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}const Ua="[eme]";class vo{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=vo.CDMCleanupPromise?[vo.CDMCleanupPromise]:[],this.onMediaEncrypted=this._onMediaEncrypted.bind(this),this.onWaitingForKey=this._onWaitingForKey.bind(this),this.debug=se.debug.bind(se,Ua),this.log=se.log.bind(se,Ua),this.warn=se.warn.bind(se,Ua),this.error=se.error.bind(se,Ua),this.hls=e,this.config=e.config,this.registerListeners()}destroy(){this.unregisterListeners(),this.onMediaDetached();const e=this.config;e.requestMediaKeySystemAccessFunc=null,e.licenseXhrSetup=e.licenseResponseCallback=void 0,e.drmSystems=e.drmSystemOptions={},this.hls=this.onMediaEncrypted=this.onWaitingForKey=this.keyIdToKeySessionPromise=null,this.config=null}registerListeners(){this.hls.on(P.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(P.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(P.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(P.MANIFEST_LOADED,this.onManifestLoaded,this)}unregisterListeners(){this.hls.off(P.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(P.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(P.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(P.MANIFEST_LOADED,this.onManifestLoaded,this)}getLicenseServerUrl(e){const{drmSystems:t,widevineLicenseUrl:r}=this.config,i=t[e];if(i)return i.licenseUrl;if(e===Ct.WIDEVINE&&r)return r;throw new Error(`no license server URL configured for key-system "${e}"`)}getServerCertificateUrl(e){const{drmSystems:t}=this.config,r=t[e];if(r)return r.serverCertificateUrl;this.log(`No Server Certificate in config.drmSystems["${e}"]`)}attemptKeySystemAccess(e){const t=this.hls.levels,r=(s,a,l)=>!!s&&l.indexOf(s)===a,i=t.map(s=>s.audioCodec).filter(r),o=t.map(s=>s.videoCodec).filter(r);return i.length+o.length===0&&o.push("avc1.42e01e"),new Promise((s,a)=>{const l=c=>{const d=c.shift();this.getMediaKeysPromise(d,i,o).then(u=>s({keySystem:d,mediaKeys:u})).catch(u=>{c.length?l(c):u instanceof _n?a(u):a(new _n({type:Ze.KEY_SYSTEM_ERROR,details:be.KEY_SYSTEM_NO_ACCESS,error:u,fatal:!0},u.message))})};l(e)})}requestMediaKeySystemAccess(e,t){const{requestMediaKeySystemAccessFunc:r}=this.config;if(typeof r!="function"){let i=`Configured requestMediaKeySystemAccess is not a function ${r}`;return Sy===null&&self.location.protocol==="http:"&&(i=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),Promise.reject(new Error(i))}return r(e,t)}getMediaKeysPromise(e,t,r){const i=K_(e,t,r,this.config.drmSystemOptions),o=this.keySystemAccessPromises[e];let s=o==null?void 0:o.keySystemAccess;if(!s){this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`),s=this.requestMediaKeySystemAccess(e,i);const a=this.keySystemAccessPromises[e]={keySystemAccess:s};return s.catch(l=>{this.log(`Failed to obtain access to key-system "${e}": ${l}`)}),s.then(l=>{this.log(`Access for key-system "${l.keySystem}" obtained`);const c=this.fetchServerCertificate(e);return this.log(`Create media-keys for "${e}"`),a.mediaKeys=l.createMediaKeys().then(d=>(this.log(`Media-keys created for "${e}"`),c.then(u=>u?this.setMediaKeysServerCertificate(d,e,u):d))),a.mediaKeys.catch(d=>{this.error(`Failed to create media-keys for "${e}"}: ${d}`)}),a.mediaKeys})}return s.then(()=>o.mediaKeys)}createMediaKeySessionContext({decryptdata:e,keySystem:t,mediaKeys:r}){this.log(`Creating key-system session "${t}" keyId: ${nr.hexDump(e.keyId||[])}`);const i=r.createSession(),o={decryptdata:e,keySystem:t,mediaKeys:r,mediaKeysSession:i,keyStatus:"status-pending"};return this.mediaKeySessions.push(o),o}renewKeySession(e){const t=e.decryptdata;if(t.pssh){const r=this.createMediaKeySessionContext(e),i=this.getKeyIdString(t),o="cenc";this.keyIdToKeySessionPromise[i]=this.generateRequestWithPreferredKeySession(r,o,t.pssh,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(e)}getKeyIdString(e){if(!e)throw new Error("Could not read keyId of undefined decryptdata");if(e.keyId===null)throw new Error("keyId is null");return nr.hexDump(e.keyId)}updateKeySession(e,t){var r;const i=e.mediaKeysSession;return this.log(`Updating key-session "${i.sessionId}" for keyID ${nr.hexDump(((r=e.decryptdata)==null?void 0:r.keyId)||[])}

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,e){(function(t){n.exports=t()})(function(){return function t(r,i,o){function s(c,d){if(!i[c]){if(!r[c]){var u=typeof Wa=="function"&&Wa;if(!d&&u)return u(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var h=i[c]={exports:{}};r[c][0].call(h.exports,function(p){var m=r[c][1][p];return s(m||p)},h,h.exports,t,r,i,o)}return i[c].exports}for(var a=typeof Wa=="function"&&Wa,l=0;l<o.length;l++)s(o[l]);return s}({1:[function(t,r,i){var o=t("./utils"),s=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var c,d,u,f,h,p,m,g=[],y=0,E=l.length,S=E,C=o.getTypeOf(l)!=="string";y<l.length;)S=E-y,u=C?(c=l[y++],d=y<E?l[y++]:0,y<E?l[y++]:0):(c=l.charCodeAt(y++),d=y<E?l.charCodeAt(y++):0,y<E?l.charCodeAt(y++):0),f=c>>2,h=(3&c)<<4|d>>4,p=1<S?(15&d)<<2|u>>6:64,m=2<S?63&u:64,g.push(a.charAt(f)+a.charAt(h)+a.charAt(p)+a.charAt(m));return g.join("")},i.decode=function(l){var c,d,u,f,h,p,m=0,g=0,y="data:";if(l.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");var E,S=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&S--,l.charAt(l.length-2)===a.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(E=s.uint8array?new Uint8Array(0|S):new Array(0|S);m<l.length;)c=a.indexOf(l.charAt(m++))<<2|(f=a.indexOf(l.charAt(m++)))>>4,d=(15&f)<<4|(h=a.indexOf(l.charAt(m++)))>>2,u=(3&h)<<6|(p=a.indexOf(l.charAt(m++))),E[g++]=c,h!==64&&(E[g++]=d),p!==64&&(E[g++]=u);return E}},{"./support":30,"./utils":32}],2:[function(t,r,i){var o=t("./external"),s=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function c(d,u,f,h,p){this.compressedSize=d,this.uncompressedSize=u,this.crc32=f,this.compression=h,this.compressedContent=p}c.prototype={getContentWorker:function(){var d=new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),u=this;return d.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,u,f){return d.pipe(new a).pipe(new l("uncompressedSize")).pipe(u.compressWorker(f)).pipe(new l("compressedSize")).withStreamInfo("compression",u)},r.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,r,i){var o=t("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},i.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,r,i){var o=t("./utils"),s=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?o.getTypeOf(a)!=="string"?function(c,d,u,f){var h=s,p=f+u;c^=-1;for(var m=f;m<p;m++)c=c>>>8^h[255&(c^d[m])];return-1^c}(0|l,a,a.length,0):function(c,d,u,f){var h=s,p=f+u;c^=-1;for(var m=f;m<p;m++)c=c>>>8^h[255&(c^d.charCodeAt(m))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(t,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(t,r,i){var o=null;o=typeof Promise<"u"?Promise:t("lie"),r.exports={Promise:o}},{lie:37}],7:[function(t,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=t("pako"),a=t("./utils"),l=t("./stream/GenericWorker"),c=o?"uint8array":"array";function d(u,f){l.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=f,this.meta={}}i.magic="\b\0",a.inherits(d,l),d.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,u.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(f){u.push({data:f,meta:u.meta})}},i.compressWorker=function(u){return new d("Deflate",u)},i.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,r,i){function o(h,p){var m,g="";for(m=0;m<p;m++)g+=String.fromCharCode(255&h),h>>>=8;return g}function s(h,p,m,g,y,E){var S,C,k=h.file,M=h.compression,T=E!==c.utf8encode,z=a.transformTo("string",E(k.name)),F=a.transformTo("string",c.utf8encode(k.name)),O=k.comment,V=a.transformTo("string",E(O)),_=a.transformTo("string",c.utf8encode(O)),H=F.length!==k.name.length,I=_.length!==O.length,W="",ie="",Q="",ue=k.dir,J=k.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};p&&!m||(ae.crc32=h.crc32,ae.compressedSize=h.compressedSize,ae.uncompressedSize=h.uncompressedSize);var X=0;p&&(X|=8),T||!H&&!I||(X|=2048);var q=0,re=0;ue&&(q|=16),y==="UNIX"?(re=798,q|=function(Ae,Le){var Fe=Ae;return Ae||(Fe=Le?16893:33204),(65535&Fe)<<16}(k.unixPermissions,ue)):(re=20,q|=function(Ae){return 63&(Ae||0)}(k.dosPermissions)),S=J.getUTCHours(),S<<=6,S|=J.getUTCMinutes(),S<<=5,S|=J.getUTCSeconds()/2,C=J.getUTCFullYear()-1980,C<<=4,C|=J.getUTCMonth()+1,C<<=5,C|=J.getUTCDate(),H&&(ie=o(1,1)+o(d(z),4)+F,W+="up"+o(ie.length,2)+ie),I&&(Q=o(1,1)+o(d(V),4)+_,W+="uc"+o(Q.length,2)+Q);var ge="";return ge+=`