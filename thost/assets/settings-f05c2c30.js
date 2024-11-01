import{A,d as J}from"./APIHelper-89899791.js";import{s as se}from"./sweetalert.min-b990379b.js";import{c as de,a as w,b as y,i as v,h as T,j as ue,u as Q,d as X,o as Z,e as ce,g as pe,t as me}from"./light-cb8e5d18.js";import{f as fe}from"./fade-in-height-expand.cssr-52026b9f.js";import{u as ve}from"./use-merged-state-236ae148.js";import{c as $}from"./use-is-mounted-e356ec1d.js";import{w as j,N as h,b2 as F,j as z,ad as he,b8 as G,aJ as ge,R as xe,ab as V,m as B,u as t,aH as r,bc as a,F as Ce,t as g,bi as D,n as L}from"./index-6b27469d.js";import{m as be}from"./runtime-dom.esm-bundler-4f377a37.js";import{u as we}from"./use-false-until-truthy-35c1fbae.js";import{N as ye}from"./FadeInExpandTransition-65435983.js";import{c as _e}from"./Scrollbar-6ef5ad24.js";import{u as Ae,a as K,c as Ne}from"./use-memo-7138c88c.js";import{h as Y,C as ke}from"./ChevronRight-f0e435af.js";import{N as Pe}from"./Icon-0741e3aa.js";import{N as ze}from"./Spin-dbb425d2.js";import{N as ee}from"./Alert-cbf0b44f.js";import{N as M}from"./text-c9fbbb88.js";import{N as I}from"./Button-a421b774.js";import{N as Le}from"./p-d63b6958.js";import{N as Ie}from"./Form-2b0dd80a.js";import{N as U}from"./FormItem-b835bccb.js";import{N as O}from"./Input-c49f615f.js";import{N as ae}from"./Switch-e6ed24bb.js";import{N as P}from"./Card-b4e38b92.js";import{N as W}from"./Divider-7d564df1.js";import{N as Se}from"./InputGroup-0a19f812.js";import"./format-length-c9d165c6.js";import"./Warning-ad995842.js";import"./Close-df27b242.js";import"./keysOf-5d5107c5.js";import"./_commonjsHelpers-de833af9.js";import"./use-compitable-182c3d4e.js";import"./Loading-a27cceda.js";import"./light-5c2f581c.js";import"./get-9cb40f85.js";import"./use-collection-37ba12f3.js";import"./use-locale-13d55c5c.js";import"./index-975a2d8f.js";import"./light-5edeff63.js";import"./Suffix-8898b6d6.js";const Re=j({name:"ChevronLeft",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),$e=l=>{const{fontWeight:e,textColor1:u,textColor2:i,textColorDisabled:c,dividerColor:o,fontSize:d}=l;return{titleFontSize:d,titleFontWeight:e,dividerColor:o,titleTextColor:u,titleTextColorDisabled:c,fontSize:d,textColor:i,arrowColor:i,arrowColorDisabled:c,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}},je={name:"Collapse",common:de,self:$e},De=je,Ue=w("collapse","width: 100%;",[w("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[y("disabled",[v("header","cursor: not-allowed;",[v("header-main",`
 color: var(--n-title-text-color-disabled);
 `),w("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),w("collapse-item","margin-left: 32px;"),T("&:first-child","margin-top: 0;"),T("&:first-child >",[v("header","padding-top: 0;")]),y("left-arrow-placement",[v("header",[w("collapse-item-arrow","margin-right: 4px;")])]),y("right-arrow-placement",[v("header",[w("collapse-item-arrow","margin-left: 4px;")])]),v("content-wrapper",[v("content-inner","padding-top: 16px;"),fe({duration:"0.15s"})]),y("active",[v("header",[y("active",[w("collapse-item-arrow","transform: rotate(90deg);")])])]),T("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),ue("disabled",[y("trigger-area-main",[v("header",[v("header-main","cursor: pointer;"),w("collapse-item-arrow","cursor: default;")])]),y("trigger-area-arrow",[v("header",[w("collapse-item-arrow","cursor: pointer;")])]),y("trigger-area-extra",[v("header",[v("header-extra","cursor: pointer;")])])]),v("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[v("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),v("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),w("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),Ee=Object.assign(Object.assign({},X.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),te=pe("n-collapse"),qe=j({name:"Collapse",props:Ee,setup(l,{slots:e}){const{mergedClsPrefixRef:u,inlineThemeDisabled:i,mergedRtlRef:c}=Q(l),o=F(l.defaultExpandedNames),d=z(()=>l.expandedNames),n=ve(d,o),p=X("Collapse","-collapse",Ue,De,l,u);function x(C){const{"onUpdate:expandedNames":f,onUpdateExpandedNames:b,onExpandedNamesChange:k}=l;b&&$(b,C),f&&$(f,C),k&&$(k,C),o.value=C}function s(C){const{onItemHeaderClick:f}=l;f&&$(f,C)}function m(C,f,b){const{accordion:k}=l,{value:S}=n;if(k)C?(x([f]),s({name:f,expanded:!0,event:b})):(x([]),s({name:f,expanded:!1,event:b}));else if(!Array.isArray(S))x([f]),s({name:f,expanded:!0,event:b});else{const _=S.slice(),R=_.findIndex(q=>f===q);~R?(_.splice(R,1),x(_),s({name:f,expanded:!1,event:b})):(_.push(f),x(_),s({name:f,expanded:!0,event:b}))}}he(te,{props:l,mergedClsPrefixRef:u,expandedNamesRef:n,slots:e,toggleItem:m});const E=Z("Collapse",c,u),H=z(()=>{const{common:{cubicBezierEaseInOut:C},self:{titleFontWeight:f,dividerColor:b,titlePadding:k,titleTextColor:S,titleTextColorDisabled:_,textColor:R,arrowColor:q,fontSize:re,titleFontSize:oe,arrowColorDisabled:ie,itemMargin:ne}}=p.value;return{"--n-font-size":re,"--n-bezier":C,"--n-text-color":R,"--n-divider-color":b,"--n-title-padding":k,"--n-title-font-size":oe,"--n-title-text-color":S,"--n-title-text-color-disabled":_,"--n-title-font-weight":f,"--n-arrow-color":q,"--n-arrow-color-disabled":ie,"--n-item-margin":ne}}),N=i?ce("collapse",void 0,H,l):void 0;return{rtlEnabled:E,mergedTheme:p,mergedClsPrefix:u,cssVars:i?void 0:H,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){var l;return(l=this.onRender)===null||l===void 0||l.call(this),h("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),Te=j({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(l){return{onceTrue:we(G(l,"show"))}},render(){return h(ye,null,{default:()=>{const{show:l,displayDirective:e,onceTrue:u,clsPrefix:i}=this,c=e==="show"&&u,o=h("div",{class:`${i}-collapse-item__content-wrapper`},h("div",{class:`${i}-collapse-item__content-inner`},this.$slots));return c?ge(o,[[be,l]]):l?o:null}})}}),Fe={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},le=j({name:"CollapseItem",props:Fe,setup(l){const{mergedRtlRef:e}=Q(l),u=_e(),i=Ae(()=>{var s;return(s=l.name)!==null&&s!==void 0?s:u}),c=xe(te);c||me("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:o,props:d,mergedClsPrefixRef:n,slots:p}=c,x=z(()=>{const{value:s}=o;if(Array.isArray(s)){const{value:m}=i;return!~s.findIndex(E=>E===m)}else if(s){const{value:m}=i;return m!==s}return!0});return{rtlEnabled:Z("Collapse",e,n),collapseSlots:p,randomName:u,mergedClsPrefix:n,collapsed:x,triggerAreas:G(d,"triggerAreas"),mergedDisplayDirective:z(()=>{const{displayDirective:s}=l;return s||d.displayDirective}),arrowPlacement:z(()=>d.arrowPlacement),handleClick(s){let m="main";Y(s,"arrow")&&(m="arrow"),Y(s,"extra")&&(m="extra"),d.triggerAreas.includes(m)&&c&&!l.disabled&&c.toggleItem(x.value,i.value,s)}}},render(){const{collapseSlots:l,$slots:e,arrowPlacement:u,collapsed:i,mergedDisplayDirective:c,mergedClsPrefix:o,disabled:d,triggerAreas:n}=this,p=K(e.header,{collapsed:i},()=>[this.title]),x=e["header-extra"]||l["header-extra"],s=e.arrow||l.arrow;return h("div",{class:[`${o}-collapse-item`,`${o}-collapse-item--${u}-arrow-placement`,d&&`${o}-collapse-item--disabled`,!i&&`${o}-collapse-item--active`,n.map(m=>`${o}-collapse-item--trigger-area-${m}`)]},h("div",{class:[`${o}-collapse-item__header`,!i&&`${o}-collapse-item__header--active`]},h("div",{class:`${o}-collapse-item__header-main`,onClick:this.handleClick},u==="right"&&p,h("div",{class:`${o}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},K(s,{collapsed:i},()=>{var m;return[h(Pe,{clsPrefix:o},{default:(m=l.expandIcon)!==null&&m!==void 0?m:()=>this.rtlEnabled?h(Re,null):h(ke,null)})]})),u==="left"&&p),Ne(x,{collapsed:i},m=>h("div",{class:`${o}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},m))),h(Te,{clsPrefix:o,displayDirective:c,show:!i},e))}}),Ve={key:0},Be=L("br",null,null,-1),Me={key:1},Oe={style:{display:"flex","justify-content":"flex-end"}},We={__name:"settings",setup(l){const e=F({authed:!1,loading:!0,APIURL:"",AuthCode:"",loginoutLoading:!1,rememberAuthCode:!1,autologin:!1}),u={logout:()=>{e.value.loginoutLoading=!0,A.get("/zujuan-ink-be-core/auth/json/logout").then(d=>{e.value.loginoutLoading=!1,e.value.loading=!0,localStorage.removeItem("__thost_zujuanink_auth"),A.get("/zujuan-ink-be-core/auth/status").then(n=>{e.value.authed=n.auth,e.value.loading=!1})})},login:()=>{e.value.loginoutLoading=!0,A.post("/zujuan-ink-be-core/auth/json/login",{password:e.value.AuthCode}).then(d=>{e.value.loginoutLoading=!1,d.auth?(e.value.loading=!0,e.value.rememberAuthCode&&localStorage.setItem("__thost_zujuanink_auth",JSON.stringify({autologin:e.value.autologin,rememberAuthCode:e.value.rememberAuthCode,authcode:e.value.AuthCode})),A.get("/zujuan-ink-be-core/auth/status").then(n=>{e.value.authed=n.auth,e.value.loading=!1})):se({icon:"error",title:"\u9274\u6743\u5931\u8D25"})})}};e.value.APIURL=A.host,A.get("/zujuan-ink-be-core/auth/status").then(d=>{e.value.authed=d.auth,e.value.loading=!1});const i=d=>window[d],c=F({sqlcontent:"",sqlresult:null}),o={execsql:()=>{A.post("/zujuan-ink-be-core/----=-SQL/----exec-",{st:c.value.sqlcontent})}};return(d,n)=>(V(),B(Ce,null,[t(a(P),{title:"API\u9274\u6743",hoverable:""},{default:r(()=>[t(a(ze),{show:e.value.loading},{default:r(()=>[e.value.authed?(V(),B("div",Ve,[t(a(ee),{title:"\u9274\u6743\u72B6\u6001\u6709\u6548",type:"success"},{default:r(()=>[g(" \u5F53\u524D\u4F7F\u7528\u7684API\u5730\u5740\u4E3A"),t(a(M),{code:""},{default:r(()=>[g(D(e.value.APIURL),1)]),_:1}),g("(\u5171\u4EAB\u81EAthost)"),Be,g(" \u5982\u679C\u60A8\u9700\u8981\u53D6\u6D88\u81EA\u52A8\u767B\u5F55\uFF0C\u8BF7\u5148\u64A4\u9500\u9274\u6743 ")]),_:1}),t(a(I),{type:"error",dashed:"",onClick:u.logout,loading:e.value.loginoutLoading},{default:r(()=>[g(" \u64A4\u9500\u9274\u6743 ")]),_:1},8,["onClick","loading"])])):(V(),B("div",Me,[t(a(ee),{title:"\u9274\u6743\u5931\u8D25",type:"warning"},{default:r(()=>[g(" \u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u60A8\u65E0\u6CD5\u4F7F\u7528"),t(a(M),{code:""},{default:r(()=>[g("thost/zujuanink")]),_:1}),g("\u7684\u4E00\u4E9B\u529F\u80FD\u3002 ")]),_:1}),t(a(Le),null,{default:r(()=>[g("\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u8868\u5355\u91CD\u65B0\u9274\u6743")]),_:1}),t(a(Ie),{"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:r(()=>[t(a(U),{label:"API URL",path:"inputValue"},{default:r(()=>[t(a(O),{value:e.value.APIURL,"onUpdate:value":n[0]||(n[0]=p=>e.value.APIURL=p),disabled:"",placeholder:"e.g. https://api.example.com"},null,8,["value"])]),_:1}),t(a(U),{label:"Auth Code",path:"inputValue"},{default:r(()=>[t(a(O),{value:e.value.AuthCode,"onUpdate:value":n[1]||(n[1]=p=>e.value.AuthCode=p),placeholder:"e.g. authcode123456",type:"password"},null,8,["value"])]),_:1}),t(a(U),{label:"\u8BB0\u4F4F\u6211\u7684Auth Code",path:"inputValue"},{default:r(()=>[t(a(ae),{value:e.value.rememberAuthCode,"onUpdate:value":n[2]||(n[2]=p=>e.value.rememberAuthCode=p)},null,8,["value"])]),_:1}),t(a(U),{label:"\u81EA\u52A8\u767B\u5F55",path:"inputValue"},{default:r(()=>[t(a(ae),{value:e.value.autologin,"onUpdate:value":n[3]||(n[3]=p=>e.value.autologin=p),disabled:!e.value.rememberAuthCode},null,8,["value","disabled"])]),_:1}),L("div",Oe,[t(a(I),{round:"",type:"primary",onClick:u.login,loading:e.value.loginoutLoading},{default:r(()=>[g(" Authenticate ")]),_:1},8,["onClick","loading"])])]),_:1})]))]),_:1},8,["show"])]),_:1}),t(a(W)),t(a(P),{title:"\u7528\u6237\u6001",hoverable:""},{default:r(()=>[t(a(I),{ghost:"",onClick:a(J)},{default:r(()=>[g(" \u79FB\u9664\u6240\u6709Notification\uFF08\u4F8B\u5982API\u9519\u8BEF\uFF09 ")]),_:1},8,["onClick"])]),_:1}),t(a(W)),t(a(P),{title:"Notification",hoverable:""},{default:r(()=>[t(a(I),{ghost:"",onClick:a(J)},{default:r(()=>[g(" \u79FB\u9664\u6240\u6709Notification\uFF08\u4F8B\u5982API\u9519\u8BEF\uFF09 ")]),_:1},8,["onClick"])]),_:1}),t(a(W)),t(a(P),{title:"\u5F00\u53D1\u8005\u9009\u9879",hoverable:""},{default:r(()=>[t(a(P),{title:"window.*"},{default:r(()=>[t(a(qe),null,{default:r(()=>[t(a(le),{title:"window.TList",name:"1"},{default:r(()=>[L("pre",null,D(i("TList")),1)]),_:1}),t(a(le),{title:"window.bankid",name:"2"},{default:r(()=>[L("div",null,D(i("bankid")),1)]),_:1})]),_:1})]),_:1}),t(a(P),{title:"SQL Inject"},{default:r(()=>[t(a(M),null,{default:r(()=>[g("\u8FD9\u4E5F\u6B63\u662F\u7528\u6237\u4E0D\u5E94\u968F\u610F\u6CC4\u9732\u81EA\u5DF1\u7684API\u5730\u5740\u7684\u539F\u56E0\u3002\u6B63\u5982\u4F60\u6240\u89C1\uFF0C\u4EFB\u4E00\u83B7\u5F97\u4E86\u60A8\u7684API\u5730\u5740\u548CAuth Code\u7684\u7528\u6237\u5C06\u62E5\u6709\u5BF9\u60A8\u7684\u540E\u7AEF\u6570\u636E\u5E93\u7684\u7EDD\u5BF9\u63A7\u5236\u80FD\u529B\u3002")]),_:1}),t(a(Se),null,{default:r(()=>[t(a(O),{value:c.value.sqlcontent,"onUpdate:value":n[4]||(n[4]=p=>c.value.sqlcontent=p),placeholder:"Type your sql statement."},null,8,["value"]),t(a(I),{onClick:o.execsql},{default:r(()=>[g("EXEC")]),_:1},8,["onClick"])]),_:1}),L("pre",null,D(c.value.sqlresult),1)]),_:1})]),_:1})],64))}};export{We as default};