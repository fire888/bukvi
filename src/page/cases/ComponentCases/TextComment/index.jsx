import React from "react";
import {TextTitile,TextPCenter, TextImgComment} from "./ImgTextComment.styled.jsx";
import com from "../../../../assets/img/Chb/com.svg"

const  TextComment = ({textsTitileBut, textsTitile}) => {


    return (
        <>
        <div className="conteiner">
            <TextImgComment>
                <img src={com}/>
                <TextPCenter>
                    <h6>{textsTitile}</h6>
                </TextPCenter>
            </TextImgComment>
        </div>
            <TextTitile>
                <p>{textsTitileBut}</p>
            </TextTitile>

        </>
    )
};

export default TextComment;
