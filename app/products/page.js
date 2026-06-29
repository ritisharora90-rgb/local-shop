'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  useRouter,
  useSearchParams
} from "next/navigation";

import { useCart } from "@/context/CartContext";

export default function Products() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const { addToCart } =
    useCart();

  const router =
    useRouter();

  const searchParams =
    useSearchParams();

  const shopId =
    searchParams.get("shop_id");

  useEffect(() => {

    async function fetchItems() {

      try {

        setLoading(true);

        const url =
          shopId
            ? `https://local-shop-admin.onrender.com/api/products?shop_id=${shopId}`
            : `https://local-shop-admin.onrender.com/api/products`;

        const res =
          await fetch(url);

        const data =
          await res.json();

        setProducts(
          Array.isArray(data)
            ? data
            : []
        );

      } catch (err) {

        console.error(
          "Failed to fetch products",
          err
        );

        setProducts([]);

      } finally {

        setLoading(false);

      }

    }

    fetchItems();

  }, [shopId]);



  if (loading) {
    return (
      <p
        style={{
          padding: "40px"
        }}
      >
        Loading Fresh Groceries...
      </p>
    );
  }

  return (

<div
style={{
padding:"40px 20px",
background:"#f9fafb",
minHeight:"100vh"
}}
>

<div
style={{
maxWidth:"1200px",
margin:"0 auto"
}}
>

<h1
style={{
fontSize:"2rem",
marginBottom:"30px"
}}
>

{shopId
? `${shopId} Shop`
: "Fresh Grocery Items"}

</h1>


<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fill,minmax(260px,1fr))",
gap:"24px"
}}
>

{products.length === 0 ? (

<p>
No products found
</p>

) : (

products.map((item)=>{

const itemId =
item._id || item.id;

return(

<div
key={itemId}

style={{
background:"#fff",
border:"1px solid #ddd",
borderRadius:"12px",
padding:"16px",
display:"flex",
flexDirection:"column"
}}
>

<Link
href={`/products/${itemId}`}
style={{
textDecoration:"none",
color:"inherit"
}}
>

<div
style={{
height:"220px",
overflow:"hidden"
}}
>

<img
src={
item.image ||
item.image_url ||
"https://placehold.co/200x200"
}
alt={
item.name
}
style={{
width:"100%",
height:"100%",
objectFit:"contain"
}}
/>

</div>

<h2>
{item.name}
</h2>

<p>

{
item.price
? `₹${item.price}`
: "Fresh Stock"
}

</p>

</Link>


<div
style={{
display:"flex",
gap:"10px",
marginTop:"auto"
}}
>

<button
onClick={()=>{
addToCart(item);
}}
style={{
flex:1,
padding:"10px"
}}
>

Add to cart

</button>


<button
onClick={()=>
router.push(
`/checkout/${itemId}?qty=1`
)
}
style={{
flex:1,
padding:"10px"
}}
>

Buy now

</button>

</div>

</div>

);

})

)}

</div>

</div>

</div>

);

}