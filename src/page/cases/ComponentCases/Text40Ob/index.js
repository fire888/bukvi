import React, {useState} from "react";
import {TextTitile} from "./Text40Ob.styled";


const Text40Ob = ({textsTitile}) => {

    const [textTitile, setTextTitile] = useState(textsTitile);

    return (
        <TextTitile>
            {textTitile}
        </TextTitile>
    )
};

export default Text40Ob;
