import{p as t,q as s}from"./index-2BssBkm8.js";var a={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:p,VITE_APP_API_NAME:r}=a,n=t("couponsStore",{state:()=>({coupons:[]}),actions:{addCoupon(o){this.coupons.push(o),alert("新增優惠券成功")},useCoupon(o){s.post(`${p}/api/${r}/coupon`,{data:{code:o}}).then(()=>{alert("使用優惠券成功")}).catch(e=>{this.errorMessage(e,"使用優惠券失敗")})}}});export{n as c};