import{x as d,y as l}from"./index-4wlj--K0.js";import{a as i}from"./axios-G2rPRu76.js";import{S as r}from"./sweetalert2.all-kcOHD6I-.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"owen-hexschool",BASE_URL:"/rhythm-dance-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:s,VITE_PATH:n}=h,p=d("cartStore",{state:()=>({carts:[],final_total:0,total:0,cart:{},cartListTotalQty:"",isLoading:!0,form:{user:{email:"",name:"",tel:"",address:"",date:""},message:""},orderID:""}),actions:{getCart(){this.isLoading=!0,i.get(`${s}/api/${n}/cart`).then(t=>{this.cart=t.data.data.carts.cart,this.carts=t.data.data.carts,this.final_total=t.data.data.final_total,this.total=t.data.data.total,this.cartListTotalQty=t.data.data.carts.reduce((e,a)=>e+a.qty,0),console.log("pinia cart",t)}).catch(t=>{r.fire({icon:"error",title:t})}).finally(()=>{this.isLoading=!1})},addToCart(t){this.isLoading=!0;const e={product_id:t,qty:1};i.post(`${s}/api/${n}/cart`,{data:e}).then(a=>{console.log(a),r.fire({icon:"success",title:"成功加入購物車",text:"Thanks for coming!",position:"top",backdrop:"true",timer:1e3,timerProgressBar:!0,showConfirmButton:!0}),this.getCart()}).catch(a=>{r.fire({icon:"error",title:a.response})}).finally(()=>{this.isLoading=!1})},onSubmit(t){const a=new Date().toISOString();this.form.user.date=a;const c=t;this.isLoading=!0,i.post(`${s}/api/${n}/order`,{data:c}).then(o=>{this.form={user:{email:"",name:"",tel:"",address:""},message:""},this.orderID=o.data.orderId,l.push(`/checkout/${this.orderID}`)}).catch(o=>{r.fire({icon:"error",title:o.response.data.message})}).finally(()=>{this.isLoading=!1})}}});export{p as c};
