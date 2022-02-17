import styled from "styled-components";

export const TextTitileTwoBlok = styled.h1 `
font-size: 100px;
line-height: 96%;
font-family: "SimeizWebBook";
text-align: left;
letter-spacing: -0.02em;
max-width: 1039px;
    @media (max-width: 1681px) {
        font-size: 90px;
    }
    @media (max-width: 1441px) {
        font-size: 90px;
    }
    @media (max-width: 1281px) {
      font-size: 80px;
    }
    @media (max-width: 1025px) {
        font-size: 70px;
    }
`;

export const TextBut = styled.p`
font-size: 24px;
line-height: 32px;
text-transform: none;
letter-spacing: -0.02em;
font-family:  ${({ theme }) => theme.fontOb400};
color: #E7ECF0;
margin-right: 90px;
    @media (max-width: 1681px) {
    font-size: 20px;
    line-height: 29px;
    }
    @media (max-width: 1441px) {
        font-size: 17px;
    line-height: 25px;
    }
    @media (max-width: 1281px) {
font-size: 24px;
line-height: 32px;
    }
    @media (max-width: 1025px) { 
font-size: 24px;
line-height: 32px;
    }
`;

export const DivBlok = styled.div `
    display: grid;
    gap: 280px;
    @media (max-width: 1681px) {
        gap: 250px;
    }
    @media (max-width: 1441px) {
        gap: 200px;
    }
    @media (max-width: 1281px) {
        gap: 320px;
    }
    @media (max-width: 1025px) { 
        gap: 320px;
    }
    .imgTwoText {
    width: 600px;
    left: 130px;
    bottom: 0;
    position: absolute;
    @media (max-width: 1681px) {
        width: 500px;
    }
    @media (max-width: 1441px) {
        width: 420px;
    }
    @media (max-width: 1281px) {
        width: 420px;
        left: 0;
        z-index: -1;
    }
    @media (max-width: 1025px) { 
        width: 420px;
        left: 0;
        z-index: -1;
    }
    }
`;
