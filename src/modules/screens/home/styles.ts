/** @name Dependencies */
import styled from 'styled-components';

const BREAKPOINT_HD = 1199;

export const Content = styled.main`
  padding: 60px 150px;
  @media(max-width: ${BREAKPOINT_HD}px) {
    padding: 60px 50px;
  }
`;
