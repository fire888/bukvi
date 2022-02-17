import React, {useState} from "react";
import threImg from '../../../../assets/img/Union/threImg.png'
import HomeScreen from '../../../cases/ComponentCases/HomeScreen'
import home from '../../../../assets/img/Union/home.png'
import logoWi from '../../../../assets/img/Union/logoWi.png'
import ReactFullpage from "@fullpage/react-fullpage";
import ImgTextButton from "../../ComponentCases/ImgTextButton";
import VideoTextButton from "../../ComponentCases/VideoTextButton";
import DeviceVideo from "../../ComponentCases/DeviceVideo";
import v1 from "../../../../assets/img/Union/v1.mp4"
import v2 from "../../../../assets/img/Union/v2.mp4"
import v3 from "../../../../assets/img/Union/v3.mp4"
import v4 from "../../../../assets/img/Union/v4.mp4"
import v5 from "../../../../assets/img/Union/v5.mp4"
import Full from "../../../../assets/img/Union/Full.png"
import img1Device from '../../../../assets/img/Union/img1Device.png';
import img2Device from '../../../../assets/img/Union/img2Device.png';
import img3Device from '../../../../assets/img/Union/img3Device.png';
import img4Device from '../../../../assets/img/Union/img4Device.png';
import img5Device from '../../../../assets/img/Union/img5Device.png';
import img6Device from '../../../../assets/img/Union/img6Device.png';
import img7Device from '../../../../assets/img/Union/img7Device.png';
import HeaderCases from "../../../../component/headerCases"
import {useDispatch } from 'react-redux'
import Screen2Txt from "../../ComponentCases/Screen2Txt"
import {setCasesNumBlock, setCasesNameBlock} from "../../../../redux/actions";
import {TextTitileNext,NextCaseLink } from "../../ComponentCases/NextCase/NextCase.styled";
import { BlockSliderImg, DivVideo, TextTitile } from "../../ComponentCases/ImgScroll/imgScroll.styled";
import FullScreen from '../../../cases/ComponentCases/FullScreen'
import Slider from "react-slick";
import {DeviceImg, ChbDiv, DeviceImgCastomChb, DeviceImgCastomButChb} from "../../ComponentCases/DeviceVideo/DeviceVideo.styled";


const Blok1 = () => { 
    return(
        <>
            <HomeScreen imgFon={home} total="ДИЗАЙН ИНТЕРНЕТ-МАГАЗИНА УПАКОВКА, АЙДЕНТИКА, РЕКЛАМНЫЕ МАТЕРИАЛЫ" textsTitile="Подчеркиваем эстетику простоты в&nbsp;лампочках и светильниках"/>
        </>
    )
}

const Blok2 = () => {
    return(
        <>
            <Screen2Txt textsTitile="Фокус на продукт, красивые фотографии, без лишней описательной части" total="Union – это магазин дизайнерских светильников.Каждая модель имеет собственный шарм, занимая ключевое место в интерьере. Моделей очень много, поэтому нужно было спроектировать удобный инструмент поиска, при этом не перегружать интернет-магазин лишним текстом и интерфейсом" />
        </>
    )
}

const Blok3 = () => {
    return(
        <>
            <VideoTextButton videoFon={v1} textsTitile="«Никаких лампочек в логотипе!» – комментарий от клиента. Но, все же, стояла задача передать в знаке источник освещения." />
        </>
    )
}

const Blok4 = () => {
    return(
        <>
            <ImgTextButton imgFon={logoWi} maxWidthImg="695px" maxWidthImgTitle="388px" textsTitile="Тем самым мы обыграли нейминг магазина: единение, союз частиц, связь классов, объединение в одно целое." />
        </>
    )
}

const Blok5 = () => {
    return(
        <>
        <DeviceImgCastomChb>
            <div style={{textAlign: "center"}}>
            <video data-autoplay muted loop width="100%" height="100%">
                <source src={v2} type="video/mp4"/>
            </video>
            </div>
        </DeviceImgCastomChb>
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
                <DivVideo>
                    <video   data-autoplay muted loop  height="100%">
                        <source src={v3} type="video/mp4"/>
                    </video>
                </DivVideo>
            </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img2Device} />
                    </BlockSliderImg>
            <BlockSliderImg>
                <DivVideo>
                    <video   data-autoplay muted loop  height="100%">
                        <source src={v4} type="video/mp4"/>
                    </video>
                </DivVideo>
            </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img3Device} />
                    </BlockSliderImg>
                </Slider>
            </TextTitile>
        </>
    )
}


const Blok7 = () => {
    return(
        <>
            <DeviceVideo border="0px" video={v5} />
        </>
    )
}


function SampleNextArrowTwo(props) {
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

function SamplePrevArrowTwo(props) {
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



const Blok8 = () => {
    var settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "12%",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrowTwo />,
        prevArrow: <SamplePrevArrowTwo />
    };
    return (
        <>
            <TextTitile>
                <Slider {...settings}>
                    <BlockSliderImg>
                        <img src={img4Device} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img5Device} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img6Device} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img7Device} />
                    </BlockSliderImg>
                </Slider>
            </TextTitile>
        </>
    )
}


const Blok9 = () => {
    return (
        <>
            <FullScreen imgFon={Full} />
        </>
    )
}

const Blok10 = () => {
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

const anchors = ["", "ЗАДАЧА", "идея ЛОГОТИПА", "лого", "ГЛАВНАЯ СТРАНИЦА", "ОСНОВНЫЕ CТРАНИЦЫ", "МОУШЕН РЕКЛАМНОГО БАННЕРА", "РЕКЛАМНЫЕ МАТЕРИАЛЫ", "УПАКОВКА", "СВЯЖИТЕСЬ С НАМИ"];
const anchorsRIGHT = ["UNION", "UNION", "UNION", "UNION", "UNION", "UNION", "UNION", "UNION", "UNION", "NEXT PROJECT"];

const Union = () => {
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
                sectionsColor={["#FFF0", "#FFF0", "#000", "#FFF0", "#fff0", "#FFF0", "#FFF0", "#fff0", "#FFF0", "#FFF0"]}
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
                                <Blok8 />
                            </div>
                            <div className="section">
                                <Blok9 />
                            </div>
                            <div className="section">
                                <Blok10 />
                            </div>
                        </div>
                    );
                }}
            />
            </div>
        </>
    )
}


export default Union;
