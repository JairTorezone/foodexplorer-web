import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 12px 32px;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: none;
`;
