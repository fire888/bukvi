import React, {useState} from "react";
import {DeviceImgRow} from "./Img4Row.styled";

const Img4Row= (
    {img1, img2, img3, img4}
) => {

    const [img1Titile, setImg1Titile] = useState(img1);
    const [img2Titile, setImg2Titile] = useState(img2);
    const [img3Titile, setImg3Titile] = useState(img3);
    const [img4Titile, setImg4Titile] = useState(img4);
    return (
        <DeviceImgRow>
            <img src={img1Titile}/>
            <img src={img2Titile}/>
            <img src={img3Titile}/>
            <img src={img4Titile}/>
        </DeviceImgRow>
    )
};

export default Img4Row;
