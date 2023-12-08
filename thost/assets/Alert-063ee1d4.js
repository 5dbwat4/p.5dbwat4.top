import{a as j,s as h,o as u,d as S,f as i,l as R,e as F,u as O,g as $,q as V,h as q,r as a}from"./light-96080c0b.js";import{f as D}from"./fade-in-height-expand.cssr-9dfe9456.js";import{N as J,g as K}from"./Close-d6ea1a86.js";import{r as Z,a as G}from"./use-memo-b9add725.js";import{N as Q}from"./FadeInExpandTransition-ff940b4d.js";import{N as U}from"./Icon-e6ca0735.js";import{E as X,W as Y,I as oo,S as eo}from"./Warning-ff31488d.js";import{v as ro,i as E,aZ as no,J as t,W as so}from"./runtime-core.esm-bundler-c066f4bf.js";const to={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},lo=r=>{const{lineHeight:e,borderRadius:d,fontWeightStrong:b,baseColor:l,dividerColor:v,actionColor:P,textColor1:g,textColor2:s,closeColorHover:f,closeColorPressed:C,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,infoColor:o,successColor:x,warningColor:I,errorColor:z,fontSize:T}=r;return Object.assign(Object.assign({},to),{fontSize:T,lineHeight:e,titleFontWeight:b,borderRadius:d,border:`1px solid ${v}`,color:P,titleTextColor:g,iconColor:s,contentTextColor:s,closeBorderRadius:d,closeColorHover:f,closeColorPressed:C,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,borderInfo:`1px solid ${h(l,u(o,{alpha:.25}))}`,colorInfo:h(l,u(o,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:o,contentTextColorInfo:s,closeColorHoverInfo:f,closeColorPressedInfo:C,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${h(l,u(x,{alpha:.25}))}`,colorSuccess:h(l,u(x,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:x,contentTextColorSuccess:s,closeColorHoverSuccess:f,closeColorPressedSuccess:C,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${h(l,u(I,{alpha:.33}))}`,colorWarning:h(l,u(I,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:I,contentTextColorWarning:s,closeColorHoverWarning:f,closeColorPressedWarning:C,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:n,borderError:`1px solid ${h(l,u(z,{alpha:.25}))}`,colorError:h(l,u(z,{alpha:.08})),titleTextColorError:g,iconColorError:z,contentTextColorError:s,closeColorHoverError:f,closeColorPressedError:C,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:n})},io={name:"Alert",common:j,self:lo},co=io,ao=S("alert",`
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
 `),R("closable",[S("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),S("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),D({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
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
 `),R("show-icon",[S("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),S("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[F("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),go=Object.assign(Object.assign({},$.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),xo=ro({name:"Alert",inheritAttrs:!1,props:go,setup(r){const{mergedClsPrefixRef:e,mergedBorderedRef:d,inlineThemeDisabled:b,mergedRtlRef:l}=O(r),v=$("Alert","-alert",ao,co,r,e),P=V("Alert",l,e),g=E(()=>{const{common:{cubicBezierEaseInOut:n},self:o}=v.value,{fontSize:x,borderRadius:I,titleFontWeight:z,lineHeight:T,iconSize:H,iconMargin:y,iconMarginRtl:W,closeIconSize:A,closeBorderRadius:w,closeSize:B,closeMargin:_,closeMarginRtl:L,padding:M}=o,{type:c}=r,{left:k,right:N}=K(y);return{"--n-bezier":n,"--n-color":o[a("color",c)],"--n-close-icon-size":A,"--n-close-border-radius":w,"--n-close-color-hover":o[a("closeColorHover",c)],"--n-close-color-pressed":o[a("closeColorPressed",c)],"--n-close-icon-color":o[a("closeIconColor",c)],"--n-close-icon-color-hover":o[a("closeIconColorHover",c)],"--n-close-icon-color-pressed":o[a("closeIconColorPressed",c)],"--n-icon-color":o[a("iconColor",c)],"--n-border":o[a("border",c)],"--n-title-text-color":o[a("titleTextColor",c)],"--n-content-text-color":o[a("contentTextColor",c)],"--n-line-height":T,"--n-border-radius":I,"--n-font-size":x,"--n-title-font-weight":z,"--n-icon-size":H,"--n-icon-margin":y,"--n-icon-margin-rtl":W,"--n-close-size":B,"--n-close-margin":_,"--n-close-margin-rtl":L,"--n-padding":M,"--n-icon-margin-left":k,"--n-icon-margin-right":N}}),s=b?q("alert",E(()=>r.type[0]),g,r):void 0,f=no(!0),C=()=>{const{onAfterLeave:n,onAfterHide:o}=r;n&&n(),o&&o()};return{rtlEnabled:P,mergedClsPrefix:e,mergedBordered:d,visible:f,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(o=>{o!==!1&&(f.value=!1)})},handleAfterLeave:()=>{C()},mergedTheme:v,cssVars:b?void 0:g,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),t(Q,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:d}=this,b={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?t("div",Object.assign({},so(this.$attrs,b)),this.closable&&t(J,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&t("div",{class:`${e}-alert__border`}),this.showIcon&&t("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},Z(d.icon,()=>[t(U,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return t(eo,null);case"info":return t(oo,null);case"warning":return t(Y,null);case"error":return t(X,null);default:return null}}})])),t("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},G(d.header,l=>{const v=l||this.title;return v?t("div",{class:`${e}-alert-body__title`},v):null}),d.default&&t("div",{class:`${e}-alert-body__content`},d))):null}})}});export{xo as N};
