import{u as s}from"./use-http.4152548b.js";import"./vue.303f3630.js";import{_ as u}from"./index.7e8930fb.js";import{d as h,r as f,w as k,aW as g,aR as C,ar as v}from"./@vue.cfb5b4bf.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./vue-router.459d6f87.js";import"./@vueuse.bff750a3.js";import"./vue-demi.0d8c46ec.js";import"./js-md5.5179c6be.js";import"./lodash.c9cf1bdb.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";import"./ant-design-vue.e071a89f.js";import"./@ant-design.6903cb45.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./dayjs.38e390ea.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./js-cookie.31874410.js";/* empty css                     */import"./clipboard.099d05c9.js";import"./markdown-it.20180ffc.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.f6189e82.js";const _=h({name:"ExSwitch",props:{checked:[Number,String,Boolean],url:String,params:{type:Object,default:{}},field:String},emits:["update:checked"],setup(t,e){const{loading:p,http:n}=s(),r=f(t.checked);k(()=>t.checked,o=>{r.value=o});function d(o){const a=e.attrs.checkedValue||!0,l=e.attrs.unCheckedValue||!1;let i;o==a?i=l:i=a;let m=t.params;m.data||(m.data={}),m.data[t.field]=o,t.url?n({url:t.url,method:"put",data:m}).then(c=>{e.emit("update:checked",o)}).catch(c=>{r.value=i,e.emit("update:checked",i)}):e.emit("update:checked",o)}return{handleChange:d,loading:p,value:r}}});function w(t,e,p,n,r,d){const o=g("a-switch");return C(),v(o,{checked:t.value,"onUpdate:checked":e[0]||(e[0]=a=>t.value=a),loading:t.loading,onChange:t.handleChange},null,8,["checked","loading","onChange"])}var dt=u(_,[["render",w]]);export{dt as default};
