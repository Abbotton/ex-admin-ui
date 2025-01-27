import"./vue.86160ee8.js";import{_ as R}from"./codemirror.83e65ad3.js";import{D as K}from"./diff-match-patch.bf6a39b5.js";import{d as S,r as y,o as P,w as x,E as T,u as h,s as Q,x as X,p as D,a as Y,Z as C,_ as $,$ as ee,a0 as te,a1 as re,a2 as ne,a3 as oe,n as ae}from"./@vue.87afd1fa.js";var ie=Object.defineProperty,le=Object.defineProperties,se=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,F=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))ce.call(t,n)&&F(e,n,t[n]);if(V)for(var n of V(t))de.call(t,n)&&F(e,n,t[n]);return e},ue=(e,t)=>le(e,se(t));!window.CodeMirror&&(window.CodeMirror=R);const O=window.CodeMirror||R;var A=(e,t)=>{const n=e.__vccOpts||e;for(const[a,r]of t)n[a]=r;return n};const pe=S({name:"DefaultMode",props:{name:{type:String,default:`cm-textarea-${+new Date}`},value:{type:String,default:""},content:{type:String,default:""},options:{type:Object,default:()=>({})},cminstance:{type:Object,default:()=>null},placeholder:{type:String,default:""}},emits:{ready:e=>e,"update:cminstance":e=>e},setup(e,{emit:t}){const n=y(),a=y(null),r=()=>{a.value=T(O.fromTextArea(n.value,e.options)),t("update:cminstance",a.value);const o=x(()=>e.cminstance,i=>{var p;i&&((p=e.cminstance)==null||p.setValue(e.value||e.content)),t("ready",h(a)),o==null||o()},{deep:!0})};return P(()=>{r()}),{textarea:n,initialize:r}}}),ge=["name","placeholder"];function me(e,t,n,a,r,o){return C(),$("textarea",{ref:"textarea",name:e.$props.name,placeholder:e.$props.placeholder},null,8,ge)}var B=A(pe,[["render",me]]);window.diff_match_patch=K;window.DIFF_DELETE=-1;window.DIFF_INSERT=1;window.DIFF_EQUAL=0;const fe=S({name:"MergeMode",props:{options:{type:Object,default:()=>({})},cminstance:{type:Object,default:()=>({})}},emits:["update:cminstance","ready"],setup(e,{emit:t}){const n=y(),a=y(),r=()=>{n.value=T(O.MergeView(a.value,e.options)),t("update:cminstance",n.value),t("ready",n)};return P(()=>{r()}),{mergeView:a,initialize:r}}}),ve={ref:"mergeView"};function he(e,t,n,a,r,o){return C(),$("div",ve,null,512)}var ye=A(fe,[["render",he]]),z;(function(e){e.info="info",e.warning="warning",e.error="error"})(z||(z={}));function _e(e){const t=/#link#(.+)#link#/g,n=[];let a;for(a=t.exec(e);a;){const r=document.createElement("a"),o=JSON.parse(a[1]),i=Object.entries(o);for(const[p,d]of i)r.setAttribute(p,d);r.className="editor_custom_link",r.innerHTML="logDownload",n.push({start:a.index,end:a.index+a[0].length,node:r}),a=t.exec(e)}return n}function we(e){const t=[];function n(){const a=/#log<(\w*)>log#((.|\r\n|\n)*?)#log<(\w*)>log#/g;let r;for(r=a.exec(e);r;){const i=r[0].replace(/\r\n/g,`
`).split(`
`),d=r[2].replace(/\r\n/g,`
`).split(`
`),f=document.createElement("span"),s=r[1];f.className=`c-editor--log__${s}`;let g=0;for(let c=0;c<i.length;c++){const m=i[c],w=d[c],_=f.cloneNode(!1);_.innerText=w,t.push({start:r.index+g,end:r.index+g+m.length,node:_}),g=g+m.length+1}r=a.exec(e)}}return n(),t}const M=[{regex:/(\[.*?\])([ \t]*)(<error>[ \t])(.+)/,token:["tag","","error.strong","error.strong"],sol:!0},{regex:/(\[.*?\])([ \t]*)(<info>)(.+)(.?)/,token:["tag","","bracket","bracket","hr"],sol:!0},{regex:/(\[.*?\])([ \t]*)(<warning>)(.+)(.?)/,token:["tag","","comment","comment","hr"],sol:!0}];O.defineSimpleMode("fclog",{start:[...M,{regex:/.*/,token:"hr"}],error:[...M,{regex:/.*/,token:"error.strong"}],info:[...M,{regex:/.*/,token:"bracket"}],warning:[...M,{regex:/.*\[/,token:"comment"}]});O.defineSimpleMode("log",{start:[{regex:/^[=]+[^=]*[=]+/,token:"strong"},{regex:/([^\w])([A-Z][\w]*)/,token:["","string"]},{regex:/(^[A-Z][\w]*)/,token:"string"}]});const be=S({name:"CodemirrorFclog",props:{value:{type:String,default:""},name:{type:String,default:`cm-textarea-${+new Date}`},options:{type:Object,default:()=>({})},cminstance:{type:Object,default:()=>({})},placeholder:{type:String,default:""}},emits:["update:cminstance","ready"],setup(e,{emit:t}){const n=y(),a=y(null),r=(i=e.cminstance)=>{i.getAllMarks().forEach(s=>s.clear());const d=i.getValue(),f=[].concat(_e(d)).concat(we(d));for(let s=0;s<f.length;s++){const g=f[s];i.markText(i.posFromIndex(g.start),i.posFromIndex(g.end),{replacedWith:g.node})}},o=()=>{var i;a.value=T(O.fromTextArea(n.value,e.options)),t("update:cminstance",h(a)),(i=a.value)==null||i.on("change",r)};return x(()=>e.cminstance,i=>{var p;i&&(r(e.cminstance),(p=e.cminstance)==null||p.setValue(e.value),t("ready",a))},{deep:!0,immediate:!0}),P(()=>{o()}),{initialize:o,textarea:n}}}),xe=["name","placeholder"];function ke(e,t,n,a,r,o){return C(),$("textarea",{ref:"textarea",name:e.$props.name,placeholder:e.$props.placeholder},null,8,xe)}var Ce=A(be,[["render",ke]]);const H={"update:value":e=>e,change:(e,t)=>({value:e,cm:t}),input:e=>e,ready:e=>e},Oe=["changes","scroll","beforeChange","cursorActivity","keyHandled","inputRead","electricInput","beforeSelectionChange","viewportChange","swapDoc","gutterClick","gutterContextMenu","focus","blur","refresh","optionChange","scrollCursorIntoView","update"],Ee=()=>{const e={};return Oe.forEach(t=>{e[t]=(...n)=>n}),e},Me=k(k({},H),Ee()),j={mode:"text",theme:"default",lineNumbers:!0,smartIndent:!0,indentUnit:2};function Se(e){Promise.resolve().then(()=>{const t=e.getScrollInfo();e.scrollTo(t.left,t.height)})}const $e=({props:e,cminstance:t,emit:n,internalInstance:a,content:r})=>{const o=D(()=>{var d;return e.merge?(d=h(t))==null?void 0:d.editor():h(t)}),i=()=>{const d=[];return Object.keys(a==null?void 0:a.vnode.props).forEach(f=>{if(f.startsWith("on")){const s=f.replace(f[2],f[2].toLowerCase()).slice(2);!H[s]&&d.push(s)}}),d};return{listenerEvents:()=>{o.value.on("change",s=>{const g=s.getValue();g!==r.value&&(r.value=g,r.value&&n("update:value",r.value||""),r.value&&n("input",r.value||""),Promise.resolve().then(()=>{n("change",r.value,s)}),e.keepCursorInEnd&&Se(s))});const d={};i().filter(s=>!d[s]&&(d[s]=!0)).forEach(s=>{o.value.on(s,(...g)=>{n(s,...g)})})}}};function Ie({props:e,cminstance:t,presetRef:n}){const a=y(null),r=y(null),o=D(()=>{var c;return e.merge?(c=h(t))==null?void 0:c.editor():h(t)}),i=()=>{ae(()=>{var c;(c=o.value)==null||c.refresh()})},p=(c=e.width,m=e.height)=>{var w;a.value=String(c).replace("px",""),r.value=String(m).replace("px","");const _=r.value;(w=o.value)==null||w.setSize(a.value,_)},d=()=>{var c;const m=(c=o.value)==null?void 0:c.getWrapperElement();m==null||m.remove()},f=()=>{var c,m,w;const _=(c=o.value)==null?void 0:c.getDoc().getHistory();(m=n.value)==null||m.initialize(),d(),(w=o.value)==null||w.getDoc().setHistory(_)},s=()=>{const c=document.querySelector(".CodeMirror-gutters");return(c==null?void 0:c.style.left.replace("px",""))!=="0"};return{reload:f,refresh:i,resize:p,destroy:d,containerHeight:r,reviseStyle:()=>{if(i(),!s())return;const c=setInterval(()=>{s()?i():clearInterval(c)},60),m=setTimeout(()=>{clearInterval(c),clearTimeout(m)},400)}}}const Ne=S({props:{value:{type:String,default:""},options:{type:Object,default:()=>j},globalOptions:{type:Object,default:()=>j},placeholder:{type:String,default:""},border:{type:Boolean,default:!1},width:{type:[String,Number],default:null},height:{type:[String,Number],default:null},originalStyle:{type:Boolean,default:!1},keepCursorInEnd:{type:Boolean,default:!1},merge:{type:Boolean,default:!1},name:{type:String,default:""},marker:{type:Function,default:()=>null},unseenLines:{type:Array,default:()=>[]}},emits:Me,setup(e,{expose:t,emit:n}){var a,r;const o=e;typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value(l,u){if(l==null)throw new TypeError("Cannot convert undefined or null to object");const v=Object(l);for(let b=1;b<arguments.length;b++){const E=arguments[b];if(E!=null)for(const I in E)Object.prototype.hasOwnProperty.call(E,I)&&(v[I]=E[I])}return v},writable:!0,configurable:!0});const i=y(null),p=y(""),d=Q(B),f=y(k(k(k({},j),o.globalOptions),o.options)),s=X(),g=o.name||((r=(a=s==null?void 0:s.parent)==null?void 0:a.type)==null?void 0:r.name)||void 0,c=y(null),m=D(()=>{var l;return o.merge?(l=h(i))==null?void 0:l.editor():h(i)}),{refresh:w,resize:_,destroy:N,containerHeight:U,reviseStyle:W}=Ie({props:o,cminstance:i,presetRef:c}),{listenerEvents:Z}=$e({props:o,cminstance:i,emit:n,internalInstance:s,content:p}),L=()=>{o.unseenLines!==void 0&&o.marker!==void 0&&o.unseenLines.forEach(l=>{var u,v;const b=(u=i.value)==null?void 0:u.lineInfo(l);(v=i.value)==null||v.setGutterMarker(l,"breakpoints",(b==null?void 0:b.gutterMarkers)?null:o.marker())})},q=l=>{var u,v;const b=(u=i.value)==null?void 0:u.getValue();l!==b&&((v=i.value)==null||v.setValue(l),p.value=l,W()),L()},G=()=>{Z(),L(),_(o.width,o.height),n("ready",i.value),x([()=>o.width,()=>o.height],([l,u])=>{_(l,u)},{deep:!0})},J=()=>{if(o.options.mode==="fclog"||o.options.mode==="log"){d.value=Ce;return}if(o.merge){d.value=ye;return}d.value=B};return x(()=>o.options,l=>{var u;for(const v in o.options)(u=m.value)==null||u.setOption(v,h(l[v]))},{deep:!0}),x(()=>o.value,l=>{q(l)}),x(()=>o.placeholder,l=>{var u;(u=m.value)==null||u.setOption("placeholder",l)}),x(()=>o.merge,l=>{J()},{immediate:!0}),Y(()=>{N()}),t({cminstance:i,resize:_,refresh:w,destroy:N}),(l,u)=>(C(),$("div",{class:ne(["codemirror-container",{merge:l.$props.merge,bordered:l.$props.border||l.$props.merge&&!o.originalStyle,"width-auto":!l.$props.width||l.$props.width=="100%","height-auto":!l.$props.height||l.$props.height=="100%","original-style":o.originalStyle}]),style:oe({height:h(U)+"px"})},[(C(),ee(re(h(d)),te({ref_key:"presetRef",ref:c,cminstance:i.value,"onUpdate:cminstance":u[0]||(u[0]=v=>i.value=v),style:{height:"100%"}},ue(k(k({},l.$props),l.$attrs),{options:f.value,name:h(g),content:p.value}),{onReady:G}),null,16,["cminstance"]))],6))}});function je(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}je(`.codemirror-container {
  position: relative;
  display: inline-block;
  height: 100%;
  width: fit-content;
  font-size: 12px;
  overflow: hidden;
}
.codemirror-container.bordered {
  border-radius: 4px;
  border: 1px solid #dddddd;
}
.codemirror-container.width-auto {
  width: 100%;
}
.codemirror-container.height-auto {
  height: 100%;
}
.codemirror-container.height-auto .CodeMirror,
.codemirror-container.height-auto .cm-s-default {
  height: 100% !important;
}
.codemirror-container .editor_custom_link {
  cursor: pointer;
  color: #1474f1;
  text-decoration: underline;
}
.codemirror-container .editor_custom_link:hover {
  color: #04b4fa;
}
.codemirror-container:not(.original-style) .CodeMirror-lines .CodeMirror-placeholder.CodeMirror-line-like {
  color: #666;
}
.codemirror-container:not(.original-style) .CodeMirror,
.codemirror-container:not(.original-style) .CodeMirror-merge-pane {
  height: 100%;
  font-family: consolas !important;
}
.codemirror-container:not(.original-style) .CodeMirror-merge,
.codemirror-container:not(.original-style) .CodeMirror-merge-right .CodeMirror {
  height: 100%;
  border: none !important;
}
.codemirror-container:not(.original-style) .c-editor--log__error {
  color: #bb0606;
  font-weight: bold;
}
.codemirror-container:not(.original-style) .c-editor--log__info {
  color: #333333;
  font-weight: bold;
}
.codemirror-container:not(.original-style) .c-editor--log__warning {
  color: #ee9900;
}
.codemirror-container:not(.original-style) .c-editor--log__success {
  color: #669600;
}
.codemirror-container:not(.original-style) .cm-header,
.codemirror-container:not(.original-style) .cm-strong {
  font-weight: bold;
}
`);export{Ne as _};
