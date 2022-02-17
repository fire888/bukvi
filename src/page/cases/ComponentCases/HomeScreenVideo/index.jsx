import React, {useState} from "react";
import {TextTitile, HomeImg,HomeDiv, TextBut} from "./HomeScreen.styled";
import {useSelector} from "react-redux";

const HomeScreenVideo = ({videoFon, textsTitile, total}) => {

    const Xd = useSelector(store => store.MousX.x)
    const Yd = useSelector(store => store.MousX.y)
    const [textTitile, setTextTitile] = useState(textsTitile);
    const w100mask = {
        WebkitMaskImage: "radial-gradient(ellipse 900px 900px at " + parseInt(Xd) + "px " + parseInt(Yd) +  "px, black 0%, transparent 100%)",
        position: "absolute",
        left: "0px",
        top: '0',
        width: "100vw",
        height: "100vh",
        zIndex: 99,
    }


    return (
        <>
            {/* <HomeImg style={w100mask} src={imgFon} /> */}
            <HomeDiv style={w100mask}>
                <video data-autoplay muted loop  height="100%">
                    <source src={videoFon} type="video/mp4"/>
                </video>
            </HomeDiv>

            <TextTitile>
                {textTitile}
            </TextTitile>

            <TextBut>
                <h2>Сделали: </h2>
                <h2>{total}</h2>
            </TextBut>
        </>
    )
};

export default HomeScreenVideo;
