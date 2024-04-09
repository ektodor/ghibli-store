import{_ as r,r as _,o as i,c as d,b as t,k as l,w as a,f as o,h}from"./index-CDS81N3y.js";var p={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:u}=p,f={data(){return{loginState:!1}},mounted(){const e=this.$loading.show(),s=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");if(!s){this.loginState=!1,setTimeout(()=>{e.hide()},500);return}this.$http.defaults.headers.common.Authorization=s,this.$http.post(`${u}/api/user/check`,{}).then(()=>{this.loginState=!0,e.hide()}).catch(()=>{this.loginState=!1,e.hide()})}},k={class:"container-lg h-100 d-flex justify-content-center align-items-center"},m={class:"bg-success bg-opacity-50 p-5 rounded-3 my-3"},b=t("h2",{class:"mb-3"},[t("i",{class:"bi bi-feather me-2"}),o("關於本站")],-1),g=t("hr",null,null,-1),v=t("p",null," 這個網站設計主軸為吉卜力動畫作品的影片租賃服務，為吉卜力工作室的影迷們提供了一個獨特的平台。 ",-1),x=t("p",null," 無論是《龍貓》、《魔法公主》、《天空之城》還是其他經典作品，我們都致力於為用戶提供方便、快捷的租賃體驗。 ",-1),w=t("p",null," 通過這個網站，您可以輕鬆地租賃和欣賞您最喜愛的吉卜力動畫電影，無論您身在何處，都能隨時隨地沉浸在這些令人驚嘆的故事和精彩的動畫世界中。 ",-1),y=t("p",null," 與此同時，我們也不斷努力擴展和更新我們的影片庫，以確保您能夠總是發現新的、令人振奮的吉卜力作品。 ",-1),A=t("p",null,"立即加入我們，一同探索吉卜力動畫的奇妙世界吧！",-1),P={class:"text-end"},$=t("i",{class:"bi bi-box-arrow-up-right ms-2"},null,-1),S=t("i",{class:"bi bi-box-arrow-up-right ms-2"},null,-1),E=h('<div><h2 class="mb-3"><i class="bi bi-feather me-2"></i>圖片版權說明</h2><hr><p>對於吉普力工作室釋出的圖片，我們確認這些圖片僅用於本網站的非商業個人練習目的。</p><p>在此，我們對使用這些圖片的方式做以下聲明：</p><ol><li>本網站僅將這些圖片用於個人練習，不涉及任何商業用途。</li><li>我們確保在使用吉普力工作室釋出的圖片時，尊重其版權所有者的權利。</li><li>這些圖片僅用於「在常識範圍內」的用途，不會超出允許的範圍。</li></ol><p> 我們重申，本網站僅將這些圖片用於非商業個人練習，並確保尊重吉普力工作室的版權和使用條款。 </p><p class="text-end"><a href="https://www.ghibli.jp/" target="_blank" class="link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover">前往吉卜力工作室<i class="bi bi-box-arrow-up-right ms-2"></i></a></p></div>',1);function V(e,s,I,B,c,R){const n=_("router-link");return i(),d("div",k,[t("div",m,[t("div",null,[b,g,v,x,w,y,A,t("div",P,[c.loginState?(i(),l(n,{key:1,to:"/admin/products",class:"link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"},{default:a(()=>[o("前往後台"),S]),_:1})):(i(),l(n,{key:0,to:"/login",class:"link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"},{default:a(()=>[o("後台管理"),$]),_:1}))])]),E])])}const N=r(f,[["render",V]]);export{N as default};
