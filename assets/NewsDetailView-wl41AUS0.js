import{_ as g,e as m,o as s,c as o,b as e,f as c,n as p,h,t as a,F as f,g as x}from"./index-2BssBkm8.js";import{c as v}from"./couponsStore-ZZOfIIHM.js";var b={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:A,VITE_APP_API_NAME:P}=b,y={data(){return{article:{}}},props:["id"],methods:{getArticle(){const l=this.$loading.show();this.$http.get(`${A}/api/${P}/article/${this.id}`).then(i=>{this.article=i.data.article,l.hide()})},...m(v,["addCoupon"])},mounted(){this.getArticle()}},E={class:"container-lg d-flex flex-column gap-3 h-100 py-4"},w={class:"row h-100"},V={key:0,class:"col-lg-6 d-flex align-items-center justify-content-center"},k=["src"],I={class:"d-flex"},N=e("i",{class:"bi bi-balloon text-danger"},null,-1),C={key:0,class:"align-items-center d-flex"},D={class:"mt-3"},R={key:0,class:"input-group mt-auto ms-auto",style:{"max-width":"500px"}},S=e("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"本次活動優惠碼",-1),T=["value"];function B(l,i,L,M,t,U){var r,d,u;return s(),o("div",E,[e("div",w,[t.article.image?(s(),o("div",V,[e("img",{class:"object-fit-cover border rounded",style:{"max-width":"500px"},src:t.article.image,alt:"image"},null,8,k)])):c("",!0),e("div",{class:p(["d-flex flex-column mt-4",t.article.image?"col-lg-6":"col-12"])},[e("div",I,[e("h2",null,[N,h(a(t.article.title),1)]),t.article.tags?(s(),o("div",C,[(s(!0),o(f,null,x((r=t.article.tags[0])==null?void 0:r.tags,n=>(s(),o("span",{class:"badge text-bg-warning ms-3",key:n},a(n),1))),128))])):c("",!0)]),e("p",D,a(t.article.description),1),t.article.title&&t.article.tags[0].coupon!=="無優惠卷"?(s(),o("div",R,[S,e("input",{type:"text",class:"form-control",disabled:"",value:(d=t.article.tags[0])==null?void 0:d.coupon},null,8,T),e("button",{class:p(["btn btn-warning",{disabled:((u=t.article.tags[0])==null?void 0:u.coupon)==""}]),onClick:i[0]||(i[0]=n=>{var _;return l.addCoupon((_=t.article.tags[0])==null?void 0:_.coupon)})}," 儲存優惠卷 ",2)])):c("",!0)],2)])])}const F=g(y,[["render",B]]);export{F as default};
