import{y as d,z as f,S as n,A as h,a as p,h as b,s as m}from"./light-cb8e5d18.js";import{w as g,b8 as y,N as v}from"./index-6b27469d.js";var w="[object Symbol]";function e(i){return typeof i=="symbol"||d(i)&&f(i)==w}function s(i,r){for(var a=-1,o=i==null?0:i.length,t=Array(o);++a<o;)t[a]=r(i[a],a,i);return t}var M=1/0,l=n?n.prototype:void 0,u=l?l.toString:void 0;function c(i){if(typeof i=="string")return i;if(h(i))return s(i,c)+"";if(e(i))return u?u.call(i):"";var r=i+"";return r=="0"&&1/i==-M?"-0":r}function S(i){return i==null?"":c(i)}const x=p("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[b("svg",`
 height: 1em;
 width: 1em;
 `)]),C=g({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(i){m("-base-icon",x,y(i,"clsPrefix"))},render(){return v("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});export{C as N,s as a,e as i,S as t};
