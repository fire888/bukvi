import { createGlobalStyle, keyframes } from 'styled-components';


export const animationDuration = '1s'; //время общей анимации появления всего и вся

export const opacityShow = keyframes `
    0% {opacity:0; filter: blur(10px);}
    10% {opacity:0; filter: blur(10px);}
    70% {opacity:1; filter: blur(0);}
    100% {opacity:1; filter: blur(0);}
`; // первый и последний кадры прописывать обязательно - иначе не сработает animation-fill-mode

export const opacityShowDelayed = keyframes `
    0% {opacity:0; filter: blur(10px);}
    40% {opacity:0; filter: blur(10px);}
    100% {opacity:1; filter: blur(0);}
`;

export const translateShowTop = keyframes ` 
    0% {transform: translateY(-100%);}
    10% {transform: translateY(-100%);}
    50% {transform: translateY(0);}
    100% {transform: translateY(0);}
`; //выпадение сверху

export const translateShowBottom = keyframes `
    0% {transform: translateY(200%);}
    10% {transform: translateY(200%);}
    50% {transform: translateY(0);}
    100% {transform: translateY(0);}
`; //выпадение снизу

