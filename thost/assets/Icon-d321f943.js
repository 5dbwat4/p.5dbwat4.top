import{J as d,K as c,S as r,B as u,d as f,e as b,n as h}from"./light-d6058c0b.js";import{v as p,b3 as m,J as g}from"./runtime-core.esm-bundler-c066f4bf.js";var y="[object Symbol]";function S(e){return typeof e=="symbol"||d(e)&&c(e)==y}function M(e,n){for(var i=-1,t=e==null?0:e.length,o=Array(t);++i<t;)o[i]=n(e[i],i,e);return o}var w=1/0,s=r?r.prototype:void 0,a=s?s.toString:void 0;function l(e){if(typeof e=="string")return e;if(u(e))return M(e,l)+"";if(S(e))return a?a.call(e):"";var n=e+"";return n=="0"&&1/e==-w?"-0":n}function C(e){return e==null?"":l(e)}const x=f("base-icon",`
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
 `)]),I=p({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){h("-base-icon",x,m(e,"clsPrefix"))},render(){return g("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});export{I as N,M as a,S as i,C as t};
