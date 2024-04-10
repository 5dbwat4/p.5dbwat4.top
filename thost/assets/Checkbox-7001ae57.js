import{J as u,v as I,aZ as H,i as B,aa as be,b3 as U,O as ue}from"./index-c2ed52a5.js";import{c as he,n as ke,u as N,g as ve,h as p,a as c,b as T,i as w,q as fe,r as xe,d as K,o as pe,k as L,e as me}from"./light-3c431b54.js";import{u as O,i as ge,a as Ce}from"./Loading-b36f50c8.js";import{u as j}from"./use-merged-state-5c1c3246.js";import{c as d}from"./use-is-mounted-912be460.js";import{u as ye,r as ze}from"./use-memo-13475312.js";import{c as we,o as Se}from"./Scrollbar-5b7370f2.js";const Re={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},De=o=>{const{baseColor:m,inputColorDisabled:h,cardColor:z,modalColor:S,popoverColor:t,textColorDisabled:f,borderColor:n,primaryColor:a,textColor2:l,fontSizeSmall:R,fontSizeMedium:k,fontSizeLarge:r,borderRadiusSmall:x,lineHeight:v}=o;return Object.assign(Object.assign({},Re),{labelLineHeight:v,fontSizeSmall:R,fontSizeMedium:k,fontSizeLarge:r,borderRadius:x,color:m,colorChecked:a,colorDisabled:h,colorDisabledChecked:h,colorTableHeader:z,colorTableHeaderModal:S,colorTableHeaderPopover:t,checkMarkColor:m,checkMarkColorDisabled:f,checkMarkColorDisabledChecked:f,border:`1px solid ${n}`,borderDisabled:`1px solid ${n}`,borderDisabledChecked:`1px solid ${n}`,borderChecked:`1px solid ${a}`,borderFocus:`1px solid ${a}`,boxShadowFocus:`0 0 0 2px ${ke(a,{alpha:.3})}`,textColor:l,textColorDisabled:f})},Te={name:"Checkbox",common:he,self:De},E=Te,$e=u("svg",{viewBox:"0 0 64 64",class:"check-icon"},u("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Fe=u("svg",{viewBox:"0 0 100 100",class:"line-icon"},u("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),_=ve("n-checkbox-group"),Me={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ae=I({name:"CheckboxGroup",props:Me,setup(o){const{mergedClsPrefixRef:m}=N(o),h=O(o),{mergedSizeRef:z,mergedDisabledRef:S}=h,t=H(o.defaultValue),f=B(()=>o.value),n=j(f,t),a=B(()=>{var k;return((k=n.value)===null||k===void 0?void 0:k.length)||0}),l=B(()=>Array.isArray(n.value)?new Set(n.value):new Set);function R(k,r){const{nTriggerFormInput:x,nTriggerFormChange:v}=h,{onChange:i,"onUpdate:value":g,onUpdateValue:C}=o;if(Array.isArray(n.value)){const s=Array.from(n.value),A=s.findIndex(P=>P===r);k?~A||(s.push(r),C&&d(C,s,{actionType:"check",value:r}),g&&d(g,s,{actionType:"check",value:r}),x(),v(),t.value=s,i&&d(i,s)):~A&&(s.splice(A,1),C&&d(C,s,{actionType:"uncheck",value:r}),g&&d(g,s,{actionType:"uncheck",value:r}),i&&d(i,s),t.value=s,x(),v())}else k?(C&&d(C,[r],{actionType:"check",value:r}),g&&d(g,[r],{actionType:"check",value:r}),i&&d(i,[r]),t.value=[r],x(),v()):(C&&d(C,[],{actionType:"uncheck",value:r}),g&&d(g,[],{actionType:"uncheck",value:r}),i&&d(i,[]),t.value=[],x(),v())}return be(_,{checkedCountRef:a,maxRef:U(o,"max"),minRef:U(o,"min"),valueSetRef:l,disabledRef:S,mergedSizeRef:z,toggleCheckbox:R}),{mergedClsPrefix:m}},render(){return u("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Be=p([c("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[T("show-label","line-height: var(--n-label-line-height);"),p("&:hover",[c("checkbox-box",[w("border","border: var(--n-border-checked);")])]),p("&:focus:not(:active)",[c("checkbox-box",[w("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),T("inside-table",[c("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),T("checked",[c("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[c("checkbox-icon",[p(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("indeterminate",[c("checkbox-box",[c("checkbox-icon",[p(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),p(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("checked, indeterminate",[p("&:focus:not(:active)",[c("checkbox-box",[w("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),c("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[w("border",{border:"var(--n-border-checked)"})])]),T("disabled",{cursor:"not-allowed"},[T("checked",[c("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[w("border",{border:"var(--n-border-disabled-checked)"}),c("checkbox-icon",[p(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),c("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[w("border",`
 border: var(--n-border-disabled);
 `),c("checkbox-icon",[p(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),w("label",`
 color: var(--n-text-color-disabled);
 `)]),c("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),c("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[w("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),c("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[p(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ge({left:"1px",top:"1px"})])]),w("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[p("&:empty",{display:"none"})])]),fe(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),xe(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Pe=Object.assign(Object.assign({},K.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Ve=I({name:"Checkbox",props:Pe,setup(o){const m=H(null),{mergedClsPrefixRef:h,inlineThemeDisabled:z,mergedRtlRef:S}=N(o),t=O(o,{mergedSize(e){const{size:y}=o;if(y!==void 0)return y;if(a){const{value:b}=a.mergedSizeRef;if(b!==void 0)return b}if(e){const{mergedSize:b}=e;if(b!==void 0)return b.value}return"medium"},mergedDisabled(e){const{disabled:y}=o;if(y!==void 0)return y;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:b},checkedCountRef:D}=a;if(b!==void 0&&D.value>=b&&!r.value)return!0;const{minRef:{value:F}}=a;if(F!==void 0&&D.value<=F&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:f,mergedSizeRef:n}=t,a=ue(_,null),l=H(o.defaultChecked),R=U(o,"checked"),k=j(R,l),r=ye(()=>{if(a){const e=a.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return k.value===o.checkedValue}),x=K("Checkbox","-checkbox",Be,E,o,h);function v(e){if(a&&o.value!==void 0)a.toggleCheckbox(!r.value,o.value);else{const{onChange:y,"onUpdate:checked":b,onUpdateChecked:D}=o,{nTriggerFormInput:F,nTriggerFormChange:V}=t,M=r.value?o.uncheckedValue:o.checkedValue;b&&d(b,M,e),D&&d(D,M,e),y&&d(y,M,e),F(),V(),l.value=M}}function i(e){f.value||v(e)}function g(e){if(!f.value)switch(e.key){case" ":case"Enter":v(e)}}function C(e){switch(e.key){case" ":e.preventDefault()}}const s={focus:()=>{var e;(e=m.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=m.value)===null||e===void 0||e.blur()}},A=pe("Checkbox",S,h),P=B(()=>{const{value:e}=n,{common:{cubicBezierEaseInOut:y},self:{borderRadius:b,color:D,colorChecked:F,colorDisabled:V,colorTableHeader:M,colorTableHeaderModal:W,colorTableHeaderPopover:q,checkMarkColor:G,checkMarkColorDisabled:J,border:Y,borderFocus:Z,borderDisabled:Q,borderChecked:X,boxShadowFocus:ee,textColor:oe,textColorDisabled:re,checkMarkColorDisabledChecked:ae,colorDisabledChecked:le,borderDisabledChecked:ce,labelPadding:ne,labelLineHeight:ie,labelFontWeight:de,[L("fontSize",e)]:te,[L("size",e)]:se}}=x.value;return{"--n-label-line-height":ie,"--n-label-font-weight":de,"--n-size":se,"--n-bezier":y,"--n-border-radius":b,"--n-border":Y,"--n-border-checked":X,"--n-border-focus":Z,"--n-border-disabled":Q,"--n-border-disabled-checked":ce,"--n-box-shadow-focus":ee,"--n-color":D,"--n-color-checked":F,"--n-color-table":M,"--n-color-table-modal":W,"--n-color-table-popover":q,"--n-color-disabled":V,"--n-color-disabled-checked":le,"--n-text-color":oe,"--n-text-color-disabled":re,"--n-check-mark-color":G,"--n-check-mark-color-disabled":J,"--n-check-mark-color-disabled-checked":ae,"--n-font-size":te,"--n-label-padding":ne}}),$=z?me("checkbox",B(()=>n.value[0]),P,o):void 0;return Object.assign(t,s,{rtlEnabled:A,selfRef:m,mergedClsPrefix:h,mergedDisabled:f,renderedChecked:r,mergedTheme:x,labelId:we(),handleClick:i,handleKeyUp:g,handleKeyDown:C,cssVars:z?void 0:P,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var o;const{$slots:m,renderedChecked:h,mergedDisabled:z,indeterminate:S,privateInsideTable:t,cssVars:f,labelId:n,label:a,mergedClsPrefix:l,focusable:R,handleKeyUp:k,handleKeyDown:r,handleClick:x}=this;(o=this.onRender)===null||o===void 0||o.call(this);const v=ze(m.default,i=>a||i?u("span",{class:`${l}-checkbox__label`,id:n},a||i):null);return u("div",{ref:"selfRef",class:[`${l}-checkbox`,this.themeClass,this.rtlEnabled&&`${l}-checkbox--rtl`,h&&`${l}-checkbox--checked`,z&&`${l}-checkbox--disabled`,S&&`${l}-checkbox--indeterminate`,t&&`${l}-checkbox--inside-table`,v&&`${l}-checkbox--show-label`],tabindex:z||!R?void 0:0,role:"checkbox","aria-checked":S?"mixed":h,"aria-labelledby":n,style:f,onKeyup:k,onKeydown:r,onClick:x,onMousedown:()=>{Se("selectstart",window,i=>{i.preventDefault()},{once:!0})}},u("div",{class:`${l}-checkbox-box-wrapper`},"\xA0",u("div",{class:`${l}-checkbox-box`},u(Ce,null,{default:()=>this.indeterminate?u("div",{key:"indeterminate",class:`${l}-checkbox-icon`},Fe):u("div",{key:"check",class:`${l}-checkbox-icon`},$e)}),u("div",{class:`${l}-checkbox-box__border`}))),v)}});export{Ve as N,Ae as a,E as c};
