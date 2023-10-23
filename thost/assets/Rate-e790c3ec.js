import{J as u,v as $,b3 as w,aZ as V,i as M,ae as B}from"./runtime-core.esm-bundler-c066f4bf.js";import{a as A,d as T,e as b,f as z,n as S,o as U,u as H,g as L,h as P,q as k}from"./light-5802f424.js";import{u as E,f as O}from"./Button-68cb5d7d.js";import{u as j}from"./use-merged-state-89f8109f.js";import{N as D}from"./Icon-fde79c06.js";import{c as _}from"./FadeInExpandTransition-ff940b4d.js";const W=e=>{const{railColor:r}=e;return{itemColor:r,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},q={name:"Rate",common:A,self:W},J=q,K=u("svg",{viewBox:"0 0 512 512"},u("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),X=T("rate",{display:"inline-flex",flexWrap:"nowrap"},[b("&:hover",[z("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),z("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[b("&:not(:first-child)",`
 margin-left: 6px;
 `),S("active",`
 color: var(--n-item-color-active);
 `)]),U("readonly",`
 cursor: pointer;
 `,[z("item",[b("&:hover",`
 transform: scale(1.05);
 `),b("&:active",`
 transform: scale(0.96);
 `)])]),z("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[S("active",`
 color: var(--n-item-color-active);
 `)])]),Z=Object.assign(Object.assign({},L.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ae=$({name:"Rate",props:Z,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:f}=H(e),n=L("Rate","-rate",X,J,e,r),m=w(e,"value"),d=V(e.defaultValue),v=V(null),l=E(e),h=j(m,d);function g(t){const{"onUpdate:value":o,onUpdateValue:a}=e,{nTriggerFormChange:C,nTriggerFormInput:c}=l;o&&_(o,t),a&&_(a,t),d.value=t,C(),c()}function s(t,o){return e.allowHalf?o.offsetX>=Math.floor(o.currentTarget.offsetWidth/2)?t+1:t+.5:t+1}let y=!1;function x(t,o){y||(v.value=s(t,o))}function I(){v.value=null}function N(t,o){var a;const{clearable:C}=e,c=s(t,o);C&&c===h.value?(y=!0,(a=e.onClear)===null||a===void 0||a.call(e),v.value=null,g(null)):g(c)}function F(){y=!1}const p=M(()=>{const{size:t}=e,{self:o}=n.value;return typeof t=="number"?`${t}px`:o[k("size",t)]}),R=M(()=>{const{common:{cubicBezierEaseInOut:t},self:o}=n.value,{itemColor:a,itemColorActive:C}=o,{color:c}=e;return{"--n-bezier":t,"--n-item-color":a,"--n-item-color-active":c||C,"--n-item-size":p.value}}),i=f?P("rate",M(()=>{const t=p.value,{color:o}=e;let a="";return t&&(a+=t[0]),o&&(a+=O(o)),a}),R,e):void 0;return{mergedClsPrefix:r,mergedValue:h,hoverIndex:v,handleMouseMove:x,handleClick:N,handleMouseLeave:I,handleMouseEnterSomeStar:F,cssVars:f?void 0:R,themeClass:i?.themeClass,onRender:i?.onRender}},render(){const{readonly:e,hoverIndex:r,mergedValue:f,mergedClsPrefix:n,onRender:m,$slots:{default:d}}=this;return m?.(),u("div",{class:[`${n}-rate`,{[`${n}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},B(this.count,(v,l)=>{const h=d?d({index:l}):u(D,{clsPrefix:n},{default:()=>K}),g=r!==null?l+1<=r:l+1<=(f||0);return u("div",{key:l,class:[`${n}-rate__item`,g&&`${n}-rate__item--active`],onClick:e?void 0:s=>{this.handleClick(l,s)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:s=>{this.handleMouseMove(l,s)}},h,this.allowHalf?u("div",{class:[`${n}-rate__half`,{[`${n}-rate__half--active`]:!g&&r!==null?l+.5<=r:l+.5<=(f||0)}]},h):null)}))}});export{ae as N};
