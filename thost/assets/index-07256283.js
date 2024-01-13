import{useRoute as de,useRouter as fe}from"./vue-router-3740985a.js";import{n as pe}from"./toScreenDisplay-d37bc74f.js";import{q as me}from"./define_basic_qtypes-ddf25d69.js";import{A as H}from"./APIHelper-4c0d0968.js";import{s as ve}from"./sweetalert.min-37390c4f.js";import{_ as he}from"./_plugin-vue_export-helper-c27b6911.js";import{N as ge}from"./Checkbox-b5c247e6.js";import{u as be}from"./use-memo-b9add725.js";import{u as ke,a as xe}from"./use-collection-26725bb7.js";import{g as ye}from"./attribute-2ee9e579.js";import{d as S,l as q,u as oe,n as _e,a as Ce,o as Te,p as Q,e as L,f as V,b as we,g as ne,h as Re}from"./light-96080c0b.js";import{v as W,aZ as h,i as z,a2 as re,_ as ie,J as E,O as Be,b3 as le,az as ae,aa as Ae,X as $e,a8 as T,l as A,t as b,aE as k,s as y,b7 as a,m as N,F as U,ae as Y,j as K,bd as I,k as j,bc as Se,ab as Ne,a9 as Ee}from"./runtime-core.esm-bundler-c066f4bf.js";import{k as se,N as Pe,a as Z}from"./Scrollbar-25ba1ebe.js";import{b as Oe}from"./next-frame-once-7035a838.js";import{t as He}from"./throttle-d162c104.js";import{o as ze}from"./cssr-ce5b581a.js";import{N as ee}from"./Image-8f0d7033.js";import{N as je}from"./ImageGroup-d2b836f6.js";import{a as $}from"./Button-418af94d.js";import{N as te}from"./Spin-28bd4bca.js";import{N as Ie}from"./text-f4d25175.js";import"./format-length-c9d165c6.js";import"./Icon-e6ca0735.js";import"./Warning-ff31488d.js";import"./Close-d6ea1a86.js";import"./runtime-dom.esm-bundler-caa8590e.js";import"./_commonjsHelpers-042e6b4d.js";import"./use-merged-state-89f8109f.js";import"./FadeInExpandTransition-ff940b4d.js";import"./utils-d7fa52af.js";import"./fade-in-scale-up.cssr-18f1ebda.js";import"./flatten-a133123b.js";import"./use-false-until-truthy-a506b738.js";import"./Tooltip-bd1c8576.js";import"./Popover-c2999df7.js";import"./_baseIsEqual-9220f819.js";import"./get-9e715692.js";import"./use-compitable-42538ef7.js";import"./use-locale-55e0af58.js";import"./index-975a2d8f.js";import"./light-169f895b.js";function ce(t){return typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t}function qe(t){return t instanceof HTMLElement?t.scrollTop:window.scrollY}function Le(t){return t instanceof HTMLElement?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Fe=S("affix",[q("affixed",{position:"fixed"},[q("absolute-positioned",{position:"absolute"})])]),J={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},Me=se(J),De=W({name:"Affix",props:J,setup(t){const{mergedClsPrefixRef:s}=oe(t);_e("-affix",Fe,s);let l=null;const n=h(!1),c=h(!1),p=h(null),g=h(null),u=z(()=>c.value||n.value),x=z(()=>{var o,e;return(e=(o=t.triggerTop)!==null&&o!==void 0?o:t.offsetTop)!==null&&e!==void 0?e:t.top}),_=z(()=>{var o,e;return(e=(o=t.top)!==null&&o!==void 0?o:t.triggerTop)!==null&&e!==void 0?e:t.offsetTop}),P=z(()=>{var o,e;return(e=(o=t.bottom)!==null&&o!==void 0?o:t.triggerBottom)!==null&&e!==void 0?e:t.offsetBottom}),w=z(()=>{var o,e;return(e=(o=t.triggerBottom)!==null&&o!==void 0?o:t.offsetBottom)!==null&&e!==void 0?e:t.bottom}),B=h(null),O=()=>{const{target:o,listenTo:e}=t;o?l=o():e?l=ce(e):l=document,l&&(l.addEventListener("scroll",d),d())};function d(){Oe(m)}function m(){const{value:o}=B;if(!l||!o)return;const e=qe(l);if(u.value){e<g.value&&(n.value=!1,g.value=null),e>p.value&&(c.value=!1,p.value=null);return}const r=Le(l),i=o.getBoundingClientRect(),C=i.top-r.top,R=r.bottom-i.bottom,v=x.value,f=w.value;v!==void 0&&C<=v?(n.value=!0,g.value=e-(v-C)):(n.value=!1,g.value=null),f!==void 0&&R<=f?(c.value=!0,p.value=e+f-R):(c.value=!1,p.value=null)}return re(()=>{O()}),ie(()=>{l&&l.removeEventListener("scroll",d)}),{selfRef:B,affixed:u,mergedClsPrefix:s,mergedstyle:z(()=>{const o={};return n.value&&x.value!==void 0&&_.value!==void 0&&(o.top=`${_.value}px`),c.value&&w.value!==void 0&&P.value!==void 0&&(o.bottom=`${P.value}px`),o})}},render(){const{mergedClsPrefix:t}=this;return E("div",{ref:"selfRef",class:[`${t}-affix`,{[`${t}-affix--affixed`]:this.affixed,[`${t}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),We={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},Ge=t=>{const{borderRadius:s,railColor:l,primaryColor:n,primaryColorHover:c,primaryColorPressed:p,textColor2:g}=t;return Object.assign(Object.assign({},We),{borderRadius:s,railColor:l,railColorActive:n,linkColor:Te(n,{alpha:.15}),linkTextColor:g,linkTextColorHover:c,linkTextColorPressed:p,linkTextColorActive:n})},Ve={name:"Anchor",common:Ce,self:Ge},Ue=Ve,Ke=S("anchor",`
 position: relative;
`,[Q("block",`
 padding-left: var(--n-rail-width);
 `,[S("anchor-link",[L("+, >",[S("anchor-link",`
 margin-top: .5em;
 `)])]),S("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),Q("show-rail",[L(">",[S("anchor-link","padding-left: 0;")])])]),q("block",[S("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[q("active",`
 background-color: var(--n-link-color);
 `)])]),S("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),S("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[V("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[q("active",{backgroundColor:"var(--n-rail-color-active)"})])]),S("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[q("active",[L(">",[V("title",`
 color: var(--n-link-text-color-active);
 `)])]),V("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[L("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),L("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),D=we("n-anchor"),Je={title:String,href:String},Xe=W({name:"AnchorLink",props:Je,setup(t,{slots:s}){const l=h(null),n=Be(D),c=le(t,"href"),p=be(()=>c.value&&c.value===n.activeHref.value);ke(D,"collectedLinkHrefs",c),xe(D,"titleEls",()=>l.value),ae(p,u=>{u&&l.value&&n.updateBarPosition(l.value)});function g(){t.href!==void 0&&n.setActiveHref(t.href)}return()=>{var u;const{value:x}=n.mergedClsPrefix;return E("div",{class:[`${x}-anchor-link`,p.value&&`${x}-anchor-link--active`]},E("a",{ref:l,class:[`${x}-anchor-link__title`],href:t.href,title:ye(t.title),onClick:g},t.title),(u=s.default)===null||u===void 0?void 0:u.call(s))}}});function Qe(t,s){const{top:l,height:n}=t.getBoundingClientRect(),c=s instanceof HTMLElement?s.getBoundingClientRect().top:0;return{top:l-c,height:n}}const X={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},Ye=se(X),Ze=W({name:"BaseAnchor",props:Object.assign(Object.assign({},X),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const s=[],l=[],n=h(null),c=h(null),p=h(null),g=h(null),u=z(()=>t.type==="block"),x=z(()=>!u.value&&t.showRail);function _(){const{value:d}=p,{value:m}=c;d&&(d.style.transition="none"),m&&(m.style.transition="none"),l&&l.forEach(o=>{o.style.transition="none"}),$e(()=>{const{value:o}=p,{value:e}=c;o&&(o.offsetWidth,o.style.transition=""),e&&(e.offsetWidth,e.style.transition=""),l&&l.forEach(r=>{r.offsetWidth,r.style.transition=""})})}function P(d,m=!0){const{value:o}=p,{value:e}=c,{value:r}=g;if(!r||!o)return;m||(o.style.transition="none",e&&(e.style.transition="none"));const{offsetHeight:i,offsetWidth:C}=d,{top:R,left:v}=d.getBoundingClientRect(),{top:f,left:F}=r.getBoundingClientRect(),M=R-f,G=v-F;o.style.top=`${M}px`,o.style.height=`${i}px`,e&&(e.style.top=`${M}px`,e.style.height=`${i}px`,e.style.maxWidth=`${C+G}px`),o.offsetHeight,e&&e.offsetHeight,m||(o.style.transition="",e&&(e.style.transition=""))}function w(d,m=!0){const o=/^#([^#]+)$/.exec(d);if(!o)return;const e=document.getElementById(o[1]);e&&(n.value=d,e.scrollIntoView(),m||_(),B())}const B=He(()=>{O(!0)},128);function O(d=!0){var m;const o=[],e=ce((m=t.offsetTarget)!==null&&m!==void 0?m:document);s.forEach(v=>{const f=/#([^#]+)$/.exec(v);if(!f)return;const F=document.getElementById(f[1]);if(F&&e){const{top:M,height:G}=Qe(F,e);o.push({top:M,height:G,href:v})}}),o.sort((v,f)=>v.top>f.top?1:(v.top===f.top&&v.height<f.height,-1));const r=n.value,{bound:i,ignoreGap:C}=t,R=o.reduce((v,f)=>f.top+f.height<0?C?f:v:f.top<=i?v===null?f:f.top===v.top?f.href===r?f:v:f.top>v.top?f:v:v,null);d||_(),R?n.value=R.href:n.value=null}return Ae(D,{activeHref:n,mergedClsPrefix:le(t,"mergedClsPrefix"),updateBarPosition:P,setActiveHref:w,collectedLinkHrefs:s,titleEls:l}),re(()=>{document.addEventListener("scroll",B,!0),w(window.location.hash),O(!1)}),ze(()=>{w(window.location.hash),O(!1)}),ie(()=>{document.removeEventListener("scroll",B,!0)}),ae(n,d=>{if(d===null){const{value:m}=c;m&&!u.value&&(m.style.maxWidth="0")}}),{selfRef:g,barRef:p,slotRef:c,setActiveHref:w,activeHref:n,isBlockType:u,mergedShowRail:x}},render(){var t;const{mergedClsPrefix:s,mergedShowRail:l,isBlockType:n,$slots:c}=this,p=E("div",{class:[`${s}-anchor`,n&&`${s}-anchor--block`,l&&`${s}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?E("div",{ref:"slotRef",class:`${s}-anchor-link-background`}):null,l?E("div",{class:`${s}-anchor-rail`},E("div",{ref:"barRef",class:[`${s}-anchor-rail__bar`,this.activeHref!==null&&`${s}-anchor-rail__bar--active`]})):null,(t=c.default)===null||t===void 0?void 0:t.call(c));return this.internalScrollable?E(Pe,null,{default:()=>p}):p}}),et=Object.assign(Object.assign(Object.assign(Object.assign({},ne.props),{affix:Boolean}),J),X),tt=W({name:"Anchor",props:et,setup(t,{slots:s}){const{mergedClsPrefixRef:l,inlineThemeDisabled:n}=oe(t),c=ne("Anchor","-anchor",Ke,Ue,t,l),p=h(null),g=z(()=>{const{self:{railColor:x,linkColor:_,railColorActive:P,linkTextColor:w,linkTextColorHover:B,linkTextColorPressed:O,linkTextColorActive:d,linkFontSize:m,railWidth:o,linkPadding:e,borderRadius:r},common:{cubicBezierEaseInOut:i}}=c.value;return{"--n-link-border-radius":r,"--n-link-color":_,"--n-link-font-size":m,"--n-link-text-color":w,"--n-link-text-color-hover":B,"--n-link-text-color-active":d,"--n-link-text-color-pressed":O,"--n-link-padding":e,"--n-bezier":i,"--n-rail-color":x,"--n-rail-color-active":P,"--n-rail-width":o}}),u=n?Re("anchor",void 0,g,t):void 0;return{scrollTo(x){var _;(_=p.value)===null||_===void 0||_.setActiveHref(x)},renderAnchor:()=>(u?.onRender(),E(Ze,Object.assign({ref:p,style:n?void 0:g.value,class:u?.themeClass.value},Z(t,Ye),{mergedClsPrefix:l.value}),s))}},render(){return this.affix?E(De,Object.assign({},Z(this,Me)),{default:this.renderAnchor}):this.renderAnchor()}});const ue=t=>(Ne("data-v-a975e3a7"),t=t(),Ee(),t),ot={style:{width:"18.76cm","line-height":"normal"},id:"oonom"},nt=ue(()=>N("div",{class:"noprint"},null,-1)),rt={id:"corehtml",style:{width:"18.76cm",columns:1,"line-height":"normal"}},it={style:{"font-size":"9.5pt","font-family":"Cambria , fangsong",margin:"0px"}},lt=["id"],at={style:{"font-size":"9.5pt",margin:"0px","font-family":"Cambria , 仿宋"}},st={style:{"font-family":"'courier new'"}},ct={style:{"font-family":"'courier new'"}},ut={key:0},dt=["innerHTML"],ft={key:2},pt=["src"],mt={key:3},vt=["src"],ht={key:4},gt=ue(()=>N("div",null,null,-1)),bt={__name:"index",setup(t){const s=de(),l=fe(),n=h({q:!0,a:!1,p:!1}),c=h({}),p=h(!1),g=h(""),u=h({});H.post("/api/group/get",{id:s.params.id}).then(e=>{e.entry.split(",").forEach(r=>{u.value[r]=me}),e.entry.split(","),g.value=e.title,Promise.all(e.entry.split(",").map(r=>new Promise((i,C)=>{H.get("/api/qapi/get/"+r).then(R=>{u.value[r]=R}),O(r)}))).then(()=>{})});const x=e=>JSON.parse(e),_=h({}),P=e=>Object.entries(e).map(r=>r[1]),w=async e=>{console.log(e),await H.post("/api/qapi/doneinfo/mark",{quuid:e.id,timestamp:new Date().getTime(),displayednote:"",note:"",rate:50,bankid:e.bankid})},B=async()=>{Promise.all(Object.entries(u.value).map(e=>w(e[1]))).then(e=>{ve("ok.")})},O=async e=>{_.value[e]=await H.get("/api/qapi/doneinfo/getbyquuid/"+e)},d=h(!1),m=h({}),o=e=>{console.log(e),d.value=e,d.value&&Object.entries(u.value).forEach(r=>{console.log(r),H.get("/api/xkw-helper/get_more_detail/600/"+r[1].bankid+"/"+r[1].qid).then(i=>{m.value[r[1].id]={a:H.host+"/api/xkw-helper/route-pic?purl="+btoa(i.data.answerImg.replace("@2","@3").replace("c2","c1")),p:H.host+"/api/xkw-helper/route-pic?purl="+btoa(i.data.parseImg.replace("@2","@3").replace("c2","c1"))}})})};return(e,r)=>(T(),A(U,null,[b(a($),{class:"noprint",onClick:r[0]||(r[0]=i=>n.value.q=!n.value.q)},{default:k(()=>[y("Q")]),_:1}),b(a($),{class:"noprint",onClick:r[1]||(r[1]=i=>n.value.a=!n.value.a)},{default:k(()=>[y("A")]),_:1}),b(a($),{class:"noprint",onClick:r[2]||(r[2]=i=>n.value.p=!n.value.p)},{default:k(()=>[y("P")]),_:1}),b(a($),{class:"noprint",onClick:r[3]||(r[3]=i=>a(l).push("/grouping/preexport-1/"+a(s).params.id))},{default:k(()=>[y("开始准备打印")]),_:1}),b(a($),{class:"noprint",onClick:r[4]||(r[4]=i=>a(l).push("/grouping/preexport-1/"+a(s).params.id+"/word_tailored_version"))},{default:k(()=>[y("开始准备优化并嵌入Word")]),_:1}),b(a($),{class:"noprint",onClick:r[5]||(r[5]=i=>a(l).push("/export/"+a(s).params.id+"/a"))},{default:k(()=>[y("打印答案")]),_:1}),b(a($),{class:"noprint",onClick:r[6]||(r[6]=i=>a(l).push("/grouping/rename/"+a(s).params.id))},{default:k(()=>[y("修改命名")]),_:1}),b(a($),{class:"noprint",onClick:B},{default:k(()=>[y("将本group内所有试题标记为done")]),_:1}),b(a(ge),{class:"noprint",checked:d.value,"onUpdate:checked":[r[7]||(r[7]=i=>d.value=i),o]},{default:k(()=>[y(" 直接从组卷网获取答案解析数据而非从oss缓存 ")]),_:1},8,["checked"]),N("div",ot,[nt,b(a(tt),{class:"noprint","show-rail":!0,"show-background":!0,style:{position:"fixed",right:"298px","overflow-y":"scroll"}},{default:k(()=>[(T(!0),A(U,null,Y(P(u.value),(i,C)=>(T(),K(a(Xe),{title:"第"+(C+1)+"题",href:"#"+(C+1)},null,8,["title","href"]))),256))]),_:1}),b(a(je),null,{default:k(()=>[N("div",rt,[N("p",it,"Generated by thost | Group UUID: "+I(e.$route.params.id)+" | Title: "+I(g.value),1),(T(!0),A(U,null,Y(P(u.value),(i,C)=>(T(),A("div",{key:i.id,id:C+1},[N("p",at,[y("UUID:"),N("span",st,I(i.id),1),y(" | qid:"),N("span",ct,I(i.qid),1),y(),n.value.q?(T(),A("span",ut,"| Info: "+I(x(i.extra).info)+" | Origin: "+I(x(i.extra).from),1)):j("",!0)]),n.value.q?(T(),A("div",{key:0,innerHTML:a(pe)(i.q,{ret2:p.value,tindex:C+1}),style:{fontSize:"12pt",fontFamily:"Cambria"}},null,8,dt)):j("",!0),n.value.q?(T(),A("div",{key:1,style:Se({display:"block",height:(i._extb_height||0)+"px"})},null,4)):j("",!0),n.value.a&&!d.value?(T(),A("div",ft,[N("img",{src:a(H).host+"/oss-storage/"+i.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[0]+".png"},null,8,pt)])):j("",!0),n.value.p&&!d.value?(T(),A("div",mt,[N("img",{src:a(H).host+"/oss-storage/"+i.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[1]+".png"},null,8,vt)])):j("",!0),d.value?(T(),A("div",ht,[n.value.a||c.value[i.id]?(T(),K(a(ee),{key:0,lazy:"",src:(m.value[i.id]||{a:""}).a,width:700},{placeholder:k(()=>[b(a(te))]),_:2},1032,["src"])):j("",!0),n.value.a||c.value[i.id]?(T(),K(a(ee),{key:1,lazy:"",src:(m.value[i.id]||{p:""}).p,width:700},{placeholder:k(()=>[b(a(te))]),_:2},1032,["src"])):j("",!0),gt])):j("",!0),b(a($),{class:"noprint",text:"",onClick:R=>w(i)},{default:k(()=>[y("标记为已完成")]),_:2},1032,["onClick"]),b(a(Ie),{class:"noprint"},{default:k(()=>[y("完成状态："+I(_.value[i.id]),1)]),_:2},1024),b(a($),{class:"noprint",onClick:R=>c.value[i.id]=!0},{default:k(()=>[y("显示本题答案")]),_:2},1032,["onClick"])],8,lt))),128))])]),_:1})])],64))}},lo=he(bt,[["__scopeId","data-v-a975e3a7"]]);export{lo as default};