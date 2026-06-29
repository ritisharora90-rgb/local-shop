'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Products() {

const [products,setProducts]=
useState([]);

const [loading,setLoading]=
useState(true);

const router=
useRouter();

const {addToCart}=
useCart();

useEffect(()=>{

async function fetchItems(){

try{

const params =
new URLSearchParams(
window.location.search
);

const shopId =
params.get(
"shop_id"
);

const url =
shopId
?
`https://local-shop-admin.onrender.com/api/products?shop_id=${shopId}`
:
`https://local-shop-admin.onrender.com/api/products`;

const res =
await fetch(url);

const data =
await res.json();

setProducts(data);

}catch(err){

console.log(err);

}finally{

setLoading(false);

}

}

fetchItems();

},[]);



if(loading){

return(
<p>
Loading...
</p>
);

}


return(

<div>

<h1>
Fresh Grocery Items
</h1>

<div>

{products.map((item)=>{

const itemId =
item._id ||
item.id;

return(

<div
key={itemId}
>

<Link
href={`/products/${itemId}`}
>

<img
src={
item.image
||
item.image_url
}
alt={
item.name
}
width={200}
/>

<h2>
{item.name}
</h2>

<p>
₹{item.price}
</p>

</Link>

<button
onClick={()=>
addToCart(item)
}
>

Add to cart

</button>

<button
onClick={()=>
router.push(
`/checkout/${itemId}?qty=1`
)
}
>

Buy now

</button>

</div>

);

})}

</div>

</div>

);

}