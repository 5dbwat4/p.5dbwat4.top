import{useRoute as T,useRouter as g}from"./vue-router-85f8dd9e.js";import{s as M}from"./sweetalert.min-b990379b.js";import{A as _}from"./APIHelper-89899791.js";import{u as h}from"./settings-a16c4400.js";import{g as y}from"./generateHTMLCode-2e08e708.js";import{b2 as a,ab as n,m as s,u as l,bc as o,n as r,aH as u,l as b,t as m}from"./index-6b27469d.js";import{N as w}from"./Skeleton-6c716d44.js";import{N as p}from"./Button-a421b774.js";import"./_commonjsHelpers-de833af9.js";import"./light-cb8e5d18.js";import"./format-length-c9d165c6.js";import"./Icon-0741e3aa.js";import"./Warning-ad995842.js";import"./Close-df27b242.js";import"./Scrollbar-6ef5ad24.js";import"./runtime-dom.esm-bundler-4f377a37.js";import"./keysOf-5d5107c5.js";import"./toScreenDSingle-d0be9dca.js";import"./diff.map-0594d4b4.js";import"./use-houdini-2b215f58.js";import"./Loading-a27cceda.js";import"./use-is-mounted-e356ec1d.js";import"./use-memo-7138c88c.js";import"./FadeInExpandTransition-65435983.js";const q={key:0},A={key:1},C=["innerHTML"],N={key:0},R=r("p",null,"\u7B54\u6848",-1),x=["innerHTML"],S=r("p",null,"\u89E3\u6790",-1),$=["innerHTML"],Q=r("p",null,"\u6CE8\u91CA",-1),B=["innerHTML"],D={__name:"view",setup(E){h();const d=T();g();const v=a(!0),i=a({}),f=a({});a({a:"",p:""});const c=a(!1);_.get("/api/data/mistakes_coll/get/full_with_question/"+d.params.id).then(t=>{i.value=t.mistakes_coll,f.value=t.quesRecord,v.value=!1});const k=()=>{c.value=!0},L=()=>{M("Are you sure?",{dangerMode:!0,buttons:!0}).then(t=>{t&&_.get("/api/qapi/delete/"+d.params.id).then(e=>{M(JSON.stringify(e,null,4))})})};return(t,e)=>v.value?(n(),s("div",q,[l(o(w),{text:"",repeat:9})])):(n(),s("div",A,[r("div",{innerHTML:o(y)(i.value,f.value)},null,8,C),l(o(p),{onClick:e[0]||(e[0]=H=>L())},{default:u(()=>[m("Delete")]),_:1}),l(o(p),{onClick:e[1]||(e[1]=H=>t.$router.push("../edit/"+t.$route.params.id))},{default:u(()=>[m("Edit")]),_:1}),l(o(p),{onClick:e[2]||(e[2]=H=>k())},{default:u(()=>[m("Show Q & A")]),_:1}),c.value?(n(),s("div",N,[R,r("div",{innerHTML:i.value.answer},null,8,x),S,r("div",{innerHTML:i.value.parse},null,8,$),Q,r("div",{innerHTML:i.value.note},null,8,B)])):b("",!0)]))}};export{D as default};