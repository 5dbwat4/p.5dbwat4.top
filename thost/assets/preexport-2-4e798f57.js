import{useRoute as G,useRouter as J}from"./vue-router-85f8dd9e.js";import{A as B}from"./APIHelper-89899791.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{a5 as C,b2 as w,ab as S,m as x,n as f,u as b,aH as a,bc as o,F as N,ah as Q,l as U,t as c,bi as h,bh as Y,ae as Z,ac as ee}from"./index-6b27469d.js";import{N as i}from"./Button-a421b774.js";import{N as _}from"./p-d63b6958.js";import{N as L}from"./Divider-7d564df1.js";import"./light-cb8e5d18.js";import"./format-length-c9d165c6.js";import"./Icon-0741e3aa.js";import"./Warning-ad995842.js";import"./Close-df27b242.js";import"./Scrollbar-6ef5ad24.js";import"./runtime-dom.esm-bundler-4f377a37.js";import"./keysOf-5d5107c5.js";import"./Loading-a27cceda.js";import"./use-is-mounted-e356ec1d.js";import"./use-memo-7138c88c.js";import"./FadeInExpandTransition-65435983.js";import"./light-5c2f581c.js";const ne=k=>(Z("data-v-e696b427"),k=k(),ee(),k),te={class:"hanged noprint"},se={key:0,class:"noprint"},le={class:"labi-container"},pe=ne(()=>f("div",{id:"coreop"},null,-1)),I=1045,be={__name:"preexport-2",setup(k){C(()=>{document.getElementById("coreop").innerHTML=localStorage.getItem("___thost___html_export")});const E=G(),A=J(),v=w(!0),l=w({imageonclick:"none",bkonclick:"none",bodyonclick:"none",blockonclick:"none",tableonclick:"none",opttabelonclick:"none"}),H=()=>{document.querySelectorAll("bk[type=underline]").forEach(e=>{e.style.wordBreak="break-all",e.style.userSelect="none"})};C(()=>{q(),document.querySelectorAll(".__ccccimage").forEach(e=>{var n,t,s,p,u,r,g,m;((n=e.previousElementSibling)==null?void 0:n.className)!="__ccccimage"&&((t=e.previousElementSibling)==null?void 0:t.tagName)!="BR"&&(((s=e.previousElementSibling)==null?void 0:s.innerHTML)=="&nbsp;&nbsp;&nbsp;"&&e.previousElementSibling.parentNode.removeChild(e.previousElementSibling),e.insertAdjacentHTML("beforebegin","<br/>")),((p=e.nextElementSibling)==null?void 0:p.className)!="__ccccimage"&&((u=e.nextElementSibling)==null?void 0:u.tagName)!="BR"&&(((r=e.nextElementSibling)==null?void 0:r.innerHTML)=="&nbsp;&nbsp;&nbsp;"&&e.nextElementSibling.parentNode.removeChild(e.nextElementSibling),e.insertAdjacentHTML("afterend","<br/>")),e.style.float=="right"&&((g=e.previousElementSibling)==null?void 0:g.tagName)=="BR"&&((m=e.nextElementSibling)==null?void 0:m.tagName)=="BR"&&e.nextElementSibling.parentNode.removeChild(e.nextElementSibling)}),T(),(()=>{const e=t=>{l.value.imageonclick=="imageresize"&&(t.target.dataset.width||(t.target.dataset.width=t.target.width),t.target.dataset.width=parseInt(t.target.dataset.width)-30,t.target.style.width=t.target.dataset.width+"px",t.target.width=t.target.dataset.width)},n=t=>{l.value.imageonclick=="imageresize"&&(t.preventDefault(),t.target.dataset.width||(t.target.dataset.width=t.target.width),t.target.dataset.width=parseInt(t.target.dataset.width)+8,t.target.style.width=t.target.dataset.width+"px",t.target.width=t.target.dataset.width)};document.getElementById("coreop").querySelectorAll("img").forEach(t=>{t.src.includes("/dksih/")&&(t.addEventListener("click",e),t.addEventListener("contextmenu",n))})})(),(()=>{const e=t=>{l.value.imageonclick=="addABRElem"&&t.target.parentElement.insertAdjacentHTML("beforebegin","<br/>")},n=t=>{l.value.imageonclick=="addABRElem"&&t.preventDefault()};document.getElementById("coreop").querySelectorAll("img").forEach(t=>{t.src.includes("/dksih/")&&(t.addEventListener("click",e),t.addEventListener("contextmenu",n))})})(),(()=>{const e=n=>{if(l.value.imageonclick=="floatRight"){console.log("here"),n.target.parentNode.style.float="right",n.target.parentNode.style.clear="both";let t=n.target.parentNode;t.previousSibling.tagName=="BR"&&t.parentNode.removeChild(t.previousSibling)}};document.getElementById("coreop").querySelectorAll("img").forEach(n=>{n.src.includes("/dksih/")&&n.addEventListener("click",e)})})(),(()=>{const e=(n,t)=>{console.log("tgd"),l.value.opttabelonclick=="filla"&&(console.log(n),console.log("tgd2"),t.style.width="-webkit-fill-available")};document.getElementById("coreop").querySelectorAll("table[name=optionsTable]").forEach(n=>{n.addEventListener("click",(t=>s=>{e(s,t)})(n))})})(),(()=>{const e=t=>{l.value.bkonclick=="extentblank"&&t.target.innerText.includes("_")&&(t.target.innerText=new Array(t.target.innerText.length+15).join("_"))},n=t=>{l.value.bkonclick=="extentblank"&&(t.preventDefault(),t.target.innerText.includes("_")&&(t.target.innerText=new Array(t.target.innerText.length-5).join("_")))};document.getElementById("coreop").querySelectorAll("bk").forEach(t=>{t.addEventListener("click",e),t.addEventListener("contextmenu",n)})})(),(()=>{const e=(t,s)=>{l.value.blockonclick=="addpage"&&(s.style.breakAfter="page")},n=(t,s)=>{l.value.blockonclick=="addpage"&&(t.preventDefault(),t.target.innerText.includes("_")&&(t.target.innerText=new Array(t.target.innerText.length-5).join("_")))};document.getElementById("coreop").querySelectorAll(".___core_block").forEach(t=>{t.addEventListener("click",(s=>p=>{e(p,s)})(t)),t.addEventListener("contextmenu",(s=>p=>{n(p)})())})})(),document.getElementById("coreop").addEventListener("mouseover",e=>{l.value.bodyonclick=="deletedom"&&e.target.classList.add("shadow")}),document.getElementById("coreop").addEventListener("mouseout",e=>{l.value.bodyonclick=="deletedom"&&e.target.classList.remove("shadow")}),document.getElementById("coreop").addEventListener("click",e=>{l.value.bodyonclick=="deletedom"&&e.target.parentNode.removeChild(e.target)}),(()=>{const e=t=>{l.value.imageonclick=="deleteNum"&&(console.log(t),t.target.parentElement.querySelector("p").style.display="none")},n=t=>{l.value.imageonclick=="deleteNum"&&(t.preventDefault(),t.target.querySelector("p").style.display="block")};document.getElementById("coreop").querySelectorAll(".__ccccimage").forEach(t=>{t.addEventListener("click",e),t.addEventListener("contextmenu",n)})})(),(()=>{let e=[];const n=s=>{var p,u;if(l.value.imageonclick=="picreset")if(e.includes(s.target)){let r=e.map(d=>d.parentElement);const g=document.querySelector(".___core_block").clientWidth;let m=r[0],y=g-m.clientWidth;for(let d=1;d<r.length;d++){if(console.log(r[d],y,r[d].clientWidth),((p=r[d].nextElementSibling)==null?void 0:p.tagName)=="SPAN"&&((u=r[d].nextElementSibling)!=null&&u.hasAttribute("qml-space-size"))&&r[d].nextElementSibling.parentNode.removeChild(r[d].nextElementSibling),r[d].clientWidth>=y){m=r[d],y=g-m.clientWidth;continue}m.insertAdjacentElement("afterend",r[d]),m=r[d],y=y-r[d].clientWidth}e.forEach(d=>{d.classList.remove("shadow")}),e=[]}else e.push(s.target),s.target.classList.add("shadow")},t=s=>{l.value.imageonclick=="picreset"&&(s.preventDefault(),s.target.dataset.width||(s.target.dataset.width=s.target.width),s.target.dataset.width=parseInt(s.target.dataset.width)+8,s.target.style.width=s.target.dataset.width+"px",s.target.width=s.target.dataset.width)};document.getElementById("coreop").querySelectorAll("img").forEach(s=>{s.src.includes("/dksih/")&&(s.addEventListener("click",n),s.addEventListener("contextmenu",t))})})(),(()=>{const e=(t,s)=>{l.value.blockonclick=="blockextent"&&(console.log(t,s),s.querySelector(".extblank").dataset.height||(s.querySelector(".extblank").dataset.height=0),s.querySelector(".extblank").dataset.height=parseInt(s.querySelector(".extblank").dataset.height)+50,s.querySelector(".extblank").style.height=s.querySelector(".extblank").dataset.height+"px")},n=(t,s)=>{l.value.blockonclick=="blockextent"&&(t.preventDefault(),s.querySelector(".extblank").dataset.height||(s.querySelector(".extblank").dataset.height=0),s.querySelector(".extblank").dataset.height=parseInt(s.querySelector(".extblank").dataset.height)-10,s.querySelector(".extblank").style.height=s.querySelector(".extblank").dataset.height+"px")};document.getElementById("coreop").querySelectorAll(".___core_block").forEach(t=>{t.addEventListener("click",(s=>p=>{e(p,s)})(t)),t.addEventListener("contextmenu",(s=>p=>{n(p,s)})(t))})})(),(()=>{let e=[];const n=(t,s)=>{if(l.value.blockonclick=="blockextbatch")if(e.includes(s)){let p=I/e.length;e.forEach(u=>{u.querySelector(".extblank").setAttribute("data-height",p-u.clientHeight),u.querySelector(".extblank").style.height=p-u.clientHeight+"px",u.classList.remove("shadow")}),e=[]}else e.push(s),s.classList.add("shadow")};document.getElementById("coreop").querySelectorAll(".___core_block").forEach(t=>{t.addEventListener("click",(s=>p=>{n(p,s)})(t))})})(),document.getElementById("coreop").addEventListener("mouseover",e=>{l.value.bodyonclick=="cnaddline"&&e.target.classList.add("shadow")}),document.getElementById("coreop").addEventListener("mouseout",e=>{l.value.bodyonclick=="cnaddline"&&e.target.classList.remove("shadow")}),document.getElementById("coreop").addEventListener("click",e=>{var n;l.value.bodyonclick=="cnaddline"&&(((n=e.target.nextElementSibling)==null?void 0:n.tagName)=="BR"&&(e.target.nextElementSibling.style.display="none"),e.target.insertAdjacentHTML("afterend",`
        <span style="display: block;
  height: 15pt;
  text-decoration: underline dotted 0.5pt; 
  overflow: clip;
  font-size: 14.5pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        `))}),(()=>{const e=(n,t)=>{l.value.tableonclick=="tablerewidth"&&(console.log(n,t),t.style.width="unset")};document.getElementById("coreop").querySelectorAll("table").forEach(n=>{n.addEventListener("click",(t=>s=>{e(s,t)})(n))})})(),(()=>{const e=document.getElementById("corehtml").firstElementChild.clientWidth;document.getElementById("coreop").querySelectorAll("img").forEach(n=>{n.src.includes("/dksih/")&&parseInt(n.style.width)>=e&&(n.dataset.width||(n.dataset.width=e),n.style.width=e+"px")})})()});const M=()=>{document.getElementById("coreop").querySelectorAll("p").forEach(e=>{e.style.fontFamily.includes("\u4EFF\u5B8B")||(e.style.fontFamily="Times New Roman , \u5B8B\u4F53")}),document.getElementById("coreop").querySelectorAll("bk u").forEach(e=>{e.innerHTML=e.innerHTML.replace(/【小题(\d*)】/,"$1.______________"),e.outerHTML=e.outerHTML.replace("<u>","<span>").replace("</u>","</span>")})},R=()=>{document.getElementById("coreop").querySelectorAll("p").forEach(e=>{e.style.fontFamily.includes("\u4EFF\u5B8B")||(e.style.fontFamily="Times New Roman , \u5B8B\u4F53")}),document.getElementById("coreop").querySelectorAll("span").forEach(e=>{e.innerHTML=e.innerHTML.replace(/【小题(\d*)】/,"$1.")}),document.getElementById("coreop").querySelectorAll("bk").forEach(e=>{e.innerHTML="<u>&nbsp;&nbsp;&nbsp;"+e.attributes.index.nodeValue+"&nbsp;&nbsp;&nbsp;</u>"})},W=()=>{document.getElementById("coreop").querySelectorAll("span").forEach(e=>{e.innerHTML=e.innerHTML.replace(/【小题(\d*)】/,"$1.")})},j=()=>{document.querySelectorAll(".___core_block").forEach(e=>{e.attributes.data_type.nodeValue=="\u9605\u8BFB\u9009\u62E9"&&(console.log("hdn yd",e),e.innerHTML=e.innerHTML.replaceAll(/【小题(\d*)】/g,"$1.")),e.attributes.data_type.nodeValue=="\u4E03\u9009\u4E94"&&(e.querySelectorAll("bk u").forEach(n=>{n.innerHTML=n.innerHTML.replace(/【小题(\d*)】/,"$1.______________"),n.outerHTML=n.outerHTML.replace("<u>","<span>").replace("</u>","</span>")}),e.querySelectorAll("table[name=optionsTable]").forEach(n=>{n.outerHTML=n.innerText.split(`
