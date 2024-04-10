import{Z as k}from"./zujuan-api-e7336a15.js";import{useRouter as g,useRoute as w}from"./vue-router-ee92e3b2.js";import{A as n}from"./APIHelper-c6c5541a.js";import{N as _}from"./Cascader-e2e09c75.js";import{aZ as o,a8 as c,l as y,t as r,aE as p,b7 as t,F as E,s as u,j as N,k as R,m as T}from"./index-c2ed52a5.js";import{N as j}from"./Alert-18df1bd2.js";import{N as C}from"./Input-b50999c9.js";import{N as d}from"./Button-591cb8c7.js";import{N as x}from"./Card-bc241d1a.js";import"./light-3c431b54.js";import"./format-length-c9d165c6.js";import"./Icon-9d083982.js";import"./Warning-fc401418.js";import"./Close-4e65a8ab.js";import"./Scrollbar-5b7370f2.js";import"./runtime-dom.esm-bundler-51aad541.js";import"./keysOf-5d5107c5.js";import"./utils-ae16cb7a.js";import"./Popover-4ea150e0.js";import"./index-80752888.js";import"./flatten-30e3eebb.js";import"./use-false-until-truthy-96bf4c79.js";import"./get-8a3b42fc.js";import"./use-memo-13475312.js";import"./cssr-b950d06d.js";import"./utils-20c36e7e.js";import"./use-is-mounted-912be460.js";import"./use-merged-state-5c1c3246.js";import"./use-compitable-c3112252.js";import"./next-frame-once-7035a838.js";import"./fade-in-scale-up.cssr-6d358681.js";import"./create-2c70b56a.js";import"./Loading-b36f50c8.js";import"./ChevronRight-473b2df6.js";import"./use-locale-ca0d0990.js";import"./index-975a2d8f.js";import"./Suffix-26bafbe6.js";import"./Tag-9a87d369.js";import"./Checkbox-7001ae57.js";import"./index-cbfaa337.js";import"./fade-in-height-expand.cssr-0178db3d.js";import"./FadeInExpandTransition-3bfdffc9.js";import"./light-951b0264.js";const A=[{value:-3,label:"\u9AD8\u4E2D",children:[{value:10,label:"\u8BED\u6587"},{value:11,label:"\u6570\u5B66"},{value:12,label:"\u82F1\u8BED"},{value:13,label:"\u7269\u7406"},{value:14,label:"\u5316\u5B66"},{value:15,label:"\u751F\u7269"},{value:16,label:"\u653F\u6CBB"},{value:17,label:"\u5386\u53F2"},{value:18,label:"\u5730\u7406"},{value:33,label:"\u65E5\u8BED"},{value:27,label:"\u4FE1\u606F\u6280\u672F"},{value:28,label:"\u901A\u7528\u6280\u672F"}]},{value:-2,label:"\u521D\u4E2D",children:[{value:1,label:"\u8BED\u6587",selected:!0},{value:2,label:"\u6570\u5B66"},{value:3,label:"\u82F1\u8BED"},{value:4,label:"\u7269\u7406"},{value:5,label:"\u5316\u5B66"},{value:6,label:"\u751F\u7269"},{value:7,label:"\u9053\u5FB7\u4E0E\u6CD5\u6CBB"},{value:8,label:"\u5386\u53F2"},{value:9,label:"\u5730\u7406"},{value:26,label:"\u79D1\u5B66"},{value:29,label:"\u4FE1\u606F\u6280\u672F"},{value:30,label:"\u5386\u53F2\u4E0E\u793E\u4F1A"}]},{value:1,label:"\u5C0F\u5B66",children:[{value:24,label:"\u8BED\u6587",selected:!0},{value:23,label:"\u6570\u5B66"},{value:25,label:"\u82F1\u8BED"},{value:31,label:"\u9053\u5FB7\u4E0E\u6CD5\u6CBB"},{value:32,label:"\u79D1\u5B66"}]}],U=T("br",null,null,-1),V={__name:"from_zujuan_basket",setup(Z){g(),w();const i=o(15),m=o("");o(!1);const s=o(!1),b=o(""),f=async()=>{k("/app-server/v1/basket/"+i.value).then(async v=>{let l=[];v.data.structure.forEach(e=>{l.push(...e.list)}),console.log(l);let a=[];for(let e=0;e<l.length;e++)await n.get("/api/data/add/"+i.value+"/"+l[e].id).then(h=>{a.push(h.id)});await n.post("/api/group/new",{entry:a.join(","),timestamp:new Date().getTime(),title:m.value,desc:""}).then(e=>{s.value=!0,b.value=e.id})})};return(v,l)=>(c(),y(E,null,[r(t(j),{type:"warning"},{default:p(()=>[u(" \u8BF7\u60A8\u77E5\u6089\uFF0C\u8BD5\u9898\u7BEE\u5C5E\u4E8E\u662F\u4E0E\u4E2A\u4EBA\u4FE1\u606F\u76F8\u8FDE\u7684\u654F\u611F\u6570\u636E\uFF0C\u6570\u636E\u53D6\u51B3\u4E8E\u60A8\u4FDD\u5B58\u4E8E\u540E\u7AEF\u7684token\u3002\u8BF7\u786E\u8BA4\u60A8\u5728\u540E\u7AEF\u63D0\u4F9B\u4E86\u6B63\u786E\u7684token\u4FE1\u606F\u3002 ")]),_:1}),r(t(x),{hoverable:""},{default:p(()=>[u(" The best practice is:"),U,u(" \u5148\u5728\u7EC4\u5377\u7F51\u7684\u7F51\u9875\u7AEF\u4E2D\u627E\u5230\u6240\u6709\u60F3\u6536\u5F55\u7684\u9898\u76EE\uFF0C\u5C06\u5B83\u4EEC\u52A0\u5165\u8BD5\u9898\u7BEE\uFF0C\u7136\u540E\u518D\u56DE\u6765\uFF0C\u9009\u62E9\u5B66\u79D1\uFF0C\u5E76\u5355\u51FBENTER. "),r(t(_),{value:i.value,"onUpdate:value":l[0]||(l[0]=a=>i.value=a),options:t(A),"check-strategy":"child","show-path":!0},null,8,["value","options"]),r(t(C),{value:m.value,"onUpdate:value":l[1]||(l[1]=a=>m.value=a)},null,8,["value"]),r(t(d),{onClick:f},{default:p(()=>[u("ENTER")]),_:1}),s.value?(c(),N(t(d),{key:0,onClick:l[2]||(l[2]=a=>v.$router.push("/group/"+b.value))},{default:p(()=>[u("View")]),_:1})):R("",!0)]),_:1})],64))}};export{V as default};