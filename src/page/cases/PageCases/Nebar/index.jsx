import React, { useState } from "react";
import aginc from '../../../../assets/img/aginc.png'
import shema from '../../../../assets/img/shema.png'
import home from '../../../../assets/img/Nebar/home.jpg'
import octo2IM from '../../../../assets/img/Octo/octo2IM.png'
import OctoLogo from "../../../../assets/img/Octo/octologo.mp4"
import logo from "../../../../assets/img/Nebar/logo.png"
import img1Device from '../../../../assets/img/Octo/img1Device.png';
import img2Device from '../../../../assets/img/Octo/img2Device.png';
import img3Device from '../../../../assets/img/Octo/img3Device.png';
import img4Device from '../../../../assets/img/Octo/img4Device.png';
import img1 from "../../../../assets/img/Nebar/img1Device.png";
import img2 from "../../../../assets/img/Nebar/img2Device.png";
import img3 from "../../../../assets/img/Nebar/img3Device.png";
import img4 from "../../../../assets/img/Nebar/img4Device.png";
import octoFull from "../../../../assets/img/Octo/octoFull.png";
import video2 from "../../../../assets/img/Octo/2.mp4";
import full from "../../../../assets/img/Nebar/full.jpg";
import in1 from "../../../../assets/img/Nebar/in1.png";
import in2 from "../../../../assets/img/Nebar/in2.png";
import in3 from "../../../../assets/img/Nebar/in3.png";
// ------
import TextH1Center from '../../../cases/ComponentCases/TextH1Center'
import Screen2Txt from '../../../cases/ComponentCases/Screen2Txt'
import FullScreen from '../../../cases/ComponentCases/FullScreen'
import Img3Row from '../../../cases/ComponentCases/Img3Row'
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



const Blok1 = () => {

    return (
        <>
            <HomeScreen
                imgFon={home}
                textsTitile="Нашли неочевидную идею, которая была у всех перед глазами"
                total="брендинг и айдентику креативную концепцию 3Д визуалы"/>
        </>
    )
}

const Blok2 = () => {
    return (
        <>
            <TextH1Center textsTitile="Вначале был нужен всего лишь логотип караоке-бара. Но изначально небольшая идея сперва смогла превратиться в игру, а потом и в рекламную концепцию" />
        </>
    )
}

const Blok10 = () => {
    return (
        <>
            <Screen2Txt textsTitile="Весь шум в виде стаканов и микрофонов был сразу отброшен." total="Пока искали какую-то графику, родилась рекламная концепция: будем заполнять рекламные баннеры словами из любимых песен, закрашивая часть текста. Это ведь и есть караоке — бегущие буковки, в которые все так усердно пытаются попасть." />
        </>
    )
}

// const Blok3 = () => {
//     return (
//         <>
//             <DeviceVideo video={OctoLogo} />
//         </>
//     )
// }

const Blok4 = () => {
    return (
        <>
            <ImgTextButton imgFon={logo} maxWidthImg="752px" maxWidthImgTitle="388px" textsTitile="И тут мы увидели в этих буковках знак. Буквально, наш логотип и есть караоке. Цвет закрасил буквы НЕ  и замер в этом состоянии." />
        </>
    )
}



const Blok8 = () => {
    return (
        <>
            <FullScreen
                imgFon={full}
            />
        </>
    )
}


const Blok9 = () => {
    return (
        <>
            <Text40Ob textsTitile="Но в рекламной графике мы можем легко применить весь тот шум, который изначально отбросили: для быстрого считывания эти образы отлично работают." />
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
        centerPadding: "11%",
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
            {/* <BlockSliderImg>
                <DivVideo>
                    <video   autoPlay muted loop  height="100%">
                        <source src={video3} type="video/mp4"/>
                    </video>
                </DivVideo>
            </BlockSliderImg> */}
                    <BlockSliderImg>
                        <img src={img4} />
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


const Blok11 = () => {
    return(
        <>
            <Img3Row img1={in1} img2={in2} img3={in3}/>
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


const anchors = ["", "задача", "идея", "лого", "", "", "клише в рекламе", "клише в рекламе", "СВЯЖИТЕСЬ С НАМИ"];
const anchorsRIGHT = ["небар", "небар", "небар", "небар", "небар", "небар", "небар", "небар","NEXT PROJECT"];
console.log(anchors.length)



const Nebar = () => {
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
                    sectionsColor={["#FFF0", "#FFF0", "#fff0", "#FFF0", "#fff0", "#FFF0", "#fff0", "#fff0"]}
                    render={({ state, destination, fullpageApi }) => {
                        return (
                            <div>
                                <div className="section">
                                    <Blok1 />
                                </div>
                                <div className="section">
                                    <Blok2 />
                                </div>
                                {/* <div className="section">
                                    <Blok3 />
                                </div> */}
                                <div className="section">
                                    <Blok10 />
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
                                    <Blok11 />
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


export default Nebar;
