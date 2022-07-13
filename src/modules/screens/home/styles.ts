/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex, textEllipsis} from 'layout/mixins/styles';

export const Content = styled.main`
  padding: 60px 150px;
`;

export const ContainerWayReceiving = styled.div`
  height: 100%;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'space-around' })};
`;

export const ContentWayReceiving = styled.div`
  ${textEllipsis()};
  ${flex({ direction: 'column' })};
`;

export const ContainerPreparationTime = styled.div`
  height: 100%;
  color: gray;
  ${flex({ direction: 'column', alignY: 'center', alignX: 'center' })}
`;