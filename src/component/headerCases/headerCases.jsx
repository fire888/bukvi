import React, {useState, useRef } from 'react';
import {StyledHeader, Num, Lang, Sound} from './headerCases.styled';
import  Burger from '../header/burger'
import Menu from '../header/menu'
import play from '../../assets/img/play.svg'
import logo from '../../assets/img/Logo.svg'
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux";
import Toch from '../../assets/img/Toch.svg'
import Nik from "../../assets/img/nik.png";
import SoundCom from '../header/Sound'
import LangCom from '../header/Lang'
import { useOnClickOutside } from '../../hooks';
import Ticker from 'react-ticker';
import {useDispatch } from 'react-redux'
import {setCasesNumBlock, setCasesNameBlock} from "../../redux/actions";



const HeaderCases = ({anchorsRIGHT, anchors}) => {


    const CasesNumBlock = useSelector(store => store.MousX.CasesNumBlock)
    const CasesNameBlock = useSelector(store => store.MousX.CasesNameBlock)
    console.log(CasesNumBlock)
    const dispatch = useDispatch()
    const reset = () => {
        dispatch(setCasesNumBlock(0))
        dispatch(setCasesNameBlock())   
    }

    return (
        <>
        <div className="conteiner">
        <StyledHeader >
            <NavLink onClick={() => reset()} to="/">
            <img className="logo" src={logo}/>
            </NavLink>
            <div className="categoCurs category">
                <div  onClick={() => reset()}>
                    <NavLink to="/Cases">
                        <h2 className="TopTextHead">{anchors[CasesNumBlock]}</h2>
                    </NavLink>
                </div>
            </div>
            <div className=" play categoCurs ">
                <div onClick={() => reset()} className="HoverWi">
                    <NavLink  to="/Cases">
                        
                        { anchorsRIGHT[CasesNumBlock] == "NEXT PROJECT" ? 
                        <Ticker offset="run-in" speed={10}  mode="chain">
                        {({ index }) => (
                            <>
                        <h2 className="TopTextHeadNext">{anchorsRIGHT[CasesNumBlock]}</h2> 
                        </>
                        )}
                        </Ticker> :
                                <h2 className="TopTextHead">{anchorsRIGHT[CasesNumBlock]}</h2> 
                        }
                    </NavLink>
                </div>
            </div>
        </StyledHeader>
        </div>
            <LangCom/>
            <SoundCom/>
            <Num>
                <span>{CasesNumBlock + 1}/{anchors.length}</span>
            </Num>
            </>
    )
}
export default HeaderCases;