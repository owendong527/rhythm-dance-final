import{_ as d,o as t,b as n,d as s,n as l,i as g,F as p,h as u,t as o}from"./index-4wlj--K0.js";const h={props:["pages"],methods:{emitPages(c){this.$emit("emit-pages",c)}}},k={"aria-label":"Page navigation example"},m={class:"pagination justify-content-end"},f=s("span",{"aria-hidden":"true"},"«",-1),v=[f],P={key:0,class:"page-link"},b=["onClick"],x=s("span",{"aria-hidden":"true"},"»",-1),y=[x];function C(c,i,e,B,F,r){return t(),n("nav",k,[s("ul",m,[s("li",{class:l(["page-item",{disabled:e.pages.current_page===1}])},[s("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=g(a=>r.emitPages(e.pages.current_page-1),["prevent"]))},v)],2),(t(!0),n(p,null,u(e.pages.total_pages,(a,_)=>(t(),n("li",{class:l(["page-item",{active:a===e.pages.current_page}]),key:_},[a===e.pages.current_page?(t(),n("span",P,o(a),1)):(t(),n("a",{key:1,class:"page-link",href:"#",onClick:g(N=>r.emitPages(a),["prevent"])},o(a),9,b))],2))),128)),s("li",{class:l(["page-item",{disabled:e.pages.current_page===e.pages.total_pages}])},[s("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=g(a=>r.emitPages(e.pages.current_page+1),["prevent"]))},y)],2)])])}const w=d(h,[["render",C]]);export{w as P};
