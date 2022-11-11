import"./vue.db505ee4.js";import{d}from"./vuedraggable.e7e6f001.js";import{z as n}from"./index.56576f2d.js";import{l as c}from"./lodash.c9cf1bdb.js";import{d as u,h as l}from"./@vue.cb43a243.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./js-md5.5179c6be.js";import"./vue-router.a08742b9.js";import"./js-cookie.31874410.js";import"./ant-design-vue.6b10f349.js";import"./@ant-design.bcfb08ae.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./dayjs.38e390ea.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./spark-md5.2cc5764b.js";import"./@vueuse.81e70e6d.js";import"./vue-demi.5fb18120.js";import"./axios.e3200588.js";/* empty css                     */import"./sortablejs.412b554c.js";import"./clipboard.099d05c9.js";import"./markdown-it.80c3a67b.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.86f7507c.js";var or=u({name:"DraggableRender",props:{list:Array,scopeProp:{type:Object,default:{}}},setup(a,r){},render(a){return l(d,{list:a.list},{item:({element:r,index:p})=>{let i=[["ACol"].indexOf(r.name)>-1?"ex-row-drag":"ex-drag"];r.attribute.class?i=i.concat(r.attribute.class):r.name=="ARow"&&i.push("curd-row-draggable"),i=c.exports.uniq(i),r.attribute.class=i;let s={Mouseenter:m=>{document.querySelectorAll(".ex-drag-hover").forEach(t=>{t.classList.remove("ex-drag-hover")}),document.querySelectorAll(".ex-drag-copy").forEach(t=>{t.remove()}),document.querySelectorAll(".ex-drag-delete").forEach(t=>{t.remove()});let e=m.target;e.classList.add("ex-drag-hover");let o=document.createElement("span");o.className="ex-drag-copy",o.innerHTML='<i class="far fa-copy"></i>',o.onclick=t=>{a.list.splice(p,0,c.exports.cloneDeep(r)),a.$forceUpdate(),t.preventDefault()},e.append(o),o=document.createElement("span"),o.className="ex-drag-delete",o.innerHTML='<i class="far fa-trash-alt"></i>',o.onclick=t=>{a.list.splice(p,1),a.$forceUpdate(),t.preventDefault()},e.append(o)},Mouseleave:m=>{document.querySelectorAll(".ex-drag-hover").forEach(e=>{e.classList.remove("ex-drag-hover")}),document.querySelectorAll(".ex-drag-copy").forEach(e=>{e.remove()}),document.querySelectorAll(".ex-drag-delete").forEach(e=>{e.remove()})}};return r.event?Object.assign(r.event,s):r.event=s,["ARow","ACol"].indexOf(r.name)>-1&&(r.directive=[{name:"RowColSign",value:r.name.replace("A",""),argument:r.name=="ARow"?"curd-row-position":"curd-col-position"}]),l(n,{data:r,scopeProp:a.scopeProp})}})}});export{or as default};
