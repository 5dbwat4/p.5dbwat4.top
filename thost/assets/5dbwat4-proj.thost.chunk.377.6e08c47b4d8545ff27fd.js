"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[377],{7377:(e,l,n)=>{n.r(l),n.d(l,{default:()=>a});var s=n(7875),u=n(349),t=n(641);const a={setup(e){const l=(0,t.iH)("Loading");return fetch("/api/list/v2/all_uuids").then((e=>e.json())).then((e=>{console.log(e),l.value=e.map((e=>e.id)).join(",")})),(e,n)=>((0,s.wg)(),(0,s.iD)("p",null,(0,u.zw)(l.value),1))}}}}]);