"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Products() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [shopId, setShopId] = useState();

const { addToCart } = useCart();
const router = useRouter("");

useEffect(() => {
const params =
new URLSearchParams(
window.location.search
);

   
const id =
  params.get(
    "shop_id"
  );

setShopId(id);

async function fetchItems() {
  try {
    setLoading(true);

    const url = id
      ? `https://local-shop-admin.onrender.com/api/products?shop_id=${id}`
      : `https://local-shop-admin.onrender.com/api/products`;

    const res =
      await fetch(url);

    if (!res.ok) {
      throw new Error(
        "Failed to fetch products"
      );
    }

    const data =
      await res.json();

    setProducts(
      Array.isArray(data)
        ? data
        : []
    );

  } catch (err) {

    console.error(
      "Failed fetching products:",
      err
    );

    setProducts([]);

  } finally {

    setLoading(false);

  }
}

fetchItems();
   

}, []);

if (loading) {
return (
<div
style={{
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "100vh",
fontFamily: "sans-serif",
color: "#4b5563",
}}
>
<div
style={{
textAlign: "center",
}}
>
<div
style={{
width: "40px",
height: "40px",
border:
"4px solid #f3f3f3",
borderTop:
"4px solid #10b981",
borderRadius:
"50%",
animation:
"spin 1s linear infinite",
margin:
"0 auto 16px",
}}
/>

   
      <p
        style={{
          fontSize:
            "18px",
          fontWeight:
            "500",
        }}
      >
        Loading Fresh Groceries...
      </p>

      <style>
        {`
          @keyframes spin {
            0% {
              transform:
              rotate(0deg);
            }

            100% {
              transform:
              rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  </div>
);
   

}

return (
<div
style={{
padding:
"40px 20px",
background:
"#f9fafb",
minHeight:
"100vh",
fontFamily:
"system-ui,sans-serif",
}}
>
<div
style={{
maxWidth:
"1200px",
margin:
"0 auto",
}}
>
<div
style={{
marginBottom:
"32px",
borderBottom:
"1px solid #e5e7eb",
paddingBottom:
"16px",
}}
>
<h1
style={{
fontSize:
"32px",
fontWeight:
"700",
}}
>
{shopId
? `${shopId} Shop`
: "Fresh Grocery Items"} </h1>

   
      <p
        style={{
          color:
            "#6b7280",
        }}
      >
        Handpicked,
        fresh,
        and delivered.
      </p>
    </div>

    {products.length === 0 ? (

      <div
        style={{
          textAlign:
            "center",
          padding:
            "60px 20px",
        }}
      >
        No products found
      </div>

    ) : (

      <div
        style={{
          display:
            "grid",

          gridTemplateColumns:
            "repeat(auto-fill,minmax(280px,1fr))",

          gap:
            "24px",
        }}
      >
        {products.map(
          (item) => {

            const itemId =
              item._id ||
              item.id;

            return (

              <div
                key={itemId}
                style={{
                  background:
                    "#fff",

                  borderRadius:
                    "16px",

                  overflow:
                    "hidden",

                  border:
                    "1px solid #eee",
                }}
              >
                <Link
                  href={
                    `/products/${itemId}`
                  }

                  style={{
                    textDecoration:
                      "none",

                    color:
                      "inherit",
                  }}
                >
                  <div
                    style={{
                      height:
                        "200px",

                      display:
                        "flex",

                      justifyContent:
                        "center",

                      alignItems:
                        "center",
                    }}
                  >
                    <img
                      src={
                        item.image ||
                        item.image_url ||
                        "https://placehold.co/200"
                      }

                      alt={
                        item.name ||
                        "product"
                      }

                      style={{
                        maxWidth:
                          "100%",

                        maxHeight:
                          "100%",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding:
                        "20px",
                    }}
                  >
                    <h2>
                      {item.name}
                    </h2>

                    <p>
                      ₹
                      {item.price}
                    </p>
                  </div>
                </Link>

                <div
                  style={{
                    display:
                      "flex",

                    gap:
                      "10px",

                    padding:
                      "20px",
                  }}
                >
                  <button
                    onClick={() =>
                      addToCart(
                        item
                      )
                    }
                  >
                    Add to cart
                  </button>

                  <button
                    onClick={() =>
                      router.push(
                        `/checkout/${itemId}?qty=1`
                      )
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>

            );

          }
        )}
      </div>

    )}
  </div>
</div>
 

);
}
