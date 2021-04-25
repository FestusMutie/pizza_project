const frm = document.querySelector('#frm');
frm.addEventListener("submit",function(event){
    event.preventDefault();
    const fd = new FormData(frm);
    let order = {}
    //let cart -[];
    for (const key of fd.keys()){
     if(fd.get(key).toString().length>0){
         order[key] = fd.get(key).toStrong();
     } 
    }
    //confirm pizza delivery
    if(confirm("This pizza will")){ 
        localStorage.setItem("cart",[]);
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.push("order");
        localStorage.setItem("cart",JSON.stringify("cart"));
        
        //console.log("cart");
    }
});
        //To view order summary
        const btnViewOrder = querySelector("#view-order");
        btnViewOrder.addEventListener('click',function(){
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.forEach(element=>{
document.querySelector("#our-order").innerHTML +- <tr>
<td>${element['type']}</td>
<td>${element['size']}</td>
<td>${element['qty']}</td>
<td>${element['price']}</td>
</tr>
            });
        });
        localStorage.getItem('cart')