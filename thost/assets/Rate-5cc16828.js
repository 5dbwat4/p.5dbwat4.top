import{J as c,v as N,b3 as k,aZ as V,i as z,ae as A}from"./index-c2ed52a5.js";import{c as B,a as H,h as C,i as g,b as _,j as I,u as P,d as $,k as T,e as U}from"./light-3c431b54.js";import{u as j,c as E}from"./Loading-b36f50c8.js";import{u as O}from"./use-merged-state-5c1c3246.js";import{N as W}from"./Icon-9d083982.js";import{c as w}from"./use-is-mounted-912be460.js";const D=e=>{const{railColor:n}=e;return{itemColor:n,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},J={name:"Rate",common:B,self:D},X=J,Z=c("svg",{viewBox:"0 0 512 512"},c("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),q=H("rate",{display:"inline-flex",flexWrap:"nowrap"},[C("&:hover",[g("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),g("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[C("&:not(:first-child)",`
 margin-left: 6px;
 `),_("active",`
 color: var(--n-item-color-active);
 `)]),I("readonly",`
 cursor: pointer;
 `,[g("item",[C("&:hover",`
 transform: scale(1.05);
 `),C("&:active",`
 transform: scale(0.96);
 `)])]),g("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[_("active",`
 color: var(--n-item-color-active);
 `)])]),K=Object.assign(Object.assign({},$.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),G=N({name:"Rate",props:K,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:m}=P(e),t=$("Rate","-rate",q,X,e,n),d=k(e,"value"),v=V(e.defaultValue),f=V(null),l=j(e),h=O(d,v);function p(a){const{"onUpdate:value":o,onUpdateValue:r}=e,{nTriggerFormChange:b,nTriggerFormInput:u}=l;o&&w(o,a),r&&w(r,a),v.value=a,b(),u()}function s(a,o){return e.allowHalf?o.offsetX>=Math.floor(o.currentTarget.offsetWidth/2)?a+1:a+.5:a+1}let x=!1;function F(a,o){x||(f.value=s(a,o))}function R(){f.value=null}function S(a,o){var r;const{clearable:b}=e,u=s(a,o);b&&u===h.value?(x=!0,(r=e.onClear)===null||r===void 0||r.call(e),f.value=null,p(null)):p(u)}function L(){x=!1}const y=z(()=>{const{size:a}=e,{self:o}=t.value;return typeof a=="number"?`${a}px`:o[T("size",a)]}),M=z(()=>{const{common:{cubicBezierEaseInOut:a},self:o}=t.value,{itemColor:r,itemColorActive:b}=o,{color:u}=e;return{"--n-bezier":a,"--n-item-color":r,"--n-item-color-active":u||b,"--n-item-size":y.value}}),i=m?U("rate",z(()=>{const a=y.value,{color:o}=e;let r="";return a&&(r+=a[0]),o&&(r+=E(o)),r}),M,e):void 0;return{mergedClsPrefix:n,mergedValue:h,hoverIndex:f,handleMouseMove:F,handleClick:S,handleMouseLeave:R,handleMouseEnterSomeStar:L,cssVars:m?void 0:M,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{readonly:e,hoverIndex:n,mergedValue:m,mergedClsPrefix:t,onRender:d,$slots:{default:v}}=this;return d==null||d(),c("div",{class:[`${t}-rate`,{[`${t}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},A(this.count,(f,l)=>{const h=v?v({index:l}):c(W,{clsPrefix:t},{default:()=>Z}),p=n!==null?l+1<=n:l+1<=(m||0);return c("div",{key:l,class:[`${t}-rate__item`,p&&`${t}-rate__item--active`],onClick:e?void 0:s=>{this.handleClick(l,s)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:s=>{this.handleMouseMove(l,s)}},h,this.allowHalf?c("div",{class:[`${t}-rate__half`,{[`${t}-rate__half--active`]:!p&&n!==null?l+.5<=n:l+.5<=(m||0)}]},h):null)}))}});export{G as N};
