import "./styles.js";
import logoImg from "../../assets/logo.svg";
import { Input } from "../../components/Input/index.jsx";
import { Container, Banner, Form, Wrapper } from "./styles.js";
import { Label } from "../../components/Label/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";

function SignIn() {
  return (
    <>
      <Container>
        <Banner>
          <img src={logoImg} alt="logo" />
          <h1>food explorer</h1>
        </Banner>

        <Form>
          <h2>Faça login</h2>

          <Wrapper>
            <Label title="E-mail" />
            <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
          </Wrapper>

          <Wrapper>
            <Label title="Senha" />
            <Input type="password" placeholder="No mínimo 6 caracteres" />
          </Wrapper>

          <Button title="Entrar" />
          <a href="/">Criar uma conta</a>
        </Form>
      </Container>
    </>
  );
}

export default SignIn;
