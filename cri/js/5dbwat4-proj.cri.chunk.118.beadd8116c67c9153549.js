"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[118],{4118:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});var a=i(7875),l=i(641),r=i(7972),n=i(92),u=i(5896);const o={setup(t){const e=(0,a.RC)((()=>i.e(770).then(i.bind(i,8770)))),o=(0,r.useRouter)(),h=[{title:"Title",key:"title"},{title:"Author",key:"author",render:t=>t.author.includes("#$#")?(0,a.h)(e,{tip:t.author.split("#$#")[1],content:t.author.split("#$#")[0]}):(0,a.h)("P",{},t.author)},{title:"View",render:t=>(0,a.h)(n.Z,{strong:!0,tertiary:!0,size:"small",onClick:()=>{o.push("/view/"+t.id)}},{default:()=>"View"})}],s={pageSize:15},d=(0,l.iH)([]),c=70*window.innerHeight%NaN;return(0,a.bv)((async()=>{(await i.e(707).then(i.bind(i,5754))).API("listArch").then((t=>{d.value=Object.entries(t).map((t=>({title:t[1].title,id:t[0],author:t[1].author})))}))})),(t,e)=>((0,a.wg)(),(0,a.j4)((0,l.SU)(u.Z),{remote:"",ref:"table",columns:h,data:d.value,pagination:s,bordered:!1,loading:t.loading,"max-height":c,"scroll-x":900,"virtual-scroll":""},null,8,["data","loading"]))}}}}]);