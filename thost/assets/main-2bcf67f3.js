import{v as te,J as p,O as Ee,aZ as L,i as j,a2 as We,az as Ve,b3 as Q,aa as Fe,X as fe,a8 as B,j as $,aE as d,m as Me,b7 as i,t as c,s as v,k as V,bd as ge,ag as Oe,l as me}from"./runtime-core.esm-bundler-42be6625.js";import{i as De,N as Ue}from"./APIHelper-697d5a21.js";import{N as se}from"./Card-6456efb4.js";import{N as F}from"./p-b2e24c58.js";import{N as q}from"./text-b92bd4c7.js";import{N as pe}from"./Divider-0de4fb74.js";import{N as Ke}from"./InputGroup-b7f57590.js";import{N as qe}from"./Input-25fff9b3.js";import{N as Se,i as be,u as Xe,a as Ye,b as G}from"./Button-cc4d8cf9.js";import{N as X}from"./Alert-307333c1.js";import{T as Je}from"./runtime-dom.esm-bundler-4c01a608.js";import{u as Ge}from"./use-locale-a958ab8c.js";import{i as ee,r as Ze,c as Qe,a as Ce,b as et,d as tt,e as J,f as Z,g as h,u as Re,h as oe,j as Te,w as ve,k as z,l as we,m as O}from"./light-061b806c.js";import{f as ot}from"./fade-in-scale-up.cssr-e8e5290f.js";import{s as nt,N as it}from"./Scrollbar-56892bdd.js";import{c as rt,u as at,N as lt}from"./Code-0bf2f254.js";import{i as st}from"./Icon-9bae1ecc.js";import{N as dt}from"./Spin-38bf3ba1.js";import{u as ct}from"./use-merged-state-cb002afc.js";import{p as de,d as H}from"./Close-7ee9b945.js";import{i as ce,r as D}from"./resolve-slot-612957d7.js";import{c as ue}from"./call-7e0089d6.js";import{N as ut}from"./Modal-514a3e16.js";import"./format-length-c9d165c6.js";import"./Warning-342b5d14.js";import"./keysOf-5d5107c5.js";import"./light-1325cd86.js";import"./use-compitable-85535777.js";import"./use-memo-8d560c6d.js";import"./light-a899ddec.js";import"./FadeInExpandTransition-8360c680.js";import"./fade-in-height-expand.cssr-75987c6f.js";import"./index-975a2d8f.js";import"./flatten-7ea74e97.js";import"./utils-13313164.js";import"./index-cbfaa337.js";var ht=/\s/;function ft(e){for(var t=e.length;t--&&ht.test(e.charAt(t)););return t}var gt=/^\s+/;function mt(e){return e&&e.slice(0,ft(e)+1).replace(gt,"")}var xe=0/0,pt=/^[-+]0x[0-9a-f]+$/i,bt=/^0b[01]+$/i,vt=/^0o[0-7]+$/i,wt=parseInt;function ye(e){if(typeof e=="number")return e;if(st(e))return xe;if(ee(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ee(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=mt(e);var n=bt.test(e);return n||vt.test(e)?wt(e.slice(2),n?2:8):pt.test(e)?xe:+e}var xt=function(){return Ze.Date.now()};const he=xt;var yt="Expected a function",_t=Math.max,kt=Math.min;function St(e,t,n){var o,l,m,b,s,f,u=0,y=!1,_=!1,g=!0;if(typeof e!="function")throw new TypeError(yt);t=ye(t)||0,ee(n)&&(y=!!n.leading,_="maxWait"in n,m=_?_t(ye(n.maxWait)||0,t):m,g="trailing"in n?!!n.trailing:g);function C(r){var w=o,a=l;return o=l=void 0,u=r,b=e.apply(a,w),b}function N(r){return u=r,s=setTimeout(T,t),y?C(r):b}function U(r){var w=r-f,a=r-u,A=t-w;return _?kt(A,m-a):A}function M(r){var w=r-f,a=r-u;return f===void 0||w>=t||w<0||_&&a>=m}function T(){var r=he();if(M(r))return x(r);s=setTimeout(T,U(r))}function x(r){return s=void 0,g&&o?C(r):(o=l=void 0,b)}function k(){s!==void 0&&clearTimeout(s),u=0,o=f=l=s=void 0}function P(){return s===void 0?b:x(he())}function R(){var r=he(),w=M(r);if(o=arguments,l=this,f=r,w){if(s===void 0)return N(f);if(_)return clearTimeout(s),s=setTimeout(T,t),C(f)}return s===void 0&&(s=setTimeout(T,t)),b}return R.cancel=k,R.flush=P,R}var Ct="Expected a function";function Rt(e,t,n){var o=!0,l=!0;if(typeof e!="function")throw new TypeError(Ct);return ee(n)&&(o="leading"in n?!!n.leading:o,l="trailing"in n?!!n.trailing:l),St(e,t,{leading:o,maxWait:t,trailing:l})}const Tt=e=>{const{textColor2:t,modalColor:n,borderColor:o,fontSize:l,primaryColor:m}=e;return{loaderFontSize:l,loaderTextColor:t,loaderColor:n,loaderBorder:`1px solid ${o}`,loadingColor:m}},It=Qe({name:"Log",common:Ce,peers:{Scrollbar:nt,Code:rt},self:Tt}),Nt=It,Pt={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Bt=e=>{const{primaryColor:t,opacityDisabled:n,borderRadius:o,textColor3:l}=e,m="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Pt),{iconColor:l,textColor:"white",loadingColor:t,opacityDisabled:n,railColor:m,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${et(t,{alpha:.2})}`})},Lt={name:"Switch",common:Ce,self:Bt},At=Lt,$t=te({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:Ge("Log").localeRef}},render(){const{clsPrefix:e}=this;return p("div",{class:`${e}-log-loader`},p(Se,{clsPrefix:e,strokeWidth:24,scale:.85}),p("span",{class:`${e}-log-loader__content`},this.locale.loading))}}),Ie=tt("n-log"),zt=te({props:{line:{type:String,default:""}},setup(e){const{trimRef:t,highlightRef:n,languageRef:o,mergedHljsRef:l}=Ee(Ie),m=L(null),b=j(()=>t.value?e.line.trim():e.line);function s(){m.value&&(m.value.innerHTML=f(o.value,b.value))}function f(u,y){const{value:_}=l;return _&&u&&_.getLanguage(u)?_.highlight(y,{language:u}).value:y}return We(()=>{n.value&&s()}),Ve(Q(e,"line"),()=>{n.value&&s()}),{highlight:n,selfRef:m,maybeTrimmedLines:b}},render(){const{highlight:e,maybeTrimmedLines:t}=this;return p("pre",{ref:"selfRef"},e?null:t)}}),Ht=J("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[Z("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),J("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[ot(),h("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),J("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),jt=Object.assign(Object.assign({},oe.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),_e=te({name:"Log",props:jt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Re(e),o=L(!1),l=j(()=>e.language!==void 0),m=j(()=>`calc(${Math.round(e.rows*e.lineHeight*e.fontSize)}px)`),b=j(()=>{const{log:x}=e;return x?x.split(`
`):e.lines}),s=L(null),f=oe("Log","-log",Ht,Nt,e,t);function u(x){const k=x.target,P=k.firstElementChild;if(o.value){fe(()=>{o.value=!1});return}const R=k.offsetHeight,r=k.scrollTop,w=P.offsetHeight,a=r,A=w-r-R;if(a<=e.offsetTop){const{onReachTop:I,onRequireMore:S}=e;S&&S("top"),I&&I()}if(A<=e.offsetBottom){const{onReachBottom:I,onRequireMore:S}=e;S&&S("bottom"),I&&I()}}const y=Rt(_,300);function _(x){if(o.value){fe(()=>{o.value=!1});return}if(s.value){const{containerRef:k,contentRef:P}=s.value;if(k&&P){const R=k.offsetHeight,r=k.scrollTop,w=P.offsetHeight,a=r,A=w-r-R,I=x.deltaY;if(a===0&&I<0){const{onRequireMore:S}=e;S&&S("top")}if(A<=0&&I>0){const{onRequireMore:S}=e;S&&S("bottom")}}}}function g(x){const{value:k}=s;if(!k)return;const{slient:P,top:R,position:r}=x;P&&(o.value=!0),R!==void 0?k.scrollTo({left:0,top:R}):(r==="bottom"||r==="top")&&k.scrollTo({position:r})}function C(x=!1){ve("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),g({position:"top",slient:x})}function N(x=!1){ve("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),g({position:"bottom",slient:x})}Fe(Ie,{languageRef:Q(e,"language"),mergedHljsRef:at(e),trimRef:Q(e,"trim"),highlightRef:l});const U={scrollTo:g},M=j(()=>{const{self:{loaderFontSize:x,loaderTextColor:k,loaderColor:P,loaderBorder:R,loadingColor:r},common:{cubicBezierEaseInOut:w}}=f.value;return{"--n-bezier":w,"--n-loader-font-size":x,"--n-loader-border":R,"--n-loader-color":P,"--n-loader-text-color":k,"--n-loading-color":r}}),T=n?Te("log",void 0,M,e):void 0;return Object.assign(Object.assign({},U),{mergedClsPrefix:t,scrollbarRef:s,mergedTheme:f,styleHeight:m,mergedLines:b,scrollToTop:C,scrollToBottom:N,handleWheel:y,handleScroll:u,cssVars:n?void 0:M,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){const{mergedClsPrefix:e,mergedTheme:t,onRender:n}=this;return n==null||n(),p("div",{class:[`${e}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[p(it,{ref:"scrollbarRef",theme:t.peers.Scrollbar,themeOverrides:t.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>p(lt,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:t.peers.Code,themeOverrides:t.peerOverrides.Code},{default:()=>this.mergedLines.map((o,l)=>p(zt,{key:l,line:o}))})}),p(Je,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?p($t,{clsPrefix:e}):null})])}}),Et=J("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[h("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),h("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),h("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),J("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[be({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),h("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),h("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),h("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),Z("&:focus",[h("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),z("round",[h("rail","border-radius: calc(var(--n-rail-height) / 2);",[h("button","border-radius: calc(var(--n-button-height) / 2);")])]),we("disabled",[we("icon",[z("rubber-band",[z("pressed",[h("rail",[h("button","max-width: var(--n-button-width-pressed);")])]),h("rail",[Z("&:active",[h("button","max-width: var(--n-button-width-pressed);")])]),z("active",[z("pressed",[h("rail",[h("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),h("rail",[Z("&:active",[h("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),z("active",[h("rail",[h("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),h("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[h("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[be()]),h("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),z("active",[h("rail","background-color: var(--n-rail-color-active);")]),z("loading",[h("rail",`
 cursor: wait;
 `)]),z("disabled",[h("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Wt=Object.assign(Object.assign({},oe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Y;const Vt=te({name:"Switch",props:Wt,setup(e){Y===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Y=CSS.supports("width","max(1px)"):Y=!1:Y=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Re(e),o=oe("Switch","-switch",Et,At,e,t),l=Xe(e),{mergedSizeRef:m,mergedDisabledRef:b}=l,s=L(e.defaultValue),f=Q(e,"value"),u=ct(f,s),y=j(()=>u.value===e.checkedValue),_=L(!1),g=L(!1),C=j(()=>{const{railStyle:a}=e;if(a)return a({focused:g.value,checked:y.value})});function N(a){const{"onUpdate:value":A,onChange:I,onUpdateValue:S}=e,{nTriggerFormInput:ne,nTriggerFormChange:ie}=l;A&&ue(A,a),S&&ue(S,a),I&&ue(I,a),s.value=a,ne(),ie()}function U(){const{nTriggerFormFocus:a}=l;a()}function M(){const{nTriggerFormBlur:a}=l;a()}function T(){e.loading||b.value||(u.value!==e.checkedValue?N(e.checkedValue):N(e.uncheckedValue))}function x(){g.value=!0,U()}function k(){g.value=!1,M(),_.value=!1}function P(a){e.loading||b.value||a.key===" "&&(u.value!==e.checkedValue?N(e.checkedValue):N(e.uncheckedValue),_.value=!1)}function R(a){e.loading||b.value||a.key===" "&&(a.preventDefault(),_.value=!0)}const r=j(()=>{const{value:a}=m,{self:{opacityDisabled:A,railColor:I,railColorActive:S,buttonBoxShadow:ne,buttonColor:ie,boxShadowFocus:Ne,loadingColor:Pe,textColor:Be,iconColor:Le,[O("buttonHeight",a)]:E,[O("buttonWidth",a)]:Ae,[O("buttonWidthPressed",a)]:$e,[O("railHeight",a)]:W,[O("railWidth",a)]:K,[O("railBorderRadius",a)]:ze,[O("buttonBorderRadius",a)]:He},common:{cubicBezierEaseInOut:je}}=o.value;let re,ae,le;return Y?(re=`calc((${W} - ${E}) / 2)`,ae=`max(${W}, ${E})`,le=`max(${K}, calc(${K} + ${E} - ${W}))`):(re=de((H(W)-H(E))/2),ae=de(Math.max(H(W),H(E))),le=H(W)>H(E)?K:de(H(K)+H(E)-H(W))),{"--n-bezier":je,"--n-button-border-radius":He,"--n-button-box-shadow":ne,"--n-button-color":ie,"--n-button-width":Ae,"--n-button-width-pressed":$e,"--n-button-height":E,"--n-height":ae,"--n-offset":re,"--n-opacity-disabled":A,"--n-rail-border-radius":ze,"--n-rail-color":I,"--n-rail-color-active":S,"--n-rail-height":W,"--n-rail-width":K,"--n-width":le,"--n-box-shadow-focus":Ne,"--n-loading-color":Pe,"--n-text-color":Be,"--n-icon-color":Le}}),w=n?Te("switch",j(()=>m.value[0]),r,e):void 0;return{handleClick:T,handleBlur:k,handleFocus:x,handleKeyup:P,handleKeydown:R,mergedRailStyle:C,pressed:_,mergedClsPrefix:t,mergedValue:u,checked:y,mergedDisabled:b,cssVars:n?void 0:r,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:o,onRender:l,$slots:m}=this;l==null||l();const{checked:b,unchecked:s,icon:f,"checked-icon":u,"unchecked-icon":y}=m,_=!(ce(f)&&ce(u)&&ce(y));return p("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,_&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},p("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},D(b,g=>D(s,C=>g||C?p("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},p("div",{class:`${e}-switch__rail-placeholder`},p("div",{class:`${e}-switch__button-placeholder`}),g),p("div",{class:`${e}-switch__rail-placeholder`},p("div",{class:`${e}-switch__button-placeholder`}),C)):null)),p("div",{class:`${e}-switch__button`},D(f,g=>D(u,C=>D(y,N=>p(Ye,null,{default:()=>this.loading?p(Se,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(C||g)?p("div",{class:`${e}-switch__button-icon`,key:C?"checked-icon":"icon"},C||g):!this.checked&&(N||g)?p("div",{class:`${e}-switch__button-icon`,key:N?"unchecked-icon":"icon"},N||g):null})))),D(b,g=>g&&p("div",{key:"checked",class:`${e}-switch__checked`},g)),D(s,g=>g&&p("div",{key:"unchecked",class:`${e}-switch__unchecked`},g)))))}});var Ft=(e,t)=>{window.EventList=window.EventList||{},window.EventList[e]=t},Mt=(e,t=[])=>(window.EventList=window.EventList||{},window.EventList[e](...t));const ke="_5dbwat4_proj_thost_r3_be",Ot={__name:"APIReminder",setup(e){const t=L("waiting"),n=L("https://example.com"),o=L("n"),l=()=>{o.value="checking",fetch(n.value+"/api/whoareyou").then(f=>f.json()).then(f=>{f.entity==ke?(o.value="success",s.value.enterImmediatelyAfterCheckingAPI&&b()):(o.value="error",m.value=`Not Match.==>
`+JSON.stringify(f,null,4))}).catch(f=>{o.value="error",m.value=`Error Fetching.==>
`+f})},m=L("nothing"),b=()=>{localStorage.setItem("__5dbwat_proj__thost_apihost",n.value),console.log("xxx"),localStorage.setItem("__5dbwat_proj__thost_preference",JSON.stringify(s.value)),Mt("entryAllowStateUpdate",[!0])};localStorage.getItem("__5dbwat_proj__thost_apihost")?(n.value=localStorage.getItem("__5dbwat_proj__thost_apihost"),t.value="checking",l()):t.value="unspecified";const s=L(JSON.parse(localStorage.getItem("__5dbwat_proj__thost_preference")||'{"enterImmediatelyAfterCheckingAPI":false}'));return De(),(f,u)=>(B(),$(i(ut),{show:!0},{default:d(()=>[Me("div",null,[t.value=="unspecified"?(B(),$(i(se),{key:0,style:{width:"600px"},title:"你可能需要指定一个API地址",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{footer:d(()=>[]),default:d(()=>[c(i(F),null,{default:d(()=>[v("你需要配合一个后端API才能正常的使用thost的相关功能。这就要求你指定一个API地址。")]),_:1}),c(i(F),null,{default:d(()=>[v("本版本的thost所需的API为："),c(i(q),{code:""},{default:d(()=>[v("_5dbwat4_proj_thost_r3_be")]),_:1}),v(" 版本为 "),c(i(q),{code:""},{default:d(()=>[v("r3")]),_:1})]),_:1}),c(i(pe)),c(i(Ke),null,{default:d(()=>[c(i(qe),{value:n.value,"onUpdate:value":u[0]||(u[0]=y=>n.value=y)},null,8,["value"]),c(i(G),{type:"primary",loading:o.value=="checking",onClick:l},{default:d(()=>[v(" 检查API状态 ")]),_:1},8,["loading"])]),_:1}),o.value=="success"?(B(),$(i(X),{key:0,title:"API地址验证成功",type:"success"},{default:d(()=>[c(i(F),null,{default:d(()=>[v("API验证成功。开始使用thost吧！")]),_:1}),c(i(G),{type:"primary",onClick:b,disabled:o.value!="success"},{default:d(()=>[v("确定 ")]),_:1},8,["disabled"])]),_:1})):V("",!0),o.value=="error"?(B(),$(i(X),{key:1,title:"API地址验证失败",type:"error"},{default:d(()=>[v(" API验证失败。以下是相关信息: "),c(i(_e),{log:m.value,rows:5},null,8,["log"])]),_:1})):V("",!0)]),_:1})):V("",!0),t.value=="checking"?(B(),$(i(se),{key:1,style:{width:"600px"},title:"我们需要确认你指定的API地址是可用的",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{footer:d(()=>[]),default:d(()=>[c(i(F),null,{default:d(()=>[v("你需要配合一个后端API才能正常的使用thost的相关功能。你之前可能已经指定过一个。我们需要确认你指定的API地址是可用的。")]),_:1}),c(i(F),null,{default:d(()=>[v("本版本的thost所需的API为："),c(i(q),{code:""},{default:d(()=>[v(ge(ke))]),_:1}),v(" 版本为 "),c(i(q),{code:""},{default:d(()=>[v("r3")]),_:1})]),_:1}),c(i(F),null,{default:d(()=>[v("您指定的API地址是"),c(i(q),{code:""},{default:d(()=>[v(ge(n.value),1)]),_:1}),c(i(G),{type:"text",onClick:u[1]||(u[1]=y=>(t.value="unspecified",o.value="nothing"))},{default:d(()=>[v("(更换API地址)")]),_:1})]),_:1}),c(i(pe)),c(i(dt),{show:o.value=="checking"},{default:d(()=>[o.value=="checking"?(B(),$(i(X),{key:0,title:"正在等待响应",type:"info"})):V("",!0)]),_:1},8,["show"]),o.value=="success"?(B(),$(i(X),{key:0,title:"API地址验证成功",type:"success"},{default:d(()=>[c(i(F),null,{default:d(()=>[v("API验证成功。开始使用thost吧！")]),_:1}),c(i(G),{type:"primary",onClick:b,disabled:o.value!="success"},{default:d(()=>[v("确定 ")]),_:1},8,["disabled"]),c(i(F),null,{default:d(()=>[v("以后加载完成后总是自动进入主页面 "),c(i(Vt),{value:s.value.enterImmediatelyAfterCheckingAPI,"onUpdate:value":u[2]||(u[2]=y=>s.value.enterImmediatelyAfterCheckingAPI=y)},null,8,["value"])]),_:1})]),_:1})):V("",!0),o.value=="error"?(B(),$(i(X),{key:1,title:"API地址验证失败",type:"error"},{default:d(()=>[v(" API验证失败。以下是相关信息: "),c(i(_e),{log:m.value,rows:5},null,8,["log"])]),_:1})):V("",!0)]),_:1})):V("",!0),t.value=="waiting"?(B(),$(i(se),{key:2,style:{width:"600px"},title:"Waiting",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:d(()=>[v(" 正在运行逻辑，请稍等。 ")]),_:1})):V("",!0)])]),_:1}))}},Dt={key:0},Ut={key:1},No={__name:"main",setup(e){const t=L(!1);return Ft("entryAllowStateUpdate",(n,o)=>{console.log(n,o),t.value=n}),(n,o)=>{const l=Oe("router-view");return B(),$(i(Ue),null,{default:d(()=>[i(t)?(B(),me("div",Dt,[c(l)])):(B(),me("div",Ut,[c(Ot)]))]),_:1})}}};export{No as default};
