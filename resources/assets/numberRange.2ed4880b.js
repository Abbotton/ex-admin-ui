import"./vue.303f3630.js";import{r as m,U as H,w as M,p as d,aW as _,aR as N,ar as R,bd as S,c as g,aM as x,u as V,R as T,ai as U}from"./@vue.cfb5b4bf.js";import"./@babel.6cd0804c.js";import"./regenerator-runtime.8e24db72.js";const k={name:"ExNumberRange"},F=Object.assign(k,{props:{value:Array,separator:{type:String,default:"-"}},emits:["update:value"],setup(i,{emit:p}){const t=i,e=m(null),a=m(null),l=H();f(),M(()=>t.value,u=>{f()});function f(){t.value.length>0&&(e.value=t.value[0],a.value=t.value[1])}function n(){e.value===null&&a.value===null?p("update:value",[]):p("update:value",[e.value,a.value])}let r=!1;function b(){r=!1}function B(u){e.value===null&&(a.value=null),setTimeout(()=>{e.value!==null&&!a.value&&(a.value=o()),e.value!==null&&e.value===a.value&&(a.value=o()),n()},500)}function C(){r=!0,e.value===null&&a.value!==null&&(e.value=h()),setTimeout(()=>{a.value===null&&r&&(e.value=null),n()},300)}function o(){const u=l.step||1;return e.value+u}function h(){const u=l.step||1;return a.value-u}const w=d(()=>o()),y=d(()=>{if(l.max){const u=l.step||1;return l.max-u}return null});return(u,s)=>{const c=_("a-input-number"),D=_("a-form-item-rest");return N(),R(D,null,{default:S(()=>[g(c,x(u.$attrs,{max:V(y),value:e.value,"onUpdate:value":s[0]||(s[0]=v=>e.value=v),onChange:n,onFocus:b,onBlur:B}),null,16,["max","value"]),T(" "+U(i.separator)+" ",1),g(c,x(u.$attrs,{min:V(w),value:a.value,"onUpdate:value":s[1]||(s[1]=v=>a.value=v),onChange:n,onBlur:C}),null,16,["min","value"])]),_:1})}}});export{F as default};
