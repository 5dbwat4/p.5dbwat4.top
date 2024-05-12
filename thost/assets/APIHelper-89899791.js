import{R as T,w as A,b2 as k,aD as Oe,N as o,j as z,a5 as Ne,_ as Ie,ad as U,T as _e,F as Te,b0 as je,av as He,aC as We,ab as Le,k as De,aH as Fe,t as Ee,bi as ee,bc as te}from"./index-6b27469d.js";import{l as qe,c as oe,g as H,t as re,u as E,o as Me,k as q,e as ie,h as x,a as l,b as v,i as P,d as W}from"./light-cb8e5d18.js";import{f as B}from"./format-length-c9d165c6.js";import{N as M}from"./Icon-0741e3aa.js";import{I as G,S as V,W as X,E as Y}from"./Warning-ad995842.js";import{s as Ge,N as Ve,r as O,k as Xe,c as Ye}from"./Scrollbar-6ef5ad24.js";import{T as Ke}from"./runtime-dom.esm-bundler-4f377a37.js";import{k as Je}from"./keysOf-5d5107c5.js";import{g as Ze,N as Qe}from"./Close-df27b242.js";function ne(e,t=[],a){const r={};return Object.getOwnPropertyNames(e).forEach(i=>{t.includes(i)||(r[i]=e[i])}),Object.assign(r,a)}const Ue={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},et=e=>{const{textColor2:t,successColor:a,infoColor:r,warningColor:i,errorColor:c,popoverColor:g,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:h,closeColorHover:m,closeColorPressed:u,textColor1:b,textColor3:s,borderRadius:n,fontWeightStrong:d,boxShadow2:y,lineHeight:w,fontSize:C}=e;return Object.assign(Object.assign({},Ue),{borderRadius:n,lineHeight:w,fontSize:C,headerFontWeight:d,iconColor:t,iconColorSuccess:a,iconColorInfo:r,iconColorWarning:i,iconColorError:c,color:g,textColor:t,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:h,closeBorderRadius:n,closeColorHover:m,closeColorPressed:u,headerTextColor:b,descriptionTextColor:s,actionTextColor:t,boxShadow:y})},tt=qe({name:"Notification",common:oe,peers:{Scrollbar:Ge},self:et}),ot=tt,rt=e=>{const{infoColor:t,successColor:a,warningColor:r,errorColor:i,textColor2:c,progressRailColor:g,fontSize:f,fontWeight:p}=e;return{fontSize:f,fontSizeCircle:"28px",fontWeightCircle:p,railColor:g,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:a,iconColorWarning:r,iconColorError:i,textColorCircle:c,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:c,fillColor:t,fillColorInfo:t,fillColorSuccess:a,fillColorWarning:r,fillColorError:i,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},it={name:"Progress",common:oe,self:rt},ae=it,nt=H("n-loading-bar"),se=H("n-loading-bar-api");function at(){const e=T(se,null);return e===null&&re("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}const L=H("n-notification-provider"),st=A({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:t,wipTransitionCountRef:a}=T(L),r=k(null);return Oe(()=>{var i,c;a.value>0?(i=r==null?void 0:r.value)===null||i===void 0||i.classList.add("transitioning"):(c=r==null?void 0:r.value)===null||c===void 0||c.classList.remove("transitioning")}),{selfRef:r,mergedTheme:e,mergedClsPrefix:t,transitioning:a}},render(){const{$slots:e,scrollable:t,mergedClsPrefix:a,mergedTheme:r,placement:i}=this;return o("div",{ref:"selfRef",class:[`${a}-notification-container`,t&&`${a}-notification-container--scrollable`,`${a}-notification-container--${i}`]},t?o(Ve,{theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},e):e)}}),lt={info:()=>o(G,null),success:()=>o(V,null),warning:()=>o(X,null),error:()=>o(Y,null),default:()=>null},K={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},ct=Je(K),dt=A({name:"Notification",props:K,setup(e){const{mergedClsPrefixRef:t,mergedThemeRef:a,props:r}=T(L),{inlineThemeDisabled:i,mergedRtlRef:c}=E(),g=Me("Notification",c,t),f=z(()=>{const{type:h}=e,{self:{color:m,textColor:u,closeIconColor:b,closeIconColorHover:s,closeIconColorPressed:n,headerTextColor:d,descriptionTextColor:y,actionTextColor:w,borderRadius:C,headerFontWeight:S,boxShadow:$,lineHeight:I,fontSize:R,closeMargin:_,closeSize:fe,width:he,padding:ue,closeIconSize:ve,closeBorderRadius:me,closeColorHover:be,closeColorPressed:xe,titleFontSize:ye,metaFontSize:Ce,descriptionFontSize:we,[q("iconColor",h)]:ze},common:{cubicBezierEaseOut:Se,cubicBezierEaseIn:$e,cubicBezierEaseInOut:ke}}=a.value,{left:Ae,right:Pe,top:Re,bottom:Be}=Ze(ue);return{"--n-color":m,"--n-font-size":R,"--n-text-color":u,"--n-description-text-color":y,"--n-action-text-color":w,"--n-title-text-color":d,"--n-title-font-weight":S,"--n-bezier":ke,"--n-bezier-ease-out":Se,"--n-bezier-ease-in":$e,"--n-border-radius":C,"--n-box-shadow":$,"--n-close-border-radius":me,"--n-close-color-hover":be,"--n-close-color-pressed":xe,"--n-close-icon-color":b,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":n,"--n-line-height":I,"--n-icon-color":ze,"--n-close-margin":_,"--n-close-size":fe,"--n-close-icon-size":ve,"--n-width":he,"--n-padding-left":Ae,"--n-padding-right":Pe,"--n-padding-top":Re,"--n-padding-bottom":Be,"--n-title-font-size":ye,"--n-meta-font-size":Ce,"--n-description-font-size":we}}),p=i?ie("notification",z(()=>e.type[0]),f,r):void 0;return{mergedClsPrefix:t,showAvatar:z(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:g,cssVars:i?void 0:f,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),o("div",{class:[`${t}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},o("div",{class:[`${t}-notification`,this.rtlEnabled&&`${t}-notification--rtl`,this.themeClass,{[`${t}-notification--closable`]:this.closable,[`${t}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?o("div",{class:`${t}-notification__avatar`},this.avatar?O(this.avatar):this.type!=="default"?o(M,{clsPrefix:t},{default:()=>lt[this.type]()}):null):null,this.closable?o(Qe,{clsPrefix:t,class:`${t}-notification__close`,onClick:this.handleCloseClick}):null,o("div",{ref:"bodyRef",class:`${t}-notification-main`},this.title?o("div",{class:`${t}-notification-main__header`},O(this.title)):null,this.description?o("div",{class:`${t}-notification-main__description`},O(this.description)):null,this.content?o("pre",{class:`${t}-notification-main__content`},O(this.content)):null,this.meta||this.action?o("div",{class:`${t}-notification-main-footer`},this.meta?o("div",{class:`${t}-notification-main-footer__meta`},O(this.meta)):null,this.action?o("div",{class:`${t}-notification-main-footer__action`},O(this.action)):null):null)))}}),pt=Object.assign(Object.assign({},K),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),gt=A({name:"NotificationEnvironment",props:Object.assign(Object.assign({},pt),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const{wipTransitionCountRef:t}=T(L),a=k(!0);let r=null;function i(){a.value=!1,r&&window.clearTimeout(r)}function c(n){t.value++,Ie(()=>{n.style.height=`${n.offsetHeight}px`,n.style.maxHeight="0",n.style.transition="none",n.offsetHeight,n.style.transition="",n.style.maxHeight=n.style.height})}function g(n){t.value--,n.style.height="",n.style.maxHeight="";const{onAfterEnter:d,onAfterShow:y}=e;d&&d(),y&&y()}function f(n){t.value++,n.style.maxHeight=`${n.offsetHeight}px`,n.style.height=`${n.offsetHeight}px`,n.offsetHeight}function p(n){const{onHide:d}=e;d&&d(),n.style.maxHeight="0",n.offsetHeight}function h(){t.value--;const{onAfterLeave:n,onInternalAfterLeave:d,onAfterHide:y,internalKey:w}=e;n&&n(),d(w),y&&y()}function m(){const{duration:n}=e;n&&(r=window.setTimeout(i,n))}function u(n){n.currentTarget===n.target&&r!==null&&(window.clearTimeout(r),r=null)}function b(n){n.currentTarget===n.target&&m()}function s(){const{onClose:n}=e;n?Promise.resolve(n()).then(d=>{d!==!1&&i()}):i()}return Ne(()=>{e.duration&&(r=window.setTimeout(i,e.duration))}),{show:a,hide:i,handleClose:s,handleAfterLeave:h,handleLeave:p,handleBeforeLeave:f,handleAfterEnter:g,handleBeforeEnter:c,handleMouseenter:u,handleMouseleave:b}},render(){return o(Ke,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?o(dt,Object.assign({},Xe(this.$props,ct),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),ft=x([l("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[x(">",[l("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[x(">",[l("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[l("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),v("top, top-right, top-left",`
 top: 12px;
 `,[x("&.transitioning >",[l("scrollbar",[x(">",[l("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),v("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[x(">",[l("scrollbar",[x(">",[l("scrollbar-container",[l("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),l("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),v("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[l("notification-wrapper",[x("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),x("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),v("top",[l("notification-wrapper",`
 transform-origin: top center;
 `)]),v("bottom",[l("notification-wrapper",`
 transform-origin: bottom center;
 `)]),v("top-right, bottom-right",[l("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),v("top-left, bottom-left",[l("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),v("top-right",`
 right: 0;
 `,[D("top-right")]),v("top-left",`
 left: 0;
 `,[D("top-left")]),v("bottom-right",`
 right: 0;
 `,[D("bottom-right")]),v("bottom-left",`
 left: 0;
 `,[D("bottom-left")]),v("scrollable",[v("top-right",`
 top: 0;
 `),v("top-left",`
 top: 0;
 `),v("bottom-right",`
 bottom: 0;
 `),v("bottom-left",`
 bottom: 0;
 `)]),l("notification-wrapper",`
 margin-bottom: 12px;
 `,[x("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),x("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),x("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),x("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),l("notification",`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[P("avatar",[l("icon",`
 color: var(--n-icon-color);
 `),l("base-icon",`
 color: var(--n-icon-color);
 `)]),v("show-avatar",[l("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),v("closable",[l("notification-main",[x("> *:first-child",`
 padding-right: 20px;
 `)]),P("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),P("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("icon","transition: color .3s var(--n-bezier);")]),l("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[l("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[P("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),P("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),P("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),P("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),P("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[x("&:first-child","margin: 0;")])])])])]);function D(e){const t=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",a="0";return l("notification-wrapper",[x("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${t}, 0);
 `),x("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${a}, 0);
 `)])}const le=H("n-notification-api"),ht=Object.assign(Object.assign({},W.props),{containerClass:String,containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),ut=A({name:"NotificationProvider",props:ht,setup(e){const{mergedClsPrefixRef:t}=E(e),a=k([]),r={},i=new Set;function c(s){const n=Ye(),d=()=>{i.add(n),r[n]&&r[n].hide()},y=je(Object.assign(Object.assign({},s),{key:n,destroy:d,hide:d,deactivate:d})),{max:w}=e;if(w&&a.value.length-i.size>=w){let C=!1,S=0;for(const $ of a.value){if(!i.has($.key)){r[$.key]&&($.destroy(),C=!0);break}S++}C||a.value.splice(S,1)}return a.value.push(y),y}const g=["info","success","warning","error"].map(s=>n=>c(Object.assign(Object.assign({},n),{type:s})));function f(s){i.delete(s),a.value.splice(a.value.findIndex(n=>n.key===s),1)}const p=W("Notification","-notification",ft,ot,e,t),h={create:c,info:g[0],success:g[1],warning:g[2],error:g[3],open:u,destroyAll:b},m=k(0);U(le,h),U(L,{props:e,mergedClsPrefixRef:t,mergedThemeRef:p,wipTransitionCountRef:m});function u(s){return c(s)}function b(){Object.values(a.value).forEach(s=>{s.hide()})}return Object.assign({mergedClsPrefix:t,notificationList:a,notificationRefs:r,handleAfterLeave:f},h)},render(){var e,t,a;const{placement:r}=this;return o(Te,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.notificationList.length?o(_e,{to:(a=this.to)!==null&&a!==void 0?a:"body"},o(st,{class:this.containerClass,style:this.containerStyle,scrollable:this.scrollable&&r!=="top"&&r!=="bottom",placement:r},{default:()=>this.notificationList.map(i=>o(gt,Object.assign({ref:c=>{const g=i.key;c===null?delete this.notificationRefs[g]:this.notificationRefs[g]=c}},ne(i,["destroy","hide","deactivate"]),{internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:i.keepAliveOnHover===void 0?this.keepAliveOnHover:i.keepAliveOnHover})))})):null)}});function ce(){const e=T(le,null);return e===null&&re("use-notification","No outer `n-notification-provider` found."),e}const vt=x([l("progress",{display:"inline-block"},[l("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),v("line",`
 width: 100%;
 display: block;
 `,[l("progress-content",`
 display: flex;
 align-items: center;
 `,[l("progress-graph",{flex:1})]),l("progress-custom-content",{marginLeft:"14px"}),l("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[v("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),v("circle, dashboard",{width:"120px"},[l("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),l("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),l("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),v("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[l("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),l("progress-content",{position:"relative"}),l("progress-graph",{position:"relative"},[l("progress-graph-circle",[x("svg",{verticalAlign:"bottom"}),l("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[v("empty",{opacity:0})]),l("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),l("progress-graph-line",[v("indicator-inside",[l("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[l("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),l("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),v("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[l("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),l("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),l("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[l("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[v("processing",[x("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),x("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),mt={success:o(V,null),error:o(Y,null),warning:o(X,null),info:o(G,null)},bt=A({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const a=z(()=>B(e.height)),r=z(()=>e.railBorderRadius!==void 0?B(e.railBorderRadius):e.height!==void 0?B(e.height,{c:.5}):""),i=z(()=>e.fillBorderRadius!==void 0?B(e.fillBorderRadius):e.railBorderRadius!==void 0?B(e.railBorderRadius):e.height!==void 0?B(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:c,railColor:g,railStyle:f,percentage:p,unit:h,indicatorTextColor:m,status:u,showIndicator:b,fillColor:s,processing:n,clsPrefix:d}=e;return o("div",{class:`${d}-progress-content`,role:"none"},o("div",{class:`${d}-progress-graph`,"aria-hidden":!0},o("div",{class:[`${d}-progress-graph-line`,{[`${d}-progress-graph-line--indicator-${c}`]:!0}]},o("div",{class:`${d}-progress-graph-line-rail`,style:[{backgroundColor:g,height:a.value,borderRadius:r.value},f]},o("div",{class:[`${d}-progress-graph-line-fill`,n&&`${d}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:s,height:a.value,lineHeight:a.value,borderRadius:i.value}},c==="inside"?o("div",{class:`${d}-progress-graph-line-indicator`,style:{color:m}},t.default?t.default():`${p}${h}`):null)))),b&&c==="outside"?o("div",null,t.default?o("div",{class:`${d}-progress-custom-content`,style:{color:m},role:"none"},t.default()):u==="default"?o("div",{role:"none",class:`${d}-progress-icon ${d}-progress-icon--as-text`,style:{color:m}},p,h):o("div",{class:`${d}-progress-icon`,"aria-hidden":!0},o(M,{clsPrefix:d},{default:()=>mt[u]}))):null)}}}),xt={success:o(V,null),error:o(Y,null),warning:o(X,null),info:o(G,null)},yt=A({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function a(r,i,c){const{gapDegree:g,viewBoxWidth:f,strokeWidth:p}=e,h=50,m=0,u=h,b=0,s=2*h,n=50+p/2,d=`M ${n},${n} m ${m},${u}
      a ${h},${h} 0 1 1 ${b},${-s}
      a ${h},${h} 0 1 1 ${-b},${s}`,y=Math.PI*2*h,w={stroke:c,strokeDasharray:`${r/100*(y-g)}px ${f*8}px`,strokeDashoffset:`-${g/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:d,pathStyle:w}}return()=>{const{fillColor:r,railColor:i,strokeWidth:c,offsetDegree:g,status:f,percentage:p,showIndicator:h,indicatorTextColor:m,unit:u,gapOffsetDegree:b,clsPrefix:s}=e,{pathString:n,pathStyle:d}=a(100,0,i),{pathString:y,pathStyle:w}=a(p,g,r),C=100+c;return o("div",{class:`${s}-progress-content`,role:"none"},o("div",{class:`${s}-progress-graph`,"aria-hidden":!0},o("div",{class:`${s}-progress-graph-circle`,style:{transform:b?`rotate(${b}deg)`:void 0}},o("svg",{viewBox:`0 0 ${C} ${C}`},o("g",null,o("path",{class:`${s}-progress-graph-circle-rail`,d:n,"stroke-width":c,"stroke-linecap":"round",fill:"none",style:d})),o("g",null,o("path",{class:[`${s}-progress-graph-circle-fill`,p===0&&`${s}-progress-graph-circle-fill--empty`],d:y,"stroke-width":c,"stroke-linecap":"round",fill:"none",style:w}))))),h?o("div",null,t.default?o("div",{class:`${s}-progress-custom-content`,role:"none"},t.default()):f!=="default"?o("div",{class:`${s}-progress-icon`,"aria-hidden":!0},o(M,{clsPrefix:s},{default:()=>xt[f]})):o("div",{class:`${s}-progress-text`,style:{color:m},role:"none"},o("span",{class:`${s}-progress-text__percentage`},p),o("span",{class:`${s}-progress-text__unit`},u))):null)}}});function de(e,t,a=100){return`m ${a/2} ${a/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Ct=A({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const a=z(()=>e.percentage.map((r,i)=>`${Math.PI*r/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:r,strokeWidth:i,circleGap:c,showIndicator:g,fillColor:f,railColor:p,railStyle:h,percentage:m,clsPrefix:u}=e;return o("div",{class:`${u}-progress-content`,role:"none"},o("div",{class:`${u}-progress-graph`,"aria-hidden":!0},o("div",{class:`${u}-progress-graph-circle`},o("svg",{viewBox:`0 0 ${r} ${r}`},m.map((b,s)=>o("g",{key:s},o("path",{class:`${u}-progress-graph-circle-rail`,d:de(r/2-i/2*(1+2*s)-c*s,i,r),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:p[s]},h[s]]}),o("path",{class:[`${u}-progress-graph-circle-fill`,b===0&&`${u}-progress-graph-circle-fill--empty`],d:de(r/2-i/2*(1+2*s)-c*s,i,r),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:a.value[s],strokeDashoffset:0,stroke:f[s]}})))))),g&&t.default?o("div",null,o("div",{class:`${u}-progress-text`},t.default())):null)}}}),wt=Object.assign(Object.assign({},W.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),pe=A({name:"Progress",props:wt,setup(e){const t=z(()=>e.indicatorPlacement||e.indicatorPosition),a=z(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=E(e),c=W("Progress","-progress",vt,ae,e,r),g=z(()=>{const{status:p}=e,{common:{cubicBezierEaseInOut:h},self:{fontSize:m,fontSizeCircle:u,railColor:b,railHeight:s,iconSizeCircle:n,iconSizeLine:d,textColorCircle:y,textColorLineInner:w,textColorLineOuter:C,lineBgProcessing:S,fontWeightCircle:$,[q("iconColor",p)]:I,[q("fillColor",p)]:R}}=c.value;return{"--n-bezier":h,"--n-fill-color":R,"--n-font-size":m,"--n-font-size-circle":u,"--n-font-weight-circle":$,"--n-icon-color":I,"--n-icon-size-circle":n,"--n-icon-size-line":d,"--n-line-bg-processing":S,"--n-rail-color":b,"--n-rail-height":s,"--n-text-color-circle":y,"--n-text-color-line-inner":w,"--n-text-color-line-outer":C}}),f=i?ie("progress",z(()=>e.status[0]),g,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:a,cssVars:i?void 0:g,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:a,showIndicator:r,status:i,railColor:c,railStyle:g,color:f,percentage:p,viewBoxWidth:h,strokeWidth:m,mergedIndicatorPlacement:u,unit:b,borderRadius:s,fillBorderRadius:n,height:d,processing:y,circleGap:w,mergedClsPrefix:C,gapDeg:S,gapOffsetDegree:$,themeClass:I,$slots:R,onRender:_}=this;return _==null||_(),o("div",{class:[I,`${C}-progress`,`${C}-progress--${e}`,`${C}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":p,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?o(yt,{clsPrefix:C,status:i,showIndicator:r,indicatorTextColor:a,railColor:c,fillColor:f,railStyle:g,offsetDegree:this.offsetDegree,percentage:p,viewBoxWidth:h,strokeWidth:m,gapDegree:S===void 0?e==="dashboard"?75:0:S,gapOffsetDegree:$,unit:b},R):e==="line"?o(bt,{clsPrefix:C,status:i,showIndicator:r,indicatorTextColor:a,railColor:c,fillColor:f,railStyle:g,percentage:p,processing:y,indicatorPlacement:u,unit:b,fillBorderRadius:n,railBorderRadius:s,height:d},R):e==="multiple-circle"?o(Ct,{clsPrefix:C,strokeWidth:m,railColor:c,fillColor:f,railStyle:g,viewBoxWidth:h,percentage:p,showIndicator:r,circleGap:w},R):null)}}),zt={__name:"APICallingTe",setup(e){const t=He();console.log(t);const a=k(100),r=k(0);return We([t.ACC,t.ACR],()=>{a.value=1/(t.ACR.value+1)*(t.ACC.value-t.ACR.value)/t.ACC.value*100,r.value=t.ACC.value-t.ACR.value}),(i,c)=>(Le(),De(te(pe),{type:"line",percentage:a.value,processing:""},{default:Fe(()=>[Ee(ee(r.value)+" / "+ee(te(t).ACC),1)]),_:1},8,["percentage"]))}},St=k(0),N=k(0),$t={get:async e=>(N.value++,F(),await fetch(localStorage.getItem("__5dbwat_proj__thost_apihost")+e,{credentials:"include"}).then(t=>(N.value--,F(),t.json())).catch(t=>{ge(e,"GET",t)})),post:async(e,t)=>(N.value++,F(),await fetch(localStorage.getItem("__5dbwat_proj__thost_apihost")+e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"}).then(a=>(N.value--,F(),a.json())).catch(a=>{ge(e,"POST",a)})),get host(){return localStorage.getItem("__5dbwat_proj__thost_apihost")}};k(),o(zt,{ACC:St,ACR:N});let j=!1,J={},Z={},Q=!1;const kt=()=>{j||(J=ce(),Z=at(),j=!0)},F=()=>{j&&(N.value==0?(Z.finish(),Q=!1):Q||(Z.start(),Q=!0))},ge=(e,t,a)=>{j&&J.error({content:"Network error.",closable:!0,meta:`Network error when ${t} [${e}].error:${a} `})},At=()=>{j&&J.destoryAll()};export{$t as A,ut as N,se as a,pe as b,At as d,kt as i,nt as l,ne as o,ae as p,ce as u};
