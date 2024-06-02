import { Container } from "./styles";

export function Select() {
  return (
    <Container>
      <select name="category" id="category">
        <option value="meat">Refeição</option>
        <option value="mainDish">Pratos Principais</option>
        <option value="salad">Salada</option>
        <option value="desserts">Sobremesas</option>
        <option value="pastas">Massas</option>
        <option value="drinks">Bebidas</option>
      </select>
    </Container>
  );
}
