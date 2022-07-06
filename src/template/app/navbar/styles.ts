/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from 'layout/mixins/styles';
/** @name External */
import Colors from 'layout/vars/colors';

export const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg bg-white'
})`
  padding: 25px;
  background-color: white;
  ${flex({ wrap: 'wrap', direction: 'row', alignY: 'center', alignX: 'space-between' })};
`;

export const ContainerStore = styled.div`
  padding-left: 190px;
  ${flex({ wrap: 'wrap', direction: 'row', alignY: 'center' })};
`;

export const ContainerLogo = styled.div`
  z-index: 2;
  top: -5px;
  left: 20px;
  padding: 5px;
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
  border: 4px solid #e7e7e7;
  box-shadow: 0 1px 6px 2px #b9b9b9;
  background-color: rgba(255, 255, 255, 0.53);
`;

export const Logo = styled.img`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ContentStore = styled.div`
  ${flex({ wrap: 'wrap', direction: 'column', alignY: 'start', alignX: 'start' })};
`;

export const NameStore = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

export const LocationStore = styled.span`
  font-size: 16px;
`;

export const ContainerLinks = styled.div`
  ${flex({ wrap: 'wrap', direction: 'row', alignY: 'center', alignX: 'space-between' })};
`;

export const DropdownLinks = styled.div`

`;