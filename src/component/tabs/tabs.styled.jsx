import styled from "styled-components";
import { animationDuration, opacityShow, opacityShowDelayed, translateShowTop, translateShowBottom } from "../../animation";

export const SliderCases = styled.div `
margin: 0 0px;
margin-top: 0px;
overflow-y: hidden;
`;

export const Tabs = styled.div`
display: flex;
flex-direction: column;
`;


export const Tab = styled.div`
cursor: pointer;
transition: background-color 0.5s ease-in-out;

h2 {
  color: ${props => (props.active ? "#fff" : "#989B9E")};
  cursor: pointer;
}

h3 {
  display: ${props => (props.active ? "block" : "none")};
  max-width: 160px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  font-family: ObjectSansMedium,sans-serif;
  color: #E7ECF0;
  margin: 7px 0; 
}
`;



export const NameCases = styled.h1 `

    opacity:0; /* тут нужно прописывать то же значение, что будет в первом кадре анимации*/
    animation-name: ${opacityShow};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;

transition: 0.3s;
text-indent: 90px;
color: #E7ECF0;
font-size: 60px;
line-height: 99.3%;
    @media (max-width: 1681px) {
      width: 100%;
      font-size: 52px;
      line-height: 99.3%;
    }
    @media (max-width: 1441px) {
      width: 100%;
      font-size: 41px;
      line-height: 99.3%;
    }
    @media (max-width: 1281px) {
      width: 100%;
      font-size: 36px;
      line-height: 99.3%;
    }
    @media (max-width: 1025px) {
      width: 100%;
      font-size: 22px;
      line-height: 99.3%;
    }

&:hover {
  text-shadow: 0px 0px 15px #FFFFFF;
  color: #fff;
  transition: 0.3s;
}

`;

export const ContentBlockImg = styled.div `
padding-left: 70px;

img {
  transition: 1s;
}

.imgCasesPK {
  position: absolute;
    right: 60px;
    width: 800px;
    height: 100%;
    top: 0;
    display: table;
    @media (max-width: 1681px) {
      position: absolute;
      right: 60px;
      width: 715px;
    }
    @media (max-width: 1441px) {
      position: absolute;
      right: 60px;
      width: 600px;
    }
    @media (max-width: 1281px) {
      position: absolute;
      right: 60px;
      width: 430px;
    }
    @media (max-width: 1025px) {
      position: absolute;
      right: 60px;
      width: 300px;
    }
    div {
      display: table-cell;
    vertical-align: middle;
    margin: auto;
    }
}
.imgCasesPad {
  position: absolute;
    right: 80px;
    width: 800px;
    height: 100%;
    top: 0;
    display: table;
    @media (max-width: 1681px) {
      position: absolute;
      right: 60px;
      width: 715px;
    }
    @media (max-width: 1441px) {
      position: absolute;
      right: 80px;
      width: 600px;
    }
    @media (max-width: 1281px) {
      position: absolute;
      right: 80px;
      width: 430px;
    }
    @media (max-width: 1025px) {
      position: absolute;
      right: 80px;
      width: 300px;
    }
    div {
      display: table-cell;
    vertical-align: middle;
    margin: auto;
    }
}

.imgCasesBasik  {
    position: absolute;
    right: 0px;
    width: 850px;
    height: 100%;
    top: 0;
    display: table;
    @media (max-width: 1681px) {
      position: absolute;
    right: 0px;
    width: 700px;
    }
    @media (max-width: 1441px) {
      position: absolute;
    right: 0px;
    width: 600px;
    }
    @media (max-width: 1281px) {
      position: absolute;
    right: 0px;
    width: 500px;
    }
    @media (max-width: 1025px) {
      position: absolute;
    right: 0px;
    width: 400px;
    }
    div {
      display: table-cell;
    vertical-align: middle;
    margin: auto;
    }
    img {
      position:absolute;
      bottom: 0;
    }
}

.imgCasesHihaco  {
    position: absolute;
    right: -50px;
    width: 950px;
    height: 100%;
    top: 0;
    display: table;
    @media (max-width: 1681px) {
      position: absolute;
    right: -50px;
    width: 800px;
    }
    @media (max-width: 1441px) {
      position: absolute;
    right: -40px;
    width: 700px;
    }
    @media (max-width: 1281px) {
      position: absolute;
    right: -30px;
    width: 600px;
    }
    @media (max-width: 1025px) {
      position: absolute;
    right: 0px;
    width: 400px;
    }
    div {
      display: table-cell;
    vertical-align: middle;
    margin: auto;
    }
}

.imgCasesChb  {
    position: absolute;
    right: -80px;
    top: -150px;
    width: 1050px;
    height: 100%;
    
    display: table;
    @media (max-width: 1681px) {
      position: absolute;
      top: -100px;
      right: -90px;
    width: 900px;
    }
    @media (max-width: 1441px) {
      position: absolute;
      top: -70px;
      right: -60px;
    width: 730px;
    }
    @media (max-width: 1281px) {
      position: absolute;
    right: -30px;
    width: 600px;
    }
    @media (max-width: 1025px) {
      position: absolute;
    right: 0px;
    width: 400px;
    }
    div {
      display: table-cell;
    vertical-align: middle;
    margin: auto;
    }
}

.imgCasesPadPower {
  position: absolute;
    right: -140px;
    width: 1000px;
    height: 100%;
    top: 0;
    display: table;
    @media (max-width: 1681px) {
      position: absolute;
    right: -106px;
    width: 887px;
    }
    @media (max-width: 1441px) {
      position: absolute;
    right: -105px;
    width: 787px;
    }
    @media (max-width: 1281px) {
      position: absolute;
    right: -225px;
    width: 887px;
    }
    @media (max-width: 1025px) {
      position: absolute;
    right: -166px;
    width: 887px;
    }
    div {
      display: table-cell;
    vertical-align: middle;
    margin: auto;
    }
}

`;

