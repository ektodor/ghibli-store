import{_,o as c,c as l,b as t,d as p,j as g,F as n,i as h,t as d}from"./index-CT0q0FpJ.js";var b={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:m,VITE_APP_API_NAME:P}=b,y={data(){return{showProducts:[],allProudcts:[],pagination:{},search:"",category:[],detailModal:null,tempProduct:{},currentCategory:""}},watch:{search(e){this.showProducts=this.allProudcts.filter(s=>s.title.includes(e))}},computed:{sortProudcts(){const e=this.$loading.show(),s=this.showProducts.filter(a=>a.category===this.currentCategory);return setTimeout(()=>{e.hide()},300),s.length>0?s:this.showProducts}},methods:{getAllProducts(){const e=this.$loading.show();this.$http.get(`${m}/api/${P}/products/all`).then(s=>{this.allProudcts=s.data.products,this.category=[...new Set(this.allProudcts.map(a=>a.category))],this.showProducts=this.allProudcts,e.hide()}).catch(s=>{console.error(s.message)})},showDescription(e){return e.length>50?`${e.substring(0,47)}...`:e}},mounted(){this.getAllProducts()}},f={class:"container-lg"},v={class:"d-flex align-items-center gap-2 justify-content-end mt-3"},w={class:"container mt-lg-5 mt-3 mb-7"},x={class:"row"},k={class:"col-lg-3"},A={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},E={class:"card border-0"},C=t("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[t("div",{class:"d-flex justify-content-between align-items-center pe-1"},[t("h4",{class:"mb-0"},"導演分類"),t("i",{class:"fas fa-chevron-down"})])],-1),I={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},V={class:"card-body py-0"},D={class:"list-unstyled d-flex d-lg-block gap-4"},O=["onClick"],S={class:"col-lg-9"},T={class:"d-flex flex-wrap justify-content-around gap-3"},M=["src","alt"],R={class:"card-body d-flex flex-column"},U={class:"card-title"},$={class:"card-text"},j={class:"text-center mt-auto"},B=["onClick"];function L(e,s,a,N,r,i){return c(),l("div",f,[t("div",v,[p(t("input",{class:"form-control me-2 me-lg-0 w-50 border border-4",type:"search",placeholder:"搜尋","aria-label":"Search","onUpdate:modelValue":s[0]||(s[0]=o=>r.search=o)},null,512),[[g,r.search]])]),t("div",w,[t("div",x,[t("div",k,[t("div",A,[t("div",E,[C,t("div",I,[t("div",V,[t("ul",D,[t("li",null,[t("a",{style:{cursor:"pointer"},onClick:s[1]||(s[1]=()=>r.currentCategory=""),class:"py-2 d-block text-muted"},"所有片單")]),(c(!0),l(n,null,h(r.category,o=>(c(),l("li",{key:o},[t("a",{style:{cursor:"pointer"},class:"py-2 d-block text-muted",onClick:()=>r.currentCategory=o},d(o),9,O)]))),128))])])])])])]),t("div",S,[t("div",T,[(c(!0),l(n,null,h(i.sortProudcts,(o,u)=>(c(),l("div",{class:"card",style:{width:"280px"},key:u},[t("img",{src:o.imageUrl,class:"card-img-top",alt:o.title,style:{height:"300px"}},null,8,M),t("div",R,[t("h5",U,d(o.title),1),t("p",$,d(i.showDescription(o.description)),1),t("div",j,[t("button",{class:"btn btn-primary w-75",onClick:()=>e.$router.push(`/products/${o.id}`)}," 查看影片 ",8,B)])])]))),128))])])])])])}const q=_(y,[["render",L]]);export{q as default};