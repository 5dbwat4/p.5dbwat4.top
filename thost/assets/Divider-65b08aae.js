import{a as f,d as p,p as c,f as d,l as o,u,g as v,h as x}from"./light-96080c0b.js";import{v as b,i as C,J as s,F as $}from"./runtime-core.esm-bundler-c066f4bf.js";const w=i=>{const{textColor1:t,dividerColor:n,fontWeightStrong:l}=i;return{textColor:t,color:n,fontWeight:l}},_={name:"Divider",common:f,self:w},y=_,z=p("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[c("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[c("no-title",`
 display: flex;
 align-items: center;
 `)]),d("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),o("title-position-left",[d("line",[o("left",{width:"28px"})])]),o("title-position-right",[d("line",[o("right",{width:"28px"})])]),o("dashed",[d("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),o("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),d("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),c("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),o("dashed",[d("line",{borderColor:"var(--n-color)"})]),o("vertical",{backgroundColor:"var(--n-color)"})]),k=Object.assign(Object.assign({},v.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),D=b({name:"Divider",props:k,setup(i){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=u(i),l=v("Divider","-divider",z,y,i,t),a=C(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:h,textColor:g,fontWeight:m}}=l.value;return{"--n-bezier":e,"--n-color":h,"--n-text-color":g,"--n-font-weight":m}}),r=n?x("divider",void 0,a,i):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:a,themeClass:r?.themeClass,onRender:r?.onRender}},render(){var i;const{$slots:t,titlePlacement:n,vertical:l,dashed:a,cssVars:r,mergedClsPrefix:e}=this;return(i=this.onRender)===null||i===void 0||i.call(this),s("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:l,[`${e}-divider--no-title`]:!t.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${n}`]:t.default&&n}],style:r},l?null:s("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!l&&t.default?s($,null,s("div",{class:`${e}-divider__title`},this.$slots),s("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}});export{D as N};