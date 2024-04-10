import{c as w,h as b,a as N,u as C,d as p,k as E}from"./light-3c431b54.js";import{p as f}from"./Close-4e65a8ab.js";import{b as O}from"./Scrollbar-5b7370f2.js";import{v as P,i as j,J as k,W as A,F as L}from"./index-c2ed52a5.js";import{u as F}from"./use-houdini-5de772fd.js";const M=e=>{const{heightSmall:t,heightMedium:n,heightLarge:o,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:t,heightMedium:n,heightLarge:o}},W={name:"Skeleton",common:w,self:M},$=b([N("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
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
 `)]),H=Object.assign(Object.assign({},p.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),I=P({name:"Skeleton",inheritAttrs:!1,props:H,setup(e){F();const{mergedClsPrefixRef:t}=C(e),n=p("Skeleton","-skeleton",$,W,e,t);return{mergedClsPrefix:t,style:j(()=>{var o,r;const a=n.value,{common:{cubicBezierEaseInOut:v}}=a,m=a.self,{color:y,colorEnd:z,borderRadius:S}=m;let i;const{circle:s,sharp:x,round:B,width:l,height:d,size:g,text:h,animated:R}=e;g!==void 0&&(i=m[E("height",g)]);const c=s?(o=l??d)!==null&&o!==void 0?o:i:l,u=(r=s?l??d:d)!==null&&r!==void 0?r:i;return{display:h?"inline-block":"",verticalAlign:h?"-0.125em":"",borderRadius:s?"50%":B?"4096px":x?"":S,width:typeof c=="number"?f(c):c,height:typeof u=="number"?f(u):u,animation:R?"":"none","--n-bezier":v,"--n-color-start":y,"--n-color-end":z}})}},render(){const{repeat:e,style:t,mergedClsPrefix:n,$attrs:o}=this,r=k("div",A({class:`${n}-skeleton`,style:t},o));return e>1?k(L,null,O(e,null).map(a=>[r,`
`])):r}});export{I as N};
