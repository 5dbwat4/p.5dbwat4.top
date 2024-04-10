import{a as b,h as o,u,d as a,e as x}from"./light-3c431b54.js";import{t as z}from"./light-951fcd76.js";import{v as C,i as l,J as P}from"./index-c2ed52a5.js";const T=b("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[o("&:first-child","margin-top: 0;"),o("&:last-child","margin-bottom: 0;")]),y=Object.assign(Object.assign({},a.props),{depth:[String,Number]}),R=C({name:"P",props:y,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=u(e),p=a("Typography","-p",T,z,e,i),t=l(()=>{const{depth:n}=e,h=n||"1",{common:{cubicBezierEaseInOut:m},self:{pFontSize:d,pLineHeight:c,pMargin:g,pTextColor:f,[`pTextColor${h}Depth`]:v}}=p.value;return{"--n-bezier":m,"--n-font-size":d,"--n-line-height":c,"--n-margin":g,"--n-text-color":n===void 0?f:v}}),r=s?x("p",l(()=>`${e.depth||""}`),t,e):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:t,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),P("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{R as N};
