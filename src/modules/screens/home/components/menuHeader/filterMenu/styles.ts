/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex, textEllipsis} from 'layout/mixins/styles';

export const Container = styled.div`
  height: 100%;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'space-around' })};
`;

export const Content = styled.div`
  ${textEllipsis()};
  ${flex({ direction: 'column' })};
`;