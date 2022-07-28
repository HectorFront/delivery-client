/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from 'layout/mixins/styles';

export const ContainerPreparationTime = styled.div`
  height: 100%;
  color: gray;
  ${flex({ direction: 'column', alignY: 'center', alignX: 'center' })}
`;