import{o as r,c as i,b as n,a as t,t as l,F as c,r as g,p as u,s as y,w as f,u as h,z as _,i as p,x as b,B as m,C as x,R as v,y as k,e as w}from"./index-ee6bde47.js";const z={class:"flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"},C={class:"flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"},q={class:"relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"},U={class:"h-full my-32 rounded-lg sm:col-span-4 lg:col-span-5 bg-cover"},$=["src"],B={class:"sm:col-span-8 lg:col-span-7"},V={class:"text-2xl font-bold text-gray-900 sm:pr-12"},j={"aria-labelledby":"information-heading",class:"mt-2"},P=t("h3",{id:"information-heading",class:"sr-only"},"Product information",-1),D={class:"text-2xl text-gray-900"},F={class:"mt-6"},I=t("h3",{id:"options-heading",class:"sr-only"},"Product options",-1),R=t("h4",{class:"text-sm font-medium text-gray-900"},"Color 7",-1),S={class:"mt-4 grid grid-cols-4 gap-4"},L=t("legend",{class:"sr-only"},"Choose a color",-1),N={class:"flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700"},M=["value"],O={for:"",class:"w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},Q={class:"my-6"},T=t("div",{class:"flex items-center justify-between"},[t("h4",{class:"text-sm font-medium text-gray-900"},"Size")],-1),A={class:"mt-4 grid grid-cols-4 gap-4"},E={class:"flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700"},G=["value"],H={for:"",class:"w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},J=t("div",null,"Quantity",-1),K=w('<option disabled selected>Choose a Quantity</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option>',9),W=[K],X=t("div",{class:"flex flex-wrap"},[t("div",{class:"flex items-center mr-4"},[t("input",{id:"red-radio",type:"radio",value:"",name:"colored-radio",class:"w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),t("label",{for:"red-radio",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Red")])],-1),Y={data(){return{categories:[],product:Object,serverUrl:"https://vysingsun-api.onrender.com/static/",imageUrl:null,user:"",product1:"",color1:"",size1:"",quantity:""}},created(){this.getProductByID()},mounted(){_()},methods:{getProductByID(){p.get(`https://vysingsun-api.onrender.com/product/${this.$route.params.id}`).then(a=>{this.product=a.data[0],console.log(this.products)})},async addToCard(){console.log({user:this.$store.getters.getUserId,color:this.color1,size:this.size1,quantity:this.quantity,product:this.product._id});let a=await p.post("https://vysingsun-api.onrender.com/card/create",{user:this.$store.getters.getUserId,color:this.color1,size:this.size1,quantity:this.quantity,product:this.product._id});console.log(a)}}},tt=Object.assign(Y,{__name:"testListPro",setup(a){return(e,s)=>(r(),i(c,null,[n(b),t("div",z,[t("div",C,[t("div",q,[(r(),i("div",{key:e.product._id,class:"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"},[t("div",U,[t("img",{src:e.serverUrl+e.product.image,alt:""},null,8,$)]),t("div",B,[t("h2",V,l(e.product.title),1),t("section",j,[P,t("p",D,"$"+l(e.product.price),1)]),t("section",F,[I,t("div",null,[R,t("fieldset",S,[L,(r(!0),i(c,null,g(e.product.colors,o=>(r(),i("span",{key:o._id},[t("div",N,[u(t("input",{id:"",type:"radio",value:o._id,"onUpdate:modelValue":s[0]||(s[0]=d=>e.color1=d),name:"color",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,M),[[m,e.color1]]),t("label",O,[t("div",{class:x("w-6 h-6 rounded-full bg-["+o.color+"]")},null,2)])])]))),128))])]),t("div",Q,[T,t("div",A,[(r(!0),i(c,null,g(e.product.sizes,o=>(r(),i("div",{key:o._id},[t("div",E,[u(t("input",{id:"",type:"radio",value:o._id,"onUpdate:modelValue":s[1]||(s[1]=d=>e.size1=d),name:"size",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,G),[[m,e.size1]]),t("label",H,l(o.size),1)])]))),128))])]),t("div",null,[J,u(t("select",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.quantity=o),name:"quantiy",id:"underline_select",class:"block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"},W,512),[[y,e.quantity]])]),n(h(v),{to:"/card"},{default:f(()=>[t("button",{onClick:s[3]||(s[3]=o=>e.addToCard()),class:"mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},"Add to bag")]),_:1})])])]))])])]),X,n(k)],64))}});export{tt as default};
