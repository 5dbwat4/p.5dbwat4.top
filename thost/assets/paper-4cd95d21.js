import{Z as h}from"./zujuan-api-d95ef18f.js";import{p as x}from"./polishinguptlist-19a45dd2.js";import{useRouter as g,useRoute as q}from"./vue-router-3740985a.js";import{r as y}from"./router-goto-fdf2e3db.js";import{s as L}from"./sweetalert.min-37390c4f.js";import{N as w,a as T}from"./Grid-e8d339fa.js";import{aZ as f,a8 as U,j,aE as r,t as e,b7 as t,s}from"./runtime-core.esm-bundler-c066f4bf.js";import{N as c}from"./Card-e4be8a6b.js";import{N as C}from"./Form-61f17521.js";import{N as b}from"./FormItem-8814ee03.js";import{N as k}from"./InputNumber-aafed48b.js";import{a as I}from"./Button-418af94d.js";import{N as B}from"./p-8644848c.js";import{N as P}from"./Input-32bb51de.js";import"./APIHelper-4c0d0968.js";import"./light-96080c0b.js";import"./format-length-c9d165c6.js";import"./Icon-e6ca0735.js";import"./Warning-ff31488d.js";import"./Close-d6ea1a86.js";import"./Scrollbar-25ba1ebe.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./CONFIG-d506a2d4.js";import"./_commonjsHelpers-042e6b4d.js";import"./utils-d7fa52af.js";import"./use-memo-b9add725.js";import"./flatten-a133123b.js";import"./get-slot-1efb97e5.js";import"./next-frame-once-7035a838.js";import"./FadeInExpandTransition-ff940b4d.js";import"./get-9e715692.js";import"./use-collection-26725bb7.js";import"./use-locale-55e0af58.js";import"./index-975a2d8f.js";import"./use-merged-state-89f8109f.js";import"./light-a188f855.js";import"./Add-ee83f2d3.js";import"./light-169f895b.js";import"./Suffix-fac0a942.js";function _(u){var m=u&&typeof u.valueOf=="function"?u.valueOf():u;return typeof m=="number"&&Number.isFinite(m)}const kt={__name:"paper",setup(u){const m=g(),n=q(),p=f(0),a=f(0),d=f("");n.query.bankid&&(a.value=parseInt(n.query.bankid)),n.query.paper&&(p.value=parseInt(n.query.PaperId));const v=()=>{!_(a.value)&&_(p.value)&&L({title:"请输入合法的数字",icon:"error"}),h(`/app-server/v1/paper/detail/${a.value}/${p.value}`,"GET").then(async i=>{window.TList=i.data.quesList,window.TList=await x(a.value,window.TList),window.bankid=a.value,window.qcomponent="zjw",y(m,"/room")})},N=()=>{const i=/zujuan\.xkw\.com\/(\d*)p(\d*).html/.exec(d.value);i&&(a.value=parseInt(i[1]),p.value=parseInt(i[2]))};return(i,o)=>(U(),j(t(T),{"x-gap":"12",cols:2},{default:r(()=>[e(t(w),null,{default:r(()=>[e(t(c),{hoverable:""},{default:r(()=>[e(t(C),{"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:r(()=>[e(t(b),{label:"BankId"},{default:r(()=>[e(t(k),{value:a.value,"onUpdate:value":o[0]||(o[0]=l=>a.value=l)},null,8,["value"])]),_:1}),s(),e(t(b),{label:"paperId"},{default:r(()=>[e(t(k),{value:p.value,"onUpdate:value":o[1]||(o[1]=l=>p.value=l)},null,8,["value"])]),_:1}),e(t(I),{onClick:v},{default:r(()=>[s("进入")]),_:1})]),_:1})]),_:1})]),_:1}),e(t(w),null,{default:r(()=>[e(t(c),{hoverable:""},{default:r(()=>[e(t(B),null,{default:r(()=>[s("您可以输入试卷对应的网址")]),_:1}),e(t(P),{placeholder:"e.g. https://zujuan.xkw.com/12p1623524.html",onChange:N,value:d.value,"onUpdate:value":o[2]||(o[2]=l=>d.value=l)},null,8,["value"]),e(t(I),{onClick:o[3]||(o[3]=l=>{N(),v()})},{default:r(()=>[s("进入")]),_:1})]),_:1})]),_:1})]),_:1}))}};export{kt as default};