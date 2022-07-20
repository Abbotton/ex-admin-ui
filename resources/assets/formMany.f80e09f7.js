var K=Object.defineProperty;var V=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var N=(t,i,n)=>i in t?K(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,E=(t,i)=>{for(var n in i||(i={}))Q.call(i,n)&&N(t,n,i[n]);if(V)for(var n of V(i))X.call(i,n)&&N(t,n,i[n]);return t};import"./vue.fe178274.js";import{b as Y}from"./@vueuse.61d27e13.js";import{S as Z}from"./sortablejs.412b554c.js";import{_ as ee,A as P,t as d,f as j}from"./index.3dc648a8.js";import{r as G,n as te,a as ae,aW as f,aR as o,at as k,ar as s,bd as l,R as c,ai as m,as as u,c as v,G as H,u as e,au as oe,aV as le,W as ne,M as D,P as B}from"./@vue.9a7efb20.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./vue-demi.819cf47c.js";import"./js-md5.5179c6be.js";import"./vue-router.ac7a6022.js";import"./js-cookie.31874410.js";import"./ant-design-vue.1a08bbd0.js";import"./@ant-design.e295b84c.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./dayjs.38e390ea.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./lodash.c9cf1bdb.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";/* empty css                     */import"./clipboard.099d05c9.js";import"./markdown-it.80c3a67b.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.75eb798b.js";const re={class:"hasMany"},ie={key:1},de={key:1},se={key:0,style:{"margin-top":"5px"}},ce={key:2},me={name:"ExFormMany"},ue=Object.assign(me,{props:{value:{type:Array,default:[]},limit:{type:Number,default:0},disabled:Boolean,drag:Boolean,itemData:Object,table:Boolean,field:String,title:String,columns:Array,recursion:{type:Array,default:[]}},emits:["update:value"],setup(t,{emit:i}){const n=t;n.drag&&n.columns.unshift({type:"sortDrag",align:"center",dataIndex:"sortDrag"});const C=G(-1),M=G(),a=Y(n,"value",i);a.value.forEach((r,h)=>(r.ex_admin_id=h+1,r));let F=null;n.drag&&te(()=>{let r;n.table?r=M.value.table.$el.querySelectorAll(".ant-table-content > table > tbody")[0]:r=M.value,F=Z.create(r,{animation:1e3,handle:".sortHandel",onEnd:h=>{var b=h.newIndex-1,w=h.oldIndex-1;const x=a.value.splice(w,1)[0];a.value.splice(b,0,x)}})}),ae(r=>{F&&F.destroy()});function $(){const r=E({},n.itemData);r.ex_admin_id=a.value.length+1,a.value.push(r)}function I(r){a.value.splice(r,1)}function S(){a.value.splice(0)}function O(r,h){return{onMouseenter:b=>{C.value=h},onMouseleave:b=>{C.value=-1}}}return(r,h)=>{const b=f("a-divider"),w=f("render"),x=f("caret-up-filled"),T=f("caret-down-filled"),U=f("close-circle-filled"),W=f("a-space"),q=f("drag-outlined"),L=f("a-tooltip"),J=f("a-table"),g=f("a-button"),A=f("a-form-item");return o(),k("div",re,[t.title?(o(),s(b,{key:0,orientation:"left"},{default:l(()=>[c(m(t.title),1)]),_:1})):u("",!0),t.table?(o(),k("div",ie,[v(J,{"row-key":"ex_admin_id",ref_key:"dragRef",ref:M,scroll:{x:"max-content"},"data-source":e(a),bordered:"",columns:t.columns,size:"small",class:"table",pagination:!1,"custom-row":O},{headerCell:l(({column:y})=>[v(w,{data:y.header},null,8,["data"])]),bodyCell:l(({column:y,record:p,text:z,index:_})=>[y.type=="action"?(o(),s(W,{key:0},{default:l(()=>[t.disabled?u("",!0):(o(),k(H,{key:0},[C.value==_&&e(a).length>1&&_>0?(o(),s(x,{key:0,onClick:R=>e(P)(e(a),_)},{default:l(()=>[c(m(e(d)("FormMany.up")),1)]),_:2},1032,["onClick"])):u("",!0),C.value==_&&e(a).length>1&&_<e(a).length-1?(o(),s(T,{key:1,onClick:R=>e(j)(e(a),_)},{default:l(()=>[c(m(e(d)("FormMany.down")),1)]),_:2},1032,["onClick"])):u("",!0),C.value==_&&e(a).length>0?(o(),s(U,{key:2,style:{color:"red"},type:"dashed",onClick:R=>I(_)},{default:l(()=>[c(m(e(d)("FormMany.remove")),1)]),_:2},1032,["onClick"])):u("",!0)],64))]),_:2},1024)):y.type=="sortDrag"?(o(),k("div",de,[v(L,{placement:"right",title:e(d)("Grid.sortDrag")},{default:l(()=>[v(q,{class:"sortHandel","data-field":y.dataIndex,style:{"font-weight":"bold",cursor:"grab"}},null,8,["data-field"])]),_:2},1032,["title"])])):(o(),s(w,{key:2,scopeProp:{$index:_,field:t.field,row:p,recursion:t.recursion},data:y.component},null,8,["scopeProp","data"]))]),_:1},8,["data-source","columns"]),t.disabled?u("",!0):(o(),k("div",se,[t.limit==0||t.limit>e(a).length?(o(),s(g,{key:0,size:"small",type:"dashed",onClick:$},{default:l(()=>[c(m(e(d)("FormMany.add")),1)]),_:1})):u("",!0),t.limit==0||t.limit>e(a).length?(o(),s(g,{key:1,size:"small",type:"danger",onClick:S},{default:l(()=>[c(m(e(d)("FormMany.clear")),1)]),_:1})):u("",!0)]))])):(o(),k("div",ce,[oe("div",{ref_key:"dragRef",ref:M},[(o(!0),k(H,null,le(e(a),(y,p)=>(o(),k("div",{key:y.ex_admin_id},[ne(r.$slots,"default",{$index:p,field:t.field,row:y,recursion:t.recursion},void 0,!0),t.disabled?u("",!0):(o(),s(A,{key:0,label:" ",colon:!1},{default:l(()=>[e(a).length-1==p&&(t.limit==0||t.limit>e(a).length)?(o(),s(g,{key:0,size:"small",type:"dashed",onClick:$},{default:l(()=>[c(m(e(d)("FormMany.add")),1)]),_:1})):u("",!0),D(v(g,{size:"small",type:"dashed",onClick:z=>I(p)},{default:l(()=>[c(m(e(d)("FormMany.remove")),1)]),_:2},1032,["onClick"]),[[B,e(a).length>0]]),D(v(g,{size:"small",onClick:z=>e(P)(e(a),p)},{default:l(()=>[c(m(e(d)("FormMany.up")),1)]),_:2},1032,["onClick"]),[[B,e(a).length>1&&p>0]]),D(v(g,{size:"small",onClick:z=>e(j)(e(a),p)},{default:l(()=>[c(m(e(d)("FormMany.down")),1)]),_:2},1032,["onClick"]),[[B,e(a).length>1&&p<e(a).length-1]]),e(a).length-1==p&&(t.limit==0||t.limit>e(a).length)?(o(),s(g,{key:1,size:"small",type:"dashed",onClick:S},{default:l(()=>[c(m(e(d)("FormMany.clear")),1)]),_:1})):u("",!0)]),_:2},1024)),v(b)]))),128))],512),e(a).length==0&&!t.disabled?(o(),s(A,{key:0,label:" ",colon:!1},{default:l(()=>[v(g,{size:"small",type:"dashed",onClick:$},{default:l(()=>[c(m(e(d)("FormMany.add")),1)]),_:1})]),_:1})):u("",!0)]))])}}});var tt=ee(ue,[["__scopeId","data-v-40cb7548"]]);export{tt as default};