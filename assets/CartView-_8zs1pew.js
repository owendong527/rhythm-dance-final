import{a as f}from"./axios-G2rPRu76.js";import{S as y}from"./sweetalert2.all-mYz5MPea.js";import{_ as C,m as v,a as k,r as w,o as n,b as a,d as t,e as r,w as d,F as S,h as $,t as _,j as u,s as B,p as T,l as V}from"./index-xJi_qfpE.js";import{c as g}from"./cartStore-dUHkh8oE.js";var E={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"owen-hexschool",BASE_URL:"/rhythm-dance-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_PATH:x}=E,R={methods:{...v(g,["addToCart","getCart"]),changeQty(o,h=1){const p={product_id:o.product_id,qty:h};f.put(`${m}/api/${x}/cart/${o.id}`,{data:p}).then(()=>{this.getCart()}).catch(b=>{alert("未變更購物車數量",b.response)})},delCart(o){y.fire({title:"確定要刪除嗎？",text:"此動作將無法還原！",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定刪除",cancelButtonText:"取消"}).then(()=>{f.delete(`${m}/api/${x}/cart/${o}`).then(()=>{y.fire({icon:"success",title:"已成功刪除",position:"top",timer:2e3,timerProgressBar:!0,showConfirmButton:!0}),this.getCart()})})}},computed:{...k(g,["carts","total"])},mounted(){this.getCart()}},s=o=>(T("data-v-1f9fe0ba"),o=o(),V(),o),q={class:"container"},L={class:"main-lg mt-3"},D=s(()=>t("h3",{class:"mt-3 mb-4"},"確認商品",-1)),j={class:"row justify-content-center"},A={key:0,class:"col-md-10"},P=s(()=>t("p",null,"您尚未選擇任何選課",-1)),U={key:1,class:"col-md-10"},N={class:"table align-middle text-center"},Q=s(()=>t("thead",null,[t("tr",null,[t("th",{width:"150"},"商品圖"),t("th",{width:"200"},"品名"),t("th",null,"數量"),t("th",{width:"150"},"金額"),t("th",null,"刪除")])],-1)),z={class:"d-flex flex-nowrap justify-content-center"},F=["onClick"],H=s(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),O=[H],M=["onClick"],G=s(()=>t("i",{class:"bi bi-trash-fill"},null,-1)),J=[G],K=["value"],W=["onClick"],X=s(()=>t("i",{class:"bi bi-plus-lg"},null,-1)),Y=[X],Z={class:""},I=["onClick"],tt=s(()=>t("i",{class:"bi bi-trash3 text-danger"},null,-1)),et=[tt],ot={class:"text-end fw-bold"},st=s(()=>t("td",{colspan:"3",class:"fs-4"},"總價:",-1)),nt={class:"text-center"},at={class:"d-flex justify-content-between my-7"};function lt(o,h,p,b,it,l){const i=w("RouterLink");return n(),a("div",q,[t("div",L,[D,t("div",j,[this.carts.length?(n(),a("div",U,[t("table",N,[Q,t("tbody",null,[(n(!0),a(S,null,$(this.carts,e=>(n(),a("tr",{key:e.id},[t("td",null,[t("div",{style:B([{height:"150px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${e.product.imageUrl})`}])},null,4)]),t("td",null,_(e.product.title),1),t("td",null,[t("div",z,[e.qty>1?(n(),a("button",{key:0,class:"btn btn-outline-primary shadow-none",type:"button",onClick:c=>{e.qty--,l.changeQty(e,e.qty)}},O,8,F)):(n(),a("button",{key:1,class:"btn btn-outline-danger shadow-none",type:"button",onClick:c=>l.delCart(e.id)},J,8,M)),t("input",{type:"number",class:"form-control bg-transparent shadow-none text-center",readonly:"",value:e.qty},null,8,K),t("button",{class:"btn btn-outline-primary shadow-none",type:"button",onClick:c=>{e.qty++,l.changeQty(e,e.qty)}},Y,8,W)])]),t("td",Z,"$"+_(e.total),1),t("td",null,[t("button",{class:"btn btn-outline-danger shadow-none",type:"button",onClick:c=>l.delCart(e.id)},et,8,I)])]))),128))]),t("tfoot",null,[t("tr",ot,[st,t("td",nt,_(this.total)+"元",1)])])]),t("div",at,[r(i,{class:"btn btn-outline-primary btn-lg py-3 px-7",to:"/products"},{default:d(()=>[u("繼續選課")]),_:1}),r(i,{class:"btn bg-primary bg-gradient btn-lg py-3 px-7",to:"/booking"},{default:d(()=>[u("前往結帳")]),_:1})])])):(n(),a("div",A,[P,r(i,{class:"btn btn-outline-primary btn-lg py-3 px-7",to:"/products"},{default:d(()=>[u("前往選課")]),_:1})]))])])])}const ut=C(R,[["render",lt],["__scopeId","data-v-1f9fe0ba"]]);export{ut as default};