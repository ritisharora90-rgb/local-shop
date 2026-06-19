'use client';

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

export default function Products(){

  const router = useRouter();

const [products,setProducts]=useState([]);

const { addToCart }=useCart();

useEffect(()=>{

async function getProducts(){

const res=await fetch(
"http://localhost:3000/api/products"
);

const data=
await res.json();

setProducts(data);

}

getProducts();

},[]);

return(

<div className="container m-3">

<div className="d-flex justify-content-between">

<h1 className="mb-4">
Products
</h1>

<a
href="/cart"

>
<FaShoppingCart
size={30}
/> 
</a>

</div>

<div className="row">

{

products.map((product)=>(

<div
key={product._id}
className="col-md-3 mb-4"
>

<div className="card p-3">

<img
src={product.image}
alt={product.name}
height="200"
className="w-100"
/>

<h5 className="mt-3">

{product.name}

</h5>

<p>

₹{product.price}

</p>



<button
className="btn btn-outline-warning mb-2"
onClick={()=>
addToCart(product)
}
>

Add to cart

</button>
<button
className="mb-2 btn btn-outline-success"
onClick={()=>
router.push(
`/checkout/${product._id}`
)
}
>Buy Now</button>

</div>

</div>

))

}

</div>

</div>

);

}