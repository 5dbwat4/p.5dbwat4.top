import{c as _,m as f,h as v,a as n,b,i as s,q as B,r as H,u as z,o as w,d as x,e as S,g as I,t as M}from"./light-cb8e5d18.js";import{w as $,ad as L,b8 as F,j as y,N as o,R as W,F as N}from"./index-6b27469d.js";const V=r=>{const{textColor2:e,cardColor:i,modalColor:l,popoverColor:c,dividerColor:h,borderRadius:p,fontSize:d,hoverColor:a}=r;return{textColor:e,color:i,colorHover:a,colorModal:l,colorHoverModal:f(l,a),colorPopover:c,colorHoverPopover:f(c,a),borderColor:h,borderColorModal:f(l,h),borderColorPopover:f(c,h),borderRadius:p,fontSize:d}},q={name:"List",common:_,self:V},A=q,G=r=>{const{textColor1:e,textColor2:i,fontWeightStrong:l,fontSize:c}=r;return{fontSize:c,titleTextColor:e,textColor:i,titleFontWeight:l}},J={name:"Thing",common:_,self:G},K=J,Q=v([n("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[b("show-divider",[n("list-item",[v("&:not(:last-child)",[s("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),b("clickable",[n("list-item",`
 cursor: pointer;
 `)]),b("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),b("hoverable",[n("list-item",`
 border-radius: var(--n-border-radius);
 `,[v("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[s("divider",`
 background-color: transparent;
 `)])])]),b("bordered, hoverable",[n("list-item",`
 padding: 12px 20px;
 `),s("header, footer",`
 padding: 12px 20px;
 `)]),s("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[v("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),n("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s("prefix",`
 margin-right: 20px;
 flex: 0;
 `),s("suffix",`
 margin-left: 20px;
 flex: 0;
 `),s("main",`
 flex: 1;
 `),s("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),B(n("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),H(n("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),U=Object.assign(Object.assign({},x.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),R=I("n-list"),X=$({name:"List",props:U,setup(r){const{mergedClsPrefixRef:e,inlineThemeDisabled:i,mergedRtlRef:l}=z(r),c=w("List",l,e),h=x("List","-list",Q,A,r,e);L(R,{showDividerRef:F(r,"showDivider"),mergedClsPrefixRef:e});const p=y(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:g,textColor:t,color:m,colorModal:u,colorPopover:C,borderColor:P,borderColorModal:k,borderColorPopover:E,borderRadius:D,colorHover:j,colorHoverModal:O,colorHoverPopover:T}}=h.value;return{"--n-font-size":g,"--n-bezier":a,"--n-text-color":t,"--n-color":m,"--n-border-radius":D,"--n-border-color":P,"--n-border-color-modal":k,"--n-border-color-popover":E,"--n-color-modal":u,"--n-color-popover":C,"--n-color-hover":j,"--n-color-hover-modal":O,"--n-color-hover-popover":T}}),d=i?S("list",void 0,p,r):void 0;return{mergedClsPrefix:e,rtlEnabled:c,cssVars:i?void 0:p,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var r;const{$slots:e,mergedClsPrefix:i,onRender:l}=this;return l==null||l(),o("ul",{class:[`${i}-list`,this.rtlEnabled&&`${i}-list--rtl`,this.bordered&&`${i}-list--bordered`,this.showDivider&&`${i}-list--show-divider`,this.hoverable&&`${i}-list--hoverable`,this.clickable&&`${i}-list--clickable`,this.themeClass],style:this.cssVars},e.header?o("div",{class:`${i}-list__header`},e.header()):null,(r=e.default)===null||r===void 0?void 0:r.call(e),e.footer?o("div",{class:`${i}-list__footer`},e.footer()):null)}}),Y=$({name:"ListItem",setup(){const r=W(R,null);return r||M("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:r.showDividerRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){const{$slots:r,mergedClsPrefix:e}=this;return o("li",{class:`${e}-list-item`},r.prefix?o("div",{class:`${e}-list-item__prefix`},r.prefix()):null,r.default?o("div",{class:`${e}-list-item__main`},r):null,r.suffix?o("div",{class:`${e}-list-item__suffix`},r.suffix()):null,this.showDivider&&o("div",{class:`${e}-list-item__divider`}))}}),Z=n("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[n("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),n("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[n("thing-header-wrapper",`
 flex: 1;
 `)]),n("thing-main",`
 flex-grow: 1;
 `,[n("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[s("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),s("description",[v("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),s("content",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("footer",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)]),s("action",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),ee=Object.assign(Object.assign({},x.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),re=$({name:"Thing",props:ee,setup(r,{slots:e}){const{mergedClsPrefixRef:i,inlineThemeDisabled:l,mergedRtlRef:c}=z(r),h=x("Thing","-thing",Z,K,r,i),p=w("Thing",c,i),d=y(()=>{const{self:{titleTextColor:g,textColor:t,titleFontWeight:m,fontSize:u},common:{cubicBezierEaseInOut:C}}=h.value;return{"--n-bezier":C,"--n-font-size":u,"--n-text-color":t,"--n-title-font-weight":m,"--n-title-text-color":g}}),a=l?S("thing",void 0,d,r):void 0;return()=>{var g;const{value:t}=i,m=p?p.value:!1;return(g=a==null?void 0:a.onRender)===null||g===void 0||g.call(a),o("div",{class:[`${t}-thing`,a==null?void 0:a.themeClass,m&&`${t}-thing--rtl`],style:l?void 0:d.value},e.avatar&&r.contentIndented?o("div",{class:`${t}-thing-avatar`},e.avatar()):null,o("div",{class:`${t}-thing-main`},!r.contentIndented&&(e.header||r.title||e["header-extra"]||r.titleExtra||e.avatar)?o("div",{class:`${t}-thing-avatar-header-wrapper`},e.avatar?o("div",{class:`${t}-thing-avatar`},e.avatar()):null,e.header||r.title||e["header-extra"]||r.titleExtra?o("div",{class:`${t}-thing-header-wrapper`},o("div",{class:`${t}-thing-header`},e.header||r.title?o("div",{class:`${t}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?o("div",{class:`${t}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null),e.description||r.description?o("div",{class:[`${t}-thing-main__description`,r.descriptionClass],style:r.descriptionStyle},e.description?e.description():r.description):null):null):o(N,null,e.header||r.title||e["header-extra"]||r.titleExtra?o("div",{class:`${t}-thing-header`},e.header||r.title?o("div",{class:`${t}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?o("div",{class:`${t}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null):null,e.description||r.description?o("div",{class:[`${t}-thing-main__description`,r.descriptionClass],style:r.descriptionStyle},e.description?e.description():r.description):null),e.default||r.content?o("div",{class:[`${t}-thing-main__content`,r.contentClass],style:r.contentStyle},e.default?e.default():r.content):null,e.footer?o("div",{class:`${t}-thing-main__footer`},e.footer()):null,e.action?o("div",{class:`${t}-thing-main__action`},e.action()):null))}}});export{re as N,Y as a,X as b};
