import{c as r,f as d,aa as m}from"./index.b0bc66d4.js";import{H as l,K as y,r as $,o,ad as n,d as u,c as f,ah as i,e as v,a7 as _,a8 as c}from"./vendor.01b03999.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const g={description:r.string,image:r.string};var I=(e,t)=>{for(const[a,s]of t)e[a]=s;return e};const k=l({name:"IxEmpty",components:{IxIcon:d},props:g,setup(e){const t=m("empty");return{description$$:y(()=>{var s;return(s=e.description)!=null?s:t.value.description})}}}),x={class:"ix-empty"},h={class:"ix-empty-image"},B=["src"],E={key:0,class:"ix-empty-description"},b={key:1,class:"ix-empty-footer"};function C(e,t,a,s,V,j){const p=$("IxIcon");return o(),n("div",x,[u("div",h,[e.image?(o(),n("img",{key:0,src:e.image,alt:"empty image"},null,8,B)):(o(),f(p,{key:1,name:"empty"}))]),e.description$$||e.$slots.description?(o(),n("div",E,[i(e.$slots,"description",{},()=>[v(_(e.description$$),1)])])):c("v-if",!0),e.$slots.default?(o(),n("div",b,[i(e.$slots,"default")])):c("v-if",!0)])}var N=I(k,[["render",C]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=N;export{S as I};
