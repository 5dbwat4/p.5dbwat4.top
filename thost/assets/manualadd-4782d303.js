import y from"./subjects-8683e557.js";import{Z as h}from"./zujuan-api-7e9d387c.js";import{A as I}from"./APIHelper-e0fd8d04.js";import"./router-goto-fdf2e3db.js";import{C as g}from"./zjw-a899619c.js";import{useRouter as w,useRoute as q}from"./vue-router-3740985a.js";import{p as x}from"./polishinguptlist-b3d6cc52.js";import{s as B}from"./sweetalert.min-9dab74b7.js";import{b as T}from"./blankpic-ca06291d.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{aZ as l,a8 as p,l as c,j as v,aE as o,t as r,s as u,b7 as e,k,F as C,ae as A}from"./runtime-core.esm-bundler-c066f4bf.js";import{N as F}from"./p-cd055918.js";import{N as P}from"./Cascader-47b88d13.js";import{a as d}from"./Button-0891d5bc.js";import{N as f}from"./Card-9bd1f6f7.js";import"./light-185f79ed.js";import"./format-length-c9d165c6.js";import"./Icon-13ca7aa7.js";import"./Warning-9f568e6f.js";import"./Close-869cd549.js";import"./Scrollbar-431c7fad.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./CONFIG-d506a2d4.js";import"./nomorlize_q-tailored-672252d5.js";import"./Divider-30c471e5.js";import"./Ellipsis-df703194.js";import"./Tooltip-1dec7089.js";import"./Popover-fc210933.js";import"./fade-in-scale-up.cssr-3d9943f6.js";import"./flatten-a133123b.js";import"./use-false-until-truthy-a506b738.js";import"./get-af977d88.js";import"./use-memo-b9add725.js";import"./utils-d7fa52af.js";import"./FadeInExpandTransition-ff940b4d.js";import"./use-merged-state-89f8109f.js";import"./use-compitable-42538ef7.js";import"./next-frame-once-7035a838.js";import"./Space-ea8ac150.js";import"./get-slot-1efb97e5.js";import"./_commonjsHelpers-725317a4.js";import"./light-3faebb88.js";import"./utils-de113cde.js";import"./create-e19b3023.js";import"./use-locale-c50998bd.js";import"./index-975a2d8f.js";import"./Suffix-f17523aa.js";import"./Tag-976b884f.js";import"./attribute-2ee9e579.js";import"./ChevronRight-989c7384.js";import"./Checkbox-9546fcc9.js";import"./index-cbfaa337.js";const R={class:"centered"},Z={__name:"manualadd",setup(D){w();const _=q(),m=l(15),s=l(1),n=l([]);_.query.bankid&&(m.value=parseInt(_.query.bankid));const N=async()=>{h("/app-server/v1/basket/"+m.value).then(async a=>{let t=[];a.data.structure.forEach(i=>{t.push(...i.list)}),t=await x(m.value,t),s.value=2,n.value=t})},b=async()=>{for(let a=0;a<n.value.length;a++)await I.post("/zujuan-ink-be-core/donerec/add",{quid:n.value[a].quid,date:new Date().toDateString(),timestamp:new Date().getTime(),image:T,parent:"unsaved"});B({icon:"success",title:"OK"})};return(a,t)=>(p(),c(C,null,[s.value==1?(p(),v(e(f),{key:0,title:"手动添加错题"},{default:o(()=>[r(e(F),null,{default:o(()=>[u("将使用来自试题篮的数据")]),_:1}),r(e(P),{value:m.value,"onUpdate:value":t[0]||(t[0]=i=>m.value=i),options:e(y),"check-strategy":"child","show-path":!0},null,8,["value","options"]),r(e(d),{onClick:N},{default:o(()=>[u("CONFIRM")]),_:1})]),_:1})):k("",!0),s.value==2?(p(),v(e(f),{key:1,title:"确认错题数据"},{default:o(()=>[r(e(d),{onClick:t[1]||(t[1]=i=>s.value=0)},{default:o(()=>[u("> BACK")]),_:1}),(p(!0),c(C,null,A(n.value,i=>(p(),c("div",R,[r(e(f),{hoverable:""},{default:o(()=>[r(g,{qcontent:i},null,8,["qcontent"])]),_:2},1024)]))),256)),r(e(d),{onClick:b},{default:o(()=>[u("CONFIRM")]),_:1})]),_:1})):k("",!0)],64))}},Zt=j(Z,[["__scopeId","data-v-c1866d2c"]]);export{Zt as default};
