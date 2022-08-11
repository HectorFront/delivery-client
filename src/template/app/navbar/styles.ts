/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex, hideDisplay} from 'layout/mixins/styles';
/** @name External */
import zIndex from "layout/vars/zIndex";

const BREAKPOINT_HD = 1555;
const BREAKPOINT_TABLET = 600;

export const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg bg-white'
})`
  width: 100%;
  padding: 25px;
  z-index: ${zIndex.fixed};
  background-color: white;
  position: fixed !important;
  ${flex({ wrap: 'wrap', direction: 'row', alignY: 'center', alignX: 'space-between' })};

  @media (max-width: ${BREAKPOINT_HD}px) {
    position: relative !important;
  }
  
  @media (max-width: ${BREAKPOINT_TABLET}px) {
    padding: 25px 15px;
  }
`;

export const ContainerStore = styled.div`
  transition: .2s;
  padding-left: 190px;
  ${flex({ wrap: 'wrap', direction: 'row', alignY: 'center' })};

  @media (max-width: ${BREAKPOINT_HD}px) {
    padding-left: 0;
    transition: .2s;
    margin-bottom: 20px;
  }
`;

export const ContainerLogo = styled.div`
  z-index: 2;
  top: -5px;
  left: 20px;
  padding: 5px;
  width: 150px;
  height: 150px;
  transition: .2s;
  position: absolute;
  border-radius: 50%;
  border: 4px solid #e7e7e7;
  box-shadow: 0 1px 6px 2px #b9b9b9;
  background-color: rgba(255, 255, 255, 0.53);
  
  @media (max-width: ${BREAKPOINT_HD}px) {
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    transition: .2s;
    margin-right: 20px;
    position: relative;
    margin-bottom: 10px;
    border: 2px solid #e7e7e7;
  }
`;

export const Logo = styled.img`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ContentStore = styled.div`
  ${flex({ wrap: 'wrap', direction: 'column', alignY: 'start', alignX: 'flex-start' })};
`;

export const NameStore = styled.h1`
  font-size: 40px;
  transition: .2s;
  font-weight: bold;

  @media (max-width: ${BREAKPOINT_TABLET}px) {
    font-size: 30px;
    transition: .2s;
  }
`;

export const LocationStore = styled.span`
  font-size: 16px;
`;

export const ContainerNavigations = styled.div`
  ${flex({ wrap: 'wrap', direction: 'row', alignY: 'center' })};
`;

export const ContainerLinks = styled.div`
  margin-right: 50px;
  border-radius: 50px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  ${flex({ wrap: 'wrap', direction: 'row', alignY: 'center', alignX: 'space-between' })};

  @media (max-width: ${BREAKPOINT_HD}px) {
    box-shadow: none;
    margin-bottom: 15px;
    justify-content: start;
  }
`;