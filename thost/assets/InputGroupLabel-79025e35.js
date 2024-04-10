import{a as x,i as C,u as k,d as t,k as a,e as B}from"./light-3c431b54.js";import{i as R}from"./light-951b0264.js";import{v as y,i as d,J as u}from"./index-c2ed52a5.js";const L=x("input-group-label",`
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
 `)]),w=Object.assign(Object.assign({},t.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),I=y({name:"InputGroupLabel",props:w,setup(e){const{mergedBorderedRef:s,mergedClsPrefixRef:r,inlineThemeDisabled:i}=k(e),b=t("Input","-input-group-label",L,R,e,r),n=d(()=>{const{size:l}=e,{common:{cubicBezierEaseInOut:p},self:{groupLabelColor:g,borderRadius:h,groupLabelTextColor:c,lineHeight:v,groupLabelBorder:m,[a("fontSize",l)]:f,[a("height",l)]:z}}=b.value;return{"--n-bezier":p,"--n-group-label-color":g,"--n-group-label-border":m,"--n-border-radius":h,"--n-group-label-text-color":c,"--n-font-size":f,"--n-line-height":v,"--n-height":z}}),o=i?B("input-group-label",d(()=>e.size[0]),n,e):void 0;return{mergedClsPrefix:r,mergedBordered:s,cssVars:i?void 0:n,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,s,r;const{mergedClsPrefix:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${i}-input-group-label`,this.themeClass],style:this.cssVars},(r=(s=this.$slots).default)===null||r===void 0?void 0:r.call(s),this.mergedBordered?u("div",{class:`${i}-input-group-label__border`}):null)}});export{I as N};
