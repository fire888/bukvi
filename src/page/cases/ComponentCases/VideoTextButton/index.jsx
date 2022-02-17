import React, {useState} from "react";
import {TextTitile, ButtomImg, DivVideo} from "./VideoTextButton.styled.jsx";


const VideoTextButton = ({textsTitile,maxWidthImg, maxWidthImgTitle,  videoFon}) => {

    const [textTitile, setTextTitile] = useState(textsTitile);

    return (
        <>
        <DivVideo>
                    <video   data-autoplay muted loop  height="100%">
                        <source src={videoFon} type="video/mp4"/>
                    </video>
        </DivVideo>
            <TextTitile>
                <p style={{maxWidth: maxWidthImgTitle}}>{textTitile}</p>
            </TextTitile>

        </>
    )
};

export default VideoTextButton;
