import{T as $}from"./runtime-dom.esm-bundler-4f377a37.js";import{u as W}from"./use-locale-13d55c5c.js";import{N as _}from"./Loading-a27cceda.js";import{w as H,N as a,R as E,b2 as w,j as x,a5 as V,aC as A,b8 as L,ad as D,_ as O}from"./index-6b27469d.js";import{l as I,c as Y,g as G,a as N,h as J,i as K,u as Q,d as j,e as U,w as k}from"./light-cb8e5d18.js";import{f as X}from"./fade-in-scale-up.cssr-59f6c429.js";import{t as Z}from"./throttle-149b2a5b.js";import{c as ee,u as oe,N as re}from"./Code-d8e2f3eb.js";import{s as te,N as le}from"./Scrollbar-6ef5ad24.js";const ie=e=>{const{textColor2:r,modalColor:l,borderColor:i,fontSize:g,primaryColor:p}=e;return{loaderFontSize:g,loaderTextColor:r,loaderColor:l,loaderBorder:`1px solid ${i}`,loadingColor:p}},ne=I({name:"Log",common:Y,peers:{Scrollbar:te,Code:ee},self:ie}),se=ne,ae=H({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:W("Log").localeRef}},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-log-loader`},a(_,{clsPrefix:e,strokeWidth:24,scale:.85}),a("span",{class:`${e}-log-loader__content`},this.locale.loading))}}),P=G("n-log"),de=H({props:{line:{type:String,default:""}},setup(e){const{trimRef:r,highlightRef:l,languageRef:i,mergedHljsRef:g}=E(P),p=w(null),R=x(()=>r.value?e.line.trim():e.line);function u(){p.value&&(p.value.innerHTML=T(i.value,R.value))}function T(m,C){const{value:b}=g;return b&&m&&b.getLanguage(m)?b.highlight(C,{language:m}).value:C}return V(()=>{l.value&&u()}),A(L(e,"line"),()=>{l.value&&u()}),{highlight:l,selfRef:p,maybeTrimmedLines:R}},render(){const{highlight:e,maybeTrimmedLines:r}=this;return a("pre",{ref:"selfRef"},e?null:r)}}),ce=N("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[J("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),N("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[X(),K("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),N("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),fe=Object.assign(Object.assign({},j.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),ge=H({name:"Log",props:fe,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:l}=Q(e),i=w(!1),g=x(()=>e.language!==void 0),p=x(()=>`calc(${Math.round(e.rows*e.lineHeight*e.fontSize)}px)`),R=x(()=>{const{log:o}=e;return o?o.split(`
`):e.lines}),u=w(null),T=j("Log","-log",ce,se,e,r);function m(o){const t=o.target,d=t.firstElementChild;if(i.value){O(()=>{i.value=!1});return}const c=t.offsetHeight,n=t.scrollTop,v=d.offsetHeight,z=n,S=v-n-c;if(z<=e.offsetTop){const{onReachTop:f,onRequireMore:s}=e;s&&s("top"),f&&f()}if(S<=e.offsetBottom){const{onReachBottom:f,onRequireMore:s}=e;s&&s("bottom"),f&&f()}}const C=Z(b,300);function b(o){if(i.value){O(()=>{i.value=!1});return}if(u.value){const{containerRef:t,contentRef:d}=u.value;if(t&&d){const c=t.offsetHeight,n=t.scrollTop,v=d.offsetHeight,z=n,S=v-n-c,f=o.deltaY;if(z===0&&f<0){const{onRequireMore:s}=e;s&&s("top")}if(S<=0&&f>0){const{onRequireMore:s}=e;s&&s("bottom")}}}}function y(o){const{value:t}=u;if(!t)return;const{silent:d,top:c,position:n}=o;d&&(i.value=!0),c!==void 0?t.scrollTo({left:0,top:c}):(n==="bottom"||n==="top")&&t.scrollTo({position:n})}function M(o=!1){k("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),y({position:"top",silent:o})}function q(o=!1){k("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),y({position:"bottom",silent:o})}D(P,{languageRef:L(e,"language"),mergedHljsRef:oe(e),trimRef:L(e,"trim"),highlightRef:g});const F={scrollTo:y},B=x(()=>{const{self:{loaderFontSize:o,loaderTextColor:t,loaderColor:d,loaderBorder:c,loadingColor:n},common:{cubicBezierEaseInOut:v}}=T.value;return{"--n-bezier":v,"--n-loader-font-size":o,"--n-loader-border":c,"--n-loader-color":d,"--n-loader-text-color":t,"--n-loading-color":n}}),h=l?U("log",void 0,B,e):void 0;return Object.assign(Object.assign({},F),{mergedClsPrefix:r,scrollbarRef:u,mergedTheme:T,styleHeight:p,mergedLines:R,scrollToTop:M,scrollToBottom:q,handleWheel:C,handleScroll:m,cssVars:l?void 0:B,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender})},render(){const{mergedClsPrefix:e,mergedTheme:r,onRender:l}=this;return l==null||l(),a("div",{class:[`${e}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[a(le,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>a(re,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:r.peers.Code,themeOverrides:r.peerOverrides.Code},{default:()=>this.mergedLines.map((i,g)=>a(de,{key:g,line:i}))})}),a($,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?a(ae,{clsPrefix:e}):null})])}});export{ge as N};
