import"./vue.a928b16e.js";import{S as J}from"./sortablejs.412b554c.js";import{_ as P,A as Y,m as Z,n as ee,o as te,t as L}from"./index.0f55eb16.js";import{r as _,w as $,n as z,k as le,aW as r,aR as c,at as m,F as j,aV as W,ah as K,z as x,E as I,au as f,c as o,u as F,ai as O,M as ae,a as ie,ar as C,as as k,bd as h,P as M,I as ne,G as D,aT as oe,aS as ue}from"./@vue.a7cd1c69.js";import{u as se}from"./uploader.9f1941d9.js";import{m as E}from"./ant-design-vue.d3bb1542.js";import"./vue-router.49bf991f.js";import"./js-md5.911d3a00.js";import"./@babel.2e32324c.js";import"./regenerator-runtime.8e24db72.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";import"./dayjs.b753ae88.js";import"./js-cookie.31874410.js";import"./lodash.a1aa704a.js";import"./@ant-design.8381fcec.js";import"./@ctrl.fa7cbd46.js";/* empty css                     */import"./clipboard.0f95154e.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.8a2ffed6.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./simple-uploader.js.2c7eb4f6.js";import"./ali-oss.176c76b1.js";import"./qiniu-js.8b174ca3.js";import"./querystring.62f12500.js";const re=["onMouseover"],de={class:"image-tool"},ce={name:"ExImagePreview"},pe=Object.assign(ce,{props:{value:Array,width:{type:Number,default:80},height:{type:Number,default:80}},emits:["update:value"],setup(e,{emit:g}){const i=e,S=_(),d=_(JSON.parse(JSON.stringify(i.value)));$(()=>i.value,n=>{d.value=n}),$(d,n=>{g("update:value",n)},{deep:!0});const b=_(-1);let u;z(()=>{u=J.create(S.value,{handle:".image",onEnd:n=>{const y=d.value.splice(n.oldIndex,1)[0];d.value.splice(n.newIndex,0,y)}})}),le(n=>{u&&u.destroy()});function p(n){b.value=n}function l(n){d.value.splice(n,1)}return(n,y)=>{const N=r("caret-left-outlined"),v=r("delete-outlined"),B=r("caret-right-outlined"),t=r("a-image");return c(),m("div",{class:"file-list",ref_key:"sortFileList",ref:S},[(c(!0),m(j,null,W(d.value,(a,w)=>(c(),m("div",{class:"image",key:a,style:K({height:e.height+"px",width:e.width+"px"}),onMouseover:U=>p(w),onMouseout:y[0]||(y[0]=U=>p(-1))},[x(f("div",de,[o(N,{onClick:U=>F(Y)(d.value,w)},null,8,["onClick"]),o(v,{onClick:l}),o(B,{onClick:U=>F(Z)(d.value,w)},null,8,["onClick"])],512),[[I,b.value==w]]),o(t,{fit:"contain",src:a,width:e.width-2,height:e.height-2,style:{"border-radius":"5%",cursor:"pointer","object-fit":"contain"}},null,8,["src","width","height"])],44,re))),128))],512)}}});var H=P(pe,[["__scopeId","data-v-8eb7a56e"]]);const ve={class:"file-item"},me=["href"],fe={class:"file-icon"},ge={class:"text"},ye={class:"label"},_e={name:"ExFilePreview"},he=Object.assign(_e,{props:{value:Array},emits:["update:value"],setup(e,{emit:g}){const i=e,S=_(),d=_(JSON.parse(JSON.stringify(i.value)));$(()=>i.value,u=>{d.value=u}),$(d,u=>{g("update:value",u)},{deep:!0}),z(()=>{J.create(S.value,{handle:".file-item",onEnd:u=>{const p=d.value.splice(u.oldIndex,1)[0];d.value.splice(u.newIndex,0,p)}})});function b(u){d.value.splice(u,1)}return(u,p)=>{const l=r("a-image"),n=r("vertical-align-bottom-outlined"),y=r("delete-outlined"),N=r("check-outlined");return c(),m("div",{ref_key:"sortFileList",ref:S},[(c(!0),m(j,null,W(d.value,v=>(c(),m("div",ve,[f("a",{class:"left",target:"_blank",href:v},[f("div",fe,[o(l,{src:F(ee)(v),width:32,height:32},null,8,["src"])]),o(n,{class:"download"}),f("span",ge,O(F(te)(v)),1)],8,me),o(y,{onClick:b,class:"delete",style:{cursor:"pointer"}}),f("label",ye,[o(N,{class:"success"})])]))),256))],512)}}});var be=P(he,[["__scopeId","data-v-5048745a"]]);const ke=e=>(oe("data-v-7bd421df"),e=e(),ue(),e),Se={class:"file-upload"},we=ke(()=>f("i",{class:"far fa-folder-open"},null,-1)),xe={key:2,class:"file-list"},Ie={style:{"font-size":"12px"}},$e={name:"ExUploader"},Ne=Object.assign($e,{props:{value:[String,Array],finder:[Boolean,Object],action:String,options:{type:Object,default:{}},imageWidth:{type:Number,default:80},imageHeight:{type:Number,default:80},type:{type:String,default:"file"},params:{type:Object,default:{}},headers:{type:Object,default:{}},disk:{type:String,default:"local"},driver:{type:String,default:"local"},directory:{type:String,default:""},chunk:{type:Boolean,default:!0},chunkSize:{type:Number,default:1},input:{type:Boolean,default:!1},limit:{type:Number,default:0},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},progress:{type:Boolean,default:!0},onlyShow:{type:Boolean,default:!0},isDirectory:{type:Boolean,default:!1},accept:{type:String,default:"*"},ext:{type:Array,default:[]},fileSize:{type:Number,default:0},domain:{type:String,default:""},accessKey:{type:String,default:""},secretKey:{type:String,default:""},bucket:{type:String,default:""},region:{type:String,default:""},uploadToken:String},emits:["update:value","success","error","progress","fileSubmit","addFile"],setup(e,{emit:g}){const i=e,S={x:"max-content",y:window.innerHeight/2},d=ae(),b=_(),u=_(!1),p=_(0),l=_([]),n=_(""),y=_("");$(()=>i.value,t=>{N(t)}),$(l,t=>{i.limit>0&&t.length>i.limit&&(l.value=l.value.slice(0,i.limit)),n.value=t.join("|"),i.multiple?g("update:value",t):g("update:value",n.value)},{deep:!0}),N(i.value);function N(t){i.multiple?l.value=t:t?l.value=[t]:l.value=[]}let v=null;$(()=>i.params,t=>{v.options.params=t}),z(()=>{v=se(i),v.input(b.value),v.watch({addFile:(t,a)=>{if(g("addFile",t,a),i.ext.length>0&&i.ext.indexOf(t.getExtension())===-1)return E.error("\u53EA\u5141\u8BB8\u4E0A\u4F20\u7C7B\u578B\u683C\u5F0F "+i.ext.join(",")),!1;if(i.fileSize>0&&t.size>i.fileSize)return E.error("\u4E0A\u4F20\u6587\u4EF6\u8D85\u51FA\u9650\u5236\u5927\u5C0F"+d.fileSizeText),!1},fileSubmit:t=>{if(g("fileSubmit",t),i.multiple&&i.limit>0&&t.length+l.value.length>i.limit)return E.error("\u6700\u5927\u5141\u8BB8\u4E0A\u4F20"+i.limit+"\u4E2A\u6587\u4EF6"),!1},success:t=>{g("success",t),i.multiple||(l.value=[]),l.value.push(t),p.value=0},verifyProgress:t=>{y.value="\u6821\u9A8C\u4E2D",p.value=t},progress:t=>{g("progress",t),y.value="\u4E0A\u4F20\u4E2D",p.value=t},error:t=>{g("error",t)}})}),ie(()=>{v.uploader.cancel(),v=null});function B(t){l.value=n.value.split("|"),l.value=l.value.filter(function(a){return a&&a.trim()})}return(t,a)=>{const w=r("a-input"),U=r("a-popover"),G=r("cloud-upload-outlined"),T=r("a-button"),A=r("a-space"),V=r("a-progress"),R=r("plus-outlined"),q=r("render"),Q=r("a-form-item-rest"),X=r("a-modal");return c(),m("div",null,[e.type=="file"&&!e.onlyShow?(c(),C(be,{key:0,value:l.value,"onUpdate:value":a[0]||(a[0]=s=>l.value=s)},null,8,["value"])):k("",!0),f("div",Se,[e.type=="image"?(c(),C(U,{key:0},{content:h(()=>[o(H,{value:l.value,"onUpdate:value":a[1]||(a[1]=s=>l.value=s)},null,8,["value"])]),default:h(()=>[e.input?(c(),C(w,{key:0,value:n.value,"onUpdate:value":a[2]||(a[2]=s=>n.value=s),disabled:e.disabled,onBlur:B,onPressEnter:B,allowClear:""},null,8,["value","disabled"])):k("",!0)]),_:1})):(c(),m(j,{key:1},[e.input?(c(),C(w,{key:0,value:n.value,"onUpdate:value":a[3]||(a[3]=s=>n.value=s),disabled:e.disabled,onBlur:B,onPressEnter:B,allowClear:""},null,8,["value","disabled"])):k("",!0)],64)),e.type=="file"||e.input?(c(),m("span",{key:2,ref_key:"element",ref:b},[M(t.$slots,"default",{},()=>[x(o(A,null,{default:h(()=>[o(T,null,{icon:h(()=>[o(G)]),default:h(()=>[ne(" "+O(F(L)("Uploader.upload")),1)]),_:1}),e.finder?(c(),C(T,{key:0,onClick:a[4]||(a[4]=D(s=>u.value=!0,["stop"]))},{icon:h(()=>[we]),_:1})):k("",!0)]),_:1},512),[[I,e.multiple&&(e.limit==0||l.value.length<e.limit)||l.value.length==0||e.onlyShow]])],!0)],512)):k("",!0)]),(e.type=="file"||e.input)&&!e.progress?(c(),m(j,{key:1},[x(o(V,{status:"active",percent:p.value},null,8,["percent"]),[[I,p.value>0]]),x(f("div",null,O(y.value),513),[[I,p.value>0]])],64)):k("",!0),e.type=="image"&&!e.input?(c(),m("div",xe,[o(H,{value:l.value,"onUpdate:value":a[5]||(a[5]=s=>l.value=s)},null,8,["value"]),x(f("span",{ref_key:"element",ref:b},[M(t.$slots,"default",{},()=>[f("div",{class:"image-btn",style:K({height:e.imageHeight+"px",width:e.imageWidth+"px"})},[x(o(V,{type:"circle",percent:p.value,width:e.imageHeight},{format:h(s=>[f("div",null,O(s)+"%",1),f("div",Ie,O(y.value),1)]),_:1},8,["percent","width"]),[[I,p.value>0]]),o(A,{direction:"vertical"},{default:h(()=>[x(o(R,null,null,512),[[I,!p.value]]),e.finder?(c(),m("i",{key:0,class:"far fa-folder-open",onClick:a[6]||(a[6]=D(s=>u.value=!0,["stop"]))})):k("",!0)]),_:1})],4)],!0)],512),[[I,e.multiple&&(e.limit==0||l.value.length<e.limit)||l.value.length==0]])])):k("",!0),o(X,{visible:u.value,"onUpdate:visible":a[8]||(a[8]=s=>u.value=s),width:"70%",title:F(L)("Uploader.finder"),onOk:a[9]||(a[9]=s=>u.value=!1)},{default:h(()=>[o(Q,null,{default:h(()=>[o(q,{data:e.finder,selection:l.value,"onUpdate:selection":a[7]||(a[7]=s=>l.value=s),"selection-limit":e.limit,"selection-type":e.multiple?"checkbox":"radio",scroll:S},null,8,["data","selection","selection-limit","selection-type"])]),_:1})]),_:1},8,["visible","title"])])}}});var it=P(Ne,[["__scopeId","data-v-7bd421df"]]);export{it as default};
