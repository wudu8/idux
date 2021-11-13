import{c as a,u as f,e as C,aB as $,aC as b}from"./index.789a60d9.js";import{P as x,f as t,Q as l}from"./vendor.a2465f65.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k={checkable:a.bool,checked:a.bool,closable:a.bool,color:a.string,icon:a.string,shape:a.oneOf(["round","rect"])};var I=x({name:"IxTag",props:k,setup(c,{slots:s}){const g=f("common"),u=t(()=>`${g.prefixCls}-tag`),m=f("tag"),i=t(()=>{const o=c.color;return o?$(o)||b(o):!1}),p=t(()=>{const{color:o,checkable:n,shape:r=m.shape,checked:h}=c,d=i.value,e=u.value;return{[`${e}`]:!0,[`${e}-${r}`]:r,[`${e}-${o}`]:d,[`${e}-has-color`]:!d&&o,[`${e}-checkable`]:n,[`${e}-checked`]:h}}),v=t(()=>({backgroundColor:i.value?void 0:c.color}));return()=>{var o;const{icon:n}=c,r=s.icon?s.icon():n&&l(C,{name:n},null);return l("span",{class:p.value,style:v.value},[r,l("span",{class:`${u.value}-content`},[(o=s.default)==null?void 0:o.call(s)])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=I;export{y as I};
