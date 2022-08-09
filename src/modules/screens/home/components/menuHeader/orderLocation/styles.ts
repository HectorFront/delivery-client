/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from 'layout/mixins/styles';

export const Container = styled.div`
  height: 100%;
  cursor: pointer;
  margin-top: 30px;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'space-between' })};
  &:hover {
    opacity: .8;
  }
`;

export const Content = styled.div`
  ${flex({ direction: 'column', alignY: 'center', alignX: 'flex-start' })};
`;

export const Title = styled.span`
  color: #cecece;
  text-transform: uppercase;
`;

export const Location = styled.span`
  color: #797979;
  font-weight: bold;
`;