import{P as Ee}from"./CONFIG-d506a2d4.js";import{useRouter as je,useRoute as Fe,onBeforeRouteUpdate as Ke,RouterView as Ve,RouterLink as De}from"./vue-router-3740985a.js";import{c as we,a as ze,s as fe,o as oe,b as Y,d as s,l as I,g as U,u as ce,h as de,f as c,e as x,p as X}from"./light-96080c0b.js";import{v as P,J as d,aZ as E,aa as V,i as w,O as j,b3 as ee,F as Ue,aA as ge,a8 as M,l as F,m as H,b0 as qe,j as We,aE as te,t as Z,b7 as W}from"./runtime-core.esm-bundler-c066f4bf.js";import{s as Ye,u as Ie,N as ke,d as D,a as re,k as se}from"./Scrollbar-25ba1ebe.js";import{N as Se}from"./Icon-e6ca0735.js";import{u as le}from"./use-memo-b9add725.js";import{d as Ge,N as Xe}from"./Dropdown-e7fd699d.js";import{c as O,N as Ze}from"./FadeInExpandTransition-ff940b4d.js";import{t as Je,N as Qe}from"./Tooltip-bd1c8576.js";import{f as eo}from"./fade-in-height-expand.cssr-9dfe9456.js";import{u as ae}from"./use-merged-state-89f8109f.js";import{u as oo}from"./use-compitable-42538ef7.js";import{c as to}from"./create-e19b3023.js";import{C as ro}from"./ChevronRight-989c7384.js";import{f as ne}from"./format-length-c9d165c6.js";import{N as no}from"./Icon-3fbf0a05.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./Popover-c2999df7.js";import"./fade-in-scale-up.cssr-18f1ebda.js";import"./flatten-a133123b.js";import"./use-false-until-truthy-a506b738.js";import"./_baseIsEqual-9220f819.js";import"./get-9e715692.js";import"./cssr-ce5b581a.js";import"./utils-d7fa52af.js";import"./next-frame-once-7035a838.js";const io=P({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),lo=e=>{const{baseColor:t,textColor2:o,bodyColor:n,cardColor:l,dividerColor:a,actionColor:v,scrollbarColor:h,scrollbarColorHover:u,invertedColor:b}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:v,headerColor:l,headerColorInverted:b,footerColor:v,footerColorInverted:b,headerBorderColor:a,headerBorderColorInverted:b,footerBorderColor:a,footerBorderColorInverted:b,siderBorderColor:a,siderBorderColorInverted:b,siderColor:l,siderColorInverted:b,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:fe(n,h),siderToggleBarColorHover:fe(n,u),__invertScrollbar:"true"}},ao=we({name:"Layout",common:ze,peers:{Scrollbar:Ye},self:lo}),He=ao;function co(e,t,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const so=e=>{const{borderRadius:t,textColor3:o,primaryColor:n,textColor2:l,textColor1:a,fontSize:v,dividerColor:h,hoverColor:u,primaryColorHover:b}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:u,itemColorActive:oe(n,{alpha:.1}),itemColorActiveHover:oe(n,{alpha:.1}),itemColorActiveCollapsed:oe(n,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:b,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:b,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:v,dividerColor:h},co("#BBB",n,"#FFF","#AAA"))},uo=we({name:"Menu",common:ze,peers:{Tooltip:Je,Dropdown:Ge},self:so}),vo=uo,Ae=Y("n-layout-sider"),_e={type:String,default:"static"},mo=s("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[s("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ho={embedded:Boolean,position:_e,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Re=Y("n-layout");function po(e){return P({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},U.props),ho),setup(t){const o=E(null),n=E(null),{mergedClsPrefixRef:l,inlineThemeDisabled:a}=ce(t),v=U("Layout","-layout",mo,He,t,l);function h(y,k){if(t.nativeScrollbar){const{value:R}=o;R&&(k===void 0?R.scrollTo(y):R.scrollTo(y,k))}else{const{value:R}=n;R&&R.scrollTo(y,k)}}V(Re,t);let u=0,b=0;const $=y=>{var k;const R=y.target;u=R.scrollLeft,b=R.scrollTop,(k=t.onScroll)===null||k===void 0||k.call(t,y)};Ie(()=>{if(t.nativeScrollbar){const y=o.value;y&&(y.scrollTop=b,y.scrollLeft=u)}});const A={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:h},N=w(()=>{const{common:{cubicBezierEaseInOut:y},self:k}=v.value;return{"--n-bezier":y,"--n-color":t.embedded?k.colorEmbedded:k.color,"--n-text-color":k.textColor}}),_=a?de("layout",w(()=>t.embedded?"e":""),N,t):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:A,mergedTheme:v,handleNativeElScroll:$,cssVars:a?void 0:N,themeClass:_?.themeClass,onRender:_?.onRender},p)},render(){var t;const{mergedClsPrefix:o,hasSider:n}=this;(t=this.onRender)===null||t===void 0||t.call(this);const l=n?this.hasSiderStyle:void 0,a=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return d("div",{class:a,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):d(ke,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const xe=po(!1),fo=s("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[I("bordered",[c("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),c("left-placement",[I("bordered",[c("border",`
 right: 0;
 `)])]),I("right-placement",`
 justify-content: flex-start;
 `,[I("bordered",[c("border",`
 left: 0;
 `)]),I("collapsed",[s("layout-toggle-button",[s("base-icon",`
 transform: rotate(180deg);
 `)]),s("layout-toggle-bar",[x("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),s("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[s("base-icon",`
 transform: rotate(0);
 `)]),s("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[x("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),I("collapsed",[s("layout-toggle-bar",[x("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),s("layout-toggle-button",[s("base-icon",`
 transform: rotate(0);
 `)])]),s("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[s("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),s("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[c("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),c("bottom",`
 position: absolute;
 top: 34px;
 `),x("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),x("&:hover",[c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),c("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),s("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),I("show-content",[s("layout-sider-scroll-container",{opacity:1})]),I("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),go=P({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(Se,{clsPrefix:e},{default:()=>d(ro,null)}))}}),xo=P({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),bo={position:_e,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Co=P({name:"LayoutSider",props:Object.assign(Object.assign({},U.props),bo),setup(e){const t=j(Re),o=E(null),n=E(null),l=w(()=>ne(u.value?e.collapsedWidth:e.width)),a=w(()=>e.collapseMode!=="transform"?{}:{minWidth:ne(e.width)}),v=w(()=>t?t.siderPlacement:"left"),h=E(e.defaultCollapsed),u=ae(ee(e,"collapsed"),h);function b(S,C){if(e.nativeScrollbar){const{value:z}=o;z&&(C===void 0?z.scrollTo(S):z.scrollTo(S,C))}else{const{value:z}=n;z&&z.scrollTo(S,C)}}function $(){const{"onUpdate:collapsed":S,onUpdateCollapsed:C,onExpand:z,onCollapse:f}=e,{value:g}=u;C&&O(C,!g),S&&O(S,!g),h.value=!g,g?z&&O(z):f&&O(f)}let A=0,p=0;const N=S=>{var C;const z=S.target;A=z.scrollLeft,p=z.scrollTop,(C=e.onScroll)===null||C===void 0||C.call(e,S)};Ie(()=>{if(e.nativeScrollbar){const S=o.value;S&&(S.scrollTop=p,S.scrollLeft=A)}}),V(Ae,{collapsedRef:u,collapseModeRef:ee(e,"collapseMode")});const{mergedClsPrefixRef:_,inlineThemeDisabled:y}=ce(e),k=U("Layout","-layout-sider",fo,He,e,_);function R(S){var C,z;S.propertyName==="max-width"&&(u.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(z=e.onAfterEnter)===null||z===void 0||z.call(e))}const q={scrollTo:b},L=w(()=>{const{common:{cubicBezierEaseInOut:S},self:C}=k.value,{siderToggleButtonColor:z,siderToggleButtonBorder:f,siderToggleBarColor:g,siderToggleBarColorHover:r}=C,m={"--n-bezier":S,"--n-toggle-button-color":z,"--n-toggle-button-border":f,"--n-toggle-bar-color":g,"--n-toggle-bar-color-hover":r};return e.inverted?(m["--n-color"]=C.siderColorInverted,m["--n-text-color"]=C.textColorInverted,m["--n-border-color"]=C.siderBorderColorInverted,m["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,m.__invertScrollbar=C.__invertScrollbar):(m["--n-color"]=C.siderColor,m["--n-text-color"]=C.textColor,m["--n-border-color"]=C.siderBorderColor,m["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),m}),B=y?de("layout-sider",w(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:n,mergedClsPrefix:_,mergedTheme:k,styleMaxWidth:l,mergedCollapsed:u,scrollContainerStyle:a,siderPlacement:v,handleNativeElScroll:N,handleTransitionend:R,handleTriggerClick:$,inlineThemeDisabled:y,cssVars:L,themeClass:B?.themeClass,onRender:B?.onRender},q)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ne(this.width)}]},this.nativeScrollbar?d("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(ke,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?d(xo,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(go,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${t}-layout-sider__border`}):null)}}),G=Y("n-menu"),ue=Y("n-submenu"),ve=Y("n-menu-item-group"),J=8;function me(e){const t=j(G),{props:o,mergedCollapsedRef:n}=t,l=j(ue,null),a=j(ve,null),v=w(()=>o.mode==="horizontal"),h=w(()=>v.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),u=w(()=>{var p;return Math.max((p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize,o.iconSize)}),b=w(()=>{var p;return!v.value&&e.root&&n.value&&(p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize}),$=w(()=>{if(v.value)return;const{collapsedWidth:p,indent:N,rootIndent:_}=o,{root:y,isGroup:k}=e,R=_===void 0?N:_;if(y)return n.value?p/2-u.value/2:R;if(a)return N/2+a.paddingLeftRef.value;if(l)return(k?N/2:N)+l.paddingLeftRef.value}),A=w(()=>{const{collapsedWidth:p,indent:N,rootIndent:_}=o,{value:y}=u,{root:k}=e;return v.value||!k||!n.value?J:(_===void 0?N:_)+y+J-(p+y)/2});return{dropdownPlacement:h,activeIconSize:b,maxIconSize:u,paddingLeft:$,iconMarginRight:A,NMenu:t,NSubmenu:l}}const he={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Pe=Object.assign(Object.assign({},he),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),yo=P({name:"MenuOptionGroup",props:Pe,setup(e){V(ue,null);const t=me(e);V(ve,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=j(G);return function(){const{value:l}=o,a=t.paddingLeft.value,{nodeProps:v}=n,h=v?.(e.tmNode.rawNode);return d("div",{class:`${l}-menu-item-group`,role:"group"},d("div",Object.assign({},h,{class:[`${l}-menu-item-group-title`,h?.class],style:[h?.style||"",a!==void 0?`padding-left: ${a}px;`:""]}),D(e.title),e.extra?d(Ue,null," ",D(e.extra)):null),d("div",null,e.tmNodes.map(u=>pe(u,n))))}}}),Te=P({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=j(G);return{menuProps:t,style:w(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:w(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:l,expandIcon:a}}=this,v=o?o(t.rawNode):D(this.icon);return d("div",{onClick:h=>{var u;(u=this.onClick)===null||u===void 0||u.call(this,h)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},v&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[v]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):D(this.title),this.extra||l?d("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(t.rawNode):D(this.extra)):null),this.showArrow?d(Se,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):d(io,null)}):null)}}),Ne=Object.assign(Object.assign({},he),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),wo=P({name:"Submenu",props:Ne,setup(e){const t=me(e),{NMenu:o,NSubmenu:n}=t,{props:l,mergedCollapsedRef:a,mergedThemeRef:v}=o,h=w(()=>{const{disabled:p}=e;return n?.mergedDisabledRef.value||l.disabled?!0:p}),u=E(!1);V(ue,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:h}),V(ve,null);function b(){const{onClick:p}=e;p&&p()}function $(){h.value||(a.value||o.toggleExpand(e.internalKey),b())}function A(p){u.value=p}return{menuProps:l,mergedTheme:v,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:u,paddingLeft:t.paddingLeft,mergedDisabled:h,mergedValue:o.mergedValueRef,childActive:le(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:w(()=>l.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:w(()=>!h.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:A,handleClick:$}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,l=()=>{const{isHorizontal:v,paddingLeft:h,collapsed:u,mergedDisabled:b,maxIconSize:$,activeIconSize:A,title:p,childActive:N,icon:_,handleClick:y,menuProps:{nodeProps:k},dropdownShow:R,iconMarginRight:q,tmNode:L,mergedClsPrefix:B}=this,S=k?.(L.rawNode);return d("div",Object.assign({},S,{class:[`${B}-menu-item`,S?.class],role:"menuitem"}),d(Te,{tmNode:L,paddingLeft:h,collapsed:u,disabled:b,iconMarginRight:q,maxIconSize:$,activeIconSize:A,title:p,extra:this.extra,showArrow:!v,childActive:N,clsPrefix:B,icon:_,hover:R,onClick:y}))},a=()=>d(Ze,null,{default:()=>{const{tmNodes:v,collapsed:h}=this;return h?null:d("div",{class:`${t}-submenu-children`,role:"menu"},v.map(u=>pe(u,this.menuProps)))}});return this.root?d(Xe,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),$e=Object.assign(Object.assign({},he),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),zo=P({name:"MenuOption",props:$e,setup(e){const t=me(e),{NSubmenu:o,NMenu:n}=t,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:v}=n,h=o?o.mergedDisabledRef:{value:!1},u=w(()=>h.value||e.disabled);function b(A){const{onClick:p}=e;p&&p(A)}function $(A){u.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),b(A))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:le(()=>e.root&&v.value&&l.mode!=="horizontal"&&!u.value),selected:le(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:u,handleClick:$}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:l}}=this,a=l?.(o.rawNode);return d("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a?.class]}),d(Qe,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):D(this.title),trigger:()=>d(Te,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Io=P({name:"MenuDivider",setup(){const e=j(G),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:d("div",{class:`${t.value}-menu-divider`})}}),ko=se(Pe),So=se($e),Ho=se(Ne);function Be(e){return e.type==="divider"||e.type==="render"}function Ao(e){return e.type==="divider"}function pe(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(Be(o))return Ao(o)?d(Io,Object.assign({key:e.key},o.props)):null;const{labelField:l}=t,{key:a,level:v,isGroup:h}=e,u=Object.assign(Object.assign({},o),{title:o.title||o[l],extra:o.titleExtra||o.extra,key:a,internalKey:a,level:v,root:v===0,isGroup:h});return e.children?e.isGroup?d(yo,re(u,ko,{tmNode:e,tmNodes:e.children,key:a})):d(wo,re(u,Ho,{key:a,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):d(zo,re(u,So,{key:a,tmNode:e}))}const be=[x("&::before","background-color: var(--n-item-color-hover);"),c("arrow",`
 color: var(--n-arrow-color-hover);
 `),c("icon",`
 color: var(--n-item-icon-color-hover);
 `),s("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),c("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ce=[c("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),s("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),c("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],_o=x([s("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[I("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[s("submenu","margin: 0;"),s("menu-item","margin: 0;"),s("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),I("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),s("menu-item-content",[I("selected",[c("icon","color: var(--n-item-icon-color-active-horizontal);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),c("extra","color: var(--n-item-text-color-active-horizontal);")])]),I("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[s("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),c("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),c("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),X("disabled",[X("selected, child-active",[x("&:focus-within",Ce)]),I("selected",[K(null,[c("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),c("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[K(null,[c("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),c("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",Ce)]),s("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),I("collapsed",[s("menu-item-content",[I("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),s("menu-item-content-header","opacity: 0;"),c("arrow","opacity: 0;"),c("icon","color: var(--n-item-icon-color-collapsed);")])]),s("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),s("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("> *","z-index: 1;"),x("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),I("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),I("collapsed",[c("arrow","transform: rotate(0);")]),I("selected",[x("&::before","background-color: var(--n-item-color-active);"),c("arrow","color: var(--n-arrow-color-active);"),c("icon","color: var(--n-item-icon-color-active);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),c("extra","color: var(--n-item-text-color-active);")])]),I("child-active",[s("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),c("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),c("arrow",`
 color: var(--n-arrow-color-child-active);
 `),c("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),X("disabled",[X("selected, child-active",[x("&:focus-within",be)]),I("selected",[K(null,[c("arrow","color: var(--n-arrow-color-active-hover);"),c("icon","color: var(--n-item-icon-color-active-hover);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),c("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[K(null,[c("arrow","color: var(--n-arrow-color-child-active-hover);"),c("icon","color: var(--n-item-icon-color-child-active-hover);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),c("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[K(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,be)]),c("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),c("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),s("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[x("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),c("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),s("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[s("menu-item-content",`
 height: var(--n-item-height);
 `),s("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[eo({duration:".2s"})])]),s("menu-item-group",[s("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),s("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),s("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function K(e,t){return[I("hover",e,t),x("&:hover",e,t)]}const Ro=Object.assign(Object.assign({},U.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Po=P({name:"Menu",props:Ro,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ce(e),n=U("Menu","-menu",_o,vo,e,t),l=j(Ae,null),a=w(()=>{var f;const{collapsed:g}=e;if(g!==void 0)return g;if(l){const{collapseModeRef:r,collapsedRef:m}=l;if(r.value==="width")return(f=m.value)!==null&&f!==void 0?f:!1}return!1}),v=w(()=>{const{keyField:f,childrenField:g,disabledField:r}=e;return to(e.items||e.options,{getIgnored(m){return Be(m)},getChildren(m){return m[g]},getDisabled(m){return m[r]},getKey(m){var T;return(T=m[f])!==null&&T!==void 0?T:m.name}})}),h=w(()=>new Set(v.value.treeNodes.map(f=>f.key))),{watchProps:u}=e,b=E(null);u?.includes("defaultValue")?ge(()=>{b.value=e.defaultValue}):b.value=e.defaultValue;const $=ee(e,"value"),A=ae($,b),p=E([]),N=()=>{p.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(A.value,{includeSelf:!1}).keyPath};u?.includes("defaultExpandedKeys")?ge(N):N();const _=oo(e,["expandedNames","expandedKeys"]),y=ae(_,p),k=w(()=>v.value.treeNodes),R=w(()=>v.value.getPath(A.value).keyPath);V(G,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:A,mergedExpandedKeysRef:y,activePathRef:R,mergedClsPrefixRef:t,isHorizontalRef:w(()=>e.mode==="horizontal"),invertedRef:ee(e,"inverted"),doSelect:q,toggleExpand:B});function q(f,g){const{"onUpdate:value":r,onUpdateValue:m,onSelect:T}=e;m&&O(m,f,g),r&&O(r,f,g),T&&O(T,f,g),b.value=f}function L(f){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:r,onExpandedNamesChange:m,onOpenNamesChange:T}=e;g&&O(g,f),r&&O(r,f),m&&O(m,f),T&&O(T,f),p.value=f}function B(f){const g=Array.from(y.value),r=g.findIndex(m=>m===f);if(~r)g.splice(r,1);else{if(e.accordion&&h.value.has(f)){const m=g.findIndex(T=>h.value.has(T));m>-1&&g.splice(m,1)}g.push(f)}L(g)}const S=f=>{const g=v.value.getPath(f??A.value,{includeSelf:!1}).keyPath;if(!g.length)return;const r=Array.from(y.value),m=new Set([...r,...g]);e.accordion&&h.value.forEach(T=>{m.has(T)&&!g.includes(T)&&m.delete(T)}),L(Array.from(m))},C=w(()=>{const{inverted:f}=e,{common:{cubicBezierEaseInOut:g},self:r}=n.value,{borderRadius:m,borderColorHorizontal:T,fontSize:Oe,itemHeight:Me,dividerColor:Le}=r,i={"--n-divider-color":Le,"--n-bezier":g,"--n-font-size":Oe,"--n-border-color-horizontal":T,"--n-border-radius":m,"--n-item-height":Me};return f?(i["--n-group-text-color"]=r.groupTextColorInverted,i["--n-color"]=r.colorInverted,i["--n-item-text-color"]=r.itemTextColorInverted,i["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,i["--n-item-text-color-active"]=r.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=r.itemIconColorInverted,i["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=r.arrowColorInverted,i["--n-arrow-color-hover"]=r.arrowColorHoverInverted,i["--n-arrow-color-active"]=r.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=r.itemColorHoverInverted,i["--n-item-color-active"]=r.itemColorActiveInverted,i["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=r.groupTextColor,i["--n-color"]=r.color,i["--n-item-text-color"]=r.itemTextColor,i["--n-item-text-color-hover"]=r.itemTextColorHover,i["--n-item-text-color-active"]=r.itemTextColorActive,i["--n-item-text-color-child-active"]=r.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,i["--n-item-icon-color"]=r.itemIconColor,i["--n-item-icon-color-hover"]=r.itemIconColorHover,i["--n-item-icon-color-active"]=r.itemIconColorActive,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=r.arrowColor,i["--n-arrow-color-hover"]=r.arrowColorHover,i["--n-arrow-color-active"]=r.arrowColorActive,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,i["--n-arrow-color-child-active"]=r.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,i["--n-item-color-hover"]=r.itemColorHover,i["--n-item-color-active"]=r.itemColorActive,i["--n-item-color-active-hover"]=r.itemColorActiveHover,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),i}),z=o?de("menu",w(()=>e.inverted?"a":"b"),C,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:_,uncontrolledExpanededKeys:p,mergedExpandedKeys:y,uncontrolledValue:b,mergedValue:A,activePath:R,tmNodes:k,mergedTheme:n,mergedCollapsed:a,cssVars:o?void 0:C,themeClass:z?.themeClass,onRender:z?.onRender,showOption:S}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n?.(),d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>pe(l,this.$props)))}}),To={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},No=H("path",{d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),$o=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 160v288"},null,-1),Bo=[No,$o],ie=P({name:"BookOutline",render:function(t,o){return M(),F("svg",To,Bo)}}),Oo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Mo=H("circle",{cx:"256",cy:"256",r:"32",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Lo=H("circle",{cx:"416",cy:"256",r:"32",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Eo=H("circle",{cx:"96",cy:"256",r:"32",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),jo=[Mo,Lo,Eo],Fo=P({name:"EllipsisHorizontalOutline",render:function(t,o){return M(),F("svg",Oo,jo)}}),Ko={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Vo=H("path",{d:"M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41c-50.65 7.49-71.52-26.44-80.33-85.06c-11.85-78.88 16-127.94 55.71-131.1c36.14-2.87 68.71 60.14 77.53 118.75z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Do=H("path",{d:"M223.65 409.53c3.13 33.28-14.86 64.34-42 69.66c-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21s55.99-20.4 59.77 19.74z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Uo=H("path",{d:"M312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41c50.66 7.49 71.52-26.44 80.33-85.06c11.86-78.89-16-128.22-55.7-131.1c-36.4-2.64-68.71 60.13-77.53 118.75z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),qo=H("path",{d:"M288.35 313.53c-3.13 33.27 14.86 64.34 42 69.66c27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22s-55.99-20.4-59.77 19.75z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Wo=[Vo,Do,Uo,qo],Yo=P({name:"FootstepsOutline",render:function(t,o){return M(),F("svg",Ko,Wo)}}),Go={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Xo=H("path",{d:"M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Zo=H("path",{d:"M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"28"},null,-1),Jo=H("circle",{cx:"250",cy:"348",r:"20",fill:"currentColor"},null,-1),Qo=[Xo,Zo,Jo],et=P({name:"HelpCircleOutline",render:function(t,o){return M(),F("svg",Go,Qo)}}),ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},tt=H("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),rt=H("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),nt=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1),it=[tt,rt,nt],lt=P({name:"HomeOutline",render:function(t,o){return M(),F("svg",ot,it)}}),at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ct=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M364.13 125.25L87 403l-23 45l44.99-23l277.76-277.13l-22.62-22.62z"},null,-1),dt=H("path",{d:"M420.69 68.69l-22.62 22.62l22.62 22.63l22.62-22.63a16 16 0 0 0 0-22.62h0a16 16 0 0 0-22.62 0z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),st=[ct,dt],Q=P({name:"PencilOutline",render:function(t,o){return M(),F("svg",at,st)}}),ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},vt=H("path",{d:"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),mt=[vt],ht=P({name:"SettingsOutline",render:function(t,o){return M(),F("svg",ut,mt)}}),pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ft=H("rect",{x:"64",y:"320",width:"48",height:"160",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),gt=H("rect",{x:"288",y:"224",width:"48",height:"256",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),xt=H("rect",{x:"400",y:"112",width:"48",height:"368",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),bt=H("rect",{x:"176",y:"32",width:"48",height:"448",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ct=[ft,gt,xt,bt],ye=P({name:"StatsChartOutline",render:function(t,o){return M(),F("svg",pt,Ct)}}),Yt={__name:"homepageWrap",setup(e){je(),Fe(),qe();const t=(l,a)=>()=>d(De,{to:Ee+a},{default:()=>l});function o(l){return()=>d(no,null,{default:()=>d(l)})}const n=[{label:t("主页","/home"),key:"go-back-home",icon:o(lt)},{key:"divider-1",type:"divider",props:{style:{marginLeft:"32px"}}},{label:"刷题",key:"do-it",icon:o(Q),children:[{label:t("刷组卷网","/preparing-room/queslist"),key:"do-ques",icon:o(Q)},{label:t("刷套卷","/preparing-room/paper"),key:"do-papers",icon:o(Q)},{label:t("刷错题","/preparing-room/incorr-coll"),key:"do-failcoll",icon:o(Q)},{label:t("更多","/preparing-room/all"),key:"do-more",icon:o(Fo)}]},{key:"divider-2",type:"divider",props:{style:{marginLeft:"32px"}}},{label:"记录",key:"record",icon:o(Yo),children:[{label:t("错题集","/list/incorr-coll"),key:"record-fail",icon:o(ie)},{label:t("好题本","/list/coll"),key:"record-good",icon:o(ie)},{label:t("刷题记录","/records"),key:"record-rec",icon:o(ie)}]},{key:"divider-3",type:"divider",props:{style:{marginLeft:"32px"}}},{label:t("统计","/stats"),key:"statistics",icon:o(ye)},{label:t("导出","/export/tl"),key:"export",icon:o(ye)},{label:t("设置","/settings"),key:"settings",icon:o(ht)},{label:t("关于","/about"),key:"about",icon:o(et)}];return Ke((l,a)=>{}),(l,a)=>(M(),We(W(xe),{"has-sider":""},{default:te(()=>[Z(W(Co),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,"show-trigger":""},{default:te(()=>[Z(W(Po),{options:n,"default-expanded-keys":["do-it"]})]),_:1}),Z(W(xe),null,{default:te(()=>[Z(W(Ve))]),_:1})]),_:1}))}};export{Yt as default};
