import{Z as u}from"./zujuan-api-d95ef18f.js";import l from"./subjects-8683e557.js";import{p as c}from"./polishinguptlist-19a45dd2.js";import{r as d}from"./router-goto-fdf2e3db.js";import{useRouter as f,useRoute as w}from"./vue-router-3740985a.js";import{aZ as h,a8 as N,l as _,t as i,aE as p,s as e,b7 as r,F as k,m as v}from"./runtime-core.esm-bundler-c066f4bf.js";import{N as b}from"./Alert-063ee1d4.js";import{N as T}from"./Cascader-61f8e307.js";import{a as E}from"./Button-418af94d.js";import{N as R}from"./Card-e4be8a6b.js";import"./APIHelper-4c0d0968.js";import"./light-96080c0b.js";import"./format-length-c9d165c6.js";import"./Icon-e6ca0735.js";import"./Warning-ff31488d.js";import"./Close-d6ea1a86.js";import"./Scrollbar-25ba1ebe.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./CONFIG-d506a2d4.js";import"./fade-in-height-expand.cssr-9dfe9456.js";import"./use-memo-b9add725.js";import"./FadeInExpandTransition-ff940b4d.js";import"./utils-4c4b4d7d.js";import"./Popover-c2999df7.js";import"./fade-in-scale-up.cssr-18f1ebda.js";import"./flatten-a133123b.js";import"./use-false-until-truthy-a506b738.js";import"./_baseIsEqual-9220f819.js";import"./get-9e715692.js";import"./cssr-ce5b581a.js";import"./utils-d7fa52af.js";import"./use-merged-state-89f8109f.js";import"./use-compitable-42538ef7.js";import"./next-frame-once-7035a838.js";import"./create-e19b3023.js";import"./use-locale-55e0af58.js";import"./index-975a2d8f.js";import"./Suffix-fac0a942.js";import"./Tag-c27ccbde.js";import"./attribute-2ee9e579.js";import"./ChevronRight-989c7384.js";import"./Checkbox-b5c247e6.js";import"./index-cbfaa337.js";const g=v("br",null,null,-1),ht={__name:"basket",setup(j){const s=f();w();const t=h(15),n=async()=>{u("/app-server/v1/basket/"+t.value).then(async m=>{let o=[];m.data.structure.forEach(a=>{o.push(...a.list)}),window.TList=o,window.TList=await c(t.value,window.TList),window.bankid=t.value,window.qcomponent="zjw",d(s,"/room")})};return(m,o)=>(N(),_(k,null,[i(r(b),{type:"warning"},{default:p(()=>[e(" 请您知悉，试题篮属于是与个人信息相连的敏感数据，数据取决于您保存于后端的token。请确认您在后端提供了正确的token信息。 ")]),_:1}),i(r(R),{hoverable:""},{default:p(()=>[e(" The best practice is:"),g,e(" 先在组卷网的网页端中找到所有想用zujuanink抽查的题目，将它们加入试题篮，然后再回来，选择学科，并单击ENTER. "),i(r(T),{value:t.value,"onUpdate:value":o[0]||(o[0]=a=>t.value=a),options:r(l),"check-strategy":"child","show-path":!0},null,8,["value","options"]),i(r(E),{onClick:n},{default:p(()=>[e("ENTER")]),_:1})]),_:1})],64))}};export{ht as default};
