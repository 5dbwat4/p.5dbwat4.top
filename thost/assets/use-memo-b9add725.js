import{R as a,C as o,F as s,i as l,aZ as f,az as i}from"./runtime-core.esm-bundler-c066f4bf.js";function u(e){return e.some(r=>a(r)?!(r.type===o||r.type===s&&!u(r.children)):!0)?e:null}function m(e,r){return e&&u(e())||r()}function p(e,r,n){return e&&u(e(r))||n(r)}function v(e,r){const n=e&&u(e());return r(n||null)}function d(e,r,n){const t=e&&u(e(r));return n(t||null)}function S(e){return!(e&&u(e()))}function y(e){const r=l(e),n=f(r.value);return i(r,t=>{n.value=t}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(t){e.set(t)}}}export{v as a,p as b,d as c,S as i,m as r,y as u};
