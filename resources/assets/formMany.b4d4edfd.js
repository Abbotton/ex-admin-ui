var J=Object.defineProperty;var I=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var R=(t,i,r)=>i in t?J(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,x=(t,i)=>{for(var r in i||(i={}))K.call(i,r)&&R(t,r,i[r]);if(I)for(var r of I(i))Q.call(i,r)&&R(t,r,i[r]);return t};import"./vue.ba0abfb8.js";import{S as X}from"./sortablejs.412b554c.js";import{_ as Y,A as E,t as u,f as P}from"./index.87ae8e72.js";import{r as j,q as Z,n as ee,a as te,w as q,aW as p,aR as l,at as h,ar as d,bd as n,R as s,ai as c,as as m,c as g,G as O,u as e,au as ae,aV as oe,W as le,M as z,P as B}from"./@vue.cfb5b4bf.js";import"./vue-router.49809928.js";import"./@vueuse.dbb03eba.js";import"./vue-demi.a71c3140.js";import"./js-md5.5179c6be.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./lodash.c9cf1bdb.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";import"./ant-design-vue.5301e143.js";import"./@ant-design.8f7116f5.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.8a2ffed6.js";import"./dayjs.38e390ea.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./js-cookie.31874410.js";/* empty css                     */import"./clipboard.099d05c9.js";import"./markdown-it.20180ffc.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.1971588a.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";const ne={class:"hasMany"},re={key:1},ie={key:0,style:{"margin-top":"5px"}},de={key:2},se={name:"ExFormMany"},ce=Object.assign(se,{props:{value:{type:Array,default:[]},limit:{type:Number,default:0},disabled:Boolean,drag:Boolean,itemData:Object,table:Boolean,field:String,title:String,columns:Array,recursion:{type:Array,default:[]}},emits:["update:value"],setup(t,{emit:i}){const r=t,C=j(-1),M=j();let a=Z(r.value.map((o,v)=>(o.ex_admin_id=v+1,o))),w=null;r.drag&&ee(()=>{let o;r.table?o=M.value.table.$el.querySelectorAll(".ant-table-content > table > tbody")[0]:o=M.value,w=X.create(o,{animation:1e3,onEnd:v=>{const b=a.splice(v.oldIndex,1)[0];a.splice(v.newIndex,0,b)}})}),te(o=>{w&&w.destroy()}),q(()=>r.value,o=>{a=o}),q(a,o=>{i("update:value",o)},{deep:!0});function F(){const o=x({},r.itemData);o.ex_admin_id=a.length+1,a.push(o)}function S(o){a.splice(o,1)}function A(){a.splice(0)}function T(o,v){return{onMouseenter:b=>{C.value=v},onMouseleave:b=>{C.value=-1}}}return(o,v)=>{const b=p("a-divider"),D=p("render"),U=p("caret-up-filled"),W=p("caret-down-filled"),G=p("close-circle-filled"),L=p("a-space"),H=p("a-table"),_=p("a-button"),N=p("a-form-item");return l(),h("div",ne,[t.title?(l(),d(b,{key:0,orientation:"left"},{default:n(()=>[s(c(t.title),1)]),_:1})):m("",!0),t.table?(l(),h("div",re,[g(H,{"row-key":"ex_admin_id",ref_key:"drag",ref:M,"data-source":e(a),bordered:"",columns:t.columns,size:"small",class:"table",pagination:!1,"custom-row":T},{headerCell:n(({column:k})=>[g(D,{data:k.header},null,8,["data"])]),bodyCell:n(({column:k,record:f,text:$,index:y})=>[k.type=="action"?(l(),d(L,{key:0},{default:n(()=>[t.disabled?m("",!0):(l(),h(O,{key:0},[C.value==y&&e(a).length>1&&y>0?(l(),d(U,{key:0,onClick:V=>e(E)(e(a),y)},{default:n(()=>[s(c(e(u)("FormMany.up")),1)]),_:2},1032,["onClick"])):m("",!0),C.value==y&&e(a).length>1&&y<e(a).length-1?(l(),d(W,{key:1,onClick:V=>e(P)(e(a),y)},{default:n(()=>[s(c(e(u)("FormMany.down")),1)]),_:2},1032,["onClick"])):m("",!0),C.value==y&&e(a).length>0?(l(),d(G,{key:2,style:{color:"red"},type:"dashed",onClick:V=>S(y)},{default:n(()=>[s(c(e(u)("FormMany.remove")),1)]),_:2},1032,["onClick"])):m("",!0)],64))]),_:2},1024)):(l(),d(D,{key:1,scopeProp:{$index:y,field:t.field,row:f,recursion:t.recursion},data:k.component},null,8,["scopeProp","data"]))]),_:1},8,["data-source","columns"]),t.disabled?m("",!0):(l(),h("div",ie,[t.limit==0||t.limit>e(a).length?(l(),d(_,{key:0,size:"small",type:"dashed",onClick:F},{default:n(()=>[s(c(e(u)("FormMany.add")),1)]),_:1})):m("",!0),t.limit==0||t.limit>e(a).length?(l(),d(_,{key:1,size:"small",type:"danger",onClick:A},{default:n(()=>[s(c(e(u)("FormMany.clear")),1)]),_:1})):m("",!0)]))])):(l(),h("div",de,[ae("div",{ref_key:"drag",ref:M},[(l(!0),h(O,null,oe(e(a),(k,f)=>(l(),h("div",{key:k.ex_admin_id},[le(o.$slots,"default",{$index:f,field:t.field,row:k,recursion:t.recursion},void 0,!0),t.disabled?m("",!0):(l(),d(N,{key:0,label:" ",colon:!1},{default:n(()=>[e(a).length-1==f&&(t.limit==0||t.limit>e(a).length)?(l(),d(_,{key:0,size:"small",type:"dashed",onClick:F},{default:n(()=>[s(c(e(u)("FormMany.add")),1)]),_:1})):m("",!0),z(g(_,{size:"small",type:"dashed",onClick:$=>S(f)},{default:n(()=>[s(c(e(u)("FormMany.remove")),1)]),_:2},1032,["onClick"]),[[B,e(a).length>0]]),z(g(_,{size:"small",onClick:$=>e(E)(e(a),f)},{default:n(()=>[s(c(e(u)("FormMany.up")),1)]),_:2},1032,["onClick"]),[[B,e(a).length>1&&f>0]]),z(g(_,{size:"small",onClick:$=>e(P)(e(a),f)},{default:n(()=>[s(c(e(u)("FormMany.down")),1)]),_:2},1032,["onClick"]),[[B,e(a).length>1&&f<e(a).length-1]]),e(a).length-1==f&&(t.limit==0||t.limit>e(a).length)?(l(),d(_,{key:1,size:"small",type:"dashed",onClick:A},{default:n(()=>[s(c(e(u)("FormMany.clear")),1)]),_:1})):m("",!0)]),_:2},1024)),g(b)]))),128))],512),e(a).length==0&&!t.disabled?(l(),d(N,{key:0,label:" ",colon:!1},{default:n(()=>[g(_,{size:"small",type:"dashed",onClick:F},{default:n(()=>[s(c(e(u)("FormMany.add")),1)]),_:1})]),_:1})):m("",!0)]))])}}});var Ye=Y(ce,[["__scopeId","data-v-c4d4d9b8"]]);export{Ye as default};