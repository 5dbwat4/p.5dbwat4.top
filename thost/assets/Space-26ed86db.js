import{u as B,h as S,s as C,m as G}from"./light-061b806c.js";import{d as R}from"./Button-cc4d8cf9.js";import{f as j}from"./flatten-7ea74e97.js";import{g as E}from"./get-slot-1efb97e5.js";import{a as L,d as x}from"./Close-7ee9b945.js";import{v as M,i as I,J as v}from"./runtime-core.esm-bundler-42be6625.js";const P={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},T=()=>P,A={name:"Space",self:T},N=A;let h;const O=()=>{if(!R)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),h=n}return h},W=Object.assign(Object.assign({},S.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),K=M({name:"Space",props:W,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:u}=B(e),a=S("Space","-space",void 0,N,e,n),g=C("Space",u,n);return{useGap:O(),rtlEnabled:g,mergedClsPrefix:n,margin:I(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[G("gap",t)]:f}}=a.value,{row:l,col:p}=L(f);return{horizontal:x(p),vertical:x(l)}})}},render(){const{vertical:e,align:n,inline:u,justify:a,itemStyle:g,margin:t,wrap:f,mergedClsPrefix:l,rtlEnabled:p,useGap:i,wrapItem:b,internalUseGap:w}=this,c=j(E(this));if(!c.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,$=`${t.vertical}px`,o=`${t.vertical/2}px`,s=c.length-1,d=a.startsWith("space-");return v("div",{role:"none",class:[`${l}-space`,p&&`${l}-space--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(a)?"flex-"+a:a,flexWrap:!f||e?"nowrap":"wrap",marginTop:i||e?"":`-${o}`,marginBottom:i||e?"":`-${o}`,alignItems:n,gap:i?`${t.vertical}px ${t.horizontal}px`:""}},!b&&(i||w)?c:c.map((z,r)=>v("div",{role:"none",style:[g,{maxWidth:"100%"},i?"":e?{marginBottom:r!==s?$:""}:p?{marginLeft:d?a==="space-between"&&r===s?"":m:r!==s?y:"",marginRight:d?a==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}:{marginRight:d?a==="space-between"&&r===s?"":m:r!==s?y:"",marginLeft:d?a==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}]},z)))}});export{K as N};