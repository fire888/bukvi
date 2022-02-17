import styled from 'styled-components';

export const StyledCursor = styled.div`
.cursor {
width: 56px;
height: 56px;
border-radius: 99px;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  //mix-blend-mode: difference;
  transition: all 150ms ease;
  transition-property:  opacity, background-color, transform, mix-blend-mode;
  background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.911458) 51.56%, rgba(255, 255, 255, 0) 67.56%), radial-gradient(50% 50% at 50% 50%, #FFFFFF 17.71%, rgba(255, 255, 255, 0.911458) 42.71%, rgba(255, 255, 255, 0) 100%);
}
.cursor--link-hovered {
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0.3;
}
.cursor--link-hovered--off {
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
}
.cursor--clicked {
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0.5;
}
 .cursor--hidden {
   opacity: 0;
 }
`;