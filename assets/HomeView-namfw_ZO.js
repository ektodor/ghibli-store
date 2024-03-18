import{t as k}from"./utils-sTL9UzG1.js";import{P as w}from"./ProductComponent-KJDYa6sK.js";import{_ as P,r as g,o,c as n,b as t,a as r,w as p,F as _,g as b,h as l,t as d,i as C,n as f,f as E}from"./index-zk9T54vD.js";import"./ordersStore-yQ9mlD0h.js";var A={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"ektodorwang-api",BASE_URL:"/ghibli-store/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:v,VITE_APP_API_NAME:x}=A,T={data(){return{products:[],tempProduct:{},detailModal:null,articles:[]}},components:{ProductComponent:w},methods:{getProducts(){this.$http.get(`${v}/api/${x}/products?page=1`).then(i=>{const e=i.data.products;this.products=e.length>5?e.slice(0,3):e,console.log(this.products)})},openModal(i){this.tempProduct=JSON.parse(JSON.stringify(i)),this.detailModal.show()},timestampToTwTime:k,getArticles(i=1){this.$http.get(`${v}/api/${x}/articles?page=${i}`).then(e=>{const u=e.data.articles;this.articles=u.length>5?u.slice(0,3):u})}},mounted(){this.getProducts(),this.getArticles()}},N={class:"home w-100 vh-100 position-absolute top-0"},V={class:"home-banner vh-100 d-flex"},M=t("h3",{class:"m-0"},"遇見吉卜力",-1),S=t("i",{class:"bi bi-caret-down fs-1"},null,-1),j={class:"vh-100 container-lg py-3",id:"topic",style:{"background-image":"url('https://www.ghibli.jp/img/totoro.png')","background-position":"center"}},I={class:"d-flex justify-content-around align-items-center h-100 flex-column flex-lg-row gap-5"},$=t("h2",null,[t("i",{class:"bi bi-film m-2"}),l("強檔片單")],-1),D=t("i",{class:"bi bi-hand-index-thumb fs-1"},null,-1),R=t("h2",null,[t("i",{class:"bi bi-fire mx-2"}),l("活動消息")],-1),B=t("i",{class:"bi bi-hand-index-thumb fs-1"},null,-1),L=t("h2",null,"關於我們",-1),O=t("i",{class:"bi bi-hand-index-thumb fs-1"},null,-1),U={class:"vh-100 bg-success py-3",id:"products"},q={class:"container-lg h-100"},F=t("h2",{class:"mt-4"},[t("i",{class:"bi bi-film mx-2"}),l("強檔片單")],-1),z={id:"carouselExampleCaptions",class:"carousel slide mt-4 border border-3 rounded-5"},J={class:"carousel-indicators"},W=["data-bs-slide-to","aria-label"],H={class:"carousel-inner"},Y=["src","alt"],G={class:"carousel-caption bg-white bg-opacity-75 rounded-5"},K={class:"text-primary"},Q=["onClick"],X=C('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),Z={class:"vh-100 py-3",id:"news"},tt={class:"container-lg h-100",style:{"background-image":"url('https://www.ghibli.jp/img/totoro.png')","background-position":"center"}},st={class:"d-flex flex-column gap-3 justify-content-center h-100"},et=t("h2",{class:"text-danger mt-3 mt-lg-0"},[t("i",{class:"bi bi-fire mx-2"}),l("活動快訊")],-1),ot=t("hr",{class:"m-1"},null,-1),nt={class:"card-header fs-4 bg-warning bg-opacity-50"},it=["onClick"],lt={key:0,class:"badge text-bg-danger mb-2"},at={class:"blockquote mb-0"},ct={class:"blockquote-footer"},rt={title:"Source Title"},dt={class:"bg-secondary bg-opacity-75 z-1 d-flex",style:{height:"50px"}},ut={class:"m-auto"},ht=t("i",{class:"bi bi-c-circle fs-6 mx-2"},null,-1);function pt(i,e,u,_t,a,m){const h=g("router-link"),y=g("ProductComponent");return o(),n(_,null,[t("div",N,[t("div",V,[r(h,{to:"#topic",style:{"--bs-icon-link-transform":"translate3d(0, 0.2rem, 0)","min-width":"300px"},class:"icon-link icon-link-hover m-auto btn p-4 bg-white bg-opacity-25 d-flex flex-column"},{default:p(()=>[M,S]),_:1})]),t("div",j,[t("div",I,[r(h,{to:"/products",class:"icon-link w-50 h-50 icon-link-hover d-flex flex-column rounded-5 justify-content-center btn btn-outline-primary border-3 d-flex align-items-center shadow",style:{"--bs-icon-link-transform":"translate3d(0, -0.5rem, 0)"}},{default:p(()=>[$,D]),_:1}),r(h,{to:"/news",class:"icon-link icon-link-hover w-50 h-50 d-flex flex-column rounded-5 justify-content-center btn btn-outline-primary border-3 d-flex align-items-center shadow",style:{"--bs-icon-link-transform":"translate3d(0, -0.5rem, 0)"}},{default:p(()=>[R,B]),_:1}),r(h,{to:"/about",class:"icon-link icon-link-hover w-50 h-50 d-flex flex-column rounded-5 justify-content-center btn btn-outline-primary border-3 d-flex align-items-center shadow",style:{"--bs-icon-link-transform":"translate3d(0, -0.5rem, 0)"}},{default:p(()=>[L,O]),_:1})])]),t("div",U,[t("div",q,[F,t("div",z,[t("div",J,[(o(!0),n(_,null,b(a.products,(s,c)=>(o(),n("button",{key:s,type:"button","data-bs-target":"#carouselExampleCaptions",class:f([{active:c==0},"text-bg-primary"]),"aria-current":"true","data-bs-slide-to":c,"aria-label":`Slide ${c+1}`},null,10,W))),128))]),t("div",H,[(o(!0),n(_,null,b(a.products,(s,c)=>(o(),n("div",{class:f(["carousel-item",{active:c==0}]),key:s},[t("img",{src:s==null?void 0:s.imagesUrl[0],class:"d-block img-fluid object-fit-cover w-100 rounded-5",style:{height:"80vh"},alt:s.title},null,8,Y),t("div",G,[t("h5",K,d(s.title),1),t("button",{class:"btn btn-outline-primary",onClick:bt=>m.openModal(s)},"查看詳情",8,Q)])],2))),128))]),X])])]),t("div",Z,[t("div",tt,[t("div",st,[et,ot,(o(!0),n(_,null,b(a.articles,s=>(o(),n("div",{class:"card",key:s},[t("div",nt,d(s.title),1),t("div",{class:"card-body",style:{cursor:"pointer"},onClick:()=>i.$router.push(`./news/${s.id}`)},[s.num==1?(o(),n("span",lt,"NEW")):E("",!0),t("blockquote",at,[t("p",null,d(s.description),1),t("footer",ct,[l(" 發布時間 "),t("cite",rt,d(m.timestampToTwTime(s.create_at)),1)])])],8,it)]))),128))])])]),t("footer",dt,[t("span",ut,[l("Copyright"),ht,l(d(new Date().getFullYear())+" Tippy Wang",1)])])]),r(y,{tempProduct:a.tempProduct,onModal:e[0]||(e[0]=s=>a.detailModal=s)},null,8,["tempProduct"])],64)}const xt=P(T,[["render",pt]]);export{xt as default};
