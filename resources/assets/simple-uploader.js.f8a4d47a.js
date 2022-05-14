import{a as x}from"./@babel.7a426183.js";var P={exports:{}};/*!
 * Uploader - Uploader library implements html5 file upload and provides multiple simultaneous, stable, fault tolerant and resumable uploads
 * @version v0.6.0
 * @author dolymood <dolymood@gmail.com>
 * @link https://github.com/simple-uploader/Uploader
 * @license MIT
 */(function(D,w){(function(_){D.exports=_()})(function(){return function _(y,R,n){function g(e,t){if(!R[e]){if(!y[e]){var h=typeof x=="function"&&x;if(!t&&h)return h(e,!0);if(l)return l(e,!0);throw new Error("Cannot find module '"+e+"'")}var r=R[e]={exports:{}};y[e][0].call(r.exports,function(i){var o=y[e][1][i];return g(o||i)},r,r.exports,_,y,R,n)}return R[e].exports}for(var l=typeof x=="function"&&x,u=0;u<n.length;u++)g(n[u]);return g}({1:[function(_,y,R){var n=_("./utils");function g(u,e,t){n.defineNonEnumerable(this,"uploader",u),n.defineNonEnumerable(this,"file",e),n.defineNonEnumerable(this,"bytes",null),this.offset=t,this.tested=!1,this.retries=0,this.pendingRetry=!1,this.preprocessState=0,this.readState=0,this.loaded=0,this.total=0,this.chunkSize=n.evalOpts(u.opts.chunkSize,e,this),this.startByte=this.offset*this.chunkSize,this.endByte=this.computeEndByte(),this.xhr=null}var l=g.STATUS={PENDING:"pending",UPLOADING:"uploading",READING:"reading",SUCCESS:"success",ERROR:"error",COMPLETE:"complete",PROGRESS:"progress",RETRY:"retry"};n.extend(g.prototype,{_event:function(u,e){e=n.toArray(arguments),e.unshift(this),this.file._chunkEvent.apply(this.file,e)},computeEndByte:function(){var u=Math.min(this.file.size,(this.offset+1)*this.chunkSize);return this.file.size-u<this.chunkSize&&!this.uploader.opts.forceChunkSize&&(u=this.file.size),u},getParams:function(){return{chunkNumber:this.offset+1,chunkSize:this.chunkSize,currentChunkSize:this.endByte-this.startByte,totalSize:this.file.size,identifier:this.file.uniqueIdentifier,filename:this.file.name,relativePath:this.file.relativePath,totalChunks:this.file.chunks.length}},getTarget:function(u,e){return e.length?(u.indexOf("?")<0?u+="?":u+="&",u+e.join("&")):u},test:function(){this.xhr=new XMLHttpRequest,this.xhr.addEventListener("load",h,!1),this.xhr.addEventListener("error",h,!1);var u=n.evalOpts(this.uploader.opts.testMethod,this.file,this),e=this.prepareXhrRequest(u,!0);this.xhr.send(e);var t=this;function h(r){var i=t.status(!0);i===l.ERROR?(t._event(i,t.message()),t.uploader.uploadNextChunk()):i===l.SUCCESS?(t._event(i,t.message()),t.tested=!0):t.file.paused||(t.tested=!0,t.send())}},preprocessFinished:function(){this.endByte=this.computeEndByte(),this.preprocessState=2,this.send()},readFinished:function(u){this.readState=2,this.bytes=u,this.send()},send:function(){var u=this.uploader.opts.preprocess,e=this.uploader.opts.readFileFn;if(n.isFunction(u))switch(this.preprocessState){case 0:this.preprocessState=1,u(this);return;case 1:return}switch(this.readState){case 0:this.readState=1,e(this.file,this.file.fileType,this.startByte,this.endByte,this);return;case 1:return}if(this.uploader.opts.testChunks&&!this.tested){this.test();return}this.loaded=0,this.total=0,this.pendingRetry=!1,this.xhr=new XMLHttpRequest,this.xhr.upload.addEventListener("progress",i,!1),this.xhr.addEventListener("load",o,!1),this.xhr.addEventListener("error",o,!1);var t=n.evalOpts(this.uploader.opts.uploadMethod,this.file,this),h=this.prepareXhrRequest(t,!1,this.uploader.opts.method,this.bytes);this.xhr.send(h);var r=this;function i(d){d.lengthComputable&&(r.loaded=d.loaded,r.total=d.total),r._event(l.PROGRESS,d)}function o(d){var s=r.message();r.processingResponse=!0,r.uploader.opts.processResponse(s,function(a,p){if(r.processingResponse=!1,!!r.xhr){r.processedState={err:a,res:p};var c=r.status();if(c===l.SUCCESS||c===l.ERROR)r._event(c,p),c===l.ERROR&&r.uploader.uploadNextChunk();else{r._event(l.RETRY,p),r.pendingRetry=!0,r.abort(),r.retries++;var v=r.uploader.opts.chunkRetryInterval;v!==null?setTimeout(function(){r.send()},v):r.send()}}},r.file,r)}},abort:function(){var u=this.xhr;this.xhr=null,this.processingResponse=!1,this.processedState=null,u&&u.abort()},status:function(u){if(this.readState===1)return l.READING;if(this.pendingRetry||this.preprocessState===1)return l.UPLOADING;if(this.xhr){if(this.xhr.readyState<4||this.processingResponse)return l.UPLOADING;var e;this.uploader.opts.successStatuses.indexOf(this.xhr.status)>-1?e=l.SUCCESS:this.uploader.opts.permanentErrors.indexOf(this.xhr.status)>-1||!u&&this.retries>=this.uploader.opts.maxChunkRetries?e=l.ERROR:(this.abort(),e=l.PENDING);var t=this.processedState;return t&&t.err&&(e=l.ERROR),e}else return l.PENDING},message:function(){return this.xhr?this.xhr.responseText:""},progress:function(){if(this.pendingRetry)return 0;var u=this.status();return u===l.SUCCESS||u===l.ERROR?1:u===l.PENDING?0:this.total>0?this.loaded/this.total:0},sizeUploaded:function(){var u=this.endByte-this.startByte;return this.status()!==l.SUCCESS&&(u=this.progress()*u),u},prepareXhrRequest:function(u,e,t,h){var r=n.evalOpts(this.uploader.opts.query,this.file,this,e);r=n.extend(this.getParams(),r),r=this.uploader.opts.processParams(r,this.file,this,e);var i=n.evalOpts(this.uploader.opts.target,this.file,this,e),o=null;if(u==="GET"||t==="octet"){var d=[];n.each(r,function(s,a){d.push([encodeURIComponent(a),encodeURIComponent(s)].join("="))}),i=this.getTarget(i,d),o=h||null}else o=new FormData,n.each(r,function(s,a){o.append(a,s)}),typeof h!="undefined"&&o.append(this.uploader.opts.fileParameterName,h,this.file.name);return this.xhr.open(u,i,!0),this.xhr.withCredentials=this.uploader.opts.withCredentials,n.each(n.evalOpts(this.uploader.opts.headers,this.file,this,e),function(s,a){this.xhr.setRequestHeader(a,s)},this),o}}),y.exports=g},{"./utils":5}],2:[function(_,y,R){var n=_("./utils").each,g={_eventData:null,on:function(l,u){this._eventData||(this._eventData={}),this._eventData[l]||(this._eventData[l]=[]);var e=!1;n(this._eventData[l],function(t){if(t===u)return e=!0,!1}),e||this._eventData[l].push(u)},off:function(l,u){this._eventData||(this._eventData={}),!(!this._eventData[l]||!this._eventData[l].length)&&(u?n(this._eventData[l],function(e,t){if(e===u)return this._eventData[l].splice(t,1),!1},this):this._eventData[l]=[])},trigger:function(l){if(this._eventData||(this._eventData={}),!this._eventData[l])return!0;var u=this._eventData[l].slice.call(arguments,1),e=!1;return n(this._eventData[l],function(t){e=t.apply(this,u)===!1||e},this),!e}};y.exports=g},{"./utils":5}],3:[function(_,y,R){var n=_("./utils"),g=_("./event"),l=_("./file"),u=_("./chunk"),e="0.6.0",t=typeof window=="undefined",h=t?!1:window.navigator.msPointerEnabled,r=function(){if(t)return!1;var s="slice",a=n.isDefined(window.File)&&n.isDefined(window.Blob)&&n.isDefined(window.FileList),p=null;return a&&(p=window.Blob.prototype,n.each(["slice","webkitSlice","mozSlice"],function(c){if(p[c])return s=c,!1}),a=!!p[s]),a&&(o.sliceName=s),p=null,a}(),i=function(){if(t)return!1;var s=window.document.createElement("input");s.type="file";var a="webkitdirectory"in s||"directory"in s;return s=null,a}();function o(s){this.support=r,!!this.support&&(this.supportDirectory=i,n.defineNonEnumerable(this,"filePaths",{}),this.opts=n.extend({},o.defaults,s||{}),this.preventEvent=n.bind(this._preventEvent,this),l.call(this,this))}var d=function(s,a,p,c,v){v.readFinished(s.file[o.sliceName](p,c,a))};o.version=e,o.defaults={chunkSize:1024*1024,forceChunkSize:!1,simultaneousUploads:3,singleFile:!1,fileParameterName:"file",progressCallbacksInterval:500,speedSmoothingFactor:.1,query:{},headers:{},withCredentials:!1,preprocess:null,method:"multipart",testMethod:"GET",uploadMethod:"POST",prioritizeFirstAndLastChunk:!1,allowDuplicateUploads:!1,target:"/",testChunks:!0,generateUniqueIdentifier:null,maxChunkRetries:0,chunkRetryInterval:null,permanentErrors:[404,415,500,501],successStatuses:[200,201,202],onDropStopPropagation:!1,initFileFn:null,readFileFn:d,checkChunkUploadedByResponse:null,initialPaused:!1,processResponse:function(s,a){a(null,s)},processParams:function(s){return s}},o.utils=n,o.event=g,o.File=l,o.Chunk=u,o.prototype=n.extend({},l.prototype),n.extend(o.prototype,g),n.extend(o.prototype,{constructor:o,_trigger:function(s){var a=n.toArray(arguments),p=!this.trigger.apply(this,arguments);return s!=="catchAll"&&(a.unshift("catchAll"),p=!this.trigger.apply(this,a)||p),!p},_triggerAsync:function(){var s=arguments;n.nextTick(function(){this._trigger.apply(this,s)},this)},addFiles:function(s,a){var p=[],c=this.fileList.length;n.each(s,function(f){if((!h||h&&f.size>0)&&!(f.size%4096===0&&(f.name==="."||f.fileName==="."))){var m=this.generateUniqueIdentifier(f);if(this.opts.allowDuplicateUploads||!this.getFromUniqueIdentifier(m)){var S=new l(this,f,this);S.uniqueIdentifier=m,this._trigger("fileAdded",S,a)?p.push(S):l.prototype.removeFile.call(this,S)}}},this);var v=this.fileList.slice(c);this._trigger("filesAdded",p,v,a)?(n.each(p,function(f){this.opts.singleFile&&this.files.length>0&&this.removeFile(this.files[0]),this.files.push(f)},this),this._trigger("filesSubmitted",p,v,a)):n.each(v,function(f){l.prototype.removeFile.call(this,f)},this)},addFile:function(s,a){this.addFiles([s],a)},cancel:function(){for(var s=this.fileList.length-1;s>=0;s--)this.fileList[s].cancel()},removeFile:function(s){l.prototype.removeFile.call(this,s),this._trigger("fileRemoved",s)},generateUniqueIdentifier:function(s){var a=this.opts.generateUniqueIdentifier;if(n.isFunction(a))return a(s);var p=s.relativePath||s.webkitRelativePath||s.fileName||s.name;return s.size+"-"+p.replace(/[^0-9a-zA-Z_-]/img,"")},getFromUniqueIdentifier:function(s){var a=!1;return n.each(this.files,function(p){if(p.uniqueIdentifier===s)return a=p,!1}),a},uploadNextChunk:function(s){var a=!1,p=u.STATUS.PENDING,c=this.uploader.opts.checkChunkUploadedByResponse;if(this.opts.prioritizeFirstAndLastChunk&&(n.each(this.files,function(f){if(!f.paused&&!(c&&!f._firstResponse&&f.isUploading())){if(f.chunks.length&&f.chunks[0].status()===p)return f.chunks[0].send(),a=!0,!1;if(f.chunks.length>1&&f.chunks[f.chunks.length-1].status()===p)return f.chunks[f.chunks.length-1].send(),a=!0,!1}}),a))return a;if(n.each(this.files,function(f){if(!f.paused){if(c&&!f._firstResponse&&f.isUploading())return;n.each(f.chunks,function(m){if(m.status()===p)return m.send(),a=!0,!1})}if(a)return!1}),a)return!0;var v=!1;return n.each(this.files,function(f){if(!f.isComplete())return v=!0,!1}),!v&&!s&&this.files.length&&this._triggerAsync("complete"),v},upload:function(s){var a=this._shouldUploadNext();if(a!==!1){!s&&this._trigger("uploadStart");for(var p=!1,c=1;c<=this.opts.simultaneousUploads-a&&(p=this.uploadNextChunk(!s)||p,!(!p&&s));c++);!p&&!s&&this._triggerAsync("complete")}},_shouldUploadNext:function(){var s=0,a=!0,p=this.opts.simultaneousUploads,c=u.STATUS.UPLOADING;return n.each(this.files,function(v){return n.each(v.chunks,function(f){if(f.status()===c&&(s++,s>=p))return a=!1,!1}),a}),a&&s},assignBrowse:function(s,a,p,c){typeof s.length=="undefined"&&(s=[s]),n.each(s,function(v){var f;v.tagName==="INPUT"&&v.type==="file"?f=v:(f=document.createElement("input"),f.setAttribute("type","file"),n.extend(f.style,{visibility:"hidden",position:"absolute",width:"1px",height:"1px"}),v.appendChild(f),v.addEventListener("click",function(S){v.tagName.toLowerCase()!=="label"&&f.click()},!1)),!this.opts.singleFile&&!p&&f.setAttribute("multiple","multiple"),a&&f.setAttribute("webkitdirectory","webkitdirectory"),c&&n.each(c,function(S,F){f.setAttribute(F,S)});var m=this;f.addEventListener("change",function(S){m._trigger(S.type,S),S.target.value&&(m.addFiles(S.target.files,S),S.target.value="")},!1)},this)},onDrop:function(s){this._trigger(s.type,s),this.opts.onDropStopPropagation&&s.stopPropagation(),s.preventDefault(),this._parseDataTransfer(s.dataTransfer,s)},_parseDataTransfer:function(s,a){s.items&&s.items[0]&&s.items[0].webkitGetAsEntry?this.webkitReadDataTransfer(s,a):this.addFiles(s.files,a)},webkitReadDataTransfer:function(s,a){var p=this,c=s.items.length,v=[];n.each(s.items,function(b){var k=b.webkitGetAsEntry();if(!k){F();return}k.isFile?m(b.getAsFile(),k.fullPath):f(k.createReader())});function f(b){b.readEntries(function(k){k.length?(c+=k.length,n.each(k,function(E){if(E.isFile){var C=E.fullPath;E.file(function(U){m(U,C)},S)}else E.isDirectory&&f(E.createReader())}),f(b)):F()},S)}function m(b,k){b.relativePath=k.substring(1),v.push(b),F()}function S(b){throw b}function F(){--c===0&&p.addFiles(v,a)}},_assignHelper:function(s,a,p){typeof s.length=="undefined"&&(s=[s]);var c=p?"removeEventListener":"addEventListener";n.each(s,function(v){n.each(a,function(f,m){v[c](m,f,!1)},this)},this)},_preventEvent:function(s){n.preventEvent(s),this._trigger(s.type,s)},assignDrop:function(s){this._onDrop=n.bind(this.onDrop,this),this._assignHelper(s,{dragover:this.preventEvent,dragenter:this.preventEvent,dragleave:this.preventEvent,drop:this._onDrop})},unAssignDrop:function(s){this._assignHelper(s,{dragover:this.preventEvent,dragenter:this.preventEvent,dragleave:this.preventEvent,drop:this._onDrop},!0),this._onDrop=null}}),y.exports=o},{"./chunk":1,"./event":2,"./file":4,"./utils":5}],4:[function(_,y,R){var n=_("./utils"),g=_("./chunk");function l(e,t,h){n.defineNonEnumerable(this,"uploader",e),this.isRoot=this.isFolder=e===this,n.defineNonEnumerable(this,"parent",h||null),n.defineNonEnumerable(this,"files",[]),n.defineNonEnumerable(this,"fileList",[]),n.defineNonEnumerable(this,"chunks",[]),n.defineNonEnumerable(this,"_errorFiles",[]),n.defineNonEnumerable(this,"file",null),this.id=n.uid(),this.isRoot||!t?this.file=null:n.isString(t)?(this.isFolder=!0,this.file=null,this.path=t,this.parent.path&&(t=t.substr(this.parent.path.length)),this.name=t.charAt(t.length-1)==="/"?t.substr(0,t.length-1):t):(this.file=t,this.fileType=this.file.type,this.name=t.fileName||t.name,this.size=t.size,this.relativePath=t.relativePath||t.webkitRelativePath||this.name,this._parseFile()),this.paused=e.opts.initialPaused,this.error=!1,this.allError=!1,this.aborted=!1,this.completed=!1,this.averageSpeed=0,this.currentSpeed=0,this._lastProgressCallback=Date.now(),this._prevUploadedSize=0,this._prevProgress=0,this.bootstrap()}n.extend(l.prototype,{_parseFile:function(){var e=u(this.relativePath);if(e.length){var t=this.uploader.filePaths;n.each(e,function(h,r){var i=t[h];i||(i=new l(this.uploader,h,this.parent),t[h]=i,this._updateParentFileList(i)),this.parent=i,i.files.push(this),e[r+1]||i.fileList.push(this)},this)}else this._updateParentFileList()},_updateParentFileList:function(e){e||(e=this);var t=this.parent;t&&t.fileList.push(e)},_eachAccess:function(e,t){if(this.isFolder){n.each(this.files,function(h,r){return e.call(this,h,r)},this);return}t.call(this,this)},bootstrap:function(){if(!this.isFolder){var e=this.uploader.opts;n.isFunction(e.initFileFn)&&e.initFileFn.call(this,this),this.abort(!0),this._resetError(),this._prevProgress=0;for(var t=e.forceChunkSize?Math.ceil:Math.floor,h=Math.max(t(this.size/e.chunkSize),1),r=0;r<h;r++)this.chunks.push(new g(this.uploader,this,r))}},_measureSpeed:function(){var e=this.uploader.opts.speedSmoothingFactor,t=Date.now()-this._lastProgressCallback;if(!!t){var h=this.sizeUploaded();this.currentSpeed=Math.max((h-this._prevUploadedSize)/t*1e3,0),this.averageSpeed=e*this.currentSpeed+(1-e)*this.averageSpeed,this._prevUploadedSize=h,this.parent&&this.parent._checkProgress()&&this.parent._measureSpeed()}},_checkProgress:function(e){return Date.now()-this._lastProgressCallback>=this.uploader.opts.progressCallbacksInterval},_chunkEvent:function(e,t,h){var r=this.uploader,i=g.STATUS,o=this,d=this.getRoot(),s=function(){o._measureSpeed(),r._trigger("fileProgress",d,o,e),o._lastProgressCallback=Date.now()};switch(t){case i.PROGRESS:this._checkProgress()&&s();break;case i.ERROR:this._error(),this.abort(!0),r._trigger("fileError",d,this,h,e);break;case i.SUCCESS:if(this._updateUploadedChunks(h,e),this.error)return;clearTimeout(this._progeressId),this._progeressId=0;var a=Date.now()-this._lastProgressCallback;a<r.opts.progressCallbacksInterval&&(this._progeressId=setTimeout(s,r.opts.progressCallbacksInterval-a)),this.isComplete()?(clearTimeout(this._progeressId),s(),this.currentSpeed=0,this.averageSpeed=0,r._trigger("fileSuccess",d,this,h,e),d.isComplete()&&r._trigger("fileComplete",d,this)):this._progeressId||s();break;case i.RETRY:r._trigger("fileRetry",d,this,e);break}},_updateUploadedChunks:function(e,t){var h=this.uploader.opts.checkChunkUploadedByResponse;if(h){var r=t.xhr;n.each(this.chunks,function(i){if(!i.tested){var o=h.call(this,i,e);i===t&&!o&&(i.xhr=null),o&&(i.xhr=r),i.tested=!0}},this),this._firstResponse?this.uploader.uploadNextChunk():(this._firstResponse=!0,this.uploader.upload(!0))}else this.uploader.uploadNextChunk()},_error:function(){this.error=this.allError=!0;for(var e=this.parent;e&&e!==this.uploader;)e._errorFiles.push(this),e.error=!0,e._errorFiles.length===e.files.length&&(e.allError=!0),e=e.parent},_resetError:function(){this.error=this.allError=!1;for(var e=this.parent,t=-1;e&&e!==this.uploader;)t=e._errorFiles.indexOf(this),e._errorFiles.splice(t,1),e.allError=!1,e._errorFiles.length||(e.error=!1),e=e.parent},isComplete:function(){if(!this.completed){var e=!1;this._eachAccess(function(t){if(!t.isComplete())return e=!0,!1},function(){if(this.error)e=!0;else{var t=g.STATUS;n.each(this.chunks,function(h){var r=h.status();if(r===t.ERROR||r===t.PENDING||r===t.UPLOADING||r===t.READING||h.preprocessState===1||h.readState===1)return e=!0,!1})}}),this.completed=!e}return this.completed},isUploading:function(){var e=!1;return this._eachAccess(function(t){if(t.isUploading())return e=!0,!1},function(){var t=g.STATUS.UPLOADING;n.each(this.chunks,function(h){if(h.status()===t)return e=!0,!1})}),e},resume:function(){this._eachAccess(function(e){e.resume()},function(){this.paused=!1,this.aborted=!1,this.uploader.upload()}),this.paused=!1,this.aborted=!1},pause:function(){this._eachAccess(function(e){e.pause()},function(){this.paused=!0,this.abort()}),this.paused=!0},cancel:function(){this.uploader.removeFile(this)},retry:function(e){var t=function(h){h.error&&h.bootstrap()};e?e.bootstrap():this._eachAccess(t,function(){this.bootstrap()}),this.uploader.upload()},abort:function(e){if(!this.aborted){this.currentSpeed=0,this.averageSpeed=0,this.aborted=!e;var t=this.chunks;e&&(this.chunks=[]);var h=g.STATUS.UPLOADING;n.each(t,function(r){r.status()===h&&(r.abort(),this.uploader.uploadNextChunk())},this)}},progress:function(){var e=0,t=0,h=0;return this._eachAccess(function(r,i){e+=r.progress()*r.size,t+=r.size,i===this.files.length-1&&(h=t>0?e/t:this.isComplete()?1:0)},function(){if(this.error){h=1;return}if(this.chunks.length===1){this._prevProgress=Math.max(this._prevProgress,this.chunks[0].progress()),h=this._prevProgress;return}var r=0;n.each(this.chunks,function(o){r+=o.progress()*(o.endByte-o.startByte)});var i=r/this.size;this._prevProgress=Math.max(this._prevProgress,i>.9999?1:i),h=this._prevProgress}),h},getSize:function(){var e=0;return this._eachAccess(function(t){e+=t.size},function(){e+=this.size}),e},getFormatSize:function(){var e=this.getSize();return n.formatSize(e)},getRoot:function(){if(this.isRoot)return this;for(var e=this.parent;e;){if(e.parent===this.uploader)return e;e=e.parent}return this},sizeUploaded:function(){var e=0;return this._eachAccess(function(t){e+=t.sizeUploaded()},function(){n.each(this.chunks,function(t){e+=t.sizeUploaded()})}),e},timeRemaining:function(){var e=0,t=0,h=0;return this._eachAccess(function(i,o){!i.paused&&!i.error&&(t+=i.size-i.sizeUploaded(),h+=i.averageSpeed),o===this.files.length-1&&(e=r(t,h))},function(){if(this.paused||this.error){e=0;return}var i=this.size-this.sizeUploaded();e=r(i,this.averageSpeed)}),e;function r(i,o){return i&&!o?Number.POSITIVE_INFINITY:!i&&!o?0:Math.floor(i/o)}},removeFile:function(e){if(e.isFolder)for(;e.files.length;){var t=e.files[e.files.length-1];this._removeFile(t)}this._removeFile(e)},_delFilePath:function(e){e.path&&this.filePaths&&delete this.filePaths[e.path],n.each(e.fileList,function(t){this._delFilePath(t)},this)},_removeFile:function(e){if(!e.isFolder){n.each(this.files,function(r,i){if(r===e)return this.files.splice(i,1),!1},this),e.abort();for(var t=e.parent,h;t&&t!==this;)h=t.parent,t._removeFile(e),t=h}e.parent===this&&n.each(this.fileList,function(r,i){if(r===e)return this.fileList.splice(i,1),!1},this),!this.isRoot&&this.isFolder&&!this.files.length&&(this.parent._removeFile(this),this.uploader._delFilePath(this)),e.parent=null},getType:function(){return this.isFolder?"folder":this.file.type&&this.file.type.split("/")[1]},getExtension:function(){return this.isFolder?"":this.name.substr((~-this.name.lastIndexOf(".")>>>0)+2).toLowerCase()}}),y.exports=l;function u(e){var t=[],h=e.split("/"),r=h.length,i=1;if(h.splice(r-1,1),r--,h.length)for(;i<=r;)t.push(h.slice(0,i++).join("/")+"/");return t}},{"./chunk":1,"./utils":5}],5:[function(_,y,R){var n=Object.prototype,g=Array.prototype,l=n.toString,u=function(i){return l.call(i)==="[object Function]"},e=Array.isArray||function(i){return l.call(i)==="[object Array]"},t=function(i){return l.call(i)==="[object Object]"&&Object.getPrototypeOf(i)===n},h=0,r={uid:function(){return++h},noop:function(){},bind:function(i,o){return function(){return i.apply(o,arguments)}},preventEvent:function(i){i.preventDefault()},stop:function(i){i.preventDefault(),i.stopPropagation()},nextTick:function(i,o){setTimeout(r.bind(i,o),0)},toArray:function(i,o,d){return o===void 0&&(o=0),d===void 0&&(d=i.length),g.slice.call(i,o,d)},isPlainObject:t,isFunction:u,isArray:e,isObject:function(i){return Object(i)===i},isString:function(i){return typeof i=="string"},isUndefined:function(i){return typeof i=="undefined"},isDefined:function(i){return typeof i!="undefined"},each:function(i,o,d){if(r.isDefined(i.length))for(var s=0,a=i.length;s<a&&o.call(d,i[s],s,i)!==!1;s++);else for(var p in i)if(o.call(d,i[p],p,i)===!1)break},evalOpts:function(i,o){return r.isFunction(i)&&(o=r.toArray(arguments),i=i.apply(null,o.slice(1))),i},extend:function(){var i,o,d,s,a,p,c=arguments[0]||{},v=1,f=arguments.length,m=!1;for(typeof c=="boolean"&&(m=c,c=arguments[1]||{},v++),typeof c!="object"&&!u(c)&&(c={}),v===f&&(c=this,v--);v<f;v++)if((i=arguments[v])!=null)for(o in i)d=c[o],s=i[o],c!==s&&(m&&s&&(t(s)||(a=e(s)))?(a?(a=!1,p=d&&e(d)?d:[]):p=d&&t(d)?d:{},c[o]=r.extend(m,p,s)):s!==void 0&&(c[o]=s));return c},formatSize:function(i){return i<1024?i.toFixed(0)+" bytes":i<1024*1024?(i/1024).toFixed(0)+" KB":i<1024*1024*1024?(i/1024/1024).toFixed(1)+" MB":(i/1024/1024/1024).toFixed(1)+" GB"},defineNonEnumerable:function(i,o,d){Object.defineProperty(i,o,{enumerable:!1,configurable:!0,writable:!0,value:d})}};y.exports=r},{}]},{},[3])(3)})})(P);var z=P.exports;export{z as U};
