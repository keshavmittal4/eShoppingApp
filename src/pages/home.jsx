import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    // const response = await fetch("https://fakestoreapi.in/api/products");
    const response = await fetch("https://fakestoreapi.com/products");     
    const data = await response.json();
    // console.log(data.products);

    if (data) {
      setLoading(false);
      // setProducts(data.products);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {
            products && products.length
            ? products.map((productItem) => (
                <ProductCard product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;