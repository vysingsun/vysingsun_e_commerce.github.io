var o={async getProductApi(){return await(await fetch("http://localhost:3001/product/all",{method:"GET",headers:{"Content-type":"application/json"}})).json()}};export{o as p};
