import React, {useState} from "react";
import {TextTitileTwoBlok, HomeImg, TextBut, DivBlok} from "./Screen2Txt.styled";
import {useSelector} from "react-redux";

const Screen2Txt = ({textsTitile, imgFon, total}) => {

    const [textTitile, setTextTitile] = useState(textsTitile);

    return (
        <>
        <div className="conteiner">
        <DivBlok>
            <TextTitileTwoBlok>
                {textTitile}
            </TextTitileTwoBlok>
            <div className="gridConteinerCases">
                <div>

                </div>
            <TextBut>
                {total}
            </TextBut>
            </div>

        </DivBlok>
        </div>
        </>
    )
};

export default Screen2Txt;
