import{p as e,q as s}from"./index-CDS81N3y.js";import{S as t}from"./sweetalert2.all-Dah_LtJV.js";var i={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:c,VITE_APP_API_NAME:a}=i,p=e("couponsStore",{state:()=>({coupons:[]}),actions:{addCoupon(o){this.coupons.push(o),t.fire({title:"恭喜!",text:"新增優惠券成功",icon:"success"})},useCoupon(o){s.post(`${c}/api/${a}/coupon`,{data:{code:o}}).then(()=>{t.fire({title:"恭喜!",text:"使用優惠券成功",icon:"success"})}).catch(()=>{t.fire({title:"失敗!",text:"使用優惠券失敗",icon:"error"})})}}});export{p as c};
