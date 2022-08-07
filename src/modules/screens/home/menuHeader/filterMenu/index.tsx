/** @name Dependencies */
import {ElementType, memo} from 'react';
/** @name Internal */
import * as S from "./styles";
/** @name External */
import Colors from 'layout/vars/colors';
import {Card, MaterialIcon} from "helpers";

type WayReceivingProps = {
    menuHeaderHeight: number | undefined
}

export const FilterMenu: ElementType = memo(({ menuHeaderHeight }: WayReceivingProps): JSX.Element =>
    <Card style={{
        maxWidth: 280,
        borderRadius: 50,
        height: menuHeaderHeight
    }}>
        <S.ContainerWayReceiving>
            <S.ContentWayReceiving>
                <span style={{
                    color: '#6a6a6a',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <MaterialIcon
                        icon='filter_alt'
                        color={Colors.DEFAULT}
                    />&nbsp;
                    Filtrar cardápio
                </span>
            </S.ContentWayReceiving>
            <MaterialIcon
                size={30}
                color='#b1b1b1'
                icon='keyboard_arrow_down'
            />
        </S.ContainerWayReceiving>
    </Card>
);