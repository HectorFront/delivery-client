/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex, textEllipsis} from 'layout/mixins/styles';

export const ContainerWayReceiving = styled.div`
  height: 100%;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'space-around' })};
`;

export const ContentWayReceiving = styled.div`
  ${textEllipsis()};
  ${flex({ direction: 'column' })};
`;