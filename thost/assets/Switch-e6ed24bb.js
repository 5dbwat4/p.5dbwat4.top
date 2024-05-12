import{i as A,u as se,a as de,N as ce}from"./Loading-a27cceda.js";import{c as ue,n as he,a as O,i as t,h as M,b as l,j as U,u as be,d as I,k as f,e as pe}from"./light-cb8e5d18.js";import{u as ve}from"./use-merged-state-236ae148.js";import{p as P,d as s}from"./Close-df27b242.js";import{i as L,r as m}from"./use-memo-7138c88c.js";import{c as N}from"./use-is-mounted-e356ec1d.js";import{w as ge,b2 as K,b8 as fe,j as R,N as o}from"./index-6b27469d.js";const me={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},we=e=>{const{primaryColor:d,opacityDisabled:p,borderRadius:r,textColor3:n}=e,w="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},me),{iconColor:n,textColor:"white",loadingColor:d,opacityDisabled:p,railColor:w,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${he(d,{alpha:.2})}`})},xe={name:"Switch",common:ue,self:we},ke=xe,ye=O("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),O("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[A({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),M("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),U("disabled",[U("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[M("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[M("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[A()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Se=Object.assign(Object.assign({},I.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let C;const $e=ge({name:"Switch",props:Se,setup(e){C===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?C=CSS.supports("width","max(1px)"):C=!1:C=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:p}=be(e),r=I("Switch","-switch",ye,ke,e,d),n=se(e),{mergedSizeRef:w,mergedDisabledRef:v}=n,y=K(e.defaultValue),B=fe(e,"value"),g=ve(B,y),S=R(()=>g.value===e.checkedValue),x=K(!1),a=K(!1),c=R(()=>{const{railStyle:i}=e;if(i)return i({focused:a.value,checked:S.value})});function u(i){const{"onUpdate:value":_,onChange:z,onUpdateValue:F}=e,{nTriggerFormInput:V,nTriggerFormChange:W}=n;_&&N(_,i),F&&N(F,i),z&&N(z,i),y.value=i,V(),W()}function X(){const{nTriggerFormFocus:i}=n;i()}function Y(){const{nTriggerFormBlur:i}=n;i()}function E(){e.loading||v.value||(g.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function q(){a.value=!0,X()}function G(){a.value=!1,Y(),x.value=!1}function J(i){e.loading||v.value||i.key===" "&&(g.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),x.value=!1)}function Q(i){e.loading||v.value||i.key===" "&&(i.preventDefault(),x.value=!0)}const T=R(()=>{const{value:i}=w,{self:{opacityDisabled:_,railColor:z,railColorActive:F,buttonBoxShadow:V,buttonColor:W,boxShadowFocus:Z,loadingColor:ee,textColor:te,iconColor:ie,[f("buttonHeight",i)]:h,[f("buttonWidth",i)]:ae,[f("buttonWidthPressed",i)]:oe,[f("railHeight",i)]:b,[f("railWidth",i)]:$,[f("railBorderRadius",i)]:re,[f("buttonBorderRadius",i)]:ne},common:{cubicBezierEaseInOut:le}}=r.value;let j,D,H;return C?(j=`calc((${b} - ${h}) / 2)`,D=`max(${b}, ${h})`,H=`max(${$}, calc(${$} + ${h} - ${b}))`):(j=P((s(b)-s(h))/2),D=P(Math.max(s(b),s(h))),H=s(b)>s(h)?$:P(s($)+s(h)-s(b))),{"--n-bezier":le,"--n-button-border-radius":ne,"--n-button-box-shadow":V,"--n-button-color":W,"--n-button-width":ae,"--n-button-width-pressed":oe,"--n-button-height":h,"--n-height":D,"--n-offset":j,"--n-opacity-disabled":_,"--n-rail-border-radius":re,"--n-rail-color":z,"--n-rail-color-active":F,"--n-rail-height":b,"--n-rail-width":$,"--n-width":H,"--n-box-shadow-focus":Z,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ie}}),k=p?pe("switch",R(()=>w.value[0]),T,e):void 0;return{handleClick:E,handleBlur:G,handleFocus:q,handleKeyup:J,handleKeydown:Q,mergedRailStyle:c,pressed:x,mergedClsPrefix:d,mergedValue:g,checked:S,mergedDisabled:v,cssVars:p?void 0:T,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:p,mergedRailStyle:r,onRender:n,$slots:w}=this;n==null||n();const{checked:v,unchecked:y,icon:B,"checked-icon":g,"unchecked-icon":S}=w,x=!(L(B)&&L(g)&&L(S));return o("div",{role:"switch","aria-checked":p,class:[`${e}-switch`,this.themeClass,x&&`${e}-switch--icon`,p&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},m(v,a=>m(y,c=>a||c?o("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),a),o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),c)):null)),o("div",{class:`${e}-switch__button`},m(B,a=>m(g,c=>m(S,u=>o(de,null,{default:()=>this.loading?o(ce,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||a)?o("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||a):!this.checked&&(u||a)?o("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||a):null})))),m(v,a=>a&&o("div",{key:"checked",class:`${e}-switch__checked`},a)),m(y,a=>a&&o("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}});export{$e as N};
