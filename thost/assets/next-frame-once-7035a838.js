let t=[];const a=new WeakMap;function s(){t.forEach(n=>n(...a.get(n))),t=[]}function o(n,...e){a.set(n,e),!t.includes(n)&&t.push(n)===1&&requestAnimationFrame(s)}export{o as b};