`).join("<br/>")+"<br/>"})),e.attributes.data_type.nodeValue=="\u5B8C\u5F62\u586B\u7A7A"&&(e.querySelectorAll("span").forEach(n=>{n.innerHTML=n.innerHTML.replace(/【小题(\d*)】/,"$1.")}),e.querySelectorAll("bk").forEach(n=>{n.style="text-decoration: underline black;",n.innerHTML="<u>&nbsp;&nbsp;&nbsp;"+n.attributes.index.nodeValue+"&nbsp;&nbsp;&nbsp;</u>"}),e.querySelectorAll("table[name=optionsTable]").forEach(n=>{n.style.width="calc(100% - "+n.previousElementSibling.offsetWidth+"px)",n.previousElementSibling.style.display="inline-block",n.parentElement.style.display="block",n.style.display="inline-table",n.style.verticalAlign="middle"})),(e.attributes.data_type.nodeValue="\u7528\u5355\u8BCD\u7684\u9002\u5F53\u5F62\u5F0F\u5B8C\u6210\u77ED\u6587")&&e.querySelectorAll("bk u").forEach(n=>{n.innerHTML=n.innerHTML.replace(/【小题(\d*)】/,` <span>$1.</span><span style="color: lightgray;
  font-size: 13.5pt;">__________________</span> `),n.outerHTML=n.outerHTML.replace("<u>","<span>").replace("</u>","</span>")}),document.getElementById("coreop").querySelectorAll("p").forEach(n=>{n.style.fontFamily.includes("\u4EFF\u5B8B")||(n.style.fontFamily="Times New Roman , \u5B8B\u4F53")})})},F=()=>{document.querySelectorAll(".___core_block").forEach(e=>{let n=!0;e.querySelectorAll(".__ccccimage").forEach(t=>{t.getAttribute("data-belongsto")&&parseInt(t.getAttribute("data-belongsto"))!=parseInt(e.getAttribute("data_id"))&&(n=!1)}),n&&e.querySelectorAll(".__ccccimage").forEach(t=>{t.querySelector("p").style.display="none"})})},D=()=>{localStorage.setItem("___thost___html_export",document.getElementById("corehtml").outerHTML),B.post("/api/group/exported/"+E.params.id,{htmlcode:document.getElementById("corehtml").outerHTML}),A.push("/paper/"+E.params.id)},$=()=>{localStorage.setItem("___thost___html_export",document.getElementById("corehtml").outerHTML),B.post("/api/group/exported/"+E.params.id,{htmlcode:document.getElementById("corehtml").outerHTML}),A.push("/paper/"+E.params.id+"/pdf")},z=()=>{document.getElementById("coreop").querySelectorAll("table[name=optionsTable]").forEach(e=>{e.style.width="calc(100% - "+e.previousElementSibling.offsetWidth+"px)",e.previousElementSibling.style.display="inline-block",e.parentElement.style.display="block",e.style.display="inline-table",e.style.verticalAlign="middle"})},P=()=>{document.querySelectorAll("bk").forEach(e=>{e.innerText.includes("_")&&e.innerText.length<15&&(e.innerText=new Array(16).join("_"))})},V=()=>{const e=[];if(document.querySelectorAll(".__ccccimage").forEach(p=>{e.push(p)}),e.length==0)return;const n=document.querySelector(".___core_block").clientWidth;let t=e[0],s=n-t.clientWidth;for(let p=1;p<e.length;p++){if(console.log(e[p],s,e[p].clientWidth),e[p].clientWidth>=s){t=e[p],s=n-t.clientWidth;continue}t.insertAdjacentElement("afterend",e[p]),t=e[p],s=s-e[p].clientWidth}document.querySelectorAll("span[qml-space-size='2']").forEach(p=>{var u,r,g,m;(((u=p.previousElementSibling)==null?void 0:u.tagName)=="BR"||((r=p.nextElementSibling)==null?void 0:r.tagName)=="BR")&&(p.style.display="none",((g=p.previousElementSibling)==null?void 0:g.tagName)=="BR"&&(p.previousElementSibling.style.display="none"),((m=p.nextElementSibling)==null?void 0:m.tagName)=="BR"&&(p.nextElementSibling.style.display="none"))})},O=()=>{document.getElementById("corehtml").querySelectorAll(".__normalized_block").forEach(e=>{e.childNodes.forEach(n=>{if(n.nodeName=="#text"){const t=document.createElement("span");t.style.display="inline",t.style.margin="0",t.innerText=n.textContent,n.parentNode.replaceChild(t,n)}})})},q=()=>{function e(n,t){if(t==1)return"<tbody><tr>"+n.join("")+"</tr></tbody>";if(t==2)return`<tbody><tr>${n[0]}${n[1]}</tr><tr>${n[2]}${n[3]}</tr></tbody>`;if(t==4)return"<tbody><tr>"+n.join("</tr><tr>")+"</tr></tbody>"}document.getElementById("coreop").querySelectorAll("table[name=optionsTable]").forEach(n=>{let t=[],s=0;n.querySelectorAll("td").forEach(p=>{s=Math.max(s,p.querySelector("span").clientWidth),t.push(p.outerHTML)}),console.log(s),t.length==4?s>=n.clientWidth/2||(s>=n.clientWidth/4?(n.innerHTML=e(t,2),console.log(2)):(n.innerHTML=e(t,1),console.log(4))):s<n.clientWidth/t.length?n.innerHTML="<tbody><tr>"+t.join("")+"</tr></tbody>":n.innerHTML="<tbody><tr>"+t.join("</tr><tr>")+"</tr></tbody>"})},T=()=>{document.querySelectorAll("p").forEach(e=>{console.log(e.parentElement.tagName),e.parentElement.tagName!="TD"&&(e.innerText==`

