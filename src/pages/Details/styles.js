import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  margin: auto;

  max-width: 132rem;

  header {
    padding: 2rem;

    display: flex;
    align-items: center;

    > svg {
      font-size: 3.2rem;
    }

    > a {
      font-family: Poppins;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      flex-direction: row;
      align-items: center;

      height: calc(100vh - 110px);
    }
  }
`;
export const ImagePlate = styled.div`
  width: 100%;
  max-width: 26.4rem;

  margin: 0 auto;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 39rem;
  }

  > img {
    width: 100%;
    max-width: fit-content;
  }
`;
export const InfoPlate = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  > h2 {
    font-family: Poppins;
    font-size: 2.7rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  P {
    margin: 2.4rem;
    text-align: center;
    font-family: Poppins;
    font-size: 16.225px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1.8rem;
    }
  }

  > .ingredients {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;

    padding: 0 2.4rem;
    margin: 0 auto;

    width: 316px;

    margin-bottom: 4.8rem;
  }

  section {
    display: flex;
    justify-content: center;
    gap: 1.6rem;

    margin-bottom: 1.5rem;

    padding: 2rem;

    > button {
      font-size: 9px;
      max-width: 18.8rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > h2 {
      font-size: 4rem;
    }

    > p {
      font-size: 2.4rem;
    }
    .ingredients {
      width: 510px;
      padding: 0;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > p {
      width: 610px;
    }
  }
`;
export const AddItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > span {
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }

  > button {
    background: transparent;
    border: none;

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
