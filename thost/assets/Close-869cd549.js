import{i as y,d as k,l,e as a,p as w,n as x}from"./light-185f79ed.js";import{t as R,N as L}from"./Icon-13ca7aa7.js";import{v as f,O as $,J as i,b3 as B}from"./runtime-core.esm-bundler-c066f4bf.js";function ce(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function ue(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function fe(e,o){const r=e.trim().split(/\s+/g),n={top:r[0]};switch(r.length){case 1:n.right=r[0],n.bottom=r[0],n.left=r[0];break;case 2:n.right=r[1],n.left=r[1],n.bottom=r[0];break;case 3:n.right=r[1],n.bottom=r[2],n.left=r[1];break;case 4:n.right=r[1],n.bottom=r[2],n.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return o===void 0?n:n[o]}function de(e,o){const[r,n]=e.split(" ");return o?o==="row"?r:n:{row:r,col:n||r}}function M(e,o,r){var n=-1,t=e.length;o<0&&(o=-o>t?0:t+o),r=r>t?t:r,r<0&&(r+=t),t=o>r?0:r-o>>>0,o>>>=0;for(var s=Array(t);++n<t;)s[n]=e[n+o];return s}function S(e,o,r){var n=e.length;return r=r===void 0?n:r,!o&&r>=n?e:M(e,o,r)}var z="\\ud800-\\udfff",A="\\u0300-\\u036f",N="\\ufe20-\\ufe2f",T="\\u20d0-\\u20ff",j=A+N+T,P="\\ufe0e\\ufe0f",F="\\u200d",I=RegExp("["+F+z+j+P+"]");function d(e){return I.test(e)}function O(e){return e.split("")}var b="\\ud800-\\udfff",E="\\u0300-\\u036f",J="\\ufe20-\\ufe2f",U="\\u20d0-\\u20ff",W=E+J+U,G="\\ufe0e\\ufe0f",H="["+b+"]",c="["+W+"]",u="\\ud83c[\\udffb-\\udfff]",V="(?:"+c+"|"+u+")",g="[^"+b+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",Z="\\u200d",h=V+"?",m="["+G+"]?",q="(?:"+Z+"(?:"+[g,p,v].join("|")+")"+m+h+")*",_=m+h+q,D="(?:"+[g+c+"?",c,p,v,H].join("|")+")",K=RegExp(u+"(?="+u+")|"+D+_,"g");function X(e){return e.match(K)||[]}function Y(e){return d(e)?X(e):O(e)}function Q(e){return function(o){o=R(o);var r=d(o)?Y(o):void 0,n=r?r[0]:o.charAt(0),t=r?S(r,1).join(""):o.slice(1);return n[e]()+t}}var ee=Q("toUpperCase");const re=ee;function oe(e,o){return f({name:re(e),setup(){var r;const n=(r=$(y,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var t;const s=(t=n?.value)===null||t===void 0?void 0:t[e];return s?s():o}}})}const ne=oe("close",i("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{fill:"currentColor","fill-rule":"nonzero"},i("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),te=k("base-close",`
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
`,[l("absolute",`
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
 `),w("disabled",[a("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),a("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),a("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),l("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),l("round",[a("&::before",`
 border-radius: 50%;
 `)])]),be=f({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return x("-base-close",te,B(e,"clsPrefix")),()=>{const{clsPrefix:o,disabled:r,absolute:n,round:t,isButtonTag:s}=e;return i(s?"button":"div",{type:s?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:s?void 0:"button",disabled:r,class:[`${o}-base-close`,n&&`${o}-base-close--absolute`,r&&`${o}-base-close--disabled`,t&&`${o}-base-close--round`],onMousedown:C=>{e.focusable||C.preventDefault()},onClick:e.onClick},i(L,{clsPrefix:o},{default:()=>i(ne,null)}))}}});export{be as N,de as a,ce as d,fe as g,ue as p,oe as r};
