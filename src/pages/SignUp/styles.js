import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0px 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

  > a {
    display: block;
    text-align: center;
    margin-top: 32px;
    text-decoration: nome;

    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    /* border: 1px solid red; */
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-bottom: 73px;

  > h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const Form = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 250px;

  > h2 {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 25px;
`;
