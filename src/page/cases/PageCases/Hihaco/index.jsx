import React, { useState } from "react";
import aginc from '../../../../assets/img/aginc.png'
import shema from '../../../../assets/img/shema.png'
import hihacoHome from '../../../../assets/img/Hihaco/hihacoHome.png'
import HihacoImg from '../../../../assets/img/Hihaco/Hihaco.png'
import merce from "../../../../assets/img/Hihaco/merce.mp4"
import Full from "../../../../assets/img/Hihaco/Full.jpg"
import img1 from "../../../../assets/img/Hihaco/img1Device.png";
import img2 from "../../../../assets/img/Hihaco/img2Device.png";
import img3 from "../../../../assets/img/Hihaco/img3Device.png";
import img4 from "../../../../assets/img/Hihaco/img4Device.png";
import img5 from "../../../../assets/img/Hihaco/img5Device.png";
import img6 from "../../../../assets/img/Hihaco/img6Device.png";
import img7 from "../../../../assets/img/Hihaco/img7Device.jpg";
import img8 from "../../../../assets/img/Hihaco/img8Device.jpg";
import img9 from "../../../../assets/img/Hihaco/img9Device.jpg";
import imgDisk from "../../../../assets/img/Hihaco/imgDisk.png"

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
import TextH1Center from "../../ComponentCases/TextH1Center";
import FullScreen from "../../ComponentCases/FullScreen";

import TextComment from "../../ComponentCases/TextComment"


const Blok1 = () => {

    return (
        <>
            <HomeScreen
                imgFon={hihacoHome}
                textsTitile="История о том, как мы случайно переизобрели визуальный язык магазина"
                total="брендинг и айдентику креативную концепцию 3Д визуалы"/>
        </>
    )
}

const Blok2 = () => {
    return (
        <>
            <TextH1Center textsTitile="Небольшой магазин видеокарт, которому нужно ярко ворваться на рынок. Сперва ворваться, а потом вырасти до дистрибьютора цифровой техники." />
        </>
    )
}

const Blok3 = () => {
    return (
        <>
            <Text40Ob textsTitile="Любому обывателю очевидно, что видеокарты нужны для красивой картинки: в видеоиграх или для работы с рендерами. Мы же решили сделать противоположное: СДЕЛАЛИ ВИЗУАЛЫ МАКСИМАЛЬНО ШАКАЛЬНЫМИ." />
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



const Blok4 = () => {
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
                        <img src={img1} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img2} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img3} />
                    </BlockSliderImg>
                </Slider>
            </TextTitile>
        </>
    )
}


const Blok5 = () => {
    return (
        <>
            <DeviceVideo border="0px" video={merce} />
        </>
    )
}

const Blok6 = () => {
    return (
        <>
            <ImgTextButton imgFon={HihacoImg}  maxWidthImg="360px" maxWidthImgTitle="388px"  textsTitile="Знак сам по себе сделан из пикселей. Из-за этого он выглядит массивно в большом формате, и его легко прочитать даже в пиксельном размере." />
        </>
    )
}

const Blok7 = () => {
    return (
        <>
            <FullScreen imgFon={Full} />
        </>
    )
}

const Blok8 = () => {
    return (
        <>
            <Text40Ob textsTitile="Типографика так же отражает нашу идею: фигачим заголовки пиксельным шрифтом, а для набора берем моноширинный с айтишным, цифровым характером. Сам формат заворачиваем в жесткую сетку." />
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



const Blok9 = () => {
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
                        <img src={img6} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img4} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img5} />
                    </BlockSliderImg>

                </Slider>
            </TextTitile>
        </>
    )
}

const Blok10 = () => {
    return (
        <>
            <ImgTextButton imgFon={imgDisk}  maxWidthImg="1280px" />
        </>
    )
}

function SampleNextArrowThre(props) {
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

function SamplePrevArrowThre(props) {
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



const Blok11 = () => {
    var settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "12%",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrowThre />,
        prevArrow: <SamplePrevArrowThre />
    };
    return (
        <>
            <TextTitile>
                <Slider {...settings}>
                    <BlockSliderImg>
                        <img src={img7} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img8} />
                    </BlockSliderImg>
                    <BlockSliderImg>
                        <img src={img9} />
                    </BlockSliderImg>
                </Slider>
            </TextTitile>
        </>
    )
}

const Blok12 = () => {
    return (
        <>
            <Text40Ob textsTitile="Дорогие и эксклюзивные продукты можем заворачивать в стильную упаковку — максимально контрастную тому пёстрому балагану, который заполонил этот рынок." />
        </>
    )
}

const Blok13 = () => {
    return (
        <>
            <Text40Ob textsTitile="В самом-самом начале нам показалось, что нужно будет сделать что-то очередное айтишное. Но мы решили ударить в лоб — и получилось то, что получилось." />
        </>
    )
}

const Blok14 = () => {
    return (
        <>
            <TextComment textsTitileBut="Вячеслав – Основатель, директор Хай Хако" textsTitile="Ребята быстро нашли «ту самую» идею. Вышло круто, непохоже на других, но очень понятно." />

        </>
    )
}



const Blok15 = () => {
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


const anchors = ["", "клиент", "идея", "идея", "идея", "лого", "", "пиксели везде", "пиксели везде", "пиксели везде", "", "упаковка", "упаковка", "clientsays", "свяжитесь с нами"];
const anchorsRIGHT = ["hihaco", "hihaco", "hihaco", "hihaco", "hihaco", "hihaco", "hihaco", "hihaco", "hihaco", "hihaco", "hihaco", "hihaco", "hihaco","hihaco", "NEXT PROJECT"];
console.log(anchors.length)



const Hihaco = () => {
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
                                <div className="section">
                                    <Blok11 />
                                </div>
                                <div className="section">
                                    <Blok12 />
                                </div>
                                <div className="section">
                                    <Blok13 />
                                </div>
                                <div className="section">
                                    <Blok14 />
                                </div>
                                <div className="section">
                                    <Blok15 />
                                </div>
                            </div>
                        );
                    }}
                />
            </div>
        </>
    )
}


export default Hihaco;
