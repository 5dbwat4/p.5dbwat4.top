import{f as nt,c as Me,a as z,i as k,h as J,u as Ie,d as te,x as rt,k as Q,e as Ee,l as Ke,b as W,j as Le,o as qe,n as ne}from"./light-cb8e5d18.js";import{w as ee,a5 as he,$ as it,a3 as lt,j as O,b2 as T,N as a,Z as at,a1 as Ge,R as Be,b8 as K,aC as ae,ad as Ze,_ as Xe,aD as st,F as dt}from"./index-6b27469d.js";import{T as ct}from"./runtime-dom.esm-bundler-4f377a37.js";import{i as He,d as ut,p as pt,N as ht}from"./Popover-d5735fab.js";import{u as ve,r as Ye,b as vt}from"./use-memo-7138c88c.js";import{V as Je,d as Ue,s as bt,r as re,N as gt,W as ft}from"./Scrollbar-6ef5ad24.js";import{N as Qe}from"./Icon-0741e3aa.js";import{f as mt}from"./fade-in-scale-up.cssr-59f6c429.js";import{a as xt,V as eo}from"./create-59670860.js";import{d as Ne,p as be,g as se}from"./Close-df27b242.js";import{N as wt}from"./Loading-a27cceda.js";import{c as Ct,a as _e}from"./cssr-752b8ed7.js";import{b as yt}from"./next-frame-once-7035a838.js";import{h as oo}from"./ChevronRight-f0e435af.js";import{u as St}from"./use-locale-13d55c5c.js";import{a as zt}from"./Suffix-8898b6d6.js";import{N as De}from"./Tag-156be23d.js";function Ae(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ge(e){const o=e.filter(t=>t!==void 0);if(o.length!==0)return o.length===1?o[0]:t=>{e.forEach(d=>{d&&d(t)})}}function to(e){return e&-e}class Ft{constructor(o,t){this.l=o,this.min=t;const d=new Array(o+1);for(let s=0;s<o+1;++s)d[s]=0;this.ft=d}add(o,t){if(t===0)return;const{l:d,ft:s}=this;for(o+=1;o<=d;)s[o]+=t,o+=to(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:t,min:d,l:s}=this;if(o>s)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let l=o*d;for(;o>0;)l+=t[o],o-=to(o);return l}getBound(o){let t=0,d=this.l;for(;d>t;){const s=Math.floor((t+d)/2),l=this.sum(s);if(l>o){d=s;continue}else if(l<o){if(t===s)return this.sum(t+1)<=o?t+1:s;t=s}else return s}return t}}let fe;function Rt(){return typeof document>"u"?!1:(fe===void 0&&("matchMedia"in window?fe=window.matchMedia("(pointer:coarse)").matches:fe=!1),fe)}let je;function no(){return typeof document>"u"?1:(je===void 0&&(je="chrome"in window?window.devicePixelRatio:1),je)}const kt=_e(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[_e("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[_e("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),ro=ee({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=nt();kt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ct,ssr:o}),he(()=>{const{defaultScrollIndex:u,defaultScrollKey:p}=e;u!=null?g({index:u}):p!=null&&g({key:p})});let t=!1,d=!1;it(()=>{if(t=!1,!d){d=!0;return}g({top:m.value,left:b})}),lt(()=>{t=!0,d||(d=!0)});const s=O(()=>{const u=new Map,{keyField:p}=e;return e.items.forEach((R,$)=>{u.set(R[p],$)}),u}),l=T(null),c=T(void 0),n=new Map,f=O(()=>{const{items:u,itemSize:p,keyField:R}=e,$=new Ft(u.length,p);return u.forEach((E,L)=>{const M=E[R],B=n.get(M);B!==void 0&&$.add(L,B)}),$}),w=T(0);let b=0;const m=T(0),S=ve(()=>Math.max(f.value.getBound(m.value-Ne(e.paddingTop))-1,0)),F=O(()=>{const{value:u}=c;if(u===void 0)return[];const{items:p,itemSize:R}=e,$=S.value,E=Math.min($+Math.ceil(u/R+1),p.length-1),L=[];for(let M=$;M<=E;++M)L.push(p[M]);return L}),g=(u,p)=>{if(typeof u=="number"){x(u,p,"auto");return}const{left:R,top:$,index:E,key:L,position:M,behavior:B,debounce:j=!0}=u;if(R!==void 0||$!==void 0)x(R,$,B);else if(E!==void 0)C(E,B,j);else if(L!==void 0){const N=s.value.get(L);N!==void 0&&C(N,B,j)}else M==="bottom"?x(0,Number.MAX_SAFE_INTEGER,B):M==="top"&&x(0,0,B)};let y,P=null;function C(u,p,R){const{value:$}=f,E=$.sum(u)+Ne(e.paddingTop);if(!R)l.value.scrollTo({left:0,top:E,behavior:p});else{y=u,P!==null&&window.clearTimeout(P),P=window.setTimeout(()=>{y=void 0,P=null},16);const{scrollTop:L,offsetHeight:M}=l.value;if(E>L){const B=$.get(u);E+B<=L+M||l.value.scrollTo({left:0,top:E+B-M,behavior:p})}else l.value.scrollTo({left:0,top:E,behavior:p})}}function x(u,p,R){l.value.scrollTo({left:u,top:p,behavior:R})}function I(u,p){var R,$,E;if(t||e.ignoreItemResize||X(p.target))return;const{value:L}=f,M=s.value.get(u),B=L.get(M),j=(E=($=(R=p.borderBoxSize)===null||R===void 0?void 0:R[0])===null||$===void 0?void 0:$.blockSize)!==null&&E!==void 0?E:p.contentRect.height;if(j===B)return;j-e.itemSize===0?n.delete(u):n.set(u,j-e.itemSize);const N=j-B;if(N===0)return;L.add(M,N);const G=l.value;if(G!=null){if(y===void 0){const r=L.sum(M);G.scrollTop>r&&G.scrollBy(0,N)}else if(M<y)G.scrollBy(0,N);else if(M===y){const r=L.sum(M);j+r>G.scrollTop+G.offsetHeight&&G.scrollBy(0,N)}q()}w.value++}const A=!Rt();let D=!1;function V(u){var p;(p=e.onScroll)===null||p===void 0||p.call(e,u),(!A||!D)&&q()}function Z(u){var p;if((p=e.onWheel)===null||p===void 0||p.call(e,u),A){const R=l.value;if(R!=null){if(u.deltaX===0&&(R.scrollTop===0&&u.deltaY<=0||R.scrollTop+R.offsetHeight>=R.scrollHeight&&u.deltaY>=0))return;u.preventDefault(),R.scrollTop+=u.deltaY/no(),R.scrollLeft+=u.deltaX/no(),q(),D=!0,yt(()=>{D=!1})}}}function U(u){if(t||X(u.target)||u.contentRect.height===c.value)return;c.value=u.contentRect.height;const{onResize:p}=e;p!==void 0&&p(u)}function q(){const{value:u}=l;u!=null&&(m.value=u.scrollTop,b=u.scrollLeft)}function X(u){let p=u;for(;p!==null;){if(p.style.display==="none")return!0;p=p.parentElement}return!1}return{listHeight:c,listStyle:{overflow:"auto"},keyToIndex:s,itemsStyle:O(()=>{const{itemResizable:u}=e,p=be(f.value.sum());return w.value,[e.itemsStyle,{boxSizing:"content-box",height:u?"":p,minHeight:u?p:"",paddingTop:be(e.paddingTop),paddingBottom:be(e.paddingBottom)}]}),visibleItemsStyle:O(()=>(w.value,{transform:`translateY(${be(f.value.sum(S.value))})`})),viewportItems:F,listElRef:l,itemsElRef:T(null),scrollTo:g,handleListResize:U,handleListScroll:V,handleListWheel:Z,handleItemResize:I}},render(){const{itemResizable:e,keyField:o,keyToIndex:t,visibleItemsTag:d}=this;return a(Je,{onResize:this.handleListResize},{default:()=>{var s,l;return a("div",at(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?a("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[a(d,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(c=>{const n=c[o],f=t.get(n),w=this.$slots.default({item:c,index:f})[0];return e?a(Je,{key:n,onResize:b=>this.handleItemResize(n,b)},{default:()=>w}):(w.key=n,w)})})]):(l=(s=this.$slots).empty)===null||l===void 0?void 0:l.call(s)])}})}});function We(e,o){o&&(he(()=>{const{value:t}=e;t&&Ue.registerHandler(t,o)}),Ge(()=>{const{value:t}=e;t&&Ue.unregisterHandler(t)}))}const io=ee({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),$t=ee({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),lo=ee({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Ot={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Pt=e=>{const{textColorDisabled:o,iconColor:t,textColor2:d,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,fontSizeHuge:n}=e;return Object.assign(Object.assign({},Ot),{fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,fontSizeHuge:n,textColor:o,iconColor:t,extraTextColor:d})},Tt={name:"Empty",common:Me,self:Pt},Ve=Tt,Mt=z("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[k("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[J("+",[k("description",`
 margin-top: 8px;
 `)])]),k("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),k("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),It=Object.assign(Object.assign({},te.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),ao=ee({name:"Empty",props:It,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Ie(e),d=te("Empty","-empty",Mt,Ve,e,o),{localeRef:s}=St("Empty"),l=Be(rt,null),c=O(()=>{var b,m,S;return(b=e.description)!==null&&b!==void 0?b:(S=(m=l==null?void 0:l.mergedComponentPropsRef.value)===null||m===void 0?void 0:m.Empty)===null||S===void 0?void 0:S.description}),n=O(()=>{var b,m;return((m=(b=l==null?void 0:l.mergedComponentPropsRef.value)===null||b===void 0?void 0:b.Empty)===null||m===void 0?void 0:m.renderIcon)||(()=>a($t,null))}),f=O(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:m},self:{[Q("iconSize",b)]:S,[Q("fontSize",b)]:F,textColor:g,iconColor:y,extraTextColor:P}}=d.value;return{"--n-icon-size":S,"--n-font-size":F,"--n-bezier":m,"--n-text-color":g,"--n-icon-color":y,"--n-extra-text-color":P}}),w=t?Ee("empty",O(()=>{let b="";const{size:m}=e;return b+=m[0],b}),f,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:n,localizedDescription:O(()=>c.value||s.value.description),cssVars:t?void 0:f,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:t}=this;return t==null||t(),a("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${o}-empty__icon`},e.icon?e.icon():a(Qe,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${o}-empty__extra`},e.extra()):null)}}),Et={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},Lt=e=>{const{borderRadius:o,popoverColor:t,textColor3:d,dividerColor:s,textColor2:l,primaryColorPressed:c,textColorDisabled:n,primaryColor:f,opacityDisabled:w,hoverColor:b,fontSizeSmall:m,fontSizeMedium:S,fontSizeLarge:F,fontSizeHuge:g,heightSmall:y,heightMedium:P,heightLarge:C,heightHuge:x}=e;return Object.assign(Object.assign({},Et),{optionFontSizeSmall:m,optionFontSizeMedium:S,optionFontSizeLarge:F,optionFontSizeHuge:g,optionHeightSmall:y,optionHeightMedium:P,optionHeightLarge:C,optionHeightHuge:x,borderRadius:o,color:t,groupHeaderTextColor:d,actionDividerColor:s,optionTextColor:l,optionTextColorPressed:c,optionTextColorDisabled:n,optionTextColorActive:f,optionOpacityDisabled:w,optionCheckColor:f,optionColorPending:b,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:b,actionTextColor:l,loadingColor:f})},Bt=Ke({name:"InternalSelectMenu",common:Me,peers:{Scrollbar:bt,Empty:Ve},self:Lt}),so=Bt;function Ht(e,o){return a(ct,{name:"fade-in-scale-up-transition"},{default:()=>e?a(Qe,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>a(io)}):null})}const co=ee({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:t,multipleRef:d,valueSetRef:s,renderLabelRef:l,renderOptionRef:c,labelFieldRef:n,valueFieldRef:f,showCheckmarkRef:w,nodePropsRef:b,handleOptionClick:m,handleOptionMouseEnter:S}=Be(He),F=ve(()=>{const{value:C}=t;return C?e.tmNode.key===C.key:!1});function g(C){const{tmNode:x}=e;x.disabled||m(C,x)}function y(C){const{tmNode:x}=e;x.disabled||S(C,x)}function P(C){const{tmNode:x}=e,{value:I}=F;x.disabled||I||S(C,x)}return{multiple:d,isGrouped:ve(()=>{const{tmNode:C}=e,{parent:x}=C;return x&&x.rawNode.type==="group"}),showCheckmark:w,nodeProps:b,isPending:F,isSelected:ve(()=>{const{value:C}=o,{value:x}=d;if(C===null)return!1;const I=e.tmNode.rawNode[f.value];if(x){const{value:A}=s;return A.has(I)}else return C===I}),labelField:n,renderLabel:l,renderOption:c,handleMouseMove:P,handleMouseEnter:y,handleClick:g}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:t,isPending:d,isGrouped:s,showCheckmark:l,nodeProps:c,renderOption:n,renderLabel:f,handleClick:w,handleMouseEnter:b,handleMouseMove:m}=this,S=Ht(t,e),F=f?[f(o,t),l&&S]:[re(o[this.labelField],o,t),l&&S],g=c==null?void 0:c(o),y=a("div",Object.assign({},g,{class:[`${e}-base-select-option`,o.class,g==null?void 0:g.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:d,[`${e}-base-select-option--show-checkmark`]:l}],style:[(g==null?void 0:g.style)||"",o.style||""],onClick:ge([w,g==null?void 0:g.onClick]),onMouseenter:ge([b,g==null?void 0:g.onMouseenter]),onMousemove:ge([m,g==null?void 0:g.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},F));return o.render?o.render({node:y,option:o,selected:t}):n?n({node:y,option:o,selected:t}):y}}),uo=ee({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o,labelFieldRef:t,nodePropsRef:d}=Be(He);return{labelField:t,nodeProps:d,renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:t,nodeProps:d,tmNode:{rawNode:s}}=this,l=d==null?void 0:d(s),c=o?o(s,!1):re(s[this.labelField],s,!1),n=a("div",Object.assign({},l,{class:[`${e}-base-select-group-header`,l==null?void 0:l.class]}),c);return s.render?s.render({node:n,option:s}):t?t({node:n,option:s,selected:!1}):n}}),Nt=z("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[z("scrollbar",`
 max-height: var(--n-height);
 `),z("virtual-list",`
 max-height: var(--n-height);
 `),z("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[k("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),z("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),z("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),k("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),k("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),k("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),k("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),z("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[W("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),J("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),J("&:active",`
 color: var(--n-option-text-color-pressed);
 `),W("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),W("pending",[J("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),W("selected",`
 color: var(--n-option-text-color-active);
 `,[J("&::before",`
 background-color: var(--n-option-color-active);
 `),W("pending",[J("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),W("disabled",`
 cursor: not-allowed;
 `,[Le("selected",`
 color: var(--n-option-text-color-disabled);
 `),W("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),k("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[mt({enterScale:"0.5"})])])]),_t=ee({name:"InternalSelectMenu",props:Object.assign(Object.assign({},te.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=Ie(e),d=qe("InternalSelectMenu",t,o),s=te("InternalSelectMenu","-internal-select-menu",Nt,so,e,K(e,"clsPrefix")),l=T(null),c=T(null),n=T(null),f=O(()=>e.treeMate.getFlattenedNodes()),w=O(()=>xt(f.value)),b=T(null);function m(){const{treeMate:r}=e;let h=null;const{value:H}=e;H===null?h=r.getFirstAvailableNode():(e.multiple?h=r.getNode((H||[])[(H||[]).length-1]):h=r.getNode(H),(!h||h.disabled)&&(h=r.getFirstAvailableNode())),$(h||null)}function S(){const{value:r}=b;r&&!e.treeMate.getNode(r.key)&&(b.value=null)}let F;ae(()=>e.show,r=>{r?F=ae(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?m():S(),Xe(E)):S()},{immediate:!0}):F==null||F()},{immediate:!0}),Ge(()=>{F==null||F()});const g=O(()=>Ne(s.value.self[Q("optionHeight",e.size)])),y=O(()=>se(s.value.self[Q("padding",e.size)])),P=O(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),C=O(()=>{const r=f.value;return r&&r.length===0});function x(r){const{onToggle:h}=e;h&&h(r)}function I(r){const{onScroll:h}=e;h&&h(r)}function A(r){var h;(h=n.value)===null||h===void 0||h.sync(),I(r)}function D(){var r;(r=n.value)===null||r===void 0||r.sync()}function V(){const{value:r}=b;return r||null}function Z(r,h){h.disabled||$(h,!1)}function U(r,h){h.disabled||x(h)}function q(r){var h;oo(r,"action")||(h=e.onKeyup)===null||h===void 0||h.call(e,r)}function X(r){var h;oo(r,"action")||(h=e.onKeydown)===null||h===void 0||h.call(e,r)}function u(r){var h;(h=e.onMousedown)===null||h===void 0||h.call(e,r),!e.focusable&&r.preventDefault()}function p(){const{value:r}=b;r&&$(r.getNext({loop:!0}),!0)}function R(){const{value:r}=b;r&&$(r.getPrev({loop:!0}),!0)}function $(r,h=!1){b.value=r,h&&E()}function E(){var r,h;const H=b.value;if(!H)return;const oe=w.value(H.key);oe!==null&&(e.virtualScroll?(r=c.value)===null||r===void 0||r.scrollTo({index:oe}):(h=n.value)===null||h===void 0||h.scrollTo({index:oe,elSize:g.value}))}function L(r){var h,H;!((h=l.value)===null||h===void 0)&&h.contains(r.target)&&((H=e.onFocus)===null||H===void 0||H.call(e,r))}function M(r){var h,H;!((h=l.value)===null||h===void 0)&&h.contains(r.relatedTarget)||(H=e.onBlur)===null||H===void 0||H.call(e,r)}Ze(He,{handleOptionMouseEnter:Z,handleOptionClick:U,valueSetRef:P,pendingTmNodeRef:b,nodePropsRef:K(e,"nodeProps"),showCheckmarkRef:K(e,"showCheckmark"),multipleRef:K(e,"multiple"),valueRef:K(e,"value"),renderLabelRef:K(e,"renderLabel"),renderOptionRef:K(e,"renderOption"),labelFieldRef:K(e,"labelField"),valueFieldRef:K(e,"valueField")}),Ze(ut,l),he(()=>{const{value:r}=n;r&&r.sync()});const B=O(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:h},self:{height:H,borderRadius:oe,color:xe,groupHeaderTextColor:we,actionDividerColor:Ce,optionTextColorPressed:ye,optionTextColor:Se,optionTextColorDisabled:ze,optionTextColorActive:Fe,optionOpacityDisabled:Re,optionCheckColor:ke,actionTextColor:$e,optionColorPending:ie,optionColorActive:le,loadingColor:Oe,loadingSize:Pe,optionColorActivePending:Te,[Q("optionFontSize",r)]:de,[Q("optionHeight",r)]:ce,[Q("optionPadding",r)]:Y}}=s.value;return{"--n-height":H,"--n-action-divider-color":Ce,"--n-action-text-color":$e,"--n-bezier":h,"--n-border-radius":oe,"--n-color":xe,"--n-option-font-size":de,"--n-group-header-text-color":we,"--n-option-check-color":ke,"--n-option-color-pending":ie,"--n-option-color-active":le,"--n-option-color-active-pending":Te,"--n-option-height":ce,"--n-option-opacity-disabled":Re,"--n-option-text-color":Se,"--n-option-text-color-active":Fe,"--n-option-text-color-disabled":ze,"--n-option-text-color-pressed":ye,"--n-option-padding":Y,"--n-option-padding-left":se(Y,"left"),"--n-option-padding-right":se(Y,"right"),"--n-loading-color":Oe,"--n-loading-size":Pe}}),{inlineThemeDisabled:j}=e,N=j?Ee("internal-select-menu",O(()=>e.size[0]),B,e):void 0,G={selfRef:l,next:p,prev:R,getPendingTmNode:V};return We(l,e.onResize),Object.assign({mergedTheme:s,mergedClsPrefix:o,rtlEnabled:d,virtualListRef:c,scrollbarRef:n,itemSize:g,padding:y,flattenedNodes:f,empty:C,virtualListContainer(){const{value:r}=c;return r==null?void 0:r.listElRef},virtualListContent(){const{value:r}=c;return r==null?void 0:r.itemsElRef},doScroll:I,handleFocusin:L,handleFocusout:M,handleKeyUp:q,handleKeyDown:X,handleMouseDown:u,handleVirtualListResize:D,handleVirtualListScroll:A,cssVars:j?void 0:B,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},G)},render(){const{$slots:e,virtualScroll:o,clsPrefix:t,mergedTheme:d,themeClass:s,onRender:l}=this;return l==null||l(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,s,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Ye(e.header,c=>c&&a("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},c)),this.loading?a("div",{class:`${t}-base-select-menu__loading`},a(wt,{clsPrefix:t,strokeWidth:20})):this.empty?a("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},vt(e.empty,()=>[a(ao,{theme:d.peers.Empty,themeOverrides:d.peerOverrides.Empty})])):a(gt,{ref:"scrollbarRef",theme:d.peers.Scrollbar,themeOverrides:d.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},{default:()=>o?a(ro,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:c})=>c.isGroup?a(uo,{key:c.key,clsPrefix:t,tmNode:c}):c.ignored?null:a(co,{clsPrefix:t,key:c.key,tmNode:c})}):a("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(c=>c.isGroup?a(uo,{key:c.key,clsPrefix:t,tmNode:c}):a(co,{clsPrefix:t,key:c.key,tmNode:c})))}),Ye(e.action,c=>c&&[a("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},c),a(lo,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Dt={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},At=e=>{const{borderRadius:o,textColor2:t,textColorDisabled:d,inputColor:s,inputColorDisabled:l,primaryColor:c,primaryColorHover:n,warningColor:f,warningColorHover:w,errorColor:b,errorColorHover:m,borderColor:S,iconColor:F,iconColorDisabled:g,clearColor:y,clearColorHover:P,clearColorPressed:C,placeholderColor:x,placeholderColorDisabled:I,fontSizeTiny:A,fontSizeSmall:D,fontSizeMedium:V,fontSizeLarge:Z,heightTiny:U,heightSmall:q,heightMedium:X,heightLarge:u}=e;return Object.assign(Object.assign({},Dt),{fontSizeTiny:A,fontSizeSmall:D,fontSizeMedium:V,fontSizeLarge:Z,heightTiny:U,heightSmall:q,heightMedium:X,heightLarge:u,borderRadius:o,textColor:t,textColorDisabled:d,placeholderColor:x,placeholderColorDisabled:I,color:s,colorDisabled:l,colorActive:s,border:`1px solid ${S}`,borderHover:`1px solid ${n}`,borderActive:`1px solid ${c}`,borderFocus:`1px solid ${n}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${ne(c,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${ne(c,{alpha:.2})}`,caretColor:c,arrowColor:F,arrowColorDisabled:g,loadingColor:c,borderWarning:`1px solid ${f}`,borderHoverWarning:`1px solid ${w}`,borderActiveWarning:`1px solid ${f}`,borderFocusWarning:`1px solid ${w}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${ne(f,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${ne(f,{alpha:.2})}`,colorActiveWarning:s,caretColorWarning:f,borderError:`1px solid ${b}`,borderHoverError:`1px solid ${m}`,borderActiveError:`1px solid ${b}`,borderFocusError:`1px solid ${m}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${ne(b,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${ne(b,{alpha:.2})}`,colorActiveError:s,caretColorError:b,clearColor:y,clearColorHover:P,clearColorPressed:C})},jt=Ke({name:"InternalSelection",common:Me,peers:{Popover:pt},self:At}),po=jt,Wt=J([z("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[z("base-loading",`
 color: var(--n-loading-color);
 `),z("base-selection-tags","min-height: var(--n-height);"),k("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),k("state-border",`
 z-index: 1;
 border-color: #0000;
 `),z("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[k("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),z("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[k("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),z("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[k("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),z("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),z("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[z("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[k("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),k("render-label",`
 color: var(--n-text-color);
 `)]),Le("disabled",[J("&:hover",[k("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),W("focus",[k("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),W("active",[k("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),z("base-selection-label","background-color: var(--n-color-active);"),z("base-selection-tags","background-color: var(--n-color-active);")])]),W("disabled","cursor: not-allowed;",[k("arrow",`
 color: var(--n-arrow-color-disabled);
 `),z("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[z("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),k("render-label",`
 color: var(--n-text-color-disabled);
 `)]),z("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),z("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),z("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[k("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),k("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>W(`${e}-status`,[k("state-border",`border: var(--n-border-${e});`),Le("disabled",[J("&:hover",[k("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),W("active",[k("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),z("base-selection-label",`background-color: var(--n-color-active-${e});`),z("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),W("focus",[k("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),z("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),z("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[J("&:last-child","padding-right: 0;"),z("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[k("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Vt=ee({name:"InternalSelection",props:Object.assign(Object.assign({},te.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=Ie(e),d=qe("InternalSelection",t,o),s=T(null),l=T(null),c=T(null),n=T(null),f=T(null),w=T(null),b=T(null),m=T(null),S=T(null),F=T(null),g=T(!1),y=T(!1),P=T(!1),C=te("InternalSelection","-internal-selection",Wt,po,e,K(e,"clsPrefix")),x=O(()=>e.clearable&&!e.disabled&&(P.value||e.active)),I=O(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),A=O(()=>{const i=e.selectedOption;if(i)return i[e.labelField]}),D=O(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function V(){var i;const{value:v}=s;if(v){const{value:_}=l;_&&(_.style.width=`${v.offsetWidth}px`,e.maxTagCount!=="responsive"&&((i=S.value)===null||i===void 0||i.sync({showAllItemsBeforeCalculate:!1})))}}function Z(){const{value:i}=F;i&&(i.style.display="none")}function U(){const{value:i}=F;i&&(i.style.display="inline-block")}ae(K(e,"active"),i=>{i||Z()}),ae(K(e,"pattern"),()=>{e.multiple&&Xe(V)});function q(i){const{onFocus:v}=e;v&&v(i)}function X(i){const{onBlur:v}=e;v&&v(i)}function u(i){const{onDeleteOption:v}=e;v&&v(i)}function p(i){const{onClear:v}=e;v&&v(i)}function R(i){const{onPatternInput:v}=e;v&&v(i)}function $(i){var v;(!i.relatedTarget||!(!((v=c.value)===null||v===void 0)&&v.contains(i.relatedTarget)))&&q(i)}function E(i){var v;!((v=c.value)===null||v===void 0)&&v.contains(i.relatedTarget)||X(i)}function L(i){p(i)}function M(){P.value=!0}function B(){P.value=!1}function j(i){!e.active||!e.filterable||i.target!==l.value&&i.preventDefault()}function N(i){u(i)}function G(i){if(i.key==="Backspace"&&!r.value&&!e.pattern.length){const{selectedOptions:v}=e;v!=null&&v.length&&N(v[v.length-1])}}const r=T(!1);let h=null;function H(i){const{value:v}=s;if(v){const _=i.target.value;v.textContent=_,V()}e.ignoreComposition&&r.value?h=i:R(i)}function oe(){r.value=!0}function xe(){r.value=!1,e.ignoreComposition&&R(h),h=null}function we(i){var v;y.value=!0,(v=e.onPatternFocus)===null||v===void 0||v.call(e,i)}function Ce(i){var v;y.value=!1,(v=e.onPatternBlur)===null||v===void 0||v.call(e,i)}function ye(){var i,v;if(e.filterable)y.value=!1,(i=w.value)===null||i===void 0||i.blur(),(v=l.value)===null||v===void 0||v.blur();else if(e.multiple){const{value:_}=n;_==null||_.blur()}else{const{value:_}=f;_==null||_.blur()}}function Se(){var i,v,_;e.filterable?(y.value=!1,(i=w.value)===null||i===void 0||i.focus()):e.multiple?(v=n.value)===null||v===void 0||v.focus():(_=f.value)===null||_===void 0||_.focus()}function ze(){const{value:i}=l;i&&(U(),i.focus())}function Fe(){const{value:i}=l;i&&i.blur()}function Re(i){const{value:v}=b;v&&v.setTextContent(`+${i}`)}function ke(){const{value:i}=m;return i}function $e(){return l.value}let ie=null;function le(){ie!==null&&window.clearTimeout(ie)}function Oe(){e.active||(le(),ie=window.setTimeout(()=>{D.value&&(g.value=!0)},100))}function Pe(){le()}function Te(i){i||(le(),g.value=!1)}ae(D,i=>{i||(g.value=!1)}),he(()=>{st(()=>{const i=w.value;i&&(e.disabled?i.removeAttribute("tabindex"):i.tabIndex=y.value?-1:0)})}),We(c,e.onResize);const{inlineThemeDisabled:de}=e,ce=O(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:v},self:{borderRadius:_,color:vo,placeholderColor:bo,textColor:go,paddingSingle:fo,paddingMultiple:mo,caretColor:xo,colorDisabled:wo,textColorDisabled:Co,placeholderColorDisabled:yo,colorActive:So,boxShadowFocus:zo,boxShadowActive:Fo,boxShadowHover:Ro,border:ko,borderFocus:$o,borderHover:Oo,borderActive:Po,arrowColor:To,arrowColorDisabled:Mo,loadingColor:Io,colorActiveWarning:Eo,boxShadowFocusWarning:Lo,boxShadowActiveWarning:Bo,boxShadowHoverWarning:Ho,borderWarning:No,borderFocusWarning:_o,borderHoverWarning:Do,borderActiveWarning:Ao,colorActiveError:jo,boxShadowFocusError:Wo,boxShadowActiveError:Vo,boxShadowHoverError:Ko,borderError:qo,borderFocusError:Go,borderHoverError:Zo,borderActiveError:Xo,clearColor:Yo,clearColorHover:Jo,clearColorPressed:Uo,clearSize:Qo,arrowSize:et,[Q("height",i)]:ot,[Q("fontSize",i)]:tt}}=C.value,ue=se(fo),pe=se(mo);return{"--n-bezier":v,"--n-border":ko,"--n-border-active":Po,"--n-border-focus":$o,"--n-border-hover":Oo,"--n-border-radius":_,"--n-box-shadow-active":Fo,"--n-box-shadow-focus":zo,"--n-box-shadow-hover":Ro,"--n-caret-color":xo,"--n-color":vo,"--n-color-active":So,"--n-color-disabled":wo,"--n-font-size":tt,"--n-height":ot,"--n-padding-single-top":ue.top,"--n-padding-multiple-top":pe.top,"--n-padding-single-right":ue.right,"--n-padding-multiple-right":pe.right,"--n-padding-single-left":ue.left,"--n-padding-multiple-left":pe.left,"--n-padding-single-bottom":ue.bottom,"--n-padding-multiple-bottom":pe.bottom,"--n-placeholder-color":bo,"--n-placeholder-color-disabled":yo,"--n-text-color":go,"--n-text-color-disabled":Co,"--n-arrow-color":To,"--n-arrow-color-disabled":Mo,"--n-loading-color":Io,"--n-color-active-warning":Eo,"--n-box-shadow-focus-warning":Lo,"--n-box-shadow-active-warning":Bo,"--n-box-shadow-hover-warning":Ho,"--n-border-warning":No,"--n-border-focus-warning":_o,"--n-border-hover-warning":Do,"--n-border-active-warning":Ao,"--n-color-active-error":jo,"--n-box-shadow-focus-error":Wo,"--n-box-shadow-active-error":Vo,"--n-box-shadow-hover-error":Ko,"--n-border-error":qo,"--n-border-focus-error":Go,"--n-border-hover-error":Zo,"--n-border-active-error":Xo,"--n-clear-size":Qo,"--n-clear-color":Yo,"--n-clear-color-hover":Jo,"--n-clear-color-pressed":Uo,"--n-arrow-size":et}}),Y=de?Ee("internal-selection",O(()=>e.size[0]),ce,e):void 0;return{mergedTheme:C,mergedClearable:x,mergedClsPrefix:o,rtlEnabled:d,patternInputFocused:y,filterablePlaceholder:I,label:A,selected:D,showTagsPanel:g,isComposing:r,counterRef:b,counterWrapperRef:m,patternInputMirrorRef:s,patternInputRef:l,selfRef:c,multipleElRef:n,singleElRef:f,patternInputWrapperRef:w,overflowRef:S,inputTagElRef:F,handleMouseDown:j,handleFocusin:$,handleClear:L,handleMouseEnter:M,handleMouseLeave:B,handleDeleteOption:N,handlePatternKeyDown:G,handlePatternInputInput:H,handlePatternInputBlur:Ce,handlePatternInputFocus:we,handleMouseEnterCounter:Oe,handleMouseLeaveCounter:Pe,handleFocusout:E,handleCompositionEnd:xe,handleCompositionStart:oe,onPopoverUpdateShow:Te,focus:Se,focusInput:ze,blur:ye,blurInput:Fe,updateCounter:Re,getCounter:ke,getTail:$e,renderLabel:e.renderLabel,cssVars:de?void 0:ce,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender}},render(){const{status:e,multiple:o,size:t,disabled:d,filterable:s,maxTagCount:l,bordered:c,clsPrefix:n,ellipsisTagPopoverProps:f,onRender:w,renderTag:b,renderLabel:m}=this;w==null||w();const S=l==="responsive",F=typeof l=="number",g=S||F,y=a(ft,null,{default:()=>a(zt,{clsPrefix:n,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var C,x;return(x=(C=this.$slots).arrow)===null||x===void 0?void 0:x.call(C)}})});let P;if(o){const{labelField:C}=this,x=p=>a("div",{class:`${n}-base-selection-tag-wrapper`,key:p.value},b?b({option:p,handleClose:()=>{this.handleDeleteOption(p)}}):a(De,{size:t,closable:!p.disabled,disabled:d,onClose:()=>{this.handleDeleteOption(p)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>m?m(p,!0):re(p[C],p,!0)})),I=()=>(F?this.selectedOptions.slice(0,l):this.selectedOptions).map(x),A=s?a("div",{class:`${n}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:d,value:this.pattern,autofocus:this.autofocus,class:`${n}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${n}-base-selection-input-tag__mirror`},this.pattern)):null,D=S?()=>a("div",{class:`${n}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(De,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:d})):void 0;let V;if(F){const p=this.selectedOptions.length-l;p>0&&(V=a("div",{class:`${n}-base-selection-tag-wrapper`,key:"__counter__"},a(De,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:d},{default:()=>`+${p}`})))}const Z=S?s?a(eo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:I,counter:D,tail:()=>A}):a(eo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:I,counter:D}):F&&V?I().concat(V):I(),U=g?()=>a("div",{class:`${n}-base-selection-popover`},S?I():this.selectedOptions.map(x)):void 0,q=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},f):null,X=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?a("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`},a("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)):null,u=s?a("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-tags`},Z,S?null:A,y):a("div",{ref:"multipleElRef",class:`${n}-base-selection-tags`,tabindex:d?void 0:0},Z,y);P=a(dt,null,g?a(ht,Object.assign({},q,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>u,default:U}):u,X)}else if(s){const C=this.pattern||this.isComposing,x=this.active?!C:!this.selected,I=this.active?!1:this.selected;P=a("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-label`,title:this.patternInputFocused?void 0:Ae(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${n}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:d,disabled:d,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),I?a("div",{class:`${n}-base-selection-label__render-label ${n}-base-selection-overlay`,key:"input"},a("div",{class:`${n}-base-selection-overlay__wrapper`},b?b({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):re(this.label,this.selectedOption,!0))):null,x?a("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${n}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,y)}else P=a("div",{ref:"singleElRef",class:`${n}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${n}-base-selection-input`,title:Ae(this.label),key:"input"},a("div",{class:`${n}-base-selection-input__content`},b?b({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):re(this.label,this.selectedOption,!0))):a("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)),y);return a("div",{ref:"selfRef",class:[`${n}-base-selection`,this.rtlEnabled&&`${n}-base-selection--rtl`,this.themeClass,e&&`${n}-base-selection--${e}-status`,{[`${n}-base-selection--active`]:this.active,[`${n}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${n}-base-selection--disabled`]:this.disabled,[`${n}-base-selection--multiple`]:this.multiple,[`${n}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},P,c?a("div",{class:`${n}-base-selection__border`}):null,c?a("div",{class:`${n}-base-selection__state-border`}):null)}});function me(e){return e.type==="group"}function ho(e){return e.type==="ignored"}function Kt(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function qt(e,o){return{getIsGroup:me,getIgnored:ho,getKey(t){return me(t)?t.name||t.key||"key-required":t[e]},getChildren(t){return t[o]}}}function Gt(e,o,t,d){if(!o)return e;function s(l){if(!Array.isArray(l))return[];const c=[];for(const n of l)if(me(n)){const f=s(n[d]);f.length&&c.push(Object.assign({},n,{[d]:f}))}else{if(ho(n))continue;o(t,n)&&c.push(n)}return c}return s(e)}function Zt(e,o,t){const d=new Map;return e.forEach(s=>{me(s)?s[t].forEach(l=>{d.set(l[o],l)}):d.set(s[o],s)}),d}export{io as F,ao as N,ro as V,po as a,lo as b,_t as c,qt as d,Ve as e,Vt as f,Ae as g,Zt as h,so as i,Gt as j,ge as m,Kt as p,We as u};
