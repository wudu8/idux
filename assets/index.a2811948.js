import{c as a,u as o,S as e,T as u,U as s}from"./index.3d3216c0.js";import{E as t,G as l,o as n,ae as r,ai as c,d as v,F as d,e as i,a7 as b,a8 as g,ad as p,at as f}from"./vendor.56ae3a09.js";var x=t({name:"IxBadge",props:{count:a.oneOfType([Number,String]).def(0),showZero:a.bool,overflowCount:a.number,dot:a.bool,color:a.string},setup(a,{slots:u}){const s=o("badge"),t=l((()=>{var o;return null!=(o=a.showZero)?o:s.showZero})),n=l((()=>{var o;return null!=(o=a.dot)?o:s.dot})),r=l((()=>{var o;return null!=(o=a.overflowCount)?o:s.overflowCount})),c=l((()=>e(u))),v=l((()=>e(u,"count")));return{classes:y(a,c,v,t,n),styles:w(a,v,n),countValue:m(a,v,t,n,r),hasCountSlot:v}}});const m=(a,o,e,t,n)=>l((()=>!o.value&&!t.value&&(!(!e.value&&0==+a.count)&&(u(a.count)?a.count>s(n.value,Number.MAX_VALUE)?`${n.value}+`:`${a.count}`:a.count)))),w=(a,o,e)=>l((()=>{var u;const s=null!=(u=a.color)?u:"";return o.value?{color:s}:(e.value,{backgroundColor:s})})),y=(a,o,e,u,s)=>l((()=>({"ix-badge-empty":!o.value,"ix-badge-slot-count":e.value,"ix-badge-dot":!e.value&&s.value,"ix-badge-count":!e.value&&!s.value,"ix-badge-hide-zero":!e.value&&!s.value&&!u.value&&0==+a.count}))),h={class:"ix-badge-wrapper"};x.render=function(a,o,e,u,s,t){return n(),r("span",h,[c(a.$slots,"default"),v("sup",{class:p(["ix-badge",a.classes]),style:f(a.styles)},[a.hasCountSlot?c(a.$slots,"count",{key:0}):a.countValue?(n(),r(d,{key:1},[i(b(a.countValue),1)],2112)):g("v-if",!0)],6)])};const C=x;export{C as I};
