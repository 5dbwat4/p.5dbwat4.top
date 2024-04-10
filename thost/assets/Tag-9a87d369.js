import{c as co,n as o,a as so,b as u,i as x,j as y,h as S,u as no,d as D,o as to,k as d,e as io,g as ho}from"./light-3c431b54.js";import{g as go,N as bo}from"./Close-4e65a8ab.js";import{c as L}from"./Loading-b36f50c8.js";import{r as U}from"./use-memo-13475312.js";import{c as Co}from"./use-is-mounted-912be460.js";import{v as po,aZ as vo,aa as uo,b3 as ko,i as N,J as z}from"./index-c2ed52a5.js";const mo={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"},fo=a=>{const{textColor2:h,primaryColorHover:r,primaryColorPressed:k,primaryColor:c,infoColor:i,successColor:n,warningColor:s,errorColor:t,baseColor:m,borderColor:f,opacityDisabled:g,tagColor:p,closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:v,borderRadiusSmall:b,fontSizeMini:C,fontSizeTiny:P,fontSizeSmall:B,fontSizeMedium:$,heightMini:H,heightTiny:M,heightSmall:R,heightMedium:T,closeColorHover:E,closeColorPressed:W,buttonColor2Hover:w,buttonColor2Pressed:O,fontWeightStrong:_}=a;return Object.assign(Object.assign({},mo),{closeBorderRadius:b,heightTiny:H,heightSmall:M,heightMedium:R,heightLarge:T,borderRadius:b,opacityDisabled:g,fontSizeTiny:C,fontSizeSmall:P,fontSizeMedium:B,fontSizeLarge:$,fontWeightStrong:_,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:m,colorCheckable:"#0000",colorHoverCheckable:w,colorPressedCheckable:O,colorChecked:c,colorCheckedHover:r,colorCheckedPressed:k,border:`1px solid ${f}`,textColor:h,color:p,colorBordered:"rgb(250, 250, 252)",closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:v,closeColorHover:E,closeColorPressed:W,borderPrimary:`1px solid ${o(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:o(c,{alpha:.12}),colorBorderedPrimary:o(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:o(c,{alpha:.12}),closeColorPressedPrimary:o(c,{alpha:.18}),borderInfo:`1px solid ${o(i,{alpha:.3})}`,textColorInfo:i,colorInfo:o(i,{alpha:.12}),colorBorderedInfo:o(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:o(i,{alpha:.12}),closeColorPressedInfo:o(i,{alpha:.18}),borderSuccess:`1px solid ${o(n,{alpha:.3})}`,textColorSuccess:n,colorSuccess:o(n,{alpha:.12}),colorBorderedSuccess:o(n,{alpha:.1}),closeIconColorSuccess:n,closeIconColorHoverSuccess:n,closeIconColorPressedSuccess:n,closeColorHoverSuccess:o(n,{alpha:.12}),closeColorPressedSuccess:o(n,{alpha:.18}),borderWarning:`1px solid ${o(s,{alpha:.35})}`,textColorWarning:s,colorWarning:o(s,{alpha:.15}),colorBorderedWarning:o(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:o(s,{alpha:.12}),closeColorPressedWarning:o(s,{alpha:.18}),borderError:`1px solid ${o(t,{alpha:.23})}`,textColorError:t,colorError:o(t,{alpha:.1}),colorBorderedError:o(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:o(t,{alpha:.12}),closeColorPressedError:o(t,{alpha:.18})})},xo={name:"Tag",common:co,self:fo},zo=xo,Io={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},yo=so("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[u("strong",`
 font-weight: var(--n-font-weight-strong);
 `),x("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),x("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),x("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),x("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),u("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[x("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),x("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),u("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),u("icon, avatar",[u("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),u("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),u("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[y("disabled",[S("&:hover","background-color: var(--n-color-hover-checkable);",[y("checked","color: var(--n-text-color-hover-checkable);")]),S("&:active","background-color: var(--n-color-pressed-checkable);",[y("checked","color: var(--n-text-color-pressed-checkable);")])]),u("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[y("disabled",[S("&:hover","background-color: var(--n-color-checked-hover);"),S("&:active","background-color: var(--n-color-checked-pressed);")])])])]),So=Object.assign(Object.assign(Object.assign({},D.props),Io),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Po=ho("n-tag"),Bo=po({name:"Tag",props:So,setup(a){const h=vo(null),{mergedBorderedRef:r,mergedClsPrefixRef:k,inlineThemeDisabled:c,mergedRtlRef:i}=no(a),n=D("Tag","-tag",yo,zo,a,k);uo(Po,{roundRef:ko(a,"round")});function s(e){if(!a.disabled&&a.checkable){const{checked:l,onCheckedChange:v,onUpdateChecked:b,"onUpdate:checked":C}=a;b&&b(!l),C&&C(!l),v&&v(!l)}}function t(e){if(a.triggerClickOnClose||e.stopPropagation(),!a.disabled){const{onClose:l}=a;l&&Co(l,e)}}const m={setTextContent(e){const{value:l}=h;l&&(l.textContent=e)}},f=to("Tag",i,k),g=N(()=>{const{type:e,size:l,color:{color:v,textColor:b}={}}=a,{common:{cubicBezierEaseInOut:C},self:{padding:P,closeMargin:B,borderRadius:$,opacityDisabled:H,textColorCheckable:M,textColorHoverCheckable:R,textColorPressedCheckable:T,textColorChecked:E,colorCheckable:W,colorHoverCheckable:w,colorPressedCheckable:O,colorChecked:_,colorCheckedHover:V,colorCheckedPressed:A,closeBorderRadius:J,fontWeightStrong:Z,[d("colorBordered",e)]:q,[d("closeSize",l)]:G,[d("closeIconSize",l)]:K,[d("fontSize",l)]:Q,[d("height",l)]:j,[d("color",e)]:X,[d("textColor",e)]:Y,[d("border",e)]:oo,[d("closeIconColor",e)]:F,[d("closeIconColorHover",e)]:eo,[d("closeIconColorPressed",e)]:ro,[d("closeColorHover",e)]:lo,[d("closeColorPressed",e)]:ao}}=n.value,I=go(B);return{"--n-font-weight-strong":Z,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":C,"--n-border-radius":$,"--n-border":oo,"--n-close-icon-size":K,"--n-close-color-pressed":ao,"--n-close-color-hover":lo,"--n-close-border-radius":J,"--n-close-icon-color":F,"--n-close-icon-color-hover":eo,"--n-close-icon-color-pressed":ro,"--n-close-icon-color-disabled":F,"--n-close-margin-top":I.top,"--n-close-margin-right":I.right,"--n-close-margin-bottom":I.bottom,"--n-close-margin-left":I.left,"--n-close-size":G,"--n-color":v||(r.value?q:X),"--n-color-checkable":W,"--n-color-checked":_,"--n-color-checked-hover":V,"--n-color-checked-pressed":A,"--n-color-hover-checkable":w,"--n-color-pressed-checkable":O,"--n-font-size":Q,"--n-height":j,"--n-opacity-disabled":H,"--n-padding":P,"--n-text-color":b||Y,"--n-text-color-checkable":M,"--n-text-color-checked":E,"--n-text-color-hover-checkable":R,"--n-text-color-pressed-checkable":T}}),p=c?io("tag",N(()=>{let e="";const{type:l,size:v,color:{color:b,textColor:C}={}}=a;return e+=l[0],e+=v[0],b&&(e+=`a${L(b)}`),C&&(e+=`b${L(C)}`),r.value&&(e+="c"),e}),g,a):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:f,mergedClsPrefix:k,contentRef:h,mergedBordered:r,handleClick:s,handleCloseClick:t,cssVars:c?void 0:g,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender})},render(){var a,h;const{mergedClsPrefix:r,rtlEnabled:k,closable:c,color:{borderColor:i}={},round:n,onRender:s,$slots:t}=this;s==null||s();const m=U(t.avatar,g=>g&&z("div",{class:`${r}-tag__avatar`},g)),f=U(t.icon,g=>g&&z("div",{class:`${r}-tag__icon`},g));return z("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:k,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:n,[`${r}-tag--avatar`]:m,[`${r}-tag--icon`]:f,[`${r}-tag--closable`]:c}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},f||m,z("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(a=this.$slots).default)===null||h===void 0?void 0:h.call(a)),!this.checkable&&c?z(bo,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:n,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?z("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{Bo as N};
