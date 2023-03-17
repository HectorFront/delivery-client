/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from "layout/mixins/styles";
/** @name External */
import Colors from 'layout/vars/colors';

import * as Interface from './styles.interfaces';

export const Button = styled.button`
  border-radius: 50px;
  background-color: white;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'center' })}
  &:hover {
    opacity: .7;
  }
  &:focus {
    opacity: 1;
    color: white;
    box-shadow: none;
    background-color: ${Colors.LIGHT};
  }
`;

export const Item = styled.li.attrs({
  className: 'dropdown-item d-flex flex-row align-items-center justify-content-between'
})<Interface.DropdownItemProps>`
  ${props => props.selected && 
      `
       color: white;
       background-color: #181818;
       &:hover {
         color: white;
         background-color: #181818;
       }
      `
  }
  &:active, &:focus {
    background-color: ${Colors.DEFAULT} !important;
  }
`;