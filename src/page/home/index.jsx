import React from "react";
import { StyledHome, StyledHomeMobil } from "./home.styled";
import styled, { keyframes } from 'styled-components';
import Footer from "../../component/footer";
import heroThree from "../../assets/img/heroThree.png"
import noix from "../../assets/img/noise.png"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "../../component/header/header.styled";
import { Letters3D } from "../../component/Letters3D";
import Header from "../../component/header";
import { useHistory } from "react-router-dom";
import VR  from "../../assets/img/Vr.svg"
import mobil from "../../assets/img/mobil.jpg"
import file3D from "../../assets/img/file.usdz"

const Maski = () => {
  const Xd = useSelector(store => store.MousX.x)
  const Yd = useSelector(store => store.MousX.y)
  const activ = {

    width: "400px",
    margin: "auto",
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
    clipPath: "circle(5% at " + parseInt(Xd) + "px " + parseInt(Yd) + "px)",
    position: "absolute",
    left: "0px",
    top: "0px",
    width: "100vw",
    height: "100vh",
    zIndex: 99,
  }
  return (
    <div style={w100mask}>
      <div style={activ}>
        <NavLink style={activA} to="/Cases">

        </NavLink>
      </div>
    </div>
  )
}


const Home = () => {
  let history = useHistory();
  const redikCases = () => {
    history.push("/Cases");
  }
  return (
    <>
      <Header />
      <div className="conteiner tableHome">
        <StyledHome>
          <div className="gridConteiner heightBlockHome">
            <div>
              <h3 className="textH4creative">
                Комната – творческая команда&nbsp;из&nbsp;Сибири
            </h3>
            </div>
            <div>
              <h1 className="textH1">Делаем графику и сайты с&nbsp;любовью к брендам</h1>
            </div>
          </div>
          <div className="Three">
            <Letters3D />
            {/* <img src={heroThree}/> */}
          </div>
          <div className="gridConteiner mr400">
            <div>

            </div>
            <div>

            </div>
            <div>
              <div style={{ position: "relative" }}>
                <h1 className="TextH1But" >
                  Мы делаем это хорошо, посмотрите <a onClick={redikCases} className="myProgConteiner" > наши проекты <div className="myProg"></div></a>
                </h1>
              </div>
            </div>
            <div>
            </div>
          </div>
          <Footer />
        </StyledHome>
        <StyledHomeMobil>
          <div className="Vr">
          <a href={file3D} rel="ar"><img src={VR}/></a>
          </div>
          <div className="TextMob">
            <h1>
              Komnata – креативное агентство из Сибири. Делаем графику и сайты с любовью к брендам.
            </h1>
          </div>
          <div className="ImgFon">
            
           <img src={mobil}/>

          </div>
        </StyledHomeMobil>
      </div>
    </>
  )
}


export default Home;


