import{c as Me,a as Te,e as Se,d as J,u as Ce,g as ie,p as De,G as Fe}from"./light-5802f424.js";import{u as Pe}from"./use-locale-5324fa07.js";import{b as Oe,u as ke,X as Z}from"./Button-68cb5d7d.js";import{u as Ae}from"./use-merged-state-89f8109f.js";import{u as g,a as q,r as Q}from"./use-memo-b9add725.js";import{N as Ue}from"./Input-cf865318.js";import{i as _e}from"./light-a0d3ac36.js";import{b as Y}from"./Scrollbar-068db0c3.js";import{N as ee}from"./Icon-fde79c06.js";import{v as j,J as u,aZ as B,b3 as $e,az as Ee,i as Le,X as He}from"./runtime-core.esm-bundler-c066f4bf.js";import{c as w}from"./FadeInExpandTransition-ff940b4d.js";const je=j({name:"Add",render(){return u("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ze=j({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Ge=n=>{const{textColorDisabled:l}=n;return{iconColorDisabled:l}},Ke=Me({name:"InputNumber",common:Te,peers:{Button:Oe,Input:_e},self:Ge}),Xe=Ke;function We(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function Je(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function L(n){return n==null?!0:!Number.isNaN(n)}function ne(n,l){return n==null?"":l===void 0?String(n):n.toFixed(l)}function H(n){if(n===null)return null;if(typeof n=="number")return n;{const l=Number(n);return Number.isNaN(l)?null:l}}const Ze=Se([J("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),J("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),te=800,re=100,qe=Object.assign(Object.assign({},ie.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),dn=j({name:"InputNumber",props:qe,setup(n){const{mergedBorderedRef:l,mergedClsPrefixRef:p,mergedRtlRef:C}=Ce(n),a=ie("InputNumber","-input-number",Ze,Xe,n,p),{localeRef:h}=Pe("InputNumber"),R=ke(n),{mergedSizeRef:le,mergedDisabledRef:ue,mergedStatusRef:ae}=R,c=B(null),z=B(null),G=B(null),D=B(n.defaultValue),oe=$e(n,"value"),d=Ae(oe,D),v=B(""),F=e=>{const t=String(e).split(".")[1];return t?t.length:0},se=e=>{const t=[n.min,n.max,n.step,e].map(r=>r===void 0?0:F(r));return Math.max(...t)},de=g(()=>{const{placeholder:e}=n;return e!==void 0?e:h.value.placeholder}),M=g(()=>{const e=H(n.step);return e!==null?e===0?1:Math.abs(e):1}),K=g(()=>{const e=H(n.min);return e!==null?e:null}),X=g(()=>{const e=H(n.max);return e!==null?e:null}),I=e=>{const{value:t}=d;if(e===t){b();return}const{"onUpdate:value":r,onUpdateValue:i,onChange:s}=n,{nTriggerFormInput:f,nTriggerFormChange:x}=R;s&&w(s,e),i&&w(i,e),r&&w(r,e),D.value=e,f(),x()},o=({offset:e,doUpdateIfValid:t,fixPrecision:r,isInputing:i})=>{const{value:s}=v;if(i&&Je(s))return!1;const f=(n.parse||We)(s);if(f===null)return t&&I(null),null;if(L(f)){const x=F(f),{precision:N}=n;if(N!==void 0&&N<x&&!r)return!1;let m=parseFloat((f+e).toFixed(N??se(f)));if(L(m)){const{value:$}=X,{value:E}=K;if($!==null&&m>$){if(!t||i)return!1;m=$}if(E!==null&&m<E){if(!t||i)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&I(m),m)}}return!1},b=()=>{const{value:e}=d;if(L(e)){const{format:t,precision:r}=n;t?v.value=t(e):e===null||r===void 0||F(e)>r?v.value=ne(e,void 0):v.value=ne(e,r)}else v.value=String(e)};b();const fe=g(()=>o({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),P=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),O=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ce(e){const{onFocus:t}=n,{nTriggerFormFocus:r}=R;t&&w(t,e),r()}function me(e){var t,r;if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;const i=o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(i!==!1){const x=(r=c.value)===null||r===void 0?void 0:r.inputElRef;x&&(x.value=String(i||"")),d.value===i&&b()}else b();const{onBlur:s}=n,{nTriggerFormBlur:f}=R;s&&w(s,e),f(),He(()=>{b()})}function he(e){const{onClear:t}=n;t&&w(t,e)}function k(){const{value:e}=O;if(!e){_();return}const{value:t}=d;if(t===null)n.validator||I(W());else{const{value:r}=M;o({offset:r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function A(){const{value:e}=P;if(!e){U();return}const{value:t}=d;if(t===null)n.validator||I(W());else{const{value:r}=M;o({offset:-r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ve=ce,ge=me;function W(){if(n.validator)return null;const{value:e}=K,{value:t}=X;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function pe(e){he(e),I(null)}function be(e){var t,r,i;!((t=G.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((r=z.value)===null||r===void 0)&&r.$el.contains(e.target)&&e.preventDefault(),(i=c.value)===null||i===void 0||i.activate()}let V=null,y=null,T=null;function U(){T&&(window.clearTimeout(T),T=null),V&&(window.clearInterval(V),V=null)}function _(){S&&(window.clearTimeout(S),S=null),y&&(window.clearInterval(y),y=null)}function xe(){U(),T=window.setTimeout(()=>{V=window.setInterval(()=>{A()},re)},te),Y("mouseup",document,U,{once:!0})}let S=null;function we(){_(),S=window.setTimeout(()=>{y=window.setInterval(()=>{k()},re)},te),Y("mouseup",document,_,{once:!0})}const Ie=()=>{y||k()},Ve=()=>{V||A()};function ye(e){var t,r;if(e.key==="Enter"){if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((r=c.value)===null||r===void 0||r.deactivate())}else if(e.key==="ArrowUp"){if(!O.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&k()}else if(e.key==="ArrowDown"){if(!P.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}}function Ne(e){v.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&o({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ee(d,()=>{b()});const Be={focus:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.blur()}},Re=De("InputNumber",C,p);return Object.assign(Object.assign({},Be),{rtlEnabled:Re,inputInstRef:c,minusButtonInstRef:z,addButtonInstRef:G,mergedClsPrefix:p,mergedBordered:l,uncontrolledValue:D,mergedValue:d,mergedPlaceholder:de,displayedValueInvalid:fe,mergedSize:le,mergedDisabled:ue,displayedValue:v,addable:O,minusable:P,mergedStatus:ae,handleFocus:ve,handleBlur:ge,handleClear:pe,handleMouseDown:be,handleAddClick:Ie,handleMinusClick:Ve,handleAddMousedown:we,handleMinusMousedown:xe,handleKeyDown:ye,handleUpdateDisplayedValue:Ne,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:Le(()=>{const{self:{iconColorDisabled:e}}=a.value,[t,r,i,s]=Fe(e);return{textColorTextDisabled:`rgb(${t}, ${r}, ${i})`,opacityDisabled:`${s}`}})})},render(){const{mergedClsPrefix:n,$slots:l}=this,p=()=>u(Z,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>Q(l["minus-icon"],()=>[u(ee,{clsPrefix:n},{default:()=>u(ze,null)})])}),C=()=>u(Z,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>Q(l["add-icon"],()=>[u(ee,{clsPrefix:n},{default:()=>u(je,null)})])});return u("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},u(Ue,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[p(),q(l.prefix,h=>h?u("span",{class:`${n}-input-number-prefix`},h):null)]:(a=l.prefix)===null||a===void 0?void 0:a.call(l)},suffix:()=>{var a;return this.showButton?[q(l.suffix,h=>h?u("span",{class:`${n}-input-number-suffix`},h):null),this.buttonPlacement==="right"?p():null,C()]:(a=l.suffix)===null||a===void 0?void 0:a.call(l)}}))}});export{dn as N};