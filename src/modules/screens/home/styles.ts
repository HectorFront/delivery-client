/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from "layout/mixins/styles";

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

export const Topic = styled.h2`
  margin: 0;
  width: 100%;
  color: #3f3e3e;
  font-weight: bold;
  font-size: 1.5rem;
  position: relative;
  padding: 32px 20px 20px 0;
`;

export const List = styled.div`
  gap: 20px;
  width: 100%;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'flex-start', wrap: 'wrap' })}
`;
