import{a as S,v as k,e as p,d as c,l as _,f as v,y as W,z as K,u as T,s as L,g as j,h as B,b as G,G as J}from"./light-d6058c0b.js";import{v as P,aa as A,b3 as Q,i as I,J as l,O as U,F as X,a8 as Y,j as Z,aE as t,t as n,b7 as i,s}from"./runtime-core.esm-bundler-c066f4bf.js";import{N as $}from"./Space-a913e812.js";import{N as x}from"./Tag-76f96a47.js";import{N as w}from"./text-0562d865.js";import{a as ee}from"./Button-d0cd9be2.js";import"./flatten-a133123b.js";import"./get-slot-1efb97e5.js";import"./Close-ebf3a9fb.js";import"./Icon-d321f943.js";import"./use-memo-b9add725.js";import"./FadeInExpandTransition-ff940b4d.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./use-compitable-42538ef7.js";import"./light-d7d7fe15.js";const re=r=>{const{textColor2:e,cardColor:o,modalColor:d,popoverColor:f,dividerColor:h,borderRadius:g,fontSize:m,hoverColor:u}=r;return{textColor:e,color:o,colorHover:u,colorModal:d,colorHoverModal:k(d,u),colorPopover:f,colorHoverPopover:k(f,u),borderColor:h,borderColorModal:k(d,h),borderColorPopover:k(f,h),borderRadius:g,fontSize:m}},te={name:"List",common:S,self:re},oe=te,ie=r=>{const{textColor1:e,textColor2:o,fontWeightStrong:d,fontSize:f}=r;return{fontSize:f,titleTextColor:e,textColor:o,titleFontWeight:d}},ne={name:"Thing",common:S,self:ie},le=ne,ae=p([c("list",`
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
 `,[_("show-divider",[c("list-item",[p("&:not(:last-child)",[v("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),_("clickable",[c("list-item",`
 cursor: pointer;
 `)]),_("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),_("hoverable",[c("list-item",`
 border-radius: var(--n-border-radius);
 `,[p("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[v("divider",`
 background-color: transparent;
 `)])])]),_("bordered, hoverable",[c("list-item",`
 padding: 12px 20px;
 `),v("header, footer",`
 padding: 12px 20px;
 `)]),v("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[p("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),c("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[v("prefix",`
 margin-right: 20px;
 flex: 0;
 `),v("suffix",`
 margin-left: 20px;
 flex: 0;
 `),v("main",`
 flex: 1;
 `),v("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),W(c("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),K(c("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),de=Object.assign(Object.assign({},j.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),N=G("n-list"),se=P({name:"List",props:de,setup(r){const{mergedClsPrefixRef:e,inlineThemeDisabled:o,mergedRtlRef:d}=T(r),f=L("List",d,e),h=j("List","-list",ae,oe,r,e);A(N,{showDividerRef:Q(r,"showDivider"),mergedClsPrefixRef:e});const g=I(()=>{const{common:{cubicBezierEaseInOut:u},self:{fontSize:b,textColor:a,color:z,colorModal:R,colorPopover:E,borderColor:H,borderColorModal:D,borderColorPopover:O,borderRadius:M,colorHover:V,colorHoverModal:F,colorHoverPopover:q}}=h.value;return{"--n-font-size":b,"--n-bezier":u,"--n-text-color":a,"--n-color":z,"--n-border-radius":M,"--n-border-color":H,"--n-border-color-modal":D,"--n-border-color-popover":O,"--n-color-modal":R,"--n-color-popover":E,"--n-color-hover":V,"--n-color-hover-modal":F,"--n-color-hover-popover":q}}),m=o?B("list",void 0,g,r):void 0;return{mergedClsPrefix:e,rtlEnabled:f,cssVars:o?void 0:g,themeClass:m?.themeClass,onRender:m?.onRender}},render(){var r;const{$slots:e,mergedClsPrefix:o,onRender:d}=this;return d?.(),l("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},e.header?l("div",{class:`${o}-list__header`},e.header()):null,(r=e.default)===null||r===void 0?void 0:r.call(e),e.footer?l("div",{class:`${o}-list__footer`},e.footer()):null)}}),C=P({name:"ListItem",setup(){const r=U(N,null);return r||J("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:r.showDividerRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){const{$slots:r,mergedClsPrefix:e}=this;return l("li",{class:`${e}-list-item`},r.prefix?l("div",{class:`${e}-list-item__prefix`},r.prefix()):null,r.default?l("div",{class:`${e}-list-item__main`},r):null,r.suffix?l("div",{class:`${e}-list-item__suffix`},r.suffix()):null,this.showDivider&&l("div",{class:`${e}-list-item__divider`}))}}),ce=c("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[c("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),c("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[c("thing-header-wrapper",`
 flex: 1;
 `)]),c("thing-main",`
 flex-grow: 1;
 `,[c("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[v("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),v("description",[p("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),v("content",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("footer",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("action",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),ue=Object.assign(Object.assign({},j.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean}),y=P({name:"Thing",props:ue,setup(r,{slots:e}){const{mergedClsPrefixRef:o,inlineThemeDisabled:d,mergedRtlRef:f}=T(r),h=j("Thing","-thing",ce,le,r,o),g=L("Thing",f,o),m=I(()=>{const{self:{titleTextColor:b,textColor:a,titleFontWeight:z,fontSize:R},common:{cubicBezierEaseInOut:E}}=h.value;return{"--n-bezier":E,"--n-font-size":R,"--n-text-color":a,"--n-title-font-weight":z,"--n-title-text-color":b}}),u=d?B("thing",void 0,m,r):void 0;return()=>{var b;const{value:a}=o,z=g?g.value:!1;return(b=u?.onRender)===null||b===void 0||b.call(u),l("div",{class:[`${a}-thing`,u?.themeClass,z&&`${a}-thing--rtl`],style:d?void 0:m.value},e.avatar&&r.contentIndented?l("div",{class:`${a}-thing-avatar`},e.avatar()):null,l("div",{class:`${a}-thing-main`},!r.contentIndented&&(e.header||r.title||e["header-extra"]||r.titleExtra||e.avatar)?l("div",{class:`${a}-thing-avatar-header-wrapper`},e.avatar?l("div",{class:`${a}-thing-avatar`},e.avatar()):null,e.header||r.title||e["header-extra"]||r.titleExtra?l("div",{class:`${a}-thing-header-wrapper`},l("div",{class:`${a}-thing-header`},e.header||r.title?l("div",{class:`${a}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?l("div",{class:`${a}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null),e.description||r.description?l("div",{class:`${a}-thing-main__description`,style:r.descriptionStyle},e.description?e.description():r.description):null):null):l(X,null,e.header||r.title||e["header-extra"]||r.titleExtra?l("div",{class:`${a}-thing-header`},e.header||r.title?l("div",{class:`${a}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?l("div",{class:`${a}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null):null,e.description||r.description?l("div",{class:`${a}-thing-main__description`,style:r.descriptionStyle},e.description?e.description():r.description):null),e.default||r.content?l("div",{class:`${a}-thing-main__content`,style:r.contentStyle},e.default?e.default():r.content):null,e.footer?l("div",{class:`${a}-thing-main__footer`},e.footer()):null,e.action?l("div",{class:`${a}-thing-main__action`},e.action()):null))}}}),je={__name:"all",setup(r){return(e,o)=>(Y(),Z(i(se),{hoverable:"",clickable:""},{default:t(()=>[n(i(C),null,{default:t(()=>[n(i(y),{title:"刷组卷网","content-style":"margin-top: 10px;",onClick:o[0]||(o[0]=d=>e.$router.push("/zujuanink/preparing-room/queslist"))},{description:t(()=>[n(i($),{size:"small",style:{"margin-top":"4px"}},{default:t(()=>[n(i(x),{bordered:!1,type:"info",size:"small"},{default:t(()=>[s(" Hot ")]),_:1}),n(i(x),{bordered:!1,type:"success",size:"small"},{default:t(()=>[s(" 组卷网 ")]),_:1})]),_:1})]),default:t(()=>[s(" 数据来源："),n(i(w),{code:""},{default:t(()=>[s("zujuanappserver.xkw.com/app-server/v1/ques/list/")]),_:1})]),_:1})]),_:1}),n(i(C),null,{default:t(()=>[n(i(y),{title:"刷套卷","content-style":"margin-top: 10px;",onClick:o[1]||(o[1]=d=>e.$router.push("/zujuanink/preparing-room/paper"))},{description:t(()=>[n(i($),{size:"small",style:{"margin-top":"4px"}},{default:t(()=>[n(i(x),{bordered:!1,type:"info",size:"small"},{default:t(()=>[s(" Hot ")]),_:1}),n(i(x),{bordered:!1,type:"success",size:"small"},{default:t(()=>[s(" 组卷网 ")]),_:1})]),_:1})]),default:t(()=>[s(" 数据来源："),n(i(w),{code:""},{default:t(()=>[s("zujuanappserver.xkw.com/app-server/v1/paper/detail/:bankid/:PaperId")]),_:1})]),_:1})]),_:1}),n(i(C),null,{default:t(()=>[n(i(y),{title:"刷个人题库","content-style":"margin-top: 10px;",onClick:o[2]||(o[2]=d=>e.$router.push("/zujuanink/preparing-room/userbank"))},{description:t(()=>[n(i($),{size:"small",style:{"margin-top":"4px"}},{default:t(()=>[n(i(x),{bordered:!1,type:"success",size:"small"},{default:t(()=>[s(" 组卷网 ")]),_:1})]),_:1})]),default:t(()=>[s(" 数据来源："),n(i(w),{code:""},{default:t(()=>[s("zujuanappserver.xkw.com/app-server/v1/userBank/ques/list")]),_:1})]),_:1})]),_:1}),n(i(C),null,{default:t(()=>[n(i(y),{title:"刷试题篮","content-style":"margin-top: 10px;",onClick:o[3]||(o[3]=d=>e.$router.push("/zujuanink/preparing-room/basket"))},{description:t(()=>[n(i($),{size:"small",style:{"margin-top":"4px"}},{default:t(()=>[n(i(x),{bordered:!1,type:"success",size:"small"},{default:t(()=>[s(" 组卷网 ")]),_:1})]),_:1})]),default:t(()=>[s(" 数据来源："),n(i(w),{code:""},{default:t(()=>[s("zujuanappserver.xkw.com/app-server/v1/basket/:subjectId")]),_:1})]),_:1})]),_:1}),n(i(C),null,{default:t(()=>[n(i(y),{title:"刷错题本","content-style":"margin-top: 10px;",onClick:o[5]||(o[5]=d=>e.$router.push("/zujuanink/preparing-room/incorr-coll"))},{description:t(()=>[n(i($),{size:"small",style:{"margin-top":"4px"}},{default:t(()=>[n(i(x),{bordered:!1,type:"success",size:"small"},{default:t(()=>[s(" Local ")]),_:1})]),_:1})]),default:t(()=>[s(" 推荐从"),n(i(ee),{text:"",onClick:o[4]||(o[4]=d=>e.$router.push("/zujuanink/list/incorr-coll"))},{default:t(()=>[s("错题本")]),_:1}),s("页面进入 ")]),_:1})]),_:1})]),_:1}))}};export{je as default};
