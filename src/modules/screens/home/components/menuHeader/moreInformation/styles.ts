/** @name Dependencies */
import styled from 'styled-components';
/** @name External */
import Colors from 'layout/vars/colors';

export const ContainerMoreInformation = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: flex-start;
`;

export const TextMoreInformation = styled.span`
  color: ${Colors.SECONDARY};
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`;