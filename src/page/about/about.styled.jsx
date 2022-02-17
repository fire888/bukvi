import styled, { keyframes } from 'styled-components';

let animationDuration = '1s'; //время общей анимации появления всего и вся


const opacityShow = keyframes `
    0% {opacity:0; filter: blur(10px);}
    10% {opacity:0; filter: blur(10px);}
    70% {opacity:1; filter: blur(0);}
    100% {opacity:1; filter: blur(0);}
`; // первый и последний кадры прописывать обязательно - иначе не сработает animation-fill-mode

const opacityShowDelayed = keyframes `
    0% {opacity:0; filter: blur(10px);}
    40% {opacity:0; filter: blur(10px);}
    100% {opacity:1; filter: blur(0);}
`;

const translateShowTop = keyframes ` 
    0% {transform: translateY(-100%);}
    10% {transform: translateY(-100%);}
    50% {transform: translateY(0);}
    100% {transform: translateY(0);}
`; //выпадение сверху

const translateShowBottom = keyframes `
    0% {transform: translateY(100%);}
    10% {transform: translateY(100%);}
    50% {transform: translateY(0);}
    100% {transform: translateY(0);}
`; //выпадение снизу

export const TopBlockLeft = styled.h5 `
    margin: 0;
    opacity:0; /* тут нужно прописывать то же значение, что будет в первом кадре анимации*/

    animation-name: ${opacityShow};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;

    span {
        opacity:0;
        animation-name: ${opacityShowDelayed};
        animation-duration: ${animationDuration};
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;

        font-size: ${({ theme }) => theme.size16};
        color:  ${({ theme }) => theme.colorText};
        letter-spacing: -0.02em;
        font-family:  ${({ theme }) => theme.fontOb400};
        font-weight: 300;
        text-transform: initial;
        line-height: 17px;
        margin: 0 25px;
        position: relative;
        z-index:0;
        top: -10px;
        @media (max-width: 1681px) {
        font-size: 15px;
        margin: 0 23px;
        position: relative;
        top: -7.5px;
        }
        @media (max-width: 1441px) {
        font-size: 14px;
        margin: 0 21px;
        position: relative;
        top: -7px;
        }
        @media (max-width: 1281px) {
        font-size: 13px;
        margin: 0 20px;
        position: relative;
        top: -5.5px;
        }
        @media (max-width: 1025px) {
        font-size: 12px;
        margin: 0 18px;
        position: relative;
        top: -5.5px;
        }
    }
`;


export const DivOneBlockAbout = styled.div `

`;

export const DivAbout = styled.div `
margin-top: 121px;

.about-content {
    display: grid;
    gap: 120px;
}
`;

export const ImgAbout = styled.div`
img {
width: 310px;
margin-top: 101px;
margin:auto;
    @media (max-width: 1681px) {
        width: 280px;
    }
    @media (max-width: 1441px) { 
        width: 260px;
    }
    @media (max-width: 1281px) {
        width: 240px;
    }
    @media (max-width: 1025px) {
        width: 220px;
    }
}
margin-top: 100px;
    @media (max-width: 1681px) {
        margin-top: 80px;
    }
    @media (max-width: 1441px) {
        margin-top: 60px;
    }
    @media (max-width: 1281px) {
        margin-top: 40px;
    }
    @media (max-width: 1025px) {
        margin-top: 40px;
    }
`;

export const AboutPage = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
`;

export const AboutPageP = styled.div `
margin-top: 180px;
position: relative;
p {
text-transform: initial;
width: 360px; 
    @media (max-width: 1681px) {
        width: 315px;
    }
    @media (max-width: 1441px) {
        width: 315px;
    }
    @media (max-width: 1281px) {
        width: 315px;
    }
    @media (max-width: 1025px) {
        width: 315px;
    }
}
`;

export const Competihon = styled.div `

:nth-child(1) {
    margin-top: 190px; 
}
h5 {
    text-indent: 240px;
    position: relative;
    margin-top: 0px;
    margin-bottom: 35px;
    max-width:1080px;
    @media (max-width: 1681px) {
        text-indent: 210px;
        max-width: 1040px;
    }
    @media (max-width: 1441px) {
        text-indent: 178.04px;
        max-width: 759px;
    }
    @media (max-width: 1281px) {
        text-indent: 160.33px;
        max-width: 740px;
    }
    @media (max-width: 1025px) {
        text-indent: 119.25px;
        max-width: 759px;
    }
    span {
        text-transform: initial;
        font-size: ${({ theme }) => theme.size16};
        color:  ${({ theme }) => theme.colorText};
        letter-spacing: -0.02em;
        font-family:  ${({ theme }) => theme.fontOb400};
        font-weight: 300;
        text-transform: initial;
        line-height: 17px;
        margin: 0;
        position: absolute;
        left: 0;
        text-indent: 0px;
        top: 21px;
    @media (max-width: 1681px) {
      font-size: 15px;
      top: 16px;
    }
    @media (max-width: 1441px) {
      font-size: 14px;
      top: 10.5px;
    }
    @media (max-width: 1281px) {
      font-size: 13px;
      top: 9px;
    }
    @media (max-width: 1025px) {
      font-size: 12px;
      top: 15px;
    }
    }
}
> div {
    .stak {
        h4 {
            color: #E7ECF0;
            opacity: 0.5;
            text-transform: uppercase;
        }
    }
    .stakDesc {
        p {
            width: 428px;
            text-transform: initial;
    @media (max-width: 1681px) {
        width: 400px;
    }
    @media (max-width: 1441px) {
        width: 320px ;
    }
    @media (max-width: 1281px) {
        width: 300px ;
    }
    @media (max-width: 1025px) {
        width: 200px;
    }
        }
    }
}
`;

export const TextAboutCentr = styled.div `
height: 100vh;
display: table;
margin: auto;

h6 {
    max-width: 960px;
    display: table-cell;
    vertical-align: middle;
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
    
}
`;

// export const AboutPageP = styled.div `

// `;

// export const AboutPageP = styled.div `

// `;
