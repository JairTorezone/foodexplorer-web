import { Container } from "./styles";

export function ButtonText({ title, isEdit = false, ...rest }) {
  return (
    <Container type="button" $isedit={isEdit} {...rest}>
      {title}
    </Container>
  );
}
