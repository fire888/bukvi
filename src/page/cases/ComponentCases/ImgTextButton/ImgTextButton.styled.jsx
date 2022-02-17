import styled from "styled-components";

export const TextTitile = styled.div `
 width:100%;
  position: absolute;
   bottom: 40px;
  


p {
   
    width: 528px;
    text-transform: initial;
    text-align: center;
text-align:center;
margin: auto;
    @media (max-width: 1681px) {
        width: 470px;
    }
    @media (max-width: 1441px) {
        width: 470px;
    } 
    @media (max-width: 1281px) {
        width: 470px;
    }
    @media (max-width: 1025px) {
        width: 470px;
    }
}

`;

export const ButtomImg = styled.img `
margin: auto;
/* max-width:341px; */

    @media (max-width: 1681px) {
        transform: scale(0.9);
    }
    @media (max-width: 1441px) {
        transform: scale(0.8);
    } 
    @media (max-width: 1281px) {
        transform: scale(0.7);
    }
    @media (max-width: 1025px) {
        transform: scale(0.6);
    }

`;
