import{T as ke}from"./runtime-dom.esm-bundler-51aad541.js";import{i as gl,a as bl,e as yl,F as wl,V as kl,u as xl,b as Cl,N as Rl,c as Sl,d as Ml,f as Tl}from"./utils-ae16cb7a.js";import{a as B,s as Nl,l as Pl,c as Fl,g as Ol,h as ce,i as xe,b as W,u as Kl,d as De,n as Ll,e as zl}from"./light-3c431b54.js";import{u as he,b as Ve,r as Bl}from"./use-memo-13475312.js";import{N as Al,u as Il}from"./Loading-b36f50c8.js";import{N as He}from"./Icon-9d083982.js";import{C as $l,h as Fe}from"./ChevronRight-473b2df6.js";import{c as jl,N as Dl}from"./Checkbox-7001ae57.js";import{v as re,b3 as q,aZ as S,_ as Vl,J as d,O as Ce,i as f,aG as Ue,aQ as Hl,az as qe,aa as Ul,X as ql}from"./index-c2ed52a5.js";import{d as ve}from"./Close-4e65a8ab.js";import{f as El,s as _l,N as Wl,g as Jl}from"./Scrollbar-5b7370f2.js";import{c as Ee}from"./index-80752888.js";import{c as _e,S as Zl}from"./create-2c70b56a.js";import{f as We}from"./fade-in-scale-up.cssr-6d358681.js";import{u as Ql}from"./use-locale-ca0d0990.js";import{u as Je}from"./use-merged-state-5c1c3246.js";import{i as Xl,c as G}from"./use-is-mounted-912be460.js";import{m as Gl}from"./index-cbfaa337.js";import{u as Re,V as Yl,a as eo,b as Ze}from"./Popover-4ea150e0.js";const lo=B("base-menu-mask",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 14px;
 overflow: hidden;
`,[El()]),oo=re({name:"BaseMenuMask",props:{clsPrefix:{type:String,required:!0}},setup(l){Nl("-base-menu-mask",lo,q(l,"clsPrefix"));const t=S(null);let a=null;const n=S(!1);return Vl(()=>{a!==null&&window.clearTimeout(a)}),Object.assign({message:t,show:n},{showOnce(h,m=1500){a&&window.clearTimeout(a),n.value=!0,t.value=h,a=window.setTimeout(()=>{n.value=!1,t.value=null},m)}})},render(){return d(ke,{name:"fade-in-transition"},{default:()=>this.show?d("div",{class:`${this.clsPrefix}-base-menu-mask`},this.message):null})}}),ao=l=>{const{borderRadius:t,boxShadow2:a,popoverColor:n,textColor2:h,textColor3:m,primaryColor:C,textColorDisabled:v,dividerColor:b,hoverColor:R,fontSizeMedium:k,heightMedium:O}=l;return{menuBorderRadius:t,menuColor:n,menuBoxShadow:a,menuDividerColor:b,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:m,optionHeight:O,optionFontSize:k,optionColorHover:R,optionTextColor:h,optionTextColorActive:C,optionTextColorDisabled:v,optionCheckMarkColor:C,loadingColor:C,columnWidth:"180px"}},to=Pl({name:"Cascader",common:Fl,peers:{InternalSelectMenu:gl,InternalSelection:bl,Scrollbar:_l,Checkbox:jl,Empty:yl},self:ao}),no=to;function Se(l){return l?l.map(t=>t.rawNode):null}function ro(l,t,a,n){const h=[],m=[];function C(v){for(const b of v){if(b.disabled)continue;const{rawNode:R}=b;m.push(R),(b.isLeaf||!t)&&h.push({label:Oe(b,n,a),value:b.key,rawNode:b.rawNode,path:Array.from(m)}),!b.isLeaf&&b.children&&C(b.children),m.pop()}}return C(l),h}function Oe(l,t,a){const n=[];for(;l;)n.push(l.rawNode[a]),l=l.parent;return n.reverse().join(t)}const pe=Ol("n-cascader"),Qe=re({name:"NCascaderOption",props:{tmNode:{type:Object,required:!0}},setup(l){const{expandTriggerRef:t,remoteRef:a,multipleRef:n,mergedValueRef:h,checkedKeysRef:m,indeterminateKeysRef:C,hoverKeyPathRef:v,keyboardKeyRef:b,loadingKeySetRef:R,cascadeRef:k,mergedCheckStrategyRef:O,onLoadRef:I,mergedClsPrefixRef:L,mergedThemeRef:J,labelFieldRef:M,showCheckboxRef:N,updateHoverKey:T,updateKeyboardKey:A,addLoadingKey:$,deleteLoadingKey:K,closeMenu:z,doCheck:V,doUncheck:Y,renderLabelRef:ee}=Ce(pe),u=f(()=>l.tmNode.key),y=f(()=>{const{value:F}=t,{value:_}=a;return!_&&F==="hover"}),j=f(()=>{if(y.value)return Q}),le=f(()=>{if(y.value)return ue}),P=he(()=>{const{value:F}=n;return F?m.value.includes(u.value):h.value===u.value}),H=he(()=>n.value?C.value.includes(u.value):!1),oe=he(()=>v.value.includes(u.value)),ie=he(()=>{const{value:F}=b;return F===null?!1:F===u.value}),Me=he(()=>a.value?R.value.has(u.value):!1),se=f(()=>l.tmNode.isLeaf),U=f(()=>l.tmNode.disabled),fe=f(()=>l.tmNode.rawNode[M.value]),E=f(()=>l.tmNode.shallowLoaded);function Z(F){if(U.value)return;const{value:_}=a,{value:ge}=R,{value:be}=I,{value:x}=u,{value:Te}=se,{value:D}=E;Fe(F,"checkbox")||(_&&!D&&!ge.has(x)&&be&&($(x),be(l.tmNode.rawNode).then(()=>{K(x)}).catch(()=>{K(x)})),T(x),A(x)),Te&&ae()}function Q(){if(!y.value||U.value)return;const{value:F}=u;T(F),A(F)}function ue(){y.value&&Q()}function me(){const{value:F}=se;F||ae()}function ae(){const{value:F}=n,{value:_}=u;F?H.value||P.value?Y(_):V(_):(V(_),z(!0))}return{checkStrategy:O,multiple:n,cascade:k,checked:P,indeterminate:H,hoverPending:oe,keyboardPending:ie,isLoading:Me,showCheckbox:N,isLeaf:se,disabled:U,label:fe,mergedClsPrefix:L,mergedTheme:J,handleClick:Z,handleCheckboxUpdateValue:me,mergedHandleMouseEnter:j,mergedHandleMouseMove:le,renderLabel:ee}},render(){const{mergedClsPrefix:l,renderLabel:t}=this;return d("div",{class:[`${l}-cascader-option`,{[`${l}-cascader-option--pending`]:this.keyboardPending||this.hoverPending,[`${l}-cascader-option--disabled`]:this.disabled,[`${l}-cascader-option--show-prefix`]:this.showCheckbox}],onMouseenter:this.mergedHandleMouseEnter,onMousemove:this.mergedHandleMouseMove,onClick:this.handleClick},this.showCheckbox?d("div",{class:`${l}-cascader-option__prefix`},d(Dl,{focusable:!1,"data-checkbox":!0,disabled:this.disabled,checked:this.checked,indeterminate:this.indeterminate,theme:this.mergedTheme.peers.Checkbox,themeOverrides:this.mergedTheme.peerOverrides.Checkbox,onUpdateChecked:this.handleCheckboxUpdateValue})):null,d("span",{class:`${l}-cascader-option__label`},t?t(this.tmNode.rawNode,this.checked):this.label),d("div",{class:`${l}-cascader-option__suffix`},d("div",{class:`${l}-cascader-option-icon-placeholder`},this.isLeaf?this.checkStrategy==="child"&&!(this.multiple&&this.cascade)?d(ke,{name:"fade-in-scale-up-transition"},{default:()=>this.checked?d(He,{clsPrefix:l,class:`${l}-cascader-option-icon ${l}-cascader-option-icon--checkmark`},{default:()=>d(wl,null)}):null}):null:d(Al,{clsPrefix:l,scale:.85,strokeWidth:24,show:this.isLoading,class:`${l}-cascader-option-icon`},{default:()=>d(He,{clsPrefix:l,key:"arrow",class:`${l}-cascader-option-icon ${l}-cascader-option-icon--arrow`},{default:()=>d($l,null)})}))))}}),io=re({name:"CascaderSubmenu",props:{depth:{type:Number,required:!0},tmNodes:{type:Array,required:!0}},setup(){const{virtualScrollRef:l,mergedClsPrefixRef:t,mergedThemeRef:a,optionHeightRef:n}=Ce(pe),h=S(null),m=S(null),C={scroll(v,b){var R,k;l.value?(R=m.value)===null||R===void 0||R.scrollTo({index:v}):(k=h.value)===null||k===void 0||k.scrollTo({index:v,elSize:b})}};return Object.assign({mergedClsPrefix:t,mergedTheme:a,scrollbarInstRef:h,vlInstRef:m,virtualScroll:l,itemSize:f(()=>ve(n.value)),handleVlScroll:()=>{var v;(v=h.value)===null||v===void 0||v.sync()},getVlContainer:()=>{var v;return(v=m.value)===null||v===void 0?void 0:v.listElRef},getVlContent:()=>{var v;return(v=m.value)===null||v===void 0?void 0:v.itemsElRef}},C)},render(){const{mergedClsPrefix:l,mergedTheme:t,virtualScroll:a}=this;return d("div",{class:[a&&`${l}-cascader-submenu--virtual`,`${l}-cascader-submenu`]},d(Wl,{ref:"scrollbarInstRef",theme:t.peers.Scrollbar,themeOverrides:t.peerOverrides.Scrollbar,container:a?this.getVlContainer:void 0,content:a?this.getVlContent:void 0},{default:()=>a?d(kl,{items:this.tmNodes,itemSize:this.itemSize,onScroll:this.handleVlScroll,showScrollbar:!1,ref:"vlInstRef"},{default:({item:n})=>d(Qe,{key:n.key,tmNode:n})}):this.tmNodes.map(n=>d(Qe,{key:n.key,tmNode:n}))}))}}),so=re({name:"NCascaderMenu",props:{value:[String,Number,Array],placement:{type:String,default:"bottom-start"},show:Boolean,menuModel:{type:Array,required:!0},loading:Boolean,onFocus:{type:Function,required:!0},onBlur:{type:Function,required:!0},onKeydown:{type:Function,required:!0},onMousedown:{type:Function,required:!0},onTabout:{type:Function,required:!0}},setup(l){const{localeRef:t,isMountedRef:a,mergedClsPrefixRef:n,syncCascaderMenuPosition:h,handleCascaderMenuClickOutside:m,mergedThemeRef:C}=Ce(pe),v=[],b=S(null),R=S(null);function k(){h()}xl(R,k);function O(M){var N;const{value:{loadingRequiredMessage:T}}=t;(N=b.value)===null||N===void 0||N.showOnce(T(M))}function I(M){m(M)}function L(M){const{value:N}=R;N&&(N.contains(M.relatedTarget)||l.onFocus(M))}function J(M){const{value:N}=R;N&&(N.contains(M.relatedTarget)||l.onBlur(M))}return Object.assign({isMounted:a,mergedClsPrefix:n,selfElRef:R,submenuInstRefs:v,maskInstRef:b,mergedTheme:C,handleFocusin:L,handleFocusout:J,handleClickOutside:I},{scroll(M,N,T){const A=v[M];A&&A.scroll(N,T)},showErrorMessage:O})},render(){const{submenuInstRefs:l,mergedClsPrefix:t,mergedTheme:a}=this;return d(ke,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.show?Ue(d("div",{tabindex:"0",ref:"selfElRef",class:`${t}-cascader-menu`,onMousedown:this.onMousedown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeydown:this.onKeydown},this.menuModel[0].length?d("div",{class:`${t}-cascader-submenu-wrapper`},this.menuModel.map((n,h)=>d(io,{ref:m=>{m&&(l[h]=m)},key:h,tmNodes:n,depth:h+1})),d(oo,{clsPrefix:t,ref:"maskInstRef"})):d("div",{class:`${t}-cascader-menu__empty`},Ve(this.$slots.empty,()=>[d(Rl,{theme:a.peers.Empty,themeOverrides:a.peerOverrides.Empty})])),Bl(this.$slots.action,n=>n&&d("div",{class:`${t}-cascader-menu-action`,"data-action":!0},n)),d(Cl,{onFocus:this.onTabout})),[[Ee,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),uo=re({name:"NCascaderSelectMenu",props:{value:{type:[String,Number,Array],default:null},show:Boolean,pattern:{type:String,default:""},multiple:Boolean,tmNodes:{type:Array,default:()=>[]},filter:Function,labelField:{type:String,required:!0},separator:{type:String,required:!0}},setup(l){const{isMountedRef:t,mergedValueRef:a,mergedClsPrefixRef:n,mergedThemeRef:h,mergedCheckStrategyRef:m,slots:C,syncSelectMenuPosition:v,closeMenu:b,handleSelectMenuClickOutside:R,doUncheck:k,doCheck:O,clearPattern:I}=Ce(pe),L=S(null),J=f(()=>ro(l.tmNodes,m.value==="child",l.labelField,l.separator)),M=f(()=>{const{filter:u}=l;if(u)return u;const{labelField:y}=l;return(j,le,P)=>P.some(H=>H[y]&&~H[y].indexOf(j))}),N=f(()=>{const{pattern:u}=l,{value:y}=M;return(u?J.value.filter(j=>y(u,j.rawNode,j.path)):J.value).map(j=>({value:j.value,label:j.label}))}),T=f(()=>_e(N.value,Ml("value","children")));function A(){v()}function $(u){K(u)}function K(u){if(l.multiple){const{value:y}=a;Array.isArray(y)?y.includes(u.key)?k(u.key):O(u.key):y===null&&O(u.key),I()}else O(u.key),b(!0)}function z(){var u;(u=L.value)===null||u===void 0||u.prev()}function V(){var u;(u=L.value)===null||u===void 0||u.next()}function Y(){var u;if(L){const y=(u=L.value)===null||u===void 0?void 0:u.getPendingTmNode();return y&&K(y),!0}return!1}function ee(u){R(u)}return Object.assign({isMounted:t,mergedTheme:h,mergedClsPrefix:n,menuInstRef:L,selectTreeMate:T,handleResize:A,handleToggle:$,handleClickOutside:ee,cascaderSlots:C},{prev:z,next:V,enter:Y})},render(){const{mergedClsPrefix:l,isMounted:t,mergedTheme:a,cascaderSlots:n}=this;return d(ke,{name:"fade-in-scale-up-transition",appear:t},{default:()=>this.show?Ue(d(Sl,{ref:"menuInstRef",onResize:this.handleResize,clsPrefix:l,class:`${l}-cascader-menu`,autoPending:!0,themeOverrides:a.peerOverrides.InternalSelectMenu,theme:a.peers.InternalSelectMenu,treeMate:this.selectTreeMate,multiple:this.multiple,value:this.value,onToggle:this.handleToggle},{empty:()=>Ve(n["not-found"],()=>[])}),[[Ee,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),co=ce([B("cascader-menu",`
 outline: none;
 position: relative;
 margin: 4px 0;
 display: flex;
 flex-flow: column nowrap;
 border-radius: var(--n-menu-border-radius);
 overflow: hidden;
 box-shadow: var(--n-menu-box-shadow);
 color: var(--n-option-text-color);
 background-color: var(--n-menu-color);
 `,[We({transformOrigin:"inherit",duration:"0.2s"}),xe("empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),B("scrollbar",{width:"100%"}),B("base-menu-mask",{backgroundColor:"var(--n-menu-mask-color)"}),B("base-loading",{color:"var(--n-loading-color)"}),B("cascader-submenu-wrapper",`
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `),B("cascader-submenu",`
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `,[W("virtual",`
 width: var(--n-column-width);
 `),B("scrollbar-content",{position:"relative"}),ce("&:first-child",`
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `),ce("&:last-child",`
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `),ce("&:not(:first-child)",`
 border-left: 1px solid var(--n-menu-divider-color);
 `)]),B("cascader-menu-action",`
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `),B("cascader-option",`
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 padding: 0 0 0 18px;
 box-sizing: border-box;
 min-width: 182px;
 background-color: #0000;
 display: flex;
 align-items: center;
 white-space: nowrap;
 position: relative;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color 0.2s var(--n-bezier);
 `,[W("show-prefix",{paddingLeft:0}),xe("label",`
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `),xe("prefix",{width:"32px",display:"flex",alignItems:"center",justifyContent:"center"}),xe("suffix",{width:"32px",display:"flex",alignItems:"center",justifyContent:"center"}),B("cascader-option-icon-placeholder",{lineHeight:0,position:"relative",width:"16px",height:"16px",fontSize:"16px"},[B("cascader-option-icon",[W("checkmark",{color:"var(--n-option-check-mark-color)"},[We({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})]),W("arrow",{color:"var(--n-option-arrow-color)"})])]),W("selected",{color:"var(--n-option-text-color-active)"}),W("active",{color:"var(--n-option-text-color-active)",backgroundColor:"var(--n-option-color-hover)"}),W("pending",{backgroundColor:"var(--n-option-color-hover)"}),ce("&:hover",{backgroundColor:"var(--n-option-color-hover)"}),W("disabled",`
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `,[B("cascader-option-icon",[W("arrow",{color:"var(--n-option-text-color-disabled)"})])])])]),B("cascader",`
 z-index: auto;
 position: relative;
 width: 100%;
 `)]),ho=Object.assign(Object.assign({},De.props),{allowCheckingNotLoaded:Boolean,to:Re.propTo,bordered:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},value:[String,Number,Array],defaultValue:{type:[String,Number,Array],default:null},placeholder:String,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},disabledField:{type:String,default:"disabled"},expandTrigger:{type:String,default:"click"},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},remote:Boolean,onLoad:Function,separator:{type:String,default:" / "},filter:Function,placement:{type:String,default:"bottom-start"},cascade:{type:Boolean,default:!0},leafOnly:Boolean,showPath:{type:Boolean,default:!0},show:{type:Boolean,default:void 0},maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,menuProps:Object,filterMenuProps:Object,virtualScroll:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},valueField:{type:String,default:"value"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},renderLabel:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onBlur:Function,onFocus:Function,onChange:[Function,Array]}),vo=re({name:"Cascader",props:ho,setup(l,{slots:t}){const{mergedBorderedRef:a,mergedClsPrefixRef:n,namespaceRef:h,inlineThemeDisabled:m}=Kl(l),C=De("Cascader","-cascader",co,no,l,n),{localeRef:v}=Ql("Cascader"),b=S(l.defaultValue),R=f(()=>l.value),k=Je(R,b),O=f(()=>l.leafOnly?"child":l.checkStrategy),I=S(""),L=Il(l),{mergedSizeRef:J,mergedDisabledRef:M,mergedStatusRef:N}=L,T=S(null),A=S(null),$=S(null),K=S(null),z=S(null),V=S(new Set),Y=S(null),ee=S(null),u=Re(l),y=S(!1),j=e=>{V.value.add(e)},le=e=>{V.value.delete(e)},P=f(()=>{const{valueField:e,childrenField:o,disabledField:r}=l;return _e(l.options,{getDisabled(c){return c[r]},getKey(c){return c[e]},getChildren(c){return c[o]}})}),H=f(()=>{const{cascade:e,multiple:o}=l;return o&&Array.isArray(k.value)?P.value.getCheckedKeys(k.value,{cascade:e,allowNotLoaded:l.allowCheckingNotLoaded}):{checkedKeys:[],indeterminateKeys:[]}}),oe=f(()=>H.value.checkedKeys),ie=f(()=>H.value.indeterminateKeys),Me=f(()=>{const{treeNodePath:e,treeNode:o}=P.value.getPath(z.value);let r;return o===null?r=[P.value.treeNodes]:(r=e.map(c=>c.siblings),!o.isLeaf&&!V.value.has(o.key)&&o.children&&r.push(o.children)),r}),se=f(()=>{const{keyPath:e}=P.value.getPath(z.value);return e}),U=f(()=>C.value.self.optionHeight);Hl(l.options)&&qe(l.options,(e,o)=>{e!==o&&(z.value=null,K.value=null)});function fe(e){const{onUpdateShow:o,"onUpdate:show":r}=l;o&&G(o,e),r&&G(r,e),ge.value=e}function E(e,o,r){const{onUpdateValue:c,"onUpdate:value":s,onChange:w}=l,{nTriggerFormInput:i,nTriggerFormChange:g}=L;c&&G(c,e,o,r),s&&G(s,e,o,r),w&&G(w,e,o,r),b.value=e,i(),g()}function Z(e){K.value=e}function Q(e){z.value=e}function ue(e){const{value:{getNode:o}}=P;return e.map(r=>{var c;return((c=o(r))===null||c===void 0?void 0:c.rawNode)||null})}function me(e){var o;const{cascade:r,multiple:c,filterable:s}=l,{value:{check:w,getNode:i,getPath:g}}=P;if(c)try{const{checkedKeys:p}=w(e,H.value.checkedKeys,{cascade:r,checkStrategy:O.value,allowNotLoaded:l.allowCheckingNotLoaded});E(p,ue(p),p.map(ne=>{var de;return Se((de=g(ne))===null||de===void 0?void 0:de.treeNodePath)})),s&&Ne(),K.value=e,z.value=e}catch(p){if(p instanceof Zl){if(T.value){const ne=i(e);ne!==null&&T.value.showErrorMessage(ne.rawNode[l.labelField])}}else throw p}else if(O.value==="child"){const p=i(e);if(p!=null&&p.isLeaf)E(e,p.rawNode,Se(g(e).treeNodePath));else return!1}else{const p=i(e);E(e,(p==null?void 0:p.rawNode)||null,Se((o=g(e))===null||o===void 0?void 0:o.treeNodePath))}return!0}function ae(e){const{cascade:o,multiple:r}=l;if(r){const{value:{uncheck:c,getNode:s,getPath:w}}=P,{checkedKeys:i}=c(e,H.value.checkedKeys,{cascade:o,checkStrategy:O.value,allowNotLoaded:l.allowCheckingNotLoaded});E(i,i.map(g=>{var p;return((p=s(g))===null||p===void 0?void 0:p.rawNode)||null}),i.map(g=>{var p;return Se((p=w(g))===null||p===void 0?void 0:p.treeNodePath)})),K.value=e,z.value=e}}const F=f(()=>{if(l.multiple){const{showPath:e,separator:o,labelField:r,cascade:c}=l,{getCheckedKeys:s,getNode:w}=P.value;return s(oe.value,{cascade:c,checkStrategy:O.value,allowNotLoaded:l.allowCheckingNotLoaded}).checkedKeys.map(i=>{const g=w(i);return g===null?{label:String(i),value:i}:{label:e?Oe(g,o,r):g.rawNode[r],value:g.key}})}else return[]}),_=f(()=>{const{multiple:e,showPath:o,separator:r,labelField:c}=l,{value:s}=k;if(!e&&!Array.isArray(s)){const{getNode:w}=P.value;if(s===null)return null;const i=w(s);return i===null?{label:String(s),value:s}:{label:o?Oe(i,r,c):i.rawNode[c],value:i.key}}else return null}),ge=S(!1),be=q(l,"show"),x=Je(be,ge),Te=f(()=>{const{placeholder:e}=l;return e!==void 0?e:v.value.placeholder}),D=f(()=>!!(l.filterable&&I.value));qe(x,e=>{if(!e||l.multiple)return;const{value:o}=k;!Array.isArray(o)&&o!==null?(K.value=o,z.value=o,ql(()=>{var r;if(!x.value)return;const{value:c}=z;if(k.value!==null){const s=P.value.getNode(c);s&&((r=T.value)===null||r===void 0||r.scroll(s.level,s.index,ve(U.value)))}})):(K.value=null,z.value=null)},{immediate:!0});function Ke(e){const{onBlur:o}=l,{nTriggerFormBlur:r}=L;o&&G(o,e),r()}function Le(e){const{onFocus:o}=l,{nTriggerFormFocus:r}=L;o&&G(o,e),r()}function Ne(){var e;(e=$.value)===null||e===void 0||e.focusInput()}function Xe(){var e;(e=$.value)===null||e===void 0||e.focus()}function ye(){M.value||(I.value="",fe(!0),l.filterable&&Ne())}function X(e=!1){e&&Xe(),fe(!1),I.value=""}function ze(e){var o;D.value||x.value&&(!((o=$.value)===null||o===void 0)&&o.$el.contains(Jl(e))||X())}function Ge(e){D.value&&ze(e)}function Be(){l.clearFilterAfterSelect&&(I.value="")}function we(e){var o,r,c;const{value:s}=K,{value:w}=P;switch(e){case"prev":if(s!==null){const i=w.getPrev(s,{loop:!0});i!==null&&(Z(i.key),(o=T.value)===null||o===void 0||o.scroll(i.level,i.index,ve(U.value)))}break;case"next":if(s===null){const i=w.getFirstAvailableNode();i!==null&&(Z(i.key),(r=T.value)===null||r===void 0||r.scroll(i.level,i.index,ve(U.value)))}else{const i=w.getNext(s,{loop:!0});i!==null&&(Z(i.key),(c=T.value)===null||c===void 0||c.scroll(i.level,i.index,ve(U.value)))}break;case"child":if(s!==null){const i=w.getNode(s);if(i!==null)if(i.shallowLoaded){const g=w.getChild(s);g!==null&&(Q(s),Z(g.key))}else{const{value:g}=V;if(!g.has(s)){j(s),Q(s);const{onLoad:p}=l;p&&p(i.rawNode).then(()=>{le(s)}).catch(()=>{le(s)})}}}break;case"parent":if(s!==null){const i=w.getParent(s);if(i!==null){Z(i.key);const g=i.getParent();Q(g===null?null:g.key)}}break}}function Ae(e){var o,r;switch(e.key){case" ":case"ArrowDown":case"ArrowUp":if(l.filterable&&x.value)break;e.preventDefault();break}if(!Fe(e,"action"))switch(e.key){case" ":if(l.filterable)return;case"Enter":if(!x.value)ye();else{const{value:c}=D,{value:s}=K;if(c)A.value&&A.value.enter()&&Be();else if(s!==null)if(oe.value.includes(s)||ie.value.includes(s))ae(s);else{const w=me(s);!l.multiple&&w&&X(!0)}}break;case"ArrowUp":e.preventDefault(),x.value&&(D.value?(o=A.value)===null||o===void 0||o.prev():we("prev"));break;case"ArrowDown":e.preventDefault(),x.value?D.value?(r=A.value)===null||r===void 0||r.next():we("next"):ye();break;case"ArrowLeft":e.preventDefault(),x.value&&!D.value&&we("parent");break;case"ArrowRight":e.preventDefault(),x.value&&!D.value&&we("child");break;case"Escape":x.value&&(Gl(e),X(!0))}}function Ye(e){Ae(e)}function el(e){e.stopPropagation(),l.multiple?E([],[],[]):E(null,null,null)}function ll(e){var o;!((o=T.value)===null||o===void 0)&&o.$el.contains(e.relatedTarget)||(y.value=!0,Le(e))}function ol(e){var o;!((o=T.value)===null||o===void 0)&&o.$el.contains(e.relatedTarget)||(y.value=!1,Ke(e),X())}function al(e){var o;!((o=$.value)===null||o===void 0)&&o.$el.contains(e.relatedTarget)||(y.value=!0,Le(e))}function tl(e){var o;!((o=$.value)===null||o===void 0)&&o.$el.contains(e.relatedTarget)||(y.value=!1,Ke(e))}function nl(e){Fe(e,"action")||l.multiple&&l.filter&&(e.preventDefault(),Ne())}function rl(){X(!0)}function il(){l.filterable?ye():x.value?X(!0):ye()}function sl(e){I.value=e.target.value}function ul(e){const{multiple:o}=l,{value:r}=k;o&&Array.isArray(r)&&e.value!==void 0?ae(e.value):E(null,null,null)}function Ie(){var e;(e=Y.value)===null||e===void 0||e.syncPosition()}function $e(){var e;(e=ee.value)===null||e===void 0||e.syncPosition()}function dl(){x.value&&(D.value?Ie():$e())}const Pe=f(()=>!!(l.multiple&&l.cascade||O.value!=="child"));Ul(pe,{slots:t,mergedClsPrefixRef:n,mergedThemeRef:C,mergedValueRef:k,checkedKeysRef:oe,indeterminateKeysRef:ie,hoverKeyPathRef:se,mergedCheckStrategyRef:O,showCheckboxRef:Pe,cascadeRef:q(l,"cascade"),multipleRef:q(l,"multiple"),keyboardKeyRef:K,hoverKeyRef:z,remoteRef:q(l,"remote"),loadingKeySetRef:V,expandTriggerRef:q(l,"expandTrigger"),isMountedRef:Xl(),onLoadRef:q(l,"onLoad"),virtualScrollRef:q(l,"virtualScroll"),optionHeightRef:U,localeRef:v,labelFieldRef:q(l,"labelField"),renderLabelRef:q(l,"renderLabel"),syncCascaderMenuPosition:$e,syncSelectMenuPosition:Ie,updateKeyboardKey:Z,updateHoverKey:Q,addLoadingKey:j,deleteLoadingKey:le,doCheck:me,doUncheck:ae,closeMenu:X,handleSelectMenuClickOutside:Ge,handleCascaderMenuClickOutside:ze,clearPattern:Be});const cl={focus:()=>{var e;(e=$.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=$.value)===null||e===void 0||e.blur()},getCheckedData:()=>{if(Pe.value){const e=oe.value;return{keys:e,options:ue(e)}}return{keys:[],options:[]}},getIndeterminateData:()=>{if(Pe.value){const e=ie.value;return{keys:e,options:ue(e)}}return{keys:[],options:[]}}},je=f(()=>{const{self:{optionArrowColor:e,optionTextColor:o,optionTextColorActive:r,optionTextColorDisabled:c,optionCheckMarkColor:s,menuColor:w,menuBoxShadow:i,menuDividerColor:g,menuBorderRadius:p,menuHeight:ne,optionColorHover:de,optionHeight:hl,optionFontSize:vl,loadingColor:pl,columnWidth:fl},common:{cubicBezierEaseInOut:ml}}=C.value;return{"--n-bezier":ml,"--n-menu-border-radius":p,"--n-menu-box-shadow":i,"--n-menu-height":ne,"--n-column-width":fl,"--n-menu-color":w,"--n-menu-divider-color":g,"--n-option-height":hl,"--n-option-font-size":vl,"--n-option-text-color":o,"--n-option-text-color-disabled":c,"--n-option-text-color-active":r,"--n-option-color-hover":de,"--n-option-check-mark-color":s,"--n-option-arrow-color":e,"--n-menu-mask-color":Ll(w,{alpha:.75}),"--n-loading-color":pl}}),te=m?zl("cascader",void 0,je,l):void 0;return Object.assign(Object.assign({},cl),{handleTriggerResize:dl,mergedStatus:N,selectMenuFollowerRef:Y,cascaderMenuFollowerRef:ee,triggerInstRef:$,selectMenuInstRef:A,cascaderMenuInstRef:T,mergedBordered:a,mergedClsPrefix:n,namespace:h,mergedValue:k,mergedShow:x,showSelectMenu:D,pattern:I,treeMate:P,mergedSize:J,mergedDisabled:M,localizedPlaceholder:Te,selectedOption:_,selectedOptions:F,adjustedTo:u,menuModel:Me,handleMenuTabout:rl,handleMenuFocus:al,handleMenuBlur:tl,handleMenuKeydown:Ye,handleMenuMousedown:nl,handleTriggerFocus:ll,handleTriggerBlur:ol,handleTriggerClick:il,handleClear:el,handleDeleteOption:ul,handlePatternInput:sl,handleKeydown:Ae,focused:y,optionHeight:U,mergedTheme:C,cssVars:m?void 0:je,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender})},render(){const{mergedClsPrefix:l}=this;return d("div",{class:`${l}-cascader`},d(Yl,null,{default:()=>[d(eo,null,{default:()=>d(Tl,{onResize:this.handleTriggerResize,ref:"triggerInstRef",status:this.mergedStatus,clsPrefix:l,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,active:this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,focused:this.focused,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onClick:this.handleTriggerClick,onClear:this.handleClear,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onKeydown:this.handleKeydown},{arrow:()=>{var t,a;return(a=(t=this.$slots).arrow)===null||a===void 0?void 0:a.call(t)}})}),d(Ze,{key:"cascaderMenu",ref:"cascaderMenuFollowerRef",show:this.mergedShow&&!this.showSelectMenu,containerClass:this.namespace,placement:this.placement,width:this.options.length?void 0:"target",teleportDisabled:this.adjustedTo===Re.tdkey,to:this.adjustedTo},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{menuProps:a}=this;return d(so,Object.assign({},a,{ref:"cascaderMenuInstRef",class:[this.themeClass,a==null?void 0:a.class],value:this.mergedValue,show:this.mergedShow&&!this.showSelectMenu,menuModel:this.menuModel,style:[this.cssVars,a==null?void 0:a.style],onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onMousedown:this.handleMenuMousedown,onTabout:this.handleMenuTabout}),{action:()=>{var n,h;return(h=(n=this.$slots).action)===null||h===void 0?void 0:h.call(n)},empty:()=>{var n,h;return(h=(n=this.$slots).empty)===null||h===void 0?void 0:h.call(n)}})}}),d(Ze,{key:"selectMenu",ref:"selectMenuFollowerRef",show:this.mergedShow&&this.showSelectMenu,containerClass:this.namespace,width:"target",placement:this.placement,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Re.tdkey},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{filterMenuProps:a}=this;return d(uo,Object.assign({},a,{ref:"selectMenuInstRef",class:[this.themeClass,a==null?void 0:a.class],value:this.mergedValue,show:this.mergedShow&&this.showSelectMenu,pattern:this.pattern,multiple:this.multiple,tmNodes:this.treeMate.treeNodes,filter:this.filter,labelField:this.labelField,separator:this.separator,style:[this.cssVars,a==null?void 0:a.style]}))}})]}))}});export{vo as N};