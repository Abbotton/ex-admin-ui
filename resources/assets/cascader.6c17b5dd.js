import"./vue.4c5758a0.js";import{d as p}from"./@vueuse.67682d36.js";import{C,H as b,f as y,c as F}from"./index.97f9c525.js";import{l as N}from"./lodash.28c974ad.js";import{u as S}from"./remoteOptions.bcc4b0cb.js";import{F as j,a as R}from"./ant-design-vue.e954adc4.js";import{d as A,h as E}from"./@vue.87afd1fa.js";import"./@babel.dd651e2b.js";import"./regenerator-runtime.8e24db72.js";import"./vue-demi.24ed2461.js";import"./js-md5.3cdd41c4.js";import"./vue-router.9a2c52dc.js";import"./js-cookie.31874410.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";import"./@ant-design.8c82b126.js";import"./@ctrl.fa7cbd46.js";/* empty css                     */import"./dayjs.0743a87f.js";import"./sortablejs.412b554c.js";import"./clipboard.89482ba1.js";import"./markdown-it.39ce48f9.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.169105cf.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.52338b19.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";var Vt=A({name:"ExCascader",props:{value:[String,Number,Array],options:Array,remote:Object,loadRemote:Object,cascaderValue:{type:Array,default:[]},single:Boolean},setup(i,o){const n=j.useInjectFormItemContext(),a=p(i,"value",o.emit,{clone:!0}),m=p(i,"options",o.emit,{clone:!0}),{remoteOptionsDebounce:f,remoteOptions:u}=S(i,m),r=o.attrs.fieldNames||{label:"label",value:"value",children:"children",pid:"pid"},c=p(i,"cascaderValue",o.emit,{clone:!0});let h=C();function v(t){if(t===void 0)a.value=o.attrs.multiple?[]:null;else{let e=JSON.parse(JSON.stringify(t));o.attrs.multiple?a.value=g(e):a.value=e.pop()}n.onFieldChange()}i.single&&u(a.value).then(t=>{c.value=O(a.value)});function g(t){let e=[];return t.forEach(s=>{const l=s.pop();o.attrs.changeOnSelect?e.push(l):e=e.concat(V(l))}),N.exports.uniq(e)}function V(t){const e=[t],s=F(i.options,r.value,t,-1,r.children);if(s&&s[r.children])s[r.children].forEach(l=>{d(l,e)});else return[t];return e}function d(t,e=[]){return e.push(t[r.value]),t[r.children]&&t[r.children].forEach(s=>{d(s,e)}),e}function O(t){Array.isArray(t)||(t?t=[t]:t=[]);const e=[];return t.forEach(s=>{e.push(b(m.value,s,r.value,r.pid,r.children).map(l=>l[r.value]))}),!o.attrs.multiple&&!o.attrs.changeOnSelect?e.pop():e}return{options:m,form:h,remoteOptionsDebounce:f,remoteOptions:u,cascaderValue:c,fieldNames:r,updateValue:v}},render(i){let o=Object.assign({options:this.options},i.$attrs,{value:i.cascaderValue,"onUpdate:value":n=>{i.cascaderValue=n,this.updateValue(n)}});return this.remote&&(o.onSearch=n=>{this.remoteOptionsDebounce(n)},o.showSearch=!0),this.loadRemote&&(o.loadData=n=>{const a=n[n.length-1];a.loading=!0,this.loadRemote.data.search=a[this.fieldNames.value],this.form&&(this.loadRemote.data.data=this.form.submitData()),y(this.loadRemote).then(m=>{a.loading=!1,a[this.fieldNames.children]=m.data,this.options=[...this.options]})}),E(R,o,i.$slots)}});export{Vt as default};