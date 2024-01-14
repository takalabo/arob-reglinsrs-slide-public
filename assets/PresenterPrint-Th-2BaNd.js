import{d,u as _,a as h,c as m,b as p,r as u,e as a,f as t,t as o,g as l,F as f,h as g,n as v,i as x,o as r,j as b,k as y,l as k,m as N,_ as w}from"./index-2_lROEBw.js";import{N as P}from"./NoteDisplay-4eLCjwYK.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=p(()=>u.map(s=>{var n;return(n=s.meta)==null?void 0:n.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,n)=>(r(),a("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",L,[t("h1",S,o(l(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(r(!0),a(f,null,g(i.value,(e,c)=>(r(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(l(b)),1),y(" "+o(e==null?void 0:e.title)+" ",1),j])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(r(),a("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/Users/motoshin/workspace/research/slides/arob-reglinsrs-slide/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
