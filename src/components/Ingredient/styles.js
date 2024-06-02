import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 4px 8px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

  font-family: Poppins;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  border-radius: 5px;
`;
