import React, { useState } from "react";
import aginc from '../../../../assets/img/aginc.png'
import shema from '../../../../assets/img/shema.png'
import hihacoHome from '../../../../assets/img/Hihaco/hihacoHome.png'
import HihacoImg from '../../../../assets/img/Hihaco/Hihaco.png'
import merce from "../../../../assets/img/Hihaco/merce.mp4"
import Full from "../../../../assets/img/Hihaco/Full.jpg"
import Top1 from "../../../../assets/img/Chb/top1.png";
import Top2 from "../../../../assets/img/Chb/top2.png";

import in1 from "../../../../assets/img/Chb/in1.png";
import in2 from "../../../../assets/img/Chb/in2.png";
import in3 from "../../../../assets/img/Chb/in3.png";

import VideoDev from "../../../../assets/img/Chb/videoDev.mp4"
import mobVideo from "../../../../assets/img/Chb/mobVideo.mp4"

import img2 from "../../../../assets/img/Hihaco/img2Device.png";
import img3 from "../../../../assets/img/Hihaco/img3Device.png";
import img4 from "../../../../assets/img/Hihaco/img4Device.png";
import img5 from "../../../../assets/img/Hihaco/img5Device.png";
import img6 from "../../../../assets/img/Hihaco/img6Device.png";
import img7 from "../../../../assets/img/Hihaco/img7Device.jpg";
import img8 from "../../../../assets/img/Hihaco/img8Device.jpg";
import img9 from "../../../../assets/img/Hihaco/img9Device.jpg";
import imgDisk from "../../../../assets/img/Hihaco/imgDisk.png"
import imgPlus from "../../../../assets/img/Chb/Plus.png";
import octoFull from "../../../../assets/img/Octo/octoFull.png";
import ImgLna from "../../../../assets/img/Chb/lna.png";
import bord  from "../../../../assets/img/Chb/bord.png"
import homeVideo from "../../../../assets/img/Chb/home.mp4"
import ImgTextButtonImg from "../../ComponentCases/ImgTextButtonImg"
// ------
import TextH1 from '../../../cases/ComponentCases/TextH1'
import ImgScroll from '../../../cases/ComponentCases/ImgScroll'
import HomeScreenVideo from '../../../cases/ComponentCases/HomeScreenVideo'
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
import TextComment from "../../ComponentCases/TextComment"
import { useDispatch } from 'react-redux'
import { setCasesNumBlock, setCasesNameBlock } from "../../../../redux/actions";
import TextH1Center from "../../ComponentCases/TextH1Center";
import FullScreen from "../../ComponentCases/FullScreen";
import {TextTitileTwoBlok, HomeImg, TextBut, DivBlok} from "../../ComponentCases/Screen2Txt/Screen2Txt.styled";
import Img3Row from '../../../cases/ComponentCases/Img3Row'
import {DeviceImg, ChbDiv, DeviceImgCastomChb, DeviceImgCastomButChb} from "../../ComponentCases/DeviceVideo/DeviceVideo.styled";


const Blok1 = () => {

    return (
        <>
            <HomeScreenVideo
                videoFon={homeVideo}
                textsTitile="Черная снаружи – белая внутри"
                total="АЙДЕНТИКА, ГАЙДЛАЙНЫ, АРТ-ДИРЕКШН"/>
        </>
    )
}

const Blok2 = () => {
    return (
        <>
            <TextH1Center textsTitile="Бухгалтерский сервис, который возьмет на себя все налоговые, банковские, кадровые тяжбы за смешные деньги. При этом у каждого клиента есть свой личный асисстент." />
        </>
    )
}

const Blok3 = () => {
    return (
        <>
        <div className="conteiner">
        <DivBlok>
            <TextTitileTwoBlok>
                В брендинге только чёрный&nbsp;и&nbsp;белый&nbsp;цвет.
            </TextTitileTwoBlok>
            <div className="gridConteinerCases">
                <div>

                </div>
            <TextBut>
                Чёрная бухгалтерия позиционируется как простой бухгалтерский сервис через мессенджеры.
                <br/>
                <br/>
                Выбрав именно такие цвета, мы подчеркнули простоту сервиса, а также его слегкапретенциозный нейминг.
            </TextBut>
            </div>
            <img className="imgTwoText" src={imgPlus}/>
        </DivBlok>
        </div>
        </>
    )
}




const Blok4 = () => {
    return (
        <>
            <ImgTextButtonImg imgFon={Top1} imgFon2={Top2}  maxWidthImg="502px" maxWidthImg2="629px"/>
        </>
    )
}


const Blok5 = () => {
    return (
        <>
            <ImgTextButton imgFon={ImgLna}  maxWidthImg="1100px"  />
        </>
    )
}

const Blok6 = () => {
    return (
        <>
            <FullScreen imgFon={bord} />
        </>
    )
}

const Blok7 = () => {
    return (
        <>
             <Img3Row img1={in1} img2={in2} img3={in3}/>
        </>
    )
}

const Blok8 = () => {
    return (
        <>
            <Text40Ob textsTitile="В графике мы можем легко показывать образы, помогающие привлечь внимание к рекламному сообщению. Нас ничего не сковывает и при этом тему черного и белого можно поддерживать множество раз и в разных вариациях"/>
        </>
    )
}

const Blok9 = () => {
    return (
        <>
        <DeviceImgCastomChb>
            <div style={{textAlign: "center"}}>
            <video data-autoplay muted loop width="100%" height="100%">
                <source src={VideoDev} type="video/mp4"/>
            </video>
            </div>
        </DeviceImgCastomChb>
        </>
    )
}


const Blok10 = () => {
    return (
        <>
        <DeviceImgCastomButChb>
                <video data-autoplay muted loop width="100%" height="100%">
                    <source src={mobVideo} type="video/mp4"/>
                </video>
        </DeviceImgCastomButChb>
        </>
    )
}

const Blok11 = () => {
    return (
        <>
            <TextComment textsTitileBut="Никита Назаров – бренд директор чёрной бухгалтерии" textsTitile="Сотрудничество с комнатой помогло выразить индивидуальность нашего бренда. Каждое решение дизайнеры обосновывают, с полным знанием своего дела. Слишком ах*енно, чтобы быть правдой, но результат налицо — сотни лестных комментариев о нашем стиле за год работы." />
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


const anchors = ["", "О КЛИЕНТЕ", "идея коммуникации", "ЛОГОТИП", "KEYVISUAL", "СТРАНИЦЫ ГАЙДЛАЙНОВ", "3д в соцсетях", "СТАБИЛЬНЫЙ ИСТОЧНИК КРЕАТИВА", "3д на сайте", "рекламный моушен", "ОТЗЫВ", "СВЯЖИТЕСЬ С НАМИ", ];
const anchorsRIGHT = ["ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "ЧёРНАЯ БУХГАЛТЕРИЯ", "NEXT PROJECT"];
console.log(anchors.length)



const Chb = () => {
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
                    sectionsColor={["#FFF0", "#FFF0", "#fff0", "#FFF0", "#fff0", "#FFF0", "#fff0", "#fff0", "#fff0", "#000", "#fff0"]}
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


export default Chb;
