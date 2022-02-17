import React, { useEffect } from "react";
import Footer from "../../component/footer";
import HeaderPage from "../../component/headerPage"
import {StyledHome} from "../home/home.styled";
import {TopBlockLeft, TextAboutCentr, Competihon,DivAbout, AboutPageP, AboutPage,ImgAbout, DivOneBlockAbout} from "./about.styled";
import K from '../../assets/img/K.png';
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: false,
            delay: 100,
            anchorPlacement: 'top-center'
        });
        AOS.refresh();
      }, []);
    return (
        <>
        <HeaderPage/>
        <DivAbout>
        <div className="conteiner">
            <div>
                <div className="gridConteinerCases">
                    <DivOneBlockAbout>
                        <TopBlockLeft>
                            Komnata <span>Креативное агентство</span> из Сибири.
                        </TopBlockLeft>
                        <TopBlockLeft>
                            Наш главный ресурс это команда. Наша цель – улучшаться в поиске баланса между функцией и эмоцией.
                        </TopBlockLeft>
                    </DivOneBlockAbout>
                    <ImgAbout>
                        <img src={K}/>
                        <AboutPageP>
                            <p>В 2020 году мы приняли решение о создании своей независимой команды, поскольку мы верим в силу наших идей – оказывать положительное влияние на этот мир.</p>
                        </AboutPageP>
                    </ImgAbout>
                </div>
            </div>
        
        <div className="about-content">
            <Competihon data-aos={"fade-up"}>
                <h5>
                    <span>
                        Брендинг
                    </span>
                    Сформулируем позиционирование и бренд-платформу без противоречий между реальными чувствами и намерениями.
                </h5>
                <div className="gridConteiner">
                    <div className=" stak">
                            <h4>Айдентика</h4>
                            <h4>Визуальный язык</h4>
                            <h4>Платформа</h4>
                            <h4>Логотипинг</h4>
                            <h4>НЕЙМИНГ</h4>
                            <h4>упаковка</h4>
                    </div>
                    <div className="stakDesc">
                        <p>Поговорим о вашей целевой аудитории, которой мы будем сопереживать, чтобы почувствовать её лучше. Найдем характерные черты продукта, его уникальные свойства и смыслы, чтобы в последующем приступить к визуальной части в правильном векторе.</p>
                    </div>
                </div>
            </Competihon>
            <Competihon data-aos={"fade-up"}>
                <h5>
                    <span>
                    Визуал
                    </span>
                    Мы очень любим делать красиво ❤️ Можем нарисовать, а можем и затридешить иллюстрацию для сайта или моушена.
                </h5>
                <div className="gridConteiner">
                    <div className=" stak">
                            <h4>3Д-графика </h4>
                            <h4>Иллюстрация</h4>
                            <h4>Моушен ролики</h4>
                            <h4>пиктограммы</h4>
                    </div>
                    <div className="stakDesc">
                        <p>Придумаем крутую картинку — или анимацию — как отдельный визуал или часть одного продукта. От небольшого видео для инсты до полноценной рекламной кампании.</p>
                    </div>
                </div>
            </Competihon>
            <Competihon data-aos={"fade-up"}>
                <h5>
                    <span>
                    Диджитал
                    </span>
                    Осуществляем разработку любых веб-продуктов.
                </h5>
                <div className="gridConteiner">
                    <div className=" stak">
                            <h4>интерфейсы</h4>
                            <h4>промо сайты</h4>
                            <h4>лендинги</h4>
                            <h4>платформы</h4>
                            <h4>моб приложения</h4>
                            <h4>интернет-магазины</h4>
                    </div>
                    <div className="stakDesc">
                        <p>Поговорим о вашей целевой аудитории, которой мы будем сопереживать, чтобы почувствовать её лучше. Найдем характерные черты продукта, его уникальные свойства и смыслы, чтобы в последующем приступить к визуальной части в правильном векторе.</p>
                    </div>
                    <div className="stakDesc">
                        <p>Мы внимательно следим за тем, как развиваются технологии и постоянно прокачиваемся в навыках.</p>
                    </div>
                </div>
            </Competihon>
            <Competihon data-aos={"fade-up"}>
                <h5>
                    <span>
                    Реклама
                    </span>
                    Создадим креативный key visual и слоган для рекламной кампании.
                </h5>
                <div className="gridConteiner">
                    <div className=" stak">
                            <h4>БАННЕРЫ</h4>
                            <h4>моушен ролики</h4>
                            <h4>key visual </h4>
                            <h4>рекламный слоган</h4>
                    </div>
                    <div className="stakDesc">
                        <p>Осилим любой медиа-план, подготовим материалыдля размещения на выбранных площадках и поможем вовлечь новую аудиторию.</p>

                    </div>
                </div>
            </Competihon>
        </div>
        <div>
            <TextAboutCentr>
                <h6>Мы очень любим то, что делаем и всегда поможем тем, кто в нас нуждается. Учитываем задачи как бизнеса, так и пользователей продукта. Строим коммуникацию, подтягиваем визуал к смыслам и делаем все технически правильно</h6>
            </TextAboutCentr>
        </div>
        </div>
        </DivAbout>
        </>
    )
}

export default About;