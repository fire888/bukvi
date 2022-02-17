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

export const TextPCenter = styled.div `
margin: auto;
/* max-width:341px; */
max-width: 960px;
text-align:center;
margin: auto;
    @media (max-width: 1681px) {
        max-width: 960px;
    }
    @media (max-width: 1441px) {
        max-width: 760px;
    }
    @media (max-width: 1281px) {
        max-width: 760px;
    }
    @media (max-width: 1025px) {
        max-width: 650px;
    }
    h6 {
        margin: 22px 0;
    }
`;

export const TextImgComment = styled.div `
img {
    margin: auto;
}
/* max-width:341px; */
`;