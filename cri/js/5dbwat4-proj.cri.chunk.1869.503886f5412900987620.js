"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1869],{1869:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var i=a(7875),l=a(641),r=a(7972),n=a(4849),s=a(45);const u={setup(e){const t=(0,i.RC)((()=>a.e(6889).then(a.bind(a,6889)))),u=(0,r.useRouter)(),o=(0,r.useRoute)(),h=(0,i.l1)();console.log(h);const p=e=>{u.push("/tag/"+h.tagId+"/page/"+e),d.value.page=e},g=h.archlist,c=[{title:"Title",key:"title"},{title:"Author",key:"author",render:e=>e.author.includes("#$#")?(0,i.h)(t,{tip:e.author.split("#$#")[1],content:e.author.split("#$#")[0]}):(0,i.h)("P",{},e.author)},{title:"View",render:e=>(0,i.h)(n.Z,{strong:!0,tertiary:!0,size:"small",onClick:()=>{u.push("/view/"+e.ID)}},{default:()=>"View"})}],d=(0,l.iH)({pageSize:10,page:parseInt(o.params.page)||1,showSizePicker:!0,pageSizes:[10,20,30],itemCount:g.length}),w=70*window.innerHeight%NaN;return(e,t)=>((0,i.wg)(),(0,i.j4)((0,l.SU)(s.Z),{ref:"table",columns:c,data:(0,l.SU)(g),pagination:d.value,bordered:!1,"max-height":w,"scroll-x":900,"virtual-scroll":"","on-update:page":p},null,8,["data","pagination"]))}}}}]);