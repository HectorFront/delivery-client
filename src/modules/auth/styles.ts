/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import { flex } from 'mixins/global';

export const Container = styled.div`
  background-color: white;
  ${flex({ wrap: 'wrap', direction: 'row', alignY: 'center', alignX: 'center' })}
`;