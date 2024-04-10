import{c as M,m as b,n as p,a as m,i,b as H,h as L,u as O,d as T,o as F,k as a,e as N}from"./light-3c431b54.js";import{f as V}from"./fade-in-height-expand.cssr-0178db3d.js";import{g as D,N as J}from"./Close-4e65a8ab.js";import{b as Z,r as q}from"./use-memo-13475312.js";import{N as G}from"./FadeInExpandTransition-3bfdffc9.js";import{N as K}from"./Icon-9d083982.js";import{E as Q,W as U,I as X,S as Y}from"./Warning-fc401418.js";import{v as oo,i as $,aZ as eo,J as s,W as ro}from"./index-c2ed52a5.js";const no={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},lo=r=>{const{lineHeight:e,borderRadius:d,fontWeightStrong:f,baseColor:t,dividerColor:v,actionColor:y,textColor1:g,textColor2:l,closeColorHover:h,closeColorPressed:C,closeIconColor:n,closeIconColorHover:o,closeIconColorPressed:u,infoColor:x,successColor:I,warningColor:z,errorColor:S,fontSize:P}=r;return Object.assign(Object.assign({},no),{fontSize:P,lineHeight:e,titleFontWeight:f,borderRadius:d,border:`1px solid ${v}`,color:y,titleTextColor:g,iconColor:l,contentTextColor:l,closeBorderRadius:d,closeColorHover:h,closeColorPressed:C,closeIconColor:n,closeIconColorHover:o,closeIconColorPressed:u,borderInfo:`1px solid ${b(t,p(x,{alpha:.25}))}`,colorInfo:b(t,p(x,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:x,contentTextColorInfo:l,closeColorHoverInfo:h,closeColorPressedInfo:C,closeIconColorInfo:n,closeIconColorHoverInfo:o,closeIconColorPressedInfo:u,borderSuccess:`1px solid ${b(t,p(I,{alpha:.25}))}`,colorSuccess:b(t,p(I,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:I,contentTextColorSuccess:l,closeColorHoverSuccess:h,closeColorPressedSuccess:C,closeIconColorSuccess:n,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:u,borderWarning:`1px solid ${b(t,p(z,{alpha:.33}))}`,colorWarning:b(t,p(z,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:z,contentTextColorWarning:l,closeColorHoverWarning:h,closeColorPressedWarning:C,closeIconColorWarning:n,closeIconColorHoverWarning:o,closeIconColorPressedWarning:u,borderError:`1px solid ${b(t,p(S,{alpha:.25}))}`,colorError:b(t,p(S,{alpha:.08})),titleTextColorError:g,iconColorError:S,contentTextColorError:l,closeColorHoverError:h,closeColorPressedError:C,closeIconColorError:n,closeIconColorHoverError:o,closeIconColorPressedError:u})},so={name:"Alert",common:M,self:lo},to=so,io=m("alert",`
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
 `,[L("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),co=Object.assign(Object.assign({},T.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ao=oo({name:"Alert",inheritAttrs:!1,props:co,setup(r){const{mergedClsPrefixRef:e,mergedBorderedRef:d,inlineThemeDisabled:f,mergedRtlRef:t}=O(r),v=T("Alert","-alert",io,to,r,e),y=F("Alert",t,e),g=$(()=>{const{common:{cubicBezierEaseInOut:n},self:o}=v.value,{fontSize:u,borderRadius:x,titleFontWeight:I,lineHeight:z,iconSize:S,iconMargin:P,iconMarginRtl:R,closeIconSize:W,closeBorderRadius:w,closeSize:E,closeMargin:A,closeMarginRtl:_,padding:k}=o,{type:c}=r,{left:B,right:j}=D(P);return{"--n-bezier":n,"--n-color":o[a("color",c)],"--n-close-icon-size":W,"--n-close-border-radius":w,"--n-close-color-hover":o[a("closeColorHover",c)],"--n-close-color-pressed":o[a("closeColorPressed",c)],"--n-close-icon-color":o[a("closeIconColor",c)],"--n-close-icon-color-hover":o[a("closeIconColorHover",c)],"--n-close-icon-color-pressed":o[a("closeIconColorPressed",c)],"--n-icon-color":o[a("iconColor",c)],"--n-border":o[a("border",c)],"--n-title-text-color":o[a("titleTextColor",c)],"--n-content-text-color":o[a("contentTextColor",c)],"--n-line-height":z,"--n-border-radius":x,"--n-font-size":u,"--n-title-font-weight":I,"--n-icon-size":S,"--n-icon-margin":P,"--n-icon-margin-rtl":R,"--n-close-size":E,"--n-close-margin":A,"--n-close-margin-rtl":_,"--n-padding":k,"--n-icon-margin-left":B,"--n-icon-margin-right":j}}),l=f?N("alert",$(()=>r.type[0]),g,r):void 0,h=eo(!0),C=()=>{const{onAfterLeave:n,onAfterHide:o}=r;n&&n(),o&&o()};return{rtlEnabled:y,mergedClsPrefix:e,mergedBordered:d,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(o=>{o!==!1&&(h.value=!1)})},handleAfterLeave:()=>{C()},mergedTheme:v,cssVars:f?void 0:g,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),s(G,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:d}=this,f={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},ro(this.$attrs,f)),this.closable&&s(J,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&s("div",{class:`${e}-alert__border`}),this.showIcon&&s("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},Z(d.icon,()=>[s(K,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return s(Y,null);case"info":return s(X,null);case"warning":return s(U,null);case"error":return s(Q,null);default:return null}}})])),s("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},q(d.header,t=>{const v=t||this.title;return v?s("div",{class:`${e}-alert-body__title`},v):null}),d.default&&s("div",{class:`${e}-alert-body__content`},d))):null}})}});export{ao as N};
