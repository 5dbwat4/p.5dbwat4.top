import{a as C,b as i,u as $,d as c,k as z,e as B}from"./light-cb8e5d18.js";import{u as S}from"./use-compitable-182c3d4e.js";import{t as T}from"./light-5c2f581c.js";import{w as R,j as h,N as a}from"./index-6b27469d.js";const k=C("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[i("strong",`
 font-weight: var(--n-font-weight-strong);
 `),i("italic",{fontStyle:"italic"}),i("underline",{textDecoration:"underline"}),i("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),V=Object.assign(Object.assign({},c.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),w=R({name:"Text",props:V,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=$(e),t=c("Typography","-text",k,T,e,n),s=h(()=>{const{depth:l,type:d}=e,m=d==="default"?l===void 0?"textColor":`textColor${l}Depth`:z("textColor",d),{common:{fontWeightStrong:g,fontFamilyMono:u,cubicBezierEaseInOut:f},self:{codeTextColor:b,codeBorderRadius:p,codeColor:x,codeBorder:v,[m]:y}}=t.value;return{"--n-bezier":f,"--n-text-color":y,"--n-font-weight-strong":g,"--n-font-famliy-mono":u,"--n-code-border-radius":p,"--n-code-text-color":b,"--n-code-color":x,"--n-code-border":v}}),o=r?B("text",h(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:n,compitableTag:S(e,["as","tag"]),cssVars:r?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,n,r;const{mergedClsPrefix:t}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${t}-text`,this.themeClass,{[`${t}-text--code`]:this.code,[`${t}-text--delete`]:this.delete,[`${t}-text--strong`]:this.strong,[`${t}-text--italic`]:this.italic,[`${t}-text--underline`]:this.underline}],o=(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n);return this.code?a("code",{class:s,style:this.cssVars},this.delete?a("del",null,o):o):this.delete?a("del",{class:s,style:this.cssVars},o):a(this.compitableTag||"span",{class:s,style:this.cssVars},o)}});export{w as N};
