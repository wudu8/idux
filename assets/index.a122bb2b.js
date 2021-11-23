import{c as u,u as C,Y as d,Z as $,$ as h}from"./index.418e0b9f.js";import{P as k,f as s,o as i,$ as v,a0 as f,d as w,F as x,e as V,a1 as _,a2 as p,ad as N,av as B}from"./vendor.379ae99b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S={count:u.oneOfType([Number,String]).def(0),showZero:u.bool,overflowCount:u.number,dot:u.bool,color:u.string};var Z=(e,n)=>{for(const[o,t]of n)e[o]=t;return e};const I=k({name:"IxBadge",props:S,setup(e,{slots:n}){const o=C("badge"),t=s(()=>{var r;return(r=e.showZero)!=null?r:o.showZero}),a=s(()=>{var r;return(r=e.dot)!=null?r:o.dot}),c=s(()=>{var r;return(r=e.overflowCount)!=null?r:o.overflowCount}),b=s(()=>d(n)),l=s(()=>d(n,"count")),g=P(e,b,l,t,a),m=z(e,l,a),y=T(e,l,t,a,c);return{classes:g,styles:m,countValue:y,hasCountSlot:l}}}),T=(e,n,o,t,a)=>s(()=>!n.value&&!t.value?!o.value&&+e.count==0?!1:$(e.count)?e.count>h(a.value,Number.MAX_VALUE)?`${a.value}+`:`${e.count}`:e.count:!1),z=(e,n,o)=>s(()=>{var t;const a=(t=e.color)!=null?t:"";return n.value?{color:a}:o.value?{backgroundColor:a}:{backgroundColor:a}}),P=(e,n,o,t,a)=>s(()=>({"ix-badge-empty":!n.value,"ix-badge-slot-count":o.value,"ix-badge-dot":!o.value&&a.value,"ix-badge-count":!o.value&&!a.value,"ix-badge-hide-zero":!o.value&&!a.value&&!t.value&&+e.count==0})),j={class:"ix-badge-wrapper"};function A(e,n,o,t,a,c){return i(),v("span",j,[f(e.$slots,"default"),w("sup",{class:N(["ix-badge",e.classes]),style:B(e.styles)},[e.hasCountSlot?f(e.$slots,"count",{key:0}):e.countValue?(i(),v(x,{key:1},[V(_(e.countValue),1)],2112)):p("v-if",!0)],6)])}var D=Z(I,[["render",A]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=D;export{G as I};
