import React, { createContext } from "react";

import CartPage from "./CartPage";
import { products } from "./products";

export const MyContext = createContext();

const Cart = () => {
  return (
    <>
      <MyContext.Provider value={products}>
        <CartPage />
      </MyContext.Provider>
    </>
  );
};

export default Cart;
