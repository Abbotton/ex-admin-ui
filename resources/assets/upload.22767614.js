import"./vue.ba0abfb8.js";import{S as J}from"./sortablejs.412b554c.js";import{_ as z,A as Z,f as ee,g as te,l as le,t as L}from"./index.b308c870.js";import{r as _,w as $,n as E,z as ae,aW as r,aR as c,at as v,G as O,aV as W,ah as K,M as w,P as x,au as f,c as n,u as U,ai as F,U as ie,a as oe,ar as C,as as S,bd as h,W as M,R as ne,Q as D,aT as ue,aS as se}from"./@vue.cfb5b4bf.js";import{u as re}from"./uploader.45688d73.js";import{m as P}from"./ant-design-vue.5301e143.js";import"./vue-router.49809928.js";import"./@vueuse.4eee7ca2.js";import"./vue-demi.a71c3140.js";import"./js-md5.5179c6be.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./lodash.c9cf1bdb.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";import"./js-cookie.31874410.js";import"./@ant-design.8f7116f5.js";import"./@ctrl.fa7cbd46.js";/* empty css                     */import"./dayjs.38e390ea.js";import"./clipboard.099d05c9.js";import"./markdown-it.20180ffc.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.1971588a.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.8a2ffed6.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./simple-uploader.js.04c42387.js";import"./ali-oss.ce3a624c.js";import"./qiniu-js.8b174ca3.js";import"./querystring.62f12500.js";const de=["onMouseover"],ce={class:"image-tool"},pe={name:"ExImagePreview"},me=Object.assign(pe,{props:{value:Array,width:{type:Number,default:80},height:{type:Number,default:80}},emits:["update:value"],setup(e,{emit:g}){const i=e,k=_(),d=_(JSON.parse(JSON.stringify(i.value)));$(()=>i.value,o=>{d.value=o}),$(d,o=>{g("update:value",o)},{deep:!0});const b=_(-1);let u;E(()=>{u=J.create(k.value,{handle:".image",onEnd:o=>{const y=d.value.splice(o.oldIndex,1)[0];d.value.splice(o.newIndex,0,y)}})}),ae(o=>{u&&u.destroy()});function p(o){b.value=o}function a(o){d.value.splice(o,1)}return(o,y)=>{const I=r("caret-left-outlined"),m=r("delete-outlined"),j=r("caret-right-outlined"),N=r("a-image");return c(),v("div",{class:"file-list",ref_key:"sortFileList",ref:k},[(c(!0),v(O,null,W(d.value,(t,l)=>(c(),v("div",{class:"image",key:t,style:K({height:e.height+"px",width:e.width+"px"}),onMouseover:B=>p(l),onMouseout:y[0]||(y[0]=B=>p(-1))},[w(f("div",ce,[n(I,{onClick:B=>U(Z)(d.value,l)},null,8,["onClick"]),n(m,{onClick:a}),n(j,{onClick:B=>U(ee)(d.value,l)},null,8,["onClick"])],512),[[x,b.value==l]]),n(N,{fit:"contain",src:t,width:e.width-2,height:e.height-2,style:{"border-radius":"5%",cursor:"pointer","object-fit":"contain"}},null,8,["src","width","height"])],44,de))),128))],512)}}});var H=z(me,[["__scopeId","data-v-8eb7a56e"]]);const ve={class:"file-item"},fe=["href"],ge={class:"file-icon"},ye={class:"text"},_e={class:"label"},he={name:"ExFilePreview"},be=Object.assign(he,{props:{value:Array},emits:["update:value"],setup(e,{emit:g}){const i=e,k=_(),d=_(JSON.parse(JSON.stringify(i.value)));$(()=>i.value,u=>{d.value=u}),$(d,u=>{g("update:value",u)},{deep:!0}),E(()=>{J.create(k.value,{handle:".file-item",onEnd:u=>{const p=d.value.splice(u.oldIndex,1)[0];d.value.splice(u.newIndex,0,p)}})});function b(u){d.value.splice(u,1)}return(u,p)=>{const a=r("a-image"),o=r("vertical-align-bottom-outlined"),y=r("delete-outlined"),I=r("check-outlined");return c(),v("div",{ref_key:"sortFileList",ref:k},[(c(!0),v(O,null,W(d.value,m=>(c(),v("div",ve,[f("a",{class:"left",target:"_blank",href:m},[f("div",ge,[n(a,{src:U(te)(m),width:32,height:32},null,8,["src"])]),n(o,{class:"download"}),f("span",ye,F(U(le)(m)),1)],8,fe),n(y,{onClick:b,class:"delete",style:{cursor:"pointer"}}),f("label",_e,[n(I,{class:"success"})])]))),256))],512)}}});var Se=z(be,[["__scopeId","data-v-5048745a"]]);const ke=e=>(ue("data-v-7c468e0c"),e=e(),se(),e),we={class:"uploader"},xe={class:"file-upload"},$e=ke(()=>f("i",{class:"far fa-folder-open"},null,-1)),Ie={key:2,class:"file-list"},Ne={style:{"font-size":"12px"}},Be={name:"ExUploader"},Ue=Object.assign(Be,{props:{value:[String,Array],finder:[Boolean,Object],action:String,options:{type:Object,default:{}},imageWidth:{type:Number,default:80},imageHeight:{type:Number,default:80},type:{type:String,default:"file"},params:{type:Object,default:{}},headers:{type:Object,default:{}},disk:{type:String,default:"local"},driver:{type:String,default:"local"},directory:{type:String,default:""},chunk:{type:Boolean,default:!0},chunkSize:{type:Number,default:1},input:{type:Boolean,default:!1},limit:{type:Number,default:0},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},progress:{type:Boolean,default:!0},onlyShow:{type:Boolean,default:!0},isDirectory:{type:Boolean,default:!1},accept:{type:String,default:"*"},ext:{type:Array,default:[]},fileSize:{type:Number,default:0},domain:{type:String,default:""},accessKey:{type:String,default:""},secretKey:{type:String,default:""},bucket:{type:String,default:""},region:{type:String,default:""},uploadToken:String},emits:["update:value","success","error","progress","fileSubmit","addFile"],setup(e,{emit:g}){const i=e,k={x:"max-content",y:window.innerHeight/2},d=ie(),b=_(),u=_(!1),p=_(0),a=_([]),o=_(""),y=_("");$(()=>i.value,t=>{I(t)}),$(a,t=>{i.limit>0&&t.length>i.limit&&(a.value=a.value.slice(0,i.limit)),o.value=t.join("|"),i.multiple?g("update:value",t):g("update:value",o.value)},{deep:!0}),I(i.value);function I(t){i.multiple?a.value=t:t?a.value=[t]:a.value=[]}let m=null;$(()=>i.params,t=>{m.options.params=t}),oe(()=>{m.uploader.cancel(),m=null}),j();function j(){E(()=>{m=re(i),m.input(b.value),m.watch({addFile:(t,l)=>{if(g("addFile",t,l),i.ext.length>0&&i.ext.indexOf(t.getExtension())===-1)return P.error("\u53EA\u5141\u8BB8\u4E0A\u4F20\u7C7B\u578B\u683C\u5F0F "+i.ext.join(",")),!1;if(i.fileSize>0&&t.size>i.fileSize)return P.error("\u4E0A\u4F20\u6587\u4EF6\u8D85\u51FA\u9650\u5236\u5927\u5C0F"+d.fileSizeText),!1},fileSubmit:t=>{if(g("fileSubmit",t),i.multiple&&i.limit>0&&t.length+a.value.length>i.limit)return P.error("\u6700\u5927\u5141\u8BB8\u4E0A\u4F20"+i.limit+"\u4E2A\u6587\u4EF6"),!1},success:t=>{g("success",t),i.multiple||(a.value=[]),a.value.push(t),p.value=0},verifyProgress:t=>{y.value="\u6821\u9A8C\u4E2D",p.value=t},progress:t=>{g("progress",t),y.value="\u4E0A\u4F20\u4E2D",p.value=t},error:t=>{g("error",t)}})})}function N(t){a.value=o.value.split("|"),a.value=a.value.filter(function(l){return l&&l.trim()})}return(t,l)=>{const B=r("a-input"),R=r("a-popover"),G=r("cloud-upload-outlined"),T=r("a-button"),A=r("a-space"),V=r("a-progress"),Q=r("plus-outlined"),q=r("render"),X=r("a-form-item-rest"),Y=r("a-modal");return c(),v("div",we,[e.type=="file"&&!e.onlyShow?(c(),C(Se,{key:0,value:a.value,"onUpdate:value":l[0]||(l[0]=s=>a.value=s)},null,8,["value"])):S("",!0),f("div",xe,[e.type=="image"?(c(),C(R,{key:0},{content:h(()=>[n(H,{value:a.value,"onUpdate:value":l[1]||(l[1]=s=>a.value=s)},null,8,["value"])]),default:h(()=>[e.input?(c(),C(B,{key:0,value:o.value,"onUpdate:value":l[2]||(l[2]=s=>o.value=s),disabled:e.disabled,onBlur:N,onPressEnter:N,allowClear:""},null,8,["value","disabled"])):S("",!0)]),_:1})):(c(),v(O,{key:1},[e.input?(c(),C(B,{key:0,value:o.value,"onUpdate:value":l[3]||(l[3]=s=>o.value=s),disabled:e.disabled,onBlur:N,onPressEnter:N,allowClear:""},null,8,["value","disabled"])):S("",!0)],64)),e.type=="file"||e.input?(c(),v("span",{key:2,ref_key:"element",ref:b},[M(t.$slots,"default",{},()=>[w(n(A,null,{default:h(()=>[n(T,null,{icon:h(()=>[n(G)]),default:h(()=>[ne(" "+F(U(L)("Uploader.upload")),1)]),_:1}),e.finder?(c(),C(T,{key:0,onClick:l[4]||(l[4]=D(s=>u.value=!0,["stop"]))},{icon:h(()=>[$e]),_:1})):S("",!0)]),_:1},512),[[x,e.multiple&&(e.limit==0||a.value.length<e.limit)||a.value.length==0||e.onlyShow]])],!0)],512)):S("",!0)]),(e.type=="file"||e.input)&&!e.progress?(c(),v(O,{key:1},[w(n(V,{status:"active",percent:p.value},null,8,["percent"]),[[x,p.value>0]]),w(f("div",null,F(y.value),513),[[x,p.value>0]])],64)):S("",!0),e.type=="image"&&!e.input?(c(),v("div",Ie,[n(H,{value:a.value,"onUpdate:value":l[5]||(l[5]=s=>a.value=s)},null,8,["value"]),w(f("span",{ref_key:"element",ref:b},[M(t.$slots,"default",{},()=>[f("div",{class:"image-btn",style:K({height:e.imageHeight+"px",width:e.imageWidth+"px"})},[w(n(V,{type:"circle",percent:p.value,width:e.imageHeight},{format:h(s=>[f("div",null,F(s)+"%",1),f("div",Ne,F(y.value),1)]),_:1},8,["percent","width"]),[[x,p.value>0]]),n(A,{direction:"vertical"},{default:h(()=>[w(n(Q,null,null,512),[[x,!p.value]]),e.finder?(c(),v("i",{key:0,class:"far fa-folder-open",onClick:l[6]||(l[6]=D(s=>u.value=!0,["stop"]))})):S("",!0)]),_:1})],4)],!0)],512),[[x,e.multiple&&(e.limit==0||a.value.length<e.limit)||a.value.length==0]])])):S("",!0),n(Y,{visible:u.value,"onUpdate:visible":l[8]||(l[8]=s=>u.value=s),width:"70%",title:U(L)("Uploader.finder"),onOk:l[9]||(l[9]=s=>u.value=!1)},{default:h(()=>[n(X,null,{default:h(()=>[n(q,{data:e.finder,selection:a.value,"onUpdate:selection":l[7]||(l[7]=s=>a.value=s),"selection-limit":e.limit,"selection-type":e.multiple?"checkbox":"radio",scroll:k},null,8,["data","selection","selection-limit","selection-type"])]),_:1})]),_:1},8,["visible","title"])])}}});var St=z(Ue,[["__scopeId","data-v-7c468e0c"]]);export{St as default};
