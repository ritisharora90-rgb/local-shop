'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Products() {

const [products,setProducts]=
useState([]);

const [loading,setLoading]=
useState(true);

const [shopId,setShopId]=
useState(null);

const {addToCart}=
useCart();

const router=
useRouter();

useEffect(()=>{

async function fetchItems(){

try{

setLoading(true);

const currentShopId =
typeof window !==
"undefined"
?
new URLSearchParams(
window.location.search
).get(
"shop_id"
)
:
null;

setShopId(
currentShopId
);

const url =
currentShopId
?
`https://local-shop-admin.onrender.com/api/products?shop_id=${currentShopId}`
:
`https://local-shop-admin.onrender.com/api/products`;

const res =
await fetch(
url
);

const data =
await res.json();

setProducts(
Array.isArray(data)
?
data
:
[]
);

}catch(err){

console.error(
err
);

setProducts([]);

}finally{

setLoading(false);

}

}

fetchItems();

},[]);

if(loading){

return(

<p
style={{
padding:"40px"
}}
>

Loading Fresh Groceries...

</p>

);

}

return(

<div
style={{
padding:"40px 20px",
background:"#fff",
minHeight:"100vh"
}}
>

<div
style={{
maxWidth:"1200px",
margin:"0 auto"
}}
>

<h1>

{
shopId
?
`${shopId} Shop`
:
"Fresh Grocery Items"
}

</h1>

<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fill,minmax(260px,1fr))",
gap:"24px"
}}
>

{
products.length===0

?

<p>
No products found
</p>

:

products.map(
(item)=>{

const itemId=
item._id||
item.id;

return(

<div
key={
itemId
}
>

<Link
href={`/products/${itemId}`}
>

<img
src={
item.image||
item.image_url||
"https://placehold.co/200x200"
}
alt={
item.name
}
style={{
width:"100%",
height:"220px",
objectFit:"contain"
}}
/>

<h2>

{
item.name
}

</h2>

<p>

₹{
item.price
}

</p>

</Link>

<button
onClick={()=>
addToCart(
item
)
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

}

)

}

</div>

</div>

</div>

);

}
