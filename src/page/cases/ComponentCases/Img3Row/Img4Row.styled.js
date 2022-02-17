import styled from "styled-components";

export const DeviceImgRow = styled.div `
max-width: 1280px;
margin: auto;
display: flex;
img {
max-width: 388px;
margin: auto;
    @media (max-width: 1681px) {
        max-width: 350px;
    }
    @media (max-width: 1441px) {
        max-width: 330px;
    } 
    @media (max-width: 1281px) {
        max-width: 300px;
    }
    @media (max-width: 1025px) {
        max-width: 390px;
    }
}
`;