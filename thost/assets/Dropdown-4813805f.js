import{p as Pe,V as ke,b as Ne,c as Ie,r as Ce,N as Re,a as ce}from"./Popover-c9633131.js";import{aZ as _,az as ie,aX as Ke,Z as Oe,_ as Te,aY as ze,v as $,J as s,O as H,i as y,aa as W,W as pe,F as Ae,b3 as K}from"./runtime-core.esm-bundler-c066f4bf.js";import{T as Fe}from"./runtime-dom.esm-bundler-caa8590e.js";import{c as Be,a as De,o as _e,b as de,w as He,d as C,e as j,p as le,l as O,f as A,u as $e,g as fe,h as Me,t as D}from"./light-d6058c0b.js";import{p as he,a as Le,d as je,f as We}from"./fade-in-scale-up.cssr-e8989780.js";import{u as X}from"./use-memo-b9add725.js";import{o as V,b as G,d as Z,X as Ee,a as Ue}from"./Scrollbar-24cda971.js";import{N as qe}from"./Icon-6184ebf4.js";import{C as Ve}from"./ChevronRight-989c7384.js";import{h as se,c as Ge}from"./create-e19b3023.js";import{u as Xe}from"./use-merged-state-89f8109f.js";import{h as Ze}from"./utils-d7fa52af.js";import{c as te}from"./FadeInExpandTransition-ff940b4d.js";function Je(e){return o=>{o?e.value=o.$el:e.value=null}}function Ye(e,o,i){if(!o)return e;const r=_(e.value);let t=null;return ie(e,n=>{t!==null&&window.clearTimeout(t),n===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function Qe(e={},o){const i=Ke({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,n=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(w=>{if(w!==d.key)return;const h=r[w];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},u=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(w=>{if(w!==d.key)return;const h=t[w];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},p=()=>{(o===void 0||o.value)&&(G("keydown",document,n),G("keyup",document,u)),o!==void 0&&ie(o,d=>{d?(G("keydown",document,n),G("keyup",document,u)):(V("keydown",document,n),V("keyup",document,u))})};return Ze()?(Oe(p),Te(()=>{(o===void 0||o.value)&&(V("keydown",document,n),V("keyup",document,u))})):p(),ze(i)}const eo={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},oo=e=>{const{primaryColor:o,textColor2:i,dividerColor:r,hoverColor:t,popoverColor:n,invertedColor:u,borderRadius:p,fontSizeSmall:d,fontSizeMedium:w,fontSizeLarge:h,fontSizeHuge:g,heightSmall:S,heightMedium:k,heightLarge:N,heightHuge:T,textColor3:x,opacityDisabled:I}=e;return Object.assign(Object.assign({},eo),{optionHeightSmall:S,optionHeightMedium:k,optionHeightLarge:N,optionHeightHuge:T,borderRadius:p,fontSizeSmall:d,fontSizeMedium:w,fontSizeLarge:h,fontSizeHuge:g,optionTextColor:i,optionTextColorHover:i,optionTextColorActive:o,optionTextColorChildActive:o,color:n,dividerColor:r,suffixColor:i,prefixColor:i,optionColorHover:t,optionColorActive:_e(o,{alpha:.1}),groupHeaderTextColor:x,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:u,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:I})},no=Be({name:"Dropdown",common:De,peers:{Popover:Pe},self:oo}),to=no,ve=$({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ae=de("n-dropdown-menu"),J=de("n-dropdown"),ue=de("n-dropdown-option");function re(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function ro(e){return e.type==="group"}function me(e){return e.type==="divider"}function io(e){return e.type==="render"}const be=$({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=H(J),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:n,activeKeyPathRef:u,animatedRef:p,mergedShowRef:d,renderLabelRef:w,renderIconRef:h,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:k,nodePropsRef:N,menuPropsRef:T}=o,x=H(ue,null),I=H(ae),E=H(he),Y=y(()=>e.tmNode.rawNode),U=y(()=>{const{value:l}=S;return re(e.tmNode.rawNode,l)}),Q=y(()=>{const{disabled:l}=e.tmNode;return l}),ee=y(()=>{if(!U.value)return!1;const{key:l,disabled:b}=e.tmNode;if(b)return!1;const{value:R}=i,{value:F}=r,{value:ne}=t,{value:B}=n;return R!==null?B.includes(l):F!==null?B.includes(l)&&B[B.length-1]!==l:ne!==null?B.includes(l):!1}),oe=y(()=>r.value===null&&!p.value),q=Ye(ee,300,oe),M=y(()=>!!x?.enteringSubmenuRef.value),L=_(!1);W(ue,{enteringSubmenuRef:L});function z(){L.value=!0}function a(){L.value=!1}function m(){const{parentKey:l,tmNode:b}=e;b.disabled||d.value&&(t.value=l,r.value=null,i.value=b.key)}function f(){const{tmNode:l}=e;l.disabled||d.value&&i.value!==l.key&&m()}function c(l){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:b}=l;b&&!se({target:b},"dropdownOption")&&!se({target:b},"scrollbarRail")&&(i.value=null)}function P(){const{value:l}=U,{tmNode:b}=e;d.value&&!l&&!b.disabled&&(o.doSelect(b.key,b.rawNode),o.doUpdateShow(!1))}return{labelField:g,renderLabel:w,renderIcon:h,siblingHasIcon:I.showIconRef,siblingHasSubmenu:I.hasSubmenuRef,menuProps:T,popoverBody:E,animated:p,mergedShowSubmenu:y(()=>q.value&&!M.value),rawNode:Y,hasSubmenu:U,pending:X(()=>{const{value:l}=n,{key:b}=e.tmNode;return l.includes(b)}),childActive:X(()=>{const{value:l}=u,{key:b}=e.tmNode,R=l.findIndex(F=>b===F);return R===-1?!1:R<l.length-1}),active:X(()=>{const{value:l}=u,{key:b}=e.tmNode,R=l.findIndex(F=>b===F);return R===-1?!1:R===l.length-1}),mergedDisabled:Q,renderOption:k,nodeProps:N,handleClick:P,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:c,handleSubmenuBeforeEnter:z,handleSubmenuAfterEnter:a}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:n,siblingHasIcon:u,siblingHasSubmenu:p,renderLabel:d,renderIcon:w,renderOption:h,nodeProps:g,props:S,scrollable:k}=this;let N=null;if(t){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);N=s(we,Object.assign({},E,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const T={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=g?.(r),I=s("div",Object.assign({class:[`${n}-dropdown-option`,x?.class],"data-dropdown-option":!0},x),s("div",pe(T,S),[s("div",{class:[`${n}-dropdown-option-body__prefix`,u&&`${n}-dropdown-option-body__prefix--show-icon`]},[w?w(r):Z(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},d?d(r):Z((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,p&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(qe,null,{default:()=>s(Ve,null)}):null)]),this.hasSubmenu?s(ke,null,{default:()=>[s(Ne,null,{default:()=>s("div",{class:`${n}-dropdown-offset-container`},s(Ie,{show:this.mergedShowSubmenu,placement:this.placement,to:k&&this.popoverBody||void 0,teleportDisabled:!k},{default:()=>s("div",{class:`${n}-dropdown-menu-wrapper`},i?s(Fe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>N}):N)}))})]}):null);return h?h({node:I,option:r}):I}}),ao=$({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=H(ae),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:n}=H(J);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:t,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:n,renderOption:u}=this,{rawNode:p}=this.tmNode,d=s("div",Object.assign({class:`${o}-dropdown-option`},t?.(p)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},Z(p.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(p):Z((e=p.title)!==null&&e!==void 0?e:p[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:d,option:p}):d}}),lo=$({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return s(Ae,null,s(ao,{clsPrefix:i,tmNode:e,key:e.key}),r?.map(t=>{const{rawNode:n}=t;return n.show===!1?null:me(n)?s(ve,{clsPrefix:i,key:t.key}):t.isGroup?(He("dropdown","`group` node is not allowed to be put in `group` node."),null):s(be,{clsPrefix:i,tmNode:t,parentKey:o,key:t.key})}))}}),so=$({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e?.()])}}),we=$({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=H(J);W(ae,{showIconRef:y(()=>{const t=o.value;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:d})=>t?t(d):d.icon);const{rawNode:p}=n;return t?t(p):p.icon})}),hasSubmenuRef:y(()=>{const{value:t}=i;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:d})=>re(d,t));const{rawNode:p}=n;return re(p,t)})})});const r=_(null);return W(Le,null),W(je,null),W(he,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:n}=t;return n.show===!1?null:io(n)?s(so,{tmNode:t,key:t.key}):me(n)?s(ve,{clsPrefix:o,key:t.key}):ro(n)?s(lo,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):s(be,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:n.props,scrollable:i})});return s("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(Ee,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ce({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),uo=C("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[We(),C("dropdown-option",`
 position: relative;
 `,[j("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[j("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),C("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[j("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[O("pending",`
 color: var(--n-option-text-color-hover);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),j("&::before","background-color: var(--n-option-color-hover);")]),O("active",`
 color: var(--n-option-text-color-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),j("&::before","background-color: var(--n-option-color-active);")]),O("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),O("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),O("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[O("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[O("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[O("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("dropdown-menu","pointer-events: all;")]),C("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),C("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),C("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),j(">",[C("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),O("scrollable",[A("content",`
 padding: var(--n-padding);
 `)])]),co={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},po=Object.keys(ce),fo=Object.assign(Object.assign(Object.assign({},ce),co),fe.props),Co=$({name:"Dropdown",inheritAttrs:!1,props:fo,setup(e){const o=_(!1),i=Xe(K(e,"show"),o),r=y(()=>{const{keyField:a,childrenField:m}=e;return Ge(e.options,{getKey(f){return f[a]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),t=y(()=>r.value.treeNodes),n=_(null),u=_(null),p=_(null),d=y(()=>{var a,m,f;return(f=(m=(a=n.value)!==null&&a!==void 0?a:u.value)!==null&&m!==void 0?m:p.value)!==null&&f!==void 0?f:null}),w=y(()=>r.value.getPath(d.value).keyPath),h=y(()=>r.value.getPath(e.value).keyPath),g=X(()=>e.keyboard&&i.value);Qe({keydown:{ArrowUp:{prevent:!0,handler:Q},ArrowRight:{prevent:!0,handler:U},ArrowDown:{prevent:!0,handler:ee},ArrowLeft:{prevent:!0,handler:Y},Enter:{prevent:!0,handler:oe},Escape:E}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:k}=$e(e),N=fe("Dropdown","-dropdown",uo,to,e,S);W(J,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:u,lastToggledSubmenuKeyRef:p,pendingKeyPathRef:w,activeKeyPathRef:h,animatedRef:K(e,"animated"),mergedShowRef:i,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:T,doUpdateShow:x}),ie(i,a=>{!e.animated&&!a&&I()});function T(a,m){const{onSelect:f}=e;f&&te(f,a,m)}function x(a){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&te(m,a),f&&te(f,a),o.value=a}function I(){n.value=null,u.value=null,p.value=null}function E(){x(!1)}function Y(){M("left")}function U(){M("right")}function Q(){M("up")}function ee(){M("down")}function oe(){const a=q();a?.isLeaf&&i.value&&(T(a.key,a.rawNode),x(!1))}function q(){var a;const{value:m}=r,{value:f}=d;return!m||f===null?null:(a=m.getNode(f))!==null&&a!==void 0?a:null}function M(a){const{value:m}=d,{value:{getFirstAvailableNode:f}}=r;let c=null;if(m===null){const P=f();P!==null&&(c=P.key)}else{const P=q();if(P){let l;switch(a){case"down":l=P.getNext();break;case"up":l=P.getPrev();break;case"right":l=P.getChild();break;case"left":l=P.getParent();break}l&&(c=l.key)}}c!==null&&(n.value=null,u.value=c)}const L=y(()=>{const{size:a,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:c}=N.value,{padding:P,dividerColor:l,borderRadius:b,optionOpacityDisabled:R,[D("optionIconSuffixWidth",a)]:F,[D("optionSuffixWidth",a)]:ne,[D("optionIconPrefixWidth",a)]:B,[D("optionPrefixWidth",a)]:ye,[D("fontSize",a)]:ge,[D("optionHeight",a)]:xe,[D("optionIconSize",a)]:Se}=c,v={"--n-bezier":f,"--n-font-size":ge,"--n-padding":P,"--n-border-radius":b,"--n-option-height":xe,"--n-option-prefix-width":ye,"--n-option-icon-prefix-width":B,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":F,"--n-option-icon-size":Se,"--n-divider-color":l,"--n-option-opacity-disabled":R};return m?(v["--n-color"]=c.colorInverted,v["--n-option-color-hover"]=c.optionColorHoverInverted,v["--n-option-color-active"]=c.optionColorActiveInverted,v["--n-option-text-color"]=c.optionTextColorInverted,v["--n-option-text-color-hover"]=c.optionTextColorHoverInverted,v["--n-option-text-color-active"]=c.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=c.optionTextColorChildActiveInverted,v["--n-prefix-color"]=c.prefixColorInverted,v["--n-suffix-color"]=c.suffixColorInverted,v["--n-group-header-text-color"]=c.groupHeaderTextColorInverted):(v["--n-color"]=c.color,v["--n-option-color-hover"]=c.optionColorHover,v["--n-option-color-active"]=c.optionColorActive,v["--n-option-text-color"]=c.optionTextColor,v["--n-option-text-color-hover"]=c.optionTextColorHover,v["--n-option-text-color-active"]=c.optionTextColorActive,v["--n-option-text-color-child-active"]=c.optionTextColorChildActive,v["--n-prefix-color"]=c.prefixColor,v["--n-suffix-color"]=c.suffixColor,v["--n-group-header-text-color"]=c.groupHeaderTextColor),v}),z=k?Me("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:S,mergedTheme:N,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&I()},doUpdateShow:x,cssVars:k?void 0:L,themeClass:z?.themeClass,onRender:z?.onRender}},render(){const e=(r,t,n,u,p)=>{var d;const{mergedClsPrefix:w,menuProps:h}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=h?.(void 0,this.tmNodes.map(k=>k.rawNode))||{},S={ref:Je(t),class:[r,`${w}-dropdown`,this.themeClass],clsPrefix:w,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:p};return s(we,pe(this.$attrs,S,g))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(Re,Object.assign({},Ue(this.$props,po),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{Co as N,Je as c,to as d};
