import styled from 'styled-components';
import { animationDuration, opacityShow, opacityShowDelayed, translateShowTop, translateShowBottom } from "../../animation";


export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    z-index: 999;
    justify-content: space-between;
    margin: 0px auto;
    padding: 0 0px;




    .categoCurs {
      animation-name: ${translateShowTop};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
      h2 {
        font-family:  ${({ theme }) => theme.fontOb600};
        font-size: 12px!important;
      }
    }
    
    .TopTextHead {
      color: #989B9E;
    }

    .categoryHome h2 {
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #E7ECF0;
      
    }

    .play {
      animation-name: ${translateShowTop};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;


      position: absolute;
      right: 21px;
      z-index: 99;
      padding-top: 28px;
      transition: 0.3s;

      a {
        display: flex;
        justify-content: flex-end;
        img {
          margin-right: 7px;
        }
        h2 {
          font-family:  ${({ theme }) => theme.fontOb600};
        }
      }
    }
    
    .logo {
      animation-name: ${translateShowTop};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;


    padding-top: 18px;
    position: relative;
    z-index: 999;
    transition: 0.3s;

    }
    
    .category {
      animation-name: ${translateShowTop};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;

    position: relative;
    z-index: 99;
    
    div {
    width: 160px;
        padding-top: 18px;
    margin: auto;
    }
      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        line-height: 13px;
        text-align: center;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #989B9E;
      }
    }
    .burger {
      position: absolute;
      left: 21px;
      padding-top: 29px;
    }


    @media (max-width: 768px) {
      display: none;
      .category {
        display:none;
      }
      .logo {
        width: 120px;
      }
      .TopTextHead {
        display:none;
      }
      .categoryHome {
        display:none;
      }
      .categoCurs {
        display:none;
      }
    }


`;
