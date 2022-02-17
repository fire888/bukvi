import styled from "styled-components";

export const TextTitile = styled.div `

.slick-prev:before {
    content: ' ';
}

.slick-next:before {
    content: ' ';
}

`;

export const BlockSliderImg = styled.div `
img {
margin: auto;
position: relative;

max-height: 720px;
    @media (max-width: 1681px) {
        height: 620px;
    }
    @media (max-width: 1441px) {
        height: 600px;
    }
    @media (max-width: 1281px) {
        height: 500px;
    }
    @media (max-width: 1025px) {
        height: 500px;
    }
}


`;

export const DivVideo = styled.div `
width: 100%;
    margin: auto;
    text-align: center;
    
video {
    border-radius: 30px;
    max-height: 720px;
    @media (max-width: 1681px) {
        height: 620px;
    }
    @media (max-width: 1441px) {
        height: 600px;
    }
    @media (max-width: 1281px) {
        height: 500px;
    }
    @media (max-width: 1025px) {
        height: 500px;
    }
}
`;