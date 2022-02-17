import React, {useState} from "react";
import {TextTitile, HomeImg, TextBut} from "./HomeScreen.styled";
import {useSelector} from "react-redux";

const FullScreen = ({ imgFon}) => {

    const w100mask = {
        position: "absolute",
        left: "0px",
        top: '0',
        width: "100vw",
        height: "100vh",
        zIndex: 99,
    }

    return (
        <>
            <HomeImg style={w100mask} src={imgFon} />
        </>
    )
};

export default FullScreen;
