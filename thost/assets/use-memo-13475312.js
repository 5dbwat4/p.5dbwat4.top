import{R as r,C as o,F as e,i,aZ as c,az as l}from"./index-c2ed52a5.js";function a(n){return n.some(t=>r(t)?!(t.type===o||t.type===e&&!a(t.children)):!0)?n:null}function f(n,t){return n&&a(n())||t()}function v(n,t,u){return n&&a(n(t))||u(t)}function p(n,t){const u=n&&a(n());return t(u||null)}function m(n,t,u){const s=n&&a(n(t));return u(s||null)}function y(n){return!(n&&a(n()))}function _(n){const t=i(n),u=c(t.value);return l(t,s=>{u.value=s}),typeof n=="function"?u:{__v_isRef:!0,get value(){return u.value},set value(s){n.set(s)}}}export{v as a,f as b,m as c,y as i,p as r,_ as u};