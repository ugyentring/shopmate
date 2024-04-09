import { useState, useEffect, useCallback } from "react";

export const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [showInStock, setShowInStock] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setAllProducts(data);
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (showInStock) {
      setProducts(allProducts.filter((product) => product.in_stock));
    } else {
      setProducts(allProducts);
    }
  }, [showInStock, allProducts]);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setShowInStock(false)}>All</button>
        <button onClick={() => setShowInStock(true)}>In Stock</button>
      </div>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In stock" : "Out of stock"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
