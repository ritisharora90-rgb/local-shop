"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(()=>{

try{

const saved=
localStorage.getItem(
"localShopCart"
);

setCart(
saved
? JSON.parse(saved)
: []
);

}catch{

setCart([]);

}

},[]);

  // Save cart to localStorage
 useEffect(() => {

if(cart.length===0){

localStorage.removeItem(
"localShopCart"
);

}else{

localStorage.setItem(
"localShopCart",
JSON.stringify(cart)
);

}

},[cart]);

  // Add product to cart
const addToCart = (product) => {

setCart((prev)=>{

const existing=
prev.find(
(item)=>
item._id===product._id
);

if(existing){

return prev.map((item)=>

item._id===product._id
? {
...item,
quantity:
(item.quantity||1)+1
}
: item

);

}

return [

...prev,

{
...product,
quantity:1
}

];

});

};

  // Remove product completely
  const removeFromCart = (_id) => {
    setCart((prev) =>
      prev.filter((item) => item._id !== _id)
    );
  };

  return (
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

export const useCart = () => useContext(CartContext);