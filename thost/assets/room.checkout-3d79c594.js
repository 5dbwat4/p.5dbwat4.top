import{A as x}from"./APIHelper-697d5a21.js";import{Z as ce}from"./zujuan-api-117f357c.js";import{aZ as v,as as le,a8 as _,l as k,t as h,b7 as d,aE as p,a2 as ue,m as R,F as U,ae as me,bc as V,s as C,j as de,ai as he,bd as fe,k as j,J as ge}from"./runtime-core.esm-bundler-42be6625.js";import{N as Q}from"./Spin-38bf3ba1.js";import{N as Y}from"./Space-26ed86db.js";import{N as O,a as pe}from"./Image-70b0c8b6.js";import{P as we,C as ye}from"./painttools-fbb3a0c2.js";import{C as be}from"./ild-3efa88fc.js";import{_ as ve}from"./_plugin-vue_export-helper-c27b6911.js";import{b as P}from"./Button-cc4d8cf9.js";import{N as Se}from"./Alert-307333c1.js";import{N as Ee}from"./Modal-514a3e16.js";import"./light-061b806c.js";import"./format-length-c9d165c6.js";import"./Icon-9bae1ecc.js";import"./Warning-342b5d14.js";import"./Close-7ee9b945.js";import"./Scrollbar-56892bdd.js";import"./runtime-dom.esm-bundler-4c01a608.js";import"./keysOf-5d5107c5.js";import"./use-compitable-85535777.js";import"./flatten-7ea74e97.js";import"./get-slot-1efb97e5.js";import"./fade-in-scale-up.cssr-e8e5290f.js";import"./Tooltip-455ae320.js";import"./Popover-4b12eb1a.js";import"./get-bc00c446.js";import"./use-memo-8d560c6d.js";import"./utils-13313164.js";import"./FadeInExpandTransition-8360c680.js";import"./resolve-slot-612957d7.js";import"./use-merged-state-cb002afc.js";import"./call-7e0089d6.js";import"./use-locale-a958ab8c.js";import"./index-975a2d8f.js";import"./Divider-0de4fb74.js";import"./Ellipsis-8153a355.js";import"./diffs-b381e85b.js";import"./text-b92bd4c7.js";import"./light-1325cd86.js";import"./fade-in-height-expand.cssr-75987c6f.js";import"./Card-6456efb4.js";import"./index-cbfaa337.js";const Ce={key:0},_e={key:1},xe={__name:"room.answerImgHelper",setup(e){const t=v(!0),n=v(""),r=v("");t.value=!0;const{id:o,width:a}=le();return ce(`/app-server/v1/ques/detail/${window.bankid}/${o}?browserWidth=${a}`).then(i=>{n.value=x.host+"/api/xkw-helper/route-pic?purl="+btoa(i.data.answerImg.replace("@2","@3")),r.value=x.host+"/api/xkw-helper/route-pic?purl="+btoa(i.data.parseImg.replace("@2","@3")),t.value=!1}),(i,s)=>t.value?(_(),k("div",Ce,[h(d(Q))])):(_(),k("div",_e,[h(d(pe),null,{default:p(()=>[h(d(Y),null,{default:p(()=>[h(d(O),{width:d(a),src:n.value},null,8,["width","src"]),h(d(O),{width:d(a),src:r.value},null,8,["width","src"])]),_:1})]),_:1})]))}};function ke(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}const Ie=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function E(e){const t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}function D(e,t){const r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function Re(e){const t=D(e,"border-left-width"),n=D(e,"border-right-width");return e.clientWidth+t+n}function Pe(e){const t=D(e,"border-top-width"),n=D(e,"border-bottom-width");return e.clientHeight+t+n}function N(e,t={}){const n=t.width||Re(e),r=t.height||Pe(e);return{width:n,height:r}}function $e(){let e,t;try{t=process}catch{}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const g=16384;function De(e){(e.width>g||e.height>g)&&(e.width>g&&e.height>g?e.width>e.height?(e.height*=g/e.width,e.width=g):(e.width*=g/e.height,e.height=g):e.width>g?(e.height*=g/e.width,e.width=g):(e.width*=g/e.height,e.height=g))}function T(e){return new Promise((t,n)=>{const r=new Image;r.decode=()=>t(r),r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function Te(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Be(e,t,n){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${t} ${n}`),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("externalResourcesRequired","true"),o.appendChild(a),a.appendChild(e),Te(o)}const f=(e,t)=>{if(e instanceof t)return!0;const n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||f(n,t)};function Le(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function Ae(e){return E(e).map(t=>{const n=e.getPropertyValue(t),r=e.getPropertyPriority(t);return`${t}: ${n}${r?" !important":""};`}).join(" ")}function Fe(e,t,n){const r=`.${e}:${t}`,o=n.cssText?Le(n):Ae(n);return document.createTextNode(`${r}{${o}}`)}function z(e,t,n){const r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(o===""||o==="none")return;const a=Ie();try{t.className=`${t.className} ${a}`}catch{return}const i=document.createElement("style");i.appendChild(Fe(a,n,r)),t.appendChild(i)}function Me(e,t){z(e,t,":before"),z(e,t,":after")}const W="application/font-woff",G="image/jpeg",qe={woff:W,woff2:W,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:G,jpeg:G,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function He(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function q(e){const t=He(e).toLowerCase();return qe[t]||""}function Ue(e){return e.split(/,/)[1]}function M(e){return e.search(/^(data:)/)!==-1}function ee(e,t){return`data:${t};base64,${e}`}async function te(e,t,n){const r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const o=await r.blob();return new Promise((a,i)=>{const s=new FileReader;s.onerror=i,s.onloadend=()=>{try{a(n({res:r,result:s.result}))}catch(l){i(l)}},s.readAsDataURL(o)})}const F={};function Ve(e,t,n){let r=e.replace(/\?.*/,"");return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function H(e,t,n){const r=Ve(e,t,n.includeQueryParams);if(F[r]!=null)return F[r];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let o;try{const a=await te(e,n.fetchRequestInit,({res:i,result:s})=>(t||(t=i.headers.get("Content-Type")||""),Ue(s)));o=ee(a,t)}catch(a){o=n.imagePlaceholder||"";let i=`Failed to fetch resource: ${e}`;a&&(i=typeof a=="string"?a:a.message),i&&console.warn(i)}return F[r]=o,o}async function je(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):T(t)}async function Oe(e,t){if(e.currentSrc){const a=document.createElement("canvas"),i=a.getContext("2d");a.width=e.clientWidth,a.height=e.clientHeight,i==null||i.drawImage(e,0,0,a.width,a.height);const s=a.toDataURL();return T(s)}const n=e.poster,r=q(n),o=await H(n,r,t);return T(o)}async function ze(e){var t;try{if(!((t=e==null?void 0:e.contentDocument)===null||t===void 0)&&t.body)return await B(e.contentDocument.body,{},!0)}catch{}return e.cloneNode(!1)}async function We(e,t){return f(e,HTMLCanvasElement)?je(e):f(e,HTMLVideoElement)?Oe(e,t):f(e,HTMLIFrameElement)?ze(e):e.cloneNode(!1)}const Ge=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT";async function Xe(e,t,n){var r,o;let a=[];return Ge(e)&&e.assignedNodes?a=E(e.assignedNodes()):f(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?a=E(e.contentDocument.body.childNodes):a=E(((o=e.shadowRoot)!==null&&o!==void 0?o:e).childNodes),a.length===0||f(e,HTMLVideoElement)||await a.reduce((i,s)=>i.then(()=>B(s,n)).then(l=>{l&&t.appendChild(l)}),Promise.resolve()),t}function Je(e,t){const n=t.style;if(!n)return;const r=window.getComputedStyle(e);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):E(r).forEach(o=>{let a=r.getPropertyValue(o);o==="font-size"&&a.endsWith("px")&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),f(e,HTMLIFrameElement)&&o==="display"&&a==="inline"&&(a="block"),o==="d"&&t.getAttribute("d")&&(a=`path(${t.getAttribute("d")})`),n.setProperty(o,a,r.getPropertyPriority(o))})}function Ze(e,t){f(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),f(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function Ke(e,t){if(f(e,HTMLSelectElement)){const n=t,r=Array.from(n.children).find(o=>e.value===o.getAttribute("value"));r&&r.setAttribute("selected","")}}function Qe(e,t){return f(t,Element)&&(Je(e,t),Me(e,t),Ze(e,t),Ke(e,t)),t}async function Ye(e,t){const n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;const r={};for(let a=0;a<n.length;a++){const s=n[a].getAttribute("xlink:href");if(s){const l=e.querySelector(s),S=document.querySelector(s);!l&&S&&!r[s]&&(r[s]=await B(S,t,!0))}}const o=Object.values(r);if(o.length){const a="http://www.w3.org/1999/xhtml",i=document.createElementNS(a,"svg");i.setAttribute("xmlns",a),i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.overflow="hidden",i.style.display="none";const s=document.createElementNS(a,"defs");i.appendChild(s);for(let l=0;l<o.length;l++)s.appendChild(o[l]);e.appendChild(i)}return e}async function B(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>We(r,t)).then(r=>Xe(e,r,t)).then(r=>Qe(e,r)).then(r=>Ye(r,t))}const ne=/url\((['"]?)([^'"]+?)\1\)/g,Ne=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,et=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function tt(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function nt(e){const t=[];return e.replace(ne,(n,r,o)=>(t.push(o),n)),t.filter(n=>!M(n))}async function rt(e,t,n,r,o){try{const a=n?ke(t,n):t,i=q(t);let s;if(o){const l=await o(a);s=ee(l,i)}else s=await H(a,i,r);return e.replace(tt(t),`$1${s}$3`)}catch{}return e}function ot(e,{preferredFontFormat:t}){return t?e.replace(et,n=>{for(;;){const[r,,o]=Ne.exec(n)||[];if(!o)return"";if(o===t)return`src: ${r};`}}):e}function re(e){return e.search(ne)!==-1}async function oe(e,t,n){if(!re(e))return e;const r=ot(e,n);return nt(r).reduce((a,i)=>a.then(s=>rt(s,i,t,n)),Promise.resolve(r))}async function $(e,t,n){var r;const o=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(o){const a=await oe(o,null,n);return t.style.setProperty(e,a,t.style.getPropertyPriority(e)),!0}return!1}async function at(e,t){await $("background",e,t)||await $("background-image",e,t),await $("mask",e,t)||await $("mask-image",e,t)}async function st(e,t){const n=f(e,HTMLImageElement);if(!(n&&!M(e.src))&&!(f(e,SVGImageElement)&&!M(e.href.baseVal)))return;const r=n?e.src:e.href.baseVal,o=await H(r,q(r),t);await new Promise((a,i)=>{e.onload=a,e.onerror=i;const s=e;s.decode&&(s.decode=a),s.loading==="lazy"&&(s.loading="eager"),n?(e.srcset="",e.src=o):e.href.baseVal=o})}async function it(e,t){const r=E(e.childNodes).map(o=>ae(o,t));await Promise.all(r).then(()=>e)}async function ae(e,t){f(e,Element)&&(await at(e,t),await st(e,t),await it(e,t))}function ct(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return r!=null&&Object.keys(r).forEach(o=>{n[o]=r[o]}),e}const X={};async function J(e){let t=X[e];if(t!=null)return t;const r=await(await fetch(e)).text();return t={url:e,cssText:r},X[e]=t,t}async function Z(e,t){let n=e.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,a=(n.match(/url\([^)]+\)/g)||[]).map(async i=>{let s=i.replace(r,"$1");return s.startsWith("https://")||(s=new URL(s,e.url).href),te(s,t.fetchRequestInit,({result:l})=>(n=n.replace(i,`url(${l})`),[i,l]))});return Promise.all(a).then(()=>n)}function K(e){if(e==null)return[];const t=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=e.replace(n,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const l=o.exec(r);if(l===null)break;t.push(l[0])}r=r.replace(o,"");const a=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(i,"gi");for(;;){let l=a.exec(r);if(l===null){if(l=s.exec(r),l===null)break;a.lastIndex=s.lastIndex}else s.lastIndex=a.lastIndex;t.push(l[0])}return t}async function lt(e,t){const n=[],r=[];return e.forEach(o=>{if("cssRules"in o)try{E(o.cssRules||[]).forEach((a,i)=>{if(a.type===CSSRule.IMPORT_RULE){let s=i+1;const l=a.href,S=J(l).then(w=>Z(w,t)).then(w=>K(w).forEach(I=>{try{o.insertRule(I,I.startsWith("@import")?s+=1:o.cssRules.length)}catch(L){console.error("Error inserting rule from remote css",{rule:I,error:L})}})).catch(w=>{console.error("Error loading remote css",w.toString())});r.push(S)}})}catch(a){const i=e.find(s=>s.href==null)||document.styleSheets[0];o.href!=null&&r.push(J(o.href).then(s=>Z(s,t)).then(s=>K(s).forEach(l=>{i.insertRule(l,o.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",a)}}),Promise.all(r).then(()=>(e.forEach(o=>{if("cssRules"in o)try{E(o.cssRules||[]).forEach(a=>{n.push(a)})}catch(a){console.error(`Error while reading CSS rules from ${o.href}`,a)}}),n))}function ut(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>re(t.style.getPropertyValue("src")))}async function mt(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=E(e.ownerDocument.styleSheets),r=await lt(n,t);return ut(r)}async function dt(e,t){const n=await mt(e,t);return(await Promise.all(n.map(o=>{const a=o.parentStyleSheet?o.parentStyleSheet.href:null;return oe(o.cssText,a,t)}))).join(`
`)}async function ht(e,t){const n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await dt(e,t);if(n){const r=document.createElement("style"),o=document.createTextNode(n);r.appendChild(o),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function ft(e,t={}){const{width:n,height:r}=N(e,t),o=await B(e,t,!0);return await ht(o,t),await ae(o,t),ct(o,t),await Be(o,n,r)}async function gt(e,t={}){const{width:n,height:r}=N(e,t),o=await ft(e,t),a=await T(o),i=document.createElement("canvas"),s=i.getContext("2d"),l=t.pixelRatio||$e(),S=t.canvasWidth||n,w=t.canvasHeight||r;return i.width=S*l,i.height=w*l,t.skipAutoScale||De(i),i.style.width=`${S}`,i.style.height=`${w}`,t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,i.width,i.height)),s.drawImage(a,0,0,i.width,i.height),i}async function pt(e,t={}){return(await gt(e,t)).toDataURL("image/jpeg",t.quality||1)}const wt={class:"block_main"},yt=["id"],bt=["id","onPointermove","onMouseup","onMousedown"],vt={class:"hanged_container"},St={key:0},Et={key:1},Ct={__name:"room.checkout",setup(e){const t=v([]);t.value=window.useranswerPaths;const n=v([]);n.value=window.TList;const r=v([]),o=v(""),a=v(!1),i=n.value.map((c,u)=>new ResizeObserver(m=>{l.recalculateSize(u)}));let s=[];window.PaintCONFIG.color="red",ue(()=>{for(let c=0;c<n.value.length;c++)n.value[c],document.getElementById("drawableCanvas-"+c).width=document.getElementById("DrawableBlock-"+c).clientWidth*3,document.getElementById("drawableCanvas-"+c).height=document.getElementById("DrawableBlock-"+c).clientHeight*3,document.getElementById("drawableCanvas-"+c).style.height=document.getElementById("DrawableBlock-"+c).clientHeight+"px",r.value[c]=document.getElementById("DrawableBlock-"+c).clientHeight,s[c]=new we(document.getElementById("drawableCanvas-"+c)),i[c].observe(document.getElementById("DrawableBlock-"+c)),l.initPaint(c,window.useranswerPaths[c]||[])});const l={onpointermove:(c,u)=>{console.log(c),s[c].onpointermove&&s[c].onpointermove(u)},onmouseup:(c,u)=>{s[c].onmouseup&&s[c].onmouseup(u)},onmousedown:(c,u)=>{s[c].onmousedown&&s[c].onmousedown(u)},recalculateSize:c=>{document.getElementById("drawableCanvas-"+c).width=document.getElementById("DrawableBlock-"+c).clientWidth*3,document.getElementById("drawableCanvas-"+c).height=document.getElementById("DrawableBlock-"+c).clientHeight*3,r.value[c]=document.getElementById("DrawableBlock-"+c).clientHeight},clear:c=>{s[c].clear()},export:c=>s[c].export(),initPaint:(c,u)=>{s[c].paintlines=u,s[c].refreshCanvas()}},S=c=>{document.getElementById("DrawableBlock-"+(c+1)).scrollIntoView()},w=c=>{var u=document.getElementById("DrawableBlock-"+c);return u.querySelectorAll("img").forEach(m=>{m.src.includes("/formula/")&&(m.src=m.src.replace("https://staticzujuan.xkw.com/quesimg/Upload/formula/",x.host+"/api/xkw-helper/route-formula-svg/").replace(".svg",""))}),u.querySelector("canvas").style.position="fixed",u.querySelector("canvas").style.top="0",u.querySelector("canvas").style.left="0",u.style.backgroundColor="white",new Promise((m,y)=>{pt(u,{quality:.8,includeQueryParams:!0}).then(function(b){u.style.display="none",m(b)}).catch(function(b){})})},I=v("");I.value=window.qcomponent;const L=c=>ge(window.qcomponent=="zjw"?ye:be,{qcontent:c}),A=v(1),se=async()=>{a.value=!0,o.value="Passing on data.";const c=(await x.post("/zujuan-ink-be-core/records/add",{date:new Date().toDateString(),timestamp:new Date().getTime(),count:n.value.length,bankid:window.bankid})).data;for(let u=0;u<n.value.length;u++){o.value=`Generate Image ${u+1} / ${n.value.length}`;const m=await w(u);o.value=`Submitting Record ${u+1} / ${n.value.length}`,await x.post("/zujuan-ink-be-core/donerec/add",{quid:n.value[u].quid,date:new Date().toDateString(),timestamp:new Date().getTime(),image:m,parent:c}),o.value=`Update Data ${u+1} / ${n.value.length}`,await x.get("/zujuan-ink-be-core/data/submitAsDone/"+n.value[u].quid)}o.value="Done.",A.value=2},ie=async c=>{await x.get("/zujuan-ink-be-core/data/addFailedColl/"+n.value[c].quid),n.value[c].failedcoll=!0};return(c,u)=>(_(),k(U,null,[R("div",wt,[(_(!0),k(U,null,me(n.value,(m,y)=>(_(),k("div",null,[R("div",{id:"DrawableBlock-"+y},[R("canvas",{id:"drawableCanvas-"+y,class:"drawableCanvas",onPointermove:b=>l.onpointermove(y,b),onMouseup:b=>l.onmouseup(y,b),onMousedown:b=>l.onmousedown(y,b),style:V({height:r.value[y]+"px"})},null,44,bt),R("div",vt,[h(d(Y),{vertical:""},{default:p(()=>[h(d(P),{onClick:b=>S(y),disabled:y==n.value.length-1},{default:p(()=>[C("NEXT")]),_:2},1032,["onClick","disabled"]),h(d(P),{onClick:b=>ie(y)},{default:p(()=>[C("收录错题集")]),_:2},1032,["onClick"])]),_:2},1024)]),(_(),de(he(L(m)))),h(xe,{id:I.value=="xkw"?m.id:m.qid,width:700},null,8,["id"])],8,yt)]))),256)),R("div",null,[h(d(P),{onClick:se},{default:p(()=>[C("Finish.")]),_:1})])]),h(d(Ee),{show:a.value,"onUpdate:show":u[2]||(u[2]=m=>a.value=m),style:V([{width:"50%"},c.bodyStyle]),class:"custom-card",preset:"card",title:"请稍候",bordered:!1,size:"huge",segmented:c.segmented},{default:p(()=>[A.value==1?(_(),k("div",St,[h(d(Se),{type:"warning"},{default:p(()=>[C(" 该应用的后端没有原子性，而此过程中的API往返较多，因此，请不要在提交过程中断开联网，或取消保存 ")]),_:1}),C(),h(d(Q),null,{description:p(()=>[C(fe(o.value),1)]),_:1})])):j("",!0),A.value==2?(_(),k("div",Et,[h(d(P),{onClick:u[0]||(u[0]=m=>c.$router.push("../preparing-room"))},{default:p(()=>[C("返回准备室")]),_:1}),h(d(P),{onClick:u[1]||(u[1]=m=>c.$router.push("../home"))},{default:p(()=>[C("返回首页")]),_:1})])):j("",!0)]),_:1},8,["show","style","segmented"])],64))}},fn=ve(Ct,[["__scopeId","data-v-109895b9"]]);export{fn as default};
