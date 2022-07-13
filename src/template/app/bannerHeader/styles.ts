/** @name Dependencies */
import styled from 'styled-components';
/** @name External */
import Colors from 'layout/vars/colors';

import * as Interface from "./styles.interfaces";

export const ContainerOpacity = styled.div`
  width: 100%;
  height: 300px;
  background-color: #720000;
`;

export const Banner = styled.div<Interface.BannerProps>`
  width: 100%;
  height: 100%;
  opacity: .7;
  background-size: cover;
  background-color: black;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: url(${props => props.image});
`;