import{H as c,M as f}from"./light-061b806c.js";import{i as p,t as m}from"./Icon-9bae1ecc.js";let s=[];const h=new WeakMap;function l(){s.forEach(r=>r(...h.get(r))),s=[]}function _(r,...n){h.set(r,n),!s.includes(r)&&s.push(r)===1&&requestAnimationFrame(l)}var d=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,y=/^\w*$/;function g(r,n){if(c(r))return!1;var e=typeof r;return e=="number"||e=="symbol"||e=="boolean"||r==null||p(r)?!0:y.test(r)||!d.test(r)||n!=null&&r in Object(n)}var C="Expected a function";function o(r,n){if(typeof r!="function"||n!=null&&typeof n!="function")throw new TypeError(C);var e=function(){var t=arguments,i=n?n.apply(this,t):t[0],a=e.cache;if(a.has(i))return a.get(i);var u=r.apply(this,t);return e.cache=a.set(i,u)||a,u};return e.cache=new(o.Cache||f),e}o.Cache=f;var E=500;function I(r){var n=o(r,function(t){return e.size===E&&e.clear(),t}),e=n.cache;return n}var M=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,P=/\\(\\)?/g,w=I(function(r){var n=[];return r.charCodeAt(0)===46&&n.push(""),r.replace(M,function(e,t,i,a){n.push(i?a.replace(P,"$1"):t||e)}),n});const T=w;function N(r,n){return c(r)?r:g(r,n)?[r]:T(m(r))}var O=1/0;function x(r){if(typeof r=="string"||p(r))return r;var n=r+"";return n=="0"&&1/r==-O?"-0":n}function z(r,n){n=N(n,r);for(var e=0,t=n.length;r!=null&&e<t;)r=r[x(n[e++])];return e&&e==t?r:void 0}function $(r,n,e){var t=r==null?void 0:z(r,n);return t===void 0?e:t}export{z as a,_ as b,N as c,$ as g,g as i,x as t};
