import React, {useState} from "react";
import {DeviceImgRow} from "./Img4Row.styled";

const Img3Row= (
    {img1, img2, img3}
) => {

    const [img1Titile, setImg1Titile] = useState(img1);
    const [img2Titile, setImg2Titile] = useState(img2);
    const [img3Titile, setImg3Titile] = useState(img3);
    return (
        <DeviceImgRow>
            <img src={img1Titile}/>
            <img src={img2Titile}/>
            <img src={img3Titile}/>
        </DeviceImgRow>
    )
};

export default Img3Row;
