import{d as qe}from"./Button-cc4d8cf9.js";import{h as me,d as pe,c as Qe,a as et,f as U,e as k,l as tt,u as J,j as ot}from"./light-061b806c.js";import{T as V,m as rt}from"./runtime-dom.esm-bundler-4c01a608.js";import{J as r,v as $,b3 as we,aZ as R,az as nt,_ as xe,O as be,i as it,aG as se,F as le,bc as at,G as st,aa as Ce,a2 as ue,aA as ce}from"./runtime-core.esm-bundler-42be6625.js";import{f as de,o as H,a as Y,c as lt}from"./Scrollbar-56892bdd.js";import{f as ut,L as ct,z as dt}from"./fade-in-scale-up.cssr-e8e5290f.js";import{t as ft,N as ht}from"./Tooltip-455ae320.js";import{u as vt}from"./use-locale-a958ab8c.js";import{i as gt}from"./FadeInExpandTransition-8360c680.js";import{t as Se,N as y}from"./Icon-9bae1ecc.js";import{r as Z}from"./Close-7ee9b945.js";import{b as mt}from"./get-bc00c446.js";function pt(e,l,n,c){var s=-1,f=e==null?0:e.length;for(c&&f&&(n=e[++s]);++s<f;)n=l(n,e[s],s,e);return n}function wt(e){return function(l){return e==null?void 0:e[l]}}var xt={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},bt=wt(xt);const Ct=bt;var St=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ot="\\u0300-\\u036f",Rt="\\ufe20-\\ufe2f",It="\\u20d0-\\u20ff",Lt=Ot+Rt+It,Mt="["+Lt+"]",Pt=RegExp(Mt,"g");function kt(e){return e=Se(e),e&&e.replace(St,Ct).replace(Pt,"")}var yt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function zt(e){return e.match(yt)||[]}var Tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function At(e){return Tt.test(e)}var Oe="\\ud800-\\udfff",Et="\\u0300-\\u036f",Ht="\\ufe20-\\ufe2f",Dt="\\u20d0-\\u20ff",$t=Et+Ht+Dt,Re="\\u2700-\\u27bf",Ie="a-z\\xdf-\\xf6\\xf8-\\xff",Zt="\\xac\\xb1\\xd7\\xf7",jt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Nt="\\u2000-\\u206f",_t=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Le="A-Z\\xc0-\\xd6\\xd8-\\xde",Bt="\\ufe0e\\ufe0f",Me=Zt+jt+Nt+_t,Pe="['’]",fe="["+Me+"]",Wt="["+$t+"]",ke="\\d+",Ut="["+Re+"]",ye="["+Ie+"]",ze="[^"+Oe+Me+ke+Re+Ie+Le+"]",Vt="\\ud83c[\\udffb-\\udfff]",Yt="(?:"+Wt+"|"+Vt+")",Xt="[^"+Oe+"]",Te="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",E="["+Le+"]",Gt="\\u200d",he="(?:"+ye+"|"+ze+")",Ft="(?:"+E+"|"+ze+")",ve="(?:"+Pe+"(?:d|ll|m|re|s|t|ve))?",ge="(?:"+Pe+"(?:D|LL|M|RE|S|T|VE))?",Ee=Yt+"?",He="["+Bt+"]?",Jt="(?:"+Gt+"(?:"+[Xt,Te,Ae].join("|")+")"+He+Ee+")*",Kt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",qt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Qt=He+Ee+Jt,eo="(?:"+[Ut,Te,Ae].join("|")+")"+Qt,to=RegExp([E+"?"+ye+"+"+ve+"(?="+[fe,E,"$"].join("|")+")",Ft+"+"+ge+"(?="+[fe,E+he,"$"].join("|")+")",E+"?"+he+"+"+ve,E+"+"+ge,qt,Kt,ke,eo].join("|"),"g");function oo(e){return e.match(to)||[]}function ro(e,l,n){return e=Se(e),l=n?void 0:l,l===void 0?At(e)?oo(e):zt(e):e.match(l)||[]}var no="['’]",io=RegExp(no,"g");function ao(e){return function(l){return pt(ro(kt(l).replace(io,"")),e,"")}}var so=ao(function(e,l,n){return e+(n?"-":"")+l.toLowerCase()});const lo=so,uo=Z("rotateClockwise",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),r("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),co=Z("rotateClockwise",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),r("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),fo=Z("zoomIn",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),r("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),ho=Z("zoomOut",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),r("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),vo=$({name:"ResizeSmall",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r("g",{fill:"none"},r("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),go=qe&&"loading"in document.createElement("img"),mo=(e={})=>{var l;const{root:n=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(l=e.threshold)!==null&&l!==void 0?l:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof n=="string"?document.querySelector(n):n)||document.documentElement})}},X=new WeakMap,G=new WeakMap,F=new WeakMap,po=(e,l,n)=>{if(!e)return()=>{};const c=mo(l),{root:s}=c.options;let f;const p=X.get(s);p?f=p:(f=new Map,X.set(s,f));let g,d;f.has(c.hash)?(d=f.get(c.hash),d[1].has(e)||(g=d[0],d[1].add(e),g.observe(e))):(g=new IntersectionObserver(m=>{m.forEach(M=>{if(M.isIntersecting){const I=G.get(M.target),L=F.get(M.target);I&&I(),L&&(L.value=!0)}})},c.options),g.observe(e),d=[g,new Set([e])],f.set(c.hash,d));let i=!1;const u=()=>{i||(G.delete(e),F.delete(e),i=!0,d[1].has(e)&&(d[0].unobserve(e),d[1].delete(e)),d[1].size<=0&&f.delete(c.hash),f.size||X.delete(s))};return G.set(e,u),F.set(e,n),u},K=Object.assign(Object.assign({},me.props),{showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),De=pe("n-image");function wo(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const xo=Qe({name:"Image",common:et,peers:{Tooltip:ft},self:wo}),bo=r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),Co=r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),So=r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),Oo=U([U("body >",[k("image-container","position: fixed;")]),k("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),k("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[de()]),k("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[k("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),de()]),k("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[ut()]),k("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),k("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[tt("preview-disabled",`
 cursor: pointer;
 `),U("img",`
 border-radius: inherit;
 `)])]),D=32,$e=$({name:"ImagePreview",props:Object.assign(Object.assign({},K),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const l=me("Image","-image",Oo,xo,e,we(e,"clsPrefix"));let n=null;const c=R(null),s=R(null),f=R(void 0),p=R(!1),g=R(!1),{localeRef:d}=vt("Image");function i(){const{value:t}=s;if(!n||!t)return;const{style:a}=t,o=n.getBoundingClientRect(),h=o.left+o.width/2,v=o.top+o.height/2;a.transformOrigin=`${h}px ${v}px`}function u(t){var a,o;switch(t.key){case" ":t.preventDefault();break;case"ArrowLeft":(a=e.onPrev)===null||a===void 0||a.call(e);break;case"ArrowRight":(o=e.onNext)===null||o===void 0||o.call(e);break;case"Escape":ne();break}}nt(p,t=>{t?Y("keydown",document,u):H("keydown",document,u)}),xe(()=>{H("keydown",document,u)});let m=0,M=0,I=0,L=0,j=0,N=0,q=0,Q=0,_=!1;function ee(t){const{clientX:a,clientY:o}=t;I=a-m,L=o-M,mt(S)}function je(t){const{mouseUpClientX:a,mouseUpClientY:o,mouseDownClientX:h,mouseDownClientY:v}=t,b=h-a,C=v-o,O=`vertical${C>0?"Top":"Bottom"}`,P=`horizontal${b>0?"Left":"Right"}`;return{moveVerticalDirection:O,moveHorizontalDirection:P,deltaHorizontal:b,deltaVertical:C}}function te(t){const{value:a}=c;if(!a)return{offsetX:0,offsetY:0};const o=a.getBoundingClientRect(),{moveVerticalDirection:h,moveHorizontalDirection:v,deltaHorizontal:b,deltaVertical:C}=t||{};let O=0,P=0;return o.width<=window.innerWidth?O=0:o.left>0?O=(o.width-window.innerWidth)/2:o.right<window.innerWidth?O=-(o.width-window.innerWidth)/2:v==="horizontalRight"?O=Math.min((o.width-window.innerWidth)/2,j-(b??0)):O=Math.max(-((o.width-window.innerWidth)/2),j-(b??0)),o.height<=window.innerHeight?P=0:o.top>0?P=(o.height-window.innerHeight)/2:o.bottom<window.innerHeight?P=-(o.height-window.innerHeight)/2:h==="verticalBottom"?P=Math.min((o.height-window.innerHeight)/2,N-(C??0)):P=Math.max(-((o.height-window.innerHeight)/2),N-(C??0)),{offsetX:O,offsetY:P}}function oe(t){H("mousemove",document,ee),H("mouseup",document,oe);const{clientX:a,clientY:o}=t;_=!1;const h=je({mouseUpClientX:a,mouseUpClientY:o,mouseDownClientX:q,mouseDownClientY:Q}),v=te(h);I=v.offsetX,L=v.offsetY,S()}const w=be(De,null);function Ne(t){var a,o;if((o=(a=w==null?void 0:w.previewedImgPropsRef.value)===null||a===void 0?void 0:a.onMousedown)===null||o===void 0||o.call(a,t),t.button!==0)return;const{clientX:h,clientY:v}=t;_=!0,m=h-I,M=v-L,j=I,N=L,q=h,Q=v,S(),Y("mousemove",document,ee),Y("mouseup",document,oe)}function _e(t){var a,o;(o=(a=w==null?void 0:w.previewedImgPropsRef.value)===null||a===void 0?void 0:a.onDblclick)===null||o===void 0||o.call(a,t);const h=re();x=x===h?1:h,S()}const B=1.5;let z=0,x=1,T=0;function W(){x=1,z=0}function Be(){var t;W(),T=0,(t=e.onPrev)===null||t===void 0||t.call(e)}function We(){var t;W(),T=0,(t=e.onNext)===null||t===void 0||t.call(e)}function Ue(){T-=90,S()}function Ve(){T+=90,S()}function Ye(){const{value:t}=c;if(!t)return 1;const{innerWidth:a,innerHeight:o}=window,h=Math.max(1,t.naturalHeight/(o-D)),v=Math.max(1,t.naturalWidth/(a-D));return Math.max(3,h*2,v*2)}function re(){const{value:t}=c;if(!t)return 1;const{innerWidth:a,innerHeight:o}=window,h=t.naturalHeight/(o-D),v=t.naturalWidth/(a-D);return h<1&&v<1?1:Math.max(h,v)}function Xe(){const t=Ye();x<t&&(z+=1,x=Math.min(t,Math.pow(B,z)),S())}function Ge(){if(x>.5){const t=x;z-=1,x=Math.max(.5,Math.pow(B,z));const a=t-x;S(!1);const o=te();x+=a,S(!1),x-=a,I=o.offsetX,L=o.offsetY,S()}}function S(t=!0){var a;const{value:o}=c;if(!o)return;const{style:h}=o,v=at((a=w==null?void 0:w.previewedImgPropsRef.value)===null||a===void 0?void 0:a.style);let b="";if(typeof v=="string")b=v+";";else for(const O in v)b+=`${lo(O)}: ${v[O]};`;const C=`transform-origin: center; transform: translateX(${I}px) translateY(${L}px) rotate(${T}deg) scale(${x});`;_?h.cssText=b+"cursor: grabbing; transition: none;"+C:h.cssText=b+"cursor: grab;"+C+(t?"":"transition: none;"),t||o.offsetHeight}function ne(){p.value=!p.value,g.value=!0}function Fe(){x=re(),z=Math.ceil(Math.log(x)/Math.log(B)),I=0,L=0,S()}const Je={setPreviewSrc:t=>{f.value=t},setThumbnailEl:t=>{n=t},toggleShow:ne};function Ke(t,a){if(e.showToolbarTooltip){const{value:o}=l;return r(ht,{to:!1,theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>d.value[a],trigger:()=>t})}else return t}const ie=it(()=>{const{common:{cubicBezierEaseInOut:t},self:{toolbarIconColor:a,toolbarBorderRadius:o,toolbarBoxShadow:h,toolbarColor:v}}=l.value;return{"--n-bezier":t,"--n-toolbar-icon-color":a,"--n-toolbar-color":v,"--n-toolbar-border-radius":o,"--n-toolbar-box-shadow":h}}),{inlineThemeDisabled:ae}=J(),A=ae?ot("image-preview",void 0,ie,e):void 0;return Object.assign({previewRef:c,previewWrapperRef:s,previewSrc:f,show:p,appear:gt(),displayed:g,previewedImgProps:w==null?void 0:w.previewedImgPropsRef,handleWheel(t){t.preventDefault()},handlePreviewMousedown:Ne,handlePreviewDblclick:_e,syncTransformOrigin:i,handleAfterLeave:()=>{W(),T=0,g.value=!1},handleDragStart:t=>{var a,o;(o=(a=w==null?void 0:w.previewedImgPropsRef.value)===null||a===void 0?void 0:a.onDragstart)===null||o===void 0||o.call(a,t),t.preventDefault()},zoomIn:Xe,zoomOut:Ge,rotateCounterclockwise:Ue,rotateClockwise:Ve,handleSwitchPrev:Be,handleSwitchNext:We,withTooltip:Ke,resizeToOrignalImageSize:Fe,cssVars:ae?void 0:ie,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},Je)},render(){var e,l;const{clsPrefix:n}=this;return r(le,null,(l=(e=this.$slots).default)===null||l===void 0?void 0:l.call(e),r(ct,{show:this.show},{default:()=>{var c;return this.show||this.displayed?((c=this.onRender)===null||c===void 0||c.call(this),se(r("div",{class:[`${n}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},r(V,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?r("div",{class:`${n}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?r(V,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:s}=this;return r("div",{class:`${n}-image-preview-toolbar`},this.onPrev?r(le,null,s(r(y,{clsPrefix:n,onClick:this.handleSwitchPrev},{default:()=>bo}),"tipPrevious"),s(r(y,{clsPrefix:n,onClick:this.handleSwitchNext},{default:()=>Co}),"tipNext")):null,s(r(y,{clsPrefix:n,onClick:this.rotateCounterclockwise},{default:()=>r(co,null)}),"tipCounterclockwise"),s(r(y,{clsPrefix:n,onClick:this.rotateClockwise},{default:()=>r(uo,null)}),"tipClockwise"),s(r(y,{clsPrefix:n,onClick:this.resizeToOrignalImageSize},{default:()=>r(vo,null)}),"tipOriginalSize"),s(r(y,{clsPrefix:n,onClick:this.zoomOut},{default:()=>r(ho,null)}),"tipZoomOut"),s(r(y,{clsPrefix:n,onClick:this.zoomIn},{default:()=>r(fo,null)}),"tipZoomIn"),s(r(y,{clsPrefix:n,onClick:this.toggleShow},{default:()=>So}),"tipClose"))}}):null,r(V,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:s={}}=this;return se(r("div",{class:`${n}-image-preview-wrapper`,ref:"previewWrapperRef"},r("img",Object.assign({},s,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${n}-image-preview`,s.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[rt,this.show]])}})),[[dt,{enabled:this.show}]])):null}}))}}),Ze=pe("n-image-group"),Ro=K,Zo=$({name:"ImageGroup",props:Ro,setup(e){let l;const{mergedClsPrefixRef:n}=J(e),c=`c${lt()}`,s=st(),f=d=>{var i;l=d,(i=g.value)===null||i===void 0||i.setPreviewSrc(d)};function p(d){if(!(s!=null&&s.proxy))return;const u=s.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${c}]:not([data-error=true])`);if(!u.length)return;const m=Array.from(u).findIndex(M=>M.dataset.previewSrc===l);~m?f(u[(m+d+u.length)%u.length].dataset.previewSrc):f(u[0].dataset.previewSrc)}Ce(Ze,{mergedClsPrefixRef:n,setPreviewSrc:f,setThumbnailEl:d=>{var i;(i=g.value)===null||i===void 0||i.setThumbnailEl(d)},toggleShow:()=>{var d;(d=g.value)===null||d===void 0||d.toggleShow()},groupId:c});const g=R(null);return{mergedClsPrefix:n,previewInstRef:g,next:()=>{p(1)},prev:()=>{p(-1)}}},render(){return r($e,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:this.mergedClsPrefix,ref:"previewInstRef",onPrev:this.prev,onNext:this.next,showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},this.$slots)}}),Io=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},K),jo=$({name:"Image",props:Io,inheritAttrs:!1,setup(e){const l=R(null),n=R(!1),c=R(null),s=be(Ze,null),{mergedClsPrefixRef:f}=s||J(e),p={click:()=>{if(e.previewDisabled||n.value)return;const i=e.previewSrc||e.src;if(s){s.setPreviewSrc(i),s.setThumbnailEl(l.value),s.toggleShow();return}const{value:u}=c;u&&(u.setPreviewSrc(i),u.setThumbnailEl(l.value),u.toggleShow())}},g=R(!e.lazy);ue(()=>{var i;(i=l.value)===null||i===void 0||i.setAttribute("data-group-id",(s==null?void 0:s.groupId)||"")}),ue(()=>{if(e.lazy&&e.intersectionObserverOptions){let i;const u=ce(()=>{i==null||i(),i=void 0,i=po(l.value,e.intersectionObserverOptions,g)});xe(()=>{u(),i==null||i()})}}),ce(()=>{var i;e.src,(i=e.imgProps)===null||i===void 0||i.src,n.value=!1});const d=R(!1);return Ce(De,{previewedImgPropsRef:we(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:f,groupId:s==null?void 0:s.groupId,previewInstRef:c,imageRef:l,showError:n,shouldStartLoading:g,loaded:d,mergedOnClick:i=>{var u,m;p.click(),(m=(u=e.imgProps)===null||u===void 0?void 0:u.onClick)===null||m===void 0||m.call(u,i)},mergedOnError:i=>{if(!g.value)return;n.value=!0;const{onError:u,imgProps:{onError:m}={}}=e;u==null||u(i),m==null||m(i)},mergedOnLoad:i=>{const{onLoad:u,imgProps:{onLoad:m}={}}=e;u==null||u(i),m==null||m(i),d.value=!0}},p)},render(){var e,l;const{mergedClsPrefix:n,imgProps:c={},loaded:s,$attrs:f,lazy:p}=this,g=(l=(e=this.$slots).placeholder)===null||l===void 0?void 0:l.call(e),d=this.src||c.src,i=r("img",Object.assign(Object.assign({},c),{ref:"imageRef",width:this.width||c.width,height:this.height||c.height,src:this.showError?this.fallbackSrc:p&&this.intersectionObserverOptions?this.shouldStartLoading?d:void 0:d,alt:this.alt||c.alt,"aria-label":this.alt||c.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:go&&p&&!this.intersectionObserverOptions?"lazy":"eager",style:[c.style||"",g&&!s?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return r("div",Object.assign({},f,{role:"none",class:[f.class,`${n}-image`,(this.previewDisabled||this.showError)&&`${n}-image--preview-disabled`]}),this.groupId?i:r($e,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:n,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>i}),!s&&g)}});export{jo as N,Zo as a};
