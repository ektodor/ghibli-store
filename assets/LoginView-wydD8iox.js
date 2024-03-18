import{_,r as l,o as f,c as h,a,w as v,F as g,b as e,n as c,d as b,v as w}from"./index-zk9T54vD.js";import{_ as I}from"./ghibli-info-rental-3C-ULPwj.js";var x={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:k}=x,V={data(){return{email:null,password:null,saveInfo:!0}},methods:{login(){this.$refs.message.innerText="",this.$http.post(`${k}/admin/signin`,{username:this.email,password:this.password}).then(i=>{this.saveInfo?this.storageInfo():localStorage.clear();const{token:s,expired:n}=i.data;document.cookie=`token=${s};expired=${new Date(n)}`,this.$http.defaults.headers.common.Authorization=s,this.$router.push("/admin/products")}).catch(()=>{this.$refs.message.innerText="登入失敗，請確認資訊是否填寫正確"})},storageInfo(){localStorage.setItem("email",this.email),localStorage.setItem("password",this.password),localStorage.setItem("saveInfo",!0)}},mounted(){this.saveInfo=localStorage.getItem("saveInfo"),this.saveInfo&&(this.email=localStorage.getItem("email"),this.password=localStorage.getItem("password"))}},S=e("div",{class:"login-bg vh-100 position-relative"},null,-1),P=e("div",{class:"w-100 text-center"},[e("img",{class:"pb-3",width:"150px",src:I,alt:"logo"})],-1),A={class:"mb-3"},E=e("label",{for:"email",class:"form-label fw-bold"},"電子信箱 : ",-1),y={class:"mb-3"},C=e("label",{for:"password",class:"form-label fw-bold"},"密碼 : ",-1),U={class:"mb-3 d-flex align-items-center"},D={class:"form-check"},R=e("label",{class:"form-check-label fw-bold ms-1",for:"exampleCheck1"},"記住信箱與密碼",-1),T=e("button",{type:"submit",class:"btn btn-primary ms-auto"},"登入",-1),$={ref:"message",class:"text-danger"};function B(i,s,n,L,o,p){const r=l("v-field"),d=l("error-message"),u=l("v-form");return f(),h(g,null,[S,a(u,{style:{"max-width":"400px"},onSubmit:p.login,class:"p-3 w-75 bg-success position-absolute translate-middle top-50 start-50 rounded-3"},{default:v(({errors:m})=>[P,e("div",A,[E,a(r,{id:"email",name:"email",type:"email",class:c(["form-control",{"is-invalid":m.email}]),rules:"email|required",placeholder:"請輸入電子信箱",modelValue:o.email,"onUpdate:modelValue":s[0]||(s[0]=t=>o.email=t),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),a(d,{name:"email",class:"invalid-feedback"})]),e("div",y,[C,a(r,{placeholder:"請輸入密碼",type:"password",class:c(["form-control",{"is-invalid":m.密碼}]),id:"password",name:"密碼",rules:"required",modelValue:o.password,"onUpdate:modelValue":s[1]||(s[1]=t=>o.password=t)},null,8,["class","modelValue"]),a(d,{name:"密碼",class:"invalid-feedback"})]),e("div",U,[e("div",D,[b(e("input",{"true-value":!0,"false-value":!1,"onUpdate:modelValue":s[2]||(s[2]=t=>o.saveInfo=t),type:"checkbox",class:"form-check-input",id:"exampleCheck1"},null,512),[[w,o.saveInfo]]),R]),T]),e("strong",$,null,512)]),_:1},8,["onSubmit"])],64)}const q=_(V,[["render",B]]);export{q as default};
