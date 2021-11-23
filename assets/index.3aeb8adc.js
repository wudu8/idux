import{L as f}from"./index.418e0b9f.js";import{aj as y}from"./vendor.379ae99b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */class g{constructor(e){const n=this._textarea=document.createElement("textarea"),t=n.style;t.opacity="0",t.position="absolute",t.left=t.top="-999em",n.setAttribute("aria-hidden","true"),n.value=e,document.body.appendChild(n)}copy(){const e=this._textarea;let n=!1;try{if(e){const t=document.activeElement;e.select(),e.setSelectionRange(0,e.value.length),n=document.execCommand("copy"),t&&t.focus()}}catch(t){f.error("cdk/clipboard",t)}return n}destroy(){const e=this._textarea;e&&(e.parentNode&&e.parentNode.removeChild(e),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const s=class{static getInstance(){return s.instance||(s.instance=new s),s.instance}constructor(){}copy(o){const e=this.beginCopy(o),n=e.copy();return e.destroy(),n}beginCopy(o){return new g(o)}};let p=s;p.instance=null;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const x=()=>{const o=p.getInstance(),e=new Set;let n=!1,t=null;y(()=>{t!==null&&clearTimeout(t),e.forEach(c=>c.destroy()),e.clear(),n=!0});function m(c,i=1){return new Promise(l=>{if(i>1){let a=i;const r=o.beginCopy(c);e.add(r);const u=()=>{const d=r.copy();!d&&--a&&!n?t=setTimeout(u,1):(t=null,e.delete(r),r.destroy(),l(d))};u()}else{const a=o.copy(c);l(a)}})}return{copy:m}};export{x as u};
