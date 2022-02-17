import styled from 'styled-components';
import { animationDuration, opacityShow, opacityShowDelayed, translateShowTop, translateShowBottom } from "../../../animation";


export const Sound = styled.div`

    opacity:0; /* тут нужно прописывать то же значение, что будет в первом кадре анимации*/
    animation-name: ${opacityShow};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;


    
width: 24px;
    height: 50px;
    position: fixed;
    right: 21px;
    top: 50%;
    margin-left: -12px;
    margin-top: 0px;
    z-index: 999;
div {
position: relative;
}

.active {
    color: #fff;
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
    :hover {
        color: #fff;
    }
}

@media (max-width: 768px) {
    display: none;
    }
`;