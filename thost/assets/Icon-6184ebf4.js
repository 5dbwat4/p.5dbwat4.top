import{a as g,d as y,l,e as d,g as h,u as v,h as b,w as C}from"./light-d6058c0b.js";import{f as $}from"./format-length-c9d165c6.js";import{v as _,i as a,J as m,W as z}from"./runtime-core.esm-bundler-c066f4bf.js";const D=e=>{const{textColorBase:n,opacity1:i,opacity2:s,opacity3:c,opacity4:o,opacity5:t}=e;return{color:n,opacity1Depth:i,opacity2Depth:s,opacity3Depth:c,opacity4Depth:o,opacity5Depth:t}},x={name:"Icon",common:g,self:D},R=x,S=y("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),w=Object.assign(Object.assign({},h.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),N=_({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:w,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=v(e),s=h("Icon","-icon",S,R,e,n),c=a(()=>{const{depth:t}=e,{common:{cubicBezierEaseInOut:r},self:p}=s.value;if(t!==void 0){const{color:u,[`opacity${t}Depth`]:f}=p;return{"--n-bezier":r,"--n-color":u,"--n-opacity":f}}return{"--n-bezier":r,"--n-color":"","--n-opacity":""}}),o=i?b("icon",a(()=>`${e.depth||"d"}`),c,e):void 0;return{mergedClsPrefix:n,mergedStyle:a(()=>{const{size:t,color:r}=e;return{fontSize:$(t),color:r}}),cssVars:i?void 0:c,themeClass:o?.themeClass,onRender:o?.onRender}},render(){var e;const{$parent:n,depth:i,mergedClsPrefix:s,component:c,onRender:o,themeClass:t}=this;return!((e=n?.$options)===null||e===void 0)&&e._n_icon__&&C("icon","don't wrap `n-icon` inside `n-icon`"),o?.(),m("i",z(this.$attrs,{role:"img",class:[`${s}-icon`,t,{[`${s}-icon--depth`]:i,[`${s}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),c?m(c):this.$slots)}});export{N};
