import{useRoute as P,useRouter as D}from"./vue-router-3740985a.js";import{q as O}from"./define_basic_qtypes-ddf25d69.js";import{A as z}from"./APIHelper-e0fd8d04.js";import{aZ as g,a8 as s,l as u,t as f,aE as y,s as a,b7 as d,m as _,F as H,ae as F,bd as p,bc as E,k as m}from"./runtime-core.esm-bundler-c066f4bf.js";import{a as h}from"./Button-0891d5bc.js";import"./light-185f79ed.js";import"./format-length-c9d165c6.js";import"./Icon-13ca7aa7.js";import"./Warning-9f568e6f.js";import"./Close-869cd549.js";import"./Scrollbar-431c7fad.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./use-memo-b9add725.js";import"./FadeInExpandTransition-ff940b4d.js";function M(c,r){const l=document.createElement("div");return c=c.replaceAll("【题文】",""),r.bankid==10&&(c=c.replaceAll(/【小题(\d)】/g,"$1. ")),l.innerHTML=c,l.querySelectorAll("img").forEach(t=>{if(t.src.includes("/formula/")&&(t.src=t.src.replace(".png",".svg"),t.style.width=t.width*.8+"px",t.setAttribute("width",t.width*.8),t.setAttribute("height","")),t.src.includes("/dksih/")){let i=/\?resizew=(\d*)/.exec(t.src);i&&i.length!=0&&(i[1]>500&&(i[1]=500),t.style.width=i[1]+"px",t.src=t.src.replace(/\?resizew=(\d*)/,""),t.setAttribute("width",i[1]),t.setAttribute("height","")),t.outerHTML=`
        
            <div style="width: fit-content;display: inline-block;text-align: center;" class="__ccccimage">${t.outerHTML}
    <p style="margin: 0 0;font-family: kaiti;">（第${r.tindex}题图）</p></div>`,t.setAttribute("data-pictid",r.tindex)}}),l.querySelectorAll("p").forEach(t=>{t.style.fontFamily||(t.style.fontFamily="Times New Roman , 宋体"),t.style.fontSize||(t.style.fontSize="9.5pt"),t.style.margin="0px"}),l.querySelectorAll("table[name=optionsTable]").forEach(t=>{if(t.querySelectorAll("td").length==4){let i=[];t.querySelectorAll("td").forEach(v=>{i.push(v.outerHTML)});const{ctn:k,next_lns:S}=V(i,4);t.innerHTML=k}}),l.querySelectorAll("table[name=optionsTable] td").forEach(t=>{t.innerHTML="<span style='width:fit-content;display:block;'>"+t.innerHTML+"</span>",t.style.fontFamily||(t.style.fontFamily="Times New Roman , 宋体"),t.style.fontSize||(t.style.fontSize="9.5pt"),t.style.margin="0px"}),l.style.fontFamily="Times New Roman , 宋体",l.childNodes.forEach(t=>{if(t.nodeName=="#text"){const i=document.createElement("p");i.style.display="inline",i.style.margin="0",i.innerText=t.textContent,t.textContent.includes("______________________________________________________")&&(i.style.wordBreak="break-all"),t.parentNode.replaceChild(i,t)}}),l.querySelectorAll("sub").forEach(t=>{t.style.display="inline"}),l.querySelectorAll("sup").forEach(t=>{t.style.display="inline"}),l.querySelectorAll("bk[type=underline]").forEach(t=>{t.innerText.includes("_")&&(t.style.color="lightgray",t.style.fontSize="13pt")}),r.includeti&&(console.log("rrr"),l.insertAdjacentHTML("afterbegin",`<strong>${r.tindex}. </strong>`)),r.gtittype==3&&l.insertAdjacentHTML("afterbegin",`<strong>${r.tindex}. </strong> (${r.ootInfo[0]},${r.ootInfo[1]}) `),r.gtittype==4&&l.insertAdjacentHTML("afterbegin",`<strong>${r.tindex}. </strong> `),l.querySelectorAll("p").forEach(t=>{t.innerText==`

`&&t.parentNode.removeChild(t)}),l.querySelectorAll("br").forEach(t=>{t.nextSibling?.tagName=="BR"&&(t.nextSibling.style.display="none")}),l.querySelectorAll("br").forEach(t=>{t.style.display=="none"&&t.parentNode.removeChild(t)}),l.outerHTML}function V(c,r){if(r==1)return{ctn:"<tbody><tr>"+c.join("")+"</tr></tbody>",next_lns:2};if(r==2)return{ctn:`<tbody><tr>${c[0]}${c[1]}</tr><tr>${c[2]}${c[3]}</tr></tbody>`,next_lns:4};if(r==4)return{ctn:"<tbody><tr>"+c.join("</tr><tr>")+"</tr></tbody>",next_lns:1}}const G={style:{width:"18.76cm","line-height":"normal"},id:"oonom"},J={class:"noprint"},Q={class:"labi-container"},Z={key:0,style:{"font-size":"6.5pt","font-family":"Cambria, 仿宋",margin:"0px"}},K={style:{"font-family":"'courier new'"}},W={key:1,style:{"text-align":"center","font-family":"Cambria, 仿宋",margin:"0px"}},X={style:{"font-size":"10pt"}},Y={style:{"font-size":"6.5pt"}},tt={style:{"font-family":"'courier new'"}},et={key:2,style:{"text-align":"center","font-family":"黑体",margin:"0px"}},nt={style:{"font-size":"10pt"}},it=["onClick","data_type","data_id"],lt={key:0,style:{"font-size":"6.5pt",margin:"0px","font-family":"Cambria, 仿宋"}},rt={style:{"font-family":"'courier new'"}},ot={style:{"font-family":"'courier new'"}},at={key:0},st={key:1},ut=["innerHTML"],dt={key:2},ct=["innerHTML"],_t={key:3},ft=["innerHTML"],Ct={__name:"preexport-1",setup(c){const r=P(),l=D(),t=g({q:!0,a:!1,p:!1}),i=g(0),k=g(0),S=3,v=3,$=g(""),T=g({}),A=g(!1);z.post("/api/group/get",{id:r.params.id}).then(o=>{o.entry.split(",").forEach(e=>{T.value[e]=O}),$.value=o.title,Promise.all(o.entry.split(",").map(e=>new Promise((n,x)=>{z.get("/api/qapi/get/"+e).then(q=>{T.value[e]=q})}))).then(()=>{})});const b=o=>JSON.parse(o),I=o=>Object.entries(o).map(e=>e[1]),L=g(o=>{}),j=o=>{T.value[o]._extb_height=(T.value[o]._extb_height||0)+50,console.log(T.value[o]._extb_height)},C=g(1),B=()=>{localStorage.setItem("___thost___html_export",document.getElementById("corehtml").outerHTML),l.push("/grouping/preexport-2/"+r.params.id)},w=g("Cambria , 宋体"),N=()=>{w.value="Times New Roman , 宋体!important"},R=()=>{document.querySelectorAll("table[name=optionsTable]").forEach(e=>{if(e.querySelectorAll("td").length==4){console.log("oo",e);let n=[],x=1;e.querySelectorAll("td").forEach(q=>{n.push(q.outerHTML)}),e.addEventListener("click",()=>{console.log("click");const{ctn:q,next_lns:U}=o(n,x);e.innerHTML=q,x=U})}});function o(e,n){if(n==1)return{ctn:"<tbody><tr>"+e.join("")+"</tr></tbody>",next_lns:2};if(n==2)return{ctn:`<tbody><tr>${e[0]}${e[1]}</tr><tr>${e[2]}${e[3]}</tr></tbody>`,next_lns:4};if(n==4)return{ctn:"<tbody><tr>"+e.join("</tr><tr>")+"</tr></tbody>",next_lns:1}}};return(o,e)=>(s(),u(H,null,[f(d(h),{class:"noprint",onClick:e[0]||(e[0]=n=>t.value.q=!t.value.q)},{default:y(()=>[a("Q")]),_:1}),f(d(h),{class:"noprint",onClick:e[1]||(e[1]=n=>t.value.a=!t.value.a)},{default:y(()=>[a("A")]),_:1}),f(d(h),{class:"noprint",onClick:e[2]||(e[2]=n=>t.value.p=!t.value.p)},{default:y(()=>[a("P")]),_:1}),f(d(h),{class:"noprint",onClick:e[3]||(e[3]=n=>L.value=j)},{default:y(()=>[a("单击题面时增加空格")]),_:1}),f(d(h),{class:"noprint",onClick:N},{default:y(()=>[a("字体转为Times")]),_:1}),f(d(h),{class:"noprint",onClick:e[4]||(e[4]=n=>C.value==2?C.value=1:C.value=2)},{default:y(()=>[a("改变列数 ")]),_:1}),f(d(h),{class:"noprint",onClick:e[5]||(e[5]=n=>{L.value=()=>{},R()})},{default:y(()=>[a("修正opttable")]),_:1}),f(d(h),{class:"noprint",onClick:e[6]||(e[6]=n=>A.value=!0)},{default:y(()=>[a("Retheme 2")]),_:1}),f(d(h),{class:"noprint",onClick:e[7]||(e[7]=n=>i.value++)},{default:y(()=>[a("Title format")]),_:1}),f(d(h),{class:"noprint",onClick:e[8]||(e[8]=n=>k.value++)},{default:y(()=>[a("Info format")]),_:1}),f(d(h),{class:"noprint",onClick:e[9]||(e[9]=n=>B())},{default:y(()=>[a("进入不包含fixed content的修正页面")]),_:1}),_("div",G,[_("div",J,[_("div",Q,[(s(),u(H,null,F([1,2,3,4,5,6,7],n=>_("div",{class:"labi-block",key:n,style:{height:"1045px"}}," Page # "+p(n),1)),64))])]),_("div",{id:"corehtml",style:E({width:"18.95cm",columns:C.value,"line-height":"normal"})},[i.value%S==0?(s(),u("p",Z,[a(" Generated by thost | Group UUID: "),_("span",K,p(o.$route.params.id),1),a(" | Title: "+p($.value),1)])):m("",!0),i.value%S==1?(s(),u("div",W,[_("p",X,p($.value),1),_("p",Y,[a(" Generated by thost | UUID: "),_("span",tt,p(o.$route.params.id),1)])])):m("",!0),i.value%S==2?(s(),u("div",et,[_("p",nt,p($.value),1)])):m("",!0),(s(!0),u(H,null,F(I(T.value),(n,x)=>(s(),u("div",{key:n.id,onClick:q=>L.value(n.id),data_type:b(n.extra).info[0],class:"___core_block",data_id:x},[k.value%v==0?(s(),u("p",lt,[a(" UUID:"),_("span",rt,p(n.id),1),a(" | qid:"),_("span",ot,p(n.qid),1),t.value.q?(s(),u("span",at,"| "+p(b(n.extra).info[0])+" | "+p(b(n.extra).info[1])+" | Origin: "+p(b(n.extra).from),1)):m("",!0)])):m("",!0),k.value%v==0?(s(),u("div",st,[t.value.q?(s(),u("div",{key:0,innerHTML:d(M)(n.q,{ret2:A.value,tindex:x+1,includeti:!0,qtype:b(n.extra).info[0],bankid:n.bankid}),style:E({fontSize:"9.5pt",fontFamily:w.value})},null,12,ut)):m("",!0)])):m("",!0),k.value%v==1?(s(),u("div",dt,[t.value.q?(s(),u("div",{key:0,innerHTML:d(M)(n.q,{ret2:A.value,tindex:x+1,gtittype:3,ootInfo:b(n.extra).info,qtype:b(n.extra).info[0],bankid:n.bankid}),style:E({fontSize:"9.5pt",fontFamily:w.value})},null,12,ct)):m("",!0)])):m("",!0),k.value%v==2?(s(),u("div",_t,[t.value.q?(s(),u("div",{key:0,innerHTML:d(M)(n.q,{ret2:A.value,tindex:x+1,gtittype:4,qtype:b(n.extra).info[0],bankid:n.bankid}),style:E({fontSize:"9.5pt",fontFamily:w.value})},null,12,ft)):m("",!0)])):m("",!0)],8,it))),128))],4)])],64))}};export{Ct as default};
