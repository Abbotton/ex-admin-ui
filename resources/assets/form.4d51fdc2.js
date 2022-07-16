import"./vue.303f3630.js";import{_ as _export_sfc,a as useInjectRenderContext,c as exceptField,i as isNumber}from"./index.ad2ae79f.js";import{l as lodash}from"./lodash.c9cf1bdb.js";import{u as useHttp}from"./use-http.320566f7.js";import{r as ref,U as useAttrs,w as watch,a6 as isReactive,p as computed,aW as resolveComponent,aR as openBlock,ar as createBlock,bd as withCtx,W as renderSlot,c as createVNode,aM as mergeProps}from"./@vue.cfb5b4bf.js";import{w as watchDebounced}from"./@vueuse.9d4f3c84.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";import"./js-md5.5179c6be.js";import"./vue-router.459d6f87.js";import"./js-cookie.31874410.js";import"./ant-design-vue.1d11c535.js";import"./@ant-design.6903cb45.js";import"./@ctrl.fa7cbd46.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash-es.0ea26897.js";import"./dayjs.38e390ea.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./compute-scroll-into-view.6058b3be.js";import"./spark-md5.2cc5764b.js";import"./axios.e3200588.js";/* empty css                     */import"./clipboard.099d05c9.js";import"./markdown-it.80c3a67b.js";import"./entities.0d2c0164.js";import"./uc.micro.981ceb7b.js";import"./mdurl.ef76b4dc.js";import"./linkify-it.92c30060.js";import"./markdown-it-emoji.e3e91710.js";import"./escape-html.e5dfadb9.js";import"./prismjs.c97a8414.js";import"./diacritics.6be19c75.js";import"./markdown-it-container.512a5043.js";import"./markdown-it-anchor.c88e5394.js";import"./markdown-it-attrs.3af5ab50.js";import"./markdown-it-table-of-contents.8a4ce16f.js";import"./@kangc.f6189e82.js";import"./vue-demi.0d8c46ec.js";var form_vue_vue_type_style_index_0_scoped_true_lang="";const __default__={name:"ExForm",inheritAttrs:!1},_sfc_main=Object.assign(__default__,{props:{url:String,method:{type:String,default:"POST"},exceptField:{type:Array,default:[]},editId:{type:[String,Number],default:null},callParams:{type:Object,default:{}},params:{type:Object,default:{}},pk:{type:String,default:"id"},tabsValidateField:{type:Array,default:[]},watch:{type:Array,default:[]},stepCurrent:[String,Number]},emits:["submit","success","formModalClose","gridRefresh","update:stepCurrent","watchModel"],setup(__props,{expose,emit}){const props=__props,form=ref(),attrs=useAttrs(),watchData=[],proxyData=useInjectRenderContext(),stepResult=ref(null),{loading,http}=useHttp();let watchPauseField;watch(attrs.model,t=>{emit("watchModel",t)}),props.watch.forEach(field=>{const watchValue=eval("attrs.model."+field);isReactive(watchValue)?watchDebounced(computed(()=>JSON.stringify(eval("attrs.model."+field))),(t,e)=>{watchQueue(field,JSON.parse(t),JSON.parse(e))},{debounce:300,maxWait:1e3,deep:!0}):watchDebounced(()=>eval("attrs.model."+field),(t,e)=>{watchQueue(field,t,e)},{debounce:300,maxWait:1e3})});function watchQueue(t,e,a){if(watchPauseField==t)return watchPauseField=null,!1;const o=watchData.length;JSON.stringify(e)!=JSON.stringify(a)&&watchData.push({field:t,newValue:e,oldValue:a}),o===0&&watchListen()}async function watchListen(){const e=JSON.parse(JSON.stringify(watchData)).shift();e&&(await watchAjax(e.field,e.newValue,e.oldValue),watchData.shift(),watchListen())}function watchAjax(t,e,a){return new Promise((o,i)=>{http({url:props.url,method:props.method,data:Object.assign(props.callParams,{ex_admin_form_action:"watch",data:submitData(),ex_field:t,newValue:e,oldValue:a,formField:attrs.formField},props.params)}).then(r=>{r.data.showField.forEach(s=>{proxyData[s]=1}),r.data.hideField.forEach(s=>{proxyData[s]=0});let l=r.data.data;for(let s in l)isReactive(attrs.model[s])&&t==s&&(watchPauseField=t),attrs.model[s]=l[s];o(r)}).catch(r=>{o(r)})})}function submitData(){const t=lodash.exports.cloneDeep(attrs.model);exceptField(t,props.exceptField);for(let e in t)t[e]===void 0&&(t[e]=null);return t}function scrollToField(t){let e=t.map(a=>isNumber(a)?"*":a);lodash.exports.forEach(props.tabsValidateField,function(a){lodash.exports.forEach(a,function(o,i){e.join(".")==i&&lodash.exports.forEach(o,function(r){proxyData[r.model]=r.key})})}),form.value.scrollToField(t,{block:"center",behavior:"smooth"})}function validate(t,e,a){t=t.join("."),e?(attrs.validateField[t].message=null,attrs.validateField[t].status=null):(attrs.validateField[t].status="error",attrs.validateField[t].message=a)}function clearValidate(){lodash.exports.forEach(attrs.validateField,function(t,e){attrs.validateField[e].message=null,attrs.validateField[e].status=null})}const submitDebounce=lodash.exports.debounce(submit,500);function submit(){const t=submitData();emit("submit",t),form.value.validate().then(()=>{if(props.url){let e={ex_admin_form_action:"save",data:t,CURRENT_VALIDATION_STEP:props.stepCurrent,FORM_REF:attrs.form_ref};e[props.pk]=props.editId,http({url:props.url,method:props.method,data:Object.assign(props.callParams,e,props.params)}).then(a=>{if(clearValidate(),a.code===422){let o="";for(let i in a.data){o||(o=i);let r=a.data[i];attrs.validateField[i].status="error",attrs.validateField[i].message=Array.isArray(r)?r[0]:r}scrollToField([o]);return}else if(a.code===201){emit("update:stepCurrent",props.stepCurrent+1);return}else a.code===202&&(emit("update:stepCurrent",props.stepCurrent+1),stepResult.value=a.data);emit("success",a),emit("gridRefresh"),emit("formModalClose")})}else emit("success"),emit("gridRefresh"),emit("formModalClose")}).catch(e=>{scrollToField(e.errorFields[0].name)})}function stepReset(){emit("update:stepCurrent",0),form.value.resetFields(),stepResult.value=null}function reset(){form.value.resetFields(),clearValidate()}return expose({submitDebounce,stepReset,form,loading,submit,reset}),(t,e)=>{const a=resolveComponent("render"),o=resolveComponent("a-form");return openBlock(),createBlock(o,mergeProps({class:"form",ref_key:"form",ref:form,onValidate:validate},t.$attrs),{default:withCtx(()=>[renderSlot(t.$slots,"default",{},void 0,!0),createVNode(a,{data:stepResult.value},null,8,["data"]),renderSlot(t.$slots,"footer",{},void 0,!0)]),_:3},16)}}});var form=_export_sfc(_sfc_main,[["__scopeId","data-v-175a799c"]]);export{form as default};