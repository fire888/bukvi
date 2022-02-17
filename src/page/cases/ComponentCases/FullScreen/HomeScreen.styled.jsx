import styled from "styled-components";

export const TextTitile = styled.h1 `
margin: 200px auto;
font-size: 100px;
line-height: 96%;
font-family: "SimeizWebBook";
text-align: center;
letter-spacing: -0.02em;
max-width: 1440px;
margin:auto;
    @media (max-width: 1681px) {
        font-size: 90px;
        max-width: 1240px;
        margin:auto;
    }
    @media (max-width: 1441px) {
        font-size: 90px;
        max-width: ${({ theme }) => theme.conteiner1440};
        margin:auto;
    }
    @media (max-width: 1281px) {
      max-width: ${({ theme }) => theme.conteiner1280};
      margin:auto;
      font-size: 80px;
    }
    @media (max-width: 1025px) {
        font-size: 70px;
        max-width: ${({ theme }) => theme.conteiner1024};

    }
`;

export const HomeImg = styled.img `
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    object-fit: cover;
    z-index: -1;
`;

export const TextBut = styled.div `
    width: 100%;
    position: absolute;
    bottom: 40px;
h2 {
font-family:  ${({ theme }) => theme.fontOb600};
font-weight: 500;
font-size: 14px;
line-height: 13px;
text-align: center;
letter-spacing: -0.02em;
text-transform: uppercase;
color: #989B9E;
width: 200px;
    margin: auto;
:nth-child(1) {
text-align: center;
letter-spacing: -0.02em;
text-transform: uppercase;
margin-bottom: 1px;
color: #E7ECF0;
}
}
`;
