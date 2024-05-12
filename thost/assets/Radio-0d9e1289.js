import{a as c,b as t,i as e,h as n,j as B,d as h,k as u,u as E,o as N,e as H}from"./light-cb8e5d18.js";import{s as V,r as L,a as T}from"./RadioGroup-5d465f0a.js";import{r as W}from"./use-memo-7138c88c.js";import{w as Y,j as v,N as l}from"./index-6b27469d.js";const K=c("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[t("checked",[e("dot",`
 background-color: var(--n-color-active);
 `)]),e("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),c("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),e("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[n("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),t("checked",{boxShadow:"var(--n-box-shadow-active)"},[n("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),e("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),B("disabled",`
 cursor: pointer;
 `,[n("&:hover",[e("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),t("focus",[n("&:not(:active)",[e("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),t("disabled",`
 cursor: not-allowed;
 `,[e("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[n("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),t("checked",`
 opacity: 1;
 `)]),e("label",{color:"var(--n-text-color-disabled)"}),c("radio-input",`
 cursor: not-allowed;
 `)])]),M=Object.assign(Object.assign({},h.props),T),U=Y({name:"Radio",props:M,setup(a){const o=V(a),i=h("Radio","-radio",K,L,a,o.mergedClsPrefix),s=v(()=>{const{mergedSize:{value:b}}=o,{common:{cubicBezierEaseInOut:g},self:{boxShadow:w,boxShadowActive:m,boxShadowDisabled:k,boxShadowFocus:z,boxShadowHover:C,color:S,colorDisabled:R,colorActive:$,textColor:y,textColorDisabled:_,dotColorActive:D,dotColorDisabled:j,labelPadding:F,labelLineHeight:I,labelFontWeight:O,[u("fontSize",b)]:P,[u("radioSize",b)]:A}}=i.value;return{"--n-bezier":g,"--n-label-line-height":I,"--n-label-font-weight":O,"--n-box-shadow":w,"--n-box-shadow-active":m,"--n-box-shadow-disabled":k,"--n-box-shadow-focus":z,"--n-box-shadow-hover":C,"--n-color":S,"--n-color-active":$,"--n-color-disabled":R,"--n-dot-color-active":D,"--n-dot-color-disabled":j,"--n-font-size":P,"--n-radio-size":A,"--n-text-color":y,"--n-text-color-disabled":_,"--n-label-padding":F}}),{inlineThemeDisabled:d,mergedClsPrefixRef:p,mergedRtlRef:f}=E(a),x=N("Radio",f,p),r=d?H("radio",v(()=>o.mergedSize.value[0]),s,a):void 0;return Object.assign(o,{rtlEnabled:x,cssVars:d?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender})},render(){const{$slots:a,mergedClsPrefix:o,onRender:i,label:s}=this;return i==null||i(),l("label",{class:[`${o}-radio`,this.themeClass,this.rtlEnabled&&`${o}-radio--rtl`,this.mergedDisabled&&`${o}-radio--disabled`,this.renderSafeChecked&&`${o}-radio--checked`,this.focus&&`${o}-radio--focus`],style:this.cssVars},l("input",{ref:"inputRef",type:"radio",class:`${o}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),l("div",{class:`${o}-radio__dot-wrapper`},"\xA0",l("div",{class:[`${o}-radio__dot`,this.renderSafeChecked&&`${o}-radio__dot--checked`]})),W(a.default,d=>!d&&!s?null:l("div",{ref:"labelRef",class:`${o}-radio__label`},d||s)))}});export{U as N};
