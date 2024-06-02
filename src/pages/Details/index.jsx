import { Container, ImagePlate, InfoPlate, AddItem } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import {
  RiArrowLeftSLine,
  RiAddLargeFill,
  RiSubtractLine,
} from "react-icons/ri";

import { PiReceiptLight } from "react-icons/pi";

import imageSalad from "../../assets/Mask group.png";
import { Ingredient } from "../../components/Ingredient";

export function Details() {
  return (
    <>
      <Header />
      <Container>
        <header>
          <RiArrowLeftSLine />
          <a href=""> voltar</a>
        </header>
        <main>
          <ImagePlate>
            <img src={imageSalad} alt="imagem de salada" />
          </ImagePlate>

          <InfoPlate>
            <h2>Salada Ravanello</h2>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <div className="ingredients">
              <Ingredient title="alface" />
              <Ingredient title="Cebola" />
              <Ingredient title="Pão naan" />
              <Ingredient title="Pepino" />
              <Ingredient title="Rabanete" />
              <Ingredient title="Tomate" />
            </div>

            <section>
              <AddItem>
                <button>
                  <RiSubtractLine />
                </button>
                <span>01</span>
                <button>
                  <RiAddLargeFill />
                </button>
              </AddItem>
              <Button icon={PiReceiptLight} title="pedir ∙ R$ 25,00" />
            </section>
          </InfoPlate>
        </main>
      </Container>
      <Footer />
    </>
  );
}
