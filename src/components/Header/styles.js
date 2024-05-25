import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  max-width: 132rem;
  height: auto;

  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 64px 10px 32px;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 3.2rem;
  }
`;

export const Menu = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-size: 3rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    > h1 {
      font-size: 2.1rem;
    }

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > span {
    display: none;

    color: ${({ theme }) => theme.COLORS.CAKE_300};
    font-size: 1.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    a {
      > svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    span {
      display: block;
    }

    a {
      > h1 {
        font-size: 2.4rem;
      }
    }
  }
`;

export const Search = styled.div`
  display: none;
  width: 100%;
  max-width: 58.1rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: block;
  }
`;

export const Cart = styled.div`
  font-size: 3rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > .item span {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
  }

  > .item span:last-child {
    position: absolute;
    top: -2px;
    right: -5px;

    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  > .item span:first-child {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 21.6rem;
    padding: 10px;
    border-radius: 5px;

    background: ${({ theme }) => theme.COLORS.TOMATO_100};

    > .item span:last-child {
      display: none;
    }

    > .item span:first-child {
      display: block;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > .item span:first-child {
      font-size: 1.4rem;
    }
  }
`;

export const Logout = styled.div`
  display: none;
  font-size: 3.2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`;
