import styled from 'styled-components';
import { animationDuration, opacityShow, opacityShowDelayed, translateShowTop, translateShowBottom } from "../../animation";

export const TopBlockLeftH1 = styled.h1 `

opacity:0; /* тут нужно прописывать то же значение, что будет в первом кадре анимации*/
    animation-name: ${opacityShow};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;


    color: #E7ECF0;
    padding-left: 0px;
    max-width: 900px;
`;

export const TopBlockLeftP= styled.p `


        opacity:0;
        animation-name: ${opacityShowDelayed};
        animation-duration: ${animationDuration};
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;


width: 417px;
text-transform: initial;
padding-left: 0px;
    height: 71px;
margin-top: 35px;
.glob {
  position: absolute;
    margin-left: 4px;
}

`;

export const FooterContactMail= styled.div `



position: absolute;
bottom: 150px;
    @media (max-width: 1681px) {
        bottom: 150px;
    }
    @media (max-width: 1441px) {
        bottom: 100px;
    }
    @media (max-width: 1281px) {
        bottom: 100px; 
    }
    @media (max-width: 1025px) {
        bottom: 100px;
    }
p {


        opacity:0;
        animation-name: ${opacityShowDelayed};
        animation-duration: ${animationDuration};
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;


font-style: normal;
letter-spacing: -0.02em;
text-transform: uppercase;
font-family:  ${({ theme }) => theme.fontOb600};
color: #989B9E;

}

h1 {
  opacity:0; /* тут нужно прописывать то же значение, что будет в первом кадре анимации*/
    animation-name: ${opacityShow};
    animation-duration: ${animationDuration};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
}
`;

export const FormBlock = styled.div `




padding: 0px;
padding-top: 91px;
max-width: 720px;
${props => (props.blur ? "filter: blur(3px);" : "filter: blur(0px);")}
${props => (props.blur ? "pointer-events: none;" : "pointer-events: auto;")}
${props => (props.blur ? "opacity: 0.55;" : "opacity: 1;")}
form {

  
>div {
display: flex;
    justify-content: space-between;
}
button {
background: #fff0;
border: none;
font-size: 14px;
line-height: 13px;
letter-spacing: -0.02em;
text-transform: uppercase;
color: #E7ECF0;
font-family:  ${({ theme }) => theme.fontOb600};
@media (max-width: 1681px) {
      font-size: 14px;
      line-height: 13px;
    }
    @media (max-width: 1441px) {
      font-size: 13px;
      line-height: 13px;
    }
    @media (max-width: 1281px) {
      font-size: 13px;
      line-height: 13px;
    }
    @media (max-width: 1025px) {
      font-size: 13px;
      line-height: 13px;
    }
}
}
`;

export const PoleCommit = styled.div `
margin-top: 60px;

textarea {
  
    width: 100%;
    background: #fff0;
    border: none;
letter-spacing: -0.02em;
font-family:  ${({ theme }) => theme.fontOb400};
color: #989B9E;
    font-size: 16px;
line-height: 26px;
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
textarea::placeholder {
font-weight: normal;
font-size: 16px;
/* identical to box height, or 81% */
font-family:  ${({ theme }) => theme.fontOb400};
letter-spacing: -0.02em;

/* site / support grey */

color: #989B9E;
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
`;

export const RowForm = styled.div `
    
     
input {
    background: #fff0;
    border: none;
    border-bottom: 1px solid #989B9E;
    margin-right: 14px;
    font-size: 16px;
    letter-spacing: -0.02em;
    font-family:  ${({ theme }) => theme.fontOb400};
    color: #989B9E;
    width: 230px;
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
.Required {
border-bottom: 1px solid #79FF4A!important;
}
input::placeholder {
font-weight: normal;
font-size: 16px;
/* identical to box height, or 81% */
font-family:  ${({ theme }) => theme.fontOb400};
letter-spacing: -0.02em;
color: #989B9E;
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


`;

export const InputFile = styled.div `
margin-top: 20px;
`

export const ContentContact = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;

export const DivLinkInput = styled.div `
position: absolute;
`

export const DivLinkInputA = styled.a `
margin-right: 10px;
font-size: 10px;
line-height: 8px;
letter-spacing: -0.02em;
text-transform: uppercase;
color: ${props => (props.active ? "#fff" : "#989B9E")};
font-family:  ${({ theme }) => theme.fontOb400};
padding-bottom: 16px;
`;

export const DivFile = styled.div `

margin-bottom: 40px;

.down {
    font-size: 12px;
line-height: 14px;
text-align: center;
letter-spacing: -0.02em;
font-family:  ${({theme}) => theme.fontOb300};
color: #C4C4C4;
border: 1px dashed #C4C4C4;
box-sizing: border-box;
border-radius: 4px;
    cursor: pointer;
    padding: 11px 26px;
}


input:focus + label,
.down:hover {
background-color: #383838;
}

.downFile {
font-size: 10px;
line-height: 8px;
letter-spacing: -0.02em;
text-transform: uppercase;
color: #989B9E;
font-family:  ${({ theme }) => theme.fontOb400};
display: flex;
border: 1px dashed #fff0;
box-sizing: border-box;
border-radius: 4px;
    cursor: pointer;
    padding: 7px 0px;

    img {  
        position: relative;
    left: 5px;
    top: -1.6px;
    opacity:0.5;

    }
    &:hover img{
      opacity:1;
    }
}

input:focus + label {
 outline: 1px dotted #000;
 outline: -webkit-focus-ring-color auto 5px;
}

input + label {
  cursor: pointer; /* "hand" cursor */
}



input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
`


export const DivSub = styled.div `
    display: flex;
    justify-content: normal!important;
p {
    font-size: 12px;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: #79FF4A;
    text-transform: initial;
    margin-left: 30px;
    @media (max-width: 1681px) {
    font-size: 10px;
    line-height: 24px;
    }
    @media (max-width: 1441px) {
    font-size: 10px;
    line-height: 25px;
    }
    @media (max-width: 1281px) {
      font-size: 9px;
    line-height: 31px;
    }
    @media (max-width: 1025px) {
      font-size: 8px;
    line-height: 34px;
    }
}
`;
