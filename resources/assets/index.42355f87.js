var se=Object.defineProperty;var ae=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var re=(e,t,l)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,le=(e,t)=>{for(var l in t||(t={}))ue.call(t,l)&&re(e,l,t[l]);if(ae)for(var l of ae(t))pe.call(t,l)&&re(e,l,t[l]);return e};import{_ as ce,s as C,o as te,c as me}from"./index.458841b7.js";import{l as fe}from"./lodash.c9cf1bdb.js";import"./vue.fe178274.js";import{r as X,d as ge,q as he,a as be,n as ie,S as _e,t as ve,aW as f,aR as w,ar as O,bd as n,c as a,as as V,au as g,at as A,aV as W,Q as de,af as H,R as I,ai as M,G as Q,ah as Ie,aT as ye,aS as we}from"./@vue.9a7efb20.js";import"./js-md5.5179c6be.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./vue-router.ac7a6022.js";import"./js-cookie.31874410.js";import"./ant-design-vue.1a08bbd0.js";import"./@ant-design.e295b84c.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./dayjs.38e390ea.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./spark-md5.2cc5764b.js";import"./@vueuse.61d27e13.js";import"./vue-demi.819cf47c.js";import"./axios.e3200588.js";/* empty css                     */import"./clipboard.099d05c9.js";import"./markdown-it.80c3a67b.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.75eb798b.js";let q,B,K;class Y{constructor(t,l){this.component=X({ref:null,component:null}),this.el=t,this.ghost=null,this.options=Object.assign({sort:!0},l||{}),t.ondragover=h=>{h.preventDefault(),h.stopPropagation()},t.ondrop=h=>{B.remove(),this.eventParse(h);const _=q.__vnode.props.draggableData;this.el!==K&&_.attribute["drag-group"]==="container"&&(this.component.value.component=null,setTimeout(()=>{this.component.value.component=JSON.parse(JSON.stringify(_))})),this.update(),h.stopPropagation()},this.update()}ondragend(t){B.remove(),t.stopPropagation()}ondragover(t,l){this.el!==K&&t.item!==t.targetItem&&(this.newIndex=l,this.swap(t,B)=="after"&&this.newIndex++,t.newIndex=l),this.isSort(t)&&(this.newIndex=l,t.newIndex=l,this.swap(t,t.item)),t.preventDefault(),t.stopPropagation()}isSort(t){return!!(this.options.sort&&t.group&&t.group===t.targetGoup&&this.getParent(t.targetItem).__vueParentComponent.uid===this.getParent(t.item).__vueParentComponent.uid)}getParent(t){const l=this.findParent(t);return l===document?t:l}findParent(t){let l=t.parentNode;return l===document||l.getAttribute("drag-group")?l:this.findParent(l)}swap(t,l){const h=t.targetItem.getBoundingClientRect();if(t.targetItem.__vnode.props["drag-put"]===!1)return t.y<h.top+h.height/2?(t.targetItem.parentNode.insertBefore(l,t.targetItem),"before"):(t.targetItem.parentNode.insertBefore(l,t.targetItem.nextSibling),"after");t.targetItem.insertBefore(l,t.targetItem.childNodes[0])}ondrop(t){if(this.isSort(t)){const l=this.getParent(t.targetItem).__vnode.props.draggableData.content.default,h=l.splice(t.oldIndex,1)[0];l.splice(t.newIndex,0,h)}if(this.el!==K){this.targetDraging.__vnode.props["drag-put"]===!1&&(this.targetDraging=this.getParent(t.targetItem));const l=q.__vnode.props.draggableData;if(l.name=="ExForm"&&this.targetDraging.__vnode.props.draggableData.name=="ExForm"){t.stopPropagation();return}this.targetDraging.__vnode.props.draggableData.content.default||(this.targetDraging.__vnode.props.draggableData.content.default=[]),l.name=="AFormItem"&&(l.attribute.validateFormField=this.targetDraging.__vnode.props.draggableData.bindAttribute.validateField,l.where={}),this.targetDraging.__vnode.props.draggableData.content.default.splice(t.newIndex,0,l),this.options.onAdd&&this.options.onAdd(t,q.__vnode.props.draggableData),this.forceUpdate()}this.update(),t.stopPropagation()}forceUpdate(){this.component.value.ref.forceUpdate()}eventParse(t,l){return t.item=q,t.oldIndex=this.oldIndex,t.group=this.group,t.targetGoup=l,t.newIndex=this.newIndex,t.targetItem=this.targetDraging,t}generateDrag(t){const l=t.getAttribute("drag-group");t.removeAttribute("draggableData");const h=this.getParent(t);let _=h.__vueParentComponent.uid;h===t&&(_=Math.random()),this.sortable[_]||(this.sortable[_]=[]);const D=this.sortable[_].length;this.sortable[_].push(t),t.setAttribute("draggable",!0),t.ondragstart=i=>{K=this.el,q=t,B=t.cloneNode(!0),B.ondragover=s=>{s.preventDefault(),s.stopPropagation()},this.group=l,this.oldIndex=D,i.stopPropagation(),t.ondragover=null},t.onclick=i=>{this.options.control&&(this.el.querySelectorAll("[drag-group]").forEach(s=>{s.removeAttribute("data-choose")}),t.setAttribute("data-choose",!0)),q=t,this.group=l,this.oldIndex=D,this.options.onChoose&&(i=this.eventParse(i,l),this.options.onChoose(i,t.__vnode.props.draggableData)),i.stopPropagation()},t.onmouseenter=i=>{i.target.classList.add("ex-drag"),i.stopPropagation()},t.onmouseover=i=>{if(this.options.control&&t.querySelectorAll(".ex-drag-delete").length==0){let s=document.createElement("span");s.className="ex-drag-copy",s.innerHTML='<i class="far fa-copy"></i>',s.onclick=y=>{h.__vnode.props.draggableData.content.default.splice(D,0,JSON.parse(JSON.stringify(t.__vnode.props.draggableData))),this.forceUpdate(),this.update(),y.preventDefault()},t.append(s),s=document.createElement("span"),s.className="ex-drag-delete",s.innerHTML='<i class="far fa-trash-alt"></i>',s.onclick=y=>{this.el.querySelectorAll("[drag-group]").forEach(k=>{k.onmouseover=null}),h.__vnode.props.draggableData.content.default.splice(D,1),this.forceUpdate(),this.update(),y.preventDefault()},t.append(s)}},t.onmouseleave=i=>{document.querySelectorAll(".ex-drag-copy").forEach(s=>{s.remove()}),document.querySelectorAll(".ex-drag-delete").forEach(s=>{s.remove()}),i.target.classList.remove("ex-drag"),i.stopPropagation()},t.ondragover=i=>{this.targetDraging=t,i=this.eventParse(i,l),this.ondragover(i,D)},t.ondrop=i=>{i=this.eventParse(i,l),this.ondrop(i),this.options.onDrop&&this.options.onDrop(i)},t.ondragend=i=>{i=this.eventParse(i,l),this.ondragend(i)}}update(){setTimeout(()=>{this.sortable={},this.el.querySelectorAll("[drag-group]").forEach(t=>{this.generateDrag(t)})},100)}}Y.create=function(e,t){return new Y(e,t)};const Ce=ge({name:"ExCurd",setup(){const e=he({controller:[],controllerIndex:-1,newController:{title:"",name:""},newMethod:{title:"",name:"",type:""},method:[],methodIndex:-1,drawingMain:{component:null,ref:null},componentList:[],settingForm:null,settingFormVisible:!1,index:-1,database:null,isSave:!0,methodTypes:[{value:"grid",label:"\u6570\u636E\u8868\u683C(grid)"},{value:"form",label:"\u8868\u5355(form)"},{value:"detail",label:"\u8BE6\u60C5(detail)"}]}),t=X(),l=X();let h=[],_=null;L(),addEventListener("keydown",s),addEventListener("keyup",y),be(()=>{removeEventListener("keydown",s),removeEventListener("keyup",y)});let D=0,i=0;function s(r){r.keyCode==17&&(D=1),r.keyCode==83&&(i=1),D==1&&i==1&&U()}function y(r){r.keyCode==17&&(D=0),r.keyCode==83&&(i=0)}function k(){P()}function L(){F(),E(),C("ex-admin/plugin-curd-controller-Index/getFormComponent").then(r=>{e.componentList=r.data,ie(()=>{h.push(Y.create(t.value.$el,{sort:!1})),_=Y.create(l.value,{control:!0,onChoose:function(d,o){o.name==="AFormItem"?e.settingForm=o.content.default[0].attribute.drawingForm:e.settingForm=o.attribute.drawingForm,e.settingFormVisible=!0},onAdd:d=>{R()}}),e.drawingMain=_.component.value,h.push(_)})})}function E(){C("ex-admin/plugin-curd-controller-Database/index").then(r=>{e.database=r})}const P=fe.exports.debounce(R,150);function R(){const r=e.drawingMain.component;let d=r.attribute.drawingForm,o=d.bind[d.bindAttribute.model];if(r.name=="ExForm"){const u=r.bindAttribute.model,p=r.bind[u];Object.assign(r.attribute,o),r.content.default||(r.content.default=[]),r.content.default.forEach(b=>{let m=b.content.default[0];d=m.attribute.drawingForm,o=d.bind[d.bindAttribute.model];for(let c in o)if(c=="title")b.attribute.label=o[c];else if(!(["name","default"].indexOf(c)>-1))if(c=="required")b.attribute.required=o[c];else if(c=="field"){let v=u+"."+o[c];m.bindAttribute[o.modelValue]=v,m.modelBind[o.modelValue]=v,b.attribute.name=[o[c]],d.content.default.forEach(x=>{if(x.attribute.name.indexOf("default")>-1)p[o[c]]=p[x.content.default[0].bindAttribute.value.replace(u+".","")],o.default=p[o[c]],x.content.default[0].bindAttribute.value=v,x.content.default[0].modelBind.value=v;else if(m.name==="ARangePicker"&&x.attribute.title==="\u9ED8\u8BA4\u503C"){p[o[c]]=p[x.content.default[0].bindAttribute.value.replace(u+".","")],o.default=p[o[c]],x.content.default[0].bindAttribute.value=v,x.content.default[0].modelBind.value=v;const T=m.attribute.startField;m.attribute.startField=u+"."+T.substr(T.indexOf(".")+1);const ne=m.attribute.endField;m.attribute.endField=u+"."+ne.substr(ne.indexOf(".")+1)}})}else if(["character","addonBefore","addonAfter","prefix","suffix"].indexOf(c)>-1&&o[c]){let v=_e(o[c]);Array.isArray(v)?m.content[c]=v:m.content[c]=[v]}else if(c==="config"){for(let v in o[c])v=="options"&&o[c].options_type==3&&(m.attribute.options=[],Object.assign(m.attribute.options,o[c][v]));if(m.name=="ExSelectTable"){let v="ex-admin/"+o[c].grid_class.replaceAll("\\","-")+"/"+o[c].grid_method,x={};o[c].params.forEach(T=>{x[T.var]=T.value}),te(m.attribute,"gridUrl",v),te(m.attribute,"params",x)}}else te(m.attribute,c,o[c])})}else if(r.name=="ExGrid"){const u=[];for(let p in o)p=="columns"?(o[p].forEach(b=>{u.push({dataIndex:b.field,title:b.label,type:b.form_type||"",header:{name:"html",attribute:{class:"ex_admin_table_th_name","data-tag":"span"},content:{default:[b.label]}}})}),o.switch.indexOf("hideAction")==-1&&u.push({dataIndex:"ExAdminAction",title:"",header:{name:"html",attribute:{class:"ex_admin_table_th_name","data-tag":"span"},content:{default:[""]}}}),r.attribute.columns=u):p=="switch"?o.swtichOptions.forEach(b=>{r.attribute[b]=o[p].indexOf(b)>-1}):r.attribute[p]=o[p]}else if(r.name=="ADescriptions")for(let u in o)if(u=="items"){const p=[];o[u].forEach(b=>{var m;p.push({name:"ADescriptionsItem",attribute:{title:b.label,span:b.span},content:{default:[(m=r.attribute.data[b.field])!=null?m:"--"],label:[b.label]}})}),r.content.default=p}else r.attribute[u]=o[u];e.drawingMain.ref.forceUpdate(),e.isSave=!1}function U(){let r={};const d=e.drawingMain.component;let o=d.attribute.drawingForm.bindAttribute.model;r.config=d.attribute.drawingForm.bind[o],d.name=="ExForm"?(r.type="form",r.component=[],d.content.default.forEach(u=>{let p=u.content.default[0].attribute.drawingForm;o=p.bindAttribute.model,me(p.bind[o],p.attribute.exceptField||[]);const b=d.bindAttribute.model,m=d.bind[b];p.bind[o].default=m[p.bind[o].field],r.component.push(p.bind[o])})):d.name=="ExGrid"?r.type="grid":d.name=="ADescriptions"&&(r.type="detail"),C({url:"ex-admin/plugin-curd-controller-Index/save",method:"post",data:{controller:e.controller[e.controllerIndex].name,class:e.controller[e.controllerIndex].class,function:e.method[e.methodIndex].name,setting:r}}).then(u=>{J(e.methodIndex),e.isSave=!0})}function G(r){e.drawingMain.ref=r}function F(){C("ex-admin/plugin-curd-controller-Index/getController").then(r=>{e.controller=r.data})}function j(r){e.methodIndex=-1,C({url:"ex-admin/plugin-curd-controller-Index/getMethod",method:"post",data:{class:r}}).then(d=>{e.method=d.data})}function S(){C({url:"ex-admin/plugin-curd-controller-Index/deleteMethod",method:"post",data:{class:e.controller[e.controllerIndex].class,controller:e.controller[e.controllerIndex].name,method:e.method[e.methodIndex].name}}).then(r=>{e.methodIndex=-1,e.method.splice(e.methodIndex,1)})}function z(){const r=e.controller[e.controllerIndex].class,d=e.method[e.methodIndex];C({url:"ex-admin/plugin-curd-controller-Index/updateMethod",method:"post",data:{controller:r,name:d.name,title:d.title,updateTitle:d.updateTitle,updateName:d.updateName}}).then(o=>{e.method[e.methodIndex].title=d.updateTitle,e.method[e.methodIndex].name=d.updateName})}function N(r,d){console.log(123),C({url:"ex-admin/plugin-curd-controller-Index/createController",method:"post",data:{name:d,title:r}}).then(o=>{e.newController.title="",e.newController.name="",F()})}function Z(r,d,o){C({url:"ex-admin/plugin-curd-controller-Index/createMethod",method:"post",data:{class:e.controller[e.controllerIndex].class,controller:e.controller[e.controllerIndex].name,name:d,type:o,title:r}}).then(u=>{e.newMethod.title="",e.newMethod.name="",e.newMethod.type="",e.method.push({name:d,title:r,updateTitle:r,updateName:d}),C({url:"ex-admin/plugin-curd-controller-Index/createMethodInit",method:"post",data:{class:e.controller[e.controllerIndex].class,name:d,type:o}})})}function $(){const r=e.controller[e.controllerIndex];C({url:"ex-admin/plugin-curd-controller-Index/updateController",method:"post",data:{path:r.path,class:r.class,title:r.title,updateName:r.name}}).then(d=>{F()})}function ee(){const r=e.controller[e.controllerIndex];C({url:"ex-admin/plugin-curd-controller-Index/deleteController",method:"post",data:{path:r.path}}).then(d=>{e.controllerIndex=-1,F(),e.method=[]})}function J(r){e.methodIndex=r,e.settingForm=null,C({url:"ex-admin/plugin-curd-controller-Index/render",method:"post",data:{class:e.controller[e.controllerIndex].class,function:e.method[e.methodIndex].name,var:[]}}).then(d=>{_.component.value={ref:X(),component:d.data},e.drawingMain=_.component.value,ie(()=>{_.update()})})}return le({getController:F,watchModel:k,dragSave:U,getRender:J,getMethod:j,deleteMethod:S,updateMethod:z,createController:N,createMethod:Z,updateController:$,deleteController:ee,dragRef:t,drawingRef:l,setRef:G},ve(e))}}),oe=e=>(ye("data-v-3af84a3e"),e=e(),we(),e),xe=I("\u4FDD\u5B58 "),De=I(" \u6DFB\u52A0 "),Me=I(" \u4FDD\u5B58 "),ke=I(" \u5220\u9664 "),Fe={class:"title"},Ae=oe(()=>g("span",null,"\u63A7\u5236\u5668",-1)),Ee=["onContextmenu","onClick"],Pe={class:"name"},Se={class:"desc"},Ne=I(" \u4FDD\u5B58 "),Oe=I(" \u6DFB\u52A0 "),qe=I(" \u4FDD\u5B58 "),Re=I(" \u5220\u9664 "),Ue={class:"title"},$e=oe(()=>g("span",null,"\u65B9\u6CD5",-1)),Te=["onContextmenu","onClick"],Ve={class:"name"},Be={class:"desc"},Le={class:"components"},Ge={style:{display:"flex","align-items":"center",margin:"5px"}},je=oe(()=>g("i",{class:"fas fa-layer-group"},null,-1)),ze={style:{"margin-left":"5px"}},Je={class:"components-draggable"},We=["drag-group","draggableData"],He={class:"components-body"},Qe={class:"header"},Ke=I("(ctrl+s)"),Xe={class:"drawing scrollbar",ref:"drawingRef"},Ye=I("\u5C5E\u6027");function Ze(e,t,l,h,_,D){const i=f("a-input"),s=f("a-form-item"),y=f("a-button"),k=f("a-form"),L=f("PlusOutlined"),E=f("a-menu-item"),P=f("a-popover"),R=f("question-circle-outlined"),U=f("DeleteOutlined"),G=f("a-popconfirm"),F=f("a-menu"),j=f("ReloadOutlined"),S=f("a-tooltip"),z=f("a-dropdown"),N=f("a-layout-sider"),Z=f("a-select"),$=f("render"),ee=f("a-space"),J=f("a-layout-content"),r=f("a-divider"),d=f("a-layout");return w(),O(d,{class:"layout"},{default:n(()=>[a(N,{width:130,class:"controller scrollbar"},{default:n(()=>[a(z,{trigger:["contextmenu"]},{overlay:n(()=>[a(F,null,{default:n(()=>[a(P,{trigger:"click",placement:"right"},{content:n(()=>[a(k,{"label-col":{span:6},model:e.newController,onFinish:t[2]||(t[2]=o=>e.createController(e.newController.title,e.newController.name))},{default:n(()=>[a(s,{label:"\u6807\u9898",name:"title",required:""},{default:n(()=>[a(i,{value:e.newController.title,"onUpdate:value":t[0]||(t[0]=o=>e.newController.title=o)},null,8,["value"])]),_:1}),a(s,{label:"\u540D\u79F0",name:"name",required:""},{default:n(()=>[a(i,{value:e.newController.name,"onUpdate:value":t[1]||(t[1]=o=>e.newController.name=o)},null,8,["value"])]),_:1}),a(s,{"wrapper-col":{offset:6},style:{"margin-bottom":"5px"}},{default:n(()=>[a(y,{type:"primary","html-type":"submit"},{default:n(()=>[xe]),_:1})]),_:1})]),_:1},8,["model"])]),default:n(()=>[a(E,null,{icon:n(()=>[a(L)]),default:n(()=>[De]),_:1})]),_:1}),e.controllerIndex>-1?(w(),O(P,{key:0,trigger:"click",placement:"right"},{content:n(()=>[a(k,{"label-col":{span:6}},{default:n(()=>[a(s,{label:"\u6807\u9898",required:""},{default:n(()=>[a(i,{value:e.controller[e.controllerIndex].title,"onUpdate:value":t[3]||(t[3]=o=>e.controller[e.controllerIndex].title=o)},null,8,["value"])]),_:1}),a(s,{label:"\u540D\u79F0",required:""},{default:n(()=>[a(i,{value:e.controller[e.controllerIndex].name,"onUpdate:value":t[4]||(t[4]=o=>e.controller[e.controllerIndex].name=o)},null,8,["value"])]),_:1}),a(s,{"wrapper-col":{offset:6},style:{"margin-bottom":"5px"}},{default:n(()=>[a(y,{type:"primary",onClick:t[5]||(t[5]=o=>e.updateController())},{default:n(()=>[Me]),_:1})]),_:1})]),_:1})]),_:1})):V("",!0),e.controllerIndex>-1?(w(),O(G,{key:1,title:"\u786E\u8BA4\u5220\u9664\uFF1F",onConfirm:t[6]||(t[6]=o=>e.deleteController())},{icon:n(()=>[a(R,{style:{color:"red"}})]),default:n(()=>[a(E,null,{icon:n(()=>[a(U)]),default:n(()=>[ke]),_:1})]),_:1})):V("",!0)]),_:1})]),default:n(()=>[g("ul",null,[g("div",Fe,[Ae,a(y,{size:"small",shape:"circle",onClick:e.getController},{icon:n(()=>[a(j)]),_:1},8,["onClick"])]),(w(!0),A(Q,null,W(e.controller,(o,u)=>(w(),A("li",{key:u,onContextmenu:de(p=>e.controllerIndex=u,["prevent"]),onClick:p=>{e.controllerIndex=u,e.getMethod(o.class)},class:H(e.controllerIndex==u?"active":"")},[a(S,{placement:"bottom",mouseEnterDelay:1},{title:n(()=>[I(M(o.title),1)]),default:n(()=>[g("div",Pe,M(o.title),1)]),_:2},1024),a(S,{placement:"bottom",mouseEnterDelay:1},{title:n(()=>[I(M(o.path),1)]),default:n(()=>[g("div",Se,M(o.name),1)]),_:2},1024)],42,Ee))),128))])]),_:1})]),_:1}),a(N,{width:130,class:"controller scrollbar"},{default:n(()=>[a(z,{trigger:["contextmenu"]},{overlay:n(()=>[a(F,null,{default:n(()=>[a(P,{trigger:"click",placement:"right"},{content:n(()=>[a(k,{"label-col":{span:6},model:e.newMethod,onFinish:t[10]||(t[10]=o=>e.createMethod(e.newMethod.title,e.newMethod.name,e.newMethod.type))},{default:n(()=>[a(s,{label:"\u7C7B\u578B",name:"type",required:""},{default:n(()=>[a(Z,{value:e.newMethod.type,"onUpdate:value":t[7]||(t[7]=o=>e.newMethod.type=o),options:e.methodTypes},null,8,["value","options"])]),_:1}),a(s,{label:"\u6807\u9898",name:"title",required:""},{default:n(()=>[a(i,{value:e.newMethod.title,"onUpdate:value":t[8]||(t[8]=o=>e.newMethod.title=o)},null,8,["value"])]),_:1}),a(s,{label:"\u540D\u79F0",name:"name",required:""},{default:n(()=>[a(i,{value:e.newMethod.name,"onUpdate:value":t[9]||(t[9]=o=>e.newMethod.name=o)},null,8,["value"])]),_:1}),a(s,{"wrapper-col":{offset:6},style:{"margin-bottom":"5px"}},{default:n(()=>[a(y,{type:"primary","html-type":"submit"},{default:n(()=>[Ne]),_:1})]),_:1})]),_:1},8,["model"])]),default:n(()=>[a(E,null,{icon:n(()=>[a(L)]),default:n(()=>[Oe]),_:1})]),_:1}),e.methodIndex>-1?(w(),O(P,{key:0,trigger:"click",placement:"right"},{content:n(()=>[a(k,{"label-col":{span:6}},{default:n(()=>[a(s,{label:"\u6807\u9898",required:""},{default:n(()=>[a(i,{value:e.method[e.methodIndex].updateTitle,"onUpdate:value":t[11]||(t[11]=o=>e.method[e.methodIndex].updateTitle=o)},null,8,["value"])]),_:1}),a(s,{label:"\u540D\u79F0",required:""},{default:n(()=>[a(i,{value:e.method[e.methodIndex].updateName,"onUpdate:value":t[12]||(t[12]=o=>e.method[e.methodIndex].updateName=o)},null,8,["value"])]),_:1}),a(s,{"wrapper-col":{offset:6},style:{"margin-bottom":"5px"}},{default:n(()=>[a(y,{type:"primary",onClick:t[13]||(t[13]=o=>e.updateMethod())},{default:n(()=>[qe]),_:1})]),_:1})]),_:1})]),_:1})):V("",!0),e.methodIndex>-1?(w(),O(G,{key:1,title:"\u786E\u8BA4\u5220\u9664\uFF1F",onConfirm:t[14]||(t[14]=o=>e.deleteMethod())},{icon:n(()=>[a(R,{style:{color:"red"}})]),default:n(()=>[a(E,null,{icon:n(()=>[a(U)]),default:n(()=>[Re]),_:1})]),_:1})):V("",!0)]),_:1})]),default:n(()=>[g("ul",null,[g("div",Ue,[$e,a(y,{size:"small",shape:"circle",onClick:t[15]||(t[15]=o=>e.getMethod(e.controller[e.controllerIndex].class))},{icon:n(()=>[a(j)]),_:1})]),(w(!0),A(Q,null,W(e.method,(o,u)=>(w(),A("li",{key:u,onContextmenu:de(p=>e.methodIndex=u,["prevent"]),onClick:p=>e.getRender(u),class:H(e.methodIndex==u?"active":"")},[a(S,{placement:"bottom",mouseEnterDelay:1},{title:n(()=>[I(M(o.title),1)]),default:n(()=>[g("div",Ve,M(o.title),1)]),_:2},1024),a(S,{placement:"bottom",mouseEnterDelay:1},{title:n(()=>[I(M(o.name),1)]),default:n(()=>[g("div",Be,M(o.name),1)]),_:2},1024)],42,Te))),128))])]),_:1})]),_:1}),a(N,{width:300,class:"scrollbar",ref:"dragRef"},{default:n(()=>[(w(!0),A(Q,null,W(e.componentList,o=>(w(),A("div",Le,[g("div",Ge,[je,g("div",ze,M(o.label),1)]),g("div",Je,[(w(!0),A(Q,null,W(o.options,u=>(w(),A("div",{class:"components-item","drag-group":u.component.attribute["drag-group"],draggableData:u.component},[g("div",He,[g("i",{class:H(u.icon)},null,2),I(" "+M(u.label),1)])],8,We))),256))])]))),256))]),_:1},512),a(J,{class:"main"},{default:n(()=>[g("div",Qe,[a(ee,null,{default:n(()=>[a($,{data:e.database},null,8,["data"]),a(y,{onClick:e.dragSave},{default:n(()=>[g("span",{style:Ie(e.isSave?"":"color: red;")},"\u4FDD\u5B58",4),Ke]),_:1},8,["onClick"])]),_:1})]),g("div",Xe,[a($,{ref:o=>e.setRef(o),data:e.drawingMain.component},null,8,["data"])],512)]),_:1}),g("div",{class:"collapse",onClick:t[16]||(t[16]=o=>e.settingFormVisible=!e.settingFormVisible)},[g("i",{class:H(e.settingFormVisible?"fas fa-angle-double-right":"fas fa-angle-double-left")},null,2)]),e.settingFormVisible?(w(),O(N,{key:0,width:450,class:"settingForm scrollbar"},{default:n(()=>[a(r,null,{default:n(()=>[Ye]),_:1}),a($,{data:e.settingForm,onWatchModel:e.watchModel},null,8,["data","onWatchModel"])]),_:1})):V("",!0)]),_:1})}var Bt=ce(Ce,[["render",Ze],["__scopeId","data-v-3af84a3e"]]);export{Bt as default};