/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from "layout/mixins/styles";

import * as Interface from "./styles.interfaces";

export const Card = styled.div`
  width: 500px;
  height: auto;
  padding: 20px;
  cursor: pointer;
  transition: .2s;
  min-height: 350px;
  border-radius: 14px;
  background-color: white;
  border: 1px solid #f2f2f2;
  box-shadow: 0 5px 23px rgba(0, 0, 0, 0.07);
  ${flex({ direction: 'column', alignY: 'start', alignX: 'space-between' })}
  &:hover {
    transition: .2s;
    border: 1px solid #d7d7d7;
    transform: translateY(-5px);
  }
`;

export const ContainerMain = styled.div`
  width: 100%;
  ${flex({ direction: 'row', alignY: 'start', alignX: 'space-between' })}
`;

export const Content = styled.div`
  margin-right: 20px;
  width: calc(100% / 1.5);
  ${flex({ direction: 'column', alignY: 'start', alignX: 'space-between' })}
`;

export const Title = styled.h4`
  color: #3f3e3e;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export const Description = styled.span`
  color: gray;
  font-size: 14.5px;
  text-align: start;
`;

export const ContainerPrice = styled.div`
  width: 133px;
  height: 100%;
  ${flex({ direction: 'column', alignY: 'center', alignX: 'center' })}
`;

export const ImageProduct = styled.div<Interface.ImageProductProps>`
  width: 100%;
  height: 113px;
  border-radius: 10px;
  background-size: cover;
  border: 4px solid #e7e7e7;
  background-position: 50% 50%;
  background-image: url(${props => props.src});
`;

export const Price = styled.span`
  margin-top: 15px;
  font-size: 1.5rem;
`;

export const ServePeople = styled.span`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'center' })}
`;
