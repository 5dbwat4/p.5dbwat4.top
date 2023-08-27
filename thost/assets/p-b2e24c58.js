import{e as v,f as r,u as C,h as l,j as b}from"./light-061b806c.js";import{t as x}from"./light-1325cd86.js";import{v as z,i as a,J as y}from"./runtime-core.esm-bundler-42be6625.js";const T=v("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[r("&:first-child","margin-top: 0;"),r("&:last-child","margin-bottom: 0;")]),P=Object.assign(Object.assign({},l.props),{depth:[String,Number]}),D=z({name:"P",props:P,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=C(e),h=l("Typography","-p",T,x,e,t),i=a(()=>{const{depth:o}=e,d=o||"1",{common:{cubicBezierEaseInOut:c},self:{pFontSize:m,pLineHeight:p,pMargin:f,pTextColor:g,[`pTextColor${d}Depth`]:u}}=h.value;return{"--n-bezier":c,"--n-font-size":m,"--n-line-height":p,"--n-margin":f,"--n-text-color":o===void 0?g:u}}),s=n?b("p",a(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),y("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{D as N};
