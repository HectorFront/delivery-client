/** @name Styled */
import styled from 'styled-components';
/** @name External */
import Colors from 'constants/client/colors';

export const ContainerAuth = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Border = styled.div`
  left: -10%;
  height: 100%;
  position: absolute;
  width: calc(100% / 2);
  transform: skew(-20deg);
  background-color: ${Colors.DEFAULT};
`;