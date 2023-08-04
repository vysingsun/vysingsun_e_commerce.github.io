import{H as _,_ as x}from"./SidebarAdmin-e7f46b4d.js";import{k as b,o as l,c as a,a as e,l as k,i as g,m as w,F as n,r as u,t as i,n as v,w as P,p as c,v as m,s as y,q as C,b as p}from"./index-ee6bde47.js";import{p as A}from"./Product-42a073d8.js";import{c as D}from"./category-488e962e.js";import{i as U}from"./item-c797bf82.js";const V={},I={class:"popup"},S={class:"popup-content"};function F(r,s){return l(),a("div",I,[e("div",S,[k(r.$slots,"default")])])}const N=b(V,[["render",F]]);const j={name:"App",components:{AddProductPopup:N},data(){return{categories:[],items:[],products:[],showPopup:!1,category1:"",title:"",price:"",imageUrl:"",category:"",item:"",file:"",serverUrl:"https://vysingsun-api.onrender.com/static/",imageUrl:null}},async mounted(){this.categories=await D.getCategoryItems(),this.categories=this.categories.data,this.products=await A.getProductApi(),this.products=this.products.data,console.log(this.products)},methods:{change:async function(){console.log(this.category1);const s=await U.getItemApi(this.category1);console.log(s),this.items=s.data},addProduct(){const r=new FormData;r.append("title",this.title),r.append("price",this.price),r.append("image",this.file),r.append("category",this.category1),r.append("item",this.item),g.post("https://vysingsun-api.onrender.com/product/create",r,{headers:{"Content-Type":"multipart/form-data"}})},handleFileChange(){this.file=this.$refs.file.files[0]},DeleteProduct(r){confirm("Are you sure ?")&&g.post(`https://vysingsun-api.onrender.com/product/delete/${r}`).then(s=>{console.log("deleted?")})}}},B={class:"bg-slate-100 w-4/5 p-6"},z={class:"w-full flex justify-between bg-white p-5 rounded-t-lg"},E=e("div",{class:"font-medium text-base px-5 py-2.5 ml-2"},"Product",-1),H={class:"no-scrollbar relative overflow-x-auto h-[55vh] w-full overflow-y-auto"},M={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},T=e("thead",{class:"text-sm text-gray-900 uppercase dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 w-8 py-3"}," ID "),e("th",{scope:"col",class:"px-6 py-3"}," Image "),e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Category "),e("th",{scope:"col",class:"px-6 py-3"}," Item "),e("th",{scope:"col",class:"px-6 py-3"}," Price "),e("th",{scope:"col",class:"px-6 py-3"}," Action ")])],-1),q={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},L={class:"px-6"},G=["src"],J={class:"px-6 py-4"},K={class:"px-6 py-4"},O={class:"px-6 py-4"},Q={class:"px-6 py-4"},R={class:"px-6 py-4"},W=e("div",null,"Edit",-1),X=["onClick"],Y={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Z=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),$={class:"fixed inset-0 z-10 overflow-y-auto"},ee={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},te={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},se={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},oe={class:"mt-3 text-center sm:mt-0 sm:text-left"},re=e("h3",{class:"text-base font-semibold leading-6 text-gray-900",id:"modal-title"},"Add new Item",-1),le={class:"mt-2"},ae=e("label",{for:"countries",class:"block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Product title",-1),ie={class:"mt-2"},de=e("label",{for:"countries",class:"block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Product Price",-1),ne={class:"mt-2"},ce=e("label",{for:"countries",class:"block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Product Image",-1),ue={class:"mt-2"},pe=e("label",{for:"countries",class:"block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Select a Category",-1),ge=["value"],me={class:"mt-2"},ye=e("label",{for:"countries",class:"block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Select a Sub-Category",-1),be=["value"],he={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"};function fe(r,s,h,we,o,d){const f=w("AddProductPopup");return l(),a(n,null,[e("div",B,[e("div",z,[E,e("div",null,[e("button",{onClick:s[0]||(s[0]=t=>o.showPopup=!0),type:"button",class:"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"},"Add New")])]),e("div",H,[e("table",M,[T,e("tbody",null,[(l(!0),a(n,null,u(o.products,t=>(l(),a("tr",{key:t._id,class:"bg-white dark:bg-gray-800"},[e("td",q,i(t._id),1),e("td",L,[e("img",{class:"w-12 flex-none bg-gray-50",src:o.serverUrl+t.image,alt:""},null,8,G)]),e("td",J,i(t.title),1),e("td",K,i(t.category.name),1),e("td",O,i(t.item.name),1),e("td",Q," $ "+i(t.price),1),e("td",R,[W,e("form",null,[e("button",{onClick:ve=>d.DeleteProduct(t._id)},"Delete",8,X)])])]))),128))])])])]),o.showPopup?(l(),v(f,{key:0},{default:P(()=>[e("form",null,[e("div",Y,[Z,e("div",$,[e("div",ee,[e("div",te,[e("div",se,[e("div",oe,[re,e("div",le,[ae,c(e("input",{type:"text",name:"title","onUpdate:modelValue":s[1]||(s[1]=t=>o.title=t),"aria-describedby":"helper-text-explanation",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"title"},null,512),[[m,o.title]])]),e("div",ie,[de,c(e("input",{type:"text",name:"price","onUpdate:modelValue":s[2]||(s[2]=t=>o.price=t),"aria-describedby":"helper-text-explanation",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"price"},null,512),[[m,o.price]])]),e("div",ne,[ce,e("input",{class:"p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",type:"file",ref:"file",onChange:s[3]||(s[3]=(...t)=>d.handleFileChange&&d.handleFileChange(...t))},null,544)]),e("div",ue,[pe,c(e("select",{onChange:s[4]||(s[4]=(...t)=>d.change&&d.change(...t)),"onUpdate:modelValue":s[5]||(s[5]=t=>o.category1=t),name:"category1",class:"category bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Category"},[(l(!0),a(n,null,u(o.categories,t=>(l(),a("option",{key:t._id,value:t._id},i(t.name),9,ge))),128))],544),[[y,o.category1]])]),e("div",me,[ye,c(e("select",{"onUpdate:modelValue":s[6]||(s[6]=t=>o.item=t),name:"item",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"item"},[(l(!0),a(n,null,u(o.items,t=>(l(),a("option",{key:t._id,value:t._id},i(t.name),9,be))),128))],512),[[y,o.item]])])])]),e("div",he,[e("button",{onClick:s[7]||(s[7]=t=>d.addProduct()),class:"inline-flex w-full justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"},"Add"),e("button",{onClick:s[8]||(s[8]=t=>o.showPopup=!1),type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"},"Cancel")])])])])])])]),_:1})):C("",!0)],64)}const _e=b(j,[["render",fe]]),xe={class:"mx-auto bg-slate-200"},ke={class:"flex"},Ve={__name:"ProductView",setup(r){return(s,h)=>(l(),a("div",null,[p(_),e("main",null,[e("div",xe,[e("div",ke,[p(x),p(_e)])])])]))}};export{Ve as default};