export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")};
  position: absolute;
top: 0;
padding-top: 0px;


`;

export const ContentBlockCases = styled.div`
  display: grid;
  gap: 70px;
  padding-top: 80px;
    transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
    transition-duration: 1s;
    transition: 1s;
    overflow: auto;
height: 100vh;
@media (max-width: 1681px) {
  gap: 70px;
    }
    @media (max-width: 1441px) {
      gap: 60px;
    }
    @media (max-width: 1281px) {
      gap: 50px;
    }
    @media (max-width: 1025px) {
      gap: 40px;
    }

  a {
  text-decoration: none;
  }
  a:nth-child(1) {
    padding-top: 14px;
  }
  a:nth-child(9) {
  padding-bottom: 48px;
}
span {

        opacity:0;
        animation-name: ${opacityShowDelayed};
        animation-duration: ${animationDuration};
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;

    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    margin-right: 30px;
    font-family: ObjectSansMedium,sans-serif;
    letter-spacing: -0.02em;
    position: absolute;
    left: 0;
    top: 18px;
    color: #E7ECF0;
    @media (max-width: 1681px) {
      top: 14px;
    line-height: 11px;
    font-size: 10.5px;
    }
    @media (max-width: 1441px) {
      top: 9px;
    line-height: 8px;
    font-size: 8px;
    }
    @media (max-width: 1281px) {
      top: 7px;
    line-height: 7px;
    font-size: 7px;
    }
    @media (max-width: 1025px) {
      top: 0px;
    line-height: 6px;
    font-size: 6px;
    }
}

.year {
    position: static;
    line-height: 17px;
    @media (max-width: 1681px) {
    line-height: 15px;
    }
    @media (max-width: 1441px) {
    line-height: 13px;
    }
    @media (max-width: 1281px) {
    line-height: 13px;
    }
    @media (max-width: 1025px) {
    line-height: 11px;
    }
}

&:hover span {
  text-shadow: none;
  color: #fff;
  transition: 0.3s;
}

div {
position: relative;
}
`;

export const DivCategoryLeft = styled.div `

    opacity:0; /* тут нужно прописывать то же значение, что будет в первом кадре анимации*/
    animation-name: ${opacityShow};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;


width: 183px;
@media (max-width: 1681px) {
      width: 183px;
    }
    @media (max-width: 1441px) {
      width: 130px;
    }
    @media (max-width: 1281px) {
      width: 120px;
    }
    @media (max-width: 1025px) {
      width: 110px;
    }
p{
font-weight: 500;
font-size: 17px;
line-height: 20px;
letter-spacing: -0.02em;
text-transform: uppercase;
color: #989B9E;
font-family:  ${({ theme }) => theme.fontOb600};
margin-bottom: 4px;
:nth-child(1) {
  padding-top: 18px;
  @media (max-width: 1681px) {
      padding-top: 13px;
    }
    @media (max-width: 1441px) {
      padding-top: 10px;
    }
    @media (max-width: 1281px) {
      padding-top: 9px;
    }
    @media (max-width: 1025px) {
      padding-top: 2px;
    }
}

    @media (max-width: 1681px) {
      font-size: 14px;
    margin-bottom: 4px;
    line-height: 100%;
    }
    @media (max-width: 1441px) {
      font-size: 13px;
    margin-bottom: 4px;
    line-height: 100%;
    }
    @media (max-width: 1281px) {
      font-size: 10px;
    margin-bottom: 4px;
    line-height: 100%;
    }
    @media (max-width: 1025px) {
      font-size: 7px;
    margin-bottom: 4px;
    line-height: 100%;
    }
}
`

export const LinkGrid = styled.div `

`

export const DivLineBag = styled.div `
    position: absolute;
    width: 100%;
    
background: linear-gradient(180deg, #151617 0%, rgba(0, 0, 0, 0) 100%);
    height: 151px;
    z-index: 99;
    top: -1px;
    pointer-events: none;
`

export const DivLineBagBut = styled.div `
    position: absolute;
    width: 100%;
    background: linear-gradient(0deg, #151617 0%, rgba(21, 22, 23, 0.986379) 5.46%, rgba(21, 22, 23, 0.94989) 11.3%, rgba(21, 22, 23, 0.894061) 17.48%, rgba(21, 22, 23, 0.82242) 23.94%, rgba(21, 22, 23, 0.738496) 30.64%, rgba(21, 22, 23, 0.645818) 37.53%, rgba(21, 22, 23, 0.547915) 44.55%, rgba(21, 22, 23, 0.448314) 51.67%, rgba(21, 22, 23, 0.350545) 58.84%, rgba(21, 22, 23, 0.258137) 65.99%, rgba(21, 22, 23, 0.174617) 73.1%, rgba(21, 22, 23, 0.103515) 80.1%, rgba(21, 22, 23, 0.0483591) 86.95%, rgba(21, 22, 23, 0.0126779) 93.6%, rgba(21, 22, 23, 0) 100%);
        z-index: 99;
    height: 151px;
    bottom: -1px;
    pointer-events: none;
`