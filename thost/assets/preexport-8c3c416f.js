import{useRoute as D,useRouter as G}from"./vue-router-3740985a.js";import{n as L}from"./nomorlize_q-589fa2c5.js";import{q as O}from"./define_basic_qtypes-ddf25d69.js";import{A as I}from"./APIHelper-c9b99a18.js";import{aZ as c,a8 as o,l,t as p,aE as u,s as r,b7 as s,bd as m,m as d,F as z,ae as M,bc as k,k as a}from"./runtime-core.esm-bundler-c066f4bf.js";import{a as _}from"./Button-68cb5d7d.js";import{N as R}from"./Spin-ff5dfbad.js";import"./light-5802f424.js";import"./format-length-c9d165c6.js";import"./Icon-fde79c06.js";import"./Warning-459cf3e9.js";import"./Close-10bb4ae3.js";import"./Scrollbar-068db0c3.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./use-memo-b9add725.js";import"./FadeInExpandTransition-ff940b4d.js";import"./use-compitable-42538ef7.js";const V={style:{width:"18.76cm","line-height":"normal"},id:"oonom"},J={class:"noprint"},Q={class:"labi-container"},Z={key:0,style:{"font-size":"6.5pt","font-family":"Cambria , 仿宋",margin:"0px"}},K={key:1,style:{"text-align":"center","font-family":"Cambria , 仿宋",margin:"0px"}},W={style:{"font-size":"10pt"}},X={style:{"font-size":"6.5pt"}},Y={style:{"font-family":"'courier new'"}},ee={key:2,style:{"text-align":"center","font-family":"黑体",margin:"0px"}},te={style:{"font-size":"10pt"}},ne=["onClick","data_type"],oe={key:0,style:{"font-size":"6.5pt",margin:"0px","font-family":"Cambria , 仿宋"}},le={style:{"font-family":"'courier new'"}},re={style:{"font-family":"'courier new'"}},se={key:0},ae={key:1},ie=["innerHTML"],ue={key:2},pe=["innerHTML"],de={key:3},ce=["innerHTML"],me={key:5},_e=["src"],fe={key:6},ve=["src"],Ee={__name:"preexport",setup(ye){const H=D(),E=G(),i=c({q:!0,a:!1,p:!1}),b=c(0),h=c(0),N=3,x=3,C=c(""),q=c(!0),T=c(-1),f=c({});I.post("/api/group/get",{id:H.params.id}).then(n=>{T.value=0,n.entry.split(",").forEach(e=>{f.value[e]=O}),c(!1),C.value=n.title,Promise.all(n.entry.split(",").map(e=>new Promise((t,v)=>{I.get("/api/qapi/get/"+e).then(y=>{f.value[e]=y,T.value++,t()})}))).then(()=>{q.value=!1,console.log("hdd",q.value)})});const g=n=>JSON.parse(n),F=n=>Object.entries(n).map(e=>e[1]),S=c(n=>{}),A=n=>{f.value[n]._extb_height=(f.value[n]._extb_height||0)+50,console.log(f.value[n]._extb_height)},$=c(1),B=()=>{localStorage.setItem("___thost___html_export",document.getElementById("corehtml").outerHTML),E.push("/grouping/preexport-2/"+H.params.id)},w=c("Cambria , 宋体"),U=()=>{w.value="Times New Roman , 宋体!important"},P=()=>{document.querySelectorAll("table[name=optionsTable]").forEach(e=>{if(e.querySelectorAll("td").length==4){console.log("oo",e);let t=[],v=1;e.querySelectorAll("td").forEach(y=>{t.push(y.outerHTML)}),e.addEventListener("click",()=>{console.log("click");const{ctn:y,next_lns:j}=n(t,v);e.innerHTML=y,v=j})}});function n(e,t){if(t==1)return{ctn:"<tbody><tr>"+e.join("")+"</tr></tbody>",next_lns:2};if(t==2)return{ctn:`<tbody><tr>${e[0]}${e[1]}</tr><tr>${e[2]}${e[3]}</tr></tbody>`,next_lns:4};if(t==4)return{ctn:"<tbody><tr>"+e.join("</tr><tr>")+"</tr></tbody>",next_lns:1}}};return(n,e)=>(o(),l(z,null,[p(s(_),{class:"noprint",onClick:e[0]||(e[0]=t=>i.value.q=!i.value.q)},{default:u(()=>[r("Q")]),_:1}),p(s(_),{class:"noprint",onClick:e[1]||(e[1]=t=>i.value.a=!i.value.a)},{default:u(()=>[r("A")]),_:1}),p(s(_),{class:"noprint",onClick:e[2]||(e[2]=t=>i.value.p=!i.value.p)},{default:u(()=>[r("P")]),_:1}),p(s(_),{class:"noprint",onClick:e[3]||(e[3]=t=>S.value=A)},{default:u(()=>[r("单击题面时增加空格")]),_:1}),p(s(_),{class:"noprint",onClick:U},{default:u(()=>[r("字体转为Times")]),_:1}),p(s(_),{class:"noprint",onClick:e[4]||(e[4]=t=>$.value==2?$.value=1:$.value=2)},{default:u(()=>[r("改变列数 ")]),_:1}),p(s(_),{class:"noprint",onClick:e[5]||(e[5]=t=>{S.value=()=>{},P()})},{default:u(()=>[r("修正opttable")]),_:1}),p(s(_),{class:"noprint",onClick:e[6]||(e[6]=t=>n.Noptions_ret2=!0)},{default:u(()=>[r("Retheme 2")]),_:1}),p(s(_),{class:"noprint",onClick:e[7]||(e[7]=t=>b.value++)},{default:u(()=>[r("Title format")]),_:1}),p(s(_),{class:"noprint",onClick:e[8]||(e[8]=t=>h.value++)},{default:u(()=>[r("Info format")]),_:1}),p(s(_),{class:"noprint",onClick:e[9]||(e[9]=t=>B())},{default:u(()=>[r("进入不包含fixed content的修正页面")]),_:1}),p(s(R),{show:q.value},{description:u(()=>[r(" 状态："+m(T.value==-1?"正在获取Group数据":"已加载了"+T.value+"条"),1)]),default:u(()=>[d("div",V,[d("div",J,[d("div",Q,[(o(),l(z,null,M([1,2,3,4,5,6,7],t=>d("div",{class:"labi-block",key:t,style:{height:"1045px"}},"Page # "+m(t),1)),64))])]),q.value?a("",!0):(o(),l("div",{key:0,id:"corehtml",style:k({width:"18.76cm",columns:$.value,"line-height":"normal"})},[b.value%N==0?(o(),l("p",Z," Generated by thost | Group UUID: "+m(n.$route.params.id)+" | Title: "+m(C.value),1)):a("",!0),b.value%N==1?(o(),l("div",K,[d("p",W,m(C.value),1),d("p",X,[r("Generated by thost | UUID: "),d("span",Y,m(n.$route.params.id),1)])])):a("",!0),b.value%N==2?(o(),l("div",ee,[d("p",te,m(C.value),1)])):a("",!0),(o(!0),l(z,null,M(F(f.value),(t,v)=>(o(),l("div",{key:t.id,onClick:y=>S.value(t.id),data_type:g(t.extra).info[0],class:"___core_block"},[h.value%x==0?(o(),l("p",oe,[r(" UUID:"),d("span",le,m(t.id),1),r(" | qid:"),d("span",re,m(t.qid),1),r(),i.value.q?(o(),l("span",se,"| Info: "+m(g(t.extra).info)+" | Origin: "+m(g(t.extra).from),1)):a("",!0)])):a("",!0),h.value%x==0?(o(),l("div",ae,[i.value.q?(o(),l("div",{key:0,innerHTML:s(L)(t.q,{ret2:n.Noptions_ret2}),style:k({fontSize:"9.5pt",fontFamily:w.value})},null,12,ie)):a("",!0)])):a("",!0),h.value%x==1?(o(),l("div",ue,[i.value.q?(o(),l("div",{key:0,innerHTML:"<strong>"+(v+1)+".</strong> ("+g(t.extra).info[0]+","+g(t.extra).info[1]+") "+s(L)(t.q,{ret2:n.Noptions_ret2}),style:k({fontSize:"9.5pt",fontFamily:w.value})},null,12,pe)):a("",!0)])):a("",!0),h.value%x==2?(o(),l("div",de,[i.value.q?(o(),l("div",{key:0,innerHTML:"<strong>"+(v+1)+".</strong> "+s(L)(t.q,{ret2:n.Noptions_ret2}),style:k({fontSize:"9.5pt",fontFamily:w.value})},null,12,ce)):a("",!0)])):a("",!0),i.value.q?(o(),l("div",{key:4,style:k({display:"block",height:(t._extb_height||0)+"px"})},null,4)):a("",!0),i.value.a?(o(),l("div",me,[d("img",{src:"/oss-storage/"+t.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[0]+".png"},null,8,_e)])):a("",!0),i.value.p?(o(),l("div",fe,[d("img",{src:"/oss-storage/"+t.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[1]+".png"},null,8,ve)])):a("",!0)],8,ne))),128))],4))])]),_:1},8,["show"])],64))}};export{Ee as default};
