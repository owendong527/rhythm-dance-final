import{_ as r,o as a,b as i,d as s,s as n,n as o}from"./index-4wlj--K0.js";const l={props:["outProgress"],data(){return{progress:this.outProgress}},watch:{outProgress(e){this.progress=e}}},d={class:"container mt-10 px-5"},p={class:"position-relative my-4 mx-auto",style:{height:"30px","max-width":"900px",width:"90%"}},c={class:"progress",style:{height:"1px"}},h=s("div",{class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-secondary rounded-pill border",style:{width:"2rem",height:"2rem"}}," 1 ",-1),m=s("p",{class:"position-absolute top-100 start-0 translate-middle"},"填寫資料",-1),b=s("p",{class:"position-absolute top-100 start-50 translate-middle"},"付款資訊",-1),_=s("p",{class:"position-absolute top-100 start-100 translate-middle text-nowrap"},"完成訂單",-1);function u(e,g,y,v,t,x){return a(),i("div",d,[s("div",p,[s("div",c,[s("div",{class:"progress-bar bg-secondary",role:"progressbar",style:n({width:t.progress+"%"}),"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},null,4)]),h,m,s("div",{class:o(["position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill border",t.progress>=50?"btn-secondary":"btn-light"]),style:{width:"2rem",height:"2rem"}}," 2 ",2),b,s("div",{class:o(["position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill border",t.progress>=100?"btn-secondary":"btn-light"]),style:{width:"2rem",height:"2rem"}}," 3 ",2),_])])}const f=r(l,[["render",u]]);export{f as F};