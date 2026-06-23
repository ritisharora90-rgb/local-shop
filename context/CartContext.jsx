"use client";

import {
createContext,
useContext,
useEffect,
useState,
} from "react";

const CartContext = createContext();

export function CartProvider({
children,
}) {

// Unique cart per browser/user
const [guestId] =
useState(()=>{

if(typeof window==="undefined")
return "";

let id =
localStorage.getItem(
"guestId"
);

if(!id){

id =
crypto.randomUUID();

localStorage.setItem(
"guestId",
id
);

}

return id;

});


const [cart,setCart] =
useState([]);


// Load cart from MongoDB
useEffect(()=>{

if(!guestId)
return;

async function getCart(){

try{

const res =
await fetch(
`http://127.0.0.1:8000/api/cart/${guestId}`
);

const data =
await res.json();

setCart(
data.items || []
);

}catch(err){

console.log(err);

setCart([]);

}

}

getCart();

},[guestId]);


// Save cart to MongoDB
useEffect(()=>{

if(!guestId)
return;

async function saveCart(){

try{

await fetch(
"http://127.0.0.1:8000/api/cart",
{
method:"POST",

headers:{
"Content-Type":
"application/json",
},

body:
JSON.stringify({

user_id:
guestId,

items:
cart,

}),
}
);

}catch(err){

console.log(err);

}

}

saveCart();

},[
cart,
guestId
]);


// Add product
const addToCart =
(product)=>{

setCart((prev)=>{

const productId =
product._id ||
product.id;

const existing =
prev.find(
(item)=>

(item._id || item.id)

===

productId

);

if(existing){

return prev.map(
(item)=>

(item._id || item.id)

===

productId

?

{
...item,

quantity:
(item.quantity || 1)+1,
}

: item

);

}

return [

...prev,

{
...product,

quantity:1,
},

];

});

};


// Remove product
const removeFromCart =
(id)=>{

setCart(
(prev)=>

prev.filter(
(item)=>

(item._id || item.id)

!==

id

)

);

};


return(

<CartContext.Provider
value={{
cart,
addToCart,
removeFromCart,
}}
>

{children}

</CartContext.Provider>

);

}

export const useCart =
()=>useContext(
CartContext
);