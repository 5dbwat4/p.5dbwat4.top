import{t as u,F as n,C as a}from"./index-6b27469d.js";function t(f,r=!0,i=[]){return f.forEach(e=>{if(e!==null){if(typeof e!="object"){(typeof e=="string"||typeof e=="number")&&i.push(u(String(e)));return}if(Array.isArray(e)){t(e,r,i);return}if(e.type===n){if(e.children===null)return;Array.isArray(e.children)&&t(e.children,r,i)}else{if(e.type===a&&r)return;i.push(e)}}}),i}export{t as f};