import{x as L,a as C,b as i,h as a,j as y,s as z}from"./light-cb8e5d18.js";import{t as B,N as $}from"./Icon-0741e3aa.js";import{w as d,R as j,N as l,b8 as N}from"./index-6b27469d.js";function E(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function P(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function R(e,r){const o=e.trim().split(/\s+/g),n={top:o[0]};switch(o.length){case 1:n.right=o[0],n.bottom=o[0],n.left=o[0];break;case 2:n.right=o[1],n.left=o[1],n.bottom=o[0];break;case 3:n.right=o[1],n.bottom=o[2],n.left=o[1];break;case 4:n.right=o[1],n.bottom=o[2],n.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return r===void 0?n:n[r]}function M(e,r){const[o,n]=e.split(" ");return r?r==="row"?o:n:{row:o,col:n||o}}function A(e,r,o){var n=-1,t=e.length;r<0&&(r=-r>t?0:t+r),o=o>t?t:o,o<0&&(o+=t),t=r>o?0:o-r>>>0,r>>>=0;for(var s=Array(t);++n<t;)s[n]=e[n+r];return s}function T(e,r,o){var n=e.length;return o=o===void 0?n:o,!r&&o>=n?e:A(e,r,o)}var W="\\ud800-\\udfff",q="\\u0300-\\u036f",D="\\ufe20-\\ufe2f",F="\\u20d0-\\u20ff",I=q+D+F,S="\\ufe0e\\ufe0f",U="\\u200d",X=RegExp("["+U+W+I+S+"]");function f(e){return X.test(e)}function Y(e){return e.split("")}var b="\\ud800-\\udfff",Z="\\u0300-\\u036f",G="\\ufe20-\\ufe2f",H="\\u20d0-\\u20ff",J=Z+G+H,K="\\ufe0e\\ufe0f",O="["+b+"]",u="["+J+"]",c="\\ud83c[\\udffb-\\udfff]",Q="(?:"+u+"|"+c+")",v="[^"+b+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",V="\\u200d",h=Q+"?",m="["+K+"]?",_="(?:"+V+"(?:"+[v,p,g].join("|")+")"+m+h+")*",ee=m+h+_,oe="(?:"+[v+u+"?",u,p,g,O].join("|")+")",re=RegExp(c+"(?="+c+")|"+oe+ee,"g");function ne(e){return e.match(re)||[]}function te(e){return f(e)?ne(e):Y(e)}function se(e){return function(r){r=B(r);var o=f(r)?te(r):void 0,n=o?o[0]:r.charAt(0),t=o?T(o,1).join(""):r.slice(1);return n[e]()+t}}var ae=se("toUpperCase");const le=ae;function w(e,r){return d({name:le(e),setup(){var o;const n=(o=j(L,null))===null||o===void 0?void 0:o.mergedIconsRef;return()=>{var t;const s=(t=n==null?void 0:n.value)===null||t===void 0?void 0:t[e];return s?s():r}}})}const x=w("close",l("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},l("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},l("g",{fill:"currentColor","fill-rule":"nonzero"},l("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),ie=C("base-close",`
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
`,[i("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),a("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),y("disabled",[a("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),a("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),a("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),i("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),i("round",[a("&::before",`
 border-radius: 50%;
 `)])]),ue=d({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return z("-base-close",ie,N(e,"clsPrefix")),()=>{const{clsPrefix:r,disabled:o,absolute:n,round:t,isButtonTag:s}=e;return l(s?"button":"div",{type:s?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:s?void 0:"button",disabled:o,class:[`${r}-base-close`,n&&`${r}-base-close--absolute`,o&&`${r}-base-close--disabled`,t&&`${r}-base-close--round`],onMousedown:k=>{e.focusable||k.preventDefault()},onClick:e.onClick},l($,{clsPrefix:r},{default:()=>l(x,null)}))}}});export{x as E,ue as N,M as a,E as d,R as g,P as p,w as r};
