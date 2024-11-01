import{useRoute as I,useRouter as R}from"./vue-router-85f8dd9e.js";import{q as N}from"./define_basic_qtypes-5cc5565b.js";import{A as S}from"./APIHelper-89899791.js";import{H as P,a as B,b as O,_ as D,c as G,d as J}from"./block-theme-2-4133c67c.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{b2 as s,ab as o,m as f,u as h,aH as b,bc as d,n as g,F as z,ah as L,bh as M,k as m,l as c,t as v,bi as Q}from"./index-6b27469d.js";import{N as _}from"./Button-a421b774.js";import"./light-cb8e5d18.js";import"./format-length-c9d165c6.js";import"./Icon-0741e3aa.js";import"./Warning-ad995842.js";import"./Close-df27b242.js";import"./Scrollbar-6ef5ad24.js";import"./runtime-dom.esm-bundler-4f377a37.js";import"./keysOf-5d5107c5.js";import"./Loading-a27cceda.js";import"./use-is-mounted-e356ec1d.js";import"./use-memo-7138c88c.js";import"./FadeInExpandTransition-65435983.js";function F(r,e){const l=document.createElement("div");return r=r.replaceAll("\u3010\u9898\u6587\u3011",""),l.innerHTML=r,l.querySelectorAll("img").forEach(t=>{if(t.src.includes("/formula/")&&(t.src=t.src.replace(".png",".svg"),t.style.width=t.width*.8+"px",t.setAttribute("width",t.width*.8),t.setAttribute("height","")),t.src.includes("/dksih/")){let n=/\?resizew=(\d*)/.exec(t.src);n&&n.length!=0&&(t.style.width=n[1]+"px",t.src=t.src.replace(/\?resizew=(\d*)/,""),t.setAttribute("width",n[1]),t.setAttribute("height","")),t.setAttribute("data-pictid",e.tindex)}}),l.querySelectorAll("p").forEach(t=>{t.style.fontFamily||(t.style.fontFamily="Times New Roman , \u5B8B\u4F53"),t.style.fontSize||(t.style.fontSize="9.5pt"),t.style.margin="0px"}),l.querySelectorAll("table[name=optionsTable]").forEach(t=>{if(t.querySelectorAll("td").length==4){let n=[];t.querySelectorAll("td").forEach(T=>{n.push(T.outerHTML)});const{ctn:p,next_lns:x}=U(n,4);t.innerHTML=p}}),l.querySelectorAll("table[name=optionsTable] td").forEach(t=>{t.innerHTML="<span style='width:fit-content;display:block;'>"+t.innerHTML+"</span>",t.style.fontFamily||(t.style.fontFamily="Times New Roman , \u5B8B\u4F53"),t.style.fontSize||(t.style.fontSize="9.5pt"),t.style.margin="0px"}),l.style.fontFamily="Times New Roman , \u5B8B\u4F53",e.includeti&&(console.log("rrr"),l.insertAdjacentHTML("afterbegin",`<strong>${e.tindex}. </strong>`)),e.gtittype==3&&l.insertAdjacentHTML("afterbegin",`<strong>${e.tindex}.</strong> (${e.ootInfo[0]},${e.ootInfo[1]}) `),e.gtittype==4&&l.insertAdjacentHTML("afterbegin",`<strong>${e.tindex}.</strong> `),l.outerHTML}function U(r,e){if(e==1)return{ctn:"<tbody><tr>"+r.join("")+"</tr></tbody>",next_lns:2};if(e==2)return{ctn:`<tbody><tr>${r[0]}${r[1]}</tr><tr>${r[2]}${r[3]}</tr></tbody>`,next_lns:4};if(e==4)return{ctn:"<tbody><tr>"+r.join("</tr><tr>")+"</tr></tbody>",next_lns:1}}const V={style:{width:"18.76cm","line-height":"normal"},id:"oonom"},W={class:"noprint"},X={class:"labi-container"},Y=["onClick","data_id"],Z={__name:"preexport-1",setup(r){const e=I(),l=R(),t=s(0),n=s(0),p=3,x=3,T=s({q:!0,a:!1,p:!1}),q=s(""),k=s({title:"",guid:e.params.id}),w=s({}),$=s(!1);S.get("/api/group/get/"+e.params.id).then(u=>{u.entry.split(",").forEach(a=>{w.value[a]=N}),k.value.title=q.value=u.title,Promise.all(u.entry.split(",").map(a=>new Promise((i,y)=>{S.get("/api/data/get/"+a).then(H=>{w.value[a]=H})}))).then(()=>{})});const C=u=>Object.entries(u).map(a=>a[1]),E=s(u=>{}),A=s(1),j=()=>{localStorage.setItem("___thost___html_export",document.getElementById("corehtml").outerHTML),l.push("/grouping/preexport-2/"+e.params.id)};return s("Cambria , \u5B8B\u4F53"),(u,a)=>(o(),f(z,null,[h(d(_),{class:"noprint",onClick:a[0]||(a[0]=i=>A.value==2?A.value=1:A.value=2)},{default:b(()=>[v("\u6539\u53D8\u5217\u6570 ")]),_:1}),h(d(_),{class:"noprint",onClick:a[1]||(a[1]=i=>$.value=!0)},{default:b(()=>[v("Retheme 2")]),_:1}),h(d(_),{class:"noprint",ref:"btn1",onClick:a[2]||(a[2]=i=>t.value++)},{default:b(()=>[v("Title format")]),_:1},512),h(d(_),{class:"noprint",ref:"btn2",onClick:a[3]||(a[3]=i=>n.value++)},{default:b(()=>[v("Info format")]),_:1},512),h(d(_),{class:"noprint",ref:"btn3",onClick:a[4]||(a[4]=i=>j())},{default:b(()=>[v("\u8FDB\u5165\u4E0D\u5305\u542Bfixed content\u7684\u4FEE\u6B63\u9875\u9762")]),_:1},512),g("div",V,[g("div",W,[g("div",X,[(o(),f(z,null,L([1,2,3,4,5,6,7],i=>g("div",{class:"labi-block",key:i,style:{height:"1045px"}}," Page # "+Q(i),1)),64))])]),g("div",{id:"corehtml",style:M({width:"18.95cm",columns:A.value,"line-height":"normal"})},[t.value%p==0?(o(),m(P,{key:0,data:k.value},null,8,["data"])):c("",!0),t.value%p==1?(o(),m(B,{key:1,data:k.value},null,8,["data"])):c("",!0),t.value%p==2?(o(),m(O,{key:2,data:k.value},null,8,["data"])):c("",!0),(o(!0),f(z,null,L(C(w.value),(i,y)=>(o(),f("div",{key:i.id,onClick:H=>E.value(i.id),class:"___core_block",data_id:y},[n.value%x==0?(o(),m(D,{key:0,normalizeFun:d(F),data:i,index:y},null,8,["normalizeFun","data","index"])):c("",!0),n.value%x==1?(o(),m(G,{key:1,normalizeFun:d(F),data:i,index:y},null,8,["normalizeFun","data","index"])):c("",!0),n.value%x==2?(o(),m(J,{key:2,normalizeFun:d(F),data:i,index:y},null,8,["normalizeFun","data","index"])):c("",!0),T.value.q?(o(),f("div",{key:3,style:M({display:"block",height:(i._extb_height||0)+"px"}),class:"extblank"},null,4)):c("",!0)],8,Y))),128))],4)])],64))}},tt=K(Z,[["__scopeId","data-v-96b025c5"]]);export{tt as default};