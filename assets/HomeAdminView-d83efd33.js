import{H as w,_ as k}from"./SidebarAdmin-6c55e340.js";import{_ as x,o as a,c as l,h as e,k as C,A as D,i as c,l as p,F as u,r as P,t as n,m as g,w as m,n as h,v as y,p as _,g as i}from"./index-05893e76.js";import{c as A}from"./category-488e962e.js";const j={},z={class:"popup"},$={class:"popup-content"};function B(r,t){return a(),l("div",z,[e("div",$,[C(r.$slots,"default")])])}const N=x(j,[["render",B]]);const U={name:"App",components:{AddCatePopup:D,DeleteCatePopup:N},data(){return{categories:[],showPopup:!1,showPopupDel:!1,name:"",desc:"",imageUrl:""}},async mounted(){this.categories=await A.getCategoryItems(),this.categories=this.categories.data},methods:{async addCategory(){console.log(this.name),console.log(this.desc),console.log(this.imageUrl);let r=await c.post("https://vysingsun-api.onrender.com/category/create",{name:this.name,desc:this.desc,imageUrl:this.imageUrl});console.log("called"),console.log(r)},DeleteCategory(r){confirm("Are you sure jkj?")&&(console.log(r),c.post(`http://localhost:3001/category/delete/${r}`).then(t=>{console.log("deleted?")}))}}},V={class:"bg-slate-100 w-4/5 p-6"},L={class:"w-full flex justify-between bg-white p-5 rounded-t-lg"},M=e("div",{class:"font-medium text-base px-5 py-2.5 ml-2"},"Category",-1),H={class:"relative overflow-x-auto"},E={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},F=e("thead",{class:"text-sm text-gray-900 uppercase dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 w-8 py-3"}," ID "),e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Description "),e("th",{scope:"col",class:"px-6 py-3"}," Action ")])],-1),I={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},S={class:"px-6 py-4"},T={class:"px-6 py-4"},Y={class:"px-6 py-4"},q=e("div",null,"Edit",-1),G=["onClick"],J={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},K=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),O={class:"fixed inset-0 z-10 overflow-y-auto"},Q={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},R={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},W={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},X={class:"mt-3 text-center sm:mt-0 sm:text-left"},Z=e("h3",{class:"text-base font-semibold leading-6 text-gray-900",id:"modal-title"},"Add new Category",-1),ee={class:"mt-2"},te={class:"mt-2"},se={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},oe={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},re=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),ae={class:"fixed inset-0 z-10 overflow-y-auto"},le={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},ne={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},ie={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},de={class:"mt-3 text-center sm:mt-0 sm:text-left"},ce=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),pe=e("span",{class:"sr-only"},"Close modal",-1),ue=[ce,pe],ge={class:"p-6 text-center"},me=e("svg",{"aria-hidden":"true",class:"mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),he=e("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"},"Are you sure you want to delete this product?",-1),ye=e("button",{"data-modal-hide":"popup-modal",type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"}," Yes, I'm sure ",-1);function _e(r,t,f,ve,o,d){const b=p("Popup"),v=p("DeleteCatePopup");return a(),l(u,null,[e("div",V,[e("div",L,[M,e("div",null,[e("button",{onClick:t[0]||(t[0]=s=>o.showPopup=!0),type:"button",class:"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"},"Add New")])]),e("div",H,[e("table",E,[F,e("tbody",null,[(a(!0),l(u,null,P(o.categories,s=>(a(),l("tr",{key:s._id,class:"bg-white dark:bg-gray-800"},[e("td",I,n(s._id),1),e("td",S,n(s.name),1),e("td",T,n(s.desc),1),e("td",Y,[q,e("button",{onClick:we=>d.DeleteCategory(s._id)},"Delete",8,G)])]))),128))])])])]),o.showPopup?(a(),g(b,{key:0},{default:m(()=>[e("form",null,[e("div",J,[K,e("div",O,[e("div",Q,[e("div",R,[e("div",W,[e("div",X,[Z,e("div",ee,[h(e("input",{type:"text",name:"name","onUpdate:modelValue":t[1]||(t[1]=s=>o.name=s),"aria-describedby":"helper-text-explanation",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name"},null,512),[[y,o.name]])]),e("div",te,[h(e("input",{type:"text",name:"desc","onUpdate:modelValue":t[2]||(t[2]=s=>o.desc=s),"aria-describedby":"helper-text-explanation",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Description"},null,512),[[y,o.desc]])])])]),e("div",se,[e("button",{onClick:t[3]||(t[3]=s=>d.addCategory()),class:"inline-flex w-full justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"},"Add"),e("button",{onClick:t[4]||(t[4]=s=>o.showPopup=!1),type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"},"Cancel")])])])])])])]),_:1})):_("",!0),o.showPopupDel?(a(),g(v,{key:1},{default:m(()=>[e("form",null,[e("div",oe,[re,e("div",ae,[e("div",le,[e("div",ne,[e("div",ie,[e("div",de,[e("button",{onClick:t[5]||(t[5]=s=>o.showPopupDel=!1),type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},ue),e("div",ge,[me,he,ye,e("button",{onClick:t[6]||(t[6]=s=>o.showPopupDel=!1),"data-modal-hide":"popup-modal",type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},"No, cancel")])])])])])])])])]),_:1})):_("",!0)],64)}const xe=x(U,[["render",_e]]),fe={class:"mx-auto bg-slate-200"},be={class:"flex"},Pe={__name:"HomeAdminView",setup(r){return(t,f)=>(a(),l("div",null,[i(w),e("main",null,[e("div",fe,[e("div",be,[i(k),i(xe)])])])]))}};export{Pe as default};
