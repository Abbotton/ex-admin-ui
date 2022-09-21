import"./vue.db505ee4.js";import{u as H}from"./use-http.d82bd466.js";import{c as R,t as W}from"./index.74ec82ca.js";import{r as h,w as q,aW as d,aR as u,ar as m,bd as y,as as x,c as g,au as K,u as c,at as F,S as C,ai as _}from"./@vue.cb43a243.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./js-md5.5179c6be.js";import"./vue-router.a08742b9.js";import"./js-cookie.31874410.js";import"./ant-design-vue.6b10f349.js";import"./@ant-design.bcfb08ae.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./dayjs.38e390ea.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./lodash.c9cf1bdb.js";import"./spark-md5.2cc5764b.js";import"./@vueuse.81e70e6d.js";import"./vue-demi.5fb18120.js";import"./axios.e3200588.js";/* empty css                     */import"./sortablejs.412b554c.js";import"./clipboard.099d05c9.js";import"./markdown-it.80c3a67b.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.86f7507c.js";const G={class:"scrollbar"},I={key:0},J={style:{color:"#f50"}},M={key:1},Q={name:"ExSidebar",inheritAttrs:!1},Pe=Object.assign(Q,{props:{hideAll:Boolean,hideAdd:Boolean,hideEdit:Boolean,hideDel:Boolean,hideFilter:Boolean,hideTools:Boolean,isTree:Boolean,tools:[Object,Boolean],value:[String,Number],sourceList:{type:Array,default:[]},default:{type:[String,Number],default:void 0},field:{type:String,default:"group_id"},selectedField:String,fieldNames:Object,url:String,params:{type:Object,default:{}}},emits:["update:value"],setup(l,{emit:f}){const e=l,{loading:X,http:T}=H();let k,v=e.fieldNames.children,p=e.fieldNames.key,n=e.fieldNames.title;e.default!==void 0&&f("update:value",e.default);const N=h([e.default]),s=h(""),S=h(e.sourceList.map(t=>t[p])),B=h(!0),O=h(E(e.sourceList)),A=(t,a)=>{for(let o=0;o<a.length;o++){const r=a[o];r[v]&&(r[v].some(D=>D[p]===t)?k=r[p]:A(t,r[v])&&(k=A(t,r[v])))}return k},V=t=>{S.value=t,B.value=!1};q(s,t=>{S.value=e.sourceList.map(a=>a[n].indexOf(t)>-1?A(a[p],O.value):null).filter((a,o,r)=>a&&r.indexOf(a)===o),s.value=t,B.value=!0});const j=(t,a)=>{if(console.log(e.selectedField),a.selected){const o=t[0];e.tools&&(e.tools.del.directive[0].value.data.ids=[o],e.tools.edit.attribute.reference.event.Click.custom[0].params.data[e.tools.edit.attribute.pk]=o),e.selectedField?f("update:value",a.node[e.selectedField]):f("update:value",o)}else f("update:value",null)};function E(t){if(e.isTree&&(t=R(t,p,e.fieldNames.pid,v)),t.length==0&&(N.value=[""],f("update:value","")),!e.hideAll){const a={};a[p]="",a[n]=W("Sidebar.all"),t.unshift(a)}return t}function b(){T({url:e.url,method:"post",data:e.params}).then(t=>{O.value=E(t)})}return(t,a)=>{const o=d("render"),r=d("reload-outlined"),D=d("a-button"),L=d("a-space"),w=d("search-outlined"),z=d("a-input"),P=d("a-tree"),U=d("a-card");return u(),m(U,{style:{height:"100%"},bodyStyle:{padding:"10px",height:"100%",display:"flex",flexDirection:"column"}},{default:y(()=>[l.hideTools?x("",!0):(u(),m(L,{key:0,style:{"margin-bottom":"10px"},size:15},{default:y(()=>[l.hideAdd?x("",!0):(u(),m(o,{key:0,data:l.tools.add,onSuccess:b},null,8,["data"])),l.hideEdit?x("",!0):(u(),m(o,{key:1,disabled:!l.value,data:l.tools.edit,onSuccess:b},null,8,["disabled","data"])),l.hideDel?x("",!0):(u(),m(o,{key:2,disabled:!l.value,data:l.tools.del,onSuccess:b},null,8,["disabled","data"])),g(D,{shape:"circle",size:"small",onClick:b},{icon:y(()=>[g(r)]),_:1})]),_:1})),l.hideFilter?x("",!0):(u(),m(z,{key:1,value:s.value,"onUpdate:value":a[0]||(a[0]=i=>s.value=i),style:{"margin-bottom":"8px"}},{prefix:y(()=>[g(w,{style:{color:"#c0c4cc"}})]),_:1},8,["value"])),K("div",G,[g(P,{"expanded-keys":S.value,"tree-data":O.value,"auto-expand-parent":B.value,fieldNames:l.fieldNames,onExpand:V,onSelect:j,selectedKeys:N.value,"onUpdate:selectedKeys":a[1]||(a[1]=i=>N.value=i)},{title:y(i=>[i[c(n)]&&i[c(n)].indexOf(s.value)>-1?(u(),F("span",I,[C(_(i[c(n)].substr(0,i[c(n)].indexOf(s.value)))+" ",1),K("span",J,_(s.value),1),C(" "+_(i[c(n)].substr(i[c(n)].indexOf(s.value)+s.value.length)),1)])):(u(),F("span",M,_(i[c(n)]),1))]),_:1},8,["expanded-keys","tree-data","auto-expand-parent","fieldNames","selectedKeys"])])]),_:1})}}});export{Pe as default};
