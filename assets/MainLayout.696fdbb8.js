var Ae=Object.defineProperty,Fe=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var ye=(e,s,r)=>s in e?Ae(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,N=(e,s)=>{for(var r in s||(s={}))Ne.call(s,r)&&ye(e,r,s[r]);if(be)for(var r of be(s))Ue.call(s,r)&&ye(e,r,s[r]);return e},le=(e,s)=>Fe(e,Ee(s));import{br as A,Q as n,ac as y,bs as ce,af as de,k as p,aY as m,ao as _e,bt as je,bu as G,a9 as Y,as as Ke,al as ge,b3 as Xe,bv as we,aA as $e,bw as Ge,bx as Ye,r as U,aw as Je,by as Ze,a4 as Le,bz as Ce,ay as I,U as K,b1 as $,a2 as _,bA as et,V as tt,a1 as X,D as pe,aG as Se,bB as at,W as ot,aE as nt,ak as lt,I as it,X as rt}from"./index.95299443.js";import{Q as ut}from"./QToolbar.a5365545.js";import{Q as ue,a as st}from"./QScrollObserver.b6e720a1.js";import{Q as ke,a as se,b as ct,c as dt}from"./QItem.9fe04770.js";import{u as ft,a as vt,b as ht,c as mt,d as bt,e as yt,g as ie}from"./selection.6e7343eb.js";import{u as gt,a as wt}from"./use-dark.c1a0b6e7.js";import{T as re}from"./TouchPan.2409f0b5.js";import{b as j}from"./format.2bc25e5f.js";var pt=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:s}){const r=n(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:r.value},ce(s.default))}}),St=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:r}){const{proxy:{$q:f}}=Y(),u=de(G,()=>{console.error("QHeader needs to be child of QLayout")}),d=p(parseInt(e.heightHint,10)),g=p(!0),L=n(()=>e.reveal===!0||u.view.value.indexOf("H")>-1||f.platform.is.ios&&u.isContainer.value===!0),w=n(()=>{if(e.modelValue!==!0)return 0;if(L.value===!0)return g.value===!0?d.value:0;const o=d.value-u.scroll.value.position;return o>0?o:0}),a=n(()=>e.modelValue!==!0||L.value===!0&&g.value!==!0),P=n(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),M=n(()=>"q-header q-layout__section--marginal "+(L.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),T=n(()=>{const o=u.rows.value.top,S={};return o[0]==="l"&&u.left.space===!0&&(S[f.lang.rtl===!0?"right":"left"]=`${u.left.size}px`),o[2]==="r"&&u.right.space===!0&&(S[f.lang.rtl===!0?"left":"right"]=`${u.right.size}px`),S});function c(o,S){u.update("header",o,S)}function q(o,S){o.value!==S&&(o.value=S)}function b({height:o}){q(d,o),c("size",o)}function v(o){P.value===!0&&q(g,!0),r("focusin",o)}m(()=>e.modelValue,o=>{c("space",o),q(g,!0),u.animate()}),m(w,o=>{c("offset",o)}),m(()=>e.reveal,o=>{o===!1&&q(g,e.modelValue)}),m(g,o=>{u.animate(),r("reveal",o)}),m(u.scroll,o=>{e.reveal===!0&&q(g,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const z={};return u.instances.header=z,e.modelValue===!0&&c("size",d.value),c("space",e.modelValue),c("offset",w.value),_e(()=>{u.instances.header===z&&(u.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const o=je(s.default,[]);return e.elevated===!0&&o.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(y(ue,{debounce:0,onResize:b})),y("header",{class:M.value,style:T.value,onFocusin:v},o)}}});const qe=150;var kt=A({name:"QDrawer",inheritAttrs:!1,props:le(N(N({},ft),gt),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...vt,"on-layout","mini-state"],setup(e,{slots:s,emit:r,attrs:f}){const u=Y(),{proxy:{$q:d}}=u,g=wt(e,d),{preventBodyScroll:L}=yt(),{registerTimeout:w}=ht(),a=de(G,()=>{console.error("QDrawer needs to be child of QLayout")});let P,M,T;const c=p(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),q=n(()=>e.mini===!0&&c.value!==!0),b=n(()=>q.value===!0?e.miniWidth:e.width),v=p(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),z=n(()=>e.persistent!==!0&&(c.value===!0||xe.value===!0));function o(t,i){if(B(),t!==!1&&a.animate(),x(0),c.value===!0){const k=a.instances[F.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),D(1),a.isContainer.value!==!0&&L(!0)}else D(0),t!==!1&&ae(!1);w(()=>{t!==!1&&ae(!0),i!==!0&&r("show",t)},qe)}function S(t,i){V(),t!==!1&&a.animate(),D(0),x(R.value*b.value),oe(),i!==!0&&w(()=>{r("hide",t)},qe)}const{show:l,hide:h}=mt({showing:v,hideOnRouteChange:z,handleShow:o,handleHide:S}),{addToHistory:B,removeFromHistory:V}=bt(v,h,z),Q={belowBreakpoint:c,hide:h},C=n(()=>e.side==="right"),R=n(()=>(d.lang.rtl===!0?-1:1)*(C.value===!0?1:-1)),fe=p(0),H=p(!1),J=p(!1),ve=p(b.value*R.value),F=n(()=>C.value===!0?"left":"right"),Z=n(()=>v.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:b.value:0),ee=n(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(C.value?"R":"L")>-1||d.platform.is.ios===!0&&a.isContainer.value===!0),W=n(()=>e.overlay===!1&&v.value===!0&&c.value===!1),xe=n(()=>e.overlay===!0&&v.value===!0&&c.value===!1),Te=n(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&H.value===!1?" hidden":"")),Be=n(()=>({backgroundColor:`rgba(0,0,0,${fe.value*.4})`})),he=n(()=>C.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ze=n(()=>C.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Qe=n(()=>{const t={};return a.header.space===!0&&he.value===!1&&(ee.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&ze.value===!1&&(ee.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),De=n(()=>{const t={width:`${b.value}px`,transform:`translateX(${ve.value}px)`};return c.value===!0?t:Object.assign(t,Qe.value)}),Oe=n(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Pe=n(()=>`q-drawer q-drawer--${e.side}`+(J.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(g.value===!0?" q-drawer--dark q-dark":"")+(H.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(ee.value===!0||W.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(he.value===!0?" q-drawer--top-padding":""))),Me=n(()=>{const t=d.lang.rtl===!0?e.side:F.value;return[[re,We,void 0,{[t]:!0,mouse:!0}]]}),Ve=n(()=>{const t=d.lang.rtl===!0?F.value:e.side;return[[re,me,void 0,{[t]:!0,mouse:!0}]]}),Re=n(()=>{const t=d.lang.rtl===!0?F.value:e.side;return[[re,me,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function te(){Ie(c,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}m(c,t=>{t===!0?(P=v.value,v.value===!0&&h(!1)):e.overlay===!1&&e.behavior!=="mobile"&&P!==!1&&(v.value===!0?(x(0),D(0),oe()):l(!1))}),m(()=>e.side,(t,i)=>{a.instances[i]===Q&&(a.instances[i]=void 0,a[i].space=!1,a[i].offset=0),a.instances[t]=Q,a[t].size=b.value,a[t].space=W.value,a[t].offset=Z.value}),m(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&te()}),m(()=>e.behavior+e.breakpoint,te),m(a.isContainer,t=>{v.value===!0&&L(t!==!0),t===!0&&te()}),m(a.scrollbarWidth,()=>{x(v.value===!0?0:void 0)}),m(Z,t=>{O("offset",t)}),m(W,t=>{r("on-layout",t),O("space",t)}),m(C,()=>{x()}),m(b,t=>{x(),ne(e.miniToOverlay,t)}),m(()=>e.miniToOverlay,t=>{ne(t,b.value)}),m(()=>d.lang.rtl,()=>{x()}),m(()=>e.mini,()=>{e.modelValue===!0&&(He(),a.animate())}),m(q,t=>{r("mini-state",t)});function x(t){t===void 0?ge(()=>{t=v.value===!0?0:b.value,x(R.value*t)}):(a.isContainer.value===!0&&C.value===!0&&(c.value===!0||Math.abs(t)===b.value)&&(t+=R.value*a.scrollbarWidth.value),ve.value=t)}function D(t){fe.value=t}function ae(t){const i=t===!0?"remove":a.isContainer.value!==!0?"add":"";i!==""&&document.body.classList[i]("q-body--drawer-toggle")}function He(){clearTimeout(M),u.proxy&&u.proxy.$el&&u.proxy.$el.classList.add("q-drawer--mini-animate"),J.value=!0,M=setTimeout(()=>{J.value=!1,u&&u.proxy&&u.proxy.$el&&u.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function We(t){if(v.value!==!1)return;const i=b.value,k=j(t.distance.x,0,i);if(t.isFinal===!0){k>=Math.min(75,i)===!0?l():(a.animate(),D(0),x(R.value*i)),H.value=!1;return}x((d.lang.rtl===!0?C.value!==!0:C.value)?Math.max(i-k,0):Math.min(0,k-i)),D(j(k/i,0,1)),t.isFirst===!0&&(H.value=!0)}function me(t){if(v.value!==!0)return;const i=b.value,k=t.direction===e.side,E=(d.lang.rtl===!0?k!==!0:k)?j(t.distance.x,0,i):0;if(t.isFinal===!0){Math.abs(E)<Math.min(75,i)===!0?(a.animate(),D(1),x(0)):h(),H.value=!1;return}x(R.value*E),D(j(1-E/i,0,1)),t.isFirst===!0&&(H.value=!0)}function oe(){L(!1),ae(!0)}function O(t,i){a.update(e.side,t,i)}function Ie(t,i){t.value!==i&&(t.value=i)}function ne(t,i){O("size",t===!0?e.miniWidth:i)}return a.instances[e.side]=Q,ne(e.miniToOverlay,b.value),O("space",W.value),O("offset",Z.value),e.showIfAbove===!0&&e.modelValue!==!0&&v.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Ke(()=>{r("on-layout",W.value),r("mini-state",q.value),P=e.showIfAbove===!0;const t=()=>{(v.value===!0?o:S)(!1,!0)};if(a.totalWidth.value!==0){ge(t);return}T=m(a.totalWidth,()=>{T(),T=void 0,v.value===!1&&e.showIfAbove===!0&&c.value===!1?l(!1):t()})}),_e(()=>{T!==void 0&&T(),clearTimeout(M),v.value===!0&&oe(),a.instances[e.side]===Q&&(a.instances[e.side]=void 0,O("size",0),O("offset",0),O("space",!1))}),()=>{const t=[];c.value===!0&&(e.noSwipeOpen===!1&&t.push(Xe(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Me.value)),t.push(we("div",{ref:"backdrop",class:Te.value,style:Be.value,"aria-hidden":"true",onClick:h},void 0,"backdrop",e.noSwipeBackdrop!==!0&&v.value===!0,()=>Re.value)));const i=q.value===!0&&s.mini!==void 0,k=[y("div",le(N({},f),{key:""+i,class:[Oe.value,f.class]}),i===!0?s.mini():ce(s.default))];return e.elevated===!0&&v.value===!0&&k.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(we("aside",{ref:"content",class:Pe.value,style:De.value},k,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>Ve.value)),y("div",{class:"q-drawer-container"},t)}}}),qt=A({name:"QPageContainer",setup(e,{slots:s}){const{proxy:{$q:r}}=Y(),f=de(G,()=>{console.error("QPageContainer needs to be child of QLayout")});$e(Ge,!0);const u=n(()=>{const d={};return f.header.space===!0&&(d.paddingTop=`${f.header.size}px`),f.right.space===!0&&(d[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${f.right.size}px`),f.footer.space===!0&&(d.paddingBottom=`${f.footer.size}px`),f.left.space===!0&&(d[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${f.left.size}px`),d});return()=>y("div",{class:"q-page-container",style:u.value},ce(s.default))}}),_t=A({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:r}){const{proxy:{$q:f}}=Y(),u=p(null),d=p(f.screen.height),g=p(e.container===!0?0:f.screen.width),L=p({position:0,direction:"down",inflectionPoint:0}),w=p(0),a=p(Ye.value===!0?0:ie()),P=n(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),M=n(()=>e.container===!1?{minHeight:f.screen.height+"px"}:null),T=n(()=>a.value!==0?{[f.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=n(()=>a.value!==0?{[f.lang.rtl===!0?"right":"left"]:0,[f.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function q(l){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};L.value=h,e.onScroll!==void 0&&r("scroll",h)}}function b(l){const{height:h,width:B}=l;let V=!1;d.value!==h&&(V=!0,d.value=h,e.onScrollHeight!==void 0&&r("scroll-height",h),z()),g.value!==B&&(V=!0,g.value=B),V===!0&&e.onResize!==void 0&&r("resize",l)}function v({height:l}){w.value!==l&&(w.value=l,z())}function z(){if(e.container===!0){const l=d.value>w.value?ie():0;a.value!==l&&(a.value=l)}}let o;const S={instances:{},view:n(()=>e.view),isContainer:n(()=>e.container),rootRef:u,height:d,containerHeight:w,scrollbarWidth:a,totalWidth:n(()=>g.value+a.value),rows:n(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:U({size:0,offset:0,space:!1}),right:U({size:300,offset:0,space:!1}),footer:U({size:0,offset:0,space:!1}),left:U({size:300,offset:0,space:!1}),scroll:L,animate(){o!==void 0?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),o=void 0},155)},update(l,h,B){S[l][h]=B}};if($e(G,S),ie()>0){let B=function(){l=null,h.classList.remove("hide-scrollbar")},V=function(){if(l===null){if(h.scrollHeight>f.screen.height)return;h.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(B,300)},Q=function(C){l!==null&&C==="remove"&&(clearTimeout(l),B()),window[`${C}EventListener`]("resize",V)},l=null;const h=document.body;m(()=>e.container!==!0?"add":"remove",Q),e.container!==!0&&Q("add"),Je(()=>{Q("remove")})}return()=>{const l=Ze(s.default,[y(st,{onScroll:q}),y(ue,{onResize:b})]),h=y("div",{class:P.value,style:M.value,ref:e.container===!0?void 0:u,tabindex:-1},l);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:u},[y(ue,{onResize:v}),y("div",{class:"absolute-full",style:T.value},[y("div",{class:"scroll",style:c.value},[h])])]):h}}});const $t=Le({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},color:{type:String,default:""},to:{type:String,default:"#"},icon:{type:String,default:""}}});function Lt(e,s,r,f,u,d){return I(),K(ct,{to:e.to,exact:""},{default:$(()=>[e.icon?(I(),K(ke,{key:0,avatar:""},{default:$(()=>[_(et,{name:e.icon,color:e.color},null,8,["name","color"])]),_:1})):tt("",!0),_(ke,null,{default:$(()=>[_(se,{lines:"1"},{default:$(()=>[X(pe(e.title),1)]),_:1}),_(se,{caption:""},{default:$(()=>[X(pe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Ct=Ce($t,[["render",Lt]]);const xt=[{title:"Planning",caption:"Liste interventions par jour",icon:"date_range",to:"/planning"},{title:"Manquants DMRS",caption:"bas\xE9 sur les Ordres de sorties en cours",icon:"warning_amber",to:"/manquedmrs",color:"red"},{title:"Rotation DMRS",caption:"Taux de rotation par jour des DMRS en %",icon:"recycling",to:"/rotationDmrs"},{title:"KPI",caption:"Indicateurs",icon:"leaderboard",to:"/allChart"},{title:"Capture Nomenclatures",caption:"Scan des codebarres",icon:"qr_code_scanner",to:"/captureNom"},{title:"Search Item",caption:"tests",icon:"build",to:"/searchItem"},{title:"Login",caption:"Login",icon:"login",to:"/"},{title:"TEST",caption:"tests",icon:"build",to:"/planningBar"},{title:"TESTCARD",caption:"testCARD",icon:"build",to:"/mycard"}],Tt=Le({name:"MainLayout",components:{EssentialLink:Ct},setup(){const e=p(!1);return{essentialLinks:xt,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),Bt=X(" DASHBOARD Arsenal "),zt=rt("div",null,"MVO - AQ01-02",-1),Qt=X(" Liens principaux ");function Dt(e,s,r,f,u,d){const g=Se("EssentialLink"),L=Se("router-view");return I(),K(_t,{view:"lHh Lpr lFf"},{default:$(()=>[_(St,{elevated:""},{default:$(()=>[_(ut,null,{default:$(()=>[_(at,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),_(pt,null,{default:$(()=>[Bt]),_:1}),zt]),_:1})]),_:1}),_(kt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":s[0]||(s[0]=w=>e.leftDrawerOpen=w),"show-if-above":"",bordered:""},{default:$(()=>[_(dt,null,{default:$(()=>[_(se,{header:""},{default:$(()=>[Qt]),_:1}),(I(!0),ot(it,null,nt(e.essentialLinks,w=>(I(),K(g,lt({key:w.title},w),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),_(qt,null,{default:$(()=>[_(L)]),_:1})]),_:1})}var Et=Ce(Tt,[["render",Dt]]);export{Et as default};
