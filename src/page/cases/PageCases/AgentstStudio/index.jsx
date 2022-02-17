import React, {useState} from "react";
import TextH1 from '../../../cases/ComponentCases/TextH1'
import ImgScroll from '../../../cases/ComponentCases/ImgScroll'
import HomeScreen from '../../../cases/ComponentCases/HomeScreen'
import aginc from '../../../../assets/img/aginc.png'
import shema from '../../../../assets/img/Aginc/shema.png'
import ReactFullpage from "@fullpage/react-fullpage";
import ImgTextButton from "../../ComponentCases/ImgTextButton";
import Text40Ob from "../../ComponentCases/Text40Ob";
import DeviceVideo from "../../ComponentCases/DeviceVideo";
import videoAginc from "../../../../assets/video/videoAginc.mp4"
import Img4Row from "../../ComponentCases/Img4Row";
import img1Device from '../../../../assets/img/Aginc/img1Device.png';
import img2Device from '../../../../assets/img/Aginc/img2Device.png';
import img3Device from '../../../../assets/img/Aginc/img3Device.png';
import img4Device from '../../../../assets/img/Aginc/img4Device.png';
import Footer from "../../../../component/footer";
import HeaderCases from "../../../../component/headerCases"
import {useDispatch } from 'react-redux'
import {setCasesNumBlock, setCasesNameBlock} from "../../../../redux/actions";
import {TextTitileNext,NextCaseLink } from "../../ComponentCases/NextCase/NextCase.styled";

const Blok1 = () => { 
    return(
        <>
            <HomeScreen imgFon={aginc} total="ДИЗАЙН САЙТА ИНТЕРФЕЙС" textsTitile="Мы спроектировали дизайн сервиса для бронирования фотостудий по&nbsp;всему миру"/>
        </>
    )
}

const Blok2 = () => {
    return(
        <>
           <ImgTextButton imgFon={shema} maxWidthImg="975px" maxWidthImgTitle="342px" textsTitile="Визуальная схема последовательности действий, которые выполняет пользователь для достижения своей цели."/>
        </>
    )
}

const Blok3 = () => {
    return(
        <>
            <Text40Ob textsTitile="Интерфейс спроектирован для удобства бронирования студии, шаг&nbsp;за&nbsp;шагом, на&nbsp;одной странице. Мы&nbsp;не&nbsp;размываем внимание пользователя&nbsp;и&nbsp;ведем через все&nbsp;этапы бронирования.&nbsp;Основная функция сервиса остается&nbsp;простой и&nbsp;понятной на&nbsp;всех этапах."/>
        </>
    )
}

const Blok4 = () => {
    return(
        <>
            <DeviceVideo video={videoAginc}/>
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

const Blok6 = () => {
    return(
        <>
            <ImgScroll/>
        </>
    )
}

const Blok7 = () => {
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

const anchors = ["", "ДИАГРАММА САЙТА", "СТРАНИЦЫ", "ОБ АГРЕГАТОРЕ", "ДЕСКТОП", "МОБИЛЬНАЯ ВЕРСИЯ", "НА СВЯЗИ"];
const anchorsRIGHT = ["AGENTSTUDIOS", "AGENTSTUDIOS", "AGENTSTUDIOS", "AGENTSTUDIOS", "AGENTSTUDIOS", "AGENTSTUDIOS", "NEXT PROJECT"];

const AgentstStudio = () => {
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
                                <Blok6 />
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


export default AgentstStudio;
