import React from 'react';
import {Lang} from './lang.styled';
import Toch from '../../../assets/img/Toch.svg'

const LangCom = () => {
    return (
    <Lang>
                <div>
                    <a className="active">рус</a>
                    <img src={Toch}/>
                    <a>eng</a>
                </div>
    </Lang>
    )
}

export default LangCom;
