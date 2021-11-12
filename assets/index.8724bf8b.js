import{c as a,z as P,u as _,A as y,F as O,C as R,D as S,e as j,i as u}from"./index.001b24a5.js";import{P as A,f as n,K as D,Z as E,Q as t}from"./vendor.a2465f65.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K={checked:a.bool,control:P,autofocus:a.bool.def(!1),disabled:a.bool.def(!1),labels:a.arrayOf(String).def(()=>[]),loading:a.bool.def(!1),size:a.oneOf(["sm","md","lg"]).def("md"),"onUpdate:checked":a.emit(),onChange:a.emit(),onBlur:a.emit(),onFocus:a.emit()};var V=A({name:"IxSwitch",props:K,setup(l,{expose:h,slots:i}){const g=_("common"),r=n(()=>`${g.prefixCls}-switch`),{elementRef:C,focus:d,blur:x}=y(),f=D(O,null);h({focus:d,blur:x});const{accessor:s,control:k}=R({valueKey:"checked"});S(k);const c=n(()=>s.valueRef.value),m=n(()=>{var e;return(e=l.disabled)!=null?e:s.disabled.value}),F=()=>{m.value||l.loading||(u(l.onChange,!c.value),s.setValue(!c.value))},$=e=>{u(l.onFocus,e)},I=e=>{u(l.onBlur,e),s.markAsBlurred()},w=n(()=>{var e;return(e=l.size)!=null?e:f==null?void 0:f.size.value}),z=n(()=>{const{loading:e}=l,o=r.value;return{[o]:!0,[`${o}-checked`]:c.value,[`${o}-disabled`]:m.value,[`${o}-loading`]:e,[`${o}-${w.value}`]:!0}});return E(()=>l.autofocus&&d()),()=>{var e,o;const v=c.value,B=(o=(e=i.label)==null?void 0:e.call(i,{checked:v}))!=null?o:l.labels[v?0:1],b=r.value;return t("button",{ref:C,type:"button",class:z.value,onClick:F,onFocus:$,onBlur:I},[l.loading&&t("span",{class:`${b}-loading-icon`},[t(j,{name:"loading"},null)]),t("span",{class:`${b}-label`},[B])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T=V;export{T as I};
