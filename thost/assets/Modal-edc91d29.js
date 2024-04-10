import{m as te,T as ne}from"./runtime-dom.esm-bundler-51aad541.js";import{l as ie,c as se,h as W,a as R,i as S,b as T,q as qe,p as Xe,d as L,u as re,o as Ye,k as Ue,e as le,g as Ve,w as Ze}from"./light-3c431b54.js";import{k as ae}from"./keysOf-5d5107c5.js";import{c as Ge,a as Je,N as Ke,b as Qe}from"./Card-bc241d1a.js";import{a as eo,b as oo,N as ce}from"./Button-591cb8c7.js";import{g as to,N as no}from"./Close-4e65a8ab.js";import{r as q,b as de}from"./use-memo-13475312.js";import{o as X,a as Y,r as F,s as io,N as so,k as U,f as ro,g as lo}from"./Scrollbar-5b7370f2.js";import{N as ao}from"./Icon-9d083982.js";import{I as ue,S as co,W as uo,E as fo}from"./Warning-fc401418.js";import{aY as j,aZ as y,Z as V,_ as I,a2 as ho,az as Z,v as G,i as O,J as a,b3 as J,O as fe,aa as N,g as po,W as vo,aG as K,X as he}from"./index-c2ed52a5.js";import{m as pe,a as mo,d as go,p as Co,g as bo,F as xo,c as yo,z as wo,L as ko}from"./index-80752888.js";import{f as So}from"./fade-in-scale-up.cssr-6d358681.js";import{i as ve,h as me}from"./utils-20c36e7e.js";import{i as Po,c as D}from"./use-is-mounted-912be460.js";import{e as zo}from"./index-cbfaa337.js";const E=y(null);function ge(e){if(e.clientX>0||e.clientY>0)E.value={x:e.clientX,y:e.clientY};else{const{target:o}=e;if(o instanceof Element){const{left:n,top:s,width:u,height:d}=o.getBoundingClientRect();n>0||s>0?E.value={x:n+u/2,y:s+d/2}:E.value={x:0,y:0}}else E.value=null}}let H=0,Ce=!0;function Ro(){if(!ve)return j(y(null));H===0&&X("click",document,ge,!0);const e=()=>{H+=1};return Ce&&(Ce=me())?(V(e),I(()=>{H-=1,H===0&&Y("click",document,ge,!0)})):e(),j(E)}const Bo=y(void 0);let _=0;function be(){Bo.value=Date.now()}let xe=!0;function Fo(e){if(!ve)return j(y(!1));const o=y(!1);let n=null;function s(){n!==null&&window.clearTimeout(n)}function u(){s(),o.value=!0,n=window.setTimeout(()=>{o.value=!1},e)}_===0&&X("click",window,be,!0);const d=()=>{_+=1,X("click",window,u,!0)};return xe&&(xe=me())?(V(d),I(()=>{_-=1,_===0&&Y("click",window,be,!0),Y("click",window,u,!0),s()})):d(),j(o)}let $=0,ye="",we="",ke="",Se="";const Pe=y("0px");function Oo(e){if(typeof document>"u")return;const o=document.documentElement;let n,s=!1;const u=()=>{o.style.marginRight=ye,o.style.overflow=we,o.style.overflowX=ke,o.style.overflowY=Se,Pe.value="0px"};ho(()=>{n=Z(e,d=>{if(d){if(!$){const r=window.innerWidth-o.offsetWidth;r>0&&(ye=o.style.marginRight,o.style.marginRight=`${r}px`,Pe.value=`${r}px`),we=o.style.overflow,ke=o.style.overflowX,Se=o.style.overflowY,o.style.overflow="hidden",o.style.overflowX="hidden",o.style.overflowY="hidden"}s=!0,$++}else $--,$||u(),s=!1},{immediate:!0})}),I(()=>{n==null||n(),s&&($--,$||u(),s=!1)})}const Q=y(!1),ze=()=>{Q.value=!0},Re=()=>{Q.value=!1};let M=0;const $o=()=>(eo&&(V(()=>{M||(window.addEventListener("compositionstart",ze),window.addEventListener("compositionend",Re)),M++}),I(()=>{M<=1?(window.removeEventListener("compositionstart",ze),window.removeEventListener("compositionend",Re),M=0):M--})),Q),To={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},Eo=e=>{const{textColor1:o,textColor2:n,modalColor:s,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:r,closeColorHover:m,closeColorPressed:g,infoColor:b,successColor:w,warningColor:f,errorColor:x,primaryColor:h,dividerColor:p,borderRadius:C,fontWeightStrong:l,lineHeight:v,fontSize:c}=e;return Object.assign(Object.assign({},To),{fontSize:c,lineHeight:v,border:`1px solid ${p}`,titleTextColor:o,textColor:n,color:s,closeColorHover:m,closeColorPressed:g,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:r,closeBorderRadius:C,iconColor:h,iconColorInfo:b,iconColorSuccess:w,iconColorWarning:f,iconColorError:x,borderRadius:C,titleFontWeight:l})},Mo=ie({name:"Dialog",common:se,peers:{Button:oo},self:Eo}),Be=Mo,ee={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Ao=ae(ee),Lo=W([R("dialog",`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[S("icon",{color:"var(--n-icon-color)"}),T("bordered",{border:"var(--n-border)"}),T("icon-top",[S("close",{margin:"var(--n-close-margin)"}),S("icon",{margin:"var(--n-icon-margin)"}),S("content",{textAlign:"center"}),S("title",{justifyContent:"center"}),S("action",{justifyContent:"center"})]),T("icon-left",[S("icon",{margin:"var(--n-icon-margin)"}),T("closable",[S("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),S("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),S("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[T("last","margin-bottom: 0;")]),S("action",`
 display: flex;
 justify-content: flex-end;
 `,[W("> *:not(:last-child)",`
 margin-right: var(--n-action-space);
 `)]),S("icon",`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),S("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),R("dialog-icon-container",`
 display: flex;
 justify-content: center;
 `)]),qe(R("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),R("dialog",[Xe(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),jo={default:()=>a(ue,null),info:()=>a(ue,null),success:()=>a(co,null),warning:()=>a(uo,null),error:()=>a(fo,null)},Io=G({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},L.props),ee),setup(e){const{mergedComponentPropsRef:o,mergedClsPrefixRef:n,inlineThemeDisabled:s,mergedRtlRef:u}=re(e),d=Ye("Dialog",u,n),r=O(()=>{var h,p;const{iconPlacement:C}=e;return C||((p=(h=o==null?void 0:o.value)===null||h===void 0?void 0:h.Dialog)===null||p===void 0?void 0:p.iconPlacement)||"left"});function m(h){const{onPositiveClick:p}=e;p&&p(h)}function g(h){const{onNegativeClick:p}=e;p&&p(h)}function b(){const{onClose:h}=e;h&&h()}const w=L("Dialog","-dialog",Lo,Be,e,n),f=O(()=>{const{type:h}=e,p=r.value,{common:{cubicBezierEaseInOut:C},self:{fontSize:l,lineHeight:v,border:c,titleTextColor:P,textColor:k,color:t,closeBorderRadius:i,closeColorHover:z,closeColorPressed:B,closeIconColor:Fe,closeIconColorHover:Oe,closeIconColorPressed:$e,closeIconSize:Te,borderRadius:Ee,titleFontWeight:Me,titleFontSize:Ae,padding:Le,iconSize:je,actionSpace:Ie,contentMargin:Ne,closeSize:De,[p==="top"?"iconMarginIconTop":"iconMargin"]:He,[p==="top"?"closeMarginIconTop":"closeMargin"]:_e,[Ue("iconColor",h)]:We}}=w.value,A=to(He);return{"--n-font-size":l,"--n-icon-color":We,"--n-bezier":C,"--n-close-margin":_e,"--n-icon-margin-top":A.top,"--n-icon-margin-right":A.right,"--n-icon-margin-bottom":A.bottom,"--n-icon-margin-left":A.left,"--n-icon-size":je,"--n-close-size":De,"--n-close-icon-size":Te,"--n-close-border-radius":i,"--n-close-color-hover":z,"--n-close-color-pressed":B,"--n-close-icon-color":Fe,"--n-close-icon-color-hover":Oe,"--n-close-icon-color-pressed":$e,"--n-color":t,"--n-text-color":k,"--n-border-radius":Ee,"--n-padding":Le,"--n-line-height":v,"--n-border":c,"--n-content-margin":Ne,"--n-title-font-size":Ae,"--n-title-font-weight":Me,"--n-title-text-color":P,"--n-action-space":Ie}}),x=s?le("dialog",O(()=>`${e.type[0]}${r.value[0]}`),f,e):void 0;return{mergedClsPrefix:n,rtlEnabled:d,mergedIconPlacement:r,mergedTheme:w,handlePositiveClick:m,handleNegativeClick:g,handleCloseClick:b,cssVars:s?void 0:f,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){var e;const{bordered:o,mergedIconPlacement:n,cssVars:s,closable:u,showIcon:d,title:r,content:m,action:g,negativeText:b,positiveText:w,positiveButtonProps:f,negativeButtonProps:x,handlePositiveClick:h,handleNegativeClick:p,mergedTheme:C,loading:l,type:v,mergedClsPrefix:c}=this;(e=this.onRender)===null||e===void 0||e.call(this);const P=d?a(ao,{clsPrefix:c,class:`${c}-dialog__icon`},{default:()=>q(this.$slots.icon,t=>t||(this.icon?F(this.icon):jo[this.type]()))}):null,k=q(this.$slots.action,t=>t||w||b||g?a("div",{class:`${c}-dialog__action`},t||(g?[F(g)]:[this.negativeText&&a(ce,Object.assign({theme:C.peers.Button,themeOverrides:C.peerOverrides.Button,ghost:!0,size:"small",onClick:p},x),{default:()=>F(this.negativeText)}),this.positiveText&&a(ce,Object.assign({theme:C.peers.Button,themeOverrides:C.peerOverrides.Button,size:"small",type:v==="default"?"primary":v,disabled:l,loading:l,onClick:h},f),{default:()=>F(this.positiveText)})])):null);return a("div",{class:[`${c}-dialog`,this.themeClass,this.closable&&`${c}-dialog--closable`,`${c}-dialog--icon-${n}`,o&&`${c}-dialog--bordered`,this.rtlEnabled&&`${c}-dialog--rtl`],style:s,role:"dialog"},u?q(this.$slots.close,t=>{const i=[`${c}-dialog__close`,this.rtlEnabled&&`${c}-dialog--rtl`];return t?a("div",{class:i},t):a(no,{clsPrefix:c,class:i,onClick:this.handleCloseClick})}):null,d&&n==="top"?a("div",{class:`${c}-dialog-icon-container`},P):null,a("div",{class:`${c}-dialog__title`},d&&n==="left"?P:null,de(this.$slots.header,()=>[F(r)])),a("div",{class:[`${c}-dialog__content`,k?"":`${c}-dialog__content--last`]},de(this.$slots.default,()=>[F(m)])),k)}}),No=Ve("n-dialog-provider"),Do=e=>{const{modalColor:o,textColor2:n,boxShadow3:s}=e;return{color:o,textColor:n,boxShadow:s}},Ho=ie({name:"Modal",common:se,peers:{Scrollbar:io,Dialog:Be,Card:Ge},self:Do}),_o=Ho,oe=Object.assign(Object.assign({},Je),ee),Wo=ae(oe),qo=G({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},oe),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const o=y(null),n=y(null),s=y(e.show),u=y(null),d=y(null);Z(J(e,"show"),l=>{l&&(s.value=!0)}),Oo(O(()=>e.blockScroll&&s.value));const r=fe(pe);function m(){if(r.transformOriginRef.value==="center")return"";const{value:l}=u,{value:v}=d;if(l===null||v===null)return"";if(n.value){const c=n.value.containerScrollTop;return`${l}px ${v+c}px`}return""}function g(l){if(r.transformOriginRef.value==="center")return;const v=r.getMousePosition();if(!v||!n.value)return;const c=n.value.containerScrollTop,{offsetLeft:P,offsetTop:k}=l;if(v){const t=v.y,i=v.x;u.value=-(P-i),d.value=-(k-t-c)}l.style.transformOrigin=m()}function b(l){he(()=>{g(l)})}function w(l){l.style.transformOrigin=m(),e.onBeforeLeave()}function f(){s.value=!1,u.value=null,d.value=null,e.onAfterLeave()}function x(){const{onClose:l}=e;l&&l()}function h(){e.onNegativeClick()}function p(){e.onPositiveClick()}const C=y(null);return Z(C,l=>{l&&he(()=>{const v=l.el;v&&o.value!==v&&(o.value=v)})}),N(mo,o),N(go,null),N(Co,null),{mergedTheme:r.mergedThemeRef,appear:r.appearRef,isMounted:r.isMountedRef,mergedClsPrefix:r.mergedClsPrefixRef,bodyRef:o,scrollbarRef:n,displayed:s,childNodeRef:C,handlePositiveClick:p,handleNegativeClick:h,handleCloseClick:x,handleAfterLeave:f,handleBeforeLeave:w,handleEnter:b}},render(){const{$slots:e,$attrs:o,handleEnter:n,handleAfterLeave:s,handleBeforeLeave:u,preset:d,mergedClsPrefix:r}=this;let m=null;if(!d){if(m=bo(e),!m){Ze("modal","default slot is empty");return}m=po(m),m.props=vo({class:`${r}-modal`},o,m.props||{})}return this.displayDirective==="show"||this.displayed||this.show?K(a("div",{role:"none",class:`${r}-modal-body-wrapper`},a(so,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${r}-modal-scroll-content`},{default:()=>{var g;return[(g=this.renderMask)===null||g===void 0?void 0:g.call(this),a(xo,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var b;return a(ne,{name:"fade-in-scale-up-transition",appear:(b=this.appear)!==null&&b!==void 0?b:this.isMounted,onEnter:n,onAfterEnter:this.onAfterEnter,onAfterLeave:s,onBeforeLeave:u},{default:()=>{const w=[[te,this.show]],{onClickoutside:f}=this;return f&&w.push([yo,this.onClickoutside,void 0,{capture:!0}]),K(this.preset==="confirm"||this.preset==="dialog"?a(Io,Object.assign({},this.$attrs,{class:[`${r}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},U(this.$props,Ao),{"aria-modal":"true"}),e):this.preset==="card"?a(Ke,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${r}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},U(this.$props,Qe),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=m,w)}})}})]}})),[[te,this.displayDirective==="if"||this.displayed||this.show]]):null}}),Xo=W([R("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),R("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[ro({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),R("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[R("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),R("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[So({duration:".25s",enterScale:".5"})])]),Yo=Object.assign(Object.assign(Object.assign(Object.assign({},L.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),oe),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),Uo=G({name:"Modal",inheritAttrs:!1,props:Yo,setup(e){const o=y(null),{mergedClsPrefixRef:n,namespaceRef:s,inlineThemeDisabled:u}=re(e),d=L("Modal","-modal",Xo,_o,e,n),r=Fo(64),m=Ro(),g=Po(),b=e.internalDialog?fe(No,null):null,w=$o();function f(t){const{onUpdateShow:i,"onUpdate:show":z,onHide:B}=e;i&&D(i,t),z&&D(z,t),B&&!t&&B(t)}function x(){const{onClose:t}=e;t?Promise.resolve(t()).then(i=>{i!==!1&&f(!1)}):f(!1)}function h(){const{onPositiveClick:t}=e;t?Promise.resolve(t()).then(i=>{i!==!1&&f(!1)}):f(!1)}function p(){const{onNegativeClick:t}=e;t?Promise.resolve(t()).then(i=>{i!==!1&&f(!1)}):f(!1)}function C(){const{onBeforeLeave:t,onBeforeHide:i}=e;t&&D(t),i&&i()}function l(){const{onAfterLeave:t,onAfterHide:i}=e;t&&D(t),i&&i()}function v(t){var i;const{onMaskClick:z}=e;z&&z(t),e.maskClosable&&!((i=o.value)===null||i===void 0)&&i.contains(lo(t))&&f(!1)}function c(t){var i;(i=e.onEsc)===null||i===void 0||i.call(e),e.show&&e.closeOnEsc&&zo(t)&&!w.value&&f(!1)}N(pe,{getMousePosition:()=>{if(b){const{clickedRef:t,clickPositionRef:i}=b;if(t.value&&i.value)return i.value}return r.value?m.value:null},mergedClsPrefixRef:n,mergedThemeRef:d,isMountedRef:g,appearRef:J(e,"internalAppear"),transformOriginRef:J(e,"transformOrigin")});const P=O(()=>{const{common:{cubicBezierEaseOut:t},self:{boxShadow:i,color:z,textColor:B}}=d.value;return{"--n-bezier-ease-out":t,"--n-box-shadow":i,"--n-color":z,"--n-text-color":B}}),k=u?le("theme-class",void 0,P,e):void 0;return{mergedClsPrefix:n,namespace:s,isMounted:g,containerRef:o,presetProps:O(()=>U(e,Wo)),handleEsc:c,handleAfterLeave:l,handleClickoutside:v,handleBeforeLeave:C,doUpdateShow:f,handleNegativeClick:p,handlePositiveClick:h,handleCloseClick:x,cssVars:u?void 0:P,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e}=this;return a(ko,{to:this.to,show:this.show},{default:()=>{var o;(o=this.onRender)===null||o===void 0||o.call(this);const{unstableShowMask:n}=this;return K(a("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},a(qo,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:n?void 0:this.handleClickoutside,renderMask:n?()=>{var s;return a(ne,{name:"fade-in-transition",key:"mask",appear:(s=this.internalAppear)!==null&&s!==void 0?s:this.isMounted},{default:()=>this.show?a("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[wo,{zIndex:this.zIndex,enabled:this.show}]])}})}});export{Uo as N};