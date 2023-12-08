import"./APIHelper-4c0d0968.js";import{C as We,__tla as ro}from"./ild-7423f93a.js";import{C as Ze}from"./zjw-bba761c5.js";import{P as ao}from"./painttools-0071b983.js";import{useRouter as lo,useRoute as no,onBeforeRouteLeave as io}from"./vue-router-3740985a.js";import{_ as so}from"./_plugin-vue_export-helper-c27b6911.js";import{T as uo}from"./runtime-dom.esm-bundler-caa8590e.js";import{c as co,a as po,a1 as Z,a0 as H,a2 as J,a3 as ae,a4 as j,a5 as ce,a6 as le,b as ho,a7 as be,a8 as Re,a9 as Fe,aa as Ie,w as vo,e as de,d as y,f as A,l as Je,u as mo,g as Qe,h as go,r as Ye}from"./light-96080c0b.js";import{b as pe,o as he,g as fo}from"./Scrollbar-25ba1ebe.js";import{v as R,aZ as d,J as i,i as D,O as et,aA as tt,aa as bo,b3 as qe,az as Ee,aG as xo,X as ot,a8 as $e,l as rt,m as Q,b0 as wo,a2 as ko,t as F,aE as L,b7 as B,s as xe,bd as Oe,j as at,k as yo,bc as lt,ai as Co,F as So}from"./runtime-core.esm-bundler-c066f4bf.js";import{N as $o}from"./Input-32bb51de.js";import{N as nt}from"./InputGroup-1135b579.js";import{f as _o,c as Uo}from"./fade-in-scale-up.cssr-18f1ebda.js";import{b as zo,u as Ao,a as X}from"./Button-418af94d.js";import{u as Do}from"./use-locale-55e0af58.js";import{u as it}from"./use-merged-state-89f8109f.js";import{i as Bo,c as _e}from"./FadeInExpandTransition-ff940b4d.js";import{i as Mo}from"./light-a188f855.js";import{u as Te,V as Po,b as Vo,c as Ro}from"./Popover-c2999df7.js";import{N as Fo}from"./Icon-3fbf0a05.js";import{N as Io}from"./Space-03668462.js";import{N as qo}from"./InputGroupLabel-56d830c0.js";import{N as Eo}from"./Spin-28bd4bca.js";import"./format-length-c9d165c6.js";import"./Icon-e6ca0735.js";import"./Warning-ff31488d.js";import"./Close-d6ea1a86.js";import"./nomorlize_q-tailored-672252d5.js";import"./diffs-b381e85b.js";import{__tla as Oo}from"./index-26d5a2bb.js";import"./Ellipsis-2210e394.js";import"./Tooltip-bd1c8576.js";import"./Divider-65b08aae.js";import"./text-f4d25175.js";import"./use-compitable-42538ef7.js";import"./light-169f895b.js";import"./use-memo-b9add725.js";import"./Suffix-fac0a942.js";import"./flatten-a133123b.js";import"./use-false-until-truthy-a506b738.js";import"./index-975a2d8f.js";import"./_baseIsEqual-9220f819.js";import"./get-9e715692.js";import"./cssr-ce5b581a.js";import"./utils-d7fa52af.js";import"./next-frame-once-7035a838.js";import"./get-slot-1efb97e5.js";let st,To=Promise.all([(()=>{try{return ro}catch{}})(),(()=>{try{return Oo}catch{}})()]).then(async()=>{function He(e,t,r){t/=100,r/=100;const o=t*Math.min(r,1-r)+r;return[e,o?(2-2*r/o)*100:0,o*100]}function we(e,t,r){t/=100,r/=100;const o=r-r*t/2,a=Math.min(o,1-o);return[e,a?(r-o)/a*100:0,o*100]}function N(e,t,r){t/=100,r/=100;let o=(a,l=(a+e/60)%6)=>r-r*t*Math.max(Math.min(l,4-l,1),0);return[o(5)*255,o(3)*255,o(1)*255]}function Ue(e,t,r){e/=255,t/=255,r/=255;let o=Math.max(e,t,r),a=o-Math.min(e,t,r),l=a&&(o==e?(t-r)/a:o==t?2+(r-e)/a:4+(e-t)/a);return[60*(l<0?l+6:l),o&&a/o*100,o*100]}function ze(e,t,r){e/=255,t/=255,r/=255;let o=Math.max(e,t,r),a=o-Math.min(e,t,r),l=1-Math.abs(o+o-a-1),s=a&&(o==e?(t-r)/a:o==t?2+(r-e)/a:4+(e-t)/a);return[60*(s<0?s+6:s),l?a/l*100:0,(o+o-a)*50]}function Ae(e,t,r){t/=100,r/=100;let o=t*Math.min(r,1-r),a=(l,s=(l+e/30)%12)=>r-o*Math.max(Math.min(s-3,9-s,1),-1);return[a(0)*255,a(8)*255,a(4)*255]}const ut=e=>{const{fontSize:t,boxShadow2:r,popoverColor:o,textColor2:a,borderRadius:l,borderColor:s,heightSmall:u,heightMedium:p,heightLarge:M,fontSizeSmall:I,fontSizeMedium:$,fontSizeLarge:P,dividerColor:q}=e;return{panelFontSize:t,boxShadow:r,color:o,textColor:a,borderRadius:l,border:`1px solid ${s}`,heightSmall:u,heightMedium:p,heightLarge:M,fontSizeSmall:I,fontSizeMedium:$,fontSizeLarge:P,dividerColor:q}},ct=co({name:"ColorPicker",common:po,peers:{Input:Mo,Button:zo},self:ut}),dt=ct;function pt(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ve(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function ht(e){return e=Math.round(e),e>=360?359:e<0?0:e}function vt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const mt={rgb:{hex(e){return Z(H(e))},hsl(e){const[t,r,o,a]=H(e);return J([...ze(t,r,o),a])},hsv(e){const[t,r,o,a]=H(e);return ae([...Ue(t,r,o),a])}},hex:{rgb(e){return j(H(e))},hsl(e){const[t,r,o,a]=H(e);return J([...ze(t,r,o),a])},hsv(e){const[t,r,o,a]=H(e);return ae([...Ue(t,r,o),a])}},hsl:{hex(e){const[t,r,o,a]=ce(e);return Z([...Ae(t,r,o),a])},rgb(e){const[t,r,o,a]=ce(e);return j([...Ae(t,r,o),a])},hsv(e){const[t,r,o,a]=ce(e);return ae([...He(t,r,o),a])}},hsv:{hex(e){const[t,r,o,a]=le(e);return Z([...N(t,r,o),a])},rgb(e){const[t,r,o,a]=le(e);return j([...N(t,r,o),a])},hsl(e){const[t,r,o,a]=le(e);return J([...we(t,r,o),a])}}};function je(e,t,r){return r=r||ve(e),r?r===t?e:mt[r][t](e):null}const ne="12px",gt=12,Y="6px",ft=6,bt="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",xt=R({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=d(null);function r(l){t.value&&(pe("mousemove",document,o),pe("mouseup",document,a),o(l))}function o(l){const{value:s}=t;if(!s)return;const{width:u,left:p}=s.getBoundingClientRect(),M=ht((l.clientX-p-ft)/(u-gt)*360);e.onUpdateHue(M)}function a(){var l;he("mousemove",document,o),he("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,handleMouseDown:r}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:ne,borderRadius:Y}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:bt,height:ne,borderRadius:Y,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:Y,right:Y,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Y})`,borderRadius:Y,width:ne,height:ne}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Y,width:ne,height:ne}})))))}}),me="12px",wt=12,ee="6px",kt=R({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=d(null);function r(l){!t.value||!e.rgba||(pe("mousemove",document,o),pe("mouseup",document,a),o(l))}function o(l){const{value:s}=t;if(!s)return;const{width:u,left:p}=s.getBoundingClientRect(),M=(l.clientX-p)/(u-wt);e.onUpdateAlpha(vt(M))}function a(){var l;he("mousemove",document,o),he("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,railBackgroundImage:D(()=>{const{rgba:l}=e;return l?`linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:me,borderRadius:ee},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:ee,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:ee,right:ee,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ee})`,borderRadius:ee,width:me,height:me}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:j(this.rgba),borderRadius:ee,width:me,height:me}}))))}}),ke="12px",ye="6px",yt=R({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=d(null);function r(l){t.value&&(pe("mousemove",document,o),pe("mouseup",document,a),o(l))}function o(l){const{value:s}=t;if(!s)return;const{width:u,height:p,left:M,bottom:I}=s.getBoundingClientRect(),$=(I-l.clientY)/p,P=(l.clientX-M)/u,q=100*(P>1?1:P<0?0:P),E=100*($>1?1:$<0?0:$);e.onUpdateSV(q,E)}function a(){var l;he("mousemove",document,o),he("mouseup",document,a),(l=e.onComplete)===null||l===void 0||l.call(e)}return{palleteRef:t,handleColor:D(()=>{const{rgba:l}=e;return l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:ke,height:ke,borderRadius:ye,left:`calc(${this.displayedSv[0]}% - ${ye})`,bottom:`calc(${this.displayedSv[1]}% - ${ye})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:ye,width:ke,height:ke}})))}}),De=ho("n-color-picker");function Ct(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function St(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function $t(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function _t(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Ut(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const zt={paddingSmall:"0 4px"},Le=R({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=d(""),{themeRef:r}=et(De,null);tt(()=>{t.value=o()});function o(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function a(s){t.value=s}function l(s){let u,p;switch(e.label){case"HEX":p=_t(s),p&&e.onUpdateValue(s),t.value=o();break;case"H":u=St(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"S":case"L":case"V":u=$t(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"A":u=Ut(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"R":case"G":case"B":u=Ct(s),u===!1?t.value=o():e.onUpdateValue(u);break}}return{mergedTheme:r,inputValue:t,handleInputChange:l,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return i($o,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:zt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),At=R({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,r){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?Z:be)(r));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=r,e.onUpdateValue((o?ae:Ie)(a));break;case"rgb":a[t]=r,e.onUpdateValue((o?j:Fe)(a));break;case"hsl":a[t]=r,e.onUpdateValue((o?J:Re)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(nt,null,{default:()=>{const{mode:r,valueArr:o,showAlpha:a}=this;if(r==="hex"){let l=null;try{l=o===null?null:(a?Z:be)(o)}catch{}return i(Le,{label:"HEX",showAlpha:a,value:l,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(r+(a?"a":"")).split("").map((l,s)=>i(Le,{label:l.toUpperCase(),value:o===null?null:o[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}}),Dt=R({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:r}=et(De,null);return()=>{const{hsla:o,value:a,clsPrefix:l,onClick:s,disabled:u}=e,p=t.label||r.value;return i("div",{class:[`${l}-color-picker-trigger`,u&&`${l}-color-picker-trigger--disabled`],onClick:u?void 0:s},i("div",{class:`${l}-color-picker-trigger__fill`},i("div",{class:`${l}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?J(o):""}}),a&&o?i("div",{class:`${l}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},p?p(a):a):null))}}});function Bt(e,t){if(t==="hsv"){const[r,o,a,l]=le(e);return j([...N(r,o,a),l])}return e}function Mt(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const Pt=R({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=D(()=>e.swatches.map(l=>{const s=ve(l);return{value:l,mode:s,legalValue:Bt(l,s)}}));function r(l){const{mode:s}=e;let{value:u,mode:p}=l;return p||(p="hex",/^[a-zA-Z]+$/.test(u)?u=Mt(u):(vo("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),p===s?u:je(u,s,p)}function o(l){e.onUpdateColor(r(l))}function a(l,s){l.key==="Enter"&&o(s)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:r=>{this.handleSwatchKeyDown(r,t)}},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Vt=R({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=ve(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(r){var o;const a=r.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,je(a.toUpperCase(),e.mode,"hex")),r.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Rt=de([y("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),y("color-picker-panel",`
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
 `,[_o(),y("input",`
 text-align: center;
 `)]),y("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[de("&::after",`
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
 `)]),y("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[A("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),de("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),y("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[A("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),y("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[A("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Je("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),y("color-picker-preview",`
 display: flex;
 `,[A("sliders",`
 flex: 1 0 auto;
 `),A("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),A("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),A("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),y("color-picker-input",`
 display: flex;
 align-items: center;
 `,[y("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),A("mode",`
 width: 72px;
 text-align: center;
 `)]),y("color-picker-control",`
 padding: 12px;
 `),y("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[y("button","margin-left: 8px;")]),y("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[A("value",`
 white-space: nowrap;
 position: relative;
 `),A("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),Je("disabled","cursor: not-allowed"),y("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[de("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),y("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[y("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[A("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),de("&:focus",`
 outline: none;
 `,[A("fill",[de("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Ft=Object.assign(Object.assign({},Qe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Te.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),It=R({name:"ColorPicker",props:Ft,setup(e,{slots:t}){const r=d(null);let o=null;const a=Ao(e),{mergedSizeRef:l,mergedDisabledRef:s}=a,{localeRef:u}=Do("global"),{mergedClsPrefixRef:p,namespaceRef:M,inlineThemeDisabled:I}=mo(e),$=Qe("ColorPicker","-color-picker",Rt,dt,e,p);bo(De,{themeRef:$,renderLabelRef:qe(e,"renderLabel"),colorPickerSlots:t});const P=d(e.defaultShow),q=it(qe(e,"show"),P);function E(n){const{onUpdateShow:c,"onUpdate:show":f}=e;c&&_e(c,n),f&&_e(f,n),P.value=n}const{defaultValue:C}=e,Ce=d(C===void 0?pt(e.modes,e.showAlpha):C),g=it(qe(e,"value"),Ce),O=d([g.value]),V=d(0),ge=D(()=>ve(g.value)),{modes:te}=e,h=d(ve(g.value)||te[0]||"rgb");function x(){const{modes:n}=e,{value:c}=h,f=n.findIndex(b=>b===c);~f?h.value=n[(f+1)%n.length]:h.value="rgb"}let v,U,ie,se,G,K,W,z;const fe=D(()=>{const{value:n}=g;if(!n)return null;switch(ge.value){case"hsv":return le(n);case"hsl":return[v,U,ie,z]=ce(n),[...He(v,U,ie),z];case"rgb":case"hex":return[G,K,W,z]=H(n),[...Ue(G,K,W),z]}}),oe=D(()=>{const{value:n}=g;if(!n)return null;switch(ge.value){case"rgb":case"hex":return H(n);case"hsv":return[v,U,se,z]=le(n),[...N(v,U,se),z];case"hsl":return[v,U,ie,z]=ce(n),[...Ae(v,U,ie),z]}}),Be=D(()=>{const{value:n}=g;if(!n)return null;switch(ge.value){case"hsl":return ce(n);case"hsv":return[v,U,se,z]=le(n),[...we(v,U,se),z];case"rgb":case"hex":return[G,K,W,z]=H(n),[...ze(G,K,W),z]}}),jt=D(()=>{switch(h.value){case"rgb":case"hex":return oe.value;case"hsv":return fe.value;case"hsl":return Be.value}}),Se=d(0),Me=d(1),Pe=d([0,0]);function Lt(n,c){const{value:f}=fe,b=Se.value,w=f?f[3]:1;Pe.value=[n,c];const{showAlpha:m}=e;switch(h.value){case"hsv":k((m?ae:Ie)([b,n,c,w]),"cursor");break;case"hsl":k((m?J:Re)([...we(b,n,c),w]),"cursor");break;case"rgb":k((m?j:Fe)([...N(b,n,c),w]),"cursor");break;case"hex":k((m?Z:be)([...N(b,n,c),w]),"cursor");break}}function Xt(n){Se.value=n;const{value:c}=fe;if(!c)return;const[,f,b,w]=c,{showAlpha:m}=e;switch(h.value){case"hsv":k((m?ae:Ie)([n,f,b,w]),"cursor");break;case"rgb":k((m?j:Fe)([...N(n,f,b),w]),"cursor");break;case"hex":k((m?Z:be)([...N(n,f,b),w]),"cursor");break;case"hsl":k((m?J:Re)([...we(n,f,b),w]),"cursor");break}}function Nt(n){switch(h.value){case"hsv":[v,U,se]=fe.value,k(ae([v,U,se,n]),"cursor");break;case"rgb":[G,K,W]=oe.value,k(j([G,K,W,n]),"cursor");break;case"hex":[G,K,W]=oe.value,k(Z([G,K,W,n]),"cursor");break;case"hsl":[v,U,ie]=Be.value,k(J([v,U,ie,n]),"cursor");break}Me.value=n}function k(n,c){c==="cursor"?o=n:o=null;const{nTriggerFormChange:f,nTriggerFormInput:b}=a,{onUpdateValue:w,"onUpdate:value":m}=e;w&&_e(w,n),m&&_e(m,n),f(),b(),Ce.value=n}function Gt(n){k(n,"input"),ot(ue)}function ue(n=!0){const{value:c}=g;if(c){const{nTriggerFormChange:f,nTriggerFormInput:b}=a,{onComplete:w}=e;w&&w(c);const{value:m}=O,{value:_}=V;n&&(m.splice(_+1,m.length,c),V.value=_+1),f(),b()}}function Kt(){const{value:n}=V;n-1<0||(k(O.value[n-1],"input"),ue(!1),V.value=n-1)}function Wt(){const{value:n}=V;n<0||n+1>=O.value.length||(k(O.value[n+1],"input"),ue(!1),V.value=n+1)}function Zt(){k(null,"input"),E(!1)}function Jt(){const{value:n}=g,{onConfirm:c}=e;c&&c(n),E(!1)}const Qt=D(()=>V.value>=1),Yt=D(()=>{const{value:n}=O;return n.length>1&&V.value<n.length-1});Ee(q,n=>{n||(O.value=[g.value],V.value=0)}),tt(()=>{if(!(o&&o===g.value)){const{value:n}=fe;n&&(Se.value=n[0],Me.value=n[3],Pe.value=[n[1],n[2]])}o=null});const Ve=D(()=>{const{value:n}=l,{common:{cubicBezierEaseInOut:c},self:{textColor:f,color:b,panelFontSize:w,boxShadow:m,border:_,borderRadius:S,dividerColor:re,[Ye("height",n)]:to,[Ye("fontSize",n)]:oo}}=$.value;return{"--n-bezier":c,"--n-text-color":f,"--n-color":b,"--n-panel-font-size":w,"--n-font-size":oo,"--n-box-shadow":m,"--n-border":_,"--n-border-radius":S,"--n-height":to,"--n-divider-color":re}}),T=I?go("color-picker",D(()=>l.value[0]),Ve,e):void 0;function eo(){var n;const{value:c}=oe,{value:f}=Se,{internalActions:b,modes:w,actions:m}=e,{value:_}=$,{value:S}=p;return i("div",{class:[`${S}-color-picker-panel`,T==null?void 0:T.themeClass.value],onDragstart:re=>{re.preventDefault()},style:I?void 0:Ve.value},i("div",{class:`${S}-color-picker-control`},i(yt,{clsPrefix:S,rgba:c,displayedHue:f,displayedSv:Pe.value,onUpdateSV:Lt,onComplete:ue}),i("div",{class:`${S}-color-picker-preview`},i("div",{class:`${S}-color-picker-preview__sliders`},i(xt,{clsPrefix:S,hue:f,onUpdateHue:Xt,onComplete:ue}),e.showAlpha?i(kt,{clsPrefix:S,rgba:c,alpha:Me.value,onUpdateAlpha:Nt,onComplete:ue}):null),e.showPreview?i(Vt,{clsPrefix:S,mode:h.value,color:oe.value&&be(oe.value),onUpdateColor:re=>{k(re,"input")}}):null),i(At,{clsPrefix:S,showAlpha:e.showAlpha,mode:h.value,modes:w,onUpdateMode:x,value:g.value,valueArr:jt.value,onUpdateValue:Gt}),((n=e.swatches)===null||n===void 0?void 0:n.length)&&i(Pt,{clsPrefix:S,mode:h.value,swatches:e.swatches,onUpdateColor:re=>{k(re,"input")}})),m!=null&&m.length?i("div",{class:`${S}-color-picker-action`},m.includes("confirm")&&i(X,{size:"small",onClick:Jt,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>u.value.confirm}),m.includes("clear")&&i(X,{size:"small",onClick:Zt,disabled:!g.value,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?i("div",{class:`${S}-color-picker-action`},{default:t.action}):b?i("div",{class:`${S}-color-picker-action`},b.includes("undo")&&i(X,{size:"small",onClick:Kt,disabled:!Qt.value,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>u.value.undo}),b.includes("redo")&&i(X,{size:"small",onClick:Wt,disabled:!Yt.value,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:p,namespace:M,selfRef:r,hsla:Be,rgba:oe,mergedShow:q,mergedDisabled:s,isMounted:Bo(),adjustedTo:Te(e),mergedValue:g,handleTriggerClick(){E(!0)},handleClickOutside(n){var c;!((c=r.value)===null||c===void 0)&&c.contains(fo(n))||E(!1)},renderPanel:eo,cssVars:I?void 0:Ve,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r==null||r(),i("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},i(Po,null,{default:()=>[i(Vo,null,{default:()=>i(Dt,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),i(Ro,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Te.tdkey,to:this.adjustedTo},{default:()=>i(uo,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?xo(this.renderPanel(),[[Uo,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),qt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Et=Q("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),Ot=Q("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1),Tt=[Et,Ot],Ht=R({name:"AddOutline",render:function(e,t){return $e(),rt("svg",qt,Tt)}});let Xe,Ne,Ge,Ke;Xe={id:"canvas-extra"},Ne={class:"block_main"},Ge={id:"DrawableBlock"},Ke={__name:"room",setup(e){const t=d(!1),r=d([]);r.value=window.TList,console.log(r.value);let o={};const a=d(0),l=d({index:0,count:5,offset:0});d({width:700});const s={prev:async()=>{o[a.value]=q(),a.value==0?options.value.leftFormCycle&&(a.value=r.value.length-1):a.value--},next:async()=>{o[a.value]=q(),a.value==r.value.length-1?V():a.value++}},u=async()=>{};d(!1);const p=d(!1),M=d(""),I=d("");d(700),d("");const $=d(0),P=wo(i(window.qcomponent=="zjw"?Ze:We,{qcontent:r.value[a.value]}));Ee([r,a],()=>{P.value=i(window.qcomponent=="zjw"?Ze:We,{qcontent:r.value[a.value]})});const q=()=>g.answer;Ee(a,async()=>{p.value=!1,M.value="",I.value="",await ot(),g.recalculateSize(),g.clear(),g.answer=o[a.value]});const E=new ResizeObserver(h=>{g.recalculateSize()});let C={};window.PaintCONFIG={color:"#000"};const Ce=h=>{console.log("updated11"),window.PaintCONFIG.color=h};ko(()=>{document.getElementById("drawableCanvas").width=document.getElementById("DrawableBlock").clientWidth*3,document.getElementById("drawableCanvas").height=document.getElementById("DrawableBlock").clientHeight*3,$.value=document.getElementById("DrawableBlock").clientHeight,C=new ao(document.getElementById("drawableCanvas")),E.observe(document.getElementById("DrawableBlock"))});const g={onpointermove:h=>{C.onpointermove&&C.onpointermove(h)},onmouseup:h=>{C.onmouseup&&C.onmouseup(h)},onmousedown:h=>{C.onmousedown&&C.onmousedown(h)},recalculateSize:()=>{document.getElementById("drawableCanvas").width=document.getElementById("DrawableBlock").clientWidth*3,document.getElementById("drawableCanvas").height=document.getElementById("DrawableBlock").clientHeight*3,$.value=document.getElementById("DrawableBlock").clientHeight},clear:()=>{C.clear()},get answer(){return C.paintlines},set answer(h){C.paintlines=h||[],C.refreshCanvas()},export:()=>C.export()},O=lo();no();const V=async()=>{window.useranswerPaths=o,window.extendheight=te.value,O.push("./room/checkout")},ge=async()=>{window.TList=r.value.splice(0,a.value+1),window.useranswerPaths=o,window.extendheight=te.value,O.push("./room/checkout")};io((h,x)=>{E.disconnect()});const te=d([]);return(h,x)=>($e(),rt(So,null,[Q("div",Xe,[F(B(Io),{vertical:""},{default:L(()=>[F(B(It),{swatches:["#FFFFFF","#18A058","#2080F0","#F0A020","rgba(208, 48, 80, 1)"],style:{width:"40px",height:"40px"},class:"canvase-pc1","on-update:value":Ce},null,8,["swatches"]),F(B(X),{circle:"",onClick:x[0]||(x[0]=v=>te.value[a.value]=(te.value[a.value]||0)+50)},{icon:L(()=>[F(B(Fo),{component:B(Ht)},null,8,["component"])]),_:1})]),_:1})]),Q("div",Ne,[F(B(Eo),{show:t.value},{default:L(()=>[F(B(nt),null,{default:L(()=>[F(B(X),{onClick:x[1]||(x[1]=v=>s.prev())},{default:L(()=>[xe("< PREV ")]),_:1}),F(B(qo),null,{default:L(()=>[xe(Oe(a.value+1)+" / "+Oe(r.value.length),1)]),_:1}),F(B(X),{onClick:x[2]||(x[2]=v=>l.value.index+1==l.value.count?u():s.next())},{default:L(()=>[xe(Oe(a.value==r.value.length-1?"CHECKOUT":"NEXT >"),1)]),_:1}),a.value!=r.value.length-1?($e(),at(B(X),{key:0,onClick:x[3]||(x[3]=v=>ge())},{default:L(()=>[xe(" CIV")]),_:1})):yo("",!0),F(B(X),{onClick:x[4]||(x[4]=v=>s.next())},{default:L(()=>[xe("Skip")]),_:1})]),_:1}),Q("div",null,[Q("div",Ge,[Q("canvas",{id:"drawableCanvas",onPointermove:x[5]||(x[5]=v=>g.onpointermove(v)),onMouseup:x[6]||(x[6]=v=>g.onmouseup(v)),onMousedown:x[7]||(x[7]=v=>g.onmousedown(v)),style:lt({height:$.value+"px"})},null,36),($e(),at(Co(P.value))),Q("div",{style:lt({height:(te.value[a.value]||0)+"px"}),class:"extendHeightBlock"},null,4)])])]),_:1},8,["show"])])],64))}},st=so(Ke,[["__scopeId","data-v-f83b0f50"]])});export{To as __tla,st as default};
