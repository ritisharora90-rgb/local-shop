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

const [cart,setCart] =
useState([]);


// Load cart from MongoDB
useEffect(()=>{

async function getCart(){

try{

const res =
await fetch(
"https://local-shop-admin.onrender.com/api/cart/guest"
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

},[]);


// Save cart to MongoDB
useEffect(()=>{

if(cart.length===0)
return;

async function saveCart(){

try{

await fetch(
"https://local-shop-admin.onrender.com/api/cart",
{
method:"POST",

headers:{
"Content-Type":
"application/json",
},

body:
JSON.stringify({
items:cart
}),
}
);

}catch(err){

console.log(err);

}

}

saveCart();

},[cart]);


// Add product
const addToCart =
(product)=>{

setCart((prev)=>{

const existing =
prev.find(
(item)=>
item._id === product._id
);

if(existing){

return prev.map(
(item)=>

item._id === product._id

? {
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
(_id)=>{

setCart(
(prev)=>

prev.filter(
(item)=>
item._id !== _id
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