(self.webpackChunk=self.webpackChunk||[]).push([[170],{6170:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>Z});var a=l(7875),n=l(641),i=l(349),r=l(7972),s=l(2895),o=l(7625),u=l(8),c=l(4849);const p=(0,a.Uk)("save"),d=(0,a.Uk)("save"),y=(0,a.Uk)("View"),f={setup(e){(0,r.useRoute)();const t=(0,r.useRouter)(),l=(0,a.l1)(),i=(0,n.iH)(!1),f=(0,n.iH)(""),v=(0,n.iH)(!1),m=(0,n.iH)(""),w=(0,n.iH)("");return(e,r)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,n.SU)(s.Z),{show:v.value,"onUpdate:show":r[3]||(r[3]=e=>v.value=e)},{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(o.ZP),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(u.Z),{placeholder:"Title",value:m.value,"onUpdate:value":r[0]||(r[0]=e=>m.value=e)},null,8,["value"]),(0,a.Wm)((0,n.SU)(u.Z),{placeholder:"Desc",type:"textarea",value:w.value,"onUpdate:value":r[1]||(r[1]=e=>w.value=e)},null,8,["value"]),(0,a.Wm)((0,n.SU)(c.Z),{onClick:r[2]||(r[2]=e=>(async()=>{fetch("/api/group/new",{method:"POST",body:JSON.stringify({entry:l.ql,timestamp:(new Date).getTime(),title:m.value,desc:w.value}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{i.value=!0,f.value=e.id}))})())},{default:(0,a.w5)((()=>[p])),_:1})])),_:1})])),_:1},8,["show"]),(0,a.Wm)((0,n.SU)(c.Z),{onClick:r[4]||(r[4]=e=>v.value=!0)},{default:(0,a.w5)((()=>[d])),_:1}),i.value?((0,a.wg)(),(0,a.j4)((0,n.SU)(c.Z),{key:0,onClick:r[5]||(r[5]=e=>(async()=>{t.push("/group/"+f.value)})())},{default:(0,a.w5)((()=>[y])),_:1})):(0,a.kq)("v-if",!0)],64))}};var v=l(4835),m=l(8294),w=l.n(m);const h=(0,a.Uk)("Q"),k=(0,a.Uk)("A"),g=(0,a.Uk)("P"),S={style:{width:"18.76cm"}},U={style:{"font-size":"9.5pt"}},q=(0,a.Uk)("UUID:"),b={style:{"font-family":"'courier new'"}},_=(0,a.Uk)(" | qid:"),H={style:{"font-family":"'courier new'"}},x=(0,a.Uk)(),C={key:0},T=["innerHTML"],z={key:1},D=["src"],A={key:2},W=["src"],Z={setup(e){const t=(0,r.useRoute)(),l=((0,r.useRouter)(),(0,n.iH)({q:!0,a:!1,p:!1})),s=(0,n.iH)({});t.params.ids.split(",").forEach((e=>{s.value[e]=w()})),Promise.all(t.params.ids.split(",").map((e=>new Promise(((t,l)=>{fetch("/api/get",{method:"POST",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>{s.value[e]=t}))}))))).then((()=>{}));const o=e=>JSON.parse(e);return(e,t)=>{return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,n.SU)(c.Z),{onClick:t[0]||(t[0]=e=>l.value.q=!l.value.q)},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)((0,n.SU)(c.Z),{onClick:t[1]||(t[1]=e=>l.value.a=!l.value.a)},{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)((0,n.SU)(c.Z),{onClick:t[2]||(t[2]=e=>l.value.p=!l.value.p)},{default:(0,a.w5)((()=>[g])),_:1}),(0,a.Wm)(f,{ql:e.$route.params.ids},null,8,["ql"]),(0,a._)("div",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((r=s.value,Object.entries(r).map((e=>e[1]))),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("p",U,[q,(0,a._)("span",b,(0,i.zw)(e.id),1),_,(0,a._)("span",H,(0,i.zw)(e.qid),1),x,l.value.q?((0,a.wg)(),(0,a.iD)("span",C,"| Info: "+(0,i.zw)(o(e.extra).info)+" | Origin: "+(0,i.zw)(o(e.extra).from),1)):(0,a.kq)("v-if",!0)]),l.value.q?((0,a.wg)(),(0,a.iD)("div",{key:0,innerHTML:(0,n.SU)(v.a)(e.q),style:{"font-size":"10.5pt","font-family":"Cambria , 宋体"}},null,8,T)):(0,a.kq)("v-if",!0),l.value.a?((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("img",{src:"/oss-storage/"+e.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[0]+".png"},null,8,D)])):(0,a.kq)("v-if",!0),l.value.p?((0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("img",{src:"/oss-storage/"+e.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[1]+".png"},null,8,W)])):(0,a.kq)("v-if",!0)])))),128))])],64);var r}}}},8294:e=>{e.exports={id:"",qid:"",q:"<p>Loading ... </p>",extra:"{}"}},4835:(e,t,l)=>{"use strict";function a(e,t){const l=document.createElement("div");return e=e.replaceAll("【题文】",""),l.innerHTML=e,l.querySelectorAll("img").forEach((e=>{if(e.src.includes("/formula/")&&(e.src=e.src.replace(".png",".svg"),e.style.width=.8*e.width+"px"),e.src.includes("/dksih/")){let t=/\?resizew=(\d*)/.exec(e.src);t&&0!=t.length&&(e.style.width=t[1]+"px",e.src=e.src.replace(/\?resizew=(\d*)/,""),e.setAttribute("width",t[1]),e.setAttribute("height",""))}})),l.querySelectorAll("p").forEach((e=>{e.style.fontFamily||(e.style.fontFamily="Cambria , 宋体"),e.style.fontSize||(e.style.fontSize="9.5pt"),e.style.margin="0px"})),l.querySelectorAll("table[name=optionsTable]").forEach((e=>{if(4==e.querySelectorAll("td").length){let t=[],l=1;e.querySelectorAll("td").forEach((e=>{t.push(e.outerHTML)})),e.addEventListener("click",(()=>{console.log("click");const{ctn:a,next_lns:n}=function(e,t){return 1==t?{ctn:"<tbody><tr>"+e.join("")+"</tr></tbody>",next_lns:2}:2==t?{ctn:`<tbody><tr>${e[0]}${e[1]}</tr><tr>${e[2]}${e[3]}</tr></tbody>`,next_lns:4}:4==t?{ctn:"<tbody><tr>"+e.join("</tr><tr>")+"</tr></tbody>",next_lns:1}:void 0}(t,l);e.innerHTML=a,l=n}))}})),l.querySelectorAll("table[name=optionsTable] td").forEach((e=>{e.style.fontFamily||(e.style.fontFamily="Cambria , 宋体"),e.style.fontSize||(e.style.fontSize="9.5pt"),e.style.margin="0px"})),l.style.fontFamily="Cambria , 宋体",l.innerHTML}l.d(t,{a:()=>a})}}]);