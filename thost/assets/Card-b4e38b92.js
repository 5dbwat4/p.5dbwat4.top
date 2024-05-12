import{c as X,h as t,a as h,p as Y,b as a,i as d,q as Z,r as oo,u as eo,d as P,o as ro,k as w,e as to}from"./light-cb8e5d18.js";import{g as no,N as ao}from"./Close-df27b242.js";import{r as m}from"./use-memo-7138c88c.js";import{c as lo}from"./use-is-mounted-e356ec1d.js";import{k as io}from"./keysOf-5d5107c5.js";import{w as so,j as E,N as l}from"./index-6b27469d.js";const co={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},bo=r=>{const{primaryColor:v,borderRadius:c,lineHeight:o,fontSize:i,cardColor:s,textColor2:f,textColor1:b,dividerColor:n,fontWeightStrong:e,closeIconColor:g,closeIconColorHover:x,closeIconColorPressed:C,closeColorHover:u,closeColorPressed:z,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:p}=r;return Object.assign(Object.assign({},co),{lineHeight:o,color:s,colorModal:S,colorPopover:k,colorTarget:v,colorEmbedded:p,colorEmbeddedModal:p,colorEmbeddedPopover:p,textColor:f,titleTextColor:b,borderColor:n,actionColor:p,titleFontWeight:e,closeColorHover:u,closeColorPressed:z,closeBorderRadius:c,closeIconColor:g,closeIconColorHover:x,closeIconColorPressed:C,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:y,borderRadius:c})},go={name:"Card",common:X,self:bo},H=go,po=t([h("card",`
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
 `,[Y({background:"var(--n-color-modal)"}),a("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[t(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[t(">",[d("content",`
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
 `)]),Z(h("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),oo(h("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),$={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},mo=io($),vo=Object.assign(Object.assign({},P.props),$),fo=so({name:"Card",props:vo,setup(r){const v=()=>{const{onClose:e}=r;e&&lo(e)},{inlineThemeDisabled:c,mergedClsPrefixRef:o,mergedRtlRef:i}=eo(r),s=P("Card","-card",po,H,r,o),f=ro("Card",i,o),b=E(()=>{const{size:e}=r,{self:{color:g,colorModal:x,colorTarget:C,textColor:u,titleTextColor:z,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:p,lineHeight:I,closeIconColor:T,closeIconColorHover:_,closeIconColorPressed:R,closeColorHover:j,closeColorPressed:O,closeBorderRadius:B,closeIconSize:F,closeSize:M,boxShadow:L,colorPopover:N,colorEmbedded:W,colorEmbeddedModal:V,colorEmbeddedPopover:q,[w("padding",e)]:A,[w("fontSize",e)]:D,[w("titleFontSize",e)]:G},common:{cubicBezierEaseInOut:J}}=s.value,{top:K,left:Q,bottom:U}=no(A);return{"--n-bezier":J,"--n-border-radius":p,"--n-color":g,"--n-color-modal":x,"--n-color-popover":N,"--n-color-embedded":W,"--n-color-embedded-modal":V,"--n-color-embedded-popover":q,"--n-color-target":C,"--n-text-color":u,"--n-line-height":I,"--n-action-color":k,"--n-title-text-color":z,"--n-title-font-weight":S,"--n-close-icon-color":T,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":R,"--n-close-color-hover":j,"--n-close-color-pressed":O,"--n-border-color":y,"--n-box-shadow":L,"--n-padding-top":K,"--n-padding-bottom":U,"--n-padding-left":Q,"--n-font-size":D,"--n-title-font-size":G,"--n-close-size":M,"--n-close-icon-size":F,"--n-close-border-radius":B}}),n=c?to("card",E(()=>r.size[0]),b,r):void 0;return{rtlEnabled:f,mergedClsPrefix:o,mergedTheme:s,handleCloseClick:v,cssVars:c?void 0:b,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{segmented:r,bordered:v,hoverable:c,mergedClsPrefix:o,rtlEnabled:i,onRender:s,embedded:f,tag:b,$slots:n}=this;return s==null||s(),l(b,{class:[`${o}-card`,this.themeClass,f&&`${o}-card--embedded`,{[`${o}-card--rtl`]:i,[`${o}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${o}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${o}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${o}-card--bordered`]:v,[`${o}-card--hoverable`]:c}],style:this.cssVars,role:this.role},m(n.cover,e=>e&&l("div",{class:`${o}-card-cover`,role:"none"},e)),m(n.header,e=>e||this.title||this.closable?l("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle},l("div",{class:`${o}-card-header__main`,role:"heading"},e||this.title),m(n["header-extra"],g=>g&&l("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},g)),this.closable?l(ao,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),m(n.default,e=>e&&l("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},e)),m(n.footer,e=>e&&[l("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},e)]),m(n.action,e=>e&&l("div",{class:`${o}-card__action`,role:"none"},e)))}});export{fo as N,$ as a,mo as b,H as c};
