var B=Object.defineProperty,S=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var c=(e,t,a)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))q.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))C.call(t,a)&&c(e,a,t[a]);return e},g=(e,t)=>S(e,h(t));import{u as y,a as Q}from"./use-dark.466ba5b0.js";import{br as m,Q as n,ac as v,a9 as z,bs as k}from"./index.57eaada7.js";const D={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},r={xs:2,sm:4,md:8,lg:16,xl:24};var M=m({name:"QSeparator",props:g(d({},y),{spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String}),setup(e){const t=z(),a=Q(e,t.proxy.$q),i=n(()=>e.vertical===!0?"vertical":"horizontal"),l=n(()=>` q-separator--${i.value}`),b=n(()=>e.inset!==!1?`${l.value}-${D[e.inset]}`:""),$=n(()=>`q-separator${l.value}${b.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(a.value===!0?" q-separator--dark":"")),f=n(()=>{const o={};if(e.size!==void 0&&(o[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const x=e.spaced===!0?`${r.md}px`:e.spaced in r?`${r[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];o[`margin${s[0]}`]=o[`margin${s[1]}`]=x}return o});return()=>v("hr",{class:$.value,style:f.value,"aria-orientation":i.value})}});const L=["top","middle","bottom"];var N=m({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>L.includes(e)}},setup(e,{slots:t}){const a=n(()=>e.align!==void 0?{verticalAlign:e.align}:null),i=n(()=>{const l=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(l!==void 0?` text-${l}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>v("div",{class:i.value,style:a.value,role:"alert","aria-label":e.label},e.label!==void 0?e.label:k(t.default))}});export{M as Q,N as a};
