import React from "react";

const Product = ({ product }) => {
  const [productData, setProductData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (product) {
      setLoading(true);
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((response) => response.json())
        .then((json) => {
          setProductData(json);
          setLoading(false);
        });
    }
  }, [product]);

  return (
    <>
      {loading && <p>Carregando...</p>}
      {!loading && productData && (
        <div>
          <h1>{productData.nome}</h1>
          <p>R$ {productData.preco}</p>
        </div>
      )}
    </>
  );
};

export default Product;
