import{g as e}from"./get-css-var.23548d6a.js";import{bz as t,a4 as o,aG as s,ay as n,U as p}from"./index.930cad1e.js";const i=o({name:"ApexBar",data(){return{options:{title:{text:"Charge Pr\xE9paration",align:"left"},chart:{id:"apex-bar"},colors:[e("positive"),e("primary")],xaxis:{categories:["Ophtalmo","Vasculaire","Ortho","Stomato","ORL","Ortho"]},plotOptions:{bar:{horizontal:!0,columnWidth:"55%",endingShape:"rounded"}}},series:[{name:"Pr\xE9par\xE9",data:[20,40,40,10,22,12]},{name:"A pr\xE9parer",data:[30,40,45,50,49,60]}]}}});function c(a,l,m,d,h,u){const r=s("apexchart");return n(),p(r,{height:"300",type:"bar",options:a.options,series:a.series},null,8,["options","series"])}var _=t(i,[["render",c]]);export{_ as default};
