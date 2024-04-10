import{x as M,c as P,h as j,a as q,b as x,i as E,u as I,d as w,e as V}from"./light-3c431b54.js";import{O as D,i as m,v as J,aZ as U,a2 as Z,az as $,b3 as C,J as _}from"./index-c2ed52a5.js";function y(o,e){const t=D(M,null);return m(()=>o.hljs||(t==null?void 0:t.mergedHljsRef.value))}const A=o=>{const{textColor2:e,fontSize:t,fontWeightStrong:h,textColor3:a}=o;return{textColor:e,fontSize:t,fontWeightStrong:h,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:a}},G={name:"Code",common:P,self:A},z=G,K=j([q("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[x("show-line-numbers",`
 display: flex;
 `),E("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),x("word-wrap",[j("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),j("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),j("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:o})=>{const e=`${o.bPrefix}code`;return[`${e} .hljs-comment,
 ${e} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${e} .hljs-doctag,
 ${e} .hljs-keyword,
 ${e} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${e} .hljs-section,
 ${e} .hljs-name,
 ${e} .hljs-selector-tag,
 ${e} .hljs-deletion,
 ${e} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${e} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${e} .hljs-string,
 ${e} .hljs-regexp,
 ${e} .hljs-addition,
 ${e} .hljs-attribute,
 ${e} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${e} .hljs-built_in,
 ${e} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${e} .hljs-attr,
 ${e} .hljs-variable,
 ${e} .hljs-template-variable,
 ${e} .hljs-type,
 ${e} .hljs-selector-class,
 ${e} .hljs-selector-attr,
 ${e} .hljs-selector-pseudo,
 ${e} .hljs-number {
 color: var(--n-hue-6);
 }`,`${e} .hljs-symbol,
 ${e} .hljs-bullet,
 ${e} .hljs-link,
 ${e} .hljs-meta,
 ${e} .hljs-selector-id,
 ${e} .hljs-title {
 color: var(--n-hue-2);
 }`,`${e} .hljs-emphasis {
 font-style: italic;
 }`,`${e} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${e} .hljs-link {
 text-decoration: underline;
 }`]}]),Q=Object.assign(Object.assign({},w.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),X=J({name:"Code",props:Q,setup(o,{slots:e}){const{internalNoHighlight:t}=o,{mergedClsPrefixRef:h,inlineThemeDisabled:a}=I(),c=U(null),p=t?{value:void 0}:y(o),S=(n,r,l)=>{const{value:s}=p;return!s||!(n&&s.getLanguage(n))?null:s.highlight(l?r.trim():r,{language:n}).value},N=m(()=>o.inline||o.wordWrap?!1:o.showLineNumbers),f=()=>{if(e.default)return;const{value:n}=c;if(!n)return;const{language:r}=o,l=o.uri?window.decodeURIComponent(o.code):o.code;if(r){const i=S(r,l,o.trim);if(i!==null){if(o.inline)n.innerHTML=i;else{const g=n.querySelector(".__code__");g&&n.removeChild(g);const d=document.createElement("pre");d.className="__code__",d.innerHTML=i,n.appendChild(d)}return}}if(o.inline){n.textContent=l;return}const s=n.querySelector(".__code__");if(s)s.textContent=l;else{const i=document.createElement("pre");i.className="__code__",i.textContent=l,n.innerHTML="",n.appendChild(i)}};Z(f),$(C(o,"language"),f),$(C(o,"code"),f),t||$(p,f);const L=w("Code","-code",K,z,o,h),b=m(()=>{const{common:{cubicBezierEaseInOut:n,fontFamilyMono:r},self:{textColor:l,fontSize:s,fontWeightStrong:i,lineNumberTextColor:g,"mono-3":d,"hue-1":R,"hue-2":B,"hue-3":k,"hue-4":H,"hue-5":T,"hue-5-2":W,"hue-6":O,"hue-6-2":F}}=L.value,{internalFontSize:v}=o;return{"--n-font-size":v?`${v}px`:s,"--n-font-family":r,"--n-font-weight-strong":i,"--n-bezier":n,"--n-text-color":l,"--n-mono-3":d,"--n-hue-1":R,"--n-hue-2":B,"--n-hue-3":k,"--n-hue-4":H,"--n-hue-5":T,"--n-hue-5-2":W,"--n-hue-6":O,"--n-hue-6-2":F,"--n-line-number-text-color":g}}),u=a?V("code",m(()=>`${o.internalFontSize||"a"}`),b,o):void 0;return{mergedClsPrefix:h,codeRef:c,mergedShowLineNumbers:N,lineNumbers:m(()=>{let n=1;const r=[];let l=!1;for(const s of o.code)s===`
`?(l=!0,r.push(n++)):l=!1;return l||r.push(n++),r.join(`
`)}),cssVars:a?void 0:b,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var o,e;const{mergedClsPrefix:t,wordWrap:h,mergedShowLineNumbers:a,onRender:c}=this;return c==null||c(),_("code",{class:[`${t}-code`,this.themeClass,h&&`${t}-code--word-wrap`,a&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?_("pre",{class:`${t}-code__line-numbers`},this.lineNumbers):null,(e=(o=this.$slots).default)===null||e===void 0?void 0:e.call(o))}});export{X as N,z as c,y as u};
