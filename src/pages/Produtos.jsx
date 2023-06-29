import React from "react";
import Title from "../components/Title";
import Produto from "../components/Produto";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];
  return (
    <>
      <Title text="Produtos" />
      <ul style={{ padding: 0 }}>
        {produtos.map((produto) => (
          <Produto {...produto} />
        ))}
      </ul>
    </>
  );
};

export default Produtos;
