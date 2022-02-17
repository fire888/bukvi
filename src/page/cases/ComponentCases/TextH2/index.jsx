import React, {useState} from "react";
import {TextTitile} from "./TextH1.styled";


const TextH1 = ({textsTitile}) => {

  const [textTitile, setTextTitile] = useState(textsTitile);

  return (
    <TextTitile>
      {textTitile}
    </TextTitile>
  )
};

export default TextH1;
