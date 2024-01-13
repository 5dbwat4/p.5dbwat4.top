import{useRoute as x,useRouter as $}from"./vue-router-3740985a.js";import{A as T}from"./APIHelper-4c0d0968.js";import{as as B,aZ as d,a8 as n,l as p,t as l,aE as m,b7 as o,s as i,j as U,k,F as N,m as v,ae as V,bd as q}from"./runtime-core.esm-bundler-c066f4bf.js";import{N as A}from"./Card-e4be8a6b.js";import{N as C}from"./Input-32bb51de.js";import{a as f}from"./Button-418af94d.js";import{N as D}from"./Modal-35c1e281.js";import{n as I}from"./toScreenDisplay-d37bc74f.js";import{q as M}from"./define_basic_qtypes-ddf25d69.js";import"./light-96080c0b.js";import"./format-length-c9d165c6.js";import"./Icon-e6ca0735.js";import"./Warning-ff31488d.js";import"./Close-d6ea1a86.js";import"./Scrollbar-25ba1ebe.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./use-memo-b9add725.js";import"./FadeInExpandTransition-ff940b4d.js";import"./use-locale-55e0af58.js";import"./index-975a2d8f.js";import"./use-merged-state-89f8109f.js";import"./light-a188f855.js";import"./Suffix-fac0a942.js";import"./fade-in-scale-up.cssr-18f1ebda.js";import"./flatten-a133123b.js";import"./use-false-until-truthy-a506b738.js";import"./utils-d7fa52af.js";import"./index-cbfaa337.js";const O={__name:"batch2groupForm",setup(b){x();const w=$(),r=B(),c=async()=>{T.post("/api/group/new",{entry:r.ql,timestamp:new Date().getTime(),title:e.value,desc:y.value}).then(h=>{_.value=!0,g.value=h.id})},_=d(!1),g=d(""),a=async()=>{w.push("/group/"+g.value)},t=d(!1),e=d(""),y=d("");return(h,s)=>(n(),p(N,null,[l(o(D),{show:t.value,"onUpdate:show":s[3]||(s[3]=u=>t.value=u)},{default:m(()=>[l(o(A),null,{default:m(()=>[l(o(C),{placeholder:"Title",value:e.value,"onUpdate:value":s[0]||(s[0]=u=>e.value=u)},null,8,["value"]),l(o(C),{placeholder:"Desc",type:"textarea",value:y.value,"onUpdate:value":s[1]||(s[1]=u=>y.value=u)},null,8,["value"]),l(o(f),{onClick:s[2]||(s[2]=u=>c())},{default:m(()=>[i("save")]),_:1})]),_:1})]),_:1},8,["show"]),l(o(f),{onClick:s[4]||(s[4]=u=>t.value=!0)},{default:m(()=>[i("save")]),_:1}),_.value?(n(),U(o(f),{key:0,onClick:s[5]||(s[5]=u=>a())},{default:m(()=>[i("View")]),_:1})):k("",!0)],64))}},P={style:{width:"18.76cm"}},j={style:{"font-size":"9.5pt"}},z={style:{"font-family":"'courier new'"}},E={style:{"font-family":"'courier new'"}},F={key:0},G=["innerHTML"],L={key:1},S=["src"],H={key:2},J=["src"],qe={__name:"index",setup(b){const w=x();$();const r=d({q:!0,a:!1,p:!1}),c=d({});w.params.ids.split(",").forEach(a=>{c.value[a]=M}),Promise.all(w.params.ids.split(",").map(a=>new Promise((t,e)=>{T.post("/api/get",{id:a}).then(y=>{c.value[a]=y})}))).then(()=>{});const _=a=>JSON.parse(a),g=a=>Object.entries(a).map(t=>t[1]);return(a,t)=>(n(),p(N,null,[l(o(f),{onClick:t[0]||(t[0]=e=>r.value.q=!r.value.q)},{default:m(()=>[i("Q")]),_:1}),l(o(f),{onClick:t[1]||(t[1]=e=>r.value.a=!r.value.a)},{default:m(()=>[i("A")]),_:1}),l(o(f),{onClick:t[2]||(t[2]=e=>r.value.p=!r.value.p)},{default:m(()=>[i("P")]),_:1}),l(O,{ql:a.$route.params.ids},null,8,["ql"]),v("div",P,[(n(!0),p(N,null,V(g(c.value),e=>(n(),p("div",{key:e.id},[v("p",j,[i("UUID:"),v("span",z,q(e.id),1),i(" | qid:"),v("span",E,q(e.qid),1),i(),r.value.q?(n(),p("span",F,"| Info: "+q(_(e.extra).info)+" | Origin: "+q(_(e.extra).from),1)):k("",!0)]),r.value.q?(n(),p("div",{key:0,innerHTML:o(I)(e.q),style:{"font-size":"10.5pt","font-family":"Cambria , 宋体"}},null,8,G)):k("",!0),r.value.a?(n(),p("div",L,[v("img",{src:"/oss-storage/"+e.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[0]+".png"},null,8,S)])):k("",!0),r.value.p?(n(),p("div",H,[v("img",{src:"/oss-storage/"+e.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[1]+".png"},null,8,J)])):k("",!0)]))),128))])],64))}};export{qe as default};