import{c as P,d as j,s as L,a as x,b as y,e as _,f as B,u as C,r as S,g as T,p as E,h as V,i as g,j as I,k as m,S as k,l as F,_ as H,m as N,w as h,o as D,n as v,q as M,t as K}from"./index-DHwu7nxB.js";import{_ as q}from"./Card-BwMr-BBM.js";import"./resolve-slot-CK3r0QKY.js";function W(t){const{baseColor:o,textColor2:r,bodyColor:s,cardColor:l,dividerColor:e,actionColor:b,scrollbarColor:c,scrollbarColorHover:n,invertedColor:d}=t;return{textColor:r,textColorInverted:"#FFF",color:s,colorEmbedded:b,headerColor:l,headerColorInverted:d,footerColor:b,footerColorInverted:d,headerBorderColor:e,headerBorderColorInverted:d,footerBorderColor:e,footerBorderColorInverted:d,siderBorderColor:e,siderBorderColorInverted:d,siderColor:l,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${e}`,siderToggleButtonColor:o,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:x(s,c),siderToggleBarColorHover:x(s,n),__invertScrollbar:"true"}}const R=P({name:"Layout",common:j,peers:{Scrollbar:L},self:W}),z={type:String,default:"static"},X=y("layout",`
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
`,[y("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),_("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Y={embedded:Boolean,position:z,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},A=F("n-layout");function G(t){return B({name:"Layout",props:Object.assign(Object.assign({},C.props),Y),setup(o){const r=S(null),s=S(null),{mergedClsPrefixRef:l,inlineThemeDisabled:e}=T(o),b=C("Layout","-layout",X,R,o,l);function c(a,i){if(o.nativeScrollbar){const{value:u}=r;u&&(i===void 0?u.scrollTo(a):u.scrollTo(a,i))}else{const{value:u}=s;u&&u.scrollTo(a,i)}}E(A,o);let n=0,d=0;const $=a=>{var i;const u=a.target;n=u.scrollLeft,d=u.scrollTop,(i=o.onScroll)===null||i===void 0||i.call(o,a)};V(()=>{if(o.nativeScrollbar){const a=r.value;a&&(a.scrollTop=d,a.scrollLeft=n)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},O={scrollTo:c},p=g(()=>{const{common:{cubicBezierEaseInOut:a},self:i}=b.value;return{"--n-bezier":a,"--n-color":o.embedded?i.colorEmbedded:i.color,"--n-text-color":i.textColor}}),f=e?I("layout",g(()=>o.embedded?"e":""),p,o):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:r,scrollbarInstRef:s,hasSiderStyle:w,mergedTheme:b,handleNativeElScroll:$,cssVars:e?void 0:p,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender},O)},render(){var o;const{mergedClsPrefix:r,hasSider:s}=this;(o=this.onRender)===null||o===void 0||o.call(this);const l=s?this.hasSiderStyle:void 0,e=[this.themeClass,t,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return m("div",{class:e,style:this.cssVars},this.nativeScrollbar?m("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):m(k,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const J=G(!1),Q=y("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[_("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),_("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),U=Object.assign(Object.assign({},C.props),{inverted:Boolean,position:z,bordered:Boolean}),Z=B({name:"LayoutFooter",props:U,setup(t){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=T(t),s=C("Layout","-layout-footer",Q,R,t,o),l=g(()=>{const{common:{cubicBezierEaseInOut:b},self:c}=s.value,n={"--n-bezier":b};return t.inverted?(n["--n-color"]=c.footerColorInverted,n["--n-text-color"]=c.textColorInverted,n["--n-border-color"]=c.footerBorderColorInverted):(n["--n-color"]=c.footerColor,n["--n-text-color"]=c.textColor,n["--n-border-color"]=c.footerBorderColor),n}),e=r?I("layout-footer",g(()=>t.inverted?"a":"b"),l,t):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:l,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var t;const{mergedClsPrefix:o}=this;return(t=this.onRender)===null||t===void 0||t.call(this),m("div",{class:[`${o}-layout-footer`,this.themeClass,this.position&&`${o}-layout-footer--${this.position}-positioned`,this.bordered&&`${o}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),oo={};function eo(t,o){const r=K("router-view"),s=q,l=J,e=Z;return D(),N(l,{position:"absolute"},{default:h(()=>[v(l,null,{default:h(()=>[v(s,null,{default:h(()=>[v(r)]),_:1})]),_:1}),v(e,{bordered:"",style:{"text-align":"center",padding:"20px"}},{default:h(()=>[M(" Made by 5dbwat4 ")]),_:1})]),_:1})}const so=H(oo,[["render",eo]]);export{so as default};
