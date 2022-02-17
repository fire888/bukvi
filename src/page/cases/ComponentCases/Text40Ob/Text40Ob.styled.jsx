import styled from "styled-components";

export const TextTitile = styled.h6 `
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
    display: table-cell;
    vertical-align: middle;
}
`;
