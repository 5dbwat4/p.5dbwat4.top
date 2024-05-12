import{c as m,a as f,j as c,i as d,b as o,u as x,d as v,e as b}from"./light-cb8e5d18.js";import{w as u,j as w,N as s,F as C}from"./index-6b27469d.js";const $=i=>{const{textColor1:r,dividerColor:l,fontWeightStrong:n}=i;return{textColor:r,color:l,fontWeight:n}},_={name:"Divider",common:m,self:$},z=_,y=f("divider",`
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
 `),c("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),o("dashed",[d("line",{borderColor:"var(--n-color)"})]),o("vertical",{backgroundColor:"var(--n-color)"})]),k=Object.assign(Object.assign({},v.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),D=u({name:"Divider",props:k,setup(i){const{mergedClsPrefixRef:r,inlineThemeDisabled:l}=x(i),n=v("Divider","-divider",y,z,i,r),a=w(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:h,textColor:g,fontWeight:p}}=n.value;return{"--n-bezier":e,"--n-color":h,"--n-text-color":g,"--n-font-weight":p}}),t=l?b("divider",void 0,a,i):void 0;return{mergedClsPrefix:r,cssVars:l?void 0:a,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var i;const{$slots:r,titlePlacement:l,vertical:n,dashed:a,cssVars:t,mergedClsPrefix:e}=this;return(i=this.onRender)===null||i===void 0||i.call(this),s("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:n,[`${e}-divider--no-title`]:!r.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${l}`]:r.default&&l}],style:t},n?null:s("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!n&&r.default?s(C,null,s("div",{class:`${e}-divider__title`},this.$slots),s("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}});export{D as N};
