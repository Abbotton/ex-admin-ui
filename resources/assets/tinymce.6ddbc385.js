var k=Object.defineProperty;var c=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var g=(e,i,a)=>i in e?k(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,f=(e,i)=>{for(var a in i||(i={}))w.call(i,a)&&g(e,a,i[a]);if(c)for(var a of c(i))V.call(i,a)&&g(e,a,i[a]);return e};import{t as h}from"./tinymce.ecd0010c.js";import{E as C}from"./@tinymce.2ed65861.js";import"./vue.f169bc0e.js";import{_ as I,j as y}from"./index.9a3c7168.js";import{u as S}from"./uploader.6d1d0303.js";import{d as j,a as E,f as N,w as b,o as z,t as A,Y as B,Z as p,a0 as d,a1 as x,F as _,a2 as F,a5 as T,c as U,ad as $,ae as O,a4 as q}from"./@vue.a2bdcbc4.js";import"./@babel.7a426183.js";import"./regenerator-runtime.59ce731c.js";import"./vue-router.0de480eb.js";import"./js-md5.216a9fc2.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";import"./ant-design-vue.e653cb26.js";import"./@ant-design.594a5492.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.8a2ffed6.js";import"./dayjs.76d34158.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./js-cookie.31874410.js";/* empty css                     */import"./lodash.5fa5cd01.js";import"./clipboard.76283100.js";import"./simple-uploader.js.f8a4d47a.js";import"./ali-oss.fc1e842f.js";import"./qiniu-js.8b174ca3.js";import"./querystring.62f12500.js";const L=j({name:"ExTinymceEditor",components:{Editor:C},props:{value:{type:String,default:""},height:{type:[String,Number],default:500},width:{type:[String,Number],default:"auto"},toolbar:{type:[String,Array],default:"bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image axupimgs media code | removeformat fullscreen"},options:{type:[Object,Array],default:{}},tags:{type:Array,default:[]},upload:{type:[Object,Array],default:{}}},emits:["update:value"],setup(e,i){const a="/ex-admin/";let l=S(e.upload);E(()=>{l.uploader.cancel(),l=null});const o=N({init:{base_url:a+"tinymce",language_url:a+"tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:a+"tinymce/skins/ui/oxide",content_css:a+"tinymce/skins/content/default/content.css",height:e.height,width:e.width,fontsize_formats:"10px 11px 12px 14px 16px 18px 20px 24px 36px",menubar:!1,plugins:"axupimgs advlist anchor autolink autosave code codesample directionality fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak preview print save searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars wordcount",toolbar:e.toolbar,file_picker_types:"media",video_template_callback:t=>'<video width="'+t.width+'" height="'+t.height+'"'+(t.poster?' poster="'+t.poster+'"':"")+' controls="controls" src="'+t.source+'"></video>',file_picker_callback:(t,n,s)=>{if(s.filetype=="media"){let r=document.createElement("input");r.setAttribute("type","file"),r.onchange=function(G){let v=this.files[0];m(v,t)},r.click()}},branding:!1,convert_urls:!1,content_style:"img {max-width:100% !important } .exadmin-tag{background-color:#ecf5ff;border-color:#d9ecff;color:#409eff;display:inline-block;height:32px;padding:0 10px;line-height:30px;font-size:12px;color:#2d8cf0;border-width:1px;border-style:solid;border-radius:4px;box-sizing:border-box;white-space:nowrap} .exadmin-tag +.exadmin-tag{margin-left:8px}",external_plugins:{powerpaste:a+"tinymce/plugins/powerpaste/plugin.min.js"},images_upload_handler:(t,n,s)=>{let r=t.blob();r=new File([r],r.name),m(r,n)}},myValue:e.value,tinymce:null,elementId:y()});o.elementId=y(),o.init=Object.assign(o.init,e.options),b(()=>e.value,t=>{o.myValue=t}),b(()=>o.myValue,t=>{i.emit("update:value",t)}),z(()=>{h.init({})});function m(t,n){l.uploader.addFile(t),l.watch({success:s=>{n(s)}})}function u(t){const n=h.get(o.elementId);n.execCommand("mceInsertContent",!1,'<span class="exadmin-tag" contenteditable="false">'+t.target.innerText+"</span>"),o.myValue=n.getContent()}return f({insertTag:u},A(o))}}),M=e=>($("data-v-b89555f4"),e=e(),O(),e),R={key:0,class:"tags"},D=M(()=>x("div",null,"\u70B9\u51FB\u63D2\u5165\uFF1A",-1)),Y={class:"tags-group"};function Z(e,i,a,l,o,m){const u=B("editor");return p(),d(_,null,[e.tags.length>0?(p(),d("div",R,[D,x("div",Y,[(p(!0),d(_,null,F(e.tags,t=>(p(),d("span",{onClick:i[0]||(i[0]=(...n)=>e.insertTag&&e.insertTag(...n)),class:"exadmin-tag"},q(t),1))),256))])])):T("",!0),U(u,{modelValue:e.myValue,"onUpdate:modelValue":i[1]||(i[1]=t=>e.myValue=t),init:e.init,id:e.elementId},null,8,["modelValue","init","id"])],64)}var Ce=I(L,[["render",Z],["__scopeId","data-v-b89555f4"]]);export{Ce as default};
