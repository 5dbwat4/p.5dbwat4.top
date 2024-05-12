import{c as M,m as b,n as p,a as m,i,b as H,h as L,u as O,d as T,o as F,k as a,e as N}from"./light-cb8e5d18.js";import{f as V}from"./fade-in-height-expand.cssr-52026b9f.js";import{g as D,N as Z}from"./Close-df27b242.js";import{b as q,r as G}from"./use-memo-7138c88c.js";import{N as J}from"./FadeInExpandTransition-65435983.js";import{N as K}from"./Icon-0741e3aa.js";import{E as Q,W as U,I as X,S as Y}from"./Warning-ad995842.js";import{w as oo,j as $,b2 as eo,N as s,Z as ro}from"./index-6b27469d.js";const no={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},lo=r=>{const{lineHeight:e,borderRadius:d,fontWeightStrong:f,baseColor:t,dividerColor:C,actionColor:y,textColor1:g,textColor2:l,closeColorHover:h,closeColorPressed:v,closeIconColor:n,closeIconColorHover:o,closeIconColorPressed:u,infoColor:x,successColor:I,warningColor:z,errorColor:S,fontSize:P}=r;return Object.assign(Object.assign({},no),{fontSize:P,lineHeight:e,titleFontWeight:f,borderRadius:d,border:`1px solid ${C}`,color:y,titleTextColor:g,iconColor:l,contentTextColor:l,closeBorderRadius:d,closeColorHover:h,closeColorPressed:v,closeIconColor:n,closeIconColorHover:o,closeIconColorPressed:u,borderInfo:`1px solid ${b(t,p(x,{alpha:.25}))}`,colorInfo:b(t,p(x,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:x,contentTextColorInfo:l,closeColorHoverInfo:h,closeColorPressedInfo:v,closeIconColorInfo:n,closeIconColorHoverInfo:o,closeIconColorPressedInfo:u,borderSuccess:`1px solid ${b(t,p(I,{alpha:.25}))}`,colorSuccess:b(t,p(I,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:I,contentTextColorSuccess:l,closeColorHoverSuccess:h,closeColorPressedSuccess:v,closeIconColorSuccess:n,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:u,borderWarning:`1px solid ${b(t,p(z,{alpha:.33}))}`,colorWarning:b(t,p(z,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:z,contentTextColorWarning:l,closeColorHoverWarning:h,closeColorPressedWarning:v,closeIconColorWarning:n,closeIconColorHoverWarning:o,closeIconColorPressedWarning:u,borderError:`1px solid ${b(t,p(S,{alpha:.25}))}`,colorError:b(t,p(S,{alpha:.08})),titleTextColorError:g,iconColorError:S,contentTextColorError:l,closeColorHoverError:h,closeColorPressedError:v,closeIconColorError:n,closeIconColorHoverError:o,closeIconColorPressedError:u})},so={name:"Alert",common:M,self:lo},to=so,io=m("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),H("closable",[m("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),m("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),V({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),H("show-icon",[m("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),H("right-adjust",[m("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),m("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[L("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),co=Object.assign(Object.assign({},T.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ao=oo({name:"Alert",inheritAttrs:!1,props:co,setup(r){const{mergedClsPrefixRef:e,mergedBorderedRef:d,inlineThemeDisabled:f,mergedRtlRef:t}=O(r),C=T("Alert","-alert",io,to,r,e),y=F("Alert",t,e),g=$(()=>{const{common:{cubicBezierEaseInOut:n},self:o}=C.value,{fontSize:u,borderRadius:x,titleFontWeight:I,lineHeight:z,iconSize:S,iconMargin:P,iconMarginRtl:R,closeIconSize:w,closeBorderRadius:E,closeSize:W,closeMargin:A,closeMarginRtl:_,padding:j}=o,{type:c}=r,{left:k,right:B}=D(P);return{"--n-bezier":n,"--n-color":o[a("color",c)],"--n-close-icon-size":w,"--n-close-border-radius":E,"--n-close-color-hover":o[a("closeColorHover",c)],"--n-close-color-pressed":o[a("closeColorPressed",c)],"--n-close-icon-color":o[a("closeIconColor",c)],"--n-close-icon-color-hover":o[a("closeIconColorHover",c)],"--n-close-icon-color-pressed":o[a("closeIconColorPressed",c)],"--n-icon-color":o[a("iconColor",c)],"--n-border":o[a("border",c)],"--n-title-text-color":o[a("titleTextColor",c)],"--n-content-text-color":o[a("contentTextColor",c)],"--n-line-height":z,"--n-border-radius":x,"--n-font-size":u,"--n-title-font-weight":I,"--n-icon-size":S,"--n-icon-margin":P,"--n-icon-margin-rtl":R,"--n-close-size":W,"--n-close-margin":A,"--n-close-margin-rtl":_,"--n-padding":j,"--n-icon-margin-left":k,"--n-icon-margin-right":B}}),l=f?N("alert",$(()=>r.type[0]),g,r):void 0,h=eo(!0),v=()=>{const{onAfterLeave:n,onAfterHide:o}=r;n&&n(),o&&o()};return{rtlEnabled:y,mergedClsPrefix:e,mergedBordered:d,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(o=>{o!==!1&&(h.value=!1)})},handleAfterLeave:()=>{v()},mergedTheme:C,cssVars:f?void 0:g,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),s(J,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:d}=this,f={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},ro(this.$attrs,f)),this.closable&&s(Z,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&s("div",{class:`${e}-alert__border`}),this.showIcon&&s("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},q(d.icon,()=>[s(K,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return s(Y,null);case"info":return s(X,null);case"warning":return s(U,null);case"error":return s(Q,null);default:return null}}})])),s("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},G(d.header,t=>{const C=t||this.title;return C?s("div",{class:`${e}-alert-body__title`},C):null}),d.default&&s("div",{class:`${e}-alert-body__content`},d))):null}})}});export{ao as N};
