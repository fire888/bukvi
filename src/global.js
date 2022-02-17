import { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    background: #151617;
    cursor: none;
    input {outline:none;}
    textarea {outline:none;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    
    @media (max-width: 768px) {
      background: #000;
    }
  }

::-webkit-scrollbar { /* chrome based */
    width: 0px;  /* ширина scrollbar'a */
    background: transparent;  /* опционально */
}

  *, *::after, *::before {
    box-sizing: border-box;
  }
  /* Указываем box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
  padding: 0;
}

canvas {

  top: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
a,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  cursor: none;
  -webkit-font-smoothing: antialiased;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  overflow-x: hidden;

  
  ::before {
    content: "";
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://wmpics.pics/di-1IEO.png');
    animation: 0.2s infinite noise;
    pointer-events: none;
    opacity: 0.7;
    z-index:9999;
  }
}

@keyframes noise {
  0%, 100% {
    background-position: 0 0;
  }
  10% {
    background-position: -5% -10%;
  }
  20% {
    background-position: -15% 5%;
  }
  30% {
    background-position: 7% -25%;
  }
  40% {
    background-position: 20% 25%;
  }
  50% {
    background-position: -25% 10%;
  }
  60% {
    background-position: 15% 5%;
  }
  70% {
    background-position: 0% 15%;
  }
  80% {
    background-position: 25% 35%;
  }
  90% {
    background-position: -10% 10%;
  }
}

.footer {
    position: absolute;
    z-index: 999;
    margin: 0px auto;
    margin-top: 100px;
    bottom: 15px;
    @media (max-width: 1681px) {
      bottom: 15px;
    }
    @media (max-width: 1441px) {
      bottom: 15px;
    }
    @media (max-width: 1281px) {
      bottom: 15px;
    }
    @media (max-width: 1025px) {
      bottom: 15px;
    }
}

.myProgConteiner {
  position: relative;
  transition:0.3s;
  &:hover {
            transition:0.3s;
            background-position: 55% 427%;
            text-shadow: 0px 0px 15px #FFFFFF;
          }
}
.myProg {
  background: url('https://res.cloudinary.com/kreamsoda/image/upload/v1607524195/Line_1.svg');
    background-position: 55% 107%;
    background-size: 104%;
    padding-bottom: 6px;
    background-repeat: repeat-x;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    opacity: 1;
    position: absolute;
    width: 101%;
    height: 100%;
    top: 11px;
    left: 0;
          &:hover {
            transition:0.3s;
            opacity: 0;
          }
          
    }

.myProgCasesConteiner {
  position: relative;
  transition:0.3s;
  &:hover {
            transition:0.3s;
            background-position: 55% 427%;
            text-shadow: 0px 0px 15px #FFFFFF;
          }
}

.myProgCases {
    background: url('https://res.cloudinary.com/kreamsoda/image/upload/v1607524195/Line_1.svg');
    background-position: 60% 109%;
    background-size: 104%;
    padding-bottom: 0px;
    background-repeat: repeat-x;
    transition: 0.3s;
    position: absolute;
    width: 101%;
    height: 155%;
    top: 0px;
    left: 0;
          &:hover {
            transition:0.3s;
            opacity: 0;
          }
    }

    .policy {
      width: 95px;
    }

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Указываем понятную периодичность в потоке данных у article*/
article > * + * {
  margin-top: 1em;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
  cursor: none;
}


// base css tags !!! --------------------------------------------------------------------------------

.conteiner {
  max-width: ${({ theme }) => theme.conteiner1920};
  margin:auto;
    @media (max-width: 1681px) {
      max-width: ${({ theme }) => theme.conteiner1680};
      margin:auto;
    }
    @media (max-width: 1441px) {
      max-width: ${({ theme }) => theme.conteiner1440};
      margin:auto;
    }
    @media (max-width: 1281px) {
      max-width: ${({ theme }) => theme.conteiner1280};
      margin:auto;
    }
    @media (max-width: 1025px) {
      max-width: ${({ theme }) => theme.conteiner1024};
      margin:auto;
    }
}



.tableHome {
      display		: table;
      height: 88vh;
      margin: auto;
    }

.tableDiv {
  display		: table-cell;
	  vertical-align	: middle;
    margin: auto;

}
.gridConteiner {
  display: grid;
  grid-Template-Columns: ${({ theme }) => theme.gridDef1920};
    @media (max-width: 1681px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDef1680};
    }
    @media (max-width: 1441px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDef1440};
    }
    @media (max-width: 1281px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDef1280};
    }
    @media (max-width: 1025px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDef1024};
    }
}

