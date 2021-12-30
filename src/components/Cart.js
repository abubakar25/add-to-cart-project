import React, { createContext, useReducer } from "react";

import CartPage from "./CartPage";
import { products } from "./products";
import { reducer } from "./reducer";

const initialState = {
  item: products,
  totalAmount: 0,
  totalQuantity: 0,
  totalItems: 0,
};

export const MyContext = createContext();

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <MyContext.Provider value={{ ...state }}>
        <CartPage />
      </MyContext.Provider>
    </>
  );
};

export default Cart;
