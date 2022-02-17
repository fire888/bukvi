import React, {useState} from "react";
import HomeScreen from '../../../cases/ComponentCases/HomeScreen'
import ReactFullpage from "@fullpage/react-fullpage";
import ImgTextButton from "../../ComponentCases/ImgTextButton";

import home from '../../../../assets/img/Stomix/home.png'
import img1Device from '../../../../assets/img/Stomix/img1Device.png';
import img2Device from '../../../../assets/img/Stomix/img2Device.png';
import img3Device from '../../../../assets/img/Stomix/img3Device.png';
import img4Device from '../../../../assets/img/Stomix/img4Device.png';
import img5Device from '../../../../assets/img/Stomix/img5Device.png';
import img6Device from '../../../../assets/img/Stomix/img6Device.png';
import Txt1 from '../../../../assets/img/Stomix/Txt1.png'
import Txt2 from '../../../../assets/img/Stomix/Txt2.png'
import Txt3 from '../../../../assets/img/Stomix/Txt3.png'
import Full from "../../../../assets/img/Stomix/Full.png"
import Full2 from "../../../../assets/img/Stomix/Full2.png"

import HeaderCases from "../../../../component/headerCases"
import {useDispatch } from 'react-redux'
import {setCasesNumBlock, setCasesNameBlock} from "../../../../redux/actions";
import {TextTitileNext,NextCaseLink } from "../../ComponentCases/NextCase/NextCase.styled";
import { BlockSliderImg, DivVideo, TextTitile } from "../../ComponentCases/ImgScroll/imgScroll.styled";
import FullScreen from '../../../cases/ComponentCases/FullScreen'
import Slider from "react-slick";
import Text40Ob from "../../ComponentCases/Text40Ob"

const Blok1 = () => { 
    return(
        <>
            <HomeScreen imgFon={home} total="UI СИСТЕМЫ" textsTitile="CRM для стоматологической поликлиники"/>
        </>
    )
}

const Blok2 = () => {
    return(
        <>
            <Text40Ob textsTitile="STOMX – стоматологическая поликлиника. Хочет упорядочить менеджмент, быть в курсе всего. Сделали для них CRM систему с выразительным и конкретным дизайном без дополнительных акциденций цветом в интерфейсе. Строго, современно, чисто, сохраняя удобство в функциях." />
        </>
    )
}

const Blok3 = () => {
    return(
        <>
            <ImgTextButton imgFon={Txt1} maxWidthImg="900px" maxWidthImgTitle="528px" textsTitile="Проанализировали алгоритмы работы врачей и руководства клиники на основе старой црм и улучшили некоторые решения, оптимизировав пути пользователя" />
        </>
    )
}

const Blok4 = () => {
    return(
        <>
            <ImgTextButton imgFon={Txt2} maxWidthImg="1030px" maxWidthImgTitle="528px" textsTitile="Про то, что делим экран на четыре части и про то где что находится, рассказываем логику работы и почему это удобно" />
        </>
    )
}

const Blok5 = () => {
    return(
        <>
            <ImgTextButton imgFon={Txt3} maxWidthImg="1066px" maxWidthImgTitle="528px" textsTitile="Здесь про типографику в системе, про то что не уходим далекоот простого листа бумаги, что изобилующего цветными кнопками интерфейса тут нет" />
        </>
    )
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: "#fff0",
                position: 'absolute',
                width: "50vw",
                height: "100vh",
                right: 0,
                zIndex: 999,
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: "#fff0",
                position: 'absolute',
                width: "50vw",
                height: "100vh",
                left: 0,
                zIndex: 999,
            }}
            onClick={onClick}
        />
    );
}



const Blok6 = () => {
    var settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "12%",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <TextTitile>
                <Slider {...settings}>
                    <BlockSliderImg>
                        <img src={img1Device} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img2Device} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img3Device} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img4Device} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img5Device} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img6Device} />
                    </BlockSliderImg>
                </Slider>
            </TextTitile>
        </>
    )
}



const Blok7 = () => {
    return (
        <>
            <div className="parallaxCases">
                 <div className="bg_one">
                </div>
                <div className="bg_two">
                </div>
            </div>
        </>
    )
}


const Blok9 = () => {
    return(
        <>
            <TextTitileNext>
                Если вы хотите обсудить свой проект с нами или просто познакомиться отправьте своё&nbsp;сообщение на <a className="myProgCasesConteiner">team@komnata.agency. <div className="myProgCases"></div></a>
            </TextTitileNext>
            <TextTitileNext>
                Наши двери всегда открыты.
            </TextTitileNext>
            <NextCaseLink>
                <p><span>client</span> AGENTSTUDIO, <span>design & art direction </span> ARTUR KAIGORODTSEV <span>project managing artur</span> kaigoroDtsev, <span> UI DESIGN</span> Valya Kolokol, <span>place & year</span> MOSCOW, 2019</p>
            </NextCaseLink>
        </>
    )
}

const anchors = ["", "О stomx", "СТРУКТУРА", "ЭКРАН", "UI", "ЭКРАНЫ CRM", "ЭКРАНЫ CRM", "ЭКРАНЫ CRM", "СВЯЖИТЕСЬ С НАМИ"];
const anchorsRIGHT = ["stomx", "stomx", "stomx", "stomx", "stomx", "stomx", "stomx", "stomx", "NEXT PROJECT"];

const Stomx = () => {
    const [dest, setDest] = useState(0);
    const dispatch = useDispatch()
    return (
        <>
        <HeaderCases anchors={anchors} anchorsRIGHT={anchorsRIGHT} />
            <div 
                style={{position:"absolute", top:0,}}
            >
            <ReactFullpage
                continuousVertical= "true"
                scrollOverflow="true"
                onLeave= {function(origin, destination, direction) {
                    setDest(destination.index)
                    dispatch(setCasesNumBlock(destination.index))
                    dispatch(setCasesNameBlock(anchors[destination.index]))
                  }}
                // sectionsColor={["#FFFFF0", "#E0FFFF", "#E6E6FA"]}
                render={({ state, fullpageApi }) => {
                    return (
                        <div>
                            <div className="section">
                                <Blok1 />
                            </div>
                            <div className="section">
                                <Blok2 />
                            </div>
                            <div className="section">
                                <Blok3 />
                            </div>
                            <div className="section">
                                <Blok4 />
                            </div>
                            <div className="section">
                                <Blok5 />
                            </div>
                            <div className="section">
                                <Blok6 />
                            </div>
                            <div className="section">
                                <Blok7 />
                            </div>
                            <div className="section">
                                <Blok9 />
                            </div>
                        </div>
                    );
                }}
            />
            </div>
        </>
    )
}


export default Stomx;
