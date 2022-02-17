import React, {useState} from "react";
import {TextTitile, ButtomImg} from "./ImgTextButton.styled.jsx";


const ImgTextButton = ({textsTitile,maxWidthImg, maxWidthImgTitle,  imgFon}) => {

    const [textTitile, setTextTitile] = useState(textsTitile);

    return (
        <>
        <div style={{maxWidth: maxWidthImg, margin: "auto",}}>
            <ButtomImg  src={imgFon} />
        </div>
            <TextTitile>
                <p style={{maxWidth: maxWidthImgTitle}}>{textTitile}</p>
            </TextTitile>

        </>
    )
};

export default ImgTextButton;
