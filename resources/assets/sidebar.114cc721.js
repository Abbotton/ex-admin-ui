import"./vue.a928b16e.js";import{u as U}from"./use-http.5643713b.js";import{b as z,t as H}from"./index.651dbde8.js";import{r as v,w as E,aW as p,aR as r,ar as m,bd as x,as as h,c as K,au as T,u,at as V,I as j,ai as b}from"./@vue.a7cd1c69.js";import"./vue-router.49bf991f.js";import"./js-md5.216a9fc2.js";import"./@babel.7a426183.js";import"./regenerator-runtime.59ce731c.js";import"./lodash.5fa5cd01.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";import"./ant-design-vue.33297aa8.js";import"./@ant-design.8381fcec.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.8a2ffed6.js";import"./dayjs.060c2017.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./js-cookie.31874410.js";/* empty css                     */import"./clipboard.76283100.js";const I={class:"scrollbar"},R={key:0},W={style:{color:"#f50"}},q={key:1},G={name:"ExSidebar",inheritAttrs:!1},be=Object.assign(G,{props:{hideAll:Boolean,hideAdd:Boolean,hideEdit:Boolean,hideDel:Boolean,hideFilter:Boolean,hideTools:Boolean,isTree:Boolean,tools:[Object,Boolean],value:[String,Number],sourceList:{type:Array,default:[]},default:{type:[String,Number],default:""},field:{type:String,default:"group_id"},fieldNames:Object,url:String,params:{type:Object,default:{}}},emits:["update:value"],setup(o,{emit:g}){const a=o,{loading:J,http:C}=U();let N,f=a.fieldNames.children,c=a.fieldNames.key,s=a.fieldNames.title;a.default&&g("update:value",a.default);const y=v([a.default]),n=v(""),k=v(a.sourceList.map(e=>e[c])),B=v(!0),_=v(D(a.sourceList)),S=(e,t)=>{for(let d=0;d<t.length;d++){const i=t[d];i[f]&&(i[f].some(A=>A[c]===e)?N=i[c]:S(e,i[f])&&(N=S(e,i[f])))}return N},L=e=>{k.value=e,B.value=!1};E(n,e=>{k.value=a.sourceList.map(t=>t[s].indexOf(e)>-1?S(t[c],_.value):null).filter((t,d,i)=>t&&i.indexOf(t)===d),n.value=e,B.value=!0}),E(y,e=>{const t=e[0];a.tools&&(a.tools.del.directive[0].value.data.ids=[t],a.tools.edit.attribute.reference.event.Click.custom[0].params.data.id=t),g("update:value",t)});function D(e){if(a.isTree&&(e=z(e,c,a.fieldNames.pid,f)),e.length==0&&(y.value=[""],g("update:value","")),!a.hideAll){const t={};t[c]="",t[s]=H("Sidebar.all"),e.unshift(t)}return e}function O(){C({url:a.url,method:"post",data:a.params}).then(e=>{_.value=D(e)})}return(e,t)=>{const d=p("render"),i=p("a-space"),A=p("search-outlined"),w=p("a-input"),F=p("a-tree"),P=p("a-card");return r(),m(P,{style:{height:"100%"},bodyStyle:{padding:"10px",height:"100%",display:"flex",flexDirection:"column"}},{default:x(()=>[o.hideTools?h("",!0):(r(),m(i,{key:0,style:{"margin-bottom":"10px"},size:15},{default:x(()=>[o.hideAdd?h("",!0):(r(),m(d,{key:0,data:o.tools.add,onSuccess:O},null,8,["data"])),o.hideEdit?h("",!0):(r(),m(d,{key:1,disabled:!o.value,data:o.tools.edit,onSuccess:O},null,8,["disabled","data"])),o.hideDel?h("",!0):(r(),m(d,{key:2,disabled:!o.value,data:o.tools.del,onSuccess:O},null,8,["disabled","data"]))]),_:1})),o.hideFilter?h("",!0):(r(),m(w,{key:1,value:n.value,"onUpdate:value":t[0]||(t[0]=l=>n.value=l),style:{"margin-bottom":"8px"}},{prefix:x(()=>[K(A,{style:{color:"#c0c4cc"}})]),_:1},8,["value"])),T("div",I,[K(F,{"expanded-keys":k.value,"tree-data":_.value,"auto-expand-parent":B.value,fieldNames:o.fieldNames,onExpand:L,selectedKeys:y.value,"onUpdate:selectedKeys":t[1]||(t[1]=l=>y.value=l)},{title:x(l=>[l[u(s)]&&l[u(s)].indexOf(n.value)>-1?(r(),V("span",R,[j(b(l[u(s)].substr(0,l[u(s)].indexOf(n.value)))+" ",1),T("span",W,b(n.value),1),j(" "+b(l[u(s)].substr(l[u(s)].indexOf(n.value)+n.value.length)),1)])):(r(),V("span",q,b(l[u(s)]),1))]),_:1},8,["expanded-keys","tree-data","auto-expand-parent","fieldNames","selectedKeys"])])]),_:1})}}});export{be as default};
