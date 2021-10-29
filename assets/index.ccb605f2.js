import{c as u,u as C,R as d,S as h,T as x}from"./index.b0bc66d4.js";import{H as k,K as s,o as i,ad as v,ah as f,d as w,F as V,e as _,a7 as $,a8 as p,ac as N,as as S}from"./vendor.01b03999.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B={count:u.oneOfType([Number,String]).def(0),showZero:u.bool,overflowCount:u.number,dot:u.bool,color:u.string};var T=(e,t)=>{for(const[o,n]of t)e[o]=n;return e};const I=k({name:"IxBadge",props:B,setup(e,{slots:t}){const o=C("badge"),n=s(()=>{var r;return(r=e.showZero)!=null?r:o.showZero}),a=s(()=>{var r;return(r=e.dot)!=null?r:o.dot}),c=s(()=>{var r;return(r=e.overflowCount)!=null?r:o.overflowCount}),b=s(()=>d(t)),l=s(()=>d(t,"count")),g=j(e,b,l,n,a),m=z(e,l,a),y=Z(e,l,n,a,c);return{classes:g,styles:m,countValue:y,hasCountSlot:l}}}),Z=(e,t,o,n,a)=>s(()=>!t.value&&!n.value?!o.value&&+e.count==0?!1:h(e.count)?e.count>x(a.value,Number.MAX_VALUE)?`${a.value}+`:`${e.count}`:e.count:!1),z=(e,t,o)=>s(()=>{var n;const a=(n=e.color)!=null?n:"";return t.value?{color:a}:o.value?{backgroundColor:a}:{backgroundColor:a}}),j=(e,t,o,n,a)=>s(()=>({"ix-badge-empty":!t.value,"ix-badge-slot-count":o.value,"ix-badge-dot":!o.value&&a.value,"ix-badge-count":!o.value&&!a.value,"ix-badge-hide-zero":!o.value&&!a.value&&!n.value&&+e.count==0})),A={class:"ix-badge-wrapper"};function D(e,t,o,n,a,c){return i(),v("span",A,[f(e.$slots,"default"),w("sup",{class:N(["ix-badge",e.classes]),style:S(e.styles)},[e.hasCountSlot?f(e.$slots,"count",{key:0}):e.countValue?(i(),v(V,{key:1},[_($(e.countValue),1)],2112)):p("v-if",!0)],6)])}var E=T(I,[["render",D]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=E;export{G as I};
