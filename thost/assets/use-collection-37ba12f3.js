import{R as r,J as f,aC as x,a1 as v,a5 as I}from"./index-6b27469d.js";function h(a,o,s){var n;const i=r(a,null);if(i===null)return;const d=(n=f())===null||n===void 0?void 0:n.proxy;x(s,l),l(s.value),v(()=>{l(void 0,s.value)});function l(t,c){if(!i)return;const e=i[o];c!==void 0&&u(e,c),t!==void 0&&p(e,t)}function u(t,c){t[c]||(t[c]=[]),t[c].splice(t[c].findIndex(e=>e===d),1)}function p(t,c){t[c]||(t[c]=[]),~t[c].findIndex(e=>e===d)||t[c].push(d)}}function m(a,o,s){const n=r(a,null);n!==null&&(o in n||(n[o]=[]),n[o].push(s.value),x(s,(i,d)=>{const l=n[o],u=l.findIndex(p=>p===d);~u&&l.splice(u,1),l.push(i)}),v(()=>{const i=n[o],d=i.findIndex(l=>l===s.value);~d&&i.splice(d,1)}))}function C(a,o,s){const n=r(a,null);n!==null&&(o in n||(n[o]=[]),I(()=>{const i=s();i&&n[o].push(i)}),v(()=>{const i=n[o],d=s(),l=i.findIndex(u=>u===d);~l&&i.splice(l,1)}))}export{m as a,C as b,h as u};