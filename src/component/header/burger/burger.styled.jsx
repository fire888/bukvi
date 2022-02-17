// Burger.styled.js
import styled from 'styled-components';
import { animationDuration, opacityShow, opacityShowDelayed, translateShowTop, translateShowBottom } from "../../../animation";

export const StyledBurger = styled.a`

    animation-name: ${translateShowTop};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;

    transition: 0.3s;
    display: grid;
    position: absolute;
    gap: 10px;
    top: 9px;
    padding: 20px 0;
    width: 77px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 9999;
    cursor: none;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: drop-shadow(0px 0px 8px #E7ECF0);
  }
    @media (max-width: 768px) {
      gap: 7px;
    }

  div {
    height: 2px;
    background: #989B9E;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    cursor: none;
    transform-origin: 33% 40%;
    width: ${({ open }) => open ? '50px' : '50px'};


    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
    }

    :nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};

    }

    @media (max-width: 768px) {
      width: ${({ open }) => open ? '39px' : '30px'};
    }

  }

  &:hover div {
      background: #fff;
    }

`;
