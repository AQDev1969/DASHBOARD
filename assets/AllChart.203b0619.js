import{br as y,af as x,Q as h,ac as C,bs as E,bu as P,bw as b,a9 as I,bz as V,a3 as _,a4 as $,aG as s,ay as D,U as L,b1 as a,ch as l,X as n,a2 as e}from"./index.930cad1e.js";import{Q as c}from"./QCard.b34cd61a.js";import"./use-dark.051ded39.js";var Q=y({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(r,{slots:p}){const{proxy:{$q:i}}=I(),t=x(P);x(b,()=>{console.error("QPage needs to be child of QPageContainer")});const u=h(()=>{const o=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof r.styleFn=="function"){const d=t.isContainer.value===!0?t.containerHeight.value:i.screen.height;return r.styleFn(o,d)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-o+"px":i.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":i.screen.height-o+"px"}}),m=h(()=>`q-page ${r.padding===!0?" q-layout-padding":""}`);return()=>C("main",{class:m.value,style:u.value},E(p.default))}});const O=_(()=>l(()=>import("./ApexBar.7e553395.js"),["assets/ApexBar.7e553395.js","assets/get-css-var.23548d6a.js","assets/index.930cad1e.js","assets/index.ddf4a8eb.css"])),R=_(()=>l(()=>import("./ApexColumn.3fef0c71.js"),["assets/ApexColumn.3fef0c71.js","assets/get-css-var.23548d6a.js","assets/index.930cad1e.js","assets/index.ddf4a8eb.css"])),T=_(()=>l(()=>import("./ApexLine.ee0f26e3.js"),["assets/ApexLine.ee0f26e3.js","assets/get-css-var.23548d6a.js","assets/index.930cad1e.js","assets/index.ddf4a8eb.css"])),k=_(()=>l(()=>import("./ApexDonut.215a4053.js"),["assets/ApexDonut.215a4053.js","assets/get-css-var.23548d6a.js","assets/index.930cad1e.js","assets/index.ddf4a8eb.css"])),B=_(()=>l(()=>import("./ApexCandlestick.65994353.js"),["assets/ApexCandlestick.65994353.js","assets/get-css-var.23548d6a.js","assets/index.930cad1e.js","assets/index.ddf4a8eb.css"])),q=_(()=>l(()=>import("./ApexArea.ff30d048.js"),["assets/ApexArea.ff30d048.js","assets/get-css-var.23548d6a.js","assets/index.930cad1e.js","assets/index.ddf4a8eb.css"])),F=$({name:"PageIndex",components:{ApexBar:O,ApexLine:T,ApexColumn:R,ApexDonut:k,ApexCandlestick:B,ApexArea:q}}),w={class:"row q-col-gutter-sm"},z={class:"col-md-6 col-xs-12"},H={class:"col-md-6 col-xs-12"},K={class:"col-md-6 col-xs-12"},N={class:"col-md-6 col-xs-12"},j={class:"col-md-6 col-xs-12"},G={class:"col-md-6 col-xs-12"};function S(r,p,i,t,u,m){const o=s("apex-bar"),d=s("apex-donut"),f=s("apex-column"),v=s("apex-line"),g=s("apex-candlestick"),A=s("apex-area");return D(),L(Q,{padding:""},{default:a(()=>[n("div",w,[n("div",z,[e(c,null,{default:a(()=>[e(o)]),_:1})]),n("div",H,[e(c,{class:"fit"},{default:a(()=>[e(d)]),_:1})]),n("div",K,[e(c,null,{default:a(()=>[e(f)]),_:1})]),n("div",N,[e(c,null,{default:a(()=>[e(v)]),_:1})]),n("div",j,[e(c,null,{default:a(()=>[e(g)]),_:1})]),n("div",G,[e(c,null,{default:a(()=>[e(A)]),_:1})])])]),_:1})}var M=V(F,[["render",S]]);export{M as default};
