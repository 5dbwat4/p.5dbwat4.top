import{useRouter as de,useRoute as ue}from"./vue-router-85f8dd9e.js";import{n as _e}from"./toScreenDisplay-dc7ab8c8.js";import{q as Te}from"./define_basic_qtypes-5cc5565b.js";import{A as q}from"./APIHelper-89899791.js";import{s as ze}from"./subjects-flattened-reversed-970fd5c2.js";import{q as Pe,d as $e}from"./diff.map-0594d4b4.js";import{_ as Ae}from"./handleTagTreeSelect-ffe93035.js";import{a as R,b as H,u as J,s as Be,c as re,n as V,j as le,h as g,i as ae,g as Re,d as Q,e as ne,m as O,k as Z,q as Ie,r as Ee,o as Ne}from"./light-cb8e5d18.js";import{u as qe}from"./use-houdini-2b215f58.js";import{f as He}from"./format-length-c9d165c6.js";import{w as Y,b2 as w,j as P,a5 as ce,a1 as pe,N as E,R as Me,b8 as ve,aC as me,ad as je,_ as Oe,av as Le,ab as z,m as W,u as p,aH as v,k as M,bc as n,t as b,bi as B,l as N,F as ee,aj as We,n as k,ah as fe,bh as De,ae as Fe,ac as Ge}from"./index-6b27469d.js";import{N as D}from"./ButtonGroup-a1dd49d7.js";import{N as F}from"./InputGroupLabel-654bdc49.js";import{N as $}from"./Button-a421b774.js";import{N as oe}from"./Input-c49f615f.js";import{N as he}from"./Space-5a87e743.js";import"./sweetalert.min-b990379b.js";import{_ as Ue}from"./_plugin-vue_export-helper-c27b6911.js";import{E as Ve}from"./EllipsisVerticalOutline-f118589b.js";import{u as Qe}from"./use-memo-7138c88c.js";import{a as Ye,b as Ke}from"./use-collection-37ba12f3.js";import{g as Xe}from"./utils-1657c4d7.js";import{b as Ze}from"./next-frame-once-7035a838.js";import{k as ge}from"./keysOf-5d5107c5.js";import{t as Je}from"./throttle-149b2a5b.js";import{o as eo}from"./cssr-752b8ed7.js";import{N as oo,k as be}from"./Scrollbar-6ef5ad24.js";import{N as to}from"./Dropdown-6e48c879.js";import{N as ro}from"./Icon-bc12cdb3.js";import{N as ke}from"./Spin-dbb425d2.js";import{a as ye,N as lo}from"./Image-7f6bbf92.js";import{N as ao}from"./Divider-7d564df1.js";import"./Icon-0741e3aa.js";import"./Warning-ad995842.js";import"./Close-df27b242.js";import"./runtime-dom.esm-bundler-4f377a37.js";import"./Cascader-3dd91518.js";import"./Loading-a27cceda.js";import"./use-is-mounted-e356ec1d.js";import"./ChevronRight-f0e435af.js";import"./Checkbox-d6d0f1db.js";import"./use-merged-state-236ae148.js";import"./index-cabd39fd.js";import"./flatten-0afec71b.js";import"./use-false-until-truthy-35c1fbae.js";import"./create-59670860.js";import"./fade-in-scale-up.cssr-59f6c429.js";import"./use-locale-13d55c5c.js";import"./index-975a2d8f.js";import"./index-cbfaa337.js";import"./Popover-d5735fab.js";import"./get-9cb40f85.js";import"./use-compitable-182c3d4e.js";import"./InputGroup-0a19f812.js";import"./Card-b4e38b92.js";import"./Modal-845087fa.js";import"./utils-eca1999b.js";import"./light-5edeff63.js";import"./FadeInExpandTransition-65435983.js";import"./Suffix-8898b6d6.js";import"./get-slot-1efb97e5.js";import"./_commonjsHelpers-de833af9.js";import"./Tag-156be23d.js";import"./Tooltip-46e4aeaa.js";import"./download-b096fc6b.js";function xe(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function no(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function io(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const so=R("affix",[H("affixed",{position:"fixed"},[H("absolute-positioned",{position:"absolute"})])]),ie={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},uo=ge(ie),co=Y({name:"Affix",props:ie,setup(e){const{mergedClsPrefixRef:a}=J(e);Be("-affix",so,a);let l=null;const i=w(!1),o=w(!1),f=w(null),m=w(null),r=P(()=>o.value||i.value),d=P(()=>{var s,t;return(t=(s=e.triggerTop)!==null&&s!==void 0?s:e.offsetTop)!==null&&t!==void 0?t:e.top}),h=P(()=>{var s,t;return(t=(s=e.top)!==null&&s!==void 0?s:e.triggerTop)!==null&&t!==void 0?t:e.offsetTop}),T=P(()=>{var s,t;return(t=(s=e.bottom)!==null&&s!==void 0?s:e.triggerBottom)!==null&&t!==void 0?t:e.offsetBottom}),S=P(()=>{var s,t;return(t=(s=e.triggerBottom)!==null&&s!==void 0?s:e.offsetBottom)!==null&&t!==void 0?t:e.bottom}),_=w(null),A=()=>{const{target:s,listenTo:t}=e;s?l=s():t?l=xe(t):l=document,l&&(l.addEventListener("scroll",u),u())};function u(){Ze(c)}function c(){const{value:s}=_;if(!l||!s)return;const t=no(l);if(r.value){m.value!==null&&t<m.value&&(i.value=!1,m.value=null),f.value!==null&&t>f.value&&(o.value=!1,f.value=null);return}const x=io(l),I=s.getBoundingClientRect(),L=I.top-x.top,j=x.bottom-I.bottom,C=d.value,y=S.value;C!==void 0&&L<=C?(i.value=!0,m.value=t-(C-L)):(i.value=!1,m.value=null),y!==void 0&&j<=y?(o.value=!0,f.value=t+y-j):(o.value=!1,f.value=null)}return ce(()=>{A()}),pe(()=>{l&&l.removeEventListener("scroll",u)}),{selfRef:_,affixed:r,mergedClsPrefix:a,mergedstyle:P(()=>{const s={};return i.value&&d.value!==void 0&&h.value!==void 0&&(s.top=`${h.value}px`),o.value&&S.value!==void 0&&T.value!==void 0&&(s.bottom=`${T.value}px`),s})}},render(){const{mergedClsPrefix:e}=this;return E("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),po={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},vo=e=>{const{borderRadius:a,railColor:l,primaryColor:i,primaryColorHover:o,primaryColorPressed:f,textColor2:m}=e;return Object.assign(Object.assign({},po),{borderRadius:a,railColor:l,railColorActive:i,linkColor:V(i,{alpha:.15}),linkTextColor:m,linkTextColorHover:o,linkTextColorPressed:f,linkTextColorActive:i})},mo={name:"Anchor",common:re,self:vo},fo=mo,ho=R("anchor",`
 position: relative;
`,[le("block",`
 padding-left: var(--n-rail-width);
 `,[R("anchor-link",[g("+, >",[R("anchor-link",`
 margin-top: .5em;
 `)])]),R("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),le("show-rail",[g(">",[R("anchor-link","padding-left: 0;")])])]),H("block",[R("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[H("active",`
 background-color: var(--n-link-color);
 `)])]),R("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),R("anchor-rail",`
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
 `,[H("active",{backgroundColor:"var(--n-rail-color-active)"})])]),R("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[H("active",[g(">",[ae("title",`
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
 `,[g("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),g("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),te=Re("n-anchor"),go={title:String,href:String},bo=Y({name:"AnchorLink",props:go,setup(e,{slots:a}){const l=w(null),i=Me(te),o=ve(e,"href"),f=Qe(()=>o.value&&o.value===i.activeHref.value);Ye(te,"collectedLinkHrefs",o),Ke(te,"titleEls",()=>l.value),me(f,r=>{r&&l.value&&i.updateBarPosition(l.value)});function m(){e.href!==void 0&&i.setActiveHref(e.href)}return()=>{var r;const{value:d}=i.mergedClsPrefix;return E("div",{class:[`${d}-anchor-link`,f.value&&`${d}-anchor-link--active`]},E("a",{ref:l,class:[`${d}-anchor-link__title`],href:e.href,title:Xe(e.title),onClick:m},e.title),(r=a.default)===null||r===void 0?void 0:r.call(a))}}});function ko(e,a){const{top:l,height:i}=e.getBoundingClientRect(),o=a instanceof HTMLElement?a.getBoundingClientRect().top:0;return{top:l-o,height:i}}const se={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},yo=ge(se),xo=Y({name:"BaseAnchor",props:Object.assign(Object.assign({},se),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const a=[],l=[],i=w(null),o=w(null),f=w(null),m=w(null),r=P(()=>e.type==="block"),d=P(()=>!r.value&&e.showRail);function h(){const{value:u}=f,{value:c}=o;u&&(u.style.transition="none"),c&&(c.style.transition="none"),l&&l.forEach(s=>{s.style.transition="none"}),Oe(()=>{const{value:s}=f,{value:t}=o;s&&(s.offsetWidth,s.style.transition=""),t&&(t.offsetWidth,t.style.transition=""),l&&l.forEach(x=>{x.offsetWidth,x.style.transition=""})})}function T(u,c=!0){const{value:s}=f,{value:t}=o,{value:x}=m;if(!x||!s)return;c||(s.style.transition="none",t&&(t.style.transition="none"));const{offsetHeight:I,offsetWidth:L}=u,{top:j,left:C}=u.getBoundingClientRect(),{top:y,left:G}=x.getBoundingClientRect(),U=j-y,X=C-G;s.style.top=`${U}px`,s.style.height=`${I}px`,t&&(t.style.top=`${U}px`,t.style.height=`${I}px`,t.style.maxWidth=`${L+X}px`),s.offsetHeight,t&&t.offsetHeight,c||(s.style.transition="",t&&(t.style.transition=""))}function S(u,c=!0){const s=/^#([^#]+)$/.exec(u);if(!s)return;const t=document.getElementById(s[1]);t&&(i.value=u,t.scrollIntoView(),c||h(),_())}const _=Je(()=>{A(!0)},128);function A(u=!0){var c;const s=[],t=xe((c=e.offsetTarget)!==null&&c!==void 0?c:document);a.forEach(C=>{const y=/#([^#]+)$/.exec(C);if(!y)return;const G=document.getElementById(y[1]);if(G&&t){const{top:U,height:X}=ko(G,t);s.push({top:U,height:X,href:C})}}),s.sort((C,y)=>C.top>y.top?1:(C.top===y.top&&C.height<y.height,-1));const x=i.value,{bound:I,ignoreGap:L}=e,j=s.reduce((C,y)=>y.top+y.height<0?L?y:C:y.top<=I?C===null?y:y.top===C.top?y.href===x?y:C:y.top>C.top?y:C:C,null);u||h(),j?i.value=j.href:i.value=null}return je(te,{activeHref:i,mergedClsPrefix:ve(e,"mergedClsPrefix"),updateBarPosition:T,setActiveHref:S,collectedLinkHrefs:a,titleEls:l}),ce(()=>{document.addEventListener("scroll",_,!0),S(window.location.hash),A(!1)}),eo(()=>{S(window.location.hash),A(!1)}),pe(()=>{document.removeEventListener("scroll",_,!0)}),me(i,u=>{if(u===null){const{value:c}=o;c&&!r.value&&(c.style.maxWidth="0")}}),{selfRef:m,barRef:f,slotRef:o,setActiveHref:S,activeHref:i,isBlockType:r,mergedShowRail:d}},render(){var e;const{mergedClsPrefix:a,mergedShowRail:l,isBlockType:i,$slots:o}=this,f=E("div",{class:[`${a}-anchor`,i&&`${a}-anchor--block`,l&&`${a}-anchor--show-rail`],ref:"selfRef"},l&&this.showBackground?E("div",{ref:"slotRef",class:`${a}-anchor-link-background`}):null,l?E("div",{class:`${a}-anchor-rail`},E("div",{ref:"barRef",class:[`${a}-anchor-rail__bar`,this.activeHref!==null&&`${a}-anchor-rail__bar--active`]})):null,(e=o.default)===null||e===void 0?void 0:e.call(o));return this.internalScrollable?E(oo,null,{default:()=>f}):f}}),Co=Object.assign(Object.assign(Object.assign(Object.assign({},Q.props),{affix:Boolean}),ie),se),wo=Y({name:"Anchor",props:Co,setup(e,{slots:a}){const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=J(e),o=Q("Anchor","-anchor",ho,fo,e,l),f=w(null),m=P(()=>{const{self:{railColor:d,linkColor:h,railColorActive:T,linkTextColor:S,linkTextColorHover:_,linkTextColorPressed:A,linkTextColorActive:u,linkFontSize:c,railWidth:s,linkPadding:t,borderRadius:x},common:{cubicBezierEaseInOut:I}}=o.value;return{"--n-link-border-radius":x,"--n-link-color":h,"--n-link-font-size":c,"--n-link-text-color":S,"--n-link-text-color-hover":_,"--n-link-text-color-active":u,"--n-link-text-color-pressed":A,"--n-link-padding":t,"--n-bezier":I,"--n-rail-color":d,"--n-rail-color-active":T,"--n-rail-width":s}}),r=i?ne("anchor",void 0,m,e):void 0;return{scrollTo(d){var h;(h=f.value)===null||h===void 0||h.setActiveHref(d)},renderAnchor:()=>(r==null||r.onRender(),E(xo,Object.assign({ref:f,style:i?void 0:m.value,class:r==null?void 0:r.themeClass.value},be(e,yo),{mergedClsPrefix:l.value}),a))}},render(){return this.affix?E(co,Object.assign({},be(this,uo)),{default:this.renderAnchor}):this.renderAnchor()}}),So=e=>{const{primaryColor:a,successColor:l,warningColor:i,errorColor:o,infoColor:f,fontWeightStrong:m}=e;return{fontWeight:m,rotate:"252deg",colorStartPrimary:V(a,{alpha:.6}),colorEndPrimary:a,colorStartInfo:V(f,{alpha:.6}),colorEndInfo:f,colorStartWarning:V(i,{alpha:.6}),colorEndWarning:i,colorStartError:V(o,{alpha:.6}),colorEndError:o,colorStartSuccess:V(l,{alpha:.6}),colorEndSuccess:l}},_o={name:"GradientText",common:re,self:So},To=_o,zo={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},Po=e=>{const{dividerColor:a,cardColor:l,modalColor:i,popoverColor:o,tableHeaderColor:f,tableColorStriped:m,textColor1:r,textColor2:d,borderRadius:h,fontWeightStrong:T,lineHeight:S,fontSizeSmall:_,fontSizeMedium:A,fontSizeLarge:u}=e;return Object.assign(Object.assign({},zo),{fontSizeSmall:_,fontSizeMedium:A,fontSizeLarge:u,lineHeight:S,borderRadius:h,borderColor:O(l,a),borderColorModal:O(i,a),borderColorPopover:O(o,a),tdColor:l,tdColorModal:i,tdColorPopover:o,tdColorStriped:O(l,m),tdColorStripedModal:O(i,m),tdColorStripedPopover:O(o,m),thColor:O(l,f),thColorModal:O(i,f),thColorPopover:O(o,f),thTextColor:r,tdTextColor:d,thFontWeight:T})},$o={name:"Table",common:re,self:Po},Ao=$o,Bo=R("gradient-text",`
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
`),Ro=Object.assign(Object.assign({},Q.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),Io=Y({name:"GradientText",props:Ro,setup(e){qe();const{mergedClsPrefixRef:a,inlineThemeDisabled:l}=J(e),i=P(()=>{const{type:h}=e;return h==="danger"?"error":h}),o=P(()=>{let h=e.size||e.fontSize;return h&&(h=He(h)),h||void 0}),f=P(()=>{const h=e.color||e.gradient;if(typeof h=="string")return h;if(h){const T=h.deg||0,S=h.from,_=h.to;return`linear-gradient(${T}deg, ${S} 0%, ${_} 100%)`}}),m=Q("GradientText","-gradient-text",Bo,To,e,a),r=P(()=>{const{value:h}=i,{common:{cubicBezierEaseInOut:T},self:{rotate:S,[Z("colorStart",h)]:_,[Z("colorEnd",h)]:A,fontWeight:u}}=m.value;return{"--n-bezier":T,"--n-rotate":S,"--n-color-start":_,"--n-color-end":A,"--n-font-weight":u}}),d=l?ne("gradient-text",P(()=>i.value[0]),r,e):void 0;return{mergedClsPrefix:a,compatibleType:i,styleFontSize:o,styleBgImage:f,cssVars:l?void 0:r,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{mergedClsPrefix:e,onRender:a}=this;return a==null||a(),E("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Eo=g([R("table",`
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
 `,[g("th",`
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
 `,[g("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),g("td",`
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
 `,[g("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),H("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[g("tr",[g("&:last-child",[g("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),H("single-line",[g("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),g("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),H("single-column",[g("tr",[g("&:not(:last-child)",[g("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),H("striped",[g("tr:nth-of-type(even)",[g("td","background-color: var(--n-td-color-striped)")])]),le("bottom-bordered",[g("tr",[g("&:last-child",[g("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),Ie(R("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[g("th",`
 background-color: var(--n-th-color-modal);
 `),g("td",`
 background-color: var(--n-td-color-modal);
 `)])),Ee(R("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[g("th",`
 background-color: var(--n-th-color-popover);
 `),g("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),No=Object.assign(Object.assign({},Q.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),qo=Y({name:"Table",props:No,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:l,mergedRtlRef:i}=J(e),o=Q("Table","-table",Eo,Ao,e,a),f=Ne("Table",i,a),m=P(()=>{const{size:d}=e,{self:{borderColor:h,tdColor:T,tdColorModal:S,tdColorPopover:_,thColor:A,thColorModal:u,thColorPopover:c,thTextColor:s,tdTextColor:t,borderRadius:x,thFontWeight:I,lineHeight:L,borderColorModal:j,borderColorPopover:C,tdColorStriped:y,tdColorStripedModal:G,tdColorStripedPopover:U,[Z("fontSize",d)]:X,[Z("tdPadding",d)]:Ce,[Z("thPadding",d)]:we},common:{cubicBezierEaseInOut:Se}}=o.value;return{"--n-bezier":Se,"--n-td-color":T,"--n-td-color-modal":S,"--n-td-color-popover":_,"--n-td-text-color":t,"--n-border-color":h,"--n-border-color-modal":j,"--n-border-color-popover":C,"--n-border-radius":x,"--n-font-size":X,"--n-th-color":A,"--n-th-color-modal":u,"--n-th-color-popover":c,"--n-th-font-weight":I,"--n-th-text-color":s,"--n-line-height":L,"--n-td-padding":Ce,"--n-th-padding":we,"--n-td-color-striped":y,"--n-td-color-striped-modal":G,"--n-td-color-striped-popover":U}}),r=l?ne("table",P(()=>e.size[0]),m,e):void 0;return{rtlEnabled:f,mergedClsPrefix:a,cssVars:l?void 0:m,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),E("table",{class:[`${a}-table`,this.themeClass,{[`${a}-table--rtl`]:this.rtlEnabled,[`${a}-table--bottom-bordered`]:this.bottomBordered,[`${a}-table--bordered`]:this.bordered,[`${a}-table--single-line`]:this.singleLine,[`${a}-table--single-column`]:this.singleColumn,[`${a}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),Ho={__name:"miscoll-banner",setup(e){de(),ue();const a=Le(),l=w(0),i=w("0");q.get("/api/data/mistakes_coll/whethercollected/"+a.id).then(m=>{m.found?(l.value=1,i.value=m.data.id):l.value=2});const o=w({show:!1,q:"",qType:"AS-IS",answer:"",answerType:"AS-IS",parse:"",parseType:"AS-IS",note:"",noteType:"AS-IS",tags:[]}),f=()=>{q.get("/api/data/get/"+a.id).then(m=>{q.post("/api/data/mistakes_coll/add",{relatedQID:a.id,bankid:m.bankid,q:o.value.q,qType:o.value.qType,answer:o.value.answer,answerType:o.value.answerType,parse:o.value.parse,parseType:o.value.parseType,note:o.value.note,noteType:o.value.noteType,tags:o.value.tags,collTime:new Date().getTime(),rate:5}).then(r=>{l.value=2,i.value=r.id})})};return(m,r)=>(z(),W(ee,null,[p(n(D),null,{default:v(()=>[l.value!=1?(z(),M(n(F),{key:0},{default:v(()=>[b(B(l.value==0?"\u6B63\u5728\u52A0\u8F7D\u9519\u9898\u4FE1\u606F":l.value==1?"\u5DF2\u6536\u5F55\u4E3A\u9519\u9898":l.value==2?"\u672A\u6536\u5F55\u4E3A\u9519\u9898":"\u672A\u77E5\u9519\u8BEF"),1)]),_:1})):N("",!0),l.value==1?(z(),M(n(F),{key:1},{default:v(()=>[p(n(Io),{type:"info"},{default:v(()=>[b(" \u5DF2\u6536\u5F55\u4E3A\u9519\u9898 ")]),_:1})]),_:1})):N("",!0),l.value==1?(z(),M(n($),{key:2,onClick:r[0]||(r[0]=d=>m.$router.push("/mistakes_coll/view/"+i.value))},{default:v(()=>[b("\u67E5\u770B")]),_:1})):N("",!0),p(n($),{onClick:r[1]||(r[1]=d=>m.$router.push("/mistakes_coll/coll_by_ques/"+m.$attrs.id))},{default:v(()=>[b("\u6536\u5F55\u9519\u9898")]),_:1}),p(n($),{onClick:r[2]||(r[2]=d=>o.value.show=!0)},{default:v(()=>[b("\u5FEB\u901F")]),_:1})]),_:1}),o.value.show?(z(),M(n(he),{key:0,vertical:""},{default:v(()=>[p(n(D),null,{default:v(()=>[p(n(F),null,{default:v(()=>[b("Q")]),_:1}),p(n($),{onClick:r[3]||(r[3]=()=>{o.value.qType=="AS-IS"?o.value.qType="ASIS_with_MDNote":o.value.qType="AS-IS"})},{default:v(()=>[b(B(o.value.qType),1)]),_:1}),o.value.qType=="ASIS_with_MDNote"?(z(),M(n(oe),{key:0,placeholder:"Note...",value:o.value.q,"onUpdate:value":r[4]||(r[4]=d=>o.value.q=d)},null,8,["value"])):N("",!0)]),_:1}),p(n(D),null,{default:v(()=>[p(n(F),null,{default:v(()=>[b("A")]),_:1}),p(n($),{onClick:r[5]||(r[5]=()=>{o.value.answerType=="AS-IS"?o.value.answerType="ASIS_with_MDNote":o.value.answerType="AS-IS"})},{default:v(()=>[b(B(o.value.answerType),1)]),_:1}),o.value.answerType=="ASIS_with_MDNote"?(z(),M(n(oe),{key:0,placeholder:"Note...",value:o.value.answer,"onUpdate:value":r[6]||(r[6]=d=>o.value.answer=d)},null,8,["value"])):N("",!0)]),_:1}),p(n(D),null,{default:v(()=>[p(n(F),null,{default:v(()=>[b("P")]),_:1}),p(n($),{onClick:r[7]||(r[7]=()=>{o.value.parseType=="AS-IS"?o.value.parseType="ASIS_with_MDNote":o.value.parseType="AS-IS"})},{default:v(()=>[b(B(o.value.parseType),1)]),_:1}),o.value.parseType=="ASIS_with_MDNote"?(z(),M(n(oe),{key:0,placeholder:"Note...",value:o.value.parse,"onUpdate:value":r[8]||(r[8]=d=>o.value.parse=d)},null,8,["value"])):N("",!0)]),_:1}),p(n(D),null,{default:v(()=>[p(n(F),null,{default:v(()=>[b("N")]),_:1}),p(n(oe),{placeholder:"Markdown...",value:o.value.note,"onUpdate:value":r[9]||(r[9]=d=>o.value.note=d)},null,8,["value"])]),_:1}),p(n(D),null,{default:v(()=>[p(n(F),null,{default:v(()=>[b("T")]),_:1}),p(Ae,{tags:o.value.tags,"onUpdate:tags":r[10]||(r[10]=d=>o.value.tags=d)},null,8,["tags"])]),_:1}),p(n($),{onClick:f},{default:v(()=>[b("Collect")]),_:1})]),_:1})):N("",!0)],64))}},K=e=>(Fe("data-v-2f87b674"),e=e(),Ge(),e),Mo={style:{width:"18.76cm","line-height":"normal"},id:"oonom"},jo=K(()=>k("div",{class:"noprint"},null,-1)),Oo=K(()=>k("td",null,"Updated at",-1)),Lo=K(()=>k("td",null,"\u5B66\u79D1",-1)),Wo=K(()=>k("td",null,"ID",-1)),Do=K(()=>k("td",null,"\u9898\u91CF",-1)),Fo={id:"corehtml",style:{width:"18.76cm",columns:1,"line-height":"normal"}},Go=["id"],Uo={style:{"font-size":"9.5pt",margin:"0px","font-family":"Cambria, \u4EFF\u5B8B"}},Vo={style:{"font-family":"'courier new'"}},Qo={style:{"font-family":"'courier new'"}},Yo={key:0},Ko=["innerHTML"],Xo=K(()=>k("div",null,null,-1)),Zo={__name:"index",setup(e){const a=ue(),l=de(),i=w({q:!0,a:!1,p:!1}),o=w({}),f=w(!1),m=w(""),r=w({id:"...",entry:"...",timestamp:10,bankid:11,title:"\u3010\u6807\u9898\u3011",desc:"",tags:null}),d=w({});q.get("/api/group/get/"+a.params.id).then(u=>{u.entry.split(",").forEach(c=>{d.value[c]=Te}),u.entry.split(","),m.value=u.title,r.value=u,Promise.all(u.entry.split(",").map(c=>new Promise((s,t)=>{q.get("/api/data/get/"+c).then(x=>{d.value[c]=x}),GetDoneInfo(c)}))).then(()=>{})});const h=u=>Object.entries(u).map(c=>c[1]);w(!1);const T=w({}),S=()=>{Object.entries(d.value).forEach(u=>{_(u[1])})},_=u=>{q.get("/api/xkw-helper/getCachedImg/"+u.bankid+"/"+u.qid+"/600").then(c=>{T.value[u.id]={a:q.host+"/api/xkw-helper/route-pic?purl="+btoa(c.answer.replace("@2","@3")),p:q.host+"/api/xkw-helper/route-pic?purl="+btoa(c.parse.replace("@2","@3"))},o.value[u.id]=!0})},A=[{label:"\u751F\u6210Word\u7248",key:"export-word-v",props:{onClick:()=>{l.push("/grouping/preexport-1/"+a.params.id+"/word_tailored_version")}}},{label:"\u5DF2\u6392\u7248\u7684\u5185\u5BB9",key:"historyCode",props:{onClick:async()=>{q.get("/api/group/getExported/"+a.params.id).then(u=>{localStorage.setItem("___thost___html_export",u.htmlcode),l.push("/paper/"+a.params.id)})}}},{label:"\u5C06\u672C\u5377\u7684\u8BD5\u9898\u52A0\u5165basket",key:"addtoBasket",props:{onClick:async()=>{q.post("/api/xkw-helper/relay-proxy/addtoBasket/"+r.value.bankid,{ids:r.value.entry.split(",").map(u=>d.value[u].qid).join(",")})}}},{label:"\u5728\u5B66\u79D1\u7F51\u641C\u7D22\u8FD9\u5F20\u5377\u5B50",key:"searchFromZxxk",props:{onClick:async()=>{window.open("https://search.zxxk.com/doc/?kw="+m.value)}}}];return(u,c)=>{const s=We("n-back-top");return z(),W(ee,null,[p(s),p(n(D),null,{default:v(()=>[p(n($),{class:"noprint",onClick:c[0]||(c[0]=t=>i.value.q=!i.value.q)},{default:v(()=>[b("Q")]),_:1}),p(n($),{class:"noprint",onClick:S},{default:v(()=>[b("\u663E\u793A\u5168\u90E8\u7B54\u6848\u89E3\u6790")]),_:1}),p(n($),{class:"noprint",onClick:c[1]||(c[1]=t=>n(l).push("/grouping/preexport-1/"+n(a).params.id))},{default:v(()=>[b("\u5F00\u59CB\u6392\u7248")]),_:1}),p(n(to),{options:A},{default:v(()=>[p(n($),null,{icon:v(()=>[p(n(ro),{component:n(Ve)},null,8,["component"])]),_:1})]),_:1}),p(n($),{class:"noprint",onClick:c[2]||(c[2]=t=>n(l).push("/export/"+n(a).params.id+"/a"))},{default:v(()=>[b("\u6253\u5370\u7B54\u6848")]),_:1})]),_:1}),k("div",Mo,[jo,p(n(wo),{class:"noprint","show-rail":!0,"show-background":!0,style:{position:"fixed",right:"100px"}},{default:v(()=>[(z(!0),W(ee,null,fe(h(d.value),(t,x)=>(z(),M(n(bo),{title:"\u7B2C"+(x+1)+"\u9898",href:"#"+(x+1)},null,8,["title","href"]))),256))]),_:1}),p(n(qo),{striped:""},{default:v(()=>[k("tbody",null,[k("tr",null,[k("td",null,[b("Title ... "),p(n($),{text:"",onClick:c[3]||(c[3]=t=>n(l).push("/grouping/rename/"+n(a).params.id))},{default:v(()=>[b("\u4FEE\u6539")]),_:1})]),k("td",null,B(r.value.title),1)]),k("tr",null,[Oo,k("td",null,B(new Date(r.value.timestamp).toLocaleDateString()),1)]),k("tr",null,[Lo,k("td",null,B(n(ze)[""+r.value.bankid]),1)]),k("tr",null,[k("td",null,[b("\u5907\u6CE8..."),p(n($),{text:"",onClick:c[4]||(c[4]=t=>n(l).push("/grouping/edit-desc/"+n(a).params.id))},{default:v(()=>[b("\u7F16\u8F91")]),_:1})]),k("td",null,B(r.value.desc),1)]),k("tr",null,[Wo,k("td",null,B(r.value.id),1)]),k("tr",null,[Do,k("td",null,B(r.value.entry.split(",").length),1)])])]),_:1}),p(n(lo),null,{default:v(()=>[k("div",Fo,[(z(!0),W(ee,null,fe(h(d.value),(t,x)=>(z(),W("div",{key:t.id,id:x+1},[k("p",Uo,[b(" UUID:"),k("span",Vo,B(t.id),1),b(" | qid:"),k("span",Qo,B(t.qid),1),i.value.q?(z(),W("span",Yo,"| "+B(n(Pe)[""+t.bankid][""+t.type])+" | "+B(n($e)[""+t.diff])+" | Origin: "+B(t.origin),1)):N("",!0)]),i.value.q?(z(),W("div",{key:0,innerHTML:n(_e)(t.q,{ret2:f.value,tindex:x+1}),style:{fontSize:"12pt",fontFamily:"Cambria"}},null,8,Ko)):N("",!0),i.value.q?(z(),W("div",{key:1,style:De({display:"block",height:(t._extb_height||0)+"px"})},null,4)):N("",!0),o.value[t.id]?(z(),M(n(ye),{key:2,lazy:"",src:(T.value[t.id]||{a:""}).a,width:700},{placeholder:v(()=>[p(n(ke))]),_:2},1032,["src"])):N("",!0),o.value[t.id]?(z(),M(n(ye),{key:3,lazy:"",src:(T.value[t.id]||{p:""}).p,width:700},{placeholder:v(()=>[p(n(ke))]),_:2},1032,["src"])):N("",!0),Xo,p(n(he),{vertical:""},{default:v(()=>[k("div",null,[p(n($),{class:"noprint",onClick:I=>_(t)},{default:v(()=>[b("\u663E\u793A\u672C\u9898\u7B54\u6848")]),_:2},1032,["onClick"]),b(),p(n($),{class:"noprint",onClick:I=>n(l).push("/view/"+t.id)},{default:v(()=>[b("Single")]),_:2},1032,["onClick"])]),p(Ho,{id:t.id},null,8,["id"])]),_:2},1024),p(n(ao))],8,Go))),128))])]),_:1})])],64)}}},Jo=Ue(Zo,[["__scopeId","data-v-2f87b674"]]);export{Jo as default};
