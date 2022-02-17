import React, {useState} from "react";
import aginc from '../../../../assets/img/aginc.png'
import shema from '../../../../assets/img/shema.png'
import octoHome from '../../../../assets/img/Octo/octoHome.png'
import octo2IM from '../../../../assets/img/Octo/octo2IM.png'
import OctoLogo from "../../../../assets/img/Octo/octologo.mp4"
import img1Device from '../../../../assets/img/Octo/img1Device.png';
import img2Device from '../../../../assets/img/Octo/img2Device.png';
import img3Device from '../../../../assets/img/Octo/img3Device.png';
import img4Device from '../../../../assets/img/Octo/img4Device.png';
import img1 from "../../../../assets/img/Octo/img1Device.png";
import img2 from "../../../../assets/img/Octo/img2Device.png";
import img3 from "../../../../assets/img/Octo/img3Device.png";
import img4 from "../../../../assets/img/Octo/img4Device.png";
import videoAginc from "../../../../assets/video/videoAginc.mp4";
// ------
import TextH1 from '../../../cases/ComponentCases/TextH1'
import ImgScroll from '../../../cases/ComponentCases/ImgScroll'
import HomeScreen from '../../../cases/ComponentCases/HomeScreen'
import ReactFullpage from "@fullpage/react-fullpage";
import ImgTextButton from "../../ComponentCases/ImgTextButton";
import Text40Ob from "../../ComponentCases/Text40Ob";
import DeviceVideo from "../../ComponentCases/DeviceVideo";
import Img4Row from "../../ComponentCases/Img4Row";
import {TextTitileNext,NextCaseLink } from "../../ComponentCases/NextCase/NextCase.styled";
import Footer from "../../../../component/footer";
import {BlockSliderImg, DivVideo, TextTitile} from "../../ComponentCases/ImgScroll/imgScroll.styled";
import Slider from "react-slick";
import NextCase from "../../ComponentCases/NextCase";
import HeaderCases from "../../../../component/headerCases"
import {useDispatch } from 'react-redux'
import {setCasesNumBlock, setCasesNameBlock} from "../../../../redux/actions";



const Blok1 = () => {
    return(
        <>
            <HomeScreen
                imgFon={octoHome}
                textsTitile="Получаем навыки для создания лучших медиа проектов"/>
        </>
    )
}

const Blok2 = () => {
    return(
    <>
        <Text40Ob textsTitile="Осьминог – умнейшее животное на планете. Они&nbsp;не&nbsp;любят однообразные задания и&nbsp;повторяющиеся эксперименты, а&nbsp;еще постоянно&nbsp;пытаются занять свой ум..."/>
    </>
    )
}


const Blok3 = () => {
    return(
        <>
            <DeviceVideo video={OctoLogo}/>
        </>
    )
}

const Blok4 = () => {
    return(
        <>
            <ImgTextButton imgFon={octo2IM} textsTitile="Навыки осьминога стали определяющими для названия и лого школы. Он способен решать различные когнитивные задачи: находить и запоминать выход из сложных лабиринтов, открывать банки с едой и ловко охотиться."/>
        </>
    )
}


const Blok5 = () => {
    return(
        <>
            <Img4Row img1={img1Device} img2={img2Device} img3={img3Device} img4={img4Device}/>
        </>
    )
}


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
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
            style={{ ...style,
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
        centerPadding: "15%",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return(
        <>
            <TextTitile>
                <Slider {...settings}>
                    <BlockSliderImg>
                        <img src={img1}/>
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img2}/>
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img3}/>
                    </BlockSliderImg>
                    {/*<BlockSliderImg>*/}
                    {/*    <DivVideo>*/}
                    {/*        <video   autoPlay muted loop  height="100%">*/}
                    {/*            <source src={videoAginc} type="video/mp4"/>*/}
                    {/*        </video>*/}
                    {/*    </DivVideo>*/}
                    {/*</BlockSliderImg>*/}
                    <BlockSliderImg>
                        <img src={img4}/>
                    </BlockSliderImg>
                    {/*<BlockSliderImg>*/}
                    {/*    <img src={img5}/>*/}
                    {/*</BlockSliderImg>*/}
                </Slider>
            </TextTitile>
        </>
    )
}


const Blok7 = () => {
    return(
        <>
            <TextTitileNext>
                Если вы хотите обсудить свой проект с нами или просто познакомиться отправьте своё&nbsp;сообщение на <a className="myProg">team@komnata.agency.</a>
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


const anchors = ["", "ИДЕЯ НЕЙМИНГА", "ЛОГОТИП", "ЛОГОТИП", "ОСНОВНЫЕ СТРАНИЦЫ", "СВЯЖИТЕСЬ С НАМИ"];
const anchorsRIGHT = ["OCTO ONLINE SCHOOL", "OCTO ONLINE SCHOOL", "OCTO ONLINE SCHOOL", "OCTO ONLINE SCHOOL", "OCTO ONLINE SCHOOL", "NEXT PROJECT"];
console.log(anchors.length) 



const Octo = () => {
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
                onLeave= {function(origin, destination, direction) {
                    setDest(destination.index)
                    dispatch(setCasesNumBlock(destination.index))
                    dispatch(setCasesNameBlock(anchors[destination.index]))
                  }}
                sectionsColor={["#FFF0", "#FFF0", "#000", "#FFF0", "#fff0", "#FFF0", "#FFF0"]}
                render={({ state,destination, fullpageApi }) => {
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
                                <Blok6 />
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
