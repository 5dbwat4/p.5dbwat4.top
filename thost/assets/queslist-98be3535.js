import{_ as n,__tla as z}from"./index-26d5a2bb.js";import{useRouter as R,useRoute as S}from"./vue-router-3740985a.js";import{Z as U}from"./zujuan-api-d95ef18f.js";import{A as I}from"./APIHelper-4c0d0968.js";import{r as L}from"./router-goto-fdf2e3db.js";import{N as i}from"./FormItem-8814ee03.js";import{N}from"./Form-61f17521.js";import{N as y}from"./InputNumber-aafed48b.js";import{aZ as d,as as D,a8 as c,l as V,j as _,aE as p,t as l,b7 as t,s as P,k as h,F as x}from"./runtime-core.esm-bundler-c066f4bf.js";import{N as m}from"./Cascader-61f8e307.js";import{a as q}from"./Button-418af94d.js";import{N as A}from"./Card-e4be8a6b.js";import{N as C}from"./Spin-28bd4bca.js";import{N as B}from"./p-8644848c.js";import"./light-96080c0b.js";import"./format-length-c9d165c6.js";import"./Icon-e6ca0735.js";import"./Warning-ff31488d.js";import"./Close-d6ea1a86.js";import"./Scrollbar-25ba1ebe.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./CONFIG-d506a2d4.js";import"./get-9e715692.js";import"./use-collection-26725bb7.js";import"./use-memo-b9add725.js";import"./use-locale-55e0af58.js";import"./index-975a2d8f.js";import"./use-merged-state-89f8109f.js";import"./Input-32bb51de.js";import"./light-a188f855.js";import"./Suffix-fac0a942.js";import"./FadeInExpandTransition-ff940b4d.js";import"./Add-ee83f2d3.js";import"./utils-4c4b4d7d.js";import"./Popover-c2999df7.js";import"./fade-in-scale-up.cssr-18f1ebda.js";import"./flatten-a133123b.js";import"./use-false-until-truthy-a506b738.js";import"./_baseIsEqual-9220f819.js";import"./cssr-ce5b581a.js";import"./utils-d7fa52af.js";import"./use-compitable-42538ef7.js";import"./next-frame-once-7035a838.js";import"./create-e19b3023.js";import"./Tag-c27ccbde.js";import"./attribute-2ee9e579.js";import"./ChevronRight-989c7384.js";import"./Checkbox-b5c247e6.js";import"./index-cbfaa337.js";import"./light-169f895b.js";let b,F=Promise.all([(()=>{try{return z}catch{}})()]).then(async()=>{function w(){const v={APIType:"zujuan-main-list",APIargments:{searchp:{types:0,sources:0,pageIndex:1,pageSize:10,orderBy:2,areas:0,grades:0,diffs:0,knowledges:0,years:0},bid:13}};return localStorage.getItem("__zujuan-ink__lastAPIOption")?JSON.parse(localStorage.getItem("__zujuan-ink__lastAPIOption")):v}function k(v){return localStorage.setItem("__zujuan-ink__lastAPIOption",JSON.stringify(v))}let f;f={audio:"",body:"Loading.\u8BF7\u7B49\u5F85\u7B2C\u4E00\u4E2AChunk\u88ABhit",childCount:1,collect:!1,diff:{id:3,name:"\u9002\u4E2D",value:.65},id:-1,indexCount:4,knowledgeInfo:"loading",paperSources:[],time:"2023-07-15 18:02:51",title:"loading",type:{choice:!1,id:2904,name:"loading"},useCount:596,video:""},b={__name:"queslist",setup(v){const E=R();S();const O=d(!0),u=d({subjectsmap:[],areasmap:[],diffsmap:[],sourcesmap:[],typesmap:{},orderbymap:[],yearsmap:[],gradesmap:[],knowledgeInfomap:{}});Promise.all([{varname:"subjectsmap",co:()=>n(()=>import("./subjects-8683e557.js"),[],import.meta.url)},{varname:"areasmap",co:()=>n(()=>import("./areas-df820616.js"),[],import.meta.url)},{varname:"diffsmap",co:()=>n(()=>import("./diffs-b381e85b.js"),[],import.meta.url)},{varname:"sourcesmap",co:()=>n(()=>import("./sources-b9c74b0e.js"),[],import.meta.url)},{varname:"typesmap",co:()=>n(()=>import("./types-06f3de1b.js"),[],import.meta.url)},{varname:"orderbymap",co:()=>n(()=>import("./orderby-1b6bedac.js"),[],import.meta.url)},{varname:"yearsmap",co:()=>n(()=>import("./years-ca6a149d.js"),[],import.meta.url)},{varname:"gradesmap",co:()=>n(()=>import("./grades-40a61e2e.js"),[],import.meta.url)},{varname:"knowledgeInfomap",co:()=>n(()=>import("./knowl-full-0df402bd.js"),[],import.meta.url)}].map(r=>new Promise(async(a,o)=>{u.value[r.varname]=(await r.co()).default,a()}))),D();const e=d(w()),g=d(1);d({showUBlock:!1}),d(12),d(!1);const s=d([f]),j=async()=>{k(e.value),g.value=2,await T(),window.bankid=e.value.APIargments.bid;for(let r=0;r<s.value.length;r++)await I.get("/zujuan-ink-be-core/data/checkExistanceGetPersonalizedInfo/"+e.value.APIargments.bid+"/"+s.value[r].id).then(async a=>{a.data?(s.value[r].quid=a.data.id,s.value[r].failedcoll=a.data.failedcoll,s.value[r].coll=a.data.coll):(s.value[r].quid=(await I.post("/zujuan-ink-be-core/data/add",{body:s.value[r].body,timestamp:new Date().getTime(),qid:s.value[r].id,bankid:window.bankid,title:s.value[r].title,diffv:s.value[r].diff.id,knowledgeInfo:s.value[r].knowledgeInfo,typeid:s.value[r].type.id})).data,s.value[r].failedcoll=!1,s.value[r].coll=!1)});window.TList=s.value,window.qcomponent="zjw",L(E,"/room")},T=async()=>{function r(){return"/app-server/v1/ques/list/"+e.value.APIargments.bid+"?"+Object.entries(e.value.APIargments.searchp).map(a=>a[0]+"="+a[1]).join("&")}await U(r()).then(a=>{s.value[0].id==-1?s.value=a.data.list:s.value.push(...a.data.list),a.data.finished&&(e.value.rightFormCycle=!0)})};return(r,a)=>(c(),V(x,null,[g.value==1?(c(),_(t(A),{key:0},{default:p(()=>[l(t(i),{label:"Subject"},{default:p(()=>[l(t(m),{value:e.value.APIargments.bid,"onUpdate:value":a[0]||(a[0]=o=>e.value.APIargments.bid=o),options:u.value.subjectsmap,"check-strategy":"child","show-path":!0,"on-update:value":o=>{e.value.APIargments.searchp.knowledges=0,e.value.APIargments.searchp.types=0,e.value.APIargments.bid=o}},null,8,["value","options","on-update:value"])]),_:1}),O.value?(c(),_(t(N),{key:0,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:p(()=>[l(t(i),{label:"\u96BE\u5EA6(diffs)"},{default:p(()=>[l(t(m),{value:e.value.APIargments.searchp.diffs,"onUpdate:value":a[1]||(a[1]=o=>e.value.APIargments.searchp.diffs=o),options:u.value.diffsmap,"check-strategy":"child","show-path":!0},null,8,["value","options"])]),_:1}),l(t(i),{label:"areas"},{default:p(()=>[l(t(m),{value:e.value.APIargments.searchp.areas,"onUpdate:value":a[2]||(a[2]=o=>e.value.APIargments.searchp.areas=o),options:u.value.areasmap,"check-strategy":"child","show-path":!0},null,8,["value","options"])]),_:1}),l(t(i),{label:"sources"},{default:p(()=>[l(t(m),{value:e.value.APIargments.searchp.sources,"onUpdate:value":a[3]||(a[3]=o=>e.value.APIargments.searchp.sources=o),options:u.value.sourcesmap,"check-strategy":"child","show-path":!0},null,8,["value","options"])]),_:1}),l(t(i),{label:"types"},{default:p(()=>[l(t(m),{value:e.value.APIargments.searchp.types,"onUpdate:value":a[4]||(a[4]=o=>e.value.APIargments.searchp.types=o),options:u.value.typesmap[""+e.value.APIargments.bid],"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),l(t(i),{label:"knowledgeInfo"},{default:p(()=>[l(t(m),{value:e.value.APIargments.searchp.knowledges,"onUpdate:value":a[5]||(a[5]=o=>e.value.APIargments.searchp.knowledges=o),options:u.value.knowledgeInfomap[""+e.value.APIargments.bid],"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),l(t(i),{label:"\u6392\u5E8F(orderBy)"},{default:p(()=>[l(t(m),{value:e.value.APIargments.searchp.orderBy,"onUpdate:value":a[6]||(a[6]=o=>e.value.APIargments.searchp.orderBy=o),options:u.value.orderbymap,"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),l(t(i),{label:"\u5E74\u4EFD(years)"},{default:p(()=>[l(t(m),{value:e.value.APIargments.searchp.years,"onUpdate:value":a[7]||(a[7]=o=>e.value.APIargments.searchp.years=o),options:u.value.yearsmap,"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),l(t(i),{label:"\u5E74\u7EA7(grades)"},{default:p(()=>[l(t(m),{value:e.value.APIargments.searchp.grades,"onUpdate:value":a[8]||(a[8]=o=>e.value.APIargments.searchp.grades=o),options:u.value.gradesmap,"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),l(t(i),{label:"pageIndex"},{default:p(()=>[l(t(y),{value:e.value.APIargments.searchp.pageIndex,"onUpdate:value":a[9]||(a[9]=o=>e.value.APIargments.searchp.pageIndex=o),min:0},null,8,["value"])]),_:1}),l(t(i),{label:"pageSize"},{default:p(()=>[l(t(y),{value:e.value.APIargments.searchp.pageSize,"onUpdate:value":a[10]||(a[10]=o=>e.value.APIargments.searchp.pageSize=o)},null,8,["value"])]),_:1}),l(t(q),{onClick:j},{default:p(()=>[P("ENTER")]),_:1})]),_:1})):h("",!0)]),_:1})):h("",!0),g.value==2?(c(),_(t(A),{key:1,"content-style":"text-align:center;"},{default:p(()=>[l(t(C)),l(t(B),null,{default:p(()=>[P("\u6B63\u5728\u83B7\u53D6\u9898\u9762")]),_:1})]),_:1})):h("",!0)],64))}}});export{F as __tla,b as default};