import React, { useState } from "react";
import {Tabs, DivLineBagBut, DivLineBag, LinkGrid, DivCategoryLeft, ContentBlockImg, ContentBlockCases, NameCases, Tab,SliderCases, Content} from "./tabs.styled";
import bordAginc from '../../assets/img/Aginc/bord.png'
import bordStomix from '../../assets/img/Stomix/bord.png'
import bordOcto from '../../assets/img/Octo/caver.png'

import bordBasik from '../../assets/img/Basik/caver.png'
import bordHihaco from '../../assets/img/Hihaco/caver.png'
import bordChb from '../../assets/img/Chb/caver.png'

import bordUnion from '../../assets/img/Union/bord.png'
import bordComming from '../../assets/img/Comming/bord.png'
import { NavLink } from 'react-router-dom';
import { slideInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import {useSelector} from "react-redux";

 function Category() {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

   const [isShown1, setIsShown1] = useState("falseClass");
   const [isShown2, setIsShown2] = useState("falseClass");
   const [isShown3, setIsShown3] = useState("falseClass");
   const [isShown4, setIsShown4] = useState("falseClass");
   const [isShown5, setIsShown5] = useState("falseClass");
   const [isShown6, setIsShown6] = useState("falseClass");
   const [isShown7, setIsShown7] = useState("falseClass");
   const [isShown8, setIsShown8] = useState("falseClass");
   const [isShown9, setIsShown9] = useState("falseClass");
  //  const Xd = useSelector(store => store.MousX.x)
  //  const Yd = useSelector(store => store.MousX.y)



  return (

    <SliderCases className="gridConteinerCases">

      {/*<Tabs>*/} 
      {/*  <Tab onClick={handleClick} active={active === 0} id={0}>*/}
      {/*    <h2 onClick={handleClick} active={active === 0} id={0}> branding & identity </h2>*/}
      {/*    <h3>Including rebranding projects, solo logotypes and brand facelifting</h3>*/}
      {/*  </Tab>*/}
      {/*  <Tab onClick={handleClick} active={active === 1} id={1}>*/}
      {/*    <h2 onClick={handleClick} active={active === 1} id={1} > creative concept </h2>*/}
      {/*    <h3>Including rebranding projects, solo logotypes and brand facelifting</h3>*/}
      {/*  </Tab>*/}
      {/*  <Tab onClick={handleClick} active={active === 2} id={2}>*/}
      {/*    <h2 onClick={handleClick} active={active === 2} id={2} > User interface </h2>*/}
      {/*    <h3>Including rebranding projects, solo logotypes and brand facelifting</h3>*/}
      {/*  </Tab>*/}
      {/*  <Tab onClick={handleClick} active={active === 3} id={3}>*/}
      {/*    <h2 onClick={handleClick} active={active === 3} id={3} > web design </h2>*/}
      {/*    <h3>Including rebranding projects, solo logotypes and brand facelifting</h3>*/}
      {/*  </Tab>*/}
      {/*  <Tab onClick={handleClick} active={active === 4} id={4}>*/}
      {/*    <h2 onClick={handleClick} active={active === 4} id={4}>  digital dev</h2>*/}
      {/*    <h3>Including rebranding projects, solo logotypes and brand facelifting</h3>*/}
      {/*  </Tab>*/}
      {/*  <Tab onClick={handleClick} active={active === 5} id={5}>*/}
      {/*    <h2 onClick={handleClick} active={active === 5} id={5} >3d visuals</h2>*/}
      {/*    <h3>Including rebranding projects, solo logotypes and brand facelifting</h3>*/}
      {/*  </Tab>*/}
      {/*  <Tab onClick={handleClick} active={active === 6} id={6}>*/}
      {/*    <h2 onClick={handleClick} active={active === 6} id={6}>promo</h2>*/}
      {/*    <h3>Including rebranding projects, solo logotypes and brand facelifting</h3>*/}
      {/*  </Tab>*/}
      {/*</Tabs>*/}

      <div>
        <Content active={active === 0}>
          <DivLineBag>-</DivLineBag>
          <DivLineBagBut>-</DivLineBagBut>
          <ContentBlockCases >
            <NavLink  to="/Cases/BASIK">
              <LinkGrid 
                  onMouseEnter={function(event){ setIsShown1("trueClass");}}
                  onMouseLeave={function(event){ setIsShown1("falseClass");}}
              className="gridConteinerCasesName">
                <DivCategoryLeft>
                  <p>УПАКОВКА</p>
                </DivCategoryLeft>
                <div
                  >
                    <span>BASIK 2020<br/><span className="year">2018</span></span><NameCases>Для поддержки здоровья и имунной системы</NameCases>
                </div>
              </LinkGrid>
            </NavLink>

            <NavLink  to="/Cases/Chb">
              <LinkGrid 
                  onMouseEnter={function(event){ setIsShown2("trueClass");}}
                  onMouseLeave={function(event){ setIsShown2("falseClass");}}
              className="gridConteinerCasesName">
                <DivCategoryLeft>
                  <p>БРЕНДИНГ</p> 
                  <p>АРТ-ДИРЕКШН</p>
                  <p>3d</p>
                  <p>ГАЙДЛАЙНЫ</p>
                </DivCategoryLeft>
                <div>
                    <span>Чёрная<br/>Бухгалтерия<br/><span className="year">2020</span></span><NameCases>Простой бухгал- терский сервис, где всё понятно</NameCases>
                </div>
              </LinkGrid>
            </NavLink>

            <NavLink  to="/Cases/AgentstStudio">
              <LinkGrid 
                  onMouseEnter={function(event){ setIsShown3("trueClass"); }}
                  onMouseLeave={function(event){ setIsShown3("falseClass"); }}
              className="gridConteinerCasesName">
                <DivCategoryLeft>
                  <p>веб-дизайн</p> 
                  <p>интерфейсы</p>
                </DivCategoryLeft>
                <div>
                    <span>Agentstudios<br/><span className="year">2019</span></span><NameCases>Агрегатор фотостудий в Москве</NameCases>
                </div>
              </LinkGrid>
            </NavLink>

            <NavLink  to="/Cases/Hihaco">
              <LinkGrid 
                  onMouseEnter={function(event){ setIsShown4("trueClass");}}
                  onMouseLeave={function(event){ setIsShown4("falseClass");}}
              className="gridConteinerCasesName">
                <DivCategoryLeft>
                  <p>брендинг</p>
                  <p>упаковка</p>
                  <p>рекламные</p>
                  <p>материаы</p>
                </DivCategoryLeft>
                <div>
                    <span>Hi-haco <br/><span className="year">2019</span></span><NameCases>Дистрибьютор видеокарт на старте</NameCases>
                </div>
              </LinkGrid>
            </NavLink>

            <NavLink  to="/Cases/Stomx">
              <LinkGrid 
                  onMouseEnter={function(event){ setIsShown5("trueClass");}}
                  onMouseLeave={function(event){ setIsShown5("falseClass");}}
              className="gridConteinerCasesName">
                <DivCategoryLeft>
                  <p>interface</p>
                </DivCategoryLeft>
                <div
                  >
                    <span>Stomx<br/><span className="year">2019</span></span><NameCases>CRM стоматоло- гической клиники</NameCases>
                </div>
              </LinkGrid>
            </NavLink>

            <NavLink  to="/Cases/Union">
              <LinkGrid 
                  onMouseEnter={function(event){ setIsShown6("trueClass");}}
                  onMouseLeave={function(event){ setIsShown6("falseClass");}}
              className="gridConteinerCasesName">
                <DivCategoryLeft>
                  <p>брендинг</p>
                  <p>интернет-магазин</p>
                  <p>рекламные</p>
                  <p>материалы</p>
                </DivCategoryLeft>
                <div
                  >
                    <span>Union<br/><span className="year">2019</span></span><NameCases>Магазин дизайнерских светильников</NameCases>
                </div>
              </LinkGrid>
            </NavLink>

            <NavLink  to="/Cases/Nebar">
              <LinkGrid 
                  onMouseEnter={function(event){ setIsShown7("trueClass");}}
                  onMouseLeave={function(event){ setIsShown7("falseClass");}}
              className="gridConteinerCasesName">
                <DivCategoryLeft>
                  <p>БРЕНДИНГ</p>
                  <p>3d</p>
                </DivCategoryLeft>
                <div
                  >
                    <span>Nebar <br/><span className="year">2019</span></span><NameCases>На теплоходе музыка играет, а я одна стою на берегу</NameCases>
                </div>
              </LinkGrid>
            </NavLink>

            <NavLink  to="/Cases/Octo">
              <LinkGrid 
                  onMouseEnter={function(event){ setIsShown8("trueClass");}}
                  onMouseLeave={function(event){ setIsShown8("falseClass");}}
              className="gridConteinerCasesName">
                <DivCategoryLeft>
                  <p>LOGO</p>
                  <p>naming</p>
                  <p>web-platform</p>
                  <p>interface</p>
                </DivCategoryLeft>
                <div
                  >
                    <span>Octo <br/><span className="year">2019</span></span><NameCases>Веб-платформа где обучают делать цифровой контент</NameCases>
                </div>
              </LinkGrid>
            </NavLink>

            <NavLink  to="/Cases/Octo">
              <LinkGrid 
                  onMouseEnter={function(event){ setIsShown9("trueClass");}}
                  onMouseLeave={function(event){ setIsShown9("falseClass");}}
              className="gridConteinerCasesName">
                <DivCategoryLeft>
                  <p>website</p>
                </DivCategoryLeft>
                <div
                  >
                    <span>Format <br/>Architects <br/><span className="year">2020</span></span><NameCases>Coming soon</NameCases>
                </div>
              </LinkGrid>
            </NavLink>

          </ContentBlockCases>
        </Content>
      </div>
      <ContentBlockImg>

          <div className={isShown1 + " imgCasesBasik fade-in"}>
            <div>
              <img 
              /* style={{transform: 'translateX('+Xd/27+'px) translateY('+Yd/27+'px) '}}  */
              src={bordBasik}/>
            </div>
          </div>

          <div className={isShown2 + " imgCasesChb fade-in"}>
            <div>
              <img 
              /* style={{transform: 'translateX('+Xd/27+'px) translateY('+Yd/27+'px) '}}   */
              src={bordChb}/>
            </div>
          </div>

          <div className={isShown3 + " imgCasesPad fade-in"}>
            <div>
            <img 
            /* style={{transform: 'translateX('+Xd/27+'px) translateY('+Yd/27+'px) '}}   */
            src={bordAginc}/>
            </div>
          </div>

          <div className={isShown4 + " imgCasesHihaco fade-in"}>
            <div>
              <img 
              /* style={{transform: 'translateX('+Xd/27+'px) translateY('+Yd/27+'px) '}}   */
              src={bordHihaco}/>
            </div>
          </div>
          
          <div className={isShown5 + " imgCasesPadPower fade-in"}>
            <div>
              <img 
              /* style={{transform: 'translateX('+Xd/27+'px) translateY('+Yd/27+'px) '}}  */
              src={bordStomix}/>
            </div>
          </div>

          <div className={isShown6 + " imgCasesPK fade-in"}>
            <div>
              <img 
              /* style={{transform: 'translateX('+Xd/27+'px) translateY('+Yd/27+'px) '}}   */
              src={bordUnion}/>
            </div>
          </div>

          <div className={isShown7 + " imgCasesPad fade-in"}>
            <div>
            <img 
            /* style={{transform: 'translateX('+Xd/27+'px) translateY('+Yd/27+'px) '}}   */
            src={bordAginc}/>
            </div>
          </div>

          <div className={isShown8 + " imgCasesPadPower fade-in"}>
            <div>
              <img 
              /* style={{transform: 'translateX('+Xd/27+'px) translateY('+Yd/27+'px) '}}   */
              src={bordOcto}/>
            </div>
          </div>

          <div className={isShown9 + " imgCasesPK fade-in"}>
            <div>
              <img 
              /* style={{transform: 'translateX('+Xd/27+'px) translateY('+Yd/27+'px) '}}  */
              src={bordComming}/>
            </div>
          </div>
          
      </ContentBlockImg>
    </SliderCases>
  );
}

export default Category;
