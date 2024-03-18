import{e as x,m as v,_ as y,o as i,c as u,b as e,n as p,F as N,g as U,f as k,h as g,t as m,d as w,j as P,r as _,k as q,w as B,a}from"./index-zk9T54vD.js";import{o as b}from"./ordersStore-yQ9mlD0h.js";const F={data(){return{isCartLoading:!1,isDetailLoading:!1}},methods:{...x(b,["getCartProducts","deleteAllProducts"])},computed:{...v(b,["cart"])},mounted(){this.getCartProducts()}},O={class:"table-responsive-lg"},S={class:"table align-middle"},j=e("thead",{class:"table-primary"},[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",null,"單價")])],-1),A={class:"table-group-divider"},L=["onClick"],D={key:0,class:"fas fa-spinner fa-pulse"},E=e("div",{class:"text-success"},"已套用優惠券",-1),T={class:"input-group input-group-sm"},z={class:"input-group mb-3"},M=["onUpdate:modelValue","onBlur"],Q={class:"input-group-text",id:"basic-addon2"},G={class:"text-end"},H={class:"text-danger text-decoration-line-through"},I=e("br",null,null,-1),J=e("small",{class:"text-success"},"折扣價：",-1),K=e("td",{colspan:"3",class:"text-end"},"總計",-1),R={class:"text-end"},W=e("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),X={class:"text-end text-success"};function Y(t,s,$,C,l,h){var d,r;return i(),u("div",null,[e("button",{onClick:s[0]||(s[0]=(...o)=>t.deleteAllProducts&&t.deleteAllProducts(...o)),class:p(["btn btn-danger mb-3",{disabled:!((r=(d=t.cart)==null?void 0:d.carts)!=null&&r.length)}]),type:"button"}," 清空購物車 ",2),e("div",O,[e("table",S,[j,e("tbody",A,[t.cart.carts?(i(!0),u(N,{key:0},U(t.cart.carts,o=>(i(),u("tr",{key:o.id},[e("td",null,[e("button",{onClick:n=>t.deleteProduct(o.id),type:"button",class:"btn btn-outline-danger btn-sm"},[l.isCartLoading?(i(),u("i",D)):k("",!0),g(" x ")],8,L)]),e("td",null,[g(m(o.product.title)+" ",1),E]),e("td",null,[e("div",T,[e("div",z,[w(e("input",{"onUpdate:modelValue":n=>o.qty=n,min:"1",type:"number",class:"form-control",onBlur:n=>t.updateCartQuantity(o.id,o.product.id,o.qty)},null,40,M),[[P,o.qty,void 0,{number:!0}]]),e("span",Q,m(o.product.unit),1)])])]),e("td",G,[e("small",H,"原價："+m(o.total),1),I,J,g(" "+m(o.final_total),1)])]))),128)):k("",!0)]),e("tfoot",null,[e("tr",null,[K,e("td",R,m(t.cart.total),1)]),e("tr",null,[W,e("td",X,m(t.cart.final_total),1)])])])])])}const Z=y(F,[["render",Y]]),ee={data(){return{user:{name:"",email:"",tel:"",address:""},message:""}},methods:{...x(b,["checkoutProducts"]),sendOrder(){this.checkoutProducts(this.user,this.message),this.user={name:"",email:"",tel:"",address:""},this.message=""},computed:{...v(b,["cart"])},isPhone(t){return/^(09)[0-9]{8}$/.test(t)?!0:"需要正確的電話號碼"}}},se={class:"mb-3"},te=e("label",{for:"email",class:"form-label"},"Email",-1),oe={class:"mb-3"},le=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),ne={class:"mb-3"},ae=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),de={class:"mb-3"},re=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ce={class:"mb-3"},ie=e("label",{for:"message",class:"form-label"},"留言",-1),ue={class:"text-end"};function me(t,s,$,C,l,h){const d=_("v-field"),r=_("error-message"),o=_("v-form");return i(),q(o,{ref:"form",onSubmit:h.sendOrder},{default:B(({errors:n})=>{var f,V;return[e("div",se,[te,a(d,{id:"email",name:"email",type:"email",class:p(["form-control",{"is-invalid":n.email}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:l.user.email,"onUpdate:modelValue":s[0]||(s[0]=c=>l.user.email=c)},null,8,["class","modelValue"]),a(r,{name:"email",class:"invalid-feedback"})]),e("div",oe,[le,a(d,{id:"name",name:"姓名",type:"text",class:p(["form-control",{"is-invalid":n.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.user.name,"onUpdate:modelValue":s[1]||(s[1]=c=>l.user.name=c)},null,8,["class","modelValue"]),a(r,{name:"姓名",class:"invalid-feedback"})]),e("div",ne,[ae,a(d,{id:"tel",name:"電話",type:"tel",class:p(["form-control",{"is-invalid":n.電話}]),placeholder:"請輸入電話",rules:h.isPhone,modelValue:l.user.tel,"onUpdate:modelValue":s[2]||(s[2]=c=>l.user.tel=c)},null,8,["class","rules","modelValue"]),a(r,{name:"電話",class:"invalid-feedback"})]),e("div",de,[re,a(d,{id:"address",name:"地址",type:"text",class:p(["form-control",{"is-invalid":n.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.user.address,"onUpdate:modelValue":s[3]||(s[3]=c=>l.user.address=c)},null,8,["class","modelValue"]),a(r,{name:"地址",class:"invalid-feedback"})]),e("div",ce,[ie,w(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=c=>l.message=c)},null,512),[[P,l.message]])]),e("div",ue,[e("button",{type:"submit",class:p(["btn btn-danger",{disabled:!((V=(f=t.cart)==null?void 0:f.carts)!=null&&V.length)}])}," 送出訂單 ",2)])]}),_:1},8,["onSubmit"])}const pe=y(ee,[["render",me]]),_e={data(){return{}},computed:{...v(b,["cart"])},components:{FrontOrderComponent:Z,ClientComponent:pe},mounted(){}},be={class:"container-lg h-100"},he={key:0,class:"row my-2 p-lg-5 p-1 rounded-3 justify-content-between"},fe={class:"text-end col-lg-6"},ge={class:"col-lg-5 row justify-content-center bg-success p-3 rounded-3"},ve={key:1,class:"h-100 d-flex justify-content-center align-items-center"},ye={class:"bg-success bg-opacity-50 p-5 rounded-3 text-center"},$e=e("h2",{class:"text-danger fw-bold"},"目前購物車為空",-1),Ce=e("i",{class:"bi bi-cursor me-2"},null,-1);function Ve(t,s,$,C,l,h){var o,n;const d=_("FrontOrderComponent"),r=_("ClientComponent");return i(),u("div",be,[((n=(o=t.cart)==null?void 0:o.carts)==null?void 0:n.length)>0?(i(),u("div",he,[e("div",fe,[a(d,{onNextProcess:s[0]||(s[0]=f=>t.process=t.process+f)})]),e("div",ge,[a(r)])])):(i(),u("div",ve,[e("div",ye,[$e,e("button",{class:"btn btn-warning w-100 mt-3 fs-5",onClick:s[1]||(s[1]=()=>t.$router.push("/products"))},[Ce,g("查看片單 ")])])]))])}const we=y(_e,[["render",Ve]]);export{we as default};
