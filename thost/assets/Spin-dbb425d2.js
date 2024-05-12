import{T as S}from"./runtime-dom.esm-bundler-4f377a37.js";import{c as x,h as f,a as d,b as h,u as C,d as g,k,e as $}from"./light-cb8e5d18.js";import{f as w}from"./Scrollbar-6ef5ad24.js";import{p as N}from"./Close-df27b242.js";import{u as T}from"./use-compitable-182c3d4e.js";import{N as j}from"./Loading-a27cceda.js";import{w as B,j as u,b2 as O,aD as P,N as a}from"./index-6b27469d.js";const R=e=>{const{opacityDisabled:r,heightTiny:i,heightSmall:t,heightMedium:l,heightLarge:s,heightHuge:c,primaryColor:o,fontSize:n}=e;return{fontSize:n,textColor:o,sizeTiny:i,sizeSmall:t,sizeMedium:l,sizeLarge:s,sizeHuge:c,color:o,opacitySpinning:r}},V={name:"Spin",common:x,self:R},W=V,D=f([f("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),d("spin-container",`
 position: relative;
 `,[d("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[w()])]),d("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),d("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[h("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),d("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),d("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[h("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),H={small:20,medium:18,large:16},L=Object.assign(Object.assign({},g.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),M=B({name:"Spin",props:L,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:i}=C(e),t=g("Spin","-spin",D,W,e,r),l=u(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:p},self:m}=t.value,{opacitySpinning:v,color:y,textColor:b}=m,z=typeof n=="number"?N(n):m[k("size",n)];return{"--n-bezier":p,"--n-opacity-spinning":v,"--n-size":z,"--n-color":y,"--n-text-color":b}}),s=i?$("spin",u(()=>{const{size:n}=e;return typeof n=="number"?String(n):n[0]}),l,e):void 0,c=T(e,["spinning","show"]),o=O(!1);return P(n=>{let p;if(c.value){const{delay:m}=e;if(m){p=window.setTimeout(()=>{o.value=!0},m),n(()=>{clearTimeout(p)});return}}o.value=c.value}),{mergedClsPrefix:r,active:o,mergedStrokeWidth:u(()=>{const{strokeWidth:n}=e;if(n!==void 0)return n;const{size:p}=e;return H[typeof p=="number"?"medium":p]}),cssVars:i?void 0:l,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e,r;const{$slots:i,mergedClsPrefix:t,description:l}=this,s=i.icon&&this.rotate,c=(l||i.description)&&a("div",{class:`${t}-spin-description`},l||((e=i.description)===null||e===void 0?void 0:e.call(i))),o=i.icon?a("div",{class:[`${t}-spin-body`,this.themeClass]},a("div",{class:[`${t}-spin`,s&&`${t}-spin--rotate`],style:i.default?"":this.cssVars},i.icon()),c):a("div",{class:[`${t}-spin-body`,this.themeClass]},a(j,{clsPrefix:t,style:i.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),c);return(r=this.onRender)===null||r===void 0||r.call(this),i.default?a("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${t}-spin-content`,this.active&&`${t}-spin-content--spinning`,this.contentClass],style:this.contentStyle},i),a(S,{name:"fade-in-transition"},{default:()=>this.active?o:null})):o}});export{M as N};
