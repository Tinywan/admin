var u=(n,a,e)=>new Promise((r,o)=>{var p=s=>{try{t(e.next(s))}catch(m){o(m)}},i=s=>{try{t(e.throw(s))}catch(m){o(m)}},t=s=>s.done?r(s.value):Promise.resolve(s.value).then(p,i);t((e=e.apply(n,a)).next())});import{B as v}from"./BasicForm.948b0243.js";import{u as h}from"./useForm.b21b423d.js";import{step1Schemas as x}from"./data.296feacd.js";import{a as B,aO as d,I as c,aH as g,aJ as l,o as F,h as O,i as b,j as _}from"./index.bde7963b.js";import{D as f}from"./index.9b1e5ec7.js";import{i as y}from"./install.b2adb91f.js";import"./index.0103b3aa.js";import"./index.3289c967.js";import"./_baseIteratee.34b68bfe.js";import"./index.dcd3d2b7.js";import"./index.18602d99.js";import"./index.bfd670f8.js";import"./index.13318916.js";import"./index.ce7c5e55.js";import"./index.b75cc0a1.js";import"./index.4b403226.js";import"./useWindowSizeFn.ada338ad.js";import"./uniqBy.3333e3da.js";import"./download.dc299cb5.js";const S=B({components:{BasicForm:v,[d.name]:d,ASelectOption:d.Option,[c.name]:c,[c.Group.name]:c.Group,[f.name]:f},emits:["next"],setup(n,{emit:a}){const[e,{validate:r,setProps:o}]=h({labelWidth:100,schemas:x,actionColOptions:{span:14},resetButtonOptions:{text:"\u8DF3\u8FC7\u6B64\u6B65\u9AA4"},submitButtonOptions:{text:"\u4E0B\u4E00\u6B65"},resetFunc:p,submitFunc:i});function p(){return u(this,null,function*(){a("next")})}function i(){return u(this,null,function*(){try{const t=yield r();o({submitButtonOptions:{loading:!0}}),setTimeout(()=>{o({submitButtonOptions:{loading:!1}})},3e3),yield y(t),o({submitButtonOptions:{loading:!1}}),a("next",t)}catch(t){}})}return{register:e}}}),w={class:"step1"},C={class:"step1-form"};function $(n,a,e,r,o,p){const i=l("BasicForm"),t=l("a-divider");return F(),O("div",w,[b("div",C,[_(i,{onRegister:n.register},null,8,["onRegister"])]),_(t)])}var Q=g(S,[["render",$],["__scopeId","data-v-79c02788"]]);export{Q as default};