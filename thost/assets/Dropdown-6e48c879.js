import{p as Pe,V as Ne,a as Re,b as Ie,r as ze,N as Ae,c as ae}from"./Popover-d5735fab.js";import{b2 as B,aC as re,b0 as Oe,a0 as Fe,a1 as Te,b1 as $e,w as M,N as s,R as L,j as w,ad as D,Z as se,F as He,b8 as z}from"./index-6b27469d.js";import{T as Be}from"./runtime-dom.esm-bundler-4f377a37.js";import{l as Me,c as Le,n as je,g as te,w as We,a as R,h as K,j as pe,b as A,i as T,u as _e,d as ue,k as j,e as De}from"./light-cb8e5d18.js";import{p as ce,a as Ke,d as Ee}from"./index-cabd39fd.js";import{u as G}from"./use-memo-7138c88c.js";import{a as V,o as Q,r as X,X as qe,k as Ue}from"./Scrollbar-6ef5ad24.js";import{N as Ge}from"./Icon-bc12cdb3.js";import{C as Ve,h as fe}from"./ChevronRight-f0e435af.js";import{f as Qe}from"./fade-in-scale-up.cssr-59f6c429.js";import{u as Xe}from"./use-merged-state-236ae148.js";import{c as Ye}from"./create-59670860.js";import{h as Ze}from"./utils-eca1999b.js";import{c as ie}from"./use-is-mounted-e356ec1d.js";function ve(e){return o=>{o?e.value=o.$el:e.value=null}}function Je(e,o,i){if(!o)return e;const t=B(e.value);let r=null;return re(e,n=>{r!==null&&window.clearTimeout(r),n===!0?i&&!i.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},o):t.value=!1}),t}function eo(e={},o){const i=Oe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:r}=e,n=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}t!==void 0&&Object.keys(t).forEach(x=>{if(x!==d.key)return;const v=t[x];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},p=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}r!==void 0&&Object.keys(r).forEach(x=>{if(x!==d.key)return;const v=r[x];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},c=()=>{(o===void 0||o.value)&&(Q("keydown",document,n),Q("keyup",document,p)),o!==void 0&&re(o,d=>{d?(Q("keydown",document,n),Q("keyup",document,p)):(V("keydown",document,n),V("keyup",document,p))})};return Ze()?(Fe(c),Te(()=>{(o===void 0||o.value)&&(V("keydown",document,n),V("keyup",document,p))})):c(),$e(i)}const oo={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},no=e=>{const{primaryColor:o,textColor2:i,dividerColor:t,hoverColor:r,popoverColor:n,invertedColor:p,borderRadius:c,fontSizeSmall:d,fontSizeMedium:x,fontSizeLarge:v,fontSizeHuge:g,heightSmall:S,heightMedium:C,heightLarge:P,heightHuge:O,textColor3:y,opacityDisabled:N}=e;return Object.assign(Object.assign({},oo),{optionHeightSmall:S,optionHeightMedium:C,optionHeightLarge:P,optionHeightHuge:O,borderRadius:c,fontSizeSmall:d,fontSizeMedium:x,fontSizeLarge:v,fontSizeHuge:g,optionTextColor:i,optionTextColorHover:i,optionTextColorActive:o,optionTextColorChildActive:o,color:n,dividerColor:t,suffixColor:i,prefixColor:i,optionColorHover:r,optionColorActive:je(o,{alpha:.1}),groupHeaderTextColor:y,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:p,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:N})},ro=Me({name:"Dropdown",common:Le,peers:{Popover:Pe},self:no}),he=ro,me=M({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),de=te("n-dropdown-menu"),Y=te("n-dropdown"),be=te("n-dropdown-option");function le(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function to(e){return e.type==="group"}function xe(e){return e.type==="divider"}function io(e){return e.type==="render"}const we=M({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=L(Y),{hoverKeyRef:i,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:n,activeKeyPathRef:p,animatedRef:c,mergedShowRef:d,renderLabelRef:x,renderIconRef:v,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:C,nodePropsRef:P,menuPropsRef:O}=o,y=L(be,null),N=L(de),E=L(ce),Z=w(()=>e.tmNode.rawNode),q=w(()=>{const{value:a}=S;return le(e.tmNode.rawNode,a)}),J=w(()=>{const{disabled:a}=e.tmNode;return a}),ee=w(()=>{if(!q.value)return!1;const{key:a,disabled:b}=e.tmNode;if(b)return!1;const{value:I}=i,{value:$}=t,{value:ne}=r,{value:H}=n;return I!==null?H.includes(a):$!==null?H.includes(a)&&H[H.length-1]!==a:ne!==null?H.includes(a):!1}),oe=w(()=>t.value===null&&!c.value),U=Je(ee,300,oe),W=w(()=>!!(y!=null&&y.enteringSubmenuRef.value)),_=B(!1);D(be,{enteringSubmenuRef:_});function F(){_.value=!0}function l(){_.value=!1}function m(){const{parentKey:a,tmNode:b}=e;b.disabled||d.value&&(r.value=a,t.value=null,i.value=b.key)}function f(){const{tmNode:a}=e;a.disabled||d.value&&i.value!==a.key&&m()}function u(a){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:b}=a;b&&!fe({target:b},"dropdownOption")&&!fe({target:b},"scrollbarRail")&&(i.value=null)}function k(){const{value:a}=q,{tmNode:b}=e;d.value&&!a&&!b.disabled&&(o.doSelect(b.key,b.rawNode),o.doUpdateShow(!1))}return{labelField:g,renderLabel:x,renderIcon:v,siblingHasIcon:N.showIconRef,siblingHasSubmenu:N.hasSubmenuRef,menuProps:O,popoverBody:E,animated:c,mergedShowSubmenu:w(()=>U.value&&!W.value),rawNode:Z,hasSubmenu:q,pending:G(()=>{const{value:a}=n,{key:b}=e.tmNode;return a.includes(b)}),childActive:G(()=>{const{value:a}=p,{key:b}=e.tmNode,I=a.findIndex($=>b===$);return I===-1?!1:I<a.length-1}),active:G(()=>{const{value:a}=p,{key:b}=e.tmNode,I=a.findIndex($=>b===$);return I===-1?!1:I===a.length-1}),mergedDisabled:J,renderOption:C,nodeProps:P,handleClick:k,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:u,handleSubmenuBeforeEnter:F,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:i,rawNode:t,mergedShowSubmenu:r,clsPrefix:n,siblingHasIcon:p,siblingHasSubmenu:c,renderLabel:d,renderIcon:x,renderOption:v,nodeProps:g,props:S,scrollable:C}=this;let P=null;if(r){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);P=s(ge,Object.assign({},E,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const O={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},y=g==null?void 0:g(t),N=s("div",Object.assign({class:[`${n}-dropdown-option`,y==null?void 0:y.class],"data-dropdown-option":!0},y),s("div",se(O,S),[s("div",{class:[`${n}-dropdown-option-body__prefix`,p&&`${n}-dropdown-option-body__prefix--show-icon`]},[x?x(t):X(t.icon)]),s("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},d?d(t):X((o=t[this.labelField])!==null&&o!==void 0?o:t.title)),s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,c&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(Ge,null,{default:()=>s(Ve,null)}):null)]),this.hasSubmenu?s(Ne,null,{default:()=>[s(Re,null,{default:()=>s("div",{class:`${n}-dropdown-offset-container`},s(Ie,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>s("div",{class:`${n}-dropdown-menu-wrapper`},i?s(Be,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>P}):P)}))})]}):null);return v?v({node:N,option:t}):N}}),lo=M({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=L(de),{renderLabelRef:i,labelFieldRef:t,nodePropsRef:r,renderOptionRef:n}=L(Y);return{labelField:t,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:r,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:t,nodeProps:r,renderLabel:n,renderOption:p}=this,{rawNode:c}=this.tmNode,d=s("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(c)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,t&&`${o}-dropdown-option-body__prefix--show-icon`]},X(c.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(c):X((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return p?p({node:d,option:c}):d}}),ao=M({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:t}=e;return s(He,null,s(lo,{clsPrefix:i,tmNode:e,key:e.key}),t==null?void 0:t.map(r=>{const{rawNode:n}=r;return n.show===!1?null:xe(n)?s(me,{clsPrefix:i,key:r.key}):r.isGroup?(We("dropdown","`group` node is not allowed to be put in `group` node."),null):s(we,{clsPrefix:i,tmNode:r,parentKey:o,key:r.key})}))}}),so=M({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),ge=M({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=L(Y);D(de,{showIconRef:w(()=>{const r=o.value;return e.tmNodes.some(n=>{var p;if(n.isGroup)return(p=n.children)===null||p===void 0?void 0:p.some(({rawNode:d})=>r?r(d):d.icon);const{rawNode:c}=n;return r?r(c):c.icon})}),hasSubmenuRef:w(()=>{const{value:r}=i;return e.tmNodes.some(n=>{var p;if(n.isGroup)return(p=n.children)===null||p===void 0?void 0:p.some(({rawNode:d})=>le(d,r));const{rawNode:c}=n;return le(c,r)})})});const t=B(null);return D(Ke,null),D(Ee,null),D(ce,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,t=this.tmNodes.map(r=>{const{rawNode:n}=r;return n.show===!1?null:io(n)?s(so,{tmNode:r,key:r.key}):xe(n)?s(me,{clsPrefix:o,key:r.key}):to(n)?s(ao,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):s(we,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:n.props,scrollable:i})});return s("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(qe,{contentClass:`${o}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?ze({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),po=R("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Qe(),R("dropdown-option",`
 position: relative;
 `,[K("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[K("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),R("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[K("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),pe("disabled",[A("pending",`
 color: var(--n-option-text-color-hover);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),K("&::before","background-color: var(--n-option-color-hover);")]),A("active",`
 color: var(--n-option-text-color-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),K("&::before","background-color: var(--n-option-color-active);")]),A("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),A("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),A("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[A("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[A("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),R("icon",`
 font-size: var(--n-option-icon-size);
 `)]),T("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T("suffix",`
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
 `,[A("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),R("icon",`
 font-size: var(--n-option-icon-size);
 `)]),R("dropdown-menu","pointer-events: all;")]),R("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),R("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),R("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),K(">",[R("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),pe("scrollable",`
 padding: var(--n-padding);
 `),A("scrollable",[T("content",`
 padding: var(--n-padding);
 `)])]),uo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},co=Object.keys(ae),fo=Object.assign(Object.assign(Object.assign({},ae),uo),ue.props),vo=M({name:"Dropdown",inheritAttrs:!1,props:fo,setup(e){const o=B(!1),i=Xe(z(e,"show"),o),t=w(()=>{const{keyField:l,childrenField:m}=e;return Ye(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),r=w(()=>t.value.treeNodes),n=B(null),p=B(null),c=B(null),d=w(()=>{var l,m,f;return(f=(m=(l=n.value)!==null&&l!==void 0?l:p.value)!==null&&m!==void 0?m:c.value)!==null&&f!==void 0?f:null}),x=w(()=>t.value.getPath(d.value).keyPath),v=w(()=>t.value.getPath(e.value).keyPath),g=G(()=>e.keyboard&&i.value);eo({keydown:{ArrowUp:{prevent:!0,handler:J},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:ee},ArrowLeft:{prevent:!0,handler:Z},Enter:{prevent:!0,handler:oe},Escape:E}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:C}=_e(e),P=ue("Dropdown","-dropdown",po,he,e,S);D(Y,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:p,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:x,activeKeyPathRef:v,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:O,doUpdateShow:y}),re(i,l=>{!e.animated&&!l&&N()});function O(l,m){const{onSelect:f}=e;f&&ie(f,l,m)}function y(l){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&ie(m,l),f&&ie(f,l),o.value=l}function N(){n.value=null,p.value=null,c.value=null}function E(){y(!1)}function Z(){W("left")}function q(){W("right")}function J(){W("up")}function ee(){W("down")}function oe(){const l=U();l!=null&&l.isLeaf&&i.value&&(O(l.key,l.rawNode),y(!1))}function U(){var l;const{value:m}=t,{value:f}=d;return!m||f===null?null:(l=m.getNode(f))!==null&&l!==void 0?l:null}function W(l){const{value:m}=d,{value:{getFirstAvailableNode:f}}=t;let u=null;if(m===null){const k=f();k!==null&&(u=k.key)}else{const k=U();if(k){let a;switch(l){case"down":a=k.getNext();break;case"up":a=k.getPrev();break;case"right":a=k.getChild();break;case"left":a=k.getParent();break}a&&(u=a.key)}}u!==null&&(n.value=null,p.value=u)}const _=w(()=>{const{size:l,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:u}=P.value,{padding:k,dividerColor:a,borderRadius:b,optionOpacityDisabled:I,[j("optionIconSuffixWidth",l)]:$,[j("optionSuffixWidth",l)]:ne,[j("optionIconPrefixWidth",l)]:H,[j("optionPrefixWidth",l)]:ye,[j("fontSize",l)]:Se,[j("optionHeight",l)]:ke,[j("optionIconSize",l)]:Ce}=u,h={"--n-bezier":f,"--n-font-size":Se,"--n-padding":k,"--n-border-radius":b,"--n-option-height":ke,"--n-option-prefix-width":ye,"--n-option-icon-prefix-width":H,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":$,"--n-option-icon-size":Ce,"--n-divider-color":a,"--n-option-opacity-disabled":I};return m?(h["--n-color"]=u.colorInverted,h["--n-option-color-hover"]=u.optionColorHoverInverted,h["--n-option-color-active"]=u.optionColorActiveInverted,h["--n-option-text-color"]=u.optionTextColorInverted,h["--n-option-text-color-hover"]=u.optionTextColorHoverInverted,h["--n-option-text-color-active"]=u.optionTextColorActiveInverted,h["--n-option-text-color-child-active"]=u.optionTextColorChildActiveInverted,h["--n-prefix-color"]=u.prefixColorInverted,h["--n-suffix-color"]=u.suffixColorInverted,h["--n-group-header-text-color"]=u.groupHeaderTextColorInverted):(h["--n-color"]=u.color,h["--n-option-color-hover"]=u.optionColorHover,h["--n-option-color-active"]=u.optionColorActive,h["--n-option-text-color"]=u.optionTextColor,h["--n-option-text-color-hover"]=u.optionTextColorHover,h["--n-option-text-color-active"]=u.optionTextColorActive,h["--n-option-text-color-child-active"]=u.optionTextColorChildActive,h["--n-prefix-color"]=u.prefixColor,h["--n-suffix-color"]=u.suffixColor,h["--n-group-header-text-color"]=u.groupHeaderTextColor),h}),F=C?De("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),_,e):void 0;return{mergedClsPrefix:S,mergedTheme:P,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{e.animated&&N()},doUpdateShow:y,cssVars:C?void 0:_,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender}},render(){const e=(t,r,n,p,c)=>{var d;const{mergedClsPrefix:x,menuProps:v}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=(v==null?void 0:v(void 0,this.tmNodes.map(C=>C.rawNode)))||{},S={ref:ve(r),class:[t,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:p,onMouseleave:c};return s(ge,se(this.$attrs,S,g))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(Ae,Object.assign({},Ue(this.$props,co),i),{trigger:()=>{var t,r;return(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t)}})}});export{vo as N,ve as c,he as d};
