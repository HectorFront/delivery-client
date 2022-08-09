/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from "layout/mixins/styles";

export const Card = styled.div`
  width: 500px;
  height: 300px;
  z-index: 1000;
  padding: 20px;
  cursor: pointer;
  transition: .2s;
  border-radius: 14px;
  background-color: white;
  border: 1px solid #f2f2f2;
  box-shadow: 0 5px 23px rgba(0, 0, 0, 0.07);

  ${flex({direction: 'column', alignY: 'center', alignX: 'space-between'})}
  &:hover {
    transition: .2s;
    border: 1px solid #d7d7d7;
  }
`;