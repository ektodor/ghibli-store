import{_ as r}from"./ghibli-info-rental-DBQ9g2xf.js";import{_ as h,r as l,o as u,c as m,b as s,f as t,a as o,w as i}from"./index-CT0q0FpJ.js";var f={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:v}=f,b={methods:{logout(){this.$http.post(`${v}/logout`,{}).then(()=>{document.cookie="token=; expired=;",this.$router.push("/")}).catch(()=>{alert("請重新登出")})}}},p={class:"vh-100 d-flex flex-column"},x={class:"bg-secondary"},g={class:"container-fluid",style:{height:"100px"}},y={class:"row h-100 align-items-center"},w=s("div",{class:"col-2 h-100 text-center"},[s("img",{class:"py-3 h-100",src:r,alt:"logo"})],-1),k={class:"col-10"},E={class:"row justify-content-end"},P={class:"col-auto ms-auto"},A=s("i",{class:"bi bi-box-arrow-right"},null,-1),L=s("i",{class:"bi bi-box-arrow-right"},null,-1),V=s("div",{class:"col-auto ms-lg-auto d-lg-none"},[s("button",{class:"btn btn-primary","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample"},[s("i",{class:"bi bi-view-list me-1"}),t("選單 ")])],-1),R={class:"flex-grow-1 py-3 bg-success"},I={class:"container-fluid h-100"},$={class:"row h-100"},C={class:"offcanvas-lg offcanvas-start col-2",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"},B=s("div",{class:"offcanvas-header"},[s("h5",{class:"offcanvas-title",id:"offcanvasExampleLabel"},"選單"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close","data-bs-target":"#offcanvasExample"})],-1),N={class:"offcanvas-body justify-content-lg-center"},T={class:"nav flex-column w-75 text-center mx-auto"},D={class:"nav-item my-2"},S=s("i",{class:"bi bi-film me-2"},null,-1),U={class:"nav-item my-2"},j=s("i",{class:"bi bi-box-seam me-2"},null,-1),M={class:"nav-item my-2"},O=s("i",{class:"bi bi-ticket me-2"},null,-1),q={class:"nav-item mt-2"},z=s("i",{class:"bi bi-pen me-2"},null,-1),F={class:"col-lg-10 rounded"},G={class:"me-1 pt-1 pb-2 px-2 rounded h-100 bg-white d-flex flex-column"};function H(c,e,J,K,Q,n){const a=l("RouterLink"),d=l("router-view");return u(),m("div",p,[s("header",x,[s("div",g,[s("div",y,[w,s("div",k,[s("div",E,[s("div",P,[s("button",{class:"btn btn-primary me-3",onClick:e[0]||(e[0]=()=>c.$router.push("/"))},[A,t(" 回首頁 ")]),s("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=(..._)=>n.logout&&n.logout(..._))},[L,t(" 登出 ")])]),V])])])])]),s("main",R,[s("div",I,[s("div",$,[s("div",C,[B,s("div",N,[s("ul",T,[s("li",D,[o(a,{to:"/admin/products",class:"nav-link list-hover","aria-current":"page"},{default:i(()=>[S,t("產品管理")]),_:1})]),s("li",U,[o(a,{to:"/admin/orders",class:"nav-link list-hover"},{default:i(()=>[j,t("訂單管理 ")]),_:1})]),s("li",M,[o(a,{to:"/admin/coupons",class:"nav-link list-hover"},{default:i(()=>[O,t("優惠卷管理 ")]),_:1})]),s("li",q,[o(a,{to:"/admin/articles",class:"nav-link list-hover"},{default:i(()=>[z,t("文章管理 ")]),_:1})])])])]),s("div",F,[s("div",G,[o(d)])])])])])])}const Y=h(b,[["render",H]]);export{Y as default};