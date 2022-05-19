var D=Object.defineProperty,P=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var _=(e,a,t)=>a in e?D(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))p.call(a,t)&&_(e,t,a[t]);if(h)for(var t of h(a))N.call(a,t)&&_(e,t,a[t]);return e},m=(e,a)=>P(e,j(a));import{c as d,h as b,a as T}from"./render.67a9181e.js";import{Q as n,ac as o,k as y,bx as A,bC as F,a9 as g}from"./index.2b1b175d.js";import{u as B,a as L}from"./use-dark.45b36372.js";import{d as W,b as M}from"./use-router-link.c3e45f6a.js";var J=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const t=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:t.value},b(a.default))}}),V=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const t=n(()=>parseInt(e.lines,10)),i=n(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),u=n(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>o("div",{style:u.value,class:i.value},b(a.default))}}),X=d({name:"QItem",props:m(v(v({},B),W),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:a,emit:t}){const{proxy:{$q:i}}=g(),u=L(e,i),{hasRouterLink:x,hasLink:f,linkProps:C,linkClass:Q,linkTag:w,navigateToRouterLink:I}=M(),r=y(null),c=y(null),q=n(()=>e.clickable===!0||f.value===!0||e.tag==="label"),s=n(()=>e.disable!==!0&&q.value===!0),E=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(f.value===!0?Q.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),R=n(()=>{if(e.insetLevel===void 0)return null;const l=i.lang.rtl===!0?"Right":"Left";return{["padding"+l]:16+e.insetLevel*56+"px"}});function S(l){s.value===!0&&(c.value!==null&&(l.qKeyEvent!==!0&&document.activeElement===r.value?c.value.focus():document.activeElement===c.value&&r.value.focus()),x.value===!0&&I(l),t("click",l))}function K(l){if(s.value===!0&&A(l,13)===!0){F(l),l.qKeyEvent=!0;const k=new MouseEvent("click",l);k.qKeyEvent=!0,r.value.dispatchEvent(k)}t("keyup",l)}function $(){const l=T(a.default,[]);return s.value===!0&&l.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:c})),l}return()=>{const l={ref:r,class:E.value,style:R.value,onClick:S,onKeyup:K};return s.value===!0?(l.tabindex=e.tabindex||"0",Object.assign(l,C.value)):q.value===!0&&(l["aria-disabled"]="true"),o(w.value,l,$())}}}),Y=d({name:"QList",props:m(v({},B),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:a}){const t=g(),i=L(e,t.proxy.$q),u=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o("div",{class:u.value},b(a.default))}});export{Y as Q,X as a,J as b,V as c};
