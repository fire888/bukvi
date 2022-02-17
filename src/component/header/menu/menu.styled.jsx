import styled from 'styled-components';

export const StyledMenu = styled.nav`
display: flex;     
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: left;
  background: #000;
  padding: 21px;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 1s;
  opacity: ${({ open }) => open ? ' 1' : ' 0'};
   // z-index: 
  pointer-events: ${({ open }) => open ? ' auto' : 'none'};
   z-index: 999;
    transform: translateX(-21px);




  a {
    color: ${({ theme }) => theme.colorText};
    font-family: ${({ theme }) => theme.fontRo400};
    font-size: 110px;
    letter-spacing: -0.02em;
    color: #E7ECF0;
    text-decoration: none;
    line-height: 110%;
    margin: 25px 0;
    text-align: center;
    transition: 1s;
    &:hover {
      text-shadow: 0px 0px 15px #FFFFFF;
      color: #fff;
      transition: 0.3s;
    }
    @media (max-width: 768px) {
      font-size: 72px;
      margin: 15px 0;
    }
    @media (max-width: 510px) {
      font-size: 62px;
      margin: 15px 0;
    }
  }

  a:nth-child(1) {
    width: 500px; 
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 400px; 
      margin: 0 auto;
    }
    @media (max-width: 510px) {
      width: 215px;
      margin: 0 auto;
    }
  }
  a:nth-child(2) {
    width: 315px; 
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 315px; 
      margin: 0 auto;
    }
    @media (max-width: 510px) {
      width: 215px;
      margin: 0 auto;
    }
  }
  a:nth-child(3) {
    width: 800px; 
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 645px;
      margin: 0 auto;
    }
    @media (max-width: 510px) {
      width: 100%;
      margin: 0 auto;
    }
  }
  a:nth-child(4) {
    width: 430px;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 400px; 
      margin: 0 auto;
    }
    @media (max-width: 510px) {
      width: 215px;
      margin: 0 auto;
    }
  }
`;
