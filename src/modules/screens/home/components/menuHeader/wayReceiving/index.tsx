/** @name Dependencies */
import {ElementType, memo} from 'react';
/** @name Internal */
import * as S from "./styles";
/** @name External */
import {Card, MaterialIcon} from "helpers";

type WayReceivingProps = {
    menuHeight: number | undefined
}

export const WayReceiving: ElementType = memo(({ menuHeight }: WayReceivingProps): JSX.Element =>
    <Card style={{
        maxWidth: 280,
        height: menuHeight
    }}>
        <S.Container>
            <S.Content>
                <span style={{color: '#6a6a6a'}}>Receber pedido como</span>
                <span style={{
                    color: '#b1b1b1',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <MaterialIcon icon="two_wheeler"/>&nbsp;Entrega
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