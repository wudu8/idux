import{c as u,u as C,U as d,W as w,X as $}from"./index.001b24a5.js";import{P as h,f as s,o as i,$ as v,a0 as f,d as k,F as x,e as V,a1 as _,a2 as p,ai as N,aw as B}from"./vendor.a2465f65.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S={count:u.oneOfType([Number,String]).def(0),showZero:u.bool,overflowCount:u.number,dot:u.bool,color:u.string};var I=(e,n)=>{for(const[o,t]of n)e[o]=t;return e};const T=h({name:"IxBadge",props:S,setup(e,{slots:n}){const o=C("badge"),t=s(()=>{var r;return(r=e.showZero)!=null?r:o.showZero}),a=s(()=>{var r;return(r=e.dot)!=null?r:o.dot}),c=s(()=>{var r;return(r=e.overflowCount)!=null?r:o.overflowCount}),b=s(()=>d(n)),l=s(()=>d(n,"count")),g=P(e,b,l,t,a),m=z(e,l,a),y=Z(e,l,t,a,c);return{classes:g,styles:m,countValue:y,hasCountSlot:l}}}),Z=(e,n,o,t,a)=>s(()=>!n.value&&!t.value?!o.value&&+e.count==0?!1:w(e.count)?e.count>$(a.value,Number.MAX_VALUE)?`${a.value}+`:`${e.count}`:e.count:!1),z=(e,n,o)=>s(()=>{var t;const a=(t=e.color)!=null?t:"";return n.value?{color:a}:o.value?{backgroundColor:a}:{backgroundColor:a}}),P=(e,n,o,t,a)=>s(()=>({"ix-badge-empty":!n.value,"ix-badge-slot-count":o.value,"ix-badge-dot":!o.value&&a.value,"ix-badge-count":!o.value&&!a.value,"ix-badge-hide-zero":!o.value&&!a.value&&!t.value&&+e.count==0})),j={class:"ix-badge-wrapper"};function A(e,n,o,t,a,c){return i(),v("span",j,[f(e.$slots,"default"),k("sup",{class:N(["ix-badge",e.classes]),style:B(e.styles)},[e.hasCountSlot?f(e.$slots,"count",{key:0}):e.countValue?(i(),v(x,{key:1},[V(_(e.countValue),1)],2112)):p("v-if",!0)],6)])}var D=I(T,[["render",A]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=D;export{U as I};
