import{a as $,h as d,b as h,u as z,d as f,k as n,e as y}from"./light-3c431b54.js";import{t as T}from"./light-951fcd76.js";import{v as B,i as c,J as P}from"./index-c2ed52a5.js";const R=$("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("&:first-child",{marginTop:0}),h("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[h("align-text",{paddingLeft:0},[d("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),d("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),W=Object.assign(Object.assign({},f.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),i=r=>B({name:`H${r}`,props:W,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=z(e),a=f("Typography","-h",R,T,e,o),l=c(()=>{const{type:p}=e,{common:{cubicBezierEaseInOut:g},self:{headerFontWeight:b,headerTextColor:m,[n("headerPrefixWidth",r)]:x,[n("headerFontSize",r)]:v,[n("headerMargin",r)]:u,[n("headerBarWidth",r)]:w,[n("headerBarColor",p)]:C}}=a.value;return{"--n-bezier":g,"--n-font-size":v,"--n-margin":u,"--n-bar-color":C,"--n-bar-width":w,"--n-font-weight":b,"--n-text-color":m,"--n-prefix-width":x}}),t=s?y(`h${r}`,c(()=>e.type[0]),l,e):void 0;return{mergedClsPrefix:o,cssVars:s?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:o,alignText:s,mergedClsPrefix:a,cssVars:l,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),P(`h${r}`,{class:[`${a}-h`,`${a}-h${r}`,this.themeClass,{[`${a}-h--prefix-bar`]:o,[`${a}-h--align-text`]:s}],style:l},t)}}),k=i("1");i("2"),i("3"),i("4"),i("5"),i("6");export{k as N};
