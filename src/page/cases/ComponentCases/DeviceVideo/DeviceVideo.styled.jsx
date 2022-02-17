import styled from "styled-components";

export const DeviceImg = styled.div `
margin: auto;

video {
    border-radius: 30px;
    max-height: 720px;

    @media (max-width: 1681px) {
        max-height: 720px;
    }
    @media (max-width: 1441px) {
        max-height: 520px;
    } 
    @media (max-width: 1281px) {
        max-height: 420px;
    }
    @media (max-width: 1025px) {
        max-height: 420px;
    }
}
`; 

export const DeviceImgCastomChb = styled.div `
margin: auto;

video {
    border-radius: 30px;
    max-height: 720px;
    max-width: 1150px;
    border-radius:29px;

    @media (max-width: 1681px) {
        max-height: 720px;
    max-width: 1150px;
    border-radius:29px;
    } 

    @media (max-width: 1441px) {
        max-height: 620px;
    max-width: 1100px;
    border-radius: 30px;
    } 

    @media (max-width: 1281px) {
        max-height: 420px;
    max-width: 750px;
    border-radius: 23px;
    } 

    @media (max-width: 1025px) {
        max-height: 420px;
    max-width: 1150px;
    border-radius:29px;
    } 
}
`; 


export const DeviceImgCastomButChb = styled.div `
margin: auto;
text-align: center;
    position: absolute;
    bottom: -10px;
    width: 100%; 
    left: 0;
video {
    max-height: 100%;
    max-width: 100%;
    border-radius:0px;

    @media (max-width: 1681px) {
        max-height: 100%;
    max-width: 100%;
    border-radius:0px;
    } 

    @media (max-width: 1441px) {
        max-height: 100%;
    max-width: 100%;
    border-radius:0px;
    } 

    @media (max-width: 1281px) {
        max-height: 100%;
    max-width: 100%;
    border-radius:0px;
    } 

    @media (max-width: 1025px) {
        max-height: 100%;
    max-width: 100%;
    border-radius:0px;
    } 
}
`; 



// export const ChbDiv = styled.div `
//     text-align: center;
//     position: absolute;
//     bottom: 6px;
//     width: 100%;
//     left: 0;
//     video {
//         position: relative;
//         bottom: -10px;
//         max-height: 720px;
//     @media (max-width: 1681px) {
//         max-height: 730px;
//     }
//     @media (max-width: 1441px) {
//         max-height: 730px;
//     } 
//     @media (max-width: 1281px) {
//         max-height: 730px;
//     }
//     @media (max-width: 1025px) {
//         max-height: 730px;
//     }
//     }
// `; 