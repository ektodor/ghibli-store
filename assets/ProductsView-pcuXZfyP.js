import{P as m}from"./ProductComponent-KJDYa6sK.js";import{_ as g,r as f,o as c,c as l,b as t,d as y,j as w,F as i,g as _,a as v,h as b,t as d}from"./index-zk9T54vD.js";import"./ordersStore-yQ9mlD0h.js";var x={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:A,VITE_APP_API_NAME:E}=x,M={data(){return{showProducts:[],allProudcts:[],pagination:{},search:"",category:[],detailModal:null,tempProduct:{}}},components:{ProductComponent:m},watch:{search(s){this.showProducts=this.allProudcts.filter(e=>e.title.includes(s))}},computed:{sortProudcts(){return this.category.map(e=>{const u=this.showProducts.filter(h=>h.category===e);return{category:e,products:u}})}},methods:{getAllProducts(){this.$http.get(`${A}/api/${E}/products/all`).then(s=>{this.allProudcts=s.data.products,this.category=[...new Set(this.allProudcts.map(e=>e.category))],this.showProducts=this.allProudcts})},showDescription(s){return s.length>50?`${s.substring(0,47)}...`:s},openModal(s){this.tempProduct=JSON.parse(JSON.stringify(s)),this.detailModal.show()}},mounted(){this.getAllProducts()}},V={class:"container-lg"},I={class:"d-flex align-items-center gap-2 justify-content-end mt-3"},S={class:"mb-3"},k=t("i",{class:"bi bi-caret-right-square me-2"},null,-1),D={class:"d-flex flex-wrap gap-4 justify-content-lg-start justify-content-center"},N=["src","alt"],C={class:"card-body"},T={class:"card-title"},R={class:"card-text"},U={class:"text-center"},j=["onClick"],B=t("hr",null,null,-1);function L(s,e,u,h,a,n){const p=f("ProductComponent");return c(),l(i,null,[t("div",V,[t("div",I,[y(t("input",{class:"form-control me-2 me-lg-0 w-50 border border-4",type:"search",placeholder:"搜尋","aria-label":"Search","onUpdate:modelValue":e[0]||(e[0]=o=>a.search=o)},null,512),[[w,a.search]])]),(c(!0),l(i,null,_(n.sortProudcts,(o,P)=>(c(),l("div",{class:"mt-3",key:P},[t("h3",S,[k,b(d(o.category),1)]),t("div",D,[(c(!0),l(i,null,_(o.products,r=>(c(),l("div",{class:"card",style:{width:"260px"},key:r},[t("img",{src:r.imageUrl,class:"card-img-top",alt:r.title,style:{height:"300px"}},null,8,N),t("div",C,[t("h5",T,d(r.title),1),t("p",R,d(n.showDescription(r.description)),1),t("div",U,[t("button",{class:"btn btn-primary w-75",onClick:O=>n.openModal(r)},"查看影片",8,j)])])]))),128))])]))),128)),B]),v(p,{tempProduct:a.tempProduct,onModal:e[1]||(e[1]=o=>a.detailModal=o)},null,8,["tempProduct"])],64)}const q=g(M,[["render",L]]);export{q as default};