`&&e.parentNode.removeChild(e),e.innerText==""&&e.parentNode.removeChild(e))}),document.querySelectorAll("span").forEach(e=>{console.log(e.parentElement.tagName),e.parentElement.tagName!="TD"&&(e.innerText==`

`&&e.parentNode.removeChild(e),e.innerText==""&&e.parentNode.removeChild(e))}),document.querySelectorAll("p").forEach(e=>{var n,t,s;((n=e.lastElementChild)==null?void 0:n.tagName)=="BR"&&((s=(t=e.lastElementChild)==null?void 0:t.previousElementSibling)==null?void 0:s.tagName)=="BR"&&(e.removeChild(e.lastElementChild.previousElementSibling),e.removeChild(e.lastElementChild))}),document.getElementById("coreop").querySelectorAll("br").forEach(e=>{var n,t,s;console.log(e.nextSibling),((n=e.nextSibling)==null?void 0:n.nodeName)=="#text"&&((t=e.nextSibling)==null?void 0:t.data.replaceAll(`
`,"").replaceAll(" ",""))==""&&e.nextSibling.parentNode.removeChild(e.nextSibling),((s=e.nextSibling)==null?void 0:s.tagName)=="BR"&&(e.nextSibling.style.display="none")}),document.getElementById("coreop").querySelectorAll("br").forEach(e=>{e.style.display=="none"&&e.parentNode.removeChild(e)})},X=()=>{document.querySelectorAll("td .__ccccimage").forEach(e=>{e.querySelector("p").style.display="none"}),document.querySelectorAll(".__ccccimage").forEach(e=>{var n,t,s,p;((n=e.previousElementSibling)==null?void 0:n.tagName)!="BR"&&((t=e.nextElementSibling)==null?void 0:t.tagName)!="BR"&&!((s=e.previousElementSibling)!=null&&s.classList.contains("__ccccimage"))&&!((p=e.nextElementSibling)!=null&&p.classList.contains("__ccccimage"))&&(e.querySelector("p").style.display="none")})};return(e,n)=>(S(),x(N,null,[f("div",te,[b(o(_),null,{default:a(()=>[c("\u56FE\u7247\u5904\u7406 Current Function:"+h(l.value.imageonclick)+" ",1),b(o(i),{text:"",onClick:n[0]||(n[0]=t=>l.value.imageonclick="none")},{default:a(()=>[c("Reset")]),_:1})]),_:1}),b(o(i),{type:"success",onClick:n[1]||(n[1]=t=>l.value.imageonclick="imageresize")},{default:a(()=>[c("\u56FE\u7247\u5927\u5C0F")]),_:1}),b(o(i),{type:"success",onClick:n[2]||(n[2]=t=>l.value.imageonclick="deleteNum")},{default:a(()=>[c("\u5220\u9664\u56FE\u7247\u4E0B\u65B9\u7684\u9898\u53F7")]),_:1}),b(o(i),{onClick:n[3]||(n[3]=t=>l.value.imageonclick="floatRight")},{default:a(()=>[c("\u56FE\u7247\u6F02\u6D6E")]),_:1}),b(o(i),{onClick:n[4]||(n[4]=t=>l.value.opttabelonclick="filla")},{default:a(()=>[c("\u8868\u683Cfill-available")]),_:1}),b(o(i),{onClick:X},{default:a(()=>[c("\u5220\u9664\u884C\u5185\u56FE\u7247\u4E0B\u65B9\u7684\u9898\u53F7")]),_:1}),b(o(i),{onClick:n[5]||(n[5]=t=>V())},{default:a(()=>[c("Picture Reset")]),_:1}),b(o(i),{type:"success",onClick:n[6]||(n[6]=t=>l.value.imageonclick="picreset")},{default:a(()=>[c("Selected Picture Reset dbclick to do")]),_:1}),b(o(i),{type:"success",onClick:F},{default:a(()=>[c("\u5220\u9664\u591A\u4F59\u7684\u9898\u56FE\u6807\u8BB0")]),_:1}),b(o(i),{onClick:n[7]||(n[7]=t=>l.value.imageonclick="addABRElem")},{default:a(()=>[c("\u56FE\u7247\u524D\u52A0\u4E00\u4E2A\u6362\u884C")]),_:1}),b(o(L)),b(o(_),null,{default:a(()=>[c("\u8BD5\u9898\u5757\u5904\u7406 Current Function:"+h(l.value.blockonclick)+" ",1),b(o(i),{text:"",onClick:n[8]||(n[8]=t=>l.value.blockonclick="none")},{default:a(()=>[c("Reset")]),_:1})]),_:1}),b(o(i),{type:"success",onClick:n[9]||(n[9]=t=>{l.value.blockonclick="blockextent"})},{default:a(()=>[c("\u63D0\u4F9B\u7A7A\u884C")]),_:1}),b(o(i),{type:"success",onClick:n[10]||(n[10]=t=>{O(),l.value.bodyonclick="cnaddline"})},{default:a(()=>[c("\u8BED\u6587\uFF1A\u6DFB\u52A0\u6A2A\u7EBF")]),_:1}),b(o(i),{onClick:n[11]||(n[11]=t=>{l.value.blockonclick="blockextbatch"})},{default:a(()=>[c("\u9009\u4E2D\u9898\u76EE\u5747\u5206\u81F3\u4E00\u9875")]),_:1}),b(o(L)),b(o(_),null,{default:a(()=>[c("\u5168\u6587\u5904\u7406")]),_:1}),b(o(_),null,{default:a(()=>[c("Blank\u5904\u7406 Current Function:"+h(l.value.bkonclick)+" ",1),b(o(i),{text:"",onClick:n[12]||(n[12]=t=>l.value.bkonclick="none")},{default:a(()=>[c("Reset")]),_:1})]),_:1}),b(o(_),null,{default:a(()=>[c("Table\u5904\u7406 Current Function:"+h(l.value.tableonclick)+" ",1),b(o(i),{text:"",onClick:n[13]||(n[13]=t=>l.value.tableonclick="none")},{default:a(()=>[c("Reset")]),_:1})]),_:1}),b(o(i),{type:"success",onClick:n[14]||(n[14]=t=>T())},{default:a(()=>[c("\u5220\u9664\u591A\u4F59\u6362\u884C")]),_:1}),b(o(i),{onClick:n[15]||(n[15]=t=>{l.value.bodyonclick="deletedom",l.value.imageonclick="none",l.value.bkonclick="none"})},{default:a(()=>[c("\u5220\u9664\u9009\u4E2DDOM")]),_:1}),b(o(i),{onClick:M},{default:a(()=>[c("Blank retheme X._______")]),_:1}),b(o(i),{onClick:R},{default:a(()=>[c("Blank retheme \u5B8C\u578B")]),_:1}),b(o(i),{onClick:W},{default:a(()=>[c("\u8C03\u8282'\u3010\u5C0F\u9898x\u3011'\u7C7B\u5C55\u51FA")]),_:1}),b(o(i),{type:"success",onClick:j},{default:a(()=>[c("OtherFormatter EN")]),_:1}),b(o(i),{onClick:P},{default:a(()=>[c("Extendblank")]),_:1}),b(o(i),{type:"success",onClick:n[16]||(n[16]=t=>l.value.bkonclick="extentblank")},{default:a(()=>[c("Extendblankwhenclick")]),_:1}),b(o(i),{type:"success",onClick:n[17]||(n[17]=t=>l.value.tableonclick="tablerewidth")},{default:a(()=>[c("\u8868\u683C\u53D6\u6D88\u5BBD\u5EA6")]),_:1}),b(o(i),{onClick:z},{default:a(()=>[c("Destroy table")]),_:1}),b(o(i),{onClick:n[18]||(n[18]=t=>l.value.blockonclick="addpage")},{default:a(()=>[c("\u6DFB\u52A0\u5206\u9875\u7B26")]),_:1}),b(o(i),{type:"success",onClick:n[19]||(n[19]=t=>q())},{default:a(()=>[c("Optable Reset")]),_:1}),b(o(i),{type:"success",onClick:n[20]||(n[20]=t=>H())},{default:a(()=>[c("WordBreak")]),_:1}),b(o(L)),b(o(i),{type:"success",onClick:n[21]||(n[21]=t=>D())},{default:a(()=>[c("\u5BFC\u51FA\u9875")]),_:1}),b(o(i),{type:"success",onClick:n[22]||(n[22]=t=>$())},{default:a(()=>[c("\u5BFC\u51FA\u9875")]),_:1}),b(o(i),{onClick:n[23]||(n[23]=t=>v.value=!v.value)},{default:a(()=>[c("Toggle sPP")]),_:1})]),v.value?(S(),x("div",se,[f("div",le,[(S(),x(N,null,Q([1,2,3,4,5,6,7],t=>f("div",{class:"labi-block",key:t,style:Y({height:I+"px"})},"Page # "+h(t),5)),64))])])):U("",!0),pe],64))}},oe=K(be,[["__scopeId","data-v-e696b427"]]);export{oe as default};