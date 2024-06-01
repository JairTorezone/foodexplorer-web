import { Container } from "./styles.js";

export function Section({ title, children }) {
  return (
    <Container>
      <h3> {title} </h3>
      <div className="cards">{children}</div>
    </Container>
  );
}
