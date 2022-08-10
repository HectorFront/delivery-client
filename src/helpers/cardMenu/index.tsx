/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import * as S from './styles';
/** @name External */
import {MaterialIcon} from "helpers";
import Colors from "layout/vars/colors";

const image = 'https://static-images.ifood.com.br/image/upload/t_low/pratos/08746e79-0fcd-4bd9-8487-52b2cb46fe81/202204012354_JALD_i.jpg';

export const CardMenu: ElementType = memo((_props): JSX.Element =>
  <S.Card>
      <S.ContainerMain>
          <S.Content>
              <S.Title>Frango Xadrez Pequeno Executivo + Coca-Cola Sem Açúcar</S.Title>
              <S.Description>
                  1/2 porção de yakimeshi nosso tradicional arroz soltinho refogado com flocos de ovos, cubinhos de
                  cenoura, apresuntado e cebolinha + 1/2 de generosos cubos de peito de frango com cebola, pimentão
                  verde e amendoim, servidos com nosso molho exclusivo à base do shoyu + Coca-Cola sem açucar lata.
              </S.Description>
          </S.Content>
          <S.ContainerPrice>
              <S.ImageProduct src={image}/>
              <S.Price>R$&nbsp;42,85</S.Price>
          </S.ContainerPrice>
      </S.ContainerMain>
      <S.ServePeople>
          <MaterialIcon
              pointer
              size={25}
              icon='check_circle'
              color={Colors.DEFAULT}
          />&nbsp;
          Serviria para 2 pessoas
      </S.ServePeople>
  </S.Card>
);