import{p as Ie,V as Re,b as Ke,c as ze,r as Oe,N as _e,a as fe}from"./Popover-4b12eb1a.js";import{aZ as H,az as de,aX as $e,Z as De,_ as Te,aY as Ae,v as T,J as s,i as g,W as ae,O as j,aa as W,F as Be,b3 as z}from"./runtime-core.esm-bundler-42be6625.js";import{T as Fe}from"./runtime-dom.esm-bundler-4c01a608.js";import{c as He,a as he,b as je,e as N,k as C,f as D,h as J,u as ve,j as me,w as be,d as le,l as ce,g as $,m as F}from"./light-061b806c.js";import{p as ye,m as Le,d as Me,f as We}from"./fade-in-scale-up.cssr-e8e5290f.js";import{u as X}from"./use-memo-8d560c6d.js";import{o as q,a as G,b as Z,X as Ee,k as Ue}from"./Scrollbar-56892bdd.js";import{f as Ve}from"./format-length-c9d165c6.js";import{C as qe,h as ue,c as Ge}from"./create-582f0426.js";import{u as Xe}from"./use-merged-state-cb002afc.js";import{h as Ze}from"./utils-13313164.js";import{c as re}from"./call-7e0089d6.js";function Je(e){return o=>{o?e.value=o.$el:e.value=null}}function Ye(e,o,i){if(!o)return e;const r=H(e.value);let t=null;return de(e,n=>{t!==null&&window.clearTimeout(t),n===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function Qe(e={},o){const i=$e({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,n=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==d.key)return;const h=r[y];if(typeof h=="function")h(d);else{const{stop:w=!1,prevent:S=!1}=h;w&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},a=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(y=>{if(y!==d.key)return;const h=t[y];if(typeof h=="function")h(d);else{const{stop:w=!1,prevent:S=!1}=h;w&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},u=()=>{(o===void 0||o.value)&&(G("keydown",document,n),G("keyup",document,a)),o!==void 0&&de(o,d=>{d?(G("keydown",document,n),G("keyup",document,a)):(q("keydown",document,n),q("keyup",document,a))})};return Ze()?(De(u),Te(()=>{(o===void 0||o.value)&&(q("keydown",document,n),q("keyup",document,a))})):u(),Ae(i)}const eo={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},oo=e=>{const{primaryColor:o,textColor2:i,dividerColor:r,hoverColor:t,popoverColor:n,invertedColor:a,borderRadius:u,fontSizeSmall:d,fontSizeMedium:y,fontSizeLarge:h,fontSizeHuge:w,heightSmall:S,heightMedium:k,heightLarge:I,heightHuge:O,textColor3:x,opacityDisabled:R}=e;return Object.assign(Object.assign({},eo),{optionHeightSmall:S,optionHeightMedium:k,optionHeightLarge:I,optionHeightHuge:O,borderRadius:u,fontSizeSmall:d,fontSizeMedium:y,fontSizeLarge:h,fontSizeHuge:w,optionTextColor:i,optionTextColorHover:i,optionTextColorActive:o,optionTextColorChildActive:o,color:n,dividerColor:r,suffixColor:i,prefixColor:i,optionColorHover:t,optionColorActive:je(o,{alpha:.1}),groupHeaderTextColor:x,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:R})},no=He({name:"Dropdown",common:he,peers:{Popover:Ie},self:oo}),to=no,ge=T({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ro=e=>{const{textColorBase:o,opacity1:i,opacity2:r,opacity3:t,opacity4:n,opacity5:a}=e;return{color:o,opacity1Depth:i,opacity2Depth:r,opacity3Depth:t,opacity4Depth:n,opacity5Depth:a}},io={name:"Icon",common:he,self:ro},ao=io,lo=N("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[C("color-transition",{transition:"color .3s var(--n-bezier)"}),C("depth",{color:"var(--n-color)"},[D("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),D("svg",{height:"1em",width:"1em"})]),so=Object.assign(Object.assign({},J.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),co=T({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:so,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=ve(e),r=J("Icon","-icon",lo,ao,e,o),t=g(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:u},self:d}=r.value;if(a!==void 0){const{color:y,[`opacity${a}Depth`]:h}=d;return{"--n-bezier":u,"--n-color":y,"--n-opacity":h}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),n=i?me("icon",g(()=>`${e.depth||"d"}`),t,e):void 0;return{mergedClsPrefix:o,mergedStyle:g(()=>{const{size:a,color:u}=e;return{fontSize:Ve(a),color:u}}),cssVars:i?void 0:t,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:i,mergedClsPrefix:r,component:t,onRender:n,themeClass:a}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&be("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),s("i",ae(this.$attrs,{role:"img",class:[`${r}-icon`,a,{[`${r}-icon--depth`]:i,[`${r}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),t?s(t):this.$slots)}}),se=le("n-dropdown-menu"),Y=le("n-dropdown"),pe=le("n-dropdown-option");function ie(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function uo(e){return e.type==="group"}function we(e){return e.type==="divider"}function po(e){return e.type==="render"}const xe=T({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=j(Y),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:n,activeKeyPathRef:a,animatedRef:u,mergedShowRef:d,renderLabelRef:y,renderIconRef:h,labelFieldRef:w,childrenFieldRef:S,renderOptionRef:k,nodePropsRef:I,menuPropsRef:O}=o,x=j(pe,null),R=j(se),E=j(ye),Q=g(()=>e.tmNode.rawNode),U=g(()=>{const{value:c}=S;return ie(e.tmNode.rawNode,c)}),ee=g(()=>{const{disabled:c}=e.tmNode;return c}),oe=g(()=>{if(!U.value)return!1;const{key:c,disabled:b}=e.tmNode;if(b)return!1;const{value:K}=i,{value:A}=r,{value:te}=t,{value:B}=n;return K!==null?B.includes(c):A!==null?B.includes(c)&&B[B.length-1]!==c:te!==null?B.includes(c):!1}),ne=g(()=>r.value===null&&!u.value),V=Ye(oe,300,ne),L=g(()=>!!(x!=null&&x.enteringSubmenuRef.value)),M=H(!1);W(pe,{enteringSubmenuRef:M});function _(){M.value=!0}function l(){M.value=!1}function m(){const{parentKey:c,tmNode:b}=e;b.disabled||d.value&&(t.value=c,r.value=null,i.value=b.key)}function f(){const{tmNode:c}=e;c.disabled||d.value&&i.value!==c.key&&m()}function p(c){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:b}=c;b&&!ue({target:b},"dropdownOption")&&!ue({target:b},"scrollbarRail")&&(i.value=null)}function P(){const{value:c}=U,{tmNode:b}=e;d.value&&!c&&!b.disabled&&(o.doSelect(b.key,b.rawNode),o.doUpdateShow(!1))}return{labelField:w,renderLabel:y,renderIcon:h,siblingHasIcon:R.showIconRef,siblingHasSubmenu:R.hasSubmenuRef,menuProps:O,popoverBody:E,animated:u,mergedShowSubmenu:g(()=>V.value&&!L.value),rawNode:Q,hasSubmenu:U,pending:X(()=>{const{value:c}=n,{key:b}=e.tmNode;return c.includes(b)}),childActive:X(()=>{const{value:c}=a,{key:b}=e.tmNode,K=c.findIndex(A=>b===A);return K===-1?!1:K<c.length-1}),active:X(()=>{const{value:c}=a,{key:b}=e.tmNode,K=c.findIndex(A=>b===A);return K===-1?!1:K===c.length-1}),mergedDisabled:ee,renderOption:k,nodeProps:I,handleClick:P,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:p,handleSubmenuBeforeEnter:_,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:n,siblingHasIcon:a,siblingHasSubmenu:u,renderLabel:d,renderIcon:y,renderOption:h,nodeProps:w,props:S,scrollable:k}=this;let I=null;if(t){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);I=s(Se,Object.assign({},E,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const O={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=w==null?void 0:w(r),R=s("div",Object.assign({class:[`${n}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),s("div",ae(O,S),[s("div",{class:[`${n}-dropdown-option-body__prefix`,a&&`${n}-dropdown-option-body__prefix--show-icon`]},[y?y(r):Z(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},d?d(r):Z((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,u&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(co,null,{default:()=>s(qe,null)}):null)]),this.hasSubmenu?s(Re,null,{default:()=>[s(Ke,null,{default:()=>s("div",{class:`${n}-dropdown-offset-container`},s(ze,{show:this.mergedShowSubmenu,placement:this.placement,to:k&&this.popoverBody||void 0,teleportDisabled:!k},{default:()=>s("div",{class:`${n}-dropdown-menu-wrapper`},i?s(Fe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>I}):I)}))})]}):null);return h?h({node:R,option:r}):R}}),fo=T({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=j(se),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:n}=j(Y);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:t,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:n,renderOption:a}=this,{rawNode:u}=this.tmNode,d=s("div",Object.assign({class:`${o}-dropdown-option`},t==null?void 0:t(u)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},Z(u.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(u):Z((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:d,option:u}):d}}),ho=T({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return s(Be,null,s(fo,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>{const{rawNode:n}=t;return n.show===!1?null:we(n)?s(ge,{clsPrefix:i,key:t.key}):t.isGroup?(be("dropdown","`group` node is not allowed to be put in `group` node."),null):s(xe,{clsPrefix:i,tmNode:t,parentKey:o,key:t.key})}))}}),vo=T({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),Se=T({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=j(Y);W(se,{showIconRef:g(()=>{const t=o.value;return e.tmNodes.some(n=>{var a;if(n.isGroup)return(a=n.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>t?t(d):d.icon);const{rawNode:u}=n;return t?t(u):u.icon})}),hasSubmenuRef:g(()=>{const{value:t}=i;return e.tmNodes.some(n=>{var a;if(n.isGroup)return(a=n.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>ie(d,t));const{rawNode:u}=n;return ie(u,t)})})});const r=H(null);return W(Le,null),W(Me,null),W(ye,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:n}=t;return n.show===!1?null:po(n)?s(vo,{tmNode:t,key:t.key}):we(n)?s(ge,{clsPrefix:o,key:t.key}):uo(n)?s(ho,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):s(xe,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:n.props,scrollable:i})});return s("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(Ee,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Oe({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),mo=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[We(),N("dropdown-option",`
 position: relative;
 `,[D("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[D("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[D("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ce("disabled",[C("pending",`
 color: var(--n-option-text-color-hover);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),D("&::before","background-color: var(--n-option-color-hover);")]),C("active",`
 color: var(--n-option-text-color-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),D("&::before","background-color: var(--n-option-color-active);")]),C("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),C("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),C("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[$("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[C("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),$("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[C("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),$("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),$("suffix",`
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
 `,[C("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),D(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ce("scrollable",`
 padding: var(--n-padding);
 `),C("scrollable",[$("content",`
 padding: var(--n-padding);
 `)])]),bo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},yo=Object.keys(fe),go=Object.assign(Object.assign(Object.assign({},fe),bo),J.props),_o=T({name:"Dropdown",inheritAttrs:!1,props:go,setup(e){const o=H(!1),i=Xe(z(e,"show"),o),r=g(()=>{const{keyField:l,childrenField:m}=e;return Ge(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),t=g(()=>r.value.treeNodes),n=H(null),a=H(null),u=H(null),d=g(()=>{var l,m,f;return(f=(m=(l=n.value)!==null&&l!==void 0?l:a.value)!==null&&m!==void 0?m:u.value)!==null&&f!==void 0?f:null}),y=g(()=>r.value.getPath(d.value).keyPath),h=g(()=>r.value.getPath(e.value).keyPath),w=X(()=>e.keyboard&&i.value);Qe({keydown:{ArrowUp:{prevent:!0,handler:ee},ArrowRight:{prevent:!0,handler:U},ArrowDown:{prevent:!0,handler:oe},ArrowLeft:{prevent:!0,handler:Q},Enter:{prevent:!0,handler:ne},Escape:E}},w);const{mergedClsPrefixRef:S,inlineThemeDisabled:k}=ve(e),I=J("Dropdown","-dropdown",mo,to,e,S);W(Y,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:a,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:y,activeKeyPathRef:h,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:O,doUpdateShow:x}),de(i,l=>{!e.animated&&!l&&R()});function O(l,m){const{onSelect:f}=e;f&&re(f,l,m)}function x(l){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&re(m,l),f&&re(f,l),o.value=l}function R(){n.value=null,a.value=null,u.value=null}function E(){x(!1)}function Q(){L("left")}function U(){L("right")}function ee(){L("up")}function oe(){L("down")}function ne(){const l=V();l!=null&&l.isLeaf&&i.value&&(O(l.key,l.rawNode),x(!1))}function V(){var l;const{value:m}=r,{value:f}=d;return!m||f===null?null:(l=m.getNode(f))!==null&&l!==void 0?l:null}function L(l){const{value:m}=d,{value:{getFirstAvailableNode:f}}=r;let p=null;if(m===null){const P=f();P!==null&&(p=P.key)}else{const P=V();if(P){let c;switch(l){case"down":c=P.getNext();break;case"up":c=P.getPrev();break;case"right":c=P.getChild();break;case"left":c=P.getParent();break}c&&(p=c.key)}}p!==null&&(n.value=null,a.value=p)}const M=g(()=>{const{size:l,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:p}=I.value,{padding:P,dividerColor:c,borderRadius:b,optionOpacityDisabled:K,[F("optionIconSuffixWidth",l)]:A,[F("optionSuffixWidth",l)]:te,[F("optionIconPrefixWidth",l)]:B,[F("optionPrefixWidth",l)]:Pe,[F("fontSize",l)]:ke,[F("optionHeight",l)]:Ne,[F("optionIconSize",l)]:Ce}=p,v={"--n-bezier":f,"--n-font-size":ke,"--n-padding":P,"--n-border-radius":b,"--n-option-height":Ne,"--n-option-prefix-width":Pe,"--n-option-icon-prefix-width":B,"--n-option-suffix-width":te,"--n-option-icon-suffix-width":A,"--n-option-icon-size":Ce,"--n-divider-color":c,"--n-option-opacity-disabled":K};return m?(v["--n-color"]=p.colorInverted,v["--n-option-color-hover"]=p.optionColorHoverInverted,v["--n-option-color-active"]=p.optionColorActiveInverted,v["--n-option-text-color"]=p.optionTextColorInverted,v["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,v["--n-option-text-color-active"]=p.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,v["--n-prefix-color"]=p.prefixColorInverted,v["--n-suffix-color"]=p.suffixColorInverted,v["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(v["--n-color"]=p.color,v["--n-option-color-hover"]=p.optionColorHover,v["--n-option-color-active"]=p.optionColorActive,v["--n-option-text-color"]=p.optionTextColor,v["--n-option-text-color-hover"]=p.optionTextColorHover,v["--n-option-text-color-active"]=p.optionTextColorActive,v["--n-option-text-color-child-active"]=p.optionTextColorChildActive,v["--n-prefix-color"]=p.prefixColor,v["--n-suffix-color"]=p.suffixColor,v["--n-group-header-text-color"]=p.groupHeaderTextColor),v}),_=k?me("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),M,e):void 0;return{mergedClsPrefix:S,mergedTheme:I,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&R()},doUpdateShow:x,cssVars:k?void 0:M,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const e=(r,t,n,a,u)=>{var d;const{mergedClsPrefix:y,menuProps:h}=this;(d=this.onRender)===null||d===void 0||d.call(this);const w=(h==null?void 0:h(void 0,this.tmNodes.map(k=>k.rawNode)))||{},S={ref:Je(t),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:u};return s(Se,ae(this.$attrs,S,w))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(_e,Object.assign({},Ue(this.$props,yo),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{_o as N,co as a,Je as c,to as d};
