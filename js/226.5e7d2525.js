"use strict";(self["webpackChunkhc2"]=self["webpackChunkhc2"]||[]).push([[226],{2226:(t,e,l)=>{l.r(e),l.d(e,{default:()=>y});l(71);var o=l(3673);const s={class:"q-pa-md"},a={class:"q-gutter-y-md column",style:{"max-width":"300px"},dense:!0},n=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:""}},[(0,o._)("path",{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"})],-1),r=(0,o._)("button",null,"test",-1),c={key:0,class:"q-pa-md"};function i(t,e,l,i,u,d){const p=(0,o.up)("q-inner-loading"),h=(0,o.up)("q-btn"),w=(0,o.up)("q-btn-group"),m=(0,o.up)("q-avatar"),b=(0,o.up)("q-input"),g=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",a,[(0,o.Wm)(p,{showing:i.visible,label:"Please wait...","label-class":"text-teal","label-style":"font-size: 1.1em"},null,8,["showing"])]),(0,o.Wm)(w,{push:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"yellow",glossy:"","text-color":"black",push:"",label:"First",icon:"verified_user"}),(0,o.Wm)(h,{color:"amber",glossy:"","text-color":"black",push:"",label:"Second"}),(0,o.Wm)(h,{color:"orange",glossy:"","text-color":"black",push:"",label:"Third"})])),_:1}),(0,o.Wm)(b,{outlined:"",modelValue:i.text,"onUpdate:modelValue":e[0]||(e[0]=t=>i.text=t),dense:!0},{append:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[n])),_:1})])),_:1},8,["modelValue"]),r,(0,o._)("button",{onClick:e[1]||(e[1]=(...t)=>i.fetchData&&i.fetchData(...t))},"getdata"),i.list?((0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(g,{rows:i.list,onRowClick:i.onRowClick},null,8,["rows","onRowClick"])])):(0,o.kq)("",!0)])}l(6701);var u=l(1959);const d={setup(){const t=(0,u.iH)(null),e=(0,u.iH)(!1),l=(0,u.iH)("");async function o(){try{e.value=!0;const l=await fetch("http://localhost:3000/users",{method:"GET",headers:{"content-type":"application/json"}});if(console.log(l),!l.ok){const t=new Error(l.statusText);throw t.json=l.json(),alert(t),t}const o=await l.json();e.value=!1,t.value=o}catch(l){if(error.value=l,l.json)return l.json.then((t=>{error.value.message=t.message}))}}return{list:t,fetchData:o,visible:e,text:l,onRowClick(t,e){alert(e.id)}}}};var p=l(4260),h=l(6941),w=l(6375),m=l(8240),b=l(4842),g=l(5096),v=l(2991),f=l(7518),k=l.n(f);const x=(0,p.Z)(d,[["render",i]]),y=x;k()(d,"components",{QInnerLoading:h.Z,QBtnGroup:w.Z,QBtn:m.Z,QInput:b.Z,QAvatar:g.Z,QTable:v.Z})}}]);