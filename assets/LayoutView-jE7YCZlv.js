import{_ as r,m as _,e as u,r as a,o as i,c as l,b as s,a as t,w as o,t as p,f as g}from"./index-2BssBkm8.js";import{o as c}from"./ordersStore-wdSb9bhT.js";import{_ as b}from"./ghibli-info-rental-3C-ULPwj.js";const m={data(){return{loginState:!1}},computed:{..._(c,["getOrdersNum"])},methods:{...u(c,["getCartProducts"])},mounted(){this.getCartProducts()}},h={class:"vh-100 d-flex flex-column position-relative"},v={class:"bg-secondary bg-opacity-75 z-1 d-flex gap-2 align-items-center"},f={class:"container-lg"},x={class:"justify-content-between navbar navbar-expand-lg"},y=s("img",{style:{height:"70px"},class:"py-2",src:b,alt:"logo"},null,-1),w=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),C={id:"navbarSupportedContent",class:"ms-auto collapse navbar-collapse justify-content-end align-items-center"},S={class:"navbar-nav p-3 d-flex justify-content-center align-items-center gap-2 flex-row"},N={class:"nav-item"},k=s("i",{class:"bi bi-house me-lg-1"},null,-1),V=s("div",{class:"d-none d-lg-inline"},"首頁",-1),$={class:"nav-item"},j=s("i",{class:"bi bi-film me-lg-1"},null,-1),B=s("div",{class:"d-none d-lg-inline"},"片單",-1),L={class:"nav-item"},O=s("i",{class:"bi bi-newspaper me-lg-1"},null,-1),P=s("div",{class:"d-none d-lg-inline"},"消息",-1),R={class:"nav-item"},z=s("i",{class:"bi bi-people-fill me-lg-1"},null,-1),A=s("div",{class:"d-none d-lg-inline"},"關於我們",-1),D={class:"nav-item"},E=s("i",{class:"bi bi-cart me-lg-1"},null,-1),T=s("div",{class:"d-none d-lg-inline"},"購物車",-1),q={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},F={class:"flex-grow-1"};function G(n,H,I,J,K,M){const e=a("RouterLink"),d=a("router-view");return i(),l("div",h,[s("header",v,[s("div",f,[s("div",x,[y,w,s("div",C,[s("ul",S,[s("li",N,[t(e,{to:"/",class:"btn btn-success"},{default:o(()=>[k,V]),_:1})]),s("li",$,[t(e,{to:"/products",class:"btn btn-success"},{default:o(()=>[j,B]),_:1})]),s("li",L,[t(e,{to:"/news",class:"btn btn-success"},{default:o(()=>[O,P]),_:1})]),s("li",R,[t(e,{to:"/about",class:"btn btn-success"},{default:o(()=>[z,A]),_:1})]),s("li",D,[t(e,{to:"/carts",class:"btn btn-success position-relative"},{default:o(()=>[E,T,n.getOrdersNum>0?(i(),l("span",q,p(n.getOrdersNum),1)):g("",!0)]),_:1})])])])])])]),s("main",F,[t(d)])])}const X=r(m,[["render",G]]);export{X as default};