import{v as R,O as W,aZ as k,aA as Pe,J as o,i as S,a2 as Re,X as Ae,aa as ee,T as Ie,F as _e,aX as Be,as as Ne,az as Oe,a8 as Te,j as Le,aE as je,s as He,bd as te,b7 as oe}from"./runtime-core.esm-bundler-c066f4bf.js";import{c as We,a as ne,b as ae,u as V,s as Ee,t as q,h as se,e as x,d as l,l as v,f as P,g as E,A as De}from"./light-185f79ed.js";import{f as I}from"./format-length-c9d165c6.js";import{N as G}from"./Icon-13ca7aa7.js";import{I as Y,S as J,W as Z,E as Q}from"./Warning-9f568e6f.js";import{s as Fe,N as Me,k as qe,d as _,a as Xe,c as Ke}from"./Scrollbar-431c7fad.js";import{T as Ve}from"./runtime-dom.esm-bundler-caa8590e.js";import{g as Ge,N as Ye}from"./Close-869cd549.js";function Je(e,t=[],n){const i={};return Object.getOwnPropertyNames(e).forEach(c=>{t.includes(c)||(i[c]=e[c])}),Object.assign(i,n)}const Ze={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},Qe=e=>{const{textColor2:t,successColor:n,infoColor:i,warningColor:a,errorColor:c,popoverColor:u,closeIconColor:g,closeIconColorHover:f,closeIconColorPressed:p,closeColorHover:m,closeColorPressed:h,textColor1:b,textColor3:s,borderRadius:r,fontWeightStrong:d,boxShadow2:y,lineHeight:w,fontSize:C}=e;return Object.assign(Object.assign({},Ze),{borderRadius:r,lineHeight:w,fontSize:C,headerFontWeight:d,iconColor:t,iconColorSuccess:n,iconColorInfo:i,iconColorWarning:a,iconColorError:c,color:u,textColor:t,closeIconColor:g,closeIconColorHover:f,closeIconColorPressed:p,closeBorderRadius:r,closeColorHover:m,closeColorPressed:h,headerTextColor:b,descriptionTextColor:s,actionTextColor:t,boxShadow:y})},Ue=We({name:"Notification",common:ne,peers:{Scrollbar:Fe},self:Qe}),et=Ue,tt=e=>{const{infoColor:t,successColor:n,warningColor:i,errorColor:a,textColor2:c,progressRailColor:u,fontSize:g,fontWeight:f}=e;return{fontSize:g,fontSizeCircle:"28px",fontWeightCircle:f,railColor:u,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:n,iconColorWarning:i,iconColorError:a,textColorCircle:c,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:c,fillColor:t,fillColorInfo:t,fillColorSuccess:n,fillColorWarning:i,fillColorError:a,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},ot={name:"Progress",common:ne,self:tt},it=ot,D=ae("n-notification-provider"),rt=R({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:t,wipTransitionCountRef:n}=W(D),i=k(null);return Pe(()=>{var a,c;n.value>0?(a=i?.value)===null||a===void 0||a.classList.add("transitioning"):(c=i?.value)===null||c===void 0||c.classList.remove("transitioning")}),{selfRef:i,mergedTheme:e,mergedClsPrefix:t,transitioning:n}},render(){const{$slots:e,scrollable:t,mergedClsPrefix:n,mergedTheme:i,placement:a}=this;return o("div",{ref:"selfRef",class:[`${n}-notification-container`,t&&`${n}-notification-container--scrollable`,`${n}-notification-container--${a}`]},t?o(Me,{theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},e):e)}}),nt={info:()=>o(Y,null),success:()=>o(J,null),warning:()=>o(Z,null),error:()=>o(Q,null),default:()=>null},U={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},at=qe(U),st=R({name:"Notification",props:U,setup(e){const{mergedClsPrefixRef:t,mergedThemeRef:n,props:i}=W(D),{inlineThemeDisabled:a,mergedRtlRef:c}=V(),u=Ee("Notification",c,t),g=S(()=>{const{type:p}=e,{self:{color:m,textColor:h,closeIconColor:b,closeIconColorHover:s,closeIconColorPressed:r,headerTextColor:d,descriptionTextColor:y,actionTextColor:w,borderRadius:C,headerFontWeight:z,boxShadow:$,lineHeight:O,fontSize:A,closeMargin:T,closeSize:ce,width:de,padding:fe,closeIconSize:ue,closeBorderRadius:ge,closeColorHover:pe,closeColorPressed:he,titleFontSize:ve,metaFontSize:me,descriptionFontSize:be,[q("iconColor",p)]:xe},common:{cubicBezierEaseOut:ye,cubicBezierEaseIn:Ce,cubicBezierEaseInOut:we}}=n.value,{left:Se,right:ze,top:$e,bottom:ke}=Ge(fe);return{"--n-color":m,"--n-font-size":A,"--n-text-color":h,"--n-description-text-color":y,"--n-action-text-color":w,"--n-title-text-color":d,"--n-title-font-weight":z,"--n-bezier":we,"--n-bezier-ease-out":ye,"--n-bezier-ease-in":Ce,"--n-border-radius":C,"--n-box-shadow":$,"--n-close-border-radius":ge,"--n-close-color-hover":pe,"--n-close-color-pressed":he,"--n-close-icon-color":b,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":r,"--n-line-height":O,"--n-icon-color":xe,"--n-close-margin":T,"--n-close-size":ce,"--n-close-icon-size":ue,"--n-width":de,"--n-padding-left":Se,"--n-padding-right":ze,"--n-padding-top":$e,"--n-padding-bottom":ke,"--n-title-font-size":ve,"--n-meta-font-size":me,"--n-description-font-size":be}}),f=a?se("notification",S(()=>e.type[0]),g,i):void 0;return{mergedClsPrefix:t,showAvatar:S(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:u,cssVars:a?void 0:g,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),o("div",{class:[`${t}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},o("div",{class:[`${t}-notification`,this.rtlEnabled&&`${t}-notification--rtl`,this.themeClass,{[`${t}-notification--closable`]:this.closable,[`${t}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?o("div",{class:`${t}-notification__avatar`},this.avatar?_(this.avatar):this.type!=="default"?o(G,{clsPrefix:t},{default:()=>nt[this.type]()}):null):null,this.closable?o(Ye,{clsPrefix:t,class:`${t}-notification__close`,onClick:this.handleCloseClick}):null,o("div",{ref:"bodyRef",class:`${t}-notification-main`},this.title?o("div",{class:`${t}-notification-main__header`},_(this.title)):null,this.description?o("div",{class:`${t}-notification-main__description`},_(this.description)):null,this.content?o("pre",{class:`${t}-notification-main__content`},_(this.content)):null,this.meta||this.action?o("div",{class:`${t}-notification-main-footer`},this.meta?o("div",{class:`${t}-notification-main-footer__meta`},_(this.meta)):null,this.action?o("div",{class:`${t}-notification-main-footer__action`},_(this.action)):null):null)))}}),lt=Object.assign(Object.assign({},U),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),ct=R({name:"NotificationEnvironment",props:Object.assign(Object.assign({},lt),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const{wipTransitionCountRef:t}=W(D),n=k(!0);let i=null;function a(){n.value=!1,i&&window.clearTimeout(i)}function c(r){t.value++,Ae(()=>{r.style.height=`${r.offsetHeight}px`,r.style.maxHeight="0",r.style.transition="none",r.offsetHeight,r.style.transition="",r.style.maxHeight=r.style.height})}function u(r){t.value--,r.style.height="",r.style.maxHeight="";const{onAfterEnter:d,onAfterShow:y}=e;d&&d(),y&&y()}function g(r){t.value++,r.style.maxHeight=`${r.offsetHeight}px`,r.style.height=`${r.offsetHeight}px`,r.offsetHeight}function f(r){const{onHide:d}=e;d&&d(),r.style.maxHeight="0",r.offsetHeight}function p(){t.value--;const{onAfterLeave:r,onInternalAfterLeave:d,onAfterHide:y,internalKey:w}=e;r&&r(),d(w),y&&y()}function m(){const{duration:r}=e;r&&(i=window.setTimeout(a,r))}function h(r){r.currentTarget===r.target&&i!==null&&(window.clearTimeout(i),i=null)}function b(r){r.currentTarget===r.target&&m()}function s(){const{onClose:r}=e;r?Promise.resolve(r()).then(d=>{d!==!1&&a()}):a()}return Re(()=>{e.duration&&(i=window.setTimeout(a,e.duration))}),{show:n,hide:a,handleClose:s,handleAfterLeave:p,handleLeave:f,handleBeforeLeave:g,handleAfterEnter:u,handleBeforeEnter:c,handleMouseenter:h,handleMouseleave:b}},render(){return o(Ve,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?o(st,Object.assign({},Xe(this.$props,at),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),dt=x([l("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[x(">",[l("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[x(">",[l("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[l("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),v("top, top-right, top-left",`
 top: 12px;
 `,[x("&.transitioning >",[l("scrollbar",[x(">",[l("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),v("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[x(">",[l("scrollbar",[x(">",[l("scrollbar-container",[l("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),l("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),v("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[l("notification-wrapper",[x("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),x("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),v("top",[l("notification-wrapper",`
 transform-origin: top center;
 `)]),v("bottom",[l("notification-wrapper",`
 transform-origin: bottom center;
 `)]),v("top-right, bottom-right",[l("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),v("top-left, bottom-left",[l("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),v("top-right",`
 right: 0;
 `,[L("top-right")]),v("top-left",`
 left: 0;
 `,[L("top-left")]),v("bottom-right",`
 right: 0;
 `,[L("bottom-right")]),v("bottom-left",`
 left: 0;
 `,[L("bottom-left")]),v("scrollable",[v("top-right",`
 top: 0;
 `),v("top-left",`
 top: 0;
 `),v("bottom-right",`
 bottom: 0;
 `),v("bottom-left",`
 bottom: 0;
 `)]),l("notification-wrapper",`
 margin-bottom: 12px;
 `,[x("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),x("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),x("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),x("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),l("notification",`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[P("avatar",[l("icon",{color:"var(--n-icon-color)"}),l("base-icon",{color:"var(--n-icon-color)"})]),v("show-avatar",[l("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),v("closable",[l("notification-main",[x("> *:first-child",{paddingRight:"20px"})]),P("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),P("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("icon","transition: color .3s var(--n-bezier);")]),l("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[l("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[P("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),P("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),P("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),P("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),P("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[x("&:first-child",{margin:0})])])])])]);function L(e){const n=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",i="0";return l("notification-wrapper",[x("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${n}, 0);
 `),x("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${i}, 0);
 `)])}const le=ae("n-notification-api"),ft=Object.assign(Object.assign({},E.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),Bt=R({name:"NotificationProvider",props:ft,setup(e){const{mergedClsPrefixRef:t}=V(e),n=k([]),i={},a=new Set;function c(s){const r=Ke(),d=()=>{a.add(r),i[r]&&i[r].hide()},y=Be(Object.assign(Object.assign({},s),{key:r,destroy:d,hide:d,deactivate:d})),{max:w}=e;if(w&&n.value.length-a.size>=w){let C=!1,z=0;for(const $ of n.value){if(!a.has($.key)){i[$.key]&&($.destroy(),C=!0);break}z++}C||n.value.splice(z,1)}return n.value.push(y),y}const u=["info","success","warning","error"].map(s=>r=>c(Object.assign(Object.assign({},r),{type:s})));function g(s){a.delete(s),n.value.splice(n.value.findIndex(r=>r.key===s),1)}const f=E("Notification","-notification",dt,et,e,t),p={create:c,info:u[0],success:u[1],warning:u[2],error:u[3],open:h,destroyAll:b},m=k(0);ee(le,p),ee(D,{props:e,mergedClsPrefixRef:t,mergedThemeRef:f,wipTransitionCountRef:m});function h(s){return c(s)}function b(){Object.values(n.value).forEach(s=>{s.hide()})}return Object.assign({mergedClsPrefix:t,notificationList:n,notificationRefs:i,handleAfterLeave:g},p)},render(){var e,t,n;const{placement:i}=this;return o(_e,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.notificationList.length?o(Ie,{to:(n=this.to)!==null&&n!==void 0?n:"body"},o(rt,{style:this.containerStyle,scrollable:this.scrollable&&i!=="top"&&i!=="bottom",placement:i},{default:()=>this.notificationList.map(a=>o(ct,Object.assign({ref:c=>{const u=a.key;c===null?delete this.notificationRefs[u]:this.notificationRefs[u]=c}},Je(a,["destroy","hide","deactivate"]),{internalKey:a.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:a.keepAliveOnHover===void 0?this.keepAliveOnHover:a.keepAliveOnHover})))})):null)}});function ut(){const e=W(le,null);return e===null&&De("use-notification","No outer `n-notification-provider` found."),e}const gt=x([l("progress",{display:"inline-block"},[l("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),v("line",`
 width: 100%;
 display: block;
 `,[l("progress-content",`
 display: flex;
 align-items: center;
 `,[l("progress-graph",{flex:1})]),l("progress-custom-content",{marginLeft:"14px"}),l("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[v("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),v("circle, dashboard",{width:"120px"},[l("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),l("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),l("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),v("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[l("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),l("progress-content",{position:"relative"}),l("progress-graph",{position:"relative"},[l("progress-graph-circle",[x("svg",{verticalAlign:"bottom"}),l("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[v("empty",{opacity:0})]),l("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),l("progress-graph-line",[v("indicator-inside",[l("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[l("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),l("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),v("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[l("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),l("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),l("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[l("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[v("processing",[x("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),x("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),pt={success:o(J,null),error:o(Q,null),warning:o(Z,null),info:o(Y,null)},ht=R({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const n=S(()=>I(e.height)),i=S(()=>e.railBorderRadius!==void 0?I(e.railBorderRadius):e.height!==void 0?I(e.height,{c:.5}):""),a=S(()=>e.fillBorderRadius!==void 0?I(e.fillBorderRadius):e.railBorderRadius!==void 0?I(e.railBorderRadius):e.height!==void 0?I(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:c,railColor:u,railStyle:g,percentage:f,unit:p,indicatorTextColor:m,status:h,showIndicator:b,fillColor:s,processing:r,clsPrefix:d}=e;return o("div",{class:`${d}-progress-content`,role:"none"},o("div",{class:`${d}-progress-graph`,"aria-hidden":!0},o("div",{class:[`${d}-progress-graph-line`,{[`${d}-progress-graph-line--indicator-${c}`]:!0}]},o("div",{class:`${d}-progress-graph-line-rail`,style:[{backgroundColor:u,height:n.value,borderRadius:i.value},g]},o("div",{class:[`${d}-progress-graph-line-fill`,r&&`${d}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:s,height:n.value,lineHeight:n.value,borderRadius:a.value}},c==="inside"?o("div",{class:`${d}-progress-graph-line-indicator`,style:{color:m}},f,p):null)))),b&&c==="outside"?o("div",null,t.default?o("div",{class:`${d}-progress-custom-content`,style:{color:m},role:"none"},t.default()):h==="default"?o("div",{role:"none",class:`${d}-progress-icon ${d}-progress-icon--as-text`,style:{color:m}},f,p):o("div",{class:`${d}-progress-icon`,"aria-hidden":!0},o(G,{clsPrefix:d},{default:()=>pt[h]}))):null)}}}),vt={success:o(J,null),error:o(Q,null),warning:o(Z,null),info:o(Y,null)},mt=R({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function n(i,a,c){const{gapDegree:u,viewBoxWidth:g,strokeWidth:f}=e,p=50,m=0,h=p,b=0,s=2*p,r=50+f/2,d=`M ${r},${r} m ${m},${h}
      a ${p},${p} 0 1 1 ${b},${-s}
      a ${p},${p} 0 1 1 ${-b},${s}`,y=Math.PI*2*p,w={stroke:c,strokeDasharray:`${i/100*(y-u)}px ${g*8}px`,strokeDashoffset:`-${u/2}px`,transformOrigin:a?"center":void 0,transform:a?`rotate(${a}deg)`:void 0};return{pathString:d,pathStyle:w}}return()=>{const{fillColor:i,railColor:a,strokeWidth:c,offsetDegree:u,status:g,percentage:f,showIndicator:p,indicatorTextColor:m,unit:h,gapOffsetDegree:b,clsPrefix:s}=e,{pathString:r,pathStyle:d}=n(100,0,a),{pathString:y,pathStyle:w}=n(f,u,i),C=100+c;return o("div",{class:`${s}-progress-content`,role:"none"},o("div",{class:`${s}-progress-graph`,"aria-hidden":!0},o("div",{class:`${s}-progress-graph-circle`,style:{transform:b?`rotate(${b}deg)`:void 0}},o("svg",{viewBox:`0 0 ${C} ${C}`},o("g",null,o("path",{class:`${s}-progress-graph-circle-rail`,d:r,"stroke-width":c,"stroke-linecap":"round",fill:"none",style:d})),o("g",null,o("path",{class:[`${s}-progress-graph-circle-fill`,f===0&&`${s}-progress-graph-circle-fill--empty`],d:y,"stroke-width":c,"stroke-linecap":"round",fill:"none",style:w}))))),p?o("div",null,t.default?o("div",{class:`${s}-progress-custom-content`,role:"none"},t.default()):g!=="default"?o("div",{class:`${s}-progress-icon`,"aria-hidden":!0},o(G,{clsPrefix:s},{default:()=>vt[g]})):o("div",{class:`${s}-progress-text`,style:{color:m},role:"none"},o("span",{class:`${s}-progress-text__percentage`},f),o("span",{class:`${s}-progress-text__unit`},h))):null)}}});function ie(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const bt=R({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const n=S(()=>e.percentage.map((a,c)=>`${Math.PI*a/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*c)-e.circleGap*c)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:i,strokeWidth:a,circleGap:c,showIndicator:u,fillColor:g,railColor:f,railStyle:p,percentage:m,clsPrefix:h}=e;return o("div",{class:`${h}-progress-content`,role:"none"},o("div",{class:`${h}-progress-graph`,"aria-hidden":!0},o("div",{class:`${h}-progress-graph-circle`},o("svg",{viewBox:`0 0 ${i} ${i}`},m.map((b,s)=>o("g",{key:s},o("path",{class:`${h}-progress-graph-circle-rail`,d:ie(i/2-a/2*(1+2*s)-c*s,a,i),"stroke-width":a,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:f[s]},p[s]]}),o("path",{class:[`${h}-progress-graph-circle-fill`,b===0&&`${h}-progress-graph-circle-fill--empty`],d:ie(i/2-a/2*(1+2*s)-c*s,a,i),"stroke-width":a,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:n.value[s],strokeDashoffset:0,stroke:g[s]}})))))),u&&t.default?o("div",null,o("div",{class:`${h}-progress-text`},t.default())):null)}}}),xt=Object.assign(Object.assign({},E.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),yt=R({name:"Progress",props:xt,setup(e){const t=S(()=>e.indicatorPlacement||e.indicatorPosition),n=S(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:i,inlineThemeDisabled:a}=V(e),c=E("Progress","-progress",gt,it,e,i),u=S(()=>{const{status:f}=e,{common:{cubicBezierEaseInOut:p},self:{fontSize:m,fontSizeCircle:h,railColor:b,railHeight:s,iconSizeCircle:r,iconSizeLine:d,textColorCircle:y,textColorLineInner:w,textColorLineOuter:C,lineBgProcessing:z,fontWeightCircle:$,[q("iconColor",f)]:O,[q("fillColor",f)]:A}}=c.value;return{"--n-bezier":p,"--n-fill-color":A,"--n-font-size":m,"--n-font-size-circle":h,"--n-font-weight-circle":$,"--n-icon-color":O,"--n-icon-size-circle":r,"--n-icon-size-line":d,"--n-line-bg-processing":z,"--n-rail-color":b,"--n-rail-height":s,"--n-text-color-circle":y,"--n-text-color-line-inner":w,"--n-text-color-line-outer":C}}),g=a?se("progress",S(()=>e.status[0]),u,e):void 0;return{mergedClsPrefix:i,mergedIndicatorPlacement:t,gapDeg:n,cssVars:a?void 0:u,themeClass:g?.themeClass,onRender:g?.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:n,showIndicator:i,status:a,railColor:c,railStyle:u,color:g,percentage:f,viewBoxWidth:p,strokeWidth:m,mergedIndicatorPlacement:h,unit:b,borderRadius:s,fillBorderRadius:r,height:d,processing:y,circleGap:w,mergedClsPrefix:C,gapDeg:z,gapOffsetDegree:$,themeClass:O,$slots:A,onRender:T}=this;return T?.(),o("div",{class:[O,`${C}-progress`,`${C}-progress--${e}`,`${C}-progress--${a}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":f,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?o(mt,{clsPrefix:C,status:a,showIndicator:i,indicatorTextColor:n,railColor:c,fillColor:g,railStyle:u,offsetDegree:this.offsetDegree,percentage:f,viewBoxWidth:p,strokeWidth:m,gapDegree:z===void 0?e==="dashboard"?75:0:z,gapOffsetDegree:$,unit:b},A):e==="line"?o(ht,{clsPrefix:C,status:a,showIndicator:i,indicatorTextColor:n,railColor:c,fillColor:g,railStyle:u,percentage:f,processing:y,indicatorPlacement:h,unit:b,fillBorderRadius:r,railBorderRadius:s,height:d},A):e==="multiple-circle"?o(bt,{clsPrefix:C,strokeWidth:m,railColor:c,fillColor:g,railStyle:u,viewBoxWidth:p,percentage:f,showIndicator:i,circleGap:w},A):null)}}),Ct={__name:"APICallingTe",setup(e){const t=Ne();console.log(t);const n=k(100),i=k(0);return Oe([t.ACC,t.ACR],()=>{n.value=1/(t.ACR.value+1)*(t.ACC.value-t.ACR.value)/t.ACC.value*100,i.value=t.ACC.value-t.ACR.value}),(a,c)=>(Te(),Le(oe(yt),{type:"line",percentage:n.value,processing:""},{default:je(()=>[He(te(i.value)+" / "+te(oe(t).ACC),1)]),_:1},8,["percentage"]))}},X=k(0),B=k(0),wt={get:async e=>(X.value++,B.value++,j(),await fetch(localStorage.getItem("__5dbwat_proj__thost_apihost")+e,{credentials:"include"}).then(t=>(B.value--,j(),t.json())).catch(t=>{re(e,"GET",t)})),post:async(e,t)=>(X.value++,B.value++,j(),await fetch(localStorage.getItem("__5dbwat_proj__thost_apihost")+e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"}).then(n=>(j(),B.value--,n.json())).catch(n=>{re(e,"POST",n)})),get host(){return localStorage.getItem("__5dbwat_proj__thost_apihost")}},K=k(),St=o(Ct,{ACC:X,ACR:B});let M=0,H=!1,N=!1,F={};const Nt=()=>{H||(F=ut(),H=!0,setInterval(()=>{N&&(K.value.destroy(),N=!1)},1e3))},j=()=>{B.value==0?M=setTimeout(()=>{N&&(K.value.destroy(),N=!1)},500):N||(M!=0&&clearTimeout(M),K.value=F.create({title:"API Calling.",closable:!1,content:()=>St}),N=!0)},re=(e,t,n)=>{H&&F.error({content:"Network error.",closable:!0,meta:`Network error when ${t} [${e}].error:${n} <a href="${wt.host}${e}" target="_blank">Detail</a>`})},Ot=()=>{H&&F.destoryAll()};export{wt as A,Bt as N,Ot as d,Nt as i,Je as o,ut as u};
