/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from 'layout/mixins/styles';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const SubMenu = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'space-between', wrap: 'wrap' })};
`;