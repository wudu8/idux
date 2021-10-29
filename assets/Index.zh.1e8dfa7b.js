import{I as P,a as T}from"./index.2c264b52.js";import{_ as v,e as C,a as A,D as z,f as M,I as q,b as S}from"./index.b0bc66d4.js";import{_ as b}from"./GlobalCodeBox.75cd63e4.js";import{H as f,Q as E,a as D,o as u,ad as d,b as h,N as t,w as c,a3 as N,d as n,F,e as s,D as x,r as g,c as B,a8 as y,ag as U,y as j}from"./vendor.01b03999.js";import{u as O}from"./index.1697be33.js";import"./index.13acc08f.js";const H=f({setup(){const{initialize:a,overlayRef:o,triggerRef:r,update:l,arrowRef:i,visibility:k,hide:e}=O({visible:!1,trigger:"click",placement:"top",scrollStrategy:"reposition",offset:[5,5],showDelay:0,hideDelay:100,allowEnter:!0});return E(a),{overlayRef:o,triggerRef:r,handleClick:()=>{l({trigger:"hover"})},arrowRef:i,visibility:k,hide:e}}}),L=s("Click"),V=s("Update Trigger"),G={ref:"overlayRef"},W=s(" tooltip "),Q={ref:"arrowRef"};function J(a,o,r,l,i,k){const e=C,p=D("click-outside");return u(),d(F,null,[h(t(e,{ref:"triggerRef"},{default:c(()=>[L]),_:1},512),[[p,()=>a.hide()]]),t(e,{onClick:a.handleClick},{default:c(()=>[V]),_:1},8,["onClick"]),h(n("div",G,[W,n("div",Q,null,512)],512),[[N,a.visibility]])],64)}var K=v(H,[["render",J]]);const X=f({name:"cdk-overlay-Basic",components:{"raw-demo":K},setup(){const{lang:a}=x(A);return{lang:a}}}),Y={key:0},Z=n("ul",null,[n("li",null,"\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A\u6D6E\u5C42"),n("li",null,"\u5982\u4F55\u521D\u59CB\u5316\u6D6E\u5C42"),n("li",null,"\u5982\u4F55\u66F4\u65B0\u6D6E\u5C42"),n("li",null,"\u5982\u4F55\u5728\u6A21\u677F\u4E2D\u7ED1\u5B9A\u5BF9\u5E94\u7684\u4E8B\u4EF6")],-1),nn=n("p",null,"\u53E6\u5916\uFF0C\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u5F53\u524Dcdk\uFF0C\u6309\u7167\u89C4\u8303\u8BF7\u914D\u5957\u4F7F\u7528\u7EC4\u4EF6Portal.",-1),sn=[Z,nn],an={key:1},tn=n("ul",null,[n("li",null,"How to create an overlay"),n("li",null,"How to initialize the overlay"),n("li",null,"How to update the configuration of the overlay"),n("li",null,"How to bind the events in the template")],-1),on=n("p",null,"By the way, to use the cdk in components, please use the component Portal according to the specification.",-1),en=[tn,on],cn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("triggerRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-click-outside"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("() => hide()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Click"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Update Trigger"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visibility"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("overlayRef"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    tooltip
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("arrowRef"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useOverlay "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/cdk/overlay'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" initialize"),n("span",{class:"token punctuation"},","),s(" overlayRef"),n("span",{class:"token punctuation"},","),s(" triggerRef"),n("span",{class:"token punctuation"},","),s(" update"),n("span",{class:"token punctuation"},","),s(" arrowRef"),n("span",{class:"token punctuation"},","),s(" visibility"),n("span",{class:"token punctuation"},","),s(" hide "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useOverlay"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      visible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      trigger`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),s(`
      placement`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),s(`
      scrollStrategy`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'reposition'"),n("span",{class:"token punctuation"},","),s(`
      offset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      showDelay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
      hideDelay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
      allowEnter`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),s("initialize"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleClick"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hover'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" overlayRef"),n("span",{class:"token punctuation"},","),s(" triggerRef"),n("span",{class:"token punctuation"},","),s(" handleClick"),n("span",{class:"token punctuation"},","),s(" arrowRef"),n("span",{class:"token punctuation"},","),s(" visibility"),n("span",{class:"token punctuation"},","),s(" hide "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function ln(a,o,r,l,i,k){const e=g("raw-demo"),p=b;return u(),B(p,{packageName:"cdk",componentName:"overlay",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxButton%20ref%3D%22triggerRef%22%20v-click-outside%3D%22()%20%3D%3E%20hide()%22%3EClick%3C%2FIxButton%3E%0A%20%20%3CIxButton%20%40click%3D%22handleClick%22%3EUpdate%20Trigger%3C%2FIxButton%3E%0A%0A%20%20%3Cdiv%20v-show%3D%22visibility%22%20ref%3D%22overlayRef%22%3E%0A%20%20%20%20tooltip%0A%20%20%20%20%3Cdiv%20ref%3D%22arrowRef%22%3E%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20onMounted%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20useOverlay%20%7D%20from%20'%40idux%2Fcdk%2Foverlay'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20%7B%20initialize%2C%20overlayRef%2C%20triggerRef%2C%20update%2C%20arrowRef%2C%20visibility%2C%20hide%20%7D%20%3D%20useOverlay(%7B%0A%20%20%20%20%20%20visible%3A%20false%2C%0A%20%20%20%20%20%20trigger%3A%20'click'%2C%0A%20%20%20%20%20%20placement%3A%20'top'%2C%0A%20%20%20%20%20%20scrollStrategy%3A%20'reposition'%2C%0A%20%20%20%20%20%20offset%3A%20%5B5%2C%205%5D%2C%0A%20%20%20%20%20%20showDelay%3A%200%2C%0A%20%20%20%20%20%20hideDelay%3A%20100%2C%0A%20%20%20%20%20%20allowEnter%3A%20true%2C%0A%20%20%20%20%7D)%0A%20%20%20%20onMounted(initialize)%0A%0A%20%20%20%20const%20handleClick%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20update(%7B%20trigger%3A%20'hover'%20%7D)%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20%7B%20overlayRef%2C%20triggerRef%2C%20handleClick%2C%20arrowRef%2C%20visibility%2C%20hide%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"\u57FA\u672C\u4F7F\u7528":"Basic usage"},{description:c(()=>[a.lang==="zh"?(u(),d("span",Y,sn)):y("",!0),a.lang==="en"?(u(),d("span",an,en)):y("",!0)]),rawCode:c(()=>[t(e)]),highlightCode:c(()=>[cn]),_:1},8,["title"])}var pn=v(X,[["render",ln]]);const un=f({name:"Portal",setup(){const{initialize:a,triggerRef:o,overlayRef:r,destroy:l,visibility:i,hide:k}=O({scrollStrategy:"reposition",placement:"bottom-start",trigger:"click",offset:[0,8],hideDelay:100,showDelay:100});return E(a),U(l),{triggerRef:o,overlayRef:r,visibility:i,hide:k}}}),rn=s("Trigger"),kn={key:0,ref:"overlayRef",class:"overlay"};function dn(a,o,r,l,i,k){const e=C,p=z,m=D("click-outside");return u(),d(F,null,[h(t(e,{ref:"triggerRef"},{default:c(()=>[rn]),_:1},512),[[m,()=>a.hide()]]),t(p,{target:"ix-overlay"},{default:c(()=>[a.visibility?(u(),d("div",kn,"Overlay \u6D6E\u5C42",512)):y("",!0)]),_:1})],64)}var vn=v(un,[["render",dn]]);const yn=f({name:"cdk-overlay-Portal",components:{"raw-demo":vn},setup(){const{lang:a}=x(A);return{lang:a}}}),mn={key:0},fn=n("p",null,[s("\u642D\u914D "),n("code",null,"Portal"),s(" \u4E00\u8D77\u4F7F\u7528\u3002")],-1),gn=[fn],hn={key:1},wn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("triggerRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-click-outside"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("() => hide()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Trigger"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxPortal")]),s(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ix-overlay"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visibility"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("overlayRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("overlay"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Overlay \u6D6E\u5C42"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxPortal")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" onMounted"),n("span",{class:"token punctuation"},","),s(" onUnmounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useOverlay "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/cdk/overlay'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Portal'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" initialize"),n("span",{class:"token punctuation"},","),s(" triggerRef"),n("span",{class:"token punctuation"},","),s(" overlayRef"),n("span",{class:"token punctuation"},","),s(" destroy"),n("span",{class:"token punctuation"},","),s(" visibility"),n("span",{class:"token punctuation"},","),s(" hide "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useOverlay"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      scrollStrategy`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'reposition'"),n("span",{class:"token punctuation"},","),s(`
      placement`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bottom-start'"),n("span",{class:"token punctuation"},","),s(`
      trigger`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),s(`
      offset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      hideDelay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
      showDelay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),s("initialize"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token function"},"onUnmounted"),n("span",{class:"token punctuation"},"("),s("destroy"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" triggerRef"),n("span",{class:"token punctuation"},","),s(" overlayRef"),n("span",{class:"token punctuation"},","),s(" visibility"),n("span",{class:"token punctuation"},","),s(" hide "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("less"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".overlay"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"z-index"),n("span",{class:"token punctuation"},":"),s(" 1000"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #fff"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 32px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),s(" 0 2px 8px "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 0.3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function _n(a,o,r,l,i,k){const e=g("raw-demo"),p=b;return u(),B(p,{packageName:"cdk",componentName:"overlay",demoName:"Portal",code:"%3Ctemplate%3E%0A%20%20%3CIxButton%20ref%3D%22triggerRef%22%20v-click-outside%3D%22()%20%3D%3E%20hide()%22%3ETrigger%3C%2FIxButton%3E%0A%20%20%3CIxPortal%20target%3D%22ix-overlay%22%3E%0A%20%20%20%20%3Cdiv%20v-if%3D%22visibility%22%20ref%3D%22overlayRef%22%20class%3D%22overlay%22%3EOverlay%20%E6%B5%AE%E5%B1%82%3C%2Fdiv%3E%0A%20%20%3C%2FIxPortal%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20onMounted%2C%20onUnmounted%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20useOverlay%20%7D%20from%20'%40idux%2Fcdk%2Foverlay'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20name%3A%20'Portal'%2C%0A%20%20setup()%20%7B%0A%20%20%20%20const%20%7B%20initialize%2C%20triggerRef%2C%20overlayRef%2C%20destroy%2C%20visibility%2C%20hide%20%7D%20%3D%20useOverlay(%7B%0A%20%20%20%20%20%20scrollStrategy%3A%20'reposition'%2C%0A%20%20%20%20%20%20placement%3A%20'bottom-start'%2C%0A%20%20%20%20%20%20trigger%3A%20'click'%2C%0A%20%20%20%20%20%20offset%3A%20%5B0%2C%208%5D%2C%0A%20%20%20%20%20%20hideDelay%3A%20100%2C%0A%20%20%20%20%20%20showDelay%3A%20100%2C%0A%20%20%20%20%7D)%0A%0A%20%20%20%20onMounted(initialize)%0A%0A%20%20%20%20onUnmounted(destroy)%0A%0A%20%20%20%20return%20%7B%20triggerRef%2C%20overlayRef%2C%20visibility%2C%20hide%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22less%22%3E%0A.overlay%20%7B%0A%20%20z-index%3A%201000%3B%0A%20%20background%3A%20%23fff%3B%0A%20%20padding%3A%2032px%3B%0A%20%20box-shadow%3A%200%202px%208px%20rgba(0%2C%200%2C%200%2C%200.3)%3B%0A%7D%0A%3C%2Fstyle%3E%0A",title:a.lang==="zh"?"\u914D\u5408\u4F20\u9001\u95E8":"Use with Portal"},{description:c(()=>[a.lang==="zh"?(u(),d("span",mn,gn)):y("",!0),a.lang==="en"?(u(),d("span",hn)):y("",!0)]),rawCode:c(()=>[t(e)]),highlightCode:c(()=>[wn]),_:1},8,["title"])}var Cn=v(yn,[["render",_n]]);const An={name:"Demooverlay",components:{Basic:pn,Portal:Cn},setup(){const a=l=>{window&&(window.location.hash=l)},o=j(!1);return{goLink:a,expanded:o,expandAll:()=>{o.value=!o.value}}}},bn=s(),En=s(),Dn={class:"markdown header-wrapper"},Fn=s("Overlay"),xn=n("span",{class:"subtitle"},"\u6D6E\u5C42",-1),Bn={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IDuxFE/idux/edit/main/cdk/overlay/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},On=n("section",{class:"markdown"},[n("ul",null,[n("li",null,[s("\u521B\u5EFA\u5B9A\u4F4D\u6D6E\u5C42\uFF1A"),n("code",null,"useOverlay")])]),n("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},[n("span",null,"\u4F55\u65F6\u4F7F\u7528"),n("a",{onclick:"window.location.hash = '\u4F55\u65F6\u4F7F\u7528'",class:"anchor"},"#")]),n("ul",null,[n("li",null,[n("code",null,"useOverlay"),s("\uFF1A\u521B\u5EFA\u5B9A\u4F4D\u6D6E\u5C42")])])],-1),Rn=n("span",null,"\u4EE3\u7801\u6F14\u793A",-1),$n={class:"example-wrapper"},In=n("section",{class:"markdown api-wrapper"},[n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),n("h3",{id:"useOverlay"},[n("span",null,"useOverlay"),n("a",{onclick:"window.location.hash = 'useOverlay'",class:"anchor"},"#")]),n("blockquote",null,[n("p",null,[s("\u521B\u5EFA\u4E00\u4E2A\u6D6E\u5C42\u5B9E\u4F8B\uFF0C\u56E0\u4E3A "),n("code",null,"overlayRef"),s(" \u5FC5\u4F20\uFF0C\u56E0\u6B64\u4F7F\u7528 "),n("code",null,"v-if"),s(" \u65F6\uFF0C\u8BF7\u5728\u5916\u9762\u5305\u88F9\u4E00\u5C42\u3002")])]),n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" Options"),n("span",{class:"token punctuation"},","),s(" Placement "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@popperjs/core'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ComponentPublicInstance"),n("span",{class:"token punctuation"},","),s(" ComputedRef"),n("span",{class:"token punctuation"},","),s(" Ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"OverlayScrollStrategy"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'close'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'reposition'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"OverlayTrigger"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'click'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'hover'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'focus'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"OverlayElement"),s(),n("span",{class:"token operator"},"="),s(" ComponentPublicInstance "),n("span",{class:"token operator"},"|"),s(` HTMLElement
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"OverlayPlacement"),s(),n("span",{class:"token operator"},"="),s(` Placement

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"OverlayTriggerEvents"),s(),n("span",{class:"token punctuation"},"{"),s(`
  onClick`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" Event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  onMouseenter`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" Event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  onMouseleave`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" Event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  onFocus`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" Event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  onBlur`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" Event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"OverlayPopperEvents"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function-variable function"},"onMouseenter"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token function-variable function"},"onMouseleave"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" MouseEvent"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"OverlayOptions"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * Control the visibility of the overlay
   */`),s(`
  visible`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},"/* Scroll strategy for overlay */"),s(`
  scrollStrategy`),n("span",{class:"token operator"},":"),s(` OverlayScrollStrategy
  `),n("span",{class:"token comment"},"/* Disable the overlay */"),s(`
  disabled`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * The distance between the arrow and the starting point at both ends.
   *Acting when the overlay uses border-radius.
   */`),s(`
  arrowOffset`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  `),n("span",{class:"token comment"},"/* Whether to show arrow. */"),s(`
  showArrow`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},"/* Alignment of floating layer. */"),s(`
  placement`),n("span",{class:"token operator"},":"),s(` OverlayPlacement
  `),n("span",{class:"token comment"},`/**
   * The options of popper.
   * Used when ConnectOverlayOptions cannot meet the demand.
   * Priority is higher than ConnectOverlayOptions.
   */`),s(`
  popperOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Partial"),n("span",{class:"token operator"},"<"),s("Options"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token comment"},"/* Trigger method. */"),s(`
  trigger`),n("span",{class:"token operator"},":"),s(` OverlayTrigger
  `),n("span",{class:"token comment"},"/* Whether to allow the mouse to enter the overlay. */"),s(`
  allowEnter`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * Overlay offset.
   * [Horizontal axis offset, vertical axis offset]
   */`),s(`
  offset`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token comment"},`/**
   * The delay of hiding overlay.
   * Send 0 if you don't need it.
   */`),s(`
  hideDelay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  `),n("span",{class:"token comment"},`/**
   * The delay of showing overlay.
   * Send 0 if you don't need it.
   */`),s(`
  showDelay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},[s("OverlayInstance"),n("span",{class:"token operator"},"<"),s(`
  `),n("span",{class:"token constant"},"TE"),s(),n("span",{class:"token keyword"},"extends"),s(" OverlayElement "),n("span",{class:"token operator"},"="),s(" OverlayElement"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"OE"),s(),n("span",{class:"token keyword"},"extends"),s(" OverlayElement "),n("span",{class:"token operator"},"="),s(" OverlayElement"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"AE"),s(),n("span",{class:"token keyword"},"extends"),s(" OverlayElement "),n("span",{class:"token operator"},"="),s(` OverlayElement
`),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * Initialize the overlay.
   * The life cycle of the overlay will enter mounted.
   */`),s(`
  `),n("span",{class:"token function-variable function"},"initialize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * Show the overlay.
   * The style of the overlay container will be set to block.
   */`),s(`
  `),n("span",{class:"token function-variable function"},"show"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("showDelay"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * Hide the overlay.
   * The style of the overlay container will be set to none.
   */`),s(`
  `),n("span",{class:"token function-variable function"},"hide"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("hideDelay"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * Update overlay.
   * If the overlay has not been initialized, the overlay will be initialized first, otherwise the overlay will be update directly.
   * @param options
   */`),s(`
  `),n("span",{class:"token function-variable function"},"update"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Partial"),n("span",{class:"token operator"},"<"),s("OverlayOptions"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * Destroy the overlay.
   * The life cycle of the overlay will enter beforeDestroy.
   * To show the overlay again, please recreate.
   */`),s(`
  `),n("span",{class:"token function-variable function"},"destroy"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * TODO
   * The unique id of the overlay.
   * Provide subsequent components with markings for the specified overlay treatment.
   */`),s(`
  id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * The display status of the current overlay.
   * Control by visible and disable.
   */`),s(`
  visibility`),n("span",{class:"token operator"},":"),s(" ComputedRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"boolean"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token comment"},`/**
   * The truth DOM node of the trigger.
   * The caller needs to bind the variable to the view.
   */`),s(`
  triggerRef`),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"TE"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token comment"},`/**
   * Manually bind to the evt on the trigger.
   */`),s(`
  `),n("span",{class:"token function-variable function"},"triggerEventHandler"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token operator"},":"),s(" Event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * The truth DOM node of the overlay.
   * The caller needs to bind the variable to the view.
   */`),s(`
  overlayRef`),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"OE"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token comment"},`/**
   * Manually bind to events on the overlay.
   */`),s(`
  `),n("span",{class:"token function-variable function"},"overlayEventHandler"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token operator"},":"),s(" Event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * The truth DOM node of the arrow.
   * If showArrow is false, we won't return arrowRef.
   * The caller needs to bind the variable to the view.
   */`),s(`
  arrowRef`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"AE"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token punctuation"},"}")])])],-1);function Pn(a,o,r,l,i,k){const e=T,p=P,m=M,R=g("Basic"),w=S,$=g("Portal"),I=q;return u(),d("article",null,[t(p,{class:"toc-wrapper",affix:"",offset:"16",onClick:o[0]||(o[0]=_=>l.goLink(_))},{default:c(()=>[t(e,{href:"#cdk-overlay-demo-Basic",title:"\u57FA\u672C\u4F7F\u7528"}),bn,t(e,{href:"#cdk-overlay-demo-Portal",title:"\u914D\u5408\u4F20\u9001\u95E8"}),En,t(e,{href:"#API",title:"API"})]),_:1}),n("section",Dn,[n("h1",null,[Fn,xn,n("a",Bn,[t(m,{name:"edit"})])]),On,n("h2",null,[Rn,t(m,{name:"appstore",class:"code-box-expand-trigger",title:"\u5C55\u5F00\u5168\u90E8",onClick:o[1]||(o[1]=_=>l.expandAll())})])]),n("section",$n,[t(I,{gutter:"16"},{default:c(()=>[t(w,{lg:"12",span:"24"},{default:c(()=>[t(R)]),_:1}),t(w,{lg:"12",span:"24"},{default:c(()=>[t($)]),_:1})]),_:1})]),In])}var Un=v(An,[["render",Pn]]);export{Un as default};
