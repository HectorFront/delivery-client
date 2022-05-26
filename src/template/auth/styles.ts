/** @name Styled */
import styled from 'styled-components';
/** @name External */
import Colors from 'layout/vars/colors';
/** @name Images */
import Shapes from 'assets/svg/shapes.svg';

const BREAKPOINT_HD = 1199;

const hideDisplayHD = () => `
  @media(max-width: ${BREAKPOINT_HD}px) {
    display: none;
  }
`;

export const ContainerAuth = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: white;
  background-image: url(${Shapes});
`;

export const Border = styled.div`
  left: -10%;
  height: 100%;
  display: block;
  position: absolute;
  width: calc(100% / 2);
  transform: skew(-20deg);
  background-color: ${Colors.DEFAULT};
  ${hideDisplayHD()}
`;

export const ImgFood = styled.img`
  right: 0;
  width: auto;
  height: 100%;
  position: absolute;
  ${hideDisplayHD()}
`;