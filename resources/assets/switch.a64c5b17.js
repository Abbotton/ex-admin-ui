import{u as s}from"./use-http.5400dd7d.js";import"./vue.db505ee4.js";import{c}from"./@vueuse.952f4739.js";import{_ as h}from"./index.5075a1e4.js";import{d as f,aW as k,aR as g,ar as v}from"./@vue.cb43a243.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./vue-demi.5fb18120.js";import"./js-md5.5179c6be.js";import"./vue-router.a08742b9.js";import"./js-cookie.31874410.js";import"./ant-design-vue.6b10f349.js";import"./@ant-design.bcfb08ae.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./dayjs.38e390ea.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./lodash.c9cf1bdb.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";/* empty css                     */import"./sortablejs.412b554c.js";import"./clipboard.099d05c9.js";import"./markdown-it.80c3a67b.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.86f7507c.js";const C=f({name:"ExSwitch",props:{checked:[Number,String,Boolean],url:String,params:{type:Object,default:{}},field:String},emits:["update:checked"],setup(t,e){const{loading:l,http:u}=s(),o=c(t,"checked",e.emit),r=e.attrs.checkedValue===void 0?!0:e.attrs.checkedValue,a=e.attrs.unCheckedValue===void 0?!1:e.attrs.unCheckedValue;o.value===!1?o.value=a:o.value===!0&&(o.value=r);function n(i){let m;i==r?m=a:m=r;let p=t.params;p.data||(p.data={}),p.data[t.field]=i,t.url?u({url:t.url,method:"put",data:p}).then(d=>{e.emit("update:checked",i)}).catch(d=>{o.value=m,e.emit("update:checked",m)}):e.emit("update:checked",i)}return{handleChange:n,loading:l,value:o}}});function V(t,e,l,u,o,r){const a=k("a-switch");return g(),v(a,{checked:t.value,"onUpdate:checked":e[0]||(e[0]=n=>t.value=n),loading:t.loading,onChange:t.handleChange},null,8,["checked","loading","onChange"])}var le=h(C,[["render",V]]);export{le as default};