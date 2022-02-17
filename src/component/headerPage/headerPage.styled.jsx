import styled from 'styled-components';
import { animationDuration, opacityShow, opacityShowDelayed, translateShowTop, translateShowBottom } from "../../animation";


export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    z-index: 999;
    justify-content: space-between;
    margin: 0px auto;
    padding: 0 0px;

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
    }
    
    .category {
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
`;

export const Lang = styled.div`
width: 24px;
    height: 50px;
    position: absolute;
    left: 21px;
    top: 50%;
    margin-left: -12px;
    margin-top: 10px;
    z-index: 999;
div {
position: relative;
}

img {
    position: absolute;
    left: 8px;
    top: 4px;
}
a {
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: -0.02em;
      position: absolute;
  font-family:  ${({ theme }) => theme.fontOb400};
  text-transform: uppercase;
  color: #989B9E;
  opacity: 0.5;
  transform: rotate(-90deg);
    :nth-child(1) {
    top: 25px;
    }
    :nth-child(3) {
    top: -25px;
        left: -1px;
    }
}
`;

export const Sound = styled.div`
width: 24px;
    height: 50px;
    position: absolute;
    right: 21px;
    top: 50%;
    margin-left: -12px;
    margin-top: 0px;
    z-index: 999;
div {
position: relative;
}

a {
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: -0.02em;
      position: absolute;
  font-family:  ${({ theme }) => theme.fontOb400};
  text-transform: uppercase;
  color: #989B9E;
  opacity: 0.5;
  transform: rotate(-90deg);
    :nth-child(1) {
    top: 25px;
    }
    :nth-child(2) {
    top: -16px;
    left: 13px;
    }
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