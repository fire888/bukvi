import styled, {keyframes} from 'styled-components';
import ok from '../../assets/img/ok.svg'
import { animationDuration, opacityShow, opacityShowDelayed, translateShowTop, translateShowBottom } from "../../animation";


export const FooterAn = styled.div`
.footer {
  animation-name: ${translateShowBottom};
        animation-duration: ${animationDuration};
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
}

`;

export const H4Made = styled.h4 `

animation-name: ${translateShowBottom};
        animation-duration: ${animationDuration};
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;

    position: absolute;
    left: 21px;
    bottom: 14px;
    line-height: 25px;
    z-index: 9999;
    
    @media (max-width: 1681px) {
      bottom: 11px;
    }
    @media (max-width: 1441px) {
      bottom: 12px;
    }
    @media (max-width: 1281px) {
      bottom: 13px;
    }
    @media (max-width: 1025px) {
      bottom: 12px;
    }
`;


export const StyledHome = styled.div`
    display		: table-cell;
    vertical-align	: middle;



    .textH4creative {
      
        opacity:0;
        animation-name: ${opacityShowDelayed};
        animation-duration: ${animationDuration};
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;

    margin-top: 23px;
    @media (max-width: 1681px) {
      margin-top: 20px;
    }
    @media (max-width: 1441px) {
      margin-top: 20px;
    }
    @media (max-width: 1281px) {
      margin-top: 10px;
    }
    @media (max-width: 1025px) { 
      margin-top: 10px;
    }
    }

.heightBlockHome {
    height: 142px;
    @media (max-width: 1681px) {
      height: 112px;
    }
    @media (max-width: 1441px) {
      height: 112px;
    }
    @media (max-width: 1281px) {
      height: 84px;
    }
    @media (max-width: 1025px) {
      height: 72px;
    }
}

.textH1 {
  position: absolute;
  width: 700px;


    opacity:0; /* тут нужно прописывать то же значение, что будет в первом кадре анимации*/
    animation-name: ${opacityShow};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;


    @media (max-width: 1681px) {
      width: 700px;
    }
    @media (max-width: 1441px) {
      width: 700px;
    }
    @media (max-width: 1281px) {
      width: 400px;
    }
    @media (max-width: 1025px) {
      width: 350px;
    }
}

.TextH1But {
    opacity:0; /* тут нужно прописывать то же значение, что будет в первом кадре анимации*/
    animation-name: ${opacityShow};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
}
/* .Three {
  width: 100%;
  margin-bottom: 102px;
  margin-top: 50px;
  @media (max-width: 1681px) {
      margin-bottom: 102px;
      margin-top: 50px;    
    }
    @media (max-width: 1441px) {
      margin-bottom: 70px;
      margin-top: 45px;  
    }
    @media (max-width: 1281px) {
      margin-bottom: 70px;
      margin-top: 45px;  
    }
    @media (max-width: 1025px) {
      margin-bottom: 110px;
      margin-top: 55px;  
    }

    img {
      opacity: 0.3;
    }
} */


@media (max-width: 768px) {
  display:none;
      .gridConteiner {
        grid-template-columns: 1fr;
      }
    }
`;

export const StyledHomeMobil = styled.div`
display:none;
@media (max-width: 768px) {
  display: block;
  .Vr {
    position: relative;
    z-index:1;
    img {
    margin: 30px auto;
    margin-top: 60px;
    @media (max-width: 510px) {
      width: 68px;
      height: 68px;
    }
    }
  }
  .TextMob {
    position: relative;
    z-index:1;
    h1 {
      font-size: 56px;
      line-height: 99.3%;
      text-align: center;
      letter-spacing: -0.02em;
      color: #E7ECF0;
      max-width: 580px;
      margin: 0 auto;
      @media (max-width: 508px) {
        font-size: 32px;
        line-height: 99.3%;
        text-align: center;
        letter-spacing: -0.02em;
        color: #E7ECF0;
      max-width: 335px;
      margin: 0 auto;
      }
    }
  }
  .ImgFon {
    img {
    position: absolute;
    left: 0;
    width: 100vw;
    top: 0;
    object-fit: cover;
    height: 100vh;
    }
  }
}
`;

export const Soc = styled.div`
display: flex;
a {
margin-right: 20px;
text-decoration: none;
 p {
     text-transform: inherit;
 }
}
`;


export const Cookie = styled.div `

> div > div {
  margin: auto 0;
    :nth-child(1) {
      padding-top: 6px;
    @media (max-width: 1681px) {
      padding-top: 6px;
    }
    @media (max-width: 1441px) {
      padding-top: 6px;
    }
    @media (max-width: 1281px) {
      padding-top: 6px;
    }
    @media (max-width: 1025px) {
      padding-top: 6px;
    }
    }
}

button {
  transition: 0.3s;
font-weight: 500;
font-size: 10px;
line-height: 13px;
    background: #fff0;
    color: #fff;
    border: none;
    position: relative;
    
    font-family:  ${({ theme }) => theme.fontOb400};
    :before {
      content:"";
      background: url(${ok});
    width: 16px;
    height: 16px;
    right: -14px;
    top: -3px;
    background-size: contain;
    position: absolute;
    }
    &:hover {
      transition: 0.3s;
      color: #79FF4A;
      
    }
}
h2 {
  color: #989B9E;
  text-transform: none;
  font-size: 9px;
}
`;

