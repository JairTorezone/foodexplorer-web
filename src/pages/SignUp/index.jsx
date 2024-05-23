import "./styles.js";
import logoImg from "../../assets/logo.svg";
import { Input } from "../../components/Input/index.jsx";
import { Container, Banner, Form, Wrapper } from "./styles.js";
import { Label } from "../../components/Label/index.jsx";
import { Button } from "../../components/Button/index.jsx";

function SignUp() {
  return (
    <>
      <Container>
        <Banner>
          <img src={logoImg} alt="logo" />
          <h1>food explorer</h1>
        </Banner>

        <Form>
          <h2>Crie sua conta</h2>
          <Wrapper>
            <Label title="Seu nome" />
            <Input placeholder="Exemplo: Maria da Silva" />
          </Wrapper>

          <Wrapper>
            <Label title="E-mail" />
            <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
          </Wrapper>

          <Wrapper>
            <Label title="Senha" />
            <Input placeholder="No mínimo 6 caracteres" />
          </Wrapper>

          <Button title="Criar conta" />
          <a href="/">Já tenho uma conta</a>
        </Form>
      </Container>
    </>
  );
}

export default SignUp;
