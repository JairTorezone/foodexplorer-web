import { Container, Banner, Cards } from "./styles.js";
import { Header } from "../../components/Header";
import bannerImg from "../../assets/banner.png";
import { Plate } from "../../components/Plate/index.jsx";

import { Section } from "../../components/Section/index.jsx";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";
import { Footer } from "../../components/Footer/index.jsx";

export const Home = () => {
  const [plates, setPlates] = useState([]);
  const [search, setSearch] = useState("");
  const [ingredientsSelected, setIngredientsSelected] = useState([]);

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/dish?name=${search}`);

      console.log("HOME => ", response.data);

      setPlates(response.data);
    }

    fetchPlates();
  }, [ingredientsSelected, search]);

  return (
    <>
      <Header />
      <Container>
        <Banner>
          <img src={bannerImg} alt="imagem do banner" />
          <div className="banner_info">
            <h1>Sabores inigualáveis</h1>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados
            </span>
          </div>
        </Banner>
        <Cards>
          <Section title="Refeições">
            <Plate />
            <Plate />
            <Plate />
          </Section>
          <Section title="Pratos Principais">
            <Plate />
            <Plate />
            <Plate />
          </Section>
          <Section title="Pratos principais">
            <Plate />
            <Plate />
            <Plate />
          </Section>

          {/* {plates.map((plate) => (
            <Plate key={String(plate.id)} />
          ))} */}
        </Cards>
      </Container>
      <Footer />
    </>
  );
};
