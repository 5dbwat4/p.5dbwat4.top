import{O as I,G as l,az as x,_ as p,a2 as j}from"./runtime-core.esm-bundler-c066f4bf.js";function m(e,s,a){var n;const i=I(e,null);if(i===null)return;const o=(n=l())===null||n===void 0?void 0:n.proxy;x(a,t),t(a.value),p(()=>{t(void 0,a.value)});function t(u,f){const c=i[s];f!==void 0&&d(c,f),u!==void 0&&r(c,u)}function d(u,f){u[f]||(u[f]=[]),u[f].splice(u[f].findIndex(c=>c===o),1)}function r(u,f){u[f]||(u[f]=[]),~u[f].findIndex(c=>c===o)||u[f].push(o)}}function h(e,s,a){const n=I(e,null);n!==null&&(s in n||(n[s]=[]),n[s].push(a.value),x(a,(i,o)=>{const t=n[s],d=t.findIndex(r=>r===o);~d&&t.splice(d,1),t.push(i)}),p(()=>{const i=n[s],o=i.findIndex(t=>t===a.value);~o&&i.splice(o,1)}))}function C(e,s,a){const n=I(e,null);n!==null&&(s in n||(n[s]=[]),j(()=>{const i=a();i&&n[s].push(i)}),p(()=>{const i=n[s],o=a(),t=i.findIndex(d=>d===o);~t&&i.splice(t,1)}))}export{C as a,m as b,h as u};
