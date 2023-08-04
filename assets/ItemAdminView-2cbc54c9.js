import{H as h,_ as x}from"./SidebarAdmin-e7f46b4d.js";import{k as _,o as l,c as a,a as e,l as f,i as p,m as v,F as d,r as u,t as n,n as w,w as k,p as i,v as g,s as I,q as A,b as c}from"./index-ee6bde47.js";import{i as C}from"./item-c797bf82.js";import{c as D}from"./category-488e962e.js";const P={},V={class:"popup"},N={class:"popup-content"};function $(r,s){return l(),a("div",V,[e("div",N,[f(r.$slots,"default")])])}const j=_(P,[["render",$]]);const B={name:"App",components:{AddItemPopup:j},data(){return{categories:[],items:[],showPopup:!1,name:"",desc:"",category:""}},async mounted(){this.categories=await D.getCategoryItems(),this.categories=this.categories.data,this.items=await C.getAllItemApi(),this.items=this.items.data,console.log(this.items)},methods:{async addItem(){console.log(this.name),console.log(this.desc),console.log(this.category);let r=await p.post("https://vysingsun-api.onrender.com/item/create",{name:this.name,desc:this.desc,category:this.category});console.log("Called"),console.log(r)},DeleteItem(r){confirm("Are you sure ?")&&(console.log(r),p.post(`https://vysingsun-api.onrender.com/item/delete/${r}`).then(s=>{console.log("deleted?")}))}}},U={class:"bg-slate-100 w-4/5 p-6"},S={class:"w-full flex justify-between bg-white p-5 rounded-t-lg"},z=e("div",{class:"font-medium text-base px-5 py-2.5 ml-2"},"Item",-1),E={class:"relative overflow-x-auto"},F={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},H=e("thead",{class:"text-sm text-gray-900 uppercase dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 w-8 py-3"}," ID "),e("th",{scope:"col",class:"px-6 py-3"}," Category ID "),e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Description "),e("th",{scope:"col",class:"px-6 py-3"}," Action ")])],-1),M={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},q={class:"px-6"},L={class:"px-6 py-4"},T={class:"px-6 py-4"},G={class:"px-6 py-4"},J=e("div",null,"Edit",-1),K=["onClick"],O={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Q=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),R={class:"fixed inset-0 z-10 overflow-y-auto"},W={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},X={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},Y={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},Z={class:"mt-3 text-center sm:mt-0 sm:text-left"},ee=e("h3",{class:"text-base font-semibold leading-6 text-gray-900",id:"modal-title"},"Add new Item",-1),te={class:"mt-2"},se={class:"mt-2"},oe={class:"mt-2"},re=e("option",{disabled:"",selected:""},"Choose a category",-1),le=["value"],ae={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"};function ne(r,s,y,me,o,m){const b=v("AddItemPopup");return l(),a(d,null,[e("div",U,[e("div",S,[z,e("div",null,[e("button",{onClick:s[0]||(s[0]=t=>o.showPopup=!0),type:"button",class:"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"},"Add New")])]),e("div",E,[e("table",F,[H,e("tbody",null,[(l(!0),a(d,null,u(o.items,t=>(l(),a("tr",{key:t._id,class:"bg-white dark:bg-gray-800"},[e("td",M,n(t._id),1),e("td",q,n(t.category.name),1),e("td",L,n(t.name),1),e("td",T,n(t.desc),1),e("td",G,[J,e("form",null,[e("button",{onClick:pe=>m.DeleteItem(t._id)},"Delete",8,K)])])]))),128))])])])]),o.showPopup?(l(),w(b,{key:0},{default:k(()=>[e("form",null,[e("div",O,[Q,e("div",R,[e("div",W,[e("div",X,[e("div",Y,[e("div",Z,[ee,e("div",te,[i(e("input",{type:"text",name:"name","onUpdate:modelValue":s[1]||(s[1]=t=>o.name=t),"aria-describedby":"helper-text-explanation",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name"},null,512),[[g,o.name]])]),e("div",se,[i(e("input",{type:"text",name:"desc","onUpdate:modelValue":s[2]||(s[2]=t=>o.desc=t),"aria-describedby":"helper-text-explanation",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Description"},null,512),[[g,o.desc]])]),e("div",oe,[i(e("select",{id:"default","onUpdate:modelValue":s[3]||(s[3]=t=>o.category=t),name:"category",class:"bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"ImageUrl"},[re,(l(!0),a(d,null,u(o.categories,t=>(l(),a("option",{key:t._id,value:t._id},n(t.name),9,le))),128))],512),[[I,o.category]])])])]),e("div",ae,[e("button",{onClick:s[4]||(s[4]=t=>m.addItem()),class:"inline-flex w-full justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"},"Add"),e("button",{onClick:s[5]||(s[5]=t=>o.showPopup=!1),type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"},"Cancel")])])])])])])]),_:1})):A("",!0)],64)}const de=_(B,[["render",ne]]),ie={class:"mx-auto bg-slate-200"},ce={class:"flex"},be={__name:"ItemAdminView",setup(r){return(s,y)=>(l(),a("div",null,[c(h),e("main",null,[e("div",ie,[e("div",ce,[c(x),c(de)])])])]))}};export{be as default};
