let t,d=(async()=>{(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&p(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function p(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();let c,s,l;c="modulepreload",s=function(i,n){return new URL(i,n).href},l={},t=function(i,n,p){if(!n||n.length===0)return i();const r=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=s(e,p),e in l)return;l[e]=!0;const o=e.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(p)for(let a=r.length-1;a>=0;a--){const m=r[a];if(m.href===e&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const _=document.createElement("link");if(_.rel=o?"stylesheet":c,o||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),o)return new Promise((a,m)=>{_.addEventListener("load",a),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},(async()=>{const i=(await t(()=>import("./vue.runtime.esm-bundler-ab15dcc5.js"),["./vue.runtime.esm-bundler-ab15dcc5.js","./runtime-dom.esm-bundler-caa8590e.js","./runtime-core.esm-bundler-c066f4bf.js"],import.meta.url)).createApp,n=await t(()=>import("./vue-router-3740985a.js"),["./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js"],import.meta.url),p=(await t(()=>import("./main-d738df12.js"),["./main-d738df12.js","./runtime-core.esm-bundler-c066f4bf.js","./APIHelper-4c0d0968.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./Card-e4be8a6b.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./p-8644848c.js","./light-169f895b.js","./text-f4d25175.js","./use-compitable-42538ef7.js","./Divider-65b08aae.js","./InputGroup-1135b579.js","./Input-32bb51de.js","./Button-418af94d.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./use-merged-state-89f8109f.js","./light-a188f855.js","./Suffix-fac0a942.js","./Alert-063ee1d4.js","./fade-in-height-expand.cssr-9dfe9456.js","./fade-in-scale-up.cssr-18f1ebda.js","./flatten-a133123b.js","./use-false-until-truthy-a506b738.js","./Code-0d8e1910.js","./throttle-d162c104.js","./Spin-28bd4bca.js","./Switch-8471804c.js","./Modal-35c1e281.js","./utils-d7fa52af.js","./index-cbfaa337.js"],import.meta.url)).default,r=[{path:"/",component:()=>t(()=>import("./index-fe05e4d2.js"),["./index-fe05e4d2.js","./APIHelper-4c0d0968.js","./runtime-core.esm-bundler-c066f4bf.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./SVGGraph-e606c3bd.js","./use-memo-b9add725.js","./Button-418af94d.js","./FadeInExpandTransition-ff940b4d.js","./_plugin-vue_export-helper-c27b6911.js","./Alert-063ee1d4.js","./fade-in-height-expand.cssr-9dfe9456.js","./index-5636620d.css"],import.meta.url)},{path:"/list",component:()=>t(()=>import("./index-bf56f400.js"),["./index-bf56f400.js","./APIHelper-4c0d0968.js","./runtime-core.esm-bundler-c066f4bf.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./vue-router-3740985a.js","./Icon-3fbf0a05.js","./SearchOutline-2f558d6d.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./Checkbox-b5c247e6.js","./use-merged-state-89f8109f.js","./flatten-a133123b.js","./get-slot-1efb97e5.js","./Popover-c2999df7.js","./fade-in-scale-up.cssr-18f1ebda.js","./use-false-until-truthy-a506b738.js","./_baseIsEqual-9220f819.js","./get-9e715692.js","./cssr-ce5b581a.js","./utils-d7fa52af.js","./use-compitable-42538ef7.js","./next-frame-once-7035a838.js","./Suffix-fac0a942.js","./Dropdown-e7fd699d.js","./ChevronRight-989c7384.js","./create-e19b3023.js","./Ellipsis-2210e394.js","./Tooltip-bd1c8576.js","./utils-4c4b4d7d.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./Tag-c27ccbde.js","./attribute-2ee9e579.js","./light-a188f855.js","./Input-32bb51de.js","./index-cbfaa337.js","./InputGroup-1135b579.js"],import.meta.url)},{path:"/list/uuids_all",component:()=>t(()=>import("./uuidlistall-20a6b944.js"),["./uuidlistall-20a6b944.js","./APIHelper-4c0d0968.js","./runtime-core.esm-bundler-c066f4bf.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js"],import.meta.url)},{path:"/view/:id",component:()=>t(()=>import("./index-2b2ea9a9.js"),["./index-2b2ea9a9.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./toScreenDisplay-d37bc74f.js","./sweetalert.min-37390c4f.js","./_commonjsHelpers-042e6b4d.js","./APIHelper-4c0d0968.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js"],import.meta.url)},{path:"/batch/:ids",component:()=>t(()=>import("./index-a286a5de.js"),["./index-a286a5de.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./APIHelper-4c0d0968.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./Card-e4be8a6b.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./Input-32bb51de.js","./Button-418af94d.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./use-merged-state-89f8109f.js","./light-a188f855.js","./Suffix-fac0a942.js","./Modal-35c1e281.js","./fade-in-scale-up.cssr-18f1ebda.js","./flatten-a133123b.js","./use-false-until-truthy-a506b738.js","./utils-d7fa52af.js","./index-cbfaa337.js","./toScreenDisplay-d37bc74f.js","./define_basic_qtypes-ddf25d69.js"],import.meta.url)},{path:"/batching/syncbatch",component:()=>t(()=>import("./syncbatch-1f9d5aab.js"),["./syncbatch-1f9d5aab.js","./_commonjsHelpers-042e6b4d.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./APIHelper-4c0d0968.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./Code-0d8e1910.js","./use-memo-b9add725.js","./Button-418af94d.js","./FadeInExpandTransition-ff940b4d.js","./Input-32bb51de.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./use-merged-state-89f8109f.js","./light-a188f855.js","./Suffix-fac0a942.js","./Spin-28bd4bca.js","./use-compitable-42538ef7.js"],import.meta.url)},{path:"/batching/from-basket",component:()=>t(()=>import("./from_zujuan_basket-d48f2d21.js"),["./from_zujuan_basket-d48f2d21.js","./APIHelper-4c0d0968.js","./runtime-core.esm-bundler-c066f4bf.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./vue-router-3740985a.js","./Cascader-61f8e307.js","./utils-4c4b4d7d.js","./Popover-c2999df7.js","./fade-in-scale-up.cssr-18f1ebda.js","./flatten-a133123b.js","./use-false-until-truthy-a506b738.js","./_baseIsEqual-9220f819.js","./get-9e715692.js","./use-memo-b9add725.js","./cssr-ce5b581a.js","./utils-d7fa52af.js","./FadeInExpandTransition-ff940b4d.js","./use-merged-state-89f8109f.js","./use-compitable-42538ef7.js","./next-frame-once-7035a838.js","./Button-418af94d.js","./create-e19b3023.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./Suffix-fac0a942.js","./Tag-c27ccbde.js","./attribute-2ee9e579.js","./ChevronRight-989c7384.js","./Checkbox-b5c247e6.js","./index-cbfaa337.js","./Alert-063ee1d4.js","./fade-in-height-expand.cssr-9dfe9456.js","./Card-e4be8a6b.js"],import.meta.url)},{path:"/group/:id",component:()=>t(()=>import("./index-07256283.js"),["./index-07256283.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./toScreenDisplay-d37bc74f.js","./define_basic_qtypes-ddf25d69.js","./APIHelper-4c0d0968.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./sweetalert.min-37390c4f.js","./_commonjsHelpers-042e6b4d.js","./_plugin-vue_export-helper-c27b6911.js","./Checkbox-b5c247e6.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./use-merged-state-89f8109f.js","./use-collection-26725bb7.js","./attribute-2ee9e579.js","./next-frame-once-7035a838.js","./throttle-d162c104.js","./cssr-ce5b581a.js","./utils-d7fa52af.js","./Image-8f0d7033.js","./ImageGroup-d2b836f6.js","./fade-in-scale-up.cssr-18f1ebda.js","./flatten-a133123b.js","./use-false-until-truthy-a506b738.js","./Tooltip-bd1c8576.js","./Popover-c2999df7.js","./_baseIsEqual-9220f819.js","./get-9e715692.js","./use-compitable-42538ef7.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./Spin-28bd4bca.js","./text-f4d25175.js","./light-169f895b.js","./index-f6057838.css"],import.meta.url)},{path:"/grouping/new",component:()=>t(()=>import("./new-e16906b0.js"),["./new-e16906b0.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)},{path:"/grouping/list",component:()=>t(()=>import("./list-cf8c9e76.js"),["./list-cf8c9e76.js","./APIHelper-4c0d0968.js","./runtime-core.esm-bundler-c066f4bf.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./vue-router-3740985a.js","./SearchOutline-2f558d6d.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./Checkbox-b5c247e6.js","./use-merged-state-89f8109f.js","./flatten-a133123b.js","./get-slot-1efb97e5.js","./Popover-c2999df7.js","./fade-in-scale-up.cssr-18f1ebda.js","./use-false-until-truthy-a506b738.js","./_baseIsEqual-9220f819.js","./get-9e715692.js","./cssr-ce5b581a.js","./utils-d7fa52af.js","./use-compitable-42538ef7.js","./next-frame-once-7035a838.js","./Suffix-fac0a942.js","./Dropdown-e7fd699d.js","./Icon-3fbf0a05.js","./ChevronRight-989c7384.js","./create-e19b3023.js","./Ellipsis-2210e394.js","./Tooltip-bd1c8576.js","./utils-4c4b4d7d.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./Tag-c27ccbde.js","./attribute-2ee9e579.js","./light-a188f855.js","./Input-32bb51de.js","./index-cbfaa337.js","./InputGroup-1135b579.js"],import.meta.url)},{path:"/grouping/preexport-1/:id",component:()=>t(()=>import("./preexport-1-739d1ac3.js"),["./preexport-1-739d1ac3.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./define_basic_qtypes-ddf25d69.js","./APIHelper-4c0d0968.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./defineProperty-f749b14d.js","./_baseIsEqual-9220f819.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./preexport-1-b089564a.css"],import.meta.url)},{path:"/grouping/preexport/:id",component:()=>t(()=>import("./preexport-fb617bf8.js"),["./preexport-fb617bf8.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./toScreenDisplay-d37bc74f.js","./define_basic_qtypes-ddf25d69.js","./APIHelper-4c0d0968.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./Spin-28bd4bca.js","./use-compitable-42538ef7.js","./preexport-be41a69a.css"],import.meta.url)},{path:"/grouping/rename/:id",component:()=>t(()=>import("./rename-d94a1f9a.js"),["./rename-d94a1f9a.js","./APIHelper-4c0d0968.js","./runtime-core.esm-bundler-c066f4bf.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./vue-router-3740985a.js","./Input-32bb51de.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./use-merged-state-89f8109f.js","./light-a188f855.js","./Suffix-fac0a942.js"],import.meta.url)},{path:"/grouping/preexport-2/:id",component:()=>t(()=>import("./preexport-2-df78db93.js"),["./preexport-2-df78db93.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./Button-418af94d.js","./light-96080c0b.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./runtime-dom.esm-bundler-caa8590e.js","./p-8644848c.js","./light-169f895b.js","./Divider-65b08aae.js","./preexport-2-18c4b4d9.css"],import.meta.url)},{path:"/grouping/preexport-1/:id/word_tailored_version",component:()=>t(()=>import("./preexport-1-74e79962.js"),["./preexport-1-74e79962.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./define_basic_qtypes-ddf25d69.js","./APIHelper-4c0d0968.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./preexport-1-c21fd8c3.css"],import.meta.url)},{path:"/grouping/preexport-2/:id/word_tailored_version",component:()=>t(()=>import("./preexport-2-67bde47e.js"),["./preexport-2-67bde47e.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./Button-418af94d.js","./light-96080c0b.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./runtime-dom.esm-bundler-caa8590e.js","./p-8644848c.js","./light-169f895b.js","./Divider-65b08aae.js","./preexport-2-ce806fab.css"],import.meta.url)},{path:"/export/:i",component:()=>t(()=>import("./export-bce5bd3f.js"),["./export-bce5bd3f.js","./runtime-core.esm-bundler-c066f4bf.js","./export-2f12b2b3.css"],import.meta.url)},{path:"/export/:id/a",component:()=>t(()=>import("./export.a-595cb334.js"),["./export.a-595cb334.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./define_basic_qtypes-ddf25d69.js","./APIHelper-4c0d0968.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./sweetalert.min-37390c4f.js","./_commonjsHelpers-042e6b4d.js","./_plugin-vue_export-helper-c27b6911.js","./Checkbox-b5c247e6.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./use-merged-state-89f8109f.js","./ImageGroup-d2b836f6.js","./fade-in-scale-up.cssr-18f1ebda.js","./flatten-a133123b.js","./use-false-until-truthy-a506b738.js","./Tooltip-bd1c8576.js","./Popover-c2999df7.js","./_baseIsEqual-9220f819.js","./get-9e715692.js","./cssr-ce5b581a.js","./utils-d7fa52af.js","./use-compitable-42538ef7.js","./next-frame-once-7035a838.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./export.a-cf95f981.css"],import.meta.url)},{path:"/regener",component:()=>t(()=>import("./index-22621411.js"),["./index-22621411.js","./APIHelper-4c0d0968.js","./runtime-core.esm-bundler-c066f4bf.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./Input-32bb51de.js","./Button-418af94d.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./use-merged-state-89f8109f.js","./light-a188f855.js","./Suffix-fac0a942.js","./Card-e4be8a6b.js"],import.meta.url)},{path:"/message",component:()=>t(()=>import("./index-048646d7.js").then(async o=>(await o.__tla,o)),["./index-048646d7.js","./vue-router-3740985a.js","./runtime-core.esm-bundler-c066f4bf.js","./Card-e4be8a6b.js","./light-96080c0b.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./runtime-dom.esm-bundler-caa8590e.js","./Close-d6ea1a86.js","./Icon-e6ca0735.js","./Scrollbar-25ba1ebe.js","./Modal-35c1e281.js","./Button-418af94d.js","./Warning-ff31488d.js","./fade-in-scale-up.cssr-18f1ebda.js","./flatten-a133123b.js","./use-false-until-truthy-a506b738.js","./utils-d7fa52af.js","./index-cbfaa337.js"],import.meta.url)},{path:"/login",component:()=>t(()=>import("./login-to-zujuan-3c3aaa32.js"),["./login-to-zujuan-3c3aaa32.js","./APIHelper-4c0d0968.js","./runtime-core.esm-bundler-c066f4bf.js","./light-96080c0b.js","./format-length-c9d165c6.js","./Icon-e6ca0735.js","./Warning-ff31488d.js","./Close-d6ea1a86.js","./Scrollbar-25ba1ebe.js","./runtime-dom.esm-bundler-caa8590e.js","./_commonjsHelpers-042e6b4d.js","./sweetalert.min-37390c4f.js","./Add-ee83f2d3.js","./use-compitable-42538ef7.js","./flatten-a133123b.js","./use-merged-state-89f8109f.js","./throttle-d162c104.js","./cssr-ce5b581a.js","./utils-d7fa52af.js","./use-memo-b9add725.js","./FadeInExpandTransition-ff940b4d.js","./p-8644848c.js","./light-169f895b.js","./text-f4d25175.js","./Input-32bb51de.js","./Button-418af94d.js","./use-locale-55e0af58.js","./index-975a2d8f.js","./light-a188f855.js","./Suffix-fac0a942.js","./Card-e4be8a6b.js"],import.meta.url)},{path:"/bjgapi",component:()=>t(()=>import("./index-c228d76a.js"),["./index-c228d76a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url),meta:{title:"\u505A\u70B9\u57FA\u7840\u77E5\u8BC6\u5224\u65AD\u9898\u53EF\u4EE5\u6709\u52A9\u4E8E\u63D0\u9AD8\u6210\u7EE9 | thost"}}];r.push(...(await t(()=>import("./routedef-8f0d1b26.js").then(async o=>(await o.__tla,o)),[],import.meta.url)).default);const e=n.createRouter({history:location.hostname=="localhost"||location.hostname=="thost.5dbwat4.studio"?n.createWebHistory():n.createWebHashHistory("/"),routes:r});i(p).use(e).mount("#app")})()})();export{t as _,d as __tla};
