import{p as i,N as n,a}from"./Popover-4b12eb1a.js";import{c,a as m,t as l,u as h,h as r}from"./light-061b806c.js";import{v as d,aZ as v,i as g,J as u}from"./runtime-core.esm-bundler-42be6625.js";const f={padding:"8px 14px"},b=e=>{const{borderRadius:s,boxShadow2:t,baseColor:o}=e;return Object.assign(Object.assign({},f),{borderRadius:s,boxShadow:t,color:l(o,"rgba(0, 0, 0, .85)"),textColor:o})},O=c({name:"Tooltip",common:m,peers:{Popover:i},self:b}),x=O,T=Object.assign(Object.assign({},a),r.props),w=d({name:"Tooltip",props:T,__popover__:!0,setup(e){const{mergedClsPrefixRef:s}=h(e),t=r("Tooltip","-tooltip",void 0,x,e,s),o=v(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(p){o.value.setShow(p)}}),{popoverRef:o,mergedTheme:t,popoverThemeOverrides:g(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:s}=this;return u(n,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:s.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{w as N,x as t};