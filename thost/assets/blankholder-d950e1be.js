import{aZ as r,a2 as n,a8 as o,l as s}from"./index-c2ed52a5.js";const i={id:"_GQP_content_core",style:{width:"18.76cm",columns:1,"line-height":"normal"}},c={__name:"blankholder",setup(l){const d=r(e=>{console.log(e)});return n(()=>{document.getElementById("_GQP_content_core").innerHTML=window.HTMLExportString,(()=>{const e=t=>{console.log(t.target),t.target.dataset.width||(t.target.dataset.width=t.target.width),t.target.dataset.width=parseInt(t.target.dataset.width)-30,t.target.style.width=t.target.dataset.width+"px"},a=t=>{console.log(t.target),t.preventDefault(),t.target.dataset.width||(t.target.dataset.width=t.target.width),t.target.dataset.width=parseInt(t.target.dataset.width)+30,t.target.style.width=t.target.dataset.width+"px"};document.getElementById("_GQP_content_core").querySelectorAll("img").forEach(t=>{t.src.includes("/dksih/")&&(t.addEventListener("click",e),t.addEventListener("contextmenu",a))})})(),document.getElementById("_GQP_content_core").querySelectorAll(".qblock").forEach(e=>{e.addEventListener("click",()=>{d.value(parseInt(/\d+/.exec(e.getAttribute("id"))[0]))})})}),(e,a)=>(o(),s("div",i))}};export{c as default};