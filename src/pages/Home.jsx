import React from "react";
import Title from "../components/Title";
import Categories from "../components/Categories";

const Home = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  return (
    <>
      <Title text="Home" />
      <p>Essa é a home do site</p>
      <Categories />
    </>
  );
};

export default Home;
