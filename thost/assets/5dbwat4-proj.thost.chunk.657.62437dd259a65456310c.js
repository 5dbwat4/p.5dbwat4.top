(self.webpackChunk=self.webpackChunk||[]).push([[657],{1745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9601),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,"\n@media print{\n.noprint{\r\n        display: none;\n}\n}\r\n\r\n/* .labi-container{\r\n    display: block;\r\n    height: fit-content;\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n.labi-block{\r\n    display: block;\r\n    width: 100%;\r\n    border-bottom-color: black;\r\n    border-bottom-width: 2px;\r\n    position:relative;\r\n    border-bottom-style: dotted;\r\n    text-align:right;\r\n} */\nimg{\r\n    max-width: 350px;\n}\ntd{\r\n    padding:0\n}\r\n",""]);const s=o},2609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},9601:e=>{"use strict";e.exports=function(e){return e[1]}},6062:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=a[c]||0,p="".concat(c," ").concat(u);a[c]=u+1;var d=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=i(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var l=r(e,i),c=0;c<a.length;c++){var u=n(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},6793:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},1173:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},7892:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},4036:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},2464:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},7657:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>K});var r=n(7875),i=n(641),a=n(349),o=n(7972),s=n(4849),l=n(4835),c=n(8294),u=n.n(c),p=n(4435),d=n(4177),f=n.n(d);const m=(0,r.Uk)("Q"),y=(0,r.Uk)("A"),h=(0,r.Uk)("P"),v=(0,r.Uk)("开始准备打印"),g=(0,r.Uk)("将本group内所有试题标记为done"),b=(0,r._)("div",{class:"noprint"},[(0,r.kq)(' <div class="labi-container">\r\n            <div class="labi-block" v-for="rr in [1,2,3,4,5,6,7]" :key="rr" \r\n    :style="{height:1045+\'px\'}">Page # {{rr}}</div>\r\n    </div> ')],-1),w={style:{"font-size":"6.5pt","font-family":"Cambria , fangsong",margin:"0px"}},k={style:{"font-size":"6.5pt",margin:"0px","font-family":"Cambria , 仿宋"}},_=(0,r.Uk)("UUID:"),x={style:{"font-family":"'courier new'"}},S=(0,r.Uk)(" | qid:"),q={style:{"font-family":"'courier new'"}},U=(0,r.Uk)(),C={key:0},T=["innerHTML"],z={key:2},j=["src"],A={key:3},H=["src"],E=(0,r.Uk)("标记为已完成"),M={setup(e){const t=(0,o.useRoute)(),n=(0,o.useRouter)(),c=(0,i.iH)({q:!0,a:!1,p:!1}),d=(0,i.iH)(!1),M=(0,i.iH)(""),D=(0,i.iH)({});let I=[];p.b.post("/api/group/get",{id:t.params.id}).then((e=>{e.entry.split(",").forEach((e=>{D.value[e]=u()})),I=e.entry.split(","),M.value=e.title,Promise.all(e.entry.split(",").map((e=>new Promise(((t,n)=>{p.b.get("/api/qapi/get/"+e).then((t=>{D.value[e]=t})),O(e)}))))).then((()=>{}))}));const L=e=>JSON.parse(e),Z=(0,i.iH)({}),F=async e=>{console.log(e),await p.b.post("/api/qapi/doneinfo/mark",{quuid:e.id,timestamp:(new Date).getTime(),displayednote:"",note:"",rate:50,bankid:e.bankid})},P=async()=>{Promise.all(Object.entries(D.value).map((e=>F(e[1])))).then((e=>{f()("ok.")}))},O=async e=>{Z.value[e]=await p.b.get("/api/qapi/doneinfo/getbyquuid/"+e)};return(e,o)=>{const u=(0,r.up)("n-p");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)((0,i.SU)(s.Z),{class:"noprint",onClick:o[0]||(o[0]=e=>c.value.q=!c.value.q)},{default:(0,r.w5)((()=>[m])),_:1}),(0,r.Wm)((0,i.SU)(s.Z),{class:"noprint",onClick:o[1]||(o[1]=e=>c.value.a=!c.value.a)},{default:(0,r.w5)((()=>[y])),_:1}),(0,r.Wm)((0,i.SU)(s.Z),{class:"noprint",onClick:o[2]||(o[2]=e=>c.value.p=!c.value.p)},{default:(0,r.w5)((()=>[h])),_:1}),(0,r.Wm)((0,i.SU)(s.Z),{onClick:o[3]||(o[3]=e=>(0,i.SU)(n).push("/grouping/preexport-1/"+(0,i.SU)(t).params.id))},{default:(0,r.w5)((()=>[v])),_:1}),(0,r.Wm)((0,i.SU)(s.Z),{onClick:P},{default:(0,r.w5)((()=>[g])),_:1}),(0,r._)("div",{style:(0,a.j5)({width:"18.76cm","line-height":"normal"}),id:"oonom"},[b,(0,r._)("div",{id:"corehtml",style:(0,a.j5)({width:"18.76cm",columns:e.printhelper_columns,"line-height":"normal"})},[(0,r._)("p",w,"Generated by thost | Group UUID: "+(0,a.zw)(e.$route.params.id)+" | Title: "+(0,a.zw)(M.value),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((p=D.value,Object.entries(p).map((e=>e[1]))),(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id},[(0,r._)("p",k,[_,(0,r._)("span",x,(0,a.zw)(t.id),1),S,(0,r._)("span",q,(0,a.zw)(t.qid),1),U,c.value.q?((0,r.wg)(),(0,r.iD)("span",C,"| Info: "+(0,a.zw)(L(t.extra).info)+" | Origin: "+(0,a.zw)(L(t.extra).from),1)):(0,r.kq)("v-if",!0)]),c.value.q?((0,r.wg)(),(0,r.iD)("div",{key:0,innerHTML:(0,i.SU)(l.a)(t.q,{ret2:d.value}),style:(0,a.j5)({fontSize:"9.5pt",fontFamily:e.__Fontfamily})},null,12,T)):(0,r.kq)("v-if",!0),c.value.q?((0,r.wg)(),(0,r.iD)("div",{key:1,style:(0,a.j5)({display:"block",height:(t._extb_height||0)+"px"})},null,4)):(0,r.kq)("v-if",!0),c.value.a?((0,r.wg)(),(0,r.iD)("div",z,[(0,r._)("img",{src:"/oss-storage/"+t.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[0]+".png"},null,8,j)])):(0,r.kq)("v-if",!0),c.value.p?((0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("img",{src:"/oss-storage/"+t.a.replace("<answerparser>","").replace("</answerparser>","").split("|")[1]+".png"},null,8,H)])):(0,r.kq)("v-if",!0),(0,r.Wm)((0,i.SU)(s.Z),{onClick:e=>F(t)},{default:(0,r.w5)((()=>[E])),_:2},1032,["onClick"]),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Uk)("完成状态："+(0,a.zw)(Z.value[t.id]),1)])),_:2},1024)])))),128))],4)],4)],64);var p}}};var D=n(6062),I=n.n(D),L=n(4036),Z=n.n(L),F=n(6793),P=n.n(F),O=n(7892),W=n.n(O),N=n(1173),$=n.n(N),R=n(2464),J=n.n(R),G=n(1745),Y={};Y.styleTagTransform=J(),Y.setAttributes=W(),Y.insert=P().bind(null,"head"),Y.domAPI=Z(),Y.insertStyleElement=$(),I()(G.Z,Y),G.Z&&G.Z.locals&&G.Z.locals;const K=M},4435:(e,t,n)=>{"use strict";n.d(t,{b:()=>r});const r={get:async e=>await fetch(localStorage.getItem("__5dbwat_proj__thost_apihost")+e).then((e=>e.json())),post:async(e,t)=>await fetch(localStorage.getItem("__5dbwat_proj__thost_apihost")+e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}},8294:e=>{e.exports={id:"",qid:"",q:"<p>Loading ... </p>",extra:"{}"}},4835:(e,t,n)=>{"use strict";function r(e,t){const n=document.createElement("div");return e=e.replaceAll("【题文】",""),n.innerHTML=e,n.querySelectorAll("img").forEach((e=>{if(e.src.includes("/formula/")&&(e.src=e.src.replace(".png",".svg"),e.style.width=.8*e.width+"px"),e.src.includes("/dksih/")){let t=/\?resizew=(\d*)/.exec(e.src);t&&0!=t.length&&(e.style.width=t[1]+"px",e.src=e.src.replace(/\?resizew=(\d*)/,""),e.setAttribute("width",t[1]),e.setAttribute("height",""))}})),n.querySelectorAll("p").forEach((e=>{e.style.fontFamily||(e.style.fontFamily="Cambria , 宋体"),e.style.fontSize||(e.style.fontSize="9.5pt"),e.style.margin="0px"})),n.querySelectorAll("table[name=optionsTable]").forEach((e=>{if(4==e.querySelectorAll("td").length){let t=[],n=1;e.querySelectorAll("td").forEach((e=>{t.push(e.outerHTML)})),e.addEventListener("click",(()=>{console.log("click");const{ctn:r,next_lns:i}=function(e,t){return 1==t?{ctn:"<tbody><tr>"+e.join("")+"</tr></tbody>",next_lns:2}:2==t?{ctn:`<tbody><tr>${e[0]}${e[1]}</tr><tr>${e[2]}${e[3]}</tr></tbody>`,next_lns:4}:4==t?{ctn:"<tbody><tr>"+e.join("</tr><tr>")+"</tr></tbody>",next_lns:1}:void 0}(t,n);e.innerHTML=r,n=i}))}})),n.querySelectorAll("table[name=optionsTable] td").forEach((e=>{e.style.fontFamily||(e.style.fontFamily="Cambria , 宋体"),e.style.fontSize||(e.style.fontSize="9.5pt"),e.style.margin="0px"})),n.style.fontFamily="Cambria , 宋体",n.innerHTML}n.d(t,{a:()=>r})}}]);