import React, {useState} from "react";
import {TextTitile, ButtomImg, ButtomImg2, DivBut} from "./ImgTextButtonImg.styled.jsx";


const ImgTextButtonImg = ({maxWidthImg,  imgFon, imgFon2,maxWidthImg2}) => {


    return (
        <>
        <div style={{margin: "auto",}}>
            <ButtomImg style={{maxWidth: maxWidthImg, margin: "auto",}} src={imgFon} />
            <DivBut>
                <ButtomImg2 style={{maxWidth: maxWidthImg2, margin: "auto",}} src={imgFon2} />
            </DivBut>
        </div>
        </>
    )
};

export default ImgTextButtonImg;
