import{L as e}from"./index.240f5fc1.js";import{a6 as t}from"./vendor.49325c66.js";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class n{constructor(e){const t=this._textarea=document.createElement("textarea"),n=t.style;n.opacity="0",n.position="absolute",n.left=n.top="-999em",t.setAttribute("aria-hidden","true"),t.value=e,document.body.appendChild(t)}copy(){const t=this._textarea;let n=!1;try{if(t){const e=document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),n=document.execCommand("copy"),e&&e.focus()}}catch(o){e.error("cdk/clipboard",o)}return n}destroy(){const e=this._textarea;e&&(e.parentNode&&e.parentNode.removeChild(e),this._textarea=void 0)}}const o=class{static getInstance(){return o.instance||(o.instance=new o),o.instance}constructor(){}copy(e){const t=this.beginCopy(e),n=t.copy();return t.destroy(),n}beginCopy(e){return new n(e)}};let c=o;c.instance=null;const s=()=>{const e=c.getInstance(),n=new Set;let o=!1,s=null;return t((()=>{null!==s&&clearTimeout(s),n.forEach((e=>e.destroy())),n.clear(),o=!0})),{copy:function(t,c=1){return new Promise((r=>{if(c>1){let a=c;const i=e.beginCopy(t);n.add(i);const l=()=>{const e=i.copy();e||!--a||o?(s=null,n.delete(i),i.destroy(),r(e)):s=setTimeout(l,1)};l()}else{const n=e.copy(t);r(n)}}))}}};export{s as u};
