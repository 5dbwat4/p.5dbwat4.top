import{c as S,a as r,i as c,u as _,d as f,o as T,e as $}from"./light-cb8e5d18.js";import{r as u}from"./use-memo-7138c88c.js";import{w as F,j as w,N as l}from"./index-6b27469d.js";const N=a=>{const{textColor2:t,textColor3:i,fontSize:n,fontWeight:s}=a;return{labelFontSize:n,labelFontWeight:s,valueFontWeight:s,valueFontSize:"24px",labelTextColor:i,valuePrefixTextColor:t,valueSuffixTextColor:t,valueTextColor:t}},R={name:"Statistic",common:S,self:N},P=R,W=r("statistic",[c("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),r("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[c("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[r("icon",{verticalAlign:"-0.125em"})]),c("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),c("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[r("icon",{verticalAlign:"-0.125em"})])])]),E=Object.assign(Object.assign({},f.props),{tabularNums:Boolean,label:String,value:[String,Number]}),j=F({name:"Statistic",props:E,setup(a){const{mergedClsPrefixRef:t,inlineThemeDisabled:i,mergedRtlRef:n}=_(a),s=f("Statistic","-statistic",W,P,a,t),v=T("Statistic",n,t),e=w(()=>{const{self:{labelFontWeight:x,valueFontSize:b,valueFontWeight:m,valuePrefixTextColor:h,labelTextColor:g,valueSuffixTextColor:p,valueTextColor:d,labelFontSize:z},common:{cubicBezierEaseInOut:C}}=s.value;return{"--n-bezier":C,"--n-label-font-size":z,"--n-label-font-weight":x,"--n-label-text-color":g,"--n-value-font-weight":m,"--n-value-font-size":b,"--n-value-prefix-text-color":h,"--n-value-suffix-text-color":p,"--n-value-text-color":d}}),o=i?$("statistic",void 0,e,a):void 0;return{rtlEnabled:v,mergedClsPrefix:t,cssVars:i?void 0:e,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var a;const{mergedClsPrefix:t,$slots:{default:i,label:n,prefix:s,suffix:v}}=this;return(a=this.onRender)===null||a===void 0||a.call(this),l("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},u(n,e=>l("div",{class:`${t}-statistic__label`},this.label||e)),l("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},u(s,e=>e&&l("span",{class:`${t}-statistic-value__prefix`},e)),this.value!==void 0?l("span",{class:`${t}-statistic-value__content`},this.value):u(i,e=>e&&l("span",{class:`${t}-statistic-value__content`},e)),u(v,e=>e&&l("span",{class:`${t}-statistic-value__suffix`},e))))}});export{j as N};
