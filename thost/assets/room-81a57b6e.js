import"./APIHelper-697d5a21.js";import{C as qe}from"./ild-3efa88fc.js";import{C as Le,P as vt}from"./painttools-fbb3a0c2.js";import{useRouter as gt,useRoute as bt,onBeforeRouteLeave as wt}from"./vue-router-66374999.js";import{_ as xt}from"./_plugin-vue_export-helper-c27b6911.js";import{T as kt}from"./runtime-dom.esm-bundler-4c01a608.js";import{c as yt,a as Ct,a1 as K,A as H,a2 as W,a3 as ne,a4 as N,a5 as ce,a6 as re,d as St,a7 as be,a8 as De,a9 as Me,aa as Pe,w as _t,f as se,e as x,g as R,k as Oe,u as Ut,h as Ke,j as $t,m as je}from"./light-061b806c.js";import{a as de,o as he,g as At}from"./Scrollbar-56892bdd.js";import{v as q,aZ as h,J as i,i as I,O as We,aA as Je,aa as Rt,b3 as Ie,az as Be,aG as It,X as Ye,b0 as zt,a2 as Vt,a8 as ze,l as Dt,m as fe,t as Q,b7 as X,aE as ee,s as ve,bd as Ve,j as Xe,k as Mt,bc as Pt,ai as Bt,F as Ft}from"./runtime-core.esm-bundler-42be6625.js";import{N as Et}from"./Input-25fff9b3.js";import{N as Qe}from"./InputGroup-b7f57590.js";import{f as Tt,c as Ht}from"./fade-in-scale-up.cssr-e8e5290f.js";import{c as Nt,u as qt,b as G}from"./Button-cc4d8cf9.js";import{u as Lt}from"./use-locale-a958ab8c.js";import{u as Ze}from"./use-merged-state-cb002afc.js";import{i as Ot}from"./FadeInExpandTransition-8360c680.js";import{i as jt}from"./light-a899ddec.js";import{c as ye}from"./call-7e0089d6.js";import{u as Fe,V as Xt,b as Zt,c as Gt}from"./Popover-4b12eb1a.js";import{N as Kt}from"./InputGroupLabel-ac995e52.js";import{N as Wt}from"./Spin-38bf3ba1.js";import"./format-length-c9d165c6.js";import"./Icon-9bae1ecc.js";import"./Warning-342b5d14.js";import"./Close-7ee9b945.js";import"./keysOf-5d5107c5.js";import"./diffs-b381e85b.js";import"./Ellipsis-8153a355.js";import"./Tooltip-455ae320.js";import"./Divider-0de4fb74.js";import"./text-b92bd4c7.js";import"./use-compitable-85535777.js";import"./light-1325cd86.js";import"./Space-26ed86db.js";import"./flatten-7ea74e97.js";import"./get-slot-1efb97e5.js";import"./resolve-slot-612957d7.js";import"./use-memo-8d560c6d.js";import"./index-975a2d8f.js";import"./get-bc00c446.js";import"./utils-13313164.js";function et(e,t,n){t/=100,n/=100;const o=t*Math.min(n,1-n)+n;return[e,o?(2-2*n/o)*100:0,o*100]}function _e(e,t,n){t/=100,n/=100;const o=n-n*t/2,r=Math.min(o,1-o);return[e,r?(n-o)/r*100:0,o*100]}function Z(e,t,n){t/=100,n/=100;let o=(r,a=(r+e/60)%6)=>n-n*t*Math.max(Math.min(a,4-a,1),0);return[o(5)*255,o(3)*255,o(1)*255]}function Ee(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),r=o-Math.min(e,t,n),a=r&&(o==e?(t-n)/r:o==t?2+(n-e)/r:4+(e-t)/r);return[60*(a<0?a+6:a),o&&r/o*100,o*100]}function Te(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),r=o-Math.min(e,t,n),a=1-Math.abs(o+o-r-1),s=r&&(o==e?(t-n)/r:o==t?2+(n-e)/r:4+(e-t)/r);return[60*(s<0?s+6:s),a?r/a*100:0,(o+o-r)*50]}function He(e,t,n){t/=100,n/=100;let o=t*Math.min(n,1-n),r=(a,s=(a+e/30)%12)=>n-o*Math.max(Math.min(s-3,9-s,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}const Jt=e=>{const{fontSize:t,boxShadow2:n,popoverColor:o,textColor2:r,borderRadius:a,borderColor:s,heightSmall:u,heightMedium:p,heightLarge:z,fontSizeSmall:P,fontSizeMedium:S,fontSizeLarge:V,dividerColor:B}=e;return{panelFontSize:t,boxShadow:n,color:o,textColor:r,borderRadius:a,border:`1px solid ${s}`,heightSmall:u,heightMedium:p,heightLarge:z,fontSizeSmall:P,fontSizeMedium:S,fontSizeLarge:V,dividerColor:B}},Yt=yt({name:"ColorPicker",common:Ct,peers:{Input:jt,Button:Nt},self:Jt}),Qt=Yt;function eo(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function we(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function to(e){return e=Math.round(e),e>=360?359:e<0?0:e}function oo(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const no={rgb:{hex(e){return K(H(e))},hsl(e){const[t,n,o,r]=H(e);return W([...Te(t,n,o),r])},hsv(e){const[t,n,o,r]=H(e);return ne([...Ee(t,n,o),r])}},hex:{rgb(e){return N(H(e))},hsl(e){const[t,n,o,r]=H(e);return W([...Te(t,n,o),r])},hsv(e){const[t,n,o,r]=H(e);return ne([...Ee(t,n,o),r])}},hsl:{hex(e){const[t,n,o,r]=ce(e);return K([...He(t,n,o),r])},rgb(e){const[t,n,o,r]=ce(e);return N([...He(t,n,o),r])},hsv(e){const[t,n,o,r]=ce(e);return ne([...et(t,n,o),r])}},hsv:{hex(e){const[t,n,o,r]=re(e);return K([...Z(t,n,o),r])},rgb(e){const[t,n,o,r]=re(e);return N([...Z(t,n,o),r])},hsl(e){const[t,n,o,r]=re(e);return W([..._e(t,n,o),r])}}};function tt(e,t,n){return n=n||we(e),n?n===t?e:no[n][t](e):null}const ue="12px",ro=12,te="6px",ao=6,lo="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",io=q({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=h(null);function n(a){t.value&&(de("mousemove",document,o),de("mouseup",document,r),o(a))}function o(a){const{value:s}=t;if(!s)return;const{width:u,left:p}=s.getBoundingClientRect(),z=to((a.clientX-p-ao)/(u-ro)*360);e.onUpdateHue(z)}function r(){var a;he("mousemove",document,o),he("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:ue,borderRadius:te}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:lo,height:ue,borderRadius:te,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:te,right:te,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${te})`,borderRadius:te,width:ue,height:ue}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:te,width:ue,height:ue}})))))}}),ge="12px",so=12,oe="6px",uo=q({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=h(null);function n(a){!t.value||!e.rgba||(de("mousemove",document,o),de("mouseup",document,r),o(a))}function o(a){const{value:s}=t;if(!s)return;const{width:u,left:p}=s.getBoundingClientRect(),z=(a.clientX-p)/(u-so);e.onUpdateAlpha(oo(z))}function r(){var a;he("mousemove",document,o),he("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:I(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ge,borderRadius:oe},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:oe,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:oe,right:oe,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${oe})`,borderRadius:oe,width:ge,height:ge}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:N(this.rgba),borderRadius:oe,width:ge,height:ge}}))))}}),Ce="12px",Se="6px",co=q({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=h(null);function n(a){t.value&&(de("mousemove",document,o),de("mouseup",document,r),o(a))}function o(a){const{value:s}=t;if(!s)return;const{width:u,height:p,left:z,bottom:P}=s.getBoundingClientRect(),S=(P-a.clientY)/p,V=(a.clientX-z)/u,B=100*(V>1?1:V<0?0:V),F=100*(S>1?1:S<0?0:S);e.onUpdateSV(B,F)}function r(){var a;he("mousemove",document,o),he("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:I(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:Ce,height:Ce,borderRadius:Se,left:`calc(${this.displayedSv[0]}% - ${Se})`,bottom:`calc(${this.displayedSv[1]}% - ${Se})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Se,width:Ce,height:Ce}})))}}),Ne=St("n-color-picker");function ho(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function po(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function mo(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function fo(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function vo(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const go={paddingSmall:"0 4px"},Ge=q({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=h(""),{themeRef:n}=We(Ne,null);Je(()=>{t.value=o()});function o(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function r(s){t.value=s}function a(s){let u,p;switch(e.label){case"HEX":p=fo(s),p&&e.onUpdateValue(s),t.value=o();break;case"H":u=po(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"S":case"L":case"V":u=mo(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"A":u=vo(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"R":case"G":case"B":u=ho(s),u===!1?t.value=o():e.onUpdateValue(u);break}}return{mergedTheme:n,inputValue:t,handleInputChange:a,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return i(Et,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:go,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),bo=q({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?K:be)(n));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=n,e.onUpdateValue((o?ne:Pe)(r));break;case"rgb":r[t]=n,e.onUpdateValue((o?N:Me)(r));break;case"hsl":r[t]=n,e.onUpdateValue((o?W:De)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(Qe,null,{default:()=>{const{mode:n,valueArr:o,showAlpha:r}=this;if(n==="hex"){let a=null;try{a=o===null?null:(r?K:be)(o)}catch{}return i(Ge,{label:"HEX",showAlpha:r,value:a,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(n+(r?"a":"")).split("").map((a,s)=>i(Ge,{label:a.toUpperCase(),value:o===null?null:o[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}}),wo=q({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:n}=We(Ne,null);return()=>{const{hsla:o,value:r,clsPrefix:a,onClick:s,disabled:u}=e,p=t.label||n.value;return i("div",{class:[`${a}-color-picker-trigger`,u&&`${a}-color-picker-trigger--disabled`],onClick:u?void 0:s},i("div",{class:`${a}-color-picker-trigger__fill`},i("div",{class:`${a}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?W(o):""}}),r&&o?i("div",{class:`${a}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},p?p(r):r):null))}}});function xo(e,t){if(t==="hsv"){const[n,o,r,a]=re(e);return N([...Z(n,o,r),a])}return e}function ko(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const yo=q({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=I(()=>e.swatches.map(a=>{const s=we(a);return{value:a,mode:s,legalValue:xo(a,s)}}));function n(a){const{mode:s}=e;let{value:u,mode:p}=a;return p||(p="hex",/^[a-zA-Z]+$/.test(u)?u=ko(u):(_t("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),p===s?u:tt(u,s,p)}function o(a){e.onUpdateColor(n(a))}function r(a,s){a.key==="Enter"&&o(s)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:n=>{this.handleSwatchKeyDown(n,t)}},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Co=q({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=we(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(n){var o;const r=n.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,tt(r.toUpperCase(),e.mode,"hex")),n.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),So=se([x("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),x("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[Tt(),x("input",`
 text-align: center;
 `)]),x("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[se("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[R("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),se("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),x("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[R("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),x("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[R("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Oe("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),x("color-picker-preview",`
 display: flex;
 `,[R("sliders",`
 flex: 1 0 auto;
 `),R("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),R("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),R("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),x("color-picker-input",`
 display: flex;
 align-items: center;
 `,[x("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),R("mode",`
 width: 72px;
 text-align: center;
 `)]),x("color-picker-control",`
 padding: 12px;
 `),x("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[x("button","margin-left: 8px;")]),x("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[R("value",`
 white-space: nowrap;
 position: relative;
 `),R("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),Oe("disabled","cursor: not-allowed"),x("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[se("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),x("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[x("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[R("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),se("&:focus",`
 outline: none;
 `,[R("fill",[se("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),_o=Object.assign(Object.assign({},Ke.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Fe.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Uo=q({name:"ColorPicker",props:_o,setup(e,{slots:t}){const n=h(null);let o=null;const r=qt(e),{mergedSizeRef:a,mergedDisabledRef:s}=r,{localeRef:u}=Lt("global"),{mergedClsPrefixRef:p,namespaceRef:z,inlineThemeDisabled:P}=Ut(e),S=Ke("ColorPicker","-color-picker",So,Qt,e,p);Rt(Ne,{themeRef:S,renderLabelRef:Ie(e,"renderLabel"),colorPickerSlots:t});const V=h(e.defaultShow),B=Ze(Ie(e,"show"),V);function F(l){const{onUpdateShow:c,"onUpdate:show":v}=e;c&&ye(c,l),v&&ye(v,l),V.value=l}const{defaultValue:k}=e,xe=h(k===void 0?eo(e.modes,e.showAlpha):k),f=Ze(Ie(e,"value"),xe),E=h([f.value]),D=h(0),pe=I(()=>we(f.value)),{modes:C}=e,d=h(we(f.value)||C[0]||"rgb");function M(){const{modes:l}=e,{value:c}=d,v=l.findIndex(g=>g===c);~v?d.value=l[(v+1)%l.length]:d.value="rgb"}let U,$,ae,le,L,O,j,A;const me=I(()=>{const{value:l}=f;if(!l)return null;switch(pe.value){case"hsv":return re(l);case"hsl":return[U,$,ae,A]=ce(l),[...et(U,$,ae),A];case"rgb":case"hex":return[L,O,j,A]=H(l),[...Ee(L,O,j),A]}}),J=I(()=>{const{value:l}=f;if(!l)return null;switch(pe.value){case"rgb":case"hex":return H(l);case"hsv":return[U,$,le,A]=re(l),[...Z(U,$,le),A];case"hsl":return[U,$,ae,A]=ce(l),[...He(U,$,ae),A]}}),Ue=I(()=>{const{value:l}=f;if(!l)return null;switch(pe.value){case"hsl":return ce(l);case"hsv":return[U,$,le,A]=re(l),[..._e(U,$,le),A];case"rgb":case"hex":return[L,O,j,A]=H(l),[...Te(L,O,j),A]}}),ot=I(()=>{switch(d.value){case"rgb":case"hex":return J.value;case"hsv":return me.value;case"hsl":return Ue.value}}),ke=h(0),$e=h(1),Ae=h([0,0]);function nt(l,c){const{value:v}=me,g=ke.value,b=v?v[3]:1;Ae.value=[l,c];const{showAlpha:m}=e;switch(d.value){case"hsv":w((m?ne:Pe)([g,l,c,b]),"cursor");break;case"hsl":w((m?W:De)([..._e(g,l,c),b]),"cursor");break;case"rgb":w((m?N:Me)([...Z(g,l,c),b]),"cursor");break;case"hex":w((m?K:be)([...Z(g,l,c),b]),"cursor");break}}function rt(l){ke.value=l;const{value:c}=me;if(!c)return;const[,v,g,b]=c,{showAlpha:m}=e;switch(d.value){case"hsv":w((m?ne:Pe)([l,v,g,b]),"cursor");break;case"rgb":w((m?N:Me)([...Z(l,v,g),b]),"cursor");break;case"hex":w((m?K:be)([...Z(l,v,g),b]),"cursor");break;case"hsl":w((m?W:De)([..._e(l,v,g),b]),"cursor");break}}function at(l){switch(d.value){case"hsv":[U,$,le]=me.value,w(ne([U,$,le,l]),"cursor");break;case"rgb":[L,O,j]=J.value,w(N([L,O,j,l]),"cursor");break;case"hex":[L,O,j]=J.value,w(K([L,O,j,l]),"cursor");break;case"hsl":[U,$,ae]=Ue.value,w(W([U,$,ae,l]),"cursor");break}$e.value=l}function w(l,c){c==="cursor"?o=l:o=null;const{nTriggerFormChange:v,nTriggerFormInput:g}=r,{onUpdateValue:b,"onUpdate:value":m}=e;b&&ye(b,l),m&&ye(m,l),v(),g(),xe.value=l}function lt(l){w(l,"input"),Ye(ie)}function ie(l=!0){const{value:c}=f;if(c){const{nTriggerFormChange:v,nTriggerFormInput:g}=r,{onComplete:b}=e;b&&b(c);const{value:m}=E,{value:_}=D;l&&(m.splice(_+1,m.length,c),D.value=_+1),v(),g()}}function it(){const{value:l}=D;l-1<0||(w(E.value[l-1],"input"),ie(!1),D.value=l-1)}function st(){const{value:l}=D;l<0||l+1>=E.value.length||(w(E.value[l+1],"input"),ie(!1),D.value=l+1)}function ut(){w(null,"input"),F(!1)}function ct(){const{value:l}=f,{onConfirm:c}=e;c&&c(l),F(!1)}const dt=I(()=>D.value>=1),ht=I(()=>{const{value:l}=E;return l.length>1&&D.value<l.length-1});Be(B,l=>{l||(E.value=[f.value],D.value=0)}),Je(()=>{if(!(o&&o===f.value)){const{value:l}=me;l&&(ke.value=l[0],$e.value=l[3],Ae.value=[l[1],l[2]])}o=null});const Re=I(()=>{const{value:l}=a,{common:{cubicBezierEaseInOut:c},self:{textColor:v,color:g,panelFontSize:b,boxShadow:m,border:_,borderRadius:y,dividerColor:Y,[je("height",l)]:mt,[je("fontSize",l)]:ft}}=S.value;return{"--n-bezier":c,"--n-text-color":v,"--n-color":g,"--n-panel-font-size":b,"--n-font-size":ft,"--n-box-shadow":m,"--n-border":_,"--n-border-radius":y,"--n-height":mt,"--n-divider-color":Y}}),T=P?$t("color-picker",I(()=>a.value[0]),Re,e):void 0;function pt(){var l;const{value:c}=J,{value:v}=ke,{internalActions:g,modes:b,actions:m}=e,{value:_}=S,{value:y}=p;return i("div",{class:[`${y}-color-picker-panel`,T==null?void 0:T.themeClass.value],onDragstart:Y=>{Y.preventDefault()},style:P?void 0:Re.value},i("div",{class:`${y}-color-picker-control`},i(co,{clsPrefix:y,rgba:c,displayedHue:v,displayedSv:Ae.value,onUpdateSV:nt,onComplete:ie}),i("div",{class:`${y}-color-picker-preview`},i("div",{class:`${y}-color-picker-preview__sliders`},i(io,{clsPrefix:y,hue:v,onUpdateHue:rt,onComplete:ie}),e.showAlpha?i(uo,{clsPrefix:y,rgba:c,alpha:$e.value,onUpdateAlpha:at,onComplete:ie}):null),e.showPreview?i(Co,{clsPrefix:y,mode:d.value,color:J.value&&be(J.value),onUpdateColor:Y=>{w(Y,"input")}}):null),i(bo,{clsPrefix:y,showAlpha:e.showAlpha,mode:d.value,modes:b,onUpdateMode:M,value:f.value,valueArr:ot.value,onUpdateValue:lt}),((l=e.swatches)===null||l===void 0?void 0:l.length)&&i(yo,{clsPrefix:y,mode:d.value,swatches:e.swatches,onUpdateColor:Y=>{w(Y,"input")}})),m!=null&&m.length?i("div",{class:`${y}-color-picker-action`},m.includes("confirm")&&i(G,{size:"small",onClick:ct,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>u.value.confirm}),m.includes("clear")&&i(G,{size:"small",onClick:ut,disabled:!f.value,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?i("div",{class:`${y}-color-picker-action`},{default:t.action}):g?i("div",{class:`${y}-color-picker-action`},g.includes("undo")&&i(G,{size:"small",onClick:it,disabled:!dt.value,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>u.value.undo}),g.includes("redo")&&i(G,{size:"small",onClick:st,disabled:!ht.value,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:p,namespace:z,selfRef:n,hsla:Ue,rgba:J,mergedShow:B,mergedDisabled:s,isMounted:Ot(),adjustedTo:Fe(e),mergedValue:f,handleTriggerClick(){F(!0)},handleClickOutside(l){var c;!((c=n.value)===null||c===void 0)&&c.contains(At(l))||F(!1)},renderPanel:pt,cssVars:P?void 0:Re,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),i("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},i(Xt,null,{default:()=>[i(Zt,null,{default:()=>i(wo,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),i(Gt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Fe.tdkey,to:this.adjustedTo},{default:()=>i(kt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?It(this.renderPanel(),[[Ht,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});const $o={id:"canvas-extra"},Ao={class:"block_main"},Ro={id:"DrawableBlock"},Io={__name:"room",setup(e){const t=h(!1),n=h([]);n.value=window.TList,console.log(n.value);let o={};const r=h(0),a=h({index:0,count:5,offset:0});h({width:700});const s={prev:async()=>{o[r.value]=B(),r.value==0?options.value.leftFormCycle&&(r.value=n.value.length-1):r.value--},next:async()=>{o[r.value]=B(),r.value==n.value.length-1?D():r.value++}},u=async()=>{};h(!1);const p=h(!1),z=h(""),P=h("");h(700),h("");const S=h(0),V=zt(i(window.qcomponent=="zjw"?Le:qe,{qcontent:n.value[r.value]}));Be([n,r],()=>{V.value=i(window.qcomponent=="zjw"?Le:qe,{qcontent:n.value[r.value]})});const B=()=>f.answer;Be(r,async()=>{p.value=!1,z.value="",P.value="",await Ye(),f.recalculateSize(),f.clear(),f.answer=o[r.value]});const F=new ResizeObserver(C=>{f.recalculateSize()});let k={};window.PaintCONFIG={color:"#000"};const xe=C=>{console.log("updated11"),window.PaintCONFIG.color=C};Vt(()=>{document.getElementById("drawableCanvas").width=document.getElementById("DrawableBlock").clientWidth*3,document.getElementById("drawableCanvas").height=document.getElementById("DrawableBlock").clientHeight*3,S.value=document.getElementById("DrawableBlock").clientHeight,k=new vt(document.getElementById("drawableCanvas")),F.observe(document.getElementById("DrawableBlock"))});const f={onpointermove:C=>{k.onpointermove&&k.onpointermove(C)},onmouseup:C=>{k.onmouseup&&k.onmouseup(C)},onmousedown:C=>{k.onmousedown&&k.onmousedown(C)},recalculateSize:()=>{document.getElementById("drawableCanvas").width=document.getElementById("DrawableBlock").clientWidth*3,document.getElementById("drawableCanvas").height=document.getElementById("DrawableBlock").clientHeight*3,S.value=document.getElementById("DrawableBlock").clientHeight},clear:()=>{k.clear()},get answer(){return k.paintlines},set answer(C){k.paintlines=C||[],k.refreshCanvas()},export:()=>k.export()},E=gt();bt();const D=async()=>{window.useranswerPaths=o,E.push("./room/checkout")},pe=async()=>{window.TList=n.value.splice(0,r.value+1),window.useranswerPaths=o,E.push("./room/checkout")};return wt((C,d)=>{F.disconnect()}),(C,d)=>(ze(),Dt(Ft,null,[fe("div",$o,[Q(X(Uo),{swatches:["#FFFFFF","#18A058","#2080F0","#F0A020","rgba(208, 48, 80, 1)"],style:{width:"40px",height:"40px"},class:"canvase-pc1","on-update:value":xe},null,8,["swatches"])]),fe("div",Ao,[Q(X(Wt),{show:t.value},{default:ee(()=>[Q(X(Qe),null,{default:ee(()=>[Q(X(G),{onClick:d[0]||(d[0]=M=>s.prev())},{default:ee(()=>[ve("< PREV ")]),_:1}),Q(X(Kt),null,{default:ee(()=>[ve(Ve(r.value+1)+" / "+Ve(n.value.length),1)]),_:1}),Q(X(G),{onClick:d[1]||(d[1]=M=>a.value.index+1==a.value.count?u():s.next())},{default:ee(()=>[ve(Ve(r.value==n.value.length-1?"CHECKOUT":"NEXT >"),1)]),_:1}),r.value!=n.value.length-1?(ze(),Xe(X(G),{key:0,onClick:d[2]||(d[2]=M=>pe())},{default:ee(()=>[ve(" CIV")]),_:1})):Mt("",!0),Q(X(G),{onClick:d[3]||(d[3]=M=>s.next())},{default:ee(()=>[ve("Skip")]),_:1})]),_:1}),fe("div",null,[fe("div",Ro,[fe("canvas",{id:"drawableCanvas",onPointermove:d[4]||(d[4]=M=>f.onpointermove(M)),onMouseup:d[5]||(d[5]=M=>f.onmouseup(M)),onMousedown:d[6]||(d[6]=M=>f.onmousedown(M)),style:Pt({height:S.value+"px"})},null,36),(ze(),Xe(Bt(V.value)))])])]),_:1},8,["show"])])],64))}},wn=xt(Io,[["__scopeId","data-v-a579707f"]]);export{wn as default};