.gridConteinerCases {
  display: grid;
  grid-Template-Columns: ${({ theme }) => theme.gridDefCases1920};
    @media (max-width: 1681px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDefCases1680};
    }
    @media (max-width: 1441px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDefCases1440};
    }
    @media (max-width: 1281px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDefCases1280};
    }
    @media (max-width: 1025px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDefCases1024};
    }
}

.gridConteinerCasesName {
  display: grid;
  grid-Template-Columns: ${({ theme }) => theme.gridDefCasesName1920};
  @media (max-width: 1681px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDefCasesName1680};
    }
    @media (max-width: 1441px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDefCasesName1440};
    }
    @media (max-width: 1281px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDefCasesName1280};
    }
    @media (max-width: 1025px) {
      display: grid;
      grid-Template-Columns: ${({ theme }) => theme.gridDefCasesName1024};
    }
}

h1 {
font-size: ${({ theme }) => theme.size72};
color:  ${({ theme }) => theme.colorText};
letter-spacing: -0.02em;
font-family:  ${({ theme }) => theme.fontRo500};
font-weight: 400;
line-height: 75px;
    @media (max-width: 1681px) {
      font-size: 56px;
      line-height: 99.3%;
    }
    @media (max-width: 1441px) {
      font-size: 56px;
      line-height: 99.3%;
    }
    @media (max-width: 1281px) {
      font-size: 42px;
      line-height: 100%;
    }
    @media (max-width: 1025px) {
      font-size: 36px;
      line-height: 100%;
    }
}

h2 {
font-size: ${({ theme }) => theme.size14};
color:  ${({ theme }) => theme.colorText};
letter-spacing: -0.02em;
font-family:  ${({ theme }) => theme.fontOb500};
text-transform: uppercase;
font-weight: 400;
    @media (max-width: 1681px) {
      font-size: 12px;
    }
    @media (max-width: 1441px) {
      font-size: 12px;
    }
    @media (max-width: 1281px) {
      font-size: 12px;
    }
    @media (max-width: 1025px) {
      font-size: 12px;
    }
}

h3 {
font-size: ${({ theme }) => theme.size16};
color:  ${({ theme }) => theme.colorText};
letter-spacing: -0.02em;
font-family:  ${({ theme }) => theme.fontOb400};
font-weight: 300;
    @media (max-width: 1681px) {
      font-size: 13px;
      line-height: 17px;
    }
    @media (max-width: 1441px) {
      font-size: 13px;
      line-height: 17px;
    }
    @media (max-width: 1281px) {
      font-size: 13px;
      line-height: 17px;
    }
    @media (max-width: 1025px) {
      font-size: 11px;
      line-height: 14px;
    }
}

h4 {
font-size: ${({ theme }) => theme.size12};
color:  ${({ theme }) => theme.colorText};
letter-spacing: -0.02em;
font-family:  ${({ theme }) => theme.fontOb400};
font-weight: 300;
    @media (max-width: 1681px) {
      font-size: 10px;
    }
    @media (max-width: 1441px) {
      font-size: 10px;
    }
    @media (max-width: 1281px) {
      font-size: 10px;
    }
    @media (max-width: 1025px) {
      font-size: 10px;
    }
}

h5 {
    font-size: 62px;
    color: #E7ECF0;
    letter-spacing: -0.02em;
    font-family:  ${({ theme }) => theme.fontRo500};
    font-weight: 400;
    line-height: 100%;
    @media (max-width: 1681px) {
      font-size: 52px;
    }
    @media (max-width: 1441px) {
      font-size: 42px;
    }
    @media (max-width: 1281px) {
      font-size: 37px;
    }
    @media (max-width: 1025px) {
      font-size: 52px;
    }
}

h6 {
  font-size: 40px;
  line-height: 130%;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #E7ECF0;
  font-family:  ${({ theme }) => theme.fontOb400};
  font-weight: 300;
    @media (max-width: 1681px) {
      font-size: 40px;
    }
    @media (max-width: 1441px) {
      font-size: 32px;
    }
    @media (max-width: 1281px) {
      font-size: 32px;
    }
    @media (max-width: 1025px) {
      font-size: 28px;
    }
}

.H7 {
  
}

p {
font-size: ${({ theme }) => theme.size16};
color:  ${({ theme }) => theme.colorText};
letter-spacing: -0.02em;
font-family:  ${({ theme }) => theme.fontOb400};
font-weight: 300;
text-transform: uppercase;

@media (max-width: 1681px) {
      font-size: 14px;
    }
    @media (max-width: 1441px) {
      font-size: 14px;
    }
    @media (max-width: 1281px) {
      font-size: 14px;
    }
    @media (max-width: 1025px) {
      font-size: 14px;
    }
}

}


// ----------------------------------------------------------------------------------------------------


/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
`;

