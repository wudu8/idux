import{E as e,v as l,U as o,P as t,y as a,G as s,k as i,X as n,a6 as u,D as r,r as c,o as d,Z as p,d as v,_ as b,e as m,a9 as f,au as h,H as x,$ as y,a1 as g,a5 as I,b as C,a2 as k,F as w,ae as $,c as O,a as S,w as E,a0 as M,a3 as V}from"./vendor.49325c66.js";import{f as R,c as W,t as K,A as D,aa as H,u as P,z as A,J as B,K as L,w as _,W as j}from"./index.240f5fc1.js";import{I as F}from"./index.bbddf362.js";import{I as T}from"./index.2b5cbdee.js";var G=e({components:{IxIcon:R},props:{removeable:W.bool,disabled:W.bool,label:W.string},emits:["delete"]});const z={class:"ix-select-item-label"};G.render=function(e,l,o,t,a,s){const i=c("IxIcon");return d(),p("div",{class:g(["ix-select-item",{"ix-select-item-disabled":e.disabled}])},[v("span",z,[b(e.$slots,"default",{},(()=>[m(f(e.label),1)]))]),e.removeable&&!e.disabled?(d(),p("span",{key:0,class:"ix-select-item-remove",onClick:l[0]||(l[0]=h((l=>e.$emit("delete")),["stop"]))},[x(i,{name:"close"})])):y("v-if",!0)],2)};var N=e({props:{value:W.any,autofocus:W.bool,disabled:W.bool,open:W.bool,showInput:W.bool,showMirror:W.bool},emits:["compositionstart","compositionend","input","change","focus","blur"],setup(e,{emit:a}){const s=l(""),i=l(null),n=l(null),u=()=>{if(e.showMirror){const e=i.value,l=n.value;l.innerText=` ${e.value}`,s.value=`${l.scrollWidth}px`}},r=l(!1),c=e=>{if(a("input",e),r.value)return;const{value:l}=e.target;a("change",l),u()},d=e=>{i.value.focus(e)};return o((()=>{t((()=>e.open),(e=>e&&d()),{immediate:!0}),u()})),{inputWidth:s,inputRef:i,mirrorRef:n,onCompositionStart:e=>{r.value=!0,a("compositionstart",e)},onCompositionEnd:e=>{r.value&&(r.value=!1,c(e)),a("compositionend",e)},onInput:c,focus:d,blur:()=>{i.value.blur()},clear:()=>{i.value.value="",a("change",""),u()}}}});const q=["value","autofocus","disabled"],X={key:0,ref:"mirrorRef",class:"ix-select-input-mirror","aria-hidden":"true"};N.render=function(e,l,o,t,a,s){return d(),p("div",{class:"ix-select-input",style:I({width:e.inputWidth})},[v("input",{ref:"inputRef",class:"ix-select-input-inner",value:e.value,autocomplete:"off",autofocus:e.autofocus,disabled:e.disabled,style:I({opacity:e.showInput?void 0:0}),onInput:l[0]||(l[0]=(...l)=>e.onInput&&e.onInput(...l)),onCompositionstart:l[1]||(l[1]=(...l)=>e.onCompositionStart&&e.onCompositionStart(...l)),onCompositionend:l[2]||(l[2]=(...l)=>e.onCompositionEnd&&e.onCompositionEnd(...l)),onFocus:l[3]||(l[3]=l=>e.$emit("focus",l)),onBlur:l[4]||(l[4]=l=>e.$emit("blur",l))},null,44,q),e.showMirror?(d(),p("span",X,null,512)):y("v-if",!0)],4)};const J={value:W.any,open:W.bool.def(!1),autofocus:W.bool.def(!1),borderless:W.bool,clearable:W.bool,compareWith:W.func().def(((e,l)=>e===l)),control:K,disabled:W.bool.def(!1),overlayClass:W.string,empty:W.string,filterOption:W.oneOfType([W.func(),Boolean]).def(!0),inputable:W.bool,maxLabelCount:W.number.def(Number.MAX_SAFE_INTEGER),multiple:W.bool.def(!1),multipleLimit:W.number.def(Number.MAX_SAFE_INTEGER),labelKey:W.string,options:W.array(),placeholder:W.string,searchable:W.bool,size:W.oneOf(["large","medium","small"]),suffix:W.string,valueKey:W.string},U={disabled:W.bool.def(!1),label:W.string.isRequired,value:W.any.isRequired},Z={label:W.string.isRequired,options:W.array().def((()=>[]))},Q=Symbol("selectToken"),Y=Symbol("visibleChangeToken"),ee=(e,l)=>l.label.toLowerCase().includes(e.toLowerCase());var le=e({name:"IxSelectOption",components:{IxCheckbox:T},props:U,setup(e){const{selectProps:l,inputValue:o,activatedValue:r,activateHandler:c,selectedValue:d,selectHandler:p,selectOptionHandler:v}=a(Q)||{},b=s((()=>{const t=null==o?void 0:o.value,a=null==l?void 0:l.filterOption;if(t&&a){return(i(a)?a:ee)(t,e)}return!0})),m=s((()=>null==l?void 0:l.compareWith(null==r?void 0:r.value,e.value))),f=s((()=>!!(null==d?void 0:d.value.some((o=>null==l?void 0:l.compareWith(o,e.value))))));t(f,(l=>n((()=>null==v?void 0:v(l,e)))),{immediate:b.value});const h=s((()=>{const l=e.disabled;return{"ix-option":!0,"ix-option-disabled":l,"ix-option-active":!l&&m.value,"ix-option-selected":!l&&f.value}})),x=s((()=>null==l?void 0:l.multiple)),y=a(Y);return t(b,(e=>n((()=>null==y?void 0:y(e)))),{immediate:!0}),u((()=>{b.value&&(null==y||y(!1))})),{visible:b,classes:h,showCheckbox:x,selected:f,onMouseEnter:()=>{e.disabled||null==c||c(e.value)},onClick:()=>{e.disabled||null==p||p(e.value)}}}});const oe={key:0,class:"ix-option-checkbox"},te={class:"ix-option-label"};le.render=function(e,l,o,t,a,s){const i=c("IxCheckbox");return C((d(),p("div",{class:g(e.classes),onMouseenter:l[0]||(l[0]=(...l)=>e.onMouseEnter&&e.onMouseEnter(...l)),onClick:l[1]||(l[1]=h(((...l)=>e.onClick&&e.onClick(...l)),["stop"]))},[e.showCheckbox?(d(),p("span",oe,[x(i,{checked:e.selected,disabled:e.disabled,readonly:""},null,8,["checked","disabled"])])):y("v-if",!0),v("span",te,[b(e.$slots,"default",{},(()=>[m(f(e.label),1)]))])],34)),[[k,e.visible]])};var ae=e({name:"IxSelectOptionGroup",components:{SelectOption:le},props:Z,setup(){const e=l(0),o=s((()=>e.value>0));r(Y,(l=>{l?e.value++:e.value--}));const i=a(Y);return t(o,(e=>n((()=>null==i?void 0:i(e)))),{immediate:o.value}),u((()=>{o.value&&(null==i||i(!1))})),{visible:o}}});const se={class:"ix-option-group"},ie={class:"ix-option-group-label"};ae.render=function(e,l,o,t,a,s){const i=c("SelectOption");return d(),p(w,null,[C(v("div",se,[v("span",ie,[b(e.$slots,"label",{},(()=>[m(f(e.label),1)]))])],512),[[k,e.visible]]),(d(!0),p(w,null,$(e.options,(e=>(d(),O(i,{key:e.value,disabled:e.disabled,label:e.label,value:e.value},null,8,["disabled","label","value"])))),128)),e.options.length?y("v-if",!0):b(e.$slots,"default",{key:0})],64)};var ne=e({components:{SelectOption:le,SelectOptionGroup:ae,IxEmpty:F},props:{options:W.array().def((()=>[])),empty:W.string},setup(){const e=l(0),o=s((()=>0===e.value));return r(Y,(l=>{l?e.value++:e.value--})),{isEmpty:o}}});const ue={class:"ix-option-container"},re={class:"ix-option-container-empty"};ne.render=function(e,l,o,t,a,s){const i=c("SelectOptionGroup"),n=c("SelectOption"),u=c("IxEmpty");return d(),p("div",ue,[(d(!0),p(w,null,$(e.options,(e=>(d(),p(w,{key:e.value},[e.children?(d(),O(i,{key:0,label:e.label,options:e.children},null,8,["label","options"])):(d(),O(n,{key:1,disabled:e.disabled,label:e.label,value:e.value},null,8,["disabled","label","value"]))],64)))),128)),e.options.length?y("v-if",!0):b(e.$slots,"default",{key:0}),C(v("div",re,[b(e.$slots,"empty",{},(()=>[x(u,{description:e.empty},null,8,["description"])]))],512),[[k,e.isEmpty]])])};var ce=Object.defineProperty,de=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,be=(e,l,o)=>l in e?ce(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,me=(e,l)=>{for(var o in l||(l={}))pe.call(l,o)&&be(e,o,l[o]);if(de)for(var o of de(l))ve.call(l,o)&&be(e,o,l[o]);return e},fe=(e,l)=>{var o={};for(var t in e)pe.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&de)for(var t of de(e))l.indexOf(t)<0&&ve.call(e,t)&&(o[t]=e[t]);return o},he=e({name:"IxSelect",components:{IxPortal:D,IxIcon:R,SelectItem:G,SelectInput:N,SelectOptionContainer:ne},directives:{clickOutside:H},props:J,emits:["update:value","update:open","blur","change","clear","focus","scrollToBottom","compositionstart","compositionend","input","inputChange"],setup(e,{emit:a}){const i=P("select"),n=l([]),c=(e=>{const a=A({scrollStrategy:"reposition",placement:"bottom",trigger:"manual",offset:[0,8],hideDelay:0,showDelay:0}),{triggerRef:i,overlayRef:n,initialize:r,destroy:c,visibility:d,show:p,hide:v,update:b}=a,m=l(""),f=s((()=>"264px")),h=()=>{var e;m.value=(null==(e=i.value)?void 0:e.getBoundingClientRect().width)+"px"},x=()=>{h(),e.multiple&&b()};return o((()=>{r(),h(),B(i.value,x),t((()=>e.open),(e=>e?p():v()),{immediate:!0}),e.autofocus&&p(100)})),u((()=>{L(i.value,x),c()})),{triggerRef:i,overlayRef:n,visibility:d,show:p,hide:v,overlayMinWidth:m,overlayMaxHeight:f}})(e),{visibility:d,show:p,hide:v}=c,b=fe(c,["visibility","show","hide"]),m=((e,l)=>s((()=>{const o=e.options||[],t=e.labelKey||l.labelKey,a=e.valueKey||l.valueKey,s=[],i=new Map;return o.forEach((e=>{const l={label:e[t],value:e[a],disabled:e.disabled},o=e.groupLabel;if(o)if(i.has(o))i.get(o).children.push(l);else{const e={label:o,value:o,children:[l]};i.set(o,e)}else s.push(l)})),i.forEach((e=>s.push(e))),s})))(e,i),f=(e=>{const{emit:a}=V(),i=_(),n=s((()=>i.disabled)),u=l(""),r=l(j(i.value)),c=l(null),d=l(!1),p=l(!1),v=l(!0),b=()=>{const l=0===r.value.length;p.value=e.multiple||!l&&!d.value&&!u.value,v.value=l&&!d.value&&!u.value},m=l(!1);return t((()=>i.value),(e=>{const l=j(e);0===l.length&&0===r.value.length||(r.value=l,b())})),t((()=>r.value),(l=>{var o;const t=e.multiple?l:l[0];i.value!==t&&(null==(o=i.setValue)||o.call(i,t),a("change",t))})),o((()=>{b()})),{disabled:n,inputValue:u,activatedValue:c,selectedValue:r,showItem:p,showPlaceholder:v,isActive:m,onClear:e=>{r.value=[],b(),a("clear",e)},onItemDelete:l=>{r.value=r.value.filter((o=>!e.compareWith(l.value,o)))},onCompositionStart:e=>{d.value=!0,b(),a("compositionstart",e)},onCompositionEnd:e=>{d.value&&(d.value=!1,b()),a("compositionend",e)},onInputValueChange:e=>{e!==u.value&&(u.value=e,b(),a("inputChange",e))},onFocus:e=>{m.value=!0,a("focus",e)},onBlur:e=>{var l;null==(l=i.markAsBlurred)||l.call(i),m.value=!1,a("blur",e)}}})(e),{disabled:h,inputValue:x,activatedValue:y,selectedValue:g,isActive:I}=f,C=fe(f,["disabled","inputValue","activatedValue","selectedValue","isActive"]),k=((e,l,o,t,a)=>s((()=>{var s,i,n,u,r;const c=e.multiple,d=null!=(s=e.borderless)?s:l.borderless,p=null!=(i=e.clearable)?i:l.clearable,v=null!=(n=e.searchable)?n:l.searchable,b=null!=(u=e.size)?u:l.size,m=null!=(r=e.suffix)?r:l.suffix,f=a.value;return{"ix-select":!0,"ix-select-single":!c,"ix-select-multiple":c,"ix-select-opened":o.value,"ix-select-active":t.value,"ix-select-borderless":d,"ix-select-disabled":f,"ix-select-clearable":!f&&p,"ix-select-searchable":!f&&(v||c),"ix-select-show-suffix":!!m||!c,[`ix-select-${b}`]:!0}})))(e,i,d,I,h),{selectInput:w,focus:$,blur:O,clear:S}=(()=>{const e=l(null);return{selectInput:e,focus:()=>{var l;null==(l=e.value)||l.focus()},blur:()=>{var l;null==(l=e.value)||l.blur()},clear:()=>{var l;null==(l=e.value)||l.clear()}}})();((e,l,o,t,a,s,i,n)=>{r(Q,{selectProps:e,inputValue:l,activatedValue:o,activateHandler:e=>{o.value=e},selectedValue:t,selectHandler:l=>{const o=t.value,a=o.findIndex((o=>e.compareWith(o,l)));e.multiple?(-1===a?o.length<e.multipleLimit&&(t.value=[...o,l]):t.value=o.filter(((e,l)=>l!==a)),i(),n()):(-1===a&&(t.value=[l]),s())},selectOptionHandler:(l,o)=>{let t=a.value;const s=t.findIndex((l=>e.compareWith(l.value,o.value)));e.multiple?t=l?-1===s?[...t,o]:t:s>-1?t.filter(((e,l)=>l!==s)):t:l?t=[o]:s>-1&&(t=[]),a.value=t}})})(e,x,y,g,n,v,$,S);const E=s((()=>{const l=e.maxLabelCount,o=n.value,t=o.slice(0,l);if(o.length>l){const e=`+ ${o.length-l} ...`,a=o.slice(l);t.push({label:e,value:a,disabled:!1,isMax:!0})}return t}));t(d,(e=>{e||S(),a("update:open",e)}));const M=s((()=>{const l=e.suffix;return l||(e.searchable&&I.value?"search":"down")}));return me(me({disabled$$:h,focus:$,blur:O,onClickOutside:()=>v(),classes:k,onClick:()=>{h.value||(e.multiple&&$(),d.value&&(e.searchable||e.multiple)||(d.value?v():p()))},onKeyDown:e=>{console.log("Todo onKeyDown",e)},selectedItems:E,selectInput:w,inputValue:x,suffixIcon:M,visibility:d,normalOptions:m},b),C)}});const xe={key:0,class:"ix-select-placeholder"},ye={key:0,class:"ix-select-suffix"};he.render=function(e,l,o,t,a,s){const i=c("SelectItem"),n=c("SelectInput"),u=c("IxIcon"),r=c("SelectOptionContainer"),V=c("IxPortal"),R=S("click-outside");return C((d(),p("div",{ref:"triggerRef",class:g(e.classes),onClick:l[3]||(l[3]=(...l)=>e.onClick&&e.onClick(...l))},[v("div",{class:"ix-select-selector",onKeydown:l[1]||(l[1]=(...l)=>e.onKeyDown&&e.onKeyDown(...l))},[(d(!0),p(w,null,$(e.selectedItems,(l=>C((d(),O(i,{key:l.value,removeable:e.multiple&&!l.isMax,disabled:e.disabled$$||l.disabled,label:l.label,onDelete:o=>e.onItemDelete(l)},{default:E((()=>[l.isMax?b(e.$slots,"customMaxLabel",{key:0,option:l}):b(e.$slots,"customLabel",{key:1,option:l})])),_:2},1032,["removeable","disabled","label","onDelete"])),[[k,e.showItem]]))),128)),x(n,{ref:"selectInput",value:e.inputValue,autofocus:e.autofocus,disabled:e.disabled$$,open:e.open,showInput:e.multiple||e.searchable||e.inputable,showMirror:e.multiple,onChange:e.onInputValueChange,onInput:l[0]||(l[0]=l=>e.$emit("input",l)),onCompositionstart:e.onCompositionStart,onCompositionend:e.onCompositionEnd,onFocus:e.onFocus,onBlur:e.onBlur},null,8,["value","autofocus","disabled","open","showInput","showMirror","onChange","onCompositionstart","onCompositionend","onFocus","onBlur"]),e.showPlaceholder?(d(),p("div",xe,[b(e.$slots,"placeholder",{},(()=>[m(f(e.placeholder),1)]))])):y("v-if",!0)],32),e.suffix||e.$slots.suffix||!e.multiple?(d(),p("div",ye,[b(e.$slots,"suffix",{},(()=>[x(u,{name:e.suffixIcon},null,8,["name"])]))])):y("v-if",!0),e.clearable&&!e.disabled$$&&e.selectedItems.length?(d(),p("div",{key:1,class:"ix-select-clear",onClick:l[2]||(l[2]=h(((...l)=>e.onClear&&e.onClear(...l)),["stop"]))},[x(u,{name:"close-circle"})])):y("v-if",!0),x(V,{target:"ix-select-container"},{default:E((()=>[x(M,null,{default:E((()=>[C(x(r,{ref:"overlayRef",class:g(e.overlayClass),style:I({minWidth:e.overlayMinWidth,maxHeight:e.overlayMaxHeight}),options:e.normalOptions,empty:e.empty},{empty:E((()=>[b(e.$slots,"empty")])),default:E((()=>[b(e.$slots,"default")])),_:3},8,["class","style","options","empty"]),[[k,e.visibility]])])),_:3})])),_:3})],2)),[[R,e.onClickOutside]])};const ge=he,Ie=le;export{Ie as I,ge as a};
