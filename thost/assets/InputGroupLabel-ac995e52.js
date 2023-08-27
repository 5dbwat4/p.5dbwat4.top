import{e as x,g as C,u as R,h as u,j as B,m as l}from"./light-061b806c.js";import{i as L}from"./light-a899ddec.js";import{v as y,i as a,J as d}from"./runtime-core.esm-bundler-42be6625.js";const k=x("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[C("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),_=Object.assign(Object.assign({},u.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),T=y({name:"InputGroupLabel",props:_,setup(e){const{mergedBorderedRef:i,mergedClsPrefixRef:r,inlineThemeDisabled:n}=R(e),b=u("Input","-input-group-label",k,L,e,r),s=a(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:c},self:{groupLabelColor:p,borderRadius:g,groupLabelTextColor:h,lineHeight:m,groupLabelBorder:f,[l("fontSize",t)]:v,[l("height",t)]:z}}=b.value;return{"--n-bezier":c,"--n-group-label-color":p,"--n-group-label-border":f,"--n-border-radius":g,"--n-group-label-text-color":h,"--n-font-size":v,"--n-line-height":m,"--n-height":z}}),o=n?B("input-group-label",a(()=>e.size[0]),s,e):void 0;return{mergedClsPrefix:r,mergedBordered:i,cssVars:n?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,i,r;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${n}-input-group-label`,this.themeClass],style:this.cssVars},(r=(i=this.$slots).default)===null||r===void 0?void 0:r.call(i),this.mergedBordered?d("div",{class:`${n}-input-group-label__border`}):null)}});export{T as N};
