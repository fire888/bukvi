import React, { useState } from "react";
import aginc from '../../../../assets/img/aginc.png'
import shema from '../../../../assets/img/shema.png'
import octoHome from '../../../../assets/img/Octo/octoHome.png'
import octo2IM from '../../../../assets/img/Octo/octo2IM.png'
import OctoLogo from "../../../../assets/img/Octo/octologo.mp4"

import img1 from "../../../../assets/img/Octo/img1Device.png";
import img2 from "../../../../assets/img/Octo/img2Device.png";
import img3 from "../../../../assets/img/Octo/img3Device.png";
import img4 from "../../../../assets/img/Octo/img4Device.png";
import img5 from "../../../../assets/img/Octo/img5Device.png";
import img6 from "../../../../assets/img/Octo/img6Device.png";
import img7 from "../../../../assets/img/Octo/img7Device.png";

import octoFull from "../../../../assets/img/Octo/octoFull.png";
import video2 from "../../../../assets/img/Octo/2.mp4";
import video3 from "../../../../assets/img/Octo/3.mp4";
// ------
import TextH1 from '../../../cases/ComponentCases/TextH1'
import ImgScroll from '../../../cases/ComponentCases/ImgScroll'
import HomeScreen from '../../../cases/ComponentCases/HomeScreen'
import ReactFullpage from "@fullpage/react-fullpage";
import ImgTextButton from "../../ComponentCases/ImgTextButton";
import Text40Ob from "../../ComponentCases/Text40Ob";
import DeviceVideo from "../../ComponentCases/DeviceVideo";
import Img4Row from "../../ComponentCases/Img4Row";
import { TextTitileNext, NextCaseLink } from "../../ComponentCases/NextCase/NextCase.styled";
import Footer from "../../../../component/footer";
import { BlockSliderImg, DivVideo, TextTitile } from "../../ComponentCases/ImgScroll/imgScroll.styled";
import Slider from "react-slick";
import NextCase from "../../ComponentCases/NextCase";
import HeaderCases from "../../../../component/headerCases"
import { useDispatch } from 'react-redux'
import { setCasesNumBlock, setCasesNameBlock } from "../../../../redux/actions";
import Screen2Txt from '../../../cases/ComponentCases/Screen2Txt'



const Blok1 = () => {

    return (
        <>
            <HomeScreen
                imgFon={octoHome}
                textsTitile="Получаем навыки для создания лучших медиа проектов"
                total="ЛОГОТИП, НЕЙМИНГ UI&nbsp;СИСТЕМЫ"/>
        </>
    )
}

const Blok21 = () => {
    return (
        <>
            <Screen2Txt textsTitile="Образовательная онлайн&nbsp;-&nbsp;платформа." total="В ходе обучения в Octo можно обрести навыки моушен-дизайнера, CG-художника или даже научиться писать музыку. Видеоуроки, разбор дз, обучающие статьи – все на одной веб-платформе." />
        </>
    )
}

const Blok2 = () => {
    return (
        <>
            <Text40Ob textsTitile="Осьминог – умнейшее животное на планете. Они&nbsp;не&nbsp;любят однообразные задания и&nbsp;повторяющиеся эксперименты, а&nbsp;еще постоянно&nbsp;пытаются занять свой ум..." />
        </>
    )
}


const Blok3 = () => {
    return (
        <>
            <DeviceVideo video={OctoLogo} />
        </>
    )
}

const Blok4 = () => {
    return (
        <>
            <ImgTextButton imgFon={octo2IM} maxWidthImg="308px" maxWidthImgTitle="528px" textsTitile="Навыки осьминога стали определяющими для названия и лого школы. Он способен решать различные когнитивные задачии находить выход из сложных лабиринтов" />
        </>
    )
}



const Blok8 = () => {
    return (
        <>
            <DeviceVideo  maxWidth="1150px" border="29px" video={video2} />
        </>
    )
}


const Blok9 = () => {
    return (
        <>
            <ImgTextButton imgFon={octoFull} maxWidthImg="1059px" textsTitile="" />
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
        centerPadding: "17.5%",
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
                <DivVideo>
                    <video   data-autoplay muted loop  height="100%">
                        <source src={video3} type="video/mp4"/>
                    </video>
                </DivVideo>
            </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img1} />
                    </BlockSliderImg>
            {/* <BlockSliderImg>
                <DivVideo>
                    <video   autoPlay muted loop  height="100%">
                        <source src={video1} type="video/mp4"/>
                    </video>
                </DivVideo>
            </BlockSliderImg> */}
                    <BlockSliderImg>
                        <img src={img2} />
                    </BlockSliderImg>
            {/* <BlockSliderImg>
                <DivVideo>
                    <video   autoPlay muted loop  height="100%">
                        <source src={video2} type="video/mp4"/>
                    </video>
                </DivVideo>
            </BlockSliderImg> */}
                    <BlockSliderImg>
                        <img src={img3} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img4} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img5} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img6} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img7} />
                    </BlockSliderImg>
            {/* <BlockSliderImg>
                <DivVideo>
                    <video   autoPlay muted loop  height="100%">
                        <source src={video4} type="video/mp4"/>
                    </video>
                </DivVideo>
            </BlockSliderImg> */}
                </Slider>
            </TextTitile>
        </>
    )
}


const Blok7 = () => {
    return (
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


const anchors = ["", "оклиенте", "ИДЕЯ НЕЙМИНГА", "ЛОГОТИП", "ЛОГОТИП", "ОСНОВНЫЕ СТРАНИЦЫ", "О ШКОЛЕ", "ИНТЕРФЕЙС", "СВЯЖИТЕСЬ С НАМИ"];
const anchorsRIGHT = ["OCTO ONLINE SCHOOL", "OCTO ONLINE SCHOOL", "OCTO ONLINE SCHOOL", "OCTO ONLINE SCHOOL", "OCTO ONLINE SCHOOL","OCTO ONLINE SCHOOL","OCTO ONLINE SCHOOL","OCTO ONLINE SCHOOL", "NEXT PROJECT"];
console.log(anchors.length)



const Octo = () => {
    const [dest, setDest] = useState(0);
    const dispatch = useDispatch()
    return (
        <>
            <HeaderCases anchors={anchors} anchorsRIGHT={anchorsRIGHT} />
            <div
                style={{ position: "absolute", top: 0, }}
            >
                <ReactFullpage
                    continuousVertical= "true"
                    onLeave={function (origin, destination, direction) {
                        setDest(destination.index)
                        dispatch(setCasesNumBlock(destination.index))
                        dispatch(setCasesNameBlock(anchors[destination.index]))
                    }}
                    sectionsColor={["#FFF0","#FFF0", "#FFF0", "#000", "#FFF0", "#fff0", "#FFF0", "#fff0", "#fff0"]}
                    render={({ state, destination, fullpageApi }) => {
                        return (
                            <div>
                                <div className="section">
                                    <Blok1 />
                                </div>
                                <div className="section">
                                    <Blok21/>
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
                                    <Blok6 />
                                </div>
                                <div className="section">
                                    <Blok8 />
                                </div>
                                <div className="section">
                                    <Blok9 />
                                </div>
                                <div className="section">
                                    <Blok7 />
                                </div>
                            </div>
                        );
                    }}
                />
            </div>
        </>
    )
}


export default Octo;
