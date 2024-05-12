import{i as lr}from"./Button-a421b774.js";import{g as ir,a as b,i,h as C,b as z,j as H,u as sr,d as ge,s as ur,o as cr,k as se,e as dr}from"./light-cb8e5d18.js";import{w as Q,N as a,b2 as w,aC as ue,R as hr,j as R,b8 as be,a5 as pr,J as vr,aD as xe,ad as fr,F as gr,_ as me}from"./index-6b27469d.js";import{a as br,u as we,r as Z,b as ce}from"./use-memo-7138c88c.js";import{u as xr}from"./use-locale-13d55c5c.js";import{u as mr}from"./use-merged-state-236ae148.js";import{u as wr}from"./Loading-a27cceda.js";import{g as yr}from"./Close-df27b242.js";import{N as Cr,V as zr,o as ye,a as Ce}from"./Scrollbar-6ef5ad24.js";import{i as Ar}from"./light-5edeff63.js";import{c as y}from"./use-is-mounted-e356ec1d.js";import{N as ze,a as Fr}from"./Suffix-8898b6d6.js";import{N as Ae}from"./Icon-0741e3aa.js";const Fe=Q({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Sr=Q({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Se=ir("n-input");function $r(r){let x=0;for(const n of r)x++;return x}function J(r){return r===""||r==null}function Rr(r){const x=w(null);function n(){const{value:g}=r;if(!(g!=null&&g.focus)){S();return}const{selectionStart:h,selectionEnd:s,value:c}=g;if(h==null||s==null){S();return}x.value={start:h,end:s,beforeText:c.slice(0,h),afterText:c.slice(s)}}function F(){var g;const{value:h}=x,{value:s}=r;if(!h||!s)return;const{value:c}=s,{start:u,beforeText:l,afterText:f}=h;let m=c.length;if(c.endsWith(f))m=c.length-f.length;else if(c.startsWith(l))m=l.length;else{const T=l[u-1],A=c.indexOf(T,u-1);A!==-1&&(m=A+1)}(g=s.setSelectionRange)===null||g===void 0||g.call(s,m,m)}function S(){x.value=null}return ue(r,S),{recordCursor:n,restoreCursor:F}}const $e=Q({name:"InputWordCount",setup(r,{slots:x}){const{mergedValueRef:n,maxlengthRef:F,mergedClsPrefixRef:S,countGraphemesRef:g}=hr(Se),h=R(()=>{const{value:s}=n;return s===null||Array.isArray(s)?0:(g.value||$r)(s)});return()=>{const{value:s}=F,{value:c}=n;return a("span",{class:`${S.value}-input-word-count`},br(x.default,{value:c===null||Array.isArray(c)?"":c},()=>[s===void 0?h.value:`${h.value} / ${s}`]))}}}),Br=b("input",`
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
`,[i("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),i("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
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
 `),i("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),C("&:-webkit-autofill ~",[i("placeholder","display: none;")])]),z("round",[H("textarea","border-radius: calc(var(--n-height) / 2);")]),i("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[C("span",`
 width: 100%;
 display: inline-block;
 `)]),z("textarea",[i("placeholder","overflow: visible;")]),H("autosize","width: 100%;"),z("autosize",[i("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),b("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),i("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),i("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("&[type=password]::-ms-reveal","display: none;"),C("+",[i("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),H("textarea",[i("placeholder","white-space: nowrap;")]),i("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),z("textarea","width: 100%;",[b("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),z("resizable",[b("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),i("textarea-el, textarea-mirror, placeholder",`
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
 `),i("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),z("pair",[i("input-el, placeholder","text-align: center;"),i("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[b("icon",`
 color: var(--n-icon-color);
 `),b("base-icon",`
 color: var(--n-icon-color);
 `)])]),z("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[i("border","border: var(--n-border-disabled);"),i("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),i("placeholder","color: var(--n-placeholder-color-disabled);"),i("separator","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),b("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),i("suffix, prefix","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),H("disabled",[i("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[C("&:hover",`
 color: var(--n-icon-color-hover);
 `),C("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),C("&:hover",[i("state-border","border: var(--n-border-hover);")]),z("focus","background-color: var(--n-color-focus);",[i("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),i("border, state-border",`
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
 `),i("state-border",`
 border-color: #0000;
 z-index: 1;
 `),i("prefix","margin-right: 4px;"),i("suffix",`
 margin-left: 4px;
 `),i("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[b("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),b("base-clear",`
 font-size: var(--n-icon-size);
 `,[i("placeholder",[b("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),C(">",[b("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),b("base-icon",`
 font-size: var(--n-icon-size);
 `)]),b("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>z(`${r}-status`,[H("disabled",[b("base-loading",`
 color: var(--n-loading-color-${r})
 `),i("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),i("state-border",`
 border: var(--n-border-${r});
 `),C("&:hover",[i("state-border",`
 border: var(--n-border-hover-${r});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[i("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),z("focus",`
 background-color: var(--n-color-focus-${r});
 `,[i("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]),kr=b("input",[z("disabled",[i("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Er=Object.assign(Object.assign({},ge.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Pr=Q({name:"Input",props:Er,setup(r){const{mergedClsPrefixRef:x,mergedBorderedRef:n,inlineThemeDisabled:F,mergedRtlRef:S}=sr(r),g=ge("Input","-input",Br,Ar,r,x);lr&&ur("-input-safari",kr,x);const h=w(null),s=w(null),c=w(null),u=w(null),l=w(null),f=w(null),m=w(null),T=Rr(m),A=w(null),{localeRef:Re}=xr("Input"),K=w(r.defaultValue),Be=be(r,"value"),$=mr(Be,K),M=wr(r),{mergedSizeRef:ee,mergedDisabledRef:_,mergedStatusRef:ke}=M,D=w(!1),W=w(!1),B=w(!1),V=w(!1);let oe=null;const re=R(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[Re.value.placeholder]:[e]}),Ee=R(()=>{const{value:e}=B,{value:o}=$,{value:t}=re;return!e&&(J(o)||Array.isArray(o)&&J(o[0]))&&t[0]}),Pe=R(()=>{const{value:e}=B,{value:o}=$,{value:t}=re;return!e&&t[1]&&(J(o)||Array.isArray(o)&&J(o[1]))}),te=we(()=>r.internalForceFocus||D.value),Te=we(()=>{if(_.value||r.readonly||!r.clearable||!te.value&&!W.value)return!1;const{value:e}=$,{value:o}=te;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(W.value||o):!!e&&(W.value||o)}),ne=R(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),O=w(!1),_e=R(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),de=w(void 0),De=()=>{var e,o;if(r.type==="textarea"){const{autosize:t}=r;if(t&&(de.value=(o=(e=A.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!s.value||typeof t=="boolean")return;const{paddingTop:p,paddingBottom:v,lineHeight:d}=window.getComputedStyle(s.value),k=Number(p.slice(0,-2)),E=Number(v.slice(0,-2)),P=Number(d.slice(0,-2)),{value:N}=c;if(!N)return;if(t.minRows){const j=Math.max(t.minRows,1),ie=`${k+E+P*j}px`;N.style.minHeight=ie}if(t.maxRows){const j=`${k+E+P*t.maxRows}px`;N.style.maxHeight=j}}},Ie=R(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});pr(()=>{const{value:e}=$;Array.isArray(e)||le(e)});const Me=vr().proxy;function U(e,o){const{onUpdateValue:t,"onUpdate:value":p,onInput:v}=r,{nTriggerFormInput:d}=M;t&&y(t,e,o),p&&y(p,e,o),v&&y(v,e,o),K.value=e,d()}function L(e,o){const{onChange:t}=r,{nTriggerFormChange:p}=M;t&&y(t,e,o),K.value=e,p()}function We(e){const{onBlur:o}=r,{nTriggerFormBlur:t}=M;o&&y(o,e),t()}function Ve(e){const{onFocus:o}=r,{nTriggerFormFocus:t}=M;o&&y(o,e),t()}function Oe(e){const{onClear:o}=r;o&&y(o,e)}function Ne(e){const{onInputBlur:o}=r;o&&y(o,e)}function je(e){const{onInputFocus:o}=r;o&&y(o,e)}function He(){const{onDeactivate:e}=r;e&&y(e)}function Ke(){const{onActivate:e}=r;e&&y(e)}function Ue(e){const{onClick:o}=r;o&&y(o,e)}function Le(e){const{onWrapperFocus:o}=r;o&&y(o,e)}function Ge(e){const{onWrapperBlur:o}=r;o&&y(o,e)}function Xe(){B.value=!0}function Ye(e){B.value=!1,e.target===f.value?G(e,1):G(e,0)}function G(e,o=0,t="input"){const p=e.target.value;if(le(p),e instanceof InputEvent&&!e.isComposing&&(B.value=!1),r.type==="textarea"){const{value:d}=A;d&&d.syncUnifiedContainer()}if(oe=p,B.value)return;T.recordCursor();const v=qe(p);if(v)if(!r.pair)t==="input"?U(p,{source:o}):L(p,{source:o});else{let{value:d}=$;Array.isArray(d)?d=[d[0],d[1]]:d=["",""],d[o]=p,t==="input"?U(d,{source:o}):L(d,{source:o})}Me.$forceUpdate(),v||me(T.restoreCursor)}function qe(e){const{countGraphemes:o,maxlength:t,minlength:p}=r;if(o){let d;if(t!==void 0&&(d===void 0&&(d=o(e)),d>Number(t))||p!==void 0&&(d===void 0&&(d=o(e)),d<Number(t)))return!1}const{allowInput:v}=r;return typeof v=="function"?v(e):!0}function Qe(e){Ne(e),e.relatedTarget===h.value&&He(),e.relatedTarget!==null&&(e.relatedTarget===l.value||e.relatedTarget===f.value||e.relatedTarget===s.value)||(V.value=!1),X(e,"blur"),m.value=null}function Ze(e,o){je(e),D.value=!0,V.value=!0,Ke(),X(e,"focus"),o===0?m.value=l.value:o===1?m.value=f.value:o===2&&(m.value=s.value)}function Je(e){r.passivelyActivated&&(Ge(e),X(e,"blur"))}function eo(e){r.passivelyActivated&&(D.value=!0,Le(e),X(e,"focus"))}function X(e,o){e.relatedTarget!==null&&(e.relatedTarget===l.value||e.relatedTarget===f.value||e.relatedTarget===s.value||e.relatedTarget===h.value)||(o==="focus"?(Ve(e),D.value=!0):o==="blur"&&(We(e),D.value=!1))}function oo(e,o){G(e,o,"change")}function ro(e){Ue(e)}function to(e){Oe(e),he()}function he(){r.pair?(U(["",""],{source:"clear"}),L(["",""],{source:"clear"})):(U("",{source:"clear"}),L("",{source:"clear"}))}function no(e){const{onMousedown:o}=r;o&&o(e);const{tagName:t}=e.target;if(t!=="INPUT"&&t!=="TEXTAREA"){if(r.resizable){const{value:p}=h;if(p){const{left:v,top:d,width:k,height:E}=p.getBoundingClientRect(),P=14;if(v+k-P<e.clientX&&e.clientX<v+k&&d+E-P<e.clientY&&e.clientY<d+E)return}}e.preventDefault(),D.value||pe()}}function ao(){var e;W.value=!0,r.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseEnterWrapper())}function lo(){var e;W.value=!1,r.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function io(){_.value||ne.value==="click"&&(O.value=!O.value)}function so(e){if(_.value)return;e.preventDefault();const o=p=>{p.preventDefault(),Ce("mouseup",document,o)};if(ye("mouseup",document,o),ne.value!=="mousedown")return;O.value=!0;const t=()=>{O.value=!1,Ce("mouseup",document,t)};ye("mouseup",document,t)}function uo(e){r.onKeyup&&y(r.onKeyup,e)}function co(e){switch(r.onKeydown&&y(r.onKeydown,e),e.key){case"Escape":ae();break;case"Enter":ho(e);break}}function ho(e){var o,t;if(r.passivelyActivated){const{value:p}=V;if(p){r.internalDeactivateOnEnter&&ae();return}e.preventDefault(),r.type==="textarea"?(o=s.value)===null||o===void 0||o.focus():(t=l.value)===null||t===void 0||t.focus()}}function ae(){r.passivelyActivated&&(V.value=!1,me(()=>{var e;(e=h.value)===null||e===void 0||e.focus()}))}function pe(){var e,o,t;_.value||(r.passivelyActivated?(e=h.value)===null||e===void 0||e.focus():((o=s.value)===null||o===void 0||o.focus(),(t=l.value)===null||t===void 0||t.focus()))}function po(){var e;!((e=h.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function vo(){var e,o;(e=s.value)===null||e===void 0||e.select(),(o=l.value)===null||o===void 0||o.select()}function fo(){_.value||(s.value?s.value.focus():l.value&&l.value.focus())}function go(){const{value:e}=h;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&ae()}function bo(e){if(r.type==="textarea"){const{value:o}=s;o==null||o.scrollTo(e)}else{const{value:o}=l;o==null||o.scrollTo(e)}}function le(e){const{type:o,pair:t,autosize:p}=r;if(!t&&p)if(o==="textarea"){const{value:v}=c;v&&(v.textContent=(e??"")+`\r
`)}else{const{value:v}=u;v&&(e?v.textContent=e:v.innerHTML="&nbsp;")}}function xo(){De()}const ve=w({top:"0"});function mo(e){var o;const{scrollTop:t}=e.target;ve.value.top=`${-t}px`,(o=A.value)===null||o===void 0||o.syncUnifiedContainer()}let Y=null;xe(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?Y=ue($,t=>{!Array.isArray(t)&&t!==oe&&le(t)}):Y==null||Y()});let q=null;xe(()=>{r.type==="textarea"?q=ue($,e=>{var o;!Array.isArray(e)&&e!==oe&&((o=A.value)===null||o===void 0||o.syncUnifiedContainer())}):q==null||q()}),fr(Se,{mergedValueRef:$,maxlengthRef:Ie,mergedClsPrefixRef:x,countGraphemesRef:be(r,"countGraphemes")});const wo={wrapperElRef:h,inputElRef:l,textareaElRef:s,isCompositing:B,clear:he,focus:pe,blur:po,select:vo,deactivate:go,activate:fo,scrollTo:bo},yo=cr("Input",S,x),fe=R(()=>{const{value:e}=ee,{common:{cubicBezierEaseInOut:o},self:{color:t,borderRadius:p,textColor:v,caretColor:d,caretColorError:k,caretColorWarning:E,textDecorationColor:P,border:N,borderDisabled:j,borderHover:ie,borderFocus:Co,placeholderColor:zo,placeholderColorDisabled:Ao,lineHeightTextarea:Fo,colorDisabled:So,colorFocus:$o,textColorDisabled:Ro,boxShadowFocus:Bo,iconSize:ko,colorFocusWarning:Eo,boxShadowFocusWarning:Po,borderWarning:To,borderFocusWarning:_o,borderHoverWarning:Do,colorFocusError:Io,boxShadowFocusError:Mo,borderError:Wo,borderFocusError:Vo,borderHoverError:Oo,clearSize:No,clearColor:jo,clearColorHover:Ho,clearColorPressed:Ko,iconColor:Uo,iconColorDisabled:Lo,suffixTextColor:Go,countTextColor:Xo,countTextColorDisabled:Yo,iconColorHover:qo,iconColorPressed:Qo,loadingColor:Zo,loadingColorError:Jo,loadingColorWarning:er,[se("padding",e)]:or,[se("fontSize",e)]:rr,[se("height",e)]:tr}}=g.value,{left:nr,right:ar}=yr(or);return{"--n-bezier":o,"--n-count-text-color":Xo,"--n-count-text-color-disabled":Yo,"--n-color":t,"--n-font-size":rr,"--n-border-radius":p,"--n-height":tr,"--n-padding-left":nr,"--n-padding-right":ar,"--n-text-color":v,"--n-caret-color":d,"--n-text-decoration-color":P,"--n-border":N,"--n-border-disabled":j,"--n-border-hover":ie,"--n-border-focus":Co,"--n-placeholder-color":zo,"--n-placeholder-color-disabled":Ao,"--n-icon-size":ko,"--n-line-height-textarea":Fo,"--n-color-disabled":So,"--n-color-focus":$o,"--n-text-color-disabled":Ro,"--n-box-shadow-focus":Bo,"--n-loading-color":Zo,"--n-caret-color-warning":E,"--n-color-focus-warning":Eo,"--n-box-shadow-focus-warning":Po,"--n-border-warning":To,"--n-border-focus-warning":_o,"--n-border-hover-warning":Do,"--n-loading-color-warning":er,"--n-caret-color-error":k,"--n-color-focus-error":Io,"--n-box-shadow-focus-error":Mo,"--n-border-error":Wo,"--n-border-focus-error":Vo,"--n-border-hover-error":Oo,"--n-loading-color-error":Jo,"--n-clear-color":jo,"--n-clear-size":No,"--n-clear-color-hover":Ho,"--n-clear-color-pressed":Ko,"--n-icon-color":Uo,"--n-icon-color-hover":qo,"--n-icon-color-pressed":Qo,"--n-icon-color-disabled":Lo,"--n-suffix-text-color":Go}}),I=F?dr("input",R(()=>{const{value:e}=ee;return e[0]}),fe,r):void 0;return Object.assign(Object.assign({},wo),{wrapperElRef:h,inputElRef:l,inputMirrorElRef:u,inputEl2Ref:f,textareaElRef:s,textareaMirrorElRef:c,textareaScrollbarInstRef:A,rtlEnabled:yo,uncontrolledValue:K,mergedValue:$,passwordVisible:O,mergedPlaceholder:re,showPlaceholder1:Ee,showPlaceholder2:Pe,mergedFocus:te,isComposing:B,activated:V,showClearButton:Te,mergedSize:ee,mergedDisabled:_,textDecorationStyle:_e,mergedClsPrefix:x,mergedBordered:n,mergedShowPasswordOn:ne,placeholderStyle:ve,mergedStatus:ke,textAreaScrollContainerWidth:de,handleTextAreaScroll:mo,handleCompositionStart:Xe,handleCompositionEnd:Ye,handleInput:G,handleInputBlur:Qe,handleInputFocus:Ze,handleWrapperBlur:Je,handleWrapperFocus:eo,handleMouseEnter:ao,handleMouseLeave:lo,handleMouseDown:no,handleChange:oo,handleClick:ro,handleClear:to,handlePasswordToggleClick:io,handlePasswordToggleMousedown:so,handleWrapperKeydown:co,handleWrapperKeyup:uo,handleTextAreaMirrorResize:xo,getTextareaScrollContainer:()=>s.value,mergedTheme:g,cssVars:F?void 0:fe,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender})},render(){var r,x;const{mergedClsPrefix:n,mergedStatus:F,themeClass:S,type:g,countGraphemes:h,onRender:s}=this,c=this.$slots;return s==null||s(),a("div",{ref:"wrapperElRef",class:[`${n}-input`,S,F&&`${n}-input--${F}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:g==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&g!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},a("div",{class:`${n}-input-wrapper`},Z(c.prefix,u=>u&&a("div",{class:`${n}-input__prefix`},u)),g==="textarea"?a(Cr,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var u,l;const{textAreaScrollContainerWidth:f}=this,m={width:this.autosize&&f&&`${f}px`};return a(gr,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(u=this.inputProps)===null||u===void 0?void 0:u.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:h?void 0:this.maxlength,minlength:h?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(l=this.inputProps)===null||l===void 0?void 0:l.style,m],onBlur:this.handleInputBlur,onFocus:T=>{this.handleInputFocus(T,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,m],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(zr,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${n}-input__input`},a("input",Object.assign({type:g==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":g},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(x=this.inputProps)===null||x===void 0?void 0:x.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:h?void 0:this.maxlength,minlength:h?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,0)},onInput:u=>{this.handleInput(u,0)},onChange:u=>{this.handleChange(u,0)}})),this.showPlaceholder1?a("div",{class:`${n}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&Z(c.suffix,u=>u||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${n}-input__suffix`},[Z(c["clear-icon-placeholder"],l=>(this.clearable||l)&&a(ze,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>l,icon:()=>{var f,m;return(m=(f=this.$slots)["clear-icon"])===null||m===void 0?void 0:m.call(f)}})),this.internalLoadingBeforeSuffix?null:u,this.loading!==void 0?a(Fr,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?u:null,this.showCount&&this.type!=="textarea"?a($e,null,{default:l=>{var f;return(f=c.count)===null||f===void 0?void 0:f.call(c,l)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ce(c["password-visible-icon"],()=>[a(Ae,{clsPrefix:n},{default:()=>a(Fe,null)})]):ce(c["password-invisible-icon"],()=>[a(Ae,{clsPrefix:n},{default:()=>a(Sr,null)})])):null]):null)),this.pair?a("span",{class:`${n}-input__separator`},ce(c.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${n}-input-wrapper`},a("div",{class:`${n}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:h?void 0:this.maxlength,minlength:h?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,1)},onInput:u=>{this.handleInput(u,1)},onChange:u=>{this.handleChange(u,1)}}),this.showPlaceholder2?a("div",{class:`${n}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),Z(c.suffix,u=>(this.clearable||u)&&a("div",{class:`${n}-input__suffix`},[this.clearable&&a(ze,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var l;return(l=c["clear-icon"])===null||l===void 0?void 0:l.call(c)},placeholder:()=>{var l;return(l=c["clear-icon-placeholder"])===null||l===void 0?void 0:l.call(c)}}),u]))):null,this.mergedBordered?a("div",{class:`${n}-input__border`}):null,this.mergedBordered?a("div",{class:`${n}-input__state-border`}):null,this.showCount&&g==="textarea"?a($e,null,{default:u=>{var l;const{renderCount:f}=this;return f?f(u):(l=c.count)===null||l===void 0?void 0:l.call(c,u)}}):null)}});export{Fe as E,Pr as N};
