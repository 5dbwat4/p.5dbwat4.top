import{v as X,a2 as ae,Y as Ko,a0 as Uo,i as O,aZ as M,J as a,W as qo,X as Ie,af as Go,_ as qe,O as Ee,b3 as q,az as le,aa as Be,aA as Yo,F as Zo}from"./runtime-core.esm-bundler-c066f4bf.js";import{T as Xo}from"./runtime-dom.esm-bundler-caa8590e.js";import{d as Ge,e as fe,i as _e,f as Jo,p as Qo,N as et}from"./Popover-fc210933.js";import{u as he,a as ot,r as tt}from"./use-memo-b9add725.js";import{V as He,e as Ae,s as nt,d as te,N as it,W as rt}from"./Scrollbar-431c7fad.js";import{N as Ye}from"./Icon-13ca7aa7.js";import{H as Ze,a as Le,d as z,f as k,e as Z,u as lt,g as ne,i as at,h as Ne,t as J,c as Xe,l as j,p as Me,o as oe}from"./light-185f79ed.js";import{f as st}from"./fade-in-scale-up.cssr-3d9943f6.js";import{N as dt}from"./Button-0891d5bc.js";import{d as Oe,p as ce,g as Fe}from"./Close-869cd549.js";import{b as ct}from"./next-frame-once-7035a838.js";import{a as ut,h as We}from"./create-e19b3023.js";import{u as ft}from"./use-locale-c50998bd.js";import{a as ht}from"./Suffix-f17523aa.js";import{N as ke}from"./Tag-976b884f.js";import{g as vt}from"./attribute-2ee9e579.js";function Pe(e){const o=e.filter(t=>t!==void 0);if(o.length!==0)return o.length===1?o[0]:t=>{e.forEach(r=>{r&&r(t)})}}function De(e){return e&-e}class pt{constructor(o,t){this.l=o,this.min=t;const r=new Array(o+1);for(let s=0;s<o+1;++s)r[s]=0;this.ft=r}add(o,t){if(t===0)return;const{l:r,ft:s}=this;for(o+=1;o<=r;)s[o]+=t,o+=De(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:t,min:r,l:s}=this;if(o>s)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let d=o*r;for(;o>0;)d+=t[o],o-=De(o);return d}getBound(o){let t=0,r=this.l;for(;r>t;){const s=Math.floor((t+r)/2),d=this.sum(s);if(d>o){r=s;continue}else if(d<o){if(t===s)return this.sum(t+1)<=o?t+1:s;t=s}else return s}return t}}let ue;function bt(){return ue===void 0&&("matchMedia"in window?ue=window.matchMedia("(pointer:coarse)").matches:ue=!1),ue}let $e;function je(){return $e===void 0&&($e="chrome"in window?window.devicePixelRatio:1),$e}const gt=fe(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[fe("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[fe("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),mt=X({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=Ze();gt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ge,ssr:o}),ae(()=>{const{defaultScrollIndex:c,defaultScrollKey:h}=e;c!=null?m({index:c}):h!=null&&m({key:h})});let t=!1,r=!1;Ko(()=>{if(t=!1,!r){r=!0;return}m({top:x.value,left:p})}),Uo(()=>{t=!0,r||(r=!0)});const s=O(()=>{const c=new Map,{keyField:h}=e;return e.items.forEach((T,E)=>{c.set(T[h],E)}),c}),d=M(null),u=M(void 0),n=new Map,w=O(()=>{const{items:c,itemSize:h,keyField:T}=e,E=new pt(c.length,h);return c.forEach((_,L)=>{const F=_[T],N=n.get(F);N!==void 0&&E.add(L,N)}),E}),b=M(0);let p=0;const x=M(0),C=he(()=>Math.max(w.value.getBound(x.value-Oe(e.paddingTop))-1,0)),R=O(()=>{const{value:c}=u;if(c===void 0)return[];const{items:h,itemSize:T}=e,E=C.value,_=Math.min(E+Math.ceil(c/T+1),h.length-1),L=[];for(let F=E;F<=_;++F)L.push(h[F]);return L}),m=(c,h)=>{if(typeof c=="number"){g(c,h,"auto");return}const{left:T,top:E,index:_,key:L,position:F,behavior:N,debounce:i=!0}=c;if(T!==void 0||E!==void 0)g(T,E,N);else if(_!==void 0)y(_,N,i);else if(L!==void 0){const f=s.value.get(L);f!==void 0&&y(f,N,i)}else F==="bottom"?g(0,Number.MAX_SAFE_INTEGER,N):F==="top"&&g(0,0,N)};let S,P=null;function y(c,h,T){const{value:E}=w,_=E.sum(c)+Oe(e.paddingTop);if(!T)d.value.scrollTo({left:0,top:_,behavior:h});else{S=c,P!==null&&window.clearTimeout(P),P=window.setTimeout(()=>{S=void 0,P=null},16);const{scrollTop:L,offsetHeight:F}=d.value;if(_>L){const N=E.get(c);_+N<=L+F||d.value.scrollTo({left:0,top:_+N-F,behavior:h})}else d.value.scrollTo({left:0,top:_,behavior:h})}}function g(c,h,T){d.value.scrollTo({left:c,top:h,behavior:T})}function I(c,h){var T,E,_;if(t||e.ignoreItemResize||U(h.target))return;const{value:L}=w,F=s.value.get(c),N=L.get(F),i=(_=(E=(T=h.borderBoxSize)===null||T===void 0?void 0:T[0])===null||E===void 0?void 0:E.blockSize)!==null&&_!==void 0?_:h.contentRect.height;if(i===N)return;i-e.itemSize===0?n.delete(c):n.set(c,i-e.itemSize);const $=i-N;if($===0)return;L.add(F,$);const D=d.value;if(D!=null){if(S===void 0){const Q=L.sum(F);D.scrollTop>Q&&D.scrollBy(0,$)}else if(F<S)D.scrollBy(0,$);else if(F===S){const Q=L.sum(F);i+Q>D.scrollTop+D.offsetHeight&&D.scrollBy(0,$)}G()}b.value++}const A=!bt();let W=!1;function H(c){var h;(h=e.onScroll)===null||h===void 0||h.call(e,c),(!A||!W)&&G()}function V(c){var h;if((h=e.onWheel)===null||h===void 0||h.call(e,c),A){const T=d.value;if(T!=null){if(c.deltaX===0&&(T.scrollTop===0&&c.deltaY<=0||T.scrollTop+T.offsetHeight>=T.scrollHeight&&c.deltaY>=0))return;c.preventDefault(),T.scrollTop+=c.deltaY/je(),T.scrollLeft+=c.deltaX/je(),G(),W=!0,ct(()=>{W=!1})}}}function K(c){if(t||U(c.target)||c.contentRect.height===u.value)return;u.value=c.contentRect.height;const{onResize:h}=e;h!==void 0&&h(c)}function G(){const{value:c}=d;c!=null&&(x.value=c.scrollTop,p=c.scrollLeft)}function U(c){let h=c;for(;h!==null;){if(h.style.display==="none")return!0;h=h.parentElement}return!1}return{listHeight:u,listStyle:{overflow:"auto"},keyToIndex:s,itemsStyle:O(()=>{const{itemResizable:c}=e,h=ce(w.value.sum());return b.value,[e.itemsStyle,{boxSizing:"content-box",height:c?"":h,minHeight:c?h:"",paddingTop:ce(e.paddingTop),paddingBottom:ce(e.paddingBottom)}]}),visibleItemsStyle:O(()=>(b.value,{transform:`translateY(${ce(w.value.sum(C.value))})`})),viewportItems:R,listElRef:d,itemsElRef:M(null),scrollTo:m,handleListResize:K,handleListScroll:H,handleListWheel:V,handleItemResize:I}},render(){const{itemResizable:e,keyField:o,keyToIndex:t,visibleItemsTag:r}=this;return a(He,{onResize:this.handleListResize},{default:()=>{var s,d;return a("div",qo(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?a("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[a(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(u=>{const n=u[o],w=t.get(n),b=this.$slots.default({item:u,index:w})[0];return e?a(He,{key:n,onResize:p=>this.handleItemResize(n,p)},{default:()=>b}):(b.key=n,b)})})]):(d=(s=this.$slots).empty)===null||d===void 0?void 0:d.call(s)])}})}}),ee="v-hidden",xt=fe("[v-hidden]",{display:"none!important"}),Ve=X({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const t=M(null),r=M(null);function s(){const{value:u}=t,{getCounter:n,getTail:w}=e;let b;if(n!==void 0?b=n():b=r.value,!u||!b)return;b.hasAttribute(ee)&&b.removeAttribute(ee);const{children:p}=u,x=u.offsetWidth,C=[],R=o.tail?w?.():null;let m=R?R.offsetWidth:0,S=!1;const P=u.children.length-(o.tail?1:0);for(let g=0;g<P-1;++g){if(g<0)continue;const I=p[g];if(S){I.hasAttribute(ee)||I.setAttribute(ee,"");continue}else I.hasAttribute(ee)&&I.removeAttribute(ee);const A=I.offsetWidth;if(m+=A,C[g]=A,m>x){const{updateCounter:W}=e;for(let H=g;H>=0;--H){const V=P-1-H;W!==void 0?W(V):b.textContent=`${V}`;const K=b.offsetWidth;if(m-=C[H],m+K<=x||H===0){S=!0,g=H-1,R&&(g===-1?(R.style.maxWidth=`${x-K}px`,R.style.boxSizing="border-box"):R.style.maxWidth="");break}}}}const{onUpdateOverflow:y}=e;S?y!==void 0&&y(!0):(y!==void 0&&y(!1),b.setAttribute(ee,""))}const d=Ze();return xt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ge,ssr:d}),ae(s),{selfRef:t,counterRef:r,sync:s}},render(){const{$slots:e}=this;return Ie(this.sync),a("div",{class:"v-overflow",ref:"selfRef"},[Go(e,"default"),e.counter?e.counter():a("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Je(e,o){o&&(ae(()=>{const{value:t}=e;t&&Ae.registerHandler(t,o)}),qe(()=>{const{value:t}=e;t&&Ae.unregisterHandler(t)}))}const wt=X({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),yt=X({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Ct=X({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),St={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},zt=e=>{const{textColorDisabled:o,iconColor:t,textColor2:r,fontSizeSmall:s,fontSizeMedium:d,fontSizeLarge:u,fontSizeHuge:n}=e;return Object.assign(Object.assign({},St),{fontSizeSmall:s,fontSizeMedium:d,fontSizeLarge:u,fontSizeHuge:n,textColor:o,iconColor:t,extraTextColor:r})},Rt={name:"Empty",common:Le,self:zt},Qe=Rt,Tt=z("empty",`
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
 `,[Z("+",[k("description",`
 margin-top: 8px;
 `)])]),k("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),k("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Ft=Object.assign(Object.assign({},ne.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),kt=X({name:"Empty",props:Ft,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=lt(e),r=ne("Empty","-empty",Tt,Qe,e,o),{localeRef:s}=ft("Empty"),d=Ee(at,null),u=O(()=>{var p,x,C;return(p=e.description)!==null&&p!==void 0?p:(C=(x=d?.mergedComponentPropsRef.value)===null||x===void 0?void 0:x.Empty)===null||C===void 0?void 0:C.description}),n=O(()=>{var p,x;return((x=(p=d?.mergedComponentPropsRef.value)===null||p===void 0?void 0:p.Empty)===null||x===void 0?void 0:x.renderIcon)||(()=>a(yt,null))}),w=O(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:x},self:{[J("iconSize",p)]:C,[J("fontSize",p)]:R,textColor:m,iconColor:S,extraTextColor:P}}=r.value;return{"--n-icon-size":C,"--n-font-size":R,"--n-bezier":x,"--n-text-color":m,"--n-icon-color":S,"--n-extra-text-color":P}}),b=t?Ne("empty",O(()=>{let p="";const{size:x}=e;return p+=x[0],p}),w,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:n,localizedDescription:O(()=>u.value||s.value.description),cssVars:t?void 0:w,themeClass:b?.themeClass,onRender:b?.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:t}=this;return t?.(),a("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${o}-empty__icon`},e.icon?e.icon():a(Ye,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${o}-empty__extra`},e.extra()):null)}}),Pt={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},$t=e=>{const{borderRadius:o,popoverColor:t,textColor3:r,dividerColor:s,textColor2:d,primaryColorPressed:u,textColorDisabled:n,primaryColor:w,opacityDisabled:b,hoverColor:p,fontSizeSmall:x,fontSizeMedium:C,fontSizeLarge:R,fontSizeHuge:m,heightSmall:S,heightMedium:P,heightLarge:y,heightHuge:g}=e;return Object.assign(Object.assign({},Pt),{optionFontSizeSmall:x,optionFontSizeMedium:C,optionFontSizeLarge:R,optionFontSizeHuge:m,optionHeightSmall:S,optionHeightMedium:P,optionHeightLarge:y,optionHeightHuge:g,borderRadius:o,color:t,groupHeaderTextColor:r,actionDividerColor:s,optionTextColor:d,optionTextColorPressed:u,optionTextColorDisabled:n,optionTextColorActive:w,optionOpacityDisabled:b,optionCheckColor:w,optionColorPending:p,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:p,actionTextColor:d,loadingColor:w})},Mt=Xe({name:"InternalSelectMenu",common:Le,peers:{Scrollbar:nt,Empty:Qe},self:$t}),Ot=Mt;function It(e,o){return a(Xo,{name:"fade-in-scale-up-transition"},{default:()=>e?a(Ye,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>a(wt)}):null})}const Ke=X({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:t,multipleRef:r,valueSetRef:s,renderLabelRef:d,renderOptionRef:u,labelFieldRef:n,valueFieldRef:w,showCheckmarkRef:b,nodePropsRef:p,handleOptionClick:x,handleOptionMouseEnter:C}=Ee(_e),R=he(()=>{const{value:y}=t;return y?e.tmNode.key===y.key:!1});function m(y){const{tmNode:g}=e;g.disabled||x(y,g)}function S(y){const{tmNode:g}=e;g.disabled||C(y,g)}function P(y){const{tmNode:g}=e,{value:I}=R;g.disabled||I||C(y,g)}return{multiple:r,isGrouped:he(()=>{const{tmNode:y}=e,{parent:g}=y;return g&&g.rawNode.type==="group"}),showCheckmark:b,nodeProps:p,isPending:R,isSelected:he(()=>{const{value:y}=o,{value:g}=r;if(y===null)return!1;const I=e.tmNode.rawNode[w.value];if(g){const{value:A}=s;return A.has(I)}else return y===I}),labelField:n,renderLabel:d,renderOption:u,handleMouseMove:P,handleMouseEnter:S,handleClick:m}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:t,isPending:r,isGrouped:s,showCheckmark:d,nodeProps:u,renderOption:n,renderLabel:w,handleClick:b,handleMouseEnter:p,handleMouseMove:x}=this,C=It(t,e),R=w?[w(o,t),d&&C]:[te(o[this.labelField],o,t),d&&C],m=u?.(o),S=a("div",Object.assign({},m,{class:[`${e}-base-select-option`,o.class,m?.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:d}],style:[m?.style||"",o.style||""],onClick:Pe([b,m?.onClick]),onMouseenter:Pe([p,m?.onMouseenter]),onMousemove:Pe([x,m?.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},R));return o.render?o.render({node:S,option:o,selected:t}):n?n({node:S,option:o,selected:t}):S}}),Ue=X({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o,labelFieldRef:t,nodePropsRef:r}=Ee(_e);return{labelField:t,nodeProps:r,renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:t,nodeProps:r,tmNode:{rawNode:s}}=this,d=r?.(s),u=o?o(s,!1):te(s[this.labelField],s,!1),n=a("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d?.class]}),u);return s.render?s.render({node:n,option:s}):t?t({node:n,option:s,selected:!1}):n}}),Et=z("base-select-menu",`
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
 `,[j("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Z("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Z("&:active",`
 color: var(--n-option-text-color-pressed);
 `),j("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),j("pending",[Z("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),j("selected",`
 color: var(--n-option-text-color-active);
 `,[Z("&::before",`
 background-color: var(--n-option-color-active);
 `),j("pending",[Z("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),j("disabled",`
 cursor: not-allowed;
 `,[Me("selected",`
 color: var(--n-option-text-color-disabled);
 `),j("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),k("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[st({enterScale:"0.5"})])])]),tn=X({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ne.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const o=ne("InternalSelectMenu","-internal-select-menu",Et,Ot,e,q(e,"clsPrefix")),t=M(null),r=M(null),s=M(null),d=O(()=>e.treeMate.getFlattenedNodes()),u=O(()=>ut(d.value)),n=M(null);function w(){const{treeMate:i}=e;let f=null;const{value:$}=e;$===null?f=i.getFirstAvailableNode():(e.multiple?f=i.getNode(($||[])[($||[]).length-1]):f=i.getNode($),(!f||f.disabled)&&(f=i.getFirstAvailableNode())),c(f||null)}function b(){const{value:i}=n;i&&!e.treeMate.getNode(i.key)&&(n.value=null)}let p;le(()=>e.show,i=>{i?p=le(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?w():b(),Ie(h)):b()},{immediate:!0}):p?.()},{immediate:!0}),qe(()=>{p?.()});const x=O(()=>Oe(o.value.self[J("optionHeight",e.size)])),C=O(()=>Fe(o.value.self[J("padding",e.size)])),R=O(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),m=O(()=>{const i=d.value;return i&&i.length===0});function S(i){const{onToggle:f}=e;f&&f(i)}function P(i){const{onScroll:f}=e;f&&f(i)}function y(i){var f;(f=s.value)===null||f===void 0||f.sync(),P(i)}function g(){var i;(i=s.value)===null||i===void 0||i.sync()}function I(){const{value:i}=n;return i||null}function A(i,f){f.disabled||c(f,!1)}function W(i,f){f.disabled||S(f)}function H(i){var f;We(i,"action")||(f=e.onKeyup)===null||f===void 0||f.call(e,i)}function V(i){var f;We(i,"action")||(f=e.onKeydown)===null||f===void 0||f.call(e,i)}function K(i){var f;(f=e.onMousedown)===null||f===void 0||f.call(e,i),!e.focusable&&i.preventDefault()}function G(){const{value:i}=n;i&&c(i.getNext({loop:!0}),!0)}function U(){const{value:i}=n;i&&c(i.getPrev({loop:!0}),!0)}function c(i,f=!1){n.value=i,f&&h()}function h(){var i,f;const $=n.value;if(!$)return;const D=u.value($.key);D!==null&&(e.virtualScroll?(i=r.value)===null||i===void 0||i.scrollTo({index:D}):(f=s.value)===null||f===void 0||f.scrollTo({index:D,elSize:x.value}))}function T(i){var f,$;!((f=t.value)===null||f===void 0)&&f.contains(i.target)&&(($=e.onFocus)===null||$===void 0||$.call(e,i))}function E(i){var f,$;!((f=t.value)===null||f===void 0)&&f.contains(i.relatedTarget)||($=e.onBlur)===null||$===void 0||$.call(e,i)}Be(_e,{handleOptionMouseEnter:A,handleOptionClick:W,valueSetRef:R,pendingTmNodeRef:n,nodePropsRef:q(e,"nodeProps"),showCheckmarkRef:q(e,"showCheckmark"),multipleRef:q(e,"multiple"),valueRef:q(e,"value"),renderLabelRef:q(e,"renderLabel"),renderOptionRef:q(e,"renderOption"),labelFieldRef:q(e,"labelField"),valueFieldRef:q(e,"valueField")}),Be(Jo,t),ae(()=>{const{value:i}=s;i&&i.sync()});const _=O(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:f},self:{height:$,borderRadius:D,color:Q,groupHeaderTextColor:pe,actionDividerColor:be,optionTextColorPressed:ge,optionTextColor:me,optionTextColorDisabled:xe,optionTextColorActive:we,optionOpacityDisabled:ye,optionCheckColor:Ce,actionTextColor:Se,optionColorPending:ie,optionColorActive:re,loadingColor:ze,loadingSize:Re,optionColorActivePending:Te,[J("optionFontSize",i)]:se,[J("optionHeight",i)]:de,[J("optionPadding",i)]:Y}}=o.value;return{"--n-height":$,"--n-action-divider-color":be,"--n-action-text-color":Se,"--n-bezier":f,"--n-border-radius":D,"--n-color":Q,"--n-option-font-size":se,"--n-group-header-text-color":pe,"--n-option-check-color":Ce,"--n-option-color-pending":ie,"--n-option-color-active":re,"--n-option-color-active-pending":Te,"--n-option-height":de,"--n-option-opacity-disabled":ye,"--n-option-text-color":me,"--n-option-text-color-active":we,"--n-option-text-color-disabled":xe,"--n-option-text-color-pressed":ge,"--n-option-padding":Y,"--n-option-padding-left":Fe(Y,"left"),"--n-option-padding-right":Fe(Y,"right"),"--n-loading-color":ze,"--n-loading-size":Re}}),{inlineThemeDisabled:L}=e,F=L?Ne("internal-select-menu",O(()=>e.size[0]),_,e):void 0,N={selfRef:t,next:G,prev:U,getPendingTmNode:I};return Je(t,e.onResize),Object.assign({mergedTheme:o,virtualListRef:r,scrollbarRef:s,itemSize:x,padding:C,flattenedNodes:d,empty:m,virtualListContainer(){const{value:i}=r;return i?.listElRef},virtualListContent(){const{value:i}=r;return i?.itemsElRef},doScroll:P,handleFocusin:T,handleFocusout:E,handleKeyUp:H,handleKeyDown:V,handleMouseDown:K,handleVirtualListResize:g,handleVirtualListScroll:y,cssVars:L?void 0:_,themeClass:F?.themeClass,onRender:F?.onRender},N)},render(){const{$slots:e,virtualScroll:o,clsPrefix:t,mergedTheme:r,themeClass:s,onRender:d}=this;return d?.(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,s,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?a("div",{class:`${t}-base-select-menu__loading`},a(dt,{clsPrefix:t,strokeWidth:20})):this.empty?a("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},tt(e.empty,()=>[a(kt,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty})])):a(it,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},{default:()=>o?a(mt,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:u})=>u.isGroup?a(Ue,{key:u.key,clsPrefix:t,tmNode:u}):u.ignored?null:a(Ke,{clsPrefix:t,key:u.key,tmNode:u})}):a("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(u=>u.isGroup?a(Ue,{key:u.key,clsPrefix:t,tmNode:u}):a(Ke,{clsPrefix:t,key:u.key,tmNode:u})))}),ot(e.action,u=>u&&[a("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},u),a(Ct,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),_t={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},Lt=e=>{const{borderRadius:o,textColor2:t,textColorDisabled:r,inputColor:s,inputColorDisabled:d,primaryColor:u,primaryColorHover:n,warningColor:w,warningColorHover:b,errorColor:p,errorColorHover:x,borderColor:C,iconColor:R,iconColorDisabled:m,clearColor:S,clearColorHover:P,clearColorPressed:y,placeholderColor:g,placeholderColorDisabled:I,fontSizeTiny:A,fontSizeSmall:W,fontSizeMedium:H,fontSizeLarge:V,heightTiny:K,heightSmall:G,heightMedium:U,heightLarge:c}=e;return Object.assign(Object.assign({},_t),{fontSizeTiny:A,fontSizeSmall:W,fontSizeMedium:H,fontSizeLarge:V,heightTiny:K,heightSmall:G,heightMedium:U,heightLarge:c,borderRadius:o,textColor:t,textColorDisabled:r,placeholderColor:g,placeholderColorDisabled:I,color:s,colorDisabled:d,colorActive:s,border:`1px solid ${C}`,borderHover:`1px solid ${n}`,borderActive:`1px solid ${u}`,borderFocus:`1px solid ${n}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${oe(u,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${oe(u,{alpha:.2})}`,caretColor:u,arrowColor:R,arrowColorDisabled:m,loadingColor:u,borderWarning:`1px solid ${w}`,borderHoverWarning:`1px solid ${b}`,borderActiveWarning:`1px solid ${w}`,borderFocusWarning:`1px solid ${b}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${oe(w,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${oe(w,{alpha:.2})}`,colorActiveWarning:s,caretColorWarning:w,borderError:`1px solid ${p}`,borderHoverError:`1px solid ${x}`,borderActiveError:`1px solid ${p}`,borderFocusError:`1px solid ${x}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${oe(p,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${oe(p,{alpha:.2})}`,colorActiveError:s,caretColorError:p,clearColor:S,clearColorHover:P,clearColorPressed:y})},Nt=Xe({name:"InternalSelection",common:Le,peers:{Popover:Qo},self:Lt}),Bt=Nt,Ht=Z([z("base-selection",`
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
 `)]),Me("disabled",[Z("&:hover",[k("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),j("focus",[k("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),j("active",[k("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),z("base-selection-label","background-color: var(--n-color-active);"),z("base-selection-tags","background-color: var(--n-color-active);")])]),j("disabled","cursor: not-allowed;",[k("arrow",`
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
 `)]),["warning","error"].map(e=>j(`${e}-status`,[k("state-border",`border: var(--n-border-${e});`),Me("disabled",[Z("&:hover",[k("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),j("active",[k("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),z("base-selection-label",`background-color: var(--n-color-active-${e});`),z("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),j("focus",[k("state-border",`
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
 `,[Z("&:last-child","padding-right: 0;"),z("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[k("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),nn=X({name:"InternalSelection",props:Object.assign(Object.assign({},ne.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const o=M(null),t=M(null),r=M(null),s=M(null),d=M(null),u=M(null),n=M(null),w=M(null),b=M(null),p=M(null),x=M(!1),C=M(!1),R=M(!1),m=ne("InternalSelection","-internal-selection",Ht,Bt,e,q(e,"clsPrefix")),S=O(()=>e.clearable&&!e.disabled&&(R.value||e.active)),P=O(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):te(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),y=O(()=>{const l=e.selectedOption;if(l)return l[e.labelField]}),g=O(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function I(){var l;const{value:v}=o;if(v){const{value:B}=t;B&&(B.style.width=`${v.offsetWidth}px`,e.maxTagCount!=="responsive"&&((l=b.value)===null||l===void 0||l.sync()))}}function A(){const{value:l}=p;l&&(l.style.display="none")}function W(){const{value:l}=p;l&&(l.style.display="inline-block")}le(q(e,"active"),l=>{l||A()}),le(q(e,"pattern"),()=>{e.multiple&&Ie(I)});function H(l){const{onFocus:v}=e;v&&v(l)}function V(l){const{onBlur:v}=e;v&&v(l)}function K(l){const{onDeleteOption:v}=e;v&&v(l)}function G(l){const{onClear:v}=e;v&&v(l)}function U(l){const{onPatternInput:v}=e;v&&v(l)}function c(l){var v;(!l.relatedTarget||!(!((v=r.value)===null||v===void 0)&&v.contains(l.relatedTarget)))&&H(l)}function h(l){var v;!((v=r.value)===null||v===void 0)&&v.contains(l.relatedTarget)||V(l)}function T(l){G(l)}function E(){R.value=!0}function _(){R.value=!1}function L(l){!e.active||!e.filterable||l.target!==t.value&&l.preventDefault()}function F(l){K(l)}function N(l){if(l.key==="Backspace"&&!i.value&&!e.pattern.length){const{selectedOptions:v}=e;v?.length&&F(v[v.length-1])}}const i=M(!1);let f=null;function $(l){const{value:v}=o;if(v){const B=l.target.value;v.textContent=B,I()}e.ignoreComposition&&i.value?f=l:U(l)}function D(){i.value=!0}function Q(){i.value=!1,e.ignoreComposition&&U(f),f=null}function pe(l){var v;C.value=!0,(v=e.onPatternFocus)===null||v===void 0||v.call(e,l)}function be(l){var v;C.value=!1,(v=e.onPatternBlur)===null||v===void 0||v.call(e,l)}function ge(){var l,v;if(e.filterable)C.value=!1,(l=u.value)===null||l===void 0||l.blur(),(v=t.value)===null||v===void 0||v.blur();else if(e.multiple){const{value:B}=s;B?.blur()}else{const{value:B}=d;B?.blur()}}function me(){var l,v,B;e.filterable?(C.value=!1,(l=u.value)===null||l===void 0||l.focus()):e.multiple?(v=s.value)===null||v===void 0||v.focus():(B=d.value)===null||B===void 0||B.focus()}function xe(){const{value:l}=t;l&&(W(),l.focus())}function we(){const{value:l}=t;l&&l.blur()}function ye(l){const{value:v}=n;v&&v.setTextContent(`+${l}`)}function Ce(){const{value:l}=w;return l}function Se(){return t.value}let ie=null;function re(){ie!==null&&window.clearTimeout(ie)}function ze(){e.disabled||e.active||(re(),ie=window.setTimeout(()=>{g.value&&(x.value=!0)},100))}function Re(){re()}function Te(l){l||(re(),x.value=!1)}le(g,l=>{l||(x.value=!1)}),ae(()=>{Yo(()=>{const l=u.value;l&&(l.tabIndex=e.disabled||C.value?-1:0)})}),Je(r,e.onResize);const{inlineThemeDisabled:se}=e,de=O(()=>{const{size:l}=e,{common:{cubicBezierEaseInOut:v},self:{borderRadius:B,color:oo,placeholderColor:to,textColor:no,paddingSingle:io,paddingMultiple:ro,caretColor:lo,colorDisabled:ao,textColorDisabled:so,placeholderColorDisabled:co,colorActive:uo,boxShadowFocus:fo,boxShadowActive:ho,boxShadowHover:vo,border:po,borderFocus:bo,borderHover:go,borderActive:mo,arrowColor:xo,arrowColorDisabled:wo,loadingColor:yo,colorActiveWarning:Co,boxShadowFocusWarning:So,boxShadowActiveWarning:zo,boxShadowHoverWarning:Ro,borderWarning:To,borderFocusWarning:Fo,borderHoverWarning:ko,borderActiveWarning:Po,colorActiveError:$o,boxShadowFocusError:Mo,boxShadowActiveError:Oo,boxShadowHoverError:Io,borderError:Eo,borderFocusError:_o,borderHoverError:Lo,borderActiveError:No,clearColor:Bo,clearColorHover:Ho,clearColorPressed:Ao,clearSize:Wo,arrowSize:Do,[J("height",l)]:jo,[J("fontSize",l)]:Vo}}=m.value;return{"--n-bezier":v,"--n-border":po,"--n-border-active":mo,"--n-border-focus":bo,"--n-border-hover":go,"--n-border-radius":B,"--n-box-shadow-active":ho,"--n-box-shadow-focus":fo,"--n-box-shadow-hover":vo,"--n-caret-color":lo,"--n-color":oo,"--n-color-active":uo,"--n-color-disabled":ao,"--n-font-size":Vo,"--n-height":jo,"--n-padding-single":io,"--n-padding-multiple":ro,"--n-placeholder-color":to,"--n-placeholder-color-disabled":co,"--n-text-color":no,"--n-text-color-disabled":so,"--n-arrow-color":xo,"--n-arrow-color-disabled":wo,"--n-loading-color":yo,"--n-color-active-warning":Co,"--n-box-shadow-focus-warning":So,"--n-box-shadow-active-warning":zo,"--n-box-shadow-hover-warning":Ro,"--n-border-warning":To,"--n-border-focus-warning":Fo,"--n-border-hover-warning":ko,"--n-border-active-warning":Po,"--n-color-active-error":$o,"--n-box-shadow-focus-error":Mo,"--n-box-shadow-active-error":Oo,"--n-box-shadow-hover-error":Io,"--n-border-error":Eo,"--n-border-focus-error":_o,"--n-border-hover-error":Lo,"--n-border-active-error":No,"--n-clear-size":Wo,"--n-clear-color":Bo,"--n-clear-color-hover":Ho,"--n-clear-color-pressed":Ao,"--n-arrow-size":Do}}),Y=se?Ne("internal-selection",O(()=>e.size[0]),de,e):void 0;return{mergedTheme:m,mergedClearable:S,patternInputFocused:C,filterablePlaceholder:P,label:y,selected:g,showTagsPanel:x,isComposing:i,counterRef:n,counterWrapperRef:w,patternInputMirrorRef:o,patternInputRef:t,selfRef:r,multipleElRef:s,singleElRef:d,patternInputWrapperRef:u,overflowRef:b,inputTagElRef:p,handleMouseDown:L,handleFocusin:c,handleClear:T,handleMouseEnter:E,handleMouseLeave:_,handleDeleteOption:F,handlePatternKeyDown:N,handlePatternInputInput:$,handlePatternInputBlur:be,handlePatternInputFocus:pe,handleMouseEnterCounter:ze,handleMouseLeaveCounter:Re,handleFocusout:h,handleCompositionEnd:Q,handleCompositionStart:D,onPopoverUpdateShow:Te,focus:me,focusInput:xe,blur:ge,blurInput:we,updateCounter:ye,getCounter:Ce,getTail:Se,renderLabel:e.renderLabel,cssVars:se?void 0:de,themeClass:Y?.themeClass,onRender:Y?.onRender}},render(){const{status:e,multiple:o,size:t,disabled:r,filterable:s,maxTagCount:d,bordered:u,clsPrefix:n,onRender:w,renderTag:b,renderLabel:p}=this;w?.();const x=d==="responsive",C=typeof d=="number",R=x||C,m=a(rt,null,{default:()=>a(ht,{clsPrefix:n,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var P,y;return(y=(P=this.$slots).arrow)===null||y===void 0?void 0:y.call(P)}})});let S;if(o){const{labelField:P}=this,y=h=>a("div",{class:`${n}-base-selection-tag-wrapper`,key:h.value},b?b({option:h,handleClose:()=>{this.handleDeleteOption(h)}}):a(ke,{size:t,closable:!h.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(h)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(h,!0):te(h[P],h,!0)})),g=()=>(C?this.selectedOptions.slice(0,d):this.selectedOptions).map(y),I=s?a("div",{class:`${n}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${n}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${n}-base-selection-input-tag__mirror`},this.pattern)):null,A=x?()=>a("div",{class:`${n}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(ke,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0;let W;if(C){const h=this.selectedOptions.length-d;h>0&&(W=a("div",{class:`${n}-base-selection-tag-wrapper`,key:"__counter__"},a(ke,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${h}`})))}const H=x?s?a(Ve,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:g,counter:A,tail:()=>I}):a(Ve,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:g,counter:A}):C?g().concat(W):g(),V=R?()=>a("div",{class:`${n}-base-selection-popover`},x?g():this.selectedOptions.map(y)):void 0,K=R?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,U=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`},a("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)):null,c=s?a("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-tags`},H,x?null:I,m):a("div",{ref:"multipleElRef",class:`${n}-base-selection-tags`,tabindex:r?void 0:0},H,m);S=a(Zo,null,R?a(et,Object.assign({},K,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>c,default:V}):c,U)}else if(s){const P=this.pattern||this.isComposing,y=this.active?!P:!this.selected,g=this.active?!1:this.selected;S=a("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-label`},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${n}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),g?a("div",{class:`${n}-base-selection-label__render-label ${n}-base-selection-overlay`,key:"input"},a("div",{class:`${n}-base-selection-overlay__wrapper`},b?b({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):te(this.label,this.selectedOption,!0))):null,y?a("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${n}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,m)}else S=a("div",{ref:"singleElRef",class:`${n}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${n}-base-selection-input`,title:vt(this.label),key:"input"},a("div",{class:`${n}-base-selection-input__content`},b?b({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):te(this.label,this.selectedOption,!0))):a("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)),m);return a("div",{ref:"selfRef",class:[`${n}-base-selection`,this.themeClass,e&&`${n}-base-selection--${e}-status`,{[`${n}-base-selection--active`]:this.active,[`${n}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${n}-base-selection--disabled`]:this.disabled,[`${n}-base-selection--multiple`]:this.multiple,[`${n}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},S,u?a("div",{class:`${n}-base-selection__border`}):null,u?a("div",{class:`${n}-base-selection__state-border`}):null)}});function ve(e){return e.type==="group"}function eo(e){return e.type==="ignored"}function rn(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function ln(e,o){return{getIsGroup:ve,getIgnored:eo,getKey(r){return ve(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[o]}}}function an(e,o,t,r){if(!o)return e;function s(d){if(!Array.isArray(d))return[];const u=[];for(const n of d)if(ve(n)){const w=s(n[r]);w.length&&u.push(Object.assign({},n,{[r]:w}))}else{if(eo(n))continue;o(t,n)&&u.push(n)}return u}return s(e)}function sn(e,o,t){const r=new Map;return e.forEach(s=>{ve(s)?s[t].forEach(d=>{r.set(d[o],d)}):r.set(s[o],s)}),r}export{wt as F,tn as N,mt as V,Bt as a,sn as b,ln as c,nn as d,Qe as e,an as f,kt as g,Ct as h,Ot as i,Pe as m,rn as p,Je as u};
