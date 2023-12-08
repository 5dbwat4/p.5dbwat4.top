import{a as U,e as t,d as h,I as X,l as a,f as d,v as Y,x as Z,u as oo,g as P,q as eo,h as ro,r as $}from"./light-96080c0b.js";import{a as p}from"./use-memo-b9add725.js";import{c as to}from"./FadeInExpandTransition-ff940b4d.js";import{g as no,N as ao}from"./Close-d6ea1a86.js";import{k as lo}from"./Scrollbar-25ba1ebe.js";import{v as io,i as w,J as l}from"./runtime-core.esm-bundler-c066f4bf.js";const so={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},co=r=>{const{primaryColor:f,borderRadius:c,lineHeight:o,fontSize:i,cardColor:s,textColor2:v,textColor1:b,dividerColor:n,fontWeightStrong:e,closeIconColor:g,closeIconColorHover:u,closeIconColorPressed:x,closeColorHover:z,closeColorPressed:C,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:m}=r;return Object.assign(Object.assign({},so),{lineHeight:o,color:s,colorModal:S,colorPopover:k,colorTarget:f,colorEmbedded:m,colorEmbeddedModal:m,colorEmbeddedPopover:m,textColor:v,titleTextColor:b,borderColor:n,actionColor:m,titleFontWeight:e,closeColorHover:z,closeColorPressed:C,closeBorderRadius:c,closeIconColor:g,closeIconColorHover:u,closeIconColorPressed:x,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:y,borderRadius:c})},bo={name:"Card",common:U,self:co},go=bo,mo=t([h("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[X({background:"var(--n-color-modal)"}),a("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[t(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[t(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[t(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[t(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[h("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),h("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[t(">",[d("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[t(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[t(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Y(h("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Z(h("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),T={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Co=lo(T),po=Object.assign(Object.assign({},P.props),T),So=io({name:"Card",props:po,setup(r){const f=()=>{const{onClose:e}=r;e&&to(e)},{inlineThemeDisabled:c,mergedClsPrefixRef:o,mergedRtlRef:i}=oo(r),s=P("Card","-card",mo,go,r,o),v=eo("Card",i,o),b=w(()=>{const{size:e}=r,{self:{color:g,colorModal:u,colorTarget:x,textColor:z,titleTextColor:C,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:m,lineHeight:R,closeIconColor:B,closeIconColorHover:E,closeIconColorPressed:_,closeColorHover:M,closeColorPressed:O,closeBorderRadius:H,closeIconSize:I,closeSize:j,boxShadow:F,colorPopover:L,colorEmbedded:N,colorEmbeddedModal:V,colorEmbeddedPopover:W,[$("padding",e)]:K,[$("fontSize",e)]:q,[$("titleFontSize",e)]:A},common:{cubicBezierEaseInOut:D}}=s.value,{top:J,left:G,bottom:Q}=no(K);return{"--n-bezier":D,"--n-border-radius":m,"--n-color":g,"--n-color-modal":u,"--n-color-popover":L,"--n-color-embedded":N,"--n-color-embedded-modal":V,"--n-color-embedded-popover":W,"--n-color-target":x,"--n-text-color":z,"--n-line-height":R,"--n-action-color":k,"--n-title-text-color":C,"--n-title-font-weight":S,"--n-close-icon-color":B,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":_,"--n-close-color-hover":M,"--n-close-color-pressed":O,"--n-border-color":y,"--n-box-shadow":F,"--n-padding-top":J,"--n-padding-bottom":Q,"--n-padding-left":G,"--n-font-size":q,"--n-title-font-size":A,"--n-close-size":j,"--n-close-icon-size":I,"--n-close-border-radius":H}}),n=c?ro("card",w(()=>r.size[0]),b,r):void 0;return{rtlEnabled:v,mergedClsPrefix:o,mergedTheme:s,handleCloseClick:f,cssVars:c?void 0:b,themeClass:n?.themeClass,onRender:n?.onRender}},render(){const{segmented:r,bordered:f,hoverable:c,mergedClsPrefix:o,rtlEnabled:i,onRender:s,embedded:v,tag:b,$slots:n}=this;return s?.(),l(b,{class:[`${o}-card`,this.themeClass,v&&`${o}-card--embedded`,{[`${o}-card--rtl`]:i,[`${o}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${o}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${o}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${o}-card--bordered`]:f,[`${o}-card--hoverable`]:c}],style:this.cssVars,role:this.role},p(n.cover,e=>e&&l("div",{class:`${o}-card-cover`,role:"none"},e)),p(n.header,e=>e||this.title||this.closable?l("div",{class:`${o}-card-header`,style:this.headerStyle},l("div",{class:`${o}-card-header__main`,role:"heading"},e||this.title),p(n["header-extra"],g=>g&&l("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},g)),this.closable?l(ao,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),p(n.default,e=>e&&l("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},e)),p(n.footer,e=>e&&[l("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},e)]),p(n.action,e=>e&&l("div",{class:`${o}-card__action`,role:"none"},e)))}});export{So as N,T as a,Co as b,go as c};
