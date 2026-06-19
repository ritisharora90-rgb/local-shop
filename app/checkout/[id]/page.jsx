"use client";

import {
useParams,
useRouter
} from "next/navigation";

import {
useEffect,
useState
} from "react";

export default function Checkout(){

const { id }=
useParams();

const router=
useRouter();

const [
product,
setProduct
]=useState(null);

useEffect(()=>{

async function load(){

const res=
await fetch(
"/api/products"
);

const data=
await res.json();

const selected=
data.find(
(p)=>
p._id===id
);

setProduct(
selected
);

}

load();

},[id]);

async function placeOrder(){

const res=
await fetch(
"/api/orders",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify({

productId:
product._id,

productName:
product.name,

price:
product.price,

quantity:1,

status:
"Pending"

})

}

);

const data=
await res.json();

if(data.success){

alert(
"Order Placed"
);

router.push(
"/success"
);

}else{

alert(
"Order Failed"
);

}

}

if(!product)
return <p>Loading...</p>;

return(

<div className="container">

<h1>
Checkout
</h1>

<img
src={product.image}
height="200"
/>

<h3>
{product.name}
</h3>

<p>
₹{product.price}
</p>

<button
className="btn btn-success"
onClick={
placeOrder
}
>

Place Order

</button>

</div>

);

}