import"./vue.db505ee4.js";import{q as u,v as f}from"./index.74ec82ca.js";import{b as l}from"./@vueuse.81e70e6d.js";import{u as h}from"./remoteOptions.45b0f12f.js";import{S as O}from"./ant-design-vue.6b10f349.js";import{d as b,h as g}from"./@vue.cb43a243.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./js-md5.5179c6be.js";import"./vue-router.a08742b9.js";import"./js-cookie.31874410.js";import"./lodash.c9cf1bdb.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";import"./@ant-design.bcfb08ae.js";import"./@ctrl.fa7cbd46.js";/* empty css                     */import"./dayjs.38e390ea.js";import"./sortablejs.412b554c.js";import"./clipboard.099d05c9.js";import"./markdown-it.80c3a67b.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.86f7507c.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-demi.5fb18120.js";var at=b({name:"ExSelect",props:{changeLoadOptions:{type:Array,default:[]},remote:Object,options:Array},emits:["update:options"],setup(t,o){const i=l(t,"options",o.emit),{remoteOptionsDebounce:a,remoteOptions:e}=h(t,i);n(),e(o.attrs.value);function n(){t.changeLoadOptions.forEach(r=>{s(r.params,r.updateObject,o.attrs.value)})}function s(r,c,d){r.data.value=d,u(r).then(p=>{if(p.data)for(let m in p.data)f(c,m,p.data[m])})}return{remoteOptionsDebounce:a,remoteOptions:e,options:i}},render(t){let o=Object.assign({onDropdownVisibleChange:i=>{i&&this.remoteOptions("")}},t.$attrs);return o.showSearch&&(o.onSearch=i=>{this.remoteOptionsDebounce(i)}),!t.$attrs.options&&t.options&&(o.options=t.options),g(O,o,t.$slots)}});export{at as default};