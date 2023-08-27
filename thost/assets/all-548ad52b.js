import{a as S,t as C,f,e as s,k as _,g as v,x as q,y as K,u as T,s as L,h as z,j as B,d as J,B as A}from"./light-061b806c.js";import{v as E,aa as G,b3 as Q,i as N,J as o,O as U,F as X,a8 as Y,j as Z,aE as n,t as d,b7 as a,s as m}from"./runtime-core.esm-bundler-42be6625.js";import{N as w}from"./Space-26ed86db.js";import{N as $}from"./Tag-526ae436.js";import{N as P}from"./text-b92bd4c7.js";import{b as ee}from"./Button-cc4d8cf9.js";import"./flatten-7ea74e97.js";import"./get-slot-1efb97e5.js";import"./Close-7ee9b945.js";import"./Icon-9bae1ecc.js";import"./resolve-slot-612957d7.js";import"./call-7e0089d6.js";import"./use-compitable-85535777.js";import"./light-1325cd86.js";import"./use-memo-8d560c6d.js";import"./FadeInExpandTransition-8360c680.js";import"./runtime-dom.esm-bundler-4c01a608.js";const re=r=>{const{textColor2:e,cardColor:t,modalColor:l,popoverColor:h,dividerColor:g,borderRadius:p,fontSize:u,hoverColor:c}=r;return{textColor:e,color:t,colorHover:c,colorModal:l,colorHoverModal:C(l,c),colorPopover:h,colorHoverPopover:C(h,c),borderColor:g,borderColorModal:C(l,g),borderColorPopover:C(h,g),borderRadius:p,fontSize:u}},te={name:"List",common:S,self:re},oe=te,ie=r=>{const{textColor1:e,textColor2:t,fontWeightStrong:l,fontSize:h}=r;return{fontSize:h,titleTextColor:e,textColor:t,titleFontWeight:l}},ne={name:"Thing",common:S,self:ie},le=ne,ae=f([s("list",`
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
 `,[_("show-divider",[s("list-item",[f("&:not(:last-child)",[v("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),_("clickable",[s("list-item",`
 cursor: pointer;
 `)]),_("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),_("hoverable",[s("list-item",`
 border-radius: var(--n-border-radius);
 `,[f("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[v("divider",`
 background-color: transparent;
 `)])])]),_("bordered, hoverable",[s("list-item",`
 padding: 12px 20px;
 `),v("header, footer",`
 padding: 12px 20px;
 `)]),v("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[f("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),s("list-item",`
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
 `)])]),q(s("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),K(s("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),de=Object.assign(Object.assign({},z.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),I=J("n-list"),se=E({name:"List",props:de,setup(r){const{mergedClsPrefixRef:e,inlineThemeDisabled:t,mergedRtlRef:l}=T(r),h=L("List",l,e),g=z("List","-list",ae,oe,r,e);G(I,{showDividerRef:Q(r,"showDivider"),mergedClsPrefixRef:e});const p=N(()=>{const{common:{cubicBezierEaseInOut:c},self:{fontSize:b,textColor:i,color:x,colorModal:y,colorPopover:k,borderColor:H,borderColorModal:D,borderColorPopover:O,borderRadius:M,colorHover:V,colorHoverModal:F,colorHoverPopover:W}}=g.value;return{"--n-font-size":b,"--n-bezier":c,"--n-text-color":i,"--n-color":x,"--n-border-radius":M,"--n-border-color":H,"--n-border-color-modal":D,"--n-border-color-popover":O,"--n-color-modal":y,"--n-color-popover":k,"--n-color-hover":V,"--n-color-hover-modal":F,"--n-color-hover-popover":W}}),u=t?B("list",void 0,p,r):void 0;return{mergedClsPrefix:e,rtlEnabled:h,cssVars:t?void 0:p,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var r;const{$slots:e,mergedClsPrefix:t,onRender:l}=this;return l==null||l(),o("ul",{class:[`${t}-list`,this.rtlEnabled&&`${t}-list--rtl`,this.bordered&&`${t}-list--bordered`,this.showDivider&&`${t}-list--show-divider`,this.hoverable&&`${t}-list--hoverable`,this.clickable&&`${t}-list--clickable`,this.themeClass],style:this.cssVars},e.header?o("div",{class:`${t}-list__header`},e.header()):null,(r=e.default)===null||r===void 0?void 0:r.call(e),e.footer?o("div",{class:`${t}-list__footer`},e.footer()):null)}}),R=E({name:"ListItem",setup(){const r=U(I,null);return r||A("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:r.showDividerRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){const{$slots:r,mergedClsPrefix:e}=this;return o("li",{class:`${e}-list-item`},r.prefix?o("div",{class:`${e}-list-item__prefix`},r.prefix()):null,r.default?o("div",{class:`${e}-list-item__main`},r):null,r.suffix?o("div",{class:`${e}-list-item__suffix`},r.suffix()):null,this.showDivider&&o("div",{class:`${e}-list-item__divider`}))}}),ce=s("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[s("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),s("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[s("thing-header-wrapper",`
 flex: 1;
 `)]),s("thing-main",`
 flex-grow: 1;
 `,[s("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[v("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),v("description",[f("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),v("content",[f("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("footer",[f("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("action",[f("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),ve=Object.assign(Object.assign({},z.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean}),j=E({name:"Thing",props:ve,setup(r,{slots:e}){const{mergedClsPrefixRef:t,inlineThemeDisabled:l,mergedRtlRef:h}=T(r),g=z("Thing","-thing",ce,le,r,t),p=L("Thing",h,t),u=N(()=>{const{self:{titleTextColor:b,textColor:i,titleFontWeight:x,fontSize:y},common:{cubicBezierEaseInOut:k}}=g.value;return{"--n-bezier":k,"--n-font-size":y,"--n-text-color":i,"--n-title-font-weight":x,"--n-title-text-color":b}}),c=l?B("thing",void 0,u,r):void 0;return()=>{var b;const{value:i}=t,x=p?p.value:!1;return(b=c==null?void 0:c.onRender)===null||b===void 0||b.call(c),o("div",{class:[`${i}-thing`,c==null?void 0:c.themeClass,x&&`${i}-thing--rtl`],style:l?void 0:u.value},e.avatar&&r.contentIndented?o("div",{class:`${i}-thing-avatar`},e.avatar()):null,o("div",{class:`${i}-thing-main`},!r.contentIndented&&(e.header||r.title||e["header-extra"]||r.titleExtra||e.avatar)?o("div",{class:`${i}-thing-avatar-header-wrapper`},e.avatar?o("div",{class:`${i}-thing-avatar`},e.avatar()):null,e.header||r.title||e["header-extra"]||r.titleExtra?o("div",{class:`${i}-thing-header-wrapper`},o("div",{class:`${i}-thing-header`},e.header||r.title?o("div",{class:`${i}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?o("div",{class:`${i}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null),e.description||r.description?o("div",{class:`${i}-thing-main__description`,style:r.descriptionStyle},e.description?e.description():r.description):null):null):o(X,null,e.header||r.title||e["header-extra"]||r.titleExtra?o("div",{class:`${i}-thing-header`},e.header||r.title?o("div",{class:`${i}-thing-header__title`},e.header?e.header():r.title):null,e["header-extra"]||r.titleExtra?o("div",{class:`${i}-thing-header__extra`},e["header-extra"]?e["header-extra"]():r.titleExtra):null):null,e.description||r.description?o("div",{class:`${i}-thing-main__description`,style:r.descriptionStyle},e.description?e.description():r.description):null),e.default||r.content?o("div",{class:`${i}-thing-main__content`,style:r.contentStyle},e.default?e.default():r.content):null,e.footer?o("div",{class:`${i}-thing-main__footer`},e.footer()):null,e.action?o("div",{class:`${i}-thing-main__action`},e.action()):null))}}}),Ee={__name:"all",setup(r){return(e,t)=>(Y(),Z(a(se),{hoverable:"",clickable:""},{default:n(()=>[d(a(R),null,{default:n(()=>[d(a(j),{title:"刷组卷网","content-style":"margin-top: 10px;",onClick:t[0]||(t[0]=l=>e.$router.push("/zujuanink/preparing-room/queslist"))},{description:n(()=>[d(a(w),{size:"small",style:{"margin-top":"4px"}},{default:n(()=>[d(a($),{bordered:!1,type:"info",size:"small"},{default:n(()=>[m(" Hot ")]),_:1}),d(a($),{bordered:!1,type:"success",size:"small"},{default:n(()=>[m(" 组卷网 ")]),_:1})]),_:1})]),default:n(()=>[m(" 数据来源："),d(a(P),{code:""},{default:n(()=>[m("zujuanappserver.xkw.com/app-server/v1/ques/list/")]),_:1})]),_:1})]),_:1}),d(a(R),null,{default:n(()=>[d(a(j),{title:"刷套卷","content-style":"margin-top: 10px;",onClick:t[1]||(t[1]=l=>e.$router.push("/zujuanink/preparing-room/paper"))},{description:n(()=>[d(a(w),{size:"small",style:{"margin-top":"4px"}},{default:n(()=>[d(a($),{bordered:!1,type:"info",size:"small"},{default:n(()=>[m(" Hot ")]),_:1}),d(a($),{bordered:!1,type:"success",size:"small"},{default:n(()=>[m(" 组卷网 ")]),_:1})]),_:1})]),default:n(()=>[m(" 数据来源："),d(a(P),{code:""},{default:n(()=>[m("zujuanappserver.xkw.com/app-server/v1/paper/detail/:bankid/:PaperId")]),_:1})]),_:1})]),_:1}),d(a(R),null,{default:n(()=>[d(a(j),{title:"刷错题本","content-style":"margin-top: 10px;",onClick:t[3]||(t[3]=l=>e.$router.push("/zujuanink/preparing-room/incorr-coll"))},{description:n(()=>[d(a(w),{size:"small",style:{"margin-top":"4px"}},{default:n(()=>[d(a($),{bordered:!1,type:"success",size:"small"},{default:n(()=>[m(" Local ")]),_:1})]),_:1})]),default:n(()=>[m(" 推荐从"),d(a(ee),{text:"",onClick:t[2]||(t[2]=l=>e.$router.push("/zujuanink/list/incorr-coll"))},{default:n(()=>[m("错题本")]),_:1}),m("页面进入 ")]),_:1})]),_:1})]),_:1}))}};export{Ee as default};
