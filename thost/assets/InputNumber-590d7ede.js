import{l as Ce,c as De,h as Ne,a as H,u as Fe,d as J,o as Oe,$ as Ue}from"./light-cb8e5d18.js";import{u as Se}from"./use-locale-13d55c5c.js";import{u as ke}from"./Loading-a27cceda.js";import{u as Me}from"./use-merged-state-236ae148.js";import{u as h,r as Q,b as W}from"./use-memo-7138c88c.js";import{N as Re}from"./Input-c49f615f.js";import{b as Ae,X as Y}from"./Button-a421b774.js";import{i as $e}from"./light-5edeff63.js";import{o as Z}from"./Scrollbar-6ef5ad24.js";import{N as ee}from"./Icon-0741e3aa.js";import{w as te,N as o,b2 as V,b8 as je,aC as Ee,j as ze,_ as Ke}from"./index-6b27469d.js";import{A as Le}from"./Add-d9842426.js";import{c as w}from"./use-is-mounted-e356ec1d.js";const Xe=te({name:"Remove",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),_e=t=>{const{textColorDisabled:r}=t;return{iconColorDisabled:r}},qe=Ce({name:"InputNumber",common:De,peers:{Button:Ae,Input:$e},self:_e}),Ge=qe;function He(t){return t==null||typeof t=="string"&&t.trim()===""?null:Number(t)}function Je(t){return t.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(t)||/^\.\d+$/.test(t))}function z(t){return t==null?!0:!Number.isNaN(t)}function ne(t,r){return t==null?"":r===void 0?String(t):t.toFixed(r)}function K(t){if(t===null)return null;if(typeof t=="number")return t;{const r=Number(t);return Number.isNaN(r)?null:r}}const Qe=Ne([H("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),H("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ie=800,re=100,We=Object.assign(Object.assign({},J.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Ye=te({name:"InputNumber",props:We,setup(t){const{mergedBorderedRef:r,mergedClsPrefixRef:g,mergedRtlRef:N}=Fe(t),u=J("InputNumber","-input-number",Qe,Ge,t,g),{localeRef:m}=Se("InputNumber"),P=ke(t),{mergedSizeRef:le,mergedDisabledRef:oe,mergedStatusRef:ue}=P,d=V(null),L=V(null),X=V(null),F=V(t.defaultValue),ae=je(t,"value"),f=Me(ae,F),v=V(""),O=e=>{const n=String(e).split(".")[1];return n?n.length:0},se=e=>{const n=[t.min,t.max,t.step,e].map(i=>i===void 0?0:O(i));return Math.max(...n)},de=h(()=>{const{placeholder:e}=t;return e!==void 0?e:m.value.placeholder}),T=h(()=>{const e=K(t.step);return e!==null?e===0?1:Math.abs(e):1}),_=h(()=>{const e=K(t.min);return e!==null?e:null}),q=h(()=>{const e=K(t.max);return e!==null?e:null}),I=e=>{const{value:n}=f;if(e===n){b();return}const{"onUpdate:value":i,onUpdateValue:l,onChange:s}=t,{nTriggerFormInput:c,nTriggerFormChange:x}=P;s&&w(s,e),l&&w(l,e),i&&w(i,e),F.value=e,c(),x()},a=({offset:e,doUpdateIfValid:n,fixPrecision:i,isInputing:l})=>{const{value:s}=v;if(l&&Je(s))return!1;const c=(t.parse||He)(s);if(c===null)return n&&I(null),null;if(z(c)){const x=O(c),{precision:$}=t;if($!==void 0&&$<x&&!i)return!1;let p=parseFloat((c+e).toFixed($??se(c)));if(z(p)){const{value:j}=q,{value:E}=_;if(j!==null&&p>j){if(!n||l)return!1;p=j}if(E!==null&&p<E){if(!n||l)return!1;p=E}return t.validator&&!t.validator(p)?!1:(n&&I(p),p)}}return!1},b=()=>{const{value:e}=f;if(z(e)){const{format:n,precision:i}=t;n?v.value=n(e):e===null||i===void 0||O(e)>i?v.value=ne(e,void 0):v.value=ne(e,i)}else v.value=String(e)};b();const fe=h(()=>a({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),U=h(()=>{const{value:e}=f;if(t.validator&&e===null)return!1;const{value:n}=T;return a({offset:-n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),S=h(()=>{const{value:e}=f;if(t.validator&&e===null)return!1;const{value:n}=T;return a({offset:+n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ce(e){const{onFocus:n}=t,{nTriggerFormFocus:i}=P;n&&w(n,e),i()}function pe(e){var n,i;if(e.target===((n=d.value)===null||n===void 0?void 0:n.wrapperElRef))return;const l=a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(l!==!1){const x=(i=d.value)===null||i===void 0?void 0:i.inputElRef;x&&(x.value=String(l||"")),f.value===l&&b()}else b();const{onBlur:s}=t,{nTriggerFormBlur:c}=P;s&&w(s,e),c(),Ke(()=>{b()})}function me(e){const{onClear:n}=t;n&&w(n,e)}function k(){const{value:e}=S;if(!e){A();return}const{value:n}=f;if(n===null)t.validator||I(G());else{const{value:i}=T;a({offset:i,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function M(){const{value:e}=U;if(!e){R();return}const{value:n}=f;if(n===null)t.validator||I(G());else{const{value:i}=T;a({offset:-i,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ve=ce,he=pe;function G(){if(t.validator)return null;const{value:e}=_,{value:n}=q;return e!==null?Math.max(0,e):n!==null?Math.min(0,n):0}function ge(e){me(e),I(null)}function be(e){var n,i,l;!((n=X.value)===null||n===void 0)&&n.$el.contains(e.target)&&e.preventDefault(),!((i=L.value)===null||i===void 0)&&i.$el.contains(e.target)&&e.preventDefault(),(l=d.value)===null||l===void 0||l.activate()}let y=null,B=null,C=null;function R(){C&&(window.clearTimeout(C),C=null),y&&(window.clearInterval(y),y=null)}function A(){D&&(window.clearTimeout(D),D=null),B&&(window.clearInterval(B),B=null)}function xe(){R(),C=window.setTimeout(()=>{y=window.setInterval(()=>{M()},re)},ie),Z("mouseup",document,R,{once:!0})}let D=null;function we(){A(),D=window.setTimeout(()=>{B=window.setInterval(()=>{k()},re)},ie),Z("mouseup",document,A,{once:!0})}const Ie=()=>{B||k()},ye=()=>{y||M()};function Be(e){var n,i;if(e.key==="Enter"){if(e.target===((n=d.value)===null||n===void 0?void 0:n.wrapperElRef))return;a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((i=d.value)===null||i===void 0||i.deactivate())}else if(e.key==="ArrowUp"){if(!S.value||t.keyboard.ArrowUp===!1)return;e.preventDefault(),a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&k()}else if(e.key==="ArrowDown"){if(!U.value||t.keyboard.ArrowDown===!1)return;e.preventDefault(),a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&M()}}function Ve(e){v.value=e,t.updateValueOnInput&&!t.format&&!t.parse&&t.precision===void 0&&a({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ee(f,()=>{b()});const Pe={focus:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.blur()},select:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.select()}},Te=Oe("InputNumber",N,g);return Object.assign(Object.assign({},Pe),{rtlEnabled:Te,inputInstRef:d,minusButtonInstRef:L,addButtonInstRef:X,mergedClsPrefix:g,mergedBordered:r,uncontrolledValue:F,mergedValue:f,mergedPlaceholder:de,displayedValueInvalid:fe,mergedSize:le,mergedDisabled:oe,displayedValue:v,addable:S,minusable:U,mergedStatus:ue,handleFocus:ve,handleBlur:he,handleClear:ge,handleMouseDown:be,handleAddClick:Ie,handleMinusClick:ye,handleAddMousedown:we,handleMinusMousedown:xe,handleKeyDown:Be,handleUpdateDisplayedValue:Ve,mergedTheme:u,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:ze(()=>{const{self:{iconColorDisabled:e}}=u.value,[n,i,l,s]=Ue(e);return{textColorTextDisabled:`rgb(${n}, ${i}, ${l})`,opacityDisabled:`${s}`}})})},render(){const{mergedClsPrefix:t,$slots:r}=this,g=()=>o(Y,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>W(r["minus-icon"],()=>[o(ee,{clsPrefix:t},{default:()=>o(Xe,null)})])}),N=()=>o(Y,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>W(r["add-icon"],()=>[o(ee,{clsPrefix:t},{default:()=>o(Le,null)})])});return o("div",{class:[`${t}-input-number`,this.rtlEnabled&&`${t}-input-number--rtl`]},o(Re,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var u;return this.showButton&&this.buttonPlacement==="both"?[g(),Q(r.prefix,m=>m?o("span",{class:`${t}-input-number-prefix`},m):null)]:(u=r.prefix)===null||u===void 0?void 0:u.call(r)},suffix:()=>{var u;return this.showButton?[Q(r.suffix,m=>m?o("span",{class:`${t}-input-number-suffix`},m):null),this.buttonPlacement==="right"?g():null,N()]:(u=r.suffix)===null||u===void 0?void 0:u.call(r)}}))}});export{Ye as N};