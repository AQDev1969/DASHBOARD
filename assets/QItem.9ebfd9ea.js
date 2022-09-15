var $=Object.defineProperty,P=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var h=(e,a,t)=>a in e?$(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))F.call(a,t)&&h(e,t,a[t]);if(_)for(var t of _(a))N.call(a,t)&&h(e,t,a[t]);return e},m=(e,a)=>P(e,j(a));import{br as d,Q as n,ac as o,bv as b,a9 as g,bD as T,bE as A,k as y,bF as W,bG as G,bs as M}from"./index.2638693e.js";import{u as B,a as L}from"./use-dark.a96081f2.js";var z=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const t=n(()=>parseInt(e.lines,10)),i=n(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),u=n(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>o("div",{style:u.value,class:i.value},b(a.default))}}),H=d({name:"QList",props:m(v({},B),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:a}){const t=g(),i=L(e,t.proxy.$q),u=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o("div",{class:u.value},b(a.default))}}),J=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const t=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:t.value},b(a.default))}}),V=d({name:"QItem",props:m(v(v({},B),T),{tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:a,emit:t}){const{proxy:{$q:i}}=g(),u=L(e,i),{hasRouterLink:x,hasLink:f,linkProps:Q,linkClass:C,linkTag:w,navigateToRouterLink:E}=A(),r=y(null),c=y(null),q=n(()=>e.clickable===!0||f.value===!0||e.tag==="label"),s=n(()=>e.disable!==!0&&q.value===!0),I=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?C.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),R=n(()=>{if(e.insetLevel===void 0)return null;const l=i.lang.rtl===!0?"Right":"Left";return{["padding"+l]:16+e.insetLevel*56+"px"}});function S(l){s.value===!0&&(c.value!==null&&(l.qKeyEvent!==!0&&document.activeElement===r.value?c.value.focus():document.activeElement===c.value&&r.value.focus()),x.value===!0&&E(l),t("click",l))}function D(l){if(s.value===!0&&W(l,13)===!0){G(l),l.qKeyEvent=!0;const k=new MouseEvent("click",l);k.qKeyEvent=!0,r.value.dispatchEvent(k)}t("keyup",l)}function K(){const l=M(a.default,[]);return s.value===!0&&l.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:c})),l}return()=>{const l={ref:r,class:I.value,style:R.value,onClick:S,onKeyup:D};return s.value===!0?(l.tabindex=e.tabindex||"0",Object.assign(l,Q.value)):q.value===!0&&(l["aria-disabled"]="true"),o(w.value,l,K())}}});export{J as Q,z as a,V as b,H as c};
