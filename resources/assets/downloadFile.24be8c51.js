import"./vue.fe178274.js";import{_ as s,l as n,g as l}from"./index.3dc648a8.js";import{d,r as f,aW as u,aR as t,ar as w,at as h,au as i,M as a,P as p,c,R as g,ai as v}from"./@vue.9a7efb20.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./js-md5.5179c6be.js";import"./vue-router.ac7a6022.js";import"./js-cookie.31874410.js";import"./ant-design-vue.1a08bbd0.js";import"./@ant-design.e295b84c.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./dayjs.38e390ea.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./lodash.c9cf1bdb.js";import"./spark-md5.2cc5764b.js";import"./@vueuse.61d27e13.js";import"./vue-demi.819cf47c.js";import"./axios.e3200588.js";/* empty css                     */import"./clipboard.099d05c9.js";import"./markdown-it.80c3a67b.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.75eb798b.js";const y=d({name:"ExDownloadFile",props:{filename:String,url:String,onlyImage:Boolean},setup(o){const r=f(!1);return{lastName:n,fileIcon:l,showDownload:r}}}),D=["href"],k={class:"el-icon-download down"};function $(o,r,B,I,N,S){const e=u("a-image");return o.onlyImage?(t(),w(e,{key:0,src:o.fileIcon(o.url)},null,8,["src"])):(t(),h("a",{key:1,target:"_blank",href:o.url},[i("div",{style:{display:"flex","align-items":"center",height:"35px"},onMouseover:r[0]||(r[0]=m=>o.showDownload=!0),onMouseout:r[1]||(r[1]=m=>o.showDownload=!1)},[a(i("i",k,null,512),[[p,o.showDownload]]),a(c(e,{src:o.fileIcon(o.url),style:{width:"32px",height:"32px"}},null,8,["src"]),[[p,!o.showDownload]]),g(" \xA0\xA0"+v(o.lastName(o.url,o.filename)),1)],32)],8,D))}var wo=s(y,[["render",$]]);export{wo as default};