import React, {useState} from "react";
import {TextTitileNext} from "./NextCase.styled";


const NextCase = ({textsTitile}) => {

    const [textTitile, setTextTitile] = useState(textsTitile);

    return (
        <TextTitileNext>
            {textTitile}
        </TextTitileNext>
    )
};

export default NextCase;
