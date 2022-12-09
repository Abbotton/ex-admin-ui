import{U as P}from"./simple-uploader.js.04c42387.js";import{O as A}from"./ali-oss.ce3a624c.js";import{u as E}from"./qiniu-js.8b174ca3.js";import{n as _,p as q,r as b,q as S,t as f,s as w}from"./index.5075a1e4.js";import"./vue.db505ee4.js";import{r as I}from"./@vue.cb43a243.js";import{m as o,n as j}from"./ant-design-vue.6b10f349.js";function u(){}function V(r){let h,g;const m=I(),c={onSuccess:u,onError:u,onVerifyProgress:u,onProgress:u,onAddFile:u,onFileSubmit:u};r=Object.assign({action:"",type:"file",accessKey:"",secretKey:"",bucket:"",region:"",directory:"",domain:"",uploadToken:"",chunkSize:1,chunk:!0,disabled:!1,isDirectory:!1,multiple:!1,progress:!1,disk:"local",driver:"local",accept:"",params:{},headers:{},options:{}},r),r.driver==="oss"&&(h=new A({accessKeyId:r.accessKey,accessKeySecret:r.secretKey,bucket:r.bucket,region:r.region}));let n=new P(Object.assign({target:"/"+r.action,query:e=>Object.assign({type:r.type,file_type:e.fileType,directory:r.directory,disk:r.disk},r.params),testChunks:r.chunk,chunkSize:r.chunk?r.chunkSize*1024*1024:10240*1024*1024,headers:Object.assign({Authorization:_.get(),"App-Name":window["App-Name"],Accept:"application/json, text/plain, */*"},r.headers),checkChunkUploadedByResponse:r.chunk?function(e,a){let s={};try{s=JSON.parse(a)}catch{}return!!((s.data.uploaded_chunks||[]).indexOf(e.offset+1)>=0||s.data.url)}:null},r.options));n.on("fileAdded",function(e,a){if(c.onAddFile(e,a)===!1)return n.removeFile(e),!1}),n.on("filesSubmitted",function(e,a){if(c.onFileSubmit(e,a)===!1&&n.cancel(),e.forEach(s=>{let i=q(s.file);s.pause(),i.watch({progress:function(t){F(t)},success:function(t){i=null,s.uniqueIdentifier=t,r.driver=="local"||r.type=="image"?s.resume():(r.driver==="oss"?U(s,k(s)):r.driver==="qiniu"&&O(s,k(s)),n.removeFile(s))}})}),n.upload(),r.progress){const s=document.getElementsByClassName("tox-dialog__footer");s.length>0&&o.config({getContainer:()=>s[0]}),g=o.loading({duration:0,prefixCls:s.length>0?"ex-message-upload ant-message":"ant-message",content:function(){return m.value}})}});function k(e){return r.directory+e.uniqueIdentifier+"."+e.getExtension()}n.on("fileProgress",function(e,a,s){p(parseInt(n.progress()*100))}),n.on("fileSuccess",function(e,a,s,i){n.removeFile(a);try{const t=JSON.parse(s);if(t.code===200)a.path=t.data.path,y(a,t.data.url);else{if(t.code===80010)return l(),t.data.type==="success"&&c.onSuccess(),j.open(b(t.data)),S(t.data);if(t.code===80020)return l(),t.data.type==="success"&&c.onSuccess(),o.open(b(t.data)),S(t.data);d(t.message)}}catch{d()}}),n.on("fileError",function(e,a,s,i){n.removeFile(a),d(s)});function v(e){r.disabled||(n.assignDrop(e),n.assignBrowse(e,r.isDirectory,!r.multiple,{accept:r.accept}))}function F(e){m.value=f("Uploader.check")+e+"%",c.onVerifyProgress(e)}function p(e){m.value=f("Uploader.uploading")+e+"%",c.onProgress(e)}function l(){g&&(g(),o.destroy(),o.config({getContainer:()=>document.body}))}function y(e,a){l(),w({url:"/ex-admin/system/upload",method:"post",data:{data:{cate_id:r.params.cate_id||0,type:e.fileType.indexOf("image")===0?"image":"file",name:e.uniqueIdentifier+"."+e.getExtension(),real_name:e.name,file_type:e.fileType,url:a,ext:e.getExtension(),disk:r.disk,path:e.path,size:e.getSize()}}}).then(s=>{r.progress&&o.success(f("Uploader.success")),c.onSuccess(a)})}function d(e){l(),e||(e=f("Uploader.error")),o.error(e),c.onError(e)}function x(e){e.addFile&&(c.onAddFile=e.addFile),e.onFileSubmit&&(c.onAddFile=e.fileSubmit),e.success&&(c.onSuccess=e.success),e.error&&(c.onError=e.error),e.verifyProgress&&(c.onVerifyProgress=e.verifyProgress),e.progress&&(c.onProgress=e.progress)}function U(e,a){h.multipartUpload(a,e.file,{progress:function(s){p(parseInt(s*100))}}).then(s=>{const i=`${r.domain}/${a}`;e.path=a,y(e,i)}).catch(s=>{d(s.message)})}function O(e,a){E(e.file,a,r.uploadToken,{fname:a}).subscribe({next(i){p(parseInt(i.total.percent))},error(i){d(i.message)},complete:()=>{e.path=a;const i=`${r.domain}/${a}`;y(e,i)}})}return{uploader:n,watch:x,options:r,input:v}}export{V as u};