import React from "react";
import Product from "./Product";

const Categories = () => {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const productLocal = window.localStorage.getItem("product");
    if (productLocal) setProduct(productLocal);
  }, []);

  React.useEffect(() => {
    if (product) window.localStorage.setItem("product", product);
  }, [product]);

  function handleClick(event) {
    setProduct(event.target.innerText);
  }

  return (
    <>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        notebook
      </button>
      <Product product={product} />
    </>
  );
};

export default Categories;
