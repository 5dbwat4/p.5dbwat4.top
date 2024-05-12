import{a as V,s as Do,h as f,v as Fo,m as lo,g as Eo,c as Io,b as F,i as x,j as io,d as ao,u as Bo,o as Go,k as t,n as A,e as Wo}from"./light-cb8e5d18.js";import{i as ko,u as Ro,c as co,a as Oo,N as Mo}from"./Loading-a27cceda.js";import{u as jo,r as uo,i as Lo}from"./use-memo-7138c88c.js";import{w as bo,b8 as _o,b2 as L,a1 as No,_ as Qo,N as D,R as Ko,j as Y}from"./index-6b27469d.js";import{N as qo}from"./FadeInExpandTransition-65435983.js";import{c as Vo}from"./use-is-mounted-e356ec1d.js";const _=typeof document<"u"&&typeof window<"u",Ao=V("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Yo=bo({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(r){Do("-base-wave",Ao,_o(r,"clsPrefix"));const C=L(null),g=L(!1);let p=null;return No(()=>{p!==null&&window.clearTimeout(p)}),{active:g,selfRef:C,play(){p!==null&&(window.clearTimeout(p),g.value=!1,p=null),Qo(()=>{var y;(y=C.value)===null||y===void 0||y.offsetHeight,g.value=!0,p=window.setTimeout(()=>{g.value=!1,p=null},1e3)})}}},render(){const{clsPrefix:r}=this;return D("div",{ref:"selfRef","aria-hidden":!0,class:[`${r}-base-wave`,this.active&&`${r}-base-wave--active`]})}}),{cubicBezierEaseInOut:G}=Fo;function Jo({duration:r=".2s",delay:C=".1s"}={}){return[f("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),f("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),f("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${r} ${G},
 max-width ${r} ${G} ${C},
 margin-left ${r} ${G} ${C},
 margin-right ${r} ${G} ${C};
 `),f("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${r} ${G} ${C},
 max-width ${r} ${G},
 margin-left ${r} ${G},
 margin-right ${r} ${G};
 `)]}const Uo=_&&"chrome"in window;_&&navigator.userAgent.includes("Firefox");const xo=_&&navigator.userAgent.includes("Safari")&&!Uo;function k(r){return lo(r,[255,255,255,.16])}function J(r){return lo(r,[0,0,0,.12])}const po=Eo("n-button-group"),Xo={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},Zo=r=>{const{heightTiny:C,heightSmall:g,heightMedium:p,heightLarge:y,borderRadius:R,fontSizeTiny:M,fontSizeSmall:j,fontSizeMedium:U,fontSizeLarge:X,opacityDisabled:Z,textColor2:m,textColor3:oo,primaryColorHover:c,primaryColorPressed:S,borderColor:N,primaryColor:H,baseColor:s,infoColor:z,infoColorHover:h,infoColorPressed:e,successColor:l,successColorHover:b,successColorPressed:o,warningColor:$,warningColorHover:P,warningColorPressed:I,errorColor:w,errorColorHover:u,errorColorPressed:B,fontWeight:E,buttonColor2:O,buttonColor2Hover:T,buttonColor2Pressed:i,fontWeightStrong:Q}=r;return Object.assign(Object.assign({},Xo),{heightTiny:C,heightSmall:g,heightMedium:p,heightLarge:y,borderRadiusTiny:R,borderRadiusSmall:R,borderRadiusMedium:R,borderRadiusLarge:R,fontSizeTiny:M,fontSizeSmall:j,fontSizeMedium:U,fontSizeLarge:X,opacityDisabled:Z,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:O,colorSecondaryHover:T,colorSecondaryPressed:i,colorTertiary:O,colorTertiaryHover:T,colorTertiaryPressed:i,colorQuaternary:"#0000",colorQuaternaryHover:T,colorQuaternaryPressed:i,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:m,textColorTertiary:oo,textColorHover:c,textColorPressed:S,textColorFocus:c,textColorDisabled:m,textColorText:m,textColorTextHover:c,textColorTextPressed:S,textColorTextFocus:c,textColorTextDisabled:m,textColorGhost:m,textColorGhostHover:c,textColorGhostPressed:S,textColorGhostFocus:c,textColorGhostDisabled:m,border:`1px solid ${N}`,borderHover:`1px solid ${c}`,borderPressed:`1px solid ${S}`,borderFocus:`1px solid ${c}`,borderDisabled:`1px solid ${N}`,rippleColor:H,colorPrimary:H,colorHoverPrimary:c,colorPressedPrimary:S,colorFocusPrimary:c,colorDisabledPrimary:H,textColorPrimary:s,textColorHoverPrimary:s,textColorPressedPrimary:s,textColorFocusPrimary:s,textColorDisabledPrimary:s,textColorTextPrimary:H,textColorTextHoverPrimary:c,textColorTextPressedPrimary:S,textColorTextFocusPrimary:c,textColorTextDisabledPrimary:m,textColorGhostPrimary:H,textColorGhostHoverPrimary:c,textColorGhostPressedPrimary:S,textColorGhostFocusPrimary:c,textColorGhostDisabledPrimary:H,borderPrimary:`1px solid ${H}`,borderHoverPrimary:`1px solid ${c}`,borderPressedPrimary:`1px solid ${S}`,borderFocusPrimary:`1px solid ${c}`,borderDisabledPrimary:`1px solid ${H}`,rippleColorPrimary:H,colorInfo:z,colorHoverInfo:h,colorPressedInfo:e,colorFocusInfo:h,colorDisabledInfo:z,textColorInfo:s,textColorHoverInfo:s,textColorPressedInfo:s,textColorFocusInfo:s,textColorDisabledInfo:s,textColorTextInfo:z,textColorTextHoverInfo:h,textColorTextPressedInfo:e,textColorTextFocusInfo:h,textColorTextDisabledInfo:m,textColorGhostInfo:z,textColorGhostHoverInfo:h,textColorGhostPressedInfo:e,textColorGhostFocusInfo:h,textColorGhostDisabledInfo:z,borderInfo:`1px solid ${z}`,borderHoverInfo:`1px solid ${h}`,borderPressedInfo:`1px solid ${e}`,borderFocusInfo:`1px solid ${h}`,borderDisabledInfo:`1px solid ${z}`,rippleColorInfo:z,colorSuccess:l,colorHoverSuccess:b,colorPressedSuccess:o,colorFocusSuccess:b,colorDisabledSuccess:l,textColorSuccess:s,textColorHoverSuccess:s,textColorPressedSuccess:s,textColorFocusSuccess:s,textColorDisabledSuccess:s,textColorTextSuccess:l,textColorTextHoverSuccess:b,textColorTextPressedSuccess:o,textColorTextFocusSuccess:b,textColorTextDisabledSuccess:m,textColorGhostSuccess:l,textColorGhostHoverSuccess:b,textColorGhostPressedSuccess:o,textColorGhostFocusSuccess:b,textColorGhostDisabledSuccess:l,borderSuccess:`1px solid ${l}`,borderHoverSuccess:`1px solid ${b}`,borderPressedSuccess:`1px solid ${o}`,borderFocusSuccess:`1px solid ${b}`,borderDisabledSuccess:`1px solid ${l}`,rippleColorSuccess:l,colorWarning:$,colorHoverWarning:P,colorPressedWarning:I,colorFocusWarning:P,colorDisabledWarning:$,textColorWarning:s,textColorHoverWarning:s,textColorPressedWarning:s,textColorFocusWarning:s,textColorDisabledWarning:s,textColorTextWarning:$,textColorTextHoverWarning:P,textColorTextPressedWarning:I,textColorTextFocusWarning:P,textColorTextDisabledWarning:m,textColorGhostWarning:$,textColorGhostHoverWarning:P,textColorGhostPressedWarning:I,textColorGhostFocusWarning:P,textColorGhostDisabledWarning:$,borderWarning:`1px solid ${$}`,borderHoverWarning:`1px solid ${P}`,borderPressedWarning:`1px solid ${I}`,borderFocusWarning:`1px solid ${P}`,borderDisabledWarning:`1px solid ${$}`,rippleColorWarning:$,colorError:w,colorHoverError:u,colorPressedError:B,colorFocusError:u,colorDisabledError:w,textColorError:s,textColorHoverError:s,textColorPressedError:s,textColorFocusError:s,textColorDisabledError:s,textColorTextError:w,textColorTextHoverError:u,textColorTextPressedError:B,textColorTextFocusError:u,textColorTextDisabledError:m,textColorGhostError:w,textColorGhostHoverError:u,textColorGhostPressedError:B,textColorGhostFocusError:u,textColorGhostDisabledError:w,borderError:`1px solid ${w}`,borderHoverError:`1px solid ${u}`,borderPressedError:`1px solid ${B}`,borderFocusError:`1px solid ${u}`,borderDisabledError:`1px solid ${w}`,rippleColorError:w,waveOpacity:"0.6",fontWeight:E,fontWeightStrong:Q})},or={name:"Button",common:Io,self:Zo},ho=or,rr=f([V("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[F("color",[x("border",{borderColor:"var(--n-border-color)"}),F("disabled",[x("border",{borderColor:"var(--n-border-color-disabled)"})]),io("disabled",[f("&:focus",[x("state-border",{borderColor:"var(--n-border-color-focus)"})]),f("&:hover",[x("state-border",{borderColor:"var(--n-border-color-hover)"})]),f("&:active",[x("state-border",{borderColor:"var(--n-border-color-pressed)"})]),F("pressed",[x("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),F("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[x("border",{border:"var(--n-border-disabled)"})]),io("disabled",[f("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[x("state-border",{border:"var(--n-border-focus)"})]),f("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[x("state-border",{border:"var(--n-border-hover)"})]),f("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[x("state-border",{border:"var(--n-border-pressed)"})]),F("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[x("state-border",{border:"var(--n-border-pressed)"})])]),F("loading","cursor: wait;"),V("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[F("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),_&&"MozBoxSizing"in document.createElement("div").style?f("&::moz-focus-inner",{border:0}):null,x("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),x("border",{border:"var(--n-border)"}),x("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),x("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[V("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[ko({top:"50%",originalTransform:"translateY(-50%)"})]),Jo()]),x("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[f("~",[x("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),F("block",`
 display: flex;
 width: 100%;
 `),F("dashed",[x("border, state-border",{borderStyle:"dashed !important"})]),F("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),f("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),f("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),er=Object.assign(Object.assign({},ao.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!xo}}),vo=bo({name:"Button",props:er,setup(r){const C=L(null),g=L(null),p=L(!1),y=jo(()=>!r.quaternary&&!r.tertiary&&!r.secondary&&!r.text&&(!r.color||r.ghost||r.dashed)&&r.bordered),R=Ko(po,{}),{mergedSizeRef:M}=Ro({},{defaultSize:"medium",mergedSize:e=>{const{size:l}=r;if(l)return l;const{size:b}=R;if(b)return b;const{mergedSize:o}=e||{};return o?o.value:"medium"}}),j=Y(()=>r.focusable&&!r.disabled),U=e=>{var l;j.value||e.preventDefault(),!r.nativeFocusBehavior&&(e.preventDefault(),!r.disabled&&j.value&&((l=C.value)===null||l===void 0||l.focus({preventScroll:!0})))},X=e=>{var l;if(!r.disabled&&!r.loading){const{onClick:b}=r;b&&Vo(b,e),r.text||(l=g.value)===null||l===void 0||l.play()}},Z=e=>{switch(e.key){case"Enter":if(!r.keyboard)return;p.value=!1}},m=e=>{switch(e.key){case"Enter":if(!r.keyboard||r.loading){e.preventDefault();return}p.value=!0}},oo=()=>{p.value=!1},{inlineThemeDisabled:c,mergedClsPrefixRef:S,mergedRtlRef:N}=Bo(r),H=ao("Button","-button",rr,ho,r,S),s=Go("Button",N,S),z=Y(()=>{const e=H.value,{common:{cubicBezierEaseInOut:l,cubicBezierEaseOut:b},self:o}=e,{rippleDuration:$,opacityDisabled:P,fontWeight:I,fontWeightStrong:w}=o,u=M.value,{dashed:B,type:E,ghost:O,text:T,color:i,round:Q,circle:ro,textColor:W,secondary:fo,tertiary:no,quaternary:Co,strong:go}=r,yo={"font-weight":go?w:I};let a={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const K=E==="tertiary",so=E==="default",n=K?"default":E;if(T){const d=W||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":d||o[t("textColorText",n)],"--n-text-color-hover":d?k(d):o[t("textColorTextHover",n)],"--n-text-color-pressed":d?J(d):o[t("textColorTextPressed",n)],"--n-text-color-focus":d?k(d):o[t("textColorTextHover",n)],"--n-text-color-disabled":d||o[t("textColorTextDisabled",n)]}}else if(O||B){const d=W||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":i||o[t("rippleColor",n)],"--n-text-color":d||o[t("textColorGhost",n)],"--n-text-color-hover":d?k(d):o[t("textColorGhostHover",n)],"--n-text-color-pressed":d?J(d):o[t("textColorGhostPressed",n)],"--n-text-color-focus":d?k(d):o[t("textColorGhostHover",n)],"--n-text-color-disabled":d||o[t("textColorGhostDisabled",n)]}}else if(fo){const d=so?o.textColor:K?o.textColorTertiary:o[t("color",n)],v=i||d,q=E!=="default"&&E!=="tertiary";a={"--n-color":q?A(v,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":q?A(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":q?A(v,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":q?A(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":v,"--n-text-color-hover":v,"--n-text-color-pressed":v,"--n-text-color-focus":v,"--n-text-color-disabled":v}}else if(no||Co){const d=so?o.textColor:K?o.textColorTertiary:o[t("color",n)],v=i||d;no?(a["--n-color"]=o.colorTertiary,a["--n-color-hover"]=o.colorTertiaryHover,a["--n-color-pressed"]=o.colorTertiaryPressed,a["--n-color-focus"]=o.colorSecondaryHover,a["--n-color-disabled"]=o.colorTertiary):(a["--n-color"]=o.colorQuaternary,a["--n-color-hover"]=o.colorQuaternaryHover,a["--n-color-pressed"]=o.colorQuaternaryPressed,a["--n-color-focus"]=o.colorQuaternaryHover,a["--n-color-disabled"]=o.colorQuaternary),a["--n-ripple-color"]="#0000",a["--n-text-color"]=v,a["--n-text-color-hover"]=v,a["--n-text-color-pressed"]=v,a["--n-text-color-focus"]=v,a["--n-text-color-disabled"]=v}else a={"--n-color":i||o[t("color",n)],"--n-color-hover":i?k(i):o[t("colorHover",n)],"--n-color-pressed":i?J(i):o[t("colorPressed",n)],"--n-color-focus":i?k(i):o[t("colorFocus",n)],"--n-color-disabled":i||o[t("colorDisabled",n)],"--n-ripple-color":i||o[t("rippleColor",n)],"--n-text-color":W||(i?o.textColorPrimary:K?o.textColorTertiary:o[t("textColor",n)]),"--n-text-color-hover":W||(i?o.textColorHoverPrimary:o[t("textColorHover",n)]),"--n-text-color-pressed":W||(i?o.textColorPressedPrimary:o[t("textColorPressed",n)]),"--n-text-color-focus":W||(i?o.textColorFocusPrimary:o[t("textColorFocus",n)]),"--n-text-color-disabled":W||(i?o.textColorDisabledPrimary:o[t("textColorDisabled",n)])};let eo={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};T?eo={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:eo={"--n-border":o[t("border",n)],"--n-border-hover":o[t("borderHover",n)],"--n-border-pressed":o[t("borderPressed",n)],"--n-border-focus":o[t("borderFocus",n)],"--n-border-disabled":o[t("borderDisabled",n)]};const{[t("height",u)]:to,[t("fontSize",u)]:mo,[t("padding",u)]:Po,[t("paddingRound",u)]:So,[t("iconSize",u)]:$o,[t("borderRadius",u)]:wo,[t("iconMargin",u)]:To,waveOpacity:Ho}=o,zo={"--n-width":ro&&!T?to:"initial","--n-height":T?"initial":to,"--n-font-size":mo,"--n-padding":ro||T?"initial":Q?So:Po,"--n-icon-size":$o,"--n-icon-margin":To,"--n-border-radius":T?"initial":ro||Q?to:wo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":l,"--n-bezier-ease-out":b,"--n-ripple-duration":$,"--n-opacity-disabled":P,"--n-wave-opacity":Ho},yo),a),eo),zo)}),h=c?Wo("button",Y(()=>{let e="";const{dashed:l,type:b,ghost:o,text:$,color:P,round:I,circle:w,textColor:u,secondary:B,tertiary:E,quaternary:O,strong:T}=r;l&&(e+="a"),o&&(e+="b"),$&&(e+="c"),I&&(e+="d"),w&&(e+="e"),B&&(e+="f"),E&&(e+="g"),O&&(e+="h"),T&&(e+="i"),P&&(e+="j"+co(P)),u&&(e+="k"+co(u));const{value:i}=M;return e+="l"+i[0],e+="m"+b[0],e}),z,r):void 0;return{selfElRef:C,waveElRef:g,mergedClsPrefix:S,mergedFocusable:j,mergedSize:M,showBorder:y,enterPressed:p,rtlEnabled:s,handleMousedown:U,handleKeydown:m,handleBlur:oo,handleKeyup:Z,handleClick:X,customColorCssVars:Y(()=>{const{color:e}=r;if(!e)return null;const l=k(e);return{"--n-border-color":e,"--n-border-color-hover":l,"--n-border-color-pressed":J(e),"--n-border-color-focus":l,"--n-border-color-disabled":e}}),cssVars:c?void 0:z,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){const{mergedClsPrefix:r,tag:C,onRender:g}=this;g==null||g();const p=uo(this.$slots.default,y=>y&&D("span",{class:`${r}-button__content`},y));return D(C,{ref:"selfElRef",class:[this.themeClass,`${r}-button`,`${r}-button--${this.type}-type`,`${r}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${r}-button--rtl`,this.disabled&&`${r}-button--disabled`,this.block&&`${r}-button--block`,this.enterPressed&&`${r}-button--pressed`,!this.text&&this.dashed&&`${r}-button--dashed`,this.color&&`${r}-button--color`,this.secondary&&`${r}-button--secondary`,this.loading&&`${r}-button--loading`,this.ghost&&`${r}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&p,D(qo,{width:!0},{default:()=>uo(this.$slots.icon,y=>(this.loading||this.renderIcon||y)&&D("span",{class:`${r}-button__icon`,style:{margin:Lo(this.$slots.default)?"0":""}},D(Oo,null,{default:()=>this.loading?D(Mo,{clsPrefix:r,key:"loading",class:`${r}-icon-slot`,strokeWidth:20}):D("div",{key:"icon",class:`${r}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():y)})))}),this.iconPlacement==="left"&&p,this.text?null:D(Yo,{ref:"waveElRef",clsPrefix:r}),this.showBorder?D("div",{"aria-hidden":!0,class:`${r}-button__border`,style:this.customColorCssVars}):null,this.showBorder?D("div",{"aria-hidden":!0,class:`${r}-button__state-border`,style:this.customColorCssVars}):null)}}),tr=vo,nr=vo;export{tr as N,nr as X,_ as a,ho as b,po as c,xo as i};
