import { Container, Image, Icon, AddItem } from "./styles";
import { Button } from "../../components/Button/index.jsx";
import imageSalad from "../../assets/Mask group.png";
import { api } from "../../services/api";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { GoPencil } from "react-icons/go";

export function Plate({ data, ...rest }) {
  // const [plate, setPlate] = useState(null);

  // useEffect(() => {
  //   async function fetchPlates() {
  //     const response = await api.get(`/dish/${data.id}`);

  //     console.log("COMPONENTE PRATO => ", response.data);

  //     setPlate(response.data);
  //   }

  //   fetchPlates();
  // }, []);

  return (
    <Container {...rest}>
      <Image>
        <img src={imageSalad} alt="imagem de salada" />
      </Image>
      <Icon>
        {/* <GoPencil /> */}
        <FaRegHeart />
      </Icon>

      <h2>Salada Ravanello</h2>
      <p>
        Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão
        naan dá um toque especial.
      </p>
      <span>R$ 79,97</span>

      {/* <h2> {data.name} </h2> */}
      {/* <p> {data.description} </p>
      <span> {data.price} </span> */}

      <AddItem>
        <button>-</button>
        <span>01</span>
        <button>+</button>
      </AddItem>
      <Button title="Incluir" />
    </Container>
  );
}
