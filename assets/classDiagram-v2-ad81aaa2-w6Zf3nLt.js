import{p as M,d as N,s as $}from"./styles-57e39d7a-iFH9pvmM.js";import{U as d,P as c,T as w,a6 as R,a4 as B,a2 as E,a3 as _,a0 as G,Y as C}from"./index-Gx8-dbLX.js";import{G as P}from"./layout-a8f6de6a-Thlhn9tx.js";import{r as z}from"./index-40c81eee-YlloWKJt.js";import"./edges-2dbfd539-6XO5T1gH.js";import"./createText-8791661f-Ch_NB-JO.js";import"./line-26bf7380-RPWN6q_2.js";import"./array-b7dcf730-Nw74a44z.js";import"./path-39bad7e2-aUcfwwLI.js";const S=s=>C.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const q=function(s,t,y,n){const e=Object.keys(s);d.info("keys:",e),d.info(s),e.forEach(function(i){var o,r;const l=s[i],p={shape:"rect",id:l.id,domId:l.domId,labelText:S(l.id),labelStyle:"",style:"fill: none; stroke: black",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};t.setNode(l.id,p),A(l.classes,t,y,n,l.id),d.info("setNode",p)})},A=function(s,t,y,n,e){const i=Object.keys(s);d.info("keys:",i),d.info(s),i.filter(o=>s[o].parent==e).forEach(function(o){var r,l;const a=s[o],p=a.cssClasses.join(" "),f={labelStyle:"",style:""},h=a.label??a.id,u=0,b={labelStyle:f.labelStyle,shape:"class_box",labelText:S(h),classData:a,rx:u,ry:u,class:p,style:f.style,id:a.id,domId:a.domId,tooltip:n.db.getTooltip(a.id,e)||"",haveCallback:a.haveCallback,link:a.link,width:a.type==="group"?500:void 0,type:a.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((l=c().class)==null?void 0:l.padding)};t.setNode(a.id,b),e&&t.setParent(a.id,e),d.info("setNode",b)})},F=function(s,t,y,n){d.info(s),s.forEach(function(e,i){var o,r;const l=e,a="",p={labelStyle:"",style:""},f=l.text,h=0,m={labelStyle:p.labelStyle,shape:"note",labelText:S(f),noteData:l,rx:h,ry:h,class:a,style:p.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};if(t.setNode(l.id,m),d.info("setNode",m),!l.class||!(l.class in n))return;const b=y+i,g={id:`edgeNote${b}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:E(k.curve,_)};t.setEdge(l.id,l.class,g,b)})},H=function(s,t){const y=c().flowchart;let n=0;s.forEach(function(e){var i;n++;const o={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+n,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:D(e.relation.type1),arrowTypeEnd:D(e.relation.type2),style:"fill:none",labelStyle:"",curve:E(y==null?void 0:y.curve,_)};if(d.info(o,e),e.style!==void 0){const r=G(e.style);o.style=r.style,o.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c",((i=c().flowchart)==null?void 0:i.htmlLabels)??c().htmlLabels?(o.labelType="html",o.label='<span class="edgeLabel">'+e.text+"</span>"):(o.labelType="text",o.label=e.text.replace(C.lineBreakRegex,`
`),e.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none"),o.labelStyle=o.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,o,n)})},U=function(s){k={...k,...s}},V=async function(s,t,y,n){d.info("Drawing class - ",t);const e=c().flowchart??c().class,i=c().securityLevel;d.info("config:",e);const o=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,l=new P({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:o,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),a=n.db.getNamespaces(),p=n.db.getClasses(),f=n.db.getRelations(),h=n.db.getNotes();d.info(f),q(a,l,t,n),A(p,l,t,n),H(f,l),F(h,l,f.length+1,p);let u;i==="sandbox"&&(u=w("#i"+t));const m=i==="sandbox"?w(u.nodes()[0].contentDocument.body):w("body"),b=m.select(`[id="${t}"]`),g=m.select("#"+t+" g");if(await z(g,l,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),R.insertTitle(b,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,n.db.getDiagramTitle()),B(l,b,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const T=i==="sandbox"?u.nodes()[0].contentDocument:document,I=T.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const x of I){const L=x.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),x.insertBefore(v,x.firstChild)}}};function D(s){let t;switch(s){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const W={setConf:U,draw:V},te={parser:M,db:N,renderer:W,styles:$,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,N.clear()}};export{te as diagram};
