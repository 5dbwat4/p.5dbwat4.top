import T from"./subjects-8683e557.js";import{Z as w}from"./zujuan-api-e56e0e51.js";import{A as y}from"./APIHelper-c9b99a18.js";import"./router-goto-fdf2e3db.js";import{C as D}from"./zjw-68fcb478.js";import{useRouter as F,useRoute as j}from"./vue-router-3740985a.js";import{p as B}from"./polishinguptlist-688497ad.js";import{s as R}from"./sweetalert.min-9dab74b7.js";import{b as A}from"./blankpic-ca06291d.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{N as V}from"./Rate-e790c3ec.js";import{aZ as p,a8 as _,l as Z,j as g,aE as o,t as e,s as u,b7 as t,k as h,bd as E,m as O,F as S}from"./runtime-core.esm-bundler-c066f4bf.js";import{N as C}from"./p-d7e0cfbf.js";import{N as U}from"./Cascader-26bb8801.js";import{a as d}from"./Button-68cb5d7d.js";import{N as k}from"./Card-40f9cb29.js";import{N as b}from"./Input-cf865318.js";import{N as c}from"./FormItem-e2958ccc.js";import"./light-5802f424.js";import"./format-length-c9d165c6.js";import"./Icon-fde79c06.js";import"./Warning-459cf3e9.js";import"./Close-10bb4ae3.js";import"./Scrollbar-068db0c3.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./CONFIG-d506a2d4.js";import"./nomorlize_q-tailored-672252d5.js";import"./Divider-430ce100.js";import"./Ellipsis-af2e5d17.js";import"./Tooltip-bcde8d3a.js";import"./Popover-df9fe6bd.js";import"./fade-in-scale-up.cssr-e615339f.js";import"./flatten-a133123b.js";import"./use-false-until-truthy-a506b738.js";import"./get-aeafa5fe.js";import"./use-memo-b9add725.js";import"./utils-d7fa52af.js";import"./FadeInExpandTransition-ff940b4d.js";import"./use-merged-state-89f8109f.js";import"./use-compitable-42538ef7.js";import"./next-frame-once-7035a838.js";import"./Space-10d52240.js";import"./get-slot-1efb97e5.js";import"./_commonjsHelpers-725317a4.js";import"./light-111bcf27.js";import"./utils-656c6aaf.js";import"./create-e19b3023.js";import"./use-locale-5324fa07.js";import"./index-975a2d8f.js";import"./Suffix-768f3d5e.js";import"./Tag-d710591a.js";import"./ChevronRight-989c7384.js";import"./Checkbox-45e1205f.js";import"./index-cbfaa337.js";import"./light-a0d3ac36.js";const z={style:{display:"flex","justify-content":"flex-end"}},K={__name:"manualadd",setup(L){F();const N=j(),n=p(15),v=p(1),s=p([]),m=p(0);N.query.bankid&&(n.value=parseInt(N.query.bankid));const x=async()=>{w("/app-server/v1/basket/"+n.value).then(async r=>{let a=[];r.data.structure.forEach(i=>{a.push(...i.list)}),a=await B(n.value,a),v.value=2,s.value=a,m.value=-1,f()})},I=async()=>{for(let r=0;r<s.value.length;r++)await y.post("/zujuan-ink-be-core/donerec/add",{quid:s.value[r].quid,date:new Date().toDateString(),timestamp:new Date().getTime(),image:A,parent:"unsaved"});R({icon:"success",title:"OK"})},l=p({quid:"",insights:"",note:"",rate:0,timestamp:0,times:0,lastfinishdate:0,mastarate:0,bankid:0}),q=r=>{y.post("/zujuan-ink-be-core/ftc/push_to_collection",l.value).then(a=>{f()})},f=()=>{m.value++,l.value={quid:s.value[m.value].quid,insights:"",note:"",rate:0,timestamp:new Date().getTime(),times:1,lastfinishdate:new Date().getTime(),mastarate:0,bankid:n.value}};return(r,a)=>(_(),Z(S,null,[v.value==1?(_(),g(t(k),{key:0,title:"手动添加错题"},{default:o(()=>[e(t(C),null,{default:o(()=>[u("将使用来自试题篮的数据")]),_:1}),e(t(U),{value:n.value,"onUpdate:value":a[0]||(a[0]=i=>n.value=i),options:t(T),"check-strategy":"child","show-path":!0},null,8,["value","options"]),e(t(d),{onClick:x},{default:o(()=>[u("CONFIRM")]),_:1})]),_:1})):h("",!0),v.value==2?(_(),g(t(k),{key:1,title:"补充数据，添加错题("+(m.value+1)+"/"+s.value.length+")"},{default:o(()=>[e(t(d),{onClick:a[1]||(a[1]=i=>v.value=0)},{default:o(()=>[u("> BACK")]),_:1}),e(t(c),{label:"quid"},{default:o(()=>[e(t(b),{disabled:"",value:l.value.quid},null,8,["value"])]),_:1}),e(t(c),{label:"你的感想"},{default:o(()=>[e(t(b),{type:"textarea",value:l.value.insights,"onUpdate:value":a[2]||(a[2]=i=>l.value.insights=i),placeholder:"对这道题目的想法，收获的知识点，等等"},null,8,["value"])]),_:1}),e(t(c),{label:"注释"},{default:o(()=>[e(t(b),{type:"textarea",value:l.value.note,"onUpdate:value":a[3]||(a[3]=i=>l.value.note=i),placeholder:"显示在题目前的信息 e.g. 错题的小题号"},null,8,["value"])]),_:1}),e(t(c),{label:"评级"},{default:o(()=>[e(t(V),{"allow-half":"",count:10,"on-update:value":i=>{l.value.rate=i*10}},null,8,["on-update:value"]),e(t(C),null,{default:o(()=>[u(E(l.value.rate),1)]),_:1})]),_:1}),O("div",z,[e(t(d),{round:"",type:"primary",onClick:q},{default:o(()=>[u(" 收录并前往下一个 ")]),_:1}),e(t(d),{round:"",onClick:f},{default:o(()=>[u(" 下一个 ")]),_:1})]),e(t(k),{hoverable:""},{default:o(()=>[e(D,{qcontent:s.value[m.value]},null,8,["qcontent"])]),_:1}),e(t(d),{onClick:I},{default:o(()=>[u("CONFIRM")]),_:1})]),_:1},8,["title"])):h("",!0)],64))}},Jt=P(K,[["__scopeId","data-v-e7896168"]]);export{Jt as default};
