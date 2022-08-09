/** @name Dependencies */
import {ElementType, memo} from 'react';
/** @name Internal */
import * as S from "./styles";
/** @name External */
import Colors from 'layout/vars/colors';
import {Card, MaterialIcon} from "helpers";

type WayReceivingProps = {
    menuHeight: number | undefined
}

export const FilterMenu: ElementType = memo(({ menuHeight }: WayReceivingProps): JSX.Element =>
    <Card style={{
        maxWidth: 280,
        borderRadius: 50,
        height: menuHeight
    }}>
        <S.Container>
            <S.Content>
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
            </S.Content>
            <MaterialIcon
                size={30}
                color='#b1b1b1'
                icon='keyboard_arrow_down'
            />
        </S.Container>
    </Card>
);