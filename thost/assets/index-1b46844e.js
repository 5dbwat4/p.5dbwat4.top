import{useRoute as C,useRouter as x}from"./vue-router-85f8dd9e.js";import{A as N}from"./APIHelper-89899791.js";import{av as D,b2 as v,ab as p,m as n,u as i,aH as m,bc as o,t as s,k as H,l as g,F as q,n as c,ah as O,bi as _}from"./index-6b27469d.js";import{N as P}from"./Card-b4e38b92.js";import{N as T}from"./Input-c49f615f.js";import{N as d}from"./Button-a421b774.js";import{N as z}from"./Modal-845087fa.js";import{n as A}from"./toScreenDisplay-dc7ab8c8.js";import{q as F}from"./define_basic_qtypes-5cc5565b.js";import"./light-cb8e5d18.js";import"./format-length-c9d165c6.js";import"./Icon-0741e3aa.js";import"./Warning-ad995842.js";import"./Close-df27b242.js";import"./Scrollbar-6ef5ad24.js";import"./runtime-dom.esm-bundler-4f377a37.js";import"./keysOf-5d5107c5.js";import"./use-memo-7138c88c.js";import"./use-is-mounted-e356ec1d.js";import"./use-locale-13d55c5c.js";import"./index-975a2d8f.js";import"./use-merged-state-236ae148.js";import"./Loading-a27cceda.js";import"./light-5edeff63.js";import"./Suffix-8898b6d6.js";import"./FadeInExpandTransition-65435983.js";import"./index-cabd39fd.js";import"./flatten-0afec71b.js";import"./use-false-until-truthy-35c1fbae.js";import"./fade-in-scale-up.cssr-59f6c429.js";import"./utils-eca1999b.js";import"./index-cbfaa337.js";const I={__name:"batch2groupForm",setup(U){C();const h=x(),r=D(),f=async()=>{N.post("/api/group/new",{entry:r.ql,timestamp:new Date().getTime(),title:a.value,desc:w.value}).then(b=>{y.value=!0,k.value=b.id})},y=v(!1),k=v(""),l=async()=>{h.push("/group/"+k.value)},e=v(!1),a=v(""),w=v("");return(b,t)=>(p(),n(q,null,[i(o(z),{show:e.value,"onUpdate:show":t[3]||(t[3]=u=>e.value=u)},{default:m(()=>[i(o(P),null,{default:m(()=>[i(o(T),{placeholder:"Title",value:a.value,"onUpdate:value":t[0]||(t[0]=u=>a.value=u)},null,8,["value"]),i(o(T),{placeholder:"Desc",type:"textarea",value:w.value,"onUpdate:value":t[1]||(t[1]=u=>w.value=u)},null,8,["value"]),i(o(d),{onClick:t[2]||(t[2]=u=>f())},{default:m(()=>[s("save")]),_:1})]),_:1})]),_:1},8,["show"]),i(o(d),{onClick:t[4]||(t[4]=u=>e.value=!0)},{default:m(()=>[s("save")]),_:1}),y.value?(p(),H(o(d),{key:0,onClick:t[5]||(t[5]=u=>l())},{default:m(()=>[s("View")]),_:1})):g("",!0)],64))}},L={style:{width:"18.76cm"}},M={style:{"font-size":"9.5pt"}},j={style:{"font-family":"'courier new'"}},E={style:{"font-family":"'courier new'"}},J={key:0},R=["innerHTML"],S={key:1},V=["src"],$={key:2},B=["src"],G={__name:"index",setup(U){const h=C();x();const r=v({q:!0,a:!1,p:!1}),f=v({});h.params.ids.split(",").forEach(l=>{f.value[l]=F}),Promise.all(h.params.ids.split(",").map(l=>new Promise((e,a)=>{N.post("/api/get",{id:l}).then(w=>{f.value[l]=w})}))).then(()=>{});const y=l=>JSON.parse(l),k=l=>Object.entries(l).map(e=>e[1]);return(l,e)=>(p(),n(q,null,[i(o(d),{onClick:e[0]||(e[0]=a=>r.value.q=!r.value.q)},{default:m(()=>[s("Q")]),_:1}),i(o(d),{onClick:e[1]||(e[1]=a=>r.value.a=!r.value.a)},{default:m(()=>[s("A")]),_:1}),i(o(d),{onClick:e[2]||(e[2]=a=>r.value.p=!r.value.p)},{default:m(()=>[s("P")]),_:1}),i(I,{ql:l.$route.params.ids},null,8,["ql"]),c("div",L,[(p(!0),n(q,null,O(k(f.value),a=>(p(),n("div",{key:a.id},[c("p",M,[s("UUID:"),c("span",j,_(a.id),1),s(" | qid:"),c("span",E,_(a.qid),1),s(),r.value.q?(p(),n("span",J,"| Info: "+_(y(a.extra).info)+" | Origin: "+_(y(a.extra).from),1)):g("",!0)]),r.value.q?(p(),n("div",{key:0,innerHTML:o(A)(a.q),style:{"font-size":"10.5pt","font-family":"Cambria , \u5B8B\u4F53"}},null,8,R)):g("",!0),r.value.a?(p(),n("div",S,[c("img",{src:"/oss-storage/"+a.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[0]+".png"},null,8,V)])):g("",!0),r.value.p?(p(),n("div",$,[c("img",{src:"/oss-storage/"+a.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[1]+".png"},null,8,B)])):g("",!0)]))),128))])],64))}};export{G as default};