import{a as f}from"./axios-G2rPRu76.js";import{S as r}from"./sweetalert2.all-kcOHD6I-.js";import{_ as p,r as g,o as h,b as _,e as w,d as s,i as d,u,v as c}from"./index-4wlj--K0.js";var v={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"owen-hexschool",BASE_URL:"/rhythm-dance-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b}=v,x={data(){return{isLoading:!1,user:{username:"",password:""}}},methods:{signIn(){if(this.user.username&&this.user.password){const a=`${b}/admin/signin`;this.isLoading=!0,f.post(a,this.user).then(e=>{console.log(e);const{token:i,expired:l}=e.data;console.log(i),document.cookie=`hexToken=${i};expires=${new Date(l)};`,this.isLoading=!1,r.fire("登入成功"),this.$router.push("/admin/products")}).catch(()=>{this.isLoading=!1,r.fire("請檢查帳號密碼是否有誤")})}else r.fire("請填寫正確資料")},goPrePage(){this.$router.push("/")}}},P={class:"container-fluid"},L={class:"row justify-content-center"},V={class:"col-lg-4 mt-5"},k=s("h1",{class:"h3 mb-3 font-weight-normal col-7"},"請先登入",-1),E={class:"form-floating mb-3"},I=s("label",{for:"username"},"Email address",-1),y={class:"form-floating"},S=s("label",{for:"Password"},"Password",-1),T={class:"d-flex"};function D(a,e,i,l,n,t){const m=g("VueLoading");return h(),_("div",P,[w(m,{active:n.isLoading,"z-index":1060},null,8,["active"]),s("div",L,[s("div",V,[k,s("form",{id:"form",class:"form-signin",onSubmit:e[4]||(e[4]=d((...o)=>t.signIn&&t.signIn(...o),["prevent"]))},[s("div",E,[u(s("input",{type:"email",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=o=>n.user.username=o),id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[c,n.user.username]]),I]),s("div",y,[u(s("input",{type:"password",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>n.user.password=o),id:"Password",placeholder:"Password",required:"",autocomplete:"on"},null,512),[[c,n.user.password]]),S]),s("div",T,[s("button",{class:"btn btn-lg btn-dark w-100 mt-3",type:"button",onClick:e[2]||(e[2]=(...o)=>t.goPrePage&&t.goPrePage(...o))}," 返回首頁 "),s("button",{class:"btn btn-lg btn-primary w-100 mt-3 ms-3",type:"submit",onClick:e[3]||(e[3]=d((...o)=>t.signIn&&t.signIn(...o),["prevent"]))}," 登入 ")])],32)])])])}const C=p(x,[["render",D]]);export{C as default};
