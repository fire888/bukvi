import React, {useState, useRef } from 'react';
import {StyledHeader} from './header.styled';
import  Burger from './burger'
import Menu from './menu'
import SoundCom from './Sound'
import LangCom from './Lang'
import play from '../../assets/img/play.svg'
import logo from '../../assets/img/Logo.svg'
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux";
import { useOnClickOutside } from '../../hooks';


const Header = () => {
    
    const Xd = useSelector(store => store.MousX.x)
    const Yd = useSelector(store => store.MousX.y)

    const activ = {

        width: "510px",
        margin: "auto",
        height: "75px",
        paddingTop: "18px",
    textAlign: "center",
    lineHeight: "13px",
    textTransform: "uppercase",
    position: "relative",
    zIndex: "9999",
    }
    const activA = {
        textDecoration: "none",
    }

    const w100mask = {
        // clipPath: "circle(6% at "+parseInt(Xd)+"px "+parseInt(Yd)+"px)",
        WebkitMaskImage: "radial-gradient(ellipse 300px 300px at " + parseInt(Xd) + "px " + parseInt(Yd) +  "px, black 0%, transparent 100%)",
        position: "absolute",
        left: "0px",
        width: "100vw",
        zIndex: 99,
    }



    return (
        <>
        <div className="conteiner">
        <StyledHeader > 
            <NavLink to="/">
            <img className="logo" src={logo}/>
            </NavLink>
            <div style={w100mask} >
            <div className="categoCurs" style={activ}>
                <NavLink style={activA} to="/Cases">
                    <div className="categoryHome">
                    <div style={{position:"absolute"}}>
                        <div style={{left: "35px", position: "relative"}}><h2>motion · PACKAGING · </h2></div>
                        <div style={{left: "41px", position: "relative"}}><h2>apps · landing page · </h2></div>
                        <div style={{left: "45px", position: "relative"}}><h2>banners · websupport · </h2></div>
                    </div>
                    <div style={{position:"absolute", right: "0"}}>
                        <div style={{right: "28px", position: "relative"}}><h2> · advertising · Naming</h2></div>
                        <div style={{right: "41px", position: "relative"}}><h2> · GUIDELINES · PROMO</h2></div>
                        <div style={{right: "38px", position: "relative"}}><h2> · illustration · keyvisual</h2></div>
                    </div>
                    <div style={{position: "relative", bottom: "-39px",}}>
                        <div style={{}}><h2>identity · 3d visuals · print design · DIGITAL producing</h2></div>
                    </div>
                    </div>
                </NavLink>
            </div>
            </div> 
            <div className="categoCurs category">
                <div>
                    <NavLink  to="/Cases">
                        <h2 className="TopTextHead">Branding · creative WEB&nbsp;DEVELOPMENT ART&nbsp;DIRECTION</h2>
                    </NavLink>
                </div>
            </div>
            <div className="play">
                <a>
                    <img src={play}/>
                    <h2>showreel</h2>
                </a>
            </div>
        </StyledHeader>
        </div>
            <LangCom/>
            <SoundCom/>
            </>
    )
}
export default Header;