import{c as N,h as b,a as R,u as j,d as p,k as C}from"./light-cb8e5d18.js";import{p as f}from"./Close-df27b242.js";import{b as E}from"./Scrollbar-6ef5ad24.js";import{w as O,j as P,N as k,Z as A,F as L}from"./index-6b27469d.js";import{u as $}from"./use-houdini-2b215f58.js";const F=e=>{const{heightSmall:t,heightMedium:n,heightLarge:o,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:t,heightMedium:n,heightLarge:o}},M={name:"Skeleton",common:N,self:F},Z=b([R("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),b("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),H=Object.assign(Object.assign({},p.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),I=O({name:"Skeleton",inheritAttrs:!1,props:H,setup(e){$();const{mergedClsPrefixRef:t}=j(e),n=p("Skeleton","-skeleton",Z,M,e,t);return{mergedClsPrefix:t,style:P(()=>{var o,r;const a=n.value,{common:{cubicBezierEaseInOut:v}}=a,m=a.self,{color:y,colorEnd:z,borderRadius:S}=m;let i;const{circle:s,sharp:x,round:B,width:l,height:d,size:h,text:g,animated:w}=e;h!==void 0&&(i=m[C("height",h)]);const c=s?(o=l??d)!==null&&o!==void 0?o:i:l,u=(r=s?l??d:d)!==null&&r!==void 0?r:i;return{display:g?"inline-block":"",verticalAlign:g?"-0.125em":"",borderRadius:s?"50%":B?"4096px":x?"":S,width:typeof c=="number"?f(c):c,height:typeof u=="number"?f(u):u,animation:w?"":"none","--n-bezier":v,"--n-color-start":y,"--n-color-end":z}})}},render(){const{repeat:e,style:t,mergedClsPrefix:n,$attrs:o}=this,r=k("div",A({class:`${n}-skeleton`,style:t},o));return e>1?k(L,null,E(e,null).map(a=>[r,`
`])):r}});export{I as N};
