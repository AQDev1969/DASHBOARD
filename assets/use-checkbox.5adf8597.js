var st=Object.defineProperty,ct=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var ft=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable;var Me=(e,t,l)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,E=(e,t)=>{for(var l in t||(t={}))ft.call(t,l)&&Me(e,l,t[l]);if(ze)for(var l of ze(t))vt.call(t,l)&&Me(e,l,t[l]);return e},P=(e,t)=>ct(e,dt(t));import{Q as u,ac as m,ao as G,al as oe,k as B,aY as z,b$ as fe,aw as mt,T as ht,c0 as gt,c1 as bt,bM as Be,bE as Ze,br as Ee,b6 as Ce,bs as Y,a9 as H,c2 as pt,af as yt,c3 as xt,c4 as Fe,c5 as $e,c6 as Ye,bU as qt,bF as ee,c7 as Ct,c8 as St,ap as kt,aq as wt,am as _t,as as Je,bx as Bt,bT as J,bA as le,c9 as Et,bv as Ft,ca as $t,bR as Pe,bW as Rt,bH as Se,by as Vt}from"./index.930cad1e.js";import{u as Tt,a as At,b as zt,c as Mt,d as Pt,e as Ht,j as It,g as Dt}from"./selection.7ef6608f.js";import{u as Re,a as Ve}from"./use-dark.051ded39.js";import{b as Ot}from"./QItem.9e0f01de.js";const Lt={name:String};function Vl(e){return u(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function jt(e={}){return(t,l,n)=>{t[l](m("input",E({class:"hidden"+(n||"")},e.value)))}}function Tl(e){return u(()=>e.name||e.for)}function Wt(){let e;return G(()=>{e=void 0}),{registerTick(t){e=t,oe(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}const Nt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Al(e,t){const l=B(t.value);return z(t,n=>{oe(()=>{l.value=n})}),{transition:u(()=>"q-transition--"+(l.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:u(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let N=[],ne=[];function Xe(e){ne=ne.filter(t=>t!==e)}function Qt(e){Xe(e),ne.push(e)}function He(e){Xe(e),ne.length===0&&N.length>0&&(N[N.length-1](),N=[])}function et(e){ne.length===0?e():N.push(e)}function Kt(e){N=N.filter(t=>t!==e)}const X=[];function zl(e){return X.find(t=>t.__qPortalInnerRef.value!==null&&t.__qPortalInnerRef.value.contains(e))}function Ut(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return fe(e)}else if(e.__qPortalInnerRef!==void 0){const l=fe(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(t),l):e}e=fe(e)}while(e!=null)}function Ml(e,t,l){for(;l!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(l--,e.$options.name==="QMenu"){e=Ut(e,t);continue}e.hide(t)}e=fe(e)}}function Gt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Zt(e,t,l,n){const i=B(!1),a=B(!1);let o=null;const h={},c=n===!0&&Gt(e);function d(k){if(k===!0){He(h),a.value=!0;return}a.value=!1,i.value===!1&&(c===!1&&o===null&&(o=gt()),i.value=!0,X.push(e.proxy),Qt(h))}function f(k){if(a.value=!1,k!==!0)return;He(h),i.value=!1;const x=X.indexOf(e.proxy);x>-1&&X.splice(x,1),o!==null&&(bt(o),o=null)}return mt(()=>{f(!0)}),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:d,hidePortal:f,portalIsActive:i,portalIsAccessible:a,renderPortal:()=>c===!0?l():i.value===!0?[m(ht,{to:o},l())]:void 0}}const Q=[];let te;function Yt(e){te=e.keyCode===27}function Jt(){te===!0&&(te=!1)}function Xt(e){te===!0&&(te=!1,Ze(e,27)===!0&&Q[Q.length-1](e))}function tt(e){window[e]("keydown",Yt),window[e]("blur",Jt),window[e]("keyup",Xt),te=!1}function el(e){Be.is.desktop===!0&&(Q.push(e),Q.length===1&&tt("addEventListener"))}function Ie(e){const t=Q.indexOf(e);t>-1&&(Q.splice(t,1),Q.length===0&&tt("removeEventListener"))}const K=[];function lt(e){K[K.length-1](e)}function tl(e){Be.is.desktop===!0&&(K.push(e),K.length===1&&document.body.addEventListener("focusin",lt))}function De(e){const t=K.indexOf(e);t>-1&&(K.splice(t,1),K.length===0&&document.body.removeEventListener("focusin",lt))}let re=0;const ll={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Oe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Pl=Ee({name:"QDialog",inheritAttrs:!1,props:P(E(E({},Tt),Nt),{transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}}),emits:[...At,"shake","click","escape-key"],setup(e,{slots:t,emit:l,attrs:n}){const i=H(),a=B(null),o=B(!1),h=B(!1),c=B(!1);let d,f=null,k,x;const r=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:b}=Ht(),{registerTimeout:$,removeTimeout:p}=zt(),{registerTick:R,removeTick:v}=Wt(),{showPortal:F,hidePortal:A,portalIsAccessible:_,renderPortal:g}=Zt(i,a,ut,!0),{hide:y}=Mt({showing:o,hideOnRouteChange:r,handleShow:w,handleHide:ae,processOnMount:!0}),{addToHistory:M,removeFromHistory:D}=Pt(o,y,r),S=u(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${ll[e.position]}`+(c.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),V=u(()=>"q-transition--"+(e.transitionShow===void 0?Oe[e.position][0]:e.transitionShow)),q=u(()=>"q-transition--"+(e.transitionHide===void 0?Oe[e.position][1]:e.transitionHide)),I=u(()=>h.value===!0?q.value:V.value),W=u(()=>`--q-transition-duration: ${e.transitionDuration}ms`),O=u(()=>o.value===!0&&e.seamless!==!0),ie=u(()=>e.autoClose===!0?{onClick:at}:{}),s=u(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${O.value===!0?"modal":"seamless"}`,n.class]);z(o,C=>{oe(()=>{h.value=C})}),z(()=>e.maximized,C=>{o.value===!0&&be(C)}),z(O,C=>{b(C),C===!0?(tl(pe),el(ge)):(De(pe),Ie(ge))});function w(C){p(),v(),M(),f=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,be(e.maximized),F(),c.value=!0,e.noFocus!==!0&&(document.activeElement!==null&&document.activeElement.blur(),R(L)),$(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:j,bottom:ye}=document.activeElement.getBoundingClientRect(),{innerHeight:Ae}=window,xe=window.visualViewport!==void 0?window.visualViewport.height:Ae;j>0&&ye>xe/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-xe,ye>=Ae?1/0:Math.ceil(document.scrollingElement.scrollTop+ye-xe/2))),document.activeElement.scrollIntoView()}x=!0,a.value.click(),x=!1}F(!0),c.value=!1,l("show",C)},e.transitionDuration)}function ae(C){p(),v(),D(),Te(!0),c.value=!0,A(),f!==null&&(f.focus(),f=null),$(()=>{A(!0),c.value=!1,l("hide",C)},e.transitionDuration)}function L(C){et(()=>{let j=a.value;j===null||j.contains(document.activeElement)===!0||(j=j.querySelector(C||"[autofocus], [data-autofocus]")||j,j.focus({preventScroll:!0}))})}function he(){L(),l("shake");const C=a.value;C!==null&&(C.classList.remove("q-animate--scale"),C.classList.add("q-animate--scale"),clearTimeout(d),d=setTimeout(()=>{a.value!==null&&(C.classList.remove("q-animate--scale"),L())},170))}function ge(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&he():(l("escape-key"),y()))}function Te(C){clearTimeout(d),(C===!0||o.value===!0)&&(be(!1),e.seamless!==!0&&(b(!1),De(pe),Ie(ge))),C!==!0&&(f=null)}function be(C){C===!0?k!==!0&&(re<1&&document.body.classList.add("q-body--dialog"),re++,k=!0):k===!0&&(re<2&&document.body.classList.remove("q-body--dialog"),re--,k=!1)}function at(C){x!==!0&&(y(C),l("click",C))}function rt(C){e.persistent!==!0&&e.noBackdropDismiss!==!0?y(C):e.noShake!==!0&&he()}function pe(C){_.value===!0&&pt(a.value,C.target)!==!0&&L('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:L,shake:he,__updateRefocusTarget(C){f=C||null}}),G(Te);function ut(){return m("div",P(E({},n),{class:s.value}),[m(Ce,{name:"q-transition--fade",appear:!0},()=>O.value===!0?m("div",{class:"q-dialog__backdrop fixed-full",style:W.value,"aria-hidden":"true",onMousedown:rt}):null),m(Ce,{name:I.value,appear:!0},()=>o.value===!0?m("div",E({ref:a,class:S.value,style:W.value,tabindex:-1},ie.value),Y(t.default)):null)])}return g}});function nl({validate:e,resetValidation:t,requiresQForm:l}){const n=yt(xt,!1);if(n!==!1){const{props:i,proxy:a}=H();Object.assign(a,{validate:e,resetValidation:t}),z(()=>i.disable,o=>{o===!0?(typeof t=="function"&&t(),n.unbindComponent(a)):n.bindComponent(a)}),i.disable!==!0&&n.bindComponent(a),G(()=>{i.disable!==!0&&n.unbindComponent(a)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const Le=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,je=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,We=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ue=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,se=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Ne={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Le.test(e),hexaColor:e=>je.test(e),hexOrHexaColor:e=>We.test(e),rgbColor:e=>ue.test(e),rgbaColor:e=>se.test(e),rgbOrRgbaColor:e=>ue.test(e)||se.test(e),hexOrRgbColor:e=>Le.test(e)||ue.test(e),hexaOrRgbaColor:e=>je.test(e)||se.test(e),anyColor:e=>We.test(e)||ue.test(e)||se.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const ol=P(E({},Fe),{min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean}),ke=50,nt=2*ke,ot=nt*Math.PI,il=Math.round(ot*1e3)/1e3;var Hl=Ee({name:"QCircularProgress",props:P(E({},ol),{value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean}),setup(e,{slots:t}){const{proxy:{$q:l}}=H(),n=$e(e),i=u(()=>{const x=(l.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(l.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-x}deg)`:`rotate3d(0, 0, 1, ${x-90}deg)`}}),a=u(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),o=u(()=>nt/(1-e.thickness/2)),h=u(()=>`${o.value/2} ${o.value/2} ${o.value} ${o.value}`),c=u(()=>Ot(e.value,e.min,e.max)),d=u(()=>ot*(1-(c.value-e.min)/(e.max-e.min))),f=u(()=>e.thickness/2*o.value);function k({thickness:x,offset:r,color:b,cls:$}){return m("circle",{class:"q-circular-progress__"+$+(b!==void 0?` text-${b}`:""),style:a.value,fill:"transparent",stroke:"currentColor","stroke-width":x,"stroke-dasharray":il,"stroke-dashoffset":r,cx:o.value,cy:o.value,r:ke})}return()=>{const x=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&x.push(m("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ke-f.value/2,cx:o.value,cy:o.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&x.push(k({cls:"track",thickness:f.value,offset:0,color:e.trackColor})),x.push(k({cls:"circle",thickness:f.value,offset:d.value,color:e.color}));const r=[m("svg",{class:"q-circular-progress__svg",style:i.value,viewBox:h.value,"aria-hidden":"true"},x)];return e.showValue===!0&&r.push(m("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[m("div",c.value)])),m("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:n.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:c.value},Ye(t.internal,r))}}});function Z(e,t,l,n){const i=[];return e.forEach(a=>{n(a)===!0?i.push(a):t.push({failedPropValidation:l,file:a})}),i}function ce(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),ee(e)}const Il={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},al=["rejected"];function Dl({editable:e,dnd:t,getFileInput:l,addFilesToQueue:n}){const{props:i,emit:a,proxy:o}=H(),h=B(null),c=u(()=>i.accept!==void 0?i.accept.split(",").map(v=>(v=v.trim(),v==="*"?"*/":(v.endsWith("/*")&&(v=v.slice(0,v.length-1)),v.toUpperCase()))):null),d=u(()=>parseInt(i.maxFiles,10)),f=u(()=>parseInt(i.maxTotalSize,10));function k(v){if(e.value)if(v!==Object(v)&&(v={target:null}),v.target!==null&&v.target.matches('input[type="file"]')===!0)v.clientX===0&&v.clientY===0&&qt(v);else{const F=l();F&&F!==v.target&&F.click(v)}}function x(v){e.value&&v&&n(null,v)}function r(v,F,A,_){let g=Array.from(F||v.target.files);const y=[],M=()=>{y.length>0&&a("rejected",y)};if(i.accept!==void 0&&c.value.indexOf("*/")===-1&&(g=Z(g,y,"accept",S=>c.value.some(V=>S.type.toUpperCase().startsWith(V)||S.name.toUpperCase().endsWith(V))),g.length===0))return M();if(i.maxFileSize!==void 0){const S=parseInt(i.maxFileSize,10);if(g=Z(g,y,"max-file-size",V=>V.size<=S),g.length===0)return M()}i.multiple!==!0&&g.length>0&&(g=[g[0]]),g.forEach(S=>{S.__key=S.webkitRelativePath+S.lastModified+S.name+S.size});const D=A.map(S=>S.__key);if(g=Z(g,y,"duplicate",S=>D.includes(S.__key)===!1),g.length===0)return M();if(i.maxTotalSize!==void 0){let S=_===!0?A.reduce((V,q)=>V+q.size,0):0;if(g=Z(g,y,"max-total-size",V=>(S+=V.size,S<=f.value)),g.length===0)return M()}if(typeof i.filter=="function"){const S=i.filter(g);g=Z(g,y,"filter",V=>S.includes(V))}if(i.maxFiles!==void 0){let S=_===!0?A.length:0;if(g=Z(g,y,"max-files",()=>(S++,S<=d.value)),g.length===0)return M()}if(M(),g.length>0)return g}function b(v){ce(v),t.value!==!0&&(t.value=!0)}function $(v){ee(v),v.relatedTarget!==h.value&&(t.value=!1)}function p(v){ce(v);const F=v.dataTransfer.files;F.length>0&&n(null,F),t.value=!1}function R(v){if(t.value===!0)return m("div",{ref:h,class:`q-${v}__dnd absolute-full`,onDragenter:ce,onDragover:ce,onDragleave:$,onDrop:p})}return Object.assign(o,{pickFiles:k,addFiles:x}),{pickFiles:k,addFiles:x,onDragover:b,processFiles:r,getDndNode:R,maxFilesNumber:d,maxTotalSizeNumber:f}}const rl=[...al,"start","finish","added","removed"],ul=()=>!0;function sl(e){const t={};return e.forEach(l=>{t[l]=ul}),t}sl(rl);let qe,de=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const cl=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const l=new Uint8Array(t);return e.getRandomValues(l),l}}return t=>{const l=[];for(let n=t;n>0;n--)l.push(Math.floor(Math.random()*256));return l}})(),Qe=4096;function dl(){(qe===void 0||de+16>Qe)&&(de=0,qe=cl(Qe));const e=Array.prototype.slice.call(qe,de,de+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}const fl=[!0,!1,"ondemand"],vl={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>fl.includes(e)}};function ml(e,t){const{props:l,proxy:n}=H(),i=B(!1),a=B(null),o=B(null);nl({validate:b,resetValidation:r});let h=0,c;const d=u(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length>0),f=u(()=>l.disable!==!0&&d.value===!0),k=u(()=>l.error===!0||i.value===!0),x=u(()=>typeof l.errorMessage=="string"&&l.errorMessage.length>0?l.errorMessage:a.value);z(()=>l.modelValue,()=>{$()}),z(()=>l.reactiveRules,R=>{R===!0?c===void 0&&(c=z(()=>l.rules,()=>{$(!0)})):c!==void 0&&(c(),c=void 0)},{immediate:!0}),z(e,R=>{R===!0?o.value===null&&(o.value=!1):o.value===!1&&(o.value=!0,f.value===!0&&l.lazyRules!=="ondemand"&&t.value===!1&&p())});function r(){h++,t.value=!1,o.value=null,i.value=!1,a.value=null,p.cancel()}function b(R=l.modelValue){if(f.value!==!0)return!0;const v=++h;t.value!==!0&&l.lazyRules!==!0&&(o.value=!0);const F=(_,g)=>{i.value!==_&&(i.value=_);const y=g||void 0;a.value!==y&&(a.value=y),t.value=!1},A=[];for(let _=0;_<l.rules.length;_++){const g=l.rules[_];let y;if(typeof g=="function"?y=g(R):typeof g=="string"&&Ne[g]!==void 0&&(y=Ne[g](R)),y===!1||typeof y=="string")return F(!0,y),!1;y!==!0&&y!==void 0&&A.push(y)}return A.length===0?(F(!1),!0):(t.value=!0,Promise.all(A).then(_=>{if(_===void 0||Array.isArray(_)===!1||_.length===0)return v===h&&F(!1),!0;const g=_.find(y=>y===!1||typeof y=="string");return v===h&&F(g!==void 0,g),g===void 0},_=>(v===h&&(console.error(_),F(!0)),!1)))}function $(R){f.value===!0&&l.lazyRules!=="ondemand"&&(o.value===!0||l.lazyRules!==!0&&R!==!0)&&p()}const p=Ct(b,0);return G(()=>{c!==void 0&&c(),p.cancel()}),Object.assign(n,{resetValidation:r,validate:b}),St(n,"hasError",()=>k.value),{isDirtyModel:o,hasRules:d,hasError:k,errorMessage:x,validate:b,resetValidation:r}}const Ke=/^on[A-Z]/;function hl(e,t){const l={listeners:B({}),attributes:B({})};function n(){const i={},a={};for(const o in e)o!=="class"&&o!=="style"&&Ke.test(o)===!1&&(i[o]=e[o]);for(const o in t.props)Ke.test(o)===!0&&(a[o]=t.props[o]);l.attributes.value=i,l.listeners.value=a}return kt(n),n(),l}function we(e){return e===void 0?`f_${dl()}`:e}function gl(e){return e!=null&&(""+e).length>0}const Ol=P(E(E({},Re),vl),{label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]}),Ll=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function jl(){const{props:e,attrs:t,proxy:l,vnode:n}=H();return{isDark:Ve(e,l.$q),editable:u(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:B(!1),focused:B(!1),hasPopupOpen:!1,splitAttrs:hl(t,n),targetUid:B(we(e.for)),rootRef:B(null),targetRef:B(null),controlRef:B(null)}}function Wl(e){const{props:t,emit:l,slots:n,attrs:i,proxy:a}=H(),{$q:o}=a;let h;e.hasValue===void 0&&(e.hasValue=u(()=>gl(t.modelValue))),e.emitValue===void 0&&(e.emitValue=s=>{l("update:modelValue",s)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:D,onFocusout:S}),Object.assign(e,{clearValue:V,onControlFocusin:D,onControlFocusout:S,focus:y}),e.computedCounter===void 0&&(e.computedCounter=u(()=>{if(t.counter!==!1){const s=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,w=t.maxlength!==void 0?t.maxlength:t.maxValues;return s+(w!==void 0?" / "+w:"")}}));const{isDirtyModel:c,hasRules:d,hasError:f,errorMessage:k,resetValidation:x}=ml(e.focused,e.innerLoading),r=e.floatingLabel!==void 0?u(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):u(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),b=u(()=>t.bottomSlots===!0||t.hint!==void 0||d.value===!0||t.counter===!0||t.error!==null),$=u(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),p=u(()=>`q-field row no-wrap items-start q-field--${$.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(r.value===!0?" q-field--float":"")+(v.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(f.value===!0?" q-field--error":"")+(f.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&b.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),R=u(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(f.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),v=u(()=>t.labelSlot===!0||t.label!==void 0),F=u(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&f.value!==!0?` text-${t.labelColor}`:"")),A=u(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:r.value,modelValue:t.modelValue,emitValue:e.emitValue})),_=u(()=>{const s={for:e.targetUid.value};return t.disable===!0?s["aria-disabled"]="true":t.readonly===!0&&(s["aria-readonly"]="true"),s});z(()=>t.for,s=>{e.targetUid.value=we(s)});function g(){const s=document.activeElement;let w=e.targetRef!==void 0&&e.targetRef.value;w&&(s===null||s.id!==e.targetUid.value)&&(w.hasAttribute("tabindex")===!0||(w=w.querySelector("[tabindex]")),w&&w!==s&&w.focus({preventScroll:!0}))}function y(){et(g)}function M(){Kt(g);const s=document.activeElement;s!==null&&e.rootRef.value.contains(s)&&s.blur()}function D(s){clearTimeout(h),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",s))}function S(s,w){clearTimeout(h),h=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,l("blur",s)),w!==void 0&&w())})}function V(s){ee(s),o.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",t.modelValue),oe(()=>{x(),o.platform.is.mobile!==!0&&(c.value=!1)})}function q(){const s=[];return n.prepend!==void 0&&s.push(m("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},n.prepend())),s.push(m("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},I())),f.value===!0&&t.noErrorIcon===!1&&s.push(O("error",[m(le,{name:o.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?s.push(O("inner-loading-append",n.loading!==void 0?n.loading():[m(Et,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&s.push(O("inner-clearable-append",[m(le,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||o.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:V})])),n.append!==void 0&&s.push(m("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},n.append())),e.getInnerAppend!==void 0&&s.push(O("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&s.push(e.getControlChild()),s}function I(){const s=[];return t.prefix!==void 0&&t.prefix!==null&&s.push(m("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&s.push(e.getShadowControl()),e.getControl!==void 0?s.push(e.getControl()):n.rawControl!==void 0?s.push(n.rawControl()):n.control!==void 0&&s.push(m("div",P(E({ref:e.targetRef,class:"q-field__native row",tabindex:-1},e.splitAttrs.attributes.value),{"data-autofocus":t.autofocus===!0||void 0}),n.control(A.value))),v.value===!0&&s.push(m("div",{class:F.value},Y(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&s.push(m("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),s.concat(Y(n.default))}function W(){let s,w;f.value===!0?k.value!==null?(s=[m("div",{role:"alert"},k.value)],w=`q--slot-error-${k.value}`):(s=Y(n.error),w="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(s=[m("div",t.hint)],w=`q--slot-hint-${t.hint}`):(s=Y(n.hint),w="q--slot-hint"));const ae=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&ae===!1&&s===void 0)return;const L=m("div",{key:w,class:"q-field__messages col"},s);return m("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?L:m(Ce,{name:"q-transition--field-message"},()=>L),ae===!0?m("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function O(s,w){return w===null?null:m("div",{key:s,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},w)}Object.assign(a,{focus:y,blur:M});let ie=!1;return wt(()=>{ie=!0}),_t(()=>{ie===!0&&t.autofocus===!0&&a.focus()}),Je(()=>{Bt.value===!0&&t.for===void 0&&(e.targetUid.value=we()),t.autofocus===!0&&a.focus()}),G(()=>{clearTimeout(h)}),function(){const w=e.getControl===void 0&&n.control===void 0?E(P(E({},e.splitAttrs.attributes.value),{"data-autofocus":t.autofocus}),_.value):_.value;return m("label",E({ref:e.rootRef,class:[p.value,i.class],style:i.style},w),[n.before!==void 0?m("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},n.before()):null,m("div",{class:"q-field__inner relative-position col self-stretch"},[m("div",E({ref:e.controlRef,class:R.value,tabindex:-1},e.controlEvents),q()),b.value===!0?W():null]),n.after!==void 0?m("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},n.after()):null])}}const bl={xs:8,sm:10,md:14,lg:20,xl:24};var Nl=Ee({name:"QChip",props:P(E(E({},Re),Fe),{dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}}),emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=H(),i=Ve(e,n),a=$e(e,bl),o=u(()=>e.selected===!0||e.icon!==void 0),h=u(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),c=u(()=>e.iconRemove||n.iconSet.chip.remove),d=u(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),f=u(()=>{const p=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(p?` text-${p} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(d.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),k=u(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function x(p){p.keyCode===13&&r(p)}function r(p){e.disable||(l("update:selected",!e.selected),l("click",p))}function b(p){(p.keyCode===void 0||p.keyCode===13)&&(ee(p),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function $(){const p=[];d.value===!0&&p.push(m("div",{class:"q-focus-helper"})),o.value===!0&&p.push(m(le,{class:"q-chip__icon q-chip__icon--left",name:h.value}));const R=e.label!==void 0?[m("div",{class:"ellipsis"},[e.label])]:void 0;return p.push(m("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ye(t.default,R))),e.iconRight&&p.push(m(le,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&p.push(m(le,P(E({class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:c.value},k.value),{onClick:b,onKeyup:b}))),p}return()=>{if(e.modelValue===!1)return;const p={class:f.value,style:a.value};return d.value===!0&&Object.assign(p,k.value,{onClick:r,onKeyup:x}),Ft("div",p,$(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[$t,e.ripple]])}}});const Ql={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Kl({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:n,proxy:i,emit:a}=H(),o=B(null);let h;function c(r){return o.value===null?!1:r===void 0||r.touches===void 0||r.touches.length<=1}const d={};l===void 0&&(Object.assign(d,{hide(r){i.hide(r)},toggle(r){i.toggle(r),r.qAnchorHandled=!0},toggleKey(r){Ze(r,13)===!0&&d.toggle(r)},contextClick(r){i.hide(r),J(r),oe(()=>{i.show(r),r.qAnchorHandled=!0})},prevent:J,mobileTouch(r){if(d.mobileCleanup(r),c(r)!==!0)return;i.hide(r),o.value.classList.add("non-selectable");const b=r.target;Pe(d,"anchor",[[b,"touchmove","mobileCleanup","passive"],[b,"touchend","mobileCleanup","passive"],[b,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),h=setTimeout(()=>{i.show(r),r.qAnchorHandled=!0},300)},mobileCleanup(r){o.value.classList.remove("non-selectable"),clearTimeout(h),e.value===!0&&r!==void 0&&It()}}),l=function(r=n.contextMenu){if(n.noParentEvent===!0||o.value===null)return;let b;r===!0?i.$q.platform.is.mobile===!0?b=[[o.value,"touchstart","mobileTouch","passive"]]:b=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:b=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],Pe(d,"anchor",b)});function f(){Rt(d,"anchor")}function k(r){for(o.value=r;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;l()}function x(){if(n.target===!1||n.target==="")o.value=null;else if(n.target===!0)k(i.$el.parentNode);else{let r=n.target;if(typeof n.target=="string")try{r=document.querySelector(n.target)}catch{r=void 0}r!=null?(o.value=r.$el||r,l()):(o.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return z(()=>n.contextMenu,r=>{o.value!==null&&(f(),l(r))}),z(()=>n.target,()=>{o.value!==null&&f(),x()}),z(()=>n.noParentEvent,r=>{o.value!==null&&(r===!0?f():l())}),Je(()=>{x(),t!==!0&&n.modelValue===!0&&o.value===null&&a("update:modelValue",!1)}),G(()=>{clearTimeout(h),f()}),{anchorEl:o,canShow:c,anchorEvents:d}}function Ul(e,t){const l=B(null);let n;function i(h,c){const d=`${c!==void 0?"add":"remove"}EventListener`,f=c!==void 0?c:n;h!==window&&h[d]("scroll",f,Se.passive),window[d]("scroll",f,Se.passive),n=c}function a(){l.value!==null&&(i(l.value),l.value=null)}const o=z(()=>e.noParentEvent,()=>{l.value!==null&&(a(),t())});return G(o),{localScrollTarget:l,unconfigureScrollTarget:a,changeScrollEvent:i}}let it;const{notPassiveCapture:ve}=Se,U=[];function me(e){clearTimeout(it);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=X.length-1;for(;l>=0;){const n=X[l].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=U.length-1;n>=0;n--){const i=U[n];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Gl(e){U.push(e),U.length===1&&(document.addEventListener("mousedown",me,ve),document.addEventListener("touchstart",me,ve))}function Zl(e){const t=U.findIndex(l=>l===e);t>-1&&(U.splice(t,1),U.length===0&&(clearTimeout(it),document.removeEventListener("mousedown",me,ve),document.removeEventListener("touchstart",me,ve)))}let Ue,Ge;function Yl(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Jl(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const _e={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{_e[`${e}#ltr`]=e,_e[`${e}#rtl`]=e});function Xl(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:_e[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function pl(e,t){let{top:l,left:n,right:i,bottom:a,width:o,height:h}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],n-=t[0],a+=t[1],i+=t[0],o+=t[0],h+=t[1]),{top:l,left:n,right:i,bottom:a,width:o,height:h,middle:n+(i-n)/2,center:l+(a-l)/2}}function yl(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function en(e){if(Be.is.ios===!0&&window.visualViewport!==void 0){const h=document.body.style,{offsetLeft:c,offsetTop:d}=window.visualViewport;c!==Ue&&(h.setProperty("--q-pe-left",c+"px"),Ue=c),d!==Ge&&(h.setProperty("--q-pe-top",d+"px"),Ge=d)}let t;const{scrollLeft:l,scrollTop:n}=e.el;if(e.absoluteOffset===void 0)t=pl(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:h,left:c}=e.anchorEl.getBoundingClientRect(),d=h+e.absoluteOffset.top,f=c+e.absoluteOffset.left;t={top:d,left:f,width:1,height:1,right:f+1,center:d,middle:f,bottom:d+1}}let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=t.width+"px",e.cover===!0&&(i.minHeight=t.height+"px")),Object.assign(e.el.style,i);const a=yl(e.el),o={top:t[e.anchorOrigin.vertical]-a[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-a[e.selfOrigin.horizontal]};xl(o,t,a,e.anchorOrigin,e.selfOrigin),i={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(i.maxHeight=o.maxHeight+"px",t.height>o.maxHeight&&(i.minHeight=i.maxHeight)),o.maxWidth!==void 0&&(i.maxWidth=o.maxWidth+"px",t.width>o.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==l&&(e.el.scrollLeft=l)}function xl(e,t,l,n,i){const a=l.bottom,o=l.right,h=Dt(),c=window.innerHeight-h,d=document.body.clientWidth;if(e.top<0||e.top+a>c)if(i.vertical==="center")e.top=t[n.vertical]>c/2?Math.max(0,c-a):0,e.maxHeight=Math.min(a,c);else if(t[n.vertical]>c/2){const f=Math.min(c,n.vertical==="center"?t.center:n.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(a,f),e.top=Math.max(0,f-a)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(a,c-e.top);if(e.left<0||e.left+o>d)if(e.maxWidth=Math.min(o,d),i.horizontal==="middle")e.left=t[n.horizontal]>d/2?Math.max(0,d-o):0;else if(t[n.horizontal]>d/2){const f=Math.min(d,n.horizontal==="middle"?t.middle:n.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(o,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(o,d-e.left)}let ql=!1;{const e=document.createElement("div"),t=document.createElement("div");e.setAttribute("dir","rtl"),e.style.width="1px",e.style.height="1px",e.style.overflow="auto",t.style.width="1000px",t.style.height="1px",document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,ql=e.scrollLeft>=0,e.remove()}const Cl=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Sl=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,kl=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;function tn(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.composing!==!0)return;l.target.composing=!1,e(l)}else l.type==="compositionupdate"?typeof l.data=="string"&&Cl.test(l.data)===!1&&Sl.test(l.data)===!1&&kl.test(l.data)===!1&&(l.target.composing=!1):l.target.composing=!0}}function wl(e,t){const l=B(null),n=u(()=>e.disable!==!0?null:m("span",{ref:l,class:"no-outline",tabindex:-1}));function i(a){const o=t.value;a!==void 0&&a.type.indexOf("key")===0?o!==null&&document.activeElement!==o&&o.contains(document.activeElement)===!0&&o.focus():l.value!==null&&(a===void 0||o!==null&&o.contains(a.target)===!0)&&l.value.focus()}return{refocusTargetEl:n,refocusTarget:i}}var _l={xs:30,sm:35,md:40,lg:50,xl:60};const ln=P(E(E(E({},Re),Fe),Lt),{modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]}),nn=["update:modelValue"];function on(e,t){const{props:l,slots:n,emit:i,proxy:a}=H(),{$q:o}=a,h=Ve(l,o),c=B(null),{refocusTargetEl:d,refocusTarget:f}=wl(l,c),k=$e(l,_l),x=u(()=>l.val!==void 0&&Array.isArray(l.modelValue)),r=u(()=>x.value===!0?l.modelValue.indexOf(l.val):-1),b=u(()=>x.value===!0?r.value>-1:l.modelValue===l.trueValue),$=u(()=>x.value===!0?r.value===-1:l.modelValue===l.falseValue),p=u(()=>b.value===!1&&$.value===!1),R=u(()=>l.disable===!0?-1:l.tabindex||0),v=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(h.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),F=u(()=>{const q=b.value===!0?"truthy":$.value===!0?"falsy":"indet",I=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?b.value===!0:$.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${I}`}),A=u(()=>{const q={type:"checkbox"};return l.name!==void 0&&Object.assign(q,{"^checked":b.value===!0?"checked":void 0,name:l.name,value:x.value===!0?l.val:l.trueValue}),q}),_=jt(A),g=u(()=>{const q={tabindex:R.value,role:"checkbox","aria-label":l.label,"aria-checked":p.value===!0?"mixed":b.value===!0?"true":"false"};return l.disable===!0&&(q["aria-disabled"]="true"),q});function y(q){q!==void 0&&(ee(q),f(q)),l.disable!==!0&&i("update:modelValue",M(),q)}function M(){if(x.value===!0){if(b.value===!0){const q=l.modelValue.slice();return q.splice(r.value,1),q}return l.modelValue.concat([l.val])}if(b.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if($.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function D(q){(q.keyCode===13||q.keyCode===32)&&ee(q)}function S(q){(q.keyCode===13||q.keyCode===32)&&y(q)}const V=t(b,p);return Object.assign(a,{toggle:y}),()=>{const q=V();l.disable!==!0&&_(q,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const I=[m("div",{class:F.value,style:k.value},q)];d.value!==null&&I.push(d.value);const W=l.label!==void 0?Vt(n.default,[l.label]):Y(n.default);return W!==void 0&&I.push(m("div",{class:`q-${e}__label q-anchor--skip`},W)),m("div",P(E({ref:c,class:v.value},g.value),{onClick:y,onKeydown:D,onKeyup:S}),I)}}export{el as A,Gl as B,et as C,Ut as D,ql as E,Tl as F,gl as G,Nl as H,tn as I,ln as J,nn as K,on as L,dl as M,Il as N,al as O,Dl as P,Hl as Q,jt as a,Vl as b,ol as c,Pl as d,Ml as e,Ol as f,zl as g,Ll as h,Wl as i,jl as j,Ql as k,Nt as l,Jl as m,Wt as n,Al as o,Ul as p,Kl as q,Zt as r,tl as s,De as t,Lt as u,Yl as v,Zl as w,Ie as x,en as y,Xl as z};
