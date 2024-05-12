import{c as u,a as f,b as p,h as l,d as m,u as v,e as b,w as $}from"./light-cb8e5d18.js";import{f as z}from"./format-length-c9d165c6.js";import{w as C,j as a,N as h,Z as _}from"./index-6b27469d.js";const D=t=>{const{textColorBase:o,opacity1:n,opacity2:r,opacity3:s,opacity4:e,opacity5:i}=t;return{color:o,opacity1Depth:n,opacity2Depth:r,opacity3Depth:s,opacity4Depth:e,opacity5Depth:i}},x={name:"Icon",common:u,self:D},S=x,w=f("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[p("color-transition",{transition:"color .3s var(--n-bezier)"}),p("depth",{color:"var(--n-color)"},[l("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),l("svg",{height:"1em",width:"1em"})]),j=Object.assign(Object.assign({},m.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),R=C({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:j,setup(t){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=v(t),r=m("Icon","-icon",w,S,t,o),s=a(()=>{const{depth:i}=t,{common:{cubicBezierEaseInOut:c},self:d}=r.value;if(i!==void 0){const{color:y,[`opacity${i}Depth`]:g}=d;return{"--n-bezier":c,"--n-color":y,"--n-opacity":g}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),e=n?b("icon",a(()=>`${t.depth||"d"}`),s,t):void 0;return{mergedClsPrefix:o,mergedStyle:a(()=>{const{size:i,color:c}=t;return{fontSize:z(i),color:c}}),cssVars:n?void 0:s,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var t;const{$parent:o,depth:n,mergedClsPrefix:r,component:s,onRender:e,themeClass:i}=this;return!((t=o==null?void 0:o.$options)===null||t===void 0)&&t._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),e==null||e(),h("i",_(this.$attrs,{role:"img",class:[`${r}-icon`,i,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),s?h(s):this.$slots)}});export{R as N};
