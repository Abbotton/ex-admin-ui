import{e as m,aw as d,X as l}from"./dynamicTag.98ddbc91.js";function p(t,a){const u=m.exports.debounce(r,300);let o=d();function r(c){return new Promise((n,i)=>{if(t.remote){let e=t.remote;e.data.search=c,o&&(e.data.data=o.submitData()),l(e).then(s=>{a.value=s.data,n(s.data)}).catch(()=>{i()})}else n(a.value)})}return{remoteOptionsDebounce:u,remoteOptions:r}}export{p as h};