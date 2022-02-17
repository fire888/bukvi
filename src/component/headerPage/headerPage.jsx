import React, {useState, useRef } from 'react';
import {StyledHeader, Lang, Sound} from './headerPage.styled';
import  Burger from '../header/burger'
import Menu from '../header/menu'
import play from '../../assets/img/play.svg'
import logo from '../../assets/img/Logo.svg'
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux";
import Toch from '../../assets/img/Toch.svg'
import Nik from "../../assets/img/nik.png";
import { useOnClickOutside } from '../../hooks';
import SoundCom from '../header/Sound'
import LangCom from '../header/Lang'

const HeaderPage = () => {
    // const [open, setOpen] = useState(false);
    // const node = useRef(); 
    // useOnClickOutside(node, () => setOpen(false));
    // <div className="burger" ref={node}>
    //     <Burger  open={open} setOpen={setOpen}  />
    //     <Menu  open={open} setOpen={setOpen}  />
    // </div>
    
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

    // const node = useRef(); 
    // useOnClickOutside(node, () => setOpen(false));

    return (
        <>
        <div className="conteiner">
        <StyledHeader >
            {/* <div className="burger" ref={node}>
                <Burger  open={open} setOpen={setOpen}  />
                <Menu  open={open} setOpen={setOpen}  />
            </div> */}
            <NavLink to="/">
            <img className="logo" src={logo}/>
            </NavLink>
            <div className="categoCurs category">
                <div>
                    <NavLink  to="/Cases">

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
export default HeaderPage;