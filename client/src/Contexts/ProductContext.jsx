import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const ProductContext = createContext(null);

export const useProducts = () => useContext(ProductContext);

const ProductContexts = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  // Get Data from API
  const fetchData = async () => {
    await axios
      .get("http://localhost:2000")
      .then((res) => setProducts(res.data));
    setLoading(false);
  };

  const values = { products, fetchData };

  return (
    <ProductContext.Provider value={values}>
      {loading ? <Loader /> : children}
    </ProductContext.Provider>
  );
};

export default ProductContexts;
