import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 132rem;
  margin: auto;
  padding: 1.5rem 0;
`;
export const Banner = styled.div`
  width: 100%;
  max-width: 132rem;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6.2rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > img {
    width: 19.1rem;
    height: 14.9rem;
  }

  > .banner_info {
    display: flex;
    flex-direction: column;
    gap: 3px;

    h1 {
      font-family: Poppins;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }

    span {
      font-family: Poppins;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }
`;
export const Cards = styled.div`
  background-color: #ccc;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
