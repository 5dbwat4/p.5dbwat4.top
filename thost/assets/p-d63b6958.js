import{a as v,h as o,u,d as a,e as x}from"./light-cb8e5d18.js";import{t as z}from"./light-5c2f581c.js";import{w as C,j as l,N as P}from"./index-6b27469d.js";const T=v("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[o("&:first-child","margin-top: 0;"),o("&:last-child","margin-bottom: 0;")]),j=Object.assign(Object.assign({},a.props),{depth:[String,Number]}),y=C({name:"P",props:j,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:t}=u(e),p=a("Typography","-p",T,z,e,s),i=l(()=>{const{depth:n}=e,h=n||"1",{common:{cubicBezierEaseInOut:m},self:{pFontSize:d,pLineHeight:c,pMargin:g,pTextColor:f,[`pTextColor${h}Depth`]:b}}=p.value;return{"--n-bezier":m,"--n-font-size":d,"--n-line-height":c,"--n-margin":g,"--n-text-color":n===void 0?f:b}}),r=t?x("p",l(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:s,cssVars:t?void 0:i,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),P("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{y as N};
