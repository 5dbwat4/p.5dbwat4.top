import{c as to,n as D,g as ro,u as A,a as F,i as S,b as z,h as $,j as H,d as V,o as ao,k as U,e as no}from"./light-cb8e5d18.js";import{u as _}from"./Loading-a27cceda.js";import{u as P}from"./use-merged-state-236ae148.js";import{u as j}from"./use-memo-7138c88c.js";import{c as B}from"./use-is-mounted-e356ec1d.js";import{b2 as R,R as io,b8 as T,w as lo,ad as uo,j as I,N as L}from"./index-6b27469d.js";import{f as so}from"./flatten-0afec71b.js";import{g as bo}from"./get-slot-1efb97e5.js";const co={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},po=o=>{const{borderColor:a,primaryColor:e,baseColor:i,textColorDisabled:n,inputColorDisabled:p,textColor2:t,opacityDisabled:d,borderRadius:s,fontSizeSmall:g,fontSizeMedium:h,fontSizeLarge:m,heightSmall:b,heightMedium:x,heightLarge:f,lineHeight:C}=o;return Object.assign(Object.assign({},co),{labelLineHeight:C,buttonHeightSmall:b,buttonHeightMedium:x,buttonHeightLarge:f,fontSizeSmall:g,fontSizeMedium:h,fontSizeLarge:m,boxShadow:`inset 0 0 0 1px ${a}`,boxShadowActive:`inset 0 0 0 1px ${e}`,boxShadowFocus:`inset 0 0 0 1px ${e}, 0 0 0 2px ${D(e,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${e}`,boxShadowDisabled:`inset 0 0 0 1px ${a}`,color:i,colorDisabled:p,colorActive:"#0000",textColor:t,textColorDisabled:n,dotColorActive:e,dotColorDisabled:a,buttonBorderColor:a,buttonBorderColorActive:e,buttonBorderColorHover:a,buttonColor:i,buttonColorActive:i,buttonTextColor:t,buttonTextColorActive:e,buttonTextColorHover:e,opacityDisabled:d,buttonBoxShadowFocus:`inset 0 0 0 1px ${e}, 0 0 0 2px ${D(e,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:s})},ho={name:"Radio",common:to,self:po},N=ho,vo={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},E=ro("n-radio-group");function go(o){const a=_(o,{mergedSize(r){const{size:l}=o;if(l!==void 0)return l;if(t){const{mergedSizeRef:{value:c}}=t;if(c!==void 0)return c}return r?r.mergedSize.value:"medium"},mergedDisabled(r){return!!(o.disabled||t!=null&&t.disabledRef.value||r!=null&&r.disabled.value)}}),{mergedSizeRef:e,mergedDisabledRef:i}=a,n=R(null),p=R(null),t=io(E,null),d=R(o.defaultChecked),s=T(o,"checked"),g=P(s,d),h=j(()=>t?t.valueRef.value===o.value:g.value),m=j(()=>{const{name:r}=o;if(r!==void 0)return r;if(t)return t.nameRef.value}),b=R(!1);function x(){if(t){const{doUpdateValue:r}=t,{value:l}=o;B(r,l)}else{const{onUpdateChecked:r,"onUpdate:checked":l}=o,{nTriggerFormInput:c,nTriggerFormChange:u}=a;r&&B(r,!0),l&&B(l,!0),c(),u(),d.value=!0}}function f(){i.value||h.value||x()}function C(){f(),n.value&&(n.value.checked=h.value)}function w(){b.value=!1}function y(){b.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:A(o).mergedClsPrefixRef,inputRef:n,labelRef:p,mergedName:m,mergedDisabled:i,renderSafeChecked:h,focus:b,mergedSize:e,handleRadioInputChange:C,handleRadioInputBlur:w,handleRadioInputFocus:y}}const fo=F("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[S("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[z("checked",{backgroundColor:"var(--n-button-border-color-active)"}),z("disabled",{opacity:"var(--n-opacity-disabled)"})]),z("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[F("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),S("splitor",{height:"var(--n-height)"})]),F("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[F("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),S("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),$("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[S("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),$("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[S("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),H("disabled",`
 cursor: pointer;
 `,[$("&:hover",[S("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),H("checked",{color:"var(--n-button-text-color-hover)"})]),z("focus",[$("&:not(:active)",[S("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),z("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),z("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function mo(o,a,e){var i;const n=[];let p=!1;for(let t=0;t<o.length;++t){const d=o[t],s=(i=d.type)===null||i===void 0?void 0:i.name;s==="RadioButton"&&(p=!0);const g=d.props;if(s!=="RadioButton"){n.push(d);continue}if(t===0)n.push(d);else{const h=n[n.length-1].props,m=a===h.value,b=h.disabled,x=a===g.value,f=g.disabled,C=(m?2:0)+(b?0:1),w=(x?2:0)+(f?0:1),y={[`${e}-radio-group__splitor--disabled`]:b,[`${e}-radio-group__splitor--checked`]:m},r={[`${e}-radio-group__splitor--disabled`]:f,[`${e}-radio-group__splitor--checked`]:x},l=C<w?r:y;n.push(L("div",{class:[`${e}-radio-group__splitor`,l]}),d)}}return{children:n,isButtonGroup:p}}const xo=Object.assign(Object.assign({},V.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Co=lo({name:"RadioGroup",props:xo,setup(o){const a=R(null),{mergedSizeRef:e,mergedDisabledRef:i,nTriggerFormChange:n,nTriggerFormInput:p,nTriggerFormBlur:t,nTriggerFormFocus:d}=_(o),{mergedClsPrefixRef:s,inlineThemeDisabled:g,mergedRtlRef:h}=A(o),m=V("Radio","-radio-group",fo,N,o,s),b=R(o.defaultValue),x=T(o,"value"),f=P(x,b);function C(u){const{onUpdateValue:v,"onUpdate:value":k}=o;v&&B(v,u),k&&B(k,u),b.value=u,n(),p()}function w(u){const{value:v}=a;v&&(v.contains(u.relatedTarget)||d())}function y(u){const{value:v}=a;v&&(v.contains(u.relatedTarget)||t())}uo(E,{mergedClsPrefixRef:s,nameRef:T(o,"name"),valueRef:f,disabledRef:i,mergedSizeRef:e,doUpdateValue:C});const r=ao("Radio",h,s),l=I(()=>{const{value:u}=e,{common:{cubicBezierEaseInOut:v},self:{buttonBorderColor:k,buttonBorderColorActive:M,buttonBorderRadius:O,buttonBoxShadow:G,buttonBoxShadowFocus:W,buttonBoxShadowHover:q,buttonColor:J,buttonColorActive:K,buttonTextColor:Q,buttonTextColorActive:X,buttonTextColorHover:Y,opacityDisabled:Z,[U("buttonHeight",u)]:oo,[U("fontSize",u)]:eo}}=m.value;return{"--n-font-size":eo,"--n-bezier":v,"--n-button-border-color":k,"--n-button-border-color-active":M,"--n-button-border-radius":O,"--n-button-box-shadow":G,"--n-button-box-shadow-focus":W,"--n-button-box-shadow-hover":q,"--n-button-color":J,"--n-button-color-active":K,"--n-button-text-color":Q,"--n-button-text-color-hover":Y,"--n-button-text-color-active":X,"--n-height":oo,"--n-opacity-disabled":Z}}),c=g?no("radio-group",I(()=>e.value[0]),l,o):void 0;return{selfElRef:a,rtlEnabled:r,mergedClsPrefix:s,mergedValue:f,handleFocusout:y,handleFocusin:w,cssVars:g?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var o;const{mergedValue:a,mergedClsPrefix:e,handleFocusin:i,handleFocusout:n}=this,{children:p,isButtonGroup:t}=mo(so(bo(this)),a,e);return(o=this.onRender)===null||o===void 0||o.call(this),L("div",{onFocusin:i,onFocusout:n,ref:"selfElRef",class:[`${e}-radio-group`,this.rtlEnabled&&`${e}-radio-group--rtl`,this.themeClass,t&&`${e}-radio-group--button-group`],style:this.cssVars},p)}});export{Co as N,vo as a,N as r,go as s};
