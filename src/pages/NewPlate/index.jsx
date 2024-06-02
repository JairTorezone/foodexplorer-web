import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { ArrowBack } from "../../components/ArrowBack";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { PiUploadSimple } from "react-icons/pi";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import { ButtonText } from "../../components/ButtonText";

export function NewPlate() {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <header>
            <ArrowBack />
            <h2>Novo prato</h2>
          </header>

          <div className="wrapper">
            <div className="wrapper-input">
              <Label title="Imagem do prato" />
              <Input icon={PiUploadSimple} placeholder="Selecione imagem" />
            </div>

            <div className="wrapper-input">
              <Label title="Nome" />
              <Input placeholder="Ex.: Salada Ceasar" />
            </div>

            <div className="wrapper-input">
              <Label title="Categoria" />
              <Select />
            </div>
          </div>

          <div className="wrapper">
            <div className="wrapper-input flex1">
              <Label title="Ingredientes" />
              <Input placeholder="Ex.: Salada Ceasar" />
            </div>

            <div className="wrapper-input flex2">
              <Label title="Preço" />
              <Input placeholder="R$ 00,00" />
            </div>
          </div>

          <div className="wrapper-input">
            <Label title="Descrição" />
            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </div>

          <div className="footer">
            <ButtonText title="Salvar alterações" />
          </div>
        </Form>
      </Container>
    </>
  );
}
