import{_ as p}from"./index-295acfb9.js";import{useRouter as E,useRoute as N}from"./vue-router-66374999.js";import{Z as O}from"./zujuan-api-117f357c.js";import{A as _}from"./APIHelper-697d5a21.js";import{N as n,a as j,r as T}from"./router-goto-7c1ec3b3.js";import{N as m}from"./Cascader-a5bb2f3f.js";import{aZ as d,as as L,a8 as g,l as R,j as f,aE as u,t as r,b7 as t,s as P,k as I,F as U}from"./runtime-core.esm-bundler-42be6625.js";import{N as h}from"./InputNumber-f94cacab.js";import{b as x}from"./Button-cc4d8cf9.js";import{N as A}from"./Card-6456efb4.js";import{N as z}from"./Spin-38bf3ba1.js";import{N as S}from"./p-b2e24c58.js";import"./light-061b806c.js";import"./format-length-c9d165c6.js";import"./Icon-9bae1ecc.js";import"./Warning-342b5d14.js";import"./Close-7ee9b945.js";import"./Scrollbar-56892bdd.js";import"./runtime-dom.esm-bundler-4c01a608.js";import"./keysOf-5d5107c5.js";import"./get-bc00c446.js";import"./resolve-slot-612957d7.js";import"./CONFIG-d506a2d4.js";import"./utils-844b71a1.js";import"./Popover-4b12eb1a.js";import"./fade-in-scale-up.cssr-e8e5290f.js";import"./flatten-7ea74e97.js";import"./use-memo-8d560c6d.js";import"./utils-13313164.js";import"./FadeInExpandTransition-8360c680.js";import"./use-merged-state-cb002afc.js";import"./use-compitable-85535777.js";import"./call-7e0089d6.js";import"./create-582f0426.js";import"./use-locale-a958ab8c.js";import"./index-975a2d8f.js";import"./light-a899ddec.js";import"./Tag-526ae436.js";import"./Checkbox-af2f1a0a.js";import"./index-cbfaa337.js";import"./Input-25fff9b3.js";import"./light-1325cd86.js";function V(){const v={APIType:"zujuan-main-list",APIargments:{searchp:{types:0,sources:0,pageIndex:1,pageSize:10,orderBy:2,areas:0,grades:0,diffs:0,knowledges:0,years:0},bid:13}};return localStorage.getItem("__zujuan-ink__lastAPIOption")?JSON.parse(localStorage.getItem("__zujuan-ink__lastAPIOption")):v}function B(v){return localStorage.setItem("__zujuan-ink__lastAPIOption",JSON.stringify(v))}const C={audio:"",body:"Loading.请等待第一个Chunk被hit",childCount:1,collect:!1,diff:{id:3,name:"适中",value:.65},id:-1,indexCount:4,knowledgeInfo:"loading",paperSources:[],time:"2023-07-15 18:02:51",title:"loading",type:{choice:!1,id:2904,name:"loading"},useCount:596,video:""},Oe={__name:"queslist",setup(v){const y=E();N();const b=d(!0),i=d({subjectsmap:[],areasmap:[],diffsmap:[],sourcesmap:[],typesmap:{},orderbymap:[],yearsmap:[],gradesmap:[],knowledgeInfomap:{}});Promise.all([{varname:"subjectsmap",co:()=>p(()=>import("./subjects-8683e557.js"),[],import.meta.url)},{varname:"areasmap",co:()=>p(()=>import("./areas-df820616.js"),[],import.meta.url)},{varname:"diffsmap",co:()=>p(()=>import("./diffs-b381e85b.js"),[],import.meta.url)},{varname:"sourcesmap",co:()=>p(()=>import("./sources-b9c74b0e.js"),[],import.meta.url)},{varname:"typesmap",co:()=>p(()=>import("./types-06f3de1b.js"),[],import.meta.url)},{varname:"orderbymap",co:()=>p(()=>import("./orderby-1b6bedac.js"),[],import.meta.url)},{varname:"yearsmap",co:()=>p(()=>import("./years-ca6a149d.js"),[],import.meta.url)},{varname:"gradesmap",co:()=>p(()=>import("./grades-40a61e2e.js"),[],import.meta.url)},{varname:"knowledgeInfomap",co:()=>p(()=>import("./knowl-full-0df402bd.js"),[],import.meta.url)}].map(l=>new Promise(async(e,o)=>{i.value[l.varname]=(await l.co()).default,e()}))),L();const a=d(V()),c=d(1);d({showUBlock:!1}),d(12),d(!1);const s=d([C]),w=async()=>{B(a.value),c.value=2,await k(),window.bankid=a.value.APIargments.bid;for(let l=0;l<s.value.length;l++)await _.get("/zujuan-ink-be-core/data/checkExistanceGetPersonalizedInfo/"+a.value.APIargments.bid+"/"+s.value[l].id).then(async e=>{e.data?(s.value[l].quid=e.data.id,s.value[l].failedcoll=e.data.failedcoll,s.value[l].coll=e.data.coll):(s.value[l].quid=(await _.post("/zujuan-ink-be-core/data/add",{body:s.value[l].body,timestamp:new Date().getTime(),qid:s.value[l].id,bankid:window.bankid,title:s.value[l].title,diffv:s.value[l].diff.id,knowledgeInfo:s.value[l].knowledgeInfo,typeid:s.value[l].type.id})).data,s.value[l].failedcoll=!1,s.value[l].coll=!1)});window.TList=s.value,window.qcomponent="zjw",T(y,"/room")},k=async()=>{function l(){return"/app-server/v1/ques/list/"+a.value.APIargments.bid+"?"+Object.entries(a.value.APIargments.searchp).map(e=>e[0]+"="+e[1]).join("&")}await O(l()).then(e=>{s.value[0].id==-1?s.value=e.data.list:s.value.push(...e.data.list),e.data.finished&&(a.value.rightFormCycle=!0)})};return(l,e)=>(g(),R(U,null,[c.value==1?(g(),f(t(A),{key:0},{default:u(()=>[r(t(n),{label:"Subject"},{default:u(()=>[r(t(m),{value:a.value.APIargments.bid,"onUpdate:value":e[0]||(e[0]=o=>a.value.APIargments.bid=o),options:i.value.subjectsmap,"check-strategy":"child","show-path":!0,"on-update:value":o=>{a.value.APIargments.searchp.knowledges=0,a.value.APIargments.searchp.types=0,a.value.APIargments.bid=o}},null,8,["value","options","on-update:value"])]),_:1}),b.value?(g(),f(t(j),{key:0,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:u(()=>[r(t(n),{label:"难度(diffs)"},{default:u(()=>[r(t(m),{value:a.value.APIargments.searchp.diffs,"onUpdate:value":e[1]||(e[1]=o=>a.value.APIargments.searchp.diffs=o),options:i.value.diffsmap,"check-strategy":"child","show-path":!0},null,8,["value","options"])]),_:1}),r(t(n),{label:"areas"},{default:u(()=>[r(t(m),{value:a.value.APIargments.searchp.areas,"onUpdate:value":e[2]||(e[2]=o=>a.value.APIargments.searchp.areas=o),options:i.value.areasmap,"check-strategy":"child","show-path":!0},null,8,["value","options"])]),_:1}),r(t(n),{label:"sources"},{default:u(()=>[r(t(m),{value:a.value.APIargments.searchp.sources,"onUpdate:value":e[3]||(e[3]=o=>a.value.APIargments.searchp.sources=o),options:i.value.sourcesmap,"check-strategy":"child","show-path":!0},null,8,["value","options"])]),_:1}),r(t(n),{label:"types"},{default:u(()=>[r(t(m),{value:a.value.APIargments.searchp.types,"onUpdate:value":e[4]||(e[4]=o=>a.value.APIargments.searchp.types=o),options:i.value.typesmap[""+a.value.APIargments.bid],"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),r(t(n),{label:"knowledgeInfo"},{default:u(()=>[r(t(m),{value:a.value.APIargments.searchp.knowledges,"onUpdate:value":e[5]||(e[5]=o=>a.value.APIargments.searchp.knowledges=o),options:i.value.knowledgeInfomap[""+a.value.APIargments.bid],"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),r(t(n),{label:"排序(orderBy)"},{default:u(()=>[r(t(m),{value:a.value.APIargments.searchp.orderBy,"onUpdate:value":e[6]||(e[6]=o=>a.value.APIargments.searchp.orderBy=o),options:i.value.orderbymap,"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),r(t(n),{label:"年份(years)"},{default:u(()=>[r(t(m),{value:a.value.APIargments.searchp.years,"onUpdate:value":e[7]||(e[7]=o=>a.value.APIargments.searchp.years=o),options:i.value.yearsmap,"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),r(t(n),{label:"年级(grades)"},{default:u(()=>[r(t(m),{value:a.value.APIargments.searchp.grades,"onUpdate:value":e[8]||(e[8]=o=>a.value.APIargments.searchp.grades=o),options:i.value.gradesmap,"check-strategy":"all","show-path":!0},null,8,["value","options"])]),_:1}),r(t(n),{label:"pageIndex"},{default:u(()=>[r(t(h),{value:a.value.APIargments.searchp.pageIndex,"onUpdate:value":e[9]||(e[9]=o=>a.value.APIargments.searchp.pageIndex=o)},null,8,["value"])]),_:1}),r(t(n),{label:"pageSize"},{default:u(()=>[r(t(h),{value:a.value.APIargments.searchp.pageSize,"onUpdate:value":e[10]||(e[10]=o=>a.value.APIargments.searchp.pageSize=o)},null,8,["value"])]),_:1}),r(t(x),{onClick:w},{default:u(()=>[P("ENTER")]),_:1})]),_:1})):I("",!0)]),_:1})):I("",!0),c.value==2?(g(),f(t(A),{key:1,"content-style":"text-align:center;"},{default:u(()=>[r(t(z)),r(t(S),null,{default:u(()=>[P("正在获取题面")]),_:1})]),_:1})):I("",!0)],64))}};export{Oe as default};
