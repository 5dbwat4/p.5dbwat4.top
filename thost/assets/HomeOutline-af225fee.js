import{l as ye,c as ze,m as we,n as te,g as Y,a as s,b as I,d as U,u as re,e as ie,i as c,h as x,j as W}from"./light-cb8e5d18.js";import{N as Ie}from"./Icon-0741e3aa.js";import{C as Ge}from"./ChevronRight-f0e435af.js";import{w as R,N as d,b2 as E,ad as V,j as y,R as K,b8 as J,F as Ye,aD as Se,ab as Q,m as ee,n as $}from"./index-6b27469d.js";import{s as We,u as Ae,N as He,r as q,k as le,c as Xe,V as Ze}from"./Scrollbar-6ef5ad24.js";import{f as ne}from"./format-length-c9d165c6.js";import{u as ae}from"./use-merged-state-236ae148.js";import{c as L}from"./use-is-mounted-e356ec1d.js";import{u as ce}from"./use-memo-7138c88c.js";import{d as Je,N as Qe}from"./Dropdown-6e48c879.js";import{N as eo}from"./FadeInExpandTransition-65435983.js";import{t as oo,N as to}from"./Tooltip-46e4aeaa.js";import{k as de}from"./keysOf-5d5107c5.js";import{f as ro}from"./fade-in-height-expand.cssr-52026b9f.js";import{c as se,V as io}from"./create-59670860.js";import{u as lo}from"./use-compitable-182c3d4e.js";const no=R({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),ao=e=>{const{baseColor:r,textColor2:o,bodyColor:i,cardColor:n,dividerColor:a,actionColor:m,scrollbarColor:h,scrollbarColorHover:v,invertedColor:z}=e;return{textColor:o,textColorInverted:"#FFF",color:i,colorEmbedded:m,headerColor:n,headerColorInverted:z,footerColor:m,footerColorInverted:z,headerBorderColor:a,headerBorderColorInverted:z,footerBorderColor:a,footerBorderColorInverted:z,siderBorderColor:a,siderBorderColorInverted:z,siderColor:n,siderColorInverted:z,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:r,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:we(i,h),siderToggleBarColorHover:we(i,v),__invertScrollbar:"true"}},co=ye({name:"Layout",common:ze,peers:{Scrollbar:We},self:ao}),ve=co;function so(e,r,o,i){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:r,itemColorActiveHoverInverted:r,itemColorActiveCollapsedInverted:r,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:i}}const vo=e=>{const{borderRadius:r,textColor3:o,primaryColor:i,textColor2:n,textColor1:a,fontSize:m,dividerColor:h,hoverColor:v,primaryColorHover:z}=e;return Object.assign({borderRadius:r,color:"#0000",groupTextColor:o,itemColorHover:v,itemColorActive:te(i,{alpha:.1}),itemColorActiveHover:te(i,{alpha:.1}),itemColorActiveCollapsed:te(i,{alpha:.1}),itemTextColor:n,itemTextColorHover:n,itemTextColorActive:i,itemTextColorActiveHover:i,itemTextColorChildActive:i,itemTextColorChildActiveHover:i,itemTextColorHorizontal:n,itemTextColorHoverHorizontal:z,itemTextColorActiveHorizontal:i,itemTextColorActiveHoverHorizontal:i,itemTextColorChildActiveHorizontal:i,itemTextColorChildActiveHoverHorizontal:i,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:i,itemIconColorActiveHover:i,itemIconColorChildActive:i,itemIconColorChildActiveHover:i,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:z,itemIconColorActiveHorizontal:i,itemIconColorActiveHoverHorizontal:i,itemIconColorChildActiveHorizontal:i,itemIconColorChildActiveHoverHorizontal:i,itemHeight:"42px",arrowColor:n,arrowColorHover:n,arrowColorActive:i,arrowColorActiveHover:i,arrowColorChildActive:i,arrowColorChildActiveHover:i,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:m,dividerColor:h},so("#BBB",i,"#FFF","#AAA"))},mo=ye({name:"Menu",common:ze,peers:{Tooltip:oo,Dropdown:Je},self:vo}),uo=mo,Te=Y("n-layout-sider"),me={type:String,default:"static"},ho=s("layout",`
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
 `)]),po={embedded:Boolean,position:me,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ke=Y("n-layout");function go(e){return R({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},U.props),po),setup(r){const o=E(null),i=E(null),{mergedClsPrefixRef:n,inlineThemeDisabled:a}=re(r),m=U("Layout","-layout",ho,ve,r,n);function h(w,S){if(r.nativeScrollbar){const{value:P}=o;P&&(S===void 0?P.scrollTo(w):P.scrollTo(w,S))}else{const{value:P}=i;P&&P.scrollTo(w,S)}}V(ke,r);let v=0,z=0;const B=w=>{var S;const P=w.target;v=P.scrollLeft,z=P.scrollTop,(S=r.onScroll)===null||S===void 0||S.call(r,w)};Ae(()=>{if(r.nativeScrollbar){const w=o.value;w&&(w.scrollTop=z,w.scrollLeft=v)}});const T={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},g={scrollTo:h},N=y(()=>{const{common:{cubicBezierEaseInOut:w},self:S}=m.value;return{"--n-bezier":w,"--n-color":r.embedded?S.colorEmbedded:S.color,"--n-text-color":S.textColor}}),k=a?ie("layout",y(()=>r.embedded?"e":""),N,r):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:i,hasSiderStyle:T,mergedTheme:m,handleNativeElScroll:B,cssVars:a?void 0:N,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender},g)},render(){var r;const{mergedClsPrefix:o,hasSider:i}=this;(r=this.onRender)===null||r===void 0||r.call(this);const n=i?this.hasSiderStyle:void 0,a=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return d("div",{class:a,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):d(He,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const Co=go(!1),bo=s("layout-sider",`
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
 `)]),fo=R({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(Ie,{clsPrefix:e},{default:()=>d(Ge,null)}))}}),xo=R({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),yo={position:me,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},zo=R({name:"LayoutSider",props:Object.assign(Object.assign({},U.props),yo),setup(e){const r=K(ke),o=E(null),i=E(null),n=y(()=>ne(v.value?e.collapsedWidth:e.width)),a=y(()=>e.collapseMode!=="transform"?{}:{minWidth:ne(e.width)}),m=y(()=>r?r.siderPlacement:"left"),h=E(e.defaultCollapsed),v=ae(J(e,"collapsed"),h);function z(H,b){if(e.nativeScrollbar){const{value:f}=o;f&&(b===void 0?f.scrollTo(H):f.scrollTo(H,b))}else{const{value:f}=i;f&&f.scrollTo(H,b)}}function B(){const{"onUpdate:collapsed":H,onUpdateCollapsed:b,onExpand:f,onCollapse:_}=e,{value:j}=v;b&&L(b,!j),H&&L(H,!j),h.value=!j,j?f&&L(f):_&&L(_)}let T=0,g=0;const N=H=>{var b;const f=H.target;T=f.scrollLeft,g=f.scrollTop,(b=e.onScroll)===null||b===void 0||b.call(e,H)};Ae(()=>{if(e.nativeScrollbar){const H=o.value;H&&(H.scrollTop=g,H.scrollLeft=T)}}),V(Te,{collapsedRef:v,collapseModeRef:J(e,"collapseMode")});const{mergedClsPrefixRef:k,inlineThemeDisabled:w}=re(e),S=U("Layout","-layout-sider",bo,ve,e,k);function P(H){var b,f;H.propertyName==="max-width"&&(v.value?(b=e.onAfterLeave)===null||b===void 0||b.call(e):(f=e.onAfterEnter)===null||f===void 0||f.call(e))}const G={scrollTo:z},M=y(()=>{const{common:{cubicBezierEaseInOut:H},self:b}=S.value,{siderToggleButtonColor:f,siderToggleButtonBorder:_,siderToggleBarColor:j,siderToggleBarColorHover:oe}=b,O={"--n-bezier":H,"--n-toggle-button-color":f,"--n-toggle-button-border":_,"--n-toggle-bar-color":j,"--n-toggle-bar-color-hover":oe};return e.inverted?(O["--n-color"]=b.siderColorInverted,O["--n-text-color"]=b.textColorInverted,O["--n-border-color"]=b.siderBorderColorInverted,O["--n-toggle-button-icon-color"]=b.siderToggleButtonIconColorInverted,O.__invertScrollbar=b.__invertScrollbar):(O["--n-color"]=b.siderColor,O["--n-text-color"]=b.textColor,O["--n-border-color"]=b.siderBorderColor,O["--n-toggle-button-icon-color"]=b.siderToggleButtonIconColor),O}),F=w?ie("layout-sider",y(()=>e.inverted?"a":"b"),M,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:i,mergedClsPrefix:k,mergedTheme:S,styleMaxWidth:n,mergedCollapsed:v,scrollContainerStyle:a,siderPlacement:m,handleNativeElScroll:N,handleTransitionend:P,handleTriggerClick:B,inlineThemeDisabled:w,cssVars:M,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender},G)},render(){var e;const{mergedClsPrefix:r,mergedCollapsed:o,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${r}-layout-sider`,this.themeClass,`${r}-layout-sider--${this.position}-positioned`,`${r}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${r}-layout-sider--bordered`,o&&`${r}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${r}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ne(this.width)}]},this.nativeScrollbar?d("div",{class:[`${r}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(He,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?d(xo,{clsPrefix:r,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(fo,{clsPrefix:r,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${r}-layout-sider__border`}):null)}}),X=Y("n-menu"),ue=Y("n-submenu"),he=Y("n-menu-item-group"),Pe=8;function pe(e){const r=K(X),{props:o,mergedCollapsedRef:i}=r,n=K(ue,null),a=K(he,null),m=y(()=>o.mode==="horizontal"),h=y(()=>m.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),v=y(()=>{var g;return Math.max((g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize,o.iconSize)}),z=y(()=>{var g;return!m.value&&e.root&&i.value&&(g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize}),B=y(()=>{if(m.value||m.value)return;const{collapsedWidth:g,indent:N,rootIndent:k}=o,{root:w,isGroup:S}=e,P=k===void 0?N:k;return w?i.value?g/2-v.value/2:P:a&&typeof a.paddingLeftRef.value=="number"?N/2+a.paddingLeftRef.value:n&&typeof n.paddingLeftRef.value=="number"?(S?N/2:N)+n.paddingLeftRef.value:0}),T=y(()=>{const{collapsedWidth:g,indent:N,rootIndent:k}=o,{value:w}=v,{root:S}=e;return m.value||!S||!i.value?Pe:(k===void 0?N:k)+w+Pe-(g+w)/2});return{dropdownPlacement:h,activeIconSize:z,maxIconSize:v,paddingLeft:B,iconMarginRight:T,NMenu:r,NSubmenu:n}}const ge={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ne=Object.assign(Object.assign({},ge),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),wo=R({name:"MenuOptionGroup",props:Ne,setup(e){V(ue,null);const r=pe(e);V(he,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:o,props:i}=K(X);return function(){const{value:n}=o,a=r.paddingLeft.value,{nodeProps:m}=i,h=m==null?void 0:m(e.tmNode.rawNode);return d("div",{class:`${n}-menu-item-group`,role:"group"},d("div",Object.assign({},h,{class:[`${n}-menu-item-group-title`,h==null?void 0:h.class],style:[(h==null?void 0:h.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),q(e.title),e.extra?d(Ye,null," ",q(e.extra)):null),d("div",null,e.tmNodes.map(v=>fe(v,i))))}}}),Re=R({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:r}=K(X);return{menuProps:r,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:i,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${i}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:o,renderLabel:i,renderExtra:n,expandIcon:a}}=this,m=o?o(r.rawNode):q(this.icon);return d("div",{onClick:h=>{var v;(v=this.onClick)===null||v===void 0||v.call(this,h)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},m&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[m]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:i?i(r.rawNode):q(this.title),this.extra||n?d("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(r.rawNode):q(this.extra)):null),this.showArrow?d(Ie,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(r.rawNode):d(no,null)}):null)}}),Be=Object.assign(Object.assign({},ge),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Ce=R({name:"Submenu",props:Be,setup(e){const r=pe(e),{NMenu:o,NSubmenu:i}=r,{props:n,mergedCollapsedRef:a,mergedThemeRef:m}=o,h=y(()=>{const{disabled:g}=e;return i!=null&&i.mergedDisabledRef.value||n.disabled?!0:g}),v=E(!1);V(ue,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:h}),V(he,null);function z(){const{onClick:g}=e;g&&g()}function B(){h.value||(a.value||o.toggleExpand(e.internalKey),z())}function T(g){v.value=g}return{menuProps:n,mergedTheme:m,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:v,paddingLeft:r.paddingLeft,mergedDisabled:h,mergedValue:o.mergedValueRef,childActive:ce(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:o.activePathRef.value.includes(e.internalKey)}),collapsed:y(()=>n.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!h.value&&(n.mode==="horizontal"||a.value)),handlePopoverShowChange:T,handleClick:B}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:o,renderLabel:i}}=this,n=()=>{const{isHorizontal:m,paddingLeft:h,collapsed:v,mergedDisabled:z,maxIconSize:B,activeIconSize:T,title:g,childActive:N,icon:k,handleClick:w,menuProps:{nodeProps:S},dropdownShow:P,iconMarginRight:G,tmNode:M,mergedClsPrefix:F,isEllipsisPlaceholder:H,extra:b}=this,f=S==null?void 0:S(M.rawNode);return d("div",Object.assign({},f,{class:[`${F}-menu-item`,f==null?void 0:f.class],role:"menuitem"}),d(Re,{tmNode:M,paddingLeft:h,collapsed:v,disabled:z,iconMarginRight:G,maxIconSize:B,activeIconSize:T,title:g,extra:b,showArrow:!m,childActive:N,clsPrefix:F,icon:k,hover:P,onClick:w,isEllipsisPlaceholder:H}))},a=()=>d(eo,null,{default:()=>{const{tmNodes:m,collapsed:h}=this;return h?null:d("div",{class:`${r}-submenu-children`,role:"menu"},m.map(v=>fe(v,this.menuProps)))}});return this.root?d(Qe,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:i}),{default:()=>d("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},n(),this.isHorizontal?null:a())}):d("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},n(),a())}}),Oe=Object.assign(Object.assign({},ge),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Io=R({name:"MenuOption",props:Oe,setup(e){const r=pe(e),{NSubmenu:o,NMenu:i}=r,{props:n,mergedClsPrefixRef:a,mergedCollapsedRef:m}=i,h=o?o.mergedDisabledRef:{value:!1},v=y(()=>h.value||e.disabled);function z(T){const{onClick:g}=e;g&&g(T)}function B(T){v.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),z(T))}return{mergedClsPrefix:a,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:n,dropdownEnabled:ce(()=>e.root&&m.value&&n.mode!=="horizontal"&&!v.value),selected:ce(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:v,handleClick:B}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:o,menuProps:{renderLabel:i,nodeProps:n}}=this,a=n==null?void 0:n(o.rawNode);return d("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),d(to,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(o.rawNode):q(this.title),trigger:()=>d(Re,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),So=R({name:"MenuDivider",setup(){const e=K(X),{mergedClsPrefixRef:r,isHorizontalRef:o}=e;return()=>o.value?null:d("div",{class:`${r.value}-menu-divider`})}}),Ao=de(Ne),Ho=de(Oe),To=de(Be);function be(e){return e.type==="divider"||e.type==="render"}function ko(e){return e.type==="divider"}function fe(e,r){const{rawNode:o}=e,{show:i}=o;if(i===!1)return null;if(be(o))return ko(o)?d(So,Object.assign({key:e.key},o.props)):null;const{labelField:n}=r,{key:a,level:m,isGroup:h}=e,v=Object.assign(Object.assign({},o),{title:o.title||o[n],extra:o.titleExtra||o.extra,key:a,internalKey:a,level:m,root:m===0,isGroup:h});return e.children?e.isGroup?d(wo,le(v,Ao,{tmNode:e,tmNodes:e.children,key:a})):d(Ce,le(v,To,{key:a,rawNodes:o[r.childrenField],tmNodes:e.children,tmNode:e})):d(Io,le(v,Ho,{key:a,tmNode:e}))}const Fe=[x("&::before","background-color: var(--n-item-color-hover);"),c("arrow",`
 color: var(--n-arrow-color-hover);
 `),c("icon",`
 color: var(--n-item-icon-color-hover);
 `),s("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),c("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ee=[c("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),s("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),c("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Po=x([s("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[I("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
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
 `)]),W("disabled",[W("selected, child-active",[x("&:focus-within",Ee)]),I("selected",[D(null,[c("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),c("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[D(null,[c("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),c("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),D("border-bottom: 2px solid var(--n-border-color-horizontal);",Ee)]),s("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),W("responsive",[s("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("collapsed",[s("menu-item-content",[I("selected",[x("&::before",`
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
 `)]),W("disabled",[W("selected, child-active",[x("&:focus-within",Fe)]),I("selected",[D(null,[c("arrow","color: var(--n-arrow-color-active-hover);"),c("icon","color: var(--n-item-icon-color-active-hover);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),c("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[D(null,[c("arrow","color: var(--n-arrow-color-child-active-hover);"),c("icon","color: var(--n-item-icon-color-child-active-hover);"),s("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),c("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[D(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),D(null,Fe)]),c("icon",`
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
 `,[ro({duration:".2s"})])]),s("menu-item-group",[s("menu-item-group-title",`
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
 `)]);function D(e,r){return[I("hover",e,r),x("&:hover",e,r)]}const No=Object.assign(Object.assign({},U.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Ro=R({name:"Menu",props:No,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=re(e),i=U("Menu","-menu",Po,uo,e,r),n=K(Te,null),a=y(()=>{var u;const{collapsed:C}=e;if(C!==void 0)return C;if(n){const{collapseModeRef:t,collapsedRef:p}=n;if(t.value==="width")return(u=p.value)!==null&&u!==void 0?u:!1}return!1}),m=y(()=>{const{keyField:u,childrenField:C,disabledField:t}=e;return se(e.items||e.options,{getIgnored(p){return be(p)},getChildren(p){return p[C]},getDisabled(p){return p[t]},getKey(p){var A;return(A=p[u])!==null&&A!==void 0?A:p.name}})}),h=y(()=>new Set(m.value.treeNodes.map(u=>u.key))),{watchProps:v}=e,z=E(null);v!=null&&v.includes("defaultValue")?Se(()=>{z.value=e.defaultValue}):z.value=e.defaultValue;const B=J(e,"value"),T=ae(B,z),g=E([]),N=()=>{g.value=e.defaultExpandAll?m.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||m.value.getPath(T.value,{includeSelf:!1}).keyPath};v!=null&&v.includes("defaultExpandedKeys")?Se(N):N();const k=lo(e,["expandedNames","expandedKeys"]),w=ae(k,g),S=y(()=>m.value.treeNodes),P=y(()=>m.value.getPath(T.value).keyPath);V(X,{props:e,mergedCollapsedRef:a,mergedThemeRef:i,mergedValueRef:T,mergedExpandedKeysRef:w,activePathRef:P,mergedClsPrefixRef:r,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:J(e,"inverted"),doSelect:G,toggleExpand:F});function G(u,C){const{"onUpdate:value":t,onUpdateValue:p,onSelect:A}=e;p&&L(p,u,C),t&&L(t,u,C),A&&L(A,u,C),z.value=u}function M(u){const{"onUpdate:expandedKeys":C,onUpdateExpandedKeys:t,onExpandedNamesChange:p,onOpenNamesChange:A}=e;C&&L(C,u),t&&L(t,u),p&&L(p,u),A&&L(A,u),g.value=u}function F(u){const C=Array.from(w.value),t=C.findIndex(p=>p===u);if(~t)C.splice(t,1);else{if(e.accordion&&h.value.has(u)){const p=C.findIndex(A=>h.value.has(A));p>-1&&C.splice(p,1)}C.push(u)}M(C)}const H=u=>{const C=m.value.getPath(u??T.value,{includeSelf:!1}).keyPath;if(!C.length)return;const t=Array.from(w.value),p=new Set([...t,...C]);e.accordion&&h.value.forEach(A=>{p.has(A)&&!C.includes(A)&&p.delete(A)}),M(Array.from(p))},b=y(()=>{const{inverted:u}=e,{common:{cubicBezierEaseInOut:C},self:t}=i.value,{borderRadius:p,borderColorHorizontal:A,fontSize:De,itemHeight:Ue,dividerColor:qe}=t,l={"--n-divider-color":qe,"--n-bezier":C,"--n-font-size":De,"--n-border-color-horizontal":A,"--n-border-radius":p,"--n-item-height":Ue};return u?(l["--n-group-text-color"]=t.groupTextColorInverted,l["--n-color"]=t.colorInverted,l["--n-item-text-color"]=t.itemTextColorInverted,l["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,l["--n-item-text-color-active"]=t.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,l["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=t.itemIconColorInverted,l["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,l["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,l["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,l["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,l["--n-arrow-color"]=t.arrowColorInverted,l["--n-arrow-color-hover"]=t.arrowColorHoverInverted,l["--n-arrow-color-active"]=t.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,l["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,l["--n-item-color-hover"]=t.itemColorHoverInverted,l["--n-item-color-active"]=t.itemColorActiveInverted,l["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=t.groupTextColor,l["--n-color"]=t.color,l["--n-item-text-color"]=t.itemTextColor,l["--n-item-text-color-hover"]=t.itemTextColorHover,l["--n-item-text-color-active"]=t.itemTextColorActive,l["--n-item-text-color-child-active"]=t.itemTextColorChildActive,l["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,l["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,l["--n-item-icon-color"]=t.itemIconColor,l["--n-item-icon-color-hover"]=t.itemIconColorHover,l["--n-item-icon-color-active"]=t.itemIconColorActive,l["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,l["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,l["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,l["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,l["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,l["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,l["--n-arrow-color"]=t.arrowColor,l["--n-arrow-color-hover"]=t.arrowColorHover,l["--n-arrow-color-active"]=t.arrowColorActive,l["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,l["--n-arrow-color-child-active"]=t.arrowColorChildActive,l["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,l["--n-item-color-hover"]=t.itemColorHover,l["--n-item-color-active"]=t.itemColorActive,l["--n-item-color-active-hover"]=t.itemColorActiveHover,l["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),l}),f=o?ie("menu",y(()=>e.inverted?"a":"b"),b,e):void 0,_=Xe(),j=E(null),oe=E(null);let O=!0;const xe=()=>{var u;O?O=!1:(u=j.value)===null||u===void 0||u.sync({showAllItemsBeforeCalculate:!0})};function $e(){return document.getElementById(_)}const Z=E(-1);function Le(u){Z.value=e.options.length-u}function je(u){u||(Z.value=-1)}const Me=y(()=>{const u=Z.value;return{children:u===-1?[]:e.options.slice(u)}}),_e=y(()=>{const{childrenField:u,disabledField:C,keyField:t}=e;return se([Me.value],{getIgnored(p){return be(p)},getChildren(p){return p[u]},getDisabled(p){return p[C]},getKey(p){var A;return(A=p[t])!==null&&A!==void 0?A:p.name}})}),Ke=y(()=>se([{}]).treeNodes[0]);function Ve(){var u;if(Z.value===-1)return d(Ce,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"\xB7\xB7\xB7",tmNode:Ke.value,domId:_,isEllipsisPlaceholder:!0});const C=_e.value.treeNodes[0],t=P.value,p=!!(!((u=C.children)===null||u===void 0)&&u.some(A=>t.includes(A.key)));return d(Ce,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"\xB7\xB7\xB7",virtualChildActive:p,tmNode:C,domId:_,rawNodes:C.rawNode.children||[],tmNodes:C.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:k,uncontrolledExpanededKeys:g,mergedExpandedKeys:w,uncontrolledValue:z,mergedValue:T,activePath:P,tmNodes:S,mergedTheme:i,mergedCollapsed:a,cssVars:o?void 0:b,themeClass:f==null?void 0:f.themeClass,overflowRef:j,counterRef:oe,updateCounter:()=>{},onResize:xe,onUpdateOverflow:je,onUpdateCount:Le,renderCounter:Ve,getCounter:$e,onRender:f==null?void 0:f.onRender,showOption:H,deriveResponsiveState:xe}},render(){const{mergedClsPrefix:e,mode:r,themeClass:o,onRender:i}=this;i==null||i();const n=()=>this.tmNodes.map(h=>fe(h,this.$props)),a=r==="horizontal"&&this.responsive,m=()=>d("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${r}`,a&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},a?d(io,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:n,counter:this.renderCounter}):n());return a?d(Ze,{onResize:this.onResize},{default:m}):m()}}),Bo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Oo=$("path",{d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Fo=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 160v288"},null,-1),Eo=[Oo,Fo],$o=R({name:"BookOutline",render:function(e,r){return Q(),ee("svg",Bo,Eo)}}),Lo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},jo=$("circle",{cx:"256",cy:"256",r:"32",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Mo=$("circle",{cx:"416",cy:"256",r:"32",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),_o=$("circle",{cx:"96",cy:"256",r:"32",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Ko=[jo,Mo,_o],Vo=R({name:"EllipsisHorizontalOutline",render:function(e,r){return Q(),ee("svg",Lo,Ko)}}),Do={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Uo=$("path",{d:"M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),qo=$("path",{d:"M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"28"},null,-1),Go=$("circle",{cx:"250",cy:"348",r:"20",fill:"currentColor"},null,-1),Yo=[Uo,qo,Go],Wo=R({name:"HelpCircleOutline",render:function(e,r){return Q(),ee("svg",Do,Yo)}}),Xo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Zo=$("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Jo=$("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Qo=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1),et=[Zo,Jo,Qo],ot=R({name:"HomeOutline",render:function(e,r){return Q(),ee("svg",Xo,et)}});export{$o as B,Vo as E,ot as H,Ro as N,zo as a,Co as b,Wo as c,ve as l,me as p};
