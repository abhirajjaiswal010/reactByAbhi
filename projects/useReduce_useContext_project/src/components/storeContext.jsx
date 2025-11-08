// storeContext.jsx
import { createContext, useReducer } from "react";
import { InitialState, StoreReducer } from "./reducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, InitialState);

  const addTobasket = (product) => {
    let updatedBasket;

    // check if product already exists
    const existing = state.products.find((p) => p.name === product.name);

    if (existing) {
      // increase quantity of existing product
      updatedBasket = state.products.map((p) =>
        p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
      );
    } else {
      // add new product with quantity 1
      updatedBasket = [...state.products, { ...product, quantity: 1 }];
    }

    updatePrice(updatedBasket);
    dispatch({
      type: "Add",
      payload: updatedBasket,
    });
  };

  const removeFromBasket = (product) => {
    let updatedBasket = state.products
      .map((p) =>
        p.name === product.name
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
      .filter((p) => p.quantity > 0);

    updatePrice(updatedBasket);
    dispatch({
      type: "Remove",
      payload: updatedBasket,
    });
  };

  const updatePrice = (products) => {
    const total = products.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    dispatch({
      type: "Update price",
      payload: total,
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addTobasket,
    removeFromBasket,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};
