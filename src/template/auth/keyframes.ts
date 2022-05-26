/** @name Styled */
import styled from 'styled-components';
/** @name External */
import Colors from 'layout/vars/colors';
/** @name Keyframe */
import {floating} from 'layout/keyframes';

export const LogoFloating = styled.img`
  top: 50px;
  width: 120px;
  height: auto;
  right: 50px;
  padding: 10px;
  position: absolute;
  border-radius: 50%;
  transform: translatey(0);
  border: 5px solid ${Colors.SECONDARY};
  animation: ${floating} 6s ease-in-out infinite;
`;