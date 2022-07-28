/** @name Dependencies */
import {ElementType, memo} from 'react';
/** @name Internal */
import * as S from "./styles";
/** @name External */
import {Card, MaterialIcon} from "helpers";

type WayReceivingProps = {
    menuHeaderHeight: number | undefined
}

export const WayReceiving: ElementType = memo(({ menuHeaderHeight }: WayReceivingProps): JSX.Element =>
    <Card style={{
        maxWidth: 280,
        height: menuHeaderHeight
    }}>
        <S.ContainerWayReceiving>
            <S.ContentWayReceiving>
                <span style={{color: '#6a6a6a'}}>Receber pedido como</span>
                <span style={{
                    color: '#b1b1b1',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <MaterialIcon icon="two_wheeler"/>&nbsp;Entrega
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