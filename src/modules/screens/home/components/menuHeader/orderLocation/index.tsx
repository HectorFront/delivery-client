/** @name Dependencies */
import {memo} from "react";
/** @name Internal */
import * as S from './styles';
import {MaterialIcon} from "components";
import Colors from "layout/vars/colors";

type OrderLocationProps = {
    height: number | undefined
}

export const OrderLocation = memo(({ height }: OrderLocationProps): JSX.Element =>
    <S.Container style={{ height }}>
        <MaterialIcon
            pointer
            icon='location_on'
            color={Colors.DEFAULT}
        />
        &nbsp;
        <S.Content>
            <S.Title>iremos entregar aqui</S.Title>
            <S.Location>R. Gáspar de Lemos, 2461</S.Location>
        </S.Content>
        &nbsp;
        <MaterialIcon
            pointer
            size={30}
            color={Colors.DEFAULT}
            icon='keyboard_arrow_down'
        />
    </S.Container>
);