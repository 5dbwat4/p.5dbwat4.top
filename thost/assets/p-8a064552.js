import{d as v,e as r,u as C,g as l,h as b}from"./light-d6058c0b.js";import{t as x}from"./light-d7d7fe15.js";import{v as z,i as a,J as y}from"./runtime-core.esm-bundler-c066f4bf.js";const T=v("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[r("&:first-child","margin-top: 0;"),r("&:last-child","margin-bottom: 0;")]),P=Object.assign(Object.assign({},l.props),{depth:[String,Number]}),N=z({name:"P",props:P,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=C(e),h=l("Typography","-p",T,x,e,t),i=a(()=>{const{depth:o}=e,d=o||"1",{common:{cubicBezierEaseInOut:c},self:{pFontSize:m,pLineHeight:p,pMargin:g,pTextColor:f,[`pTextColor${d}Depth`]:u}}=h.value;return{"--n-bezier":c,"--n-font-size":m,"--n-line-height":p,"--n-margin":g,"--n-text-color":o===void 0?f:u}}),s=n?b("p",a(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),y("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{N};
