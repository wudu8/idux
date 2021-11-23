import{c,u as b,\u0275 as O,I as g,b as p,d as _}from"./index.418e0b9f.js";import{P as x,f as u,O as $,Q as t,x as P,j,K as G}from"./vendor.379ae99b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const h=Symbol("cardToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S={borderless:c.bool,cover:c.oneOfType([String,c.object()]),header:c.oneOfType([String,c.object()]),hoverable:c.bool,loading:c.bool.def(!1),size:c.oneOf(["sm","md","lg"]),footer:c.array()},w={hoverable:c.bool};var C=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,k=(r,o)=>{var l={};for(var e in r)N.call(r,e)&&o.indexOf(e)<0&&(l[e]=r[e]);if(r!=null&&C)for(var e of C(r))o.indexOf(e)<0&&T.call(r,e)&&(l[e]=r[e]);return l},z=x({name:"IxCard",props:S,setup(r,{slots:o}){const l=b("common"),e=u(()=>`${l.prefixCls}-card`),a=b("card"),s=u(()=>{var n;return(n=r.hoverable)!=null?n:a.hoverable});$(h,{hoverable:s});const d=u(()=>{var n;return((n=o.default)==null?void 0:n.call(o))||[]}),i=u(()=>d.value.some(n=>n.type&&n.type.name==="IxCardGrid")),f=u(()=>{const{borderless:n=a.borderless,loading:y,size:I=a.size}=r,m=i.value,v=e.value;return{[v]:!0,[`${v}-borderless`]:n,[`${v}-hoverable`]:!m&&s.value,[`${v}-loading`]:y,[`${v}-has-grid`]:m,[`${v}-${I}`]:!0}});return()=>{const n=e.value;return t("div",{class:f.value},[V(r,o,n),t(O,{header:r.header},o),B(r,d,i,n),F(r,o,n)])}}});const V=(r,o,l)=>{let e;if(o.cover)e=o.cover();else if(r.cover){const{cover:a}=r,s=P(a)?{src:a}:a;e=t("img",s,null)}return e?t("div",{class:`${l}-cover`},[e]):void 0},B=(r,o,l,e)=>{let a;return r.loading?a=R(e):o.value.length&&(a=l.value?t(g,null,{default:()=>[o.value]}):o.value),a?t("div",{class:`${e}-body`},[a]):void 0},E=[[22],[8,15],[6,18],[13,9],[4,3,16],[8,6,8]],R=r=>{const o=E.map(l=>{const e=l.map(a=>t(p,{span:a,class:`${r}-loading-col`},{default:()=>[t("div",{class:"ix-card-loading-block"},null)]}));return t(g,null,{default:()=>[e]})});return t("div",{class:"ix-card-loading"},[o])},F=(r,o,l)=>{if(!o.footer&&!r.footer)return;let e;return o.footer?e=o.footer():e=r.footer.map(a=>{let s;if(j(a))s=a;else{const d=a,{text:i}=d,f=k(d,["text"]);s=t(_,f,{default:()=>[i]})}return s?t("li",null,[s]):null}),t("ul",{class:`${l}-footer`},[e])};var H=x({name:"IxCardGrid",props:w,setup(r,{slots:o}){const l=b("common"),e=u(()=>`${l.prefixCls}-card-grid`),{hoverable:a}=G(h),s=u(()=>{var d;const i=e.value;return{[i]:!0,[`${i}-hoverable`]:(d=r.hoverable)!=null?d:a.value}});return()=>t(p,{class:s.value},{default:()=>{var d;return[(d=o.default)==null?void 0:d.call(o)]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q=z,q=H;export{Q as I,q as a};
