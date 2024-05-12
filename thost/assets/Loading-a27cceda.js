import{g as w,h as l,v as $,a as y,i as d,s as k}from"./light-cb8e5d18.js";import{R as _,ad as C,j as c,a1 as S,w as p,N as i,b8 as T}from"./index-6b27469d.js";import{T as z}from"./runtime-dom.esm-bundler-4f377a37.js";import{i as N}from"./use-is-mounted-e356ec1d.js";function x(t){return t.replace(/#|\(|\)|,|\s|\./g,"_")}const u=w("n-form-item");function B(t,{defaultSize:r="medium",mergedSize:n,mergedDisabled:s}={}){const e=_(u,null);C(u,null);const a=c(n?()=>n(e):()=>{const{size:o}=t;if(o)return o;if(e){const{mergedSize:g}=e;if(g.value!==void 0)return g.value}return r}),b=c(s?()=>s(e):()=>{const{disabled:o}=t;return o!==void 0?o:e?e.disabled.value:!1}),v=c(()=>{const{status:o}=t;return o||(e==null?void 0:e.mergedValidationStatus.value)});return S(()=>{e&&e.restoreValidation()}),{mergedSizeRef:a,mergedDisabledRef:b,mergedStatusRef:v,nTriggerFormBlur(){e&&e.handleContentBlur()},nTriggerFormChange(){e&&e.handleContentChange()},nTriggerFormFocus(){e&&e.handleContentFocus()},nTriggerFormInput(){e&&e.handleContentInput()}}}const h=p({name:"BaseIconSwitchTransition",setup(t,{slots:r}){const n=N();return()=>i(z,{name:"icon-switch-transition",appear:n.value},r)}}),{cubicBezierEaseInOut:F}=$;function f({originalTransform:t="",left:r=0,top:n=0,transition:s=`all .3s ${F} !important`}={}){return[l("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:t+" scale(0.75)",left:r,top:n,opacity:0}),l("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:r,top:n,opacity:1}),l("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:r,top:n,transition:s})]}const I=l([l("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),y("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[d("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[f()]),d("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[f({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),d("container",`
 animation: rotator 3s linear infinite both;
 `,[d("icon",`
 height: 1em;
 width: 1em;
 `)])])]),m="1.6s",O={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},R=p({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},O),setup(t){k("-base-loading",I,T(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:r,strokeWidth:n,stroke:s,scale:e}=this,a=r/e;return i("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},i(h,null,{default:()=>this.show?i("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},i("div",{class:`${t}-base-loading__container`},i("svg",{class:`${t}-base-loading__icon`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},i("g",null,i("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${a} ${a};270 ${a} ${a}`,begin:"0s",dur:m,fill:"freeze",repeatCount:"indefinite"}),i("circle",{class:`${t}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:r-n/2,"stroke-dasharray":5.67*r,"stroke-dashoffset":18.48*r},i("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`,begin:"0s",dur:m,fill:"freeze",repeatCount:"indefinite"}),i("animate",{attributeName:"stroke-dashoffset",values:`${5.67*r};${1.42*r};${5.67*r}`,begin:"0s",dur:m,fill:"freeze",repeatCount:"indefinite"})))))):i("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}});export{R as N,h as a,x as c,u as f,f as i,B as u};
