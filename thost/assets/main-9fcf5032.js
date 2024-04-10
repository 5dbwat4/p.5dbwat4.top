import{v as $,O as te,aZ as h,i as D,J as P,aG as ae,X as I,aa as T,T as re,F as oe,a8 as g,j as _,aE as o,m as ie,b7 as e,t as l,s as u,k as y,bd as z,ag as le,l as J}from"./index-c2ed52a5.js";import{l as U,a as ne,i as se,N as ue}from"./APIHelper-c6c5541a.js";import{N as B}from"./Card-bc241d1a.js";import{N as b}from"./p-87ab3748.js";import{N as x}from"./text-b5c6fee5.js";import{N as F}from"./Divider-3c6a8fe5.js";import{N as de}from"./InputGroup-b7c6b534.js";import{N as ce}from"./Input-b50999c9.js";import{N as C}from"./Button-591cb8c7.js";import{N as S}from"./Alert-18df1bd2.js";import{N as V}from"./Log-42b28ba2.js";import{N as fe}from"./Spin-89bf8d7a.js";import{N as ve}from"./Switch-41c81ba2.js";import{N as me}from"./Modal-edc91d29.js";import{m as he,T as ge}from"./runtime-dom.esm-bundler-51aad541.js";import{c as pe,a as G,b as O,u as M,d as X,e as _e}from"./light-3c431b54.js";import{f as ye}from"./Scrollbar-5b7370f2.js";import{i as be}from"./use-is-mounted-912be460.js";import"./format-length-c9d165c6.js";import"./Icon-9d083982.js";import"./Warning-fc401418.js";import"./Close-4e65a8ab.js";import"./keysOf-5d5107c5.js";import"./use-memo-13475312.js";import"./light-951fcd76.js";import"./use-compitable-c3112252.js";import"./use-locale-ca0d0990.js";import"./index-975a2d8f.js";import"./use-merged-state-5c1c3246.js";import"./Loading-b36f50c8.js";import"./light-951b0264.js";import"./Suffix-26bafbe6.js";import"./FadeInExpandTransition-3bfdffc9.js";import"./fade-in-height-expand.cssr-0178db3d.js";import"./fade-in-scale-up.cssr-6d358681.js";import"./throttle-ef6a3569.js";import"./Code-1be90b8c.js";import"./index-80752888.js";import"./flatten-30e3eebb.js";import"./use-false-until-truthy-96bf4c79.js";import"./utils-20c36e7e.js";import"./index-cbfaa337.js";const we=s=>{const{primaryColor:t,errorColor:a}=s;return{colorError:a,colorLoading:t,height:"2px"}},Ae={name:"LoadingBar",common:pe,self:we},ke=Ae,Pe=G("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[ye({enterDuration:"0.3s",leaveDuration:"0.8s"}),G("loading-bar",`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[O("starting",`
 background: var(--n-color-loading);
 `),O("finishing",`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),O("error",`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);var N=globalThis&&globalThis.__awaiter||function(s,t,a,r){function m(n){return n instanceof a?n:new a(function(i){i(n)})}return new(a||(a=Promise))(function(n,i){function p(v){try{c(r.next(v))}catch(A){i(A)}}function f(v){try{c(r.throw(v))}catch(A){i(A)}}function c(v){v.done?n(v.value):m(v.value).then(p,f)}c((r=r.apply(s,t||[])).next())})};function L(s,t){return`${t}-loading-bar ${t}-loading-bar--${s}`}const Ie=$({name:"LoadingBar",props:{containerClass:String,containerStyle:[String,Object]},setup(){const{inlineThemeDisabled:s}=M(),{props:t,mergedClsPrefixRef:a}=te(U),r=h(null),m=h(!1),n=h(!1),i=h(!1),p=h(!1);let f=!1;const c=h(!1),v=D(()=>{const{loadingBarStyle:d}=t;return d?d[c.value?"error":"loading"]:""});function A(){return N(this,void 0,void 0,function*(){m.value=!1,i.value=!1,f=!1,c.value=!1,p.value=!0,yield I(),p.value=!1})}function R(d=0,E=80,j="starting"){return N(this,void 0,void 0,function*(){if(n.value=!0,yield A(),f)return;i.value=!0,yield I();const w=r.value;w&&(w.style.maxWidth=`${d}%`,w.style.transition="none",w.offsetWidth,w.className=L(j,a.value),w.style.transition="",w.style.maxWidth=`${E}%`)})}function q(){return N(this,void 0,void 0,function*(){if(f||c.value)return;n.value&&(yield I()),f=!0;const d=r.value;d&&(d.className=L("finishing",a.value),d.style.maxWidth="100%",d.offsetWidth,i.value=!1)})}function H(){if(!(f||c.value))if(!i.value)R(100,100,"error").then(()=>{c.value=!0;const d=r.value;d&&(d.className=L("error",a.value),d.offsetWidth,i.value=!1)});else{c.value=!0;const d=r.value;if(!d)return;d.className=L("error",a.value),d.style.maxWidth="100%",d.offsetWidth,i.value=!1}}function K(){m.value=!0}function Q(){m.value=!1}function Y(){return N(this,void 0,void 0,function*(){yield A()})}const ee=X("LoadingBar","-loading-bar",Pe,ke,t,a),W=D(()=>{const{self:{height:d,colorError:E,colorLoading:j}}=ee.value;return{"--n-height":d,"--n-color-loading":j,"--n-color-error":E}}),k=s?_e("loading-bar",void 0,W,t):void 0;return{mergedClsPrefix:a,loadingBarRef:r,started:n,loading:i,entering:m,transitionDisabled:p,start:R,error:H,finish:q,handleEnter:K,handleAfterEnter:Q,handleAfterLeave:Y,mergedLoadingBarStyle:v,cssVars:s?void 0:W,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:s}=this;return P(ge,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),ae(P("div",{class:[`${s}-loading-bar-container`,this.themeClass,this.containerClass],style:this.containerStyle},P("div",{ref:"loadingBarRef",class:[`${s}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[he,this.loading||!this.loading&&this.entering]])}})}}),xe=Object.assign(Object.assign({},X.props),{to:{type:[String,Object,Boolean],default:void 0},containerClass:String,containerStyle:[String,Object],loadingBarStyle:{type:Object}}),Se=$({name:"LoadingBarProvider",props:xe,setup(s){const t=be(),a=h(null),r={start(){var n;t.value?(n=a.value)===null||n===void 0||n.start():I(()=>{var i;(i=a.value)===null||i===void 0||i.start()})},error(){var n;t.value?(n=a.value)===null||n===void 0||n.error():I(()=>{var i;(i=a.value)===null||i===void 0||i.error()})},finish(){var n;t.value?(n=a.value)===null||n===void 0||n.finish():I(()=>{var i;(i=a.value)===null||i===void 0||i.finish()})}},{mergedClsPrefixRef:m}=M(s);return T(ne,r),T(U,{props:s,mergedClsPrefixRef:m}),Object.assign(r,{loadingBarRef:a})},render(){var s,t;return P(oe,null,P(re,{disabled:this.to===!1,to:this.to||"body"},P(Ie,{ref:"loadingBarRef",containerStyle:this.containerStyle,containerClass:this.containerClass})),(t=(s=this.$slots).default)===null||t===void 0?void 0:t.call(s))}});var Ce=(s,t)=>{window.EventList=window.EventList||{},window.EventList[s]=t},Ne=(s,t=[])=>(window.EventList=window.EventList||{},window.EventList[s](...t));const Z="_5dbwat4_proj_thost_r3_be",Le={__name:"APIReminder",setup(s){const t=h("waiting"),a=h("https://example.com"),r=h("n"),m=()=>{r.value="checking",fetch(a.value+"/api/whoareyou").then(f=>f.json()).then(f=>{f.entity==Z?(r.value="success",p.value.enterImmediatelyAfterCheckingAPI&&i()):(r.value="error",n.value=`Not Match.==>
`+JSON.stringify(f,null,4))}).catch(f=>{r.value="error",n.value=`Error Fetching.==>
`+f})},n=h("nothing"),i=()=>{localStorage.setItem("__5dbwat_proj__thost_apihost",a.value),console.log("xxx"),localStorage.setItem("__5dbwat_proj__thost_preference",JSON.stringify(p.value)),Ne("entryAllowStateUpdate",[!0])};localStorage.getItem("__5dbwat_proj__thost_apihost")?(a.value=localStorage.getItem("__5dbwat_proj__thost_apihost"),t.value="checking",m()):t.value="unspecified";const p=h(JSON.parse(localStorage.getItem("__5dbwat_proj__thost_preference")||'{"enterImmediatelyAfterCheckingAPI":false}'));return se(),(f,c)=>(g(),_(e(me),{show:!0},{default:o(()=>[ie("div",null,[t.value=="unspecified"?(g(),_(e(B),{key:0,style:{width:"600px"},title:"\u4F60\u53EF\u80FD\u9700\u8981\u6307\u5B9A\u4E00\u4E2AAPI\u5730\u5740",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{footer:o(()=>[]),default:o(()=>[l(e(b),null,{default:o(()=>[u("\u4F60\u9700\u8981\u914D\u5408\u4E00\u4E2A\u540E\u7AEFAPI\u624D\u80FD\u6B63\u5E38\u7684\u4F7F\u7528thost\u7684\u76F8\u5173\u529F\u80FD\u3002\u8FD9\u5C31\u8981\u6C42\u4F60\u6307\u5B9A\u4E00\u4E2AAPI\u5730\u5740\u3002")]),_:1}),l(e(b),null,{default:o(()=>[u("\u672C\u7248\u672C\u7684thost\u6240\u9700\u7684API\u4E3A\uFF1A"),l(e(x),{code:""},{default:o(()=>[u("_5dbwat4_proj_thost_r3_be")]),_:1}),u(" \u7248\u672C\u4E3A "),l(e(x),{code:""},{default:o(()=>[u("r3")]),_:1})]),_:1}),l(e(F)),l(e(de),null,{default:o(()=>[l(e(ce),{value:a.value,"onUpdate:value":c[0]||(c[0]=v=>a.value=v)},null,8,["value"]),l(e(C),{type:"primary",loading:r.value=="checking",onClick:m},{default:o(()=>[u(" \u68C0\u67E5API\u72B6\u6001 ")]),_:1},8,["loading"])]),_:1}),r.value=="success"?(g(),_(e(S),{key:0,title:"API\u5730\u5740\u9A8C\u8BC1\u6210\u529F",type:"success"},{default:o(()=>[l(e(b),null,{default:o(()=>[u("API\u9A8C\u8BC1\u6210\u529F\u3002\u5F00\u59CB\u4F7F\u7528thost\u5427\uFF01")]),_:1}),l(e(C),{type:"primary",onClick:i,disabled:r.value!="success"},{default:o(()=>[u("\u786E\u5B9A ")]),_:1},8,["disabled"])]),_:1})):y("",!0),r.value=="error"?(g(),_(e(S),{key:1,title:"API\u5730\u5740\u9A8C\u8BC1\u5931\u8D25",type:"error"},{default:o(()=>[u(" API\u9A8C\u8BC1\u5931\u8D25\u3002\u4EE5\u4E0B\u662F\u76F8\u5173\u4FE1\u606F: "),l(e(V),{log:n.value,rows:5},null,8,["log"])]),_:1})):y("",!0)]),_:1})):y("",!0),t.value=="checking"?(g(),_(e(B),{key:1,style:{width:"600px"},title:"\u6211\u4EEC\u9700\u8981\u786E\u8BA4\u4F60\u6307\u5B9A\u7684API\u5730\u5740\u662F\u53EF\u7528\u7684",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{footer:o(()=>[]),default:o(()=>[l(e(b),null,{default:o(()=>[u("\u4F60\u9700\u8981\u914D\u5408\u4E00\u4E2A\u540E\u7AEFAPI\u624D\u80FD\u6B63\u5E38\u7684\u4F7F\u7528thost\u7684\u76F8\u5173\u529F\u80FD\u3002\u4F60\u4E4B\u524D\u53EF\u80FD\u5DF2\u7ECF\u6307\u5B9A\u8FC7\u4E00\u4E2A\u3002\u6211\u4EEC\u9700\u8981\u786E\u8BA4\u4F60\u6307\u5B9A\u7684API\u5730\u5740\u662F\u53EF\u7528\u7684\u3002")]),_:1}),l(e(b),null,{default:o(()=>[u("\u672C\u7248\u672C\u7684thost\u6240\u9700\u7684API\u4E3A\uFF1A"),l(e(x),{code:""},{default:o(()=>[u(z(Z))]),_:1}),u(" \u7248\u672C\u4E3A "),l(e(x),{code:""},{default:o(()=>[u("r3")]),_:1})]),_:1}),l(e(b),null,{default:o(()=>[u("\u60A8\u6307\u5B9A\u7684API\u5730\u5740\u662F"),l(e(x),{code:""},{default:o(()=>[u(z(a.value),1)]),_:1}),l(e(C),{type:"text",onClick:c[1]||(c[1]=v=>(t.value="unspecified",r.value="nothing"))},{default:o(()=>[u("(\u66F4\u6362API\u5730\u5740)")]),_:1})]),_:1}),l(e(F)),l(e(fe),{show:r.value=="checking"},{default:o(()=>[r.value=="checking"?(g(),_(e(S),{key:0,title:"\u6B63\u5728\u7B49\u5F85\u54CD\u5E94",type:"info"})):y("",!0)]),_:1},8,["show"]),r.value=="success"?(g(),_(e(S),{key:0,title:"API\u5730\u5740\u9A8C\u8BC1\u6210\u529F",type:"success"},{default:o(()=>[l(e(b),null,{default:o(()=>[u("API\u9A8C\u8BC1\u6210\u529F\u3002\u5F00\u59CB\u4F7F\u7528thost\u5427\uFF01")]),_:1}),l(e(C),{type:"primary",onClick:i,disabled:r.value!="success"},{default:o(()=>[u("\u786E\u5B9A ")]),_:1},8,["disabled"]),l(e(b),null,{default:o(()=>[u("\u4EE5\u540E\u52A0\u8F7D\u5B8C\u6210\u540E\u603B\u662F\u81EA\u52A8\u8FDB\u5165\u4E3B\u9875\u9762 "),l(e(ve),{value:p.value.enterImmediatelyAfterCheckingAPI,"onUpdate:value":c[2]||(c[2]=v=>p.value.enterImmediatelyAfterCheckingAPI=v)},null,8,["value"])]),_:1})]),_:1})):y("",!0),r.value=="error"?(g(),_(e(S),{key:1,title:"API\u5730\u5740\u9A8C\u8BC1\u5931\u8D25",type:"error"},{default:o(()=>[u(" API\u9A8C\u8BC1\u5931\u8D25\u3002\u4EE5\u4E0B\u662F\u76F8\u5173\u4FE1\u606F: "),l(e(V),{log:n.value,rows:5},null,8,["log"])]),_:1})):y("",!0)]),_:1})):y("",!0),t.value=="waiting"?(g(),_(e(B),{key:2,style:{width:"600px"},title:"Waiting",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:o(()=>[u(" \u6B63\u5728\u8FD0\u884C\u903B\u8F91\uFF0C\u8BF7\u7A0D\u7B49\u3002 ")]),_:1})):y("",!0)])]),_:1}))}},Ee={key:0},je={key:1},Be={__name:"main",setup(s){const t=h(!1);return Ce("entryAllowStateUpdate",(a,r)=>{console.log(a,r),t.value=a}),(a,r)=>{const m=le("router-view");return g(),_(e(Se),null,{default:o(()=>[l(e(ue),null,{default:o(()=>[e(t)?(g(),J("div",Ee,[l(m)])):(g(),J("div",je,[l(Le)]))]),_:1})]),_:1})}}};export{Be as default};