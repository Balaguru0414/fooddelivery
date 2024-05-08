import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext(null);

export const useCarts = () => useContext(CartContext);

const CartContexts = ({ children }) => {
  const [carts, setCarts] = useState([]);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCarts = JSON.parse(localStorage.getItem("carts"));
    if (storedCarts) {
      setCarts(storedCarts);
    }
  }, []);

  // Save cart data to local storage whenever cart is updated
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  const addToCart = (product) => {
    const cartSmaple = carts.find((cart) => cart?._id === product._id);
    if (cartSmaple) {
      // cartSmaple.quantity++;
      Swal.fire(`Already added to Order`);
    } else {
      // setCarts([...carts, { ...product, quantity: 1 }]);
      setCarts([...carts, { ...product, quantity: 1 }]);
      Swal.fire(`Added to Order`);
    }
  };

  const deleteCart = (id) => {
    // const dcart = carts.filter((_, index) => index !== id);
    const dcart = carts.filter((cart) => cart?._id !== id);
    setCarts(dcart);
  };

  const values = { addToCart, carts, deleteCart, setCarts };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContexts;
