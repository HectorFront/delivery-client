/** @name Dependencies */
import styled from 'styled-components';

const BREAKPOINT_HD = 1199;
const BREAKPOINT_TABLET = 600;

export const Content = styled.main`
  padding: 60px 150px;
  @media(max-width: ${BREAKPOINT_HD}px) {
    padding: 60px 50px;
  }

  @media(max-width: ${BREAKPOINT_TABLET}px) {
    padding: 60px 15px;
  }
`;
