import"./vue.db505ee4.js";import{b as f}from"./@vueuse.81e70e6d.js";import{x as b,b as C}from"./index.74ec82ca.js";import{l as S}from"./lodash.c9cf1bdb.js";import{u as g}from"./remoteOptions.45b0f12f.js";import{F,a as y}from"./ant-design-vue.6b10f349.js";import{d as E,r as N,h as A}from"./@vue.cb43a243.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./vue-demi.5fb18120.js";import"./js-md5.5179c6be.js";import"./vue-router.a08742b9.js";import"./js-cookie.31874410.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";import"./@ant-design.bcfb08ae.js";import"./@ctrl.fa7cbd46.js";/* empty css                     */import"./dayjs.38e390ea.js";import"./sortablejs.412b554c.js";import"./clipboard.099d05c9.js";import"./markdown-it.80c3a67b.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.86f7507c.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";var vr=E({name:"ExCascader",props:{value:[String,Number,Array],options:Array,remote:Object},setup(a,o){const n=F.useInjectFormItemContext(),p=f(a,"value",o.emit),s=f(a,"options",o.emit),{remoteOptionsDebounce:d,remoteOptions:u}=g(a,s),e=o.attrs.fieldNames||{label:"label",value:"value",children:"children",pid:"pid"},l=N();function h(r){if(r===void 0)p.value=o.attrs.multiple?[]:null;else{let t=JSON.parse(JSON.stringify(r));o.attrs.multiple?p.value=v(t):(o.attrs.changeOnSelect&&t.pop(),p.value=t.pop())}n.onFieldChange()}u(p.value).then(r=>{l.value=V(p.value)});function v(r){let t=[];return r.forEach(i=>{const m=i.pop();t=t.concat(O(m))}),S.exports.uniq(t)}function O(r){const t=[],i=C(o.attrs.options,e.value,r,-1,e.children);if(i&&i[e.children])i[e.children].forEach(m=>{c(m,t)});else return[r];return t}function c(r,t=[]){return t.push(r[e.value]),r[e.children]&&r[e.children].forEach(i=>{c(i,t)}),t}function V(r){Array.isArray(r)||(r?r=[r]:r=[]);const t=[];return r.forEach(i=>{t.push(b(s.value,i,e.value,e.pid,e.children).map(m=>m[e.value]))}),o.attrs.changeOnSelect?t:t.pop()}return{options:s,remoteOptionsDebounce:d,remoteOptions:u,cascaderValue:l,updateValue:h}},render(a){let o=Object.assign({options:this.options},a.$attrs,{value:a.cascaderValue,"onUpdate:value":n=>{a.cascaderValue=n,this.updateValue(n)}});return this.remote&&(o.onSearch=n=>{this.remoteOptionsDebounce(n)},o.showSearch=!0),A(y,o,a.$slots)}});export{vr as default};