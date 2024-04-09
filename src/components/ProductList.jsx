import { useState, useEffect } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};
