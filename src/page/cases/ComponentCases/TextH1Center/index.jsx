import React, {useState} from "react";
import {TextTitile} from "./TextH1.styled";


const TextH1Center = ({textsTitile, maxWidth}) => {

  const [textTitile, setTextTitile] = useState(textsTitile);

  return (
    <TextTitile style={{maxWidth: maxWidth}}>
      {textTitile}
    </TextTitile>
  )
};

export default TextH1Center;
