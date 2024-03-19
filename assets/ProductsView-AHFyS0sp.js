import{P}from"./ProductComponent-bwyuZmch.js";import{_ as g,r as f,o as c,c as l,b as t,d as y,k as w,F as d,g as _,a as v,h as x,t as u}from"./index-2BssBkm8.js";import"./ordersStore-wdSb9bhT.js";var b={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:A,VITE_APP_API_NAME:E}=b,M={data(){return{showProducts:[],allProudcts:[],pagination:{},search:"",category:[],detailModal:null,tempProduct:{}}},components:{ProductComponent:P},watch:{search(s){this.showProducts=this.allProudcts.filter(e=>e.title.includes(s))}},computed:{sortProudcts(){return this.category.map(e=>{const a=this.showProducts.filter(h=>h.category===e);return{category:e,products:a}})}},methods:{getAllProducts(){const s=this.$loading.show();this.$http.get(`${A}/api/${E}/products/all`).then(e=>{this.allProudcts=e.data.products,this.category=[...new Set(this.allProudcts.map(a=>a.category))],this.showProducts=this.allProudcts,s.hide()})},showDescription(s){return s.length>50?`${s.substring(0,47)}...`:s},openModal(s){this.tempProduct=JSON.parse(JSON.stringify(s)),this.detailModal.show()}},mounted(){this.getAllProducts()}},V={class:"container-lg"},k={class:"d-flex align-items-center gap-2 justify-content-end mt-3"},I={class:"mb-3"},S=t("i",{class:"bi bi-caret-right-square me-2"},null,-1),D={class:"d-flex flex-wrap gap-4 justify-content-lg-start justify-content-center"},N=["src","alt"],C={class:"card-body d-flex flex-column"},T={class:"card-title"},R={class:"card-text"},U={class:"text-center mt-auto"},B=["onClick"],L=t("hr",null,null,-1);function O(s,e,a,h,n,i){const p=f("ProductComponent");return c(),l(d,null,[t("div",V,[t("div",k,[y(t("input",{class:"form-control me-2 me-lg-0 w-50 border border-4",type:"search",placeholder:"搜尋","aria-label":"Search","onUpdate:modelValue":e[0]||(e[0]=o=>n.search=o)},null,512),[[w,n.search]])]),(c(!0),l(d,null,_(i.sortProudcts,(o,m)=>(c(),l("div",{class:"mt-3",key:m},[t("h3",I,[S,x(u(o.category),1)]),t("div",D,[(c(!0),l(d,null,_(o.products,r=>(c(),l("div",{class:"card",style:{width:"250px"},key:r},[t("img",{src:r.imageUrl,class:"card-img-top",alt:r.title,style:{height:"300px"}},null,8,N),t("div",C,[t("h5",T,u(r.title),1),t("p",R,u(i.showDescription(r.description)),1),t("div",U,[t("button",{class:"btn btn-primary w-75",onClick:j=>i.openModal(r)},"查看影片",8,B)])])]))),128))]),L]))),128))]),v(p,{tempProduct:n.tempProduct,onModal:e[1]||(e[1]=o=>n.detailModal=o)},null,8,["tempProduct"])],64)}const q=g(M,[["render",O]]);export{q as default};