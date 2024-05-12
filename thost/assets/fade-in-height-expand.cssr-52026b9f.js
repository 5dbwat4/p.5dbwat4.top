import{h as n,v as m}from"./light-cb8e5d18.js";const{cubicBezierEaseInOut:a,cubicBezierEaseOut:c,cubicBezierEaseIn:h}=m;function f({overflow:$="hidden",duration:i=".3s",originalTransition:t="",leavingDelay:o="0s",foldPadding:d=!1,enterToProps:s=void 0,leaveToProps:g=void 0,reverse:p=!1}={}){const e=p?"leave":"enter",r=p?"enter":"leave";return[n(`&.fade-in-height-expand-transition-${r}-from,
 &.fade-in-height-expand-transition-${e}-to`,Object.assign(Object.assign({},s),{opacity:1})),n(`&.fade-in-height-expand-transition-${r}-to,
 &.fade-in-height-expand-transition-${e}-from`,Object.assign(Object.assign({},g),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:d?"0 !important":void 0,paddingBottom:d?"0 !important":void 0})),n(`&.fade-in-height-expand-transition-${r}-active`,`
 overflow: ${$};
 transition:
 max-height ${i} ${a} ${o},
 opacity ${i} ${c} ${o},
 margin-top ${i} ${a} ${o},
 margin-bottom ${i} ${a} ${o},
 padding-top ${i} ${a} ${o},
 padding-bottom ${i} ${a} ${o}
 ${t?","+t:""}
 `),n(`&.fade-in-height-expand-transition-${e}-active`,`
 overflow: ${$};
 transition:
 max-height ${i} ${a},
 opacity ${i} ${h},
 margin-top ${i} ${a},
 margin-bottom ${i} ${a},
 padding-top ${i} ${a},
 padding-bottom ${i} ${a}
 ${t?","+t:""}
 `)]}export{f};
