import{useRouter as de,useRoute as ue}from"./vue-router-ee92e3b2.js";import{n as Te}from"./toScreenDisplay-7366afcc.js";import{q as _e}from"./define_basic_qtypes-5cc5565b.js";import{A as j}from"./APIHelper-c6c5541a.js";import{s as ze}from"./subjects-flattened-reversed-970fd5c2.js";import{q as Pe,d as $e}from"./diff.map-0594d4b4.js";import{_ as Ae}from"./handleTagTreeSelect-587c4261.js";import{a as B,b as N,u as K,s as Re,c as re,n as J,j as le,h,i as ae,g as Be,d as Q,e as ne,k as Z,m as M,q as Ie,r as qe,o as Ee}from"./light-3c431b54.js";import{u as Ne}from"./use-houdini-5de772fd.js";import{f as Oe}from"./format-length-c9d165c6.js";import{v as X,aZ as w,i as $,a2 as ce,_ as pe,J as q,O as He,b3 as ve,az as me,aa as je,X as Me,as as Le,a8 as z,l as D,t as p,aE as m,j as O,b7 as n,s as x,bd as P,k as E,F as ee,ag as De,m as b,ae as fe,bc as We,ab as Ue,a9 as Fe}from"./index-c2ed52a5.js";import{N as W}from"./ButtonGroup-61f3bdf9.js";import{N as U}from"./InputGroupLabel-79025e35.js";import{N as R}from"./Button-591cb8c7.js";import{N as oe}from"./Input-b50999c9.js";import{N as ge}from"./Space-0b2fef7a.js";import"./sweetalert.min-b990379b.js";import{_ as Ge}from"./_plugin-vue_export-helper-c27b6911.js";import{E as Ve}from"./EllipsisVerticalOutline-0f4e999a.js";import{u as Je}from"./use-memo-13475312.js";import{a as Qe,b as Xe}from"./use-collection-e298bf2f.js";import{g as Ye}from"./utils-ae16cb7a.js";import{b as Ze}from"./next-frame-once-7035a838.js";import{k as he}from"./keysOf-5d5107c5.js";import{t as Ke}from"./throttle-ef6a3569.js";import{o as eo}from"./cssr-b950d06d.js";import{N as oo,k as be}from"./Scrollbar-5b7370f2.js";import{N as to}from"./Dropdown-877d87c3.js";import{N as ro}from"./Icon-75f6c652.js";import{N as ke}from"./Spin-89bf8d7a.js";import{a as xe,N as lo}from"./Image-632b2642.js";import{N as ao}from"./Divider-3c6a8fe5.js";import"./Icon-9d083982.js";import"./Warning-fc401418.js";import"./Close-4e65a8ab.js";import"./runtime-dom.esm-bundler-51aad541.js";import"./Cascader-e2e09c75.js";import"./Loading-b36f50c8.js";import"./use-is-mounted-912be460.js";import"./ChevronRight-473b2df6.js";import"./Checkbox-7001ae57.js";import"./use-merged-state-5c1c3246.js";import"./index-80752888.js";import"./flatten-30e3eebb.js";import"./use-false-until-truthy-96bf4c79.js";import"./create-2c70b56a.js";import"./fade-in-scale-up.cssr-6d358681.js";import"./use-locale-ca0d0990.js";import"./index-975a2d8f.js";import"./index-cbfaa337.js";import"./Popover-4ea150e0.js";import"./get-8a3b42fc.js";import"./use-compitable-c3112252.js";import"./InputGroup-b7c6b534.js";import"./Card-bc241d1a.js";import"./Modal-edc91d29.js";import"./utils-20c36e7e.js";import"./light-951b0264.js";import"./FadeInExpandTransition-3bfdffc9.js";import"./Suffix-26bafbe6.js";import"./get-slot-1efb97e5.js";import"./_commonjsHelpers-de833af9.js";import"./Tag-9a87d369.js";import"./Tooltip-121d8b6c.js";import"./download-b096fc6b.js";function ye(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function no(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function io(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const so=B("affix",[N("affixed",{position:"fixed"},[N("absolute-positioned",{position:"absolute"})])]),ie={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},uo=he(ie),co=X({name:"Affix",props:ie,setup(e){const{mergedClsPrefixRef:a}=K(e);Re("-affix",so,a);let l=null;const i=w(!1),o=w(!1),f=w(null),v=w(null),r=$(()=>o.value||i.value),d=$(()=>{var s,t;return(t=(s=e.triggerTop)!==null&&s!==void 0?s:e.offsetTop)!==null&&t!==void 0?t:e.top}),g=$(()=>{var s,t;return(t=(s=e.top)!==null&&s!==void 0?s:e.triggerTop)!==null&&t!==void 0?t:e.offsetTop}),_=$(()=>{var s,t;return(t=(s=e.bottom)!==null&&s!==void 0?s:e.triggerBottom)!==null&&t!==void 0?t:e.offsetBottom}),S=$(()=>{var s,t;return(t=(s=e.triggerBottom)!==null&&s!==void 0?s:e.offsetBottom)!==null&&t!==void 0?t:e.bottom}),T=w(null),A=()=>{const{target:s,listenTo:t}=e;s?l=s():t?l=ye(t):l=document,l&&(l.addEventListener("scroll",u),u())};function u(){Ze(c)}function c(){const{value:s}=T;if(!l||!s)return;const t=no(l);if(r.value){v.value!==null&&t<v.value&&(i.value=!1,v.value=null),f.value!==null&&t>f.value&&(o.value=!1,f.value=null);return}const y=io(l),I=s.getBoundingClientRect(),L=I.top-y.top,H=y.bottom-I.bottom,C=d.value,k=S.value;C!==void 0&&L<=C?(i.value=!0,v.value=t-(C-L)):(i.value=!1,v.value=null),k!==void 0&&H<=k?(o.value=!0,f.value=t+k-H):(o.value=!1,f.value=null)}return ce(()=>{A()}),pe(()=>{l&&l.removeEventListener("scroll",u)}),{selfRef:T,affixed:r,mergedClsPrefix:a,mergedstyle:$(()=>{const s={};return i.value&&d.value!==void 0&&g.value!==void 0&&(s.top=`${g.value}px`),o.value&&S.value!==void 0&&_.value!==void 0&&(s.bottom=`${_.value}px`),s})}},render(){const{mergedClsPrefix:e}=this;return q("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),po={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},vo=e=>{const{borderRadius:a,railColor:l,primaryColor:i,primaryColorHover:o,primaryColorPressed:f,textColor2:v}=e;return Object.assign(Object.assign({},po),{borderRadius:a,railColor:l,railColorActive:i,linkColor:J(i,{alpha:.15}),linkTextColor:v,linkTextColorHover:o,linkTextColorPressed:f,linkTextColorActive:i})},mo={name:"Anchor",common:re,self:vo},fo=mo,go=B("anchor",`
 position: relative;
`,[le("block",`
 padding-left: var(--n-rail-width);
 `,[B("anchor-link",[h("+, >",[B("anchor-link",`
 margin-top: .5em;
 `)])]),B("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),le("show-rail",[h(">",[B("anchor-link","padding-left: 0;")])])]),N("block",[B("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[N("active",`
 background-color: var(--n-link-color);
 `)])]),B("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),B("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[ae("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[N("active",{backgroundColor:"var(--n-rail-color-active)"})])]),B("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[N("active",[h(">",[ae("title",`
 color: var(--n-link-text-color-active);
 `)])]),ae("title",`
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
 `,[h("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),h("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),te=Be("n-anchor"),ho={title:String,href:String},bo=X({name:"AnchorLink",props:ho,setup(e,{slots:a}){const l=w(null),i=He(te),o=ve(e,"href"),f=Je(()=>o.value&&o.value===i.activeHref.value);Qe(te,"collectedLinkHrefs",o),Xe(te,"titleEls",()=>l.value),me(f,r=>{r&&l.value&&i.updateBarPosition(l.value)});function v(){e.href!==void 0&&i.setActiveHref(e.href)}return()=>{var r;const{value:d}=i.mergedClsPrefix;return q("div",{class:[`${d}-anchor-link`,f.value&&`${d}-anchor-link--active`]},q("a",{ref:l,class:[`${d}-anchor-link__title`],href:e.href,title:Ye(e.title),onClick:v},e.title),(r=a.default)===null||r===void 0?void 0:r.call(a))}}});function ko(e,a){const{top:l,height:i}=e.getBoundingClientRect(),o=a instanceof HTMLElement?a.getBoundingClientRect().top:0;return{top:l-o,height:i}}const se={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},xo=he(se),yo=X({name:"BaseAnchor",props:Object.assign(Object.assign({},se),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const a=[],l=[],i=w(null),o=w(null),f=w(null),v=w(null),r=$(()=>e.type==="block"),d=$(()=>!r.value&&e.showRail);function g(){const{value:u}=f,{value:c}=o;u&&(u.style.transition="none"),c&&(c.style.transition="none"),l&&l.forEach(s=>{s.style.transition="none"}),Me(()=>{const{value:s}=f,{value:t}=o;s&&(s.offsetWidth,s.style.transition=""),t&&(t.offsetWidth,t.style.transition=""),l&&l.forEach(y=>{y.offsetWidth,y.style.transition=""})})}function _(u,c=!0){const{value:s}=f,{value:t}=o,{value:y}=v;if(!y||!s)return;c||(s.style.transition="none",t&&(t.style.transition="none"));const{offsetHeight:I,offsetWidth:L}=u,{top:H,left:C}=u.getBoundingClientRect(),{top:k,left:G}=y.getBoundingClientRect(),V=H-k,Y=C-G;s.style.top=`${V}px`,s.style.height=`${I}px`,t&&(t.style.top=`${V}px`,t.style.height=`${I}px`,t.style.maxWidth=`${L+Y}px`),s.offsetHeight,t&&t.offsetHeight,c||(s.style.transition="",t&&(t.style.transition=""))}function S(u,c=!0){const s=/^#([^#]+)$/.exec(u);if(!s)return;const t=document.getElementById(s[1]);t&&(i.value=u,t.scrollIntoView(),c||g(),T())}const T=Ke(()=>{A(!0)},128);function A(u=!0){var c;const s=[],t=ye((c=e.offsetTarget)!==null&&c!==void 0?c:document);a.forEach(C=>{const k=/#([^#]+)$/.exec(C);if(!k)return;const G=document.getElementById(k[1]);if(G&&t){const{top:V,height:Y}=ko(G,t);s.push({top:V,height:Y,href:C})}}),s.sort((C,k)=>C.top>k.top?1:(C.top===k.top&&C.height<k.height,-1));const y=i.value,{bound:I,ignoreGap:L}=e,H=s.reduce((C,k)=>k.top+k.height<0?L?k:C:k.top<=I?C===null?k:k.top===C.top?k.href===y?k:C:k.top>C.top?k:C:C,null);u||g(),H?i.value=H.href:i.value=null}return je(te,{activeHref:i,mergedClsPrefix:ve(e,"mergedClsPrefix"),updateBarPosition:_,setActiveHref:S,collectedLinkHrefs:a,titleEls:l}),ce(()=>{document.addEventListener("scroll",T,!0),S(window.location.hash),A(!1)}),eo(()=>{S(window.location.hash),A(!1)}),pe(()=>{document.removeEventListener("scroll",T,!0)}),me(i,u=>{if(u===null){const{value:c}=o;c&&!r.value&&(c.style.maxWidth="0")}}),{selfRef:v,barRef:f,slotRef:o,setActiveHref:S,activeHref:i,isBlockType:r,mergedShowRail:d}},render(){var e;const{mergedClsPrefix:a,mergedShowRail:l,isBlockType:i,$slots:o}=this,f=q("div",{class:[`${a}-anchor`,i&&`${a}-anchor--block`,l&&`${a}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?q("div",{ref:"slotRef",class:`${a}-anchor-link-background`}):null,l?q("div",{class:`${a}-anchor-rail`},q("div",{ref:"barRef",class:[`${a}-anchor-rail__bar`,this.activeHref!==null&&`${a}-anchor-rail__bar--active`]})):null,(e=o.default)===null||e===void 0?void 0:e.call(o));return this.internalScrollable?q(oo,null,{default:()=>f}):f}}),Co=Object.assign(Object.assign(Object.assign(Object.assign({},Q.props),{affix:Boolean}),ie),se),wo=X({name:"Anchor",props:Co,setup(e,{slots:a}){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=K(e),o=Q("Anchor","-anchor",go,fo,e,l),f=w(null),v=$(()=>{const{self:{railColor:d,linkColor:g,railColorActive:_,linkTextColor:S,linkTextColorHover:T,linkTextColorPressed:A,linkTextColorActive:u,linkFontSize:c,railWidth:s,linkPadding:t,borderRadius:y},common:{cubicBezierEaseInOut:I}}=o.value;return{"--n-link-border-radius":y,"--n-link-color":g,"--n-link-font-size":c,"--n-link-text-color":S,"--n-link-text-color-hover":T,"--n-link-text-color-active":u,"--n-link-text-color-pressed":A,"--n-link-padding":t,"--n-bezier":I,"--n-rail-color":d,"--n-rail-color-active":_,"--n-rail-width":s}}),r=i?ne("anchor",void 0,v,e):void 0;return{scrollTo(d){var g;(g=f.value)===null||g===void 0||g.setActiveHref(d)},renderAnchor:()=>(r==null||r.onRender(),q(yo,Object.assign({ref:f,style:i?void 0:v.value,class:r==null?void 0:r.themeClass.value},be(e,xo),{mergedClsPrefix:l.value}),a))}},render(){return this.affix?q(co,Object.assign({},be(this,uo)),{default:this.renderAnchor}):this.renderAnchor()}}),So=e=>{const{primaryColor:a,successColor:l,warningColor:i,errorColor:o,infoColor:f,fontWeightStrong:v}=e;return{fontWeight:v,rotate:"252deg",colorStartPrimary:J(a,{alpha:.6}),colorEndPrimary:a,colorStartInfo:J(f,{alpha:.6}),colorEndInfo:f,colorStartWarning:J(i,{alpha:.6}),colorEndWarning:i,colorStartError:J(o,{alpha:.6}),colorEndError:o,colorStartSuccess:J(l,{alpha:.6}),colorEndSuccess:l}},To={name:"GradientText",common:re,self:So},_o=To,zo=B("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),Po=Object.assign(Object.assign({},Q.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),$o=X({name:"GradientText",props:Po,setup(e){Ne();const{mergedClsPrefixRef:a,inlineThemeDisabled:l}=K(e),i=$(()=>{const{type:g}=e;return g==="danger"?"error":g}),o=$(()=>{let g=e.size||e.fontSize;return g&&(g=Oe(g)),g||void 0}),f=$(()=>{const g=e.color||e.gradient;if(typeof g=="string")return g;if(g){const _=g.deg||0,S=g.from,T=g.to;return`linear-gradient(${_}deg, ${S} 0%, ${T} 100%)`}}),v=Q("GradientText","-gradient-text",zo,_o,e,a),r=$(()=>{const{value:g}=i,{common:{cubicBezierEaseInOut:_},self:{rotate:S,[Z("colorStart",g)]:T,[Z("colorEnd",g)]:A,fontWeight:u}}=v.value;return{"--n-bezier":_,"--n-rotate":S,"--n-color-start":T,"--n-color-end":A,"--n-font-weight":u}}),d=l?ne("gradient-text",$(()=>i.value[0]),r,e):void 0;return{mergedClsPrefix:a,compatibleType:i,styleFontSize:o,styleBgImage:f,cssVars:l?void 0:r,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{mergedClsPrefix:e,onRender:a}=this;return a==null||a(),q("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Ao={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},Ro=e=>{const{dividerColor:a,cardColor:l,modalColor:i,popoverColor:o,tableHeaderColor:f,tableColorStriped:v,textColor1:r,textColor2:d,borderRadius:g,fontWeightStrong:_,lineHeight:S,fontSizeSmall:T,fontSizeMedium:A,fontSizeLarge:u}=e;return Object.assign(Object.assign({},Ao),{fontSizeSmall:T,fontSizeMedium:A,fontSizeLarge:u,lineHeight:S,borderRadius:g,borderColor:M(l,a),borderColorModal:M(i,a),borderColorPopover:M(o,a),tdColor:l,tdColorModal:i,tdColorPopover:o,tdColorStriped:M(l,v),tdColorStripedModal:M(i,v),tdColorStripedPopover:M(o,v),thColor:M(l,f),thColorModal:M(i,f),thColorPopover:M(o,f),thTextColor:r,tdTextColor:d,thFontWeight:_})},Bo={name:"Table",common:re,self:Ro},Io=Bo,qo=h([B("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[h("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[h("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),h("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[h("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),N("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[h("tr",[h("&:last-child",[h("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),N("single-line",[h("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),h("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),N("single-column",[h("tr",[h("&:not(:last-child)",[h("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),N("striped",[h("tr:nth-of-type(even)",[h("td","background-color: var(--n-td-color-striped)")])]),le("bottom-bordered",[h("tr",[h("&:last-child",[h("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),Ie(B("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[h("th",`
 background-color: var(--n-th-color-modal);
 `),h("td",`
 background-color: var(--n-td-color-modal);
 `)])),qe(B("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[h("th",`
 background-color: var(--n-th-color-popover);
 `),h("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),Eo=Object.assign(Object.assign({},Q.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),No=X({name:"Table",props:Eo,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:l,mergedRtlRef:i}=K(e),o=Q("Table","-table",qo,Io,e,a),f=Ee("Table",i,a),v=$(()=>{const{size:d}=e,{self:{borderColor:g,tdColor:_,tdColorModal:S,tdColorPopover:T,thColor:A,thColorModal:u,thColorPopover:c,thTextColor:s,tdTextColor:t,borderRadius:y,thFontWeight:I,lineHeight:L,borderColorModal:H,borderColorPopover:C,tdColorStriped:k,tdColorStripedModal:G,tdColorStripedPopover:V,[Z("fontSize",d)]:Y,[Z("tdPadding",d)]:Ce,[Z("thPadding",d)]:we},common:{cubicBezierEaseInOut:Se}}=o.value;return{"--n-bezier":Se,"--n-td-color":_,"--n-td-color-modal":S,"--n-td-color-popover":T,"--n-td-text-color":t,"--n-border-color":g,"--n-border-color-modal":H,"--n-border-color-popover":C,"--n-border-radius":y,"--n-font-size":Y,"--n-th-color":A,"--n-th-color-modal":u,"--n-th-color-popover":c,"--n-th-font-weight":I,"--n-th-text-color":s,"--n-line-height":L,"--n-td-padding":Ce,"--n-th-padding":we,"--n-td-color-striped":k,"--n-td-color-striped-modal":G,"--n-td-color-striped-popover":V}}),r=l?ne("table",$(()=>e.size[0]),v,e):void 0;return{rtlEnabled:f,mergedClsPrefix:a,cssVars:l?void 0:v,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),q("table",{class:[`${a}-table`,this.themeClass,{[`${a}-table--rtl`]:this.rtlEnabled,[`${a}-table--bottom-bordered`]:this.bottomBordered,[`${a}-table--bordered`]:this.bordered,[`${a}-table--single-line`]:this.singleLine,[`${a}-table--single-column`]:this.singleColumn,[`${a}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),Oo={__name:"miscoll-banner",setup(e){de(),ue();const a=Le(),l=w(0),i=w("0");j.get("/api/data/mistakes_coll/whethercollected/"+a.id).then(v=>{v.found?(l.value=1,i.value=v.data.id):l.value=2});const o=w({show:!1,q:"",qType:"AS-IS",answer:"",answerType:"AS-IS",parse:"",parseType:"AS-IS",note:"",noteType:"AS-IS",tags:[]}),f=()=>{j.get("/api/data/get/"+a.id).then(v=>{j.post("/api/data/mistakes_coll/add",{relatedQID:a.id,bankid:v.bankid,q:o.value.q,qType:o.value.qType,answer:o.value.answer,answerType:o.value.answerType,parse:o.value.parse,parseType:o.value.parseType,note:o.value.note,noteType:o.value.noteType,tags:o.value.tags,collTime:new Date().getTime(),rate:5}).then(r=>{l.value=2,i.value=r.id})})};return(v,r)=>(z(),D(ee,null,[p(n(W),null,{default:m(()=>[l.value!=1?(z(),O(n(U),{key:0},{default:m(()=>[x(P(l.value==0?"\u6B63\u5728\u52A0\u8F7D\u9519\u9898\u4FE1\u606F":l.value==1?"\u5DF2\u6536\u5F55\u4E3A\u9519\u9898":l.value==2?"\u672A\u6536\u5F55\u4E3A\u9519\u9898":"\u672A\u77E5\u9519\u8BEF"),1)]),_:1})):E("",!0),l.value==1?(z(),O(n(U),{key:1},{default:m(()=>[p(n($o),{type:"info"},{default:m(()=>[x(" \u5DF2\u6536\u5F55\u4E3A\u9519\u9898 ")]),_:1})]),_:1})):E("",!0),l.value==1?(z(),O(n(R),{key:2,onClick:r[0]||(r[0]=d=>v.$router.push("/mistakes_coll/view/"+i.value))},{default:m(()=>[x("\u67E5\u770B")]),_:1})):E("",!0),p(n(R),{onClick:r[1]||(r[1]=d=>v.$router.push("/mistakes_coll/coll_by_ques/"+v.$attrs.id))},{default:m(()=>[x("\u6536\u5F55\u9519\u9898")]),_:1}),p(n(R),{onClick:r[2]||(r[2]=d=>o.value.show=!0)},{default:m(()=>[x("\u5FEB\u901F")]),_:1})]),_:1}),o.value.show?(z(),O(n(ge),{key:0,vertical:""},{default:m(()=>[p(n(W),null,{default:m(()=>[p(n(U),null,{default:m(()=>[x("Q")]),_:1}),p(n(R),{onClick:r[3]||(r[3]=()=>{o.value.qType=="AS-IS"?o.value.qType="ASIS_with_MDNote":o.value.qType="AS-IS"})},{default:m(()=>[x(P(o.value.qType),1)]),_:1}),o.value.qType=="ASIS_with_MDNote"?(z(),O(n(oe),{key:0,placeholder:"Note...",value:o.value.q,"onUpdate:value":r[4]||(r[4]=d=>o.value.q=d)},null,8,["value"])):E("",!0)]),_:1}),p(n(W),null,{default:m(()=>[p(n(U),null,{default:m(()=>[x("A")]),_:1}),p(n(R),{onClick:r[5]||(r[5]=()=>{o.value.answerType=="AS-IS"?o.value.answerType="ASIS_with_MDNote":o.value.answerType="AS-IS"})},{default:m(()=>[x(P(o.value.answerType),1)]),_:1}),o.value.answerType=="ASIS_with_MDNote"?(z(),O(n(oe),{key:0,placeholder:"Note...",value:o.value.answer,"onUpdate:value":r[6]||(r[6]=d=>o.value.answer=d)},null,8,["value"])):E("",!0)]),_:1}),p(n(W),null,{default:m(()=>[p(n(U),null,{default:m(()=>[x("P")]),_:1}),p(n(R),{onClick:r[7]||(r[7]=()=>{o.value.parseType=="AS-IS"?o.value.parseType="ASIS_with_MDNote":o.value.parseType="AS-IS"})},{default:m(()=>[x(P(o.value.parseType),1)]),_:1}),o.value.parseType=="ASIS_with_MDNote"?(z(),O(n(oe),{key:0,placeholder:"Note...",value:o.value.parse,"onUpdate:value":r[8]||(r[8]=d=>o.value.parse=d)},null,8,["value"])):E("",!0)]),_:1}),p(n(W),null,{default:m(()=>[p(n(U),null,{default:m(()=>[x("N")]),_:1}),p(n(oe),{placeholder:"Markdown...",value:o.value.note,"onUpdate:value":r[9]||(r[9]=d=>o.value.note=d)},null,8,["value"])]),_:1}),p(n(W),null,{default:m(()=>[p(n(U),null,{default:m(()=>[x("T")]),_:1}),p(Ae,{tags:o.value.tags,"onUpdate:tags":r[10]||(r[10]=d=>o.value.tags=d)},null,8,["tags"])]),_:1}),p(n(R),{onClick:f},{default:m(()=>[x("Collect")]),_:1})]),_:1})):E("",!0)],64))}},F=e=>(Ue("data-v-4f1d020a"),e=e(),Fe(),e),Ho={style:{width:"18.76cm","line-height":"normal"},id:"oonom"},jo=F(()=>b("div",{class:"noprint"},null,-1)),Mo=F(()=>b("td",null,"Title",-1)),Lo=F(()=>b("td",null,"Updated at",-1)),Do=F(()=>b("td",null,"\u5B66\u79D1",-1)),Wo=F(()=>b("td",null,"ID",-1)),Uo=F(()=>b("td",null,"\u9898\u91CF",-1)),Fo={id:"corehtml",style:{width:"18.76cm",columns:1,"line-height":"normal"}},Go={style:{"font-size":"9.5pt","font-family":"Cambria, fangsong",margin:"0px"}},Vo=["id"],Jo={style:{"font-size":"9.5pt",margin:"0px","font-family":"Cambria, \u4EFF\u5B8B"}},Qo={style:{"font-family":"'courier new'"}},Xo={style:{"font-family":"'courier new'"}},Yo={key:0},Zo=["innerHTML"],Ko=F(()=>b("div",null,null,-1)),et={__name:"index",setup(e){const a=ue(),l=de(),i=w({q:!0,a:!1,p:!1}),o=w({}),f=w(!1),v=w(""),r=w({id:"...",entry:"...",timestamp:10,bankid:11,title:"\u3010\u6807\u9898\u3011",desc:"",tags:null}),d=w({});j.get("/api/group/get/"+a.params.id).then(u=>{u.entry.split(",").forEach(c=>{d.value[c]=_e}),u.entry.split(","),v.value=u.title,r.value=u,Promise.all(u.entry.split(",").map(c=>new Promise((s,t)=>{j.get("/api/data/get/"+c).then(y=>{d.value[c]=y}),GetDoneInfo(c)}))).then(()=>{})});const g=u=>Object.entries(u).map(c=>c[1]);w(!1);const _=w({}),S=()=>{Object.entries(d.value).forEach(u=>{T(u[1])})},T=u=>{j.get("/api/xkw-helper/getCachedImg/"+u.bankid+"/"+u.qid+"/600").then(c=>{_.value[u.id]={a:j.host+"/api/xkw-helper/route-pic?purl="+btoa(c.answer.replace("@2","@3")),p:j.host+"/api/xkw-helper/route-pic?purl="+btoa(c.parse.replace("@2","@3"))},o.value[u.id]=!0})},A=[{label:"\u751F\u6210Word\u7248",key:"export-word-v",props:{onClick:()=>{l.push("/grouping/preexport-1/"+a.params.id+"/word_tailored_version")}}},{label:"\u5DF2\u6392\u7248\u7684\u5185\u5BB9",key:"historyCode",props:{onClick:async()=>{j.get("/api/group/getExported/"+a.params.id).then(u=>{localStorage.setItem("___thost___html_export",u.htmlcode),l.push("/paper/"+a.params.id)})}}}];return(u,c)=>{const s=De("n-back-top");return z(),D(ee,null,[p(s),p(n(W),null,{default:m(()=>[p(n(R),{class:"noprint",onClick:c[0]||(c[0]=t=>i.value.q=!i.value.q)},{default:m(()=>[x("Q")]),_:1}),p(n(R),{class:"noprint",onClick:S},{default:m(()=>[x("\u663E\u793A\u5168\u90E8\u7B54\u6848\u89E3\u6790")]),_:1}),p(n(R),{class:"noprint",onClick:c[1]||(c[1]=t=>n(l).push("/grouping/preexport-1/"+n(a).params.id))},{default:m(()=>[x("\u5F00\u59CB\u6392\u7248")]),_:1}),p(n(to),{options:A},{default:m(()=>[p(n(R),null,{icon:m(()=>[p(n(ro),{component:n(Ve)},null,8,["component"])]),_:1})]),_:1}),p(n(R),{class:"noprint",onClick:c[2]||(c[2]=t=>n(l).push("/export/"+n(a).params.id+"/a"))},{default:m(()=>[x("\u6253\u5370\u7B54\u6848")]),_:1}),p(n(R),{class:"noprint",onClick:c[3]||(c[3]=t=>n(l).push("/grouping/rename/"+n(a).params.id))},{default:m(()=>[x("\u4FEE\u6539\u547D\u540D")]),_:1})]),_:1}),b("div",Ho,[jo,p(n(wo),{class:"noprint","show-rail":!0,"show-background":!0,style:{position:"fixed",right:"100px"}},{default:m(()=>[(z(!0),D(ee,null,fe(g(d.value),(t,y)=>(z(),O(n(bo),{title:"\u7B2C"+(y+1)+"\u9898",href:"#"+(y+1)},null,8,["title","href"]))),256))]),_:1}),p(n(No),{striped:""},{default:m(()=>[b("tbody",null,[b("tr",null,[Mo,b("td",null,P(r.value.title),1)]),b("tr",null,[Lo,b("td",null,P(new Date(r.value.timestamp).toLocaleDateString()),1)]),b("tr",null,[Do,b("td",null,P(n(ze)[""+r.value.bankid]),1)]),b("tr",null,[b("td",null,[x("\u5907\u6CE8..."),p(n(R),{text:"",onClick:c[4]||(c[4]=t=>n(l).push("/grouping/edit-desc/"+n(a).params.id))},{default:m(()=>[x("\u7F16\u8F91")]),_:1})]),b("td",null,P(r.value.desc),1)]),b("tr",null,[Wo,b("td",null,P(r.value.id),1)]),b("tr",null,[Uo,b("td",null,P(r.value.entry.split(",").length),1)])])]),_:1}),p(n(lo),null,{default:m(()=>[b("div",Fo,[b("p",Go," Generated by thost | Group UUID: "+P(u.$route.params.id)+" | Title: "+P(v.value),1),(z(!0),D(ee,null,fe(g(d.value),(t,y)=>(z(),D("div",{key:t.id,id:y+1},[b("p",Jo,[x(" UUID:"),b("span",Qo,P(t.id),1),x(" | qid:"),b("span",Xo,P(t.qid),1),i.value.q?(z(),D("span",Yo,"| "+P(n(Pe)[""+t.bankid][""+t.type])+" | "+P(n($e)[""+t.diff])+" | Origin: "+P(t.origin),1)):E("",!0)]),i.value.q?(z(),D("div",{key:0,innerHTML:n(Te)(t.q,{ret2:f.value,tindex:y+1}),style:{fontSize:"12pt",fontFamily:"Cambria"}},null,8,Zo)):E("",!0),i.value.q?(z(),D("div",{key:1,style:We({display:"block",height:(t._extb_height||0)+"px"})},null,4)):E("",!0),o.value[t.id]?(z(),O(n(xe),{key:2,lazy:"",src:(_.value[t.id]||{a:""}).a,width:700},{placeholder:m(()=>[p(n(ke))]),_:2},1032,["src"])):E("",!0),o.value[t.id]?(z(),O(n(xe),{key:3,lazy:"",src:(_.value[t.id]||{p:""}).p,width:700},{placeholder:m(()=>[p(n(ke))]),_:2},1032,["src"])):E("",!0),Ko,p(n(ge),{vertical:""},{default:m(()=>[p(n(R),{class:"noprint",onClick:I=>T(t)},{default:m(()=>[x("\u663E\u793A\u672C\u9898\u7B54\u6848")]),_:2},1032,["onClick"]),p(Oo,{id:t.id},null,8,["id"])]),_:2},1024),p(n(ao))],8,Vo))),128))])]),_:1})])],64)}}},ot=Ge(et,[["__scopeId","data-v-4f1d020a"]]);export{ot as default};
